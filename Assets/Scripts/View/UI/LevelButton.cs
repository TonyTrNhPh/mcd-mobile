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
    [SerializeField] private TextMeshProUGUI levelText;

    //---------- Visual ----------//
    private Image _buttonImage;
    private Button _button;
    private ELevelButtonState _currentState;

    //---------- Data ----------//
    private LevelData _levelData;

    //---------- Event ----------//
    public event Action<LevelData> OnLevelButtonClicked;

    private void Awake()
    {
        _buttonImage = GetComponent<Image>();
        _button = GetComponent<Button>();
        _button.onClick.AddListener(HandleClick);
    }

    private void OnDestroy()
    {
        _button.onClick.RemoveListener(HandleClick);
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
                _buttonImage.sprite = levelUnlockedSprite;
                levelText.gameObject.SetActive(true);
                levelText.text = $"{_levelData.levelID}";
                break;

            case ELevelButtonState.Completed:
                _buttonImage.sprite = levelCompletedSprite;
                levelText.gameObject.SetActive(true);
                levelText.text = $"{_levelData.levelID}";
                break;
        }
    }

    private void HandleClick()
    {
        if (_currentState == ELevelButtonState.Locked)
            return;

        if (_levelData == null)
            return;

        OnLevelButtonClicked?.Invoke(_levelData);
    }
}

public enum ELevelButtonState
{
    Locked,
    Unlocked,
    Completed
}