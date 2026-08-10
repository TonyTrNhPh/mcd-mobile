using System;
using UnityEngine;
using UnityEngine.UI;

namespace PotatoDevUI
{
    public class PDUBaseTabButton : MonoBehaviour
    {
        [Header("Active State")]
        [SerializeField] private Sprite activeSprite;
        [SerializeField] private Image activeBorder;
        
        [Header("Inactive State")]
        [SerializeField] private Sprite inactiveSprite;
        [SerializeField] private Image inactiveBorder;
        

        public TabButtonState CurrentState { get; private set; }

        //---------- UI ----------//
        private Image btnImage;
        private Button button;
        private PDUBaseTabList _parentPduBaseTabList;
        private int tabIndex;

        private void Awake()
        {
            btnImage = GetComponent<Image>();
            button = GetComponent<Button>();
            CurrentState = TabButtonState.Inactive;
        }

        private void Start()
        {
            // Subscribe to button click
            if (button != null)
            {
                button.onClick.AddListener(OnButtonClicked);
            }
        }

        public void Initialize(PDUBaseTabList pduBaseTabList, int index)
        {
            _parentPduBaseTabList = pduBaseTabList;
            tabIndex = index;
        }

        private void OnButtonClicked()
        {
            if (_parentPduBaseTabList != null)
            {
                _parentPduBaseTabList.SelectTab(tabIndex);
            }
        }

        public void SetState(TabButtonState newState)
        {
            CurrentState = newState;
            UpdateButtonState(newState);
        }

        private void UpdateButtonState(TabButtonState newState)
        {
            switch (newState)
            {
                case TabButtonState.Active:
                    ActiveState();
                    break;
                case TabButtonState.Inactive:
                    InactiveState();
                    break;
            }
        }
        
        private void ActiveState()
        {
            if (btnImage != null)
                btnImage.sprite = activeSprite;

            if (activeBorder != null)
                activeBorder.gameObject.SetActive(true);

            if (inactiveBorder != null)
                inactiveBorder.gameObject.SetActive(false);

            if (button != null)
                button.interactable = false;
        }
        
        private void  InactiveState()
        {
            if (btnImage != null)
                btnImage.sprite = inactiveSprite;

            if (inactiveBorder != null)
                inactiveBorder.gameObject.SetActive(true);

            if (activeBorder != null)
                activeBorder.gameObject.SetActive(false);

            if (button != null)
                button.interactable = true;
        }
    }

    public enum TabButtonState
    {
        Active,
        Inactive,
    }
}