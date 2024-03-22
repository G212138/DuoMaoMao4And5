
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/UI/Item/DuoMaoMao4.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXEl0ZW1cXER1b01hb01hbzQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUZBQW9GO0FBQ3BGLCtFQUE4RTtBQUM5RSxxRkFBb0Y7QUFDcEYsK0RBQThEO0FBQzlELGlFQUFnRTtBQUNoRSxrREFBaUQ7QUFDakQsMkNBQXNDO0FBQ3RDLDZDQUE0QztBQUV0QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQTRaQztRQTFaVyxpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGFBQU8sR0FBYyxFQUFFLENBQUM7UUFFeEIsY0FBUSxHQUFnQixJQUFJLENBQUM7UUFFN0IsZUFBUyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDekIsZUFBUyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDaEMsYUFBTyxHQUFjLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMs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QUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsb0JBQVUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNuSCxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsb0JBQVUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNoSCxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLENBQUMsb0JBQVUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNqSCxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNsRyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNuRyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FB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QyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2xCO0lBQ0wsQ0FBQztJQTlZRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNrQjtJQUVwQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNlO0lBRWpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ2M7SUFFaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQztnREFDZTtJQVJwQixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBNFo5QjtJQUFELGlCQUFDO0NBNVpELEFBNFpDLENBNVp1QyxFQUFFLENBQUMsU0FBUyxHQTRabkQ7a0JBNVpvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGlzdGVuZXJNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvTWFuYWdlci9MaXN0ZW5lck1hbmFnZXJcIjtcclxuaW1wb3J0IHsgU291bmRNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvTWFuYWdlci9Tb3VuZE1hbmFnZXJcIjtcclxuaW1wb3J0IHsgU3luY0RhdGFNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvTWFuYWdlci9TeW5jRGF0YU1hbmFnZXJcIjtcclxuaW1wb3J0IHsgVG9vbHMgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9VdGlscy9Ub29sc1wiO1xyXG5pbXBvcnQgeyBVSUhlbHAgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9VdGlscy9VSUhlbHBcIjtcclxuaW1wb3J0IHsgRXZlbnRUeXBlIH0gZnJvbSBcIi4uLy4uL0RhdGEvRXZlbnRUeXBlXCI7XHJcbmltcG9ydCBPcHRpb25JdGVtIGZyb20gXCIuL09wdGlvbkl0ZW1cIjtcclxuaW1wb3J0IHsgU291bmRDb25maWcgfSBmcm9tIFwiLi9Tb3VuZENvbmZpZ1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIER1b01hb01hbzQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIG9wdGlvblBhbmVsOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBmaWxsQXJlYTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgb3B0aW9uczogY2MuTm9kZVtdID0gW107XHJcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXHJcbiAgICBwcml2YXRlIGd1bHVndWx1OiBzcC5Ta2VsZXRvbiA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSB0cnVlQ29sb3IgPSBbMiwgMywgNCwgMF07XHJcbiAgICBwcml2YXRlIHRydWVBbmdsZSA9IFswLCAtNDUsIC0xMzUsIC05MF07XHJcbiAgICBwcml2YXRlIGluaXRQb3M6IGNjLlZlYzNbXSA9IFtjYy52MygtNDA3LjUsIDApLCBjYy52MygtMjQ0LjUsIDApLCBjYy52MygtODEuNSwgMCksIGNjLnYzKDgxLjUsIDApLCBjYy52MygyNDQuNSwgMCksIGNjLnYzKDQwNy41LCAwKV07XHJcbiAgICBwcml2YXRlIHN0ZXAyUG9zOiBjYy5WZWMzW10gPSBbY2MudjMoLTM5NC41LCAwKSwgY2MudjMoLTEzMS41LCAwKSwgY2MudjMoMTMxLjUsIDApLCBjYy52MygzOTQuNSwgMCldO1xyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vbihFdmVudFR5cGUuRU5URVJfR0FNRSwgdGhpcy5vbkVudGVyR2FtZSwgdGhpcyk7XHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLm9uKEV2ZW50VHlwZS5PTl9DTElDS19JVEVNLCB0aGlzLm9uQ2xpY2tPcHRpb24sIHRoaXMpO1xyXG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vbihFdmVudFR5cGUuUk9UQVRFX0lURU0sIHRoaXMub25Sb3RhdGVJdGVtLCB0aGlzKTtcclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub24oRXZlbnRUeXBlLk9OX0ZJTExfSVRFTSwgdGhpcy5vbkZpbGxJdGVtLCB0aGlzKTtcclxuICAgIH1cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub2ZmKEV2ZW50VHlwZS5FTlRFUl9HQU1FLCB0aGlzLm9uRW50ZXJHYW1lLCB0aGlzKTtcclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub2ZmKEV2ZW50VHlwZS5PTl9DTElDS19JVEVNLCB0aGlzLm9uQ2xpY2tPcHRpb24sIHRoaXMpO1xyXG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vZmYoRXZlbnRUeXBlLlJPVEFURV9JVEVNLCB0aGlzLm9uUm90YXRlSXRlbSwgdGhpcyk7XHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLm9mZihFdmVudFR5cGUuT05fRklMTF9JVEVNLCB0aGlzLm9uRmlsbEl0ZW0sIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25FbnRlckdhbWUoaXNSZWNvdmVyOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5pbml0KGlzUmVjb3Zlcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0KGlzUmVjb3ZlcjogYm9vbGVhbikge1xyXG4gICAgICAgIFVJSGVscC5jbG9zZU1hc2soKTtcclxuICAgICAgICBUb29scy5wbGF5U3BpbmUodGhpcy5ndWx1Z3VsdSwgJ3poaTInLCBmYWxzZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBUb29scy5wbGF5U3BpbmUodGhpcy5ndWx1Z3VsdSwgJ3poaTInLCBmYWxzZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgVG9vbHMucGxheVNwaW5lKHRoaXMuZ3VsdWd1bHUsICdpZGxlJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50ZG93bigpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm9wdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zW2ldLmdldENvbXBvbmVudChPcHRpb25JdGVtKS5yZXNldCgpO1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnNbaV0ucG9zaXRpb24gPSB0aGlzLmluaXRQb3NbaV07XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9uc1tpXS5hbmdsZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9uc1tpXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnNbaV0uZ2V0Q29tcG9uZW50KE9wdGlvbkl0ZW0pLnNob3dDbGlja05vZGUoKTtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zW2ldLmdldENoaWxkQnlOYW1lKCd5aW55aW5nJykuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy5vcHRpb25QYW5lbC5jaGlsZHJlbi5mb3JFYWNoKChpdGVtOiBjYy5Ob2RlLCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIHN3aXRjaCAoaXRlbS5uYW1lKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBjYXNlICdob25nJzpcclxuICAgICAgICAvLyAgICAgICAgICAgICBpdGVtLnBvc2l0aW9uID0gdGhpcy5pbml0UG9zWzBdO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vICAgICAgICAgY2FzZSAnZmVuJzpcclxuICAgICAgICAvLyAgICAgICAgICAgICBpdGVtLnBvc2l0aW9uID0gdGhpcy5pbml0UG9zWzFdO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vICAgICAgICAgY2FzZSAnaHVhbmcnOlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGl0ZW0ucG9zaXRpb24gPSB0aGlzLmluaXRQb3NbMl07XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgLy8gICAgICAgICBjYXNlICdsdic6XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgaXRlbS5wb3NpdGlvbiA9IHRoaXMuaW5pdFBvc1szXTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAvLyAgICAgICAgIGNhc2UgJ2xhbic6XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgaXRlbS5wb3NpdGlvbiA9IHRoaXMuaW5pdFBvc1s0XTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAvLyAgICAgICAgIGNhc2UgJ3ppJzpcclxuICAgICAgICAvLyAgICAgICAgICAgICBpdGVtLnBvc2l0aW9uID0gdGhpcy5pbml0UG9zWzVdO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAvLyAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICBpdGVtLmFuZ2xlID0gMDtcclxuICAgICAgICAvLyAgICAgaXRlbS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIC8vICAgICBpdGVtLmdldENvbXBvbmVudChPcHRpb25JdGVtKS5zaG93Q2xpY2tOb2RlKCk7XHJcbiAgICAgICAgLy8gICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoJ3lpbnlpbmcnKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJ1a2V6aGl4aW5nXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBlZmZlY3QgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3h1eGlhbicpLmdldENoaWxkQnlOYW1lKFwic2hhbmd1YW5nXCIpO1xyXG4gICAgICAgIGVmZmVjdC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBsZXQgbGlodWEgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2xpaHVhJyk7XHJcbiAgICAgICAgbGlodWEuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8v5bey6YCJ5LitXHJcbiAgICAgICAgbGV0IGN1ckNob29zZUNvbG9ycyA9IFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmN1ckNob29zZUNvbG9ycztcclxuICAgICAgICBpZiAoY3VyQ2hvb3NlQ29sb3JzLmxlbmd0aCA9PT0gNCkge1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvblBhbmVsLmdldENoaWxkQnlOYW1lKCdmZW4nKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25QYW5lbC5nZXRDaGlsZEJ5TmFtZSgnemknKS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5vcHRpb25QYW5lbC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25QYW5lbC5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZShcImFuaVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm9wdGlvblBhbmVsLmdldENoaWxkQnlOYW1lKCdob25nJykuZ2V0Q29tcG9uZW50KE9wdGlvbkl0ZW0pLnNldE9yaWdpblBvcyh0aGlzLnN0ZXAyUG9zWzBdLCB0aGlzLm9wdGlvblBhbmVsKTtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25QYW5lbC5nZXRDaGlsZEJ5TmFtZSgnaHVhbmcnKS5nZXRDb21wb25lbnQoT3B0aW9uSXRlbSkuc2V0T3JpZ2luUG9zKHRoaXMuc3RlcDJQb3NbMV0sIHRoaXMub3B0aW9uUGFuZWwpO1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvblBhbmVsLmdldENoaWxkQnlOYW1lKCdsdicpLmdldENvbXBvbmVudChPcHRpb25JdGVtKS5zZXRPcmlnaW5Qb3ModGhpcy5zdGVwMlBvc1syXSwgdGhpcy5vcHRpb25QYW5lbCk7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9uUGFuZWwuZ2V0Q2hpbGRCeU5hbWUoJ2xhbicpLmdldENvbXBvbmVudChPcHRpb25JdGVtKS5zZXRPcmlnaW5Qb3ModGhpcy5zdGVwMlBvc1szXSwgdGhpcy5vcHRpb25QYW5lbCk7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9uUGFuZWwuZ2V0Q2hpbGRCeU5hbWUoJ2hvbmcnKS5wb3NpdGlvbiA9IHRoaXMuc3RlcDJQb3NbMF07XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9uUGFuZWwuZ2V0Q2hpbGRCeU5hbWUoJ2h1YW5nJykucG9zaXRpb24gPSB0aGlzLnN0ZXAyUG9zWzFdO1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvblBhbmVsLmdldENoaWxkQnlOYW1lKCdsdicpLnBvc2l0aW9uID0gdGhpcy5zdGVwMlBvc1syXTtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25QYW5lbC5nZXRDaGlsZEJ5TmFtZSgnbGFuJykucG9zaXRpb24gPSB0aGlzLnN0ZXAyUG9zWzNdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMub3B0aW9uUGFuZWwuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uUGFuZWwuY2hpbGRyZW5baV0uZ2V0Q29tcG9uZW50KE9wdGlvbkl0ZW0pLmNsb3NlQ2xpY2tOb2RlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvblBhbmVsLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKCd5aW55aW5nJykuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8v5bey5pS+572uXHJcbiAgICAgICAgICAgIGxldCBjdXJGaWxsZWRJbmRleCA9IFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmN1ckZpbGxlZEluZGV4O1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1ckZpbGxlZEluZGV4Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnNbY3VyRmlsbGVkSW5kZXhbaV1dLnBhcmVudCA9IHRoaXMuZmlsbEFyZWE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnNbY3VyRmlsbGVkSW5kZXhbaV1dLnBvc2l0aW9uID0gY2MudjMoMCwgMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGN1ckZpbGxlZEluZGV4Lmxlbmd0aCA9PT0gNCkge1xyXG4gICAgICAgICAgICAgICAgVG9vbHMucGxheVNwaW5lKHRoaXMuZ3VsdWd1bHUsICdndXpoYW5nJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIVN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmlzR2FtZU92ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBMaXN0ZW5lck1hbmFnZXIuZGlzcGF0Y2goRXZlbnRUeXBlLlNVQk1JVCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLmRpc3BhdGNoKEV2ZW50VHlwZS5HQU1FX09WRVIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJDaG9vc2VDb2xvcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBhbmkgPSB0aGlzLm9wdGlvbnNbY3VyQ2hvb3NlQ29sb3JzW2ldXS5nZXRDaGlsZEJ5TmFtZSgnYW5pJylcclxuICAgICAgICAgICAgICAgIGFuaS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgVG9vbHMucGxheVNwaW5lKGFuaS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLCAnZHVvbWFvbWFvNF94aWFvYmFuZ19pZGxlJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/ml4vovaxcclxuICAgICAgICB0aGlzLnVwZGF0ZU9wdGlvblJvdGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuaGlkZVh1eGlhbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY291bnRkb3duKCkge1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgVG9vbHMucGxheVNwaW5lKHRoaXMuZ3VsdWd1bHUsICd6aGkyJywgZmFsc2UsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIFRvb2xzLnBsYXlTcGluZSh0aGlzLmd1bHVndWx1LCAnaWRsZScsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb3VudGRvd24oKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSwgMTApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25DbGlja09wdGlvbihEYXRhOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmNvdW50ZG93bigpO1xyXG4gICAgICAgIGxldCBpbmRleCA9IERhdGEuaW5kZXg7XHJcbiAgICAgICAgbGV0IG5hbWUgPSBEYXRhLm5hbWU7XHJcbiAgICAgICAgaWYgKFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmN1clN0ZXAgPT0gMSkgcmV0dXJuO1xyXG4gICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KFNvdW5kQ29uZmlnLnNvdWRsaXN0W1wi54K55Ye76Z+z5pWIXCJdLCBmYWxzZSwgZmFsc2UsIGZhbHNlKTtcclxuICAgICAgICBsZXQgY3VyQ2hvb3NlQ29sb3JzID0gU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY3VyQ2hvb3NlQ29sb3JzO1xyXG4gICAgICAgIGlmICh0aGlzLnRydWVDb2xvci5pbmRleE9mKGluZGV4KSAhPT0gLTEgJiYgY3VyQ2hvb3NlQ29sb3JzLmluZGV4T2YoaW5kZXgpID09PSAtMSkge1xyXG4gICAgICAgICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jdXJDaG9vc2VDb2xvcnMucHVzaChpbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnRydWVDb2xvci5pbmRleE9mKGluZGV4KSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgU291bmRNYW5hZ2VyLnN0b3BTb3VuZEJ5TmFtZShTb3VuZENvbmZpZy5zb3VkbGlzdFtcIuS4jeaYr+aIkVwiXSk7XHJcbiAgICAgICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KFNvdW5kQ29uZmlnLnNvdWRsaXN0W1wi5LiN5piv5oiRXCJdLCBmYWxzZSwgZmFsc2UsIGZhbHNlKTtcclxuICAgICAgICAgICAgbGV0IGFuaSA9IHRoaXMub3B0aW9uUGFuZWwuZ2V0Q2hpbGRCeU5hbWUobmFtZSkuZ2V0Q2hpbGRCeU5hbWUoJ2FuaScpO1xyXG4gICAgICAgICAgICBhbmkuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgVG9vbHMucGxheVNwaW5lKGFuaS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLCAnZHVvbWFvbWFvNF94aWFvYmFuZ19jdW93dScgKyAoTWF0aC5yYW5kb20oKSA+IDAuNSA/IDEgOiAyKSwgZmFsc2UsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGFuaS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IHNvdW5kTmFtZSA9IFwi57qi6ImyXCI7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICBzb3VuZE5hbWUgPSBcIum7hOiJslwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgIHNvdW5kTmFtZSA9IFwi57u/6ImyXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgc291bmROYW1lID0gXCLok53oibJcIjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBTb3VuZE1hbmFnZXIuc3RvcFNvdW5kQnlOYW1lKHNvdW5kTmFtZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KFNvdW5kQ29uZmlnLnNvdWRsaXN0W3NvdW5kTmFtZV0sIGZhbHNlLCBmYWxzZSwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9LCAwLjY1KTtcclxuICAgICAgICAgICAgbGV0IGFuaSA9IHRoaXMub3B0aW9uUGFuZWwuZ2V0Q2hpbGRCeU5hbWUobmFtZSkuZ2V0Q2hpbGRCeU5hbWUoJ2FuaScpO1xyXG4gICAgICAgICAgICBhbmkuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgVG9vbHMucGxheVNwaW5lKGFuaS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLCAnZHVvbWFvbWFvNF94aWFvYmFuZ196aGVuZ3F1ZScsIGZhbHNlLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBUb29scy5wbGF5U3BpbmUoYW5pLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbiksICdkdW9tYW9tYW80X3hpYW9iYW5nX2lkbGUnLCB0cnVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jdXJDaG9vc2VDb2xvcnMubGVuZ3RoID09PSA0KSB7XHJcbiAgICAgICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmN1clN0ZXAgPSAxO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHRTdGVwKCk7XHJcbiAgICAgICAgICAgIH0sIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG5leHRTdGVwKCkge1xyXG4gICAgICAgIGxldCBpdGVtX2Zlbl9hbmkgPSB0aGlzLm9wdGlvblBhbmVsLmdldENoaWxkQnlOYW1lKCdmZW4nKS5nZXRDaGlsZEJ5TmFtZSgnYW5pJyk7XHJcbiAgICAgICAgbGV0IGl0ZW1femlfYW5pID0gdGhpcy5vcHRpb25QYW5lbC5nZXRDaGlsZEJ5TmFtZSgnemknKS5nZXRDaGlsZEJ5TmFtZSgnYW5pJyk7XHJcbiAgICAgICAgaXRlbV9mZW5fYW5pLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgaXRlbV96aV9hbmkuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChTb3VuZENvbmZpZy5zb3VkbGlzdFtcIueDn+mbvumfs+aViFwiXSwgZmFsc2UsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9uUGFuZWwuZ2V0Q2hpbGRCeU5hbWUoJ2ZlbicpLmdldENoaWxkQnlOYW1lKCdpY29uJykuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSwgMC4zKTtcclxuICAgICAgICBUb29scy5wbGF5U3BpbmUoaXRlbV9mZW5fYW5pLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbiksICd5YW53dScsIGZhbHNlLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9uUGFuZWwuZ2V0Q2hpbGRCeU5hbWUoJ2ZlbicpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvblBhbmVsLmdldENoaWxkQnlOYW1lKCdmZW4nKS5nZXRDaGlsZEJ5TmFtZSgnaWNvbicpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvblBhbmVsLmdldENoaWxkQnlOYW1lKCd6aScpLmdldENoaWxkQnlOYW1lKCdpY29uJykuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSwgMC4zKTtcclxuICAgICAgICBUb29scy5wbGF5U3BpbmUoaXRlbV96aV9hbmkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKSwgJ3lhbnd1JywgZmFsc2UsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25QYW5lbC5nZXRDaGlsZEJ5TmFtZSgnemknKS5nZXRDaGlsZEJ5TmFtZSgnaWNvbicpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9uUGFuZWwuZ2V0Q2hpbGRCeU5hbWUoJ3ppJykuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIFNvdW5kTWFuYWdlci5zdG9wQWxsRWZmZWN0KCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRTcGFjaW5nKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY3VyUm90YXRlQW5nbGUgPSBbMCwgMCwgMCwgMCwgMCwgMF07Ly8g5b2T5YmN5peL6L2s55qE6KeS5bqmIOe6oueyiem7hOe7v+iTnee0q1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVzZXRTcGFjaW5nKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5vcHRpb25QYW5lbC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvblBhbmVsLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwiYW5pXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm9wdGlvblBhbmVsLmdldENoaWxkQnlOYW1lKCdob25nJykuZ2V0Q29tcG9uZW50KE9wdGlvbkl0ZW0pLnNldE9yaWdpblBvcyh0aGlzLnN0ZXAyUG9zWzBdLCB0aGlzLm9wdGlvblBhbmVsKTtcclxuICAgICAgICB0aGlzLm9wdGlvblBhbmVsLmdldENoaWxkQnlOYW1lKCdodWFuZycpLmdldENvbXBvbmVudChPcHRpb25JdGVtKS5zZXRPcmlnaW5Qb3ModGhpcy5zdGVwMlBvc1sxXSwgdGhpcy5vcHRpb25QYW5lbCk7XHJcbiAgICAgICAgdGhpcy5vcHRpb25QYW5lbC5nZXRDaGlsZEJ5TmFtZSgnbHYnKS5nZXRDb21wb25lbnQoT3B0aW9uSXRlbSkuc2V0T3JpZ2luUG9zKHRoaXMuc3RlcDJQb3NbMl0sIHRoaXMub3B0aW9uUGFuZWwpO1xyXG4gICAgICAgIHRoaXMub3B0aW9uUGFuZWwuZ2V0Q2hpbGRCeU5hbWUoJ2xhbicpLmdldENvbXBvbmVudChPcHRpb25JdGVtKS5zZXRPcmlnaW5Qb3ModGhpcy5zdGVwMlBvc1szXSwgdGhpcy5vcHRpb25QYW5lbCk7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5vcHRpb25QYW5lbC5nZXRDaGlsZEJ5TmFtZSgnaG9uZycpKS50bygwLjUsIHsgcG9zaXRpb246IHRoaXMuc3RlcDJQb3NbMF0gfSkuc3RhcnQoKTtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLm9wdGlvblBhbmVsLmdldENoaWxkQnlOYW1lKCdodWFuZycpKS50bygwLjUsIHsgcG9zaXRpb246IHRoaXMuc3RlcDJQb3NbMV0gfSkuc3RhcnQoKTtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLm9wdGlvblBhbmVsLmdldENoaWxkQnlOYW1lKCdsdicpKS50bygwLjUsIHsgcG9zaXRpb246IHRoaXMuc3RlcDJQb3NbMl0gfSkuc3RhcnQoKTtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLm9wdGlvblBhbmVsLmdldENoaWxkQnlOYW1lKCdsYW4nKSkudG8oMC41LCB7IHBvc2l0aW9uOiB0aGlzLnN0ZXAyUG9zWzNdIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMub3B0aW9uUGFuZWwuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uUGFuZWwuY2hpbGRyZW5baV0uZ2V0Q29tcG9uZW50KE9wdGlvbkl0ZW0pLmNsb3NlQ2xpY2tOb2RlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvblBhbmVsLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKCd5aW55aW5nJykuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25Sb3RhdGVJdGVtKERhdGE6IGFueSkge1xyXG4gICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KFNvdW5kQ29uZmlnLnNvdWRsaXN0W1wi54K55Ye76Z+z5pWIXCJdLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5jb3VudGRvd24oKTtcclxuICAgICAgICBsZXQgaW5kZXggPSBEYXRhO1xyXG4gICAgICAgIGxldCBjdXJSb3RhdGVBbmdsZSA9IFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmN1clJvdGF0ZUFuZ2xlO1xyXG4gICAgICAgIGN1clJvdGF0ZUFuZ2xlW2luZGV4XSAtPSA0NTtcclxuICAgICAgICBpZiAoY3VyUm90YXRlQW5nbGVbaW5kZXhdID09PSAtMTgwKSB7XHJcbiAgICAgICAgICAgIGN1clJvdGF0ZUFuZ2xlW2luZGV4XSA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZU9wdGlvblJvdGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlT3B0aW9uUm90YXRlKCkge1xyXG4gICAgICAgIGxldCBjdXJSb3RhdGVBbmdsZSA9IFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmN1clJvdGF0ZUFuZ2xlO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5vcHRpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9uc1tpXS5hbmdsZSA9IGN1clJvdGF0ZUFuZ2xlW2ldO1xyXG4gICAgICAgICAgICAvLyBzd2l0Y2ggKHRoaXMub3B0aW9uUGFuZWwuY2hpbGRyZW5baV0ubmFtZSkge1xyXG4gICAgICAgICAgICAvLyAgICAgY2FzZSAnaG9uZyc6XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5vcHRpb25QYW5lbC5jaGlsZHJlbltpXS5hbmdsZSA9IGN1clJvdGF0ZUFuZ2xlWzBdO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAvLyAgICAgY2FzZSAnZmVuJzpcclxuICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLm9wdGlvblBhbmVsLmNoaWxkcmVuW2ldLmFuZ2xlID0gY3VyUm90YXRlQW5nbGVbMV07XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIC8vICAgICBjYXNlICdodWFuZyc6XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5vcHRpb25QYW5lbC5jaGlsZHJlbltpXS5hbmdsZSA9IGN1clJvdGF0ZUFuZ2xlWzJdO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAvLyAgICAgY2FzZSAnbHYnOlxyXG4gICAgICAgICAgICAvLyAgICAgICAgIHRoaXMub3B0aW9uUGFuZWwuY2hpbGRyZW5baV0uYW5nbGUgPSBjdXJSb3RhdGVBbmdsZVszXTtcclxuICAgICAgICAgICAgLy8gICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgLy8gICAgIGNhc2UgJ2xhbic6XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5vcHRpb25QYW5lbC5jaGlsZHJlbltpXS5hbmdsZSA9IGN1clJvdGF0ZUFuZ2xlWzRdO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAvLyAgICAgY2FzZSAnemknOlxyXG4gICAgICAgICAgICAvLyAgICAgICAgIHRoaXMub3B0aW9uUGFuZWwuY2hpbGRyZW5baV0uYW5nbGUgPSBjdXJSb3RhdGVBbmdsZVs1XTtcclxuICAgICAgICAgICAgLy8gICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uRmlsbEl0ZW0obm9kZTogY2MuTm9kZSkge1xyXG4gICAgICAgIHRoaXMuY291bnRkb3duKCk7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gbm9kZS5nZXRDb21wb25lbnQoT3B0aW9uSXRlbSkuaW5kZXg7XHJcbiAgICAgICAgbGV0IG5hbWUgPSBub2RlLm5hbWU7XHJcbiAgICAgICAgbGV0IGN1clJvdGF0ZUFuZ2xlID0gU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY3VyUm90YXRlQW5nbGU7XHJcbiAgICAgICAgbGV0IGN1ckZpbGxlZEluZGV4ID0gU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY3VyRmlsbGVkSW5kZXg7XHJcbiAgICAgICAgaWYgKHRoaXMudHJ1ZUNvbG9yW2N1ckZpbGxlZEluZGV4Lmxlbmd0aF0gIT0gaW5kZXgpIHtcclxuICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoT3B0aW9uSXRlbSkucmVzZXQoKTtcclxuICAgICAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoU291bmRDb25maWcuc291ZGxpc3RbXCLov5jmsqHliLDmiJHlk6ZcIl0sIGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5V3Jvbmcobm9kZSk7XHJcbiAgICAgICAgICAgIGxldCBjdW93dSA9IHRoaXMuZmlsbEFyZWEucGFyZW50LmdldENoaWxkQnlOYW1lKFwiY3Vvd3VcIik7XHJcbiAgICAgICAgICAgIGN1b3d1LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKGN1b3d1KS50bygwLCB7IG9wYWNpdHk6IDI1NSB9KVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuMiwgeyBvcGFjaXR5OiAwIH0pXHJcbiAgICAgICAgICAgICAgICAudG8oMC4yLCB7IG9wYWNpdHk6IDI1NSB9KVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuMiwgeyBvcGFjaXR5OiAwIH0pXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vvd3UuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGN1clJvdGF0ZUFuZ2xlW2luZGV4XSAhPSB0aGlzLnRydWVBbmdsZVtjdXJGaWxsZWRJbmRleC5sZW5ndGhdKSB7XHJcbiAgICAgICAgICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChTb3VuZENvbmZpZy5zb3VkbGlzdFtcIuinkuW6puS4jeWvueWTplwiXSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoT3B0aW9uSXRlbSkucmVzZXQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheVdyb25nKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1b3d1ID0gdGhpcy5maWxsQXJlYS5wYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJjdW93dVwiKTtcclxuICAgICAgICAgICAgICAgIGN1b3d1LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbihjdW93dSkudG8oMCwgeyBvcGFjaXR5OiAyNTUgfSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oMC4yLCB7IG9wYWNpdHk6IDAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oMC4yLCB7IG9wYWNpdHk6IDI1NSB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjIsIHsgb3BhY2l0eTogMCB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vvd3UuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5maWxsQXJlYTtcclxuICAgICAgICAgICAgICAgIG5vZGUucG9zaXRpb24gPSBjYy52MygwLCAwKTtcclxuICAgICAgICAgICAgICAgIG5vZGUuYW5nbGUgPSBjdXJSb3RhdGVBbmdsZVtpbmRleF07XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VyRmlsbGVkSW5kZXguaW5kZXhPZihpbmRleCkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVmZmVjdCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgneHV4aWFuJykuZ2V0Q2hpbGRCeU5hbWUoXCJzaGFuZ3VhbmdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZWZmZWN0LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgVG9vbHMucGxheVNwaW5lKGVmZmVjdC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLCAnYW5pbWF0aW9uJywgZmFsc2UsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWZmZWN0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KFNvdW5kQ29uZmlnLnNvdWRsaXN0W1wi5q2j56Gu5o+Q56S6XCJdLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VyRmlsbGVkSW5kZXgucHVzaChpbmRleCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGVYdXhpYW4oKTtcclxuICAgICAgICAgICAgICAgIGlmIChjdXJGaWxsZWRJbmRleC5sZW5ndGggPT09IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsbGVkQWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoaWRlWHV4aWFuKCkge1xyXG4gICAgICAgIGxldCB4dXhpYW5Ob2RlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwieHV4aWFuXCIpLmdldENoaWxkQnlOYW1lKFwieHV4aWFuXCIpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgeHV4aWFuTm9kZS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB4dXhpYW5Ob2RlLmNoaWxkcmVuW2ldLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmIChpIDwgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY3VyRmlsbGVkSW5kZXgubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB4dXhpYW5Ob2RlLmNoaWxkcmVuW2ldLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcGxheVJpZ2h0KG5vZGU6IGNjLk5vZGUpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwbGF5V3Jvbmcobm9kZTogY2MuTm9kZSkge1xyXG4gICAgICAgIGxldCBhbmkgPSBub2RlLmdldENoaWxkQnlOYW1lKCdhbmknKTtcclxuICAgICAgICBhbmkuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBUb29scy5wbGF5U3BpbmUoYW5pLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbiksICdkdW9tYW9tYW80X3hpYW9iYW5nX2N1b3d1JyArIChNYXRoLnJhbmRvbSgpID4gMC41ID8gMSA6IDIpLCBmYWxzZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBhbmkuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmaWxsZWRBbGwoKSB7XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XHJcbiAgICAgICAgLy8gTGlzdGVuZXJNYW5hZ2VyLmRpc3BhdGNoKEV2ZW50VHlwZS5TVUJNSVQsIHRydWUpO1xyXG4gICAgICAgIFRvb2xzLnBsYXlTcGluZSh0aGlzLmd1bHVndWx1LCAnZ3V6aGFuZycsIHRydWUpO1xyXG4gICAgICAgIFVJSGVscC5zaG93TWFzaygpO1xyXG5cclxuICAgICAgICB0aGlzLmZpbGxBcmVhLmdldENoaWxkQnlOYW1lKCdodWFuZycpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgbGV0IGxpaHVhID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdsaWh1YScpO1xyXG4gICAgICAgIGxpaHVhLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgVG9vbHMucGxheVNwaW5lKGxpaHVhLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbiksICdhbmltYXRpb24nLCBmYWxzZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBsaWh1YS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChTb3VuZENvbmZpZy5zb3VkbGlzdFtcIuekvOiKsemfs+aViFwiXSwgZmFsc2UsIGZhbHNlLCBmYWxzZSk7XHJcbiAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoU291bmRDb25maWcuc291ZGxpc3RbXCLkuIDmqKHkuIDmoLfvvIHkuIDmqKHkuIDmoLfvvIFcIl0sIGZhbHNlLCBmYWxzZSwgZmFsc2UpO1xyXG5cclxuICAgICAgICB0aGlzLmZpbGxBcmVhLmNoaWxkcmVuLmZvckVhY2goKGl0ZW06IGNjLk5vZGUsIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgaXRlbS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgc2hpbGkgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ4dXhpYW5kaWJhblwiKTtcclxuICAgICAgICBzaGlsaS5jaGlsZHJlbi5mb3JFYWNoKChpdGVtOiBjYy5Ob2RlLCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0IG5hbWUxID0gW1wiaHVhbmdcIiwgXCJsdlwiLCBcImxhblwiLCBcImhvbmdcIl07XHJcbiAgICAgICAgbGV0IG5hbWUyID0gW1wiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGxBcmVhLmdldENoaWxkQnlOYW1lKG5hbWUxW2ldKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgc2hpbGkuZ2V0Q2hpbGRCeU5hbWUobmFtZTJbaV0pLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH0sIDAuNiAqIGkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5pc0dhbWVPdmVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLmRpc3BhdGNoKEV2ZW50VHlwZS5TVUJNSVQsIHRydWUpO1xyXG4gICAgICAgICAgICBMaXN0ZW5lck1hbmFnZXIuZGlzcGF0Y2goRXZlbnRUeXBlLkdBTUVfT1ZFUik7XHJcbiAgICAgICAgICAgIFVJSGVscC5jbG9zZU1hc2soKTtcclxuICAgICAgICB9LCAzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uQ2xpY2tOZXh0KCkge1xyXG4gICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KFNvdW5kQ29uZmlnLnNvdWRsaXN0W1wi54K55Ye76Z+z5pWIXCJdLCBmYWxzZSwgZmFsc2UsIGZhbHNlKTtcclxuICAgICAgICBpZiAoIVN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmlzR2FtZU92ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYnVrZXpoaXhpbmdcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYnVrZXpoaXhpbmdcIikpLnRvKDAsIHsgb3BhY2l0eTogMjU1IH0pLmRlbGF5KDIpLnRvKDAsIHsgb3BhY2l0eTogMCB9KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJ1a2V6aGl4aW5nXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcHJpdmF0ZSBzY3JlZW5DbGljayhldmVudDogYW55KSB7XHJcbiAgICAvLyAgICAgbGV0IHBvcyA9IGV2ZW50LnRhcmdldC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKGV2ZW50LnBvcy54LCBldmVudC5wb3MueSkpO1xyXG4gICAgLy8gICAgIGlmIChldmVudC5pc0NsaWNrKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnZGlhbmppZG9uZ3hpYW8nKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgLy8gICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2RpYW5qaWRvbmd4aWFvJykucG9zaXRpb24gPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKTtcclxuICAgIC8vICAgICAgICAgVG9vbHMucGxheVNwaW5lKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnZGlhbmppZG9uZ3hpYW8nKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLCAnYW5pbWF0aW9uJywgZmFsc2UsICgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnZGlhbmppZG9uZ3hpYW8nKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIC8vICAgICAgICAgfSk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG59XHJcbiJdfQ==