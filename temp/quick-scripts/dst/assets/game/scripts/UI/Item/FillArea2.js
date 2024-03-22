
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/UI/Item/FillArea2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4cebcCWdj9Eabu34puudgPJ', 'FillArea2');
// game/scripts/UI/Item/FillArea2.ts

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
var EventType_1 = require("../../Data/EventType");
var SoundConfig_1 = require("./SoundConfig");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FillArea2 = /** @class */ (function (_super) {
    __extends(FillArea2, _super);
    function FillArea2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FillArea2.prototype.onLoad = function () {
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.DRAG_OPTION, this.onDragOption, this);
    };
    FillArea2.prototype.onDestroy = function () {
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.DRAG_OPTION, this.onDragOption, this);
    };
    FillArea2.prototype.onDragOption = function (pos) {
    };
    FillArea2.prototype.showHighlight = function (isShow) {
        this.node.getChildByName('highLight').active = isShow;
    };
    FillArea2.prototype.fill = function (node) {
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["正确提示"], false);
        node.parent = this.node.getChildByName('fillNode');
        node.position = cc.v3(0, 0, 0);
        node.angle = 0;
    };
    FillArea2 = __decorate([
        ccclass
    ], FillArea2);
    return FillArea2;
}(cc.Component));
exports.default = FillArea2;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXEl0ZW1cXEZpbGxBcmVhMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxRkFBb0Y7QUFDcEYsK0VBQThFO0FBQzlFLGtEQUFpRDtBQUNqRCw2Q0FBNEM7QUFHdEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBdUMsNkJBQVk7SUFBbkQ7O0lBd0JBLENBQUM7SUF0QkcsMEJBQU0sR0FBTjtRQUNJLGlDQUFlLENBQUMsRUFBRSxDQUFDLHFCQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVELDZCQUFTLEdBQVQ7UUFDSSxpQ0FBZSxDQUFDLEdBQUcsQ0FBQyxxQkFBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFTyxnQ0FBWSxHQUFwQixVQUFxQixHQUFZO0lBRWpDLENBQUM7SUFFTSxpQ0FBYSxHQUFwQixVQUFxQixNQUFlO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDMUQsQ0FBQztJQUVNLHdCQUFJLEdBQVgsVUFBWSxJQUFhO1FBQ3JCLDJCQUFZLENBQUMsVUFBVSxDQUFDLHlCQUFXLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQXZCZ0IsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQXdCN0I7SUFBRCxnQkFBQztDQXhCRCxBQXdCQyxDQXhCc0MsRUFBRSxDQUFDLFNBQVMsR0F3QmxEO2tCQXhCb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpc3RlbmVyTWFuYWdlciB9IGZyb20gXCIuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL01hbmFnZXIvTGlzdGVuZXJNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFNvdW5kTWFuYWdlciB9IGZyb20gXCIuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL01hbmFnZXIvU291bmRNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IEV2ZW50VHlwZSB9IGZyb20gXCIuLi8uLi9EYXRhL0V2ZW50VHlwZVwiO1xyXG5pbXBvcnQgeyBTb3VuZENvbmZpZyB9IGZyb20gXCIuL1NvdW5kQ29uZmlnXCI7XHJcblxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxsQXJlYTIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub24oRXZlbnRUeXBlLkRSQUdfT1BUSU9OLCB0aGlzLm9uRHJhZ09wdGlvbiwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vZmYoRXZlbnRUeXBlLkRSQUdfT1BUSU9OLCB0aGlzLm9uRHJhZ09wdGlvbiwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkRyYWdPcHRpb24ocG9zOiBjYy5WZWMyKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNob3dIaWdobGlnaHQoaXNTaG93OiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdoaWdoTGlnaHQnKS5hY3RpdmUgPSBpc1Nob3c7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZpbGwobm9kZTogY2MuTm9kZSkge1xyXG4gICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KFNvdW5kQ29uZmlnLnNvdWRsaXN0W1wi5q2j56Gu5o+Q56S6XCJdLCBmYWxzZSk7XHJcbiAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2ZpbGxOb2RlJyk7XHJcbiAgICAgICAgbm9kZS5wb3NpdGlvbiA9IGNjLnYzKDAsIDAsIDApO1xyXG4gICAgICAgIG5vZGUuYW5nbGUgPSAwO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==