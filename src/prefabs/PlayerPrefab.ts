// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default interface PlayerPrefab {

	 body: Phaser.Physics.Arcade.Body;
}

export default class PlayerPrefab extends Phaser.Physics.Arcade.Sprite {

	constructor(pad: Phaser.Input.Gamepad.Gamepad, scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "barbarian", frame);

		this.scaleX = 0.5;
		this.scaleY = 0.5;
		scene.physics.add.existing(this, false);
		this.body.setSize(320, 320, false);

		this.pad = pad;

		/* START-USER-CTR-CODE */
		this.body.setSize(150, 210, false);
		this.body.setOffset(90, 50);
		/* END-USER-CTR-CODE */
	}

	private pad: Phaser.Input.Gamepad.Gamepad;

	/* START-USER-CODE */

	// Write your code here.

	preUpdate() {

		if (!this.active)  return;

		if (this.pad.left) {

			this.setVelocityX(-200);
			this.setFlipX(true);

		} else if (this.pad.right) {

			this.setVelocityX(200);
			this.setFlipX(false);

		} else {

			this.setVelocityX(0);
		}

		if (this.scene.input.activePointer.isDown) {

			this.setVelocityY(-200);
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

	/* END-USER-CODE */

/* END OF COMPILED CODE */

// You can write more code here
