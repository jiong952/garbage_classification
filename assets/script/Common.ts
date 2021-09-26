// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;
import ResultDialog from "./ResultDialog";
@ccclass
export default class Common extends cc.Component {


    //得分统计
    static health:number=50;
    static process:number=0;
    static resultDialog:ResultDialog=null;
    

    // LIFE-CYCLE CALLBACKS:

     onLoad () {
         Common.resultDialog=cc.find("Canvas/闯关结果").getComponent('ResultDialog');

     }

     static resetGame(){
        let hpBarNode:cc.Node = cc.find("Canvas/学校场景/血条new");
        let hpBar:cc.ProgressBar = hpBarNode.getComponent(cc.ProgressBar);

        let progressBarNode:cc.Node = cc.find("Canvas/学校场景/进度条new");
        let progressBar:cc.ProgressBar = progressBarNode.getComponent(cc.ProgressBar);

         for(let i=1;i<=8;i++){
            let wastenode:cc.Node=cc.find("Canvas/学校场景/垃圾/"+i);
            wastenode.active=false;
         }
         let starttips:cc.Node=cc.find("Canvas/学校场景/开始分类");
         starttips.active=true;
         Common.health=50;
         hpBar.progress=0;
         Common.process=0;
         progressBar.progress=1;
     }

    // update (dt) {}
}
