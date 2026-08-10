using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

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

    }
}
