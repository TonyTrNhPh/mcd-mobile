using JetBrains.Annotations;
using UnityEngine;

namespace View.Manager
{
    public class AudioManager : MonoBehaviour
    {
        public static AudioManager Instance; 
            
        [SerializeField] private AudioSource bgmSource;
        [SerializeField] private AudioSource sfxSource;
        
        private void Awake()
        {
            if (Instance == null)
            {
                Instance = this;
            }
            else
            {
                Destroy(gameObject);
            }
        }
        
        public void PlayBgm()
        {
            bgmSource.Play();
        }
        
        public void StopBgm()
        {
            bgmSource.Stop();
        }

        public void PlaySound(AudioClip clip)
        {
            sfxSource.PlayOneShot(clip);
        }   
        
        public void StopSfx()
        {
            sfxSource.Stop();
        }
    }
}

