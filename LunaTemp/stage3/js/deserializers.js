var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i760 = root || request.c( 'UnityEngine.JointSpring' )
  var i761 = data
  i760.spring = i761[0]
  i760.damper = i761[1]
  i760.targetPosition = i761[2]
  return i760
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i762 = root || request.c( 'UnityEngine.JointMotor' )
  var i763 = data
  i762.m_TargetVelocity = i763[0]
  i762.m_Force = i763[1]
  i762.m_FreeSpin = i763[2]
  return i762
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i764 = root || request.c( 'UnityEngine.JointLimits' )
  var i765 = data
  i764.m_Min = i765[0]
  i764.m_Max = i765[1]
  i764.m_Bounciness = i765[2]
  i764.m_BounceMinVelocity = i765[3]
  i764.m_ContactDistance = i765[4]
  i764.minBounce = i765[5]
  i764.maxBounce = i765[6]
  return i764
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i766 = root || request.c( 'UnityEngine.JointDrive' )
  var i767 = data
  i766.m_PositionSpring = i767[0]
  i766.m_PositionDamper = i767[1]
  i766.m_MaximumForce = i767[2]
  i766.m_UseAcceleration = i767[3]
  return i766
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i768 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i769 = data
  i768.m_Spring = i769[0]
  i768.m_Damper = i769[1]
  return i768
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i770 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i771 = data
  i770.m_Limit = i771[0]
  i770.m_Bounciness = i771[1]
  i770.m_ContactDistance = i771[2]
  return i770
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i772 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i773 = data
  i772.m_ExtremumSlip = i773[0]
  i772.m_ExtremumValue = i773[1]
  i772.m_AsymptoteSlip = i773[2]
  i772.m_AsymptoteValue = i773[3]
  i772.m_Stiffness = i773[4]
  return i772
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i774 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i775 = data
  i774.m_LowerAngle = i775[0]
  i774.m_UpperAngle = i775[1]
  return i774
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i776 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i777 = data
  i776.m_MotorSpeed = i777[0]
  i776.m_MaximumMotorTorque = i777[1]
  return i776
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i778 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i779 = data
  i778.m_DampingRatio = i779[0]
  i778.m_Frequency = i779[1]
  i778.m_Angle = i779[2]
  return i778
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i780 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i781 = data
  i780.m_LowerTranslation = i781[0]
  i780.m_UpperTranslation = i781[1]
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i783 = data
  i782.name = i783[0]
  i782.width = i783[1]
  i782.height = i783[2]
  i782.mipmapCount = i783[3]
  i782.anisoLevel = i783[4]
  i782.filterMode = i783[5]
  i782.hdr = !!i783[6]
  i782.format = i783[7]
  i782.wrapMode = i783[8]
  i782.alphaIsTransparency = !!i783[9]
  i782.alphaSource = i783[10]
  i782.graphicsFormat = i783[11]
  i782.sRGBTexture = !!i783[12]
  i782.desiredColorSpace = i783[13]
  i782.wrapU = i783[14]
  i782.wrapV = i783[15]
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i785 = data
  i784.position = new pc.Vec3( i785[0], i785[1], i785[2] )
  i784.scale = new pc.Vec3( i785[3], i785[4], i785[5] )
  i784.rotation = new pc.Quat(i785[6], i785[7], i785[8], i785[9])
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i787 = data
  i786.sortingLayerIndex = i787[0]
  i786.sortingOrder = i787[1]
  i786.sortingLayerName = i787[2]
  i786.enabled = !!i787[3]
  return i786
}

Deserializers["Cat"] = function (request, data, root) {
  var i788 = root || request.c( 'Cat' )
  var i789 = data
  request.r(i789[0], i789[1], 0, i788, 'projectilePrefab')
  request.r(i789[2], i789[3], 0, i788, 'attackRangeCollider')
  request.r(i789[4], i789[5], 0, i788, 'hitboxCollider')
  request.r(i789[6], i789[7], 0, i788, 'firePoint')
  request.r(i789[8], i789[9], 0, i788, 'shootVFXAnimation')
  request.r(i789[10], i789[11], 0, i788, 'shootSfx')
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i791 = data
  i790.bodyType = i791[0]
  request.r(i791[1], i791[2], 0, i790, 'material')
  i790.simulated = !!i791[3]
  i790.useAutoMass = !!i791[4]
  i790.mass = i791[5]
  i790.drag = i791[6]
  i790.angularDrag = i791[7]
  i790.gravityScale = i791[8]
  i790.collisionDetectionMode = i791[9]
  i790.sleepMode = i791[10]
  i790.constraints = i791[11]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i793 = data
  request.r(i793[0], i793[1], 0, i792, 'sharedMesh')
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i795 = data
  request.r(i795[0], i795[1], 0, i794, 'additionalVertexStreams')
  i794.enabled = !!i795[2]
  request.r(i795[3], i795[4], 0, i794, 'sharedMaterial')
  var i797 = i795[5]
  var i796 = []
  for(var i = 0; i < i797.length; i += 2) {
  request.r(i797[i + 0], i797[i + 1], 2, i796, '')
  }
  i794.sharedMaterials = i796
  i794.receiveShadows = !!i795[6]
  i794.shadowCastingMode = i795[7]
  i794.sortingLayerID = i795[8]
  i794.sortingOrder = i795[9]
  i794.lightmapIndex = i795[10]
  i794.lightmapSceneIndex = i795[11]
  i794.lightmapScaleOffset = new pc.Vec4( i795[12], i795[13], i795[14], i795[15] )
  i794.lightProbeUsage = i795[16]
  i794.reflectionProbeUsage = i795[17]
  return i794
}

Deserializers["Spine.Unity.SkeletonRenderer"] = function (request, data, root) {
  var i800 = root || request.c( 'Spine.Unity.SkeletonRenderer' )
  var i801 = data
  request.r(i801[0], i801[1], 0, i800, 'skeletonDataAsset')
  i800.initialSkinName = i801[2]
  i800.fixPrefabOverrideViaMeshFilter = i801[3]
  i800.initialFlipX = !!i801[4]
  i800.initialFlipY = !!i801[5]
  i800.updateWhenInvisible = i801[6]
  i800.zSpacing = i801[7]
  i800.useClipping = !!i801[8]
  i800.immutableTriangles = !!i801[9]
  i800.pmaVertexColors = !!i801[10]
  i800.clearStateOnDisable = !!i801[11]
  i800.tintBlack = !!i801[12]
  i800.singleSubmesh = !!i801[13]
  i800.fixDrawOrder = !!i801[14]
  i800.addNormals = !!i801[15]
  i800.calculateTangents = !!i801[16]
  i800.maskInteraction = i801[17]
  i800.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i801[18], i800.maskMaterials)
  i800.disableRenderingOnOverride = !!i801[19]
  var i803 = i801[20]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( i803[i + 0] );
  }
  i800.separatorSlotNames = i802
  i800.physicsPositionInheritanceFactor = new pc.Vec2( i801[21], i801[22] )
  i800.physicsRotationInheritanceFactor = i801[23]
  request.r(i801[24], i801[25], 0, i800, 'physicsMovementRelativeTo')
  return i800
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i804 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i805 = data
  var i807 = i805[0]
  var i806 = []
  for(var i = 0; i < i807.length; i += 2) {
  request.r(i807[i + 0], i807[i + 1], 2, i806, '')
  }
  i804.materialsMaskDisabled = i806
  var i809 = i805[1]
  var i808 = []
  for(var i = 0; i < i809.length; i += 2) {
  request.r(i809[i + 0], i809[i + 1], 2, i808, '')
  }
  i804.materialsInsideMask = i808
  var i811 = i805[2]
  var i810 = []
  for(var i = 0; i < i811.length; i += 2) {
  request.r(i811[i + 0], i811[i + 1], 2, i810, '')
  }
  i804.materialsOutsideMask = i810
  return i804
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i814 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i815 = data
  i814.loop = !!i815[0]
  i814.timeScale = i815[1]
  request.r(i815[2], i815[3], 0, i814, 'skeletonDataAsset')
  i814.initialSkinName = i815[4]
  i814.fixPrefabOverrideViaMeshFilter = i815[5]
  i814.initialFlipX = !!i815[6]
  i814.initialFlipY = !!i815[7]
  i814.updateWhenInvisible = i815[8]
  i814.zSpacing = i815[9]
  i814.useClipping = !!i815[10]
  i814.immutableTriangles = !!i815[11]
  i814.pmaVertexColors = !!i815[12]
  i814.clearStateOnDisable = !!i815[13]
  i814.tintBlack = !!i815[14]
  i814.singleSubmesh = !!i815[15]
  i814.fixDrawOrder = !!i815[16]
  i814.addNormals = !!i815[17]
  i814.calculateTangents = !!i815[18]
  i814.maskInteraction = i815[19]
  i814.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i815[20], i814.maskMaterials)
  i814.disableRenderingOnOverride = !!i815[21]
  i814.updateTiming = i815[22]
  i814.unscaledTime = !!i815[23]
  i814._animationName = i815[24]
  var i817 = i815[25]
  var i816 = []
  for(var i = 0; i < i817.length; i += 1) {
    i816.push( i817[i + 0] );
  }
  i814.separatorSlotNames = i816
  i814.physicsPositionInheritanceFactor = new pc.Vec2( i815[26], i815[27] )
  i814.physicsRotationInheritanceFactor = i815[28]
  request.r(i815[29], i815[30], 0, i814, 'physicsMovementRelativeTo')
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i819 = data
  i818.usedByComposite = !!i819[0]
  i818.autoTiling = !!i819[1]
  i818.size = new pc.Vec2( i819[2], i819[3] )
  i818.edgeRadius = i819[4]
  i818.enabled = !!i819[5]
  i818.isTrigger = !!i819[6]
  i818.usedByEffector = !!i819[7]
  i818.density = i819[8]
  i818.offset = new pc.Vec2( i819[9], i819[10] )
  request.r(i819[11], i819[12], 0, i818, 'material')
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i821 = data
  i820.name = i821[0]
  i820.tagId = i821[1]
  i820.enabled = !!i821[2]
  i820.isStatic = !!i821[3]
  i820.layer = i821[4]
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i823 = data
  i822.radius = i823[0]
  i822.enabled = !!i823[1]
  i822.isTrigger = !!i823[2]
  i822.usedByEffector = !!i823[3]
  i822.density = i823[4]
  i822.offset = new pc.Vec2( i823[5], i823[6] )
  request.r(i823[7], i823[8], 0, i822, 'material')
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i825 = data
  i824.name = i825[0]
  i824.halfPrecision = !!i825[1]
  i824.useSimplification = !!i825[2]
  i824.useUInt32IndexFormat = !!i825[3]
  i824.vertexCount = i825[4]
  i824.aabb = i825[5]
  var i827 = i825[6]
  var i826 = []
  for(var i = 0; i < i827.length; i += 1) {
    i826.push( !!i827[i + 0] );
  }
  i824.streams = i826
  i824.vertices = i825[7]
  var i829 = i825[8]
  var i828 = []
  for(var i = 0; i < i829.length; i += 1) {
    i828.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i829[i + 0]) );
  }
  i824.subMeshes = i828
  var i831 = i825[9]
  var i830 = []
  for(var i = 0; i < i831.length; i += 16) {
    i830.push( new pc.Mat4().setData(i831[i + 0], i831[i + 1], i831[i + 2], i831[i + 3],  i831[i + 4], i831[i + 5], i831[i + 6], i831[i + 7],  i831[i + 8], i831[i + 9], i831[i + 10], i831[i + 11],  i831[i + 12], i831[i + 13], i831[i + 14], i831[i + 15]) );
  }
  i824.bindposes = i830
  var i833 = i825[10]
  var i832 = []
  for(var i = 0; i < i833.length; i += 1) {
    i832.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i833[i + 0]) );
  }
  i824.blendShapes = i832
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i839 = data
  i838.triangles = i839[0]
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i845 = data
  i844.name = i845[0]
  var i847 = i845[1]
  var i846 = []
  for(var i = 0; i < i847.length; i += 1) {
    i846.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i847[i + 0]) );
  }
  i844.frames = i846
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i848 = root || new pc.UnityMaterial()
  var i849 = data
  i848.name = i849[0]
  request.r(i849[1], i849[2], 0, i848, 'shader')
  i848.renderQueue = i849[3]
  i848.enableInstancing = !!i849[4]
  var i851 = i849[5]
  var i850 = []
  for(var i = 0; i < i851.length; i += 1) {
    i850.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i851[i + 0]) );
  }
  i848.floatParameters = i850
  var i853 = i849[6]
  var i852 = []
  for(var i = 0; i < i853.length; i += 1) {
    i852.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i853[i + 0]) );
  }
  i848.colorParameters = i852
  var i855 = i849[7]
  var i854 = []
  for(var i = 0; i < i855.length; i += 1) {
    i854.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i855[i + 0]) );
  }
  i848.vectorParameters = i854
  var i857 = i849[8]
  var i856 = []
  for(var i = 0; i < i857.length; i += 1) {
    i856.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i857[i + 0]) );
  }
  i848.textureParameters = i856
  var i859 = i849[9]
  var i858 = []
  for(var i = 0; i < i859.length; i += 1) {
    i858.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i859[i + 0]) );
  }
  i848.materialFlags = i858
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i863 = data
  i862.name = i863[0]
  i862.value = i863[1]
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i867 = data
  i866.name = i867[0]
  i866.value = new pc.Color(i867[1], i867[2], i867[3], i867[4])
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i871 = data
  i870.name = i871[0]
  i870.value = new pc.Vec4( i871[1], i871[2], i871[3], i871[4] )
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i875 = data
  i874.name = i875[0]
  request.r(i875[1], i875[2], 0, i874, 'value')
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i879 = data
  i878.name = i879[0]
  i878.enabled = !!i879[1]
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i881 = data
  i880.color = new pc.Color(i881[0], i881[1], i881[2], i881[3])
  request.r(i881[4], i881[5], 0, i880, 'sprite')
  i880.flipX = !!i881[6]
  i880.flipY = !!i881[7]
  i880.drawMode = i881[8]
  i880.size = new pc.Vec2( i881[9], i881[10] )
  i880.tileMode = i881[11]
  i880.adaptiveModeThreshold = i881[12]
  i880.maskInteraction = i881[13]
  i880.spriteSortPoint = i881[14]
  i880.enabled = !!i881[15]
  request.r(i881[16], i881[17], 0, i880, 'sharedMaterial')
  var i883 = i881[18]
  var i882 = []
  for(var i = 0; i < i883.length; i += 2) {
  request.r(i883[i + 0], i883[i + 1], 2, i882, '')
  }
  i880.sharedMaterials = i882
  i880.receiveShadows = !!i881[19]
  i880.shadowCastingMode = i881[20]
  i880.sortingLayerID = i881[21]
  i880.sortingOrder = i881[22]
  i880.lightmapIndex = i881[23]
  i880.lightmapSceneIndex = i881[24]
  i880.lightmapScaleOffset = new pc.Vec4( i881[25], i881[26], i881[27], i881[28] )
  i880.lightProbeUsage = i881[29]
  i880.reflectionProbeUsage = i881[30]
  return i880
}

