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
        Debug.Log("Add button clicked 10");
        Slot slot = GetFirstEmptySlot();
        
        Debug.Log("Add button clicked 11");
        if (slot == null)
        {
            Debug.Log("All slots are occupied. Cannot spawn cat.");
            return false;
        }
        Debug.Log("Add button clicked 12");
        CatData catData = DataManager.Instance.GetRandomCat();
        Debug.Log("Add button clicked 13");
        int upgradeLevel = SaveManager.Instance.GetCatLevel(catData);
        Debug.Log("Add button clicked 14");
        Cat cat = SpawnManager.Instance.SpawnCat(catData, 0, upgradeLevel,slot);// change the upgrade level after SaveManager
        Debug.Log("Add button clicked 15");
        foreach(Slot s in slots)
        {
            Debug.Log($"Slot {s.name} - IsEmpty: {s.IsEmpty}, Type: {s.Type}");
        }
        Debug.Log("Add button clicked 16");
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
        Debug.Log("Add button clicked 8");
        foreach (var slot in slots)
        {
            if (slot.IsEmpty && slot.Type == SlotType.Ground)
                return true;
        }
        Debug.Log("Add button clicked 9");
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
