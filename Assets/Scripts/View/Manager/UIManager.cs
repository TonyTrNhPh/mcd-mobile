using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class UIManager : MonoBehaviour
{
    public static UIManager Instance;
    
    [Header("Menus")]
    [SerializeField] private GameObject landingMenu;
    [SerializeField] private GameObject homeMenu;
    [SerializeField] private GameObject playMenu;
    [SerializeField] private GameObject pauseMenu;
    [SerializeField] private GameObject winMenu;
    [SerializeField] private GameObject loseMenu;
    
    
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
    
    
    public void ShowMenu(EMenu menu, object data = null)
    {
        HideAllMenu();
        switch (menu)
        {
            case EMenu.Landing:
                landingMenu.SetActive(true);
                break;
            case EMenu.Home:
                homeMenu.SetActive(true);
                break;
            case EMenu.Play:
                playMenu.SetActive(true);
                break;
            case EMenu.Pause:
                pauseMenu.SetActive(true);
                break;
            case EMenu.Win:
                winMenu.SetActive(true);
                break;
            case EMenu.Lose:
                loseMenu.SetActive(true);
                break;
        }
    }

    public void HideMenu(EMenu menu)
    {
        switch (menu)
        {
            case EMenu.Landing:
                landingMenu.SetActive(false);
                break;
            case EMenu.Home:
                homeMenu.SetActive(false);
                break;
            case EMenu.Play:
                playMenu.SetActive(false);
                break;
            case EMenu.Pause:
                pauseMenu.SetActive(false);
                break;
            case EMenu.Win:
                winMenu.SetActive(false);
                break;
            case EMenu.Lose:
                loseMenu.SetActive(false);
                break;
        }
    }

    public void HideAllMenu()
    {
        landingMenu.SetActive(false);
        homeMenu.SetActive(false);
        playMenu.SetActive(false);
        pauseMenu.SetActive(false);
        winMenu.SetActive(false);
        loseMenu.SetActive(false);
    }
}

public enum EMenu
{
    Landing,
    Home,
    Play,
    Pause,
    Win,
    Lose,
}
