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
    public float damage = 10;
    public float reloadTime = 1;
    public float health = 100;
    public float distance = 10;
}
