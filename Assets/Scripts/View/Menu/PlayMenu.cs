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
        addButton.onClick.AddListener(HandleAddButtonClicked);
        repairButton.onClick.AddListener(HandleRepairButtonClicked);
        spikeButton.onClick.AddListener(HandleSpikeButtonClicked);
        tntButton.onClick.AddListener(HandleTntButtonClicked);
        guardianButton.onClick.AddListener(HandleGuardianButtonClicked);
        
        pauseButton.onClick.AddListener(HandlePauseButtonClicked);
    }
    
    private void OnEnable()
    {
        if (SpendManager.Instance == null || Wave.Instance == null)
            return;
        
        GameEvent.OnCoinChanged += UpdateCoinUI;
        GameEvent.OnWaveChange += UpdateWaveUI;
        
        UpdateUI();
    }

    private void OnDisable()
    {
        if (SpendManager.Instance == null || Wave.Instance == null)
            return;

        GameEvent.OnCoinChanged -= UpdateCoinUI;
        GameEvent.OnWaveChange += UpdateWaveUI;

    }

    private void OnDestroy()
    {
        addButton.onClick.RemoveListener(HandleAddButtonClicked);
        repairButton.onClick.RemoveListener(HandleRepairButtonClicked);
        spikeButton.onClick.RemoveListener(HandleSpikeButtonClicked);
        tntButton.onClick.RemoveListener(HandleTntButtonClicked);
        guardianButton.onClick.RemoveListener(HandleGuardianButtonClicked);
        
        pauseButton.onClick.RemoveListener(HandlePauseButtonClicked);
    }

    #endregion
    
    #region Button Click Handlers
    
    private void HandleAddButtonClicked()
    {
        if (!SpendManager.Instance.TryAddCat())
        {
            Debug.Log("Not enough coin");
            return;
        }

        UpdateAddCatCoinUI(SpendManager.Instance.AddCatCost);
    }

    private void HandleRepairButtonClicked()
    {
        if (!SpendManager.Instance.TryRepairBarrier())
        {
            Debug.Log("Not enough coin");
            return;
        }

        UpdateRepairBarrierCoinUI(SpendManager.Instance.RepairBarrierCost);
    }
    
    private void HandlePauseButtonClicked()
    {
        GameEvent.HandlePauseButtonClicked();
    }
    
    public void HandleSpikeButtonClicked()
    {
        
    }
    
    private void HandleTntButtonClicked()
    {
        
    }

    private void HandleGuardianButtonClicked()
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