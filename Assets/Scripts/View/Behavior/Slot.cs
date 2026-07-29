using UnityEngine;

public class Slot : MonoBehaviour
{
    [SerializeField] private SlotType slotType;
    
    public Cat CurrentCat { get; private set; }
    public bool IsEmpty => CurrentCat == null;
    public SlotType Type => slotType;
    public bool CanAttack => slotType == SlotType.Box;

    public void RegisterCat(Cat cat)
    {
        CurrentCat = cat;
    }

    public void RemoveCat()
    {
        CurrentCat = null;
    }
}

public enum SlotType
{
    Ground,
    Box
}