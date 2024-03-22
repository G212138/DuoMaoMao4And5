import { ListenerManager } from '../../../../frame/scripts/Manager/ListenerManager';
import { SyncData, SyncDataManager } from '../../../../frame/scripts/Manager/SyncDataManager';
import BaseGamePanel from '../../../../frame/scripts/UI/Panel/BaseGamePanel';
import { EventType } from '../../Data/EventType';
import { EditorManager } from '../../Manager/EditorManager';
import Duomaomao5_2 from '../Item/Duomaomao5_2';

const { ccclass, property } = cc._decorator;

@ccclass
export default class GamePanel extends BaseGamePanel {
    public static className = 'GamePanel';

    @property(cc.Node)
    private gameLevel: cc.Node[] = [];

    start() {
        super.start();
        ListenerManager.on(EventType.GAME_OVER, this.gameOver, this);
        ListenerManager.on(EventType.SUBMIT, this.submit, this);
        ListenerManager.on(EventType.ON_NEXT_STEP, this.onNextStep, this);
    }

    onDestroy() {
        super.onDestroy();
        ListenerManager.off(EventType.GAME_OVER, this.gameOver, this);
        ListenerManager.off(EventType.SUBMIT, this.submit, this);
        ListenerManager.off(EventType.ON_NEXT_STEP, this.onNextStep, this);
    }

    private onNextStep() {
        this.node.getChildByName('DuoMaoMao5').active = false;
        this.node.getChildByName('DuoMaoMao5_2').active = true;
        this.node.getChildByName('DuoMaoMao5_2').getComponent(Duomaomao5_2).init(false);
    }

    private submit(isRight) {
        if (isRight) {
            this.answerRight(true);
        } else {
            this.answerWrong(true);
        }
    }

    /**
     * 游戏入口
     * 这里已经拿到数据
     */
    protected setPanel() {
        super.setPanel();
        // TODO 业务逻辑        
        for (let i = 0; i < this.gameLevel.length; i++) {
            this.gameLevel[i].active = false;
        }
        if (EditorManager.editorData.gameIndex == 0) {
            this.gameLevel[0].active = true;
        } else{
            if (SyncDataManager.getSyncData().customSyncData.curStep == 0) {
                this.gameLevel[1].active = true;
            } else {
                this.gameLevel[2].active = true;
            }            
        }
        ListenerManager.dispatch(EventType.ENTER_GAME, false);
    }

    /**
     * 心跳回调（当actionId不相等时才会触发）
     * @param recovery
     */
    protected onRecoveryData(recovery: SyncData): void {
        super.onRecoveryData(recovery);
        for (let i = 0; i < this.gameLevel.length; i++) {
            this.gameLevel[i].active = false;
        }
        if (EditorManager.editorData.gameIndex == 0) {
            this.gameLevel[0].active = true;
        } else{
            if (SyncDataManager.getSyncData().customSyncData.curStep == 0) {
                this.gameLevel[1].active = true;
            } else {
                this.gameLevel[2].active = true;
            }            
        }
        ListenerManager.dispatch(EventType.ENTER_GAME, true);
        // ListenerManager.dispatch(EventType.GAME_RECONNECT);
    }

    /**
     * 作答正确
     * 父类实现了数据上报
     * @param isCurLevelFinish 本关是否完成
     */
    protected answerRight(isCurLevelFinish: boolean) {
        super.answerRight(isCurLevelFinish);
    }

    /**
     * 作答错误
     * 父类实现了数据上报
     * @param isCurLevelFinish 本关是否完成
     */
    protected answerWrong(isCurLevelFinish: boolean = false) {
        super.answerWrong(isCurLevelFinish);
    }

    /**
     * 游戏结束
     * 父类实现了结算界面（游戏结束或星级评判）的弹出
     */
    protected gameOver() {
        super.gameOver();
    }

    /**
     * 重玩
     */
    protected onReplay() {
        super.onReplay();
        SyncDataManager.getSyncData().customSyncData.curLevel = 0;
        SyncDataManager.getSyncData().customSyncData.curStep = 0;
        SyncDataManager.getSyncData().customSyncData.curChooseColors = [];
        SyncDataManager.getSyncData().customSyncData.curRotateAngle = [];
        SyncDataManager.getSyncData().customSyncData.curFilledIndex = [];
        SyncDataManager.getSyncData().customSyncData.isGameOver = false;
        SyncDataManager.getSyncData().customSyncData.fillAreaResult = [null, null, null, null];
        SyncDataManager.getSyncData().customSyncData.curAngleInfo = [0, 0, 0, 0];
        SyncDataManager.getSyncData().customSyncData.curAngleInfo2 = [0, 0, 0, 0, 0];
        SyncDataManager.getSyncData().customSyncData.fillAreaResult2 = [null, null, null, null, null];

        for (let i = 0; i < this.gameLevel.length; i++) {
            this.gameLevel[i].active = false;
        }
        if (EditorManager.editorData.gameIndex == 0) {
            this.gameLevel[0].active = true;
        } else{
            if (SyncDataManager.getSyncData().customSyncData.curStep == 0) {
                this.gameLevel[1].active = true;
            } else {
                this.gameLevel[2].active = true;
            }            
        }
        ListenerManager.dispatch(EventType.ENTER_GAME, false);
        // ListenerManager.dispatch(EventType.GAME_REPLAY);
    }

    update(dt) {
        super.update(dt);
    }
}
