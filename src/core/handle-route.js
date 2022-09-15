import { routes } from './../routes/routes';

window.$router = {};
window.$baseUrl = window.location.origin;
window.$_component = null;

export const Router = () => {
    const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

    const getParams = match => {
        const values = match.result.slice(1);
        const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

        return Object.fromEntries(keys.map((key, i) => {
            return [key, values[i]];
        }));
    }

    const Router = async () => {
        const potentialMatches = routes.map((route) => {
            return {
                route: route,
                result: location.pathname.match(pathToRegex(route.path))
            };
        });

        let match = potentialMatches.find((potentialMatch) => potentialMatch.result !== null);

        $router.params = getParams(match)
        await handleView(match.route)
    };

    const pushState = (url) => {
        history.pushState({}, null, url);
        Router();
    };

    const handleView = async (route) => {
        document.title = route.meta.title;

        await checkRouteView(route)
        const res = await fetch($baseUrl + route.view).then(res => res.text())
        
        if($('router-view').length > 0) {
            $('router-view').html(res)
        } else {
            $('#app').html(res)
        }
    }

    const checkRouteView = async (route) => {
        if(route.component) {
            if($_component != route.component) {
                $('router-view').remove()
                const res = await fetch($baseUrl + route.component);
        
                if(res.status == 200) {
                    const data = await res.text();
                    $('#app').html(data);
                }
            }
            $_component = route.component;
        } else {
            $('router-view').remove()
            $_component = null;
        }
    }

    window.addEventListener("popstate", Router);

    document.addEventListener("DOMContentLoaded", () => {
        document.body.addEventListener("click", (e) => {
            if (e.target.localName == "router-link") {
                e.preventDefault();
                pushState(e.target.getAttribute("link"));
            }
        });

        Router();
    });
};
