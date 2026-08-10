using System.Collections.Generic;
using UnityEngine;

public class SpawnManager : MonoBehaviour
{
    public static SpawnManager Instance; // Singleton Pattern

    [SerializeField] private List<CatData> mergeableCatData;
    [SerializeField] private List<CatData> allCatData;
    
    public Board board => Board.Instance;

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
}
