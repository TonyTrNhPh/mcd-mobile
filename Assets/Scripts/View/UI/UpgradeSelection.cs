using System.Collections.Generic;
using UnityEngine;

public class UpgradeSelection : MonoBehaviour
{
    [Header("Upgrade Card")]
    [SerializeField] private UpgradeCard upgradeCardPrefab;

    [Header("Category")]
    [SerializeField] private GameObject strongholdCategory;
    [SerializeField] private GameObject spikeCategory;
    [SerializeField] private GameObject tntCategory;

    private IReadOnlyList<PermanentUpgradeData> PermanentUpgradeData =>
        UpgradeManager.Instance.PermanentUpgradeData;

    private void Start()
    {
        CreateUpgradeCards();
    }

    private void CreateUpgradeCards()
    {
        if (PermanentUpgradeData == null ||
            PermanentUpgradeData.Count == 0)
        {
            Debug.LogWarning(
                "UpgradeSelection: No permanent upgrade data found"
            );

            return;
        }

        foreach (PermanentUpgradeData upgradeData in PermanentUpgradeData)
        {
            if (upgradeData == null ||
                upgradeData.upgrades == null)
                continue;

            GameObject targetCategory =
                GetCategoryContainer(upgradeData.category);

            if (targetCategory == null)
            {
                Debug.LogWarning(
                    $"UpgradeSelection: No container found for category " +
                    $"{upgradeData.category}"
                );

                continue;
            }

            foreach (PermanentUpgrade upgrade in upgradeData.upgrades)
            {
                if (upgrade == null)
                    continue;

                UpgradeCard card =
                    Instantiate(
                        upgradeCardPrefab,
                        targetCategory.transform
                    );

                card.Initialize(upgrade);
            }
        }
    }

    private GameObject GetCategoryContainer(UpgradeCategory category)
    {
        switch (category)
        {
            case UpgradeCategory.Stronghold:
                return strongholdCategory;

            case UpgradeCategory.Spike:
                return spikeCategory;

            case UpgradeCategory.TNT:
                return tntCategory;

            default:
                Debug.LogWarning(
                    $"UpgradeSelection: Unknown category {category}"
                );

                return null;
        }
    }
}