using System.Collections.Generic;
using UnityEngine;

public class SpawnManager : MonoBehaviour
{
    public static SpawnManager Instance; // Singleton Pattern

    [SerializeField] private List<CatData> catData;
    
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
        return catData[Random.Range(0, catData.Count)];
    }
}
