import { _decorator, Component, director, ImageAsset, Node, ProgressBar, resources } from 'cc';
import { Resources } from './Resources';
const { ccclass, property } = _decorator;

@ccclass('loading')
export class loading extends Component {
    @property(ProgressBar)
    progressBar: ProgressBar = null;

    async start() {
        await Resources.getSpriteFrame("pexels-eberhard-grossgasteiger-1624496", (finished: number, total: number) => {
            this.progressBar.progress = finished / total;
        });
        director.loadScene("game");
    }

    update(deltaTime: number) {

    }
}


