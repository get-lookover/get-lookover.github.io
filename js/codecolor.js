    codeColor(document.getElementById("panel_1"));
    codeColor(document.getElementById("panel_2"));
    codeColor(document.getElementById("panel_3"));
    codeColor(document.getElementById("panel_4"));
    codeColor(document.getElementById("panel_5"));
    codeColor(document.getElementById("panel_6"));
    codeColor(document.getElementById("panel_7"));
    codeColor(document.getElementById("panel_8"));
    codeColor(document.getElementById("panel_9"));
    codeColor(document.getElementById("panel_10"));
    codeColor(document.getElementById("panel_11"));
    codeColor(document.getElementById("panel_12"));
    codeColor(document.getElementById("panel_13"));
    codeColor(document.getElementById("panel_14"));
    codeColor(document.getElementById("panel_15"));
    codeColor(document.getElementById("panel_16"));
    codeColor(document.getElementById("panel_17"));
    codeColor(document.getElementById("panel_18"));
    codeColor(document.getElementById("panel_19"));
    codeColor(document.getElementById("panel_20"));
    codeColor(document.getElementById("panel_21"));
    codeColor(document.getElementById("panel_22"));
    codeColor(document.getElementById("panel_23"));
    codeColor(document.getElementById("panel_24"));
    codeColor(document.getElementById("panel_25"));
    codeColor(document.getElementById("panel_26"));
    codeColor(document.getElementById("panel_27"));
    codeColor(document.getElementById("panel_28"));
    codeColor(document.getElementById("panel_29"));
