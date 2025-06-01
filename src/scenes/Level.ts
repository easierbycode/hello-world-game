// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import PlayerPrefab from "../prefabs/PlayerPrefab";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

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
		this.add.layer();

		// elements
		this.add.layer();

		// hero
		const hero = this.add.layer();

		// barbarian
		const barbarian = new PlayerPrefab(this, 69, 400);
		hero.add(barbarian);

		// foreground
		this.add.layer();

		// foreground_2
		this.add.layer();

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
	private readonly CAMERA_SCROLL_SPEED = 10;

	// Write your code here

	create() {

		this.editorCreate();

		this.cursors = this.input.keyboard.createCursorKeys();
	}

	update() {
		if (this.cursors.left.isDown) {
			this.cameras.main.scrollX -= this.CAMERA_SCROLL_SPEED;
		} else if (this.cursors.right.isDown) {
			this.cameras.main.scrollX += this.CAMERA_SCROLL_SPEED;
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
