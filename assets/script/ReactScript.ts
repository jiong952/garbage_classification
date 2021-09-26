// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {



    @property(cc.AudioClip)
    audio: cc.AudioClip = null;



    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
    }
    click(){
                if(this.audio != null)
     {
         cc.audioEngine.play(this.audio, false, 1);
     }
    }

    // update (dt) {}
}
