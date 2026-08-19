using System.Collections.Generic;
using UnityEngine;
using View.Manager;

public class CatSelection : MonoBehaviour
{
    [Header("Cats")]
    [SerializeField] private CatCard catCardPrefab;

    private IReadOnlyList<CatData> CatData => DataManager.Instance.GetAllCatData();

    private void Start()
    {
        CreateCatCards();
    }
    
    private void CreateCatCards()
    {
        foreach (CatData cat in CatData)
        {
            CatCard card = Instantiate(catCardPrefab, transform);
            card.Initialize(cat);
        }
    }
}
