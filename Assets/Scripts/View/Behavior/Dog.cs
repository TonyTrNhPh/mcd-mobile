using System;
using System.Collections;
using Spine.Unity;
using UnityEngine;
using UnityEngine.Rendering;
using UnityEngine.UI;
using Random = UnityEngine.Random;

public class Dog : MonoBehaviour
{
    [SerializeField] private Transform hitPoint;
    [SerializeField] private GameObject healthBar;
    [SerializeField] private Image healthBarFill;
    [SerializeField] private float maxHealth;

    public DogData Data => _dogData;
    public DogLevelData LevelData => _dogData.dogLevels[_level];
    public int Level => _level;

    //---------- Event ---------//
    public bool IsDead { get; private set; }
    public event Action<float> OnAttackBarrier;
    private Barrier _targetBarrier;

    //---------- UI ----------//
    private float _currentHealth;

    //---------- Animation ----------// 
    private SkeletonAnimation _dogAnimation;
    private SkeletonRenderer _dogRenderer;
    private SortingGroup _sortingGroup;
    private float _animationTime;
    private float _moveSpeed;
    private string _currentAnimation;
    private float _walkTimer;
    private float _walkCycleDuration;
    private float _verticalDirection;
    private bool _barrierInRange = false;
    private float _attackTimer;
    private CircleCollider2D _hitBox;

    //---------- Stat ----------//
    private DogData _dogData;
    private int _level;

    //---------- Const ----------//
    private const string IdleAnim = "Idle";
    private const string WalkAnim = "Walking";
    private const string AttackAnim = "Attack";
    private const string DeathAnim = "Dead";


    private void Awake()
    {
        _dogAnimation = GetComponentInChildren<SkeletonAnimation>();
        _dogRenderer = GetComponentInChildren<SkeletonRenderer>();
        _sortingGroup = GetComponent<SortingGroup>();
        _hitBox = GetComponent<CircleCollider2D>();
    }

    private void Start()
    {
        _walkCycleDuration = GetAnimationTime(_dogRenderer, WalkAnim);
        _moveSpeed = GetWalkingSpeed();

        ChooseWalkDirection();
    }

    private void Update()
    {
        UpdateSortingGroup();

        if (IsDead)
            return;

        if (_barrierInRange && _targetBarrier)
        {
            HandleAttack();
        }
        else
        {
            Walk();
        }
    }

    private void UpdateSortingGroup()
    {
        if (_sortingGroup == null)
            return;

        float yPosition = _dogRenderer.transform.position.y;
        _sortingGroup.sortingOrder = Mathf.RoundToInt(-yPosition * 100);
    }

    public void Initialize(DogData data, int level)
    {
        _dogData = data;
        _level = level;
        _currentHealth = LevelData.health;

        _dogAnimation.Initialize(true);

        _attackTimer = LevelData.reloadTime;
    }

    public void TakeDamage(float damage)
    {
        if (IsDead)
            return;

        _currentHealth -= damage;

        healthBarFill.fillAmount = _currentHealth / maxHealth;

        if (_currentHealth <= 0)
        {
            Die();
        }
    }

    private void Die()
    {
        IsDead = true;
        _barrierInRange = false;

        _hitBox.radius = 0f;

        PlayAnimation(DeathAnim);

        StartCoroutine(DestroyAfterAnimation());
    }

    private IEnumerator DestroyAfterAnimation()
    {
        yield return new WaitForSeconds(
            GetAnimationTime(_dogRenderer, DeathAnim)
        );

        Destroy(gameObject);
    }

    public Vector2 GetHitPoint()
    {
        return hitPoint.position;
    }

    private void Walk()
    {
        PlayAnimation(WalkAnim);

        Vector3 movement = new Vector3(
            -_moveSpeed,
            _verticalDirection * LevelData.distance / 2,
            0f
        ) * Time.deltaTime;

        transform.position += movement;
        Vector3 position = transform.position;
        position.y = Mathf.Clamp(position.y, Wave.Instance.minYPoint + 1, Wave.Instance.maxYPoint - 1);
        transform.position = position;

        _walkTimer += Time.deltaTime;

        if (_walkTimer >= _walkCycleDuration)
        {
            _walkTimer = 0f;
            ChooseWalkDirection();
        }
    }

    private void HandleAttack()
    {
        _attackTimer += Time.deltaTime;

        while (_attackTimer >= LevelData.reloadTime)
        {
            _attackTimer -= LevelData.reloadTime;
            Attack();
        }
    }

    private void Attack()
    {
        PlayAnimation(AttackAnim);

        OnAttackBarrier?.Invoke(LevelData.damage);
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
        return LevelData.distance / GetAnimationTime(_dogRenderer, WalkAnim);
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
        if (other.CompareTag("Barrier"))
        {
            _barrierInRange = true;
            Barrier barrier = other.GetComponent<Barrier>();
            if (barrier == null)
                return;

            _targetBarrier = barrier;
            OnAttackBarrier += _targetBarrier.TakeDamage;
        }
    }

    private void OnDestroy()
    {
        if (_targetBarrier != null)
        {
            OnAttackBarrier -= _targetBarrier.TakeDamage;
            _barrierInRange = false;
            _targetBarrier = null;
        }
    }
}