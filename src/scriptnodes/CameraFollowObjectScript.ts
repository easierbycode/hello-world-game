
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

	/* START-USER-CODE */
	
	/* @type {Phaser.GameObjects.GameObject} */
	targetGameObject;

	// Write your code here.
	
	awake() {
		if (!this.scene || !this.targetGameObject)  return;
		this.scene.cameras.main.startFollow(this.targetGameObject);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
