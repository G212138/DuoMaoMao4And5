
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/UI/Item/FillArea.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '26bedY/dvtCtoZ2Nk8jw9/2', 'FillArea');
// game/scripts/UI/Item/FillArea.ts

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
var EventType_1 = require("../../Data/EventType");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FillArea = /** @class */ (function (_super) {
    __extends(FillArea, _super);
    function FillArea() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FillArea.prototype.onLoad = function () {
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.DRAG_OPTION, this.onDragOption, this);
    };
    FillArea.prototype.onDestroy = function () {
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.DRAG_OPTION, this.onDragOption, this);
    };
    FillArea.prototype.onDragOption = function (pos) {
    };
    FillArea.prototype.fill = function (node) {
    };
    FillArea = __decorate([
        ccclass
    ], FillArea);
    return FillArea;
}(cc.Component));
exports.default = FillArea;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXEl0ZW1cXEZpbGxBcmVhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFGQUFvRjtBQUNwRixrREFBaUQ7QUFHM0MsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7O0lBZ0JBLENBQUM7SUFkRyx5QkFBTSxHQUFOO1FBQ0ksaUNBQWUsQ0FBQyxFQUFFLENBQUMscUJBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBQ0QsNEJBQVMsR0FBVDtRQUNJLGlDQUFlLENBQUMsR0FBRyxDQUFDLHFCQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVPLCtCQUFZLEdBQXBCLFVBQXFCLEdBQVk7SUFFakMsQ0FBQztJQUVNLHVCQUFJLEdBQVgsVUFBWSxJQUFhO0lBRXpCLENBQUM7SUFmZ0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWdCNUI7SUFBRCxlQUFDO0NBaEJELEFBZ0JDLENBaEJxQyxFQUFFLENBQUMsU0FBUyxHQWdCakQ7a0JBaEJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGlzdGVuZXJNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvTWFuYWdlci9MaXN0ZW5lck1hbmFnZXJcIjtcclxuaW1wb3J0IHsgRXZlbnRUeXBlIH0gZnJvbSBcIi4uLy4uL0RhdGEvRXZlbnRUeXBlXCI7XHJcblxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxsQXJlYSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vbihFdmVudFR5cGUuRFJBR19PUFRJT04sIHRoaXMub25EcmFnT3B0aW9uLCB0aGlzKTtcclxuICAgIH1cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub2ZmKEV2ZW50VHlwZS5EUkFHX09QVElPTiwgdGhpcy5vbkRyYWdPcHRpb24sIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25EcmFnT3B0aW9uKHBvczogY2MuVmVjMikge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmaWxsKG5vZGU6IGNjLk5vZGUpIHtcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG4iXX0=