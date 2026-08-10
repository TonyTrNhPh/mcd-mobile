using TMPro;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

public class LevelButton : MonoBehaviour
{

    [SerializeField] private Sprite levelLockedSprite;
    [SerializeField] private Sprite levelUnlockedSprite;
    [SerializeField] private Sprite levelCompletedSprite;
    [SerializeField] private TextMeshProUGUI levelText;

    public LevelButtonState CurrentState { get; private set; }

    private LevelData levelData;
    private Image buttonImage;

    private void Awake()
    {
        buttonImage = GetComponent<Image>();
    }

    public void Initialize(string levelNumber,
        LevelButtonState state,
        LevelData data)
    {
        levelText.text = levelNumber;

        levelData = data;

        SetState(state);
    }

    public void SetState(LevelButtonState state)
    {
        CurrentState = state;

        switch (state)
        {
            case LevelButtonState.Locked:
                buttonImage.sprite = levelLockedSprite;
                levelText.gameObject.SetActive(false);
                break;

            case LevelButtonState.Unlocked:
                buttonImage.sprite = levelUnlockedSprite;
                levelText.gameObject.SetActive(true);
                break;

            case LevelButtonState.Completed:
                buttonImage.sprite = levelCompletedSprite;
                levelText.gameObject.SetActive(true);
                break;
        }
    }

    public void OnClick()
    {
        if (CurrentState == LevelButtonState.Locked)
            return;

        Debug.Log($"Load Level : {levelText.text}");

        // Later
        // GameManager.Instance.LoadLevel(levelData);

        // or
        // SceneManager.LoadScene(levelData.SceneName);
    }
}

public enum LevelButtonState
{
    Locked,
    Unlocked,
    Completed
}