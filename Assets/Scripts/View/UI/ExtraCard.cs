using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class ExtraCard : MonoBehaviour
{
    [Header("Card Visual")]
    [SerializeField] private TextMeshProUGUI upgradeName;
    [SerializeField] private TextMeshProUGUI upgradeDescription;
    
    [Header("Button")]
    [SerializeField] private Button upgradeButton;
    [SerializeField] private Image upgradeFillImage;
    [SerializeField] private TextMeshProUGUI upgradePrice;

    private void Awake()
    {
        
    }
    
    private void Start()
    {
        
    }
    
    private void Initialize()
    {
        
    }

    private void UpdateCard()
    {
        
    }
    
    private void UpdateName(string cardName)
    {
        upgradeName.text = cardName;
    }

    private void UpdateDescription(string cardDescription)
    {
        upgradeDescription.text = cardDescription;
    }

    private void UpdatePrice(int  cardPrice)
    {
        upgradePrice.text = cardPrice.ToString(); 
    }
    
}
