using UnityEngine;

namespace View.Manager
{
    public class GameManager : MonoBehaviour
    {
        public static GameManager Instance;

        public SaveManager SaveManager => SaveManager.Instance;
        public AudioManager AudioManager => AudioManager.Instance;
        public UIManager UIManager => UIManager.Instance;
        public LevelManager LevelManager => LevelManager.Instance;
        public DataManager DataManager => DataManager.Instance;

        public EGameState CurrentState { get; private set; }

        //---------- State ----------//
        private StateMachine _stateMachine;
        private LandingState _landingState;
        private HomeState _homeState;
        private PlayState _playState;
        private PauseState _pauseState;
        private WinState _winState;
        private LoseState _loseState;

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

            _stateMachine = new StateMachine();

            _landingState = new LandingState(this);
            _homeState = new HomeState(this);
            _playState = new PlayState(this);
            _pauseState = new PauseState(this);
            _winState = new WinState(this);
            _loseState = new LoseState(this);
        }

        private void Start()
        {
            ChangeState(EGameState.Landing);
        }

        private void Update()
        {
            _stateMachine.Update();
        }

        public void ChangeState(EGameState state)
        {
            IState newState = state switch
            {
                EGameState.Landing => _landingState,
                EGameState.Home => _homeState,
                EGameState.Play => _playState,
                EGameState.Pause => _pauseState,
                EGameState.Win => _winState,
                EGameState.Lose => _loseState,

                _ => null
            };

            if (newState == null)
            {
                Debug.LogError($"No state found for {state}");
                return;
            }

            CurrentState = state;

            _stateMachine.ChangeState(newState);
        }

        public void StartLevel(LevelData levelData)
        {
            if (!LevelManager.LoadLevel(levelData))
                return;

            ChangeState(EGameState.Play);
        }

        public void RestartLevel()
        {
            if (!LevelManager.RestartLevel())
                return;

            ChangeState(EGameState.Play);
        }

        public void PauseLevel()
        {
            ChangeState(EGameState.Pause);
        }

        public void ResumeLevel()
        {
            //Handle Resume Level - Start Counting
            ChangeState(EGameState.Play);
        }

        public void ReturnHome()
        {
            if (!LevelManager.EndLevel())
                return;

            ChangeState(EGameState.Home);
        }

        public void ReturnHomeWhenWin()
        {
            ChangeState(EGameState.Home);
        }

        public void CompleteLevel(int bonusGem)
        {
            if (bonusGem > 0)
            {
                SaveManager.AddGems(bonusGem);
            }
            SaveManager.SaveData();
            ChangeState(EGameState.Win);
        }

        public void FailedLevel()
        {
            ChangeState(EGameState.Lose);
        }
    }

    public enum EGameState
    {
        Landing,
        Home,
        Play,
        Pause,
        Win,
        Lose
    }
}