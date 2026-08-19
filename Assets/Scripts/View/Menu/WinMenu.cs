using System;
using TMPro;
using UnityEngine;
using UnityEngine.UI;
using View.Manager;

public class WinMenu : MonoBehaviour
{
    [Header("Texts")] [SerializeField] private TextMeshProUGUI bonusGemText;

    [Header("Buttons")] [SerializeField] private Button returnButton;

    private void Awake()
    {
        returnButton.onClick.AddListener(HandleReturnButtonClicked);
        GameEvent.OnLevelWon += DisplayBonusGem;
    }
    
    private void OnDestroy()
    {
        returnButton.onClick.RemoveListener(HandleReturnButtonClicked);
        GameEvent.OnLevelWon -= DisplayBonusGem;
    }
    
    private void DisplayBonusGem(LevelData levelData)
    {
        bonusGemText.text = levelData.bonusGem.ToString();
    }
    
    private void HandleReturnButtonClicked()
    {
        GameEvent.HandleReturnButtonClicked();
    }
}

public class WinState : IState
{
    private readonly GameManager _gameManager;

    public WinState(GameManager gameManager)
    {
        _gameManager = gameManager;
    }

    public void Enter()
    {
        _gameManager.UIManager.ShowMenu(EMenu.Win);
    }

    public void Exit()
    {
        _gameManager.UIManager.HideMenu(EMenu.Win);
    }

    public void Update()
    {
    }
}