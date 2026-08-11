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
        public SpawnManager SpawnManager => SpawnManager.Instance;
        public MergeManager MergeManager => MergeManager.Instance;
        public SpendManager SpendManager => SpendManager.Instance;
        
        public EGameState CurrentState {get; private set;}
        
        //---------- State ----------//
        private StateMachine _stateMachine;
        private LandingState _landingState;
        private HomeState _homeState;
        private PlayState _playState;
        

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
                
                _ => null
            };
            _stateMachine.ChangeState(newState);
        }
    }

    public enum EGameState
    {
        None,
        Landing,
        Home,
        Play,
        Pause,
        Win,
        Lose
    }
}
