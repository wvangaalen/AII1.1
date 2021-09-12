import {
    h as e,
    Fragment as n
} from "../_snowpack/pkg/preact.hVpyV6Atzm6w.js";
import m from "./components/LinkedLogo.yr6MvfaTaLS4.js";
import {
    Match as i
} from "../_snowpack/pkg/preact-router/match.neqtlfbcCt84.js";
import {
    memo as u
} from "../_snowpack/pkg/preact/compat.Tn018xXnCsM5.js";
import {
    ENV as p
} from "./env.2JTs1vDsp_kk.js";
import {
    useConfig as f
} from "./api/index.YNuULezybs1C.js";
import {
    useMemo as d
} from "../_snowpack/pkg/preact/hooks.5BhYGkK3CVDB.js";
import h, {
    Destination as t,
    Separator as a
} from "./components/NavigationDrawer.wb-D33daNe9v.js";
export default function k() {
    const {
        data: s
    } = f(), l = d(() => Object.entries(s.cameras), [s]);
    return e(h, {
        header: e(g, null)
    }, e(t, {
        href: "/",
        text: "Cameras"
    }), e(i, {
        path: "/cameras/:camera/:other?"
    }, ({
        matches: o
    }) => o ? e(n, null, e(a, null), l.map(([r]) => e(t, {
        href: `/cameras/${r}`,
        text: r
    })), e(a, null)) : null), e(i, {
        path: "/recording/:camera/:date?/:hour?/:seconds?"
    }, ({
        matches: o
    }) => o ? e(n, null, e(a, null), l.map(([r, c]) => c.record.enabled ? e(t, {
        path: `/recording/${r}/:date?/:hour?/:seconds?`,
        href: `/recording/${r}`,
        text: r
    }) : null), e(a, null)) : null), e(t, {
        href: "/birdseye",
        text: "Operator View"
    }), e(t, {
        href: "/events",
        text: "Events"
    }), e(t, {
        href: "/debug",
        text: "Debug"
    }), e(a, null), e("div", {
        className: "flex flex-grow"
    }), p !== "production" ? e(n, null, e(t, {
        href: "/styleguide",
        text: "Style Guide"
    }), e(a, null)) : null, e(t, {
        className: "self-end",
        href: "",
        text: ""
    }), e(t, {
        className: "self-end",
        href: "",
        text: ""
    }))
}
const g = u(() => e("div", {
    className: "text-gray-500"
}, e(m, null)));
