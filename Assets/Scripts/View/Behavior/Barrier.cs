using System;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Barrier : MonoBehaviour
{
    public static Barrier Instance;
    
    [SerializeField] private List<GameObject> barriers = new List<GameObject>();
    [SerializeField] private float maxHealth = 500f;
    [SerializeField] private Image healthBarFill;
    
    public bool IsDestroy { get; private set; }
    //---------- Event---------//
    public event Action OnDestroy;
    
    //---------- UI ----------//
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

    private void Start()
    {
        _currentHealth = maxHealth; 
    }

    public void TakeDamage(float damage)
    {
        if(IsDestroy)
            return;
        
        _currentHealth -= damage;
        Debug.Log("Barrier HP: "+_currentHealth);

        healthBarFill.fillAmount = _currentHealth / maxHealth;
        
        if (_currentHealth <= 0)
        {
            BarrierDestroy();
        }
    }

    public void RepairBarrier()
    {
        if (IsDestroy)
            return;
        
        _currentHealth = maxHealth;
        healthBarFill.fillAmount = 1f;
    }

    private void BarrierDestroy()
    {
        Debug.Log("Barrier destroyed");
        OnDestroy?.Invoke();
    }
}
