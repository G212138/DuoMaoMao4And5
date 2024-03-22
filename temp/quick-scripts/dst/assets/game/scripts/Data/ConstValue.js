
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/Data/ConstValue.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b2ee0BC2l1Pp47nuM279OIO', 'ConstValue');
// game/scripts/Data/ConstValue.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConstValue = void 0;
var ConstValue = /** @class */ (function () {
    function ConstValue() {
    }
    ConstValue.IS_EDITIONS = true; //是否为发布版本，用于数据上报 及 log输出控制
    ConstValue.IS_TEACHER = true; //是否为教师端版本
    ConstValue.CoursewareKey = 'DuoMaoMao_1us28h3K6s2NB8'; //每个课件唯一的key 工程名+14位随机字符串。（脚本创建工程时自动生成）
    ConstValue.GameName = 'K1J8躲猫猫4'; //游戏名中文描述，用于数据上报  （脚本创建工程时输入）
    ConstValue.Subject = 1; //学科（1理科 2语文 3英语）
    return ConstValue;
}());
exports.ConstValue = ConstValue;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcRGF0YVxcQ29uc3RWYWx1ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBTUEsQ0FBQztJQUwwQixzQkFBVyxHQUFHLElBQUksQ0FBQyxDQUFDLDBCQUEwQjtJQUM5QyxxQkFBVSxHQUFHLElBQUksQ0FBQyxDQUFDLFVBQVU7SUFDN0Isd0JBQWEsR0FBRywwQkFBMEIsQ0FBQyxDQUFDLHVDQUF1QztJQUNuRixtQkFBUSxHQUFHLFVBQVUsQ0FBQyxDQUFDLDZCQUE2QjtJQUNwRCxrQkFBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLGlCQUFpQjtJQUN6RCxpQkFBQztDQU5ELEFBTUMsSUFBQTtBQU5ZLGdDQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENvbnN0VmFsdWUge1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgSVNfRURJVElPTlMgPSB0cnVlOyAvL+aYr+WQpuS4uuWPkeW4g+eJiOacrO+8jOeUqOS6juaVsOaNruS4iuaKpSDlj4ogbG9n6L6T5Ye65o6n5Yi2XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBJU19URUFDSEVSID0gdHJ1ZTsgLy/mmK/lkKbkuLrmlZnluIjnq6/niYjmnKxcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IENvdXJzZXdhcmVLZXkgPSAnRHVvTWFvTWFvXzF1czI4aDNLNnMyTkI4JzsgLy/mr4/kuKror77ku7bllK/kuIDnmoRrZXkg5bel56iL5ZCNKzE05L2N6ZqP5py65a2X56ym5Liy44CC77yI6ISa5pys5Yib5bu65bel56iL5pe26Ieq5Yqo55Sf5oiQ77yJXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBHYW1lTmFtZSA9ICdLMUo46Lqy54yr54yrNCc7IC8v5ri45oiP5ZCN5Lit5paH5o+P6L+w77yM55So5LqO5pWw5o2u5LiK5oqlICDvvIjohJrmnKzliJvlu7rlt6XnqIvml7bovpPlhaXvvIlcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFN1YmplY3QgPSAxOyAvL+Wtpuenke+8iDHnkIbnp5EgMuivreaWhyAz6Iux6K+t77yJXG59XG4iXX0=