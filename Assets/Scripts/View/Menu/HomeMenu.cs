using UnityEngine;
using View.Manager;

public class HomeMenu : MonoBehaviour
{

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
