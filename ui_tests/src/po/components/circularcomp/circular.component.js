const BaseComponent = require("../common/base.component")

class  CircularComponent extends BaseComponent{
    constructor(){
        super("div[class='control-section progress-bar-parent']")
    }
    get reloadBtn(){
        return this.rootEl.$("#reLoad")
    }

    get circle(){
        return this.rootEl.$("#point1")
    }
}

module.exports = CircularComponent;