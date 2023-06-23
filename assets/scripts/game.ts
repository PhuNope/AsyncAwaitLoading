import { _decorator, Component, find, Node, Sprite } from 'cc';
import { Resources } from './Resources';
const { ccclass, property } = _decorator;

@ccclass('game')
export class game extends Component {
    async start() {
        let sf = await Resources.getSpriteFrame("pexels-eberhard-grossgasteiger-1624496");
        find("Canvas/bg").getComponent(Sprite).spriteFrame = sf;
    }

    update(deltaTime: number) {

    }
}


