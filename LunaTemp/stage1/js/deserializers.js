var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i746 = root || request.c( 'UnityEngine.JointSpring' )
  var i747 = data
  i746.spring = i747[0]
  i746.damper = i747[1]
  i746.targetPosition = i747[2]
  return i746
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i748 = root || request.c( 'UnityEngine.JointMotor' )
  var i749 = data
  i748.m_TargetVelocity = i749[0]
  i748.m_Force = i749[1]
  i748.m_FreeSpin = i749[2]
  return i748
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i750 = root || request.c( 'UnityEngine.JointLimits' )
  var i751 = data
  i750.m_Min = i751[0]
  i750.m_Max = i751[1]
  i750.m_Bounciness = i751[2]
  i750.m_BounceMinVelocity = i751[3]
  i750.m_ContactDistance = i751[4]
  i750.minBounce = i751[5]
  i750.maxBounce = i751[6]
  return i750
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i752 = root || request.c( 'UnityEngine.JointDrive' )
  var i753 = data
  i752.m_PositionSpring = i753[0]
  i752.m_PositionDamper = i753[1]
  i752.m_MaximumForce = i753[2]
  i752.m_UseAcceleration = i753[3]
  return i752
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i754 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i755 = data
  i754.m_Spring = i755[0]
  i754.m_Damper = i755[1]
  return i754
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i756 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i757 = data
  i756.m_Limit = i757[0]
  i756.m_Bounciness = i757[1]
  i756.m_ContactDistance = i757[2]
  return i756
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i758 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i759 = data
  i758.m_ExtremumSlip = i759[0]
  i758.m_ExtremumValue = i759[1]
  i758.m_AsymptoteSlip = i759[2]
  i758.m_AsymptoteValue = i759[3]
  i758.m_Stiffness = i759[4]
  return i758
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i760 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i761 = data
  i760.m_LowerAngle = i761[0]
  i760.m_UpperAngle = i761[1]
  return i760
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i762 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i763 = data
  i762.m_MotorSpeed = i763[0]
  i762.m_MaximumMotorTorque = i763[1]
  return i762
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i764 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i765 = data
  i764.m_DampingRatio = i765[0]
  i764.m_Frequency = i765[1]
  i764.m_Angle = i765[2]
  return i764
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i766 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i767 = data
  i766.m_LowerTranslation = i767[0]
  i766.m_UpperTranslation = i767[1]
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i769 = data
  i768.name = i769[0]
  i768.width = i769[1]
  i768.height = i769[2]
  i768.mipmapCount = i769[3]
  i768.anisoLevel = i769[4]
  i768.filterMode = i769[5]
  i768.hdr = !!i769[6]
  i768.format = i769[7]
  i768.wrapMode = i769[8]
  i768.alphaIsTransparency = !!i769[9]
  i768.alphaSource = i769[10]
  i768.graphicsFormat = i769[11]
  i768.sRGBTexture = !!i769[12]
  i768.desiredColorSpace = i769[13]
  i768.wrapU = i769[14]
  i768.wrapV = i769[15]
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i771 = data
  i770.position = new pc.Vec3( i771[0], i771[1], i771[2] )
  i770.scale = new pc.Vec3( i771[3], i771[4], i771[5] )
  i770.rotation = new pc.Quat(i771[6], i771[7], i771[8], i771[9])
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i773 = data
  i772.sortingLayerIndex = i773[0]
  i772.sortingOrder = i773[1]
  i772.sortingLayerName = i773[2]
  i772.enabled = !!i773[3]
  return i772
}

Deserializers["Cat"] = function (request, data, root) {
  var i774 = root || request.c( 'Cat' )
  var i775 = data
  request.r(i775[0], i775[1], 0, i774, 'projectilePrefab')
  request.r(i775[2], i775[3], 0, i774, 'attackRangeCollider')
  request.r(i775[4], i775[5], 0, i774, 'hitboxCollider')
  request.r(i775[6], i775[7], 0, i774, 'firePoint')
  request.r(i775[8], i775[9], 0, i774, 'shootVFXAnimation')
  request.r(i775[10], i775[11], 0, i774, 'shootSfx')
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i777 = data
  i776.bodyType = i777[0]
  request.r(i777[1], i777[2], 0, i776, 'material')
  i776.simulated = !!i777[3]
  i776.useAutoMass = !!i777[4]
  i776.mass = i777[5]
  i776.drag = i777[6]
  i776.angularDrag = i777[7]
  i776.gravityScale = i777[8]
  i776.collisionDetectionMode = i777[9]
  i776.sleepMode = i777[10]
  i776.constraints = i777[11]
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i779 = data
  request.r(i779[0], i779[1], 0, i778, 'sharedMesh')
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i781 = data
  request.r(i781[0], i781[1], 0, i780, 'additionalVertexStreams')
  i780.enabled = !!i781[2]
  request.r(i781[3], i781[4], 0, i780, 'sharedMaterial')
  var i783 = i781[5]
  var i782 = []
  for(var i = 0; i < i783.length; i += 2) {
  request.r(i783[i + 0], i783[i + 1], 2, i782, '')
  }
  i780.sharedMaterials = i782
  i780.receiveShadows = !!i781[6]
  i780.shadowCastingMode = i781[7]
  i780.sortingLayerID = i781[8]
  i780.sortingOrder = i781[9]
  i780.lightmapIndex = i781[10]
  i780.lightmapSceneIndex = i781[11]
  i780.lightmapScaleOffset = new pc.Vec4( i781[12], i781[13], i781[14], i781[15] )
  i780.lightProbeUsage = i781[16]
  i780.reflectionProbeUsage = i781[17]
  return i780
}

Deserializers["Spine.Unity.SkeletonRenderer"] = function (request, data, root) {
  var i786 = root || request.c( 'Spine.Unity.SkeletonRenderer' )
  var i787 = data
  request.r(i787[0], i787[1], 0, i786, 'skeletonDataAsset')
  i786.initialSkinName = i787[2]
  i786.fixPrefabOverrideViaMeshFilter = i787[3]
  i786.initialFlipX = !!i787[4]
  i786.initialFlipY = !!i787[5]
  i786.updateWhenInvisible = i787[6]
  i786.zSpacing = i787[7]
  i786.useClipping = !!i787[8]
  i786.immutableTriangles = !!i787[9]
  i786.pmaVertexColors = !!i787[10]
  i786.clearStateOnDisable = !!i787[11]
  i786.tintBlack = !!i787[12]
  i786.singleSubmesh = !!i787[13]
  i786.fixDrawOrder = !!i787[14]
  i786.addNormals = !!i787[15]
  i786.calculateTangents = !!i787[16]
  i786.maskInteraction = i787[17]
  i786.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i787[18], i786.maskMaterials)
  i786.disableRenderingOnOverride = !!i787[19]
  var i789 = i787[20]
  var i788 = []
  for(var i = 0; i < i789.length; i += 1) {
    i788.push( i789[i + 0] );
  }
  i786.separatorSlotNames = i788
  i786.physicsPositionInheritanceFactor = new pc.Vec2( i787[21], i787[22] )
  i786.physicsRotationInheritanceFactor = i787[23]
  request.r(i787[24], i787[25], 0, i786, 'physicsMovementRelativeTo')
  return i786
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i790 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i791 = data
  var i793 = i791[0]
  var i792 = []
  for(var i = 0; i < i793.length; i += 2) {
  request.r(i793[i + 0], i793[i + 1], 2, i792, '')
  }
  i790.materialsMaskDisabled = i792
  var i795 = i791[1]
  var i794 = []
  for(var i = 0; i < i795.length; i += 2) {
  request.r(i795[i + 0], i795[i + 1], 2, i794, '')
  }
  i790.materialsInsideMask = i794
  var i797 = i791[2]
  var i796 = []
  for(var i = 0; i < i797.length; i += 2) {
  request.r(i797[i + 0], i797[i + 1], 2, i796, '')
  }
  i790.materialsOutsideMask = i796
  return i790
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i800 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i801 = data
  i800.loop = !!i801[0]
  i800.timeScale = i801[1]
  request.r(i801[2], i801[3], 0, i800, 'skeletonDataAsset')
  i800.initialSkinName = i801[4]
  i800.fixPrefabOverrideViaMeshFilter = i801[5]
  i800.initialFlipX = !!i801[6]
  i800.initialFlipY = !!i801[7]
  i800.updateWhenInvisible = i801[8]
  i800.zSpacing = i801[9]
  i800.useClipping = !!i801[10]
  i800.immutableTriangles = !!i801[11]
  i800.pmaVertexColors = !!i801[12]
  i800.clearStateOnDisable = !!i801[13]
  i800.tintBlack = !!i801[14]
  i800.singleSubmesh = !!i801[15]
  i800.fixDrawOrder = !!i801[16]
  i800.addNormals = !!i801[17]
  i800.calculateTangents = !!i801[18]
  i800.maskInteraction = i801[19]
  i800.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i801[20], i800.maskMaterials)
  i800.disableRenderingOnOverride = !!i801[21]
  i800.updateTiming = i801[22]
  i800.unscaledTime = !!i801[23]
  i800._animationName = i801[24]
  var i803 = i801[25]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( i803[i + 0] );
  }
  i800.separatorSlotNames = i802
  i800.physicsPositionInheritanceFactor = new pc.Vec2( i801[26], i801[27] )
  i800.physicsRotationInheritanceFactor = i801[28]
  request.r(i801[29], i801[30], 0, i800, 'physicsMovementRelativeTo')
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i805 = data
  i804.usedByComposite = !!i805[0]
  i804.autoTiling = !!i805[1]
  i804.size = new pc.Vec2( i805[2], i805[3] )
  i804.edgeRadius = i805[4]
  i804.enabled = !!i805[5]
  i804.isTrigger = !!i805[6]
  i804.usedByEffector = !!i805[7]
  i804.density = i805[8]
  i804.offset = new pc.Vec2( i805[9], i805[10] )
  request.r(i805[11], i805[12], 0, i804, 'material')
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i807 = data
  i806.name = i807[0]
  i806.tagId = i807[1]
  i806.enabled = !!i807[2]
  i806.isStatic = !!i807[3]
  i806.layer = i807[4]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i809 = data
  i808.radius = i809[0]
  i808.enabled = !!i809[1]
  i808.isTrigger = !!i809[2]
  i808.usedByEffector = !!i809[3]
  i808.density = i809[4]
  i808.offset = new pc.Vec2( i809[5], i809[6] )
  request.r(i809[7], i809[8], 0, i808, 'material')
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i811 = data
  i810.name = i811[0]
  i810.halfPrecision = !!i811[1]
  i810.useSimplification = !!i811[2]
  i810.useUInt32IndexFormat = !!i811[3]
  i810.vertexCount = i811[4]
  i810.aabb = i811[5]
  var i813 = i811[6]
  var i812 = []
  for(var i = 0; i < i813.length; i += 1) {
    i812.push( !!i813[i + 0] );
  }
  i810.streams = i812
  i810.vertices = i811[7]
  var i815 = i811[8]
  var i814 = []
  for(var i = 0; i < i815.length; i += 1) {
    i814.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i815[i + 0]) );
  }
  i810.subMeshes = i814
  var i817 = i811[9]
  var i816 = []
  for(var i = 0; i < i817.length; i += 16) {
    i816.push( new pc.Mat4().setData(i817[i + 0], i817[i + 1], i817[i + 2], i817[i + 3],  i817[i + 4], i817[i + 5], i817[i + 6], i817[i + 7],  i817[i + 8], i817[i + 9], i817[i + 10], i817[i + 11],  i817[i + 12], i817[i + 13], i817[i + 14], i817[i + 15]) );
  }
  i810.bindposes = i816
  var i819 = i811[10]
  var i818 = []
  for(var i = 0; i < i819.length; i += 1) {
    i818.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i819[i + 0]) );
  }
  i810.blendShapes = i818
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i825 = data
  i824.triangles = i825[0]
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i831 = data
  i830.name = i831[0]
  var i833 = i831[1]
  var i832 = []
  for(var i = 0; i < i833.length; i += 1) {
    i832.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i833[i + 0]) );
  }
  i830.frames = i832
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i834 = root || new pc.UnityMaterial()
  var i835 = data
  i834.name = i835[0]
  request.r(i835[1], i835[2], 0, i834, 'shader')
  i834.renderQueue = i835[3]
  i834.enableInstancing = !!i835[4]
  var i837 = i835[5]
  var i836 = []
  for(var i = 0; i < i837.length; i += 1) {
    i836.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i837[i + 0]) );
  }
  i834.floatParameters = i836
  var i839 = i835[6]
  var i838 = []
  for(var i = 0; i < i839.length; i += 1) {
    i838.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i839[i + 0]) );
  }
  i834.colorParameters = i838
  var i841 = i835[7]
  var i840 = []
  for(var i = 0; i < i841.length; i += 1) {
    i840.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i841[i + 0]) );
  }
  i834.vectorParameters = i840
  var i843 = i835[8]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i843[i + 0]) );
  }
  i834.textureParameters = i842
  var i845 = i835[9]
  var i844 = []
  for(var i = 0; i < i845.length; i += 1) {
    i844.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i845[i + 0]) );
  }
  i834.materialFlags = i844
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i849 = data
  i848.name = i849[0]
  i848.value = i849[1]
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i853 = data
  i852.name = i853[0]
  i852.value = new pc.Color(i853[1], i853[2], i853[3], i853[4])
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i857 = data
  i856.name = i857[0]
  i856.value = new pc.Vec4( i857[1], i857[2], i857[3], i857[4] )
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i861 = data
  i860.name = i861[0]
  request.r(i861[1], i861[2], 0, i860, 'value')
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i865 = data
  i864.name = i865[0]
  i864.enabled = !!i865[1]
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i867 = data
  i866.color = new pc.Color(i867[0], i867[1], i867[2], i867[3])
  request.r(i867[4], i867[5], 0, i866, 'sprite')
  i866.flipX = !!i867[6]
  i866.flipY = !!i867[7]
  i866.drawMode = i867[8]
  i866.size = new pc.Vec2( i867[9], i867[10] )
  i866.tileMode = i867[11]
  i866.adaptiveModeThreshold = i867[12]
  i866.maskInteraction = i867[13]
  i866.spriteSortPoint = i867[14]
  i866.enabled = !!i867[15]
  request.r(i867[16], i867[17], 0, i866, 'sharedMaterial')
  var i869 = i867[18]
  var i868 = []
  for(var i = 0; i < i869.length; i += 2) {
  request.r(i869[i + 0], i869[i + 1], 2, i868, '')
  }
  i866.sharedMaterials = i868
  i866.receiveShadows = !!i867[19]
  i866.shadowCastingMode = i867[20]
  i866.sortingLayerID = i867[21]
  i866.sortingOrder = i867[22]
  i866.lightmapIndex = i867[23]
  i866.lightmapSceneIndex = i867[24]
  i866.lightmapScaleOffset = new pc.Vec4( i867[25], i867[26], i867[27], i867[28] )
  i866.lightProbeUsage = i867[29]
  i866.reflectionProbeUsage = i867[30]
  return i866
}

