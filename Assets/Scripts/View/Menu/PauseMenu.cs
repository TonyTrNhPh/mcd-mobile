using UnityEngine;
using View.Manager;
using UnityEngine.UI;

public class PauseMenu : MonoBehaviour
{
    [SerializeField] private Button restartButton;
    [SerializeField] private Button resumeButton;
    [SerializeField] private Button returnButton;
    [SerializeField] private Button bgmButton;
    [SerializeField] private Button sfxButton;
    [SerializeField] private Button vibrationButton;
    [SerializeField] private Button helpButton;


    private void Awake()
    {
        restartButton.onClick.AddListener(HandleRestartButtonClicked);
        resumeButton.onClick.AddListener(HandleResumeButtonClicked);
        returnButton.onClick.AddListener(HandleReturnButtonClicked);
        bgmButton.onClick.AddListener(HandleBGMButtonClicked);
        sfxButton.onClick.AddListener(HandleSFXButtonClicked);
        vibrationButton.onClick.AddListener(HandleVibrationButtonClicked);
        helpButton.onClick.AddListener(HandleHelpButtonClicked);
    }
    
    private void OnDestroy()
    {
        restartButton.onClick.RemoveListener(HandleRestartButtonClicked);
        resumeButton.onClick.RemoveListener(HandleResumeButtonClicked);
        returnButton.onClick.RemoveListener(HandleReturnButtonClicked);
        bgmButton.onClick.RemoveListener(HandleBGMButtonClicked);
        sfxButton.onClick.RemoveListener(HandleSFXButtonClicked);
        vibrationButton.onClick.RemoveListener(HandleVibrationButtonClicked);
        helpButton.onClick.RemoveListener(HandleHelpButtonClicked);
    }

    private void HandleRestartButtonClicked()
    {
        GameEvent.HandleRestartButtonClicked();
    }

    private void HandleResumeButtonClicked()
    {
        GameEvent.HandleResumeButtonClicked();
    }

    private void HandleReturnButtonClicked()
    {
        GameEvent.HandleReturnButtonClicked();
    }

    private void HandleBGMButtonClicked()
    {
        Debug.Log("BGM");
    }
    
    private void HandleSFXButtonClicked()
    {
        Debug.Log("SFX");
    }

    private void HandleVibrationButtonClicked()
    {
        Debug.Log("Vibration");
    }

    private void HandleHelpButtonClicked()
    {
        Debug.Log("Help");
        GameEvent.HandleLevelWon(1000);
    }
}

public class PauseState : IState
{
    private readonly GameManager _gameManager;
    
    public PauseState(GameManager gameManager)
    {
        _gameManager = gameManager;
    }
    
    public void Enter()
    {
        _gameManager.UIManager.ShowMenu(EMenu.Pause);
        Time.timeScale = 0;
    }

    public void Exit()
    {
        _gameManager.UIManager.HideMenu(EMenu.Pause);
        Time.timeScale = 1;
    }

    public void Update()
    {
        
    }
}