Deserializers["Projectile"] = function (request, data, root) {
  var i884 = root || request.c( 'Projectile' )
  var i885 = data
  return i884
}

Deserializers["Dog"] = function (request, data, root) {
  var i886 = root || request.c( 'Dog' )
  var i887 = data
  request.r(i887[0], i887[1], 0, i886, 'healthBar')
  request.r(i887[2], i887[3], 0, i886, 'healthBarFill')
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i889 = data
  i888.pivot = new pc.Vec2( i889[0], i889[1] )
  i888.anchorMin = new pc.Vec2( i889[2], i889[3] )
  i888.anchorMax = new pc.Vec2( i889[4], i889[5] )
  i888.sizeDelta = new pc.Vec2( i889[6], i889[7] )
  i888.anchoredPosition3D = new pc.Vec3( i889[8], i889[9], i889[10] )
  i888.rotation = new pc.Quat(i889[11], i889[12], i889[13], i889[14])
  i888.scale = new pc.Vec3( i889[15], i889[16], i889[17] )
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i891 = data
  i890.planeDistance = i891[0]
  i890.referencePixelsPerUnit = i891[1]
  i890.isFallbackOverlay = !!i891[2]
  i890.renderMode = i891[3]
  i890.renderOrder = i891[4]
  i890.sortingLayerName = i891[5]
  i890.sortingOrder = i891[6]
  i890.scaleFactor = i891[7]
  request.r(i891[8], i891[9], 0, i890, 'worldCamera')
  i890.overrideSorting = !!i891[10]
  i890.pixelPerfect = !!i891[11]
  i890.targetDisplay = i891[12]
  i890.overridePixelPerfect = !!i891[13]
  i890.enabled = !!i891[14]
  return i890
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i892 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i893 = data
  i892.m_UiScaleMode = i893[0]
  i892.m_ReferencePixelsPerUnit = i893[1]
  i892.m_ScaleFactor = i893[2]
  i892.m_ReferenceResolution = new pc.Vec2( i893[3], i893[4] )
  i892.m_ScreenMatchMode = i893[5]
  i892.m_MatchWidthOrHeight = i893[6]
  i892.m_PhysicalUnit = i893[7]
  i892.m_FallbackScreenDPI = i893[8]
  i892.m_DefaultSpriteDPI = i893[9]
  i892.m_DynamicPixelsPerUnit = i893[10]
  i892.m_PresetInfoIsWorld = !!i893[11]
  return i892
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i894 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i895 = data
  i894.m_IgnoreReversedGraphics = !!i895[0]
  i894.m_BlockingObjects = i895[1]
  i894.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i895[2] )
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i897 = data
  i896.cullTransparentMesh = !!i897[0]
  return i896
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i898 = root || request.c( 'UnityEngine.UI.Image' )
  var i899 = data
  request.r(i899[0], i899[1], 0, i898, 'm_Sprite')
  i898.m_Type = i899[2]
  i898.m_PreserveAspect = !!i899[3]
  i898.m_FillCenter = !!i899[4]
  i898.m_FillMethod = i899[5]
  i898.m_FillAmount = i899[6]
  i898.m_FillClockwise = !!i899[7]
  i898.m_FillOrigin = i899[8]
  i898.m_UseSpriteMesh = !!i899[9]
  i898.m_PixelsPerUnitMultiplier = i899[10]
  request.r(i899[11], i899[12], 0, i898, 'm_Material')
  i898.m_Maskable = !!i899[13]
  i898.m_Color = new pc.Color(i899[14], i899[15], i899[16], i899[17])
  i898.m_RaycastTarget = !!i899[18]
  i898.m_RaycastPadding = new pc.Vec4( i899[19], i899[20], i899[21], i899[22] )
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i901 = data
  i900.playAutomatically = !!i901[0]
  request.r(i901[1], i901[2], 0, i900, 'clip')
  var i903 = i901[3]
  var i902 = []
  for(var i = 0; i < i903.length; i += 2) {
  request.r(i903[i + 0], i903[i + 1], 2, i902, '')
  }
  i900.clips = i902
  i900.wrapMode = i901[4]
  i900.enabled = !!i901[5]
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i907 = data
  request.r(i907[0], i907[1], 0, i906, 'animatorController')
  request.r(i907[2], i907[3], 0, i906, 'avatar')
  i906.updateMode = i907[4]
  i906.hasTransformHierarchy = !!i907[5]
  i906.applyRootMotion = !!i907[6]
  var i909 = i907[7]
  var i908 = []
  for(var i = 0; i < i909.length; i += 2) {
  request.r(i909[i + 0], i909[i + 1], 2, i908, '')
  }
  i906.humanBones = i908
  i906.enabled = !!i907[8]
  return i906
}

Deserializers["Spike"] = function (request, data, root) {
  var i912 = root || request.c( 'Spike' )
  var i913 = data
  return i912
}

Deserializers["TNT"] = function (request, data, root) {
  var i914 = root || request.c( 'TNT' )
  var i915 = data
  return i914
}

Deserializers["Fighter"] = function (request, data, root) {
  var i916 = root || request.c( 'Fighter' )
  var i917 = data
  request.r(i917[0], i917[1], 0, i916, 'attackRangeCollider')
  request.r(i917[2], i917[3], 0, i916, 'catData')
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i919 = data
  i918.name = i919[0]
  i918.index = i919[1]
  i918.startup = !!i919[2]
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i921 = data
  i920.aspect = i921[0]
  i920.orthographic = !!i921[1]
  i920.orthographicSize = i921[2]
  i920.backgroundColor = new pc.Color(i921[3], i921[4], i921[5], i921[6])
  i920.nearClipPlane = i921[7]
  i920.farClipPlane = i921[8]
  i920.fieldOfView = i921[9]
  i920.depth = i921[10]
  i920.clearFlags = i921[11]
  i920.cullingMask = i921[12]
  i920.rect = i921[13]
  request.r(i921[14], i921[15], 0, i920, 'targetTexture')
  i920.usePhysicalProperties = !!i921[16]
  i920.focalLength = i921[17]
  i920.sensorSize = new pc.Vec2( i921[18], i921[19] )
  i920.lensShift = new pc.Vec2( i921[20], i921[21] )
  i920.gateFit = i921[22]
  i920.commandBufferCount = i921[23]
  i920.cameraType = i921[24]
  i920.enabled = !!i921[25]
  return i920
}

Deserializers["UnityEngine.EventSystems.Physics2DRaycaster"] = function (request, data, root) {
  var i922 = root || request.c( 'UnityEngine.EventSystems.Physics2DRaycaster' )
  var i923 = data
  i922.m_EventMask = UnityEngine.LayerMask.FromIntegerValue( i923[0] )
  i922.m_MaxRayIntersections = i923[1]
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i925 = data
  i924.type = i925[0]
  i924.color = new pc.Color(i925[1], i925[2], i925[3], i925[4])
  i924.cullingMask = i925[5]
  i924.intensity = i925[6]
  i924.range = i925[7]
  i924.spotAngle = i925[8]
  i924.shadows = i925[9]
  i924.shadowNormalBias = i925[10]
  i924.shadowBias = i925[11]
  i924.shadowStrength = i925[12]
  i924.shadowResolution = i925[13]
  i924.lightmapBakeType = i925[14]
  i924.renderMode = i925[15]
  request.r(i925[16], i925[17], 0, i924, 'cookie')
  i924.cookieSize = i925[18]
  i924.shadowNearPlane = i925[19]
  i924.occlusionMaskChannel = i925[20]
  i924.isBaked = !!i925[21]
  i924.mixedLightingMode = i925[22]
  i924.enabled = !!i925[23]
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i927 = data
  request.r(i927[0], i927[1], 0, i926, 'clip')
  request.r(i927[2], i927[3], 0, i926, 'outputAudioMixerGroup')
  i926.playOnAwake = !!i927[4]
  i926.loop = !!i927[5]
  i926.time = i927[6]
  i926.volume = i927[7]
  i926.pitch = i927[8]
  i926.enabled = !!i927[9]
  return i926
}

Deserializers["View.Manager.AudioManager"] = function (request, data, root) {
  var i928 = root || request.c( 'View.Manager.AudioManager' )
  var i929 = data
  request.r(i929[0], i929[1], 0, i928, 'bgmSource')
  request.r(i929[2], i929[3], 0, i928, 'sfxSource')
  return i928
}

Deserializers["View.Manager.GameManager"] = function (request, data, root) {
  var i930 = root || request.c( 'View.Manager.GameManager' )
  var i931 = data
  return i930
}

Deserializers["MergeManager"] = function (request, data, root) {
  var i932 = root || request.c( 'MergeManager' )
  var i933 = data
  return i932
}

Deserializers["View.Manager.SpendManager"] = function (request, data, root) {
  var i934 = root || request.c( 'View.Manager.SpendManager' )
  var i935 = data
  return i934
}

Deserializers["LevelManager"] = function (request, data, root) {
  var i936 = root || request.c( 'LevelManager' )
  var i937 = data
  return i936
}

Deserializers["SpawnManager"] = function (request, data, root) {
  var i938 = root || request.c( 'SpawnManager' )
  var i939 = data
  request.r(i939[0], i939[1], 0, i938, 'objectPool')
  return i938
}

Deserializers["UpgradeManager"] = function (request, data, root) {
  var i940 = root || request.c( 'UpgradeManager' )
  var i941 = data
  return i940
}

Deserializers["DataManager"] = function (request, data, root) {
  var i942 = root || request.c( 'DataManager' )
  var i943 = data
  var i945 = i943[0]
  var i944 = new (System.Collections.Generic.List$1(Bridge.ns('CatData')))
  for(var i = 0; i < i945.length; i += 2) {
  request.r(i945[i + 0], i945[i + 1], 1, i944, '')
  }
  i942.mergeableCatData = i944
  var i947 = i943[1]
  var i946 = new (System.Collections.Generic.List$1(Bridge.ns('CatData')))
  for(var i = 0; i < i947.length; i += 2) {
  request.r(i947[i + 0], i947[i + 1], 1, i946, '')
  }
  i942.allCatData = i946
  var i949 = i943[2]
  var i948 = new (System.Collections.Generic.List$1(Bridge.ns('DogData')))
  for(var i = 0; i < i949.length; i += 2) {
  request.r(i949[i + 0], i949[i + 1], 1, i948, '')
  }
  i942.allDogData = i948
  var i951 = i943[3]
  var i950 = new (System.Collections.Generic.List$1(Bridge.ns('BossData')))
  for(var i = 0; i < i951.length; i += 2) {
  request.r(i951[i + 0], i951[i + 1], 1, i950, '')
  }
  i942.bossData = i950
  var i953 = i943[4]
  var i952 = new (System.Collections.Generic.List$1(Bridge.ns('LevelData')))
  for(var i = 0; i < i953.length; i += 2) {
  request.r(i953[i + 0], i953[i + 1], 1, i952, '')
  }
  i942.levelData = i952
  var i955 = i943[5]
  var i954 = new (System.Collections.Generic.List$1(Bridge.ns('PermanentUpgradeData')))
  for(var i = 0; i < i955.length; i += 2) {
  request.r(i955[i + 0], i955[i + 1], 1, i954, '')
  }
  i942.permanentUpgradeData = i954
  var i957 = i943[6]
  var i956 = new (System.Collections.Generic.List$1(Bridge.ns('Projectile')))
  for(var i = 0; i < i957.length; i += 2) {
  request.r(i957[i + 0], i957[i + 1], 1, i956, '')
  }
  i942.bulletPrefabs = i956
  return i942
}

