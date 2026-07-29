using System.Collections;
using UnityEngine;

public class Wave : MonoBehaviour
{
    public static Wave Instance;

    [SerializeField] private GameObject spawnPoint;
    [SerializeField] private int numberOfDog = 0;
    [SerializeField] private float baseInterval = 0.5f; // first spawn delay
    [SerializeField] private float intervalStep = 0.2f; // increment per spawn
    [SerializeField] public float minYPoint = 0;
    [SerializeField] public float maxYPoint = 0;

    private Coroutine _spawnRoutine;

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

    private void Start()
    {
        SpawnDog();
    }

    public void SpawnDog()
    {
        if (_spawnRoutine != null)
            StopCoroutine(_spawnRoutine);

        _spawnRoutine = StartCoroutine(SpawnSequence(numberOfDog));
    }

    private IEnumerator SpawnSequence(int count)
    {
        for (int i = 0; i < count; i++)
        {
            var dogData = SpawnManager.Instance.GetRandomDog();
            int level = Random.Range(0,1);
            
            if (dogData != null && dogData.dogLevels != null && dogData.dogLevels.Length > 0)
                level = Random.Range(0, dogData.dogLevels.Length);

            DogLevelData levelData = null;
            if (dogData != null && dogData.dogLevels != null && dogData.dogLevels.Length > 0)
                levelData = dogData.dogLevels[level];

            float randomY = Random.Range(minYPoint, maxYPoint);
            
            if (levelData != null && levelData.skin != null)
            {
                Vector3 spawnPosition = new Vector3(
                    spawnPoint != null ? spawnPoint.transform.position.x : transform.position.x,
                    randomY,
                    spawnPoint != null ? spawnPoint.transform.position.z : transform.position.z
                );
                
                GameObject go = Instantiate(levelData.skin, spawnPosition, Quaternion.identity, gameObject.transform);

                var dog = go.GetComponent<Dog>();
                if (dog != null)
                {
                    dog.Initialize(dogData, level);
                }
            }

            float interval = baseInterval + Mathf.Min(i * intervalStep, 2f);
            yield return new WaitForSeconds(interval);
        }

        _spawnRoutine = null;
    }
}
