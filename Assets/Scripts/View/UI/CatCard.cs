using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

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
    
    private void Awake()
    {
        _catTransform = catModel.GetComponent<RectTransform>();
        _catAnimator  = catModel.GetComponent<Animator>();
        _catImage = catModel.GetComponent<Image>();
    }

    public void Initialize(CatData data, int upgradeLevel)
    {
        _catName = data.GetCatName();
        _catBaseSize = data.GetBaseSize();
        _offset = data.GetOffset();
        _catBaseAnimationClip = data.GetBaseAnimation();
        _catBaseSprite = data.GetBaseSprite();
        
        _upgradePrice = data.GetUpgradePrice(upgradeLevel);
        _currentUpgradeLevel = upgradeLevel;
        _maxUpgradeLevel = data.GetMaxUpgradeLevel();
        
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
