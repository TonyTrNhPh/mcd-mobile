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
        
        CatData nextCatData = target.Data;
        int nextLevel = target.Level + 1;
        GameObject catPrefab = nextCatData.catVisuals[nextLevel].catSkin;


        Cat cat = Instantiate(catPrefab).GetComponent<Cat>();
        cat.Initialize(nextCatData, nextLevel, targetSlot);
    }
}