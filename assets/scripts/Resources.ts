import { _decorator, Component, ImageAsset, Node, resources, SpriteFrame, Texture2D } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Resources')
export class Resources extends Component {
    public static loadSpriteFrame(path: string, onProgress?): Promise<any> {
        return new Promise((resolve, reject) => {
            resources.load(path, ImageAsset, onProgress, (err, imageAsset) => {
                if (err) {
                    reject(err);
                } else {
                    const spriteFrame = new SpriteFrame();
                    const texture = new Texture2D();
                    texture.image = imageAsset;
                    spriteFrame.texture = texture;
                    resolve(spriteFrame);
                }
            });
        });
    }

    /**
     * @description Dùng hàm này khi muốn load 1 ảnh.
     * @param path Đường dẫn đến ảnh
     * @param onProgress Có thể có hoặc không. 2 tham số truyền vào là finished và total
     * @returns Promise
     */
    public static async getSpriteFrame(path: string, onProgress?): Promise<SpriteFrame> {
        try {
            return await this.loadSpriteFrame(path, onProgress);
        } catch (error) {
            console.error('Failed to load sprite:', error);
            throw error;
        }
    }
}


