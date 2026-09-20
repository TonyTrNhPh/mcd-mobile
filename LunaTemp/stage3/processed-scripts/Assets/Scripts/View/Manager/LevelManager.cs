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
        
    }

    private void Initialize(bool startLevel = true)
    {
        if (SpendManager.Instance == null || SpawnManager.Instance == null)
            return;

        if (Board.Instance == null || Wave.Instance == null || Barrier.Instance == null)
            return;

        SpawnManager.Instance.Initialize();
        SpendManager.Instance.Initialize();

        Board.Instance.Initialize();

        Barrier.Instance.Initialize();
        if (startLevel)
            Wave.Instance.Initialize(CurrentLevelData);
    }

    public bool LoadLevel(LevelData levelData, bool startLevel = true)
    {
        if (levelData == null)
        {
            Debug.LogError("Cannot load level: LevelData is null.");
            return false;
        }

        CurrentLevelData = levelData;

        Initialize(startLevel);

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

    public bool StartLevel()
    {
        if (CurrentLevelData == null)
        {
            Debug.LogError("Cannot start level: LevelData is null.");
            return false;
        }

        if (Wave.Instance == null)
        {
            Debug.LogError("Cannot start level: Wave is missing.");
            return false;
        }

        Wave.Instance.Initialize(CurrentLevelData);
        return true;
    }

    public bool EndLevel()
    {
        if (CurrentLevelData == null)
        {
            Debug.LogError("Cannot end level: LevelData is null.");
            return false;
        }

        HandleEndLevel();

        return true;
    }


    private void HandleEndLevel()
    {
        Debug.Log("Level Ended");
        CurrentLevelData = null;

        if (SpendManager.Instance == null || SpawnManager.Instance == null)
            return;

        if (Board.Instance == null || Wave.Instance == null || Barrier.Instance == null)
            return;

        SpawnManager.Instance.Initialize();
        
        Barrier.Instance.Initialize();
        Wave.Instance.Initialize(CurrentLevelData);
        
        Board.Instance.Initialize();
    }
}