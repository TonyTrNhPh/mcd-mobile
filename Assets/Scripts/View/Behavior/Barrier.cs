using System;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Barrier : MonoBehaviour
{
    public static Barrier Instance;
    
    [SerializeField] private List<GameObject> barriers = new List<GameObject>();
    [SerializeField] private Image healthBarFill;
    
    public bool IsDestroy { get; private set; }
    //---------- Event---------//
    public event Action OnBarrierDestroy;

    //---------- Runtime ----------//
    private LevelData _currentLevelData;
    private float _maxHealth;
    private float _repairHealthAmount;
    private float _currentHealth;
    
    
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
        if (levelData == null)
            return;
        
        SetLevelData(levelData);
        ResetHealthBar();
        
        _maxHealth = _currentLevelData.barrierMaxHealth;
        _currentHealth = _maxHealth;
        _repairHealthAmount = _currentLevelData.barrierMaxHealth;
        
        Debug.Log(_maxHealth);
        Debug.Log(_currentHealth);
    }
    
    private void SetLevelData(LevelData levelData)
    {
        if (levelData == null)
        {
            Debug.LogError("LevelData is null");
            return;
        }
        
        _currentLevelData = levelData;
    }

    private void ResetHealthBar()
    {
        healthBarFill.fillAmount = 1;
    }

    public void TakeDamage(float damage)
    {
        if(IsDestroy)
            return;
        
        _currentHealth -= damage;
        healthBarFill.fillAmount = _currentHealth / _maxHealth;
        
        if (_currentHealth <= 0)
        {
            _currentHealth = 0;
            IsDestroy = true;
            OnBarrierDestroy?.Invoke();
        }
    }

    public bool RepairBarrier()
    {
        if (IsDestroy)
            return false;

        _currentHealth = _repairHealthAmount;
        healthBarFill.fillAmount = _currentHealth / _maxHealth;
        
        return true;
    }
}