function codeColor(t, s) {
    function r(t, s, r, n, e) {
        for (var l, u, o = "", a = []; t.search(s) > -1;) l = t.search(s), u = t.indexOf(r, l), -1 == u && (u = t.length), e ? (a.push(n(t.substring(l, u + r.length))), t = t.substring(0, l) + e + t.substr(u + r.length)) : (o += t.substring(0, l), o += n(t.substring(l, u + r.length)), t = t.substr(u + r.length));
        this.rest = o + t, this.arr = a
    }

    function n(t) {
        var s, n, l, u, i, c = t,
            f = "";
        for (s = new r(c, "&lt;!--", "--&gt;", o, "W3HTMLCOMMENTPOS"), c = s.rest; c.indexOf("&lt;") > -1;) u = "", n = c.indexOf("&lt;"), "&LT;STYLE" == c.substr(n, 9).toUpperCase() && (u = "css"), "&LT;SCRIPT" == c.substr(n, 10).toUpperCase() && (u = "javascript"), l = c.indexOf("&gt;", n), -1 == l && (l = c.length), f += c.substring(0, n), f += e(c.substring(n, l + 4)), c = c.substr(l + 4), "css" == u && (l = c.indexOf("&lt;/style&gt;"), l > -1 && (f += a(c.substring(0, l)), c = c.substr(l))), "javascript" == u && (l = c.indexOf("&lt;/script&gt;"), l > -1 && (f += g(c.substring(0, l)), c = c.substr(l)));
        for (c = f + c, i = 0; i < s.arr.length; i++) c = c.replace("W3HTMLCOMMENTPOS", s.arr[i]);
        return c
    }

    function e(t) {
        for (var s, r, n, e = t, u = ""; e.search(/(\s|<br>)/) > -1;) s = e.search(/(\s|<br>)/), r = e.indexOf("&gt;"), -1 == r && (r = e.length), u += e.substring(0, s), u += l(e.substring(s, r)), e = e.substr(r);
        return n = u + e, n = "<span style=color:" + T + ">&lt;</span>" + n.substring(4), "&gt;" == n.substr(n.length - 4, 4) && (n = n.substring(0, n.length - 4) + "<span style=color:" + T + ">&gt;</span>"), "<span style=color:" + w + ">" + n + "</span>"
    }

    function l(t) {
        for (var s, r, n, e, l, o = t, a = ""; o.indexOf("=") > -1;) r = -1, s = o.indexOf("="), n = o.indexOf("'", s), e = o.indexOf('"', s), l = o.indexOf(" ", s + 2), l > -1 && (l < n || -1 == n) && (l < e || -1 == e) ? r = o.indexOf(" ", s) : e > -1 && (e < n || -1 == n) && (e < l || -1 == l) ? r = o.indexOf('"', o.indexOf('"', s) + 1) : n > -1 && (n < e || -1 == e) && (n < l || -1 == l) && (r = o.indexOf("'", o.indexOf("'", s) + 1)), (!r || -1 == r || r < s) && (r = o.length), a += o.substring(0, s), a += u(o.substring(s, r + 1)), o = o.substr(r + 1);
        return "<span style=color:" + E + ">" + a + o + "</span>"
    }

    function u(t) {
        return "<span style=color:" + N + ">" + t + "</span>"
    }

    function o(t) {
        return "<span style=color:" + L + ">" + t + "</span>"
    }

    function a(t) {
        var s, n, e, l, u, a, c, f = t,
            g = "";
        for (e = new r(f, /\/\*/, "*/", o, "W3CSSCOMMENTPOS"), f = e.rest; f.search("{") > -1;) {
            for (s = f.search("{"), u = f.substr(s + 1), c = 1, a = 0, l = 0; l < u.length && ("{" == u.substr(l, 1) && (c++, a++), "}" == u.substr(l, 1) && c--, 0 != c); l++);
            for (0 != c && (a = 0), n = s, l = 0; l <= a; l++) n = f.indexOf("}", n + 1); - 1 == n && (n = f.length), g += f.substring(0, s + 1), g += i(f.substring(s + 1, n)), f = f.substr(n)
        }
        for (f = g + f, f = f.replace(/{/g, "<span style=color:" + H + ">{</span>"), f = f.replace(/}/g, "<span style=color:" + H + ">}</span>"), l = 0; l < e.arr.length; l++) f = f.replace("W3CSSCOMMENTPOS", e.arr[l]);
        return "<span style=color:" + P + ">" + f + "</span>"
    }

    function i(t) {
        var s, r, n, e, l = t,
            u = "";
        if (l.indexOf("{") > -1) return a(l);
        for (; l.search(":") > -1;) {
            for (s = l.search(":"), e = !0, n = s; 1 == e;) e = !1, r = l.indexOf(";", n), "&nbsp;" == l.substring(r - 5, r + 1) && (e = !0, n = r + 1); - 1 == r && (r = l.length), u += l.substring(0, s), u += c(l.substring(s, r + 1)), l = l.substr(r + 1)
        }
        return "<span style=color:" + W + ">" + u + l + "</span>"
    }

    function c(t) {
        var s, r = t,
            n = "";
        for (r = "<span style=color:" + H + ">:</span>" + r.substring(1); r.search(/!important/i) > -1;) s = r.search(/!important/i), n += r.substring(0, s), n += f(r.substring(s, s + 10)), r = r.substr(s + 10);
        return result = n + r, ";" == result.substr(result.length - 1, 1) && "&nbsp;" != result.substr(result.length - 6, 6) && "&lt;" != result.substr(result.length - 4, 4) && "&gt;" != result.substr(result.length - 4, 4) && "&amp;" != result.substr(result.length - 5, 5) && (result = result.substring(0, result.length - 1) + "<span style=color:" + H + ">;</span>"), "<span style=color:" + j + ">" + result + "</span>"
    }

    function f(t) {
        return "<span style=color:" + k + ";font-weight:bold;>" + t + "</span>"
    }

    function g(t) {
        var s, r, n, e, l, u, a, i, c, f, g, C = t,
            S = "",
            M = [],
            T = "";
        for (s = 0; s < C.length; s++) r = C.substr(s, 1), "\\" == r && (M.push(C.substr(s, 2)), r = "W3JSESCAPE", s++), T += r;
        for (C = T, g = 1; 1 == g && (n = v(C, "'", "'", b), e = v(C, '"', '"', b), l = v(C, /\/\*/, "*/", o), u = v(C, /\/\//, "<br>", o), i = m(C, p), a = y("js", C, h), f = O(C, d), -1 != Math.max(i[0], n[0], e[0], l[0], u[0], a[0], f[0])) && (c = x(i, n, e, l, u, a, f), -1 != c[0]);) c[0] > -1 && (S += C.substring(0, c[0]), S += c[2](C.substring(c[0], c[1])), C = C.substr(c[1]));
        for (C = S + C, s = 0; s < M.length; s++) C = C.replace("W3JSESCAPE", M[s]);
        return "<span style=color:" + A + ">" + C + "</span>"
    }

    function b(t) {
        return "<span style=color:" + J + ">" + t + "</span>"
    }

    function h(t) {
        return "<span style=color:" + I + ">" + t + "</span>"
    }

    function p(t) {
        return "<span style=color:" + U + ">" + t + "</span>"
    }

    function d(t) {
        return "<span style=color:" + z + ">" + t + "</span>"
    }

    function O(t, s) {
        var r, n, e, l, u, o = [".", "<", " ", ";", "(", "+", ")", "[", "]", ",", "&", ":", "{", "}", "../index.html", "-", "*", "|", "%"];
        if (l = t.indexOf("."), l > -1)
            for (r = t.substr(l + 1), e = 0; e < r.length; e++)
                for (cc = r[e], n = 0; n < o.length; n++)
                    if (cc.indexOf(o[n]) > -1) return u = e, [l + 1, u + l + 1, s];
        return [-1, -1, s]
    }

    function x() {
        var t, s = [];
        for (t = 0; t < arguments.length; t++) arguments[t][0] > -1 && (0 == s.length || arguments[t][0] < s[0]) && (s = arguments[t]);
        return 0 == s.length && (s = arguments[t]), s
    }

    function y(t, s, r) {
        var n, e, l, u, o = -1,
            a = -1;
        for ("js" == t && (n = ["abstract", "arguments", "boolean", "break", "byte", "case", "catch", "char", "class", "const", "continue", "debugger", "default", "delete", "do", "double", "else", "enum", "eval", "export", "extends", "false", "final", "finally", "float", "for", "function", "goto", "if", "implements", "import", "in", "instanceof", "int", "interface", "let", "long", "NaN", "native", "new", "null", "package", "private", "protected", "public", "return", "short", "static", "super", "switch", "synchronized", "this", "throw", "throws", "transient", "true", "try", "typeof", "var", "void", "volatile", "while", "with", "yield"]), e = 0; e < n.length; e++) l = s.indexOf(n[e]), l > -1 && (u = /\W/g, s.substr(l + n[e].length, 1).match(u) && s.substr(l - 1, 1).match(u) && l > -1 && (-1 == o || l < o) && (o = l, a = o + n[e].length));
        return [o, a, r]
    }

    function v(t, s, r, n) {
        var e, l;
        return e = t.search(s), l = t.indexOf(r, e + r.length), -1 == l && (l = t.length), [e, l + r.length, n]
    }

    function m(t, s) {
        var r, n, e, l, u, o = ["<br>", " ", ";", "(", "+", ")", "[", "]", ",", "&", ":", "{", "}", "../index.html", "-", "*", "|", "%", "="],
            a = 0;
        for (r = 0; r < t.length; r++)
            for (n = 0; n < o.length; n++)
                if (e = t.substr(r, o[n].length), e == o[n]) {
                    if ("-" == e && ("e" == t.substr(r - 1, 1) || "E" == t.substr(r - 1, 1))) continue;
                    if (l = r, a < l && (u = t.substring(a, l), !isNaN(u))) return [a, l, s];
                    r += o[n].length, a = r, r -= 1;
                    break
                } return [-1, -1, s]
    }
    var C = s || "html",
        S = document.getElementById(t) || t,
        M = S.innerHTML,
        T = "#b5bcc3",
        w = "#72d07b",
        E = "#74b9f6",
        N = "#a9dcf9",
        L = "#618685",
        P = "#72d07b",
        W = "#a9dcf9",
        j = "white",
        H = "currentColor",
        k = "red",
        A = "#72d07b",
        I = "#74b9f6",
        J = "#b5bcc3",
        U = "a9dcf9",
        z = "#a9dcf9";
    S.style.fontFamily = "Consolas,'Courier New', monospace", C || (C = "html"), "html" == C && (M = n(M)), "css" == C && (M = a(M)), "js" == C && (M = g(M)), S.innerHTML = M
}