Deserializers["View.Manager.SaveManager"] = function (request, data, root) {
  var i970 = root || request.c( 'View.Manager.SaveManager' )
  var i971 = data
  i970.useDefaultValues = !!i971[0]
  return i970
}

Deserializers["View.Manager.PlayableManager"] = function (request, data, root) {
  var i972 = root || request.c( 'View.Manager.PlayableManager' )
  var i973 = data
  i972.levelJson = i973[0]
  i972.levelReward = i973[1]
  return i972
}

Deserializers["View.Manager.TutorialManager"] = function (request, data, root) {
  var i974 = root || request.c( 'View.Manager.TutorialManager' )
  var i975 = data
  var i977 = i975[0]
  var i976 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i977.length; i += 2) {
  request.r(i977[i + 0], i977[i + 1], 1, i976, '')
  }
  i974.tutorialSteps = i976
  i974.finalStepDuration = i975[1]
  i974.firstStepDelay = i975[2]
  return i974
}

Deserializers["View.Manager.MessageManager"] = function (request, data, root) {
  var i980 = root || request.c( 'View.Manager.MessageManager' )
  var i981 = data
  request.r(i981[0], i981[1], 0, i980, 'messageText')
  request.r(i981[2], i981[3], 0, i980, 'textEffect')
  return i980
}

Deserializers["UIManager"] = function (request, data, root) {
  var i982 = root || request.c( 'UIManager' )
  var i983 = data
  request.r(i983[0], i983[1], 0, i982, 'mainCamera')
  request.r(i983[2], i983[3], 0, i982, 'landingMenu')
  request.r(i983[4], i983[5], 0, i982, 'playMenu')
  request.r(i983[6], i983[7], 0, i982, 'winMenu')
  request.r(i983[8], i983[9], 0, i982, 'loseMenu')
  return i982
}

Deserializers["PlayMenu"] = function (request, data, root) {
  var i984 = root || request.c( 'PlayMenu' )
  var i985 = data
  request.r(i985[0], i985[1], 0, i984, 'totalCoinText')
  request.r(i985[2], i985[3], 0, i984, 'waveText')
  request.r(i985[4], i985[5], 0, i984, 'addCatCoinText')
  request.r(i985[6], i985[7], 0, i984, 'repairBarrierCoinText')
  request.r(i985[8], i985[9], 0, i984, 'addButton')
  request.r(i985[10], i985[11], 0, i984, 'repairButton')
  request.r(i985[12], i985[13], 0, i984, 'spikeButton')
  request.r(i985[14], i985[15], 0, i984, 'tntButton')
  request.r(i985[16], i985[17], 0, i984, 'guardianButton')
  request.r(i985[18], i985[19], 0, i984, 'pauseButton')
  request.r(i985[20], i985[21], 0, i984, 'buttonClickSfx')
  return i984
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i986 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i987 = data
  i986.m_Spacing = i987[0]
  i986.m_ChildForceExpandWidth = !!i987[1]
  i986.m_ChildForceExpandHeight = !!i987[2]
  i986.m_ChildControlWidth = !!i987[3]
  i986.m_ChildControlHeight = !!i987[4]
  i986.m_ChildScaleWidth = !!i987[5]
  i986.m_ChildScaleHeight = !!i987[6]
  i986.m_ReverseArrangement = !!i987[7]
  i986.m_Padding = UnityEngine.RectOffset.FromPaddings(i987[8], i987[9], i987[10], i987[11])
  i986.m_ChildAlignment = i987[12]
  return i986
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i988 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i989 = data
  i988.m_Spacing = i989[0]
  i988.m_ChildForceExpandWidth = !!i989[1]
  i988.m_ChildForceExpandHeight = !!i989[2]
  i988.m_ChildControlWidth = !!i989[3]
  i988.m_ChildControlHeight = !!i989[4]
  i988.m_ChildScaleWidth = !!i989[5]
  i988.m_ChildScaleHeight = !!i989[6]
  i988.m_ReverseArrangement = !!i989[7]
  i988.m_Padding = UnityEngine.RectOffset.FromPaddings(i989[8], i989[9], i989[10], i989[11])
  i988.m_ChildAlignment = i989[12]
  return i988
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i990 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i991 = data
  i990.m_hasFontAssetChanged = !!i991[0]
  request.r(i991[1], i991[2], 0, i990, 'm_baseMaterial')
  i990.m_maskOffset = new pc.Vec4( i991[3], i991[4], i991[5], i991[6] )
  i990.m_text = i991[7]
  i990.m_isRightToLeft = !!i991[8]
  request.r(i991[9], i991[10], 0, i990, 'm_fontAsset')
  request.r(i991[11], i991[12], 0, i990, 'm_sharedMaterial')
  var i993 = i991[13]
  var i992 = []
  for(var i = 0; i < i993.length; i += 2) {
  request.r(i993[i + 0], i993[i + 1], 2, i992, '')
  }
  i990.m_fontSharedMaterials = i992
  request.r(i991[14], i991[15], 0, i990, 'm_fontMaterial')
  var i995 = i991[16]
  var i994 = []
  for(var i = 0; i < i995.length; i += 2) {
  request.r(i995[i + 0], i995[i + 1], 2, i994, '')
  }
  i990.m_fontMaterials = i994
  i990.m_fontColor32 = UnityEngine.Color32.ConstructColor(i991[17], i991[18], i991[19], i991[20])
  i990.m_fontColor = new pc.Color(i991[21], i991[22], i991[23], i991[24])
  i990.m_enableVertexGradient = !!i991[25]
  i990.m_colorMode = i991[26]
  i990.m_fontColorGradient = request.d('TMPro.VertexGradient', i991[27], i990.m_fontColorGradient)
  request.r(i991[28], i991[29], 0, i990, 'm_fontColorGradientPreset')
  request.r(i991[30], i991[31], 0, i990, 'm_spriteAsset')
  i990.m_tintAllSprites = !!i991[32]
  request.r(i991[33], i991[34], 0, i990, 'm_StyleSheet')
  i990.m_TextStyleHashCode = i991[35]
  i990.m_overrideHtmlColors = !!i991[36]
  i990.m_faceColor = UnityEngine.Color32.ConstructColor(i991[37], i991[38], i991[39], i991[40])
  i990.m_fontSize = i991[41]
  i990.m_fontSizeBase = i991[42]
  i990.m_fontWeight = i991[43]
  i990.m_enableAutoSizing = !!i991[44]
  i990.m_fontSizeMin = i991[45]
  i990.m_fontSizeMax = i991[46]
  i990.m_fontStyle = i991[47]
  i990.m_HorizontalAlignment = i991[48]
  i990.m_VerticalAlignment = i991[49]
  i990.m_textAlignment = i991[50]
  i990.m_characterSpacing = i991[51]
  i990.m_characterHorizontalScale = i991[52]
  i990.m_wordSpacing = i991[53]
  i990.m_lineSpacing = i991[54]
  i990.m_lineSpacingMax = i991[55]
  i990.m_paragraphSpacing = i991[56]
  i990.m_charWidthMaxAdj = i991[57]
  i990.m_TextWrappingMode = i991[58]
  i990.m_wordWrappingRatios = i991[59]
  i990.m_overflowMode = i991[60]
  request.r(i991[61], i991[62], 0, i990, 'm_linkedTextComponent')
  request.r(i991[63], i991[64], 0, i990, 'parentLinkedComponent')
  i990.m_enableKerning = !!i991[65]
  var i997 = i991[66]
  var i996 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i997.length; i += 1) {
    i996.add(i997[i + 0]);
  }
  i990.m_ActiveFontFeatures = i996
  i990.m_enableExtraPadding = !!i991[67]
  i990.checkPaddingRequired = !!i991[68]
  i990.m_isRichText = !!i991[69]
  i990.m_parseCtrlCharacters = !!i991[70]
  i990.m_isOrthographic = !!i991[71]
  i990.m_isCullingEnabled = !!i991[72]
  i990.m_horizontalMapping = i991[73]
  i990.m_verticalMapping = i991[74]
  i990.m_uvLineOffset = i991[75]
  i990.m_geometrySortingOrder = i991[76]
  i990.m_IsTextObjectScaleStatic = !!i991[77]
  i990.m_VertexBufferAutoSizeReduction = !!i991[78]
  i990.m_useMaxVisibleDescender = !!i991[79]
  i990.m_pageToDisplay = i991[80]
  i990.m_margin = new pc.Vec4( i991[81], i991[82], i991[83], i991[84] )
  i990.m_isUsingLegacyAnimationComponent = !!i991[85]
  i990.m_isVolumetricText = !!i991[86]
  request.r(i991[87], i991[88], 0, i990, 'm_Material')
  i990.m_EmojiFallbackSupport = !!i991[89]
  i990.m_Maskable = !!i991[90]
  i990.m_Color = new pc.Color(i991[91], i991[92], i991[93], i991[94])
  i990.m_RaycastTarget = !!i991[95]
  i990.m_RaycastPadding = new pc.Vec4( i991[96], i991[97], i991[98], i991[99] )
  return i990
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i998 = root || request.c( 'TMPro.VertexGradient' )
  var i999 = data
  i998.topLeft = new pc.Color(i999[0], i999[1], i999[2], i999[3])
  i998.topRight = new pc.Color(i999[4], i999[5], i999[6], i999[7])
  i998.bottomLeft = new pc.Color(i999[8], i999[9], i999[10], i999[11])
  i998.bottomRight = new pc.Color(i999[12], i999[13], i999[14], i999[15])
  return i998
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1002 = root || request.c( 'UnityEngine.UI.Button' )
  var i1003 = data
  i1002.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1003[0], i1002.m_OnClick)
  i1002.m_Navigation = request.d('UnityEngine.UI.Navigation', i1003[1], i1002.m_Navigation)
  i1002.m_Transition = i1003[2]
  i1002.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1003[3], i1002.m_Colors)
  i1002.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1003[4], i1002.m_SpriteState)
  i1002.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1003[5], i1002.m_AnimationTriggers)
  i1002.m_Interactable = !!i1003[6]
  request.r(i1003[7], i1003[8], 0, i1002, 'm_TargetGraphic')
  return i1002
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1004 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1005 = data
  i1004.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1005[0], i1004.m_PersistentCalls)
  return i1004
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1006 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1007 = data
  var i1009 = i1007[0]
  var i1008 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.add(request.d('UnityEngine.Events.PersistentCall', i1009[i + 0]));
  }
  i1006.m_Calls = i1008
  return i1006
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1012 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1013 = data
  request.r(i1013[0], i1013[1], 0, i1012, 'm_Target')
  i1012.m_TargetAssemblyTypeName = i1013[2]
  i1012.m_MethodName = i1013[3]
  i1012.m_Mode = i1013[4]
  i1012.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1013[5], i1012.m_Arguments)
  i1012.m_CallState = i1013[6]
  return i1012
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1014 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1015 = data
  i1014.m_Mode = i1015[0]
  i1014.m_WrapAround = !!i1015[1]
  request.r(i1015[2], i1015[3], 0, i1014, 'm_SelectOnUp')
  request.r(i1015[4], i1015[5], 0, i1014, 'm_SelectOnDown')
  request.r(i1015[6], i1015[7], 0, i1014, 'm_SelectOnLeft')
  request.r(i1015[8], i1015[9], 0, i1014, 'm_SelectOnRight')
  return i1014
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1016 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1017 = data
  i1016.m_NormalColor = new pc.Color(i1017[0], i1017[1], i1017[2], i1017[3])
  i1016.m_HighlightedColor = new pc.Color(i1017[4], i1017[5], i1017[6], i1017[7])
  i1016.m_PressedColor = new pc.Color(i1017[8], i1017[9], i1017[10], i1017[11])
  i1016.m_SelectedColor = new pc.Color(i1017[12], i1017[13], i1017[14], i1017[15])
  i1016.m_DisabledColor = new pc.Color(i1017[16], i1017[17], i1017[18], i1017[19])
  i1016.m_ColorMultiplier = i1017[20]
  i1016.m_FadeDuration = i1017[21]
  return i1016
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1018 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1019 = data
  request.r(i1019[0], i1019[1], 0, i1018, 'm_HighlightedSprite')
  request.r(i1019[2], i1019[3], 0, i1018, 'm_PressedSprite')
  request.r(i1019[4], i1019[5], 0, i1018, 'm_SelectedSprite')
  request.r(i1019[6], i1019[7], 0, i1018, 'm_DisabledSprite')
  return i1018
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1020 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1021 = data
  i1020.m_NormalTrigger = i1021[0]
  i1020.m_HighlightedTrigger = i1021[1]
  i1020.m_PressedTrigger = i1021[2]
  i1020.m_SelectedTrigger = i1021[3]
  i1020.m_DisabledTrigger = i1021[4]
  return i1020
}

