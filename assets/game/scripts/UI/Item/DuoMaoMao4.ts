import { ListenerManager } from "../../../../frame/scripts/Manager/ListenerManager";
import { SoundManager } from "../../../../frame/scripts/Manager/SoundManager";
import { SyncDataManager } from "../../../../frame/scripts/Manager/SyncDataManager";
import { Tools } from "../../../../frame/scripts/Utils/Tools";
import { UIHelp } from "../../../../frame/scripts/Utils/UIHelp";
import { EventType } from "../../Data/EventType";
import OptionItem from "./OptionItem";
import { SoundConfig } from "./SoundConfig";

const { ccclass, property } = cc._decorator;

@ccclass
export default class DuoMaoMao4 extends cc.Component {
    @property(cc.Node)
    private optionPanel: cc.Node = null;
    @property(cc.Node)
    private fillArea: cc.Node = null;
    @property(cc.Node)
    private options: cc.Node[] = [];
    @property(sp.Skeleton)
    private gulugulu: sp.Skeleton = null;

    private trueColor = [2, 3, 4, 0];
    private trueAngle = [0, -45, -135, -90];
    private initPos: cc.Vec3[] = [cc.v3(-407.5, 0), cc.v3(-244.5, 0), cc.v3(-81.5, 0), cc.v3(81.5, 0), cc.v3(244.5, 0), cc.v3(407.5, 0)];
    private step2Pos: cc.Vec3[] = [cc.v3(-394.5, 0), cc.v3(-131.5, 0), cc.v3(131.5, 0), cc.v3(394.5, 0)];
    onLoad() {
        ListenerManager.on(EventType.ENTER_GAME, this.onEnterGame, this);
        ListenerManager.on(EventType.ON_CLICK_ITEM, this.onClickOption, this);
        ListenerManager.on(EventType.ROTATE_ITEM, this.onRotateItem, this);
        ListenerManager.on(EventType.ON_FILL_ITEM, this.onFillItem, this);
    }
    onDestroy() {
        ListenerManager.off(EventType.ENTER_GAME, this.onEnterGame, this);
        ListenerManager.off(EventType.ON_CLICK_ITEM, this.onClickOption, this);
        ListenerManager.off(EventType.ROTATE_ITEM, this.onRotateItem, this);
        ListenerManager.off(EventType.ON_FILL_ITEM, this.onFillItem, this);
    }

    private onEnterGame(isRecover: boolean) {
        this.init(isRecover);
    }

