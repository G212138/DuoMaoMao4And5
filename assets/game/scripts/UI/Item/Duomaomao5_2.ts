import { ListenerManager } from "../../../../frame/scripts/Manager/ListenerManager";
import { SoundManager } from "../../../../frame/scripts/Manager/SoundManager";
import { SyncDataManager } from "../../../../frame/scripts/Manager/SyncDataManager";
import { Tools } from "../../../../frame/scripts/Utils/Tools";
import { UIHelp } from "../../../../frame/scripts/Utils/UIHelp";
import { EventType } from "../../Data/EventType";
import FillArea2 from "./FillArea2";
import OptionItem2 from "./OptionItem2";
import { SoundConfig } from "./SoundConfig";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Duomaomao5 extends cc.Component {
    @property(cc.Node)
    private optionPanel: cc.Node = null;
    @property(cc.Node)
    private fillNode: cc.Node = null;
    @property(cc.Node)
    private fillArea: cc.Node[] = [];
    @property(cc.Node)
    private optionItem: cc.Node[] = [];
    @property(sp.Skeleton)
    private chong_ani: sp.Skeleton = null;
    @property(cc.Node)
    private tigan: cc.Node = null;
    @property(cc.Node)
    private chong_img: cc.Node = null;
    @property(cc.Node)
    private chong_real: cc.Node = null;

    onLoad() {
        ListenerManager.on(EventType.ENTER_GAME, this.onEnterGame, this);
        ListenerManager.on(EventType.ROTATE_ITEM2, this.onRotateItem, this);
        ListenerManager.on(EventType.ON_FILL_ITEM3, this.onFillItem, this);
    }

    onDestroy() {
        ListenerManager.off(EventType.ENTER_GAME, this.onEnterGame, this);
        ListenerManager.off(EventType.ROTATE_ITEM2, this.onRotateItem, this);
        ListenerManager.off(EventType.ON_FILL_ITEM3, this.onFillItem, this);
    }

    private onEnterGame(isRecover: boolean) {
        this.init(isRecover);
    }

    public init(isRecover: boolean) {
        this.node.getChildByName("shanguang").active = false;
        this.node.getChildByName("yanwu").active = false;
        this.node.getChildByName('lihua').active = false;
        this.optionPanel.active = false;
        this.tigan.active = false;
        this.fillNode.active = false;
        this.chong_img.active = false;
        this.chong_real.active = false;
        this.chong_ani.node.active = true;

        for (let i = 0; i < this.optionItem.length; i++) {
            this.optionItem[i].getComponent(OptionItem2).reset();
        }
        //旋转
        this.updateOptionRotate();
        this.hideXuxian();

        if (!isRecover) {
            this.chong_ani.node.x = 1520;
            Tools.playSpine(this.chong_ani, "chongzi_weiyi", true);
            cc.tween(this.chong_ani.node).to(4, { x: 440 }).call(() => {
                Tools.playSpine(this.chong_ani, "chongzi_penti", false, () => {
                    this.fillNode.active = true;
                    Tools.playSpine(this.chong_ani, "chongzi_weiyi", true);
                    cc.tween(this.chong_ani.node).to(4, { x: -388 }).call(() => {
                        this.chong_ani.node.active = false;
                        this.chong_img.active = true;
                        this.tigan.active = true;
                        this.optionPanel.active = true;
                    }).start();
                });
            }).start();
        } else {
            this.chong_ani.node.x = 440;
            this.fillNode.active = true;
            this.chong_ani.node.active = false;
            this.chong_img.active = true;
            this.tigan.active = true;
            this.optionPanel.active = true;

            //已放置
            let fillAreaResult2 = SyncDataManager.getSyncData().customSyncData.fillAreaResult2;
            for (let i = 0; i < fillAreaResult2.length; i++) {
                if (fillAreaResult2[i] != null) {
                    this.fillArea[i].getComponent(FillArea2).fill(this.optionItem[fillAreaResult2[i]]);
                }
            }
            if (fillAreaResult2.every((item) => item != null)) {
                this.chong_img.active = false;
                this.fillNode.active = false;
                this.chong_real.active = true;

                if (!SyncDataManager.getSyncData().customSyncData.isGameOver) {
                    ListenerManager.dispatch(EventType.SUBMIT, true);
                    ListenerManager.dispatch(EventType.GAME_OVER);
                }
            }
        }
    }

    private onRotateItem(Data: any) {
        SoundManager.playEffect(SoundConfig.soudlist["点击音效"], false);
        let index = Data;
        let curAngleInfo2 = SyncDataManager.getSyncData().customSyncData.curAngleInfo2;
        curAngleInfo2[index] += 45;
        if (curAngleInfo2[index] === 180) {
            curAngleInfo2[index] = 0;
        }
        this.updateOptionRotate();
    }

    private updateOptionRotate() {
        for (let i = 0; i < this.optionPanel.children.length; i++) {
            let option = this.optionPanel.children[i];
            let name = option.name.split("_");
            let index = Number(name[1]);
            option.angle = SyncDataManager.getSyncData().customSyncData.curAngleInfo2[index];
        }
    }

    private trueColorAngle = [-135, -45, -135, -45, -135];
    private trueAnswerType = [0, 1, 0, 1, 0];
    private onFillItem(data: any) {
        let areaIndex = data.areaIndex;
        let itemIndex = data.itemIndex;
        let curAngleInfo2 = SyncDataManager.getSyncData().customSyncData.curAngleInfo2;
        console.log("curAngleInfo2", curAngleInfo2);
        let fillAreaResult2 = SyncDataManager.getSyncData().customSyncData.fillAreaResult2;
        let type = this.optionItem[itemIndex].getComponent(OptionItem2).type;
        //找出fillAreaResult2中有几个不为null的
        let count = 0;
        for (let i = 0; i < fillAreaResult2.length; i++) {
            if (fillAreaResult2[i] != null) {
                count++;
            }
        }
        if (itemIndex < 3) { //绿色
            if (count % 2 != 0) { //顺序不对
                SoundManager.playEffect(SoundConfig.soudlist["还没到我哦"], false);
                return;
            }
            if (curAngleInfo2[itemIndex] != 45) {
                SoundManager.playEffect(SoundConfig.soudlist["角度不对哦"], false);
                return;
            }
            if (areaIndex != count) {
                SoundManager.playEffect(SoundConfig.soudlist["位置不对哦"], false);
                return;
            }
            fillAreaResult2[areaIndex] = itemIndex;
            this.fillArea[areaIndex].getComponent(FillArea2).fill(this.optionItem[itemIndex]);

            let effect = this.node.getChildByName("shanguang");
            effect.active = true;
            effect.position = this.fillArea[areaIndex].position;
            Tools.playSpine(effect.getComponent(sp.Skeleton), "animation", false, () => {
                effect.active = false;
            });
        } else { //红色
            if (count % 2 == 0) { //顺序不对
                SoundManager.playEffect(SoundConfig.soudlist["还没到我哦"], false);
                return;
            }
            if (curAngleInfo2[itemIndex] != 135) {
                SoundManager.playEffect(SoundConfig.soudlist["角度不对哦"], false);
                return;
            }
            if (areaIndex != count) {
                SoundManager.playEffect(SoundConfig.soudlist["位置不对哦"], false);
                return;
            }
            fillAreaResult2[areaIndex] = itemIndex;
            this.fillArea[areaIndex].getComponent(FillArea2).fill(this.optionItem[itemIndex]);

            let effect = this.node.getChildByName("shanguang");
            effect.active = true;
            effect.position = this.fillArea[areaIndex].position;
            Tools.playSpine(effect.getComponent(sp.Skeleton), "animation", false, () => {
                effect.active = false;
            });
        }

        if (fillAreaResult2.every((item) => item != null)) {
            let lihua = this.node.getChildByName('lihua');
            lihua.active = true;
            Tools.playSpine(lihua.getComponent(sp.Skeleton), 'animation', false, () => {
                lihua.active = false;
            });
            SoundManager.playEffect(SoundConfig.soudlist["礼花音效"], false, false, false);
            SyncDataManager.getSyncData().customSyncData.curStep = 2;
            this.chong_img.active = false;
            this.scheduleOnce(() => {
                this.node.getChildByName("yanwu").active = true;
                this.scheduleOnce(() => {
                    this.fillNode.active = false;
                }, 0.3);
                Tools.playSpine(this.node.getChildByName("yanwu").getComponent(sp.Skeleton), "yanwu", false, () => {
                    this.node.getChildByName("yanwu").active = false;
                    this.chong_real.active = true;
                    SoundManager.playEffect(SoundConfig.soudlist["小青虫爬啊爬"], false, false, false, () => {
                        SyncDataManager.getSyncData().customSyncData.isGameOver = true;
                        ListenerManager.dispatch(EventType.SUBMIT, true);
                        ListenerManager.dispatch(EventType.GAME_OVER);
                    });
                });
            }, 1);
        }
        this.hideXuxian();
    }

    private hideXuxian() {
        let fillAreaResult2 = SyncDataManager.getSyncData().customSyncData.fillAreaResult2;
        for (let i = 0; i < this.fillArea.length; i++) {
            this.fillArea[i].getComponent(cc.Sprite).enabled = true;
            if (fillAreaResult2[i] != null) {
                this.fillArea[i].getComponent(cc.Sprite).enabled = false;
            }
        }
    }

    private onClickNext() {
        SoundManager.playEffect(SoundConfig.soudlist["点击音效"], false, false, false);
        if (SyncDataManager.getSyncData().customSyncData.curStep == 2) {

        } else {
            this.node.getChildByName("bukezhixing").active = true;
            this.scheduleOnce(() => {
                this.node.getChildByName("bukezhixing").active = false;
            }, 2);
        }
    }
}
