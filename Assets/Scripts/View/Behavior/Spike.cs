using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Spike : PowerUp
{
    private static readonly int AttackTrig = Animator.StringToHash("AttackTrig");
    private static readonly int ReloadTrig = Animator.StringToHash("ReloadTrig");
    private static readonly int AttackRate = Animator.StringToHash("AttackRate");
 
    private Animator _animator;
    private Coroutine _durationCoroutine;
    
    private bool _canAttack;
    
    protected readonly List<Dog> _dogsInRange = new List<Dog>();
    
    private float _damage;
    private float _attackRate;
    private float _duration;

    private void Awake()
    {
        if (_animator == null)
            _animator = GetComponent<Animator>();
    }

    private void Start()
    {
        Initialize();
    }

    private void Update()
    {
        if (!_canAttack)
            return;
        
        TryAttack();
    }

    private void Initialize()
    {
        _damage = UpgradeManager.Instance.GetUpgradeEffectValue(PermanentUpgradeType.SpikeDamage);
        _attackRate = UpgradeManager.Instance.GetUpgradeEffectValue(PermanentUpgradeType.SpikeAttackRate);
        _duration =  UpgradeManager.Instance.GetUpgradeEffectValue(PermanentUpgradeType.SpikeDuration);        
        
        _canAttack = true;
        
        _animator.SetFloat(AttackRate, _attackRate);
        _animator.SetTrigger(ReloadTrig);

        StartCoroutine(DurationCoroutine());
    }

    private void OnTriggerEnter2D(Collider2D other)
    {
        if (!other.CompareTag("Enemy"))
            return;

        Dog dog = other.GetComponent<Dog>();

        if (dog == null)
            return;

        if (!_dogsInRange.Contains(dog))
        {
            _dogsInRange.Add(dog);
        }

        TryAttack();
    }

    private void OnTriggerExit2D(Collider2D other)
    {
        if (!other.CompareTag("Enemy"))
            return;

        Dog dog = other.GetComponent<Dog>();

        if (dog == null)
            return;

        _dogsInRange.Remove(dog);
    }

    private IEnumerator DurationCoroutine()
    {
        yield return new WaitForSeconds(_duration);
        
        Destroy(gameObject);
    }
    private void TryAttack()
    {
        if (!_canAttack)
            return;

        _dogsInRange.RemoveAll(dog => dog == null);

        if (_dogsInRange.Count == 0)
            return;

        _canAttack = false;

        _animator.SetTrigger(AttackTrig);
    }
    
    public void DealDamage()
    {
        _dogsInRange.RemoveAll(dog => dog == null);

        foreach (Dog dog in _dogsInRange)
        {
            dog.TakeDamage(_damage);
        }
    }

    public void StartReload()
    {
        _animator.SetTrigger(ReloadTrig);
    }

    public void SetReady()
    {
        _canAttack = true;
        
        TryAttack();
    }
}
