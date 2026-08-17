using System;

public static class GameEvent
{
    //---------- Currency Event ----------//
    public static event Action<int> OnCoinChanged = delegate { };
    public static event Action<int> OnGemsChanged = delegate { };
    
    //---------- Button Event ----------//
    public static event Action<LevelData> OnLevelButtonClicked =  delegate { };
    public static event Action OnRestartButtonClicked = delegate { };
    public static event Action OnResumeButtonClicked = delegate { };
    public static event Action OnReturnButtonClicked = delegate { };
    public static event Action OnPauseButtonClicked = delegate { };

    //---------- In Game Event ----------//
    public static event Action <int> OnLevelWon = delegate { };
    public static event Action OnLevelLost = delegate { };
    public static event Action<int, int> OnWaveChange = delegate { };

    //---------- Handle Event ----------//
    public static void HandleCoinChanged(int amount) => OnCoinChanged?.Invoke(amount);
    public static void HandleGemsChanged(int amount) => OnGemsChanged?.Invoke(amount);
    public static void HandleWaveChanged(int current, int max) => OnWaveChange?.Invoke(current, max);
    public static void HandleLevelButtonClicked(LevelData levelData) => OnLevelButtonClicked?.Invoke(levelData);
    public static void HandleRestartButtonClicked()=> OnRestartButtonClicked?.Invoke();
    public static void HandleResumeButtonClicked()=> OnResumeButtonClicked?.Invoke();
    public static void HandleReturnButtonClicked()=> OnReturnButtonClicked?.Invoke();
    public static void HandlePauseButtonClicked()=> OnPauseButtonClicked?.Invoke();
    public static void HandleLevelLost() => OnLevelLost?.Invoke();
    public static void HandleLevelWon(int reward) => OnLevelWon?.Invoke(reward);
}