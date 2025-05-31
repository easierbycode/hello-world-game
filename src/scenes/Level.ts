// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
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
		const tilesprite_1 = this.add.tileSprite(0, 0, 5216, 736, "stage3_tileset");
		tilesprite_1.setOrigin(0, 0);
		background.add(tilesprite_1);

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
