"use strict";
cc._RF.push(module, '2fb397Xe4pIMpbMLYDyUjFl', 'Duomaomao5');
// game/scripts/UI/Item/Duomaomao5.ts

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
        _this.qizi = null;
        _this.tigan = null;
        _this.caiqi = null;
        _this.trueColorAngle = [120, 0, 0, 60];
        return _this;
    }
    Duomaomao5.prototype.onLoad = function () {
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.ENTER_GAME, this.onEnterGame, this);
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.ROTATE_ITEM, this.onRotateItem, this);
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.ON_FILL_ITEM2, this.onFillItem, this);
    };
    Duomaomao5.prototype.onDestroy = function () {
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.ENTER_GAME, this.onEnterGame, this);
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.ROTATE_ITEM, this.onRotateItem, this);
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.ON_FILL_ITEM2, this.onFillItem, this);
    };
    Duomaomao5.prototype.onEnterGame = function (isRecover) {
        this.init(isRecover);
    };
    Duomaomao5.prototype.init = function (isRecover) {
        var _this = this;
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
        for (var i = 0; i < this.optionItem.length; i++) {
            this.optionItem[i].getComponent(OptionItem2_1.default).reset();
        }
        //旋转
        this.updateOptionRotate();
        this.hideXuxian();
        if (!isRecover) {
            Tools_1.Tools.playSpine(this.qizi, "qizi_weiyi", false, function () {
                // Tools.playSpine(this.qizi, "qizi_weiyi2", false);            
                _this.qizi.node.active = false;
                _this.caiqi.active = true;
            });
            cc.tween(this.fillNode).delay(0.35).call(function () {
                _this.fillNode.active = true;
            }).to(0.5, { x: 0 }, { "easing": "bounceOut" }).call(function () {
                _this.optionPanel.active = true;
                _this.tigan.active = true;
            }).start();
        }
        else {
            this.qizi.node.active = false;
            this.caiqi.active = true;
            this.fillNode.active = true;
            this.fillNode.x = 0;
            this.optionPanel.active = true;
            this.tigan.active = true;
            //已放置
            var fillAreaResult = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.fillAreaResult;
            for (var i = 0; i < fillAreaResult.length; i++) {
                if (fillAreaResult[i] != null) {
                    this.fillArea[i].getComponent(FillArea2_1.default).fill(this.optionItem[fillAreaResult[i]]);
                }
            }
            if (fillAreaResult.every(function (item) { return item != null; })) {
                this.caiqi.active = false;
                this.fillNode.x = -585;
                this.fillNode.active = false;
                this.node.getChildByName("yanwu").active = false;
                this.node.getChildByName("qizi").active = true;
                Tools_1.Tools.playSpine(this.node.getChildByName("qizi").getComponent(sp.Skeleton), "qizi_weiyi2", true);
                this.node.getChildByName("fangfang").active = true;
                Tools_1.Tools.playSpine(this.node.getChildByName("fangfang").getComponent(sp.Skeleton), "fangfang_huanhu3", true);
            }
        }
    };
    Duomaomao5.prototype.onRotateItem = function (Data) {
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["点击音效"], false);
        var index = Data;
        var curAngleInfo = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curAngleInfo;
        curAngleInfo[index] += 60;
        if (curAngleInfo[index] === 180) {
            curAngleInfo[index] = 0;
        }
        this.updateOptionRotate();
    };
    Duomaomao5.prototype.updateOptionRotate = function () {
        for (var i = 0; i < this.optionPanel.children.length; i++) {
            var option = this.optionPanel.children[i];
            option.angle = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curAngleInfo[Number(option.name)];
        }
    };
    Duomaomao5.prototype.onFillItem = function (data) {
        var _this = this;
        var areaIndex = data.areaIndex;
        var itemIndex = data.itemIndex;
        var curAngleInfo = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curAngleInfo;
        var fillAreaResult = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.fillAreaResult;
        // 正确顺序紫，粉，蓝；黄色随意 0：粉 1：黄 2：蓝 3：zi
        if (itemIndex == 0) {
            //先判断颜色
            if (fillAreaResult[1] == null) {
                SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["还没到我哦"], false);
                return;
            }
            //再判断角度
            if (curAngleInfo[0] != this.trueColorAngle[0]) {
                SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["角度不对哦"], false);
                return;
            }
            //最后判断位置
            if (areaIndex != 2) {
                SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["位置不对哦"], false);
                return;
            }
            fillAreaResult[2] = itemIndex;
            this.fillArea[2].getComponent(FillArea2_1.default).fill(this.optionItem[itemIndex]);
            var effect_1 = this.node.getChildByName("shanguang");
            effect_1.active = true;
            effect_1.position = this.fillArea[2].position;
            Tools_1.Tools.playSpine(effect_1.getComponent(sp.Skeleton), "animation", false, function () {
                effect_1.active = false;
            });
        }
        else if (itemIndex == 1) {
            if (curAngleInfo[1] != this.trueColorAngle[1]) {
                SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["角度不对哦"], false);
                return;
            }
            if (areaIndex != 0) {
                SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["位置不对哦"], false);
                return;
            }
            fillAreaResult[0] = itemIndex;
            this.fillArea[0].getComponent(FillArea2_1.default).fill(this.optionItem[itemIndex]);
            var effect_2 = this.node.getChildByName("shanguang");
            effect_2.active = true;
            effect_2.position = this.fillArea[0].position;
            Tools_1.Tools.playSpine(effect_2.getComponent(sp.Skeleton), "animation", false, function () {
                effect_2.active = false;
            });
        }
        else if (itemIndex == 2) {
            if (fillAreaResult[1] == null || fillAreaResult[2] == null) {
                SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["还没到我哦"], false);
                return;
            }
            if (curAngleInfo[2] != this.trueColorAngle[2]) {
                SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["角度不对哦"], false);
                return;
            }
            if (areaIndex != 3) {
                SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["位置不对哦"], false);
                return;
            }
            fillAreaResult[3] = itemIndex;
            this.fillArea[3].getComponent(FillArea2_1.default).fill(this.optionItem[itemIndex]);
            var effect_3 = this.node.getChildByName("shanguang");
            effect_3.active = true;
            effect_3.position = this.fillArea[3].position;
            Tools_1.Tools.playSpine(effect_3.getComponent(sp.Skeleton), "animation", false, function () {
                effect_3.active = false;
            });
        }
        else if (itemIndex == 3) {
            if (curAngleInfo[3] != this.trueColorAngle[3]) {
                SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["角度不对哦"], false);
                return;
            }
            if (areaIndex != 1) {
                SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["位置不对哦"], false);
                return;
            }
            fillAreaResult[1] = itemIndex;
            this.fillArea[1].getComponent(FillArea2_1.default).fill(this.optionItem[itemIndex]);
            var effect_4 = this.node.getChildByName("shanguang");
            effect_4.active = true;
            effect_4.position = this.fillArea[1].position;
            Tools_1.Tools.playSpine(effect_4.getComponent(sp.Skeleton), "animation", false, function () {
                effect_4.active = false;
            });
        }
        if (fillAreaResult.every(function (item) { return item != null; })) {
            var lihua_1 = this.node.getChildByName('lihua');
            lihua_1.active = true;
            Tools_1.Tools.playSpine(lihua_1.getComponent(sp.Skeleton), 'animation', false, function () {
                lihua_1.active = false;
            });
            SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["礼花音效"], false, false, false);
            this.scheduleOnce(function () {
                _this.caiqi.active = false;
                cc.tween(_this.fillNode).to(0.5, { x: -585 }).delay(0.2).call(function () {
                    _this.scheduleOnce(function () {
                        _this.fillNode.active = false;
                    }, 0.3);
                    _this.node.getChildByName("yanwu").active = true;
                    SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["烟雾音效"], false, false, false);
                    Tools_1.Tools.playSpine(_this.node.getChildByName("yanwu").getComponent(sp.Skeleton), "yanwu", false, function () {
                        _this.node.getChildByName("yanwu").active = false;
                        _this.node.getChildByName("qizi").active = true;
                        Tools_1.Tools.playSpine(_this.node.getChildByName("qizi").getComponent(sp.Skeleton), "qizi_weiyi2", true);
                        _this.node.getChildByName("fangfang").active = true;
                        Tools_1.Tools.playSpine(_this.node.getChildByName("fangfang").getComponent(sp.Skeleton), "fangfang_huanhu3", true);
                        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curStep = 1;
                        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["小旗子飘啊飘"], false, false, false);
                    });
                }).start();
            }, 1);
        }
        this.hideXuxian();
    };
    Duomaomao5.prototype.hideXuxian = function () {
        var fillAreaResult = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.fillAreaResult;
        for (var i = 0; i < this.fillArea.length; i++) {
            this.fillArea[i].getComponent(cc.Sprite).enabled = true;
            if (fillAreaResult[i] != null) {
                this.fillArea[i].getComponent(cc.Sprite).enabled = false;
            }
        }
    };
    Duomaomao5.prototype.onClickNext = function () {
        var _this = this;
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["点击音效"], false, false, false);
        if (SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curStep == 1) {
            SoundManager_1.SoundManager.stopAllEffect();
            ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.ON_NEXT_STEP);
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
    ], Duomaomao5.prototype, "qizi", void 0);
    __decorate([
        property(cc.Node)
    ], Duomaomao5.prototype, "tigan", void 0);
    __decorate([
        property(cc.Node)
    ], Duomaomao5.prototype, "caiqi", void 0);
    Duomaomao5 = __decorate([
        ccclass
    ], Duomaomao5);
    return Duomaomao5;
}(cc.Component));
exports.default = Duomaomao5;

cc._RF.pop();