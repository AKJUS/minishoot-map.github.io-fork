export var crystalDestroyableTextures = [176,177]
export var xpForCrystalSize = [5, 10, 20, 50]
export var texturesCount = 179
export var schemas = [
[0,"GameManager+None",{}],
[0,"System.Boolean",{}],
[0,"System.Int32",{}],
[0,"System.Single",{}],
[0,"System.String",{}],
[0,"GameManager+Reference",{}],
[0,"GameManager+Sprite",{}],
[0,"GameManager+Any",{}],
[0,"UnityEngine.Vector2",{}],
[1,"Jar",{members:["size","dropType","spriteI"],membersT:[2,2,6],base:44,}],
[1,"Enemy",{members:["spriteI","size","tier"],membersT:[6,2,2],base:90,}],
[1,"CrystalDestroyable",{members:["dropXp","size"],membersT:[1,2],base:44,}],
[1,"ScarabPickup",{textureI:178,members:["container"],membersT:[5],base:27,}],
[1,"UnityEngine.Collider2D",{members:["isTrigger","offset"],membersT:[1,8],base:45,}],
[1,"UnityEngine.BoxCollider2D",{members:["size","usedByComposite"],membersT:[8,1],base:13,}],
[1,"UnityEngine.CapsuleCollider2D",{members:["size"],membersT:[8],base:13,}],
[1,"UnityEngine.CircleCollider2D",{members:["radius"],membersT:[3],base:13,}],
[1,"UnityEngine.PolygonCollider2D",{members:["points","usedByComposite"],membersT:[2,1],base:13,}],
[1,"UnityEngine.CompositeCollider2D",{members:["polygons"],membersT:[2],base:13,}],
[1,"Transition",{members:["destI"],membersT:[5],base:252,}],
[1,"Destroyable",{members:["hp","permanent","invincible","flatDamage"],membersT:[2,1,1,1],base:103,}],
[1,"UnityEngine.Transform",{members:["position","scale","rotation"],membersT:[8,8,3],base:41,}],
[1,"UnityEngine.GameObject",{members:["name","layer","components","children"],membersT:[4,2,39,37],base:40,}],
[1,"UnityEngine.SceneManagement.Scene",{members:["name","roots"],membersT:[4,37],base:38,}],
[1,"Unlocker",{members:["target","targetBis","keyUse","group"],membersT:[5,5,2,258],base:72,}],
[1,"UnlockerTrigger",{members:["target","targetBis","objectiveCleared"],membersT:[5,5,2],base:72,}],
[1,"UnlockerTorch",{members:["target","targetBis","linkedTorch","group"],membersT:[5,5,5,258],base:72,}],
[1,"Pickup",{members:["spriteI"],membersT:[6],base:72,}],
[1,"KeyUnique",{members:["keyId"],membersT:[2],base:27,}],
[1,"ModulePickup",{members:["moduleId"],membersT:[2],base:27,}],
[1,"SkillPickup",{members:["skillId"],membersT:[2],base:27,}],
[1,"StatsPickup",{members:["statsId","level"],membersT:[2,2],base:27,}],
[1,"Buyable",{members:["price","isForSale","title","description","owner"],membersT:[2,1,4,4,5],base:72,}],
[1,"Npc",{members:["spriteI","id"],membersT:[6,2],base:90,}],
[1,"Tunnel",{members:["spriteI","destination"],membersT:[6,5],base:44,}],
[1,"Torch",{members:["spriteI"],membersT:[6],base:44,}],
[2,"UnityEngine.SceneManagement.Scene[]",{elementT:23,}],
[2,"UnityEngine.GameObject[]",{elementT:22,}],
[1,"System.ValueType",{base:42,}],
[2,"GameManager+Any[]",{elementT:7,}],
[1,"UnityEngine.Object",{base:42,}],
[1,"UnityEngine.Component",{base:40,}],
[1,"System.Object",{}],
[1,"GameManager",{base:44,}],
[1,"UnityEngine.MonoBehaviour",{base:45,}],
[1,"UnityEngine.Behaviour",{base:41,}],
[1,"UnityEngine.RectTransform",{base:21,}],
[1,"Preloader",{base:44,}],
[1,"UnityEngine.Canvas",{base:45,}],
[1,"UnityEngine.UI.CanvasScaler",{base:50,}],
[1,"UnityEngine.EventSystems.UIBehaviour",{base:44,}],
[1,"UnityEngine.UI.GraphicRaycaster",{base:52,}],
[1,"UnityEngine.EventSystems.BaseRaycaster",{base:50,}],
[1,"UnityEngine.CanvasGroup",{base:45,}],
[1,"UnityEngine.CanvasRenderer",{base:41,}],
[1,"UnityEngine.UI.Image",{base:56,}],
[1,"UnityEngine.UI.MaskableGraphic",{base:57,}],
[1,"UnityEngine.UI.Graphic",{base:50,}],
[1,"TMPro.TextMeshProUGUI",{base:59,}],
[1,"TMPro.TMP_Text",{base:56,}],
[1,"I2.Loc.Localize",{base:44,}],
[1,"TMPro.TextMeshProEffect",{base:44,}],
[1,"AnimatedImage",{base:44,}],
[1,"DialogBubble",{base:44,}],
[1,"PerlinTransform",{base:44,}],
[1,"UnityEngine.MeshRenderer",{base:66,}],
[1,"UnityEngine.Renderer",{base:41,}],
[1,"TMPro.TextMeshPro",{base:59,}],
[1,"UnityEngine.MeshFilter",{base:41,}],
[1,"UnityEngine.SpriteRenderer",{base:66,}],
[1,"GlobalObjects",{base:44,}],
[1,"CameraManager",{base:72,}],
[1,"MiniBehaviour",{base:44,}],
[1,"UnityEngine.Camera",{base:45,}],
[1,"UnityEngine.Rendering.Universal.UniversalAdditionalCameraData",{base:44,}],
[1,"UnityEngine.Rendering.Volume",{base:44,}],
[1,"PostProcessManager",{base:44,}],
[1,"AspectUtility",{base:44,}],
[1,"LightManager",{base:44,}],
[1,"UnityEngine.Rendering.Universal.Light2D",{base:80,}],
[1,"UnityEngine.U2D.Light2DBase",{base:44,}],
[1,"PositionTracker",{base:44,}],
[1,"PlayerTracker",{base:72,}],
[1,"Fx",{base:72,}],
[1,"InputRumble",{base:44,}],
[1,"ParticlesAmbientManager",{base:44,}],
[1,"UnityEngine.ParticleSystem",{base:41,}],
[1,"UnityEngine.ParticleSystemRenderer",{base:66,}],
[1,"IsFlashingEffect",{base:44,}],
[1,"Player",{base:90,}],
[1,"ShipBehaviour",{base:72,}],
[1,"PlayerView",{base:44,}],
[1,"PlayerUpgradeView",{base:72,}],
[1,"PlayerEnergyUpView",{base:72,}],
[1,"PlayerLevelUpView",{base:72,}],
[1,"PlayerEnergyView",{base:72,}],
[1,"PlayerControl",{base:90,}],
[1,"PlayerWeapon",{base:72,}],
[1,"PlayerPowers",{base:72,}],
[1,"PlayerEmote",{base:44,}],
[1,"XpSystem",{base:72,}],
[1,"Movable",{base:44,}],
[1,"Rotable",{base:44,}],
[1,"BaseDestroyable",{base:72,}],
[1,"UnityEngine.Rigidbody2D",{base:41,}],
[1,"UnityEngine.ParticleSystemForceField",{base:45,}],
[1,"StatusManager",{base:72,}],
[1,"Timer",{base:44,}],
[1,"SurfaceHandler",{base:72,}],
[1,"UnityEngine.Animator",{base:45,}],
[1,"UnityEngine.SpriteMask",{base:66,}],
[1,"BulletEmitter",{base:44,}],
[1,"UnityEngine.TrailRenderer",{base:66,}],
[1,"ShineEffect",{base:44,}],
[1,"ParticleSelfManager",{base:44,}],
[1,"InputPrompt",{base:72,}],
[1,"InputIcon",{base:44,}],
[1,"EmissionPools",{base:44,}],
[1,"DeviceManager",{base:44,}],
[1,"SteamAPI",{base:44,}],
[1,"SGDebug",{base:44,}],
[1,"DebugTool",{base:44,}],
[1,"FPSDisplay.FPSCounter",{base:44,}],
[1,"FPSDisplay.FPSDisplay",{base:44,}],
[1,"UnityEngine.UI.Text",{base:56,}],
[1,"UnityEngine.AudioSource",{base:126,}],
[1,"UnityEngine.AudioBehaviour",{base:45,}],
[1,"DarkTonic.MasterAudio.PlaylistController",{base:44,}],
[1,"UnityEngine.EventSystems.EventSystem",{base:50,}],
[1,"UnityEngine.InputSystem.UI.InputSystemUIInputModule",{base:130,}],
[1,"UnityEngine.EventSystems.BaseInputModule",{base:50,}],
[1,"MasterAudioIdGenerator",{base:44,}],
[1,"DarkTonic.MasterAudio.MasterAudio",{base:44,}],
[1,"UnityEngine.AudioListener",{base:126,}],
[1,"UnityEngine.AudioLowPassFilter",{base:45,}],
[1,"UnityEngine.AudioReverbFilter",{base:45,}],
[1,"DarkTonic.MasterAudio.MasterAudioGroup",{base:44,}],
[1,"DarkTonic.MasterAudio.SoundGroupVariation",{base:44,}],
[1,"DarkTonic.MasterAudio.SoundGroupVariationUpdater",{base:44,}],
[1,"UIManager",{base:72,}],
[1,"HUD",{base:141,}],
[1,"UIElement",{base:44,}],
[1,"XpViewHUD",{base:72,}],
[1,"XpDebrisUIView",{base:72,}],
[1,"UnityEngine.UI.Mask",{base:50,}],
[1,"HpView",{base:72,}],
[1,"CrystalHpView",{base:44,}],
[1,"UnityEngine.UI.Outline",{base:148,}],
[1,"UnityEngine.UI.Shadow",{base:149,}],
[1,"UnityEngine.UI.BaseMeshEffect",{base:50,}],
[1,"ItemViewHud",{base:72,}],
[1,"CurrencyView",{base:141,}],
[1,"PowerView",{base:44,}],
[1,"HpShardPopUp",{base:44,}],
[1,"UIBackground",{base:44,}],
[1,"TitleMenu",{base:44,}],
[1,"SGButton",{base:157,}],
[1,"UnityEngine.UI.Button",{base:158,}],
[1,"UnityEngine.UI.Selectable",{base:50,}],
[1,"SGSelectableEffect",{base:44,}],
[1,"SGButtonData",{base:44,}],
[1,"ShineEffectUI",{base:44,}],
[1,"SaveSlot",{base:44,}],
[1,"Inventory",{base:44,}],
[1,"KeysUI",{base:44,}],
[1,"StatsUI",{base:44,}],
[1,"StatsView",{base:44,}],
[1,"StatsCrystal",{base:44,}],
[1,"ItemUI",{base:44,}],
[1,"PlayAnimator",{base:44,}],
[1,"SkillView",{base:44,}],
[1,"HpShardView",{base:44,}],
[1,"ModulesUI",{base:44,}],
[1,"ModuleView",{base:44,}],
[1,"PauseMenu",{base:44,}],
[1,"Map",{base:72,}],
[1,"MapFragmentView",{base:44,}],
[1,"MapConnectionView",{base:44,}],
[1,"MapIconView",{base:44,}],
[1,"MapMarkerView",{base:44,}],
[1,"MapMarkerCollectableOverworld",{base:72,}],
[1,"MapMarker",{base:44,}],
[1,"Options",{base:72,}],
[1,"SGButtonGroup",{base:44,}],
[1,"ScrollingSelection",{base:158,}],
[1,"SGSlider",{base:186,}],
[1,"UnityEngine.UI.Slider",{base:158,}],
[1,"SliderText",{base:44,}],
[1,"SGToggle",{base:189,}],
[1,"UnityEngine.UI.Toggle",{base:158,}],
[1,"UnityEngine.UI.ToggleGroup",{base:50,}],
[1,"InfoBox",{base:44,}],
[1,"RebindInputUI",{base:44,}],
[1,"PopUpScreen",{base:44,}],
[1,"Credits",{base:44,}],
[1,"CutsceneIntro",{base:44,}],
[1,"CustomCursor",{base:44,}],
[1,"TextMessage",{base:44,}],
[1,"StarterScreen",{base:44,}],
[1,"ParticleMaster",{base:44,}],
[1,"NpcTinyAlly",{base:90,}],
[1,"SoundLoopPlayer",{base:44,}],
[1,"Location",{base:72,}],
[1,"LocationIdSetter",{base:44,}],
[1,"SceneAsyncActivationGO",{base:44,}],
[1,"ActivationManager",{base:72,}],
[1,"DetachGameObject",{base:44,}],
[1,"EnemyIndexer",{base:44,}],
[1,"ChildrenIndexer",{base:44,}],
[1,"TilemapAutoFxDesert",{base:44,}],
[1,"UnityEngine.Grid",{base:211,}],
[1,"UnityEngine.GridLayout",{base:45,}],
[1,"UnityEngine.Tilemaps.Tilemap",{base:211,}],
[1,"UnityEngine.Tilemaps.TilemapRenderer",{base:66,}],
[1,"TilemapAutoFx",{base:44,}],
[1,"TilemapColliderCleaner",{base:44,}],
[1,"TilemapColliderRefresher",{base:44,}],
[1,"UnityEngine.Tilemaps.TilemapCollider2D",{base:13,}],
[1,"ScrollingGroup",{base:44,}],
[1,"HoleScrollingFx",{base:44,}],
[1,"Deactivable",{base:44,}],
[1,"PlantDestroyable",{base:103,}],
[1,"UnityEngine.SpringJoint2D",{base:223,}],
[1,"UnityEngine.AnchoredJoint2D",{base:224,}],
[1,"UnityEngine.Joint2D",{base:45,}],
[1,"DisableColliderOnContact",{base:44,}],
[1,"ChildrenSpriteSorter",{base:44,}],
[1,"TreeSpriteIndexer",{base:44,}],
[1,"Tree",{base:44,}],
[1,"CoconutPile",{base:72,}],
[1,"CoconutFloor",{base:44,}],
[1,"LocalLight",{base:44,}],
[1,"LightFlicker",{base:44,}],
[1,"ScrollingLayerSorter",{base:44,}],
[1,"UnityEngine.AudioReverbZone",{base:45,}],
[1,"MapDoPathHandler",{base:44,}],
[1,"DG.Tweening.DOTweenPath",{base:237,}],
[1,"DG.Tweening.Core.ABSAnimationComponent",{base:44,}],
[1,"WavySprite",{base:44,}],
[1,"CrystalBlue",{base:44,}],
[1,"PickupPreview",{base:72,}],
[1,"EmissionByShapeSetter",{base:44,}],
[1,"BridgeTile",{base:44,}],
[1,"BridgeTileEditor",{base:44,}],
[1,"CrystalNpc",{base:90,}],
[1,"MapCollectableTracker",{base:44,}],
[1,"RockDestroyable",{base:247,}],
[1,"WallDestroyable",{base:72,}],
[1,"DebrisPiece",{base:72,}],
[1,"BulletBlocker",{base:44,}],
[1,"DemoContent",{base:44,}],
[1,"BridgeLocked",{base:252,}],
[1,"Lock",{base:72,}],
[1,"DoorLocked",{base:252,}],
[1,"BossDoorFinal",{base:72,}],
[1,"FinalBridge",{base:252,}],
[1,"StrongDoor",{base:252,}],
[1,"OneWay",{base:44,}],
[2,"GameManager+Reference[]",{elementT:5,}],
[1,"UnlockerEditor",{base:44,}],
[1,"SpiritTowerUnlocker",{base:72,}],
[1,"SpiritLockSlot",{base:44,}],
[1,"Checkpoint",{base:72,}],
[1,"HiddenArea",{base:72,}],
[1,"Springboard",{base:252,}],
[1,"UnityEngine.PlatformEffector2D",{base:266,}],
[1,"UnityEngine.Effector2D",{base:45,}],
[1,"TunnelEditor",{base:44,}],
[1,"StatsPickupIndexer",{base:44,}],
[1,"MapPickup",{base:27,}],
[1,"LorePickup",{base:27,}],
[1,"ScarabPickupFx",{base:44,}],
[1,"ScarabPickupMove",{base:44,}],
[1,"SoundPlayer",{base:44,}],
[1,"TransitionDungeonOutside",{base:19,}],
[1,"CameraTrigger",{base:72,}],
[1,"NpcTinyTown",{base:90,}],
[1,"FireflyMovement",{base:44,}],
[1,"NpcInteraction",{base:72,}],
[1,"NpcBard",{base:72,}],
[1,"NpcTurtle",{base:252,}],
[1,"NpcTree",{base:252,}],
[1,"NpcHouseSad",{base:252,}],
[1,"BiomeTrigger",{base:44,}],
[1,"InputPromptTrigger",{base:72,}],
[1,"Dungeon5Destruction",{base:72,}],
[1,"NpcIntroduction",{base:44,}],
[1,"EndingCutscene",{base:72,}],
[1,"AchievementTrigger",{base:44,}],
[1,"LighthouseFix",{base:72,}],
[1,"CheckNpcFree",{base:44,}],
[1,"JunkyardReachedSetter",{base:44,}],
[1,"Dungeon4ReachedSetter",{base:44,}],
[1,"EncounterOpen",{base:72,}],
[1,"AIPatternManager",{base:72,}],
[1,"AIWeapon",{base:44,}],
[1,"AIGrid",{base:72,}],
[1,"AIRotable",{base:102,}],
[1,"AIRestorable",{base:72,}],
[1,"UnityEngine.LineRenderer",{base:66,}],
[1,"AimingLaser",{base:44,}],
[1,"AIFollow",{base:72,}],
[1,"AIScriptable",{base:72,}],
[1,"AISneak",{base:72,}],
[1,"DG.Tweening.DOTweenAnimation",{base:237,}],
[1,"Boss",{base:10,}],
[1,"BossPart",{base:72,}],
[1,"AIGridFollower",{base:72,}],
[1,"AIBusher",{base:72,}],
[1,"FxHiddenEnemy",{base:44,}],
[1,"AIJumper",{base:72,}],
[1,"FroggerStepFx",{base:44,}],
[1,"MaintainOffset",{base:44,}],
[1,"EncounterClose",{base:72,}],
[1,"EncounterWave",{base:72,}],
[1,"GroundCrack",{base:44,}],
[1,"AICharge",{base:72,}],
[1,"BossCameraManager",{base:72,}],
[1,"EncounterHidden",{base:252,}],
[1,"ChangeParentOnStart",{base:44,}],
[1,"UnityEngine.HingeJoint2D",{base:223,}],
[1,"LoreTabletInWorld",{base:72,}],
[1,"CrystalPlayer",{base:72,}],
[1,"PlayerTriggerSortingLayer",{base:44,}],
[1,"NpcTinyIntroManager",{base:44,}],
[1,"NpcTiny",{base:90,}],
[1,"TriggerPopUpControlMode",{base:72,}],
[1,"MovePickupWhenFreed",{base:72,}],
[1,"DarkTonic.MasterAudio.AudioTransformTracker",{base:44,}],
[1,"DeactivableGroup",{base:44,}],
[1,"BossDoor",{base:252,}],
[1,"CrystalKey",{base:27,}],
[1,"BossKey",{base:27,}],
[1,"CrystalBoss",{base:27,}],
[1,"Bounce",{base:44,}],
[1,"SoundTriggerOof",{base:72,}],
[1,"RaceManager",{base:72,}],
[1,"RaceCheckpoint",{base:72,}],
[1,"Tentacle",{base:44,}],
[1,"EarthTremorFx",{base:44,}],
[1,"NpcUnchosen",{base:33,}],
[1,"TriggerOpenStrongDoorPatch",{base:44,}],
[1,"AmbientTrigger",{base:44,}],
[1,"TriggerCheckpointOverworld",{base:44,}],
[1,"ArenaManager",{base:72,}],
[1,"ArenaEntrance",{base:72,}],
[1,"TrueEndingCutscene",{base:44,}],
[1,"DialogTrigger",{base:72,}],
[1,"HudTrigger",{base:44,}],
[1,"OutOfMapTriger",{base:44,}],
[1,"TeleportOutTrigger",{base:44,}],
[1,"TrueLastEncounterActivation",{base:44,}],
[2,"UnityEngine.Vector2[][][]",{elementT:353,}],
[2,"UnityEngine.Vector2[][]",{elementT:354,}],
[2,"UnityEngine.Vector2[]",{elementT:8,}],
]
