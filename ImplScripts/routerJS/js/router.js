class Router {
    constructor(routes) {
        this.routes = routes
        this._loadInitialRoute()
    }

    _matchURLtoRoute(urlSegs) {
        const matchedRoute = this.routes.find(route => {
            const routePathSegs = route.path.split('/').slice(1)

            if(routePathSegs.length !== urlSegs.length) {
                return false
            }
            return routePathSegs.every( (routePathSeg, i) => routePathSeg === urlSegs[i] )
        })
        return matchedRoute
    }

    loadRoute(urlSegs) {
        urlSegs = urlSegs.split('/')
        const matchedRoute = this._matchURLtoRoute(urlSegs),
            url = `/${urlSegs.join('/')}`
        history.pushState({}, 'pagina actual', url)

        const routerOutElm = document.getElementById('data-router')

        routerOutElm.innerHTML = matchedRoute.template
    }

    _loadInitialRoute() {
        const pahtnameSplit = window.location.pathname.split('/'),
            pathSegs = pahtnameSplit.length > 1 ? pahtnameSplit.slice(1) :  ''

        this.loadRoute(pathSegs.join('/'))
    }

}