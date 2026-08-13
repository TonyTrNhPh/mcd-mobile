using System.Collections.Generic;
using UnityEngine;

public class SpawnManager : MonoBehaviour
{
    public static SpawnManager Instance;
    [SerializeField] private GameObject objectPool;

    private readonly List<Cat> catOnScene = new List<Cat>();
    private readonly List<Dog> dogsOnScene = new List<Dog>();
    private readonly List<Projectile> projectilesOnScene = new List<Projectile>();

    private void Awake()
    {
        if (Instance == null)
        {
            Instance = this;
        }
        else
        {
            Destroy(gameObject);
        }
    }

    public void Initialize()
    {
        RemoveAllDogs();
        RemoveAllCats();
        RemoveAllProjectiles();
    }

    #region Normal

    public Cat SpawnCat(CatData catData, int level, Slot slot)
    {
        if (catData == null)
        {
            Debug.LogWarning("SpawnManager SpawnCat(): catData is null");
            return null;
        }

        if (slot == null)
        {
            Debug.LogWarning("SpawnManager SpawnCat(): slot is null");
            return null;
        }

        GameObject prefab = catData.GetCatVisuals(level);

        if (prefab == null)
        {
            Debug.LogWarning($"No cat prefab found for {catData.name} at level {level}");
            return null;
        }

        GameObject catObject = Instantiate(prefab, slot.transform.position, Quaternion.identity);
        Cat cat = catObject.GetComponent<Cat>();
        if (cat == null)
        {
            Debug.LogWarning("SpawnManager SpawnCat(): Cat component not found on prefab");
            Destroy(catObject);
            return null;
        }

        cat.Initialize(catData, level, slot);

        catOnScene.Add(cat);

        return cat;
    }

    public void RemoveAllCats()
    {
        foreach (Cat cat in catOnScene)
        {
            if (cat != null)
                Destroy(cat.gameObject);
        }

        catOnScene.Clear();
    }

    public Projectile SpawnProjectile(Dog target, Vector2 startPoint)
    {
        if (target == null)
        {
            return null;
        }

        Vector2 targetPoint = target.GetHitPoint();

        targetPoint.x += Random.Range(-3f, 3f);
        targetPoint.y += Random.Range(-3f, 3f);

        Vector2 direction = (targetPoint - startPoint).normalized;
        float angle = Mathf.Atan2(direction.y, direction.x) * Mathf.Rad2Deg;
        Quaternion rotation = Quaternion.Euler(0f, 0f, angle);

        Projectile projectile = Instantiate(
            DataManager.Instance.GetRandomBulletPrefab(),
            startPoint,
            rotation,
            objectPool.transform
        );

        projectilesOnScene.Add(projectile);

        return projectile;
    }

    public void RemoveAllProjectiles()
    {
        foreach (Projectile projectile in projectilesOnScene)
        {
            if (projectile != null)
                Destroy(projectile.gameObject);
        }

        projectilesOnScene.Clear();
    }

    public Dog SpawnDog(DogData dogData, GameObject spawnPoint, float min, float max)
    {
        if (dogData == null)
        {
            Debug.LogWarning("SpawnManager SpawnDog(): dogData is null");
            return null;
        }

        float randomY = Random.Range(min, max);

        Vector3 spawnPosition = new Vector3(
            spawnPoint != null ? spawnPoint.transform.position.x : transform.position.x,
            randomY,
            spawnPoint != null ? spawnPoint.transform.position.z : transform.position.z
        );

        GameObject go = Instantiate(dogData.skin, spawnPosition, Quaternion.identity, objectPool.transform);
        Dog dog = go.GetComponent<Dog>();
        if (dog == null)
        {
            Debug.LogWarning("SpawnManager SpawnDog(): Dog component not found on prefab");
            Destroy(go);
            return null;
        }

        dogsOnScene.Add(dog);

        return dog;
    }

    public void RemoveAllDogs()
    {
        foreach (Dog dog in dogsOnScene)
        {
            if (dog != null)
                Destroy(dog.gameObject);
        }

        dogsOnScene.Clear();
    }

    public void SpawnBoss()
    {
    }

    #endregion

    #region Utilities

    public void SpawnGuardianCat()
    {
    }

    public void SpawnBoxingCat()
    {
    }


    public void SpawnSpike()
    {
    }

    public void SpawnTNT()
    {
    }

    #endregion
}