using System.Collections.Generic;
using UnityEngine;

public class DataManager : MonoBehaviour
{
    public static DataManager Instance;
    
    [Header("Cat Data")]
    [SerializeField] private List<CatData> mergeableCatData;
    [SerializeField] private List<CatData> allCatData;
    
    [Header("Dog Data")]
    [SerializeField] private List<DogData> allDogData;
    
    [Header("Boss Data")]
    [SerializeField] private List<BossData> bossData;
    
    [Header("Level Data")]
    [SerializeField] private List<LevelData> levelData;
    
    [Header("Permanent Upgrade Data")]
    [SerializeField] private List<PermanentUpgradeData> permanentUpgradeData;
    
    [Header("VFX Data")]
    [SerializeField] private List<Projectile> bulletPrefabs;

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

    public CatData GetRandomCat()
    {
        return mergeableCatData[Random.Range(0, mergeableCatData.Count)];
    }

    public List<CatData> GetAllCatData()
    {
        allCatData.Reverse();
        return allCatData;
    }

    public List<LevelData> GetAllLevelData()
    {
        return levelData;
    }

    public string GetNextLevelID(LevelData current)
    {
        if (current == null)
            return string.Empty;

        int currentIndex = -1;

        for (int i = 0; i < levelData.Count; i++)
        {
            if (levelData[i] == current)
            {
                currentIndex = i;
                break;
            }
        }

        if (currentIndex < 0)
            return string.Empty;

        int nextIndex = currentIndex + 1;

        if (nextIndex >= levelData.Count)
            return string.Empty;

        LevelData nextLevel = levelData[nextIndex];

        if (nextLevel == null)
            return string.Empty;

        return nextLevel.levelID;
    }

    public Projectile GetRandomBulletPrefab()
    {
        return bulletPrefabs[Random.Range(0, bulletPrefabs.Count)];
    }
    
    public List<PermanentUpgradeData> GetAllPermanentUpgradeData()
    {
        return permanentUpgradeData;
    }
    
    public DogData GetDogData(string id)
    {
        foreach (DogData dogData in allDogData)
        {
            if (dogData == null)
                continue;

            if (dogData.dogID == id)
                return dogData;
        }

        return null;
    }
    
}

