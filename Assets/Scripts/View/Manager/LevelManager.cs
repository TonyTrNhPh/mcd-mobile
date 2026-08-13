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
        if (SpendManager.Instance == null || SpawnManager.Instance == null)
            return;

        if (Board.Instance == null || Wave.Instance == null || Barrier.Instance == null)
            return;

        SpawnManager.Instance.Initialize();

        SpendManager.Instance.Initialize(CurrentLevelData);

        Board.Instance.Initialize();

        Barrier.Instance.Initialize(CurrentLevelData);
        Barrier.Instance.OnBarrierDestroy += HandleBarrierDestroyed;

        Wave.Instance.Initialize(CurrentLevelData);
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

    public bool RestartLevel()
    {
        if (CurrentLevelData == null)
        {
            Debug.LogError("Cannot restart level: LevelData is null.");
            return false;
        }
        
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