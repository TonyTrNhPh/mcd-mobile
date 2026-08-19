using System.Collections.Generic;
using System.IO;
using System.Runtime.Serialization.Formatters.Binary;
using UnityEngine;
using Utility.Constant;

namespace View.Manager
{
    public class SaveManager : MonoBehaviour
    {
        public static SaveManager Instance;

        private const string DataPath = "/PotatoDev/mcddata.dat";

        private GameSaveData _data;

        public string FullPath => Application.persistentDataPath + DataPath;
        public bool HasData => File.Exists(FullPath);

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

            DontDestroyOnLoad(gameObject);
            LoadData();
        }

        public void LoadData()
        {
            if (!HasData)
            {
                _data = new GameSaveData();
                EnsureDefaults();
                EnsureLevelSaveData();
                SaveData();
                return;
            }

            BinaryFormatter bf = new BinaryFormatter();

            using (FileStream file = File.Open(FullPath, FileMode.Open))
            {
                _data = (GameSaveData)bf.Deserialize(file);
            }

            if (_data.upgrades == null)
                _data.upgrades = new List<UpgradeSaveData>();

            if (_data.cats == null)
                _data.cats = new List<CatSaveData>();

            if (_data.levels == null)
                _data.levels = new List<LevelSaveData>();

            EnsureLevelSaveData();
            EnsureDefaults();
        }

        public void SaveData()
        {
            BinaryFormatter bf = new BinaryFormatter();

            string directory = Path.GetDirectoryName(FullPath);

            if (!Directory.Exists(directory))
            {
                Directory.CreateDirectory(directory);
            }

            using (FileStream file = File.Create(FullPath))
            {
                bf.Serialize(file, _data);
            }
        }

        [ContextMenu("Reset Data")]
        private void ResetData()
        {
            LoadData();

            if (_data == null)
            {
                Debug.LogError("SaveManager: Save data is null.");
                return;
            }

            _data.gems = CommonSaveKey.DefaultGems;

            if (_data.cats != null)
            {
                foreach (CatSaveData cat in _data.cats)
                {
                    cat.upgradeLevel = 0;
                }
            }

            if (_data.upgrades != null)
            {
                foreach (UpgradeSaveData upgrade in _data.upgrades)
                {
                    upgrade.upgradeLevel = 0;
                }
            }

            if (_data.levels != null)
            {
                foreach (LevelSaveData level in _data.levels)
                {
                    level.isCompleted = false;
                    level.isUnlocked = false;
                }
            }

            SaveData();
        }

        public int GetGems()
        {
            return _data.gems;
        }

        public void AddGems(int amount)
        {
            if (amount <= 0)
                return;

            _data.gems += amount;

            GameEvent.HandleCoinChanged(_data.gems);
        }

        public bool SpendGems(int amount)
        {
            if (amount <= 0)
                return false;

            if (_data.gems < amount)
                return false;

            _data.gems -= amount;

            GameEvent.HandleCoinChanged(_data.gems);

            return true;
        }

        public int GetCatLevel(CatData catData)
        {
            if (catData == null)
                return 0;

            CatSaveData catSave = _data.cats.Find(cat => cat.catID == catData.catID);

            if (catSave == null)
                return 0;

            return catSave.upgradeLevel;
        }

        public void SetCatLevel(CatData catData, int catLevel)
        {
            if (catData == null)
                return;

            CatSaveData catSave = _data.cats.Find(cat => cat.catID == catData.catID);

            if (catSave == null)
            {
                catSave = new CatSaveData
                {
                    catID = catData.catID,
                    upgradeLevel = catLevel
                };

                _data.cats.Add(catSave);
            }
            else
            {
                catSave.upgradeLevel = catLevel;
            }
        }

        public List<LevelSaveData> GetAllLevelSaveData()
        {
            return _data.levels;
        }

        private void EnsureLevelSaveData()
        {
            List<LevelData> levelDataList = DataManager.Instance.GetAllLevelData();

            foreach (LevelData levelData in levelDataList)
            {
                if (levelData == null)
                    continue;

                bool exists = _data.levels.Exists(save => save.levelID == levelData.levelID
                );

                if (!exists)
                {
                    _data.levels.Add(new LevelSaveData
                    {
                        levelID = levelData.levelID,
                        isCompleted = false,
                        isUnlocked = false
                    });
                }
            }

            if (levelDataList.Count > 0)
            {
                LevelSaveData firstLevel = _data.levels.Find(save => save.levelID == levelDataList[0].levelID);

                firstLevel.isUnlocked = true;
            }
        }

