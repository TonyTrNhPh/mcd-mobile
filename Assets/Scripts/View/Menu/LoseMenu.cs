using UnityEngine;
using UnityEngine.UI;
using View.Manager;

public class LoseMenu : MonoBehaviour
{
    [SerializeField] private Button returnButton;
    [SerializeField] private Button restartButton;

    private void Awake()
    {
        returnButton.onClick.AddListener(HandleReturnButtonClicked);
        restartButton.onClick.AddListener(HandleRestartButtonClicked);
    }

    private void OnDestroy()
    {
        returnButton.onClick.RemoveListener(HandleReturnButtonClicked);
        restartButton.onClick.RemoveListener(HandleRestartButtonClicked);
    }

    private void HandleReturnButtonClicked()
    {
        GameEvent.HandleReturnButtonClicked();
    }

    private void HandleRestartButtonClicked()
    {
        GameEvent.HandleRestartButtonClicked();
    }
}

public class LoseState : IState
{
    private readonly GameManager _gameManager;
    
    public LoseState(GameManager gameManager)
    {
        _gameManager = gameManager;
    }
    
    public void Enter()
    {
        _gameManager.UIManager.ShowMenu(EMenu.Lose);
    }

    public void Exit()
    {
        _gameManager.UIManager.HideMenu(EMenu.Lose);
    }

    public void Update()
    {
        
    }
}