    private init(isRecover: boolean) {
        UIHelp.closeMask();
        Tools.playSpine(this.gulugulu, 'zhi2', false, () => {
            Tools.playSpine(this.gulugulu, 'zhi2', false, () => {
                Tools.playSpine(this.gulugulu, 'idle', true);
                this.countdown();
            });
        });

        for (let i = 0; i < this.options.length; i++) {
            this.options[i].getComponent(OptionItem).reset();
            this.options[i].position = this.initPos[i];
            this.options[i].angle = 0;
            this.options[i].active = true;
            this.options[i].getComponent(OptionItem).showClickNode();
            this.options[i].getChildByName('yinying').active = true;
        }
        // this.optionPanel.children.forEach((item: cc.Node, index: number) => {
        //     switch (item.name) {
        //         case 'hong':
        //             item.position = this.initPos[0];
        //             break;
        //         case 'fen':
        //             item.position = this.initPos[1];
        //             break;
        //         case 'huang':
        //             item.position = this.initPos[2];
        //             break;
        //         case 'lv':
        //             item.position = this.initPos[3];
        //             break;
        //         case 'lan':
        //             item.position = this.initPos[4];
        //             break;
        //         case 'zi':
        //             item.position = this.initPos[5];
        //             break;
        //         default:
        //             break;
        //     }
        //     item.angle = 0;
        //     item.active = true;
        //     item.getComponent(OptionItem).showClickNode();
        //     item.getChildByName('yinying').active = true;
        // });
        this.node.getChildByName("bukezhixing").active = false;
        let effect = this.node.getChildByName('xuxian').getChildByName("shanguang");
        effect.active = false;
        let lihua = this.node.getChildByName('lihua');
        lihua.active = false;

        //已选中
        let curChooseColors = SyncDataManager.getSyncData().customSyncData.curChooseColors;
        if (curChooseColors.length === 4) {
            this.optionPanel.getChildByName('fen').active = false;
            this.optionPanel.getChildByName('zi').active = false;

            for (let i = 0; i < this.optionPanel.children.length; i++) {
                this.optionPanel.children[i].getChildByName("ani").active = false;
            }
            this.optionPanel.getChildByName('hong').getComponent(OptionItem).setOriginPos(this.step2Pos[0], this.optionPanel);
            this.optionPanel.getChildByName('huang').getComponent(OptionItem).setOriginPos(this.step2Pos[1], this.optionPanel);
            this.optionPanel.getChildByName('lv').getComponent(OptionItem).setOriginPos(this.step2Pos[2], this.optionPanel);
            this.optionPanel.getChildByName('lan').getComponent(OptionItem).setOriginPos(this.step2Pos[3], this.optionPanel);
            this.optionPanel.getChildByName('hong').position = this.step2Pos[0];
            this.optionPanel.getChildByName('huang').position = this.step2Pos[1];
            this.optionPanel.getChildByName('lv').position = this.step2Pos[2];
            this.optionPanel.getChildByName('lan').position = this.step2Pos[3];
            for (let i = 0; i < this.optionPanel.children.length; i++) {
                this.optionPanel.children[i].getComponent(OptionItem).closeClickNode();
                this.optionPanel.children[i].getChildByName('yinying').active = false;
            }

            //已放置
            let curFilledIndex = SyncDataManager.getSyncData().customSyncData.curFilledIndex;
            for (let i = 0; i < curFilledIndex.length; i++) {
                this.options[curFilledIndex[i]].parent = this.fillArea;
                this.options[curFilledIndex[i]].position = cc.v3(0, 0);
            }
            if (curFilledIndex.length === 4) {
                Tools.playSpine(this.gulugulu, 'guzhang', true);
                if (!SyncDataManager.getSyncData().customSyncData.isGameOver) {
                    ListenerManager.dispatch(EventType.SUBMIT, true);
                    ListenerManager.dispatch(EventType.GAME_OVER);
                }
            }
        } else {
            for (let i = 0; i < curChooseColors.length; i++) {
                let ani = this.options[curChooseColors[i]].getChildByName('ani')
                ani.active = true;
                Tools.playSpine(ani.getComponent(sp.Skeleton), 'duomaomao4_xiaobang_idle', true);
            }
        }
        //旋转
        this.updateOptionRotate();
        this.hideXuxian();
    }

    private countdown() {
        this.unscheduleAllCallbacks();
        this.scheduleOnce(() => {
            Tools.playSpine(this.gulugulu, 'zhi2', false, () => {
                Tools.playSpine(this.gulugulu, 'idle', true);
                this.countdown();
            });
        }, 10);
    }