        public void SetLevelComplete(string levelID)
        {
            LevelSaveData levelSave = _data.levels.Find(save => save.levelID == levelID);
            
            if (levelSave == null)
                return;
            
            levelSave.isCompleted = true;
        }

        public void SetLevelUnlocked(string levelID)
        {
            LevelSaveData levelSave = _data.levels.Find(save => save.levelID == levelID);
            
            if (levelSave == null)
                return;
            
            levelSave.isUnlocked = true;
        }

        public int GetUpgradeLevelByType(PermanentUpgradeType type)
        {
            UpgradeSaveData upgradeSave = _data.upgrades.Find(upgrade => upgrade.type == type);

            if (upgradeSave == null)
                return 0;

            return upgradeSave.upgradeLevel;
        }

        public void SetUpgradeLevelByType(PermanentUpgradeType type, int upgradeLevel)
        {
            UpgradeSaveData upgradeSave = _data.upgrades.Find(upgrade => upgrade.type == type);

            if (upgradeSave == null)
            {
                upgradeSave = new UpgradeSaveData
                {
                    type = type,
                    upgradeLevel = upgradeLevel
                };

                _data.upgrades.Add(upgradeSave);
            }
            else
            {
                upgradeSave.upgradeLevel = upgradeLevel;
            }
        }

        public float GetVolume()
        {
            return PlayerPrefs.GetFloat(CommonSaveKey.VolumeKey, CommonSaveKey.DefaultVolume);
        }

        public void SetVolume(float value)
        {
            float clampedValue = Mathf.Clamp01(value);
            PlayerPrefs.SetFloat(CommonSaveKey.VolumeKey, clampedValue);
            PlayerPrefs.Save();
        }

        public bool GetVibration()
        {
            int defaultValue = CommonSaveKey.DefaultVibration ? 1 : 0;
            return PlayerPrefs.GetInt(CommonSaveKey.VibrationKey, defaultValue) == 1;
        }

        public void SetVibration(bool isEnabled)
        {
            PlayerPrefs.SetInt(CommonSaveKey.VibrationKey, isEnabled ? 1 : 0);
            PlayerPrefs.Save();
        }

        public string GetLanguage()
        {
            return PlayerPrefs.GetString(CommonSaveKey.LanguageKey, CommonSaveKey.DefaultLanguage);
        }

        public void SetLanguage(string languageCode)
        {
            string value = string.IsNullOrWhiteSpace(languageCode)
                ? CommonSaveKey.DefaultLanguage
                : languageCode.Trim();

            PlayerPrefs.SetString(CommonSaveKey.LanguageKey, value);
            PlayerPrefs.Save();
        }

        private void EnsureDefaults()
        {
            if (!PlayerPrefs.HasKey(CommonSaveKey.VolumeKey))
            {
                PlayerPrefs.SetFloat(CommonSaveKey.VolumeKey, CommonSaveKey.DefaultVolume);
            }

            if (!PlayerPrefs.HasKey(CommonSaveKey.VibrationKey))
            {
                PlayerPrefs.SetInt(CommonSaveKey.VibrationKey, CommonSaveKey.DefaultVibration ? 1 : 0);
            }

            if (!PlayerPrefs.HasKey(CommonSaveKey.DarkModeKey))
            {
                PlayerPrefs.SetInt(CommonSaveKey.DarkModeKey, CommonSaveKey.DefaultDarkMode ? 1 : 0);
            }

            if (!PlayerPrefs.HasKey(CommonSaveKey.LanguageKey))
            {
                PlayerPrefs.SetString(CommonSaveKey.LanguageKey, CommonSaveKey.DefaultLanguage);
            }

            PlayerPrefs.Save();
        }
    }

    [System.Serializable]
    public class GameSaveData
    {
        public int gems = CommonSaveKey.DefaultGems;
        public List<LevelSaveData> levels = new List<LevelSaveData>();
        public List<CatSaveData> cats = new List<CatSaveData>();
        public List<UpgradeSaveData> upgrades = new List<UpgradeSaveData>();
    }

    [System.Serializable]
    public class UpgradeSaveData
    {
        public PermanentUpgradeType type = PermanentUpgradeType.None;
        public int upgradeLevel = 0;
    }

    [System.Serializable]
    public class CatSaveData
    {
        public string catID;
        public int upgradeLevel = 0;
    }

    [System.Serializable]
    public class LevelSaveData
    {
        public string levelID;
        public bool isCompleted = false;
        public bool isUnlocked = false;
    }
}