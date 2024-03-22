
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/Data/CustomSyncData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcRGF0YVxcQ3VzdG9tU3luY0RhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztHQUdHO0FBQ0g7SUFBQTtRQUNXLGFBQVEsR0FBVyxDQUFDLENBQUMsQ0FBQyxjQUFjO1FBQzNDLFdBQVc7UUFFSixZQUFPLEdBQVcsQ0FBQyxDQUFDLENBQUMsT0FBTztRQUM1QixvQkFBZSxHQUFhLEVBQUUsQ0FBQyxDQUFDLFVBQVU7UUFDMUMsbUJBQWMsR0FBYSxFQUFFLENBQUMsQ0FBQyxpQkFBaUI7UUFDaEQsbUJBQWMsR0FBYSxFQUFFLENBQUMsQ0FBQyxVQUFVO1FBQ3pDLGVBQVUsR0FBWSxLQUFLLENBQUMsQ0FBQyxTQUFTO1FBRTdDLE1BQU07UUFDQyxtQkFBYyxHQUFhLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDcEQsaUJBQVksR0FBYSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRTdDLFdBQVc7UUFDSixrQkFBYSxHQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFDLG9CQUFlLEdBQWEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUFELHFCQUFDO0FBQUQsQ0FqQkEsQUFpQkMsSUFBQTtBQWpCWSx3Q0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICog6ZyA6KaB5ZCM5q2l55qE6Ieq5a6a5LmJ5pWw5o2uXG4gKiDmuLjmiI/kuJrliqHlsYLlkIzmraXmlbDmja7lnKjov5nph4zmt7vliqBcbiAqL1xuZXhwb3J0IGNsYXNzIEN1c3RvbVN5bmNEYXRhIHtcbiAgICBwdWJsaWMgY3VyTGV2ZWw6IG51bWJlciA9IDA7IC8vIOW9k+WJjeWFs+WNoSjnrKzkuIDlhbPkuLowKVxuICAgIC8vIFRPRE8g6Ieq5a6a5LmJXG5cbiAgICBwdWJsaWMgY3VyU3RlcDogbnVtYmVyID0gMDsgLy8g5b2T5YmN5q2l6aqkXG4gICAgcHVibGljIGN1ckNob29zZUNvbG9yczogbnVtYmVyW10gPSBbXTsgLy8g5b2T5YmN6YCJ5oup55qE6aKc6ImyXG4gICAgcHVibGljIGN1clJvdGF0ZUFuZ2xlOiBudW1iZXJbXSA9IFtdOyAvLyDlvZPliY3ml4vovaznmoTop5LluqYg57qi57KJ6buE57u/6JOd57SrXG4gICAgcHVibGljIGN1ckZpbGxlZEluZGV4OiBudW1iZXJbXSA9IFtdOyAvLyDlvZPliY3loavlhYXnmoTpgInpoblcbiAgICBwdWJsaWMgaXNHYW1lT3ZlcjogYm9vbGVhbiA9IGZhbHNlOyAvLyDmuLjmiI/mmK/lkKbnu5PmnZ9cblxuICAgIC8v6Lqy54yr54yrNVxuICAgIHB1YmxpYyBmaWxsQXJlYVJlc3VsdDogbnVtYmVyW10gPSBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF07IFxuICAgIHB1YmxpYyBjdXJBbmdsZUluZm86IG51bWJlcltdID0gWzAsIDAsIDAsIDBdO1xuXG4gICAgLy9kdW9tYW81XzJcbiAgICBwdWJsaWMgY3VyQW5nbGVJbmZvMjogbnVtYmVyW10gPSBbMCwgMCwgMCwgMCwgMF07XG4gICAgcHVibGljIGZpbGxBcmVhUmVzdWx0MjogbnVtYmVyW10gPSBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF07XG59XG4iXX0=