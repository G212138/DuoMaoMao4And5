/**
 * 需要同步的自定义数据
 * 游戏业务层同步数据在这里添加
 */
export class CustomSyncData {
    public curLevel: number = 0; // 当前关卡(第一关为0)
    // TODO 自定义

    public curStep: number = 0; // 当前步骤
    public curChooseColors: number[] = []; // 当前选择的颜色
    public curRotateAngle: number[] = []; // 当前旋转的角度 红粉黄绿蓝紫
    public curFilledIndex: number[] = []; // 当前填充的选项
    public isGameOver: boolean = false; // 游戏是否结束

    //躲猫猫5
    public fillAreaResult: number[] = [null, null, null, null]; 
    public curAngleInfo: number[] = [0, 0, 0, 0];

    //duomao5_2
    public curAngleInfo2: number[] = [0, 0, 0, 0, 0];
    public fillAreaResult2: number[] = [null, null, null, null, null];
}
