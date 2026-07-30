using UnityEngine;
using Utility.Constant;

namespace View.Manager
{
    public class SaveManager : MonoBehaviour
    {
        public static SaveManager Instance;

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
        }

        public float GetVolume()
        {
            return PlayerPrefs.GetFloat(CommonSave.VolumeKey, CommonSave.DefaultVolume);
        }

        public void SetVolume(float value)
        {
            float clampedValue = Mathf.Clamp01(value);
            PlayerPrefs.SetFloat(CommonSave.VolumeKey, clampedValue);
            PlayerPrefs.Save();
        }

        public bool GetVibration()
        {
            int defaultValue = CommonSave.DefaultVibration ? 1 : 0;
            return PlayerPrefs.GetInt(CommonSave.VibrationKey, defaultValue) == 1;
        }

        public void SetVibration(bool isEnabled)
        {
            PlayerPrefs.SetInt(CommonSave.VibrationKey, isEnabled ? 1 : 0);
            PlayerPrefs.Save();
        }

        public bool GetDarkMode()
        {
            int defaultValue = CommonSave.DefaultDarkMode ? 1 : 0;
            return PlayerPrefs.GetInt(CommonSave.DarkModeKey, defaultValue) == 1;
        }

        public void SetDarkMode(bool isDarkMode)
        {
            PlayerPrefs.SetInt(CommonSave.DarkModeKey, isDarkMode ? 1 : 0);
            PlayerPrefs.Save();
        }

        public string GetLanguage()
        {
            return PlayerPrefs.GetString(CommonSave.LanguageKey, CommonSave.DefaultLanguage);
        }

        public void SetLanguage(string languageCode)
        {
            string value = string.IsNullOrWhiteSpace(languageCode)
                ? CommonSave.DefaultLanguage
                : languageCode.Trim();

            PlayerPrefs.SetString(CommonSave.LanguageKey, value);
            PlayerPrefs.Save();
        }

        private void EnsureDefaults()
        {
            if (!PlayerPrefs.HasKey(CommonSave.VolumeKey))
            {
                PlayerPrefs.SetFloat(CommonSave.VolumeKey, CommonSave.DefaultVolume);
            }

            if (!PlayerPrefs.HasKey(CommonSave.VibrationKey))
            {
                PlayerPrefs.SetInt(CommonSave.VibrationKey, CommonSave.DefaultVibration ? 1 : 0);
            }

            if (!PlayerPrefs.HasKey(CommonSave.DarkModeKey))
            {
                PlayerPrefs.SetInt(CommonSave.DarkModeKey, CommonSave.DefaultDarkMode ? 1 : 0);
            }

            if (!PlayerPrefs.HasKey(CommonSave.LanguageKey))
            {
                PlayerPrefs.SetString(CommonSave.LanguageKey, CommonSave.DefaultLanguage);
            }

            PlayerPrefs.Save();
        }

    }
}