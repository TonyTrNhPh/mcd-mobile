using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class UpgradeCard : MonoBehaviour
{
    [Header("Card Visual")]
    [SerializeField] private TextMeshProUGUI upgradeName;
    [SerializeField] private TextMeshProUGUI upgradeDescription;
    [SerializeField] private Image upgradeIcon;
    
    [Header("Button")]
    [SerializeField] private Button upgradeButton;
    [SerializeField] private Image buttonFillImage;
    [SerializeField] private TextMeshProUGUI upgradePrice;

    private PermanentUpgrade _currentUpgrade;
    private int _currentLevel = 0;
    private int _nextLevel = 0;

    private void Awake()
    {
        
    }
    
    public void Initialize(PermanentUpgrade upgrade, int currentLevel = 0)
    {
        if (upgrade == null)
        {
            Debug.LogWarning("UpgradeCard: PermanentUpgrade is null");
            return;
        }

        _currentUpgrade = upgrade;
        _currentLevel = Mathf.Clamp(currentLevel, 0, upgrade.stats.Length - 1);

        if (upgradeButton != null)
        {
            upgradeButton.onClick.RemoveAllListeners();
            upgradeButton.onClick.AddListener(OnUpgradeButtonClicked);
        }
        
        UpdateCard();
    }

    private void UpdateCard()
    {
        if (_currentUpgrade == null || _currentUpgrade.stats == null || _currentUpgrade.stats.Length == 0)
            return;

        UpdateName(_currentUpgrade.upgradeName);
        UpdateIcon(_currentUpgrade.upgradeIcon);
        
        int maxIndex = _currentUpgrade.stats.Length - 1;
        int nextIndex = _currentLevel + 1;

        float currentValue = _currentUpgrade.stats[_currentLevel].effectValue;
        bool hasNext = nextIndex <= maxIndex;

        if (hasNext)
        {
            float nextValue = _currentUpgrade.stats[nextIndex].effectValue;
            UpdateDescription(currentValue, nextValue);
        }
        else
        {
            UpdateDescriptionMax(currentValue);
        }
        
        if (hasNext)
        {
            int nextPrice = _currentUpgrade.stats[nextIndex].price;
            UpdatePrice(nextPrice);
            SetUpgradeButtonInteractable(true);
        }
        else
        {
            UpdatePrice(-1); 
            SetUpgradeButtonInteractable(false);
        }
    }
    
    private void UpdateName(string cardName)
    {
        if (upgradeName != null)
            upgradeName.text = cardName;
    }

    private void UpdateDescription(float current,float next)
    {
        if (upgradeDescription != null)
        {
            upgradeDescription.text = $"{current:0.##} -> {next:0.##}";
        }
    }
    private void UpdateDescriptionMax(float current)
    {
        if (upgradeDescription != null)
            upgradeDescription.text = $"{current:0.##} (Max)";
    }
    
    
    private void UpdatePrice(int cardPrice)
    {
        if (upgradePrice == null)
            return;

        if (cardPrice < 0)
        {
            upgradePrice.text = "Max";
        }
        else
        {
            upgradePrice.text = cardPrice.ToString();
        }
    }
    
    private void UpdateIcon(Sprite icon)
    {
        if (upgradeIcon == null)
            return;

        upgradeIcon.sprite = icon;

        if (icon != null)
        {
            upgradeIcon.enabled = true;
            upgradeIcon.SetNativeSize();
        }
        else
        {
            upgradeIcon.enabled = false;
        }
    }

    private void SetUpgradeButtonInteractable(bool interactable)
    {
        if (upgradeButton != null)
            upgradeButton.interactable = interactable;

        if (buttonFillImage != null && buttonFillImage != upgradeIcon)
            buttonFillImage.enabled = interactable;
    }
    
    private void OnUpgradeButtonClicked()
    {
        if (_currentUpgrade == null || _currentUpgrade.stats == null)
            return;

        int maxIndex = _currentUpgrade.stats.Length - 1;
        if (_currentLevel < maxIndex)
        {
            _currentLevel++;
            UpdateCard();
        }
    }

}