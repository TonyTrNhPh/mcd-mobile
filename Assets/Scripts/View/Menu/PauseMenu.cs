using UnityEngine;
using View.Manager;
using UnityEngine.UI;

public class PauseMenu : MonoBehaviour
{
    [SerializeField] private Button restartButton;
    [SerializeField] private Button resumeButton;
    [SerializeField] private Button homeButton;
    [SerializeField] private Button bgmButton;
    [SerializeField] private Button sfxButton;
    [SerializeField] private Button vibrationButton;
    [SerializeField] private Button helpButton;


    private void Awake()
    {
        restartButton.onClick.AddListener(OnRestartClicked);
        resumeButton.onClick.AddListener(OnResumeClicked);
        homeButton.onClick.AddListener(OnHomeClicked);
        bgmButton.onClick.AddListener(OnBGMClicked);
        sfxButton.onClick.AddListener(OnSFXClicked);
        vibrationButton.onClick.AddListener(OnVibrationClicked);
        helpButton.onClick.AddListener(OnHelpClicked);
    }
    
    private void OnDestroy()
    {
        restartButton.onClick.RemoveListener(OnRestartClicked);
        resumeButton.onClick.RemoveListener(OnResumeClicked);
        homeButton.onClick.RemoveListener(OnHomeClicked);
        bgmButton.onClick.RemoveListener(OnBGMClicked);
        sfxButton.onClick.RemoveListener(OnSFXClicked);
        vibrationButton.onClick.RemoveListener(OnVibrationClicked);
        helpButton.onClick.RemoveListener(OnHelpClicked);
    }

    private void OnRestartClicked()
    {
        GameManager.Instance.RestartLevel();
    }

    private void OnResumeClicked()
    {
        GameManager.Instance.ResumeLevel();
    }

    private void OnHomeClicked()
    {
        GameManager.Instance.ReturnHome();
    }

    private void OnBGMClicked()
    {
        Debug.Log("BGM");
    }
    
    private void OnSFXClicked()
    {
        Debug.Log("SFX");
    }

    private void OnVibrationClicked()
    {
        Debug.Log("Vibration");
    }

    private void OnHelpClicked()
    {
        Debug.Log("Help");
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

