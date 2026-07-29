using UnityEngine;

namespace View.Manager
{
    public class AudioManager : SingletonMonoBehaviour<AudioManager>
    {
        private const string Tag = "AudioManager";
        [SerializeField] private AudioSource bgmSource;
        [SerializeField] private AudioSource sfxSource;
        
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

