// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
import { ScriptNode } from "@phasereditor2d/scripts-core";   // ← this line
/* END-USER-IMPORTS */

export default class EnablePhysicsBodyScript extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	public isStatic: boolean = false; // Default to dynamic. Set to true for static bodies.

	// Write your code here.
	
	awake() {
		if (!this.gameObject)  return;
		
		// Use the isStatic property to determine if the body should be static or dynamic
		this.gameObject.scene.physics.add.existing(this.gameObject, this.isStatic);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
