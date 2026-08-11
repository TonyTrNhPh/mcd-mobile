using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu (menuName = "SO/LevelData")]
public class LevelData : ScriptableObject
{
    [Header("Level Title")] 
    public int levelID;
    public string levelName;
    public bool isBossLevel = false;
    
    [Header("Level Reward")]
    public int bonusGem = 10;
    
    [Header("Stronghold Configuration")]
    public int initialCoin = 0;
    
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
    public float startDelay;
    public float betweenEachGroup;
    public List<GroupOfEnemy> groupsOfEnemies;
}

[System.Serializable]
public class GroupOfEnemy
{
    public float betweenEachEnemy;
    public List<EnemyData>  enemyData;
}

[System.Serializable]
public class EnemyData
{
    public DogData dogData;
    public int numberOfDogs = 0;
}