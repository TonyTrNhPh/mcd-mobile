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
    
    public void ValidateDogData()
    {
        HashSet<string> ids = new HashSet<string>();

        foreach (DogData dogData in allDogData)
        {
            if (dogData == null)
                continue;

            if (string.IsNullOrWhiteSpace(dogData.dogID))
            {
                Debug.LogError(
                    $"DogData '{dogData.name}' has an empty ID."
                );

                continue;
            }

            if (!ids.Add(dogData.dogID))
            {
                Debug.LogError(
                    $"Duplicate DogData ID: '{dogData.dogID}'"
                );
            }
        }
    }
}

