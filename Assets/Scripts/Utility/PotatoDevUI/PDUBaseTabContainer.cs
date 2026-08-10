using UnityEngine;

namespace PotatoDevUI
{
    public class PDUBaseTabContainer : MonoBehaviour
    {
        public TabContainerState CurrentState { get; private set; }

        public void Initialize()
        {
            SetState(TabContainerState.Inactive);
        }

        public void SetState(TabContainerState newState)
        {
            CurrentState = newState;
            UpdateContainerState(newState);
        }

        private void UpdateContainerState(TabContainerState newState)
        {
            switch (newState)
            {
                case TabContainerState.Active:
                    gameObject.SetActive(true);
                    break;
                case TabContainerState.Inactive:
                    gameObject.SetActive(false);
                    break;
            }
        }
    }

    public enum TabContainerState
    {
        Active,
        Inactive
    }
}