Deserializers["UtilityButton"] = function (request, data, root) {
  var i1022 = root || request.c( 'UtilityButton' )
  var i1023 = data
  request.r(i1023[0], i1023[1], 0, i1022, 'typePrefab')
  i1022.coolDown = i1023[2]
  request.r(i1023[3], i1023[4], 0, i1022, 'coolDownImageFill')
  request.r(i1023[5], i1023[6], 0, i1022, 'validateArea')
  i1022.activeColor = new pc.Color(i1023[7], i1023[8], i1023[9], i1023[10])
  i1022.inactiveColor = new pc.Color(i1023[11], i1023[12], i1023[13], i1023[14])
  return i1022
}

Deserializers["Utility.PotatoDevUI.PDUTextEffect"] = function (request, data, root) {
  var i1024 = root || request.c( 'Utility.PotatoDevUI.PDUTextEffect' )
  var i1025 = data
  i1024.preset = i1025[0]
  i1024.hasDuration = !!i1025[1]
  i1024.playOnAwake = !!i1025[2]
  i1024.fadeInDuration = i1025[3]
  i1024.visibleDuration = i1025[4]
  i1024.fadeOutDuration = i1025[5]
  i1024.floatDistance = i1025[6]
  i1024.popScale = i1025[7]
  i1024.punchStrength = new pc.Vec2( i1025[8], i1025[9] )
  i1024.punchDuration = i1025[10]
  i1024.shakeStrength = i1025[11]
  return i1024
}

Deserializers["WinMenu"] = function (request, data, root) {
  var i1026 = root || request.c( 'WinMenu' )
  var i1027 = data
  request.r(i1027[0], i1027[1], 0, i1026, 'bonusGemText')
  request.r(i1027[2], i1027[3], 0, i1026, 'returnButton')
  return i1026
}

Deserializers["LoseMenu"] = function (request, data, root) {
  var i1028 = root || request.c( 'LoseMenu' )
  var i1029 = data
  request.r(i1029[0], i1029[1], 0, i1028, 'returnButton')
  request.r(i1029[2], i1029[3], 0, i1028, 'restartButton')
  return i1028
}

Deserializers["LandingMenu"] = function (request, data, root) {
  var i1030 = root || request.c( 'LandingMenu' )
  var i1031 = data
  request.r(i1031[0], i1031[1], 0, i1030, 'screenButton')
  request.r(i1031[2], i1031[3], 0, i1030, 'buttonClickSfx')
  return i1030
}

Deserializers["Barrier"] = function (request, data, root) {
  var i1032 = root || request.c( 'Barrier' )
  var i1033 = data
  var i1035 = i1033[0]
  var i1034 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1035.length; i += 2) {
  request.r(i1035[i + 0], i1035[i + 1], 1, i1034, '')
  }
  i1032.barriers = i1034
  request.r(i1033[1], i1033[2], 0, i1032, 'healthBarFill')
  return i1032
}

Deserializers["Board"] = function (request, data, root) {
  var i1036 = root || request.c( 'Board' )
  var i1037 = data
  var i1039 = i1037[0]
  var i1038 = new (System.Collections.Generic.List$1(Bridge.ns('Slot')))
  for(var i = 0; i < i1039.length; i += 2) {
  request.r(i1039[i + 0], i1039[i + 1], 1, i1038, '')
  }
  i1036.slots = i1038
  return i1036
}

Deserializers["Slot"] = function (request, data, root) {
  var i1042 = root || request.c( 'Slot' )
  var i1043 = data
  i1042.slotType = i1043[0]
  return i1042
}

