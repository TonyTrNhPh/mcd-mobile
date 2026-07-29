using UnityEngine;

public class MergeManager : MonoBehaviour
{
    public static MergeManager Instance; // Singleton Pattern
    
    private const int MAX_CAT_LEVEL = 4;

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

    public void MergeCat(Cat current, Cat target)
    {
        if (current.Data != target.Data)
        {
            current.MoveToOriginalSlot();
            return;
        }

        if (current.Level != target.Level || current.Level == MAX_CAT_LEVEL || target.Level == MAX_CAT_LEVEL)
        {
            current.MoveToOriginalSlot();
            return;
        }


        Slot targetSlot = target.CurrentSlot;
        targetSlot.RemoveCat();
        
        Destroy(current.gameObject);
        Destroy(target.gameObject);
        
        CatData catData = target.Data;
        int nextLevel = target.Level + 1;
        GameObject catPrefab = catData.catLevels[nextLevel].skin;


        Cat cat = Instantiate(catPrefab).GetComponent<Cat>();
        cat.Initialize(catData, nextLevel, targetSlot);
    }
}