using System.Collections.Generic;
using UnityEngine;

public class TNT : PowerUp
{
    private static readonly int AttackTrig =
        Animator.StringToHash("AttackTrig");

    private Animator _animator;
    private BoxCollider2D _boxCollider2D;

    private readonly List<Dog> _dogsInRange = new List<Dog>();

    private float _damage;
    private float _splashRange;

    private bool _hasExploded;

    private void Awake()
    {
        _animator = GetComponent<Animator>();
        _boxCollider2D = GetComponent<BoxCollider2D>();
    }

    private void Start()
    {
        Initialize();
    }

    private void Initialize()
    {
        _damage = UpgradeManager.Instance.GetUpgradeEffectValue(
            PermanentUpgradeType.TNTDamage);

        _splashRange = UpgradeManager.Instance.GetUpgradeEffectValue(
            PermanentUpgradeType.TNTSplashRange);

        _boxCollider2D.size = new Vector2(
            _splashRange,
            _splashRange
        );
    }

    private void OnTriggerEnter2D(Collider2D other)
    {
        if (_hasExploded)
            return;

        if (!other.CompareTag("Enemy"))
            return;

        _hasExploded = true;

        _animator.SetTrigger(AttackTrig);
    }

    private void DealDamage()
    {
        Collider2D[] hits = Physics2D.OverlapBoxAll(
            transform.position,
            _boxCollider2D.size,
            transform.eulerAngles.z
        );

        foreach (Collider2D hit in hits)
        {
            if (!hit.CompareTag("Enemy"))
                continue;

            Dog dog = hit.GetComponent<Dog>();

            if (dog == null)
                continue;

            dog.TakeDamage(_damage);
        }
    }

    public void DestroyTNT()
    {
        Destroy(gameObject);
    }

    private void OnDestroy()
    {
        _dogsInRange.Clear();
    }
}