Deserializers["Projectile"] = function (request, data, root) {
  var i870 = root || request.c( 'Projectile' )
  var i871 = data
  return i870
}

Deserializers["Dog"] = function (request, data, root) {
  var i872 = root || request.c( 'Dog' )
  var i873 = data
  request.r(i873[0], i873[1], 0, i872, 'healthBar')
  request.r(i873[2], i873[3], 0, i872, 'healthBarFill')
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i875 = data
  i874.pivot = new pc.Vec2( i875[0], i875[1] )
  i874.anchorMin = new pc.Vec2( i875[2], i875[3] )
  i874.anchorMax = new pc.Vec2( i875[4], i875[5] )
  i874.sizeDelta = new pc.Vec2( i875[6], i875[7] )
  i874.anchoredPosition3D = new pc.Vec3( i875[8], i875[9], i875[10] )
  i874.rotation = new pc.Quat(i875[11], i875[12], i875[13], i875[14])
  i874.scale = new pc.Vec3( i875[15], i875[16], i875[17] )
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i877 = data
  i876.planeDistance = i877[0]
  i876.referencePixelsPerUnit = i877[1]
  i876.isFallbackOverlay = !!i877[2]
  i876.renderMode = i877[3]
  i876.renderOrder = i877[4]
  i876.sortingLayerName = i877[5]
  i876.sortingOrder = i877[6]
  i876.scaleFactor = i877[7]
  request.r(i877[8], i877[9], 0, i876, 'worldCamera')
  i876.overrideSorting = !!i877[10]
  i876.pixelPerfect = !!i877[11]
  i876.targetDisplay = i877[12]
  i876.overridePixelPerfect = !!i877[13]
  i876.enabled = !!i877[14]
  return i876
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i878 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i879 = data
  i878.m_UiScaleMode = i879[0]
  i878.m_ReferencePixelsPerUnit = i879[1]
  i878.m_ScaleFactor = i879[2]
  i878.m_ReferenceResolution = new pc.Vec2( i879[3], i879[4] )
  i878.m_ScreenMatchMode = i879[5]
  i878.m_MatchWidthOrHeight = i879[6]
  i878.m_PhysicalUnit = i879[7]
  i878.m_FallbackScreenDPI = i879[8]
  i878.m_DefaultSpriteDPI = i879[9]
  i878.m_DynamicPixelsPerUnit = i879[10]
  i878.m_PresetInfoIsWorld = !!i879[11]
  return i878
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i880 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i881 = data
  i880.m_IgnoreReversedGraphics = !!i881[0]
  i880.m_BlockingObjects = i881[1]
  i880.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i881[2] )
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i883 = data
  i882.cullTransparentMesh = !!i883[0]
  return i882
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i884 = root || request.c( 'UnityEngine.UI.Image' )
  var i885 = data
  request.r(i885[0], i885[1], 0, i884, 'm_Sprite')
  i884.m_Type = i885[2]
  i884.m_PreserveAspect = !!i885[3]
  i884.m_FillCenter = !!i885[4]
  i884.m_FillMethod = i885[5]
  i884.m_FillAmount = i885[6]
  i884.m_FillClockwise = !!i885[7]
  i884.m_FillOrigin = i885[8]
  i884.m_UseSpriteMesh = !!i885[9]
  i884.m_PixelsPerUnitMultiplier = i885[10]
  request.r(i885[11], i885[12], 0, i884, 'm_Material')
  i884.m_Maskable = !!i885[13]
  i884.m_Color = new pc.Color(i885[14], i885[15], i885[16], i885[17])
  i884.m_RaycastTarget = !!i885[18]
  i884.m_RaycastPadding = new pc.Vec4( i885[19], i885[20], i885[21], i885[22] )
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i887 = data
  i886.playAutomatically = !!i887[0]
  request.r(i887[1], i887[2], 0, i886, 'clip')
  var i889 = i887[3]
  var i888 = []
  for(var i = 0; i < i889.length; i += 2) {
  request.r(i889[i + 0], i889[i + 1], 2, i888, '')
  }
  i886.clips = i888
  i886.wrapMode = i887[4]
  i886.enabled = !!i887[5]
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i893 = data
  request.r(i893[0], i893[1], 0, i892, 'animatorController')
  request.r(i893[2], i893[3], 0, i892, 'avatar')
  i892.updateMode = i893[4]
  i892.hasTransformHierarchy = !!i893[5]
  i892.applyRootMotion = !!i893[6]
  var i895 = i893[7]
  var i894 = []
  for(var i = 0; i < i895.length; i += 2) {
  request.r(i895[i + 0], i895[i + 1], 2, i894, '')
  }
  i892.humanBones = i894
  i892.enabled = !!i893[8]
  return i892
}

Deserializers["Spike"] = function (request, data, root) {
  var i898 = root || request.c( 'Spike' )
  var i899 = data
  return i898
}

Deserializers["TNT"] = function (request, data, root) {
  var i900 = root || request.c( 'TNT' )
  var i901 = data
  return i900
}

Deserializers["Fighter"] = function (request, data, root) {
  var i902 = root || request.c( 'Fighter' )
  var i903 = data
  request.r(i903[0], i903[1], 0, i902, 'attackRangeCollider')
  request.r(i903[2], i903[3], 0, i902, 'catData')
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i905 = data
  i904.name = i905[0]
  i904.index = i905[1]
  i904.startup = !!i905[2]
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i907 = data
  i906.aspect = i907[0]
  i906.orthographic = !!i907[1]
  i906.orthographicSize = i907[2]
  i906.backgroundColor = new pc.Color(i907[3], i907[4], i907[5], i907[6])
  i906.nearClipPlane = i907[7]
  i906.farClipPlane = i907[8]
  i906.fieldOfView = i907[9]
  i906.depth = i907[10]
  i906.clearFlags = i907[11]
  i906.cullingMask = i907[12]
  i906.rect = i907[13]
  request.r(i907[14], i907[15], 0, i906, 'targetTexture')
  i906.usePhysicalProperties = !!i907[16]
  i906.focalLength = i907[17]
  i906.sensorSize = new pc.Vec2( i907[18], i907[19] )
  i906.lensShift = new pc.Vec2( i907[20], i907[21] )
  i906.gateFit = i907[22]
  i906.commandBufferCount = i907[23]
  i906.cameraType = i907[24]
  i906.enabled = !!i907[25]
  return i906
}

Deserializers["UnityEngine.EventSystems.Physics2DRaycaster"] = function (request, data, root) {
  var i908 = root || request.c( 'UnityEngine.EventSystems.Physics2DRaycaster' )
  var i909 = data
  i908.m_EventMask = UnityEngine.LayerMask.FromIntegerValue( i909[0] )
  i908.m_MaxRayIntersections = i909[1]
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i911 = data
  i910.type = i911[0]
  i910.color = new pc.Color(i911[1], i911[2], i911[3], i911[4])
  i910.cullingMask = i911[5]
  i910.intensity = i911[6]
  i910.range = i911[7]
  i910.spotAngle = i911[8]
  i910.shadows = i911[9]
  i910.shadowNormalBias = i911[10]
  i910.shadowBias = i911[11]
  i910.shadowStrength = i911[12]
  i910.shadowResolution = i911[13]
  i910.lightmapBakeType = i911[14]
  i910.renderMode = i911[15]
  request.r(i911[16], i911[17], 0, i910, 'cookie')
  i910.cookieSize = i911[18]
  i910.shadowNearPlane = i911[19]
  i910.occlusionMaskChannel = i911[20]
  i910.isBaked = !!i911[21]
  i910.mixedLightingMode = i911[22]
  i910.enabled = !!i911[23]
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i913 = data
  request.r(i913[0], i913[1], 0, i912, 'clip')
  request.r(i913[2], i913[3], 0, i912, 'outputAudioMixerGroup')
  i912.playOnAwake = !!i913[4]
  i912.loop = !!i913[5]
  i912.time = i913[6]
  i912.volume = i913[7]
  i912.pitch = i913[8]
  i912.enabled = !!i913[9]
  return i912
}

Deserializers["View.Manager.AudioManager"] = function (request, data, root) {
  var i914 = root || request.c( 'View.Manager.AudioManager' )
  var i915 = data
  request.r(i915[0], i915[1], 0, i914, 'bgmSource')
  request.r(i915[2], i915[3], 0, i914, 'sfxSource')
  return i914
}

Deserializers["View.Manager.GameManager"] = function (request, data, root) {
  var i916 = root || request.c( 'View.Manager.GameManager' )
  var i917 = data
  return i916
}

Deserializers["MergeManager"] = function (request, data, root) {
  var i918 = root || request.c( 'MergeManager' )
  var i919 = data
  return i918
}

Deserializers["SpendManager"] = function (request, data, root) {
  var i920 = root || request.c( 'SpendManager' )
  var i921 = data
  return i920
}

Deserializers["LevelManager"] = function (request, data, root) {
  var i922 = root || request.c( 'LevelManager' )
  var i923 = data
  return i922
}

Deserializers["SpawnManager"] = function (request, data, root) {
  var i924 = root || request.c( 'SpawnManager' )
  var i925 = data
  request.r(i925[0], i925[1], 0, i924, 'objectPool')
  return i924
}

Deserializers["UpgradeManager"] = function (request, data, root) {
  var i926 = root || request.c( 'UpgradeManager' )
  var i927 = data
  return i926
}

