using UnityEngine;

public class MergeManager : MonoBehaviour
{
    public static MergeManager Instance; // Singleton Pattern
    
    private const int MAX_CAT_MERGE_LEVEL = 4;

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

        if (current.MergeLevel != target.MergeLevel || current.MergeLevel == MAX_CAT_MERGE_LEVEL || target.MergeLevel == MAX_CAT_MERGE_LEVEL)
        {
            current.MoveToOriginalSlot();
            return;
        }


        Slot targetSlot = target.CurrentSlot;
        targetSlot.RemoveCat();
        
        Destroy(current.gameObject);
        Destroy(target.gameObject);
        
        CatData nextCatData = target.Data;
        int nextMergeLevel = target.MergeLevel + 1;
        int upgradeLevel = target.UpgradeLevel;
        
        GameObject catPrefab = nextCatData.catVisuals[nextMergeLevel].catSkin;


        Cat cat = Instantiate(catPrefab).GetComponent<Cat>();
        cat.Initialize(nextCatData, nextMergeLevel, upgradeLevel ,targetSlot);
    }
}