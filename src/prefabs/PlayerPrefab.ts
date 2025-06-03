// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default interface PlayerPrefab {

	 body: Phaser.Physics.Arcade.Body;
}

export default class PlayerPrefab extends Phaser.Physics.Arcade.Sprite {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "barbarian", frame);

		this.scaleX = 0.5;
		this.scaleY = 0.5;
		scene.physics.add.existing(this, false);
		this.body.setOffset(90, 50);
		this.body.setSize(150, 210, false);

		/* START-USER-CTR-CODE */
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	preUpdate(time: number, delta: number) {
		super.preUpdate(time, delta);

		if (!this.active || !this.pad)  return;

		// Cast body to Arcade.Body to access dynamic properties like onFloor()
		const body = this.body as Phaser.Physics.Arcade.Body;

		// Check if left button (□ / X) is pressed for speed boost
		const leftButton = this.pad.buttons[2]; 
		const speedMultiplier = leftButton && leftButton.pressed ? 1.5 : 1.0; // 50% speed boost
		const jumpMultiplier = leftButton && leftButton.pressed ? 1.4 : 1.0; // 40% higher jump

		const baseSpeed = 200;
		const baseJumpVelocity = -330;

		// Movement with potential speed boost
		if (this.pad.left || (this.pad.axes.length > 0 && this.pad.axes[0].getValue() < -0.1)) {

			this.setVelocityX(-baseSpeed * speedMultiplier);
			this.setFlipX(true);

		} else if (this.pad.right || (this.pad.axes.length > 0 && this.pad.axes[0].getValue() > 0.1)) {

			this.setVelocityX(baseSpeed * speedMultiplier);
			this.setFlipX(false);

		} else {

			this.setVelocityX(0);
		}

		// Jump - Bottom face button (e.g., A on Xbox, Cross on PlayStation - typically index 0)
		// Check if the button is pressed and the player is on the ground.
		const bottomButton = this.pad.buttons[0];
		if (bottomButton && bottomButton.pressed && body.onFloor()) {
			this.setVelocityY(baseJumpVelocity * jumpMultiplier); // Jump with potential boost
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
