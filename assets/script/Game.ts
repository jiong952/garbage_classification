// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    optionNodes:cc.Node[]=[];
    
    @property(cc.AudioClip)
    startaudio: cc.AudioClip = null;
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }
    click(){
        if(this.startaudio != null)
        {
        cc.audioEngine.play(this.startaudio, false, 1);
        }
    }
    getRandomWaste(){
        for(let i=0;i<5;i++){
            let index=Math.floor(Math.random()*this.optionNodes.length);
            while(this.optionNodes[index].active){
                index=Math.floor(Math.random()*this.optionNodes.length);
            }
            this.optionNodes[index].active=true;
    }
}
    gameStartTips(){
        let wastenode:cc.Node=cc.find("Canvas/学校场景/开始分类");
        wastenode.active=false;
    }

    // update (dt) {}
}