Deserializers["DataManager"] = function (request, data, root) {
  var i928 = root || request.c( 'DataManager' )
  var i929 = data
  var i931 = i929[0]
  var i930 = new (System.Collections.Generic.List$1(Bridge.ns('CatData')))
  for(var i = 0; i < i931.length; i += 2) {
  request.r(i931[i + 0], i931[i + 1], 1, i930, '')
  }
  i928.mergeableCatData = i930
  var i933 = i929[1]
  var i932 = new (System.Collections.Generic.List$1(Bridge.ns('CatData')))
  for(var i = 0; i < i933.length; i += 2) {
  request.r(i933[i + 0], i933[i + 1], 1, i932, '')
  }
  i928.allCatData = i932
  var i935 = i929[2]
  var i934 = new (System.Collections.Generic.List$1(Bridge.ns('DogData')))
  for(var i = 0; i < i935.length; i += 2) {
  request.r(i935[i + 0], i935[i + 1], 1, i934, '')
  }
  i928.allDogData = i934
  var i937 = i929[3]
  var i936 = new (System.Collections.Generic.List$1(Bridge.ns('BossData')))
  for(var i = 0; i < i937.length; i += 2) {
  request.r(i937[i + 0], i937[i + 1], 1, i936, '')
  }
  i928.bossData = i936
  var i939 = i929[4]
  var i938 = new (System.Collections.Generic.List$1(Bridge.ns('LevelData')))
  for(var i = 0; i < i939.length; i += 2) {
  request.r(i939[i + 0], i939[i + 1], 1, i938, '')
  }
  i928.levelData = i938
  var i941 = i929[5]
  var i940 = new (System.Collections.Generic.List$1(Bridge.ns('PermanentUpgradeData')))
  for(var i = 0; i < i941.length; i += 2) {
  request.r(i941[i + 0], i941[i + 1], 1, i940, '')
  }
  i928.permanentUpgradeData = i940
  var i943 = i929[6]
  var i942 = new (System.Collections.Generic.List$1(Bridge.ns('Projectile')))
  for(var i = 0; i < i943.length; i += 2) {
  request.r(i943[i + 0], i943[i + 1], 1, i942, '')
  }
  i928.bulletPrefabs = i942
  return i928
}

Deserializers["View.Manager.SaveManager"] = function (request, data, root) {
  var i956 = root || request.c( 'View.Manager.SaveManager' )
  var i957 = data
  i956.useDefaultValues = !!i957[0]
  return i956
}

Deserializers["PlayableManager"] = function (request, data, root) {
  var i958 = root || request.c( 'PlayableManager' )
  var i959 = data
  i958.levelJson = i959[0]
  i958.levelReward = i959[1]
  return i958
}

Deserializers["UIManager"] = function (request, data, root) {
  var i960 = root || request.c( 'UIManager' )
  var i961 = data
  request.r(i961[0], i961[1], 0, i960, 'mainCamera')
  request.r(i961[2], i961[3], 0, i960, 'landingMenu')
  request.r(i961[4], i961[5], 0, i960, 'playMenu')
  request.r(i961[6], i961[7], 0, i960, 'winMenu')
  request.r(i961[8], i961[9], 0, i960, 'loseMenu')
  return i960
}

Deserializers["PlayMenu"] = function (request, data, root) {
  var i962 = root || request.c( 'PlayMenu' )
  var i963 = data
  request.r(i963[0], i963[1], 0, i962, 'totalCoinText')
  request.r(i963[2], i963[3], 0, i962, 'waveText')
  request.r(i963[4], i963[5], 0, i962, 'addCatCoinText')
  request.r(i963[6], i963[7], 0, i962, 'repairBarrierCoinText')
  request.r(i963[8], i963[9], 0, i962, 'addButton')
  request.r(i963[10], i963[11], 0, i962, 'repairButton')
  request.r(i963[12], i963[13], 0, i962, 'spikeButton')
  request.r(i963[14], i963[15], 0, i962, 'tntButton')
  request.r(i963[16], i963[17], 0, i962, 'guardianButton')
  request.r(i963[18], i963[19], 0, i962, 'pauseButton')
  request.r(i963[20], i963[21], 0, i962, 'buttonClickSfx')
  return i962
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i964 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i965 = data
  i964.m_Spacing = i965[0]
  i964.m_ChildForceExpandWidth = !!i965[1]
  i964.m_ChildForceExpandHeight = !!i965[2]
  i964.m_ChildControlWidth = !!i965[3]
  i964.m_ChildControlHeight = !!i965[4]
  i964.m_ChildScaleWidth = !!i965[5]
  i964.m_ChildScaleHeight = !!i965[6]
  i964.m_ReverseArrangement = !!i965[7]
  i964.m_Padding = UnityEngine.RectOffset.FromPaddings(i965[8], i965[9], i965[10], i965[11])
  i964.m_ChildAlignment = i965[12]
  return i964
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i966 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i967 = data
  i966.m_Spacing = i967[0]
  i966.m_ChildForceExpandWidth = !!i967[1]
  i966.m_ChildForceExpandHeight = !!i967[2]
  i966.m_ChildControlWidth = !!i967[3]
  i966.m_ChildControlHeight = !!i967[4]
  i966.m_ChildScaleWidth = !!i967[5]
  i966.m_ChildScaleHeight = !!i967[6]
  i966.m_ReverseArrangement = !!i967[7]
  i966.m_Padding = UnityEngine.RectOffset.FromPaddings(i967[8], i967[9], i967[10], i967[11])
  i966.m_ChildAlignment = i967[12]
  return i966
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i968 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i969 = data
  i968.m_hasFontAssetChanged = !!i969[0]
  request.r(i969[1], i969[2], 0, i968, 'm_baseMaterial')
  i968.m_maskOffset = new pc.Vec4( i969[3], i969[4], i969[5], i969[6] )
  i968.m_text = i969[7]
  i968.m_isRightToLeft = !!i969[8]
  request.r(i969[9], i969[10], 0, i968, 'm_fontAsset')
  request.r(i969[11], i969[12], 0, i968, 'm_sharedMaterial')
  var i971 = i969[13]
  var i970 = []
  for(var i = 0; i < i971.length; i += 2) {
  request.r(i971[i + 0], i971[i + 1], 2, i970, '')
  }
  i968.m_fontSharedMaterials = i970
  request.r(i969[14], i969[15], 0, i968, 'm_fontMaterial')
  var i973 = i969[16]
  var i972 = []
  for(var i = 0; i < i973.length; i += 2) {
  request.r(i973[i + 0], i973[i + 1], 2, i972, '')
  }
  i968.m_fontMaterials = i972
  i968.m_fontColor32 = UnityEngine.Color32.ConstructColor(i969[17], i969[18], i969[19], i969[20])
  i968.m_fontColor = new pc.Color(i969[21], i969[22], i969[23], i969[24])
  i968.m_enableVertexGradient = !!i969[25]
  i968.m_colorMode = i969[26]
  i968.m_fontColorGradient = request.d('TMPro.VertexGradient', i969[27], i968.m_fontColorGradient)
  request.r(i969[28], i969[29], 0, i968, 'm_fontColorGradientPreset')
  request.r(i969[30], i969[31], 0, i968, 'm_spriteAsset')
  i968.m_tintAllSprites = !!i969[32]
  request.r(i969[33], i969[34], 0, i968, 'm_StyleSheet')
  i968.m_TextStyleHashCode = i969[35]
  i968.m_overrideHtmlColors = !!i969[36]
  i968.m_faceColor = UnityEngine.Color32.ConstructColor(i969[37], i969[38], i969[39], i969[40])
  i968.m_fontSize = i969[41]
  i968.m_fontSizeBase = i969[42]
  i968.m_fontWeight = i969[43]
  i968.m_enableAutoSizing = !!i969[44]
  i968.m_fontSizeMin = i969[45]
  i968.m_fontSizeMax = i969[46]
  i968.m_fontStyle = i969[47]
  i968.m_HorizontalAlignment = i969[48]
  i968.m_VerticalAlignment = i969[49]
  i968.m_textAlignment = i969[50]
  i968.m_characterSpacing = i969[51]
  i968.m_characterHorizontalScale = i969[52]
  i968.m_wordSpacing = i969[53]
  i968.m_lineSpacing = i969[54]
  i968.m_lineSpacingMax = i969[55]
  i968.m_paragraphSpacing = i969[56]
  i968.m_charWidthMaxAdj = i969[57]
  i968.m_TextWrappingMode = i969[58]
  i968.m_wordWrappingRatios = i969[59]
  i968.m_overflowMode = i969[60]
  request.r(i969[61], i969[62], 0, i968, 'm_linkedTextComponent')
  request.r(i969[63], i969[64], 0, i968, 'parentLinkedComponent')
  i968.m_enableKerning = !!i969[65]
  var i975 = i969[66]
  var i974 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i975.length; i += 1) {
    i974.add(i975[i + 0]);
  }
  i968.m_ActiveFontFeatures = i974
  i968.m_enableExtraPadding = !!i969[67]
  i968.checkPaddingRequired = !!i969[68]
  i968.m_isRichText = !!i969[69]
  i968.m_parseCtrlCharacters = !!i969[70]
  i968.m_isOrthographic = !!i969[71]
  i968.m_isCullingEnabled = !!i969[72]
  i968.m_horizontalMapping = i969[73]
  i968.m_verticalMapping = i969[74]
  i968.m_uvLineOffset = i969[75]
  i968.m_geometrySortingOrder = i969[76]
  i968.m_IsTextObjectScaleStatic = !!i969[77]
  i968.m_VertexBufferAutoSizeReduction = !!i969[78]
  i968.m_useMaxVisibleDescender = !!i969[79]
  i968.m_pageToDisplay = i969[80]
  i968.m_margin = new pc.Vec4( i969[81], i969[82], i969[83], i969[84] )
  i968.m_isUsingLegacyAnimationComponent = !!i969[85]
  i968.m_isVolumetricText = !!i969[86]
  request.r(i969[87], i969[88], 0, i968, 'm_Material')
  i968.m_EmojiFallbackSupport = !!i969[89]
  i968.m_Maskable = !!i969[90]
  i968.m_Color = new pc.Color(i969[91], i969[92], i969[93], i969[94])
  i968.m_RaycastTarget = !!i969[95]
  i968.m_RaycastPadding = new pc.Vec4( i969[96], i969[97], i969[98], i969[99] )
  return i968
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i976 = root || request.c( 'TMPro.VertexGradient' )
  var i977 = data
  i976.topLeft = new pc.Color(i977[0], i977[1], i977[2], i977[3])
  i976.topRight = new pc.Color(i977[4], i977[5], i977[6], i977[7])
  i976.bottomLeft = new pc.Color(i977[8], i977[9], i977[10], i977[11])
  i976.bottomRight = new pc.Color(i977[12], i977[13], i977[14], i977[15])
  return i976
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i980 = root || request.c( 'UnityEngine.UI.Button' )
  var i981 = data
  i980.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i981[0], i980.m_OnClick)
  i980.m_Navigation = request.d('UnityEngine.UI.Navigation', i981[1], i980.m_Navigation)
  i980.m_Transition = i981[2]
  i980.m_Colors = request.d('UnityEngine.UI.ColorBlock', i981[3], i980.m_Colors)
  i980.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i981[4], i980.m_SpriteState)
  i980.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i981[5], i980.m_AnimationTriggers)
  i980.m_Interactable = !!i981[6]
  request.r(i981[7], i981[8], 0, i980, 'm_TargetGraphic')
  return i980
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i982 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i983 = data
  i982.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i983[0], i982.m_PersistentCalls)
  return i982
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i984 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i985 = data
  var i987 = i985[0]
  var i986 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i987.length; i += 1) {
    i986.add(request.d('UnityEngine.Events.PersistentCall', i987[i + 0]));
  }
  i984.m_Calls = i986
  return i984
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i990 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i991 = data
  request.r(i991[0], i991[1], 0, i990, 'm_Target')
  i990.m_TargetAssemblyTypeName = i991[2]
  i990.m_MethodName = i991[3]
  i990.m_Mode = i991[4]
  i990.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i991[5], i990.m_Arguments)
  i990.m_CallState = i991[6]
  return i990
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i992 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i993 = data
  i992.m_Mode = i993[0]
  i992.m_WrapAround = !!i993[1]
  request.r(i993[2], i993[3], 0, i992, 'm_SelectOnUp')
  request.r(i993[4], i993[5], 0, i992, 'm_SelectOnDown')
  request.r(i993[6], i993[7], 0, i992, 'm_SelectOnLeft')
  request.r(i993[8], i993[9], 0, i992, 'm_SelectOnRight')
  return i992
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i994 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i995 = data
  i994.m_NormalColor = new pc.Color(i995[0], i995[1], i995[2], i995[3])
  i994.m_HighlightedColor = new pc.Color(i995[4], i995[5], i995[6], i995[7])
  i994.m_PressedColor = new pc.Color(i995[8], i995[9], i995[10], i995[11])
  i994.m_SelectedColor = new pc.Color(i995[12], i995[13], i995[14], i995[15])
  i994.m_DisabledColor = new pc.Color(i995[16], i995[17], i995[18], i995[19])
  i994.m_ColorMultiplier = i995[20]
  i994.m_FadeDuration = i995[21]
  return i994
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i996 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i997 = data
  request.r(i997[0], i997[1], 0, i996, 'm_HighlightedSprite')
  request.r(i997[2], i997[3], 0, i996, 'm_PressedSprite')
  request.r(i997[4], i997[5], 0, i996, 'm_SelectedSprite')
  request.r(i997[6], i997[7], 0, i996, 'm_DisabledSprite')
  return i996
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i998 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i999 = data
  i998.m_NormalTrigger = i999[0]
  i998.m_HighlightedTrigger = i999[1]
  i998.m_PressedTrigger = i999[2]
  i998.m_SelectedTrigger = i999[3]
  i998.m_DisabledTrigger = i999[4]
  return i998
}

