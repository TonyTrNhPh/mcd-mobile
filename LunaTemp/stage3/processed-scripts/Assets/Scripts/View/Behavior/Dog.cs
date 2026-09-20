using System;
using System.Collections;
using System.Collections.Generic;
using Spine.Unity;
using UnityEngine;
using UnityEngine.Rendering;
using UnityEngine.UI;
using View.Manager;
using Random = UnityEngine.Random;

public class Dog : Targetable
{
    [SerializeField] private GameObject healthBar;
    [SerializeField] private Image healthBarFill;

    public DogData Data => _Data;
    public override int TargetPriority => 0;

    //---------- Event ---------//
    public event Action<Dog> OnDeath;

    //---------- UI ----------//
    private float _currentHealth;
    private float _maxHealth;

    //---------- Animation ----------// 
    private SkeletonAnimation _dogAnimation;
    private SkeletonRenderer _dogRenderer;
    private SortingGroup _sortingGroup;
    private float _animationTime;
    private string _currentAnimation;
    private float _walkTimer;
    private float _verticalDirection;
    private float _attackTimer;
    private CircleCollider2D _hitBox;

    //---------- Stat ----------//
    private DogData _Data;
    private int _level;

    //---------- Const ----------//
    private const string IdleAnim = "Idle";
    private const string WalkAnim = "Walking";
    private const string AttackAnim = "Attack";
    private const string DeathAnim = "Dead";

    private readonly List<Targetable> _targetsInRange = new List<Targetable>();
    private Targetable _currentTarget;

    private void Awake()
    {
        _dogAnimation = GetComponentInChildren<SkeletonAnimation>();
        _dogRenderer = GetComponentInChildren<SkeletonRenderer>();
        _sortingGroup = GetComponent<SortingGroup>();
        _hitBox = GetComponent<CircleCollider2D>();
    }

    private void Start()
    {
        ChooseWalkDirection();
        AddTarget(Barrier.Instance);
    }

    public void Initialize(DogData data)
    {
        _Data = data;
        _maxHealth = data.baseHealth;
        _currentHealth = _maxHealth;
        healthBarFill.fillAmount = 1;

        _dogAnimation.Initialize(true);

        _attackTimer = data.baseReloadTime;
    }

    [ContextMenu("Show my target")]
    public void ShowTarget()
    {
        Debug.Log("Showing target");
        Debug.Log(_currentTarget);
        float distance = Vector2.Distance(
            transform.position,
            _currentTarget.transform.position
        );
        Debug.Log(distance);
        Debug.Log(_hitBox.radius);
        
    }

    private void Update()
    {
        UpdateSortingGroup();

        if (IsDestroyed)
            return;

        _currentTarget = GetHighestPriorityTarget();
        
        if(_currentTarget == null)
            return;

        if (IsTargeted)
        {
            HandlePrepareCloseCombat();
        }
        
        float distance = Vector2.Distance(
            transform.localPosition,
            _currentTarget.transform.localPosition
        );

        if (distance/2 <= _hitBox.radius)
        {
            HandleAttack();
        }
        else
        {
            HandleWalkTowardTarget();
        }
    }

    private void HandleWalkTowardTarget()
    {
        if (_currentTarget == null || _currentTarget.IsDestroyed)
            return;
        
        PlayAnimation(WalkAnim);

        if (_currentTarget.transform.position.x >= transform.position.x)
        {
            transform.rotation = Quaternion.Euler(0f, 180f, 0f);
        }
        else
        {
            transform.rotation = Quaternion.Euler(0f, 0f, 0f);
        }
        
        Vector3 direction =  (_currentTarget.transform.position - transform.position).normalized;
        transform.position += direction * Data.baseSpeed * Time.deltaTime;
    }

    private void HandlePrepareCloseCombat()
    {
        if (_currentTarget == null || _currentTarget.IsDestroyed)
            return;
        
        PlayAnimation(IdleAnim);
    }

    private void UpdateSortingGroup()
    {
        if (_sortingGroup == null)
            return;

        float yPosition = transform.position.y;
        _sortingGroup.sortingOrder = Mathf.RoundToInt(-yPosition * 100);
    }

    public override void TakeDamage(float damage)
    {
        if (IsDestroyed)
            return;

        _currentHealth -= damage;

        healthBarFill.fillAmount = _currentHealth / _maxHealth;

        if (_currentHealth <= 0)
        {
            Die();
        }
    }

    private void Die()
    {
        IsDestroyed = true;

        _targetsInRange.RemoveAll(target => target == null || target.IsDestroyed);

        _hitBox.radius = 0f;

        SpendManager.Instance.EarnCoin(100);
        PlayAnimation(DeathAnim);
        StartCoroutine(DestroyAfterAnimation());

        OnDeath?.Invoke(this);
    }

