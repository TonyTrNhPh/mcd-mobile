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
    [SerializeField] private TextMeshProUGUI upgradePriceText;
    
    //---------- Cat Model ----------//
    private RectTransform _catTransform;
    private Image _catImage;
    private Animator _catAnimator;
    
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
        
        UpdateCard();
    }

    private void HandleUpgradeButtonClicked()
    {
        if(_catData == null)
            return;

        if(!UpgradeManager.Instance.TryUpgradeCat(_catData))
            return;
        
        UpdateCard();
    }


    private void UpdateCard()
    {
        int currentLevel = UpgradeManager.Instance.GetCatUpgradeLevel(_catData);

        int maxLevel = _catData.GetMaxUpgradeLevel();

        bool maxed = currentLevel >= maxLevel;

        int price = maxed ? 0 : UpgradeManager.Instance.GetCatUpgradePrice(_catData);

        UpdateName();
        UpdatePrice(price);
        UpdateLevelProgress(currentLevel);
        UpdateUpgradeButton(maxed);
        UpdateModel();
    }

    private void UpdateName()
    {
        catName.text = _catData.GetCatName();
    }

    private void UpdatePrice(int price)
    {
        upgradePriceText.text = price <=0 ? "Max": price.ToString();
    }

    private void UpdateLevelProgress(int level)
    {
        for (int i = 0; i < catLevels.Count; i++)
        {
            catLevels[i].SetActive(i < level);
        }
    }
    
    private void UpdateUpgradeButton(bool maxed)
    {
        upgradeButton.interactable = !maxed;
    }

    private void UpdateModel()
    {
        _catImage.sprite = _catData.GetBaseSprite();
        _catTransform.sizeDelta = _catData.GetBaseSize();
        _catTransform.anchoredPosition = _catData.GetOffset();

        _catAnimator.runtimeAnimatorController =
            _catData.GetBaseAnimation();

        _catAnimator.Play("Idle");
    }
    
    
}
