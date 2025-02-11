(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [177],
  {
    5479: (e, t, n) => {
      Promise.resolve().then(n.t.bind(n, 5795, 23)),
        Promise.resolve().then(n.t.bind(n, 9497, 23)),
        Promise.resolve().then(n.t.bind(n, 347, 23)),
        Promise.resolve().then(n.bind(n, 1032)),
        Promise.resolve().then(n.bind(n, 5455)),
        Promise.resolve().then(n.bind(n, 6928));
    },
    1032: (e, t, n) => {
      "use strict";
      n.d(t, { default: () => r });
      var s = n(5155),
        a = n(5455),
        l = n(2115),
        o = n(6064);
      function i(e) {
        let { subdomain: t, url: n } = e,
          [i, c] = (0, l.useState)(!1);
        return (0, s.jsxs)("button", {
          onClick: () => {
            try {
              (0, a.J)("url_copied", {
                event_category: "button_click",
                subdomain: t,
              }),
                navigator.clipboard.writeText(n).then(() => {
                  c(!0), setTimeout(() => c(!1), 1500);
                });
            } catch (e) {
              (0, a.J)("url_copy_failed", {
                event_category: "error",
                subdomain: t,
                message: e.message,
              });
            }
          },
          className:
            "flex items-center justify-center p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200 ".concat(
              i ? "bg-green-600 hover:bg-green-700" : ""
            ),
          children: [
            i
              ? (0, s.jsx)(o.aZA, { size: 24 })
              : (0, s.jsx)(o.O6N, { size: 16 }),
            (0, s.jsx)("span", {
              className: "ml-2",
              children: i ? "Copied!" : "Copy URL",
            }),
          ],
        });
      }
      let c = (e) => {
          let { text: t, url: n, subdomain: c } = e,
            [r, d] = (0, l.useState)(!1),
            u = encodeURIComponent("".concat(t, " ").concat(n));
          return (0, s.jsxs)("div", {
            children: [
              (0, s.jsxs)("button", {}),
              r &&
                (0, s.jsxs)("section", {
                  className: "my-2",
                  children: [
                    (0, s.jsxs)("div", {
                      className:
                        "flex flex-col items-center justify-center py-2 ",
                      children: [
                        (0, s.jsx)("h1", {
                          className: "text-2xl font-bold mb-4",
                          children: "Share this content",
                        }),
                        (0, s.jsxs)("div", {
                          className: "flex space-x-4 py-3",
                          children: [
                            (0, s.jsx)("button", {
                              onClick: () => {
                                (0, a.J)("whatsapp_share", {
                                  event_category: "button_click",
                                  subdomain: c,
                                }),
                                  window.open(
                                    "https://wa.me/?text=".concat(u),
                                    "_blank"
                                  );
                              },
                              className:
                                "flex items-center justify-center p-2 bg-green-500 text-white rounded-full hover:bg-green-600",
                              children: (0, s.jsx)(o.EcP, { size: 24 }),
                            }),
                            (0, s.jsx)("button", {
                              onClick: () => {
                                (0, a.J)("messenger_share", {
                                  event_category: "button_click",
                                  subdomain: c,
                                }),
                                  window.open(
                                    "fb-messenger://share/?link=".concat(
                                      encodeURIComponent(n),
                                      "&app_id=YOUR_APP_ID"
                                    ),
                                    "_blank"
                                  );
                              },
                              className:
                                "flex items-center justify-center p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600",
                              children: (0, s.jsx)(o.dnO, { size: 24 }),
                            }),
                            (0, s.jsx)("button", {
                              onClick: () => {
                                (0, a.J)("twitter_share", {
                                  event_category: "button_click",
                                  subdomain: c,
                                }),
                                  window.open(
                                    "https://twitter.com/intent/tweet?text=".concat(
                                      u
                                    ),
                                    "_blank"
                                  );
                              },
                              className:
                                "flex items-center justify-center p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500",
                              children: (0, s.jsx)(o.feZ, { size: 24 }),
                            }),
                            (0, s.jsx)("button", {
                              onClick: () => {
                                (0, a.J)("linkedin_share", {
                                  event_category: "button_click",
                                  subdomain: c,
                                }),
                                  window.open(
                                    "https://www.linkedin.com/sharing/share-offsite/?url=".concat(
                                      encodeURIComponent(n)
                                    ),
                                    "_blank"
                                  );
                              },
                              className:
                                "flex items-center justify-center p-2 bg-blue-700 text-white rounded-full hover:bg-blue-800",
                              children: (0, s.jsx)(o.QEs, { size: 24 }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className:
                        "flex flex-col items-center justify-center mb-2 py-2",
                      children: [
                        (0, s.jsx)("h1", {
                          className: "text-xl font-bold mb-4",
                          children: "Copy this URL",
                        }),
                        (0, s.jsx)("div", {
                          className: "flex items-center justify-center",
                          children: (0, s.jsx)(i, { url: n, subdomain: c }),
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          });
        },
        r = (e) => {
          let {
              title: t,
              defaultGif: n,
              yesGif: o,
              yesButtonClickedText: i,
              subtitle: r,
              yesButton: d,
              noButtonTexts: u,
              subdomain: x,
            } = e,
            [h, b] = (0, l.useState)(0),
            [m, g] = (0, l.useState)(!1);
          return (
            (0, l.useEffect)(() => {
              if (true) {
                // Allow all domains
                new Image().src = o; // Proceed with the operation
              } else {
                document.body.innerHTML =
                  "don't do that :( you are not allowed to do that";
              }
            }, []),
            (0, s.jsx)("div", {
              className:
                "-mt-16 flex h-screen flex-col items-center justify-center",
              children: m
                ? (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)("img", { src: o }),
                      (0, s.jsx)("div", {
                        className: "my-4 text-4xl font-bold text-center",
                        children: i,
                      }),
                      (0, s.jsx)("div", {}),
                      (0, s.jsx)("div", {
                        children: (0, s.jsxs)("a", {}),
                      }),
                    ],
                  })
                : (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)("img", { className: "h-[200px]", src: n }),
                      (0, s.jsx)("h1", {
                        className: "mt-4 text-4xl text-center",
                        children: t,
                      }),
                      (0, s.jsx)("h4", {
                        className: "mb-4 text-xs text-center",
                        children: r,
                      }),
                      (0, s.jsxs)("div", {
                        className: "flex items-center",
                        children: [
                          (0, s.jsx)("button", {
                            className:
                              "mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700",
                            style: { fontSize: 20 * h + 16 },
                            onClick: () => {
                              (0, a.J)("yes_button_clicked", {
                                event_category: "button_click",
                                event_label: "yes_button",
                                subdomain: x,
                              }),
                                g(!0);
                            },
                            children: d,
                          }),
                          (0, s.jsx)("button", {
                            onClick: () => {
                              (0, a.J)("no_button_clicked", {
                                event_category: "button_click",
                                event_label: "no_button",
                                subdomain: x,
                              }),
                                b(h + 1);
                            },
                            className:
                              " rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700",
                            children:
                              0 === h ? u[0] : u[Math.min(h, u.length - 1)],
                          }),
                        ],
                      }),
                    ],
                  }),
            })
          );
        };
    },
    5455: (e, t, n) => {
      "use strict";
      n.d(t, { J: () => o, default: () => l });
      var s = n(5155),
        a = n(6584);
      function l(e) {
        let { configParams: t, gaId: n, disabled: l } = e,
          o = t
            ? Object.entries(t).reduce(
                (e) => (void 0 !== value && (e[key] = value), e),
                {}
              )
            : void 0;
        return ((window.dataLayer = window.dataLayer || []), l)
          ? (console.info("Google Analytics is disabled"), null)
          : (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)(a.default, {
                  id: "_valentine-ga-init",
                  dangerouslySetInnerHTML: {
                    __html:
                      "\n          window.dataLayer = window.dataLayer || [];\n          function gtag(){dataLayer.push(arguments);}\n          gtag('js', new Date());\n          gtag('config', '"
                        .concat(n, "'")
                        .concat(
                          o && Object.keys(o).length
                            ? ", ".concat(JSON.stringify(t))
                            : "",
                          ");"
                        ),
                  },
                }),
                (0, s.jsx)(a.default, {
                  id: "_valentine-ga",
                  src: "https://www.googletagmanager.com/gtag/js?id=".concat(n),
                }),
              ],
            });
      }
      function o() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        window.dataLayer
          ? window.dataLayer.push(...t)
          : console.warn("GA dataLayer does not exist");
      }
    },
    6928: (e, t, n) => {
      "use strict";
      n.d(t, { default: () => l });
      var s = n(5155),
        a = n(6584);
      function l(e) {
        let { caPubId: t, disabled: n } = e;
        return n
          ? (console.info("Google Adsense is disabled"), null)
          : (0, s.jsx)(s.Fragment, {
              children: (0, s.jsx)(a.default, {
                id: "_valentine-adsense",
                async: !0,
                src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=".concat(
                  t
                ),
                crossOrigin: "anonymous",
                strategy: "afterInteractive",
              }),
            });
      }
    },
    347: () => {},
    5795: (e) => {
      e.exports = {
        style: { fontFamily: "'Geist', 'Geist Fallback'", fontStyle: "normal" },
        className: "__className_4d318d",
        variable: "__variable_4d318d",
      };
    },
    9497: (e) => {
      e.exports = {
        style: {
          fontFamily: "'Geist Mono', 'Geist Mono Fallback'",
          fontStyle: "normal",
        },
        className: "__className_ea5f4b",
        variable: "__variable_ea5f4b",
      };
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [830, 344, 340, 441, 517, 358], () => t(5479)), (_N_E = e.O());
  },
]);
