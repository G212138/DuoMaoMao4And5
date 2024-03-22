"use strict";
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