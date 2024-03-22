import { ListenerManager } from "../../../../frame/scripts/Manager/ListenerManager";
import { SoundManager } from "../../../../frame/scripts/Manager/SoundManager";
import { SyncDataManager } from "../../../../frame/scripts/Manager/SyncDataManager";
import { HitTest } from "../../../../frame/scripts/Utils/HitTest";
import { Tools } from "../../../../frame/scripts/Utils/Tools";
import { EventType } from "../../Data/EventType";
import FillArea2 from "./FillArea2";
import { SoundConfig } from "./SoundConfig";


const { ccclass, property } = cc._decorator;

@ccclass
export default class OptionItem2 extends cc.Component {

    @property(cc.Integer)
    public index: number = 0;
    @property(cc.Integer)
    public type: number = 0;
    @property(cc.Node)
    private fillArea: cc.Node[] = [];

    private _startPos: cc.Vec3 = null;
    private _startParent: cc.Node = null;

    protected onLoad(): void {
        this._startParent = this.node.parent;
        this._startPos = this.node.position;
    }

    private onDragStart(event: any) {
        let pos = event.target.parent.convertToWorldSpaceAR(cc.v2(event.pos.x, event.pos.y));
        // this.node.getChildByName('yinying').active = false;
    }

    private onDragMove(event: any) {
        let pos = event.target.parent.convertToWorldSpaceAR(cc.v2(event.pos.x, event.pos.y));
        // ListenerManager.dispatch(EventType.DRAG_OPTION, pos);
        this.fillArea.forEach((fillNode) => {
            fillNode.getComponent(FillArea2).showHighlight(false);
        });

        if (SyncDataManager.getSyncData().customSyncData.curStep == 0) {
            let isHitArea_1 = this.posInRect(new cc.Vec2(pos.x, pos.y), this.fillArea[0]);
            let isHitArea_2 = this.posInRect(new cc.Vec2(pos.x, pos.y), this.fillArea[1]);
            let isHitArea_3 = this.posInRect(new cc.Vec2(pos.x, pos.y), this.fillArea[2]);
            let isHitArea_4 = this.posInRect(new cc.Vec2(pos.x, pos.y), this.fillArea[3]);

            if ((isHitArea_2 && isHitArea_2) || (isHitArea_2 && isHitArea_4)) {
                this.fillArea[1].getComponent(FillArea2).showHighlight(true);
            } else if (isHitArea_3 && isHitArea_4) {
                this.fillArea[3].getComponent(FillArea2).showHighlight(true);
            } else if (isHitArea_1) {
                this.fillArea[0].getComponent(FillArea2).showHighlight(true);
            } else if (isHitArea_2) {
                this.fillArea[1].getComponent(FillArea2).showHighlight(true);
            } else if (isHitArea_3) {
                this.fillArea[2].getComponent(FillArea2).showHighlight(true);
            } else if (isHitArea_4) {
                this.fillArea[3].getComponent(FillArea2).showHighlight(true);
            }
        } else if (SyncDataManager.getSyncData().customSyncData.curStep == 1) {
            let isHitArea_0 = this.posInRect(new cc.Vec2(pos.x, pos.y), this.fillArea[0]);
            let isHitArea_1 = this.posInRect(new cc.Vec2(pos.x, pos.y), this.fillArea[1]);
            let isHitArea_2 = this.posInRect(new cc.Vec2(pos.x, pos.y), this.fillArea[2]);
            let isHitArea_3 = this.posInRect(new cc.Vec2(pos.x, pos.y), this.fillArea[3]);
            let isHitArea_4 = this.posInRect(new cc.Vec2(pos.x, pos.y), this.fillArea[4]);

            if ((isHitArea_0 && isHitArea_1)) {
                this.fillArea[1].getComponent(FillArea2).showHighlight(true);
            } else if (isHitArea_1 && isHitArea_2) {
                this.fillArea[2].getComponent(FillArea2).showHighlight(true);
            } else if (isHitArea_2 && isHitArea_3) {
                this.fillArea[3].getComponent(FillArea2).showHighlight(true);
            } else if (isHitArea_3 && isHitArea_4) {
                this.fillArea[4].getComponent(FillArea2).showHighlight(true);
            } else if (isHitArea_1) {
                this.fillArea[1].getComponent(FillArea2).showHighlight(true);
            } else if (isHitArea_2) {
                this.fillArea[2].getComponent(FillArea2).showHighlight(true);
            } else if (isHitArea_3) {
                this.fillArea[3].getComponent(FillArea2).showHighlight(true);
            } else if (isHitArea_4) {
                this.fillArea[4].getComponent(FillArea2).showHighlight(true);
            } else if (isHitArea_0) {
                this.fillArea[0].getComponent(FillArea2).showHighlight(true);
            }
        }
    }

