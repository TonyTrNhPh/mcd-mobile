using System;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class UIManager : MonoBehaviour
{
    public static UIManager Instance;
    
    [Header("References")]
    [SerializeField] private Camera mainCamera;
    
    [Header("Menus")]
    [SerializeField] private GameObject landingMenu;
    [SerializeField] private GameObject playMenu;
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

    private void Start()
    {
        EnsureAllMenu();
        
        UpdateOrthographicSize();
    }
    
    private void UpdateOrthographicSize()
    {
        if (mainCamera == null)
        {
            Debug.LogWarning("Main camera is not assigned in UIManager.");
            return;
        }

        float screenHeight = Screen.height;
        Debug.Log($"Screen Height: {screenHeight}");
        float screenWidth = Screen.width;
        Debug.Log($"Screen Width: {screenWidth}");

        float targetAspect = (28.88f * screenHeight/screenWidth) + 0.58f;
        Debug.Log($"Target Aspect: {targetAspect}");

        mainCamera.orthographicSize = targetAspect;
    }

    public void ShowMenu(EMenu menu, object data = null)
    {
        HideAllMenu();
        switch (menu)
        {
            case EMenu.Landing:
                landingMenu.SetActive(true);
                break;
            case EMenu.Play:
                playMenu.SetActive(true);
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
            case EMenu.Play:
                playMenu.SetActive(false);
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
        playMenu.SetActive(false);
        winMenu.SetActive(false);
        loseMenu.SetActive(false);
    }

    public void EnsureAllMenu()
    {
        landingMenu.SetActive(true);
        playMenu.SetActive(true);
        winMenu.SetActive(true);
        loseMenu.SetActive(true);
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
