using System;
using UnityEngine;
using View.Manager;

public class SpendManager : MonoBehaviour
{
    public static SpendManager Instance;
    public int TotalCoin { get; private set; }
    public int AddCatCost { get; private set; }
    public int RepairBarrierCost { get; private set; }
    
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

    private void Start()
    {
        InitCost();
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

    private void InitCost()
    {
        AddCatCost = LevelManager.Instance.CurrentLevelData.baseAddCatCost;
        RepairBarrierCost = LevelManager.Instance.CurrentLevelData.baseRepairBarrierCost;
    }
    public bool TryAddCat()
    {
        if (!SpendCoin(AddCatCost))
            return false;

        SpawnManager.Instance.board.SpawnCat();

        AddCatCost = Mathf.RoundToInt(
            AddCatCost * LevelManager.Instance.CurrentLevelData.addCatMultiplier
        );

        return true;
    }

    public bool TryRepairBarrier()
    {
        if (!SpendCoin(RepairBarrierCost))
            return false;

        Barrier.Instance.RepairBarrier();

        RepairBarrierCost = Mathf.RoundToInt(
            RepairBarrierCost * LevelManager.Instance.CurrentLevelData.repairBarrierMultiplier
        );

        return true;
    }
    
}

