import Phaser from "phaser";
import Level from "./scenes/Level";
import preloadAssetPackUrl from "../static/assets/preload-asset-pack.json";
import Preload from "./scenes/Preload";

class Boot extends Phaser.Scene {

    constructor() {
        super("Boot");
    }

    preload() {

        this.load.pack("pack", preloadAssetPackUrl);
    }

    create() {

        this.scene.start("Preload");
    }
}

window.addEventListener('load', function () {

    const game = new Phaser.Game({
        width: 1280,
        height: 800,
        //backgroundColor: "#2f2f2f",
        backgroundColor: "#000000",
        scale: {
            mode: Phaser.Scale.ScaleModes.FIT,
            autoCenter: Phaser.Scale.Center.CENTER_BOTH
        },
        physics: {
            default: "arcade",
            arcade: {
                debug: new URL(window.location.href).searchParams.get("debug") == "1",
				gravity: {
					x: 0,
					y: 500
				}
            }
            },
            scene: [Boot, Preload, Level]
        });

    game.scene.start("Boot");

});