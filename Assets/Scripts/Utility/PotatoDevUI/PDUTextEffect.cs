using DG.Tweening;
using TMPro;
using UnityEngine;

namespace Utility.PotatoDevUI
{
    public class PDUTextEffect : MonoBehaviour
    {
        public enum Preset
        {
            Fade,
            Float,
            Pop,
            Punch,
            Shake
        }

        [Header("Playback")]
        [SerializeField] private Preset preset = Preset.Float;
        [SerializeField] private bool hasDuration = true;
        [SerializeField] private bool playOnAwake;

        [Header("Timing")]
        [SerializeField] private float fadeInDuration = 0.2f;
        [SerializeField] private float visibleDuration = 2f;
        [SerializeField] private float fadeOutDuration = 0.35f;

        [Header("Float Effect")]
        [SerializeField] private float floatDistance = 24f;

        [Header("Pop Effect")]
        [SerializeField] private float popScale = 1.08f;

        [Header("Punch Effect")]
        [SerializeField] private Vector2 punchStrength = new Vector2(18f, 8f);
        [SerializeField] private float punchDuration = 0.4f;

        [Header("Shake Effect")]
        [SerializeField] private float shakeStrength = 8f;

        private CanvasGroup canvasGroup;
        private RectTransform rectTransform;
        private Vector2 startPosition;
        private Sequence sequence;

        private void Awake()
        {
            rectTransform = GetComponent<RectTransform>();

            if (GetComponent<TextMeshProUGUI>() == null || rectTransform == null)
            {
                Debug.LogError("PDUTextEffect requires TextMeshProUGUI and RectTransform components.");
                enabled = false;
                return;
            }

            canvasGroup = GetComponent<CanvasGroup>();
            if (canvasGroup == null)
                canvasGroup = gameObject.AddComponent<CanvasGroup>();

            startPosition = rectTransform.anchoredPosition;
            Hide();

            if (playOnAwake)
                Play();
        }

        public Sequence Play()
        {
            if (!enabled)
                return null;

            sequence?.Kill();
            gameObject.SetActive(true);
            canvasGroup.alpha = 0f;
            rectTransform.anchoredPosition = startPosition;
            rectTransform.localScale = Vector3.one;

            sequence = DOTween.Sequence();

            switch (preset)
            {
                case Preset.Fade:
                    AddFadePreset();
                    break;
                case Preset.Float:
                    AddFloatPreset();
                    break;
                case Preset.Pop:
                    AddPopPreset();
                    break;
                case Preset.Punch:
                    AddPunchPreset();
                    break;
                case Preset.Shake:
                    AddShakePreset();
                    break;
            }

            sequence.OnComplete(() =>
            {
                if (hasDuration)
                    gameObject.SetActive(false);
                sequence = null;
            });

            return sequence;
        }

        public void Hide()
        {
            sequence?.Kill();
            sequence = null;

            if (canvasGroup != null)
                canvasGroup.alpha = 0f;
            if (rectTransform != null)
            {
                rectTransform.anchoredPosition = startPosition;
                rectTransform.localScale = Vector3.one;
            }

            gameObject.SetActive(false);
        }

        private void AddFadePreset()
        {
            sequence.Append(canvasGroup.DOFade(1f, fadeInDuration));
            AddDuration();
        }

        private void AddFloatPreset()
        {
            sequence.Append(canvasGroup.DOFade(1f, fadeInDuration))
                .Join(rectTransform.DOAnchorPos(
                    startPosition + Vector2.up * (floatDistance * 0.35f),
                    fadeInDuration).SetEase(Ease.OutQuad))
                ;

            if (hasDuration)
            {
                sequence.AppendInterval(visibleDuration)
                    .Append(rectTransform.DOAnchorPos(
                        startPosition + Vector2.up * floatDistance,
                        fadeOutDuration).SetEase(Ease.InQuad))
                    .Join(canvasGroup.DOFade(0f, fadeOutDuration));
            }
        }

        private void AddPopPreset()
        {
            sequence.Append(canvasGroup.DOFade(1f, fadeInDuration))
                .Join(rectTransform.DOScale(popScale, fadeInDuration).SetEase(Ease.OutBack));
            AddDuration();
        }

        private void AddPunchPreset()
        {
            sequence.Append(canvasGroup.DOFade(1f, fadeInDuration))
                .Join(rectTransform.DOPunchAnchorPos(
                    punchStrength, punchDuration, 8, 0.8f));
            AddDuration();
        }

        private void AddShakePreset()
        {
            sequence.Append(canvasGroup.DOFade(1f, fadeInDuration))
                .Join(rectTransform.DOShakeAnchorPos(
                    punchDuration, shakeStrength, 12, 90f, false, true));
            AddDuration();
        }

        private void AddDuration()
        {
            if (!hasDuration)
                return;

            sequence.AppendInterval(visibleDuration)
                .Append(canvasGroup.DOFade(0f, fadeOutDuration));
        }
    }
}
