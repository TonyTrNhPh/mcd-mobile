using UnityEngine;

[CreateAssetMenu(menuName = "SO/Permanent Upgrade Data")]
public class PermanentUpgradeData : ScriptableObject
{
    public UpgradeCategory category;
    public PermanentUpgrade[] upgrades;
    
}

[System.Serializable]
public class PermanentUpgrade
{
    [Header("Information")] public string upgradeName;
    [TextArea] public string upgradeDescription;

    [Header("Visuals")] public Sprite upgradeIcon;

    [Header("Upgrade Stats")] public PermanentUpgradeType type;
    public UpgradeStatData[] stats;
}

[System.Serializable]
public class UpgradeStatData
{
    public int price;
    public float effectValue;
}


public enum PermanentUpgradeType
{
    None,
    
    SpikeDamage,
    SpikeDuration,
    SpikeAttackRate,

    TNTDamage,
    TNTSplashRange,

    StrongholdHealth,
    InitialCoin,

    RepairPrice,
    RepairHealth,
    RepairCoolDown,
    
    AddCatPrice,
}

public enum UpgradeCategory
{
    Stronghold,
    Spike,
    TNT
}