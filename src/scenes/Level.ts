// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import PlayerPrefab from "../prefabs/PlayerPrefab";
import FadeCameraScript from "../scriptnodes/FadeCameraScript";
import CameraFollowObjectScript from "../scriptnodes/CameraFollowObjectScript";
import SetCameraBoundsScript from "../scriptnodes/SetCameraBoundsScript";
/* START-USER-IMPORTS */
import FadeCameraScript from "../scriptnodes/FadeCameraScript";
/* END-USER-IMPORTS */

export default class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		window.scene = this;
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// map
		const map = this.add.tilemap("map");
		map.addTilesetImage("tileset", "tileset");

		// background
		const background = this.add.layer();

		// tilesprite_1
		const tilesprite_1 = this.add.tileSprite(0, 0, 8640, 224, "ForgottenWorlds-Stage1");
		tilesprite_1.setOrigin(0, 0);
		background.add(tilesprite_1);

		// elements
		this.add.layer();

		// hero
		const hero = this.add.layer();

		// barbarian
		const barbarian = new PlayerPrefab(this, 64, 192);
		hero.add(barbarian);

		// foreground
		this.add.layer();

		// foreground_2
		this.add.layer();

		// ground_1
		const ground_1 = map.createLayer("ground", ["tileset"], 0, 0)!;

		// sprite_1
		const sprite_1 = this.add.sprite(336, 96, "enemy", 0);
		sprite_1.play("enemy_fly");

		// fadeCameraScript
		new FadeCameraScript(this);

		// cameraFollowObjectScript
		const cameraFollowObjectScript = new CameraFollowObjectScript(this);

		// setCameraBoundsScript
		new SetCameraBoundsScript(this);

		// cameraFollowObjectScript (prefab fields)
		cameraFollowObjectScript.targetGameObject = barbarian;

		this.barbarian = barbarian;
		this.ground_1 = ground_1;
		this.map = map;

		this.events.emit("scene-awake");
	}

	public barbarian!: PlayerPrefab;
	public ground_1!: Phaser.Tilemaps.TilemapLayer;
	private map!: Phaser.Tilemaps.Tilemap;

	/* START-USER-CODE */

	// Write your code here

	create() {
		// fadeCameraScript
		new FadeCameraScript(this);

		// background
		this.backgroundLayer = this.add.layer();

		// ground
		// const groundLayer = this.add.layer(); // For visual organization // Not strictly needed if using tilemap

		// elements
		this.add.layer();

		const heroLayer = this.add.layer(); // barbarian is added to this in editorCreate if still needed, or directly to scene

		// barbarian - Instance is now created and assigned in editorCreate()
		// this.barbarian = new PlayerPrefab(this, 69, 400); // REMOVED redundant creation

		// Ensure barbarian is added to a relevant layer if not already handled by editorCreate's hero.add(barbarian)
		// If hero layer from editorCreate is not the same as heroLayer here, adjust accordingly.
		// For simplicity, assuming barbarian from editorCreate is already on a layer.
		// If not, and heroLayer here is the main one: heroLayer.add(this.barbarian);

		// cameraFollowObjectScript - This instance will use this.barbarian set from editorCreate
		this.cameraFollowObjectScript = new CameraFollowObjectScript(this);
		// (prefab fields)
		this.cameraFollowObjectScript.targetGameObject = this.barbarian; // this.barbarian is now from editorCreate

		// If heroLayer is defined in create() and is different from hero layer in editorCreate(),
		// and you want this.barbarian on this heroLayer:
		if (this.barbarian && this.barbarian.scene) { // Check if barbarian exists and is part of a scene
			heroLayer.add(this.barbarian); // Add the correct barbarian instance to the layer
		}


		this.editorCreate(); // Setup the static parts of the level first. this.barbarian is assigned here.
							// this.ground_1 is also assigned here.

		// collider for barbarian and tilemaplayer "ground"
		if (this.ground_1 && this.barbarian) {
			this.ground_1.setCollisionByProperty({ collision: true });
			this.physics.add.collider(this.barbarian, this.ground_1);
		} else {
			console.error("Barbarian or ground_1 layer not initialized for collision setup.");
		}


		this.scene.scene.input.gamepad?.once("down", (pad: Phaser.Input.Gamepad.Gamepad, button: Phaser.Input.Gamepad.Button) => {
			if (this.barbarian) {
				this.barbarian.pad = pad;
			}
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
