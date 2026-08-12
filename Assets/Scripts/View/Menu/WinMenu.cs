using TMPro;
using UnityEngine;
using UnityEngine.UI;
using View.Manager;

public class WinMenu : MonoBehaviour
{
    [Header("Texts")]
    [SerializeField] private TextMeshProUGUI bonusGemText;
    
    [Header("Buttons")]
    [SerializeField] private Button homeButton;

    private void Awake()
    {
        homeButton.onClick.AddListener(OnHomeButtonClicked);
    }
    
    private void OnDestroy()
    {
        homeButton.onClick.RemoveListener(OnHomeButtonClicked);
    }

    private void OnHomeButtonClicked()
    {
        GameManager.Instance.ReturnHome();
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