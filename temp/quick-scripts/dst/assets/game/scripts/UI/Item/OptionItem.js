
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/UI/Item/OptionItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXEl0ZW1cXE9wdGlvbkl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUZBQW9GO0FBQ3BGLCtFQUE4RTtBQUM5RSxxRkFBb0Y7QUFDcEYsbUVBQWtFO0FBQ2xFLCtEQUE4RDtBQUM5RCxrREFBaUQ7QUFFakQsNkNBQTRDO0FBR3RDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXdDLDhCQUFZO0lBQXBEO1FBQUEscUVBK0VDO1FBN0VVLFdBQUssR0FBVyxDQUFDLENBQUM7UUFFakIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBQzFCLGtCQUFZLEdBQVksSUFBSSxDQUFDOztJQXdFekMsQ0FBQztJQXZFYSwyQkFBTSxHQUFoQjtRQUNJLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN4QyxDQUFDO0lBRU0saUNBQVksR0FBbkIsVUFBb0IsR0FBWSxFQUFFLE1BQWU7UUFDN0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7UUFDckIsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUM7SUFDL0IsQ0FBQztJQUVPLGdDQUFXLEdBQW5CLFVBQW9CLEtBQVU7UUFDMUIsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckYsc0RBQXNE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RDtrQkEvRW9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXN0ZW5lck1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL0xpc3RlbmVyTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBTb3VuZE1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL1NvdW5kTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBTeW5jRGF0YU1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL1N5bmNEYXRhTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBIaXRUZXN0IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvVXRpbHMvSGl0VGVzdFwiO1xyXG5pbXBvcnQgeyBUb29scyB9IGZyb20gXCIuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL1V0aWxzL1Rvb2xzXCI7XHJcbmltcG9ydCB7IEV2ZW50VHlwZSB9IGZyb20gXCIuLi8uLi9EYXRhL0V2ZW50VHlwZVwiO1xyXG5pbXBvcnQgRmlsbEFyZWEgZnJvbSBcIi4vRmlsbEFyZWFcIjtcclxuaW1wb3J0IHsgU291bmRDb25maWcgfSBmcm9tIFwiLi9Tb3VuZENvbmZpZ1wiO1xyXG5cclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcHRpb25JdGVtIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxyXG4gICAgcHVibGljIGluZGV4OiBudW1iZXIgPSAwO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIGZpbGxBcmVhOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIF9zdGFydFBvczogY2MuVmVjMyA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9zdGFydFBhcmVudDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3N0YXJ0UGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudDtcclxuICAgICAgICB0aGlzLl9zdGFydFBvcyA9IHRoaXMubm9kZS5wb3NpdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0T3JpZ2luUG9zKHBvczogY2MuVmVjMywgcGFyZW50OiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgdGhpcy5fc3RhcnRQb3MgPSBwb3M7XHJcbiAgICAgICAgdGhpcy5fc3RhcnRQYXJlbnQgPSBwYXJlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkRyYWdTdGFydChldmVudDogYW55KSB7XHJcbiAgICAgICAgbGV0IHBvcyA9IGV2ZW50LnRhcmdldC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKGV2ZW50LnBvcy54LCBldmVudC5wb3MueSkpO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgneWlueWluZycpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25EcmFnTW92ZShldmVudDogYW55KSB7XHJcbiAgICAgICAgbGV0IHBvcyA9IGV2ZW50LnRhcmdldC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKGV2ZW50LnBvcy54LCBldmVudC5wb3MueSkpO1xyXG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5kaXNwYXRjaChFdmVudFR5cGUuRFJBR19PUFRJT04sIHBvcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkRyYWdFbmQoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIGxldCBwb3MgPSBldmVudC50YXJnZXQucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MihldmVudC5wb3MueCwgZXZlbnQucG9zLnkpKTtcclxuICAgICAgICBpZiAoZXZlbnQuaXNDbGljaykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlLnBhcmVudC5uYW1lID09IHRoaXMuZmlsbEFyZWEubmFtZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBlZmZlY3QgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3B1dG9uZ2RpYW5qaScpO1xyXG4gICAgICAgICAgICBlZmZlY3QuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgZWZmZWN0LnBvc2l0aW9uID0gY2MudjMoMCwgMCk7XHJcbiAgICAgICAgICAgIFRvb2xzLnBsYXlTcGluZShlZmZlY3QuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKSwgJ2FuaW1hdGlvbicsIGZhbHNlLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlZmZlY3QuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBMaXN0ZW5lck1hbmFnZXIuZGlzcGF0Y2goRXZlbnRUeXBlLlJPVEFURV9JVEVNLCB0aGlzLmluZGV4KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoSGl0VGVzdC5wb3NJblJlY3QobmV3IGNjLlZlYzIocG9zLngsIHBvcy55KSwgdGhpcy5maWxsQXJlYSkpIHtcclxuICAgICAgICAgICAgICAgIExpc3RlbmVyTWFuYWdlci5kaXNwYXRjaChFdmVudFR5cGUuT05fRklMTF9JVEVNLCB0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoU291bmRDb25maWcuc291ZGxpc3RbXCLplJnor6/mj5DnpLpcIl0sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uQ2xpY2soZGF0YTogYW55KSB7XHJcbiAgICAgICAgaWYgKFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmN1clN0ZXAgPT0gMSkgcmV0dXJuO1xyXG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5kaXNwYXRjaChFdmVudFR5cGUuT05fQ0xJQ0tfSVRFTSwgeyBpbmRleDogdGhpcy5pbmRleCwgbmFtZTogdGhpcy5ub2RlLm5hbWUgfSk7XHJcbiAgICAgICAgbGV0IGVmZmVjdCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgncHV0b25nZGlhbmppJyk7XHJcbiAgICAgICAgZWZmZWN0LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgZWZmZWN0LnBvc2l0aW9uID0gY2MudjMoZGF0YS5wb3MueCwgZGF0YS5wb3MueSk7XHJcbiAgICAgICAgVG9vbHMucGxheVNwaW5lKGVmZmVjdC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLCAnYW5pbWF0aW9uJywgZmFsc2UsICgpID0+IHtcclxuICAgICAgICAgICAgZWZmZWN0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbG9zZUNsaWNrTm9kZSgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2NsaWNrTm9kZScpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaG93Q2xpY2tOb2RlKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnY2xpY2tOb2RlJykuYWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVzZXQoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gdGhpcy5fc3RhcnRQb3M7XHJcbiAgICAgICAgdGhpcy5ub2RlLnBhcmVudCA9IHRoaXMuX3N0YXJ0UGFyZW50O1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgneWlueWluZycpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgbGV0IGVmZmVjdCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgncHV0b25nZGlhbmppJyk7XHJcbiAgICAgICAgZWZmZWN0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnaWNvbicpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdhbmknKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxufVxyXG4iXX0=