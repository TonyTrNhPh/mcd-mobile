using System.Collections.Generic;
using UnityEngine;

public class Board : MonoBehaviour
{
    public static Board Instance; // Singleton Pattern && Factory Pattern
    
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
    
    public void SpawnCat()
    {
        Slot currentSlot = GetFirstEmptySlot();
        if (currentSlot != null)
        {
            CatData catData = SpawnManager.Instance.GetRandomCat();
            GameObject catPrefab = catData.GetCatVisuals(0);
            Cat cat = Instantiate(catPrefab).GetComponent<Cat>();
            cat.Initialize(catData, 0,currentSlot);
            return;
        }
        Debug.Log("All slots are occupied. Cannot spawn cat.");
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
