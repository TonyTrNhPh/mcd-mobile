using System;
using TMPro;
using UnityEngine;

public class GameMenu : MonoBehaviour
{
    [SerializeField] private TextMeshProUGUI totalCoinText;
    [SerializeField] private TextMeshProUGUI waveText;
    [SerializeField] private TextMeshProUGUI addCatCoinText;
    [SerializeField] private TextMeshProUGUI repairBarrierCoinText;


    private void Start()
    {
        UpdateCoinUI(SpendManager.Instance.TotalCoin);
        UpdateAddCatCoinUI(SpendManager.Instance.AddCatCost);
        UpdateRepairBarrierCoinUI(SpendManager.Instance.RepairBarrierCost);
    }

    private void OnEnable()
    {
        SpendManager.Instance.OnMoneyChanged += UpdateCoinUI;
        Wave.Instance.OnWaveChange += UpdateWaveUI;
    }

    private void OnDisable()
    {
        if (SpendManager.Instance == null || Wave.Instance == null)
            return;

        SpendManager.Instance.OnMoneyChanged -= UpdateCoinUI;
        Wave.Instance.OnWaveChange -= UpdateWaveUI;
    }
    

    public void OnAddButtonClicked()
    {
        if (!SpendManager.Instance.TryAddCat())
        {
            Debug.Log("Not enough coin");
            return;
        }

        UpdateAddCatCoinUI(SpendManager.Instance.AddCatCost);
    }

    public void OnRepairButtonClicked()
    {
        if (!SpendManager.Instance.TryRepairBarrier())
        {
            Debug.Log("Not enough coin");
            return;
        }

        UpdateRepairBarrierCoinUI(SpendManager.Instance.RepairBarrierCost);
    }
    
    private void UpdateCoinUI(int coinAmount)
    {
        totalCoinText.text = coinAmount.ToString();
    }

    private void UpdateWaveUI(int currentWave, int totalWave)
    {
        waveText.text = $"Wave {currentWave}/{totalWave}";
    }

    private void UpdateAddCatCoinUI(int coinAmount)
    {
        addCatCoinText.text = coinAmount.ToString();
    }

    private void UpdateRepairBarrierCoinUI(int coinAmount)
    {
        repairBarrierCoinText.text = coinAmount.ToString();
    }
}