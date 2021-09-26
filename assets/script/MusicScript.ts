// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.SpriteFrame)
    iconon:cc.SpriteFrame=null;

    @property(cc.SpriteFrame)
    iconoff:cc.SpriteFrame=null;

    isMute:Boolean=false;
    // LIFE-CYCLE CALLBACKS:

     onLoad () {
         this.node.on('touchstart',this.onClick,this);
     }

    start () {

    }

    onClick(){
        this.isMute=!this.isMute;
        let audioSource:cc.AudioSource=cc.find('Canvas/垃圾加工厂').getComponent(cc.AudioSource);
        let sprite:cc.Sprite=this.node.getComponent(cc.Sprite);
        if(this.isMute){
            audioSource.mute=true;
            sprite.spriteFrame=this.iconoff;
        }
        else {
            audioSource.mute=false;
            sprite.spriteFrame=this.iconon;
        }
    }

    // update (dt) {}
}
