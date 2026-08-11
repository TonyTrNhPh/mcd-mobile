using System;
using System.Collections.Generic;
using UnityEngine;

public class LevelManager : MonoBehaviour
{
    public static LevelManager Instance;

    [SerializeField] private List<LevelData> levelDataList;
    
    public IReadOnlyList<LevelData> LevelDataList => levelDataList;
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

    private void Start()
    {

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

    public void CompleteLevel()
    {
        Debug.Log("Level Completed");
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

    public void Win()
    {
        Debug.Log("YOU WIN");
    }

    public void Lose()
    {
        Debug.Log("GAME OVER");
    }
}
