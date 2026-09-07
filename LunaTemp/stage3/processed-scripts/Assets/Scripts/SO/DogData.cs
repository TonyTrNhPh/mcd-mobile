using UnityEngine;

[CreateAssetMenu(menuName = "SO/DogData")]
public class DogData : ScriptableObject
{
    [Header("Information")] 
    public string dogID;
    public string dogName;
    [TextArea] public string dogDescription;
    
    [Header("Visuals")]
    public GameObject skin;
    
    [Header("Stat")]
    public float baseDamage = 10;
    public float baseReloadTime = 1;
    public float baseHealth = 100;
    public float baseSpeed = 10;
}