    private onDragEnd(event: any) {
        this.fillArea.forEach((fillNode) => {
            fillNode.getComponent(FillArea2).showHighlight(false);
        });
        let pos = event.target.parent.convertToWorldSpaceAR(cc.v2(event.pos.x, event.pos.y));
        if (SyncDataManager.getSyncData().customSyncData.curStep == 0) {
            if (event.isClick) {
                ListenerManager.dispatch(EventType.ROTATE_ITEM, this.index);
                let effect = this.node.getChildByName('putongdianji');
                effect.active = true;
                effect.position = cc.v3(0, 0);
                Tools.playSpine(effect.getComponent(sp.Skeleton), 'animation', false, () => {
                    effect.active = false;
                });
            } else {
                let isHitArea_0 = this.posInRect(new cc.Vec2(pos.x, pos.y), this.fillArea[0]);
                let isHitArea_1 = this.posInRect(new cc.Vec2(pos.x, pos.y), this.fillArea[1]);
                let isHitArea_2 = this.posInRect(new cc.Vec2(pos.x, pos.y), this.fillArea[2]);
                let isHitArea_3 = this.posInRect(new cc.Vec2(pos.x, pos.y), this.fillArea[3]);

                this.reset();

                if ((isHitArea_1 && isHitArea_2) || (isHitArea_1 && isHitArea_3)) {
                    ListenerManager.dispatch(EventType.ON_FILL_ITEM2, { areaIndex: 1, itemIndex: this.index });
                } else if (isHitArea_2 && isHitArea_3) {
                    ListenerManager.dispatch(EventType.ON_FILL_ITEM2, { areaIndex: 2, itemIndex: this.index });
                } else if (isHitArea_0) {
                    ListenerManager.dispatch(EventType.ON_FILL_ITEM2, { areaIndex: 0, itemIndex: this.index });
                } else if (isHitArea_1) {
                    ListenerManager.dispatch(EventType.ON_FILL_ITEM2, { areaIndex: 1, itemIndex: this.index });
                } else if (isHitArea_2) {
                    ListenerManager.dispatch(EventType.ON_FILL_ITEM2, { areaIndex: 2, itemIndex: this.index });
                } else if (isHitArea_3) {
                    ListenerManager.dispatch(EventType.ON_FILL_ITEM2, { areaIndex: 3, itemIndex: this.index });
                } else {
                    SoundManager.playEffect(SoundConfig.soudlist["错误提示"], false);
                }
            }
        } else if (SyncDataManager.getSyncData().customSyncData.curStep == 1) {
            if (event.isClick) {
                ListenerManager.dispatch(EventType.ROTATE_ITEM2, this.index);
                let effect = this.node.getChildByName('putongdianji');
                effect.active = true;
                effect.position = cc.v3(0, 0);
                Tools.playSpine(effect.getComponent(sp.Skeleton), 'animation', false, () => {
                    effect.active = false;
                });
            } else {
                let isHitArea_0 = this.posInRect(new cc.Vec2(pos.x, pos.y), this.fillArea[0]);
                let isHitArea_1 = this.posInRect(new cc.Vec2(pos.x, pos.y), this.fillArea[1]);
                let isHitArea_2 = this.posInRect(new cc.Vec2(pos.x, pos.y), this.fillArea[2]);
                let isHitArea_3 = this.posInRect(new cc.Vec2(pos.x, pos.y), this.fillArea[3]);
                let isHitArea_4 = this.posInRect(new cc.Vec2(pos.x, pos.y), this.fillArea[4]);
                this.reset();

                if ((isHitArea_0 && isHitArea_1)) {
                    ListenerManager.dispatch(EventType.ON_FILL_ITEM3, { areaIndex: 1, itemIndex: this.index });
                } else if (isHitArea_1 && isHitArea_2) {
                    ListenerManager.dispatch(EventType.ON_FILL_ITEM3, { areaIndex: 2, itemIndex: this.index });
                } else if (isHitArea_2 && isHitArea_3) {
                    ListenerManager.dispatch(EventType.ON_FILL_ITEM3, { areaIndex: 3, itemIndex: this.index });
                } else if (isHitArea_3 && isHitArea_4) {
                    ListenerManager.dispatch(EventType.ON_FILL_ITEM3, { areaIndex: 4, itemIndex: this.index });
                } else if (isHitArea_1) {
                    ListenerManager.dispatch(EventType.ON_FILL_ITEM3, { areaIndex: 1, itemIndex: this.index });
                } else if (isHitArea_2) {
                    ListenerManager.dispatch(EventType.ON_FILL_ITEM3, { areaIndex: 2, itemIndex: this.index });
                } else if (isHitArea_3) {
                    ListenerManager.dispatch(EventType.ON_FILL_ITEM3, { areaIndex: 3, itemIndex: this.index });
                } else if (isHitArea_4) {
                    ListenerManager.dispatch(EventType.ON_FILL_ITEM3, { areaIndex: 4, itemIndex: this.index });
                } else if (isHitArea_0) {
                    ListenerManager.dispatch(EventType.ON_FILL_ITEM3, { areaIndex: 0, itemIndex: this.index });
                } else {
                    SoundManager.playEffect(SoundConfig.soudlist["错误提示"], false);
                }
            }
        }
    }

    private onClick(event: any) {
        ListenerManager.dispatch(EventType.ON_CLICK_ITEM, { index: this.index, name: this.node.name });
    }

    public reset() {
        this.node.position = this._startPos;
        this.node.parent = this._startParent;

        let effect = this.node.getChildByName('putongdianji');
        effect.active = false;
    }

    private posInRect(pos: cc.Vec2, rect: cc.Node): boolean {
        let p = rect.parent.convertToWorldSpaceAR(rect.position);
        let angle = -rect.angle;
        let lb = cc.v2(p.x - rect.width / 2, p.y - rect.height / 2);
        let rt = cc.v2(p.x + rect.width / 2, p.y + rect.height / 2);
        let center = cc.v2((lb.x + rt.x) / 2, (lb.y + rt.y) / 2);
        let x = pos.x - center.x;
        let y = pos.y - center.y;
        let x1 = x * Math.cos(angle * Math.PI / 180) - y * Math.sin(angle * Math.PI / 180) + center.x;
        let y1 = x * Math.sin(angle * Math.PI / 180) + y * Math.cos(angle * Math.PI / 180) + center.y;
        let b = x1 >= lb.x && y1 >= lb.y && x1 <= rt.x && y1 <= rt.y;
        return b;
    }
}
