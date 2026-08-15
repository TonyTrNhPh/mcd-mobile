using TMPro;
using UnityEngine;
using View.Manager;

public class HomeMenu : MonoBehaviour
{
    [SerializeField] private TextMeshProUGUI gemText;

    private void OnEnable()
    {
        GameEvent.OnGemsChanged += DisplayGemQuantity;

        DisplayGemQuantity(
            SaveManager.Instance.GetGems()
        );
    }

    private void OnDisable()
    {
        GameEvent.OnGemsChanged -= DisplayGemQuantity;
    }

    private void DisplayGemQuantity(int quantity)
    {
        gemText.text = quantity.ToString();
    }
}

public class HomeState: IState
{
    private readonly GameManager _gameManager;
    
    public HomeState(GameManager gameManager)
    {
        _gameManager = gameManager;
    }
    
    public void Enter()
    {
        _gameManager.UIManager.ShowMenu(EMenu.Home);
    }

    public void Exit()
    {
        _gameManager.UIManager.HideMenu(EMenu.Home);
    }

    public void Update()
    {
        
    }
}