Deserializers["Wave"] = function (request, data, root) {
  var i1044 = root || request.c( 'Wave' )
  var i1045 = data
  i1044.minYPoint = i1045[0]
  i1044.maxYPoint = i1045[1]
  request.r(i1045[2], i1045[3], 0, i1044, 'spawnPoint')
  return i1044
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1046 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1047 = data
  request.r(i1047[0], i1047[1], 0, i1046, 'm_FirstSelected')
  i1046.m_sendNavigationEvents = !!i1047[2]
  i1046.m_DragThreshold = i1047[3]
  return i1046
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1048 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1049 = data
  i1048.m_HorizontalAxis = i1049[0]
  i1048.m_VerticalAxis = i1049[1]
  i1048.m_SubmitButton = i1049[2]
  i1048.m_CancelButton = i1049[3]
  i1048.m_InputActionsPerSecond = i1049[4]
  i1048.m_RepeatDelay = i1049[5]
  i1048.m_ForceModuleActive = !!i1049[6]
  i1048.m_SendPointerHoverToParent = !!i1049[7]
  return i1048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1051 = data
  i1050.ambientIntensity = i1051[0]
  i1050.reflectionIntensity = i1051[1]
  i1050.ambientMode = i1051[2]
  i1050.ambientLight = new pc.Color(i1051[3], i1051[4], i1051[5], i1051[6])
  i1050.ambientSkyColor = new pc.Color(i1051[7], i1051[8], i1051[9], i1051[10])
  i1050.ambientGroundColor = new pc.Color(i1051[11], i1051[12], i1051[13], i1051[14])
  i1050.ambientEquatorColor = new pc.Color(i1051[15], i1051[16], i1051[17], i1051[18])
  i1050.fogColor = new pc.Color(i1051[19], i1051[20], i1051[21], i1051[22])
  i1050.fogEndDistance = i1051[23]
  i1050.fogStartDistance = i1051[24]
  i1050.fogDensity = i1051[25]
  i1050.fog = !!i1051[26]
  request.r(i1051[27], i1051[28], 0, i1050, 'skybox')
  i1050.fogMode = i1051[29]
  var i1053 = i1051[30]
  var i1052 = []
  for(var i = 0; i < i1053.length; i += 1) {
    i1052.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1053[i + 0]) );
  }
  i1050.lightmaps = i1052
  i1050.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1051[31], i1050.lightProbes)
  i1050.lightmapsMode = i1051[32]
  i1050.mixedBakeMode = i1051[33]
  i1050.environmentLightingMode = i1051[34]
  i1050.ambientProbe = new pc.SphericalHarmonicsL2(i1051[35])
  request.r(i1051[36], i1051[37], 0, i1050, 'customReflection')
  request.r(i1051[38], i1051[39], 0, i1050, 'defaultReflection')
  i1050.defaultReflectionMode = i1051[40]
  i1050.defaultReflectionResolution = i1051[41]
  i1050.sunLightObjectId = i1051[42]
  i1050.pixelLightCount = i1051[43]
  i1050.defaultReflectionHDR = !!i1051[44]
  i1050.hasLightDataAsset = !!i1051[45]
  i1050.hasManualGenerate = !!i1051[46]
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1057 = data
  request.r(i1057[0], i1057[1], 0, i1056, 'lightmapColor')
  request.r(i1057[2], i1057[3], 0, i1056, 'lightmapDirection')
  request.r(i1057[4], i1057[5], 0, i1056, 'shadowMask')
  return i1056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1058 = root || new UnityEngine.LightProbes()
  var i1059 = data
  return i1058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1067 = data
  var i1069 = i1067[0]
  var i1068 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1069.length; i += 1) {
    i1068.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1069[i + 0]));
  }
  i1066.ShaderCompilationErrors = i1068
  i1066.name = i1067[1]
  i1066.guid = i1067[2]
  var i1071 = i1067[3]
  var i1070 = []
  for(var i = 0; i < i1071.length; i += 1) {
    i1070.push( i1071[i + 0] );
  }
  i1066.shaderDefinedKeywords = i1070
  var i1073 = i1067[4]
  var i1072 = []
  for(var i = 0; i < i1073.length; i += 1) {
    i1072.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1073[i + 0]) );
  }
  i1066.passes = i1072
  var i1075 = i1067[5]
  var i1074 = []
  for(var i = 0; i < i1075.length; i += 1) {
    i1074.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1075[i + 0]) );
  }
  i1066.usePasses = i1074
  var i1077 = i1067[6]
  var i1076 = []
  for(var i = 0; i < i1077.length; i += 1) {
    i1076.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1077[i + 0]) );
  }
  i1066.defaultParameterValues = i1076
  request.r(i1067[7], i1067[8], 0, i1066, 'unityFallbackShader')
  i1066.readDepth = !!i1067[9]
  i1066.hasDepthOnlyPass = !!i1067[10]
  i1066.isCreatedByShaderGraph = !!i1067[11]
  i1066.disableBatching = !!i1067[12]
  i1066.compiled = !!i1067[13]
  return i1066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1081 = data
  i1080.shaderName = i1081[0]
  i1080.errorMessage = i1081[1]
  return i1080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1084 = root || new pc.UnityShaderPass()
  var i1085 = data
  i1084.id = i1085[0]
  i1084.subShaderIndex = i1085[1]
  i1084.name = i1085[2]
  i1084.passType = i1085[3]
  i1084.grabPassTextureName = i1085[4]
  i1084.usePass = !!i1085[5]
  i1084.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1085[6], i1084.zTest)
  i1084.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1085[7], i1084.zWrite)
  i1084.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1085[8], i1084.culling)
  i1084.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1085[9], i1084.blending)
  i1084.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1085[10], i1084.alphaBlending)
  i1084.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1085[11], i1084.colorWriteMask)
  i1084.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1085[12], i1084.offsetUnits)
  i1084.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1085[13], i1084.offsetFactor)
  i1084.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1085[14], i1084.stencilRef)
  i1084.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1085[15], i1084.stencilReadMask)
  i1084.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1085[16], i1084.stencilWriteMask)
  i1084.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1085[17], i1084.stencilOp)
  i1084.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1085[18], i1084.stencilOpFront)
  i1084.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1085[19], i1084.stencilOpBack)
  var i1087 = i1085[20]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1087[i + 0]) );
  }
  i1084.tags = i1086
  var i1089 = i1085[21]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 1) {
    i1088.push( i1089[i + 0] );
  }
  i1084.passDefinedKeywords = i1088
  var i1091 = i1085[22]
  var i1090 = []
  for(var i = 0; i < i1091.length; i += 1) {
    i1090.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1091[i + 0]) );
  }
  i1084.passDefinedKeywordGroups = i1090
  var i1093 = i1085[23]
  var i1092 = []
  for(var i = 0; i < i1093.length; i += 1) {
    i1092.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1093[i + 0]) );
  }
  i1084.variants = i1092
  var i1095 = i1085[24]
  var i1094 = []
  for(var i = 0; i < i1095.length; i += 1) {
    i1094.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1095[i + 0]) );
  }
  i1084.excludedVariants = i1094
  i1084.hasDepthReader = !!i1085[25]
  return i1084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1097 = data
  i1096.val = i1097[0]
  i1096.name = i1097[1]
  return i1096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1099 = data
  i1098.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1099[0], i1098.src)
  i1098.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1099[1], i1098.dst)
  i1098.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1099[2], i1098.op)
  return i1098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1101 = data
  i1100.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1101[0], i1100.pass)
  i1100.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1101[1], i1100.fail)
  i1100.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1101[2], i1100.zFail)
  i1100.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1101[3], i1100.comp)
  return i1100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1105 = data
  i1104.name = i1105[0]
  i1104.value = i1105[1]
  return i1104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1109 = data
  var i1111 = i1109[0]
  var i1110 = []
  for(var i = 0; i < i1111.length; i += 1) {
    i1110.push( i1111[i + 0] );
  }
  i1108.keywords = i1110
  i1108.hasDiscard = !!i1109[1]
  return i1108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1115 = data
  i1114.passId = i1115[0]
  i1114.subShaderIndex = i1115[1]
  var i1117 = i1115[2]
  var i1116 = []
  for(var i = 0; i < i1117.length; i += 1) {
    i1116.push( i1117[i + 0] );
  }
  i1114.keywords = i1116
  i1114.vertexProgram = i1115[3]
  i1114.fragmentProgram = i1115[4]
  i1114.exportedForWebGl2 = !!i1115[5]
  i1114.readDepth = !!i1115[6]
  return i1114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1121 = data
  request.r(i1121[0], i1121[1], 0, i1120, 'shader')
  i1120.pass = i1121[2]
  return i1120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1125 = data
  i1124.name = i1125[0]
  i1124.type = i1125[1]
  i1124.value = new pc.Vec4( i1125[2], i1125[3], i1125[4], i1125[5] )
  i1124.textureValue = i1125[6]
  i1124.shaderPropertyFlag = i1125[7]
  return i1124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1127 = data
  i1126.name = i1127[0]
  request.r(i1127[1], i1127[2], 0, i1126, 'texture')
  i1126.aabb = i1127[3]
  i1126.vertices = i1127[4]
  i1126.triangles = i1127[5]
  i1126.textureRect = UnityEngine.Rect.MinMaxRect(i1127[6], i1127[7], i1127[8], i1127[9])
  i1126.packedRect = UnityEngine.Rect.MinMaxRect(i1127[10], i1127[11], i1127[12], i1127[13])
  i1126.border = new pc.Vec4( i1127[14], i1127[15], i1127[16], i1127[17] )
  i1126.transparency = i1127[18]
  i1126.bounds = i1127[19]
  i1126.pixelsPerUnit = i1127[20]
  i1126.textureWidth = i1127[21]
  i1126.textureHeight = i1127[22]
  i1126.nativeSize = new pc.Vec2( i1127[23], i1127[24] )
  i1126.pivot = new pc.Vec2( i1127[25], i1127[26] )
  i1126.textureRectOffset = new pc.Vec2( i1127[27], i1127[28] )
  return i1126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1129 = data
  i1128.name = i1129[0]
  return i1128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1131 = data
  i1130.name = i1131[0]
  i1130.wrapMode = i1131[1]
  i1130.isLooping = !!i1131[2]
  i1130.length = i1131[3]
  var i1133 = i1131[4]
  var i1132 = []
  for(var i = 0; i < i1133.length; i += 1) {
    i1132.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1133[i + 0]) );
  }
  i1130.curves = i1132
  var i1135 = i1131[5]
  var i1134 = []
  for(var i = 0; i < i1135.length; i += 1) {
    i1134.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1135[i + 0]) );
  }
  i1130.events = i1134
  i1130.halfPrecision = !!i1131[6]
  i1130._frameRate = i1131[7]
  i1130.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1131[8], i1130.localBounds)
  i1130.hasMuscleCurves = !!i1131[9]
  var i1137 = i1131[10]
  var i1136 = []
  for(var i = 0; i < i1137.length; i += 1) {
    i1136.push( i1137[i + 0] );
  }
  i1130.clipMuscleConstant = i1136
  i1130.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1131[11], i1130.clipBindingConstant)
  return i1130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1141 = data
  i1140.path = i1141[0]
  i1140.hash = i1141[1]
  i1140.componentType = i1141[2]
  i1140.property = i1141[3]
  i1140.keys = i1141[4]
  var i1143 = i1141[5]
  var i1142 = []
  for(var i = 0; i < i1143.length; i += 1) {
    i1142.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1143[i + 0]) );
  }
  i1140.objectReferenceKeys = i1142
  return i1140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1147 = data
  i1146.time = i1147[0]
  request.r(i1147[1], i1147[2], 0, i1146, 'value')
  return i1146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1151 = data
  i1150.functionName = i1151[0]
  i1150.floatParameter = i1151[1]
  i1150.intParameter = i1151[2]
  i1150.stringParameter = i1151[3]
  request.r(i1151[4], i1151[5], 0, i1150, 'objectReferenceParameter')
  i1150.time = i1151[6]
  return i1150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1153 = data
  i1152.center = new pc.Vec3( i1153[0], i1153[1], i1153[2] )
  i1152.extends = new pc.Vec3( i1153[3], i1153[4], i1153[5] )
  return i1152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1157 = data
  var i1159 = i1157[0]
  var i1158 = []
  for(var i = 0; i < i1159.length; i += 1) {
    i1158.push( i1159[i + 0] );
  }
  i1156.genericBindings = i1158
  var i1161 = i1157[1]
  var i1160 = []
  for(var i = 0; i < i1161.length; i += 1) {
    i1160.push( i1161[i + 0] );
  }
  i1156.pptrCurveMapping = i1160
  return i1156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1163 = data
  i1162.name = i1163[0]
  i1162.ascent = i1163[1]
  i1162.originalLineHeight = i1163[2]
  i1162.fontSize = i1163[3]
  var i1165 = i1163[4]
  var i1164 = []
  for(var i = 0; i < i1165.length; i += 1) {
    i1164.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1165[i + 0]) );
  }
  i1162.characterInfo = i1164
  request.r(i1163[5], i1163[6], 0, i1162, 'texture')
  i1162.originalFontSize = i1163[7]
  return i1162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1169 = data
  i1168.index = i1169[0]
  i1168.advance = i1169[1]
  i1168.bearing = i1169[2]
  i1168.glyphWidth = i1169[3]
  i1168.glyphHeight = i1169[4]
  i1168.minX = i1169[5]
  i1168.maxX = i1169[6]
  i1168.minY = i1169[7]
  i1168.maxY = i1169[8]
  i1168.uvBottomLeftX = i1169[9]
  i1168.uvBottomLeftY = i1169[10]
  i1168.uvBottomRightX = i1169[11]
  i1168.uvBottomRightY = i1169[12]
  i1168.uvTopLeftX = i1169[13]
  i1168.uvTopLeftY = i1169[14]
  i1168.uvTopRightX = i1169[15]
  i1168.uvTopRightY = i1169[16]
  return i1168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1171 = data
  i1170.name = i1171[0]
  var i1173 = i1171[1]
  var i1172 = []
  for(var i = 0; i < i1173.length; i += 1) {
    i1172.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1173[i + 0]) );
  }
  i1170.layers = i1172
  var i1175 = i1171[2]
  var i1174 = []
  for(var i = 0; i < i1175.length; i += 1) {
    i1174.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1175[i + 0]) );
  }
  i1170.parameters = i1174
  i1170.animationClips = i1171[3]
  i1170.avatarUnsupported = i1171[4]
  return i1170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1179 = data
  i1178.name = i1179[0]
  i1178.defaultWeight = i1179[1]
  i1178.blendingMode = i1179[2]
  i1178.avatarMask = i1179[3]
  i1178.syncedLayerIndex = i1179[4]
  i1178.syncedLayerAffectsTiming = !!i1179[5]
  i1178.syncedLayers = i1179[6]
  i1178.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1179[7], i1178.stateMachine)
  return i1178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1181 = data
  i1180.id = i1181[0]
  i1180.name = i1181[1]
  i1180.path = i1181[2]
  var i1183 = i1181[3]
  var i1182 = []
  for(var i = 0; i < i1183.length; i += 1) {
    i1182.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1183[i + 0]) );
  }
  i1180.states = i1182
  var i1185 = i1181[4]
  var i1184 = []
  for(var i = 0; i < i1185.length; i += 1) {
    i1184.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1185[i + 0]) );
  }
  i1180.machines = i1184
  var i1187 = i1181[5]
  var i1186 = []
  for(var i = 0; i < i1187.length; i += 1) {
    i1186.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1187[i + 0]) );
  }
  i1180.entryStateTransitions = i1186
  var i1189 = i1181[6]
  var i1188 = []
  for(var i = 0; i < i1189.length; i += 1) {
    i1188.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1189[i + 0]) );
  }
  i1180.exitStateTransitions = i1188
  var i1191 = i1181[7]
  var i1190 = []
  for(var i = 0; i < i1191.length; i += 1) {
    i1190.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1191[i + 0]) );
  }
  i1180.anyStateTransitions = i1190
  i1180.defaultStateId = i1181[8]
  return i1180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1195 = data
  i1194.id = i1195[0]
  i1194.name = i1195[1]
  i1194.cycleOffset = i1195[2]
  i1194.cycleOffsetParameter = i1195[3]
  i1194.cycleOffsetParameterActive = !!i1195[4]
  i1194.mirror = !!i1195[5]
  i1194.mirrorParameter = i1195[6]
  i1194.mirrorParameterActive = !!i1195[7]
  i1194.motionId = i1195[8]
  i1194.nameHash = i1195[9]
  i1194.fullPathHash = i1195[10]
  i1194.speed = i1195[11]
  i1194.speedParameter = i1195[12]
  i1194.speedParameterActive = !!i1195[13]
  i1194.tag = i1195[14]
  i1194.tagHash = i1195[15]
  i1194.writeDefaultValues = !!i1195[16]
  var i1197 = i1195[17]
  var i1196 = []
  for(var i = 0; i < i1197.length; i += 2) {
  request.r(i1197[i + 0], i1197[i + 1], 2, i1196, '')
  }
  i1194.behaviours = i1196
  var i1199 = i1195[18]
  var i1198 = []
  for(var i = 0; i < i1199.length; i += 1) {
    i1198.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1199[i + 0]) );
  }
  i1194.transitions = i1198
  return i1194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1205 = data
  i1204.fullPath = i1205[0]
  i1204.canTransitionToSelf = !!i1205[1]
  i1204.duration = i1205[2]
  i1204.exitTime = i1205[3]
  i1204.hasExitTime = !!i1205[4]
  i1204.hasFixedDuration = !!i1205[5]
  i1204.interruptionSource = i1205[6]
  i1204.offset = i1205[7]
  i1204.orderedInterruption = !!i1205[8]
  i1204.destinationStateId = i1205[9]
  i1204.isExit = !!i1205[10]
  i1204.mute = !!i1205[11]
  i1204.solo = !!i1205[12]
  var i1207 = i1205[13]
  var i1206 = []
  for(var i = 0; i < i1207.length; i += 1) {
    i1206.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1207[i + 0]) );
  }
  i1204.conditions = i1206
  return i1204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1213 = data
  i1212.destinationStateId = i1213[0]
  i1212.isExit = !!i1213[1]
  i1212.mute = !!i1213[2]
  i1212.solo = !!i1213[3]
  var i1215 = i1213[4]
  var i1214 = []
  for(var i = 0; i < i1215.length; i += 1) {
    i1214.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1215[i + 0]) );
  }
  i1212.conditions = i1214
  return i1212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1219 = data
  i1218.mode = i1219[0]
  i1218.parameter = i1219[1]
  i1218.threshold = i1219[2]
  return i1218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1223 = data
  i1222.defaultBool = !!i1223[0]
  i1222.defaultFloat = i1223[1]
  i1222.defaultInt = i1223[2]
  i1222.name = i1223[3]
  i1222.nameHash = i1223[4]
  i1222.type = i1223[5]
  return i1222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1225 = data
  i1224.name = i1225[0]
  i1224.bytes64 = i1225[1]
  i1224.data = i1225[2]
  return i1224
}

Deserializers["CatData"] = function (request, data, root) {
  var i1226 = root || request.c( 'CatData' )
  var i1227 = data
  i1226.catID = i1227[0]
  i1226.catName = i1227[1]
  i1226.catDescription = i1227[2]
  i1226.baseSize = new pc.Vec2( i1227[3], i1227[4] )
  i1226.offset = new pc.Vec2( i1227[5], i1227[6] )
  request.r(i1227[7], i1227[8], 0, i1226, 'baseSprite')
  request.r(i1227[9], i1227[10], 0, i1226, 'baseAnimation')
  var i1229 = i1227[11]
  var i1228 = []
  for(var i = 0; i < i1229.length; i += 1) {
    i1228.push( request.d('CatMergeData', i1229[i + 0]) );
  }
  i1226.catVisuals = i1228
  var i1231 = i1227[12]
  var i1230 = []
  for(var i = 0; i < i1231.length; i += 1) {
    i1230.push( request.d('CatBaseStatData', i1231[i + 0]) );
  }
  i1226.catBaseStats = i1230
  var i1233 = i1227[13]
  var i1232 = []
  for(var i = 0; i < i1233.length; i += 1) {
    i1232.push( request.d('CatUpgradeData', i1233[i + 0]) );
  }
  i1226.catUpgrades = i1232
  return i1226
}

Deserializers["CatMergeData"] = function (request, data, root) {
  var i1236 = root || request.c( 'CatMergeData' )
  var i1237 = data
  request.r(i1237[0], i1237[1], 0, i1236, 'catSkin')
  return i1236
}

Deserializers["CatBaseStatData"] = function (request, data, root) {
  var i1240 = root || request.c( 'CatBaseStatData' )
  var i1241 = data
  i1240.baseDamage = i1241[0]
  i1240.baseReloadTime = i1241[1]
  i1240.baseRange = i1241[2]
  i1240.baseSpeed = i1241[3]
  return i1240
}

