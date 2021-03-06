/*! lazysizes - v5.2.2 */

!(function (e, i) {
  var a;
  e &&
    ((a = function (t) {
      i(e.lazySizes, t), e.removeEventListener("lazyunveilread", a, !0);
    }),
    (i = i.bind(null, e, e.document)),
    "object" == typeof module && module.exports
      ? i(require("lazysizes"))
      : "function" == typeof define && define.amd
      ? define(["lazysizes"], i)
      : e.lazySizes
      ? a()
      : e.addEventListener("lazyunveilread", a, !0));
})("undefined" != typeof window ? window : 0, function (t, u, f, e) {
  "use strict";
  var y,
    i,
    a = u.createElement("a").style,
    r = "objectFit" in a,
    s = /object-fit["']*\s*:\s*["']*(contain|cover)/,
    l = /object-position["']*\s*:\s*["']*(.+?)(?=($|,|'|"|;))/,
    A =
      "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
    n = /\(|\)|'/,
    d = { center: "center", "50% 50%": "center" };
  function c(o, r) {
    function s() {
      var t = o.currentSrc || o.src;
      t &&
        i !== t &&
        ((i = t),
        (d.backgroundImage =
          "url(" + (n.test(t) ? JSON.stringify(t) : t) + ")"),
        e || ((e = !0), f.rC(l, c.loadingClass), f.aC(l, c.loadedClass)));
    }
    function t() {
      f.rAF(s);
    }
    var e,
      i,
      l,
      d,
      c = f.cfg;
    (o._lazysizesParentFit = r.fit),
      o.addEventListener("lazyloaded", t, !0),
      o.addEventListener("load", t, !0),
      f.rAF(function () {
        var t,
          e,
          i,
          a = o,
          n = o.parentNode;
        "PICTURE" == n.nodeName.toUpperCase() && (n = (a = n).parentNode),
          (e = (t = a).previousElementSibling) &&
            f.hC(e, y) &&
            (e.parentNode.removeChild(e),
            (t.style.position = e.getAttribute("data-position") || ""),
            (t.style.visibility = e.getAttribute("data-visibility") || "")),
          y ||
            y ||
            ((i = u.createElement("style")),
            (y = f.cfg.objectFitClass || "lazysizes-display-clone"),
            u.querySelector("head").appendChild(i)),
          (l = o.cloneNode(!1)),
          (d = l.style),
          l.addEventListener("load", function () {
            var t = l.currentSrc || l.src;
            t && t != A && ((l.src = A), (l.srcset = ""));
          }),
          f.rC(l, c.loadedClass),
          f.rC(l, c.lazyClass),
          f.rC(l, c.autosizesClass),
          f.aC(l, c.loadingClass),
          f.aC(l, y),
          [
            "data-parent-fit",
            "data-parent-container",
            "data-object-fit-polyfilled",
            c.srcsetAttr,
            c.srcAttr,
          ].forEach(function (t) {
            l.removeAttribute(t);
          }),
          (l.src = A),
          (l.srcset = ""),
          (d.backgroundRepeat = "no-repeat"),
          (d.backgroundPosition = r.position),
          (d.backgroundSize = r.fit),
          l.setAttribute("data-position", a.style.position),
          l.setAttribute("data-visibility", a.style.visibility),
          (a.style.visibility = "hidden"),
          (a.style.position = "absolute"),
          o.setAttribute("data-parent-fit", r.fit),
          o.setAttribute("data-parent-container", "prev"),
          o.setAttribute("data-object-fit-polyfilled", ""),
          (o._objectFitPolyfilledDisplay = l),
          n.insertBefore(l, a),
          o._lazysizesParentFit && delete o._lazysizesParentFit,
          o.complete && s();
      });
  }
  (r && r && "objectPosition" in a) ||
    ((i = function (t) {
      if (t.detail.instance == f) {
        var e,
          i,
          a,
          n = t.target,
          o =
            ((e = (getComputedStyle(n, null) || {}).fontFamily || ""),
            (i = e.match(s) || ""),
            (a = (a = (i && e.match(l)) || "") && a[1]),
            { fit: (i && i[1]) || "", position: d[a] || a || "center" });
        return !(!o.fit || (r && "center" == o.position)) && (c(n, o), !0);
      }
    }),
    t.addEventListener("lazybeforesizes", function (t) {
      var e;
      t.detail.instance == f &&
        (null == (e = t.target).getAttribute("data-object-fit-polyfilled") ||
          e._objectFitPolyfilledDisplay ||
          i(t) ||
          f.rAF(function () {
            e.removeAttribute("data-object-fit-polyfilled");
          }));
    }),
    t.addEventListener("lazyunveilread", i, !0),
    e && e.detail && i(e));
});
