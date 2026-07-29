using UnityEngine;
using Utility.State;

namespace View.Manager
{
    public class GameManager : SingletonMonoBehaviour<GameManager>
    {
        private const string Tag = "GameManager";

        [SerializeField] private EGameState initialState = EGameState.Home;

        public EGameState CurrentState { get; private set; }

        private void Start()
        {
            SetGameState(initialState);
        }

        public void SetGameState(EGameState newState)
        {
            if (CurrentState == newState)
            {
                return;
            }

            CurrentState = newState;
            if (UIManager.I != null) UIManager.I.ApplyGameState(newState);
            else Debug.LogWarning($"{Tag}: UIManager instance not found! Cannot apply game state.");
        }

    }
}
