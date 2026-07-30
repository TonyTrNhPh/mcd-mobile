using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu (menuName = "SO/LevelData")]
public class LevelData : ScriptableObject
{
    [Header("Level Description")]
    public bool isBossLevel = false;
    public int initialCoin = 0;
    public int diamondReward;
    
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