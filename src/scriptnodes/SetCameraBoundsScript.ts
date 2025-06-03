
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
import { ScriptNode } from "@phasereditor2d/scripts-core";   // ← this line
/* END-USER-IMPORTS */

export default class SetCameraBoundsScript extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public x: number = 0;
	public y: number = 0;
	public width: number = 8640;
	public height: number = 224;

	/* START-USER-CODE */

	// Write your code here.

	awake() {
		if (!this.scene)  return;
		this.scene.cameras.main.setBounds(this.x, this.y, this.width, this.height);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
