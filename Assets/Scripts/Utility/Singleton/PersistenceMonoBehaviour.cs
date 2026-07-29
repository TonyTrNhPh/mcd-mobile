using UnityEngine;

/// <summary>
/// Base singleton for runtime-created service MonoBehaviours.
/// Use this when the service should be created automatically and not placed in a scene.
/// </summary>
/// <typeparam name="T">Service component type.</typeparam>
public abstract class PersistenceMonoBehaviour<T> : MonoBehaviour where T : MonoBehaviour
{
    private static T _instance;
    public static T I
    {
        get
        {
            if (_instance == null)
            {
                string name = typeof(T).Name;
                var go = GameObject.Find(name);
                if (go == null)
                {
                    go = new GameObject(name);
                    go.AddComponent<T>();
                    
                    if(Application.isPlaying)
                        DontDestroyOnLoad(go);
                }

                _instance = go.GetComponent<T>();
            }

            return _instance;
        }
    }
}