using UnityEngine;

public abstract class Targetable : MonoBehaviour
{
    public bool IsDestroyed { get; protected set; }
    public bool IsTargeted { get; set; }
    
    public abstract int TargetPriority { get; }
    public abstract void TakeDamage(float damage);
}
