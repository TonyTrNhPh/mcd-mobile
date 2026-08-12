using System;
using UnityEngine;

public class Projectile : MonoBehaviour
{
    private const float SPEED = 50f;
    
    private Vector2 _direction;
    private float _damage;

    public void Initialize(Vector2 direction, float damage)
    {
        _direction = direction;
        _damage = damage;
    }

    private void Update()
    {
        transform.position += (Vector3)(_direction * SPEED * Time.deltaTime);
    }

    private void OnTriggerEnter2D(Collider2D other)
    {
        Dog dog = other.GetComponentInParent<Dog>();

        if (dog == null)
        {
            return;
        }
        
        if (dog.CompareTag("Enemy"))
        {
            dog.TakeDamage(_damage);
            Destroy(gameObject);
        }
    }
}
