using System;
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

        private void OnEnable()
        {
            GameEvent.OnLevelButtonClicked += HandleLevelStart;
            GameEvent.OnRestartButtonClicked += HandleLevelRestart;
            GameEvent.OnResumeButtonClicked += HandleLevelResume;
            GameEvent.OnReturnButtonClicked += HandleReturnHome;
            GameEvent.OnPauseButtonClicked += HandleLevelPause;
            
            GameEvent.OnLevelWon += HandleLevelWon;
            GameEvent.OnLevelLost += HandleLevelLost;
        }

        private void OnDisable()
        {
            GameEvent.OnLevelButtonClicked -= HandleLevelStart;
            GameEvent.OnRestartButtonClicked -= HandleLevelRestart;
            GameEvent.OnResumeButtonClicked -= HandleLevelResume;
            GameEvent.OnReturnButtonClicked -= HandleReturnHome;
            GameEvent.OnPauseButtonClicked -= HandleLevelPause;
            

            GameEvent.OnLevelWon -= HandleLevelWon;
            GameEvent.OnLevelLost -= HandleLevelLost;
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

        public void HandleLevelStart(LevelData levelData)
        {
            if (!LevelManager.LoadLevel(levelData))
                return;

            ChangeState(EGameState.Play);
        }

        public void HandleLevelRestart()
        {
            if (!LevelManager.RestartLevel())
                return;

            ChangeState(EGameState.Play);
        }

        public void HandleLevelPause()
        {
            ChangeState(EGameState.Pause);
        }

        public void HandleLevelResume()
        {
            ChangeState(EGameState.Play);
        }

        public void HandleReturnHome()
        {
            if (!LevelManager.EndLevel())
                return;

            ChangeState(EGameState.Home);
        }
        
        public void HandleLevelWon(LevelData level)
        {
            if (level == null)
                return;
            
            if (level.bonusGem > 0)
            {
                SaveManager.AddGems(level.bonusGem);
            }
            
            SaveManager.SetLevelComplete(level.levelID);
            string nextLevelID = DataManager.GetNextLevelID(level);
            if (!string.IsNullOrEmpty(nextLevelID))
            {
                SaveManager.SetLevelUnlocked(nextLevelID);
            }

            SaveManager.SaveData();

            ChangeState(EGameState.Win);
        }

        public void HandleLevelLost()
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