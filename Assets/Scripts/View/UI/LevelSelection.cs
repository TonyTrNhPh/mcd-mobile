using System.Collections.Generic;
using UnityEngine;
using View.Manager;

public class LevelSelection : MonoBehaviour
{
    [Header("Levels")]
    [SerializeField] private LevelButton levelButtonPrefab;
    [SerializeField] private Transform levelButtonParent;
    
    private IReadOnlyList<LevelData> LevelDataList => DataManager.Instance.GetAllLevelData();
    
    private static readonly Vector2[] NODE_CONFIG =
    {
        new Vector2(-3345, 20),
        new Vector2(-3130, -110),
        new Vector2(-2980, 180),
        new Vector2(-2660, 180),
        new Vector2(-2480, -110),
        new Vector2(-2280, 180),
        new Vector2(-1960, 180),
        new Vector2(-1770, -110),
        new Vector2(-1580, 180),
        new Vector2(-1250, 80),
        new Vector2(-920, -80),
        new Vector2(-720, 220),
        new Vector2(-400, -110),
        new Vector2(-190, 180),
        new Vector2(130, 180),
        new Vector2(170, -120),
        new Vector2(495, 70),
        new Vector2(845, 70),
        new Vector2(1000, -130),
        new Vector2(1230, 180),
        new Vector2(1543, -20),
        new Vector2(1850, -120),
        new Vector2(2060, 200),
        new Vector2(2240, 0),
        new Vector2(2520, -130),
        new Vector2(2750, 200),
        new Vector2(3000, -20),
        new Vector2(3360, -20)
    };
    
    private Vector3 dragStartPosition;

    private void Start()
    {
        CreateLevelButtons();
    }

    private void CreateLevelButtons()
    {
        for (int i = 0; i < NODE_CONFIG.Length; i++)
        {
            LevelData levelData = null;
            ELevelButtonState state = ELevelButtonState.Locked;
            
            if (i < LevelDataList.Count && LevelDataList[i] != null)
            {
                state = ELevelButtonState.Unlocked;
                levelData = LevelDataList[i];
            }
            
            LevelButton button = Instantiate(levelButtonPrefab, levelButtonParent);
            button.transform.localPosition = NODE_CONFIG[i];
            button.Initialize(state, levelData);
        }
    }
}