    private onClickOption(Data: any) {
        this.countdown();
        let index = Data.index;
        let name = Data.name;
        if (SyncDataManager.getSyncData().customSyncData.curStep == 1) return;
        SoundManager.playEffect(SoundConfig.soudlist["点击音效"], false, false, false);
        let curChooseColors = SyncDataManager.getSyncData().customSyncData.curChooseColors;
        if (this.trueColor.indexOf(index) !== -1 && curChooseColors.indexOf(index) === -1) {
            SyncDataManager.getSyncData().customSyncData.curChooseColors.push(index);
        }
        if (this.trueColor.indexOf(index) === -1) {
            SoundManager.stopSoundByName(SoundConfig.soudlist["不是我"]);
            SoundManager.playEffect(SoundConfig.soudlist["不是我"], false, false, false);
            let ani = this.optionPanel.getChildByName(name).getChildByName('ani');
            ani.active = true;
            Tools.playSpine(ani.getComponent(sp.Skeleton), 'duomaomao4_xiaobang_cuowu' + (Math.random() > 0.5 ? 1 : 2), false, () => {
                ani.active = false;
            });
        } else {
            let soundName = "红色";
            switch (index) {
                case 2:
                    soundName = "黄色";
                    break;
                case 3:
                    soundName = "绿色";
                    break;
                case 4:
                    soundName = "蓝色";
                    break;
            }
            SoundManager.stopSoundByName(soundName);
            this.scheduleOnce(() => {
                SoundManager.playEffect(SoundConfig.soudlist[soundName], false, false, false);
            }, 0.65);
            let ani = this.optionPanel.getChildByName(name).getChildByName('ani');
            ani.active = true;
            Tools.playSpine(ani.getComponent(sp.Skeleton), 'duomaomao4_xiaobang_zhengque', false, () => {
                Tools.playSpine(ani.getComponent(sp.Skeleton), 'duomaomao4_xiaobang_idle', true);
            });
        }
        if (SyncDataManager.getSyncData().customSyncData.curChooseColors.length === 4) {
            SyncDataManager.getSyncData().customSyncData.curStep = 1;
            this.scheduleOnce(() => {
                this.nextStep();
            }, 1);
        }
    }

    private nextStep() {
        let item_fen_ani = this.optionPanel.getChildByName('fen').getChildByName('ani');
        let item_zi_ani = this.optionPanel.getChildByName('zi').getChildByName('ani');
        item_fen_ani.active = true;
        item_zi_ani.active = true;
        SoundManager.playEffect(SoundConfig.soudlist["烟雾音效"], false, false);
        this.scheduleOnce(() => {
            this.optionPanel.getChildByName('fen').getChildByName('icon').active = false;
        }, 0.3);
        Tools.playSpine(item_fen_ani.getComponent(sp.Skeleton), 'yanwu', false, () => {
            this.optionPanel.getChildByName('fen').active = false;
            this.optionPanel.getChildByName('fen').getChildByName('icon').active = true;
        });
        this.scheduleOnce(() => {
            this.optionPanel.getChildByName('zi').getChildByName('icon').active = false;
        }, 0.3);
        Tools.playSpine(item_zi_ani.getComponent(sp.Skeleton), 'yanwu', false, () => {
            this.optionPanel.getChildByName('zi').getChildByName('icon').active = true;
            this.optionPanel.getChildByName('zi').active = false;
            SoundManager.stopAllEffect();
            this.resetSpacing();
        });
        SyncDataManager.getSyncData().customSyncData.curRotateAngle = [0, 0, 0, 0, 0, 0];// 当前旋转的角度 红粉黄绿蓝紫
    }

    private resetSpacing() {
        for (let i = 0; i < this.optionPanel.children.length; i++) {
            this.optionPanel.children[i].getChildByName("ani").active = false;
        }
        this.optionPanel.getChildByName('hong').getComponent(OptionItem).setOriginPos(this.step2Pos[0], this.optionPanel);
        this.optionPanel.getChildByName('huang').getComponent(OptionItem).setOriginPos(this.step2Pos[1], this.optionPanel);
        this.optionPanel.getChildByName('lv').getComponent(OptionItem).setOriginPos(this.step2Pos[2], this.optionPanel);
        this.optionPanel.getChildByName('lan').getComponent(OptionItem).setOriginPos(this.step2Pos[3], this.optionPanel);
        cc.tween(this.optionPanel.getChildByName('hong')).to(0.5, { position: this.step2Pos[0] }).start();
        cc.tween(this.optionPanel.getChildByName('huang')).to(0.5, { position: this.step2Pos[1] }).start();
        cc.tween(this.optionPanel.getChildByName('lv')).to(0.5, { position: this.step2Pos[2] }).start();
        cc.tween(this.optionPanel.getChildByName('lan')).to(0.5, { position: this.step2Pos[3] }).call(() => {
            for (let i = 0; i < this.optionPanel.children.length; i++) {
                this.optionPanel.children[i].getComponent(OptionItem).closeClickNode();
                this.optionPanel.children[i].getChildByName('yinying').active = false;
            }
        }).start();
    }

