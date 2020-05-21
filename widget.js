!function(n) {
  function t(o) {
    if (e[o])return e[o].exports; var a = e[o] = {
      i: o,
      l: !1,
      exports: {}}; return n[o].call(a.exports, a, a.exports, t),
    a.l=!0,
    a.exports
  }var e = {}; t.m = n,
  t.c = e,
  t.d = function(n, e, o) {
    t.o(n, e) || Object.defineProperty(n, e, {
      configurable: !1, enumerable: !0, get: o
    })},
  t.n = function(n) {
    var e = n && n.__esModule?function() {
      return n.default
    }:function() {
      return n
    }; return t.d(e, "a", e),
    e
  },
  t.o = function(n, t) {
    return Object.prototype.hasOwnProperty.call(n, t)},
  t.p = "",
  t(t.s = 2)}([function(n, t, e) {
    "use strict"; function o(n, t) {
      var e = n[1] || "", o = n[3]; if (!o)return e; if (t && "function" == typeof btoa) {
        var i = a(o); return[e].concat(o.sources.map(function(n) {
          return"/*# sourceURL=".concat(o.sourceRoot).concat(n, " */")})).concat([i]).join("\n")}return[e].join("\n")}function a(n) {
      return"/*# ".concat("sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))), " */")}n.exports = function(n) {
      var t = []; return t.toString = function() {
        return this.map(function(t) {
          var e = o(t, n); return t[2]?"@media ".concat(t[2], "{").concat(e, "}"): e
        }).join("")},
      t.i = function(n, e) {
        "string" == typeof n && (n = [[null, n, ""]]); for (var o = {}, a = 0; a < this.length; a++) {
          var i = this[a][0]; null != i && (o[i]=!0)}for (var r = 0; r < n.length; r++) {
          var s = n[r]; null != s[0] && o[s[0]] || (e&&!s[2]?s[2] = e: e && (s[2] = "(".concat(s[2], ") and (").concat(e, ")")), t.push(s))}},
      t
    }}, function(n, t, e) {
    function o(n, t) {
      for (var e = 0; e < n.length; e++) {
        var o = n[e],
        a = p[o.id]; if (a) {
          a.refs++; for (var i = 0; i < a.parts.length; i++)a.parts[i](o.parts[i]); for (; i < o.parts.length; i++)a.parts.push(l(o.parts[i], t))} else {
          for (var r = [], i = 0; i < o.parts.length; i++)r.push(l(o.parts[i], t)); p[o.id] = {
            id: o.id,
            refs: 1,
            parts: r
          }}}}function a(n, t) {
      for (var e = [], o = {}, a = 0; a < n.length; a++) {
        var i = n[a],
        r = t.base?i[0]+t.base: i[0],
        s = i[1],
        d = i[2],
        c = i[3],
        l = {
          css: s,
          media: d,
          sourceMap: c
        }; o[r]?o[r].parts.push(l): e.push(o[r] = {
            id: r, parts: [l]})}return e
    }function i(n, t) {
      var e = g(n.insertInto); if (!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."); var o = v[v.length-1]; if ("top" === n.insertAt)o?o.nextSibling?e.insertBefore(t, o.nextSibling): e.appendChild(t): e.insertBefore(t, e.firstChild),
      v.push(t); else if ("bottom" === n.insertAt)e.appendChild(t); else {
        if ("object" != typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"); var a = g(n.insertInto+" "+n.insertAt.before); e.insertBefore(t, a)}}function r(n) {
      if (null === n.parentNode)return!1; n.parentNode.removeChild(n); var t = v.indexOf(n); t >= 0 && v.splice(t, 1)}function s(n) {
      var t = document.createElement("style"); return n.attrs.type = "text/css",
      c(t, n.attrs),
      i(n, t),
      t
    }function d(n) {
      var t = document.createElement("link"); return n.attrs.type = "text/css",
      n.attrs.rel = "stylesheet",
      c(t, n.attrs),
      i(n, t),
      t
    }function c(n, t) {
      Object.keys(t).forEach(function(e) {
        n.setAttribute(e, t[e])})}function l(n, t) {
      var e,
      o,
      a,
      i; if (t.transform && n.css) {
        if (!(i = t.transform(n.css)))return function() {}; n.css = i
      }if (t.singleton) {
        var c = y++; e = h || (h = s(t)),
        o = f.bind(null, e, c, !1),
        a = f.bind(null, e, c, !0)} else n.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa?(e = d(t), o = u.bind(null, e, t), a = function() {
          r(e), e.href && URL.revokeObjectURL(e.href)}): (e = s(t), o = m.bind(null, e), a = function() {
          r(e)}); return o(n),
      function(t) {
        if (t) {
          if (t.css === n.css && t.media === n.media && t.sourceMap === n.sourceMap)return; o(n = t)} else a()}}function f(n, t, e, o) {
      var a = e?"": o.css; if (n.styleSheet)n.styleSheet.cssText = w(t, a); else {
        var i = document.createTextNode(a),
        r = n.childNodes; r[t] && n.removeChild(r[t]),
        r.length?n.insertBefore(i, r[t]): n.appendChild(i)}}function m(n, t) {
      var e = t.css,
      o = t.media; if (o && n.setAttribute("media", o), n.styleSheet)n.styleSheet.cssText = e; else {
        for (; n.firstChild;)n.removeChild(n.firstChild); n.appendChild(document.createTextNode(e))}}function u(n, t, e) {
      var o = e.css,
      a = e.sourceMap,
      i = void 0 === t.convertToAbsoluteUrls && a; (t.convertToAbsoluteUrls || i) && (o = x(o)),
      a && (o += "\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"); var r = new Blob([o], {
        type: "text/css"
      }),
      s = n.href; n.href = URL.createObjectURL(r),
      s && URL.revokeObjectURL(s)}var p = {},
    b = function(n) {
      var t; return function() {
        return void 0 === t && (t = n.apply(this, arguments)),
        t
      }}(function() {
        return window && document && document.all&&!window.atob
      }),
    g = function(n) {
      var t = {}; return function(e) {
        if (void 0 === t[e]) {
          var o = n.call(this, e); if (o instanceof window.HTMLIFrameElement)try {
            o = o.contentDocument.head
          }catch(n) {
            o = null
          }t[e] = o
        }return t[e]}}(function(n) {
        return document.querySelector(n)}),
    h = null,
    y = 0,
    v = [],
    x = e(8); n.exports = function(n, t) {
      if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document)throw new Error("The style-loader cannot be used in a non-browser environment"); t = t || {},
      t.attrs = "object" == typeof t.attrs?t.attrs: {},
      t.singleton || "boolean" == typeof t.singleton || (t.singleton = b()),
      t.insertInto || (t.insertInto = "head"),
      t.insertAt || (t.insertAt = "bottom"); var e = a(n, t); return o(e, t),
      function(n) {
        for (var i = [], r = 0; r < e.length; r++) {
          var s = e[r],
          d = p[s.id]; d.refs--,
          i.push(d)}if (n) {
          o(a(n, t), t)}for (var r = 0; r < i.length; r++) {
          var d = i[r]; if (0 === d.refs) {
            for (var c = 0; c < d.parts.length; c++)d.parts[c](); delete p[d.id]}}}}; var w = function() {
      var n = []; return function(t, e) {
        return n[t] = e,
        n.filter(Boolean).join("\n")}}()}, function(n, t, e) {
    "use strict"; function o(n, t) {
      if (!n)throw Error("API method required"); if (n = n.toLowerCase(), -1 === r.indexOf(n))throw Error("Method ".concat(n, " is not supported")); switch (n) {
        case"load-widget": Object(i.a)(t); break; default: console.warn("No handler defined for ".concat(n))}}function a(n, t) {
        for (var e in t)t.hasOwnProperty(e) && (n[e] = t[e]); return n
      }Object.defineProperty(t, "__esModule", {
          value: !0
        }); var i = e(3),
      r = ["init",
        "load-widget"]; !function(n) {
        var t = {
          someDefaultConfiguration: !1
        },
        e = n[n["beam-widget"]],
        i = e.q; if (i)for (var r = 0; r < i.length; r++)"init" == i[r][0].toLowerCase()?t = a(t, i[r][1]): o(i[r][0], i[r][1]); e = o,
        e.configurations = t
      }(window)}, function(n, t, e) {
      "use strict"; function o(n) {
        var t = document.createElement("div"); t.classList.add("icon-container"),
        t.innerHTML = r.a,
        t.children[0].setAttribute("data-url", n.url),
        f.push(t.children[0]); var e = t.children[1]; e.src = "https://providers.beam.health/widgets/pixel/?id="+n.id; var o = document.getElementsByTagName("body")[0],
        i = t.children[0].getElementsByClassName("beam-widget-icon-1201912")[0],
        s = t.children[0].getElementsByClassName("beam-link")[0],
        d = t.children[0].getElementsByClassName("beam-widget-button-text")[0]; /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?(i.classList.add("is-mobile"), t.children[0].classList.add("is-mobile")): i.classList.add("beam-widget-1201912-desktop"),
        o.appendChild(t.children[0]),
        o.appendChild(e),
        n.logo && (i.src = n.logo),
        n.color && (d.style.color = n.color, s.style.borderColor = n.color),
        n.defaultOpen && a(n),
        s.addEventListener("click", function() {
          a(n)})}function a(n) {
        var t = document.createElement("div"); t.innerHTML = d.a; var e = t.children[0],
        o = document.getElementById("beam-widget-container"),
        i = e.getElementsByClassName("beam-widget-text-header")[0],
        r = (e.getElementsByClassName("beam-health-registration-button")[0], document.getElementsByClassName("beam-widget-icon-1201912")[0]); /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (i.classList.add("is-mobile"), e.classList.add("is-mobile")),
        n.url && (t.getElementsByClassName("button-to-beam-website")[0].formAction = n.url),
        n.customText && (t.getElementsByClassName("beam-custom-text-inner")[0].innerHTML = n.customText),
        n.customButtonText && (t.getElementsByClassName("beam-widget-button-text")[0].innerHTML = n.customButtonText),
        n.customSignupButtonText && (t.getElementsByClassName("button-to-beam-website")[0].innerHTML = n.customSignupButtonText),
        n.headerText && (t.getElementsByClassName("beam-message-custom-text-header")[0].innerHTML = n.headerText),
        n.color && (t.getElementsByClassName("button-to-beam-website")[0].style.backgroundColor = n.color, t.getElementsByClassName("beam-widget-text-header")[0].style.backgroundColor = n.color),
        t.getElementsByClassName("beam-close-icon")[0].addEventListener("click", function() {
          a(n)}),
        1 === o.children.length?(o.insertBefore(t, o.children[0]), r.classList.add("spin_forward"), t.children[0].classList.add("fade-in"), r.classList.remove("spin_backward")): 2 === o.children.length && (t.children[0].classList.add("fade-out"), r.classList.remove("spin_forward"), r.classList.add("spin_backward"), o.removeChild(o.children[0]))}t.a = o; var i = e(4),
      r = e.n(i),
      s = e(5),
      d = e.n(s),
      c = e(6),
      l = (e.n(c), e(9)),
      f = (e.n(l), [])}, function(n, t) {
      n.exports = '\n<div id="beamWidget20202">\n\t<div id="beam-widget-container">\n\t\t<div style="float: right; margin-top: 20px;">\n\t\t\t<button onclick="void(0)" href="#" class="beam-link">\n\t\t\t\t<div class="widget-button">\n\t\t\t\t\t<div class="beam-widget-button-text">Video Consults</div>\n\t\t\t\t\t<img class="beam-widget-icon-1201912" src="https://dgz0idmn7z0rs.cloudfront.net/img/Beam-Logo.png" >\n\t\t\t\t</div>\n\t\t\t</button>\n\t\t</div>\n\t</div>\n</div>\n<img class="beam-pixel" style="display: none;">'
    }, function(n, t) {
      n.exports = '<div id="beam-message-container-expanded" class="beam-message-container-expanded" style="opacity:1">\n\t<div class="beam-message-container-inner">\n\t\t<div class="beam-widget-text-header" style="height: 45px;"> \n\t\t\t<p class="beam-message-custom-text-header" style="float: left; display: inline; margin:0px; color:white;">See Your Doctor Anywhere</p>\n\t\t\t<p class="beam-close-icon" style="float: right; cursor: pointer; display: inline; margin:0px; color:white;">X</p>\n\t\t</div>\n\t\t<div class="beam-custom-text-inner">\n\t\t\tEasy and secure access to your doctor wherever you are. Now available via smartphone!\n\t\t</div>\n\t\t<div class="beam-provider-link" style="text-align: center;">\n\t\t\t<form rel="nofollow" style="margin-bottom: 10px;">\n\t\t\t\t<button class="button-to-beam-website" rel="nofollow" formaction="https://providers.beam.health/" target="_blank">\n\t\t\t\t\t<a target=“_blank” rel="nofollow" style="text-decoration: none; color:white">\n\t\t\t\t\t\tRegister\n\t\t\t\t\t</a> \n\t\t\t\t</button>\n\t\t\t</form>\n\t\t</div>\n\t</div>\n</div>\n\n'
    }, function(n, t, e) {
      var o = e(7); "string" == typeof o && (o = [[n.i, o, ""]]); var a = {
        hmr: !0
      }; a.transform = void 0; e(1)(o, a); o.locals && (n.exports = o.locals)}, function(n, t, e) {
      t = n.exports = e(0)(!1),
      t.push([n.i, "#beamWidget20202{\n  all: unset;\n  position: fixed; \n  right: 25px;\n  bottom: 25px; \n  z-index:9999999999; \n  min-width: 260px; \n  max-width: 360px;\n}\nl\n/* The Logo */\n.beam-widget-icon-1201912{\n  position:relative;\n  padding:0px;\n  margin: 0px;\n  border:0px;\n  float: right;\n  border-radius:50%; \n  color:#fff; \n  transition: transform 0.16s linear 0s, opacity 0.08s linear 0s;\n  object-fit: contain;\n  width:47px;\n  height:47px;\n  background-color: white;\n}\n\n.beam-widget-button-text{\n  position:relative;\n  padding:0px;\n  margin: 0px;\n  border:0px;\n  font-family: 'Open Sans', sans-serif;\n  font-weight: bold;\n  color: #464ca7;\n  margin: 13px 2px 0px 7px;\n  float: left;\n  font-size: 24px;\n}\n\n.beam-widget-1201912-desktop{\n  width:47px;\n  height:47px;\n}\n\n .beam-link{\n  pointer-events: none;\n  pointer-events:auto;\n  position:relative;\n  padding:0px;\n  margin: 0px;\n  border:0px;\n  background-color: white;\n  border: 3px solid #464ca7;\n  outline:none;\n  border-radius: 10px;\n  height:56px;\n  cursor: pointer;\n }\n\n/* Animation Setup */\n\n.beam-widget-icon-1201912.spin_forward{\n  /* The animation part: */\n  animation-name: spin_forward;\n  animation-duration: 400ms;\n  animation-iteration-count: 1;\n  animation-timing-function: ease-in;\n}\n\n.beam-widget-icon-1201912.spin_backward{\n  /* The animation part: */\n  animation-name: spin_backward;\n  animation-duration: 400ms;\n  animation-iteration-count: 1;\n  animation-timing-function: ease-out;\n}\n\n.beam-message-container-expanded.fade-in{\n    animation-duration: 250ms;\n    animation-timing-function: ease-out;\n    -webkit-animation-name: fadeIn;\n    animation-name: fadeIn;\n    -moz-animation: fadeIn;\n    -o-animation: fadeIn;\n    -ms-animation: fadeIn;\n}\n\n.beam-message-container-expanded.fade-out{\n    animation-duration: 250ms;\n    animation-timing-function: ease-out;\n    -webkit-animation-name: fadeOut;\n    animation-name: fadeOut;\n    -moz-animation: fadeOut;\n    -o-animation: fadeOut;\n    -ms-animation: fadeOut;\n}\n\n/* Mobile Styling */\n#beamWidget20202.is-mobile{\n  width:60%;\n}\n\n.beam-message-container-expanded.is-mobile{\n  margin-left:auto;\n  margin-right:auto;\n  text-align:center;\n}\n\n/* Animation Configuration */\n\n@keyframes fadeIn{\n  0% {\n    opacity:0;\n  }\n  100% {\n    opacity:1;\n  }\n}\n\n@-moz-keyframes fadeIn {\n  0% {\n    opacity:0;\n  }\n  100% {\n    opacity:1;\n  }\n}\n\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity:0;\n  }\n  100% {\n    opacity:1;\n  }\n}\n\n@-o-keyframes fadeIn {\n  0% {\n    opacity:0;\n  }\n  100% {\n    opacity:1;\n  }\n}\n\n@-ms-keyframes fadeIn {\n  0% {\n    opacity:0;\n  }\n  100% {\n    opacity:1;\n  }\n}\n\n/**\nFade Out\n**/\n\n@keyframes fadeOut{\n  0% {\n    opacity:1;\n  }\n  100% {\n    opacity:0;\n  }\n}\n\n@-moz-keyframes fadeOut {\n  0% {\n    opacity:1;\n  }\n  100% {\n    opacity:0;\n  }\n}\n\n@-webkit-keyframes fadeOut {\n  0% {\n    opacity:1;\n  }\n  100% {\n    opacity:0;\n  }\n}\n\n@-o-keyframes fadeOut {\n  0% {\n    opacity:1;\n  }\n  100% {\n    opacity:0;\n  }\n}\n\n@-ms-keyframes fadeOut {\n  0% {\n    opacity:1;\n  }\n  100% {\n    opacity:0;\n  }\n}\n\n@-moz-keyframes spin_forward {\n    from { -moz-transform: rotate(0deg); }\n    to { -moz-transform: rotate(360deg); }\n}\n@-webkit-keyframes spin_forward {\n    from { -webkit-transform: rotate(0deg); }\n    to { -webkit-transform: rotate(360deg); }\n}\n@keyframes spin_forward {\n    from {transform:rotate(0deg);}\n    to {transform:rotate(360deg);}\n}\n\n@-moz-keyframes spin_backward {\n    from { -moz-transform: rotate(360deg); }\n    to { -moz-transform: rotate(0deg); }\n}\n@-webkit-keyframes spin_backward {\n    from { -webkit-transform: rotate(360deg); }\n    to { -webkit-transform: rotate(0deg); }\n}\n@keyframes spin_backward {\n    from {transform:rotate(360deg);}\n    to {transform:rotate(0deg);}\n}\n", ""])}, function(n, t) {
      n.exports = function(n) {
        var t = "undefined" != typeof window && window.location; if (!t)throw new Error("fixUrls requires window.location"); if (!n || "string" != typeof n)return n; var e = t.protocol+"//"+t.host,
        o = e+t.pathname.replace(/\/[^\/]*$/, "/"); return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(n, t) {
          var a = t.trim().replace(/^"(.*)"$/, function(n, t) {
            return t
          }).replace(/^'(.*)'$/, function(n, t) {
            return t
          }); if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(a))return n; var i; return i = 0 === a.indexOf("//")?a: 0 === a.indexOf("/")?e+a: o+a.replace(/^\.\//, ""),
          "url("+JSON.stringify(i)+")"
        })}}, function(n, t, e) {
      var o = e(10); "string" == typeof o && (o = [[n.i,
        o,
        ""]]); var a = {
        hmr: !0
      }; a.transform = void 0; e(1)(o,
        a);o.locals&&(n.exports=o.locals)},function(n,t,e){t=n.exports=e(0)(!1),t.push([n.i,".button-to-beam-website {\n  all: unset;\n  font-family: 'Open Sans', sans-serif;\n  background-color:#464ca7;\n  border: none;\n  color: white;\n  padding: 16px 20px;\n  margin: 4px 2px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  pointer-events: none;\n  pointer-events:auto;\n  cursor: pointer;\n  border-radius: 10px;\n  outline: none;\n  }\n\n.beam-custom-text-inner{\n  all: unset;\n  display:block;\n  font-family: 'Open Sans', sans-serif;\n  padding: 20px 15px 15px 15px;\n  text-align: center;\n  font-size: 15px;\n}\n\n.beam-message-container-expanded{\n  all: unset;\n  border: 2px solid #efefef;\n  width:100%!important;\n  border-radius: 10px; \n  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.15), 0 2px 5px 0 rgba(0, 0, 0, 0.05);\n  background-color: #fefefe;\n  display: table;\n}\n\n.beam-message-container-inner{\n  all: unset;\n  width: 100%;\n  text-align: center;\n  margin-left: auto;\n  display: table-cell;\n  margin-right: auto;\n  vertical-align: middle;\n  max-width: 20%;\n}\n\n.beam-widget-text-header{\n  all: unset;\n  font-family: 'Quicksand', sans-serif;\n  font-weight: bold; \n  display:block;\n  padding: 12px 15px 2px 15px;\n  height: 35px;\n  color: white;\n  background-color: #464ca7;\n  border-top-right-radius: 10px;\n  border-top-left-radius: 10px;\n  font-size: 21px;\n }\n\n .beam-provider-link{\n  all: unset;\n  font-weight:bold;\n}\n\n /* Mobile Styling */\n.beam-widget-text-header.header.is-mobile{\n  font-size:14px!important;\n  font-family:'Quicksand';\n  width:100%!important;\n  margin-top:20px;\n  margin-left:auto;\n  margin-right:auto;\n}\n",""])}]);