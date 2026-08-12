using System.Collections.Generic;
using UnityEngine;

public class CatSelection : MonoBehaviour
{
    [Header("Cats")]
    [SerializeField] private CatCard catCardPrefab;

    private List<CatData> catData =  new List<CatData>();

    private void Start()
    {
        catData = DataManager.Instance.GetAllCatData();
        CreateCatCards();
    }
    
    private void CreateCatCards()
    {
        foreach (CatData cat in catData)
        {
            CatCard card = Instantiate(catCardPrefab, transform);
            card.Initialize(cat, 0); // replace 0 with current level later
        }
    }
}
