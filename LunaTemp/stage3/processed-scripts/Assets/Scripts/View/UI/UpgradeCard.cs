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
    [SerializeField] private TextMeshProUGUI upgradePriceText;

    private PermanentUpgrade _currentUpgrade;

    public void Initialize(PermanentUpgrade upgrade)
    {
        if (upgrade == null)
        {
            Debug.LogWarning("UpgradeCard: PermanentUpgrade is null");
            return;
        }

        _currentUpgrade = upgrade;

        if (upgradeButton != null)
        {
            upgradeButton.onClick.RemoveAllListeners();
            upgradeButton.onClick.AddListener(HandleUpgradeButtonClicked);
        }

        UpdateCard();
    }

    private void UpdateCard()
    {
        if (_currentUpgrade == null)
            return;

        int currentLevel =
            UpgradeManager.Instance.GetUpgradeLevelByType(
                _currentUpgrade.type
            );

        int maxLevel = _currentUpgrade.stats.Length - 1;

        UpdateName(_currentUpgrade.upgradeName);
        UpdateIcon(_currentUpgrade.upgradeIcon);

        bool hasNextLevel = currentLevel < maxLevel;

        float currentValue =
            _currentUpgrade.stats[currentLevel].effectValue;

        if (hasNextLevel)
        {
            float nextValue =
                _currentUpgrade.stats[currentLevel + 1].effectValue;

            UpdateDescription(currentValue, nextValue);

            int nextPrice =
                _currentUpgrade.stats[currentLevel + 1].price;

            UpdatePrice(nextPrice);
        }
        else
        {
            UpdateDescriptionMax(currentValue);
            UpdatePrice(-1);
        }

        SetUpgradeButtonInteractable(hasNextLevel);
    }

    private void HandleUpgradeButtonClicked()
    {
        if (_currentUpgrade == null)
            return;

        if(!UpgradeManager.Instance.TryUpgrade(_currentUpgrade.type))
            return;

        UpdateCard();
    }

    private void UpdateName(string cardName)
    {
        if (upgradeName != null)
            upgradeName.text = cardName;
    }

    private void UpdateDescription(float current, float next)
    {
        if (upgradeDescription != null)
        {
            upgradeDescription.text =
                $"{current:0.##} -> {next:0.##}";
        }
    }

    private void UpdateDescriptionMax(float current)
    {
        if (upgradeDescription != null)
            upgradeDescription.text = $"{current:0.##} (Max)";
    }

    private void UpdatePrice(int price)
    {
        if (upgradePriceText!= null)
            upgradePriceText.text = price < 0 ? "Max" : price.ToString();
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

        if (buttonFillImage != null &&
            buttonFillImage != upgradeIcon)
        {
            buttonFillImage.enabled = interactable;
        }
    }

    private void OnDestroy()
    {
        if (upgradeButton != null)
            upgradeButton.onClick.RemoveListener(
                HandleUpgradeButtonClicked
            );
    }
}