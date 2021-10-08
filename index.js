/**
 * @file mofron-effect-dynborder/index.js
 * @brief 
 * @license MIT
 */
const Border = require("mofron-effect-border");
const eWidth = require("mofron-effect-width");
const OrderText = require("mofron-comp-ordertext");

module.exports = class extends mofron.class.Effect {
    /**
     * initialize effect
     * 
     * @param (mixed) 
     *                key-value: effect config
     * @short
     * @type private
     */
    constructor (p1) {
        try {
            super();
            this.modname("DynBorder");
            
            /* init config */
	    if (0 < arguments.length) {
                this.config(p1);
	    }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * add effect to component object
     * 
     * @param (Component) component
     */
    component (prm) {
        try {
            let ret = super.component(prm);
            if (undefined === prm) {
                return ret;
	    }
	    prm.effect([
                new Border({ speed: 500, position: 'left', width: '0.3rem', color: [35,50,235] }),
		new Border({ position: 'bottom', color: [35,50,235] }),
		new eWidth({
		    speed: 500, fromValue:'0%',
		    toValue:(undefined === prm.width()) ? '100%' : prm.width()
		})
	    ]);
	    prm.text().visible(false);
	    let fnt = prm.text().font();
	    if (null === fnt) {
                fnt = undefined;
            }
	    prm.child(new OrderText({
	        delay: 20,
	        delayOffset: 300,
	        text: prm.text().toString(),
		font: fnt,
		size: prm.text().size(),
		style: { 'margin-left' : '0.25rem' }
            }));
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
}
/* end of file */
