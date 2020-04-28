const animationEq = {
    linear: (t, b, c, d) => c*t/d + b,
    // aceleración desde velocidad 0
    easeInQuad: (t, b, c, d) => {
        t /= d
        return c*t*t + b
    },
    // desacelera a velocidad 0
    easeOutQuad: (t, b, c, d) => {
        t /= d
        return -c * t*(t-2) + b
    },
    // acelera hasta la mitad, luego desacelera
    easeInOutQuad: (t, b, c, d) => {
        t /= d/2
        if (t < 1) return c/2*t*t + b
        t--
        return -c/2 * (t*(t-2) - 1) + b
    },
    easeInCubic: (t, b, c, d) => {
		t /= d
		return c*Math.pow(t,3) + b
	},
    easeOutCubic: (t, b, c, d) => {
    	t /= d
		t--
		return c*(Math.pow(t,3) + 1) + b;
    },
	easeInOutCubic: (t, b, c, d) => {
        t /= d/2
        if (t < 1) return c/2*Math.pow(t,3) + b
        t -= 2
        return c/2*(Math.pow(t,3) + 2) + b
    },
    easeInQuart: (t, b, c, d) => {
		t /= d
		return c*Math.pow(t,4) + b;
	},
	easeOutQuart: (t, b, c, d) => {
		t /= d
		t--
		return -c * (Math.pow(t,4) - 1) + b
	},
	easeInOutQuart: (t, b, c, d) => {
		t /= d/2
		if (t < 1) return c/2*Math.pow(t,4) + b
		t -= 2
		return -c/2 * (Math.pow(t,4) - 2) + b
	},
	easeInSin: (t, b, c, d) => -c * Math.cos(t/d * (Math.PI/2)) + c + b,
	easeOutSin: (t, b, c, d) => c * Math.sin(t/d * (Math.PI/2)) + b,
	easeInOutSin: (t, b, c, d) => -c/2 * (Math.cos(Math.PI*t/d) - 1) + b,
	easeInCirc: (t, b, c, d) => {
		t /= d
		return -c * (Math.sqrt(1 - t*t) - 1) + b
	},
	easeOutCirc: (t, b, c, d) => {
		t /= d
		t--
		return c * Math.sqrt(1 - t*t) + b
	},
	easeInOutCirc: (t, b, c, d) => {
		t /= d/2
		if (t < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b
		t -= 2
		return c/2 * (Math.sqrt(1 - t*t) + 1) + b
	}
}

const smoothScroll = {
    duration : 1000,
    targetPosition: 0,
    distance: 0,
    offsetY: 0,
    fxAnimation: animationEq.easeInOutCubic,

    init: function(duration, offsetY = 0, fxAnimation = '') {
        this.duration = duration
        this.offsetY = offsetY
        this.fxAnimation = this.getFxAnim(fxAnimation)
    },
    getFxAnim: fxName => {
        switch(fxName){
            case 'linear': return animationEq.linear
            case 'quad ease in': return animationEq.easeInQuad
            case 'quad ease out': return animationEq.easeOutQuad
            case 'quad ease in/out': return animationEq.easeInOutQuad
            case 'cubic ease in': return animationEq.easeInCubic
            case 'cubic ease out': return animationEq.easeOutCubic
            case 'cubic ease in/out': default: return animationEq.easeInOutCubic
            case 'quart ease in': return animationEq.easeInQuart
            case 'quart ease out': return animationEq.easeOutQuart
            case 'quart ease in/out': return animationEq.easeInOutQuart
            case 'sin ease in': return animationEq.easeInSin
            case 'sin ease out': return animationEq.easeOutSin
            case 'sin ease in/out': return animationEq.easeInOutSin
            case 'circ ease in': return animationEq.easeInCirc
            case 'circ ease out': return animationEq.easeOutCirc
            case 'circ ease in/out': return animationEq.easeInOutCirc
        }
    },
    scrollTo: function(target) {
        let startPosition = pageYOffset,
            startTime = null,
            targetElem = target instanceof HTMLElement
                        // Object.getPrototypeOf(target) === HTMLElement.prototype
                    ? target
                    : document.querySelector(target)
        if(targetElem === undefined || targetElem === null){
            console.warn('El elemento no se encuentra en el DOM')
            return
        }
        this.targetPosition = Math.round(targetElem.getBoundingClientRect().top)
        this.distance = this.targetPosition - this.offsetY
        if(Math.abs(this.distance) < 1 ) return

        const animation = currentTime => {
            if(startTime === null) startTime = currentTime
            let timeElapsed = currentTime - startTime,
                run = this.fxAnimation(timeElapsed,startPosition,this.distance,this.duration)
            scrollTo(0,run)
            if(timeElapsed < this.duration ) requestAnimationFrame(animation)
        }

        requestAnimationFrame(animation)
    }

}