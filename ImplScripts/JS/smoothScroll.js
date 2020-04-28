let duration = 1000,
    targetElem,
    targetPosition,
    startPosition,
    distance,
    offsetY = 86,
    startTime

const smoothScroll = (target) => {
    targetElem = target instanceof HTMLElement
                // typeof target === "string"
                // Object.getPrototypeOf(target) === HTMLElement.prototype
            ? target
            : document.querySelector(target)
    if(targetElem === undefined || targetElem === null){
        console.warn('El elemento no se encuentra en el DOM')
        return
    }
    targetPosition = Math.round(targetElem.getBoundingClientRect().top)
    startPosition = pageYOffset
    distance = targetPosition - offsetY
    startTime = null

    console.log(`inicio: ${startPosition}\n
    final: ${targetPosition}\n
    distancia: ${distance}`)

    const animation = (currentTime) => {
        if(startTime === null) startTime = currentTime
        let timeElapsed = currentTime - startTime,
            run = ease(timeElapsed,startPosition,distance,duration)
        scrollTo(0,run)
        if(timeElapsed < duration )
            requestAnimationFrame(animation)
    }

    requestAnimationFrame(animation)
}

const ease = (t, b, c, d) => {
	t /= d/2
	if (t < 1) return c/2*Math.pow(t,3) + b
	t -= 2
    return c/2*(Math.pow(t,3) + 2) + b
}