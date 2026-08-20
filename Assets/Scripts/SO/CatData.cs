using UnityEngine;

[CreateAssetMenu(menuName = "SO/CatData")]
public class CatData : ScriptableObject
{
    [Header("Information")] public string catID;
    public string catName;
    [TextArea] public string catDescription;

    [Header("Visuals")] public Vector2 baseSize = new Vector2(1, 1);
    public Vector2 offset = new Vector2(0, 0);
    public Sprite baseSprite;
    public RuntimeAnimatorController baseAnimation;
    public CatMergeData[] catVisuals;

    [Header("Stats")] 
    public CatBaseStatData[] catBaseStats;
    public CatUpgradeData[] catUpgrades;

    public string GetCatName() => catName;
    public string GetCatDescription() => catDescription;
    public Vector2 GetBaseSize() => baseSize;
    public Vector2 GetOffset() => offset;
    public Sprite GetBaseSprite() => baseSprite;
    public RuntimeAnimatorController GetBaseAnimation() => baseAnimation;
    public GameObject GetCatVisuals(int mergeLevel) => catVisuals[mergeLevel].catSkin;

    public float GetBaseDamage(int mergeLevel)
    {
        if (mergeLevel < 0 || mergeLevel >= catBaseStats.Length)
        {
            Debug.LogError($"Invalid merge level: {mergeLevel}. It should be between 0 and {catBaseStats.Length - 1}.");
            return 0f;
        }
        
        return catBaseStats[mergeLevel].baseDamage;
    }

    public float GetUpgradeDamage(int upgradeLevel)
    {
        if (upgradeLevel < 0 || upgradeLevel >= catUpgrades.Length)
        {
            Debug.LogError(
                $"Invalid upgrade level: {upgradeLevel}. It should be between 0 and {catUpgrades.Length - 1}.");
            return 0f;
        }

        return catUpgrades[upgradeLevel].upgradeDamage;
    }

    public float GetBaseReloadTime(int mergeLevel)
    {
        if (mergeLevel < 0 || mergeLevel >= catBaseStats.Length)
        {
            Debug.LogError($"Invalid merge level: {mergeLevel}. It should be between 0 and {catBaseStats.Length - 1}.");
            return 0f;
        }
        
        return catBaseStats[mergeLevel].baseReloadTime;
    }

    public float GetUpgradeReloadTime(int upgradeLevel)
    {
        if (upgradeLevel < 0 || upgradeLevel >= catUpgrades.Length)
        {
            Debug.LogError(
                $"Invalid upgrade level: {upgradeLevel}. It should be between 0 and {catUpgrades.Length - 1}.");
            return 0f;
        }

        return catUpgrades[upgradeLevel].upgradeReloadTime;
    }
    
    public float GetBaseRange()
    {
        return catBaseStats[0].baseRange;
    }
    
    public int GetMaxUpgradeLevel()
    {
        return catUpgrades.Length - 1;
    }
    
    public int GetUpgradePrice(int currentUpgradeLevel)
    {
        int nextUpgradeLevel = currentUpgradeLevel + 1;

        if (nextUpgradeLevel >= catUpgrades.Length)
        {
            return 0;
        }

        return catUpgrades[nextUpgradeLevel].upgradePrice;
    }
}

[System.Serializable]
public class CatMergeData
{
    public GameObject catSkin;
}

[System.Serializable]
public class CatUpgradeData
{
    public int upgradePrice;
    public float upgradeDamage = 1;
    public float upgradeReloadTime = 1;
}

[System.Serializable]
public class CatBaseStatData
{
    public float baseDamage = 1f;
    public float baseReloadTime = 1f;
    public float baseRange = 42f;
}