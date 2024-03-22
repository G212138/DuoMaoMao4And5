"use strict";
cc._RF.push(module, '5c0c8ReFWZOvKcfuHC4WDJL', 'DuoMaoMao4');
// game/scripts/UI/Item/DuoMaoMao4.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ListenerManager_1 = require("../../../../frame/scripts/Manager/ListenerManager");
var SoundManager_1 = require("../../../../frame/scripts/Manager/SoundManager");
var SyncDataManager_1 = require("../../../../frame/scripts/Manager/SyncDataManager");
var Tools_1 = require("../../../../frame/scripts/Utils/Tools");
var UIHelp_1 = require("../../../../frame/scripts/Utils/UIHelp");
var EventType_1 = require("../../Data/EventType");
var OptionItem_1 = require("./OptionItem");
var SoundConfig_1 = require("./SoundConfig");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DuoMaoMao4 = /** @class */ (function (_super) {
    __extends(DuoMaoMao4, _super);
    function DuoMaoMao4() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.optionPanel = null;
        _this.fillArea = null;
        _this.options = [];
        _this.gulugulu = null;
        _this.trueColor = [2, 3, 4, 0];
        _this.trueAngle = [0, -45, -135, -90];
        _this.initPos = [cc.v3(-407.5, 0), cc.v3(-244.5, 0), cc.v3(-81.5, 0), cc.v3(81.5, 0), cc.v3(244.5, 0), cc.v3(407.5, 0)];
        _this.step2Pos = [cc.v3(-394.5, 0), cc.v3(-131.5, 0), cc.v3(131.5, 0), cc.v3(394.5, 0)];
        return _this;
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
    DuoMaoMao4.prototype.onLoad = function () {
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.ENTER_GAME, this.onEnterGame, this);
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.ON_CLICK_ITEM, this.onClickOption, this);
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.ROTATE_ITEM, this.onRotateItem, this);
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.ON_FILL_ITEM, this.onFillItem, this);
    };
    DuoMaoMao4.prototype.onDestroy = function () {
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.ENTER_GAME, this.onEnterGame, this);
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.ON_CLICK_ITEM, this.onClickOption, this);
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.ROTATE_ITEM, this.onRotateItem, this);
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.ON_FILL_ITEM, this.onFillItem, this);
    };
    DuoMaoMao4.prototype.onEnterGame = function (isRecover) {
        this.init(isRecover);
    };
    DuoMaoMao4.prototype.init = function (isRecover) {
        var _this = this;
        UIHelp_1.UIHelp.closeMask();
        Tools_1.Tools.playSpine(this.gulugulu, 'zhi2', false, function () {
            Tools_1.Tools.playSpine(_this.gulugulu, 'zhi2', false, function () {
                Tools_1.Tools.playSpine(_this.gulugulu, 'idle', true);
                _this.countdown();
            });
        });
        for (var i = 0; i < this.options.length; i++) {
            this.options[i].getComponent(OptionItem_1.default).reset();
            this.options[i].position = this.initPos[i];
            this.options[i].angle = 0;
            this.options[i].active = true;
            this.options[i].getComponent(OptionItem_1.default).showClickNode();
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
        var effect = this.node.getChildByName('xuxian').getChildByName("shanguang");
        effect.active = false;
        var lihua = this.node.getChildByName('lihua');
        lihua.active = false;
        //已选中
        var curChooseColors = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curChooseColors;
        if (curChooseColors.length === 4) {
            this.optionPanel.getChildByName('fen').active = false;
            this.optionPanel.getChildByName('zi').active = false;
            for (var i = 0; i < this.optionPanel.children.length; i++) {
                this.optionPanel.children[i].getChildByName("ani").active = false;
            }
            this.optionPanel.getChildByName('hong').getComponent(OptionItem_1.default).setOriginPos(this.step2Pos[0], this.optionPanel);
            this.optionPanel.getChildByName('huang').getComponent(OptionItem_1.default).setOriginPos(this.step2Pos[1], this.optionPanel);
            this.optionPanel.getChildByName('lv').getComponent(OptionItem_1.default).setOriginPos(this.step2Pos[2], this.optionPanel);
            this.optionPanel.getChildByName('lan').getComponent(OptionItem_1.default).setOriginPos(this.step2Pos[3], this.optionPanel);
            this.optionPanel.getChildByName('hong').position = this.step2Pos[0];
            this.optionPanel.getChildByName('huang').position = this.step2Pos[1];
            this.optionPanel.getChildByName('lv').position = this.step2Pos[2];
            this.optionPanel.getChildByName('lan').position = this.step2Pos[3];
            for (var i = 0; i < this.optionPanel.children.length; i++) {
                this.optionPanel.children[i].getComponent(OptionItem_1.default).closeClickNode();
                this.optionPanel.children[i].getChildByName('yinying').active = false;
            }
            //已放置
            var curFilledIndex = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curFilledIndex;
            for (var i = 0; i < curFilledIndex.length; i++) {
                this.options[curFilledIndex[i]].parent = this.fillArea;
                this.options[curFilledIndex[i]].position = cc.v3(0, 0);
            }
            if (curFilledIndex.length === 4) {
                Tools_1.Tools.playSpine(this.gulugulu, 'guzhang', true);
                if (!SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.isGameOver) {
                    ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.SUBMIT, true);
                    ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.GAME_OVER);
                }
            }
        }
        else {
            for (var i = 0; i < curChooseColors.length; i++) {
                var ani = this.options[curChooseColors[i]].getChildByName('ani');
                ani.active = true;
                Tools_1.Tools.playSpine(ani.getComponent(sp.Skeleton), 'duomaomao4_xiaobang_idle', true);
            }
        }
        //旋转
        this.updateOptionRotate();
        this.hideXuxian();
    };
    DuoMaoMao4.prototype.countdown = function () {
        var _this = this;
        this.unscheduleAllCallbacks();
        this.scheduleOnce(function () {
            Tools_1.Tools.playSpine(_this.gulugulu, 'zhi2', false, function () {
                Tools_1.Tools.playSpine(_this.gulugulu, 'idle', true);
                _this.countdown();
            });
        }, 10);
    };
    DuoMaoMao4.prototype.onClickOption = function (Data) {
        var _this = this;
        this.countdown();
        var index = Data.index;
        var name = Data.name;
        if (SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curStep == 1)
            return;
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["点击音效"], false, false, false);
        var curChooseColors = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curChooseColors;
        if (this.trueColor.indexOf(index) !== -1 && curChooseColors.indexOf(index) === -1) {
            SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curChooseColors.push(index);
        }
        if (this.trueColor.indexOf(index) === -1) {
            SoundManager_1.SoundManager.stopSoundByName(SoundConfig_1.SoundConfig.soudlist["不是我"]);
            SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["不是我"], false, false, false);
            var ani_1 = this.optionPanel.getChildByName(name).getChildByName('ani');
            ani_1.active = true;
            Tools_1.Tools.playSpine(ani_1.getComponent(sp.Skeleton), 'duomaomao4_xiaobang_cuowu' + (Math.random() > 0.5 ? 1 : 2), false, function () {
                ani_1.active = false;
            });
        }
        else {
            var soundName_1 = "红色";
            switch (index) {
                case 2:
                    soundName_1 = "黄色";
                    break;
                case 3:
                    soundName_1 = "绿色";
                    break;
                case 4:
                    soundName_1 = "蓝色";
                    break;
            }
            SoundManager_1.SoundManager.stopSoundByName(soundName_1);
            this.scheduleOnce(function () {
                SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist[soundName_1], false, false, false);
            }, 0.65);
            var ani_2 = this.optionPanel.getChildByName(name).getChildByName('ani');
            ani_2.active = true;
            Tools_1.Tools.playSpine(ani_2.getComponent(sp.Skeleton), 'duomaomao4_xiaobang_zhengque', false, function () {
                Tools_1.Tools.playSpine(ani_2.getComponent(sp.Skeleton), 'duomaomao4_xiaobang_idle', true);
            });
        }
        if (SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curChooseColors.length === 4) {
            SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curStep = 1;
            this.scheduleOnce(function () {
                _this.nextStep();
            }, 1);
        }
    };
    DuoMaoMao4.prototype.nextStep = function () {
        var _this = this;
        var item_fen_ani = this.optionPanel.getChildByName('fen').getChildByName('ani');
        var item_zi_ani = this.optionPanel.getChildByName('zi').getChildByName('ani');
        item_fen_ani.active = true;
        item_zi_ani.active = true;
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["烟雾音效"], false, false);
        this.scheduleOnce(function () {
            _this.optionPanel.getChildByName('fen').getChildByName('icon').active = false;
        }, 0.3);
        Tools_1.Tools.playSpine(item_fen_ani.getComponent(sp.Skeleton), 'yanwu', false, function () {
            _this.optionPanel.getChildByName('fen').active = false;
            _this.optionPanel.getChildByName('fen').getChildByName('icon').active = true;
        });
        this.scheduleOnce(function () {
            _this.optionPanel.getChildByName('zi').getChildByName('icon').active = false;
        }, 0.3);
        Tools_1.Tools.playSpine(item_zi_ani.getComponent(sp.Skeleton), 'yanwu', false, function () {
            _this.optionPanel.getChildByName('zi').getChildByName('icon').active = true;
            _this.optionPanel.getChildByName('zi').active = false;
            SoundManager_1.SoundManager.stopAllEffect();
            _this.resetSpacing();
        });
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curRotateAngle = [0, 0, 0, 0, 0, 0]; // 当前旋转的角度 红粉黄绿蓝紫
    };
    DuoMaoMao4.prototype.resetSpacing = function () {
        var _this = this;
        for (var i = 0; i < this.optionPanel.children.length; i++) {
            this.optionPanel.children[i].getChildByName("ani").active = false;
        }
        this.optionPanel.getChildByName('hong').getComponent(OptionItem_1.default).setOriginPos(this.step2Pos[0], this.optionPanel);
        this.optionPanel.getChildByName('huang').getComponent(OptionItem_1.default).setOriginPos(this.step2Pos[1], this.optionPanel);
        this.optionPanel.getChildByName('lv').getComponent(OptionItem_1.default).setOriginPos(this.step2Pos[2], this.optionPanel);
        this.optionPanel.getChildByName('lan').getComponent(OptionItem_1.default).setOriginPos(this.step2Pos[3], this.optionPanel);
        cc.tween(this.optionPanel.getChildByName('hong')).to(0.5, { position: this.step2Pos[0] }).start();
        cc.tween(this.optionPanel.getChildByName('huang')).to(0.5, { position: this.step2Pos[1] }).start();
        cc.tween(this.optionPanel.getChildByName('lv')).to(0.5, { position: this.step2Pos[2] }).start();
        cc.tween(this.optionPanel.getChildByName('lan')).to(0.5, { position: this.step2Pos[3] }).call(function () {
            for (var i = 0; i < _this.optionPanel.children.length; i++) {
                _this.optionPanel.children[i].getComponent(OptionItem_1.default).closeClickNode();
                _this.optionPanel.children[i].getChildByName('yinying').active = false;
            }
        }).start();
    };
    DuoMaoMao4.prototype.onRotateItem = function (Data) {
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["点击音效"], false);
        this.countdown();
        var index = Data;
        var curRotateAngle = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curRotateAngle;
        curRotateAngle[index] -= 45;
        if (curRotateAngle[index] === -180) {
            curRotateAngle[index] = 0;
        }
        this.updateOptionRotate();
    };
    DuoMaoMao4.prototype.updateOptionRotate = function () {
        var curRotateAngle = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curRotateAngle;
        for (var i = 0; i < this.options.length; i++) {
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
    };
    DuoMaoMao4.prototype.onFillItem = function (node) {
        var _this = this;
        this.countdown();
        var index = node.getComponent(OptionItem_1.default).index;
        var name = node.name;
        var curRotateAngle = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curRotateAngle;
        var curFilledIndex = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curFilledIndex;
        if (this.trueColor[curFilledIndex.length] != index) {
            node.getComponent(OptionItem_1.default).reset();
            SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["还没到我哦"], false);
            this.playWrong(node);
            var cuowu_1 = this.fillArea.parent.getChildByName("cuowu");
            cuowu_1.active = true;
            cc.tween(cuowu_1).to(0, { opacity: 255 })
                .to(0.2, { opacity: 0 })
                .to(0.2, { opacity: 255 })
                .to(0.2, { opacity: 0 })
                .call(function () {
                cuowu_1.active = false;
            }).start();
            return;
        }
        else {
            if (curRotateAngle[index] != this.trueAngle[curFilledIndex.length]) {
                SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["角度不对哦"], false);
                node.getComponent(OptionItem_1.default).reset();
                this.playWrong(node);
                var cuowu_2 = this.fillArea.parent.getChildByName("cuowu");
                cuowu_2.active = true;
                cc.tween(cuowu_2).to(0, { opacity: 255 })
                    .to(0.2, { opacity: 0 })
                    .to(0.2, { opacity: 255 })
                    .to(0.2, { opacity: 0 })
                    .call(function () {
                    cuowu_2.active = false;
                }).start();
                return;
            }
            else {
                node.parent = this.fillArea;
                node.position = cc.v3(0, 0);
                node.angle = curRotateAngle[index];
                if (curFilledIndex.indexOf(index) === -1) {
                    var effect_1 = this.node.getChildByName('xuxian').getChildByName("shanguang");
                    effect_1.active = true;
                    Tools_1.Tools.playSpine(effect_1.getComponent(sp.Skeleton), 'animation', false, function () {
                        effect_1.active = false;
                    });
                    SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["正确提示"], false);
                    curFilledIndex.push(index);
                }
                this.hideXuxian();
                if (curFilledIndex.length === 4) {
                    this.scheduleOnce(function () {
                        _this.filledAll();
                    }, 1);
                }
            }
        }
    };
    DuoMaoMao4.prototype.hideXuxian = function () {
        var xuxianNode = this.node.getChildByName("xuxian").getChildByName("xuxian");
        for (var i = 0; i < xuxianNode.children.length; i++) {
            xuxianNode.children[i].active = true;
            if (i < SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curFilledIndex.length) {
                xuxianNode.children[i].active = false;
            }
        }
    };
    DuoMaoMao4.prototype.playRight = function (node) {
    };
    DuoMaoMao4.prototype.playWrong = function (node) {
        var ani = node.getChildByName('ani');
        ani.active = true;
        Tools_1.Tools.playSpine(ani.getComponent(sp.Skeleton), 'duomaomao4_xiaobang_cuowu' + (Math.random() > 0.5 ? 1 : 2), false, function () {
            ani.active = false;
        });
    };
    DuoMaoMao4.prototype.filledAll = function () {
        var _this = this;
        this.unscheduleAllCallbacks();
        // ListenerManager.dispatch(EventType.SUBMIT, true);
        Tools_1.Tools.playSpine(this.gulugulu, 'guzhang', true);
        UIHelp_1.UIHelp.showMask();
        this.fillArea.getChildByName('huang').active = true;
        var lihua = this.node.getChildByName('lihua');
        lihua.active = true;
        Tools_1.Tools.playSpine(lihua.getComponent(sp.Skeleton), 'animation', false, function () {
            lihua.active = false;
        });
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["礼花音效"], false, false, false);
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["一模一样！一模一样！"], false, false, false);
        this.fillArea.children.forEach(function (item, index) {
            item.active = false;
        });
        var shili = this.node.getChildByName("xuxiandiban");
        shili.children.forEach(function (item, index) {
            item.active = false;
        });
        var name1 = ["huang", "lv", "lan", "hong"];
        var name2 = ["1", "2", "3", "4"];
        var _loop_1 = function (i) {
            this_1.scheduleOnce(function () {
                _this.fillArea.getChildByName(name1[i]).active = true;
                shili.getChildByName(name2[i]).active = true;
            }, 0.6 * i);
        };
        var this_1 = this;
        for (var i = 0; i < 4; i++) {
            _loop_1(i);
        }
        this.scheduleOnce(function () {
            SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.isGameOver = true;
            ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.SUBMIT, true);
            ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.GAME_OVER);
            UIHelp_1.UIHelp.closeMask();
        }, 3);
    };
    DuoMaoMao4.prototype.onClickNext = function () {
        var _this = this;
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["点击音效"], false, false, false);
        if (!SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.isGameOver) {
            this.node.getChildByName("bukezhixing").active = true;
            cc.tween(this.node.getChildByName("bukezhixing")).to(0, { opacity: 255 }).delay(2).to(0, { opacity: 0 })
                .call(function () {
                _this.node.getChildByName("bukezhixing").active = false;
            }).start();
        }
    };
    __decorate([
        property(cc.Node)
    ], DuoMaoMao4.prototype, "optionPanel", void 0);
    __decorate([
        property(cc.Node)
    ], DuoMaoMao4.prototype, "fillArea", void 0);
    __decorate([
        property(cc.Node)
    ], DuoMaoMao4.prototype, "options", void 0);
    __decorate([
        property(sp.Skeleton)
    ], DuoMaoMao4.prototype, "gulugulu", void 0);
    DuoMaoMao4 = __decorate([
        ccclass
    ], DuoMaoMao4);
    return DuoMaoMao4;
}(cc.Component));
exports.default = DuoMaoMao4;

cc._RF.pop();