    private onRotateItem(Data: any) {
        SoundManager.playEffect(SoundConfig.soudlist["点击音效"], false);
        this.countdown();
        let index = Data;
        let curRotateAngle = SyncDataManager.getSyncData().customSyncData.curRotateAngle;
        curRotateAngle[index] -= 45;
        if (curRotateAngle[index] === -180) {
            curRotateAngle[index] = 0;
        }

        this.updateOptionRotate();
    }

    private updateOptionRotate() {
        let curRotateAngle = SyncDataManager.getSyncData().customSyncData.curRotateAngle;
        for (let i = 0; i < this.options.length; i++) {
            this.options[i].angle = curRotateAngle[i];
            // switch (this.optionPanel.children[i].name) {
            //     case 'hong':
            //         this.optionPanel.children[i].angle = curRotateAngle[0];
            //         break;
            //     case 'fen':
            //         this.optionPanel.children[i].angle = curRotateAngle[1];
            //         break;
            //     case 'huang':
            //         this.optionPanel.children[i].angle = curRotateAngle[2];
            //         break;
            //     case 'lv':
            //         this.optionPanel.children[i].angle = curRotateAngle[3];
            //         break;
            //     case 'lan':
            //         this.optionPanel.children[i].angle = curRotateAngle[4];
            //         break;
            //     case 'zi':
            //         this.optionPanel.children[i].angle = curRotateAngle[5];
            //         break;
            // }
        }
    }

    private onFillItem(node: cc.Node) {
        this.countdown();
        let index = node.getComponent(OptionItem).index;
        let name = node.name;
        let curRotateAngle = SyncDataManager.getSyncData().customSyncData.curRotateAngle;
        let curFilledIndex = SyncDataManager.getSyncData().customSyncData.curFilledIndex;
        if (this.trueColor[curFilledIndex.length] != index) {
            node.getComponent(OptionItem).reset();
            SoundManager.playEffect(SoundConfig.soudlist["还没到我哦"], false);
            this.playWrong(node);
            let cuowu = this.fillArea.parent.getChildByName("cuowu");
            cuowu.active = true;
            cc.tween(cuowu).to(0, { opacity: 255 })
                .to(0.2, { opacity: 0 })
                .to(0.2, { opacity: 255 })
                .to(0.2, { opacity: 0 })
                .call(() => {
                    cuowu.active = false;
                }).start();
            return;
        } else {
            if (curRotateAngle[index] != this.trueAngle[curFilledIndex.length]) {
                SoundManager.playEffect(SoundConfig.soudlist["角度不对哦"], false);
                node.getComponent(OptionItem).reset();
                this.playWrong(node);
                let cuowu = this.fillArea.parent.getChildByName("cuowu");
                cuowu.active = true;
                cc.tween(cuowu).to(0, { opacity: 255 })
                    .to(0.2, { opacity: 0 })
                    .to(0.2, { opacity: 255 })
                    .to(0.2, { opacity: 0 })
                    .call(() => {
                        cuowu.active = false;
                    }).start();
                return;
            } else {
                node.parent = this.fillArea;
                node.position = cc.v3(0, 0);
                node.angle = curRotateAngle[index];
                if (curFilledIndex.indexOf(index) === -1) {
                    let effect = this.node.getChildByName('xuxian').getChildByName("shanguang");
                    effect.active = true;
                    Tools.playSpine(effect.getComponent(sp.Skeleton), 'animation', false, () => {
                        effect.active = false;
                    });
                    SoundManager.playEffect(SoundConfig.soudlist["正确提示"], false);
                    curFilledIndex.push(index);
                }
                this.hideXuxian();
                if (curFilledIndex.length === 4) {
                    this.scheduleOnce(() => {
                        this.filledAll();
                    }, 1);
                }
            }
        }
    }

