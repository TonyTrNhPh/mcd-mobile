using TMPro;
using UnityEngine;
using Utility.PotatoDevUI;

namespace View.Manager
{
    public class MessageManager : MonoBehaviour
    {
        public static MessageManager Instance;
        
        [SerializeField] private TextMeshProUGUI messageText;
        [SerializeField] private PDUTextEffect textEffect;

        private bool isShownHint = false;
        

        private void Awake()
        {
            if (Instance == null)
            {
                Instance = this;
            }
            else
            {
                Destroy(gameObject);
                return;
            }

            if (messageText != null)
            {
                if (textEffect == null)
                    textEffect = messageText.GetComponent<PDUTextEffect>();
                if (textEffect == null)
                    textEffect = messageText.gameObject.AddComponent<PDUTextEffect>();
            }

            GameEvent.OnCatAdded += HandleCatAdded;
            GameEvent.OnCatRegistered += HandleCatRegistered;
        }

        private void OnDestroy()
        {
            GameEvent.OnCatAdded -= HandleCatAdded;
            GameEvent.OnCatRegistered -= HandleCatRegistered;
        }

        private void Start()
        {
            HideMessage();
        }

        private void HandleCatAdded()
        {
            ShowMergeHintIfAvailable();
        }

        private void HandleCatRegistered(Slot slot)
        {
            ShowMergeHintIfAvailable();
        }

        private void ShowMergeHintIfAvailable()
        {
            if (!isShownHint && MergeManager.Instance != null && MergeManager.Instance.HasMergeableCats())
            {
                ShowMessage("You can merge these cats!");
                isShownHint = true;
            }
        }

        public void ShowMessage(string message)
        {
            if (messageText == null)
            {
                Debug.LogWarning("MessageManager cannot show a message because messageText is missing.");
                return;
            }

            messageText.gameObject.SetActive(true);
            messageText.text = message;
            textEffect.Play();

            Debug.Log(message);
        }

        public void HideMessage()
        {
            if (textEffect == null)
                return;

            textEffect.Hide();
        }
    }
}
