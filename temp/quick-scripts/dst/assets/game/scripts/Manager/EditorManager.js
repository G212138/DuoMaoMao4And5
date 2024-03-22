
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/Manager/EditorManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '64363RgvXdCJJdpexRQv89P', 'EditorManager');
// game/scripts/Manager/EditorManager.ts

"use strict";
/**编辑器数据类 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditorManager = void 0;
/**
 * 编辑器数据，根据游戏自定义内部数据
 */
var EditorData = /** @class */ (function () {
    function EditorData() {
        // 是否开启星级评
        this.isStarCount = true;
        // 是否开启再玩一次
        this.isReplay = true;
        // 是否自动播放题干语音
        this.isPlayTitle = true;
        // 可重玩次数
        this.replayCount = 1;
        // 关卡总数
        this.levelCount = 1;
        // 总步数
        this.stepCount = 0;
        // 课件等级 0：幼小  1：小低  2：小高
        this.coursewareLevel = 2;
        // TODO 自定义数据
        this.gameIndex = 0; //游戏索引
    }
    return EditorData;
}());
var EditorManagerClass = /** @class */ (function () {
    function EditorManagerClass() {
        /** 编辑器数据 */
        this.editorData = new EditorData();
    }
    EditorManagerClass.getInstance = function () {
        if (this._instance == null) {
            this._instance = new EditorManagerClass();
        }
        return this._instance;
    };
    /**
     * 是否支持题目编辑
     */
    EditorManagerClass.prototype.isSupportEdit = function () {
        var keys = Object.getOwnPropertyNames(this.editorData);
        return keys.length > 7;
    };
    /**
     * 获取关卡总数
     */
    EditorManagerClass.prototype.getLevelCount = function () {
        return this.editorData.levelCount;
    };
    /**
     * 设置关卡总数
     */
    EditorManagerClass.prototype.setLevelCount = function (num) {
        this.editorData.levelCount = num;
    };
    /**
     * 获取总步数
     */
    EditorManagerClass.prototype.getStepCount = function () {
        return this.editorData.stepCount || this.getLevelCount();
    };
    /**
     * 设置总步数
     */
    EditorManagerClass.prototype.setStepCount = function (num) {
        this.editorData.stepCount = num;
    };
    /**
     * 获取课件等级
     * 需要各个游戏根据实际情况设置正确的数值
     * 课件等级 0：幼小  1：小低  2：小高
     */
    EditorManagerClass.prototype.getCoursewareLevel = function () {
        return this.editorData.coursewareLevel;
    };
    /**
     * 获取编辑器数据
     */
    EditorManagerClass.prototype.getData = function () {
        return this.editorData;
    };
    /**
     * 根据网络请求结果设置编辑器数据
     * @param {EditorData} data
     */
    EditorManagerClass.prototype.setData = function (data) {
        this.editorData = data;
    };
    return EditorManagerClass;
}());
exports.EditorManager = EditorManagerClass.getInstance();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcTWFuYWdlclxcRWRpdG9yTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsWUFBWTs7O0FBRVo7O0dBRUc7QUFDSDtJQUFBO1FBQ0ksVUFBVTtRQUNILGdCQUFXLEdBQVksSUFBSSxDQUFDO1FBQ25DLFdBQVc7UUFDSixhQUFRLEdBQVksSUFBSSxDQUFDO1FBQ2hDLGFBQWE7UUFDTixnQkFBVyxHQUFZLElBQUksQ0FBQztRQUNuQyxRQUFRO1FBQ0QsZ0JBQVcsR0FBVyxDQUFDLENBQUM7UUFDL0IsT0FBTztRQUNBLGVBQVUsR0FBVyxDQUFDLENBQUM7UUFDOUIsTUFBTTtRQUNDLGNBQVMsR0FBVyxDQUFDLENBQUM7UUFDN0Isd0JBQXdCO1FBQ2pCLG9CQUFlLEdBQVcsQ0FBQyxDQUFDO1FBRW5DLGFBQWE7UUFDTixjQUFTLEdBQVcsQ0FBQyxDQUFDLENBQUMsTUFBTTtJQUN4QyxDQUFDO0lBQUQsaUJBQUM7QUFBRCxDQWxCQSxBQWtCQyxJQUFBO0FBRUQ7SUFhSTtRQUhBLFlBQVk7UUFDTCxlQUFVLEdBQWUsSUFBSSxVQUFVLEVBQUUsQ0FBQztJQUVsQyxDQUFDO0lBVlQsOEJBQVcsR0FBbEI7UUFDSSxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxrQkFBa0IsRUFBRSxDQUFDO1NBQzdDO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFPRDs7T0FFRztJQUNJLDBDQUFhLEdBQXBCO1FBQ0ksSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUV2RCxPQUFPLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRDs7T0FFRztJQUNJLDBDQUFhLEdBQXBCO1FBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQztJQUN0QyxDQUFDO0lBRUQ7O09BRUc7SUFDSSwwQ0FBYSxHQUFwQixVQUFxQixHQUFXO1FBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztJQUNyQyxDQUFDO0lBRUQ7O09BRUc7SUFDSSx5Q0FBWSxHQUFuQjtRQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzdELENBQUM7SUFFRDs7T0FFRztJQUNJLHlDQUFZLEdBQW5CLFVBQW9CLEdBQVc7UUFDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO0lBQ3BDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksK0NBQWtCLEdBQXpCO1FBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQztJQUMzQyxDQUFDO0lBRUQ7O09BRUc7SUFDSSxvQ0FBTyxHQUFkO1FBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQzNCLENBQUM7SUFFRDs7O09BR0c7SUFDSSxvQ0FBTyxHQUFkLFVBQWUsSUFBZ0I7UUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFDM0IsQ0FBQztJQUNMLHlCQUFDO0FBQUQsQ0EzRUEsQUEyRUMsSUFBQTtBQUVZLFFBQUEsYUFBYSxHQUFHLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoq57yW6L6R5Zmo5pWw5o2u57G7ICovXG5cbi8qKlxuICog57yW6L6R5Zmo5pWw5o2u77yM5qC55o2u5ri45oiP6Ieq5a6a5LmJ5YaF6YOo5pWw5o2uXG4gKi9cbmNsYXNzIEVkaXRvckRhdGEge1xuICAgIC8vIOaYr+WQpuW8gOWQr+aYn+e6p+ivhFxuICAgIHB1YmxpYyBpc1N0YXJDb3VudDogYm9vbGVhbiA9IHRydWU7XG4gICAgLy8g5piv5ZCm5byA5ZCv5YaN546p5LiA5qyhXG4gICAgcHVibGljIGlzUmVwbGF5OiBib29sZWFuID0gdHJ1ZTtcbiAgICAvLyDmmK/lkKboh6rliqjmkq3mlL7popjlubLor63pn7NcbiAgICBwdWJsaWMgaXNQbGF5VGl0bGU6IGJvb2xlYW4gPSB0cnVlO1xuICAgIC8vIOWPr+mHjeeOqeasoeaVsFxuICAgIHB1YmxpYyByZXBsYXlDb3VudDogbnVtYmVyID0gMTtcbiAgICAvLyDlhbPljaHmgLvmlbBcbiAgICBwdWJsaWMgbGV2ZWxDb3VudDogbnVtYmVyID0gMTtcbiAgICAvLyDmgLvmraXmlbBcbiAgICBwdWJsaWMgc3RlcENvdW50OiBudW1iZXIgPSAwO1xuICAgIC8vIOivvuS7tuetiee6pyAw77ya5bm85bCPICAx77ya5bCP5L2OICAy77ya5bCP6auYXG4gICAgcHVibGljIGNvdXJzZXdhcmVMZXZlbDogbnVtYmVyID0gMjtcblxuICAgIC8vIFRPRE8g6Ieq5a6a5LmJ5pWw5o2uXG4gICAgcHVibGljIGdhbWVJbmRleDogbnVtYmVyID0gMDsgLy/muLjmiI/ntKLlvJVcbn1cblxuY2xhc3MgRWRpdG9yTWFuYWdlckNsYXNzIHtcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IEVkaXRvck1hbmFnZXJDbGFzcztcblxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2luc3RhbmNlID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IEVkaXRvck1hbmFnZXJDbGFzcygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICB9XG5cbiAgICAvKiog57yW6L6R5Zmo5pWw5o2uICovXG4gICAgcHVibGljIGVkaXRvckRhdGE6IEVkaXRvckRhdGEgPSBuZXcgRWRpdG9yRGF0YSgpO1xuXG4gICAgY29uc3RydWN0b3IoKSB7fVxuXG4gICAgLyoqXG4gICAgICog5piv5ZCm5pSv5oyB6aKY55uu57yW6L6RXG4gICAgICovXG4gICAgcHVibGljIGlzU3VwcG9ydEVkaXQoKTogYm9vbGVhbiB7XG4gICAgICAgIGxldCBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcy5lZGl0b3JEYXRhKTtcblxuICAgICAgICByZXR1cm4ga2V5cy5sZW5ndGggPiA3O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiOt+WPluWFs+WNoeaAu+aVsFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRMZXZlbENvdW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lZGl0b3JEYXRhLmxldmVsQ291bnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6K6+572u5YWz5Y2h5oC75pWwXG4gICAgICovXG4gICAgcHVibGljIHNldExldmVsQ291bnQobnVtOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5lZGl0b3JEYXRhLmxldmVsQ291bnQgPSBudW07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6I635Y+W5oC75q2l5pWwXG4gICAgICovXG4gICAgcHVibGljIGdldFN0ZXBDb3VudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWRpdG9yRGF0YS5zdGVwQ291bnQgfHwgdGhpcy5nZXRMZXZlbENvdW50KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6K6+572u5oC75q2l5pWwXG4gICAgICovXG4gICAgcHVibGljIHNldFN0ZXBDb3VudChudW06IG51bWJlcikge1xuICAgICAgICB0aGlzLmVkaXRvckRhdGEuc3RlcENvdW50ID0gbnVtO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiOt+WPluivvuS7tuetiee6p1xuICAgICAqIOmcgOimgeWQhOS4qua4uOaIj+agueaNruWunumZheaDheWGteiuvue9ruato+ehrueahOaVsOWAvFxuICAgICAqIOivvuS7tuetiee6pyAw77ya5bm85bCPICAx77ya5bCP5L2OICAy77ya5bCP6auYXG4gICAgICovXG4gICAgcHVibGljIGdldENvdXJzZXdhcmVMZXZlbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWRpdG9yRGF0YS5jb3Vyc2V3YXJlTGV2ZWw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6I635Y+W57yW6L6R5Zmo5pWw5o2uXG4gICAgICovXG4gICAgcHVibGljIGdldERhdGEoKTogRWRpdG9yRGF0YSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVkaXRvckRhdGE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5qC55o2u572R57uc6K+35rGC57uT5p6c6K6+572u57yW6L6R5Zmo5pWw5o2uXG4gICAgICogQHBhcmFtIHtFZGl0b3JEYXRhfSBkYXRhXG4gICAgICovXG4gICAgcHVibGljIHNldERhdGEoZGF0YTogRWRpdG9yRGF0YSkge1xuICAgICAgICB0aGlzLmVkaXRvckRhdGEgPSBkYXRhO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IEVkaXRvck1hbmFnZXIgPSBFZGl0b3JNYW5hZ2VyQ2xhc3MuZ2V0SW5zdGFuY2UoKTtcbiJdfQ==