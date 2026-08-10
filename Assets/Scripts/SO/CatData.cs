using UnityEngine;

[CreateAssetMenu(menuName = "SO/CatData")]
public class CatData : ScriptableObject
{
    [Header("Information")]
    public string catName;
    [TextArea]public string catDescription;
    
    [Header("Visuals")]
    public Vector2 baseSize =  new Vector2(1, 1);
    public Vector2 offset = new Vector2(0, 0);
    public Sprite baseSprite;
    public RuntimeAnimatorController baseAnimation;
    public CatMergeData[] catVisuals;
    
    [Header("Upgrade Stats")]
    [Tooltip("Stats for each upgrade level")]
    public CatUpgradeData[] catUpgrades;
    
    public string GetCatName() => catName;
    public string GetCatDescription() => catDescription;
    public Vector2 GetBaseSize() => baseSize;
    public Vector2 GetOffset() => offset;
    public Sprite GetBaseSprite() => baseSprite;
    public RuntimeAnimatorController GetBaseAnimation() => baseAnimation;
    public GameObject GetCatVisuals(int mergeLevel) => catVisuals[mergeLevel].catSkin;
    public float GetReloadTime(int mergeLevel, int upgradeLevel)
    {
        if (mergeLevel < 0 || mergeLevel >= catVisuals.Length)
        {
            Debug.LogError($"Invalid merge level: {mergeLevel}. It should be between 0 and {catVisuals.Length - 1}.");
            return 0f;
        }

        if (upgradeLevel < 0 || upgradeLevel >= catUpgrades.Length)
        {
            Debug.LogError($"Invalid upgrade level: {upgradeLevel}. It should be between 0 and {catUpgrades.Length - 1}.");
            return 0f;
        }

        return catUpgrades[upgradeLevel].catStats[mergeLevel].reloadTime;
    }
    public float GetFireRange(int mergeLevel, int upgradeLevel)
    {
        if (mergeLevel < 0 || mergeLevel >= catVisuals.Length)
        {
            Debug.LogError($"Invalid merge level: {mergeLevel}. It should be between 0 and {catVisuals.Length - 1}.");
            return 0f;
        }

        if (upgradeLevel < 0 || upgradeLevel >= catUpgrades.Length)
        {
            Debug.LogError($"Invalid upgrade level: {upgradeLevel}. It should be between 0 and {catUpgrades.Length - 1}.");
            return 0f;
        }

        return catUpgrades[upgradeLevel].catStats[mergeLevel].fireRange;
    }
    public float GetDamage(int mergeLevel, int upgradeLevel)
    {
        if (mergeLevel < 0 || mergeLevel >= catVisuals.Length)
        {
            Debug.LogError($"Invalid merge level: {mergeLevel}. It should be between 0 and {catVisuals.Length - 1}.");
            return 0f;
        }

        if (upgradeLevel < 0 || upgradeLevel >= catUpgrades.Length)
        {
            Debug.LogError($"Invalid upgrade level: {upgradeLevel}. It should be between 0 and {catUpgrades.Length - 1}.");
            return 0f;
        }

        return catUpgrades[upgradeLevel].catStats[mergeLevel].attackDamage;
    }
    public int GetMaxUpgradeLevel() => catUpgrades.Length;
    public int GetUpgradePrice(int upgradeLevel) => catUpgrades.Length > 0 ? catUpgrades[upgradeLevel].upgradePrice : 0;
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
    [Tooltip("Stats for each merge level")]
    public CatStatData[] catStats;
}

[System.Serializable]
public class CatStatData
{
    public float attackDamage = 1;
    public float reloadTime = 1;
    public float fireRange = 42;
}