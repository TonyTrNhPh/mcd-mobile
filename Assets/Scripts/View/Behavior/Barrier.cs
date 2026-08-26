using System;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Barrier : Targetable
{
    public static Barrier Instance;

    [SerializeField] private List<GameObject> barriers = new List<GameObject>();
    [SerializeField] private Image healthBarFill;

    public override int TargetPriority => 0;

    //---------- Runtime ----------//
    private float _maxHealth;
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

    public void Initialize()
    {
        Reset();
    }

    private void Reset()
    {
        IsDestroyed = false;
        healthBarFill.fillAmount = 1;

        _maxHealth = UpgradeManager.Instance.GetUpgradeEffectValue(PermanentUpgradeType.StrongholdHealth);
        _currentHealth = _maxHealth;
    }

    public override void TakeDamage(float damage)
    {
        if (IsDestroyed)
            return;

        _currentHealth -= damage;
        healthBarFill.fillAmount = _currentHealth / _maxHealth;

        if (_currentHealth <= 0)
        {
            _currentHealth = 0;
            IsDestroyed = true;

            GameEvent.HandleLevelLost();
        }
    }

    public bool RepairBarrier()
    {
        if (IsDestroyed)
            return false;

        _currentHealth += UpgradeManager.Instance.GetUpgradeEffectValue(PermanentUpgradeType.RepairHealth);

        if (_currentHealth >= _maxHealth)
        {
            _currentHealth = _maxHealth;
        }

        healthBarFill.fillAmount = _currentHealth / _maxHealth;

        return true;
    }
}