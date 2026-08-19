using System.Collections.Generic;
using UnityEngine;
using View.Manager;

public class UpgradeManager : MonoBehaviour
{
    public static UpgradeManager Instance;

    public IReadOnlyList<PermanentUpgradeData> PermanentUpgradeData =>
        DataManager.Instance.GetAllPermanentUpgradeData();

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

    public int GetCatUpgradeLevel(CatData cat)
    {
        return SaveManager.Instance.GetCatLevel(cat);
    }

    public int GetCatUpgradePrice(CatData cat)
    {
        int level = SaveManager.Instance.GetCatLevel(cat);
        if (level >= cat.GetMaxUpgradeLevel())
            return 0;

        return cat.GetUpgradePrice(level);
    }

    public bool TryUpgradeCat(CatData cat)
    {
        int currentLevel = GetCatUpgradeLevel(cat);
        int maxLevel = cat.GetMaxUpgradeLevel();

        if (currentLevel >= maxLevel)
            return false;

        int price = cat.GetUpgradePrice(currentLevel);

        if (!SaveManager.Instance.SpendGems(price))
            return false;

        int newLevel = currentLevel + 1;

        SaveManager.Instance.SetCatLevel(cat, newLevel);
        SaveManager.Instance.SaveData();

        GameEvent.HandleGemsChanged(SaveManager.Instance.GetGems());

        return true;
    }

    public int GetUpgradeLevelByType(PermanentUpgradeType type)
    {
        return SaveManager.Instance.GetUpgradeLevelByType(type);
    }

    public float GetUpgradeEffectValue(PermanentUpgradeType type)
    {
        int upgradeLevel = GetUpgradeLevelByType(type);

        foreach (PermanentUpgradeData data in PermanentUpgradeData)
        {
            foreach (PermanentUpgrade upgrade in data.upgrades)
            {
                if (upgrade.type != type)
                    continue;

                if (upgradeLevel < 0 ||
                    upgradeLevel >= upgrade.stats.Length)
                {
                    Debug.LogWarning(
                        $"Invalid upgrade level {upgradeLevel} for {type}"
                    );

                    return 0f;
                }

                Debug.Log(
                    $"Get upgrade effect value for {type} at level {upgradeLevel}, value = {upgrade.stats[upgradeLevel].effectValue}");
                return upgrade.stats[upgradeLevel].effectValue;
            }
        }

        Debug.LogWarning($"Permanent upgrade not found: {type}");
        return 0f;
    }

    public bool TryUpgrade(PermanentUpgradeType type)
    {
        PermanentUpgrade upgrade = FindUpgrade(type);

        if (upgrade == null)
            return false;

        int currentLevel = GetUpgradeLevelByType(type);
        int nextLevel = currentLevel + 1;

        if (nextLevel >= upgrade.stats.Length)
            return false;

        int price = upgrade.stats[nextLevel].price;

        if (!SaveManager.Instance.SpendGems(price))
            return false;

        SaveManager.Instance.SetUpgradeLevelByType(
            type,
            nextLevel
        );

        SaveManager.Instance.SaveData();
        GameEvent.HandleGemsChanged(SaveManager.Instance.GetGems());

        return true;
    }

    private PermanentUpgrade FindUpgrade(PermanentUpgradeType type)
    {
        foreach (PermanentUpgradeData data in PermanentUpgradeData)
        {
            if (data == null || data.upgrades == null)
                continue;

            foreach (PermanentUpgrade upgrade in data.upgrades)
            {
                if (upgrade != null && upgrade.type == type)
                    return upgrade;
            }
        }

        return null;
    }
}