using System.Collections.Generic;
using UnityEngine;

public abstract class PowerUp : MonoBehaviour
{
    public void Remove()
    {
        Destroy(gameObject);
    }
}
