using System.Collections.Generic;
using UnityEngine;
using View.Manager;

public class Board : MonoBehaviour
{
    public static Board Instance;
    
    [SerializeField] private List<Slot> slots = new List<Slot>();
    
    private void Awake()
    {
        if (Instance == null)
        {
            Instance = this;
        }
        else
        {
            Destroy(gameObject);
        }
    }

    public void Initialize()
    {
        RemoveAllCatFromSlots();
    }

    private void RemoveAllCatFromSlots()
    {
        foreach (Slot slot in slots)
        {
            slot.RemoveCat();
        }
    }
    
    public bool SpawnRandomCat()
    {
        Slot slot = GetFirstEmptySlot();
        if (slot == null)
        {
            Debug.Log("All slots are occupied. Cannot spawn cat.");
            return false;
        }
        
        CatData catData = DataManager.Instance.GetRandomCat();
        int upgradeLevel = SaveManager.Instance.GetCatLevel(catData);
        Cat cat = SpawnManager.Instance.SpawnCat(catData, 0, upgradeLevel,slot);// change the upgrade level after SaveManager
        
        return cat != null;
    }
    
    public Slot GetFirstEmptySlot()
    {
        foreach (Slot slot in slots)
        {
            if (slot.IsEmpty && slot.Type == SlotType.Ground)
                return slot;
        }
        
        return null;
    }
    
    public bool HasEmptySlot()
    {
        foreach (var slot in slots)
        {
            if (slot.IsEmpty && slot.Type == SlotType.Ground)
                return true;
        }

        return false;
    }
    
    public Slot GetClosestSlot(Vector3 position)
        {
            Slot closest = null;
            float minDistance = float.MaxValue;
    
            foreach (Slot slot in slots)
            {
                float distance = Vector2.Distance(position, slot.transform.position);
    
                if (distance < minDistance)
                {
                    minDistance = distance;
                    closest = slot;
                }
            }
    
            return closest;
        }
    
}
