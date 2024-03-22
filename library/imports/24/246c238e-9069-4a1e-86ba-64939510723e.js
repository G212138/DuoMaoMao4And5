"use strict";
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