// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import EnablePhysicsBodyScript from "../scriptnodes/EnablePhysicsBodyScript";
import PlayerPrefab from "../prefabs/PlayerPrefab";
import CameraFollowObjectScript from "../scriptnodes/CameraFollowObjectScript";
import SetCameraBoundsScript from "../scriptnodes/SetCameraBoundsScript";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Level extends Phaser.Scene {

	public barbarian!: PlayerPrefab;
	public backgroundLayer!: Phaser.GameObjects.Layer;
	public cameraFollowObjectScript!: CameraFollowObjectScript;

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		window.scene = this;
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {
		// tilesprite_1
		const tilesprite_1 = this.add.tileSprite(0, 152, 8640, 224, "ForgottenWorlds-Stage1");
		tilesprite_1.scaleX = 2;
		tilesprite_1.scaleY = 2;
		tilesprite_1.setOrigin(0, 0);
		this.backgroundLayer.add(tilesprite_1);

		// fufuSuperDino
		const fufuSuperDino = this.add.sprite(1017, 449, "FufuSuperDino");
		this.backgroundLayer.add(fufuSuperDino);

		// foreground
		this.add.layer();

		// foreground_2
		this.add.layer();

		// setCameraBoundsScript
		new SetCameraBoundsScript(this);

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {
		// background
		this.backgroundLayer = this.add.layer();
		
		// ground
		const groundLayer = this.add.layer(); // For visual organization
		
		// elements
		this.add.layer();
		
		const heroLayer = this.add.layer();

		// floor_1
		const floor_1 = this.add.rectangle(0, 575, 1280, 20);
		floor_1.setOrigin(0, 0);
		groundLayer.add(floor_1);

		// enablePhysicsBodyScript
		new EnablePhysicsBodyScript(floor_1);

		// wall
		const wall = this.add.rectangle(0, 158, 32, 416);
		wall.setOrigin(0, 0);
		groundLayer.add(wall);

		// enablePhysicsBodyScript_1
		new EnablePhysicsBodyScript(wall);
		
		// barbarian
		this.barbarian = new PlayerPrefab(undefined, this, 69, 400);	
		this.barbarian.scaleX = 0.5;
		this.barbarian.scaleY = 0.5;

		// PlayerPrefab's constructor calls scene.physics.add.existing(this, false),
		// so why are we calling it again here???
		// enablePhysicsBodyScript_2
		new EnablePhysicsBodyScript(this.barbarian);

		// collider for barbarian and all static ground objects
		this.physics.add.collider(this.barbarian, floor_1);
		this.physics.add.collider(this.barbarian, wall);
		
		// cameraFollowObjectScript
		this.cameraFollowObjectScript = new CameraFollowObjectScript(this);
		// (prefab fields)
		this.cameraFollowObjectScript.targetGameObject = this.barbarian;
		
		heroLayer.add(this.barbarian);
		
		this.editorCreate(); // Setup the static parts of the level first

		this.scene.scene.input.gamepad?.once("down", (pad: Phaser.Input.Gamepad.Gamepad, button: Phaser.Input.Gamepad.Button) => {
			this.barbarian.pad = pad;
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
/* END OF COMPILED CODE */

// You can write more code here
// You can write more code here
/* END OF COMPILED CODE */

// You can write more code here