Deserializers["CatUpgradeData"] = function (request, data, root) {
  var i1244 = root || request.c( 'CatUpgradeData' )
  var i1245 = data
  i1244.upgradePrice = i1245[0]
  i1244.upgradeDamage = i1245[1]
  i1244.upgradeReloadTime = i1245[2]
  return i1244
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1246 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1247 = data
  var i1249 = i1247[0]
  var i1248 = []
  for(var i = 0; i < i1249.length; i += 2) {
  request.r(i1249[i + 0], i1249[i + 1], 2, i1248, '')
  }
  i1246.atlasAssets = i1248
  i1246.scale = i1247[1]
  request.r(i1247[2], i1247[3], 0, i1246, 'skeletonJSON')
  i1246.isUpgradingBlendModeMaterials = !!i1247[4]
  i1246.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1247[5], i1246.blendModeMaterials)
  var i1251 = i1247[6]
  var i1250 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1251.length; i += 2) {
  request.r(i1251[i + 0], i1251[i + 1], 1, i1250, '')
  }
  i1246.skeletonDataModifiers = i1250
  var i1253 = i1247[7]
  var i1252 = []
  for(var i = 0; i < i1253.length; i += 1) {
    i1252.push( i1253[i + 0] );
  }
  i1246.fromAnimation = i1252
  var i1255 = i1247[8]
  var i1254 = []
  for(var i = 0; i < i1255.length; i += 1) {
    i1254.push( i1255[i + 0] );
  }
  i1246.toAnimation = i1254
  i1246.duration = i1247[9]
  i1246.defaultMix = i1247[10]
  request.r(i1247[11], i1247[12], 0, i1246, 'controller')
  return i1246
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1258 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1259 = data
  i1258.applyAdditiveMaterial = !!i1259[0]
  var i1261 = i1259[1]
  var i1260 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1261.length; i += 1) {
    i1260.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1261[i + 0]));
  }
  i1258.additiveMaterials = i1260
  var i1263 = i1259[2]
  var i1262 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1263.length; i += 1) {
    i1262.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1263[i + 0]));
  }
  i1258.multiplyMaterials = i1262
  var i1265 = i1259[3]
  var i1264 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1265.length; i += 1) {
    i1264.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1265[i + 0]));
  }
  i1258.screenMaterials = i1264
  i1258.requiresBlendModeMaterials = !!i1259[4]
  return i1258
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1268 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1269 = data
  i1268.pageName = i1269[0]
  request.r(i1269[1], i1269[2], 0, i1268, 'material')
  return i1268
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1272 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1273 = data
  request.r(i1273[0], i1273[1], 0, i1272, 'atlasFile')
  var i1275 = i1273[2]
  var i1274 = []
  for(var i = 0; i < i1275.length; i += 2) {
  request.r(i1275[i + 0], i1275[i + 1], 2, i1274, '')
  }
  i1272.materials = i1274
  i1272.textureLoadingMode = i1273[3]
  request.r(i1273[4], i1273[5], 0, i1272, 'onDemandTextureLoader')
  return i1272
}

Deserializers["DogData"] = function (request, data, root) {
  var i1276 = root || request.c( 'DogData' )
  var i1277 = data
  i1276.dogID = i1277[0]
  i1276.dogName = i1277[1]
  i1276.dogDescription = i1277[2]
  request.r(i1277[3], i1277[4], 0, i1276, 'skin')
  i1276.baseDamage = i1277[5]
  i1276.baseReloadTime = i1277[6]
  i1276.baseHealth = i1277[7]
  i1276.baseSpeed = i1277[8]
  return i1276
}

Deserializers["LevelData"] = function (request, data, root) {
  var i1278 = root || request.c( 'LevelData' )
  var i1279 = data
  request.r(i1279[0], i1279[1], 0, i1278, 'jsonFile')
  i1278.levelID = i1279[2]
  i1278.levelName = i1279[3]
  i1278.isBossLevel = !!i1279[4]
  i1278.bonusGem = i1279[5]
  var i1281 = i1279[6]
  var i1280 = new (System.Collections.Generic.List$1(Bridge.ns('WaveData')))
  for(var i = 0; i < i1281.length; i += 1) {
    i1280.add(request.d('WaveData', i1281[i + 0]));
  }
  i1278.waves = i1280
  return i1278
}

Deserializers["WaveData"] = function (request, data, root) {
  var i1284 = root || request.c( 'WaveData' )
  var i1285 = data
  i1284.nextWaveDelay = i1285[0]
  var i1287 = i1285[1]
  var i1286 = new (System.Collections.Generic.List$1(Bridge.ns('SpawnEvent')))
  for(var i = 0; i < i1287.length; i += 1) {
    i1286.add(request.d('SpawnEvent', i1287[i + 0]));
  }
  i1284.timeline = i1286
  return i1284
}

Deserializers["SpawnEvent"] = function (request, data, root) {
  var i1290 = root || request.c( 'SpawnEvent' )
  var i1291 = data
  i1290.time = i1291[0]
  request.r(i1291[1], i1291[2], 0, i1290, 'dogData')
  return i1290
}

Deserializers["PermanentUpgradeData"] = function (request, data, root) {
  var i1292 = root || request.c( 'PermanentUpgradeData' )
  var i1293 = data
  i1292.category = i1293[0]
  var i1295 = i1293[1]
  var i1294 = []
  for(var i = 0; i < i1295.length; i += 1) {
    i1294.push( request.d('PermanentUpgrade', i1295[i + 0]) );
  }
  i1292.upgrades = i1294
  return i1292
}

Deserializers["PermanentUpgrade"] = function (request, data, root) {
  var i1298 = root || request.c( 'PermanentUpgrade' )
  var i1299 = data
  i1298.upgradeName = i1299[0]
  i1298.upgradeDescription = i1299[1]
  request.r(i1299[2], i1299[3], 0, i1298, 'upgradeIcon')
  i1298.type = i1299[4]
  var i1301 = i1299[5]
  var i1300 = []
  for(var i = 0; i < i1301.length; i += 1) {
    i1300.push( request.d('UpgradeStatData', i1301[i + 0]) );
  }
  i1298.stats = i1300
  return i1298
}

