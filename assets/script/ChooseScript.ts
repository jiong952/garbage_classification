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
    npcaudio: cc.AudioClip = null;
    @property(cc.AudioClip)
    cancelaudio: cc.AudioClip = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }
    choosescene(){
        cc.log("进入场景选择");
        let main:cc.Node=cc.find("Canvas/主界面");
        main.active=false;
        let scenenode:cc.Node=cc.find("Canvas/选择场景界面");
        scenenode.active=true;
    }
    gotoschool(){
        cc.log("进入学校分类界面");
        
        let scenenode:cc.Node=cc.find("Canvas/选择场景界面");
        scenenode.active=false;
        let schoolnode:cc.Node=cc.find("Canvas/学校场景");
        schoolnode.active=true;
    }
    backtomain(){
        cc.log("回到主界面");
        let scenenode:cc.Node=cc.find("Canvas/选择场景界面");
        scenenode.active=false; 
        let main:cc.Node=cc.find("Canvas/主界面");
        main.active=true;
    }
    clickNPC(){
        cc.log("触发提示");
        if(this.npcaudio != null)
        {
        cc.audioEngine.play(this.npcaudio, false, 1);
        }
        let tipsnode:cc.Node=cc.find("Canvas/学校场景/提示文本框/劝导");
        tipsnode.active=true;
    }
    canceltips(){
        cc.log("取消提示");
        if(this.cancelaudio != null)
        {
        cc.audioEngine.play(this.cancelaudio, false, 1);
        }
        let npcnode:cc.Node=cc.find("Canvas/学校场景/NPC/触发按钮");
        npcnode.active=false; 
        let tipsnode:cc.Node=cc.find("Canvas/学校场景/提示文本框/劝导");
        tipsnode.active=false;
    }
    fagain(){
        cc.log("再来一次");
        let currentnode:cc.Node=cc.find("Canvas/闯关结果/闯关失败");
        currentnode.active=false; 
        let gamenode:cc.Node=cc.find("Canvas/学校场景");
        gamenode.active=true;
    }
    wagain(){
        cc.log("再来一次");
        let currentnode:cc.Node=cc.find("Canvas/闯关结果/闯关成功");
        currentnode.active=false; 
        let gamenode:cc.Node=cc.find("Canvas/学校场景");
        gamenode.active=true;
    }
    fbacktomain(){
        cc.log("返回主界面");
        let currentnode:cc.Node=cc.find("Canvas/闯关结果/闯关失败");
        currentnode.active=false; 
        let main:cc.Node=cc.find("Canvas/主界面");
        main.active=true;
    }
    wbacktomain(){
        cc.log("返回主界面");
        let currentnode:cc.Node=cc.find("Canvas/闯关结果/闯关成功");
        currentnode.active=false; 
        let main:cc.Node=cc.find("Canvas/主界面");
        main.active=true;
    }
    tipsone(){
        cc.log("可回收垃圾tips");
        if(this.cancelaudio != null)
        {
        cc.audioEngine.play(this.cancelaudio, false, 1);
        }
        let currentnode:cc.Node=cc.find("Canvas/知识tips/分类");
        currentnode.active=false; 
        let tips:cc.Node=cc.find("Canvas/知识tips/知识卡片/可回收垃圾");
        tips.active=true;
    }
    tipstwo(){
        cc.log("有害垃圾tips");
        if(this.cancelaudio != null)
        {
        cc.audioEngine.play(this.cancelaudio, false, 1);
        }
        let currentnode:cc.Node=cc.find("Canvas/知识tips/分类");
        currentnode.active=false; 
        let tips:cc.Node=cc.find("Canvas/知识tips/知识卡片/有害垃圾");
        tips.active=true;
    }
    tipsthree(){
        cc.log("厨余垃圾tips");
        if(this.cancelaudio != null)
        {
        cc.audioEngine.play(this.cancelaudio, false, 1);
        }
        let currentnode:cc.Node=cc.find("Canvas/知识tips/分类");
        currentnode.active=false; 
        let tips:cc.Node=cc.find("Canvas/知识tips/知识卡片/厨余垃圾");
        tips.active=true;
    }
    tipsfour(){
        cc.log("其他垃圾tips");
        if(this.cancelaudio != null)
        {
        cc.audioEngine.play(this.cancelaudio, false, 1);
        }
        let currentnode:cc.Node=cc.find("Canvas/知识tips/分类");
        currentnode.active=false; 
        let tips:cc.Node=cc.find("Canvas/知识tips/知识卡片/其他垃圾");
        tips.active=true;
    }
    backtochoosetipsone(){
        cc.log("回到选择知识tips界面");
        if(this.cancelaudio != null)
        {
        cc.audioEngine.play(this.cancelaudio, false, 1);
        }
        let tips:cc.Node=cc.find("Canvas/知识tips/知识卡片/可回收垃圾");
        tips.active=false; 
        let currentnode:cc.Node=cc.find("Canvas/知识tips/分类");
        currentnode.active=true;
    }
    backtochoosetipstwo(){
        cc.log("回到选择知识tips界面");
        if(this.cancelaudio != null)
        {
        cc.audioEngine.play(this.cancelaudio, false, 1);
        }
        let tips:cc.Node=cc.find("Canvas/知识tips/知识卡片/有害垃圾");
        tips.active=false; 
        let currentnode:cc.Node=cc.find("Canvas/知识tips/分类");
        currentnode.active=true;
    }
    backtochoosetipsthree(){
        cc.log("回到选择知识tips界面");
        if(this.cancelaudio != null)
        {
        cc.audioEngine.play(this.cancelaudio, false, 1);
        }
        let tips:cc.Node=cc.find("Canvas/知识tips/知识卡片/厨余垃圾");
        tips.active=false; 
        let currentnode:cc.Node=cc.find("Canvas/知识tips/分类");
        currentnode.active=true;
    }
    backtochoosetipsfour(){
        cc.log("回到选择知识tips界面");
        if(this.cancelaudio != null)
        {
        cc.audioEngine.play(this.cancelaudio, false, 1);
        }
        let tips:cc.Node=cc.find("Canvas/知识tips/知识卡片/其他垃圾");
        tips.active=false; 
        let currentnode:cc.Node=cc.find("Canvas/知识tips/分类");
        currentnode.active=true;
    }
    gototips(){
        cc.log("进入知识tips界面");
        if(this.cancelaudio != null)
        {
        cc.audioEngine.play(this.cancelaudio, false, 1);
        }
        let currentnode:cc.Node=cc.find("Canvas/闯关结果/闯关失败");
        currentnode.active=false; 
        let tipsnode:cc.Node=cc.find("Canvas/知识tips");
        tipsnode.active=true;
    }
    backtofail(){
        cc.log("重新回到分类失败界面");
        if(this.cancelaudio != null)
        {
        cc.audioEngine.play(this.cancelaudio, false, 1);
        }
        let tipsnode:cc.Node=cc.find("Canvas/知识tips");
        tipsnode.active=false;     
        let currentnode:cc.Node=cc.find("Canvas/闯关结果/闯关失败");
        currentnode.active=true; 
    }
    result(){
        cc.log("打开垃圾分类完成知识卡片");
        if(this.cancelaudio != null)
        {
        cc.audioEngine.play(this.cancelaudio, false, 1);
        }
        let tipsnode:cc.Node=cc.find("Canvas/垃圾加工厂/分类完成");
        tipsnode.active=true;     
    }
    offtips(){
        cc.log("关掉知识卡片");
        if(this.cancelaudio != null)
        {
        cc.audioEngine.play(this.cancelaudio, false, 1);
        }
        let tipsnode:cc.Node=cc.find("Canvas/垃圾加工厂/分类完成");
        tipsnode.active=false;     
    }
    choosefactory(){
        cc.log("主界面进入垃圾加工厂");
        if(this.cancelaudio != null)
        {
        cc.audioEngine.play(this.cancelaudio, false, 1);
        }
        let main:cc.Node=cc.find("Canvas/主界面");
        main.active=false;
        let factoryode:cc.Node=cc.find("Canvas/垃圾加工厂");
        factoryode.active=true;
    }
    closefactory(){
        cc.log("退出垃圾加工厂");
        if(this.cancelaudio != null)
        {
        cc.audioEngine.play(this.cancelaudio, false, 1);
        }
        let factoryode:cc.Node=cc.find("Canvas/垃圾加工厂");
        factoryode.active=false;
        let main:cc.Node=cc.find("Canvas/主界面");
        main.active=true;
    }
    wintofactory(){
        cc.log("分类成功界面进入垃圾加工厂");
        if(this.cancelaudio != null)
        {
        cc.audioEngine.play(this.cancelaudio, false, 1);
        }
        let wintips:cc.Node=cc.find("Canvas/闯关结果/闯关成功");
        wintips.active=false;
        let factoryode:cc.Node=cc.find("Canvas/垃圾加工厂");
        factoryode.active=true;
    }
    }
    // update (dt) {}
