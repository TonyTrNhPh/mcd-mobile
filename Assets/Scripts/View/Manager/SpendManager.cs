using System;
using UnityEngine;

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

    public void Initialize(LevelData levelData)
    {
        ResetCosts(levelData);
        TotalCoin = levelData.initialCoin;
        OnMoneyChanged?.Invoke(TotalCoin);
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

    public void ResetCosts(LevelData levelData)
    {
        AddCatCost = levelData.baseAddCatCost;
        RepairBarrierCost = levelData.baseRepairBarrierCost;
        
        OnMoneyChanged?.Invoke(TotalCoin);
    }
    
    public bool TryAddCat()
    {
        if (!Board.Instance.HasEmptySlot())
            return false;

        if (!SpendCoin(AddCatCost))
            return false;

        if (!Board.Instance.SpawnRandomCat())
            return false;

        AddCatCost = Mathf.RoundToInt(
            AddCatCost * LevelManager.Instance.CurrentLevelData.addCatMultiplier
        );

        return true;
    }

    public bool TryRepairBarrier()
    {
        if (!Barrier.Instance.RepairBarrier())
            return false;
        
        if (!SpendCoin(RepairBarrierCost))
            return false;
        
        RepairBarrierCost = Mathf.RoundToInt(
            RepairBarrierCost * LevelManager.Instance.CurrentLevelData.repairBarrierMultiplier
        );

        return true;
    }
    
}

