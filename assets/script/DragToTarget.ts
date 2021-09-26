// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

	
import Common from "./Common";
import ResultDialog from "./ResultDialog";
@ccclass
export default class NewClass extends cc.Component {

    @property(cc.AudioClip)
    rightaudio: cc.AudioClip = null;
    @property(cc.AudioClip)
    wrongaudio: cc.AudioClip = null;
    //血条
    hpBar:cc.ProgressBar = null;
    //进度条
    progressBar:cc.ProgressBar = null;

    @property(cc.Node)
    targetOfDragList: cc.Node[] = [];

    _oldPos = null; // 上一个位置
    start() {
        this._oldPos = this.node.position;
        let hpBarNode:cc.Node = cc.find("Canvas/学校场景/血条new");
        this.hpBar = hpBarNode.getComponent(cc.ProgressBar);
        let progressBarNode:cc.Node = cc.find("Canvas/学校场景/进度条new");
        this.progressBar = progressBarNode.getComponent(cc.ProgressBar);
    }

    onEnable() {
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);
    }

    onDisable() {
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this._onTouchMove, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);
    }

    // update (dt) {}

    _onTouchMove(touchEvent) {
        let location = touchEvent.getLocation();
        this.node.position = this.node.parent.convertToNodeSpaceAR(location); // 确定位置
    }

    _onTouchEnd(touchEvent) {
        if (this.targetOfDragList.length === 0) {
            return; // 没有目标位置
        }
        //消耗一次机会
        if(this._withinBin( touchEvent)){
            Common.process+=10;
            this.progressBar.progress-=0.1;
        }
        let inTarget = false;
        for (const targetNode of this.targetOfDragList) {
            if (this._withinTarget(targetNode, touchEvent)) {
                inTarget = true;
                this.node.active=false;
                this.node.position = this._oldPos;//回到原位
                //分类成功的反馈：包括音乐，
                        if(this.rightaudio != null)
                    {
                    cc.audioEngine.play(this.rightaudio, false, 1);
                    }
                break;
            }
        }
        if (!inTarget) {
            this.node.position = this._oldPos; // 回去
            //分类失败反馈：包括音乐，体力值
            if(this.wrongaudio != null)
            {
            cc.audioEngine.play(this.wrongaudio, false, 1);
            }
            Common.health-=10;
            this.hpBar.progress+=0.2;
        }
        //此处记录操作的次数,次数等于垃圾的数量，给出游戏结果
        ResultDialog.show();
    }

    //判断是否放到垃圾桶
    _withinBin( touchEvent){
        let location=touchEvent.getLocation();
        for(let i=1;i<=4;i++){
            let rect=cc.find("Canvas/学校场景/四个垃圾桶/垃圾桶"+i).getBoundingBox();
            let point = cc.find("Canvas/学校场景/四个垃圾桶/垃圾桶"+i).parent.convertToNodeSpaceAR(location);
            if(rect.contains(point)){
                return true;
            }
        }
        return false;
    }

    // 判断触摸事件是否在槽位里
    _withinTarget(targetNode: cc.Node, touchEvent) {
        let rect = targetNode.getBoundingBox();
        let location = touchEvent.getLocation();
        let point = targetNode.parent.convertToNodeSpaceAR(location);
        return rect.contains(point);
    }

    // update (dt) {}
}
