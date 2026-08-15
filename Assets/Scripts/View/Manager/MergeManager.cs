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
        Slot targetSlot = target.CurrentSlot;

        targetSlot.RemoveCat();

        CatData nextCatData = target.Data;
        int nextMergeLevel = target.MergeLevel + 1;
        int upgradeLevel = target.UpgradeLevel;

        Cat mergedCat = SpawnManager.Instance.SpawnCat(
            nextCatData,
            nextMergeLevel,
            upgradeLevel,
            targetSlot
        );

        if (mergedCat == null)
        {
            Debug.LogError("Failed to spawn merged cat.");
            return;
        }

        Destroy(current.gameObject);
        Destroy(target.gameObject);
    }
}