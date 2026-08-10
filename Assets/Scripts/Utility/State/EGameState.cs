namespace Utility.State
{
    public enum EGameState
    {
        Loading, // Loading Screen for every time changing game state
        Home, // Home Screen
        LevelSelect, // Level Selection Screen 
        CatUpgrade, //  Shop
        BaseUpgrade, // Shop
        Shop, // Shop
        InGame,
        Pause, 
    }

    public enum ELevelState
    {
        Started,
        Win,
        Lose
    }
}
