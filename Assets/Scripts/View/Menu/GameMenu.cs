using UnityEngine;

public class GameMenu : MonoBehaviour
{
    public void OnAddButtonClicked()
    {
        SpawnManager.Instance.board.SpawnCat();
    }

    public void OnRepairButtonClicked()
    {
        Barrier.Instance.RepairBarrier();
    }
}
