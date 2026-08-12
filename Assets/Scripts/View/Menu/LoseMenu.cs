using UnityEngine;
using UnityEngine.UI;
using View.Manager;

public class LoseMenu : MonoBehaviour
{
    [SerializeField] private Button homeButton;
    [SerializeField] private Button restartButton;

    private void Awake()
    {
        homeButton.onClick.AddListener(OnHomeButtonClicked);
        restartButton.onClick.AddListener(OnRestartButtonClicked);
    }

    private void OnDestroy()
    {
        homeButton.onClick.RemoveListener(OnHomeButtonClicked);
        restartButton.onClick.RemoveListener(OnRestartButtonClicked);
    }

    private void OnHomeButtonClicked()
    {
        GameManager.Instance.ReturnHome();
    }

    private void OnRestartButtonClicked()
    {
        GameManager.Instance.RestartLevel();
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
