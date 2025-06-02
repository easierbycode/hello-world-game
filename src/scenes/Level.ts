// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import EnablePhysicsBodyScript from "../scriptnodes/EnablePhysicsBodyScript";
import PlayerPrefab from "../prefabs/PlayerPrefab";
import CameraFollowObjectScript from "../scriptnodes/CameraFollowObjectScript";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	private floor_1!: Phaser.GameObjects.Rectangle;
	private wall!: Phaser.GameObjects.Rectangle;
	private heroLayer!: Phaser.GameObjects.Layer;
	private cameraFollowScript!: CameraFollowObjectScript;

	editorCreate(): void {

		// background
		const background = this.add.layer();

		// tilesprite_1
		const tilesprite_1 = this.add.tileSprite(0, 152, 8640, 224, "ForgottenWorlds-Stage1");
		tilesprite_1.scaleX = 2;
		tilesprite_1.scaleY = 2;
		tilesprite_1.setOrigin(0, 0);
		background.add(tilesprite_1);

		// fufuSuperDino
		const fufuSuperDino = this.add.sprite(1017, 449, "FufuSuperDino");
		background.add(fufuSuperDino);

		// ground
		const ground = this.add.layer();

		// floor_1
		this.floor_1 = this.add.rectangle(0, 569, 1280, 96);
		this.floor_1.scaleY = 0.2235006528202375;
		this.floor_1.setOrigin(0, 0);
		this.floor_1.visible = false;
		this.floor_1.isFilled = true;
		this.floor_1.fillColor = 3016250;
		this.floor_1.strokeColor = 0;
		ground.add(this.floor_1);

		// enablePhysicsBodyScript
		new EnablePhysicsBodyScript(this.floor_1);

		// wall
		this.wall = this.add.rectangle(0, 150, 32, 416);
		this.wall.setOrigin(0, 0);
		this.wall.visible = false;
		this.wall.isFilled = true;
		this.wall.fillColor = 3016250;
		this.wall.strokeColor = 0;
		ground.add(this.wall);

		// enablePhysicsBodyScript_1
		new EnablePhysicsBodyScript(this.wall);

		// elements
		this.add.layer();

		// hero
		this.heroLayer = this.add.layer();

		// foreground
		this.add.layer();

		// foreground_2
		this.add.layer();

		// cameraFollowObjectScript
		this.cameraFollowScript = new CameraFollowObjectScript(this);

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	spawnPlayerAndFinalize(pad: Phaser.Input.Gamepad.Gamepad): void {

		// barbarian
		const barbarian = new PlayerPrefab(pad, this, 69, 400);
		barbarian.scaleX = 0.5;
		barbarian.scaleY = 0.5;
		this.heroLayer.add(barbarian);

		// enablePhysicsBodyScript_2
		new EnablePhysicsBodyScript(barbarian);

		// collider
		this.physics.add.collider(barbarian, this.floor_1);

		// collider_1
		this.physics.add.collider(barbarian, this.wall);

		// cameraFollowObjectScript (prefab fields)
		this.cameraFollowScript.targetGameObject = barbarian;

		// Ensure the main camera follows the barbarian
		this.cameras.main.startFollow(barbarian);
	}

	create() {
		this.editorCreate(); // Setup the static parts of the level first

		this.scene.scene.input.gamepad?.once("down", (pad: Phaser.Input.Gamepad.Gamepad, button: Phaser.Input.Gamepad.Button) => {
			this.spawnPlayerAndFinalize(pad); // Create player and related objects on gamepad input
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
