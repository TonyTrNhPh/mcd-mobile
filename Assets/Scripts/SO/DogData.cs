using UnityEngine;

[CreateAssetMenu(menuName = "SO/DogData")]
public class DogData : ScriptableObject
{
    public string dogName;
    public string dogDescription;
    public DogLevelData[] dogLevels;
}

[System.Serializable]
public class DogLevelData
{
    public GameObject skin;
    public float damage = 10;
    public float reloadTime = 1;
    
    public float health = 100;
    public float distance = 10;
}