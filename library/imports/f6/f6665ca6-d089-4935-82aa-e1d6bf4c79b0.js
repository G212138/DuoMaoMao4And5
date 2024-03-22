"use strict";
cc._RF.push(module, 'f6665ym0IlJNYKq4da/THmw', 'CustomSyncData');
// game/scripts/Data/CustomSyncData.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomSyncData = void 0;
/**
 * 需要同步的自定义数据
 * 游戏业务层同步数据在这里添加
 */
var CustomSyncData = /** @class */ (function () {
    function CustomSyncData() {
        this.curLevel = 0; // 当前关卡(第一关为0)
        // TODO 自定义
        this.curStep = 0; // 当前步骤
        this.curChooseColors = []; // 当前选择的颜色
        this.curRotateAngle = []; // 当前旋转的角度 红粉黄绿蓝紫
        this.curFilledIndex = []; // 当前填充的选项
        this.isGameOver = false; // 游戏是否结束
        //躲猫猫5
        this.fillAreaResult = [null, null, null, null];
        this.curAngleInfo = [0, 0, 0, 0];
        //duomao5_2
        this.curAngleInfo2 = [0, 0, 0, 0, 0];
        this.fillAreaResult2 = [null, null, null, null, null];
    }
    return CustomSyncData;
}());
exports.CustomSyncData = CustomSyncData;

cc._RF.pop();