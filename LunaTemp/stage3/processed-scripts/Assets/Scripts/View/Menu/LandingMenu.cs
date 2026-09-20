using UnityEngine;
using UnityEngine.UI;
using View.Manager;

public class LandingMenu : MonoBehaviour
{
    [SerializeField] private Button screenButton;
    [SerializeField] private AudioClip buttonClickSfx;

    private void Awake()
    {
        screenButton.onClick.AddListener(OnScreenClicked);
    }

    public void OnScreenClicked()
    {
        AudioManager.Instance.PlaySound(buttonClickSfx);
        // This loads the TextAsset JSON into LevelData and starts the level.
        if (PlayableManager.Instance != null)
        {
            Debug.Log("Loading playable level from JSON...");
            PlayableManager.Instance.StartPlayableLevel();
            BeginTutorial();
            return;
        }

        // Fallback: just open the play state
        if (GameManager.Instance != null)
        {
            Debug.Log("PlayableManager not found. Changing state to Play.");
            GameManager.Instance.ChangeState(EGameState.Play);
            BeginTutorial();
        }
    }

    private void BeginTutorial()
    {
        if (TutorialManager.Instance != null)
            TutorialManager.Instance.BeginTutorial();
    }
}

public class LandingState : IState
{
    private readonly GameManager _gameManager;
    
    public LandingState(GameManager gameManager)
    {
        _gameManager = gameManager;
    }
    
    public void Enter()
    {
        _gameManager.UIManager.ShowMenu(EMenu.Landing);
    }

    public void Exit()
    {
        _gameManager.UIManager.HideMenu(EMenu.Landing);
    }

    public void Update()
    {
        
    }
}
