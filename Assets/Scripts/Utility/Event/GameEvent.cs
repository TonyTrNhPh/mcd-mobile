using System;

public static class GameEvent
{
    // Last bonus gem awarded when a level completes. Stored so UI that enables
    // after the event can still read the value.
    public static int LastLevelBonusGem { get; private set; }
    //---------- Currency ----------//
    public static event Action<int> OnCoinChanged = delegate { };
    public static event Action<int> OnGemsChanged = delegate { };
    public static event Action<LevelData> OnLevelButtonClicked =  delegate { };


    //---------- Level ----------//
    public static event Action <int>OnLevelComplete = delegate { };
    public static event Action OnBarrierDestroy = delegate { };
    public static event Action<int, int> OnWaveChange = delegate { };

    public static void CoinChanged(int amount)
    {
        OnCoinChanged?.Invoke(amount);
    }

    public static void GemsChanged(int amount)
    {
        OnGemsChanged?.Invoke(amount);
    }

    public static void WaveChanged(int current, int max)
    {
        OnWaveChange?.Invoke(current, max);
    }
    
    public static void BarrierDestroy()
    {
        OnBarrierDestroy?.Invoke();
    }
    
    public static void LevelButtonClicked(LevelData levelData)
    {
        OnLevelButtonClicked?.Invoke(levelData);
    }

    public static void LevelComplete(int gem)
    {
        LastLevelBonusGem = gem;
        OnLevelComplete?.Invoke(gem);
    }

}