Deserializers["UtilityButton"] = function (request, data, root) {
  var i1000 = root || request.c( 'UtilityButton' )
  var i1001 = data
  request.r(i1001[0], i1001[1], 0, i1000, 'typePrefab')
  i1000.coolDown = i1001[2]
  request.r(i1001[3], i1001[4], 0, i1000, 'coolDownImageFill')
  request.r(i1001[5], i1001[6], 0, i1000, 'validateArea')
  i1000.activeColor = new pc.Color(i1001[7], i1001[8], i1001[9], i1001[10])
  i1000.inactiveColor = new pc.Color(i1001[11], i1001[12], i1001[13], i1001[14])
  return i1000
}

Deserializers["WinMenu"] = function (request, data, root) {
  var i1002 = root || request.c( 'WinMenu' )
  var i1003 = data
  request.r(i1003[0], i1003[1], 0, i1002, 'bonusGemText')
  request.r(i1003[2], i1003[3], 0, i1002, 'returnButton')
  return i1002
}

Deserializers["LoseMenu"] = function (request, data, root) {
  var i1004 = root || request.c( 'LoseMenu' )
  var i1005 = data
  request.r(i1005[0], i1005[1], 0, i1004, 'returnButton')
  request.r(i1005[2], i1005[3], 0, i1004, 'restartButton')
  return i1004
}

Deserializers["LandingMenu"] = function (request, data, root) {
  var i1006 = root || request.c( 'LandingMenu' )
  var i1007 = data
  request.r(i1007[0], i1007[1], 0, i1006, 'screenButton')
  request.r(i1007[2], i1007[3], 0, i1006, 'buttonClickSfx')
  return i1006
}

Deserializers["Barrier"] = function (request, data, root) {
  var i1008 = root || request.c( 'Barrier' )
  var i1009 = data
  var i1011 = i1009[0]
  var i1010 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1011.length; i += 2) {
  request.r(i1011[i + 0], i1011[i + 1], 1, i1010, '')
  }
  i1008.barriers = i1010
  request.r(i1009[1], i1009[2], 0, i1008, 'healthBarFill')
  return i1008
}

Deserializers["Board"] = function (request, data, root) {
  var i1014 = root || request.c( 'Board' )
  var i1015 = data
  var i1017 = i1015[0]
  var i1016 = new (System.Collections.Generic.List$1(Bridge.ns('Slot')))
  for(var i = 0; i < i1017.length; i += 2) {
  request.r(i1017[i + 0], i1017[i + 1], 1, i1016, '')
  }
  i1014.slots = i1016
  return i1014
}

Deserializers["Slot"] = function (request, data, root) {
  var i1020 = root || request.c( 'Slot' )
  var i1021 = data
  i1020.slotType = i1021[0]
  return i1020
}

