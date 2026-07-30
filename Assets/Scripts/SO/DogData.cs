using UnityEngine;

[CreateAssetMenu(menuName = "SO/DogData")]
public class DogData : ScriptableObject
{
    [Header("Dog Description")]
    public string dogName;
    public string dogDescription;

    [Header("Dog Stat")]
    public float damage = 10;
    public float reloadTime = 1;
    public float health = 100;
    public float distance = 10;
    
    [Header("Dog Skin")]
    public GameObject skin;
}