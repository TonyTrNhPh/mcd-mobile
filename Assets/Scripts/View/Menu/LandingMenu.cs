using UnityEngine;
using UnityEngine.UI;
using View.Manager;

public class LandingMenu : MonoBehaviour
{
    [SerializeField] private Button screenButton;

    private void Awake()
    {
        screenButton.onClick.AddListener(OnScreenClicked);
    }

    public void OnScreenClicked()
    {
        GameManager.Instance.ChangeState(EGameState.Home);
    }
}

public class LandingState : IState
{
    private readonly GameManager _gameManager;
    
    public LandingState(GameManager gameManager)
    {
        _gameManager = gameManager;
    }
    
    public void Enter()
    {
        _gameManager.UIManager.ShowMenu(EMenu.Landing);
    }

    public void Exit()
    {
        _gameManager.UIManager.HideMenu(EMenu.Landing);
    }

    public void Update()
    {
        
    }
}
