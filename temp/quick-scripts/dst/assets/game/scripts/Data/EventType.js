
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/Data/EventType.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9d48b48sqpEdozOnbOcVCAB', 'EventType');
// game/scripts/Data/EventType.ts

"use strict";
/**
 * 自定义事件类型
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventType = void 0;
var EventType;
(function (EventType) {
    // examp
    EventType["ON_BUTTON_CLICKED"] = "ON_BUTTON_CLICKED";
    EventType["ENTER_GAME"] = "ENTER_GAME";
    EventType["GAME_RECONNECT"] = "GAME_RECONNECT";
    EventType["GAME_OVER"] = "GAME_OVER";
    EventType["SUBMIT"] = "SUBMIT";
    EventType["GAME_REPLAY"] = "GAME_REPLAY";
    EventType["DRAG_OPTION"] = "DRAG_OPTION";
    EventType["DRAG_OPTION_START"] = "DRAG_OPTION_START";
    EventType["DRAG_OPTION_END"] = "DRAG_OPTION_END";
    EventType["ON_CLICK_ITEM"] = "ON_CLICK_ITEM";
    EventType["ROTATE_ITEM"] = "ROTATE_ITEM";
    EventType["ROTATE_ITEM2"] = "ROTATE_ITEM2";
    EventType["ON_FILL_ITEM"] = "ON_FILL_ITEM";
    EventType["ON_FILL_ITEM2"] = "ON_FILL_ITEM2";
    EventType["ON_FILL_ITEM3"] = "ON_FILL_ITEM3";
    EventType["ON_NEXT_STEP"] = "ON_NEXT_STEP";
})(EventType = exports.EventType || (exports.EventType = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcRGF0YVxcRXZlbnRUeXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7R0FFRzs7O0FBRUgsSUFBWSxTQXVCWDtBQXZCRCxXQUFZLFNBQVM7SUFDakIsUUFBUTtJQUNSLG9EQUF1QyxDQUFBO0lBRXZDLHNDQUF5QixDQUFBO0lBQ3pCLDhDQUFpQyxDQUFBO0lBQ2pDLG9DQUF1QixDQUFBO0lBQ3ZCLDhCQUFpQixDQUFBO0lBQ2pCLHdDQUEyQixDQUFBO0lBRTNCLHdDQUEyQixDQUFBO0lBQzNCLG9EQUF1QyxDQUFBO0lBQ3ZDLGdEQUFtQyxDQUFBO0lBRW5DLDRDQUErQixDQUFBO0lBQy9CLHdDQUEyQixDQUFBO0lBQzNCLDBDQUE2QixDQUFBO0lBQzdCLDBDQUE2QixDQUFBO0lBQzdCLDRDQUErQixDQUFBO0lBQy9CLDRDQUErQixDQUFBO0lBRy9CLDBDQUE2QixDQUFBO0FBQ2pDLENBQUMsRUF2QlcsU0FBUyxHQUFULGlCQUFTLEtBQVQsaUJBQVMsUUF1QnBCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiDoh6rlrprkuYnkuovku7bnsbvlnotcbiAqL1xuXG5leHBvcnQgZW51bSBFdmVudFR5cGUge1xuICAgIC8vIGV4YW1wXG4gICAgT05fQlVUVE9OX0NMSUNLRUQgPSAnT05fQlVUVE9OX0NMSUNLRUQnLFxuXG4gICAgRU5URVJfR0FNRSA9ICdFTlRFUl9HQU1FJyxcbiAgICBHQU1FX1JFQ09OTkVDVCA9IFwiR0FNRV9SRUNPTk5FQ1RcIixcbiAgICBHQU1FX09WRVIgPSBcIkdBTUVfT1ZFUlwiLFxuICAgIFNVQk1JVCA9IFwiU1VCTUlUXCIsXG4gICAgR0FNRV9SRVBMQVkgPSBcIkdBTUVfUkVQTEFZXCIsXG5cbiAgICBEUkFHX09QVElPTiA9IFwiRFJBR19PUFRJT05cIixcbiAgICBEUkFHX09QVElPTl9TVEFSVCA9IFwiRFJBR19PUFRJT05fU1RBUlRcIixcbiAgICBEUkFHX09QVElPTl9FTkQgPSBcIkRSQUdfT1BUSU9OX0VORFwiLFxuXG4gICAgT05fQ0xJQ0tfSVRFTSA9IFwiT05fQ0xJQ0tfSVRFTVwiLFxuICAgIFJPVEFURV9JVEVNID0gXCJST1RBVEVfSVRFTVwiLFxuICAgIFJPVEFURV9JVEVNMiA9IFwiUk9UQVRFX0lURU0yXCIsXG4gICAgT05fRklMTF9JVEVNID0gXCJPTl9GSUxMX0lURU1cIixcbiAgICBPTl9GSUxMX0lURU0yID0gXCJPTl9GSUxMX0lURU0yXCIsXG4gICAgT05fRklMTF9JVEVNMyA9IFwiT05fRklMTF9JVEVNM1wiLFxuXG5cbiAgICBPTl9ORVhUX1NURVAgPSBcIk9OX05FWFRfU1RFUFwiLFxufVxuIl19