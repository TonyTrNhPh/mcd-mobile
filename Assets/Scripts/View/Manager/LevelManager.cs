using System;
using System.Collections.Generic;
using UnityEngine;
using View.Manager;

public class LevelManager : MonoBehaviour
{
    public static LevelManager Instance;
    public IReadOnlyList<LevelData> LevelDataList => DataManager.Instance.GetAllLevelData();
    public LevelData CurrentLevelData { get; private set; }

    public Board Board => Board.Instance;
    public Wave Wave => Wave.Instance;
    public Barrier Barrier => Barrier.Instance;

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

    private void OnEnable()
    {
        // Barrier.OnBarrierDestroy += FailedLevel;
        // Wave.OnLastEnemyDeath += CompleteLevel;
    }

    private void OnDisable()
    {
        // Barrier.OnBarrierDestroy -= FailedLevel;
        // Wave.OnLastEnemyDeath -= CompleteLevel;
    }

    private void Initialize()
    {
        if (SpendManager.Instance == null)
            return;

        if (Board.Instance == null || Wave.Instance == null)
            return;

        SpendManager.Instance.Initialize(CurrentLevelData);

        Wave.Instance.SetLevelData(CurrentLevelData);
        Wave.Instance.StartWave();
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

    private void CompleteLevel()
    {
        GameManager.Instance.CompleteLevel();
    }

    private void FailedLevel()
    {
        GameManager.Instance.FailedLevel();
    }
}