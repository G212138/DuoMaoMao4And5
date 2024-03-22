"use strict";
cc._RF.push(module, '8197auscX5DgZu/zFP10vz5', 'Duomaomao5_2');
// game/scripts/UI/Item/Duomaomao5_2.ts

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
var EventType_1 = require("../../Data/EventType");
var FillArea2_1 = require("./FillArea2");
var OptionItem2_1 = require("./OptionItem2");
var SoundConfig_1 = require("./SoundConfig");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Duomaomao5 = /** @class */ (function (_super) {
    __extends(Duomaomao5, _super);
    function Duomaomao5() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.optionPanel = null;
        _this.fillNode = null;
        _this.fillArea = [];
        _this.optionItem = [];
        _this.chong_ani = null;
        _this.tigan = null;
        _this.chong_img = null;
        _this.chong_real = null;
        _this.trueColorAngle = [-135, -45, -135, -45, -135];
        _this.trueAnswerType = [0, 1, 0, 1, 0];
        return _this;
    }
    Duomaomao5.prototype.onLoad = function () {
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.ENTER_GAME, this.onEnterGame, this);
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.ROTATE_ITEM2, this.onRotateItem, this);
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.ON_FILL_ITEM3, this.onFillItem, this);
    };
    Duomaomao5.prototype.onDestroy = function () {
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.ENTER_GAME, this.onEnterGame, this);
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.ROTATE_ITEM2, this.onRotateItem, this);
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.ON_FILL_ITEM3, this.onFillItem, this);
    };
    Duomaomao5.prototype.onEnterGame = function (isRecover) {
        this.init(isRecover);
    };
    Duomaomao5.prototype.init = function (isRecover) {
        var _this = this;
        this.node.getChildByName("shanguang").active = false;
        this.node.getChildByName("yanwu").active = false;
        this.node.getChildByName('lihua').active = false;
        this.optionPanel.active = false;
        this.tigan.active = false;
        this.fillNode.active = false;
        this.chong_img.active = false;
        this.chong_real.active = false;
        this.chong_ani.node.active = true;
        for (var i = 0; i < this.optionItem.length; i++) {
            this.optionItem[i].getComponent(OptionItem2_1.default).reset();
        }
        //旋转
        this.updateOptionRotate();
        this.hideXuxian();
        if (!isRecover) {
            this.chong_ani.node.x = 1520;
            Tools_1.Tools.playSpine(this.chong_ani, "chongzi_weiyi", true);
            cc.tween(this.chong_ani.node).to(4, { x: 440 }).call(function () {
                Tools_1.Tools.playSpine(_this.chong_ani, "chongzi_penti", false, function () {
                    _this.fillNode.active = true;
                    Tools_1.Tools.playSpine(_this.chong_ani, "chongzi_weiyi", true);
                    cc.tween(_this.chong_ani.node).to(4, { x: -388 }).call(function () {
                        _this.chong_ani.node.active = false;
                        _this.chong_img.active = true;
                        _this.tigan.active = true;
                        _this.optionPanel.active = true;
                    }).start();
                });
            }).start();
        }
        else {
            this.chong_ani.node.x = 440;
            this.fillNode.active = true;
            this.chong_ani.node.active = false;
            this.chong_img.active = true;
            this.tigan.active = true;
            this.optionPanel.active = true;
            //已放置
            var fillAreaResult2 = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.fillAreaResult2;
            for (var i = 0; i < fillAreaResult2.length; i++) {
                if (fillAreaResult2[i] != null) {
                    this.fillArea[i].getComponent(FillArea2_1.default).fill(this.optionItem[fillAreaResult2[i]]);
                }
            }
            if (fillAreaResult2.every(function (item) { return item != null; })) {
                this.chong_img.active = false;
                this.fillNode.active = false;
                this.chong_real.active = true;
                if (!SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.isGameOver) {
                    ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.SUBMIT, true);
                    ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.GAME_OVER);
                }
            }
        }
    };
    Duomaomao5.prototype.onRotateItem = function (Data) {
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["点击音效"], false);
        var index = Data;
        var curAngleInfo2 = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curAngleInfo2;
        curAngleInfo2[index] += 45;
        if (curAngleInfo2[index] === 180) {
            curAngleInfo2[index] = 0;
        }
        this.updateOptionRotate();
    };
    Duomaomao5.prototype.updateOptionRotate = function () {
        for (var i = 0; i < this.optionPanel.children.length; i++) {
            var option = this.optionPanel.children[i];
            var name = option.name.split("_");
            var index = Number(name[1]);
            option.angle = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curAngleInfo2[index];
        }
    };
    Duomaomao5.prototype.onFillItem = function (data) {
        var _this = this;
        var areaIndex = data.areaIndex;
        var itemIndex = data.itemIndex;
        var curAngleInfo2 = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curAngleInfo2;
        console.log("curAngleInfo2", curAngleInfo2);
        var fillAreaResult2 = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.fillAreaResult2;
        var type = this.optionItem[itemIndex].getComponent(OptionItem2_1.default).type;
        //找出fillAreaResult2中有几个不为null的
        var count = 0;
        for (var i = 0; i < fillAreaResult2.length; i++) {
            if (fillAreaResult2[i] != null) {
                count++;
            }
        }
        if (itemIndex < 3) { //绿色
            if (count % 2 != 0) { //顺序不对
                SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["还没到我哦"], false);
                return;
            }
            if (curAngleInfo2[itemIndex] != 45) {
                SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["角度不对哦"], false);
                return;
            }
            if (areaIndex != count) {
                SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["位置不对哦"], false);
                return;
            }
            fillAreaResult2[areaIndex] = itemIndex;
            this.fillArea[areaIndex].getComponent(FillArea2_1.default).fill(this.optionItem[itemIndex]);
            var effect_1 = this.node.getChildByName("shanguang");
            effect_1.active = true;
            effect_1.position = this.fillArea[areaIndex].position;
            Tools_1.Tools.playSpine(effect_1.getComponent(sp.Skeleton), "animation", false, function () {
                effect_1.active = false;
            });
        }
        else { //红色
            if (count % 2 == 0) { //顺序不对
                SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["还没到我哦"], false);
                return;
            }
            if (curAngleInfo2[itemIndex] != 135) {
                SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["角度不对哦"], false);
                return;
            }
            if (areaIndex != count) {
                SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["位置不对哦"], false);
                return;
            }
            fillAreaResult2[areaIndex] = itemIndex;
            this.fillArea[areaIndex].getComponent(FillArea2_1.default).fill(this.optionItem[itemIndex]);
            var effect_2 = this.node.getChildByName("shanguang");
            effect_2.active = true;
            effect_2.position = this.fillArea[areaIndex].position;
            Tools_1.Tools.playSpine(effect_2.getComponent(sp.Skeleton), "animation", false, function () {
                effect_2.active = false;
            });
        }
        if (fillAreaResult2.every(function (item) { return item != null; })) {
            var lihua_1 = this.node.getChildByName('lihua');
            lihua_1.active = true;
            Tools_1.Tools.playSpine(lihua_1.getComponent(sp.Skeleton), 'animation', false, function () {
                lihua_1.active = false;
            });
            SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["礼花音效"], false, false, false);
            SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curStep = 2;
            this.chong_img.active = false;
            this.scheduleOnce(function () {
                _this.node.getChildByName("yanwu").active = true;
                _this.scheduleOnce(function () {
                    _this.fillNode.active = false;
                }, 0.3);
                Tools_1.Tools.playSpine(_this.node.getChildByName("yanwu").getComponent(sp.Skeleton), "yanwu", false, function () {
                    _this.node.getChildByName("yanwu").active = false;
                    _this.chong_real.active = true;
                    SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["小青虫爬啊爬"], false, false, false, function () {
                        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.isGameOver = true;
                        ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.SUBMIT, true);
                        ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.GAME_OVER);
                    });
                });
            }, 1);
        }
        this.hideXuxian();
    };
    Duomaomao5.prototype.hideXuxian = function () {
        var fillAreaResult2 = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.fillAreaResult2;
        for (var i = 0; i < this.fillArea.length; i++) {
            this.fillArea[i].getComponent(cc.Sprite).enabled = true;
            if (fillAreaResult2[i] != null) {
                this.fillArea[i].getComponent(cc.Sprite).enabled = false;
            }
        }
    };
    Duomaomao5.prototype.onClickNext = function () {
        var _this = this;
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["点击音效"], false, false, false);
        if (SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curStep == 2) {
        }
        else {
            this.node.getChildByName("bukezhixing").active = true;
            this.scheduleOnce(function () {
                _this.node.getChildByName("bukezhixing").active = false;
            }, 2);
        }
    };
    __decorate([
        property(cc.Node)
    ], Duomaomao5.prototype, "optionPanel", void 0);
    __decorate([
        property(cc.Node)
    ], Duomaomao5.prototype, "fillNode", void 0);
    __decorate([
        property(cc.Node)
    ], Duomaomao5.prototype, "fillArea", void 0);
    __decorate([
        property(cc.Node)
    ], Duomaomao5.prototype, "optionItem", void 0);
    __decorate([
        property(sp.Skeleton)
    ], Duomaomao5.prototype, "chong_ani", void 0);
    __decorate([
        property(cc.Node)
    ], Duomaomao5.prototype, "tigan", void 0);
    __decorate([
        property(cc.Node)
    ], Duomaomao5.prototype, "chong_img", void 0);
    __decorate([
        property(cc.Node)
    ], Duomaomao5.prototype, "chong_real", void 0);
    Duomaomao5 = __decorate([
        ccclass
    ], Duomaomao5);
    return Duomaomao5;
}(cc.Component));
exports.default = Duomaomao5;

cc._RF.pop();