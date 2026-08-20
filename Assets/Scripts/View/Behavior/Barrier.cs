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
        Debug.Log("Max stronghold health for level: " +
                  UpgradeManager.Instance.GetUpgradeEffectValue(PermanentUpgradeType.StrongholdHealth));
        Debug.Log("Repair health amount for level: " +
                  UpgradeManager.Instance.GetUpgradeEffectValue(PermanentUpgradeType.RepairHealth));
    }


    private void Reset()
    {
        IsDestroy = false;
        healthBarFill.fillAmount = 1;

        _maxHealth = UpgradeManager.Instance.GetUpgradeEffectValue(PermanentUpgradeType.StrongholdHealth);
        _currentHealth = _maxHealth;
    }

    public void TakeDamage(float damage)
    {
        if (IsDestroy)
            return;

        _currentHealth -= damage;
        healthBarFill.fillAmount = _currentHealth / _maxHealth;

        if (_currentHealth <= 0)
        {
            _currentHealth = 0;
            IsDestroy = true;

            GameEvent.HandleLevelLost();
        }
    }

    public bool RepairBarrier()
    {
        if (IsDestroy)
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