    private IEnumerator DestroyAfterAnimation()
    {
        yield return new WaitForSeconds(
            GetAnimationTime(_dogRenderer, DeathAnim)
        );

        Destroy(gameObject);
    }
    
    // private void HandleWalkRandomly()
    // {
    //     PlayAnimation(WalkAnim);
    //
    //     Vector3 movement = new Vector3(
    //         -Data.baseSpeed,
    //         _verticalDirection * Data.baseSpeed / 2,
    //         0f
    //     ) * Time.deltaTime;
    //
    //     transform.position += movement;
    //     Vector3 position = transform.position;
    //     position.y = Mathf.Clamp(position.y, Wave.Instance.minYPoint + 1, Wave.Instance.maxYPoint - 1);
    //     transform.position = position;
    //
    //     _walkTimer += Time.deltaTime;
    //
    //     if (_walkTimer >= GetWalkingSpeed())
    //     {
    //         _walkTimer = 0f;
    //         ChooseWalkDirection();
    //     }
    // }

    private void HandleAttack()
    {
        _attackTimer += Time.deltaTime;

        while (_attackTimer >= Data.baseReloadTime)
        {
            _attackTimer -= Data.baseReloadTime;
            Attack();
        }
    }

    private void Attack()
    {
        PlayAnimation(AttackAnim);

        if (_currentTarget == null)
            return;

        if (_currentTarget is Barrier)
        {
            GameEvent.HandleBarrierDamaged(Data.baseDamage);
            return;
        }

        _currentTarget.TakeDamage(Data.baseDamage);
    }

    private void PlayAnimation(string animName)
    {
        if (_currentAnimation == animName)
            return;
        _currentAnimation = animName;
        // _dogAnimation.AnimationState.SetAnimation(0, animName, loop);
        switch (animName)
        {
            case IdleAnim:
                _dogAnimation.AnimationState.SetAnimation(0, IdleAnim, true);
                break;
            case WalkAnim:
                _dogAnimation.AnimationState.SetAnimation(0, WalkAnim, true);
                break;
            case DeathAnim:
                _dogAnimation.AnimationState.SetAnimation(0, DeathAnim, false);
                break;
            case AttackAnim:
                _dogAnimation.AnimationState.SetAnimation(0, AttackAnim, false);
                _dogAnimation.AnimationState.AddAnimation(0, IdleAnim, true, 0f);
                _currentAnimation = IdleAnim;
                break;
        }
    }

    private float GetAnimationTime(SkeletonRenderer skeletonRenderer, string animationName)
    {
        SkeletonDataAsset dataAsset = skeletonRenderer.skeletonDataAsset;
        Spine.Animation walk = dataAsset.GetSkeletonData(true).FindAnimation(animationName);

        return walk.Duration;
    }

    private float GetWalkingSpeed()
    {
        return Data.baseSpeed / GetAnimationTime(_dogRenderer, WalkAnim);
    }

    private void ChooseWalkDirection()
    {
        int direction = Random.Range(0, 3);

        if (direction == 0)
            _verticalDirection = -1f; // Down
        else if (direction == 1)
            _verticalDirection = 0f; // Straight
        else
            _verticalDirection = 1f; // Up
    }

    private void OnTriggerEnter2D(Collider2D other)
    {
        if (!other.CompareTag("Barrier"))
            return;

        Targetable target = other.GetComponentInParent<Targetable>();

        if (target == null)
            return;
        
        AddTarget(target);
    }

    private void OnTriggerExit2D(Collider2D other)
    {
        if (!other.CompareTag("Barrier"))
            return;

        Targetable target = other.GetComponent<Targetable>();
        
        if( target == null)
            return;
        
        RemoveTarget(target);
    }
    
    private Targetable GetHighestPriorityTarget()
    {
        _targetsInRange.RemoveAll(
            target => target == null || target.IsDestroyed
        );

        Targetable bestTarget = null;
        int highestPriority = int.MinValue;

        foreach (Targetable target in _targetsInRange)
        {
            if (target == null || target.IsDestroyed)
                continue;

            if (target.TargetPriority > highestPriority)
            {
                highestPriority = target.TargetPriority;
                bestTarget = target;
            }
        }

        return bestTarget;
    }
    
    public void AddTarget(Targetable target)
    {
        if (target == null || target.IsDestroyed)
            return;

        if (_targetsInRange.Contains(target))
            return;

        _targetsInRange.Add(target);
    }
    
    public void RemoveTarget(Targetable target)
    {
        if (target == null)
            return;

        _targetsInRange.Remove(target);

        if (_currentTarget == target)
        {
            _currentTarget = null;
        }
    }
}