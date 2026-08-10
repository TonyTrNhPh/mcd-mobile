using System;
using System.Collections.Generic;
using UnityEngine;

public class LevelManager : MonoBehaviour
{
    public static LevelManager Instance;

    [SerializeField] private List<LevelData> levelDataList;
    
    public LevelData CurrentLevelData { get; private set; }
    
    
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
    
    public void StartLevel(int levelIndex)
    {
        CurrentLevelData = levelDataList[levelIndex];
        if (CurrentLevelData == null)
        {
            Debug.Log("LevelData is null");
            return;
        }
        Initialize();
    }

    public void CompleteLevel()
    {
        
    }

    private void Initialize()
    {
        if (SpendManager.Instance == null)
            return;
        
        if (Board.Instance == null || Wave.Instance == null)
            return;

        SpendManager.Instance.ResetAndSetCoins(CurrentLevelData.initialCoin);
        Wave.Instance.SetLevelData(CurrentLevelData);
        Wave.Instance.StartWave();
    }

    public void Win()
    {
        Debug.Log("YOU WIN");
    }

    public void Lose()
    {
        Debug.Log("GAME OVER");
    }
}
