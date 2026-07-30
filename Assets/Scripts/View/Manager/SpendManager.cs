using System;
using UnityEngine;
using View.Manager;

public class SpendManager : MonoBehaviour
{
    public static SpendManager Instance;
    
    public int TotalCoin { get; private set; }

    //---------- Event ----------//
    public event Action<int> OnMoneyChanged;
    
    private void Awake()
    {
        if (Instance == null)
        {
            Instance = this;
        }
        else
        {
            Destroy(gameObject);
        }
    }

    public void EarnCoin(int amount)
    {
        if (amount <= 0)
            return;
        
        TotalCoin += amount;
        
        OnMoneyChanged?.Invoke(TotalCoin);
    }

    public bool SpendCoin(int amount)
    {
        if (amount <= 0)
            return false;
        if (TotalCoin < amount)
            return false;

        TotalCoin -= amount;
        
        OnMoneyChanged?.Invoke(TotalCoin);
        return true;
    }

    public void ResetAndSetCoins(int amount)
    {
        TotalCoin = amount;
        OnMoneyChanged?.Invoke(TotalCoin);
    }
}

