using UnityEngine;

[CreateAssetMenu(menuName = "SO/Permanent Upgrade Database")]
public class PermanentUpgradeDatabase : ScriptableObject
{
    public PermanentUpgradeData[] upgrades;
}

[System.Serializable]
public class PermanentUpgradeData
{
    [Header("Information")]
    public string upgradeName;
    [TextArea]public string upgradeDescription;

    [Header("Visuals")]
    public Sprite upgradeIcon;
    
    [Header("Upgrade Stats")]
    public PermanentUpgradeType type;
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
    SpikeDamage,
    SpikeCountdown,
    SpikeMaxQuantity,
    SpikeDuration,

    TNTDamage,
    TNTCountdown,
    TNTMaxQuantity,
    TNTSplashRange,

    //Stronghold upgrade
    StrongholdHealth,
    InitialCoin,
    
    RepairPrice,
    RepairHealth,
    RepairCountdown,
    AddCatPrice,
}



