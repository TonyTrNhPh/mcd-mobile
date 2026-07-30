using UnityEngine;
using Utility.State;

namespace View.Manager
{
    public class GameManager : MonoBehaviour
    {
        public static GameManager Instance;
        
        [SerializeField] private EGameState initialState = EGameState.Home;

        public EGameState CurrentState { get; private set; }

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
            SetGameState(initialState);
            LevelManager.Instance.StartLevel(0);
        }

        public void SetGameState(EGameState newState)
        {
            if (CurrentState == newState)
            {
                return;
            }

            CurrentState = newState;
            if (UIManager.Instance != null) UIManager.Instance.ApplyGameState(newState);
        }

    }
}