Deserializers["Wave"] = function (request, data, root) {
  var i1022 = root || request.c( 'Wave' )
  var i1023 = data
  i1022.minYPoint = i1023[0]
  i1022.maxYPoint = i1023[1]
  request.r(i1023[2], i1023[3], 0, i1022, 'spawnPoint')
  return i1022
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1024 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1025 = data
  request.r(i1025[0], i1025[1], 0, i1024, 'm_FirstSelected')
  i1024.m_sendNavigationEvents = !!i1025[2]
  i1024.m_DragThreshold = i1025[3]
  return i1024
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1026 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1027 = data
  i1026.m_HorizontalAxis = i1027[0]
  i1026.m_VerticalAxis = i1027[1]
  i1026.m_SubmitButton = i1027[2]
  i1026.m_CancelButton = i1027[3]
  i1026.m_InputActionsPerSecond = i1027[4]
  i1026.m_RepeatDelay = i1027[5]
  i1026.m_ForceModuleActive = !!i1027[6]
  i1026.m_SendPointerHoverToParent = !!i1027[7]
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1029 = data
  i1028.ambientIntensity = i1029[0]
  i1028.reflectionIntensity = i1029[1]
  i1028.ambientMode = i1029[2]
  i1028.ambientLight = new pc.Color(i1029[3], i1029[4], i1029[5], i1029[6])
  i1028.ambientSkyColor = new pc.Color(i1029[7], i1029[8], i1029[9], i1029[10])
  i1028.ambientGroundColor = new pc.Color(i1029[11], i1029[12], i1029[13], i1029[14])
  i1028.ambientEquatorColor = new pc.Color(i1029[15], i1029[16], i1029[17], i1029[18])
  i1028.fogColor = new pc.Color(i1029[19], i1029[20], i1029[21], i1029[22])
  i1028.fogEndDistance = i1029[23]
  i1028.fogStartDistance = i1029[24]
  i1028.fogDensity = i1029[25]
  i1028.fog = !!i1029[26]
  request.r(i1029[27], i1029[28], 0, i1028, 'skybox')
  i1028.fogMode = i1029[29]
  var i1031 = i1029[30]
  var i1030 = []
  for(var i = 0; i < i1031.length; i += 1) {
    i1030.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1031[i + 0]) );
  }
  i1028.lightmaps = i1030
  i1028.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1029[31], i1028.lightProbes)
  i1028.lightmapsMode = i1029[32]
  i1028.mixedBakeMode = i1029[33]
  i1028.environmentLightingMode = i1029[34]
  i1028.ambientProbe = new pc.SphericalHarmonicsL2(i1029[35])
  request.r(i1029[36], i1029[37], 0, i1028, 'customReflection')
  request.r(i1029[38], i1029[39], 0, i1028, 'defaultReflection')
  i1028.defaultReflectionMode = i1029[40]
  i1028.defaultReflectionResolution = i1029[41]
  i1028.sunLightObjectId = i1029[42]
  i1028.pixelLightCount = i1029[43]
  i1028.defaultReflectionHDR = !!i1029[44]
  i1028.hasLightDataAsset = !!i1029[45]
  i1028.hasManualGenerate = !!i1029[46]
  return i1028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1035 = data
  request.r(i1035[0], i1035[1], 0, i1034, 'lightmapColor')
  request.r(i1035[2], i1035[3], 0, i1034, 'lightmapDirection')
  request.r(i1035[4], i1035[5], 0, i1034, 'shadowMask')
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1036 = root || new UnityEngine.LightProbes()
  var i1037 = data
  return i1036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1045 = data
  var i1047 = i1045[0]
  var i1046 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1047.length; i += 1) {
    i1046.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1047[i + 0]));
  }
  i1044.ShaderCompilationErrors = i1046
  i1044.name = i1045[1]
  i1044.guid = i1045[2]
  var i1049 = i1045[3]
  var i1048 = []
  for(var i = 0; i < i1049.length; i += 1) {
    i1048.push( i1049[i + 0] );
  }
  i1044.shaderDefinedKeywords = i1048
  var i1051 = i1045[4]
  var i1050 = []
  for(var i = 0; i < i1051.length; i += 1) {
    i1050.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1051[i + 0]) );
  }
  i1044.passes = i1050
  var i1053 = i1045[5]
  var i1052 = []
  for(var i = 0; i < i1053.length; i += 1) {
    i1052.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1053[i + 0]) );
  }
  i1044.usePasses = i1052
  var i1055 = i1045[6]
  var i1054 = []
  for(var i = 0; i < i1055.length; i += 1) {
    i1054.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1055[i + 0]) );
  }
  i1044.defaultParameterValues = i1054
  request.r(i1045[7], i1045[8], 0, i1044, 'unityFallbackShader')
  i1044.readDepth = !!i1045[9]
  i1044.hasDepthOnlyPass = !!i1045[10]
  i1044.isCreatedByShaderGraph = !!i1045[11]
  i1044.disableBatching = !!i1045[12]
  i1044.compiled = !!i1045[13]
  return i1044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1059 = data
  i1058.shaderName = i1059[0]
  i1058.errorMessage = i1059[1]
  return i1058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1062 = root || new pc.UnityShaderPass()
  var i1063 = data
  i1062.id = i1063[0]
  i1062.subShaderIndex = i1063[1]
  i1062.name = i1063[2]
  i1062.passType = i1063[3]
  i1062.grabPassTextureName = i1063[4]
  i1062.usePass = !!i1063[5]
  i1062.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1063[6], i1062.zTest)
  i1062.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1063[7], i1062.zWrite)
  i1062.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1063[8], i1062.culling)
  i1062.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1063[9], i1062.blending)
  i1062.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1063[10], i1062.alphaBlending)
  i1062.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1063[11], i1062.colorWriteMask)
  i1062.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1063[12], i1062.offsetUnits)
  i1062.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1063[13], i1062.offsetFactor)
  i1062.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1063[14], i1062.stencilRef)
  i1062.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1063[15], i1062.stencilReadMask)
  i1062.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1063[16], i1062.stencilWriteMask)
  i1062.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1063[17], i1062.stencilOp)
  i1062.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1063[18], i1062.stencilOpFront)
  i1062.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1063[19], i1062.stencilOpBack)
  var i1065 = i1063[20]
  var i1064 = []
  for(var i = 0; i < i1065.length; i += 1) {
    i1064.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1065[i + 0]) );
  }
  i1062.tags = i1064
  var i1067 = i1063[21]
  var i1066 = []
  for(var i = 0; i < i1067.length; i += 1) {
    i1066.push( i1067[i + 0] );
  }
  i1062.passDefinedKeywords = i1066
  var i1069 = i1063[22]
  var i1068 = []
  for(var i = 0; i < i1069.length; i += 1) {
    i1068.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1069[i + 0]) );
  }
  i1062.passDefinedKeywordGroups = i1068
  var i1071 = i1063[23]
  var i1070 = []
  for(var i = 0; i < i1071.length; i += 1) {
    i1070.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1071[i + 0]) );
  }
  i1062.variants = i1070
  var i1073 = i1063[24]
  var i1072 = []
  for(var i = 0; i < i1073.length; i += 1) {
    i1072.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1073[i + 0]) );
  }
  i1062.excludedVariants = i1072
  i1062.hasDepthReader = !!i1063[25]
  return i1062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1075 = data
  i1074.val = i1075[0]
  i1074.name = i1075[1]
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1077 = data
  i1076.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1077[0], i1076.src)
  i1076.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1077[1], i1076.dst)
  i1076.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1077[2], i1076.op)
  return i1076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1079 = data
  i1078.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1079[0], i1078.pass)
  i1078.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1079[1], i1078.fail)
  i1078.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1079[2], i1078.zFail)
  i1078.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1079[3], i1078.comp)
  return i1078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1083 = data
  i1082.name = i1083[0]
  i1082.value = i1083[1]
  return i1082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1087 = data
  var i1089 = i1087[0]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 1) {
    i1088.push( i1089[i + 0] );
  }
  i1086.keywords = i1088
  i1086.hasDiscard = !!i1087[1]
  return i1086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1093 = data
  i1092.passId = i1093[0]
  i1092.subShaderIndex = i1093[1]
  var i1095 = i1093[2]
  var i1094 = []
  for(var i = 0; i < i1095.length; i += 1) {
    i1094.push( i1095[i + 0] );
  }
  i1092.keywords = i1094
  i1092.vertexProgram = i1093[3]
  i1092.fragmentProgram = i1093[4]
  i1092.exportedForWebGl2 = !!i1093[5]
  i1092.readDepth = !!i1093[6]
  return i1092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1099 = data
  request.r(i1099[0], i1099[1], 0, i1098, 'shader')
  i1098.pass = i1099[2]
  return i1098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1103 = data
  i1102.name = i1103[0]
  i1102.type = i1103[1]
  i1102.value = new pc.Vec4( i1103[2], i1103[3], i1103[4], i1103[5] )
  i1102.textureValue = i1103[6]
  i1102.shaderPropertyFlag = i1103[7]
  return i1102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1105 = data
  i1104.name = i1105[0]
  request.r(i1105[1], i1105[2], 0, i1104, 'texture')
  i1104.aabb = i1105[3]
  i1104.vertices = i1105[4]
  i1104.triangles = i1105[5]
  i1104.textureRect = UnityEngine.Rect.MinMaxRect(i1105[6], i1105[7], i1105[8], i1105[9])
  i1104.packedRect = UnityEngine.Rect.MinMaxRect(i1105[10], i1105[11], i1105[12], i1105[13])
  i1104.border = new pc.Vec4( i1105[14], i1105[15], i1105[16], i1105[17] )
  i1104.transparency = i1105[18]
  i1104.bounds = i1105[19]
  i1104.pixelsPerUnit = i1105[20]
  i1104.textureWidth = i1105[21]
  i1104.textureHeight = i1105[22]
  i1104.nativeSize = new pc.Vec2( i1105[23], i1105[24] )
  i1104.pivot = new pc.Vec2( i1105[25], i1105[26] )
  i1104.textureRectOffset = new pc.Vec2( i1105[27], i1105[28] )
  return i1104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1107 = data
  i1106.name = i1107[0]
  return i1106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1109 = data
  i1108.name = i1109[0]
  i1108.wrapMode = i1109[1]
  i1108.isLooping = !!i1109[2]
  i1108.length = i1109[3]
  var i1111 = i1109[4]
  var i1110 = []
  for(var i = 0; i < i1111.length; i += 1) {
    i1110.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1111[i + 0]) );
  }
  i1108.curves = i1110
  var i1113 = i1109[5]
  var i1112 = []
  for(var i = 0; i < i1113.length; i += 1) {
    i1112.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1113[i + 0]) );
  }
  i1108.events = i1112
  i1108.halfPrecision = !!i1109[6]
  i1108._frameRate = i1109[7]
  i1108.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1109[8], i1108.localBounds)
  i1108.hasMuscleCurves = !!i1109[9]
  var i1115 = i1109[10]
  var i1114 = []
  for(var i = 0; i < i1115.length; i += 1) {
    i1114.push( i1115[i + 0] );
  }
  i1108.clipMuscleConstant = i1114
  i1108.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1109[11], i1108.clipBindingConstant)
  return i1108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1119 = data
  i1118.path = i1119[0]
  i1118.hash = i1119[1]
  i1118.componentType = i1119[2]
  i1118.property = i1119[3]
  i1118.keys = i1119[4]
  var i1121 = i1119[5]
  var i1120 = []
  for(var i = 0; i < i1121.length; i += 1) {
    i1120.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1121[i + 0]) );
  }
  i1118.objectReferenceKeys = i1120
  return i1118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1125 = data
  i1124.time = i1125[0]
  request.r(i1125[1], i1125[2], 0, i1124, 'value')
  return i1124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1129 = data
  i1128.functionName = i1129[0]
  i1128.floatParameter = i1129[1]
  i1128.intParameter = i1129[2]
  i1128.stringParameter = i1129[3]
  request.r(i1129[4], i1129[5], 0, i1128, 'objectReferenceParameter')
  i1128.time = i1129[6]
  return i1128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1131 = data
  i1130.center = new pc.Vec3( i1131[0], i1131[1], i1131[2] )
  i1130.extends = new pc.Vec3( i1131[3], i1131[4], i1131[5] )
  return i1130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1135 = data
  var i1137 = i1135[0]
  var i1136 = []
  for(var i = 0; i < i1137.length; i += 1) {
    i1136.push( i1137[i + 0] );
  }
  i1134.genericBindings = i1136
  var i1139 = i1135[1]
  var i1138 = []
  for(var i = 0; i < i1139.length; i += 1) {
    i1138.push( i1139[i + 0] );
  }
  i1134.pptrCurveMapping = i1138
  return i1134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1141 = data
  i1140.name = i1141[0]
  i1140.ascent = i1141[1]
  i1140.originalLineHeight = i1141[2]
  i1140.fontSize = i1141[3]
  var i1143 = i1141[4]
  var i1142 = []
  for(var i = 0; i < i1143.length; i += 1) {
    i1142.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1143[i + 0]) );
  }
  i1140.characterInfo = i1142
  request.r(i1141[5], i1141[6], 0, i1140, 'texture')
  i1140.originalFontSize = i1141[7]
  return i1140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1147 = data
  i1146.index = i1147[0]
  i1146.advance = i1147[1]
  i1146.bearing = i1147[2]
  i1146.glyphWidth = i1147[3]
  i1146.glyphHeight = i1147[4]
  i1146.minX = i1147[5]
  i1146.maxX = i1147[6]
  i1146.minY = i1147[7]
  i1146.maxY = i1147[8]
  i1146.uvBottomLeftX = i1147[9]
  i1146.uvBottomLeftY = i1147[10]
  i1146.uvBottomRightX = i1147[11]
  i1146.uvBottomRightY = i1147[12]
  i1146.uvTopLeftX = i1147[13]
  i1146.uvTopLeftY = i1147[14]
  i1146.uvTopRightX = i1147[15]
  i1146.uvTopRightY = i1147[16]
  return i1146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1149 = data
  i1148.name = i1149[0]
  var i1151 = i1149[1]
  var i1150 = []
  for(var i = 0; i < i1151.length; i += 1) {
    i1150.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1151[i + 0]) );
  }
  i1148.layers = i1150
  var i1153 = i1149[2]
  var i1152 = []
  for(var i = 0; i < i1153.length; i += 1) {
    i1152.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1153[i + 0]) );
  }
  i1148.parameters = i1152
  i1148.animationClips = i1149[3]
  i1148.avatarUnsupported = i1149[4]
  return i1148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1157 = data
  i1156.name = i1157[0]
  i1156.defaultWeight = i1157[1]
  i1156.blendingMode = i1157[2]
  i1156.avatarMask = i1157[3]
  i1156.syncedLayerIndex = i1157[4]
  i1156.syncedLayerAffectsTiming = !!i1157[5]
  i1156.syncedLayers = i1157[6]
  i1156.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1157[7], i1156.stateMachine)
  return i1156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1159 = data
  i1158.id = i1159[0]
  i1158.name = i1159[1]
  i1158.path = i1159[2]
  var i1161 = i1159[3]
  var i1160 = []
  for(var i = 0; i < i1161.length; i += 1) {
    i1160.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1161[i + 0]) );
  }
  i1158.states = i1160
  var i1163 = i1159[4]
  var i1162 = []
  for(var i = 0; i < i1163.length; i += 1) {
    i1162.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1163[i + 0]) );
  }
  i1158.machines = i1162
  var i1165 = i1159[5]
  var i1164 = []
  for(var i = 0; i < i1165.length; i += 1) {
    i1164.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1165[i + 0]) );
  }
  i1158.entryStateTransitions = i1164
  var i1167 = i1159[6]
  var i1166 = []
  for(var i = 0; i < i1167.length; i += 1) {
    i1166.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1167[i + 0]) );
  }
  i1158.exitStateTransitions = i1166
  var i1169 = i1159[7]
  var i1168 = []
  for(var i = 0; i < i1169.length; i += 1) {
    i1168.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1169[i + 0]) );
  }
  i1158.anyStateTransitions = i1168
  i1158.defaultStateId = i1159[8]
  return i1158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1173 = data
  i1172.id = i1173[0]
  i1172.name = i1173[1]
  i1172.cycleOffset = i1173[2]
  i1172.cycleOffsetParameter = i1173[3]
  i1172.cycleOffsetParameterActive = !!i1173[4]
  i1172.mirror = !!i1173[5]
  i1172.mirrorParameter = i1173[6]
  i1172.mirrorParameterActive = !!i1173[7]
  i1172.motionId = i1173[8]
  i1172.nameHash = i1173[9]
  i1172.fullPathHash = i1173[10]
  i1172.speed = i1173[11]
  i1172.speedParameter = i1173[12]
  i1172.speedParameterActive = !!i1173[13]
  i1172.tag = i1173[14]
  i1172.tagHash = i1173[15]
  i1172.writeDefaultValues = !!i1173[16]
  var i1175 = i1173[17]
  var i1174 = []
  for(var i = 0; i < i1175.length; i += 2) {
  request.r(i1175[i + 0], i1175[i + 1], 2, i1174, '')
  }
  i1172.behaviours = i1174
  var i1177 = i1173[18]
  var i1176 = []
  for(var i = 0; i < i1177.length; i += 1) {
    i1176.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1177[i + 0]) );
  }
  i1172.transitions = i1176
  return i1172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1183 = data
  i1182.fullPath = i1183[0]
  i1182.canTransitionToSelf = !!i1183[1]
  i1182.duration = i1183[2]
  i1182.exitTime = i1183[3]
  i1182.hasExitTime = !!i1183[4]
  i1182.hasFixedDuration = !!i1183[5]
  i1182.interruptionSource = i1183[6]
  i1182.offset = i1183[7]
  i1182.orderedInterruption = !!i1183[8]
  i1182.destinationStateId = i1183[9]
  i1182.isExit = !!i1183[10]
  i1182.mute = !!i1183[11]
  i1182.solo = !!i1183[12]
  var i1185 = i1183[13]
  var i1184 = []
  for(var i = 0; i < i1185.length; i += 1) {
    i1184.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1185[i + 0]) );
  }
  i1182.conditions = i1184
  return i1182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1191 = data
  i1190.destinationStateId = i1191[0]
  i1190.isExit = !!i1191[1]
  i1190.mute = !!i1191[2]
  i1190.solo = !!i1191[3]
  var i1193 = i1191[4]
  var i1192 = []
  for(var i = 0; i < i1193.length; i += 1) {
    i1192.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1193[i + 0]) );
  }
  i1190.conditions = i1192
  return i1190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1197 = data
  i1196.mode = i1197[0]
  i1196.parameter = i1197[1]
  i1196.threshold = i1197[2]
  return i1196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1201 = data
  i1200.defaultBool = !!i1201[0]
  i1200.defaultFloat = i1201[1]
  i1200.defaultInt = i1201[2]
  i1200.name = i1201[3]
  i1200.nameHash = i1201[4]
  i1200.type = i1201[5]
  return i1200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1203 = data
  i1202.name = i1203[0]
  i1202.bytes64 = i1203[1]
  i1202.data = i1203[2]
  return i1202
}

Deserializers["CatData"] = function (request, data, root) {
  var i1204 = root || request.c( 'CatData' )
  var i1205 = data
  i1204.catID = i1205[0]
  i1204.catName = i1205[1]
  i1204.catDescription = i1205[2]
  i1204.baseSize = new pc.Vec2( i1205[3], i1205[4] )
  i1204.offset = new pc.Vec2( i1205[5], i1205[6] )
  request.r(i1205[7], i1205[8], 0, i1204, 'baseSprite')
  request.r(i1205[9], i1205[10], 0, i1204, 'baseAnimation')
  var i1207 = i1205[11]
  var i1206 = []
  for(var i = 0; i < i1207.length; i += 1) {
    i1206.push( request.d('CatMergeData', i1207[i + 0]) );
  }
  i1204.catVisuals = i1206
  var i1209 = i1205[12]
  var i1208 = []
  for(var i = 0; i < i1209.length; i += 1) {
    i1208.push( request.d('CatBaseStatData', i1209[i + 0]) );
  }
  i1204.catBaseStats = i1208
  var i1211 = i1205[13]
  var i1210 = []
  for(var i = 0; i < i1211.length; i += 1) {
    i1210.push( request.d('CatUpgradeData', i1211[i + 0]) );
  }
  i1204.catUpgrades = i1210
  return i1204
}

Deserializers["CatMergeData"] = function (request, data, root) {
  var i1214 = root || request.c( 'CatMergeData' )
  var i1215 = data
  request.r(i1215[0], i1215[1], 0, i1214, 'catSkin')
  return i1214
}

