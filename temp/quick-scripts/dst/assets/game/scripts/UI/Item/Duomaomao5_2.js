
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/UI/Item/Duomaomao5_2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXEl0ZW1cXER1b21hb21hbzVfMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxRkFBb0Y7QUFDcEYsK0VBQThFO0FBQzlFLHFGQUFvRjtBQUNwRiwrREFBOEQ7QUFFOUQsa0RBQWlEO0FBQ2pELHlDQUFvQztBQUNwQyw2Q0FBd0M7QUFDeEMsNkNBQTRDO0FBRXRDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXdDLDhCQUFZO0lBQXBEO1FBQUEscUVBa09DO1FBaE9XLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRTVCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsY0FBUSxHQUFjLEVBQUUsQ0FBQztRQUV6QixnQkFBVSxHQUFjLEVBQUUsQ0FBQztRQUUzQixlQUFTLEdBQWdCLElBQUksQ0FBQztRQUU5QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFtRzNCLG9CQUFjLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlDLG9CQUFjLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7O0lBOEc3QyxDQUFDO0lBaE5HLDJCQUFNLEdBQU47UUFDSSxpQ0FBZSxDQUFDLEVBQUUsQ0FBQyxxQkFBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pFLGlDQUFlLENBQUMsRUFBRSxDQUFDLHFCQUFTLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDcEUsaUNBQWUsQ0FBQyxFQUFFLENBQUMscUJBQVMsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQsOEJBQVMsR0FBVDtRQUNJLGlDQUFlLENBQUMsR0FBRyxDQUFDLHFCQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbEUsaUNBQWUsQ0FBQyxHQUFHLENBQUMscUJBQVMsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyRSxpQ0FBZSxDQUFDLEdBQUcsQ0FBQyxxQkFBUyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFTyxnQ0FBVyxHQUFuQixVQUFvQixTQUFrQjtRQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFTSx5QkFBSSxHQUFYLFVBQVksU0FBa0I7UUFBOUIsaUJBMkRDO1FBMURHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDckQsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNqRCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2pELElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM5QixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDL0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUVsQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDN0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMscUJBQVcsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3hEO1FBQ0QsSUFBSTtRQUNKLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUVsQixJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ1osSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztZQUM3QixhQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3ZELEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNqRCxhQUFLLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxTQUFTLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRTtvQkFDcEQsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO29CQUM1QixhQUFLLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxTQUFTLEVBQUUsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUN2RCxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDO3dCQUNsRCxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO3dCQUNuQyxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7d0JBQzdCLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzt3QkFDekIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO29CQUNuQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDZixDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2Q7YUFBTTtZQUNILElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7WUFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDbkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUN6QixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFFL0IsS0FBSztZQUNMLElBQUksZUFBZSxHQUFHLGlDQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQztZQUNuRixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsZUFBZSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDN0MsSUFBSSxlQUFlLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFO29CQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxtQkFBUyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDdEY7YUFDSjtZQUNELElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLElBQUksSUFBSSxJQUFJLEVBQVosQ0FBWSxDQUFDLEVBQUU7Z0JBQy9DLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUM3QixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBRTlCLElBQUksQ0FBQyxpQ0FBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUU7b0JBQzFELGlDQUFlLENBQUMsUUFBUSxDQUFDLHFCQUFTLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUNqRCxpQ0FBZSxDQUFDLFFBQVEsQ0FBQyxxQkFBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2lCQUNqRDthQUNKO1NBQ0o7SUFDTCxDQUFDO0lBRU8saUNBQVksR0FBcEIsVUFBcUIsSUFBUztRQUMxQiwyQkFBWSxDQUFDLFVBQVUsQ0FBQyx5QkFBVyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM3RCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxhQUFhLEdBQUcsaUNBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDO1FBQy9FLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDM0IsSUFBSSxhQUFhLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxFQUFFO1lBQzlCLGFBQWEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDNUI7UUFDRCxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRU8sdUNBQWtCLEdBQTFCO1FBQ0ksS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN2RCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQyxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNsQyxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsTUFBTSxDQUFDLEtBQUssR0FBRyxpQ0FBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDcEY7SUFDTCxDQUFDO0lBSU8sK0JBQVUsR0FBbEIsVUFBbUIsSUFBUztRQUE1QixpQkFzRkM7UUFyRkcsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMvQixJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQy9CLElBQUksYUFBYSxHQUFHLGlDQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQztRQUMvRSxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUM1QyxJQUFJLGVBQWUsR0FBRyxpQ0FBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUM7UUFDbkYsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxZQUFZLENBQUMscUJBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNyRSw4QkFBOEI7UUFDOUIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGVBQWUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDN0MsSUFBSSxlQUFlLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFO2dCQUM1QixLQUFLLEVBQUUsQ0FBQzthQUNYO1NBQ0o7UUFDRCxJQUFJLFNBQVMsR0FBRyxDQUFDLEVBQUUsRUFBRSxJQUFJO1lBQ3JCLElBQUksS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxNQUFNO2dCQUN4QiwyQkFBWSxDQUFDLFVBQVUsQ0FBQyx5QkFBVyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDOUQsT0FBTzthQUNWO1lBQ0QsSUFBSSxhQUFhLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUNoQywyQkFBWSxDQUFDLFVBQVUsQ0FBQyx5QkFBVyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDOUQsT0FBTzthQUNWO1lBQ0QsSUFBSSxTQUFTLElBQUksS0FBSyxFQUFFO2dCQUNwQiwyQkFBWSxDQUFDLFVBQVUsQ0FBQyx5QkFBVyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDOUQsT0FBTzthQUNWO1lBQ0QsZUFBZSxDQUFDLFNBQVMsQ0FBQyxHQUFHLFNBQVMsQ0FBQztZQUN2QyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxtQkFBUyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUVsRixJQUFJLFFBQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNuRCxRQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNyQixRQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQ3BELGFBQUssQ0FBQyxTQUFTLENBQUMsUUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRTtnQkFDbEUsUUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDMUIsQ0FBQyxDQUFDLENBQUM7U0FDTjthQUFNLEVBQUUsSUFBSTtZQUNULElBQUksS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxNQUFNO2dCQUN4QiwyQkFBWSxDQUFDLFVBQVUsQ0FBQyx5QkFBVyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDOUQsT0FBTzthQUNWO1lBQ0QsSUFBSSxhQUFhLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxFQUFFO2dCQUNqQywyQkFBWSxDQUFDLFVBQVUsQ0FBQyx5QkFBVyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDOUQsT0FBTzthQUNWO1lBQ0QsSUFBSSxTQUFTLElBQUksS0FBSyxFQUFFO2dCQUNwQiwyQkFBWSxDQUFDLFVBQVUsQ0FBQyx5QkFBVyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDOUQsT0FBTzthQUNWO1lBQ0QsZUFBZSxDQUFDLFNBQVMsQ0FBQyxHQUFHLFNBQVMsQ0FBQztZQUN2QyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxtQkFBUyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUVsRixJQUFJLFFBQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNuRCxRQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNyQixRQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQ3BELGFBQUssQ0FBQyxTQUFTLENBQUMsUUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRTtnQkFDbEUsUUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDMUIsQ0FBQyxDQUFDLENBQUM7U0FDTjtRQUVELElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLElBQUksSUFBSSxJQUFJLEVBQVosQ0FBWSxDQUFDLEVBQUU7WUFDL0MsSUFBSSxPQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDOUMsT0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDcEIsYUFBSyxDQUFDLFNBQVMsQ0FBQyxPQUFLLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFO2dCQUNqRSxPQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUN6QixDQUFDLENBQUMsQ0FBQztZQUNILDJCQUFZLENBQUMsVUFBVSxDQUFDLHlCQUFXLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDM0UsaUNBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxjQUFjLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztZQUN6RCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDOUIsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDZCxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNoRCxLQUFJLENBQUMsWUFBWSxDQUFDO29CQUNkLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDakMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUNSLGFBQUssQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFO29CQUN6RixLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO29CQUNqRCxLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7b0JBQzlCLDJCQUFZLENBQUMsVUFBVSxDQUFDLHlCQUFXLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO3dCQUN6RSxpQ0FBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO3dCQUMvRCxpQ0FBZSxDQUFDLFFBQVEsQ0FBQyxxQkFBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQzt3QkFDakQsaUNBQWUsQ0FBQyxRQUFRLENBQUMscUJBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDbEQsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDVDtRQUNELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRU8sK0JBQVUsR0FBbEI7UUFDSSxJQUFJLGVBQWUsR0FBRyxpQ0FBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUM7UUFDbkYsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzNDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3hELElBQUksZUFBZSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRTtnQkFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7YUFDNUQ7U0FDSjtJQUNMLENBQUM7SUFFTyxnQ0FBVyxHQUFuQjtRQUFBLGlCQVVDO1FBVEcsMkJBQVksQ0FBQyxVQUFVLENBQUMseUJBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMzRSxJQUFJLGlDQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsY0FBYyxDQUFDLE9BQU8sSUFBSSxDQUFDLEVBQUU7U0FFOUQ7YUFBTTtZQUNILElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDdEQsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDZCxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQzNELENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNUO0lBQ0wsQ0FBQztJQS9ORDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNrQjtJQUVwQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNlO0lBRWpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ2U7SUFFakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrREFDaUI7SUFFbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQztpREFDZ0I7SUFFdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDWTtJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNnQjtJQUVsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2tEQUNpQjtJQWhCbEIsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQWtPOUI7SUFBRCxpQkFBQztDQWxPRCxBQWtPQyxDQWxPdUMsRUFBRSxDQUFDLFNBQVMsR0FrT25EO2tCQWxPb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpc3RlbmVyTWFuYWdlciB9IGZyb20gXCIuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL01hbmFnZXIvTGlzdGVuZXJNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFNvdW5kTWFuYWdlciB9IGZyb20gXCIuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL01hbmFnZXIvU291bmRNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFN5bmNEYXRhTWFuYWdlciB9IGZyb20gXCIuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL01hbmFnZXIvU3luY0RhdGFNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFRvb2xzIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvVXRpbHMvVG9vbHNcIjtcclxuaW1wb3J0IHsgVUlIZWxwIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvVXRpbHMvVUlIZWxwXCI7XHJcbmltcG9ydCB7IEV2ZW50VHlwZSB9IGZyb20gXCIuLi8uLi9EYXRhL0V2ZW50VHlwZVwiO1xyXG5pbXBvcnQgRmlsbEFyZWEyIGZyb20gXCIuL0ZpbGxBcmVhMlwiO1xyXG5pbXBvcnQgT3B0aW9uSXRlbTIgZnJvbSBcIi4vT3B0aW9uSXRlbTJcIjtcclxuaW1wb3J0IHsgU291bmRDb25maWcgfSBmcm9tIFwiLi9Tb3VuZENvbmZpZ1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIER1b21hb21hbzUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIG9wdGlvblBhbmVsOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBmaWxsTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgZmlsbEFyZWE6IGNjLk5vZGVbXSA9IFtdO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIG9wdGlvbkl0ZW06IGNjLk5vZGVbXSA9IFtdO1xyXG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxyXG4gICAgcHJpdmF0ZSBjaG9uZ19hbmk6IHNwLlNrZWxldG9uID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSB0aWdhbjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgY2hvbmdfaW1nOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBjaG9uZ19yZWFsOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLm9uKEV2ZW50VHlwZS5FTlRFUl9HQU1FLCB0aGlzLm9uRW50ZXJHYW1lLCB0aGlzKTtcclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub24oRXZlbnRUeXBlLlJPVEFURV9JVEVNMiwgdGhpcy5vblJvdGF0ZUl0ZW0sIHRoaXMpO1xyXG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vbihFdmVudFR5cGUuT05fRklMTF9JVEVNMywgdGhpcy5vbkZpbGxJdGVtLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLm9mZihFdmVudFR5cGUuRU5URVJfR0FNRSwgdGhpcy5vbkVudGVyR2FtZSwgdGhpcyk7XHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLm9mZihFdmVudFR5cGUuUk9UQVRFX0lURU0yLCB0aGlzLm9uUm90YXRlSXRlbSwgdGhpcyk7XHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLm9mZihFdmVudFR5cGUuT05fRklMTF9JVEVNMywgdGhpcy5vbkZpbGxJdGVtLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uRW50ZXJHYW1lKGlzUmVjb3ZlcjogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuaW5pdChpc1JlY292ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbml0KGlzUmVjb3ZlcjogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInNoYW5ndWFuZ1wiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ5YW53dVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2xpaHVhJykuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5vcHRpb25QYW5lbC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnRpZ2FuLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZmlsbE5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jaG9uZ19pbWcuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jaG9uZ19yZWFsLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY2hvbmdfYW5pLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm9wdGlvbkl0ZW0ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25JdGVtW2ldLmdldENvbXBvbmVudChPcHRpb25JdGVtMikucmVzZXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/ml4vovaxcclxuICAgICAgICB0aGlzLnVwZGF0ZU9wdGlvblJvdGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuaGlkZVh1eGlhbigpO1xyXG5cclxuICAgICAgICBpZiAoIWlzUmVjb3Zlcikge1xyXG4gICAgICAgICAgICB0aGlzLmNob25nX2FuaS5ub2RlLnggPSAxNTIwO1xyXG4gICAgICAgICAgICBUb29scy5wbGF5U3BpbmUodGhpcy5jaG9uZ19hbmksIFwiY2hvbmd6aV93ZWl5aVwiLCB0cnVlKTtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5jaG9uZ19hbmkubm9kZSkudG8oNCwgeyB4OiA0NDAgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBUb29scy5wbGF5U3BpbmUodGhpcy5jaG9uZ19hbmksIFwiY2hvbmd6aV9wZW50aVwiLCBmYWxzZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsbE5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBUb29scy5wbGF5U3BpbmUodGhpcy5jaG9uZ19hbmksIFwiY2hvbmd6aV93ZWl5aVwiLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmNob25nX2FuaS5ub2RlKS50byg0LCB7IHg6IC0zODggfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hvbmdfYW5pLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hvbmdfaW1nLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGlnYW4uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25QYW5lbC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSkuc3RhcnQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNob25nX2FuaS5ub2RlLnggPSA0NDA7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsbE5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5jaG9uZ19hbmkubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5jaG9uZ19pbWcuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy50aWdhbi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvblBhbmVsLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAvL+W3suaUvue9rlxyXG4gICAgICAgICAgICBsZXQgZmlsbEFyZWFSZXN1bHQyID0gU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuZmlsbEFyZWFSZXN1bHQyO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGxBcmVhUmVzdWx0Mi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpbGxBcmVhUmVzdWx0MltpXSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxsQXJlYVtpXS5nZXRDb21wb25lbnQoRmlsbEFyZWEyKS5maWxsKHRoaXMub3B0aW9uSXRlbVtmaWxsQXJlYVJlc3VsdDJbaV1dKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZmlsbEFyZWFSZXN1bHQyLmV2ZXJ5KChpdGVtKSA9PiBpdGVtICE9IG51bGwpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNob25nX2ltZy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsbE5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNob25nX3JlYWwuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIVN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmlzR2FtZU92ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBMaXN0ZW5lck1hbmFnZXIuZGlzcGF0Y2goRXZlbnRUeXBlLlNVQk1JVCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLmRpc3BhdGNoKEV2ZW50VHlwZS5HQU1FX09WRVIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25Sb3RhdGVJdGVtKERhdGE6IGFueSkge1xyXG4gICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KFNvdW5kQ29uZmlnLnNvdWRsaXN0W1wi54K55Ye76Z+z5pWIXCJdLCBmYWxzZSk7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gRGF0YTtcclxuICAgICAgICBsZXQgY3VyQW5nbGVJbmZvMiA9IFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmN1ckFuZ2xlSW5mbzI7XHJcbiAgICAgICAgY3VyQW5nbGVJbmZvMltpbmRleF0gKz0gNDU7XHJcbiAgICAgICAgaWYgKGN1ckFuZ2xlSW5mbzJbaW5kZXhdID09PSAxODApIHtcclxuICAgICAgICAgICAgY3VyQW5nbGVJbmZvMltpbmRleF0gPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnVwZGF0ZU9wdGlvblJvdGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlT3B0aW9uUm90YXRlKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5vcHRpb25QYW5lbC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgb3B0aW9uID0gdGhpcy5vcHRpb25QYW5lbC5jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgbGV0IG5hbWUgPSBvcHRpb24ubmFtZS5zcGxpdChcIl9cIik7XHJcbiAgICAgICAgICAgIGxldCBpbmRleCA9IE51bWJlcihuYW1lWzFdKTtcclxuICAgICAgICAgICAgb3B0aW9uLmFuZ2xlID0gU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY3VyQW5nbGVJbmZvMltpbmRleF07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdHJ1ZUNvbG9yQW5nbGUgPSBbLTEzNSwgLTQ1LCAtMTM1LCAtNDUsIC0xMzVdO1xyXG4gICAgcHJpdmF0ZSB0cnVlQW5zd2VyVHlwZSA9IFswLCAxLCAwLCAxLCAwXTtcclxuICAgIHByaXZhdGUgb25GaWxsSXRlbShkYXRhOiBhbnkpIHtcclxuICAgICAgICBsZXQgYXJlYUluZGV4ID0gZGF0YS5hcmVhSW5kZXg7XHJcbiAgICAgICAgbGV0IGl0ZW1JbmRleCA9IGRhdGEuaXRlbUluZGV4O1xyXG4gICAgICAgIGxldCBjdXJBbmdsZUluZm8yID0gU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY3VyQW5nbGVJbmZvMjtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImN1ckFuZ2xlSW5mbzJcIiwgY3VyQW5nbGVJbmZvMik7XHJcbiAgICAgICAgbGV0IGZpbGxBcmVhUmVzdWx0MiA9IFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmZpbGxBcmVhUmVzdWx0MjtcclxuICAgICAgICBsZXQgdHlwZSA9IHRoaXMub3B0aW9uSXRlbVtpdGVtSW5kZXhdLmdldENvbXBvbmVudChPcHRpb25JdGVtMikudHlwZTtcclxuICAgICAgICAvL+aJvuWHumZpbGxBcmVhUmVzdWx0MuS4reacieWHoOS4quS4jeS4um51bGznmoRcclxuICAgICAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsbEFyZWFSZXN1bHQyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChmaWxsQXJlYVJlc3VsdDJbaV0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgY291bnQrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXRlbUluZGV4IDwgMykgeyAvL+e7v+iJslxyXG4gICAgICAgICAgICBpZiAoY291bnQgJSAyICE9IDApIHsgLy/pobrluo/kuI3lr7lcclxuICAgICAgICAgICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KFNvdW5kQ29uZmlnLnNvdWRsaXN0W1wi6L+Y5rKh5Yiw5oiR5ZOmXCJdLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGN1ckFuZ2xlSW5mbzJbaXRlbUluZGV4XSAhPSA0NSkge1xyXG4gICAgICAgICAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoU291bmRDb25maWcuc291ZGxpc3RbXCLop5LluqbkuI3lr7nlk6ZcIl0sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYXJlYUluZGV4ICE9IGNvdW50KSB7XHJcbiAgICAgICAgICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChTb3VuZENvbmZpZy5zb3VkbGlzdFtcIuS9jee9ruS4jeWvueWTplwiXSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZpbGxBcmVhUmVzdWx0MlthcmVhSW5kZXhdID0gaXRlbUluZGV4O1xyXG4gICAgICAgICAgICB0aGlzLmZpbGxBcmVhW2FyZWFJbmRleF0uZ2V0Q29tcG9uZW50KEZpbGxBcmVhMikuZmlsbCh0aGlzLm9wdGlvbkl0ZW1baXRlbUluZGV4XSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgZWZmZWN0ID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic2hhbmd1YW5nXCIpO1xyXG4gICAgICAgICAgICBlZmZlY3QuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgZWZmZWN0LnBvc2l0aW9uID0gdGhpcy5maWxsQXJlYVthcmVhSW5kZXhdLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICBUb29scy5wbGF5U3BpbmUoZWZmZWN0LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbiksIFwiYW5pbWF0aW9uXCIsIGZhbHNlLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlZmZlY3QuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7IC8v57qi6ImyXHJcbiAgICAgICAgICAgIGlmIChjb3VudCAlIDIgPT0gMCkgeyAvL+mhuuW6j+S4jeWvuVxyXG4gICAgICAgICAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoU291bmRDb25maWcuc291ZGxpc3RbXCLov5jmsqHliLDmiJHlk6ZcIl0sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY3VyQW5nbGVJbmZvMltpdGVtSW5kZXhdICE9IDEzNSkge1xyXG4gICAgICAgICAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoU291bmRDb25maWcuc291ZGxpc3RbXCLop5LluqbkuI3lr7nlk6ZcIl0sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYXJlYUluZGV4ICE9IGNvdW50KSB7XHJcbiAgICAgICAgICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChTb3VuZENvbmZpZy5zb3VkbGlzdFtcIuS9jee9ruS4jeWvueWTplwiXSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZpbGxBcmVhUmVzdWx0MlthcmVhSW5kZXhdID0gaXRlbUluZGV4O1xyXG4gICAgICAgICAgICB0aGlzLmZpbGxBcmVhW2FyZWFJbmRleF0uZ2V0Q29tcG9uZW50KEZpbGxBcmVhMikuZmlsbCh0aGlzLm9wdGlvbkl0ZW1baXRlbUluZGV4XSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgZWZmZWN0ID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic2hhbmd1YW5nXCIpO1xyXG4gICAgICAgICAgICBlZmZlY3QuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgZWZmZWN0LnBvc2l0aW9uID0gdGhpcy5maWxsQXJlYVthcmVhSW5kZXhdLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICBUb29scy5wbGF5U3BpbmUoZWZmZWN0LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbiksIFwiYW5pbWF0aW9uXCIsIGZhbHNlLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlZmZlY3QuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGZpbGxBcmVhUmVzdWx0Mi5ldmVyeSgoaXRlbSkgPT4gaXRlbSAhPSBudWxsKSkge1xyXG4gICAgICAgICAgICBsZXQgbGlodWEgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2xpaHVhJyk7XHJcbiAgICAgICAgICAgIGxpaHVhLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIFRvb2xzLnBsYXlTcGluZShsaWh1YS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLCAnYW5pbWF0aW9uJywgZmFsc2UsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxpaHVhLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoU291bmRDb25maWcuc291ZGxpc3RbXCLnpLzoirHpn7PmlYhcIl0sIGZhbHNlLCBmYWxzZSwgZmFsc2UpO1xyXG4gICAgICAgICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jdXJTdGVwID0gMjtcclxuICAgICAgICAgICAgdGhpcy5jaG9uZ19pbWcuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInlhbnd1XCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxsTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0sIDAuMyk7XHJcbiAgICAgICAgICAgICAgICBUb29scy5wbGF5U3BpbmUodGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwieWFud3VcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKSwgXCJ5YW53dVwiLCBmYWxzZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInlhbnd1XCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hvbmdfcmVhbC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KFNvdW5kQ29uZmlnLnNvdWRsaXN0W1wi5bCP6Z2S6Jmr54is5ZWK54isXCJdLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmlzR2FtZU92ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMaXN0ZW5lck1hbmFnZXIuZGlzcGF0Y2goRXZlbnRUeXBlLlNVQk1JVCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExpc3RlbmVyTWFuYWdlci5kaXNwYXRjaChFdmVudFR5cGUuR0FNRV9PVkVSKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5oaWRlWHV4aWFuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoaWRlWHV4aWFuKCkge1xyXG4gICAgICAgIGxldCBmaWxsQXJlYVJlc3VsdDIgPSBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5maWxsQXJlYVJlc3VsdDI7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmZpbGxBcmVhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsbEFyZWFbaV0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmIChmaWxsQXJlYVJlc3VsdDJbaV0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWxsQXJlYVtpXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkNsaWNrTmV4dCgpIHtcclxuICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChTb3VuZENvbmZpZy5zb3VkbGlzdFtcIueCueWHu+mfs+aViFwiXSwgZmFsc2UsIGZhbHNlLCBmYWxzZSk7XHJcbiAgICAgICAgaWYgKFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmN1clN0ZXAgPT0gMikge1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJidWtlemhpeGluZ1wiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJidWtlemhpeGluZ1wiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSwgMik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==