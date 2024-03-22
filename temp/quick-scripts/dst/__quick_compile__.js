
(function () {
var scripts = [{"deps":{"./assets/game/scripts/Data/ConstValue":1,"./assets/frame/scripts/Data/FrameSyncData":3,"./assets/game/scripts/SkeletonExt":4,"./assets/frame/scripts/Data/FrameConstValue":5,"./assets/frame/scripts/Manager/ListenerManager":6,"./assets/frame/scripts/UI/AdaptiveScreen":11,"./assets/frame/scripts/UI/BindNode":17,"./assets/frame/scripts/SDK/GameMsg":19,"./assets/frame/scripts/UI/Item/Tip":21,"./assets/frame/scripts/Utils/BoundingBoxHelp":36,"./assets/frame/scripts/Utils/Tools":37,"./assets/frame/scripts/Utils/MathUtils":38,"./assets/frame/scripts/Data/FrameMsgType":39,"./assets/game/scripts/Data/EventType":40,"./assets/frame/scripts/Utils/HitTest":42,"./assets/game/scripts/Manager/GameManager":44,"./assets/game/scripts/Data/CustomSyncData":47,"./assets/game/scripts/Manager/EditorManager":50,"./assets/game/scripts/UI/Item/SoundConfig":56,"./assets/frame/scripts/UI/Item/TitleNode":2,"./assets/frame/scripts/Http/NetWork":7,"./assets/frame/scripts/SDK/T2M":8,"./assets/frame/scripts/Utils/BoundingBoxDemo":10,"./assets/frame/scripts/Manager/UIManager":12,"./assets/frame/scripts/UI/GameMain":13,"./assets/frame/scripts/Manager/SoundManager":14,"./assets/frame/scripts/Manager/SyncDataManager":15,"./assets/frame/scripts/UI/BaseFrameUI":18,"./assets/frame/scripts/Manager/ReportManager":20,"./assets/frame/scripts/UI/BaseUI":22,"./assets/frame/scripts/UI/Panel/BaseGamePanel":9,"./assets/frame/scripts/Utils/UIHelp":35,"./assets/frame/scripts/Utils/AudioPlayExtension":41,"./assets/frame/scripts/UI/Item/MaskRecover":16,"./assets/frame/scripts/UI/Item/MaskGlobal":23,"./assets/frame/scripts/UI/Item/replayBtn":24,"./assets/frame/scripts/UI/Panel/ErrorPanel":25,"./assets/frame/scripts/UI/Item/TeacherPanelLoading":26,"./assets/frame/scripts/UI/Panel/LoadingUI":27,"./assets/frame/scripts/UI/Panel/SubmissionPanel":28,"./assets/frame/scripts/UI/Panel/OverTips":29,"./assets/frame/scripts/UI/Panel/StarCount":30,"./assets/frame/scripts/UI/Panel/BaseTeacherPanel":31,"./assets/frame/scripts/UI/Panel/UploadAndReturnPanel":32,"./assets/frame/scripts/UI/Panel/AffirmTips":33,"./assets/frame/scripts/UI/Panel/TipUI":34,"./assets/game/scripts/UI/Item/Duomaomao5":43,"./assets/game/scripts/UI/Components/ButtonSync":45,"./assets/game/scripts/UI/panel/GamePanel":46,"./assets/game/scripts/UI/Item/FillArea2":48,"./assets/game/scripts/UI/Item/Duomaomao5_2":49,"./assets/game/scripts/UI/Item/OptionItem":51,"./assets/game/scripts/UI/Item/FillArea":52,"./assets/game/scripts/UI/Item/OptionItem2":53,"./assets/game/scripts/UI/panel/TeacherPanel":54,"./assets/game/scripts/UI/Components/DragSync":55,"./assets/game/scripts/UI/Item/DuoMaoMao4":57},"path":"preview-scripts/__qc_index__.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Data/ConstValue.js"},{"deps":{"../../Data/FrameMsgType":39,"../../Manager/ListenerManager":6},"path":"preview-scripts/assets/frame/scripts/UI/Item/TitleNode.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Data/FrameSyncData.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/SkeletonExt.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Data/FrameConstValue.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Manager/ListenerManager.js"},{"deps":{"../../../game/scripts/Data/ConstValue":1,"../SDK/GameMsg":19,"../Manager/UIManager":12,"../Utils/UIHelp":35},"path":"preview-scripts/assets/frame/scripts/Http/NetWork.js"},{"deps":{"../Manager/ListenerManager":6,"../Data/FrameMsgType":39,"../Manager/SyncDataManager":15,"../Http/NetWork":7,"../Utils/UIHelp":35,"./GameMsg":19},"path":"preview-scripts/assets/frame/scripts/SDK/T2M.js"},{"deps":{"../../../../game/scripts/Manager/EditorManager":50,"../../Data/FrameMsgType":39,"../../Http/NetWork":7,"../../Manager/ListenerManager":6,"../../Manager/ReportManager":20,"../../SDK/GameMsg":19,"../../Manager/SoundManager":14,"../../../../game/scripts/Data/ConstValue":1,"../../Manager/SyncDataManager":15,"../../SDK/T2M":8,"../BaseUI":22,"../../Utils/UIHelp":35,"../../Manager/UIManager":12},"path":"preview-scripts/assets/frame/scripts/UI/Panel/BaseGamePanel.js"},{"deps":{"./BoundingBoxHelp":36},"path":"preview-scripts/assets/frame/scripts/Utils/BoundingBoxDemo.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/UI/AdaptiveScreen.js"},{"deps":{"../UI/BaseUI":22},"path":"preview-scripts/assets/frame/scripts/Manager/UIManager.js"},{"deps":{"../../../game/scripts/Manager/EditorManager":50,"../Data/FrameMsgType":39,"../Manager/ListenerManager":6,"../Http/NetWork":7,"../Manager/UIManager":12,"../Manager/ReportManager":20,"../Manager/SyncDataManager":15,"../SDK/GameMsg":19,"../Manager/SoundManager":14,"../SDK/T2M":8,"../Utils/UIHelp":35},"path":"preview-scripts/assets/frame/scripts/UI/GameMain.js"},{"deps":{"../Data/FrameConstValue":5,"../Http/NetWork":7,"./ListenerManager":6,"../Data/FrameMsgType":39,"./UIManager":12,"../SDK/GameMsg":19},"path":"preview-scripts/assets/frame/scripts/Manager/SoundManager.js"},{"deps":{"../../../frame/scripts/Manager/ReportManager":20,"../../../frame/scripts/Data/FrameSyncData":3,"../../../game/scripts/Data/CustomSyncData":47},"path":"preview-scripts/assets/frame/scripts/Manager/SyncDataManager.js"},{"deps":{"../../Manager/ListenerManager":6,"../../Data/FrameMsgType":39,"../../Manager/UIManager":12,"../BindNode":17},"path":"preview-scripts/assets/frame/scripts/UI/Item/MaskRecover.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/UI/BindNode.js"},{"deps":{"../Data/FrameConstValue":5,"./BaseUI":22},"path":"preview-scripts/assets/frame/scripts/UI/BaseFrameUI.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/SDK/GameMsg.js"},{"deps":{"../../../game/scripts/Data/ConstValue":1,"../../../game/scripts/Manager/EditorManager":50,"../SDK/GameMsg":19},"path":"preview-scripts/assets/frame/scripts/Manager/ReportManager.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/UI/Item/Tip.js"},{"deps":{"../Data/FrameConstValue":5,"../Manager/ListenerManager":6,"./BindNode":17},"path":"preview-scripts/assets/frame/scripts/UI/BaseUI.js"},{"deps":{"../../Manager/ListenerManager":6,"../../Manager/UIManager":12,"../../Data/FrameMsgType":39,"../../Utils/UIHelp":35,"../BindNode":17},"path":"preview-scripts/assets/frame/scripts/UI/Item/MaskGlobal.js"},{"deps":{"../../Data/FrameMsgType":39,"../../SDK/T2M":8},"path":"preview-scripts/assets/frame/scripts/UI/Item/replayBtn.js"},{"deps":{"../../Utils/UIHelp":35,"./../../SDK/GameMsg":19,"./../../Manager/SoundManager":14,"./../BaseFrameUI":18},"path":"preview-scripts/assets/frame/scripts/UI/Panel/ErrorPanel.js"},{"deps":{"../../Manager/ListenerManager":6,"../BindNode":17,"../../Data/FrameMsgType":39},"path":"preview-scripts/assets/frame/scripts/UI/Item/TeacherPanelLoading.js"},{"deps":{"../../../../game/scripts/UI/panel/TeacherPanel":54,"../../../../game/scripts/Data/ConstValue":1,"../../Manager/UIManager":12,"../../../../game/scripts/UI/panel/GamePanel":46,"../../Http/NetWork":7,"../../SDK/GameMsg":19,"../BaseFrameUI":18,"../../Manager/SoundManager":14},"path":"preview-scripts/assets/frame/scripts/UI/Panel/LoadingUI.js"},{"deps":{"../../Http/NetWork":7,"../../../../game/scripts/Data/ConstValue":1,"../BaseFrameUI":18,"../../../../game/scripts/Manager/EditorManager":50,"../../Utils/UIHelp":35},"path":"preview-scripts/assets/frame/scripts/UI/Panel/SubmissionPanel.js"},{"deps":{"./../../Manager/SoundManager":14,"../../Utils/Tools":37,"../../SDK/T2M":8,"../BaseFrameUI":18,"../../Data/FrameMsgType":39,"../../../../game/scripts/Data/ConstValue":1,"../../Manager/UIManager":12,"../../Utils/UIHelp":35},"path":"preview-scripts/assets/frame/scripts/UI/Panel/OverTips.js"},{"deps":{"../../../../game/scripts/Manager/EditorManager":50,"./../../Manager/SoundManager":14,"../../Manager/ReportManager":20,"../../Utils/Tools":37,"../../Utils/UIHelp":35,"../../../../game/scripts/Data/ConstValue":1,"../BaseFrameUI":18},"path":"preview-scripts/assets/frame/scripts/UI/Panel/StarCount.js"},{"deps":{"../../../../game/scripts/Data/ConstValue":1,"../../Http/NetWork":7,"../../Utils/UIHelp":35,"../BaseUI":22,"../../../../game/scripts/Manager/EditorManager":50},"path":"preview-scripts/assets/frame/scripts/UI/Panel/BaseTeacherPanel.js"},{"deps":{"./../../Manager/ListenerManager":6,"../../Data/FrameMsgType":39,"../BaseFrameUI":18,"../../Utils/UIHelp":35,"../../SDK/T2M":8,"../../Manager/ReportManager":20,"../../Manager/SoundManager":14},"path":"preview-scripts/assets/frame/scripts/UI/Panel/UploadAndReturnPanel.js"},{"deps":{"../../SDK/T2M":8,"../../Utils/UIHelp":35,"../../Data/FrameMsgType":39,"../BaseFrameUI":18},"path":"preview-scripts/assets/frame/scripts/UI/Panel/AffirmTips.js"},{"deps":{"../Item/Tip":21,"../BaseFrameUI":18},"path":"preview-scripts/assets/frame/scripts/UI/Panel/TipUI.js"},{"deps":{"../../../game/scripts/UI/panel/GamePanel":46,"../Data/FrameMsgType":39,"../../../game/scripts/UI/panel/TeacherPanel":54,"../Manager/ListenerManager":6,"../UI/Panel/AffirmTips":33,"../Manager/UIManager":12,"../UI/Panel/OverTips":29,"../UI/Panel/StarCount":30,"../UI/Panel/UploadAndReturnPanel":32,"../UI/Panel/ErrorPanel":25,"../UI/Panel/SubmissionPanel":28,"../UI/Panel/TipUI":34},"path":"preview-scripts/assets/frame/scripts/Utils/UIHelp.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/BoundingBoxHelp.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/Tools.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/MathUtils.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Data/FrameMsgType.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Data/EventType.js"},{"deps":{"./../Manager/SoundManager":14},"path":"preview-scripts/assets/frame/scripts/Utils/AudioPlayExtension.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/HitTest.js"},{"deps":{"../../../../frame/scripts/Manager/ListenerManager":6,"../../../../frame/scripts/Manager/SyncDataManager":15,"../../../../frame/scripts/Manager/SoundManager":14,"../../../../frame/scripts/Utils/Tools":37,"../../Data/EventType":40,"./FillArea2":48,"./OptionItem2":53,"./SoundConfig":56},"path":"preview-scripts/assets/game/scripts/UI/Item/Duomaomao5.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Manager/GameManager.js"},{"deps":{"../../../../frame/scripts/SDK/T2M":8},"path":"preview-scripts/assets/game/scripts/UI/Components/ButtonSync.js"},{"deps":{"../../../../frame/scripts/UI/Panel/BaseGamePanel":9,"../../../../frame/scripts/Manager/ListenerManager":6,"../../../../frame/scripts/Manager/SyncDataManager":15,"../../Data/EventType":40,"../../Manager/EditorManager":50,"../Item/Duomaomao5_2":49},"path":"preview-scripts/assets/game/scripts/UI/panel/GamePanel.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Data/CustomSyncData.js"},{"deps":{"../../../../frame/scripts/Manager/SoundManager":14,"../../Data/EventType":40,"../../../../frame/scripts/Manager/ListenerManager":6,"./SoundConfig":56},"path":"preview-scripts/assets/game/scripts/UI/Item/FillArea2.js"},{"deps":{"../../../../frame/scripts/Manager/ListenerManager":6,"../../../../frame/scripts/Manager/SoundManager":14,"../../../../frame/scripts/Utils/Tools":37,"../../../../frame/scripts/Manager/SyncDataManager":15,"../../Data/EventType":40,"./SoundConfig":56,"./OptionItem2":53,"./FillArea2":48},"path":"preview-scripts/assets/game/scripts/UI/Item/Duomaomao5_2.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Manager/EditorManager.js"},{"deps":{"../../../../frame/scripts/Manager/SoundManager":14,"./SoundConfig":56,"../../Data/EventType":40,"../../../../frame/scripts/Manager/ListenerManager":6,"../../../../frame/scripts/Manager/SyncDataManager":15,"../../../../frame/scripts/Utils/HitTest":42,"../../../../frame/scripts/Utils/Tools":37},"path":"preview-scripts/assets/game/scripts/UI/Item/OptionItem.js"},{"deps":{"../../../../frame/scripts/Manager/ListenerManager":6,"../../Data/EventType":40},"path":"preview-scripts/assets/game/scripts/UI/Item/FillArea.js"},{"deps":{"../../../../frame/scripts/Manager/SoundManager":14,"../../../../frame/scripts/Utils/Tools":37,"../../../../frame/scripts/Manager/ListenerManager":6,"../../Data/EventType":40,"../../../../frame/scripts/Manager/SyncDataManager":15,"./SoundConfig":56,"./FillArea2":48},"path":"preview-scripts/assets/game/scripts/UI/Item/OptionItem2.js"},{"deps":{"../../../../frame/scripts/Manager/ListenerManager":6,"../../../../frame/scripts/Data/FrameMsgType":39,"../../../../frame/scripts/Manager/UIManager":12,"../../../../frame/scripts/UI/Panel/BaseTeacherPanel":31,"../../Manager/EditorManager":50,"../../../../frame/scripts/Utils/UIHelp":35,"./GamePanel":46},"path":"preview-scripts/assets/game/scripts/UI/panel/TeacherPanel.js"},{"deps":{"../../../../frame/scripts/SDK/T2M":8},"path":"preview-scripts/assets/game/scripts/UI/Components/DragSync.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/UI/Item/SoundConfig.js"},{"deps":{"../../../../frame/scripts/Manager/ListenerManager":6,"../../../../frame/scripts/Utils/UIHelp":35,"../../../../frame/scripts/Manager/SoundManager":14,"../../Data/EventType":40,"../../../../frame/scripts/Manager/SyncDataManager":15,"../../../../frame/scripts/Utils/Tools":37,"./OptionItem":51,"./SoundConfig":56},"path":"preview-scripts/assets/game/scripts/UI/Item/DuoMaoMao4.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            let depIndex = m.deps[request];
            // dependence script was excluded
            if (depIndex === -1) {
                return null;
            }
            else {
                requestScript = scripts[ m.deps[request] ];
            }
        }
        
        let requestPath = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                requestPath = name2path[request];
            }

            if (!requestPath) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            requestPath = formatPath(requestScript.path);
        }

        let requestModule = modules[requestPath];
        if (!requestModule) {
            console.warn('Can not find request module for path : ' + requestPath);
            return null;
        }

        if (!requestModule.module && requestModule.func) {
            requestModule.func();
        }

        if (!requestModule.module) {
            console.warn('Can not find requestModule.module for path : ' + path);
            return null;
        }

        return requestModule.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }

                let evalTime = 'eval __quick_compile_project__ : ' + srcs.length + ' files';
                console.time && console.time(evalTime);
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd(evalTime);
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    