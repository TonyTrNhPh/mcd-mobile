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
        
        public void PlayBgm(AudioClip clip)
        {
            bgmSource.clip = clip;
            bgmSource.Play();
        }
        
        public void StopBgm()
        {
            bgmSource.Stop();
        }

        public void PlaySfx(AudioClip clip)
        {
            sfxSource.PlayOneShot(clip);
        }
        
        public void StopSfx()
        {
            sfxSource.Stop();
        }
    }
}

