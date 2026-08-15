using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu (menuName = "SO/LevelData")]
public class LevelData : ScriptableObject
{
    public TextAsset jsonFile;
    
    [Header("Level Title")] 
    public string levelID;
    public string levelName;
    public bool isBossLevel = false;
    
    [Header("Level Reward")]
    public int bonusGem = 10;
    
    [Header("Stronghold Configuration")]
    public int initialCoin = 0;
    public float barrierMaxHealth = 0;
    
    [Header("Expense Configuration")] 
    public int baseAddCatCost = 100;
    public float addCatMultiplier = 1.5f;
    
    public int baseRepairBarrierCost = 200;
    public float repairBarrierMultiplier = 2f;
    
    [Header("Wave Configuration")]
    public List<WaveData> waves;
}

[System.Serializable]
public class WaveData
{
    public float nextWaveDelay = 3f;
    public List<SpawnEvent> timeline;
}

[System.Serializable]
public class SpawnEvent
{
    public float time;
    public DogData dogData;
}

[System.Serializable]
public class LevelWaveJson
{
    public List<WaveJson> waves;
}

[System.Serializable]
public class WaveJson
{
    public float nextWaveDelay;
    public List<SpawnEventJson> timeline;
}

[System.Serializable]
public class SpawnEventJson
{
    public float time;
    public string dogID;
}