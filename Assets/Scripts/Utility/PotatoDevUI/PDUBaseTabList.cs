using UnityEngine;
using System.Collections.Generic;

namespace PotatoDevUI
{
    public class PDUBaseTabList : MonoBehaviour
    {
        [SerializeField] private List<PDUBaseTabButton> tabButtons = new List<PDUBaseTabButton>();
        [SerializeField] private List<PDUBaseTabContainer> tabContainers = new List<PDUBaseTabContainer>();
        [SerializeField] private int defaultTabIndex = 0;

        private int currentActiveTabIndex = -1;

        private void Start()
        {
            Initialize(defaultTabIndex);
        }

        private void Initialize(int tabIndex)
        {
            for (int i = 0; i < tabButtons.Count; i++)
            {
                tabButtons[i].Initialize(this, i);
            }

            foreach (PDUBaseTabContainer tabContainer in tabContainers)
            {
                tabContainer.Initialize();
            }

            SelectTab(tabIndex);
        }

        public void SelectTab(int tabIndex)
        {
            if (tabIndex < 0 || tabIndex >= tabButtons.Count || tabIndex >= tabContainers.Count)
            {
                Debug.LogWarning($"Invalid tab index: {tabIndex}");
                return;
            }

            if (currentActiveTabIndex == tabIndex)
                return;

            if (currentActiveTabIndex >= 0)
            {
                tabButtons[currentActiveTabIndex].SetState(TabButtonState.Inactive);
                tabContainers[currentActiveTabIndex].SetState(TabContainerState.Inactive);
            }

            currentActiveTabIndex = tabIndex;
            tabButtons[currentActiveTabIndex].SetState(TabButtonState.Active);
            tabContainers[currentActiveTabIndex].SetState(TabContainerState.Active);
        }
    }
}
