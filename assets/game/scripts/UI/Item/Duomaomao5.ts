import { ListenerManager } from "../../../../frame/scripts/Manager/ListenerManager";
import { SoundManager } from "../../../../frame/scripts/Manager/SoundManager";
import { SyncDataManager } from "../../../../frame/scripts/Manager/SyncDataManager";
import { Tools } from "../../../../frame/scripts/Utils/Tools";
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
    private qizi: sp.Skeleton = null;
    @property(cc.Node)
    private tigan: cc.Node = null;
    @property(cc.Node)
    private caiqi: cc.Node = null;

    onLoad() {
        ListenerManager.on(EventType.ENTER_GAME, this.onEnterGame, this);
        ListenerManager.on(EventType.ROTATE_ITEM, this.onRotateItem, this);
        ListenerManager.on(EventType.ON_FILL_ITEM2, this.onFillItem, this);
    }

    onDestroy() {
        ListenerManager.off(EventType.ENTER_GAME, this.onEnterGame, this);
        ListenerManager.off(EventType.ROTATE_ITEM, this.onRotateItem, this);
        ListenerManager.off(EventType.ON_FILL_ITEM2, this.onFillItem, this);
    }

    private onEnterGame(isRecover: boolean) {
        this.init(isRecover);
    }

    private init(isRecover: boolean) {
        this.node.getChildByName("qizi").active = false;
        this.node.getChildByName("fangfang").active = false;
        this.node.getChildByName("yanwu").active = false;
        this.node.getChildByName("shanguang").active = false;
        this.node.getChildByName('lihua').active = false;
        this.optionPanel.active = false;
        this.tigan.active = false;
        this.caiqi.active = false;
        this.qizi.node.active = true;
        this.fillNode.active = false;
        this.fillNode.x = -585;

        for (let i = 0; i < this.optionItem.length; i++) {
            this.optionItem[i].getComponent(OptionItem2).reset();
        }
        //旋转
        this.updateOptionRotate();
        this.hideXuxian();

        if (!isRecover) {
            Tools.playSpine(this.qizi, "qizi_weiyi", false, () => {
                // Tools.playSpine(this.qizi, "qizi_weiyi2", false);            
                this.qizi.node.active = false;
                this.caiqi.active = true;
            });
            cc.tween(this.fillNode).delay(0.35).call(() => {
                this.fillNode.active = true;
            }).to(0.5, { x: 0 }, { "easing": "bounceOut" }).call(() => {

                this.optionPanel.active = true;
                this.tigan.active = true;
            }).start();
        } else {
            this.qizi.node.active = false;
            this.caiqi.active = true;
            this.fillNode.active = true;
            this.fillNode.x = 0;
            this.optionPanel.active = true;
            this.tigan.active = true;

            //已放置
            let fillAreaResult = SyncDataManager.getSyncData().customSyncData.fillAreaResult;
            for (let i = 0; i < fillAreaResult.length; i++) {
                if (fillAreaResult[i] != null) {
                    this.fillArea[i].getComponent(FillArea2).fill(this.optionItem[fillAreaResult[i]]);
                }
            }
            if (fillAreaResult.every((item) => item != null)) {
                this.caiqi.active = false;
                this.fillNode.x = -585;
                this.fillNode.active = false;
                this.node.getChildByName("yanwu").active = false;
                this.node.getChildByName("qizi").active = true;
                Tools.playSpine(this.node.getChildByName("qizi").getComponent(sp.Skeleton), "qizi_weiyi2", true);
                this.node.getChildByName("fangfang").active = true;
                Tools.playSpine(this.node.getChildByName("fangfang").getComponent(sp.Skeleton), "fangfang_huanhu3", true);
            }
        }

    }

    private onRotateItem(Data: any) {
        SoundManager.playEffect(SoundConfig.soudlist["点击音效"], false);
        let index = Data;
        let curAngleInfo = SyncDataManager.getSyncData().customSyncData.curAngleInfo;
        curAngleInfo[index] += 60;
        if (curAngleInfo[index] === 180) {
            curAngleInfo[index] = 0;
        }
        this.updateOptionRotate();
    }

    private updateOptionRotate() {
        for (let i = 0; i < this.optionPanel.children.length; i++) {
            let option = this.optionPanel.children[i];
            option.angle = SyncDataManager.getSyncData().customSyncData.curAngleInfo[Number(option.name)];
        }
    }

    private trueColorAngle = [120, 0, 0, 60];
    private onFillItem(data: any) {
        let areaIndex = data.areaIndex;
        let itemIndex = data.itemIndex;
        let curAngleInfo = SyncDataManager.getSyncData().customSyncData.curAngleInfo;
        let fillAreaResult = SyncDataManager.getSyncData().customSyncData.fillAreaResult;
        // 正确顺序紫，粉，蓝；黄色随意 0：粉 1：黄 2：蓝 3：zi
        if (itemIndex == 0) {
            //先判断颜色
            if (fillAreaResult[1] == null) {
                SoundManager.playEffect(SoundConfig.soudlist["还没到我哦"], false);
                return;
            }
            //再判断角度
            if (curAngleInfo[0] != this.trueColorAngle[0]) {
                SoundManager.playEffect(SoundConfig.soudlist["角度不对哦"], false);
                return;
            }
            //最后判断位置
            if (areaIndex != 2) {
                SoundManager.playEffect(SoundConfig.soudlist["位置不对哦"], false);
                return;
            }
            fillAreaResult[2] = itemIndex;
            this.fillArea[2].getComponent(FillArea2).fill(this.optionItem[itemIndex]);
            let effect = this.node.getChildByName("shanguang");
            effect.active = true;
            effect.position = this.fillArea[2].position;
            Tools.playSpine(effect.getComponent(sp.Skeleton), "animation", false, () => {
                effect.active = false;
            });
        } else if (itemIndex == 1) {
            if (curAngleInfo[1] != this.trueColorAngle[1]) {
                SoundManager.playEffect(SoundConfig.soudlist["角度不对哦"], false);
                return;
            }
            if (areaIndex != 0) {
                SoundManager.playEffect(SoundConfig.soudlist["位置不对哦"], false);
                return;
            }
            fillAreaResult[0] = itemIndex;
            this.fillArea[0].getComponent(FillArea2).fill(this.optionItem[itemIndex]);
            let effect = this.node.getChildByName("shanguang");
            effect.active = true;
            effect.position = this.fillArea[0].position;
            Tools.playSpine(effect.getComponent(sp.Skeleton), "animation", false, () => {
                effect.active = false;
            });
        } else if (itemIndex == 2) {
            if (fillAreaResult[1] == null || fillAreaResult[2] == null) {
                SoundManager.playEffect(SoundConfig.soudlist["还没到我哦"], false);
                return;
            }
            if (curAngleInfo[2] != this.trueColorAngle[2]) {
                SoundManager.playEffect(SoundConfig.soudlist["角度不对哦"], false);
                return;
            }
            if (areaIndex != 3) {
                SoundManager.playEffect(SoundConfig.soudlist["位置不对哦"], false);
                return;
            }
            fillAreaResult[3] = itemIndex;
            this.fillArea[3].getComponent(FillArea2).fill(this.optionItem[itemIndex]);
            let effect = this.node.getChildByName("shanguang");
            effect.active = true;
            effect.position = this.fillArea[3].position;
            Tools.playSpine(effect.getComponent(sp.Skeleton), "animation", false, () => {
                effect.active = false;
            });
        } else if (itemIndex == 3) {
            if (curAngleInfo[3] != this.trueColorAngle[3]) {
                SoundManager.playEffect(SoundConfig.soudlist["角度不对哦"], false);
                return;
            }
            if (areaIndex != 1) {
                SoundManager.playEffect(SoundConfig.soudlist["位置不对哦"], false);
                return;
            }
            fillAreaResult[1] = itemIndex;
            this.fillArea[1].getComponent(FillArea2).fill(this.optionItem[itemIndex]);
            let effect = this.node.getChildByName("shanguang");
            effect.active = true;
            effect.position = this.fillArea[1].position;
            Tools.playSpine(effect.getComponent(sp.Skeleton), "animation", false, () => {
                effect.active = false;
            });
        }
        if (fillAreaResult.every((item) => item != null)) {
            let lihua = this.node.getChildByName('lihua');
            lihua.active = true;
            Tools.playSpine(lihua.getComponent(sp.Skeleton), 'animation', false, () => {
                lihua.active = false;
            });
            SoundManager.playEffect(SoundConfig.soudlist["礼花音效"], false, false, false);
            this.scheduleOnce(() => {
                this.caiqi.active = false;
                cc.tween(this.fillNode).to(0.5, { x: -585 }).delay(0.2).call(() => {
                    this.scheduleOnce(() => {
                        this.fillNode.active = false;
                    }, 0.3);
                    this.node.getChildByName("yanwu").active = true;
                    SoundManager.playEffect(SoundConfig.soudlist["烟雾音效"], false, false, false);
                    Tools.playSpine(this.node.getChildByName("yanwu").getComponent(sp.Skeleton), "yanwu", false, () => {
                        this.node.getChildByName("yanwu").active = false;
                        this.node.getChildByName("qizi").active = true;
                        Tools.playSpine(this.node.getChildByName("qizi").getComponent(sp.Skeleton), "qizi_weiyi2", true);
                        this.node.getChildByName("fangfang").active = true;
                        Tools.playSpine(this.node.getChildByName("fangfang").getComponent(sp.Skeleton), "fangfang_huanhu3", true);
                        SyncDataManager.getSyncData().customSyncData.curStep = 1;
                        SoundManager.playEffect(SoundConfig.soudlist["小旗子飘啊飘"], false, false, false);
                    });
                }).start();
            }, 1);
        }
        this.hideXuxian();
    }

    private hideXuxian() {
        let fillAreaResult = SyncDataManager.getSyncData().customSyncData.fillAreaResult;
        for (let i = 0; i < this.fillArea.length; i++) {
            this.fillArea[i].getComponent(cc.Sprite).enabled = true;
            if (fillAreaResult[i] != null) {
                this.fillArea[i].getComponent(cc.Sprite).enabled = false;
            }
        }
    }

    private onClickNext() {
        SoundManager.playEffect(SoundConfig.soudlist["点击音效"], false, false, false);
        if (SyncDataManager.getSyncData().customSyncData.curStep == 1) {
            SoundManager.stopAllEffect();
            ListenerManager.dispatch(EventType.ON_NEXT_STEP);
        } else {
            this.node.getChildByName("bukezhixing").active = true;
            this.scheduleOnce(() => {
                this.node.getChildByName("bukezhixing").active = false;
            }, 2);
        }
    }
}
