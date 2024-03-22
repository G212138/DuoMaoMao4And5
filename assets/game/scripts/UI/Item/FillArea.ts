import { ListenerManager } from "../../../../frame/scripts/Manager/ListenerManager";
import { EventType } from "../../Data/EventType";


const {ccclass, property} = cc._decorator;

@ccclass
export default class FillArea extends cc.Component {

    onLoad() {
        ListenerManager.on(EventType.DRAG_OPTION, this.onDragOption, this);
    }
    onDestroy() {
        ListenerManager.off(EventType.DRAG_OPTION, this.onDragOption, this);
    }

    private onDragOption(pos: cc.Vec2) {
        
    }

    public fill(node: cc.Node) {
        
    }
}
