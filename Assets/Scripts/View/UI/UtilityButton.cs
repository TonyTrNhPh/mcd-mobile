using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public class UtilityButton : MonoBehaviour, IBeginDragHandler, IDragHandler, IEndDragHandler
{
    [Header("Utility")]
    [SerializeField] private UtilityType type;
    [SerializeField] private GameObject typePrefab;
    
    [Header("Cool Down")]
    [SerializeField] private float coolDown = 5f;
    [SerializeField] private Image coolDownImageFill;

    [Header("Validation")]
    [SerializeField] private GameObject validateArea;
    [SerializeField] private Color activeColor = Color.white;
    [SerializeField] private Color inactiveColor = Color.gray;

    private Camera _camera;
    private GameObject _previewObject;

    private Collider2D _validateCollider;
    private SpriteRenderer _validateRenderer;

    private bool _isDragging;
    private bool _isOnCoolDown;

    private void Awake()
    {
        _camera = Camera.main;

        if (validateArea != null)
        {
            _validateCollider = validateArea.GetComponent<Collider2D>();
            _validateRenderer = validateArea.GetComponent<SpriteRenderer>();
        }
    }

    private void Start()
    {
        if (coolDownImageFill != null)
            coolDownImageFill.fillAmount = 0f;
    }

    private void OnEnable()
    {
        if (coolDownImageFill != null)
            coolDownImageFill.fillAmount = 0f;

        _isOnCoolDown = false;
    }

    private void StartCoolDown()
    {
        StartCoroutine(CoolDownRoutine());
    }

    private IEnumerator CoolDownRoutine()
    {
        _isOnCoolDown = true;

        float elapsedTime = 0f;

        if (coolDownImageFill != null)
            coolDownImageFill.fillAmount = 1f;

        while (elapsedTime < coolDown)
        {
            elapsedTime += Time.deltaTime;

            float progress = elapsedTime / coolDown;

            if (coolDownImageFill != null)
                coolDownImageFill.fillAmount = progress;

            yield return null;
        }

        if (coolDownImageFill != null)
            coolDownImageFill.fillAmount = 0f;

        _isOnCoolDown = false;
    }

    public void OnBeginDrag(PointerEventData eventData)
    {
        if (_isOnCoolDown)
            return;
        
        if (typePrefab == null)
        {
            Debug.LogError($"No prefab found for {type}.");
            return;
        }
        
        if (_validateCollider == null)
        {
            Debug.LogError("Validation area has no Collider2D.");
            return;
        }
        
        _validateRenderer.color = new Color(1,1,1, 1);

        _isDragging = true;

        _previewObject = Instantiate(typePrefab);

        Collider2D col = _previewObject.GetComponent<Collider2D>();

        if (col != null)
        {
            col.enabled = false;
        }
        
        SpriteRenderer spriteRenderer =_previewObject.GetComponent<SpriteRenderer>();

        if (spriteRenderer != null)
        {
            Color color = spriteRenderer.color;
            color.a = 0.7f;
            spriteRenderer.color = color;
        }

        SetValidationVisual(false);

        UpdatePreviewPosition(eventData);
    }

    public void OnDrag(PointerEventData eventData)
    {
        if (!_isDragging || _previewObject == null)
            return;

        UpdatePreviewPosition(eventData);
    }

    public void OnEndDrag(PointerEventData eventData)
    {
        if (!_isDragging || _previewObject == null || validateArea == null)
            return;
        
        UpdatePreviewPosition(eventData);

        bool isValid = IsValidPosition();

        Vector3 spawnPosition = _previewObject.transform.position;
        
        Destroy(_previewObject);

        if (isValid)
        {
            Instantiate(typePrefab, spawnPosition, Quaternion.identity);
            StartCoolDown();
        }

        SetValidationVisual(false);

        _validateRenderer.color = new Color(0, 0, 0, 0);
        _previewObject = null;
        _isDragging = false;
    }

    private void UpdatePreviewPosition(PointerEventData eventData)
    {
        Vector3 screenPosition = eventData.position;

        Vector3 worldPosition = _camera.ScreenToWorldPoint(
            new Vector3(
                screenPosition.x,
                screenPosition.y,
                -_camera.transform.position.z
            )
        );

        worldPosition.z = 0f;

        _previewObject.transform.position = worldPosition;

        bool isValid = IsValidPosition();

        SetValidationVisual(isValid);
    }

    private bool IsValidPosition()
    {
        if (_previewObject == null || _validateCollider == null)
            return false;

        return _validateCollider.OverlapPoint(
            _previewObject.transform.position
        );
    }

    private void SetValidationVisual(bool isValid)
    {
        if (_validateRenderer == null)
            return;

        _validateRenderer.color =
            isValid ? activeColor : inactiveColor;
    }
}

public enum UtilityType
{
    TNT,
    Spike,
    Boxing,
    Guardian
}