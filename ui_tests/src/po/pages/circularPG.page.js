const  {CircularComponent}= require("./../components");
const BasePage = require('./base.page');

class Circularpg extends BasePage{
    constructor(){
        super("/react/demos/progress-bar/semi-circular/");
        this.circularsss = new CircularComponent();
    }
}

module.exports = Circularpg;