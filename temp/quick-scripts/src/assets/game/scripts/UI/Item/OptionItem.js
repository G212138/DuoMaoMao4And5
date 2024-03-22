"use strict";
cc._RF.push(module, '71b56BpoPNA9ImhJS5ojNiM', 'OptionItem');
// game/scripts/UI/Item/OptionItem.ts

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
var HitTest_1 = require("../../../../frame/scripts/Utils/HitTest");
var Tools_1 = require("../../../../frame/scripts/Utils/Tools");
var EventType_1 = require("../../Data/EventType");
var SoundConfig_1 = require("./SoundConfig");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var OptionItem = /** @class */ (function (_super) {
    __extends(OptionItem, _super);
    function OptionItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.index = 0;
        _this.fillArea = null;
        _this._startPos = null;
        _this._startParent = null;
        return _this;
    }
    OptionItem.prototype.onLoad = function () {
        this._startParent = this.node.parent;
        this._startPos = this.node.position;
    };
    OptionItem.prototype.setOriginPos = function (pos, parent) {
        this._startPos = pos;
        this._startParent = parent;
    };
    OptionItem.prototype.onDragStart = function (event) {
        var pos = event.target.parent.convertToWorldSpaceAR(cc.v2(event.pos.x, event.pos.y));
        // this.node.getChildByName('yinying').active = false;
    };
    OptionItem.prototype.onDragMove = function (event) {
        var pos = event.target.parent.convertToWorldSpaceAR(cc.v2(event.pos.x, event.pos.y));
        ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.DRAG_OPTION, pos);
    };
    OptionItem.prototype.onDragEnd = function (event) {
        var pos = event.target.parent.convertToWorldSpaceAR(cc.v2(event.pos.x, event.pos.y));
        if (event.isClick) {
            if (this.node.parent.name == this.fillArea.name) {
                return;
            }
            var effect_1 = this.node.getChildByName('putongdianji');
            effect_1.active = true;
            effect_1.position = cc.v3(0, 0);
            Tools_1.Tools.playSpine(effect_1.getComponent(sp.Skeleton), 'animation', false, function () {
                effect_1.active = false;
            });
            ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.ROTATE_ITEM, this.index);
        }
        else {
            if (HitTest_1.HitTest.posInRect(new cc.Vec2(pos.x, pos.y), this.fillArea)) {
                ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.ON_FILL_ITEM, this.node);
            }
            else {
                SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["错误提示"], false);
                this.reset();
            }
        }
    };
    OptionItem.prototype.onClick = function (data) {
        if (SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curStep == 1)
            return;
        ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.ON_CLICK_ITEM, { index: this.index, name: this.node.name });
        var effect = this.node.getChildByName('putongdianji');
        effect.active = true;
        effect.position = cc.v3(data.pos.x, data.pos.y);
        Tools_1.Tools.playSpine(effect.getComponent(sp.Skeleton), 'animation', false, function () {
            effect.active = false;
        });
    };
    OptionItem.prototype.closeClickNode = function () {
        this.node.getChildByName('clickNode').active = false;
    };
    OptionItem.prototype.showClickNode = function () {
        this.node.getChildByName('clickNode').active = true;
    };
    OptionItem.prototype.reset = function () {
        this.node.position = this._startPos;
        this.node.parent = this._startParent;
        // this.node.getChildByName('yinying').active = true;
        var effect = this.node.getChildByName('putongdianji');
        effect.active = false;
        this.node.getChildByName('icon').active = true;
        this.node.getChildByName('ani').active = false;
    };
    __decorate([
        property(cc.Integer)
    ], OptionItem.prototype, "index", void 0);
    __decorate([
        property(cc.Node)
    ], OptionItem.prototype, "fillArea", void 0);
    OptionItem = __decorate([
        ccclass
    ], OptionItem);
    return OptionItem;
}(cc.Component));
exports.default = OptionItem;

cc._RF.pop();