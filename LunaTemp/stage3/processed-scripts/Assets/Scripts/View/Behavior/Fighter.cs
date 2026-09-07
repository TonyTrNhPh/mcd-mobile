using System;
using System.Collections.Generic;
using Spine.Unity;
using UnityEngine;
using UnityEngine.Rendering;
using Random = UnityEngine.Random;

public class Fighter : Targetable, IPowerUp
{
    [SerializeField] private CircleCollider2D attackRangeCollider;
    [SerializeField] private CatData catData;
    public override int TargetPriority => 1;
    
    private SortingGroup _sortingGroup;
    public CatData Data => _catData;
    public int UpgradeLevel => _upgradeLevel;

    private SkeletonAnimation _catAnimation;
    private string _currentAnimation;

    private CatData _catData;
    private int _mergeLevel;
    private int _upgradeLevel;

    private float _attackTimer;
    private Camera _camera;
    private readonly List<Targetable> _dogsInRange = new List<Targetable>();

    private const string IdleAnim = "Idle";
    private const string WalkAnim = "Walk";
    private const string AttackAnim = "Fight";

    private Targetable _currentTarget;

    private void Awake()
    {
        _catAnimation = GetComponentInChildren<SkeletonAnimation>();
        _sortingGroup = GetComponent<SortingGroup>();
        _camera = Camera.main;
    }

    private void Start()
    {
        Initialize(catData, 0);
    }

    public void Initialize(CatData data, int upgradeLevel)
    {
        _catData = data;
        _mergeLevel = 0;
        _upgradeLevel = upgradeLevel;

        _catAnimation.Initialize(true);

        _attackTimer = Random.Range(0f, data.GetBaseReloadTime(_mergeLevel));
        attackRangeCollider.radius = data.GetBaseRange();
    }

    private void Update()
    {
        UpdateSortingGroup();

        if (IsDestroyed)
            return;

        // No target / target died
        if (_currentTarget == null || _currentTarget.IsDestroyed)
        {
            ReleaseTarget();

            Dog target = FindClosestDog();

            if (target == null)
            {
                HandlePatrol();
                return;
            }

            LockTarget(target);
        }

        float distance = Vector2.Distance(
            transform.localPosition,
            _currentTarget.transform.localPosition
        );

        if (distance/2 <= attackRangeCollider.radius)
        {
            HandleAttack();
        }
        else
        {
            HandleWalkTowardTarget();
        }
    }

    private void HandlePatrol()
    {
        if (_currentTarget != null)
            return;
        // I want it to choose a random node Vector 3 and walk to that node, only one node at a time, during walking to that node, find target change state to walk toward target, if it find no target when reach the node, create new node and start patrolling
    }

    private void HandleWalkTowardTarget()
    {
        if (_currentTarget == null)
            return;
        
        PlayAnimation(WalkAnim);
        
        if (_currentTarget.transform.position.x <= transform.position.x)
        {
            transform.rotation = Quaternion.Euler(0f, 180f, 0f);
        }
        else
        {
            transform.rotation = Quaternion.Euler(0f, 0f, 0f);
        }

        Vector3 direction = (_currentTarget.transform.position - transform.position).normalized;
        transform.position += direction * Data.GetBaseSpeed() * Time.deltaTime;
    }

    private void HandleAttack()
    {
        _attackTimer += Time.deltaTime;

        while (_attackTimer >= Data.GetBaseReloadTime(_mergeLevel))
        {
            _attackTimer -= Data.GetBaseReloadTime(_mergeLevel);
            Bonk();
        }
    }

    private void Bonk()
    {
        Targetable target = _currentTarget;

        if (target == null)
            return;

        PlayAnimation(AttackAnim);
    }

    private void PlayAnimation(string animName)
    {
        if (_currentAnimation == animName)
            return;
        _currentAnimation = animName;
        switch (animName)
        {
            case AttackAnim:
                _catAnimation.AnimationState.SetAnimation(0, AttackAnim, false);
                _catAnimation.AnimationState.AddAnimation(0, IdleAnim, true, 0f);
                _currentAnimation = IdleAnim;
                break;
            case IdleAnim:
                _catAnimation.AnimationState.SetAnimation(0, IdleAnim, true);
                break;
            case WalkAnim:
                _catAnimation.AnimationState.SetAnimation(0, WalkAnim, true);
                break;
        }
    }

    private void UpdateSortingGroup()
    {
        if (_sortingGroup == null)
            return;

        float yPosition = transform.position.y;
        _sortingGroup.sortingOrder = Mathf.RoundToInt(-yPosition * 100);
    }

    private Dog FindClosestDog()
    {
        _dogsInRange.RemoveAll(dog => dog == null || dog.IsDestroyed);

        Dog closestDog = null;
        float closestDistance = Mathf.Infinity;

        foreach (Dog dog in _dogsInRange)
        {
            if (dog == null || dog.IsDestroyed)
                continue;

            float distance = Vector2.Distance(transform.position, dog.transform.position);
            if (distance < closestDistance)
            {
                closestDistance = distance;
                closestDog = dog;
            }
        }

        return closestDog;
    }

    private void OnTriggerEnter2D(Collider2D other)
    {
        Dog dog = other.GetComponentInParent<Dog>();

        if (dog != null && !_dogsInRange.Contains(dog))
        {
            _dogsInRange.Add(dog);
        }
    }

    private void OnTriggerExit2D(Collider2D other)
    {
        Dog dog = other.GetComponentInParent<Dog>();

        if (dog != null)
        {
            _dogsInRange.Remove(dog);
        }
    }

    public void Remove()
    {
        ReleaseTarget();

        IsDestroyed = true;

        Destroy(gameObject);
    }

    public override void TakeDamage(float damage)
    {
        
    }
    
    private void LockTarget(Dog dog)
    {
        if (dog == null || dog.IsDestroyed)
            return;

        _currentTarget = dog;

        dog.AddTarget(this);
    }
    
    private void ReleaseTarget()
    {
        if (_currentTarget == null)
            return;

        Dog dog = _currentTarget as Dog;

        if (dog != null)
        {
            dog.RemoveTarget(this);
        }

        _currentTarget = null;
    }
}