Deserializers["UpgradeStatData"] = function (request, data, root) {
  var i1304 = root || request.c( 'UpgradeStatData' )
  var i1305 = data
  i1304.price = i1305[0]
  i1304.effectValue = i1305[1]
  return i1304
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1306 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1307 = data
  i1306.normalStyle = i1307[0]
  i1306.normalSpacingOffset = i1307[1]
  i1306.boldStyle = i1307[2]
  i1306.boldSpacing = i1307[3]
  i1306.italicStyle = i1307[4]
  i1306.tabSize = i1307[5]
  request.r(i1307[6], i1307[7], 0, i1306, 'atlas')
  i1306.m_SourceFontFileGUID = i1307[8]
  i1306.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1307[9], i1306.m_CreationSettings)
  request.r(i1307[10], i1307[11], 0, i1306, 'm_SourceFontFile')
  i1306.m_SourceFontFilePath = i1307[12]
  i1306.m_AtlasPopulationMode = i1307[13]
  i1306.InternalDynamicOS = !!i1307[14]
  var i1309 = i1307[15]
  var i1308 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1309.length; i += 1) {
    i1308.add(request.d('UnityEngine.TextCore.Glyph', i1309[i + 0]));
  }
  i1306.m_GlyphTable = i1308
  var i1311 = i1307[16]
  var i1310 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1311.length; i += 1) {
    i1310.add(request.d('TMPro.TMP_Character', i1311[i + 0]));
  }
  i1306.m_CharacterTable = i1310
  var i1313 = i1307[17]
  var i1312 = []
  for(var i = 0; i < i1313.length; i += 2) {
  request.r(i1313[i + 0], i1313[i + 1], 2, i1312, '')
  }
  i1306.m_AtlasTextures = i1312
  i1306.m_AtlasTextureIndex = i1307[18]
  i1306.m_IsMultiAtlasTexturesEnabled = !!i1307[19]
  i1306.m_GetFontFeatures = !!i1307[20]
  i1306.m_ClearDynamicDataOnBuild = !!i1307[21]
  i1306.m_AtlasWidth = i1307[22]
  i1306.m_AtlasHeight = i1307[23]
  i1306.m_AtlasPadding = i1307[24]
  i1306.m_AtlasRenderMode = i1307[25]
  var i1315 = i1307[26]
  var i1314 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1315.length; i += 1) {
    i1314.add(request.d('UnityEngine.TextCore.GlyphRect', i1315[i + 0]));
  }
  i1306.m_UsedGlyphRects = i1314
  var i1317 = i1307[27]
  var i1316 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1317.length; i += 1) {
    i1316.add(request.d('UnityEngine.TextCore.GlyphRect', i1317[i + 0]));
  }
  i1306.m_FreeGlyphRects = i1316
  i1306.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1307[28], i1306.m_FontFeatureTable)
  i1306.m_ShouldReimportFontFeatures = !!i1307[29]
  var i1319 = i1307[30]
  var i1318 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1319.length; i += 2) {
  request.r(i1319[i + 0], i1319[i + 1], 1, i1318, '')
  }
  i1306.m_FallbackFontAssetTable = i1318
  var i1321 = i1307[31]
  var i1320 = []
  for(var i = 0; i < i1321.length; i += 1) {
    i1320.push( request.d('TMPro.TMP_FontWeightPair', i1321[i + 0]) );
  }
  i1306.m_FontWeightTable = i1320
  var i1323 = i1307[32]
  var i1322 = []
  for(var i = 0; i < i1323.length; i += 1) {
    i1322.push( request.d('TMPro.TMP_FontWeightPair', i1323[i + 0]) );
  }
  i1306.fontWeights = i1322
  i1306.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1307[33], i1306.m_fontInfo)
  var i1325 = i1307[34]
  var i1324 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1325.length; i += 1) {
    i1324.add(request.d('TMPro.TMP_Glyph', i1325[i + 0]));
  }
  i1306.m_glyphInfoList = i1324
  i1306.m_KerningTable = request.d('TMPro.KerningTable', i1307[35], i1306.m_KerningTable)
  var i1327 = i1307[36]
  var i1326 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1327.length; i += 2) {
  request.r(i1327[i + 0], i1327[i + 1], 1, i1326, '')
  }
  i1306.fallbackFontAssets = i1326
  i1306.m_Version = i1307[37]
  i1306.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1307[38], i1306.m_FaceInfo)
  request.r(i1307[39], i1307[40], 0, i1306, 'm_Material')
  return i1306
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1328 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1329 = data
  i1328.sourceFontFileName = i1329[0]
  i1328.sourceFontFileGUID = i1329[1]
  i1328.faceIndex = i1329[2]
  i1328.pointSizeSamplingMode = i1329[3]
  i1328.pointSize = i1329[4]
  i1328.padding = i1329[5]
  i1328.paddingMode = i1329[6]
  i1328.packingMode = i1329[7]
  i1328.atlasWidth = i1329[8]
  i1328.atlasHeight = i1329[9]
  i1328.characterSetSelectionMode = i1329[10]
  i1328.characterSequence = i1329[11]
  i1328.referencedFontAssetGUID = i1329[12]
  i1328.referencedTextAssetGUID = i1329[13]
  i1328.fontStyle = i1329[14]
  i1328.fontStyleModifier = i1329[15]
  i1328.renderMode = i1329[16]
  i1328.includeFontFeatures = !!i1329[17]
  return i1328
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1332 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1333 = data
  i1332.m_Index = i1333[0]
  i1332.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1333[1], i1332.m_Metrics)
  i1332.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1333[2], i1332.m_GlyphRect)
  i1332.m_Scale = i1333[3]
  i1332.m_AtlasIndex = i1333[4]
  i1332.m_ClassDefinitionType = i1333[5]
  return i1332
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1334 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1335 = data
  i1334.m_Width = i1335[0]
  i1334.m_Height = i1335[1]
  i1334.m_HorizontalBearingX = i1335[2]
  i1334.m_HorizontalBearingY = i1335[3]
  i1334.m_HorizontalAdvance = i1335[4]
  return i1334
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1336 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1337 = data
  i1336.m_X = i1337[0]
  i1336.m_Y = i1337[1]
  i1336.m_Width = i1337[2]
  i1336.m_Height = i1337[3]
  return i1336
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1340 = root || request.c( 'TMPro.TMP_Character' )
  var i1341 = data
  i1340.m_ElementType = i1341[0]
  i1340.m_Unicode = i1341[1]
  i1340.m_GlyphIndex = i1341[2]
  i1340.m_Scale = i1341[3]
  return i1340
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1346 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1347 = data
  var i1349 = i1347[0]
  var i1348 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1349.length; i += 1) {
    i1348.add(request.d('TMPro.MultipleSubstitutionRecord', i1349[i + 0]));
  }
  i1346.m_MultipleSubstitutionRecords = i1348
  var i1351 = i1347[1]
  var i1350 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1351.length; i += 1) {
    i1350.add(request.d('TMPro.LigatureSubstitutionRecord', i1351[i + 0]));
  }
  i1346.m_LigatureSubstitutionRecords = i1350
  var i1353 = i1347[2]
  var i1352 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1353.length; i += 1) {
    i1352.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1353[i + 0]));
  }
  i1346.m_GlyphPairAdjustmentRecords = i1352
  var i1355 = i1347[3]
  var i1354 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1355.length; i += 1) {
    i1354.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1355[i + 0]));
  }
  i1346.m_MarkToBaseAdjustmentRecords = i1354
  var i1357 = i1347[4]
  var i1356 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1357.length; i += 1) {
    i1356.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1357[i + 0]));
  }
  i1346.m_MarkToMarkAdjustmentRecords = i1356
  return i1346
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1360 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1361 = data
  i1360.m_TargetGlyphID = i1361[0]
  i1360.m_SubstituteGlyphIDs = i1361[1]
  return i1360
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1364 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1365 = data
  i1364.m_ComponentGlyphIDs = i1365[0]
  i1364.m_LigatureGlyphID = i1365[1]
  return i1364
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1368 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1369 = data
  i1368.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1369[0], i1368.m_FirstAdjustmentRecord)
  i1368.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1369[1], i1368.m_SecondAdjustmentRecord)
  i1368.m_FeatureLookupFlags = i1369[2]
  return i1368
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1372 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1373 = data
  i1372.m_BaseGlyphID = i1373[0]
  i1372.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1373[1], i1372.m_BaseGlyphAnchorPoint)
  i1372.m_MarkGlyphID = i1373[2]
  i1372.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1373[3], i1372.m_MarkPositionAdjustment)
  return i1372
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1376 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1377 = data
  i1376.m_BaseMarkGlyphID = i1377[0]
  i1376.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1377[1], i1376.m_BaseMarkGlyphAnchorPoint)
  i1376.m_CombiningMarkGlyphID = i1377[2]
  i1376.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1377[3], i1376.m_CombiningMarkPositionAdjustment)
  return i1376
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1382 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1383 = data
  request.r(i1383[0], i1383[1], 0, i1382, 'regularTypeface')
  request.r(i1383[2], i1383[3], 0, i1382, 'italicTypeface')
  return i1382
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1384 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1385 = data
  i1384.Name = i1385[0]
  i1384.PointSize = i1385[1]
  i1384.Scale = i1385[2]
  i1384.CharacterCount = i1385[3]
  i1384.LineHeight = i1385[4]
  i1384.Baseline = i1385[5]
  i1384.Ascender = i1385[6]
  i1384.CapHeight = i1385[7]
  i1384.Descender = i1385[8]
  i1384.CenterLine = i1385[9]
  i1384.SuperscriptOffset = i1385[10]
  i1384.SubscriptOffset = i1385[11]
  i1384.SubSize = i1385[12]
  i1384.Underline = i1385[13]
  i1384.UnderlineThickness = i1385[14]
  i1384.strikethrough = i1385[15]
  i1384.strikethroughThickness = i1385[16]
  i1384.TabWidth = i1385[17]
  i1384.Padding = i1385[18]
  i1384.AtlasWidth = i1385[19]
  i1384.AtlasHeight = i1385[20]
  return i1384
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1388 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1389 = data
  i1388.id = i1389[0]
  i1388.x = i1389[1]
  i1388.y = i1389[2]
  i1388.width = i1389[3]
  i1388.height = i1389[4]
  i1388.xOffset = i1389[5]
  i1388.yOffset = i1389[6]
  i1388.xAdvance = i1389[7]
  i1388.scale = i1389[8]
  return i1388
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1390 = root || request.c( 'TMPro.KerningTable' )
  var i1391 = data
  var i1393 = i1391[0]
  var i1392 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1393.length; i += 1) {
    i1392.add(request.d('TMPro.KerningPair', i1393[i + 0]));
  }
  i1390.kerningPairs = i1392
  return i1390
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1396 = root || request.c( 'TMPro.KerningPair' )
  var i1397 = data
  i1396.xOffset = i1397[0]
  i1396.m_FirstGlyph = i1397[1]
  i1396.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1397[2], i1396.m_FirstGlyphAdjustments)
  i1396.m_SecondGlyph = i1397[3]
  i1396.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1397[4], i1396.m_SecondGlyphAdjustments)
  i1396.m_IgnoreSpacingAdjustments = !!i1397[5]
  return i1396
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1398 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1399 = data
  i1398.m_FaceIndex = i1399[0]
  i1398.m_FamilyName = i1399[1]
  i1398.m_StyleName = i1399[2]
  i1398.m_PointSize = i1399[3]
  i1398.m_Scale = i1399[4]
  i1398.m_UnitsPerEM = i1399[5]
  i1398.m_LineHeight = i1399[6]
  i1398.m_AscentLine = i1399[7]
  i1398.m_CapLine = i1399[8]
  i1398.m_MeanLine = i1399[9]
  i1398.m_Baseline = i1399[10]
  i1398.m_DescentLine = i1399[11]
  i1398.m_SuperscriptOffset = i1399[12]
  i1398.m_SuperscriptSize = i1399[13]
  i1398.m_SubscriptOffset = i1399[14]
  i1398.m_SubscriptSize = i1399[15]
  i1398.m_UnderlineOffset = i1399[16]
  i1398.m_UnderlineThickness = i1399[17]
  i1398.m_StrikethroughOffset = i1399[18]
  i1398.m_StrikethroughThickness = i1399[19]
  i1398.m_TabWidth = i1399[20]
  return i1398
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1400 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1401 = data
  i1400.useSafeMode = !!i1401[0]
  i1400.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1401[1], i1400.safeModeOptions)
  i1400.timeScale = i1401[2]
  i1400.unscaledTimeScale = i1401[3]
  i1400.useSmoothDeltaTime = !!i1401[4]
  i1400.maxSmoothUnscaledTime = i1401[5]
  i1400.rewindCallbackMode = i1401[6]
  i1400.showUnityEditorReport = !!i1401[7]
  i1400.logBehaviour = i1401[8]
  i1400.drawGizmos = !!i1401[9]
  i1400.defaultRecyclable = !!i1401[10]
  i1400.defaultAutoPlay = i1401[11]
  i1400.defaultUpdateType = i1401[12]
  i1400.defaultTimeScaleIndependent = !!i1401[13]
  i1400.defaultEaseType = i1401[14]
  i1400.defaultEaseOvershootOrAmplitude = i1401[15]
  i1400.defaultEasePeriod = i1401[16]
  i1400.defaultAutoKill = !!i1401[17]
  i1400.defaultLoopType = i1401[18]
  i1400.debugMode = !!i1401[19]
  i1400.debugStoreTargetId = !!i1401[20]
  i1400.showPreviewPanel = !!i1401[21]
  i1400.storeSettingsLocation = i1401[22]
  i1400.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1401[23], i1400.modules)
  i1400.createASMDEF = !!i1401[24]
  i1400.showPlayingTweens = !!i1401[25]
  i1400.showPausedTweens = !!i1401[26]
  return i1400
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1402 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1403 = data
  i1402.logBehaviour = i1403[0]
  i1402.nestedTweenFailureBehaviour = i1403[1]
  return i1402
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1404 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1405 = data
  i1404.showPanel = !!i1405[0]
  i1404.audioEnabled = !!i1405[1]
  i1404.physicsEnabled = !!i1405[2]
  i1404.physics2DEnabled = !!i1405[3]
  i1404.spriteEnabled = !!i1405[4]
  i1404.uiEnabled = !!i1405[5]
  i1404.textMeshProEnabled = !!i1405[6]
  i1404.tk2DEnabled = !!i1405[7]
  i1404.deAudioEnabled = !!i1405[8]
  i1404.deUnityExtendedEnabled = !!i1405[9]
  i1404.epoOutlineEnabled = !!i1405[10]
  return i1404
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1406 = root || request.c( 'TMPro.TMP_Settings' )
  var i1407 = data
  i1406.assetVersion = i1407[0]
  i1406.m_TextWrappingMode = i1407[1]
  i1406.m_enableKerning = !!i1407[2]
  var i1409 = i1407[3]
  var i1408 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1409.length; i += 1) {
    i1408.add(i1409[i + 0]);
  }
  i1406.m_ActiveFontFeatures = i1408
  i1406.m_enableExtraPadding = !!i1407[4]
  i1406.m_enableTintAllSprites = !!i1407[5]
  i1406.m_enableParseEscapeCharacters = !!i1407[6]
  i1406.m_EnableRaycastTarget = !!i1407[7]
  i1406.m_GetFontFeaturesAtRuntime = !!i1407[8]
  i1406.m_missingGlyphCharacter = i1407[9]
  i1406.m_ClearDynamicDataOnBuild = !!i1407[10]
  i1406.m_warningsDisabled = !!i1407[11]
  request.r(i1407[12], i1407[13], 0, i1406, 'm_defaultFontAsset')
  i1406.m_defaultFontAssetPath = i1407[14]
  i1406.m_defaultFontSize = i1407[15]
  i1406.m_defaultAutoSizeMinRatio = i1407[16]
  i1406.m_defaultAutoSizeMaxRatio = i1407[17]
  i1406.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1407[18], i1407[19] )
  i1406.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1407[20], i1407[21] )
  i1406.m_autoSizeTextContainer = !!i1407[22]
  i1406.m_IsTextObjectScaleStatic = !!i1407[23]
  var i1411 = i1407[24]
  var i1410 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1411.length; i += 2) {
  request.r(i1411[i + 0], i1411[i + 1], 1, i1410, '')
  }
  i1406.m_fallbackFontAssets = i1410
  i1406.m_matchMaterialPreset = !!i1407[25]
  i1406.m_HideSubTextObjects = !!i1407[26]
  request.r(i1407[27], i1407[28], 0, i1406, 'm_defaultSpriteAsset')
  i1406.m_defaultSpriteAssetPath = i1407[29]
  i1406.m_enableEmojiSupport = !!i1407[30]
  i1406.m_MissingCharacterSpriteUnicode = i1407[31]
  var i1413 = i1407[32]
  var i1412 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1413.length; i += 2) {
  request.r(i1413[i + 0], i1413[i + 1], 1, i1412, '')
  }
  i1406.m_EmojiFallbackTextAssets = i1412
  i1406.m_defaultColorGradientPresetsPath = i1407[33]
  request.r(i1407[34], i1407[35], 0, i1406, 'm_defaultStyleSheet')
  i1406.m_StyleSheetsResourcePath = i1407[36]
  request.r(i1407[37], i1407[38], 0, i1406, 'm_leadingCharacters')
  request.r(i1407[39], i1407[40], 0, i1406, 'm_followingCharacters')
  i1406.m_UseModernHangulLineBreakingRules = !!i1407[41]
  return i1406
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1416 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1417 = data
  i1416.m_GlyphIndex = i1417[0]
  i1416.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1417[1], i1416.m_GlyphValueRecord)
  return i1416
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1418 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1419 = data
  i1418.m_XPlacement = i1419[0]
  i1418.m_YPlacement = i1419[1]
  i1418.m_XAdvance = i1419[2]
  i1418.m_YAdvance = i1419[3]
  return i1418
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1420 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1421 = data
  request.r(i1421[0], i1421[1], 0, i1420, 'spriteSheet')
  var i1423 = i1421[2]
  var i1422 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1423.length; i += 1) {
    i1422.add(request.d('TMPro.TMP_Sprite', i1423[i + 0]));
  }
  i1420.spriteInfoList = i1422
  var i1425 = i1421[3]
  var i1424 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1425.length; i += 2) {
  request.r(i1425[i + 0], i1425[i + 1], 1, i1424, '')
  }
  i1420.fallbackSpriteAssets = i1424
  var i1427 = i1421[4]
  var i1426 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1427.length; i += 1) {
    i1426.add(request.d('TMPro.TMP_SpriteCharacter', i1427[i + 0]));
  }
  i1420.m_SpriteCharacterTable = i1426
  var i1429 = i1421[5]
  var i1428 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1429.length; i += 1) {
    i1428.add(request.d('TMPro.TMP_SpriteGlyph', i1429[i + 0]));
  }
  i1420.m_GlyphTable = i1428
  i1420.m_Version = i1421[6]
  i1420.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1421[7], i1420.m_FaceInfo)
  request.r(i1421[8], i1421[9], 0, i1420, 'm_Material')
  return i1420
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1432 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1433 = data
  i1432.name = i1433[0]
  i1432.hashCode = i1433[1]
  i1432.unicode = i1433[2]
  i1432.pivot = new pc.Vec2( i1433[3], i1433[4] )
  request.r(i1433[5], i1433[6], 0, i1432, 'sprite')
  i1432.id = i1433[7]
  i1432.x = i1433[8]
  i1432.y = i1433[9]
  i1432.width = i1433[10]
  i1432.height = i1433[11]
  i1432.xOffset = i1433[12]
  i1432.yOffset = i1433[13]
  i1432.xAdvance = i1433[14]
  i1432.scale = i1433[15]
  return i1432
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1438 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1439 = data
  i1438.m_Name = i1439[0]
  i1438.m_ElementType = i1439[1]
  i1438.m_Unicode = i1439[2]
  i1438.m_GlyphIndex = i1439[3]
  i1438.m_Scale = i1439[4]
  return i1438
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1442 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1443 = data
  request.r(i1443[0], i1443[1], 0, i1442, 'sprite')
  i1442.m_Index = i1443[2]
  i1442.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1443[3], i1442.m_Metrics)
  i1442.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1443[4], i1442.m_GlyphRect)
  i1442.m_Scale = i1443[5]
  i1442.m_AtlasIndex = i1443[6]
  i1442.m_ClassDefinitionType = i1443[7]
  return i1442
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1444 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1445 = data
  var i1447 = i1445[0]
  var i1446 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1447.length; i += 1) {
    i1446.add(request.d('TMPro.TMP_Style', i1447[i + 0]));
  }
  i1444.m_StyleList = i1446
  return i1444
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1450 = root || request.c( 'TMPro.TMP_Style' )
  var i1451 = data
  i1450.m_Name = i1451[0]
  i1450.m_HashCode = i1451[1]
  i1450.m_OpeningDefinition = i1451[2]
  i1450.m_ClosingDefinition = i1451[3]
  i1450.m_OpeningTagArray = i1451[4]
  i1450.m_ClosingTagArray = i1451[5]
  return i1450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1453 = data
  var i1455 = i1453[0]
  var i1454 = []
  for(var i = 0; i < i1455.length; i += 1) {
    i1454.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1455[i + 0]) );
  }
  i1452.files = i1454
  i1452.componentToPrefabIds = i1453[1]
  return i1452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1459 = data
  i1458.path = i1459[0]
  request.r(i1459[1], i1459[2], 0, i1458, 'unityObject')
  return i1458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1461 = data
  var i1463 = i1461[0]
  var i1462 = []
  for(var i = 0; i < i1463.length; i += 1) {
    i1462.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1463[i + 0]) );
  }
  i1460.scriptsExecutionOrder = i1462
  var i1465 = i1461[1]
  var i1464 = []
  for(var i = 0; i < i1465.length; i += 1) {
    i1464.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1465[i + 0]) );
  }
  i1460.sortingLayers = i1464
  var i1467 = i1461[2]
  var i1466 = []
  for(var i = 0; i < i1467.length; i += 1) {
    i1466.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1467[i + 0]) );
  }
  i1460.cullingLayers = i1466
  i1460.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1461[3], i1460.timeSettings)
  i1460.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1461[4], i1460.physicsSettings)
  i1460.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1461[5], i1460.physics2DSettings)
  i1460.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1461[6], i1460.qualitySettings)
  i1460.enableRealtimeShadows = !!i1461[7]
  i1460.enableAutoInstancing = !!i1461[8]
  i1460.enableStaticBatching = !!i1461[9]
  i1460.enableDynamicBatching = !!i1461[10]
  i1460.usePreservativeDynamicBatching = !!i1461[11]
  i1460.lightmapEncodingQuality = i1461[12]
  i1460.desiredColorSpace = i1461[13]
  var i1469 = i1461[14]
  var i1468 = []
  for(var i = 0; i < i1469.length; i += 1) {
    i1468.push( i1469[i + 0] );
  }
  i1460.allTags = i1468
  return i1460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1473 = data
  i1472.name = i1473[0]
  i1472.value = i1473[1]
  return i1472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1477 = data
  i1476.id = i1477[0]
  i1476.name = i1477[1]
  i1476.value = i1477[2]
  return i1476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1481 = data
  i1480.id = i1481[0]
  i1480.name = i1481[1]
  return i1480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1483 = data
  i1482.fixedDeltaTime = i1483[0]
  i1482.maximumDeltaTime = i1483[1]
  i1482.timeScale = i1483[2]
  i1482.maximumParticleTimestep = i1483[3]
  return i1482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1485 = data
  i1484.gravity = new pc.Vec3( i1485[0], i1485[1], i1485[2] )
  i1484.defaultSolverIterations = i1485[3]
  i1484.bounceThreshold = i1485[4]
  i1484.autoSyncTransforms = !!i1485[5]
  i1484.autoSimulation = !!i1485[6]
  var i1487 = i1485[7]
  var i1486 = []
  for(var i = 0; i < i1487.length; i += 1) {
    i1486.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1487[i + 0]) );
  }
  i1484.collisionMatrix = i1486
  return i1484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1491 = data
  i1490.enabled = !!i1491[0]
  i1490.layerId = i1491[1]
  i1490.otherLayerId = i1491[2]
  return i1490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1493 = data
  request.r(i1493[0], i1493[1], 0, i1492, 'material')
  i1492.gravity = new pc.Vec2( i1493[2], i1493[3] )
  i1492.positionIterations = i1493[4]
  i1492.velocityIterations = i1493[5]
  i1492.velocityThreshold = i1493[6]
  i1492.maxLinearCorrection = i1493[7]
  i1492.maxAngularCorrection = i1493[8]
  i1492.maxTranslationSpeed = i1493[9]
  i1492.maxRotationSpeed = i1493[10]
  i1492.baumgarteScale = i1493[11]
  i1492.baumgarteTOIScale = i1493[12]
  i1492.timeToSleep = i1493[13]
  i1492.linearSleepTolerance = i1493[14]
  i1492.angularSleepTolerance = i1493[15]
  i1492.defaultContactOffset = i1493[16]
  i1492.autoSimulation = !!i1493[17]
  i1492.queriesHitTriggers = !!i1493[18]
  i1492.queriesStartInColliders = !!i1493[19]
  i1492.callbacksOnDisable = !!i1493[20]
  i1492.reuseCollisionCallbacks = !!i1493[21]
  i1492.autoSyncTransforms = !!i1493[22]
  var i1495 = i1493[23]
  var i1494 = []
  for(var i = 0; i < i1495.length; i += 1) {
    i1494.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1495[i + 0]) );
  }
  i1492.collisionMatrix = i1494
  return i1492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1499 = data
  i1498.enabled = !!i1499[0]
  i1498.layerId = i1499[1]
  i1498.otherLayerId = i1499[2]
  return i1498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1501 = data
  var i1503 = i1501[0]
  var i1502 = []
  for(var i = 0; i < i1503.length; i += 1) {
    i1502.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1503[i + 0]) );
  }
  i1500.qualityLevels = i1502
  var i1505 = i1501[1]
  var i1504 = []
  for(var i = 0; i < i1505.length; i += 1) {
    i1504.push( i1505[i + 0] );
  }
  i1500.names = i1504
  i1500.shadows = i1501[2]
  i1500.anisotropicFiltering = i1501[3]
  i1500.antiAliasing = i1501[4]
  i1500.lodBias = i1501[5]
  i1500.shadowCascades = i1501[6]
  i1500.shadowDistance = i1501[7]
  i1500.shadowmaskMode = i1501[8]
  i1500.shadowProjection = i1501[9]
  i1500.shadowResolution = i1501[10]
  i1500.softParticles = !!i1501[11]
  i1500.softVegetation = !!i1501[12]
  i1500.activeColorSpace = i1501[13]
  i1500.desiredColorSpace = i1501[14]
  i1500.masterTextureLimit = i1501[15]
  i1500.maxQueuedFrames = i1501[16]
  i1500.particleRaycastBudget = i1501[17]
  i1500.pixelLightCount = i1501[18]
  i1500.realtimeReflectionProbes = !!i1501[19]
  i1500.shadowCascade2Split = i1501[20]
  i1500.shadowCascade4Split = new pc.Vec3( i1501[21], i1501[22], i1501[23] )
  i1500.streamingMipmapsActive = !!i1501[24]
  i1500.vSyncCount = i1501[25]
  i1500.asyncUploadBufferSize = i1501[26]
  i1500.asyncUploadTimeSlice = i1501[27]
  i1500.billboardsFaceCameraPosition = !!i1501[28]
  i1500.shadowNearPlaneOffset = i1501[29]
  i1500.streamingMipmapsMemoryBudget = i1501[30]
  i1500.maximumLODLevel = i1501[31]
  i1500.streamingMipmapsAddAllCameras = !!i1501[32]
  i1500.streamingMipmapsMaxLevelReduction = i1501[33]
  i1500.streamingMipmapsRenderersPerFrame = i1501[34]
  i1500.resolutionScalingFixedDPIFactor = i1501[35]
  i1500.streamingMipmapsMaxFileIORequests = i1501[36]
  i1500.currentQualityLevel = i1501[37]
  return i1500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1511 = data
  i1510.weight = i1511[0]
  i1510.vertices = i1511[1]
  i1510.normals = i1511[2]
  i1510.tangents = i1511[3]
  return i1510
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1512 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1513 = data
  request.r(i1513[0], i1513[1], 0, i1512, 'm_ObjectArgument')
  i1512.m_ObjectArgumentAssemblyTypeName = i1513[2]
  i1512.m_IntArgument = i1513[3]
  i1512.m_FloatArgument = i1513[4]
  i1512.m_StringArgument = i1513[5]
  i1512.m_BoolArgument = !!i1513[6]
  return i1512
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1514 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1515 = data
  i1514.m_XCoordinate = i1515[0]
  i1514.m_YCoordinate = i1515[1]
  return i1514
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1516 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1517 = data
  i1516.m_XPositionAdjustment = i1517[0]
  i1516.m_YPositionAdjustment = i1517[1]
  return i1516
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1518 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1519 = data
  i1518.xPlacement = i1519[0]
  i1518.yPlacement = i1519[1]
  i1518.xAdvance = i1519[2]
  i1518.yAdvance = i1519[3]
  return i1518
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SortingGroup":{"sortingLayerIndex":0,"sortingOrder":1,"sortingLayerName":2,"enabled":3},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"83":[84],"85":[84],"86":[84],"87":[84],"88":[84],"89":[84],"90":[91],"92":[37],"93":[94],"95":[94],"96":[94],"97":[94],"98":[94],"99":[94],"100":[9],"101":[9],"102":[9],"103":[9],"104":[9],"105":[9],"106":[9],"107":[9],"108":[9],"109":[9],"110":[9],"111":[9],"112":[9],"113":[37],"114":[12],"115":[116],"117":[116],"24":[23],"118":[119],"120":[23],"121":[28,23],"7":[12],"122":[28,23],"123":[31,12],"124":[12,10],"14":[12],"125":[94],"126":[9],"127":[119],"128":[129],"130":[18],"131":[37],"132":[133],"134":[73],"135":[24],"136":[23],"137":[28,23],"138":[12],"139":[28,23],"140":[23],"141":[23],"142":[12,23],"57":[23,28],"143":[144],"145":[144],"146":[144],"147":[23],"148":[23],"27":[24],"22":[28,23],"149":[23],"26":[24],"150":[23],"151":[23],"63":[23],"152":[23],"153":[23],"154":[23],"62":[23],"155":[23],"156":[23],"157":[28,23],"158":[23],"159":[23],"160":[23],"161":[23],"162":[28,23],"163":[23],"164":[73],"165":[73],"74":[73],"166":[73],"39":[37],"167":[37]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.Rendering.SortingGroup","UnityEngine.MonoBehaviour","Cat","Projectile","UnityEngine.CircleCollider2D","UnityEngine.BoxCollider2D","Spine.Unity.SkeletonAnimation","UnityEngine.AudioClip","UnityEngine.Rigidbody2D","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonDataAsset","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.SpriteRenderer","UnityEngine.Sprite","Dog","UnityEngine.GameObject","UnityEngine.UI.Image","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.Animation","UnityEngine.AnimationClip","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","Spike","TNT","Fighter","CatData","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.Light","UnityEngine.AudioSource","View.Manager.AudioManager","View.Manager.GameManager","MergeManager","View.Manager.SpendManager","LevelManager","SpawnManager","UpgradeManager","DataManager","DogData","LevelData","PermanentUpgradeData","View.Manager.SaveManager","View.Manager.PlayableManager","View.Manager.TutorialManager","View.Manager.MessageManager","TMPro.TextMeshProUGUI","Utility.PotatoDevUI.PDUTextEffect","UIManager","PlayMenu","UnityEngine.UI.Button","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","TMPro.TMP_FontAsset","UtilityButton","WinMenu","LoseMenu","LandingMenu","Barrier","Board","Slot","Wave","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEditor.MonoScript","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.Font","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.83f1";

Deserializers.productName = "mcd_mobile";

Deserializers.lunaInitializationTime = "09/19/2026 17:02:47";

Deserializers.lunaDaysRunning = "0.8";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "37659";

Deserializers.projectId = "630d4f692004f68418d14944fc2001bc";

Deserializers.packagesInfo = "com.unity.inputsystem: 1.19.0\ncom.unity.nuget.newtonsoft-json: 2.0.0\ncom.unity.timeline: 1.8.12\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1834";

Deserializers.runtimeAnalysisExcludedMethodsCount = "5586";

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

Deserializers.buildID = "a2421d2e-d49b-4214-97a3-cb5e98c47a18";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["Unity","Burst","BurstCompiler","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"],["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

