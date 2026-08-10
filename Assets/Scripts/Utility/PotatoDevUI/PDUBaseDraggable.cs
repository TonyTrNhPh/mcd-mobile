using UnityEngine;
using UnityEngine.EventSystems;

namespace PotatoDevUI
{
    public class PDUBaseDraggable : MonoBehaviour, IBeginDragHandler, IDragHandler, IEndDragHandler
    {
        [Header("Drag")] [SerializeField] private DragType dragType = DragType.None;
        [SerializeField] private float dragSpeed = 1f;
        [SerializeField] private float minDistance;
        [SerializeField] private float maxDistance;

        private Vector3 dragOrigin;

        public void OnBeginDrag(PointerEventData eventData)
        {
            dragOrigin = transform.localPosition;
        }

        public void OnDrag(PointerEventData eventData)
        {
            Vector3 position = transform.localPosition;

            switch (dragType)
            {
                case DragType.Horizontal:
                    position.x += eventData.delta.x * dragSpeed;
                    position.x = Mathf.Clamp(position.x, minDistance, maxDistance);
                    break;
                case DragType.Vertical:
                    position.y += eventData.delta.y * dragSpeed;
                    position.y = Mathf.Clamp(position.y, minDistance, maxDistance);
                    break;
            }


            transform.localPosition = position;
        }

        public void OnEndDrag(PointerEventData eventData)
        {
        
        }
    }

    public enum DragType
    {
        None,
        Horizontal,
        Vertical,
    }
}
