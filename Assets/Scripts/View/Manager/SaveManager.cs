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
            EnsureDefaults();
            LoadData();
        }

        public void LoadData()
        {
            if (!HasData)
            {
                _data = new GameSaveData();
                return;
            }
            
            BinaryFormatter bf = new BinaryFormatter();

            using (FileStream file = File.Open(FullPath, FileMode.Open))
            {
                _data = (GameSaveData)bf.Deserialize(file);
            }
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
        
        [ContextMenu("Potato Dev/Reset All Cat Upgrades")]
        private void ResetAllCatUpgrades()
        {
            foreach (CatSaveData cat in _data.cats)
            {
                cat.upgradeLevel = 0;
            }

            SaveData();

            Debug.Log("All cat upgrades reset to level 0.");
        }
        
        public void ResetCatLevel(CatData catData)
        {
            if (catData == null)
                return;

            CatSaveData catSave = _data.cats.Find(
                cat => cat.catID == catData.catID
            );

            if (catSave != null)
            {
                catSave.upgradeLevel = 0;
                SaveData();
            }
        }

        public int GetCatLevel(CatData catData)
        {
            if (catData == null)
                return 0;

            CatSaveData catSave = _data.cats.Find(
                cat => cat.catID == catData.catID
            );

            if (catSave == null)
                return 0;

            return catSave.upgradeLevel;
        }

        public void SetCatLevel(CatData catData, int catLevel)
        {
            if (catData == null)
                return;

            CatSaveData catSave = _data.cats.Find(
                cat => cat.catID == catData.catID
            );

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

            SaveData();
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
        public List<CatSaveData> cats = new List<CatSaveData>();
    }

    [System.Serializable]
    public class CatSaveData
    {
        public string catID;
        public int upgradeLevel;
    }
}