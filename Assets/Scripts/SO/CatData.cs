using UnityEngine;

[CreateAssetMenu(menuName = "SO/CatData")]
public class CatData : ScriptableObject
{
    public string catName;
    public string catDescription;
    public CatLevelData[] catLevels;
}

[System.Serializable]
public class CatLevelData
{
    public GameObject skin;
    public float damage = 10;
    public float reloadTime = 1;
    public float fireRange = 42;
}