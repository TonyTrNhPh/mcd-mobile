using TMPro;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;
using View.Manager;

public class LevelButton : MonoBehaviour
{
    [SerializeField] private Sprite levelLockedSprite;
    [SerializeField] private Sprite levelUnlockedSprite;
    [SerializeField] private Sprite levelCompletedSprite;
    [SerializeField] private TextMeshProUGUI levelText;

    public ELevelButtonState CurrentState { get; private set; }

    private LevelData levelData;
    private Image buttonImage;
    private Button button;

    private void Awake()
    {
        buttonImage = GetComponent<Image>();
        button = GetComponent<Button>();
    }

    public void Initialize( ELevelButtonState state, LevelData data)
    {
        levelData = data;

        SetState(state);
    }

    public void SetState(ELevelButtonState state)
    {
        CurrentState = state;

        switch (state)
        {
            case ELevelButtonState.Locked:
                buttonImage.sprite = levelLockedSprite;
                levelText.gameObject.SetActive(false);
                break;

            case ELevelButtonState.Unlocked:
                buttonImage.sprite = levelUnlockedSprite;
                levelText.gameObject.SetActive(true);
                button.onClick.AddListener(() => LoadLevelData(levelData));
                break;

            case ELevelButtonState.Completed:
                buttonImage.sprite = levelCompletedSprite;
                levelText.gameObject.SetActive(true);
                break;
        }
    }

    public void LoadLevelData(LevelData data)
    {
        if (CurrentState == ELevelButtonState.Locked)
            return;
        LevelManager.Instance.LoadLevel(data);
        Debug.Log($"Load Level : {levelText.text}");
    }
}

public enum ELevelButtonState
{
    Locked,
    Unlocked,
    Completed
}