import { ListenerManager } from "../../../../frame/scripts/Manager/ListenerManager";
import { SoundManager } from "../../../../frame/scripts/Manager/SoundManager";
import { SyncDataManager } from "../../../../frame/scripts/Manager/SyncDataManager";
import { HitTest } from "../../../../frame/scripts/Utils/HitTest";
import { Tools } from "../../../../frame/scripts/Utils/Tools";
import { EventType } from "../../Data/EventType";
import FillArea from "./FillArea";
import { SoundConfig } from "./SoundConfig";


const { ccclass, property } = cc._decorator;

@ccclass
export default class OptionItem extends cc.Component {
    @property(cc.Integer)
    public index: number = 0;
    @property(cc.Node)
    private fillArea: cc.Node = null;

    private _startPos: cc.Vec3 = null;
    private _startParent: cc.Node = null;
    protected onLoad(): void {
        this._startParent = this.node.parent;
        this._startPos = this.node.position;
    }

    public setOriginPos(pos: cc.Vec3, parent: cc.Node) {
        this._startPos = pos;
        this._startParent = parent;
    }

    private onDragStart(event: any) {
        let pos = event.target.parent.convertToWorldSpaceAR(cc.v2(event.pos.x, event.pos.y));
        // this.node.getChildByName('yinying').active = false;
    }

    private onDragMove(event: any) {
        let pos = event.target.parent.convertToWorldSpaceAR(cc.v2(event.pos.x, event.pos.y));
        ListenerManager.dispatch(EventType.DRAG_OPTION, pos);
    }

    private onDragEnd(event: any) {
        let pos = event.target.parent.convertToWorldSpaceAR(cc.v2(event.pos.x, event.pos.y));
        if (event.isClick) {
            if (this.node.parent.name == this.fillArea.name) {
                return;
            }
            let effect = this.node.getChildByName('putongdianji');
            effect.active = true;
            effect.position = cc.v3(0, 0);
            Tools.playSpine(effect.getComponent(sp.Skeleton), 'animation', false, () => {
                effect.active = false;
            });
            ListenerManager.dispatch(EventType.ROTATE_ITEM, this.index);
        } else {
            if (HitTest.posInRect(new cc.Vec2(pos.x, pos.y), this.fillArea)) {
                ListenerManager.dispatch(EventType.ON_FILL_ITEM, this.node);
            } else {
                SoundManager.playEffect(SoundConfig.soudlist["错误提示"], false);
                this.reset();
            }
        }
    }

    private onClick(data: any) {
        if (SyncDataManager.getSyncData().customSyncData.curStep == 1) return;
        ListenerManager.dispatch(EventType.ON_CLICK_ITEM, { index: this.index, name: this.node.name });
        let effect = this.node.getChildByName('putongdianji');
        effect.active = true;
        effect.position = cc.v3(data.pos.x, data.pos.y);
        Tools.playSpine(effect.getComponent(sp.Skeleton), 'animation', false, () => {
            effect.active = false;
        });
    }

    public closeClickNode() {
        this.node.getChildByName('clickNode').active = false;
    }

    public showClickNode() {
        this.node.getChildByName('clickNode').active = true;
    }

    public reset() {
        this.node.position = this._startPos;
        this.node.parent = this._startParent;
        // this.node.getChildByName('yinying').active = true;
        let effect = this.node.getChildByName('putongdianji');
        effect.active = false;
        this.node.getChildByName('icon').active = true;
        this.node.getChildByName('ani').active = false;
    }
}
