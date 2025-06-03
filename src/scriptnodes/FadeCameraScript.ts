
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
import { ScriptNode } from "@phasereditor2d/scripts-core";   // ← this line
/* END-USER-IMPORTS */

export default class FadeCameraScript extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.
	
	awake() {
		if (!this.scene)  return;
		this.scene.cameras.main.fadeIn(1000, 0, 0, 0);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
