"use strict";
cc._RF.push(module, '599c2jDTyRBmJ2/tYejRZC+', 'OptionItem2');
// game/scripts/UI/Item/OptionItem2.ts

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
var SoundConfig_1 = require("./SoundConfig");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var OptionItem2 = /** @class */ (function (_super) {
    __extends(OptionItem2, _super);
    function OptionItem2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.index = 0;
        _this.type = 0;
        _this.fillArea = [];
        _this._startPos = null;
        _this._startParent = null;
        return _this;
    }
    OptionItem2.prototype.onLoad = function () {
        this._startParent = this.node.parent;
        this._startPos = this.node.position;
    };
    OptionItem2.prototype.onDragStart = function (event) {
        var pos = event.target.parent.convertToWorldSpaceAR(cc.v2(event.pos.x, event.pos.y));
        // this.node.getChildByName('yinying').active = false;
    };
    OptionItem2.prototype.onDragMove = function (event) {
        var pos = event.target.parent.convertToWorldSpaceAR(cc.v2(event.pos.x, event.pos.y));
        // ListenerManager.dispatch(EventType.DRAG_OPTION, pos);
        this.fillArea.forEach(function (fillNode) {
            fillNode.getComponent(FillArea2_1.default).showHighlight(false);
        });
        if (SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curStep == 0) {
            var isHitArea_1 = this.posInRect(new cc.Vec2(pos.x, pos.y), this.fillArea[0]);
            var isHitArea_2 = this.posInRect(new cc.Vec2(pos.x, pos.y), this.fillArea[1]);
            var isHitArea_3 = this.posInRect(new cc.Vec2(pos.x, pos.y), this.fillArea[2]);
            var isHitArea_4 = this.posInRect(new cc.Vec2(pos.x, pos.y), this.fillArea[3]);
            if ((isHitArea_2 && isHitArea_2) || (isHitArea_2 && isHitArea_4)) {
                this.fillArea[1].getComponent(FillArea2_1.default).showHighlight(true);
            }
            else if (isHitArea_3 && isHitArea_4) {
                this.fillArea[3].getComponent(FillArea2_1.default).showHighlight(true);
            }
            else if (isHitArea_1) {
                this.fillArea[0].getComponent(FillArea2_1.default).showHighlight(true);
            }
            else if (isHitArea_2) {
                this.fillArea[1].getComponent(FillArea2_1.default).showHighlight(true);
            }
            else if (isHitArea_3) {
                this.fillArea[2].getComponent(FillArea2_1.default).showHighlight(true);
            }
            else if (isHitArea_4) {
                this.fillArea[3].getComponent(FillArea2_1.default).showHighlight(true);
            }
        }
        else if (SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curStep == 1) {
            var isHitArea_0 = this.posInRect(new cc.Vec2(pos.x, pos.y), this.fillArea[0]);
            var isHitArea_1 = this.posInRect(new cc.Vec2(pos.x, pos.y), this.fillArea[1]);
            var isHitArea_2 = this.posInRect(new cc.Vec2(pos.x, pos.y), this.fillArea[2]);
            var isHitArea_3 = this.posInRect(new cc.Vec2(pos.x, pos.y), this.fillArea[3]);
            var isHitArea_4 = this.posInRect(new cc.Vec2(pos.x, pos.y), this.fillArea[4]);
            if ((isHitArea_0 && isHitArea_1)) {
                this.fillArea[1].getComponent(FillArea2_1.default).showHighlight(true);
            }
            else if (isHitArea_1 && isHitArea_2) {
                this.fillArea[2].getComponent(FillArea2_1.default).showHighlight(true);
            }
            else if (isHitArea_2 && isHitArea_3) {
                this.fillArea[3].getComponent(FillArea2_1.default).showHighlight(true);
            }
            else if (isHitArea_3 && isHitArea_4) {
                this.fillArea[4].getComponent(FillArea2_1.default).showHighlight(true);
            }
            else if (isHitArea_1) {
                this.fillArea[1].getComponent(FillArea2_1.default).showHighlight(true);
            }
            else if (isHitArea_2) {
                this.fillArea[2].getComponent(FillArea2_1.default).showHighlight(true);
            }
            else if (isHitArea_3) {
                this.fillArea[3].getComponent(FillArea2_1.default).showHighlight(true);
            }
            else if (isHitArea_4) {
                this.fillArea[4].getComponent(FillArea2_1.default).showHighlight(true);
            }
            else if (isHitArea_0) {
                this.fillArea[0].getComponent(FillArea2_1.default).showHighlight(true);
            }
        }
    };
    OptionItem2.prototype.onDragEnd = function (event) {
        this.fillArea.forEach(function (fillNode) {
            fillNode.getComponent(FillArea2_1.default).showHighlight(false);
        });
        var pos = event.target.parent.convertToWorldSpaceAR(cc.v2(event.pos.x, event.pos.y));
        if (SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curStep == 0) {
            if (event.isClick) {
                ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.ROTATE_ITEM, this.index);
                var effect_1 = this.node.getChildByName('putongdianji');
                effect_1.active = true;
                effect_1.position = cc.v3(0, 0);
                Tools_1.Tools.playSpine(effect_1.getComponent(sp.Skeleton), 'animation', false, function () {
                    effect_1.active = false;
                });
            }
            else {
                var isHitArea_0 = this.posInRect(new cc.Vec2(pos.x, pos.y), this.fillArea[0]);
                var isHitArea_1 = this.posInRect(new cc.Vec2(pos.x, pos.y), this.fillArea[1]);
                var isHitArea_2 = this.posInRect(new cc.Vec2(pos.x, pos.y), this.fillArea[2]);
                var isHitArea_3 = this.posInRect(new cc.Vec2(pos.x, pos.y), this.fillArea[3]);
                this.reset();
                if ((isHitArea_1 && isHitArea_2) || (isHitArea_1 && isHitArea_3)) {
                    ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.ON_FILL_ITEM2, { areaIndex: 1, itemIndex: this.index });
                }
                else if (isHitArea_2 && isHitArea_3) {
                    ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.ON_FILL_ITEM2, { areaIndex: 2, itemIndex: this.index });
                }
                else if (isHitArea_0) {
                    ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.ON_FILL_ITEM2, { areaIndex: 0, itemIndex: this.index });
                }
                else if (isHitArea_1) {
                    ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.ON_FILL_ITEM2, { areaIndex: 1, itemIndex: this.index });
                }
                else if (isHitArea_2) {
                    ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.ON_FILL_ITEM2, { areaIndex: 2, itemIndex: this.index });
                }
                else if (isHitArea_3) {
                    ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.ON_FILL_ITEM2, { areaIndex: 3, itemIndex: this.index });
                }
                else {
                    SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["错误提示"], false);
                }
            }
        }
        else if (SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curStep == 1) {
            if (event.isClick) {
                ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.ROTATE_ITEM2, this.index);
                var effect_2 = this.node.getChildByName('putongdianji');
                effect_2.active = true;
                effect_2.position = cc.v3(0, 0);
                Tools_1.Tools.playSpine(effect_2.getComponent(sp.Skeleton), 'animation', false, function () {
                    effect_2.active = false;
                });
            }
            else {
                var isHitArea_0 = this.posInRect(new cc.Vec2(pos.x, pos.y), this.fillArea[0]);
                var isHitArea_1 = this.posInRect(new cc.Vec2(pos.x, pos.y), this.fillArea[1]);
                var isHitArea_2 = this.posInRect(new cc.Vec2(pos.x, pos.y), this.fillArea[2]);
                var isHitArea_3 = this.posInRect(new cc.Vec2(pos.x, pos.y), this.fillArea[3]);
                var isHitArea_4 = this.posInRect(new cc.Vec2(pos.x, pos.y), this.fillArea[4]);
                this.reset();
                if ((isHitArea_0 && isHitArea_1)) {
                    ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.ON_FILL_ITEM3, { areaIndex: 1, itemIndex: this.index });
                }
                else if (isHitArea_1 && isHitArea_2) {
                    ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.ON_FILL_ITEM3, { areaIndex: 2, itemIndex: this.index });
                }
                else if (isHitArea_2 && isHitArea_3) {
                    ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.ON_FILL_ITEM3, { areaIndex: 3, itemIndex: this.index });
                }
                else if (isHitArea_3 && isHitArea_4) {
                    ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.ON_FILL_ITEM3, { areaIndex: 4, itemIndex: this.index });
                }
                else if (isHitArea_1) {
                    ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.ON_FILL_ITEM3, { areaIndex: 1, itemIndex: this.index });
                }
                else if (isHitArea_2) {
                    ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.ON_FILL_ITEM3, { areaIndex: 2, itemIndex: this.index });
                }
                else if (isHitArea_3) {
                    ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.ON_FILL_ITEM3, { areaIndex: 3, itemIndex: this.index });
                }
                else if (isHitArea_4) {
                    ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.ON_FILL_ITEM3, { areaIndex: 4, itemIndex: this.index });
                }
                else if (isHitArea_0) {
                    ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.ON_FILL_ITEM3, { areaIndex: 0, itemIndex: this.index });
                }
                else {
                    SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["错误提示"], false);
                }
            }
        }
    };
    OptionItem2.prototype.onClick = function (event) {
        ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.ON_CLICK_ITEM, { index: this.index, name: this.node.name });
    };
    OptionItem2.prototype.reset = function () {
        this.node.position = this._startPos;
        this.node.parent = this._startParent;
        var effect = this.node.getChildByName('putongdianji');
        effect.active = false;
    };
    OptionItem2.prototype.posInRect = function (pos, rect) {
        var p = rect.parent.convertToWorldSpaceAR(rect.position);
        var angle = -rect.angle;
        var lb = cc.v2(p.x - rect.width / 2, p.y - rect.height / 2);
        var rt = cc.v2(p.x + rect.width / 2, p.y + rect.height / 2);
        var center = cc.v2((lb.x + rt.x) / 2, (lb.y + rt.y) / 2);
        var x = pos.x - center.x;
        var y = pos.y - center.y;
        var x1 = x * Math.cos(angle * Math.PI / 180) - y * Math.sin(angle * Math.PI / 180) + center.x;
        var y1 = x * Math.sin(angle * Math.PI / 180) + y * Math.cos(angle * Math.PI / 180) + center.y;
        var b = x1 >= lb.x && y1 >= lb.y && x1 <= rt.x && y1 <= rt.y;
        return b;
    };
    __decorate([
        property(cc.Integer)
    ], OptionItem2.prototype, "index", void 0);
    __decorate([
        property(cc.Integer)
    ], OptionItem2.prototype, "type", void 0);
    __decorate([
        property(cc.Node)
    ], OptionItem2.prototype, "fillArea", void 0);
    OptionItem2 = __decorate([
        ccclass
    ], OptionItem2);
    return OptionItem2;
}(cc.Component));
exports.default = OptionItem2;

cc._RF.pop();