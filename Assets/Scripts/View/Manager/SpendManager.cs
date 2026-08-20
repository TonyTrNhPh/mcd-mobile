using System;
using UnityEngine;
using View.Manager;

public class SpendManager : MonoBehaviour
{
    public static SpendManager Instance;
    public int TotalCoin { get; private set; }
    public int AddCatPrice { get; private set; }
    public int RepairPrice { get; private set; }

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

    public void Initialize()
    {
        AddCatPrice = Mathf.RoundToInt(UpgradeManager.Instance.GetUpgradeEffectValue(PermanentUpgradeType.AddCatPrice));
        RepairPrice = Mathf.RoundToInt(UpgradeManager.Instance.GetUpgradeEffectValue(PermanentUpgradeType.RepairPrice));
        TotalCoin = Mathf.RoundToInt(UpgradeManager.Instance.GetUpgradeEffectValue(PermanentUpgradeType.InitialCoin));
        GameEvent.HandleCoinChanged(TotalCoin);
    }

    public void EarnCoin(int amount)
    {
        if (amount <= 0)
            return;

        TotalCoin += amount;

        GameEvent.HandleCoinChanged(TotalCoin);
    }

    public bool SpendCoin(int amount)
    {
        if (amount <= 0)
            return false;
        if (TotalCoin < amount)
            return false;

        TotalCoin -= amount;

        GameEvent.HandleCoinChanged(TotalCoin);

        return true;
    }


    public bool TryAddCat()
    {
        if (!Board.Instance.HasEmptySlot())
            return false;

        if (!SpendCoin(AddCatPrice))
            return false;

        if (!Board.Instance.SpawnRandomCat())
            return false;

        AddCatPrice = Mathf.RoundToInt(AddCatPrice * 1.0f);
        // Handle different way to increase the price in level

        return true;
    }

    public bool TryRepairBarrier()
    {
        if (!Barrier.Instance.RepairBarrier())
            return false;

        if (!SpendCoin(RepairPrice))
            return false;

        RepairPrice = Mathf.RoundToInt(RepairPrice *1.0f);
        // Handle different way to increase the price in level

        return true;
    }
}