    private hideXuxian() {
        let xuxianNode = this.node.getChildByName("xuxian").getChildByName("xuxian");
        for (let i = 0; i < xuxianNode.children.length; i++) {
            xuxianNode.children[i].active = true;
            if (i < SyncDataManager.getSyncData().customSyncData.curFilledIndex.length) {
                xuxianNode.children[i].active = false;
            }
        }
    }

    private playRight(node: cc.Node) {

    }

    private playWrong(node: cc.Node) {
        let ani = node.getChildByName('ani');
        ani.active = true;
        Tools.playSpine(ani.getComponent(sp.Skeleton), 'duomaomao4_xiaobang_cuowu' + (Math.random() > 0.5 ? 1 : 2), false, () => {
            ani.active = false;
        });
    }

    private filledAll() {
        this.unscheduleAllCallbacks();
        // ListenerManager.dispatch(EventType.SUBMIT, true);
        Tools.playSpine(this.gulugulu, 'guzhang', true);
        UIHelp.showMask();

        this.fillArea.getChildByName('huang').active = true;
        let lihua = this.node.getChildByName('lihua');
        lihua.active = true;
        Tools.playSpine(lihua.getComponent(sp.Skeleton), 'animation', false, () => {
            lihua.active = false;
        });
        SoundManager.playEffect(SoundConfig.soudlist["礼花音效"], false, false, false);
        SoundManager.playEffect(SoundConfig.soudlist["一模一样！一模一样！"], false, false, false);

        this.fillArea.children.forEach((item: cc.Node, index: number) => {
            item.active = false;
        });
        let shili = this.node.getChildByName("xuxiandiban");
        shili.children.forEach((item: cc.Node, index: number) => {
            item.active = false;
        });
        let name1 = ["huang", "lv", "lan", "hong"];
        let name2 = ["1", "2", "3", "4"];
        for (let i = 0; i < 4; i++) {
            this.scheduleOnce(() => {
                this.fillArea.getChildByName(name1[i]).active = true;
                shili.getChildByName(name2[i]).active = true;
            }, 0.6 * i);
        }

        this.scheduleOnce(() => {
            SyncDataManager.getSyncData().customSyncData.isGameOver = true;
            ListenerManager.dispatch(EventType.SUBMIT, true);
            ListenerManager.dispatch(EventType.GAME_OVER);
            UIHelp.closeMask();
        }, 3);
    }

    private onClickNext() {
        SoundManager.playEffect(SoundConfig.soudlist["点击音效"], false, false, false);
        if (!SyncDataManager.getSyncData().customSyncData.isGameOver) {
            this.node.getChildByName("bukezhixing").active = true;
            cc.tween(this.node.getChildByName("bukezhixing")).to(0, { opacity: 255 }).delay(2).to(0, { opacity: 0 })
                .call(() => {
                    this.node.getChildByName("bukezhixing").active = false;
                }).start();
        }
    }

    // private screenClick(event: any) {
    //     let pos = event.target.parent.convertToWorldSpaceAR(cc.v2(event.pos.x, event.pos.y));
    //     if (event.isClick) {
    //         this.node.getChildByName('dianjidongxiao').active = true;
    //         this.node.getChildByName('dianjidongxiao').position = this.node.convertToNodeSpaceAR(pos);
    //         Tools.playSpine(this.node.getChildByName('dianjidongxiao').getComponent(sp.Skeleton), 'animation', false, () => {
    //             this.node.getChildByName('dianjidongxiao').active = false;
    //         });
    //     }
    // }
}
