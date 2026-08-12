using System;
using System.Collections.Generic;
using Spine.Unity;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.Rendering;
using Random = UnityEngine.Random;

public class Cat : MonoBehaviour, IPointerDownHandler, IBeginDragHandler, IDragHandler, IEndDragHandler
{
    [SerializeField] private LayerMask catLayerMask;
    [SerializeField] private Projectile projectilePrefab;
    [SerializeField] private CircleCollider2D attackRangeCollider;
    [SerializeField] private Transform firePoint;
    [SerializeField] private SkeletonAnimation shootVFXAnimation;

    public Slot CurrentSlot { get; set; }
    public CatData Data => _catData;
    public int Level => _level;

    //---------- Animation ----------// 
    private SkeletonAnimation _catAnimation;
    private string _currentAnimation;

    //---------- Stat ----------//
    private CatData _catData;
    private int _level;

    //---------- Variables ----------//
    private Vector3 _offset;
    private Slot _originalSlot;
    private SortingGroup _sortingGroup;
    private float _attackTimer;
    private Camera _camera;
    private List<Dog> _dogsInRange = new List<Dog>();

    //---------- Const ----------//
    private const string IdleAnim = "Idle";
    private const string ShootAnim = "Shoot";
    private const string ShootVFXAnim = "animation";

    private void Awake()
    {
        _catAnimation = GetComponentInChildren<SkeletonAnimation>();
        _sortingGroup = GetComponent<SortingGroup>();
        _camera = Camera.main;
    }

    public void Initialize(CatData data, int level, Slot slot)
    {
        _catData = data;
        _level = level;

        _catAnimation.Initialize(true);

        _attackTimer = Random.Range(0f, Data.GetReloadTime(_level, 0));
        attackRangeCollider.radius = Data.GetFireRange(_level, 0);

        MoveToSlot(slot);
        OnSlotChanged();
    }

    private void Update()
    {
        if (CurrentSlot == null)
            return;

        if (!CurrentSlot.CanAttack)
            return;

        HandelAttack();
    }
    public void MoveToSlot(Slot slot)
    {
        if (CurrentSlot != null)
            CurrentSlot.RemoveCat();

        CurrentSlot = slot;
        slot.RegisterCat(this);

        transform.SetParent(slot.transform);
        transform.localPosition = Vector3.zero;
        transform.localScale = Vector3.one;

        OnSlotChanged();
    }

    public void OnPointerDown(PointerEventData eventData)
    {
        // This method is required for the drag events to work, but we don't need to implement any logic here.
    }

    public void OnBeginDrag(PointerEventData eventData)
    {
        PlayAnimation(IdleAnim);
        _sortingGroup.sortingOrder = 30;
        _originalSlot = CurrentSlot;
        LeaveCurrentSlot();

        Vector3 worldPos = _camera.ScreenToWorldPoint(eventData.position);
        worldPos.z = transform.position.z;

        _offset = transform.position - worldPos;
    }

    public void OnDrag(PointerEventData eventData)
    {
        Vector3 worldPos = _camera.ScreenToWorldPoint(eventData.position);
        worldPos.z = transform.position.z;

        transform.position = worldPos + _offset;
    }

    public void OnEndDrag(PointerEventData eventData)
    {
        _sortingGroup.sortingOrder = 1;
        Slot targetSlot = Board.Instance.GetClosestSlot(transform.position);
        if (targetSlot == null)
        {
            MoveToSlot(_originalSlot);
            return;
        }

        if (targetSlot.IsEmpty)
        {
            MoveToSlot(targetSlot);
        }
        else
        {
            MergeManager.Instance.MergeCat(this, targetSlot.CurrentCat);
        }
    }

    public void MoveToOriginalSlot()
    {
        if (_originalSlot != null)
        {
            MoveToSlot(_originalSlot);
        }
    }

    private void LeaveCurrentSlot()
    {
        if (CurrentSlot == null)
            return;

        CurrentSlot.RemoveCat();
        CurrentSlot = null;
        transform.SetParent(null);
    }

    private void OnSlotChanged()
    {
        if (CurrentSlot == null)
            return;

        if (!CurrentSlot.CanAttack)
        {
            PlayAnimation(IdleAnim);
            return;
        }

        _attackTimer = Random.Range(0f, Data.GetReloadTime(_level, 0));
    }
    
    private void HandelAttack()
        {
            _attackTimer += Time.deltaTime;
    
            while (_attackTimer >= Data.GetReloadTime(_level, 0))
            {
                _attackTimer -= Data.GetReloadTime(_level, 0);
                Shoot();
            }
        }
    
    private Dog FindClosestDog()
    {
        CleanTargetList();
        Dog closestDog = null;
        float closestDistance = Mathf.Infinity;

        foreach (Dog dog in _dogsInRange)
        {
            if (dog == null || dog.IsDead)
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

    private void Shoot()
    {
        Dog target = FindClosestDog();

        if (target == null)
        {
            return;
        }

        PlayAnimation(ShootAnim);
        
        Projectile projectile = SpawnManager.Instance.SpawnProjectile(target, firePoint.position);
        projectile.Initialize((target.GetHitPoint() - (Vector2)firePoint.position).normalized, Data.GetDamage(_level, 0));
    }

    private void PlayAnimation(string animName) 
    {
        if (_currentAnimation == animName)
            return;
        _currentAnimation = animName;
        switch (animName)
        {
            case ShootAnim:
                shootVFXAnimation.gameObject.SetActive(true);
                _catAnimation.AnimationState.SetAnimation(0, ShootAnim, false);
                shootVFXAnimation.AnimationState.SetAnimation(0, ShootVFXAnim, false);
                _catAnimation.AnimationState.AddAnimation(0, IdleAnim, true, 0f);
                _currentAnimation = IdleAnim;
                break;
            case IdleAnim:
                _catAnimation.AnimationState.SetAnimation(0, IdleAnim, true);
                shootVFXAnimation.gameObject.SetActive(false);
                break;
        }
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
    
    private void CleanTargetList()
    {
        _dogsInRange.RemoveAll(dog => dog == null || dog.IsDead);
    }
}