Deserializers["CatBaseStatData"] = function (request, data, root) {
  var i1218 = root || request.c( 'CatBaseStatData' )
  var i1219 = data
  i1218.baseDamage = i1219[0]
  i1218.baseReloadTime = i1219[1]
  i1218.baseRange = i1219[2]
  i1218.baseSpeed = i1219[3]
  return i1218
}

Deserializers["CatUpgradeData"] = function (request, data, root) {
  var i1222 = root || request.c( 'CatUpgradeData' )
  var i1223 = data
  i1222.upgradePrice = i1223[0]
  i1222.upgradeDamage = i1223[1]
  i1222.upgradeReloadTime = i1223[2]
  return i1222
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1224 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1225 = data
  var i1227 = i1225[0]
  var i1226 = []
  for(var i = 0; i < i1227.length; i += 2) {
  request.r(i1227[i + 0], i1227[i + 1], 2, i1226, '')
  }
  i1224.atlasAssets = i1226
  i1224.scale = i1225[1]
  request.r(i1225[2], i1225[3], 0, i1224, 'skeletonJSON')
  i1224.isUpgradingBlendModeMaterials = !!i1225[4]
  i1224.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1225[5], i1224.blendModeMaterials)
  var i1229 = i1225[6]
  var i1228 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1229.length; i += 2) {
  request.r(i1229[i + 0], i1229[i + 1], 1, i1228, '')
  }
  i1224.skeletonDataModifiers = i1228
  var i1231 = i1225[7]
  var i1230 = []
  for(var i = 0; i < i1231.length; i += 1) {
    i1230.push( i1231[i + 0] );
  }
  i1224.fromAnimation = i1230
  var i1233 = i1225[8]
  var i1232 = []
  for(var i = 0; i < i1233.length; i += 1) {
    i1232.push( i1233[i + 0] );
  }
  i1224.toAnimation = i1232
  i1224.duration = i1225[9]
  i1224.defaultMix = i1225[10]
  request.r(i1225[11], i1225[12], 0, i1224, 'controller')
  return i1224
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1236 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1237 = data
  i1236.applyAdditiveMaterial = !!i1237[0]
  var i1239 = i1237[1]
  var i1238 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1239.length; i += 1) {
    i1238.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1239[i + 0]));
  }
  i1236.additiveMaterials = i1238
  var i1241 = i1237[2]
  var i1240 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1241.length; i += 1) {
    i1240.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1241[i + 0]));
  }
  i1236.multiplyMaterials = i1240
  var i1243 = i1237[3]
  var i1242 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1243.length; i += 1) {
    i1242.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1243[i + 0]));
  }
  i1236.screenMaterials = i1242
  i1236.requiresBlendModeMaterials = !!i1237[4]
  return i1236
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1246 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1247 = data
  i1246.pageName = i1247[0]
  request.r(i1247[1], i1247[2], 0, i1246, 'material')
  return i1246
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1250 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1251 = data
  request.r(i1251[0], i1251[1], 0, i1250, 'atlasFile')
  var i1253 = i1251[2]
  var i1252 = []
  for(var i = 0; i < i1253.length; i += 2) {
  request.r(i1253[i + 0], i1253[i + 1], 2, i1252, '')
  }
  i1250.materials = i1252
  i1250.textureLoadingMode = i1251[3]
  request.r(i1251[4], i1251[5], 0, i1250, 'onDemandTextureLoader')
  return i1250
}

Deserializers["DogData"] = function (request, data, root) {
  var i1254 = root || request.c( 'DogData' )
  var i1255 = data
  i1254.dogID = i1255[0]
  i1254.dogName = i1255[1]
  i1254.dogDescription = i1255[2]
  request.r(i1255[3], i1255[4], 0, i1254, 'skin')
  i1254.baseDamage = i1255[5]
  i1254.baseReloadTime = i1255[6]
  i1254.baseHealth = i1255[7]
  i1254.baseSpeed = i1255[8]
  return i1254
}

Deserializers["LevelData"] = function (request, data, root) {
  var i1256 = root || request.c( 'LevelData' )
  var i1257 = data
  request.r(i1257[0], i1257[1], 0, i1256, 'jsonFile')
  i1256.levelID = i1257[2]
  i1256.levelName = i1257[3]
  i1256.isBossLevel = !!i1257[4]
  i1256.bonusGem = i1257[5]
  var i1259 = i1257[6]
  var i1258 = new (System.Collections.Generic.List$1(Bridge.ns('WaveData')))
  for(var i = 0; i < i1259.length; i += 1) {
    i1258.add(request.d('WaveData', i1259[i + 0]));
  }
  i1256.waves = i1258
  return i1256
}

Deserializers["WaveData"] = function (request, data, root) {
  var i1262 = root || request.c( 'WaveData' )
  var i1263 = data
  i1262.nextWaveDelay = i1263[0]
  var i1265 = i1263[1]
  var i1264 = new (System.Collections.Generic.List$1(Bridge.ns('SpawnEvent')))
  for(var i = 0; i < i1265.length; i += 1) {
    i1264.add(request.d('SpawnEvent', i1265[i + 0]));
  }
  i1262.timeline = i1264
  return i1262
}

Deserializers["SpawnEvent"] = function (request, data, root) {
  var i1268 = root || request.c( 'SpawnEvent' )
  var i1269 = data
  i1268.time = i1269[0]
  request.r(i1269[1], i1269[2], 0, i1268, 'dogData')
  return i1268
}

Deserializers["PermanentUpgradeData"] = function (request, data, root) {
  var i1270 = root || request.c( 'PermanentUpgradeData' )
  var i1271 = data
  i1270.category = i1271[0]
  var i1273 = i1271[1]
  var i1272 = []
  for(var i = 0; i < i1273.length; i += 1) {
    i1272.push( request.d('PermanentUpgrade', i1273[i + 0]) );
  }
  i1270.upgrades = i1272
  return i1270
}

Deserializers["PermanentUpgrade"] = function (request, data, root) {
  var i1276 = root || request.c( 'PermanentUpgrade' )
  var i1277 = data
  i1276.upgradeName = i1277[0]
  i1276.upgradeDescription = i1277[1]
  request.r(i1277[2], i1277[3], 0, i1276, 'upgradeIcon')
  i1276.type = i1277[4]
  var i1279 = i1277[5]
  var i1278 = []
  for(var i = 0; i < i1279.length; i += 1) {
    i1278.push( request.d('UpgradeStatData', i1279[i + 0]) );
  }
  i1276.stats = i1278
  return i1276
}

