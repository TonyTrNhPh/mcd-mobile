using System.Collections.Generic;
using UnityEngine;

public class LevelSelection : MonoBehaviour
{
    [Header("Levels")]
    [SerializeField] private LevelButton levelButtonPrefab;
    [SerializeField] private Transform levelButtonParent;
    [SerializeField] private List<LevelNodeData> levelNodes;
    
    private Vector3 dragStartPosition;

    private void Start()
    {
        CreateLevelButtons();
    }

    private void CreateLevelButtons()
    {
        foreach (LevelNodeData node in levelNodes)
        {
            LevelButton button = Instantiate(levelButtonPrefab, levelButtonParent);

            button.transform.localPosition = node.buttonLevelPosition;

            button.Initialize(
                node.levelNumber,
                LevelButtonState.Unlocked,
                node.levelData
            );
        }
    }
}

[System.Serializable]
public class LevelNodeData
{
    public string levelNumber;
    public LevelData levelData;
    public Vector3 buttonLevelPosition;
}