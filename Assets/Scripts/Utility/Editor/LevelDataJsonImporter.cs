using System.Collections.Generic;
using UnityEditor;
using UnityEngine;

namespace Utility.Editor
{
    [CustomEditor(typeof(LevelData))]
    public class LevelDataJsonImporter : UnityEditor.Editor
    {
        public override void OnInspectorGUI()
        {
            DrawDefaultInspector();

            GUILayout.Space(15);

            LevelData levelData = (LevelData)target;

            if (levelData.jsonFile == null)
            {
                EditorGUILayout.HelpBox(
                    "Assign a JSON file before importing.",
                    MessageType.Warning
                );

                return;
            }

            if (GUILayout.Button("Import Waves From JSON"))
            {
                ImportWaves(levelData);
            }
        }

        private void ImportWaves(LevelData levelData)
        {
            if (levelData.jsonFile == null)
            {
                Debug.LogError("JSON file is not assigned.");
                return;
            }

            string json = levelData.jsonFile.text;

            LevelWaveJson jsonData;

            try
            {
                jsonData = JsonUtility.FromJson<LevelWaveJson>(json);
            }
            catch (System.Exception exception)
            {
                Debug.LogError(
                    $"Failed to parse JSON:\n{exception.Message}"
                );

                return;
            }

            if (jsonData == null || jsonData.waves == null)
            {
                Debug.LogError("JSON contains no waves.");
                return;
            }

            DataManager dataManager =
                FindFirstObjectByType<DataManager>();

            if (dataManager == null)
            {
                Debug.LogError(
                    "DataManager could not be found in the current scene."
                );

                return;
            }

            Undo.RecordObject(levelData, "Import Wave JSON");

            List<WaveData> waves = new List<WaveData>();

            for (int waveIndex = 0;
                 waveIndex < jsonData.waves.Count;
                 waveIndex++)
            {
                WaveJson jsonWave = jsonData.waves[waveIndex];

                WaveData waveData = new WaveData
                {
                    nextWaveDelay = jsonWave.nextWaveDelay,
                    timeline = new List<SpawnEvent>()
                };

                if (jsonWave.timeline != null)
                {
                    foreach (SpawnEventJson jsonEvent in jsonWave.timeline)
                    {
                        DogData dogData =
                            dataManager.GetDogData(jsonEvent.dogID);

                        if (dogData == null)
                        {
                            Debug.LogError(
                                $"Wave {waveIndex + 1}: " +
                                $"DogData ID '{jsonEvent.dogID}' was not found."
                            );

                            continue;
                        }

                        SpawnEvent spawnEvent = new SpawnEvent
                        {
                            time = jsonEvent.time,
                            dogData = dogData
                        };

                        waveData.timeline.Add(spawnEvent);
                    }
                }

                waveData.timeline.Sort(
                    (a, b) => a.time.CompareTo(b.time)
                );

                waves.Add(waveData);
            }

            levelData.waves = waves;

            EditorUtility.SetDirty(levelData);
            AssetDatabase.SaveAssets();

            Debug.Log(
                $"Successfully imported {waves.Count} waves into '{levelData.name}'."
            );
        }
    }
}