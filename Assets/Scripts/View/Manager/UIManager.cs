using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using Utility.State;
using View.Manager;

public class UIManager : MonoBehaviour
{
    public static UIManager Instance;
    
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
    
    private void Awake()
    {
        if (Instance == null)
        {
            Instance = this;
        }
        else
        {
            Destroy(gameObject);
        }
    }
    
    private void Start()
    {
        ApplyResolution(Screen.width, Screen.height);

        if (GameManager.Instance != null)
        {
            ApplyGameState(GameManager.Instance.CurrentState);
        }
    }

    public void ApplyGameState(EGameState state)
    {
        
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
            //
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
            //
        }
    }
}
