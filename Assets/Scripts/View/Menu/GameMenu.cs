using System;
using TMPro;
using UnityEngine;

public class GameMenu : MonoBehaviour
{
    [SerializeField] private TextMeshProUGUI totalCoinText;
    [SerializeField] private TextMeshProUGUI waveText;
    [SerializeField] private TextMeshProUGUI addCatCoinText;
    [SerializeField] private TextMeshProUGUI repairWallCoinText;
    
    public void UpdateCoinUI(int coinAmount)
    {
        totalCoinText.text = coinAmount.ToString();
    }

    public void UpdateWaveUI(int currentWave, int totalWave)
    {
        waveText.text = $"Wave {currentWave}/{totalWave}";
    }
    
    public void OnAddButtonClicked()
    {
        if (!SpendManager.Instance.SpendCoin(100))
        {
            Debug.Log("Not enough coin");
            return;
        }
        
        SpawnManager.Instance.board.SpawnCat();
    }

    public void OnRepairButtonClicked()
    {

        if (!SpendManager.Instance.SpendCoin(100))
        {
            Debug.Log("Not enough coin");
            return;
        }
        Barrier.Instance.RepairBarrier();
    }

    private void Start()
    {
        UpdateCoinUI(SpendManager.Instance.TotalCoin);
    }

    private void OnEnable()
    {
        SpendManager.Instance.OnMoneyChanged += UpdateCoinUI;
        Wave.Instance.OnWaveChange += UpdateWaveUI;
    }

    private void OnDisable()
    {
        if(SpendManager.Instance == null || Wave.Instance == null)
            return;

        SpendManager.Instance.OnMoneyChanged -= UpdateCoinUI;
        Wave.Instance.OnWaveChange -= UpdateWaveUI;
    }
}
