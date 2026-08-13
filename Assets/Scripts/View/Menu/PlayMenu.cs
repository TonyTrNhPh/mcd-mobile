using System;
using TMPro;
using UnityEngine;
using View.Manager;
using UnityEngine.UI;

public class PlayMenu : MonoBehaviour
{
    [Header("Texts")]
    [SerializeField] private TextMeshProUGUI totalCoinText;
    [SerializeField] private TextMeshProUGUI waveText;
    [SerializeField] private TextMeshProUGUI addCatCoinText;
    [SerializeField] private TextMeshProUGUI repairBarrierCoinText;
    
    [Header("Buttons")]
    [SerializeField] private Button addButton;
    [SerializeField] private Button repairButton;
    [SerializeField] private Button spikeButton;
    [SerializeField] private Button tntButton;
    [SerializeField] private Button guardianButton;
    [SerializeField] private Button pauseButton;


    #region Unity Life Cycle

    private void Awake()
    {
        addButton.onClick.AddListener(OnAddButtonClicked);
        repairButton.onClick.AddListener(OnRepairButtonClicked);
        spikeButton.onClick.AddListener(OnSpikeButtonClicked);
        tntButton.onClick.AddListener(OnTntButtonClicked);
        guardianButton.onClick.AddListener(OnGuardianButtonClicked);
        
        pauseButton.onClick.AddListener(OnPauseButtonClicked);
    }
    
    private void OnEnable()
    {
        if (SpendManager.Instance == null || Wave.Instance == null)
            return;
        
        SpendManager.Instance.OnMoneyChanged += UpdateCoinUI;
        Wave.Instance.OnWaveChange += UpdateWaveUI;
        
        UpdateUI();
    }

    private void OnDisable()
    {
        if (SpendManager.Instance == null || Wave.Instance == null)
            return;

        SpendManager.Instance.OnMoneyChanged -= UpdateCoinUI;
        Wave.Instance.OnWaveChange -= UpdateWaveUI;
    }

    private void OnDestroy()
    {
        addButton.onClick.RemoveListener(OnAddButtonClicked);
        repairButton.onClick.RemoveListener(OnRepairButtonClicked);
        spikeButton.onClick.RemoveListener(OnSpikeButtonClicked);
        tntButton.onClick.RemoveListener(OnTntButtonClicked);
        guardianButton.onClick.RemoveListener(OnGuardianButtonClicked);
        
        pauseButton.onClick.RemoveListener(OnPauseButtonClicked);
    }

    #endregion
    
    #region Button Click Handlers
    
    private void OnAddButtonClicked()
    {
        if (!SpendManager.Instance.TryAddCat())
        {
            Debug.Log("Not enough coin");
            return;
        }

        UpdateAddCatCoinUI(SpendManager.Instance.AddCatCost);
    }

    private void OnRepairButtonClicked()
    {
        if (!SpendManager.Instance.TryRepairBarrier())
        {
            Debug.Log("Not enough coin");
            return;
        }

        UpdateRepairBarrierCoinUI(SpendManager.Instance.RepairBarrierCost);
    }
    
    private void OnPauseButtonClicked()
    {
        GameManager.Instance.PauseLevel();
    }
    
    public void OnSpikeButtonClicked()
    {
        
    }
    
    private void OnTntButtonClicked()
    {
        
    }

    private void OnGuardianButtonClicked()
    {
        
    }
    #endregion


    #region UI Updater

    private void UpdateUI()
    {
        if (SpendManager.Instance != null)
        {
            UpdateCoinUI(SpendManager.Instance.TotalCoin);
            UpdateAddCatCoinUI(SpendManager.Instance.AddCatCost);
            UpdateRepairBarrierCoinUI(SpendManager.Instance.RepairBarrierCost);
        }

        if (Wave.Instance != null)
        {
            UpdateWaveUI(
                Wave.Instance.CurrentWave,
                Wave.Instance.TotalWave
            );
        }
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
    
    #endregion
    
}

public class PlayState : IState
{
    private readonly GameManager _gameManager;
    
    public PlayState(GameManager gameManager)
    {
        _gameManager = gameManager;
    }
    
    public void Enter()
    {
        _gameManager.UIManager.ShowMenu(EMenu.Play);
    }

    public void Exit()
    {
        _gameManager.UIManager.HideMenu(EMenu.Play);
    }

    public void Update()
    {
        
    }
}