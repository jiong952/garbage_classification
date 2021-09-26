// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

	
import Common from "./Common";
@ccclass
export default class NewClass extends cc.Component {



    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }
    static show(){
        let wintips:cc.Node=cc.find("Canvas/闯关结果/闯关成功");
        let game:cc.Node=cc.find("Canvas/学校场景");

        let w_hpBarNode:cc.Node = cc.find("Canvas/闯关结果/闯关成功/血条new");
        let w_hpBar:cc.ProgressBar = w_hpBarNode.getComponent(cc.ProgressBar);
        let w_progressBarNode:cc.Node = cc.find("Canvas/闯关结果/闯关成功/进度条new");
        let w_progressBar:cc.ProgressBar = w_progressBarNode.getComponent(cc.ProgressBar);

        let f_hpBarNode:cc.Node = cc.find("Canvas/闯关结果/闯关失败/血条new");
        let f_hpBar:cc.ProgressBar = f_hpBarNode.getComponent(cc.ProgressBar);
        let f_progressBarNode:cc.Node = cc.find("Canvas/闯关结果/闯关失败/进度条new");
        let f_progressBar:cc.ProgressBar = f_progressBarNode.getComponent(cc.ProgressBar);

        w_hpBar.progress = f_hpBar.progress= 1-Common.health/50;
        w_progressBar.progress = f_progressBar.progress =1- Common.process/100;

        if(Common.process>=50){
            if(Common.process==50&&Common.health==50){        //连续5次都正确，三星通过，一次没错
                let triStars:cc.Node=cc.find("Canvas/闯关结果/闯关成功/三星");
                triStars.active=true;
                wintips.active=true;
                game.active=false;
            }
            else if(Common.process==60&&Common.health==40||Common.process==70&&Common.health==30){        //6次，2星通过，错两次以内
                let twoStars:cc.Node=cc.find("Canvas/闯关结果/闯关成功/二星");
                twoStars.active=true;
                wintips.active=true;
                game.active=false;
            }
            else if(Common.process==80&&Common.health==20||Common.process==90&&Common.health==10){        //9次，1星通过，错四次以内
                let oneStars:cc.Node=cc.find("Canvas/闯关结果/闯关成功/一星");
                oneStars.active=true;
                wintips.active=true;
                game.active=false;
            }
        }        
        //血条为0或进度条满，结束游戏
        if(Common.health==0 || Common.process==100){
            let failtips:cc.Node=cc.find("Canvas/闯关结果/闯关失败");
            failtips.active=true;
            game.active=false;
        }
    }
    onReplay(){
        Common.resetGame();
    }

    // update (dt) {}
}