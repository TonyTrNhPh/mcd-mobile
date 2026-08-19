using System;
using TMPro;
using UnityEngine;
using UnityEngine.UI;
using View.Manager;

public class LevelButton : MonoBehaviour
{
    [SerializeField] private Sprite levelLockedSprite;
    [SerializeField] private Sprite levelUnlockedSprite;
    [SerializeField] private Sprite levelCompletedSprite;
    [SerializeField] private Sprite levelBossSprite;
    [SerializeField] private GameObject levelBossIcon;
    [SerializeField] private TextMeshProUGUI levelText;

    //---------- Visual ----------//
    private Image _buttonImage;
    private Button _button;
    private ELevelButtonState _currentState;

    //---------- Data ----------//
    private LevelData _levelData;
    
    private void Awake()
    {
        _buttonImage = GetComponent<Image>();
        _button = GetComponent<Button>();
        _button.onClick.AddListener(HandleLevelButtonClick);
    }

    private void OnDestroy()
    {
        _button.onClick.RemoveListener(HandleLevelButtonClick);
    }

    public void Initialize(ELevelButtonState state, LevelData data)
    {
        _levelData = data;
        SetState(state);
    }

    public void SetState(ELevelButtonState state)
    {
        _currentState = state;

        switch (state)
        {
            case ELevelButtonState.Locked:
                _buttonImage.sprite = levelLockedSprite;
                levelText.gameObject.SetActive(false);
                break;

            case ELevelButtonState.Unlocked:
                if (_levelData.isBossLevel)
                {
                    _buttonImage.sprite = levelBossSprite;
                    levelBossIcon.gameObject.SetActive(true);
                }
                else
                {
                    _buttonImage.sprite = levelUnlockedSprite;
                    levelBossIcon.gameObject.SetActive(false);
                }
                levelText.gameObject.SetActive(true);
                levelText.text = $"{LevelIDFormater(_levelData.levelID)}";
                break;

            case ELevelButtonState.Completed:
                _buttonImage.sprite = levelCompletedSprite;
                levelText.gameObject.SetActive(true);
                levelText.text = $"{LevelIDFormater(_levelData.levelID)}";
                break;
        }
    }

    private string LevelIDFormater(string levelID)
    {
        if (string.IsNullOrEmpty(levelID) || _levelData == null)
            return "";
    
        return levelID.Replace("level_", "");
    }

    private void HandleLevelButtonClick()
    {
        if (_currentState == ELevelButtonState.Locked)
            return;

        if (_levelData == null)
            return;

        GameEvent.HandleLevelButtonClicked(_levelData);
    }
}

public enum ELevelButtonState
{
    Locked,
    Unlocked,
    Completed
}