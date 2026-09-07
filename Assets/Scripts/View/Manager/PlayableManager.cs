using System.Collections.Generic;
using UnityEngine;
using View.Manager;

public class PlayableManager : MonoBehaviour
{
    public static PlayableManager Instance;
    
    [SerializeField] [LunaPlaygroundField("Level Json", 0, "Level Design")] [TextArea] string levelJson;
    [SerializeField] [LunaPlaygroundField("Level Reward", 1, "Level Design")] int levelReward;
  
    private void Awake()
    {
        if (Instance == null)
        {
            Instance = this;
            DontDestroyOnLoad(gameObject);
        }
        else
        {
            Destroy(gameObject);
            return;
        }

        if (SaveManager.Instance != null)
        {
            SaveManager.Instance.useDefaultValues = true;
        }
    }
    
    public LevelData BuildLevelFromJson()
    {
        if (string.IsNullOrWhiteSpace(levelJson))
        {
            Debug.LogError("Level JSON missing.");
            return null;
        }

        LevelWaveJson root = Newtonsoft.Json.JsonConvert.DeserializeObject<LevelWaveJson>(levelJson);
        if (root == null || root.waves == null)
        {
            Debug.LogError("Invalid JSON level format.");
            return null;
        }

        LevelData level = ScriptableObject.CreateInstance<LevelData>();
        level.levelID = "playable_level";
        level.levelName = "Playable Level";
        level.bonusGem = levelReward;
        level.waves = new List<WaveData>();

        foreach (var waveJson in root.waves)
        {
            WaveData wave = new WaveData
            {
                nextWaveDelay = waveJson.nextWaveDelay,
                timeline = new List<SpawnEvent>()
            };

            foreach (var eventJson in waveJson.timeline)
            {
                DogData dog = DataManager.Instance.GetDogData(eventJson.dogID);
                if (dog == null)
                {
                    Debug.LogWarning($"Dog not found: {eventJson.dogID}");
                    continue;
                }

                wave.timeline.Add(new SpawnEvent
                {
                    time = eventJson.time,
                    dogData = dog
                });
            }

            wave.timeline.Sort((a, b) => a.time.CompareTo(b.time));
            level.waves.Add(wave);
        }

        return level;
    }

    public void StartPlayableLevel()
    {
        LevelData level = BuildLevelFromJson();
        if (level == null) return;

        Luna.Unity.LifeCycle.GameStarted();

        GameEvent.HandleLevelButtonClicked(level);
    }
    
    public int CurrentReward
    {
        get
        {
            if (LevelManager.Instance != null &&
                LevelManager.Instance.CurrentLevelData != null)
                return LevelManager.Instance.CurrentLevelData.bonusGem;

            return levelReward;
        }
    }

    public void PlayableEnd()
    {
        Luna.Unity.Playable.InstallFullGame();
        Luna.Unity.LifeCycle.GameEnded();
    }
    
}
