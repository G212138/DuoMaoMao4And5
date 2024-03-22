
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/UI/panel/GamePanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '246c2OOkGlKHoa6ZJOVEHI+', 'GamePanel');
// game/scripts/UI/panel/GamePanel.ts

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
var SyncDataManager_1 = require("../../../../frame/scripts/Manager/SyncDataManager");
var BaseGamePanel_1 = require("../../../../frame/scripts/UI/Panel/BaseGamePanel");
var EventType_1 = require("../../Data/EventType");
var EditorManager_1 = require("../../Manager/EditorManager");
var Duomaomao5_2_1 = require("../Item/Duomaomao5_2");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GamePanel = /** @class */ (function (_super) {
    __extends(GamePanel, _super);
    function GamePanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.gameLevel = [];
        return _this;
    }
    GamePanel.prototype.start = function () {
        _super.prototype.start.call(this);
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.GAME_OVER, this.gameOver, this);
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.SUBMIT, this.submit, this);
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.ON_NEXT_STEP, this.onNextStep, this);
    };
    GamePanel.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.GAME_OVER, this.gameOver, this);
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.SUBMIT, this.submit, this);
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.ON_NEXT_STEP, this.onNextStep, this);
    };
    GamePanel.prototype.onNextStep = function () {
        this.node.getChildByName('DuoMaoMao5').active = false;
        this.node.getChildByName('DuoMaoMao5_2').active = true;
        this.node.getChildByName('DuoMaoMao5_2').getComponent(Duomaomao5_2_1.default).init(false);
    };
    GamePanel.prototype.submit = function (isRight) {
        if (isRight) {
            this.answerRight(true);
        }
        else {
            this.answerWrong(true);
        }
    };
    /**
     * 游戏入口
     * 这里已经拿到数据
     */
    GamePanel.prototype.setPanel = function () {
        _super.prototype.setPanel.call(this);
        // TODO 业务逻辑        
        for (var i = 0; i < this.gameLevel.length; i++) {
            this.gameLevel[i].active = false;
        }
        if (EditorManager_1.EditorManager.editorData.gameIndex == 0) {
            this.gameLevel[0].active = true;
        }
        else {
            if (SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curStep == 0) {
                this.gameLevel[1].active = true;
            }
            else {
                this.gameLevel[2].active = true;
            }
        }
        ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.ENTER_GAME, false);
    };
    /**
     * 心跳回调（当actionId不相等时才会触发）
     * @param recovery
     */
    GamePanel.prototype.onRecoveryData = function (recovery) {
        _super.prototype.onRecoveryData.call(this, recovery);
        for (var i = 0; i < this.gameLevel.length; i++) {
            this.gameLevel[i].active = false;
        }
        if (EditorManager_1.EditorManager.editorData.gameIndex == 0) {
            this.gameLevel[0].active = true;
        }
        else {
            if (SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curStep == 0) {
                this.gameLevel[1].active = true;
            }
            else {
                this.gameLevel[2].active = true;
            }
        }
        ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.ENTER_GAME, true);
        // ListenerManager.dispatch(EventType.GAME_RECONNECT);
    };
    /**
     * 作答正确
     * 父类实现了数据上报
     * @param isCurLevelFinish 本关是否完成
     */
    GamePanel.prototype.answerRight = function (isCurLevelFinish) {
        _super.prototype.answerRight.call(this, isCurLevelFinish);
    };
    /**
     * 作答错误
     * 父类实现了数据上报
     * @param isCurLevelFinish 本关是否完成
     */
    GamePanel.prototype.answerWrong = function (isCurLevelFinish) {
        if (isCurLevelFinish === void 0) { isCurLevelFinish = false; }
        _super.prototype.answerWrong.call(this, isCurLevelFinish);
    };
    /**
     * 游戏结束
     * 父类实现了结算界面（游戏结束或星级评判）的弹出
     */
    GamePanel.prototype.gameOver = function () {
        _super.prototype.gameOver.call(this);
    };
    /**
     * 重玩
     */
    GamePanel.prototype.onReplay = function () {
        _super.prototype.onReplay.call(this);
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curLevel = 0;
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curStep = 0;
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curChooseColors = [];
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curRotateAngle = [];
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curFilledIndex = [];
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.isGameOver = false;
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.fillAreaResult = [null, null, null, null];
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curAngleInfo = [0, 0, 0, 0];
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curAngleInfo2 = [0, 0, 0, 0, 0];
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.fillAreaResult2 = [null, null, null, null, null];
        for (var i = 0; i < this.gameLevel.length; i++) {
            this.gameLevel[i].active = false;
        }
        if (EditorManager_1.EditorManager.editorData.gameIndex == 0) {
            this.gameLevel[0].active = true;
        }
        else {
            if (SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curStep == 0) {
                this.gameLevel[1].active = true;
            }
            else {
                this.gameLevel[2].active = true;
            }
        }
        ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.ENTER_GAME, false);
        // ListenerManager.dispatch(EventType.GAME_REPLAY);
    };
    GamePanel.prototype.update = function (dt) {
        _super.prototype.update.call(this, dt);
    };
    GamePanel.className = 'GamePanel';
    __decorate([
        property(cc.Node)
    ], GamePanel.prototype, "gameLevel", void 0);
    GamePanel = __decorate([
        ccclass
    ], GamePanel);
    return GamePanel;
}(BaseGamePanel_1.default));
exports.default = GamePanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXHBhbmVsXFxHYW1lUGFuZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUZBQW9GO0FBQ3BGLHFGQUE4RjtBQUM5RixrRkFBNkU7QUFDN0Usa0RBQWlEO0FBQ2pELDZEQUE0RDtBQUM1RCxxREFBZ0Q7QUFFMUMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBdUMsNkJBQWE7SUFBcEQ7UUFBQSxxRUEySUM7UUF2SVcsZUFBUyxHQUFjLEVBQUUsQ0FBQzs7SUF1SXRDLENBQUM7SUFySUcseUJBQUssR0FBTDtRQUNJLGlCQUFNLEtBQUssV0FBRSxDQUFDO1FBQ2QsaUNBQWUsQ0FBQyxFQUFFLENBQUMscUJBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM3RCxpQ0FBZSxDQUFDLEVBQUUsQ0FBQyxxQkFBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3hELGlDQUFlLENBQUMsRUFBRSxDQUFDLHFCQUFTLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVELDZCQUFTLEdBQVQ7UUFDSSxpQkFBTSxTQUFTLFdBQUUsQ0FBQztRQUNsQixpQ0FBZSxDQUFDLEdBQUcsQ0FBQyxxQkFBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzlELGlDQUFlLENBQUMsR0FBRyxDQUFDLHFCQUFTLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDekQsaUNBQWUsQ0FBQyxHQUFHLENBQUMscUJBQVMsQ0FB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QUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ2dCO0lBSmpCLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0EySTdCO0lBQUQsZ0JBQUM7Q0EzSUQsQUEySUMsQ0EzSXNDLHVCQUFhLEdBMkluRDtrQkEzSW9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXN0ZW5lck1hbmFnZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL01hbmFnZXIvTGlzdGVuZXJNYW5hZ2VyJztcbmltcG9ydCB7IFN5bmNEYXRhLCBTeW5jRGF0YU1hbmFnZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL01hbmFnZXIvU3luY0RhdGFNYW5hZ2VyJztcbmltcG9ydCBCYXNlR2FtZVBhbmVsIGZyb20gJy4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvVUkvUGFuZWwvQmFzZUdhbWVQYW5lbCc7XG5pbXBvcnQgeyBFdmVudFR5cGUgfSBmcm9tICcuLi8uLi9EYXRhL0V2ZW50VHlwZSc7XG5pbXBvcnQgeyBFZGl0b3JNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vTWFuYWdlci9FZGl0b3JNYW5hZ2VyJztcbmltcG9ydCBEdW9tYW9tYW81XzIgZnJvbSAnLi4vSXRlbS9EdW9tYW9tYW81XzInO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVBhbmVsIGV4dGVuZHMgQmFzZUdhbWVQYW5lbCB7XG4gICAgcHVibGljIHN0YXRpYyBjbGFzc05hbWUgPSAnR2FtZVBhbmVsJztcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgZ2FtZUxldmVsOiBjYy5Ob2RlW10gPSBbXTtcblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBzdXBlci5zdGFydCgpO1xuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub24oRXZlbnRUeXBlLkdBTUVfT1ZFUiwgdGhpcy5nYW1lT3ZlciwgdGhpcyk7XG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vbihFdmVudFR5cGUuU1VCTUlULCB0aGlzLnN1Ym1pdCwgdGhpcyk7XG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vbihFdmVudFR5cGUuT05fTkVYVF9TVEVQLCB0aGlzLm9uTmV4dFN0ZXAsIHRoaXMpO1xuICAgIH1cblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgc3VwZXIub25EZXN0cm95KCk7XG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vZmYoRXZlbnRUeXBlLkdBTUVfT1ZFUiwgdGhpcy5nYW1lT3ZlciwgdGhpcyk7XG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vZmYoRXZlbnRUeXBlLlNVQk1JVCwgdGhpcy5zdWJtaXQsIHRoaXMpO1xuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub2ZmKEV2ZW50VHlwZS5PTl9ORVhUX1NURVAsIHRoaXMub25OZXh0U3RlcCwgdGhpcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbk5leHRTdGVwKCkge1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ0R1b01hb01hbzUnKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdEdW9NYW9NYW81XzInKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ0R1b01hb01hbzVfMicpLmdldENvbXBvbmVudChEdW9tYW9tYW81XzIpLmluaXQoZmFsc2UpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3VibWl0KGlzUmlnaHQpIHtcbiAgICAgICAgaWYgKGlzUmlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMuYW5zd2VyUmlnaHQodHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFuc3dlcldyb25nKHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5ri45oiP5YWl5Y+jXG4gICAgICog6L+Z6YeM5bey57uP5ou/5Yiw5pWw5o2uXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHNldFBhbmVsKCkge1xuICAgICAgICBzdXBlci5zZXRQYW5lbCgpO1xuICAgICAgICAvLyBUT0RPIOS4muWKoemAu+i+kSAgICAgICAgXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nYW1lTGV2ZWwubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZUxldmVsW2ldLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuZ2FtZUluZGV4ID09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZUxldmVsWzBdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIGlmIChTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jdXJTdGVwID09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVMZXZlbFsxXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVMZXZlbFsyXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfSAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5kaXNwYXRjaChFdmVudFR5cGUuRU5URVJfR0FNRSwgZmFsc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOW/g+i3s+Wbnuiwg++8iOW9k2FjdGlvbklk5LiN55u4562J5pe25omN5Lya6Kem5Y+R77yJXG4gICAgICogQHBhcmFtIHJlY292ZXJ5XG4gICAgICovXG4gICAgcHJvdGVjdGVkIG9uUmVjb3ZlcnlEYXRhKHJlY292ZXJ5OiBTeW5jRGF0YSk6IHZvaWQge1xuICAgICAgICBzdXBlci5vblJlY292ZXJ5RGF0YShyZWNvdmVyeSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nYW1lTGV2ZWwubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZUxldmVsW2ldLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuZ2FtZUluZGV4ID09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZUxldmVsWzBdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIGlmIChTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jdXJTdGVwID09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVMZXZlbFsxXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVMZXZlbFsyXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfSAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5kaXNwYXRjaChFdmVudFR5cGUuRU5URVJfR0FNRSwgdHJ1ZSk7XG4gICAgICAgIC8vIExpc3RlbmVyTWFuYWdlci5kaXNwYXRjaChFdmVudFR5cGUuR0FNRV9SRUNPTk5FQ1QpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOS9nOetlOato+ehrlxuICAgICAqIOeItuexu+WunueOsOS6huaVsOaNruS4iuaKpVxuICAgICAqIEBwYXJhbSBpc0N1ckxldmVsRmluaXNoIOacrOWFs+aYr+WQpuWujOaIkFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBhbnN3ZXJSaWdodChpc0N1ckxldmVsRmluaXNoOiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyLmFuc3dlclJpZ2h0KGlzQ3VyTGV2ZWxGaW5pc2gpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOS9nOetlOmUmeivr1xuICAgICAqIOeItuexu+WunueOsOS6huaVsOaNruS4iuaKpVxuICAgICAqIEBwYXJhbSBpc0N1ckxldmVsRmluaXNoIOacrOWFs+aYr+WQpuWujOaIkFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBhbnN3ZXJXcm9uZyhpc0N1ckxldmVsRmluaXNoOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgc3VwZXIuYW5zd2VyV3JvbmcoaXNDdXJMZXZlbEZpbmlzaCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5ri45oiP57uT5p2fXG4gICAgICog54i257G75a6e546w5LqG57uT566X55WM6Z2i77yI5ri45oiP57uT5p2f5oiW5pif57qn6K+E5Yik77yJ55qE5by55Ye6XG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdhbWVPdmVyKCkge1xuICAgICAgICBzdXBlci5nYW1lT3ZlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOmHjeeOqVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBvblJlcGxheSgpIHtcbiAgICAgICAgc3VwZXIub25SZXBsYXkoKTtcbiAgICAgICAgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY3VyTGV2ZWwgPSAwO1xuICAgICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jdXJTdGVwID0gMDtcbiAgICAgICAgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY3VyQ2hvb3NlQ29sb3JzID0gW107XG4gICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmN1clJvdGF0ZUFuZ2xlID0gW107XG4gICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmN1ckZpbGxlZEluZGV4ID0gW107XG4gICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmlzR2FtZU92ZXIgPSBmYWxzZTtcbiAgICAgICAgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuZmlsbEFyZWFSZXN1bHQgPSBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF07XG4gICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmN1ckFuZ2xlSW5mbyA9IFswLCAwLCAwLCAwXTtcbiAgICAgICAgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY3VyQW5nbGVJbmZvMiA9IFswLCAwLCAwLCAwLCAwXTtcbiAgICAgICAgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuZmlsbEFyZWFSZXN1bHQyID0gW251bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGxdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nYW1lTGV2ZWwubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZUxldmVsW2ldLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuZ2FtZUluZGV4ID09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZUxldmVsWzBdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIGlmIChTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jdXJTdGVwID09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVMZXZlbFsxXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVMZXZlbFsyXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfSAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5kaXNwYXRjaChFdmVudFR5cGUuRU5URVJfR0FNRSwgZmFsc2UpO1xuICAgICAgICAvLyBMaXN0ZW5lck1hbmFnZXIuZGlzcGF0Y2goRXZlbnRUeXBlLkdBTUVfUkVQTEFZKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgc3VwZXIudXBkYXRlKGR0KTtcbiAgICB9XG59XG4iXX0=