Deserializers["UpgradeStatData"] = function (request, data, root) {
  var i1282 = root || request.c( 'UpgradeStatData' )
  var i1283 = data
  i1282.price = i1283[0]
  i1282.effectValue = i1283[1]
  return i1282
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1284 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1285 = data
  i1284.normalStyle = i1285[0]
  i1284.normalSpacingOffset = i1285[1]
  i1284.boldStyle = i1285[2]
  i1284.boldSpacing = i1285[3]
  i1284.italicStyle = i1285[4]
  i1284.tabSize = i1285[5]
  request.r(i1285[6], i1285[7], 0, i1284, 'atlas')
  i1284.m_SourceFontFileGUID = i1285[8]
  i1284.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1285[9], i1284.m_CreationSettings)
  request.r(i1285[10], i1285[11], 0, i1284, 'm_SourceFontFile')
  i1284.m_SourceFontFilePath = i1285[12]
  i1284.m_AtlasPopulationMode = i1285[13]
  i1284.InternalDynamicOS = !!i1285[14]
  var i1287 = i1285[15]
  var i1286 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1287.length; i += 1) {
    i1286.add(request.d('UnityEngine.TextCore.Glyph', i1287[i + 0]));
  }
  i1284.m_GlyphTable = i1286
  var i1289 = i1285[16]
  var i1288 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1289.length; i += 1) {
    i1288.add(request.d('TMPro.TMP_Character', i1289[i + 0]));
  }
  i1284.m_CharacterTable = i1288
  var i1291 = i1285[17]
  var i1290 = []
  for(var i = 0; i < i1291.length; i += 2) {
  request.r(i1291[i + 0], i1291[i + 1], 2, i1290, '')
  }
  i1284.m_AtlasTextures = i1290
  i1284.m_AtlasTextureIndex = i1285[18]
  i1284.m_IsMultiAtlasTexturesEnabled = !!i1285[19]
  i1284.m_GetFontFeatures = !!i1285[20]
  i1284.m_ClearDynamicDataOnBuild = !!i1285[21]
  i1284.m_AtlasWidth = i1285[22]
  i1284.m_AtlasHeight = i1285[23]
  i1284.m_AtlasPadding = i1285[24]
  i1284.m_AtlasRenderMode = i1285[25]
  var i1293 = i1285[26]
  var i1292 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1293.length; i += 1) {
    i1292.add(request.d('UnityEngine.TextCore.GlyphRect', i1293[i + 0]));
  }
  i1284.m_UsedGlyphRects = i1292
  var i1295 = i1285[27]
  var i1294 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1295.length; i += 1) {
    i1294.add(request.d('UnityEngine.TextCore.GlyphRect', i1295[i + 0]));
  }
  i1284.m_FreeGlyphRects = i1294
  i1284.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1285[28], i1284.m_FontFeatureTable)
  i1284.m_ShouldReimportFontFeatures = !!i1285[29]
  var i1297 = i1285[30]
  var i1296 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1297.length; i += 2) {
  request.r(i1297[i + 0], i1297[i + 1], 1, i1296, '')
  }
  i1284.m_FallbackFontAssetTable = i1296
  var i1299 = i1285[31]
  var i1298 = []
  for(var i = 0; i < i1299.length; i += 1) {
    i1298.push( request.d('TMPro.TMP_FontWeightPair', i1299[i + 0]) );
  }
  i1284.m_FontWeightTable = i1298
  var i1301 = i1285[32]
  var i1300 = []
  for(var i = 0; i < i1301.length; i += 1) {
    i1300.push( request.d('TMPro.TMP_FontWeightPair', i1301[i + 0]) );
  }
  i1284.fontWeights = i1300
  i1284.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1285[33], i1284.m_fontInfo)
  var i1303 = i1285[34]
  var i1302 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1303.length; i += 1) {
    i1302.add(request.d('TMPro.TMP_Glyph', i1303[i + 0]));
  }
  i1284.m_glyphInfoList = i1302
  i1284.m_KerningTable = request.d('TMPro.KerningTable', i1285[35], i1284.m_KerningTable)
  var i1305 = i1285[36]
  var i1304 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1305.length; i += 2) {
  request.r(i1305[i + 0], i1305[i + 1], 1, i1304, '')
  }
  i1284.fallbackFontAssets = i1304
  i1284.m_Version = i1285[37]
  i1284.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1285[38], i1284.m_FaceInfo)
  request.r(i1285[39], i1285[40], 0, i1284, 'm_Material')
  return i1284
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1306 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1307 = data
  i1306.sourceFontFileName = i1307[0]
  i1306.sourceFontFileGUID = i1307[1]
  i1306.faceIndex = i1307[2]
  i1306.pointSizeSamplingMode = i1307[3]
  i1306.pointSize = i1307[4]
  i1306.padding = i1307[5]
  i1306.paddingMode = i1307[6]
  i1306.packingMode = i1307[7]
  i1306.atlasWidth = i1307[8]
  i1306.atlasHeight = i1307[9]
  i1306.characterSetSelectionMode = i1307[10]
  i1306.characterSequence = i1307[11]
  i1306.referencedFontAssetGUID = i1307[12]
  i1306.referencedTextAssetGUID = i1307[13]
  i1306.fontStyle = i1307[14]
  i1306.fontStyleModifier = i1307[15]
  i1306.renderMode = i1307[16]
  i1306.includeFontFeatures = !!i1307[17]
  return i1306
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1310 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1311 = data
  i1310.m_Index = i1311[0]
  i1310.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1311[1], i1310.m_Metrics)
  i1310.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1311[2], i1310.m_GlyphRect)
  i1310.m_Scale = i1311[3]
  i1310.m_AtlasIndex = i1311[4]
  i1310.m_ClassDefinitionType = i1311[5]
  return i1310
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1312 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1313 = data
  i1312.m_Width = i1313[0]
  i1312.m_Height = i1313[1]
  i1312.m_HorizontalBearingX = i1313[2]
  i1312.m_HorizontalBearingY = i1313[3]
  i1312.m_HorizontalAdvance = i1313[4]
  return i1312
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1314 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1315 = data
  i1314.m_X = i1315[0]
  i1314.m_Y = i1315[1]
  i1314.m_Width = i1315[2]
  i1314.m_Height = i1315[3]
  return i1314
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1318 = root || request.c( 'TMPro.TMP_Character' )
  var i1319 = data
  i1318.m_ElementType = i1319[0]
  i1318.m_Unicode = i1319[1]
  i1318.m_GlyphIndex = i1319[2]
  i1318.m_Scale = i1319[3]
  return i1318
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1324 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1325 = data
  var i1327 = i1325[0]
  var i1326 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1327.length; i += 1) {
    i1326.add(request.d('TMPro.MultipleSubstitutionRecord', i1327[i + 0]));
  }
  i1324.m_MultipleSubstitutionRecords = i1326
  var i1329 = i1325[1]
  var i1328 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1329.length; i += 1) {
    i1328.add(request.d('TMPro.LigatureSubstitutionRecord', i1329[i + 0]));
  }
  i1324.m_LigatureSubstitutionRecords = i1328
  var i1331 = i1325[2]
  var i1330 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1331.length; i += 1) {
    i1330.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1331[i + 0]));
  }
  i1324.m_GlyphPairAdjustmentRecords = i1330
  var i1333 = i1325[3]
  var i1332 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1333.length; i += 1) {
    i1332.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1333[i + 0]));
  }
  i1324.m_MarkToBaseAdjustmentRecords = i1332
  var i1335 = i1325[4]
  var i1334 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1335.length; i += 1) {
    i1334.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1335[i + 0]));
  }
  i1324.m_MarkToMarkAdjustmentRecords = i1334
  return i1324
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1338 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1339 = data
  i1338.m_TargetGlyphID = i1339[0]
  i1338.m_SubstituteGlyphIDs = i1339[1]
  return i1338
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1342 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1343 = data
  i1342.m_ComponentGlyphIDs = i1343[0]
  i1342.m_LigatureGlyphID = i1343[1]
  return i1342
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1346 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1347 = data
  i1346.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1347[0], i1346.m_FirstAdjustmentRecord)
  i1346.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1347[1], i1346.m_SecondAdjustmentRecord)
  i1346.m_FeatureLookupFlags = i1347[2]
  return i1346
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1350 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1351 = data
  i1350.m_BaseGlyphID = i1351[0]
  i1350.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1351[1], i1350.m_BaseGlyphAnchorPoint)
  i1350.m_MarkGlyphID = i1351[2]
  i1350.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1351[3], i1350.m_MarkPositionAdjustment)
  return i1350
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1354 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1355 = data
  i1354.m_BaseMarkGlyphID = i1355[0]
  i1354.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1355[1], i1354.m_BaseMarkGlyphAnchorPoint)
  i1354.m_CombiningMarkGlyphID = i1355[2]
  i1354.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1355[3], i1354.m_CombiningMarkPositionAdjustment)
  return i1354
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1360 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1361 = data
  request.r(i1361[0], i1361[1], 0, i1360, 'regularTypeface')
  request.r(i1361[2], i1361[3], 0, i1360, 'italicTypeface')
  return i1360
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1362 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1363 = data
  i1362.Name = i1363[0]
  i1362.PointSize = i1363[1]
  i1362.Scale = i1363[2]
  i1362.CharacterCount = i1363[3]
  i1362.LineHeight = i1363[4]
  i1362.Baseline = i1363[5]
  i1362.Ascender = i1363[6]
  i1362.CapHeight = i1363[7]
  i1362.Descender = i1363[8]
  i1362.CenterLine = i1363[9]
  i1362.SuperscriptOffset = i1363[10]
  i1362.SubscriptOffset = i1363[11]
  i1362.SubSize = i1363[12]
  i1362.Underline = i1363[13]
  i1362.UnderlineThickness = i1363[14]
  i1362.strikethrough = i1363[15]
  i1362.strikethroughThickness = i1363[16]
  i1362.TabWidth = i1363[17]
  i1362.Padding = i1363[18]
  i1362.AtlasWidth = i1363[19]
  i1362.AtlasHeight = i1363[20]
  return i1362
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1366 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1367 = data
  i1366.id = i1367[0]
  i1366.x = i1367[1]
  i1366.y = i1367[2]
  i1366.width = i1367[3]
  i1366.height = i1367[4]
  i1366.xOffset = i1367[5]
  i1366.yOffset = i1367[6]
  i1366.xAdvance = i1367[7]
  i1366.scale = i1367[8]
  return i1366
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1368 = root || request.c( 'TMPro.KerningTable' )
  var i1369 = data
  var i1371 = i1369[0]
  var i1370 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1371.length; i += 1) {
    i1370.add(request.d('TMPro.KerningPair', i1371[i + 0]));
  }
  i1368.kerningPairs = i1370
  return i1368
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1374 = root || request.c( 'TMPro.KerningPair' )
  var i1375 = data
  i1374.xOffset = i1375[0]
  i1374.m_FirstGlyph = i1375[1]
  i1374.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1375[2], i1374.m_FirstGlyphAdjustments)
  i1374.m_SecondGlyph = i1375[3]
  i1374.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1375[4], i1374.m_SecondGlyphAdjustments)
  i1374.m_IgnoreSpacingAdjustments = !!i1375[5]
  return i1374
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1376 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1377 = data
  i1376.m_FaceIndex = i1377[0]
  i1376.m_FamilyName = i1377[1]
  i1376.m_StyleName = i1377[2]
  i1376.m_PointSize = i1377[3]
  i1376.m_Scale = i1377[4]
  i1376.m_UnitsPerEM = i1377[5]
  i1376.m_LineHeight = i1377[6]
  i1376.m_AscentLine = i1377[7]
  i1376.m_CapLine = i1377[8]
  i1376.m_MeanLine = i1377[9]
  i1376.m_Baseline = i1377[10]
  i1376.m_DescentLine = i1377[11]
  i1376.m_SuperscriptOffset = i1377[12]
  i1376.m_SuperscriptSize = i1377[13]
  i1376.m_SubscriptOffset = i1377[14]
  i1376.m_SubscriptSize = i1377[15]
  i1376.m_UnderlineOffset = i1377[16]
  i1376.m_UnderlineThickness = i1377[17]
  i1376.m_StrikethroughOffset = i1377[18]
  i1376.m_StrikethroughThickness = i1377[19]
  i1376.m_TabWidth = i1377[20]
  return i1376
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1378 = root || request.c( 'TMPro.TMP_Settings' )
  var i1379 = data
  i1378.assetVersion = i1379[0]
  i1378.m_TextWrappingMode = i1379[1]
  i1378.m_enableKerning = !!i1379[2]
  var i1381 = i1379[3]
  var i1380 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1381.length; i += 1) {
    i1380.add(i1381[i + 0]);
  }
  i1378.m_ActiveFontFeatures = i1380
  i1378.m_enableExtraPadding = !!i1379[4]
  i1378.m_enableTintAllSprites = !!i1379[5]
  i1378.m_enableParseEscapeCharacters = !!i1379[6]
  i1378.m_EnableRaycastTarget = !!i1379[7]
  i1378.m_GetFontFeaturesAtRuntime = !!i1379[8]
  i1378.m_missingGlyphCharacter = i1379[9]
  i1378.m_ClearDynamicDataOnBuild = !!i1379[10]
  i1378.m_warningsDisabled = !!i1379[11]
  request.r(i1379[12], i1379[13], 0, i1378, 'm_defaultFontAsset')
  i1378.m_defaultFontAssetPath = i1379[14]
  i1378.m_defaultFontSize = i1379[15]
  i1378.m_defaultAutoSizeMinRatio = i1379[16]
  i1378.m_defaultAutoSizeMaxRatio = i1379[17]
  i1378.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1379[18], i1379[19] )
  i1378.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1379[20], i1379[21] )
  i1378.m_autoSizeTextContainer = !!i1379[22]
  i1378.m_IsTextObjectScaleStatic = !!i1379[23]
  var i1383 = i1379[24]
  var i1382 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1383.length; i += 2) {
  request.r(i1383[i + 0], i1383[i + 1], 1, i1382, '')
  }
  i1378.m_fallbackFontAssets = i1382
  i1378.m_matchMaterialPreset = !!i1379[25]
  i1378.m_HideSubTextObjects = !!i1379[26]
  request.r(i1379[27], i1379[28], 0, i1378, 'm_defaultSpriteAsset')
  i1378.m_defaultSpriteAssetPath = i1379[29]
  i1378.m_enableEmojiSupport = !!i1379[30]
  i1378.m_MissingCharacterSpriteUnicode = i1379[31]
  var i1385 = i1379[32]
  var i1384 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1385.length; i += 2) {
  request.r(i1385[i + 0], i1385[i + 1], 1, i1384, '')
  }
  i1378.m_EmojiFallbackTextAssets = i1384
  i1378.m_defaultColorGradientPresetsPath = i1379[33]
  request.r(i1379[34], i1379[35], 0, i1378, 'm_defaultStyleSheet')
  i1378.m_StyleSheetsResourcePath = i1379[36]
  request.r(i1379[37], i1379[38], 0, i1378, 'm_leadingCharacters')
  request.r(i1379[39], i1379[40], 0, i1378, 'm_followingCharacters')
  i1378.m_UseModernHangulLineBreakingRules = !!i1379[41]
  return i1378
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1388 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1389 = data
  i1388.m_GlyphIndex = i1389[0]
  i1388.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1389[1], i1388.m_GlyphValueRecord)
  return i1388
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1390 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1391 = data
  i1390.m_XPlacement = i1391[0]
  i1390.m_YPlacement = i1391[1]
  i1390.m_XAdvance = i1391[2]
  i1390.m_YAdvance = i1391[3]
  return i1390
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1392 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1393 = data
  request.r(i1393[0], i1393[1], 0, i1392, 'spriteSheet')
  var i1395 = i1393[2]
  var i1394 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1395.length; i += 1) {
    i1394.add(request.d('TMPro.TMP_Sprite', i1395[i + 0]));
  }
  i1392.spriteInfoList = i1394
  var i1397 = i1393[3]
  var i1396 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1397.length; i += 2) {
  request.r(i1397[i + 0], i1397[i + 1], 1, i1396, '')
  }
  i1392.fallbackSpriteAssets = i1396
  var i1399 = i1393[4]
  var i1398 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1399.length; i += 1) {
    i1398.add(request.d('TMPro.TMP_SpriteCharacter', i1399[i + 0]));
  }
  i1392.m_SpriteCharacterTable = i1398
  var i1401 = i1393[5]
  var i1400 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1401.length; i += 1) {
    i1400.add(request.d('TMPro.TMP_SpriteGlyph', i1401[i + 0]));
  }
  i1392.m_GlyphTable = i1400
  i1392.m_Version = i1393[6]
  i1392.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1393[7], i1392.m_FaceInfo)
  request.r(i1393[8], i1393[9], 0, i1392, 'm_Material')
  return i1392
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1404 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1405 = data
  i1404.name = i1405[0]
  i1404.hashCode = i1405[1]
  i1404.unicode = i1405[2]
  i1404.pivot = new pc.Vec2( i1405[3], i1405[4] )
  request.r(i1405[5], i1405[6], 0, i1404, 'sprite')
  i1404.id = i1405[7]
  i1404.x = i1405[8]
  i1404.y = i1405[9]
  i1404.width = i1405[10]
  i1404.height = i1405[11]
  i1404.xOffset = i1405[12]
  i1404.yOffset = i1405[13]
  i1404.xAdvance = i1405[14]
  i1404.scale = i1405[15]
  return i1404
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1410 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1411 = data
  i1410.m_Name = i1411[0]
  i1410.m_ElementType = i1411[1]
  i1410.m_Unicode = i1411[2]
  i1410.m_GlyphIndex = i1411[3]
  i1410.m_Scale = i1411[4]
  return i1410
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1414 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1415 = data
  request.r(i1415[0], i1415[1], 0, i1414, 'sprite')
  i1414.m_Index = i1415[2]
  i1414.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1415[3], i1414.m_Metrics)
  i1414.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1415[4], i1414.m_GlyphRect)
  i1414.m_Scale = i1415[5]
  i1414.m_AtlasIndex = i1415[6]
  i1414.m_ClassDefinitionType = i1415[7]
  return i1414
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1416 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1417 = data
  var i1419 = i1417[0]
  var i1418 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1419.length; i += 1) {
    i1418.add(request.d('TMPro.TMP_Style', i1419[i + 0]));
  }
  i1416.m_StyleList = i1418
  return i1416
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1422 = root || request.c( 'TMPro.TMP_Style' )
  var i1423 = data
  i1422.m_Name = i1423[0]
  i1422.m_HashCode = i1423[1]
  i1422.m_OpeningDefinition = i1423[2]
  i1422.m_ClosingDefinition = i1423[3]
  i1422.m_OpeningTagArray = i1423[4]
  i1422.m_ClosingTagArray = i1423[5]
  return i1422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1425 = data
  var i1427 = i1425[0]
  var i1426 = []
  for(var i = 0; i < i1427.length; i += 1) {
    i1426.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1427[i + 0]) );
  }
  i1424.files = i1426
  i1424.componentToPrefabIds = i1425[1]
  return i1424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1431 = data
  i1430.path = i1431[0]
  request.r(i1431[1], i1431[2], 0, i1430, 'unityObject')
  return i1430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1433 = data
  var i1435 = i1433[0]
  var i1434 = []
  for(var i = 0; i < i1435.length; i += 1) {
    i1434.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1435[i + 0]) );
  }
  i1432.scriptsExecutionOrder = i1434
  var i1437 = i1433[1]
  var i1436 = []
  for(var i = 0; i < i1437.length; i += 1) {
    i1436.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1437[i + 0]) );
  }
  i1432.sortingLayers = i1436
  var i1439 = i1433[2]
  var i1438 = []
  for(var i = 0; i < i1439.length; i += 1) {
    i1438.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1439[i + 0]) );
  }
  i1432.cullingLayers = i1438
  i1432.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1433[3], i1432.timeSettings)
  i1432.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1433[4], i1432.physicsSettings)
  i1432.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1433[5], i1432.physics2DSettings)
  i1432.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1433[6], i1432.qualitySettings)
  i1432.enableRealtimeShadows = !!i1433[7]
  i1432.enableAutoInstancing = !!i1433[8]
  i1432.enableStaticBatching = !!i1433[9]
  i1432.enableDynamicBatching = !!i1433[10]
  i1432.usePreservativeDynamicBatching = !!i1433[11]
  i1432.lightmapEncodingQuality = i1433[12]
  i1432.desiredColorSpace = i1433[13]
  var i1441 = i1433[14]
  var i1440 = []
  for(var i = 0; i < i1441.length; i += 1) {
    i1440.push( i1441[i + 0] );
  }
  i1432.allTags = i1440
  return i1432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1445 = data
  i1444.name = i1445[0]
  i1444.value = i1445[1]
  return i1444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1449 = data
  i1448.id = i1449[0]
  i1448.name = i1449[1]
  i1448.value = i1449[2]
  return i1448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1453 = data
  i1452.id = i1453[0]
  i1452.name = i1453[1]
  return i1452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1455 = data
  i1454.fixedDeltaTime = i1455[0]
  i1454.maximumDeltaTime = i1455[1]
  i1454.timeScale = i1455[2]
  i1454.maximumParticleTimestep = i1455[3]
  return i1454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1457 = data
  i1456.gravity = new pc.Vec3( i1457[0], i1457[1], i1457[2] )
  i1456.defaultSolverIterations = i1457[3]
  i1456.bounceThreshold = i1457[4]
  i1456.autoSyncTransforms = !!i1457[5]
  i1456.autoSimulation = !!i1457[6]
  var i1459 = i1457[7]
  var i1458 = []
  for(var i = 0; i < i1459.length; i += 1) {
    i1458.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1459[i + 0]) );
  }
  i1456.collisionMatrix = i1458
  return i1456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1463 = data
  i1462.enabled = !!i1463[0]
  i1462.layerId = i1463[1]
  i1462.otherLayerId = i1463[2]
  return i1462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1465 = data
  request.r(i1465[0], i1465[1], 0, i1464, 'material')
  i1464.gravity = new pc.Vec2( i1465[2], i1465[3] )
  i1464.positionIterations = i1465[4]
  i1464.velocityIterations = i1465[5]
  i1464.velocityThreshold = i1465[6]
  i1464.maxLinearCorrection = i1465[7]
  i1464.maxAngularCorrection = i1465[8]
  i1464.maxTranslationSpeed = i1465[9]
  i1464.maxRotationSpeed = i1465[10]
  i1464.baumgarteScale = i1465[11]
  i1464.baumgarteTOIScale = i1465[12]
  i1464.timeToSleep = i1465[13]
  i1464.linearSleepTolerance = i1465[14]
  i1464.angularSleepTolerance = i1465[15]
  i1464.defaultContactOffset = i1465[16]
  i1464.autoSimulation = !!i1465[17]
  i1464.queriesHitTriggers = !!i1465[18]
  i1464.queriesStartInColliders = !!i1465[19]
  i1464.callbacksOnDisable = !!i1465[20]
  i1464.reuseCollisionCallbacks = !!i1465[21]
  i1464.autoSyncTransforms = !!i1465[22]
  var i1467 = i1465[23]
  var i1466 = []
  for(var i = 0; i < i1467.length; i += 1) {
    i1466.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1467[i + 0]) );
  }
  i1464.collisionMatrix = i1466
  return i1464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1471 = data
  i1470.enabled = !!i1471[0]
  i1470.layerId = i1471[1]
  i1470.otherLayerId = i1471[2]
  return i1470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1473 = data
  var i1475 = i1473[0]
  var i1474 = []
  for(var i = 0; i < i1475.length; i += 1) {
    i1474.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1475[i + 0]) );
  }
  i1472.qualityLevels = i1474
  var i1477 = i1473[1]
  var i1476 = []
  for(var i = 0; i < i1477.length; i += 1) {
    i1476.push( i1477[i + 0] );
  }
  i1472.names = i1476
  i1472.shadows = i1473[2]
  i1472.anisotropicFiltering = i1473[3]
  i1472.antiAliasing = i1473[4]
  i1472.lodBias = i1473[5]
  i1472.shadowCascades = i1473[6]
  i1472.shadowDistance = i1473[7]
  i1472.shadowmaskMode = i1473[8]
  i1472.shadowProjection = i1473[9]
  i1472.shadowResolution = i1473[10]
  i1472.softParticles = !!i1473[11]
  i1472.softVegetation = !!i1473[12]
  i1472.activeColorSpace = i1473[13]
  i1472.desiredColorSpace = i1473[14]
  i1472.masterTextureLimit = i1473[15]
  i1472.maxQueuedFrames = i1473[16]
  i1472.particleRaycastBudget = i1473[17]
  i1472.pixelLightCount = i1473[18]
  i1472.realtimeReflectionProbes = !!i1473[19]
  i1472.shadowCascade2Split = i1473[20]
  i1472.shadowCascade4Split = new pc.Vec3( i1473[21], i1473[22], i1473[23] )
  i1472.streamingMipmapsActive = !!i1473[24]
  i1472.vSyncCount = i1473[25]
  i1472.asyncUploadBufferSize = i1473[26]
  i1472.asyncUploadTimeSlice = i1473[27]
  i1472.billboardsFaceCameraPosition = !!i1473[28]
  i1472.shadowNearPlaneOffset = i1473[29]
  i1472.streamingMipmapsMemoryBudget = i1473[30]
  i1472.maximumLODLevel = i1473[31]
  i1472.streamingMipmapsAddAllCameras = !!i1473[32]
  i1472.streamingMipmapsMaxLevelReduction = i1473[33]
  i1472.streamingMipmapsRenderersPerFrame = i1473[34]
  i1472.resolutionScalingFixedDPIFactor = i1473[35]
  i1472.streamingMipmapsMaxFileIORequests = i1473[36]
  i1472.currentQualityLevel = i1473[37]
  return i1472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1483 = data
  i1482.weight = i1483[0]
  i1482.vertices = i1483[1]
  i1482.normals = i1483[2]
  i1482.tangents = i1483[3]
  return i1482
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1484 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1485 = data
  request.r(i1485[0], i1485[1], 0, i1484, 'm_ObjectArgument')
  i1484.m_ObjectArgumentAssemblyTypeName = i1485[2]
  i1484.m_IntArgument = i1485[3]
  i1484.m_FloatArgument = i1485[4]
  i1484.m_StringArgument = i1485[5]
  i1484.m_BoolArgument = !!i1485[6]
  return i1484
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1486 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1487 = data
  i1486.m_XCoordinate = i1487[0]
  i1486.m_YCoordinate = i1487[1]
  return i1486
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1488 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1489 = data
  i1488.m_XPositionAdjustment = i1489[0]
  i1488.m_YPositionAdjustment = i1489[1]
  return i1488
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1490 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1491 = data
  i1490.xPlacement = i1491[0]
  i1490.yPlacement = i1491[1]
  i1490.xAdvance = i1491[2]
  i1490.yAdvance = i1491[3]
  return i1490
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SortingGroup":{"sortingLayerIndex":0,"sortingOrder":1,"sortingLayerName":2,"enabled":3},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"79":[80],"81":[80],"82":[80],"83":[80],"84":[80],"85":[80],"86":[87],"88":[37],"89":[90],"91":[90],"92":[90],"93":[90],"94":[90],"95":[90],"96":[9],"97":[9],"98":[9],"99":[9],"100":[9],"101":[9],"102":[9],"103":[9],"104":[9],"105":[9],"106":[9],"107":[9],"108":[9],"109":[37],"110":[12],"111":[112],"113":[112],"24":[23],"114":[115],"116":[23],"117":[28,23],"7":[12],"118":[28,23],"119":[31,12],"120":[12,10],"14":[12],"121":[90],"122":[9],"123":[115],"124":[125],"126":[18],"127":[37],"128":[129],"130":[70],"131":[24],"132":[23],"133":[28,23],"134":[12],"135":[28,23],"136":[23],"137":[23],"138":[12,23],"57":[23,28],"139":[140],"141":[140],"142":[140],"143":[23],"144":[23],"27":[24],"22":[28,23],"145":[23],"26":[24],"146":[23],"147":[23],"60":[23],"148":[23],"149":[23],"150":[23],"59":[23],"151":[23],"152":[23],"153":[28,23],"154":[23],"155":[23],"156":[23],"157":[23],"158":[28,23],"159":[23],"160":[70],"161":[70],"71":[70],"162":[70],"39":[37],"163":[37]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.Rendering.SortingGroup","UnityEngine.MonoBehaviour","Cat","Projectile","UnityEngine.CircleCollider2D","UnityEngine.BoxCollider2D","Spine.Unity.SkeletonAnimation","UnityEngine.AudioClip","UnityEngine.Rigidbody2D","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonDataAsset","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.SpriteRenderer","UnityEngine.Sprite","Dog","UnityEngine.GameObject","UnityEngine.UI.Image","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.Animation","UnityEngine.AnimationClip","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","Spike","TNT","Fighter","CatData","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.Light","UnityEngine.AudioSource","View.Manager.AudioManager","View.Manager.GameManager","MergeManager","SpendManager","LevelManager","SpawnManager","UpgradeManager","DataManager","DogData","LevelData","PermanentUpgradeData","View.Manager.SaveManager","PlayableManager","UIManager","PlayMenu","TMPro.TextMeshProUGUI","UnityEngine.UI.Button","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","TMPro.TMP_FontAsset","UtilityButton","WinMenu","LoseMenu","LandingMenu","Barrier","Board","Slot","Wave","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEditor.MonoScript","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.Font","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.83f1";

Deserializers.productName = "mcd_mobile";

Deserializers.lunaInitializationTime = "09/06/2026 08:30:10";

Deserializers.lunaDaysRunning = "1.4";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "37659";

Deserializers.projectId = "630d4f692004f68418d14944fc2001bc";

Deserializers.packagesInfo = "com.unity.nuget.newtonsoft-json: 2.0.0\ncom.unity.inputsystem: 1.19.0\ncom.unity.timeline: 1.8.12\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1869";

Deserializers.runtimeAnalysisExcludedMethodsCount = "5303";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, particle-system";

Deserializers.isRuntimeAnalysisEnabledForShaders = "False";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.mcd_mobile";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "07122e7a-8a9b-48ee-a122-17a47cc3ff7d";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["Unity","Burst","BurstCompiler","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"],["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

