import { ListenerManager } from "../../../../frame/scripts/Manager/ListenerManager";
import { SoundManager } from "../../../../frame/scripts/Manager/SoundManager";
import { EventType } from "../../Data/EventType";
import { SoundConfig } from "./SoundConfig";


const {ccclass, property} = cc._decorator;

@ccclass
export default class FillArea2 extends cc.Component {

    onLoad() {
        ListenerManager.on(EventType.DRAG_OPTION, this.onDragOption, this);
    }

    onDestroy() {
        ListenerManager.off(EventType.DRAG_OPTION, this.onDragOption, this);
    }

    private onDragOption(pos: cc.Vec2) {
        
    }

    public showHighlight(isShow: boolean) {
        this.node.getChildByName('highLight').active = isShow;
    }

    public fill(node: cc.Node) {
        SoundManager.playEffect(SoundConfig.soudlist["正确提示"], false);
        node.parent = this.node.getChildByName('fillNode');
        node.position = cc.v3(0, 0, 0);
        node.angle = 0;
    }
}
