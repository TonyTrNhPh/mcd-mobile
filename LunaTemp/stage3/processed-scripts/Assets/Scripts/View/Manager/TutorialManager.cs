using System;
using System.Collections.Generic;
using System.Collections;
using UnityEngine;

namespace View.Manager
{
    public class TutorialManager : MonoBehaviour
    {
        public static TutorialManager Instance { get; private set; }

        [SerializeField] private List<GameObject> tutorialSteps = new List<GameObject>();
        
        [SerializeField] private float finalStepDuration = 3f;
        [SerializeField] private float firstStepDelay = 0.5f;

        private int stepIndex;
        private bool tutorialStarted;
        private bool catAddedBeforeTutorialStarted;
        private Coroutine finalStepRoutine;
        private Coroutine firstStepRoutine;

        private void Awake()
        {
            Instance = this;
        }

        private void OnEnable()
        {
            GameEvent.OnCatAdded += HandleCatAdded;
            GameEvent.OnCatRegistered += HandleCatRegistered;
        }

        private void OnDisable()
        {
            GameEvent.OnCatAdded -= HandleCatAdded;
            GameEvent.OnCatRegistered -= HandleCatRegistered;

            if (finalStepRoutine != null)
            {
                StopCoroutine(finalStepRoutine);
                finalStepRoutine = null;
            }

            if (firstStepRoutine != null)
            {
                StopCoroutine(firstStepRoutine);
                firstStepRoutine = null;
            }
        }

        private void OnDestroy()
        {
            if (Instance == this)
                Instance = null;
        }

        public void BeginTutorial()
        {
            if (firstStepRoutine != null)
                StopCoroutine(firstStepRoutine);

            EnsureTutorialStepsHidden();
            tutorialStarted = false;
            catAddedBeforeTutorialStarted = false;
            firstStepRoutine = StartCoroutine(ShowFirstStepAfterDelay());
        }

        private IEnumerator ShowFirstStepAfterDelay()
        {
            yield return new WaitForSeconds(firstStepDelay);
            stepIndex = 0;
            tutorialStarted = true;
            ShowTutorialStep(stepIndex);
            firstStepRoutine = null;

            if (catAddedBeforeTutorialStarted)
            {
                catAddedBeforeTutorialStarted = false;
                ShowNextStep();
            }
        }

        private void EnsureTutorialStepsHidden()
        {
            foreach (GameObject step in tutorialSteps)
            {
                if (step != null)
                    step.SetActive(false);
            }
            stepIndex = 0;
            tutorialStarted = false;
        }

        private void HandleCatAdded()
        {
            if (!tutorialStarted)
            {
                if (firstStepRoutine != null)
                    catAddedBeforeTutorialStarted = true;
                return;
            }

            if (stepIndex == 0)
                ShowNextStep();
        }

        private void HandleCatRegistered(Slot slot)
        {
            if (!tutorialStarted || stepIndex != 1 || slot == null || slot.Type != SlotType.Box)
                return;

            if (LevelManager.Instance != null)
                LevelManager.Instance.StartLevel();

            ShowNextStep();
            finalStepRoutine = StartCoroutine(HideFinalStepAfterDelay());
        }

        private void ShowNextStep()
        {
            SetStepActive(stepIndex, false);
            stepIndex++;
            ShowTutorialStep(stepIndex);
        }

        private IEnumerator HideFinalStepAfterDelay()
        {
            yield return new WaitForSeconds(finalStepDuration);
            SetStepActive(stepIndex, false);
            finalStepRoutine = null;
        }

        private void SetStepActive(int step, bool isActive)
        {
            if (step >= 0 && step < tutorialSteps.Count && tutorialSteps[step] != null)
                tutorialSteps[step].SetActive(isActive);
        }

        private void ShowTutorialStep(int step)
        {
            SetStepActive(step, true);
        }
    }
}
