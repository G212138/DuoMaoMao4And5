
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/UI/Item/OptionItem2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXEl0ZW1cXE9wdGlvbkl0ZW0yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFGQUFvRjtBQUNwRiwrRUFBOEU7QUFDOUUscUZBQW9GO0FBRXBGLCtEQUE4RDtBQUM5RCxrREFBaUQ7QUFDakQseUNBQW9DO0FBQ3BDLDZDQUE0QztBQUd0QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQXNMQztRQW5MVSxXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBRWxCLFVBQUksR0FBVyxDQUFDLENBQUM7UUFFaEIsY0FBUSxHQUFjLEVBQUUsQ0FBQztRQUV6QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBQzFCLGtCQUFZLEdBQVksSUFBSSxDQUFDOztJQTRLekMsQ0FBQztJQTFLYSw0QkFBTSxHQUFoQjtRQUNJLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN4QyxDQUFDO0lBRU8saUNBQVcsR0FBbkIsVUFBb0IsS0FBVTtRQUMxQixJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRixzREFBc0Q7SUFDMUQsQ0FBQztJQUVPLGdDQUFVLEdBQWxCLFVBQW1CLEtBQVU7UUFDekIsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMscUJB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QVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlFLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5RSxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUUsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlFLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUU5RSxJQUFJLENBQUMsV0FBVyxJQUFJLFdBQVcsQ0FBQyxFQUFFO2dCQUM5QixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxtQkFBUyxDQUFDLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2hFO2lCQUFNLElBQUksV0FBVyxJQUFJLFdBQVcsRUFBRTtnQkFDbkMs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RSxDQUFDLFNBQVMsR0FzTHBEO2tCQXRMb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpc3RlbmVyTWFuYWdlciB9IGZyb20gXCIuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL01hbmFnZXIvTGlzdGVuZXJNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFNvdW5kTWFuYWdlciB9IGZyb20gXCIuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL01hbmFnZXIvU291bmRNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFN5bmNEYXRhTWFuYWdlciB9IGZyb20gXCIuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL01hbmFnZXIvU3luY0RhdGFNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IEhpdFRlc3QgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9VdGlscy9IaXRUZXN0XCI7XHJcbmltcG9ydCB7IFRvb2xzIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvVXRpbHMvVG9vbHNcIjtcclxuaW1wb3J0IHsgRXZlbnRUeXBlIH0gZnJvbSBcIi4uLy4uL0RhdGEvRXZlbnRUeXBlXCI7XHJcbmltcG9ydCBGaWxsQXJlYTIgZnJvbSBcIi4vRmlsbEFyZWEyXCI7XHJcbmltcG9ydCB7IFNvdW5kQ29uZmlnIH0gZnJvbSBcIi4vU291bmRDb25maWdcIjtcclxuXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3B0aW9uSXRlbTIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxyXG4gICAgcHVibGljIGluZGV4OiBudW1iZXIgPSAwO1xyXG4gICAgQHByb3BlcnR5KGNjLkludGVnZXIpXHJcbiAgICBwdWJsaWMgdHlwZTogbnVtYmVyID0gMDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBmaWxsQXJlYTogY2MuTm9kZVtdID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBfc3RhcnRQb3M6IGNjLlZlYzMgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfc3RhcnRQYXJlbnQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fc3RhcnRQYXJlbnQgPSB0aGlzLm5vZGUucGFyZW50O1xyXG4gICAgICAgIHRoaXMuX3N0YXJ0UG9zID0gdGhpcy5ub2RlLnBvc2l0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25EcmFnU3RhcnQoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIGxldCBwb3MgPSBldmVudC50YXJnZXQucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MihldmVudC5wb3MueCwgZXZlbnQucG9zLnkpKTtcclxuICAgICAgICAvLyB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3lpbnlpbmcnKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uRHJhZ01vdmUoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIGxldCBwb3MgPSBldmVudC50YXJnZXQucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MihldmVudC5wb3MueCwgZXZlbnQucG9zLnkpKTtcclxuICAgICAgICAvLyBMaXN0ZW5lck1hbmFnZXIuZGlzcGF0Y2goRXZlbnRUeXBlLkRSQUdfT1BUSU9OLCBwb3MpO1xyXG4gICAgICAgIHRoaXMuZmlsbEFyZWEuZm9yRWFjaCgoZmlsbE5vZGUpID0+IHtcclxuICAgICAgICAgICAgZmlsbE5vZGUuZ2V0Q29tcG9uZW50KEZpbGxBcmVhMikuc2hvd0hpZ2hsaWdodChmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jdXJTdGVwID09IDApIHtcclxuICAgICAgICAgICAgbGV0IGlzSGl0QXJlYV8xID0gdGhpcy5wb3NJblJlY3QobmV3IGNjLlZlYzIocG9zLngsIHBvcy55KSwgdGhpcy5maWxsQXJlYVswXSk7XHJcbiAgICAgICAgICAgIGxldCBpc0hpdEFyZWFfMiA9IHRoaXMucG9zSW5SZWN0KG5ldyBjYy5WZWMyKHBvcy54LCBwb3MueSksIHRoaXMuZmlsbEFyZWFbMV0pO1xyXG4gICAgICAgICAgICBsZXQgaXNIaXRBcmVhXzMgPSB0aGlzLnBvc0luUmVjdChuZXcgY2MuVmVjMihwb3MueCwgcG9zLnkpLCB0aGlzLmZpbGxBcmVhWzJdKTtcclxuICAgICAgICAgICAgbGV0IGlzSGl0QXJlYV80ID0gdGhpcy5wb3NJblJlY3QobmV3IGNjLlZlYzIocG9zLngsIHBvcy55KSwgdGhpcy5maWxsQXJlYVszXSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoKGlzSGl0QXJlYV8yICYmIGlzSGl0QXJlYV8yKSB8fCAoaXNIaXRBcmVhXzIgJiYgaXNIaXRBcmVhXzQpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGxBcmVhWzFdLmdldENvbXBvbmVudChGaWxsQXJlYTIpLnNob3dIaWdobGlnaHQodHJ1ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNIaXRBcmVhXzMgJiYgaXNIaXRBcmVhXzQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsbEFyZWFbM10uZ2V0Q29tcG9uZW50KEZpbGxBcmVhMikuc2hvd0hpZ2hsaWdodCh0cnVlKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChpc0hpdEFyZWFfMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWxsQXJlYVswXS5nZXRDb21wb25lbnQoRmlsbEFyZWEyKS5zaG93SGlnaGxpZ2h0KHRydWUpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzSGl0QXJlYV8yKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGxBcmVhWzFdLmdldENvbXBvbmVudChGaWxsQXJlYTIpLnNob3dIaWdobGlnaHQodHJ1ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNIaXRBcmVhXzMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsbEFyZWFbMl0uZ2V0Q29tcG9uZW50KEZpbGxBcmVhMikuc2hvd0hpZ2hsaWdodCh0cnVlKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChpc0hpdEFyZWFfNCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWxsQXJlYVszXS5nZXRDb21wb25lbnQoRmlsbEFyZWEyKS5zaG93SGlnaGxpZ2h0KHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jdXJTdGVwID09IDEpIHtcclxuICAgICAgICAgICAgbGV0IGlzSGl0QXJlYV8wID0gdGhpcy5wb3NJblJlY3QobmV3IGNjLlZlYzIocG9zLngsIHBvcy55KSwgdGhpcy5maWxsQXJlYVswXSk7XHJcbiAgICAgICAgICAgIGxldCBpc0hpdEFyZWFfMSA9IHRoaXMucG9zSW5SZWN0KG5ldyBjYy5WZWMyKHBvcy54LCBwb3MueSksIHRoaXMuZmlsbEFyZWFbMV0pO1xyXG4gICAgICAgICAgICBsZXQgaXNIaXRBcmVhXzIgPSB0aGlzLnBvc0luUmVjdChuZXcgY2MuVmVjMihwb3MueCwgcG9zLnkpLCB0aGlzLmZpbGxBcmVhWzJdKTtcclxuICAgICAgICAgICAgbGV0IGlzSGl0QXJlYV8zID0gdGhpcy5wb3NJblJlY3QobmV3IGNjLlZlYzIocG9zLngsIHBvcy55KSwgdGhpcy5maWxsQXJlYVszXSk7XHJcbiAgICAgICAgICAgIGxldCBpc0hpdEFyZWFfNCA9IHRoaXMucG9zSW5SZWN0KG5ldyBjYy5WZWMyKHBvcy54LCBwb3MueSksIHRoaXMuZmlsbEFyZWFbNF0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKChpc0hpdEFyZWFfMCAmJiBpc0hpdEFyZWFfMSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsbEFyZWFbMV0uZ2V0Q29tcG9uZW50KEZpbGxBcmVhMikuc2hvd0hpZ2hsaWdodCh0cnVlKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChpc0hpdEFyZWFfMSAmJiBpc0hpdEFyZWFfMikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWxsQXJlYVsyXS5nZXRDb21wb25lbnQoRmlsbEFyZWEyKS5zaG93SGlnaGxpZ2h0KHRydWUpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzSGl0QXJlYV8yICYmIGlzSGl0QXJlYV8zKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGxBcmVhWzNdLmdldENvbXBvbmVudChGaWxsQXJlYTIpLnNob3dIaWdobGlnaHQodHJ1ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNIaXRBcmVhXzMgJiYgaXNIaXRBcmVhXzQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsbEFyZWFbNF0uZ2V0Q29tcG9uZW50KEZpbGxBcmVhMikuc2hvd0hpZ2hsaWdodCh0cnVlKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChpc0hpdEFyZWFfMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWxsQXJlYVsxXS5nZXRDb21wb25lbnQoRmlsbEFyZWEyKS5zaG93SGlnaGxpZ2h0KHRydWUpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzSGl0QXJlYV8yKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGxBcmVhWzJdLmdldENvbXBvbmVudChGaWxsQXJlYTIpLnNob3dIaWdobGlnaHQodHJ1ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNIaXRBcmVhXzMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsbEFyZWFbM10uZ2V0Q29tcG9uZW50KEZpbGxBcmVhMikuc2hvd0hpZ2hsaWdodCh0cnVlKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChpc0hpdEFyZWFfNCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWxsQXJlYVs0XS5nZXRDb21wb25lbnQoRmlsbEFyZWEyKS5zaG93SGlnaGxpZ2h0KHRydWUpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzSGl0QXJlYV8wKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGxBcmVhWzBdLmdldENvbXBvbmVudChGaWxsQXJlYTIpLnNob3dIaWdobGlnaHQodHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkRyYWdFbmQoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIHRoaXMuZmlsbEFyZWEuZm9yRWFjaCgoZmlsbE5vZGUpID0+IHtcclxuICAgICAgICAgICAgZmlsbE5vZGUuZ2V0Q29tcG9uZW50KEZpbGxBcmVhMikuc2hvd0hpZ2hsaWdodChmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0IHBvcyA9IGV2ZW50LnRhcmdldC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKGV2ZW50LnBvcy54LCBldmVudC5wb3MueSkpO1xyXG4gICAgICAgIGlmIChTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jdXJTdGVwID09IDApIHtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LmlzQ2xpY2spIHtcclxuICAgICAgICAgICAgICAgIExpc3RlbmVyTWFuYWdlci5kaXNwYXRjaChFdmVudFR5cGUuUk9UQVRFX0lURU0sIHRoaXMuaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGVmZmVjdCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgncHV0b25nZGlhbmppJyk7XHJcbiAgICAgICAgICAgICAgICBlZmZlY3QuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGVmZmVjdC5wb3NpdGlvbiA9IGNjLnYzKDAsIDApO1xyXG4gICAgICAgICAgICAgICAgVG9vbHMucGxheVNwaW5lKGVmZmVjdC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLCAnYW5pbWF0aW9uJywgZmFsc2UsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBlZmZlY3QuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBpc0hpdEFyZWFfMCA9IHRoaXMucG9zSW5SZWN0KG5ldyBjYy5WZWMyKHBvcy54LCBwb3MueSksIHRoaXMuZmlsbEFyZWFbMF0pO1xyXG4gICAgICAgICAgICAgICAgbGV0IGlzSGl0QXJlYV8xID0gdGhpcy5wb3NJblJlY3QobmV3IGNjLlZlYzIocG9zLngsIHBvcy55KSwgdGhpcy5maWxsQXJlYVsxXSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgaXNIaXRBcmVhXzIgPSB0aGlzLnBvc0luUmVjdChuZXcgY2MuVmVjMihwb3MueCwgcG9zLnkpLCB0aGlzLmZpbGxBcmVhWzJdKTtcclxuICAgICAgICAgICAgICAgIGxldCBpc0hpdEFyZWFfMyA9IHRoaXMucG9zSW5SZWN0KG5ldyBjYy5WZWMyKHBvcy54LCBwb3MueSksIHRoaXMuZmlsbEFyZWFbM10pO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoKGlzSGl0QXJlYV8xICYmIGlzSGl0QXJlYV8yKSB8fCAoaXNIaXRBcmVhXzEgJiYgaXNIaXRBcmVhXzMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLmRpc3BhdGNoKEV2ZW50VHlwZS5PTl9GSUxMX0lURU0yLCB7IGFyZWFJbmRleDogMSwgaXRlbUluZGV4OiB0aGlzLmluZGV4IH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpc0hpdEFyZWFfMiAmJiBpc0hpdEFyZWFfMykge1xyXG4gICAgICAgICAgICAgICAgICAgIExpc3RlbmVyTWFuYWdlci5kaXNwYXRjaChFdmVudFR5cGUuT05fRklMTF9JVEVNMiwgeyBhcmVhSW5kZXg6IDIsIGl0ZW1JbmRleDogdGhpcy5pbmRleCB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNIaXRBcmVhXzApIHtcclxuICAgICAgICAgICAgICAgICAgICBMaXN0ZW5lck1hbmFnZXIuZGlzcGF0Y2goRXZlbnRUeXBlLk9OX0ZJTExfSVRFTTIsIHsgYXJlYUluZGV4OiAwLCBpdGVtSW5kZXg6IHRoaXMuaW5kZXggfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlzSGl0QXJlYV8xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLmRpc3BhdGNoKEV2ZW50VHlwZS5PTl9GSUxMX0lURU0yLCB7IGFyZWFJbmRleDogMSwgaXRlbUluZGV4OiB0aGlzLmluZGV4IH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpc0hpdEFyZWFfMikge1xyXG4gICAgICAgICAgICAgICAgICAgIExpc3RlbmVyTWFuYWdlci5kaXNwYXRjaChFdmVudFR5cGUuT05fRklMTF9JVEVNMiwgeyBhcmVhSW5kZXg6IDIsIGl0ZW1JbmRleDogdGhpcy5pbmRleCB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNIaXRBcmVhXzMpIHtcclxuICAgICAgICAgICAgICAgICAgICBMaXN0ZW5lck1hbmFnZXIuZGlzcGF0Y2goRXZlbnRUeXBlLk9OX0ZJTExfSVRFTTIsIHsgYXJlYUluZGV4OiAzLCBpdGVtSW5kZXg6IHRoaXMuaW5kZXggfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KFNvdW5kQ29uZmlnLnNvdWRsaXN0W1wi6ZSZ6K+v5o+Q56S6XCJdLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmN1clN0ZXAgPT0gMSkge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQuaXNDbGljaykge1xyXG4gICAgICAgICAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLmRpc3BhdGNoKEV2ZW50VHlwZS5ST1RBVEVfSVRFTTIsIHRoaXMuaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGVmZmVjdCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgncHV0b25nZGlhbmppJyk7XHJcbiAgICAgICAgICAgICAgICBlZmZlY3QuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGVmZmVjdC5wb3NpdGlvbiA9IGNjLnYzKDAsIDApO1xyXG4gICAgICAgICAgICAgICAgVG9vbHMucGxheVNwaW5lKGVmZmVjdC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLCAnYW5pbWF0aW9uJywgZmFsc2UsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBlZmZlY3QuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBpc0hpdEFyZWFfMCA9IHRoaXMucG9zSW5SZWN0KG5ldyBjYy5WZWMyKHBvcy54LCBwb3MueSksIHRoaXMuZmlsbEFyZWFbMF0pO1xyXG4gICAgICAgICAgICAgICAgbGV0IGlzSGl0QXJlYV8xID0gdGhpcy5wb3NJblJlY3QobmV3IGNjLlZlYzIocG9zLngsIHBvcy55KSwgdGhpcy5maWxsQXJlYVsxXSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgaXNIaXRBcmVhXzIgPSB0aGlzLnBvc0luUmVjdChuZXcgY2MuVmVjMihwb3MueCwgcG9zLnkpLCB0aGlzLmZpbGxBcmVhWzJdKTtcclxuICAgICAgICAgICAgICAgIGxldCBpc0hpdEFyZWFfMyA9IHRoaXMucG9zSW5SZWN0KG5ldyBjYy5WZWMyKHBvcy54LCBwb3MueSksIHRoaXMuZmlsbEFyZWFbM10pO1xyXG4gICAgICAgICAgICAgICAgbGV0IGlzSGl0QXJlYV80ID0gdGhpcy5wb3NJblJlY3QobmV3IGNjLlZlYzIocG9zLngsIHBvcy55KSwgdGhpcy5maWxsQXJlYVs0XSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKChpc0hpdEFyZWFfMCAmJiBpc0hpdEFyZWFfMSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBMaXN0ZW5lck1hbmFnZXIuZGlzcGF0Y2goRXZlbnRUeXBlLk9OX0ZJTExfSVRFTTMsIHsgYXJlYUluZGV4OiAxLCBpdGVtSW5kZXg6IHRoaXMuaW5kZXggfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlzSGl0QXJlYV8xICYmIGlzSGl0QXJlYV8yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLmRpc3BhdGNoKEV2ZW50VHlwZS5PTl9GSUxMX0lURU0zLCB7IGFyZWFJbmRleDogMiwgaXRlbUluZGV4OiB0aGlzLmluZGV4IH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpc0hpdEFyZWFfMiAmJiBpc0hpdEFyZWFfMykge1xyXG4gICAgICAgICAgICAgICAgICAgIExpc3RlbmVyTWFuYWdlci5kaXNwYXRjaChFdmVudFR5cGUuT05fRklMTF9JVEVNMywgeyBhcmVhSW5kZXg6IDMsIGl0ZW1JbmRleDogdGhpcy5pbmRleCB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNIaXRBcmVhXzMgJiYgaXNIaXRBcmVhXzQpIHtcclxuICAgICAgICAgICAgICAgICAgICBMaXN0ZW5lck1hbmFnZXIuZGlzcGF0Y2goRXZlbnRUeXBlLk9OX0ZJTExfSVRFTTMsIHsgYXJlYUluZGV4OiA0LCBpdGVtSW5kZXg6IHRoaXMuaW5kZXggfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlzSGl0QXJlYV8xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLmRpc3BhdGNoKEV2ZW50VHlwZS5PTl9GSUxMX0lURU0zLCB7IGFyZWFJbmRleDogMSwgaXRlbUluZGV4OiB0aGlzLmluZGV4IH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpc0hpdEFyZWFfMikge1xyXG4gICAgICAgICAgICAgICAgICAgIExpc3RlbmVyTWFuYWdlci5kaXNwYXRjaChFdmVudFR5cGUuT05fRklMTF9JVEVNMywgeyBhcmVhSW5kZXg6IDIsIGl0ZW1JbmRleDogdGhpcy5pbmRleCB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNIaXRBcmVhXzMpIHtcclxuICAgICAgICAgICAgICAgICAgICBMaXN0ZW5lck1hbmFnZXIuZGlzcGF0Y2goRXZlbnRUeXBlLk9OX0ZJTExfSVRFTTMsIHsgYXJlYUluZGV4OiAzLCBpdGVtSW5kZXg6IHRoaXMuaW5kZXggfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlzSGl0QXJlYV80KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLmRpc3BhdGNoKEV2ZW50VHlwZS5PTl9GSUxMX0lURU0zLCB7IGFyZWFJbmRleDogNCwgaXRlbUluZGV4OiB0aGlzLmluZGV4IH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpc0hpdEFyZWFfMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIExpc3RlbmVyTWFuYWdlci5kaXNwYXRjaChFdmVudFR5cGUuT05fRklMTF9JVEVNMywgeyBhcmVhSW5kZXg6IDAsIGl0ZW1JbmRleDogdGhpcy5pbmRleCB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoU291bmRDb25maWcuc291ZGxpc3RbXCLplJnor6/mj5DnpLpcIl0sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uQ2xpY2soZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5kaXNwYXRjaChFdmVudFR5cGUuT05fQ0xJQ0tfSVRFTSwgeyBpbmRleDogdGhpcy5pbmRleCwgbmFtZTogdGhpcy5ub2RlLm5hbWUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHRoaXMuX3N0YXJ0UG9zO1xyXG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQgPSB0aGlzLl9zdGFydFBhcmVudDtcclxuXHJcbiAgICAgICAgbGV0IGVmZmVjdCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgncHV0b25nZGlhbmppJyk7XHJcbiAgICAgICAgZWZmZWN0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcG9zSW5SZWN0KHBvczogY2MuVmVjMiwgcmVjdDogY2MuTm9kZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGxldCBwID0gcmVjdC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHJlY3QucG9zaXRpb24pO1xyXG4gICAgICAgIGxldCBhbmdsZSA9IC1yZWN0LmFuZ2xlO1xyXG4gICAgICAgIGxldCBsYiA9IGNjLnYyKHAueCAtIHJlY3Qud2lkdGggLyAyLCBwLnkgLSByZWN0LmhlaWdodCAvIDIpO1xyXG4gICAgICAgIGxldCBydCA9IGNjLnYyKHAueCArIHJlY3Qud2lkdGggLyAyLCBwLnkgKyByZWN0LmhlaWdodCAvIDIpO1xyXG4gICAgICAgIGxldCBjZW50ZXIgPSBjYy52MigobGIueCArIHJ0LngpIC8gMiwgKGxiLnkgKyBydC55KSAvIDIpO1xyXG4gICAgICAgIGxldCB4ID0gcG9zLnggLSBjZW50ZXIueDtcclxuICAgICAgICBsZXQgeSA9IHBvcy55IC0gY2VudGVyLnk7XHJcbiAgICAgICAgbGV0IHgxID0geCAqIE1hdGguY29zKGFuZ2xlICogTWF0aC5QSSAvIDE4MCkgLSB5ICogTWF0aC5zaW4oYW5nbGUgKiBNYXRoLlBJIC8gMTgwKSArIGNlbnRlci54O1xyXG4gICAgICAgIGxldCB5MSA9IHggKiBNYXRoLnNpbihhbmdsZSAqIE1hdGguUEkgLyAxODApICsgeSAqIE1hdGguY29zKGFuZ2xlICogTWF0aC5QSSAvIDE4MCkgKyBjZW50ZXIueTtcclxuICAgICAgICBsZXQgYiA9IHgxID49IGxiLnggJiYgeTEgPj0gbGIueSAmJiB4MSA8PSBydC54ICYmIHkxIDw9IHJ0Lnk7XHJcbiAgICAgICAgcmV0dXJuIGI7XHJcbiAgICB9XHJcbn1cclxuIl19