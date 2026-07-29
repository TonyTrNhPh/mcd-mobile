using UnityEngine;

[CreateAssetMenu(menuName = "SO/BossData")]
public class BossData : ScriptableObject
{
    public string bossName;
    public string bossDescription;
    
    public GameObject skin;
    public float damage = 10;
    
    //---------- Animation Speed ----------//
    public float attackSpeed = 1;
    public float shootVFXSpeed = 1;
    public float projectileSpeed = 1;
}
