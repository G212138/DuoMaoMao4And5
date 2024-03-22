
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/UI/Item/Duomaomao5.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXEl0ZW1cXER1b21hb21hbzUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUZBQW9GO0FBQ3BGLCtFQUE4RTtBQUM5RSxxRkFBb0Y7QUFDcEYsK0RBQThEO0FBQzlELGtEQUFpRDtBQUNqRCx5Q0FBb0M7QUFDcEMsNkNBQXdDO0FBQ3hDLDZDQUE0QztBQUV0QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQTJQQztRQXpQVyxpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGNBQVEsR0FBYyxFQUFFLENBQUM7UUFFekIsZ0JBQVUsR0FBYyxFQUFFLENBQUM7UUFFM0IsVUFBSSxHQUFnQixJQUFJLENBQUM7UUFFekIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBa0d0QixvQkFBYyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7O0lBMkk3QyxDQUFDO0lBM09HLDJCQUFNLEdBQU47UUFDSSxpQ0FBZSxDQUFDLEVBQUUsQ0FBQyxxQkFBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pFLGlDQUFlLENBQUMsRUFBRSxDQUFDLHFCQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkUsaUNBQWUsQ0FBQyxFQUFFLENBQUMscUJBQVMsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQsOEJBQVMsR0FBVDtR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OzRDQUNXO0lBRWpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ1k7SUFFOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDWTtJQWRiLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0EyUDlCO0lBQUQsaUJBQUM7Q0EzUEQsQUEyUEMsQ0EzUHVDLEVBQUUsQ0FBQyxTQUFTLEdBMlBuRDtrQkEzUG9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXN0ZW5lck1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL0xpc3RlbmVyTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBTb3VuZE1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL1NvdW5kTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBTeW5jRGF0YU1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL1N5bmNEYXRhTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBUb29scyB9IGZyb20gXCIuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL1V0aWxzL1Rvb2xzXCI7XHJcbmltcG9ydCB7IEV2ZW50VHlwZSB9IGZyb20gXCIuLi8uLi9EYXRhL0V2ZW50VHlwZVwiO1xyXG5pbXBvcnQgRmlsbEFyZWEyIGZyb20gXCIuL0ZpbGxBcmVhMlwiO1xyXG5pbXBvcnQgT3B0aW9uSXRlbTIgZnJvbSBcIi4vT3B0aW9uSXRlbTJcIjtcclxuaW1wb3J0IHsgU291bmRDb25maWcgfSBmcm9tIFwiLi9Tb3VuZENvbmZpZ1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIER1b21hb21hbzUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIG9wdGlvblBhbmVsOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBmaWxsTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgZmlsbEFyZWE6IGNjLk5vZGVbXSA9IFtdO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIG9wdGlvbkl0ZW06IGNjLk5vZGVbXSA9IFtdO1xyXG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxyXG4gICAgcHJpdmF0ZSBxaXppOiBzcC5Ta2VsZXRvbiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgdGlnYW46IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIGNhaXFpOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLm9uKEV2ZW50VHlwZS5FTlRFUl9HQU1FLCB0aGlzLm9uRW50ZXJHYW1lLCB0aGlzKTtcclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub24oRXZlbnRUeXBlLlJPVEFURV9JVEVNLCB0aGlzLm9uUm90YXRlSXRlbSwgdGhpcyk7XHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLm9uKEV2ZW50VHlwZS5PTl9GSUxMX0lURU0yLCB0aGlzLm9uRmlsbEl0ZW0sIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub2ZmKEV2ZW50VHlwZS5FTlRFUl9HQU1FLCB0aGlzLm9uRW50ZXJHYW1lLCB0aGlzKTtcclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub2ZmKEV2ZW50VHlwZS5ST1RBVEVfSVRFTSwgdGhpcy5vblJvdGF0ZUl0ZW0sIHRoaXMpO1xyXG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vZmYoRXZlbnRUeXBlLk9OX0ZJTExfSVRFTTIsIHRoaXMub25GaWxsSXRlbSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkVudGVyR2FtZShpc1JlY292ZXI6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmluaXQoaXNSZWNvdmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXQoaXNSZWNvdmVyOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicWl6aVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJmYW5nZmFuZ1wiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ5YW53dVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzaGFuZ3VhbmdcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdsaWh1YScpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMub3B0aW9uUGFuZWwuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50aWdhbi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNhaXFpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucWl6aS5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5maWxsTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmZpbGxOb2RlLnggPSAtNTg1O1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMub3B0aW9uSXRlbS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbkl0ZW1baV0uZ2V0Q29tcG9uZW50KE9wdGlvbkl0ZW0yKS5yZXNldCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+aXi+i9rFxyXG4gICAgICAgIHRoaXMudXBkYXRlT3B0aW9uUm90YXRlKCk7XHJcbiAgICAgICAgdGhpcy5oaWRlWHV4aWFuKCk7XHJcblxyXG4gICAgICAgIGlmICghaXNSZWNvdmVyKSB7XHJcbiAgICAgICAgICAgIFRvb2xzLnBsYXlTcGluZSh0aGlzLnFpemksIFwicWl6aV93ZWl5aVwiLCBmYWxzZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gVG9vbHMucGxheVNwaW5lKHRoaXMucWl6aSwgXCJxaXppX3dlaXlpMlwiLCBmYWxzZSk7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnFpemkubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FpcWkuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuZmlsbE5vZGUpLmRlbGF5KDAuMzUpLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWxsTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KS50bygwLjUsIHsgeDogMCB9LCB7IFwiZWFzaW5nXCI6IFwiYm91bmNlT3V0XCIgfSkuY2FsbCgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25QYW5lbC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aWdhbi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KS5zdGFydCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucWl6aS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmNhaXFpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsbE5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5maWxsTm9kZS54ID0gMDtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25QYW5lbC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnRpZ2FuLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAvL+W3suaUvue9rlxyXG4gICAgICAgICAgICBsZXQgZmlsbEFyZWFSZXN1bHQgPSBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5maWxsQXJlYVJlc3VsdDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWxsQXJlYVJlc3VsdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpbGxBcmVhUmVzdWx0W2ldICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGxBcmVhW2ldLmdldENvbXBvbmVudChGaWxsQXJlYTIpLmZpbGwodGhpcy5vcHRpb25JdGVtW2ZpbGxBcmVhUmVzdWx0W2ldXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGZpbGxBcmVhUmVzdWx0LmV2ZXJ5KChpdGVtKSA9PiBpdGVtICE9IG51bGwpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhaXFpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWxsTm9kZS54ID0gLTU4NTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsbE5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ5YW53dVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInFpemlcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIFRvb2xzLnBsYXlTcGluZSh0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJxaXppXCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbiksIFwicWl6aV93ZWl5aTJcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJmYW5nZmFuZ1wiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgVG9vbHMucGxheVNwaW5lKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImZhbmdmYW5nXCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbiksIFwiZmFuZ2ZhbmdfaHVhbmh1M1wiLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvblJvdGF0ZUl0ZW0oRGF0YTogYW55KSB7XHJcbiAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoU291bmRDb25maWcuc291ZGxpc3RbXCLngrnlh7vpn7PmlYhcIl0sIGZhbHNlKTtcclxuICAgICAgICBsZXQgaW5kZXggPSBEYXRhO1xyXG4gICAgICAgIGxldCBjdXJBbmdsZUluZm8gPSBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jdXJBbmdsZUluZm87XHJcbiAgICAgICAgY3VyQW5nbGVJbmZvW2luZGV4XSArPSA2MDtcclxuICAgICAgICBpZiAoY3VyQW5nbGVJbmZvW2luZGV4XSA9PT0gMTgwKSB7XHJcbiAgICAgICAgICAgIGN1ckFuZ2xlSW5mb1tpbmRleF0gPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnVwZGF0ZU9wdGlvblJvdGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlT3B0aW9uUm90YXRlKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5vcHRpb25QYW5lbC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgb3B0aW9uID0gdGhpcy5vcHRpb25QYW5lbC5jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgb3B0aW9uLmFuZ2xlID0gU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY3VyQW5nbGVJbmZvW051bWJlcihvcHRpb24ubmFtZSldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRydWVDb2xvckFuZ2xlID0gWzEyMCwgMCwgMCwgNjBdO1xyXG4gICAgcHJpdmF0ZSBvbkZpbGxJdGVtKGRhdGE6IGFueSkge1xyXG4gICAgICAgIGxldCBhcmVhSW5kZXggPSBkYXRhLmFyZWFJbmRleDtcclxuICAgICAgICBsZXQgaXRlbUluZGV4ID0gZGF0YS5pdGVtSW5kZXg7XHJcbiAgICAgICAgbGV0IGN1ckFuZ2xlSW5mbyA9IFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmN1ckFuZ2xlSW5mbztcclxuICAgICAgICBsZXQgZmlsbEFyZWFSZXN1bHQgPSBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5maWxsQXJlYVJlc3VsdDtcclxuICAgICAgICAvLyDmraPnoa7pobrluo/ntKvvvIznsonvvIzok53vvJvpu4ToibLpmo/mhI8gMO+8mueyiSAx77ya6buEIDLvvJrok50gM++8mnppXHJcbiAgICAgICAgaWYgKGl0ZW1JbmRleCA9PSAwKSB7XHJcbiAgICAgICAgICAgIC8v5YWI5Yik5pat6aKc6ImyXHJcbiAgICAgICAgICAgIGlmIChmaWxsQXJlYVJlc3VsdFsxXSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChTb3VuZENvbmZpZy5zb3VkbGlzdFtcIui/mOayoeWIsOaIkeWTplwiXSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v5YaN5Yik5pat6KeS5bqmXHJcbiAgICAgICAgICAgIGlmIChjdXJBbmdsZUluZm9bMF0gIT0gdGhpcy50cnVlQ29sb3JBbmdsZVswXSkge1xyXG4gICAgICAgICAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoU291bmRDb25maWcuc291ZGxpc3RbXCLop5LluqbkuI3lr7nlk6ZcIl0sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL+acgOWQjuWIpOaWreS9jee9rlxyXG4gICAgICAgICAgICBpZiAoYXJlYUluZGV4ICE9IDIpIHtcclxuICAgICAgICAgICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KFNvdW5kQ29uZmlnLnNvdWRsaXN0W1wi5L2N572u5LiN5a+55ZOmXCJdLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmlsbEFyZWFSZXN1bHRbMl0gPSBpdGVtSW5kZXg7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsbEFyZWFbMl0uZ2V0Q29tcG9uZW50KEZpbGxBcmVhMikuZmlsbCh0aGlzLm9wdGlvbkl0ZW1baXRlbUluZGV4XSk7XHJcbiAgICAgICAgICAgIGxldCBlZmZlY3QgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzaGFuZ3VhbmdcIik7XHJcbiAgICAgICAgICAgIGVmZmVjdC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBlZmZlY3QucG9zaXRpb24gPSB0aGlzLmZpbGxBcmVhWzJdLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICBUb29scy5wbGF5U3BpbmUoZWZmZWN0LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbiksIFwiYW5pbWF0aW9uXCIsIGZhbHNlLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlZmZlY3QuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaXRlbUluZGV4ID09IDEpIHtcclxuICAgICAgICAgICAgaWYgKGN1ckFuZ2xlSW5mb1sxXSAhPSB0aGlzLnRydWVDb2xvckFuZ2xlWzFdKSB7XHJcbiAgICAgICAgICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChTb3VuZENvbmZpZy5zb3VkbGlzdFtcIuinkuW6puS4jeWvueWTplwiXSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChhcmVhSW5kZXggIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoU291bmRDb25maWcuc291ZGxpc3RbXCLkvY3nva7kuI3lr7nlk6ZcIl0sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmaWxsQXJlYVJlc3VsdFswXSA9IGl0ZW1JbmRleDtcclxuICAgICAgICAgICAgdGhpcy5maWxsQXJlYVswXS5nZXRDb21wb25lbnQoRmlsbEFyZWEyKS5maWxsKHRoaXMub3B0aW9uSXRlbVtpdGVtSW5kZXhdKTtcclxuICAgICAgICAgICAgbGV0IGVmZmVjdCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInNoYW5ndWFuZ1wiKTtcclxuICAgICAgICAgICAgZWZmZWN0LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGVmZmVjdC5wb3NpdGlvbiA9IHRoaXMuZmlsbEFyZWFbMF0ucG9zaXRpb247XHJcbiAgICAgICAgICAgIFRvb2xzLnBsYXlTcGluZShlZmZlY3QuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKSwgXCJhbmltYXRpb25cIiwgZmFsc2UsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGVmZmVjdC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpdGVtSW5kZXggPT0gMikge1xyXG4gICAgICAgICAgICBpZiAoZmlsbEFyZWFSZXN1bHRbMV0gPT0gbnVsbCB8fCBmaWxsQXJlYVJlc3VsdFsyXSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChTb3VuZENvbmZpZy5zb3VkbGlzdFtcIui/mOayoeWIsOaIkeWTplwiXSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjdXJBbmdsZUluZm9bMl0gIT0gdGhpcy50cnVlQ29sb3JBbmdsZVsyXSkge1xyXG4gICAgICAgICAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoU291bmRDb25maWcuc291ZGxpc3RbXCLop5LluqbkuI3lr7nlk6ZcIl0sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYXJlYUluZGV4ICE9IDMpIHtcclxuICAgICAgICAgICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KFNvdW5kQ29uZmlnLnNvdWRsaXN0W1wi5L2N572u5LiN5a+55ZOmXCJdLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmlsbEFyZWFSZXN1bHRbM10gPSBpdGVtSW5kZXg7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsbEFyZWFbM10uZ2V0Q29tcG9uZW50KEZpbGxBcmVhMikuZmlsbCh0aGlzLm9wdGlvbkl0ZW1baXRlbUluZGV4XSk7XHJcbiAgICAgICAgICAgIGxldCBlZmZlY3QgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzaGFuZ3VhbmdcIik7XHJcbiAgICAgICAgICAgIGVmZmVjdC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBlZmZlY3QucG9zaXRpb24gPSB0aGlzLmZpbGxBcmVhWzNdLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICBUb29scy5wbGF5U3BpbmUoZWZmZWN0LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbiksIFwiYW5pbWF0aW9uXCIsIGZhbHNlLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlZmZlY3QuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaXRlbUluZGV4ID09IDMpIHtcclxuICAgICAgICAgICAgaWYgKGN1ckFuZ2xlSW5mb1szXSAhPSB0aGlzLnRydWVDb2xvckFuZ2xlWzNdKSB7XHJcbiAgICAgICAgICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChTb3VuZENvbmZpZy5zb3VkbGlzdFtcIuinkuW6puS4jeWvueWTplwiXSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChhcmVhSW5kZXggIT0gMSkge1xyXG4gICAgICAgICAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoU291bmRDb25maWcuc291ZGxpc3RbXCLkvY3nva7kuI3lr7nlk6ZcIl0sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmaWxsQXJlYVJlc3VsdFsxXSA9IGl0ZW1JbmRleDtcclxuICAgICAgICAgICAgdGhpcy5maWxsQXJlYVsxXS5nZXRDb21wb25lbnQoRmlsbEFyZWEyKS5maWxsKHRoaXMub3B0aW9uSXRlbVtpdGVtSW5kZXhdKTtcclxuICAgICAgICAgICAgbGV0IGVmZmVjdCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInNoYW5ndWFuZ1wiKTtcclxuICAgICAgICAgICAgZWZmZWN0LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGVmZmVjdC5wb3NpdGlvbiA9IHRoaXMuZmlsbEFyZWFbMV0ucG9zaXRpb247XHJcbiAgICAgICAgICAgIFRvb2xzLnBsYXlTcGluZShlZmZlY3QuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKSwgXCJhbmltYXRpb25cIiwgZmFsc2UsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGVmZmVjdC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChmaWxsQXJlYVJlc3VsdC5ldmVyeSgoaXRlbSkgPT4gaXRlbSAhPSBudWxsKSkge1xyXG4gICAgICAgICAgICBsZXQgbGlodWEgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2xpaHVhJyk7XHJcbiAgICAgICAgICAgIGxpaHVhLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIFRvb2xzLnBsYXlTcGluZShsaWh1YS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLCAnYW5pbWF0aW9uJywgZmFsc2UsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxpaHVhLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoU291bmRDb25maWcuc291ZGxpc3RbXCLnpLzoirHpn7PmlYhcIl0sIGZhbHNlLCBmYWxzZSwgZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhaXFpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5maWxsTm9kZSkudG8oMC41LCB7IHg6IC01ODUgfSkuZGVsYXkoMC4yKS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsbE5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMC4zKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ5YW53dVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KFNvdW5kQ29uZmlnLnNvdWRsaXN0W1wi54Of6Zu+6Z+z5pWIXCJdLCBmYWxzZSwgZmFsc2UsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBUb29scy5wbGF5U3BpbmUodGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwieWFud3VcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKSwgXCJ5YW53dVwiLCBmYWxzZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ5YW53dVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicWl6aVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBUb29scy5wbGF5U3BpbmUodGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicWl6aVwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLCBcInFpemlfd2VpeWkyXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJmYW5nZmFuZ1wiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBUb29scy5wbGF5U3BpbmUodGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiZmFuZ2ZhbmdcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKSwgXCJmYW5nZmFuZ19odWFuaHUzXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jdXJTdGVwID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoU291bmRDb25maWcuc291ZGxpc3RbXCLlsI/ml5flrZDpo5jllYrpo5hcIl0sIGZhbHNlLCBmYWxzZSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgfSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaGlkZVh1eGlhbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGlkZVh1eGlhbigpIHtcclxuICAgICAgICBsZXQgZmlsbEFyZWFSZXN1bHQgPSBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5maWxsQXJlYVJlc3VsdDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZmlsbEFyZWEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5maWxsQXJlYVtpXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKGZpbGxBcmVhUmVzdWx0W2ldICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsbEFyZWFbaV0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25DbGlja05leHQoKSB7XHJcbiAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoU291bmRDb25maWcuc291ZGxpc3RbXCLngrnlh7vpn7PmlYhcIl0sIGZhbHNlLCBmYWxzZSwgZmFsc2UpO1xyXG4gICAgICAgIGlmIChTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jdXJTdGVwID09IDEpIHtcclxuICAgICAgICAgICAgU291bmRNYW5hZ2VyLnN0b3BBbGxFZmZlY3QoKTtcclxuICAgICAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLmRpc3BhdGNoKEV2ZW50VHlwZS5PTl9ORVhUX1NURVApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJ1a2V6aGl4aW5nXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJ1a2V6aGl4aW5nXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9LCAyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19