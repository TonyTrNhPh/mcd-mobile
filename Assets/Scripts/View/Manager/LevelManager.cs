using System;
using System.Collections.Generic;
using UnityEngine;
using View.Manager;

public class LevelManager : MonoBehaviour
{
    public static LevelManager Instance;
    public IReadOnlyList<LevelData> LevelDataList => DataManager.Instance.GetAllLevelData();
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
    
    private void OnDestroy()
    {
        if (Barrier.Instance != null)
            Barrier.Instance.OnBarrierDestroy -= HandleBarrierDestroyed;
        
        if (Wave.Instance != null)
            Wave.Instance.OnLevelCompleted -= HandleLevelCompleted;
    }

    private void Initialize()
    {
        if (SpendManager.Instance == null)
            return;

        if (Board.Instance == null || Wave.Instance == null)
            return;

        SpendManager.Instance.Initialize(CurrentLevelData);

        Barrier.Instance.SetLevelData(CurrentLevelData);
        Barrier.Instance.Initialize();
        
        Wave.Instance.SetLevelData(CurrentLevelData);
        Wave.Instance.StartWave();
        
        if (Barrier.Instance != null)
            Barrier.Instance.OnBarrierDestroy += HandleBarrierDestroyed;
            
        if (Wave.Instance != null)
            Wave.Instance.OnLevelCompleted += HandleLevelCompleted;
    }

    public bool LoadLevel(LevelData levelData)
    {
        if (levelData == null)
        {
            Debug.LogError("Cannot load level: LevelData is null.");
            return false;
        }

        CurrentLevelData = levelData;

        Initialize();

        return true;
    }

    private void HandleLevelCompleted()
    {
        Debug.Log("You Win");
        GameManager.Instance.CompleteLevel();
    }

    private void HandleBarrierDestroyed()
    {
        Debug.Log("You Lose");
        GameManager.Instance.FailedLevel();
    }
}