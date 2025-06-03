// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
import { ScriptNode } from "@phasereditor2d/scripts-core";   // ← this line
/* END-USER-IMPORTS */

export default class CameraFollowObjectScript extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public targetGameObject!: Phaser.GameObjects.GameObject;
	public lerpX: number = 0.5;
	public lerpY: number = 0.5;
	public deadZoneWidth: number = 100;
	public deadZoneHeight: number = 100;

	/* START-USER-CODE */

	// Write your code here.s

	awake() {
		if (!this.scene || !this.targetGameObject)  return;
		this.scene.cameras.main.startFollow(this.targetGameObject, true, this.lerpX, this.lerpY).setDeadzone(this.deadZoneWidth, this.deadZoneHeight);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
