using System;
using System.Collections;
using UnityEngine;
using Random = UnityEngine.Random;

public class Wave : MonoBehaviour
{
    public static Wave Instance;

    [Header("Spawner")] 
    [SerializeField] private GameObject spawnPoint;
    [SerializeField] public float minYPoint = 0;
    [SerializeField] public float maxYPoint = 0;

    //---------- Runtime ----------//
    private Coroutine _waveRoutine;
    private LevelData _currentLevelData;
    private int _currentWaveIndex;
    private int _aliveEnemyCount;
    public int CurrentWave { get; private set; }
    public int TotalWave { get; private set; }

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

        GameEvent.OnLevelWon += EndWave;
    }

    private void OnDestroy()
    {
        GameEvent.OnLevelWon -= EndWave;
    }

    public void Initialize(LevelData levelData)
    {
        EndWave(levelData);
        
        if (levelData == null)
            return;
        
        SetLevelData(levelData);
        StartWave();
    }
    
    private void SetLevelData(LevelData levelData)
    {
        if (levelData == null)
        {
            Debug.LogError("Wave: LevelData is null!");
            return;
        }

        _currentLevelData = levelData;
    }

    private void EndWave(LevelData level)
    {
        StopAllCoroutines();
    }
    
    private void StartWave()
    {
        if (_currentLevelData == null)
        {
            Debug.LogError("Wave: LevelData is null!");
            return;
        }

        if (_currentLevelData.waves == null ||
            _currentLevelData.waves.Count == 0)
        {
            Debug.LogError("Wave: Level has no waves!");
            return;
        }

        if (_waveRoutine != null)
        {
            StopCoroutine(_waveRoutine);
        }

        _currentWaveIndex = 0;
        _aliveEnemyCount = 0;
        
        TotalWave = _currentLevelData.waves.Count;
        CurrentWave = 1;

        _waveRoutine = StartCoroutine(RunWaves());
    }

    private IEnumerator RunWaves()
    {
        while (_currentWaveIndex < TotalWave)
        {
            WaveData currentWave =
                _currentLevelData.waves[_currentWaveIndex];

            CurrentWave = _currentWaveIndex + 1;

            GameEvent.HandleWaveChanged(CurrentWave,TotalWave);

            yield return StartCoroutine(
                RunWaveTimeline(currentWave)
            );

            // Wait until all enemies from this wave die
            yield return new WaitUntil(
                () => _aliveEnemyCount <= 0
            );

            bool isLastWave = _currentWaveIndex >= TotalWave - 1;

            if (isLastWave)
            {
                GameEvent.HandleLevelWon(_currentLevelData);
                _waveRoutine = null;
                yield break;
            }

            // Wait before starting the next wave
            yield return new WaitForSeconds(
                currentWave.nextWaveDelay
            );

            _currentWaveIndex++;
        }

        _waveRoutine = null;
    }

    private IEnumerator RunWaveTimeline(WaveData waveData)
    {
        if (waveData.timeline == null ||
            waveData.timeline.Count == 0)
        {
            yield break;
        }

        float previousTime = 0f;

        foreach (SpawnEvent spawnEvent in waveData.timeline)
        {
            float waitTime = spawnEvent.time - previousTime;

            if (waitTime > 0)
            {
                yield return new WaitForSeconds(waitTime);
            }

            SpawnEnemy(spawnEvent.dogData);

            previousTime = spawnEvent.time;
        }
    }

    private void SpawnEnemy(DogData dogData)
    {
        if (dogData == null)
        {
            Debug.LogWarning("Wave: DogData is null!");
            return;
        }


        Dog dog = SpawnManager.Instance.SpawnDog(
            dogData,
            spawnPoint,
            minYPoint,
            maxYPoint
        );

        if (dog == null)
            return;
        
        dog.Initialize(dogData);
        
        _aliveEnemyCount++;

        dog.OnDeath += HandleEnemyDeath;
    }

    private void HandleEnemyDeath(Dog dog)
    {
        dog.OnDeath -= HandleEnemyDeath;

        _aliveEnemyCount--;

        if (_aliveEnemyCount < 0)
            _aliveEnemyCount = 0;
    }
}