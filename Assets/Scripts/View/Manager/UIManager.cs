using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using Utility.State;
using View.Manager;

public class UIManager : PersistenceMonoBehaviour<UIManager>
{
    private const string Tag = "UIManager";
    [SerializeField] private List<CanvasScaler>  canvasScalers;
    [Header("Menus")]
    [SerializeField] private GameObject loadingMenu;
    [SerializeField] private GameObject homeMenu;
    [SerializeField] private GameObject inGameMenu;
    [SerializeField] private GameObject pausedMenu;
    [SerializeField] private GameObject gameOverMenu;
    
    [Header("Popup")]
    [SerializeField] private GameObject winPopup;
    [SerializeField] private GameObject losePopup;
    
    
    private void Start()
    {
        ApplyResolution(Screen.width, Screen.height);

        if (GameManager.I != null)
        {
            ApplyGameState(GameManager.I.CurrentState);
        }
    }

    public void ApplyGameState(EGameState state)
    {
        SetActiveSafe(loadingMenu, state == EGameState.Loading);
        SetActiveSafe(homeMenu, state == EGameState.Home);
        SetActiveSafe(inGameMenu, state == EGameState.InGame);
        SetActiveSafe(pausedMenu, state == EGameState.Paused);
        SetActiveSafe(gameOverMenu, state == EGameState.GameOver);
    }
    
    private void ApplyResolution(int width, int height)
    {
        if (canvasScalers != null)
        {
            foreach (CanvasScaler canvasScaler in canvasScalers)
            {
                if (canvasScaler != null)
                {
                    canvasScaler.referenceResolution = new Vector2(width, height);
                }
            }
        }
        else
        {
            Debug.LogWarning($"{Tag}: canvasScalers is null!");
        }
    }

    private void SetActiveSafe(GameObject target, bool isActive)
    {
        if (target != null)
        {
            target.SetActive(isActive);
        }
        else
        {
            Debug.LogWarning($"{Tag}: target is null!"); 
        }
    }
}
