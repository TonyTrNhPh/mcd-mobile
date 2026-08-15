using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.UI;
using View.Manager;

public class CatCard : MonoBehaviour
{
    [Header("Card Visual")] 
    [SerializeField] private GameObject cardModel;
    [SerializeField] private GameObject catModel;
    [SerializeField] private TextMeshProUGUI catName;
    [SerializeField] private List<GameObject> catLevels;
    
    [Header("Button")]
    [SerializeField] private Button upgradeButton;
    [SerializeField] private Image upgradeFillImage;
    [SerializeField] private TextMeshProUGUI upgradePrice;
    
    //---------- Cat Model ----------//
    private RectTransform _catTransform;
    private Image _catImage;
    private Animator _catAnimator;
    
    private int _currentUpgradeLevel;
    private int _maxUpgradeLevel;
    private string _catName;
    private Vector2 _catBaseSize;
    private Vector2 _offset;
    private RuntimeAnimatorController _catBaseAnimationClip;
    private Sprite _catBaseSprite;
    private int _upgradePrice;
    
    private CatData _catData;
    
    private void Awake()
    {
        _catTransform = catModel.GetComponent<RectTransform>();
        _catAnimator  = catModel.GetComponent<Animator>();
        _catImage = catModel.GetComponent<Image>();
        
        upgradeButton.onClick.AddListener(HandleUpgradeButtonClicked);
    }

    public void Initialize(CatData data)
    {
        _catData = data;
        
        _catName = data.GetCatName();
        _catBaseSize = data.GetBaseSize();
        _offset = data.GetOffset();
        _catBaseAnimationClip = data.GetBaseAnimation();
        _catBaseSprite = data.GetBaseSprite();
        
        _maxUpgradeLevel = data.GetMaxUpgradeLevel();
        _currentUpgradeLevel = SaveManager.Instance.GetCatLevel(data);
        
        _upgradePrice = data.GetUpgradePrice(_currentUpgradeLevel);
        
        UpdateCard();
    }

    private void HandleUpgradeButtonClicked()
    {
        UpgradeCat();
    }
    
    private void UpgradeCat()
    {
        if (_currentUpgradeLevel >= _maxUpgradeLevel)
            return;

        int price = _catData.GetUpgradePrice(_currentUpgradeLevel);

        if (!SaveManager.Instance.SpendGems(price))
            return;

        _currentUpgradeLevel++;

        _upgradePrice = _currentUpgradeLevel < _maxUpgradeLevel
            ? _catData.GetUpgradePrice(_currentUpgradeLevel)
            : 0;

        SaveManager.Instance.SetCatLevel(
            _catData,
            _currentUpgradeLevel
        );

        SaveManager.Instance.SaveData();

        GameEvent.GemsChanged(
            SaveManager.Instance.GetGems()
        );

        UpdateCard();
    }

    private void UpdateCard()
    {
        UpdateName(_catName);
        UpdatePrice(_upgradePrice);
        UpdateLevelProgress(_currentUpgradeLevel);
        
        UpdateModel();
    }

    private void UpdateName(string cardName)
    {
        catName.text = cardName;
    }

    private void UpdatePrice(int cardPrice)
    {
        upgradePrice.text = cardPrice.ToString();
    }

    private void UpdateLevelProgress(int cardLevel)
    {
        for (int i = 0; i < catLevels.Count; i++)
        {
            catLevels[i].SetActive(i < cardLevel);
        }
    }

    private void UpdateModel()
    {
        _catImage.sprite = _catBaseSprite;
        _catTransform.sizeDelta = _catBaseSize;
        _catTransform.anchoredPosition = _offset;
        _catAnimator.runtimeAnimatorController = _catBaseAnimationClip;
        _catAnimator.Play("Idle");
    }
    
    
}
