using UnityEngine;

/// <summary>
/// Singleton base for manager objects.
/// </summary>
/// <typeparam name="T">Manager component type.</typeparam>

public class SingletonMonoBehaviour<T> : MonoBehaviour where T : MonoBehaviour
{
    private static T _instance;
    public static T I
    {
        get
        {
            if (_instance == null)
            {
                _instance = (T)FindObjectOfType(typeof(T));
                if (_instance == null)
                {
                    GameObject obj = new GameObject();
                    obj.name = "[@" + typeof(T).Name + "]";
                    _instance = obj.AddComponent<T>();
                }
            }

            return _instance;
        }
    }
}