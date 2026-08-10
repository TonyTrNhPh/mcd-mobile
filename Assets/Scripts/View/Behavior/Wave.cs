using System;
using System.Collections;
using UnityEngine;
using Random = UnityEngine.Random;

public class Wave : MonoBehaviour
{
    public static Wave Instance;

    [SerializeField] private GameObject spawnPoint;
    [SerializeField] public float minYPoint = 0;
    [SerializeField] public float maxYPoint = 0;

    //---------- Event ----------//
    public event Action<int, int> OnWaveChange;

    private Coroutine _spawnRoutine;
    private LevelData _currentLevelData;

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

    public void SetLevelData(LevelData levelData)
    {
        if (levelData == null)
        {
            Debug.LogError("LevelData is null!");
            return;
        }

        _currentLevelData = levelData;
    }

    public void StartWave()
    {
        if (_currentLevelData == null)
        {
            Debug.LogError("LevelData is null!");
            return;
        }
        
        if (_spawnRoutine != null)
            StopCoroutine(_spawnRoutine);

        _spawnRoutine = StartCoroutine(SpawnWavesSequence());
    }

    private IEnumerator SpawnWavesSequence()
    {
        int totalWaves = _currentLevelData.waves.Count;
        OnWaveChange?.Invoke(1, totalWaves);

        for (int i = 0; i < totalWaves; i++)
        {
            WaveData waveData = _currentLevelData.waves[i];
            yield return new WaitForSeconds(waveData.startDelay);
            OnWaveChange?.Invoke(i + 1, totalWaves);
            foreach (var groupOfEnemies in waveData.groupsOfEnemies)
            {
                yield return StartCoroutine(SpawnGroup(groupOfEnemies));
                yield return new WaitForSeconds(
                    waveData.betweenEachGroup
                );
            }
        }
        _spawnRoutine = null;
    }

    private IEnumerator SpawnGroup(GroupOfEnemy groupOfEnemies)
    {
        foreach (var enemyData in groupOfEnemies.enemyData)
        {
            for (int i = 0; i < enemyData.numberOfDogs; i++)
            {
                SpawnSingleDog(enemyData.dogData);
                if (i < enemyData.numberOfDogs - 1)
                    yield return new WaitForSeconds(groupOfEnemies.betweenEachEnemy);
            }
        }
    }

    private void SpawnSingleDog(DogData dogData)
    {
        if (dogData == null || dogData.skin == null)
        {
            Debug.LogWarning("DogData or its skin is null!");
            return;
        }

        float randomY = Random.Range(minYPoint, maxYPoint);

        Vector3 spawnPosition = new Vector3(
            spawnPoint != null ? spawnPoint.transform.position.x : transform.position.x,
            randomY,
            spawnPoint != null ? spawnPoint.transform.position.z : transform.position.z
        );

        GameObject go = Instantiate(dogData.skin, spawnPosition, Quaternion.identity, gameObject.transform);

        var dog = go.GetComponent<Dog>();
        if (dog != null)
        {
            dog.Initialize(dogData);
        }
    }
}