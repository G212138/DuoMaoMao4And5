
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/UI/Components/ButtonSync.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '219dc1rDTJCjYWJhJNQFxIJ', 'ButtonSync');
// game/scripts/UI/Components/ButtonSync.ts

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
var T2M_1 = require("../../../../frame/scripts/SDK/T2M");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ButtonSync = /** @class */ (function (_super) {
    __extends(ButtonSync, _super);
    function ButtonSync() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.touchStartEvents = [];
        _this.touchEndEvents = [];
        _this.needScale = false;
        return _this;
    }
    ButtonSync_1 = ButtonSync;
    ButtonSync.prototype.onLoad = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
        this.tagId = this.node.name + this.node.parent.name + this.node.getSiblingIndex();
        this.addEventByT2M();
    };
    ButtonSync.prototype.addTouchEvent = function (target, component, handlers) {
        this.touchStartEvents.push(new ButtonSync_1.EventHandler());
        this.touchStartEvents[0].target = target;
        this.touchStartEvents[0].component = component;
        this.touchStartEvents[0].handler = handlers[0];
        this.touchEndEvents.push(new ButtonSync_1.EventHandler());
        this.touchEndEvents[0].target = target;
        this.touchEndEvents[0].component = component;
        this.touchEndEvents[0].handler = handlers[1];
    };
    ButtonSync.prototype.touchStart = function (event) {
        var type = 'touchStart' + this.tagId;
        T2M_1.T2M.dispatch(type, null);
    };
    ButtonSync.prototype.touchEnd = function (event) {
        var pos = this.node.parent.convertToNodeSpaceAR(event.getLocation());
        var type = 'touchEnd' + this.tagId;
        T2M_1.T2M.dispatch(type, { pos: { x: pos.x, y: pos.y } });
    };
    ButtonSync.prototype.addEventByT2M = function () {
        T2M_1.T2M.addSyncEventListener('touchStart' + this.tagId, this.touchStartHandler.bind(this));
        T2M_1.T2M.addSyncEventListener('touchEnd' + this.tagId, this.touchEndHandler.bind(this));
    };
    ButtonSync.prototype.touchStartHandler = function (data) {
        if (this.needScale) {
            this.node.scale = 1.1;
        }
        for (var _i = 0, _a = this.touchStartEvents; _i < _a.length; _i++) {
            var eventHandler = _a[_i];
            eventHandler.emit([{ target: this.node }]);
        }
    };
    ButtonSync.prototype.touchEndHandler = function (data) {
        if (this.needScale) {
            this.node.scale = 1;
        }
        for (var _i = 0, _a = this.touchEndEvents; _i < _a.length; _i++) {
            var eventHandler = _a[_i];
            eventHandler.emit([{ target: this.node, pos: { x: data.pos.x, y: data.pos.y } }]);
        }
    };
    var ButtonSync_1;
    __decorate([
        property({ type: [cc.Component.EventHandler] })
    ], ButtonSync.prototype, "touchStartEvents", void 0);
    __decorate([
        property({ type: [cc.Component.EventHandler] })
    ], ButtonSync.prototype, "touchEndEvents", void 0);
    __decorate([
        property(cc.Boolean)
    ], ButtonSync.prototype, "needScale", void 0);
    ButtonSync = ButtonSync_1 = __decorate([
        ccclass
    ], ButtonSync);
    return ButtonSync;
}(cc.Component));
exports.default = ButtonSync;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXENvbXBvbmVudHNcXEJ1dHRvblN5bmMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseURBQXdEO0FBR2xELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXdDLDhCQUFZO0lBQXBEO1FBQUEscUVBZ0VDO1FBOURXLHNCQUFnQixHQUFnQyxFQUFFLENBQUM7UUFFbkQsb0JBQWMsR0FBZ0MsRUFBRSxDQUFDO1FBRWpELGVBQVMsR0FBWSxLQUFLLENBQUM7O0lBMER2QyxDQUFDO21CQWhFb0IsVUFBVTtJQVUzQiwyQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNsRixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVNLGtDQUFhLEdBQXBCLFVBQXFCLE1BQWUsRUFBRSxTQUFpQixFQUFFLFFBQWtCO1FBQ3ZFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxZQUFVLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN6QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMvQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUUvQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLFlBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN2QyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDN0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFTywrQkFBVSxHQUFsQixVQUFtQixLQUEwQjtRQUN6QyxJQUFJLElBQUksR0FBRyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNyQyxTQUFHLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRU8sNkJBQVEsR0FBaEIsVUFBaUIsS0FBMEI7UUFDdkMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDckUsSUFBSSxJQUFJLEdBQUcsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDbkMsU0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRU8sa0NBQWEsR0FBckI7UUFDSSxTQUFHLENBQUMsb0JBQW9CLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3ZGLFNBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3ZGLENBQUM7SUFFTyxzQ0FBaUIsR0FBekIsVUFBMEIsSUFBSTtRQUMxQixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1NBQ3pCO1FBRUQsS0FBeUIsVUFBcUIsRUFBckIsS0FBQSxJQUFJLENBQUMsZ0JBQWdCLEVBQXJCLGNBQXFCLEVBQXJCLElBQXFCLEVBQUU7WUFBM0MsSUFBSSxZQUFZLFNBQUE7WUFDakIsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDOUM7SUFDTCxDQUFDO0lBRU8sb0NBQWUsR0FBdkIsVUFBd0IsSUFBSTtRQUN4QixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1NBQ3ZCO1FBQ0QsS0FBeUIsVUFBbUIsRUFBbkIsS0FBQSxJQUFJLENBQUMsY0FBYyxFQUFuQixjQUFtQixFQUFuQixJQUFtQixFQUFFO1lBQXpDLElBQUksWUFBWSxTQUFBO1lBQ2pCLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsQ0FBQztTQUNwRjtJQUNMLENBQUM7O0lBN0REO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDO3dEQUNXO0lBRTNEO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDO3NEQUNTO0lBRXpEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7aURBQ2M7SUFObEIsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQWdFOUI7SUFBRCxpQkFBQztDQWhFRCxBQWdFQyxDQWhFdUMsRUFBRSxDQUFDLFNBQVMsR0FnRW5EO2tCQWhFb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFQyTSB9IGZyb20gXCIuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL1NESy9UMk1cIjtcclxuXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uU3luYyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBbY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcl0gfSlcclxuICAgIHByaXZhdGUgdG91Y2hTdGFydEV2ZW50czogY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcltdID0gW107XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBbY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcl0gfSlcclxuICAgIHByaXZhdGUgdG91Y2hFbmRFdmVudHM6IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXJbXSA9IFtdO1xyXG4gICAgQHByb3BlcnR5KGNjLkJvb2xlYW4pXHJcbiAgICBwcml2YXRlIG5lZWRTY2FsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgdGFnSWQ6IHN0cmluZztcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLnRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMudG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMudG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMudGFnSWQgPSB0aGlzLm5vZGUubmFtZSArIHRoaXMubm9kZS5wYXJlbnQubmFtZSArIHRoaXMubm9kZS5nZXRTaWJsaW5nSW5kZXgoKTtcclxuICAgICAgICB0aGlzLmFkZEV2ZW50QnlUMk0oKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkVG91Y2hFdmVudCh0YXJnZXQ6IGNjLk5vZGUsIGNvbXBvbmVudDogc3RyaW5nLCBoYW5kbGVyczogc3RyaW5nW10pIHtcclxuICAgICAgICB0aGlzLnRvdWNoU3RhcnRFdmVudHMucHVzaChuZXcgQnV0dG9uU3luYy5FdmVudEhhbmRsZXIoKSk7XHJcbiAgICAgICAgdGhpcy50b3VjaFN0YXJ0RXZlbnRzWzBdLnRhcmdldCA9IHRhcmdldDtcclxuICAgICAgICB0aGlzLnRvdWNoU3RhcnRFdmVudHNbMF0uY29tcG9uZW50ID0gY29tcG9uZW50O1xyXG4gICAgICAgIHRoaXMudG91Y2hTdGFydEV2ZW50c1swXS5oYW5kbGVyID0gaGFuZGxlcnNbMF07XHJcblxyXG4gICAgICAgIHRoaXMudG91Y2hFbmRFdmVudHMucHVzaChuZXcgQnV0dG9uU3luYy5FdmVudEhhbmRsZXIoKSk7XHJcbiAgICAgICAgdGhpcy50b3VjaEVuZEV2ZW50c1swXS50YXJnZXQgPSB0YXJnZXQ7XHJcbiAgICAgICAgdGhpcy50b3VjaEVuZEV2ZW50c1swXS5jb21wb25lbnQgPSBjb21wb25lbnQ7XHJcbiAgICAgICAgdGhpcy50b3VjaEVuZEV2ZW50c1swXS5oYW5kbGVyID0gaGFuZGxlcnNbMV07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0b3VjaFN0YXJ0KGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgbGV0IHR5cGUgPSAndG91Y2hTdGFydCcgKyB0aGlzLnRhZ0lkO1xyXG4gICAgICAgIFQyTS5kaXNwYXRjaCh0eXBlLCBudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRvdWNoRW5kKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIoZXZlbnQuZ2V0TG9jYXRpb24oKSk7XHJcbiAgICAgICAgbGV0IHR5cGUgPSAndG91Y2hFbmQnICsgdGhpcy50YWdJZDtcclxuICAgICAgICBUMk0uZGlzcGF0Y2godHlwZSwge3BvczogeyB4OiBwb3MueCwgeTogcG9zLnkgfX0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkRXZlbnRCeVQyTSgpIHtcclxuICAgICAgICBUMk0uYWRkU3luY0V2ZW50TGlzdGVuZXIoJ3RvdWNoU3RhcnQnICsgdGhpcy50YWdJZCwgdGhpcy50b3VjaFN0YXJ0SGFuZGxlci5iaW5kKHRoaXMpKTtcclxuICAgICAgICBUMk0uYWRkU3luY0V2ZW50TGlzdGVuZXIoJ3RvdWNoRW5kJyArIHRoaXMudGFnSWQsIHRoaXMudG91Y2hFbmRIYW5kbGVyLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdG91Y2hTdGFydEhhbmRsZXIoZGF0YSkge1xyXG4gICAgICAgIGlmICh0aGlzLm5lZWRTY2FsZSkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGUgPSAxLjE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGZvciAobGV0IGV2ZW50SGFuZGxlciBvZiB0aGlzLnRvdWNoU3RhcnRFdmVudHMpIHtcclxuICAgICAgICAgICAgZXZlbnRIYW5kbGVyLmVtaXQoW3sgdGFyZ2V0OiB0aGlzLm5vZGUgfV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRvdWNoRW5kSGFuZGxlcihkYXRhKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubmVlZFNjYWxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZSA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGV2ZW50SGFuZGxlciBvZiB0aGlzLnRvdWNoRW5kRXZlbnRzKSB7XHJcbiAgICAgICAgICAgIGV2ZW50SGFuZGxlci5lbWl0KFt7IHRhcmdldDogdGhpcy5ub2RlICxwb3M6IHsgeDogZGF0YS5wb3MueCwgeTogZGF0YS5wb3MueSB9fV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=