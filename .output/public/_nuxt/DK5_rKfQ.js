import {
  h as Q,
  _ as Ot,
  o as qe,
  z as f,
  A as b,
  G as ee,
  H as x,
  i as q,
  I as Nt,
  d as ke,
  J as C,
  K as F,
  L as E,
  M,
  N as ge,
  O as ve,
  P as It,
  Q as At,
  R as Dt,
  S as Vt,
  T as jt,
  U as O,
  V as U,
  W as I,
  X as Ge,
  Y as V,
  Z as Ht,
  $ as j,
  a0 as Se,
  a1 as le,
  a2 as J,
  a3 as Le,
  a4 as Ee,
  a5 as ie,
  a6 as ue,
  s as Wt,
  a7 as Me,
  a8 as Ut,
  l as R,
  a9 as $e,
  aa as Re,
  ab as ce,
  ac as Bt,
  ae as zt,
  af as qt,
  ag as Gt,
  ah as Ye,
  ai as Fe,
  aj as Pe,
  ak as Oe,
  al as Ne,
  am as Ie,
  an as Ae,
  ao as De,
  ap as Yt,
  aq as Jt,
  ar as Xt,
  as as Kt,
  at as Zt,
  D as w,
  au as Qt,
  B as o,
  C as h,
  av as ea,
  F as H,
  aw as W,
  ax as P,
  ay as X,
  az as pe,
  aA as K,
  y as ta,
  aB as oe,
  aC as aa,
} from './BtAVfEs1.js'
const ra = (e) => {
  for (const t in e) if (t.startsWith('aria-') || t === 'role' || t === 'title') return !0
  return !1
}
const Ve = (e) => e === ''
const na = (...e) =>
  e
    .filter((t, n, l) => !!t && t.trim() !== '' && l.indexOf(t) === n)
    .join(' ')
    .trim()
const je = (e) => e.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
const sa = (e) =>
  e.replace(/^([A-Z])|[\s-_]+(\w)/g, (t, n, l) => (l ? l.toUpperCase() : n.toLowerCase()))
const la = (e) => {
  const t = sa(e)
  return t.charAt(0).toUpperCase() + t.slice(1)
}
var Z = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': 2,
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round',
}
const oa = (
  {
    name: e,
    iconNode: t,
    absoluteStrokeWidth: n,
    'absolute-stroke-width': l,
    strokeWidth: i,
    'stroke-width': u,
    size: s = Z.width,
    color: c = Z.stroke,
    ...d
  },
  { slots: g }
) =>
  Q(
    'svg',
    {
      ...Z,
      ...d,
      width: s,
      height: s,
      stroke: c,
      'stroke-width':
        Ve(n) || Ve(l) || n === !0 || l === !0
          ? (Number(i || u || Z['stroke-width']) * 24) / Number(s)
          : i || u || Z['stroke-width'],
      class: na(
        'lucide',
        d.class,
        ...(e ? [`lucide-${je(la(e))}-icon`, `lucide-${je(e)}`] : ['lucide-icon'])
      ),
      ...(!g.default && !ra(d) && { 'aria-hidden': 'true' }),
    },
    [...t.map((p) => Q(...p)), ...(g.default ? [g.default()] : [])]
  )
const y =
  (e, t) =>
  (n, { slots: l, attrs: i }) =>
    Q(oa, { ...i, ...n, iconNode: t, name: e }, l)
const ia = y('briefcase', [
  ['path', { d: 'M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16', key: 'jecpp' }],
  ['rect', { width: '20', height: '14', x: '2', y: '6', rx: '2', key: 'i6l2r4' }],
])
const ca = y('chart-line', [
  ['path', { d: 'M3 3v16a2 2 0 0 0 2 2h16', key: 'c24i48' }],
  ['path', { d: 'm19 9-5 5-4-4-3 3', key: '2osh9i' }],
])
const ua = y('circle-user', [
  ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
  ['circle', { cx: '12', cy: '10', r: '3', key: 'ilqhr7' }],
  ['path', { d: 'M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662', key: '154egf' }],
])
const da = y('cloud-sun', [
  ['path', { d: 'M12 2v2', key: 'tus03m' }],
  ['path', { d: 'm4.93 4.93 1.41 1.41', key: '149t6j' }],
  ['path', { d: 'M20 12h2', key: '1q8mjw' }],
  ['path', { d: 'm19.07 4.93-1.41 1.41', key: '1shlcs' }],
  ['path', { d: 'M15.947 12.65a4 4 0 0 0-5.925-4.128', key: 'dpwdj0' }],
  ['path', { d: 'M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z', key: 's09mg5' }],
])
const ma = y('code', [
  ['path', { d: 'm16 18 6-6-6-6', key: 'eg8j8' }],
  ['path', { d: 'm8 6-6 6 6 6', key: 'ppft3o' }],
])
const He = y('external-link', [
  ['path', { d: 'M15 3h6v6', key: '1q9fwt' }],
  ['path', { d: 'M10 14 21 3', key: 'gplh6r' }],
  ['path', { d: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6', key: 'a6xqqp' }],
])
const ga = y('git-branch', [
  ['path', { d: 'M15 6a9 9 0 0 0-9 9V3', key: '1cii5b' }],
  ['circle', { cx: '18', cy: '6', r: '3', key: '1h7g24' }],
  ['circle', { cx: '6', cy: '18', r: '3', key: 'fqmcym' }],
])
const Je = y('github', [
  [
    'path',
    {
      d: 'M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4',
      key: 'tonef',
    },
  ],
  ['path', { d: 'M9 18c-4.51 2-5-2-7-2', key: '9comsn' }],
])
const Xe = y('globe', [
  ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
  ['path', { d: 'M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20', key: '13o1zl' }],
  ['path', { d: 'M2 12h20', key: '9i4pu4' }],
])
const pa = y('laptop', [
  [
    'path',
    {
      d: 'M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z',
      key: '1pdavp',
    },
  ],
  ['path', { d: 'M20.054 15.987H3.946', key: '14rxg9' }],
])
const Ke = y('linkedin', [
  [
    'path',
    {
      d: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z',
      key: 'c2jq9f',
    },
  ],
  ['rect', { width: '4', height: '12', x: '2', y: '9', key: 'mk3on5' }],
  ['circle', { cx: '4', cy: '4', r: '2', key: 'bt5ra8' }],
])
const Ze = y('mail', [
  ['path', { d: 'm22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7', key: '132q7q' }],
  ['rect', { x: '2', y: '4', width: '20', height: '16', rx: '2', key: 'izxlao' }],
])
const ha = y('moon', [
  [
    'path',
    {
      d: 'M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401',
      key: 'kfwtm',
    },
  ],
])
const fa = y('paintbrush', [
  ['path', { d: 'm14.622 17.897-10.68-2.913', key: 'vj2p1u' }],
  [
    'path',
    {
      d: 'M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z',
      key: '18tc5c',
    },
  ],
  [
    'path',
    {
      d: 'M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15',
      key: 'ytzfxy',
    },
  ],
])
const _a = y('phone', [
  [
    'path',
    {
      d: 'M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384',
      key: '9njp5v',
    },
  ],
])
const ba = y('rocket', [
  ['path', { d: 'M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5', key: 'qeys4' }],
  [
    'path',
    {
      d: 'M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09',
      key: 'u4xsad',
    },
  ],
  [
    'path',
    {
      d: 'M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z',
      key: '676m9',
    },
  ],
  ['path', { d: 'M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05', key: '92ym6u' }],
])
const ka = y('search', [
  ['path', { d: 'm21 21-4.34-4.34', key: '14j7rj' }],
  ['circle', { cx: '11', cy: '11', r: '8', key: '4ej97u' }],
])
const va = y('server', [
  ['rect', { width: '20', height: '8', x: '2', y: '2', rx: '2', ry: '2', key: 'ngkwjq' }],
  ['rect', { width: '20', height: '8', x: '2', y: '14', rx: '2', ry: '2', key: 'iecqi9' }],
  ['line', { x1: '6', x2: '6.01', y1: '6', y2: '6', key: '16zg32' }],
  ['line', { x1: '6', x2: '6.01', y1: '18', y2: '18', key: 'nzw8ys' }],
])
const xa = y('sun', [
  ['circle', { cx: '12', cy: '12', r: '4', key: '4exip2' }],
  ['path', { d: 'M12 2v2', key: 'tus03m' }],
  ['path', { d: 'M12 20v2', key: '1lh1kg' }],
  ['path', { d: 'm4.93 4.93 1.41 1.41', key: '149t6j' }],
  ['path', { d: 'm17.66 17.66 1.41 1.41', key: 'ptbguv' }],
  ['path', { d: 'M2 12h2', key: '1t8f8n' }],
  ['path', { d: 'M20 12h2', key: '1q8mjw' }],
  ['path', { d: 'm6.34 17.66-1.41 1.41', key: '1m8zz5' }],
  ['path', { d: 'm19.07 4.93-1.41 1.41', key: '1shlcs' }],
])
const ya = y('umbrella', [
  ['path', { d: 'M12 13v7a2 2 0 0 0 4 0', key: 'rpgb42' }],
  ['path', { d: 'M12 2v2', key: 'tus03m' }],
  [
    'path',
    {
      d: 'M20.992 13a1 1 0 0 0 .97-1.274 10.284 10.284 0 0 0-19.923 0A1 1 0 0 0 3 13z',
      key: '124nyo',
    },
  ],
])
const Qe = y('users', [
    ['path', { d: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2', key: '1yyitq' }],
    ['path', { d: 'M16 3.128a4 4 0 0 1 0 7.744', key: '16gr8j' }],
    ['path', { d: 'M22 21v-2a4 4 0 0 0-3-3.87', key: 'kshegd' }],
    ['circle', { cx: '9', cy: '7', r: '4', key: 'nufk8' }],
  ]),
  wa = ['title', 'aria-label'],
  Ta = {
    __name: 'ThemeToggle',
    setup(e) {
      const t = q(!1),
        n = () => {
          ;((t.value = !t.value),
            t.value
              ? (document.documentElement.classList.add('dark'),
                localStorage.setItem('theme', 'dark'))
              : (document.documentElement.classList.remove('dark'),
                localStorage.setItem('theme', 'light')))
        }
      return (
        qe(() => {
          t.value = document.documentElement.classList.contains('dark')
        }),
        (l, i) => (
          f(),
          b(
            'button',
            {
              class:
                'theme-btn bg-white/90 dark:bg-neutral-800/90 backdrop-blur text-neutral-800 dark:text-neutral-200 px-4 py-2 rounded-full shadow-lg border border-neutral-200 dark:border-neutral-700 font-bold hover:bg-white dark:hover:bg-neutral-700 hover:text-orange-700 transition-colors flex items-center justify-center cursor-pointer',
              title: t.value ? l.$t('themeToggleLightAria') : l.$t('themeToggleDarkAria'),
              'aria-label': t.value ? l.$t('themeToggleLightAria') : l.$t('themeToggleDarkAria'),
              onClick: n,
            },
            [
              t.value
                ? (f(), ee(x(xa), { key: 0, class: 'w-5 h-5' }))
                : (f(), ee(x(ha), { key: 1, class: 'w-5 h-5' })),
            ],
            8,
            wa
          )
        )
      )
    },
  },
  Ca = Ot(Ta, [['__scopeId', 'data-v-8a2ac4d0']])
const Sa = '10.0.8',
  G = {
    UNEXPECTED_RETURN_TYPE: Gt,
    INVALID_ARGUMENT: 25,
    MUST_BE_CALL_SETUP_TOP: 26,
    NOT_INSTALLED: 27,
    NOT_INSTALLED_WITH_PROVIDE: 31,
    UNEXPECTED_ERROR: 32,
  }
function te(e, ...t) {
  return Nt(e, null, void 0)
}
const he = U('__translateVNode'),
  fe = U('__datetimeParts'),
  _e = U('__numberParts'),
  La = U('__setPluralRules'),
  Ea = U('__injectWithOption'),
  be = U('__dispose')
function ae(e) {
  if (!M(e) || ce(e)) return e
  for (const t in e)
    if (ue(e, t))
      if (!t.includes('.')) M(e[t]) && ae(e[t])
      else {
        const n = t.split('.'),
          l = n.length - 1
        let i = e,
          u = !1
        for (let s = 0; s < l; s++) {
          if (n[s] === '__proto__') throw new Error(`unsafe key: ${n[s]}`)
          if ((n[s] in i || (i[n[s]] = E()), !M(i[n[s]]))) {
            u = !0
            break
          }
          i = i[n[s]]
        }
        if (
          (u || (ce(i) ? Bt.includes(n[l]) || delete e[t] : ((i[n[l]] = e[t]), delete e[t])),
          !ce(i))
        ) {
          const s = i[n[l]]
          M(s) && ae(s)
        }
      }
  return e
}
function et(e, t) {
  const { messages: n, __i18n: l, messageResolver: i, flatJson: u } = t,
    s = j(n) ? n : I(l) ? E() : { [e]: E() }
  if (
    (I(l) &&
      l.forEach((c) => {
        if ('locale' in c && 'resource' in c) {
          const { locale: d, resource: g } = c
          d ? ((s[d] = s[d] || E()), ie(g, s[d])) : ie(g, s)
        } else C(c) && ie(JSON.parse(c), s)
      }),
    i == null && u)
  )
    for (const c in s) ue(s, c) && ae(s[c])
  return s
}
function Ma(e) {
  return e.type
}
function $a(e, t, n) {
  let l = M(t.messages) ? t.messages : E()
  '__i18nGlobal' in n && (l = et(e.locale.value, { messages: l, __i18n: n.__i18nGlobal }))
  const i = Object.keys(l)
  i.length &&
    i.forEach((u) => {
      e.mergeLocaleMessage(u, l[u])
    })
  {
    if (M(t.datetimeFormats)) {
      const u = Object.keys(t.datetimeFormats)
      u.length &&
        u.forEach((s) => {
          e.mergeDateTimeFormat(s, t.datetimeFormats[s])
        })
    }
    if (M(t.numberFormats)) {
      const u = Object.keys(t.numberFormats)
      u.length &&
        u.forEach((s) => {
          e.mergeNumberFormat(s, t.numberFormats[s])
        })
    }
  }
}
function We(e) {
  return w(Qt, null, e, 0)
}
const Ue = () => [],
  Ra = () => !1
let Be = 0
function ze(e) {
  return (t, n, l, i) => e(n, l, Ge() || void 0, i)
}
function Fa(e = {}) {
  const { __root: t, __injectWithOption: n } = e,
    l = t === void 0,
    i = e.flatJson,
    u = Le ? q : Wt
  let s = V(e.inheritLocale) ? e.inheritLocale : !0
  const c = u(t && s ? t.locale.value : C(e.locale) ? e.locale : Ht),
    d = u(
      t && s
        ? t.fallbackLocale.value
        : C(e.fallbackLocale) ||
            I(e.fallbackLocale) ||
            j(e.fallbackLocale) ||
            e.fallbackLocale === !1
          ? e.fallbackLocale
          : c.value
    ),
    g = u(et(c.value, e)),
    p = u(j(e.datetimeFormats) ? e.datetimeFormats : { [c.value]: {} }),
    k = u(j(e.numberFormats) ? e.numberFormats : { [c.value]: {} })
  let S = t ? t.missingWarn : V(e.missingWarn) || Se(e.missingWarn) ? e.missingWarn : !0,
    L = t ? t.fallbackWarn : V(e.fallbackWarn) || Se(e.fallbackWarn) ? e.fallbackWarn : !0,
    N = t ? t.fallbackRoot : V(e.fallbackRoot) ? e.fallbackRoot : !0,
    $ = !!e.fallbackFormat,
    ye = le(e.missing) ? e.missing : null,
    re = le(e.missing) ? ze(e.missing) : null,
    Y = le(e.postTranslation) ? e.postTranslation : null,
    de = t ? t.warnHtmlMessage : V(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
    me = !!e.escapeParameter
  const we = t ? t.modifiers : j(e.modifiers) ? e.modifiers : {}
  let ne = e.pluralRules || (t && t.pluralRules),
    m
  ;((m = (() => {
    l && Me(null)
    const a = {
      version: Sa,
      locale: c.value,
      fallbackLocale: d.value,
      messages: g.value,
      modifiers: we,
      pluralRules: ne,
      missing: re === null ? void 0 : re,
      missingWarn: S,
      fallbackWarn: L,
      fallbackFormat: $,
      unresolving: !0,
      postTranslation: Y === null ? void 0 : Y,
      warnHtmlMessage: de,
      escapeParameter: me,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: 'vue' },
    }
    ;((a.datetimeFormats = p.value),
      (a.numberFormats = k.value),
      (a.__datetimeFormatters = j(m) ? m.__datetimeFormatters : void 0),
      (a.__numberFormatters = j(m) ? m.__numberFormatters : void 0))
    const r = Ut(a)
    return (l && Me(r), r)
  })()),
    J(m, c.value, d.value))
  function rt() {
    return [c.value, d.value, g.value, p.value, k.value]
  }
  const nt = R({
      get: () => c.value,
      set: (a) => {
        ;((c.value = a), (m.locale = c.value))
      },
    }),
    st = R({
      get: () => d.value,
      set: (a) => {
        ;((d.value = a), (m.fallbackLocale = d.value), J(m, c.value, a))
      },
    }),
    lt = R(() => g.value),
    ot = R(() => p.value),
    it = R(() => k.value)
  function ct() {
    return le(Y) ? Y : null
  }
  function ut(a) {
    ;((Y = a), (m.postTranslation = a))
  }
  function dt() {
    return ye
  }
  function mt(a) {
    ;(a !== null && (re = ze(a)), (ye = a), (m.missing = re))
  }
  const A = (a, r, _, v, D, se) => {
    rt()
    let z
    try {
      ;(l || (m.fallbackContext = t ? zt() : void 0), (z = a(m)))
    } finally {
      l || (m.fallbackContext = void 0)
    }
    if ((_ !== 'translate exists' && ge(z) && z === qt) || (_ === 'translate exists' && !z)) {
      const [Pt, on] = r()
      return t && N ? v(t) : D(Pt)
    } else {
      if (se(z)) return z
      throw te(G.UNEXPECTED_RETURN_TYPE)
    }
  }
  function Te(...a) {
    return A(
      (r) => Reflect.apply(Pe, null, [r, ...a]),
      () => Fe(...a),
      'translate',
      (r) => Reflect.apply(r.t, r, [...a]),
      (r) => r,
      (r) => C(r)
    )
  }
  function gt(...a) {
    const [r, _, v] = a
    if (v && !M(v)) throw te(G.INVALID_ARGUMENT)
    return Te(r, _, F({ resolvedMessage: !0 }, v || {}))
  }
  function pt(...a) {
    return A(
      (r) => Reflect.apply(Ie, null, [r, ...a]),
      () => Ne(...a),
      'datetime format',
      (r) => Reflect.apply(r.d, r, [...a]),
      () => Oe,
      (r) => C(r)
    )
  }
  function ht(...a) {
    return A(
      (r) => Reflect.apply(De, null, [r, ...a]),
      () => Ae(...a),
      'number format',
      (r) => Reflect.apply(r.n, r, [...a]),
      () => Oe,
      (r) => C(r)
    )
  }
  function ft(a) {
    return a.map((r) => (C(r) || ge(r) || V(r) ? We(String(r)) : r))
  }
  const _t = { normalize: ft, interpolate: (a) => a, type: 'vnode' }
  function bt(...a) {
    return A(
      (r) => {
        let _
        const v = r
        try {
          ;((v.processor = _t), (_ = Reflect.apply(Pe, null, [v, ...a])))
        } finally {
          v.processor = null
        }
        return _
      },
      () => Fe(...a),
      'translate',
      (r) => r[he](...a),
      (r) => [We(r)],
      (r) => I(r)
    )
  }
  function kt(...a) {
    return A(
      (r) => Reflect.apply(De, null, [r, ...a]),
      () => Ae(...a),
      'number format',
      (r) => r[_e](...a),
      Ue,
      (r) => C(r) || I(r)
    )
  }
  function vt(...a) {
    return A(
      (r) => Reflect.apply(Ie, null, [r, ...a]),
      () => Ne(...a),
      'datetime format',
      (r) => r[fe](...a),
      Ue,
      (r) => C(r) || I(r)
    )
  }
  function xt(a) {
    ;((ne = a), (m.pluralRules = ne))
  }
  function yt(a, r) {
    return A(
      () => {
        if (!a) return !1
        const _ = C(r) ? r : c.value,
          v = Ce(_),
          D = m.messageResolver(v, a)
        return ce(D) || Yt(D) || C(D)
      },
      () => [a],
      'translate exists',
      (_) => Reflect.apply(_.te, _, [a, r]),
      Ra,
      (_) => V(_)
    )
  }
  function wt(a) {
    let r = null
    const _ = Ye(m, d.value, c.value)
    for (let v = 0; v < _.length; v++) {
      const D = g.value[_[v]] || {},
        se = m.messageResolver(D, a)
      if (se != null) {
        r = se
        break
      }
    }
    return r
  }
  function Tt(a) {
    const r = wt(a)
    return r ?? (t ? t.tm(a) || {} : {})
  }
  function Ce(a) {
    return g.value[a] || {}
  }
  function Ct(a, r) {
    if (i) {
      const _ = { [a]: r }
      for (const v in _) ue(_, v) && ae(_[v])
      r = _[a]
    }
    ;((g.value[a] = r), (m.messages = g.value))
  }
  function St(a, r) {
    g.value[a] = g.value[a] || {}
    const _ = { [a]: r }
    if (i) for (const v in _) ue(_, v) && ae(_[v])
    ;((r = _[a]), ie(r, g.value[a]), (m.messages = g.value))
  }
  function Lt(a) {
    return p.value[a] || {}
  }
  function Et(a, r) {
    ;((p.value[a] = r), (m.datetimeFormats = p.value), $e(m, a, r))
  }
  function Mt(a, r) {
    ;((p.value[a] = F(p.value[a] || {}, r)), (m.datetimeFormats = p.value), $e(m, a, r))
  }
  function $t(a) {
    return k.value[a] || {}
  }
  function Rt(a, r) {
    ;((k.value[a] = r), (m.numberFormats = k.value), Re(m, a, r))
  }
  function Ft(a, r) {
    ;((k.value[a] = F(k.value[a] || {}, r)), (m.numberFormats = k.value), Re(m, a, r))
  }
  ;(Be++,
    t &&
      Le &&
      (Ee(t.locale, (a) => {
        s && ((c.value = a), (m.locale = a), J(m, c.value, d.value))
      }),
      Ee(t.fallbackLocale, (a) => {
        s && ((d.value = a), (m.fallbackLocale = a), J(m, c.value, d.value))
      })))
  const T = {
    id: Be,
    locale: nt,
    fallbackLocale: st,
    get inheritLocale() {
      return s
    },
    set inheritLocale(a) {
      ;((s = a),
        a &&
          t &&
          ((c.value = t.locale.value), (d.value = t.fallbackLocale.value), J(m, c.value, d.value)))
    },
    get availableLocales() {
      return Object.keys(g.value).sort()
    },
    messages: lt,
    get modifiers() {
      return we
    },
    get pluralRules() {
      return ne || {}
    },
    get isGlobal() {
      return l
    },
    get missingWarn() {
      return S
    },
    set missingWarn(a) {
      ;((S = a), (m.missingWarn = S))
    },
    get fallbackWarn() {
      return L
    },
    set fallbackWarn(a) {
      ;((L = a), (m.fallbackWarn = L))
    },
    get fallbackRoot() {
      return N
    },
    set fallbackRoot(a) {
      N = a
    },
    get fallbackFormat() {
      return $
    },
    set fallbackFormat(a) {
      ;(($ = a), (m.fallbackFormat = $))
    },
    get warnHtmlMessage() {
      return de
    },
    set warnHtmlMessage(a) {
      ;((de = a), (m.warnHtmlMessage = a))
    },
    get escapeParameter() {
      return me
    },
    set escapeParameter(a) {
      ;((me = a), (m.escapeParameter = a))
    },
    t: Te,
    getLocaleMessage: Ce,
    setLocaleMessage: Ct,
    mergeLocaleMessage: St,
    getPostTranslationHandler: ct,
    setPostTranslationHandler: ut,
    getMissingHandler: dt,
    setMissingHandler: mt,
    [La]: xt,
  }
  return (
    (T.datetimeFormats = ot),
    (T.numberFormats = it),
    (T.rt = gt),
    (T.te = yt),
    (T.tm = Tt),
    (T.d = pt),
    (T.n = ht),
    (T.getDateTimeFormat = Lt),
    (T.setDateTimeFormat = Et),
    (T.mergeDateTimeFormat = Mt),
    (T.getNumberFormat = $t),
    (T.setNumberFormat = Rt),
    (T.mergeNumberFormat = Ft),
    (T[Ea] = n),
    (T[he] = bt),
    (T[fe] = vt),
    (T[_e] = kt),
    T
  )
}
const xe = {
  tag: { type: [String, Object] },
  locale: { type: String },
  scope: { type: String, validator: (e) => e === 'parent' || e === 'global', default: 'parent' },
  i18n: { type: Object },
}
function Pa({ slots: e }, t) {
  return t.length === 1 && t[0] === 'default'
    ? (e.default ? e.default() : []).reduce(
        (l, i) => [...l, ...(i.type === O ? i.children : [i])],
        []
      )
    : t.reduce((n, l) => {
        const i = e[l]
        return (i && (n[l] = i()), n)
      }, E())
}
function tt() {
  return O
}
F(
  {
    keypath: { type: String, required: !0 },
    plural: { type: [Number, String], validator: (e) => ge(e) || !isNaN(e) },
  },
  xe
)
function Oa(e) {
  return I(e) && !C(e[0])
}
function at(e, t, n, l) {
  const { slots: i, attrs: u } = t
  return () => {
    const s = { part: !0 }
    let c = E()
    ;(e.locale && (s.locale = e.locale),
      C(e.format)
        ? (s.key = e.format)
        : M(e.format) &&
          (C(e.format.key) && (s.key = e.format.key),
          (c = Object.keys(e.format).reduce(
            (S, L) => (n.includes(L) ? F(E(), S, { [L]: e.format[L] }) : S),
            E()
          ))))
    const d = l(e.value, s, c)
    let g = [s.key]
    I(d)
      ? (g = d.map((S, L) => {
          const N = i[S.type],
            $ = N ? N({ [S.type]: S.value, index: L, parts: d }) : [S.value]
          return (Oa($) && ($[0].key = `${S.type}-${L}`), $)
        }))
      : C(d) && (g = [d])
    const p = F(E(), u),
      k = C(e.tag) || M(e.tag) ? e.tag : tt()
    return Q(k, p, g)
  }
}
F({ value: { type: Number, required: !0 }, format: { type: [String, Object] } }, xe)
F({ value: { type: [Number, Date], required: !0 }, format: { type: [String, Object] } }, xe)
const Na = U('global-vue-i18n')
function B(e = {}) {
  const t = Ge()
  if (t == null) throw te(G.MUST_BE_CALL_SETUP_TOP)
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw te(G.NOT_INSTALLED)
  const n = Ia(t),
    l = Da(n),
    i = Ma(t),
    u = Aa(e, i)
  if (u === 'global') return ($a(l, e, i), l)
  if (u === 'parent') {
    let d = Va(n, t, e.__useComponent)
    return (d == null && (d = l), d)
  }
  const s = n
  let c = s.__getInstance(t)
  if (c == null) {
    const d = F({}, e)
    ;('__i18n' in i && (d.__i18n = i.__i18n),
      l && (d.__root = l),
      (c = Fa(d)),
      s.__composerExtend && (c[be] = s.__composerExtend(c)),
      Ha(s, t, c),
      s.__setInstance(t, c))
  }
  return c
}
function Ia(e) {
  const t = ve(e.isCE ? Na : e.appContext.app.__VUE_I18N_SYMBOL__)
  if (!t) throw te(e.isCE ? G.NOT_INSTALLED_WITH_PROVIDE : G.UNEXPECTED_ERROR)
  return t
}
function Aa(e, t) {
  return It(e) ? ('__i18n' in t ? 'local' : 'global') : e.useScope ? e.useScope : 'local'
}
function Da(e) {
  return e.mode === 'composition' ? e.global : e.global.__composer
}
function Va(e, t, n = !1) {
  let l = null
  const i = t.root
  let u = ja(t, n)
  for (; u != null; ) {
    const s = e
    if ((e.mode === 'composition' && (l = s.__getInstance(u)), l != null || i === u)) break
    u = u.parent
  }
  return l
}
function ja(e, t = !1) {
  return e == null ? null : (t && e.vnode.ctx) || e.parent
}
function Ha(e, t, n) {
  ;(qe(() => {}, t),
    At(() => {
      const l = n
      e.__deleteInstance(t)
      const i = l[be]
      i && (i(), delete l[be])
    }, t))
}
Dt(Kt)
Vt(Zt)
jt(Ye)
const Wa = ['aria-label', 'title'],
  Ua = {
    __name: 'LangToggle',
    setup(e) {
      const { locale: t } = B(),
        n = R(() => t.value),
        l = () => {
          ;((t.value = t.value === 'pt' ? 'en' : 'pt'),
            localStorage.setItem('preferredLang', t.value))
        }
      return (i, u) => (
        f(),
        b(
          'button',
          {
            class:
              'lang-btn bg-white/90 dark:bg-neutral-800/90 backdrop-blur text-neutral-800 dark:text-neutral-200 px-4 py-2 rounded-full shadow-lg border border-neutral-200 dark:border-neutral-700 font-bold hover:bg-white dark:hover:bg-neutral-700 hover:text-orange-700 transition-colors flex items-center gap-2 cursor-pointer h-[42px]',
            'aria-label': i.$t('langToggleAria'),
            title: i.$t('langToggleAria'),
            onClick: l,
          },
          [w(x(Xe), { class: 'w-5 h-5' }), o('span', null, h(n.value === 'pt' ? 'EN' : 'PT'), 1)],
          8,
          Wa
        )
      )
    },
  },
  Ba = Object.assign(Ua, { __name: 'LangToggle' }),
  za = ea('/img/profile.webp'),
  qa = {
    class: 'text-white pt-20 pb-24 relative overflow-hidden bg-cover bg-center',
    style: {
      'background-image':
        "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/img/bg.webp')",
    },
  },
  Ga = { class: 'container mx-auto px-6 relative z-10 text-center md:text-left' },
  Ya = { class: 'flex flex-col md:flex-row items-center justify-between' },
  Ja = { class: 'text-xl md:text-2xl text-orange-700 font-medium mb-6' },
  Xa = {
    class:
      'flex flex-wrap justify-center md:justify-start gap-4 text-sm md:text-base text-neutral-300',
  },
  Ka = {
    href: 'mailto:eu@viniciusdocanto.com.br',
    class: 'hover:text-white transition-colors flex items-center gap-2',
  },
  Za = {
    href: 'tel:+5521969244912',
    class: 'hover:text-white transition-colors flex items-center gap-2',
  },
  Qa = {
    href: 'https://linkedin.com/in/viniciusdocanto',
    target: '_blank',
    class: 'hover:text-white transition-colors flex items-center gap-2',
  },
  er = {
    href: 'https://github.com/viniciusdocanto',
    target: '_blank',
    class: 'hover:text-white transition-colors flex items-center gap-2',
  },
  tr = {
    __name: 'Hero',
    setup(e) {
      return (t, n) => (
        f(),
        b('header', qa, [
          o('div', Ga, [
            o('div', Ya, [
              o('div', null, [
                n[7] ||
                  (n[7] = o(
                    'h1',
                    { class: 'text-4xl md:text-6xl font-bold mb-2 tracking-tight' },
                    ' Vinicius Silva do Canto ',
                    -1
                  )),
                o('h2', Ja, h(t.$t('role')), 1),
                o('div', Xa, [
                  o('a', Ka, [
                    w(x(Ze), { class: 'w-4 h-4' }),
                    n[0] || (n[0] = H(' eu@viniciusdocanto.com.br ', -1)),
                  ]),
                  n[4] ||
                    (n[4] = o('span', { class: 'hidden md:inline text-neutral-600' }, '|', -1)),
                  o('a', Za, [
                    w(x(_a), { class: 'w-4 h-4' }),
                    n[1] || (n[1] = H(' +55 21 9 6924 4912 ', -1)),
                  ]),
                  n[5] ||
                    (n[5] = o('span', { class: 'hidden md:inline text-neutral-600' }, '|', -1)),
                  o('a', Qa, [
                    w(x(Ke), { class: 'w-4 h-4' }),
                    n[2] || (n[2] = H(' in/viniciusdocanto ', -1)),
                  ]),
                  n[6] ||
                    (n[6] = o('span', { class: 'hidden md:inline text-neutral-600' }, '|', -1)),
                  o('a', er, [
                    w(x(Je), { class: 'w-4 h-4' }),
                    n[3] || (n[3] = H(' /viniciusdocanto ', -1)),
                  ]),
                ]),
              ]),
              n[8] ||
                (n[8] = o(
                  'div',
                  { class: 'mt-8 md:mt-0' },
                  [
                    o('img', {
                      src: za,
                      alt: 'Vinicius Silva do Canto',
                      class:
                        'w-24 h-24 md:w-32 md:h-32 rounded-full shadow-lg border-4 border-neutral-800 object-cover',
                    }),
                  ],
                  -1
                )),
            ]),
          ]),
        ])
      )
    },
  },
  ar = {
    class:
      'bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-12 border-l-4 border-orange-500 transition-colors duration-300',
  },
  rr = {
    class: 'text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4 flex items-center gap-3',
  },
  nr = { class: 'text-lg leading-relaxed text-neutral-600 dark:text-neutral-300' },
  sr = { class: 'mt-4 text-neutral-600 dark:text-neutral-300' },
  lr = {
    __name: 'Summary',
    setup(e) {
      return (t, n) => (
        f(),
        b('section', ar, [
          o('h3', rr, [
            w(x(ua), { class: 'w-7 h-7 text-orange-700 dark:text-orange-500' }),
            H(' ' + h(t.$t('summaryTitle')), 1),
          ]),
          o('div', nr, [o('p', null, h(t.$t('summaryP1')), 1)]),
          o('div', sr, [o('p', null, h(t.$t('summaryP2')), 1)]),
        ])
      )
    },
  },
  or = { id: 'experience-section', class: 'mb-16' },
  ir = {
    class:
      'text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-8 text-center uppercase tracking-wide',
  },
  cr = { class: 'relative' },
  ur = { class: 'text-xl font-bold text-neutral-800 dark:text-neutral-100' },
  dr = { class: 'text-orange-800 dark:text-orange-400 font-semibold mb-2' },
  mr = { key: 0 },
  gr = { class: 'text-neutral-600 dark:text-neutral-300' },
  pr = { class: 'text-xl font-bold text-neutral-800 dark:text-neutral-100' },
  hr = { class: 'text-orange-800 dark:text-orange-400 font-semibold mb-2' },
  fr = { key: 0 },
  _r = { class: 'text-neutral-600 dark:text-neutral-300' },
  br = { key: 0, class: 'mt-8 text-center' },
  kr = {
    __name: 'Experience',
    setup(e) {
      const t = {
          GitBranch: ga,
          Laptop: pa,
          Code: ma,
          Globe: Xe,
          Umbrella: ya,
          Paintbrush: fa,
          Users: Qe,
          Rocket: ba,
          Server: va,
        },
        { tm: n } = B(),
        l = ve('selectedSkill', q('')),
        i = q(!1),
        u = (d) => {
          if (!l.value) return !1
          const g = l.value.toLowerCase().replace(/ \/ .*/, '')
          return d.toLowerCase().includes(g)
        },
        s = R(() => {
          const d = n('experiences')
          return Array.isArray(d) ? d : Object.values(d)
        }),
        c = R(() => (i.value ? s.value : s.value.slice(0, 2)))
      return (d, g) => (
        f(),
        b('section', or, [
          o('h3', ir, h(d.$t('expTitle')), 1),
          o('div', cr, [
            g[1] ||
              (g[1] = o(
                'div',
                {
                  class:
                    'hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-neutral-200 dark:bg-neutral-700',
                },
                null,
                -1
              )),
            (f(!0),
            b(
              O,
              null,
              W(
                c.value,
                (p, k) => (
                  f(),
                  b(
                    'div',
                    {
                      key: p.id,
                      class: P([
                        'relative flex flex-col md:flex-row items-center justify-between mb-12 group transition-opacity duration-500',
                        [x(l) && !u(p.desc) ? 'opacity-30 grayscale' : 'opacity-100'],
                      ]),
                    },
                    [
                      o(
                        'div',
                        {
                          class: P([
                            'md:w-5/12',
                            k % 2 === 0 ? 'order-2 md:order-1' : 'order-3 md:order-1',
                          ]),
                        },
                        [
                          k % 2 === 0
                            ? (f(),
                              b(
                                'div',
                                {
                                  key: 0,
                                  class: P([
                                    'bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all border-t-2 w-full',
                                    [
                                      k % 2 === 0
                                        ? 'border-orange-500'
                                        : 'border-neutral-700 dark:border-neutral-600',
                                      x(l) && u(p.desc)
                                        ? 'ring-2 ring-orange-500 scale-105 z-10'
                                        : '',
                                    ],
                                  ]),
                                },
                                [
                                  o('h4', ur, h(p.title), 1),
                                  o('div', dr, [
                                    H(h(p.company) + ' ', 1),
                                    p.period
                                      ? (f(), b('span', mr, '| ' + h(p.period), 1))
                                      : X('', !0),
                                  ]),
                                  o('p', gr, h(p.desc), 1),
                                ],
                                2
                              ))
                            : X('', !0),
                        ],
                        2
                      ),
                      o(
                        'div',
                        {
                          class: P([
                            'absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 rounded-full border-4 border-white dark:border-neutral-900 shadow items-center justify-center order-1 mb-4 md:mb-0 hidden md:flex',
                            k % 2 === 0 ? 'bg-orange-500' : 'bg-neutral-700 dark:bg-neutral-600',
                          ]),
                        },
                        [(f(), ee(pe(t[p.icon]), { class: 'w-4 h-4 text-white' }))],
                        2
                      ),
                      o(
                        'div',
                        {
                          class: P([
                            'md:w-5/12',
                            k % 2 === 0 ? 'order-3 md:order-2' : 'order-2 md:order-2',
                          ]),
                        },
                        [
                          k % 2 !== 0
                            ? (f(),
                              b(
                                'div',
                                {
                                  key: 0,
                                  class: P([
                                    'bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all border-t-2 w-full',
                                    [
                                      k % 2 === 0
                                        ? 'border-orange-500'
                                        : 'border-neutral-700 dark:border-neutral-600',
                                      x(l) && u(p.desc)
                                        ? 'ring-2 ring-orange-500 scale-105 z-10'
                                        : '',
                                    ],
                                  ]),
                                },
                                [
                                  o('h4', pr, h(p.title), 1),
                                  o('div', hr, [
                                    H(h(p.company) + ' ', 1),
                                    p.period
                                      ? (f(), b('span', fr, '| ' + h(p.period), 1))
                                      : X('', !0),
                                  ]),
                                  o('p', _r, h(p.desc), 1),
                                ],
                                2
                              ))
                            : X('', !0),
                        ],
                        2
                      ),
                    ],
                    2
                  )
                )
              ),
              128
            )),
          ]),
          !i.value && s.value.length > 2
            ? (f(),
              b('div', br, [
                o(
                  'button',
                  {
                    class:
                      'px-8 py-3 bg-white dark:bg-neutral-800 border-2 border-orange-500 text-orange-600 dark:text-orange-500 font-bold rounded-full hover:bg-orange-500 hover:text-white dark:hover:text-white transition-all shadow-md cursor-pointer uppercase text-sm tracking-wide',
                    onClick: g[0] || (g[0] = (p) => (i.value = !0)),
                  },
                  h(d.$t('loadMore')),
                  1
                ),
              ]))
            : X('', !0),
        ])
      )
    },
  },
  vr = { id: 'projects', class: 'mb-16 reveal' },
  xr = {
    class:
      'text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-8 text-center uppercase tracking-wide',
  },
  yr = { class: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16' },
  wr = ['href'],
  Tr = {
    class:
      'w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-500 transition-colors',
  },
  Cr = { class: 'text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-2' },
  Sr = { class: 'text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-4 flex-grow' },
  Lr = { class: 'flex flex-wrap gap-2 mt-auto' },
  Er = {
    class:
      'mt-4 pt-4 border-t border-neutral-50 dark:border-neutral-700 flex items-center justify-between text-orange-600 dark:text-orange-400 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity',
  },
  Mr = {
    class:
      'text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-8 text-center uppercase tracking-wide mt-12',
  },
  $r = { class: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto' },
  Rr = ['href'],
  Fr = {
    class:
      'w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500 transition-colors',
  },
  Pr = { class: 'text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-2' },
  Or = { class: 'text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-4 flex-grow' },
  Nr = { class: 'flex flex-wrap gap-2 mt-auto' },
  Ir = {
    class:
      'mt-4 pt-4 border-t border-neutral-50 dark:border-neutral-700 flex items-center justify-between text-blue-600 dark:text-blue-400 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity',
  },
  Ar = {
    __name: 'Projects',
    setup(e) {
      const { locale: t } = B(),
        n = R(() => [
          {
            id: 1,
            name: 'PuxaVagas',
            icon: K(ka),
            url: 'https://vagas.docanto.net',
            tech: ['Vue 3', 'Vite', 'Tailwind', 'Supabase'],
            desc:
              t.value === 'pt'
                ? 'Dashboard em tempo real que agrega oportunidades de emprego Front-end com filtros avançados de tecnologia e senioridade.'
                : 'Real-time dashboard aggregating Front-end job opportunities with advanced tech stack and seniority filters.',
          },
          {
            id: 2,
            name: 'WeatherTrip',
            icon: K(da),
            url: 'https://sites.docanto.net/weathertrip/',
            tech: ['JavaScript', 'Leaflet.js', 'Weather API'],
            desc:
              t.value === 'pt'
                ? 'Ferramenta de planejamento de viagens que exibe a previsão do tempo ao longo da rota em um mapa interativo.'
                : 'Trip planning tool that displays weather forecasts along the route on an interactive map.',
          },
          {
            id: 3,
            name: 'Planning Poker',
            icon: K(Qe),
            url: 'https://sites.docanto.net/planningpoker/',
            tech: ['Vue 3', 'Vite', 'Tailwind', 'WebSocket'],
            desc:
              t.value === 'pt'
                ? 'Planning Poker em tempo real para times ágeis. Crie uma sala, compartilhe o link e vote com seu time.'
                : 'Real-time Planning Poker for agile teams. Create a room, share the link, and vote with your team.',
          },
        ]),
        l = R(() => [
          {
            id: 4,
            name: 'Teneo',
            icon: K(ia),
            url: 'https://www.teneo.com',
            tech: ['WordPress', 'PHP', 'Tailwind'],
            desc:
              t.value === 'pt'
                ? 'Consultoria global estratégica. Atuação no desenvolvimento de soluções web corporativas e plataformas de comunicação.'
                : 'Global strategic consultancy. Worked on developing corporate web solutions and communication platforms.',
          },
          {
            id: 5,
            name: 'CIBC Capital Markets',
            icon: K(ca),
            url: 'https://wtsiegelindex.cibccm.com/',
            tech: ['Alpine.js', 'Tailwind', 'Chart.js'],
            desc:
              t.value === 'pt'
                ? 'Plataforma financeira de alto nível para o CIBC Capital Markets, com foco em visualização de dados e performance.'
                : 'High-level financial platform for CIBC Capital Markets, focusing on data visualization and performance.',
          },
        ])
      return (i, u) => (
        f(),
        b('section', vr, [
          o('h3', xr, h(i.$t('projectsPersonalTitle')), 1),
          o('div', yr, [
            (f(!0),
            b(
              O,
              null,
              W(
                n.value,
                (s) => (
                  f(),
                  b(
                    'a',
                    {
                      key: s.id,
                      href: s.url,
                      target: '_blank',
                      class:
                        'bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-md border border-neutral-100 dark:border-neutral-700 hover:shadow-xl transition-all group flex flex-col h-full cursor-pointer no-underline',
                    },
                    [
                      o('div', Tr, [
                        (f(),
                        ee(pe(s.icon), {
                          class:
                            'w-6 h-6 text-orange-600 dark:text-orange-400 group-hover:text-white',
                        })),
                      ]),
                      o('h4', Cr, h(s.name), 1),
                      o('p', Sr, h(s.desc), 1),
                      o('div', Lr, [
                        (f(!0),
                        b(
                          O,
                          null,
                          W(
                            s.tech,
                            (c) => (
                              f(),
                              b(
                                'span',
                                {
                                  key: c,
                                  class:
                                    'px-2 py-0.5 bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 text-[10px] font-bold rounded uppercase tracking-wider',
                                },
                                h(c),
                                1
                              )
                            )
                          ),
                          128
                        )),
                      ]),
                      o('div', Er, [
                        o('span', null, h(x(t) === 'pt' ? 'Ver Projeto' : 'View Project'), 1),
                        w(x(He), { class: 'w-4 h-4' }),
                      ]),
                    ],
                    8,
                    wr
                  )
                )
              ),
              128
            )),
          ]),
          o('h3', Mr, h(i.$t('clientsTitle')), 1),
          o('div', $r, [
            (f(!0),
            b(
              O,
              null,
              W(
                l.value,
                (s) => (
                  f(),
                  b(
                    'a',
                    {
                      key: s.id,
                      href: s.url,
                      target: '_blank',
                      class:
                        'bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-md border border-neutral-100 dark:border-neutral-700 hover:shadow-xl transition-all group flex flex-col h-full cursor-pointer no-underline',
                    },
                    [
                      o('div', Fr, [
                        (f(),
                        ee(pe(s.icon), {
                          class: 'w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:text-white',
                        })),
                      ]),
                      o('h4', Pr, h(s.name), 1),
                      o('p', Or, h(s.desc), 1),
                      o('div', Nr, [
                        (f(!0),
                        b(
                          O,
                          null,
                          W(
                            s.tech,
                            (c) => (
                              f(),
                              b(
                                'span',
                                {
                                  key: c,
                                  class:
                                    'px-2 py-0.5 bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 text-[10px] font-bold rounded uppercase tracking-wider',
                                },
                                h(c),
                                1
                              )
                            )
                          ),
                          128
                        )),
                      ]),
                      o('div', Ir, [
                        o('span', null, h(x(t) === 'pt' ? 'Ver Cliente' : 'View Client'), 1),
                        w(x(He), { class: 'w-4 h-4' }),
                      ]),
                    ],
                    8,
                    Rr
                  )
                )
              ),
              128
            )),
          ]),
        ])
      )
    },
  },
  Dr = {
    class:
      'bg-neutral-900 dark:bg-neutral-800/50 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl border border-transparent dark:border-neutral-700 transition-colors duration-300',
  },
  Vr = { class: 'text-2xl md:text-3xl font-bold mb-2' },
  jr = { class: 'text-neutral-400 mb-8' },
  Hr = { class: 'grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto' },
  Wr = { class: 'flex flex-wrap gap-2' },
  Ur = ['onClick'],
  Br = {
    class:
      'text-orange-400 font-semibold mb-4 uppercase text-sm tracking-wider border-b border-neutral-700 dark:border-neutral-600 pb-2',
  },
  zr = { class: 'flex flex-wrap gap-2' },
  qr = ['onClick'],
  Gr = {
    __name: 'Skills',
    setup(e) {
      const t = ve('selectedSkill', q('')),
        n = ['JavaScript', 'HTML', 'CSS', 'TailwindCSS', 'SASS', 'LESS', 'Bootstrap', 'Vue.js'],
        l = ['SQL', 'Git / GitHub', 'Unix', 'Docker', 'PHP', 'Wordpress', 'Python'],
        i = (u) => {
          ;((t.value = t.value === u ? '' : u),
            t.value &&
              document.getElementById('experience-section')?.scrollIntoView({ behavior: 'smooth' }))
        }
      return (u, s) => (
        f(),
        b('section', Dr, [
          o('h3', Vr, h(u.$t('skillsTitle')), 1),
          o('p', jr, h(u.$t('skillsSubtitle')), 1),
          o('div', Hr, [
            o('div', null, [
              s[0] ||
                (s[0] = o(
                  'h4',
                  {
                    class:
                      'text-orange-400 font-semibold mb-4 uppercase text-sm tracking-wider border-b border-neutral-700 dark:border-neutral-600 pb-2',
                  },
                  ' Core & Front-end ',
                  -1
                )),
              o('div', Wr, [
                (f(),
                b(
                  O,
                  null,
                  W(n, (c) =>
                    o(
                      'span',
                      {
                        key: c,
                        class: P([
                          'skill-tag px-3 py-1 rounded-full text-sm font-medium border cursor-pointer transition-all',
                          x(t) === c
                            ? 'bg-orange-500 text-white border-orange-500 scale-110 shadow-lg'
                            : 'bg-neutral-800 text-orange-300 border-neutral-700 hover:border-orange-500',
                        ]),
                        onClick: (d) => i(c),
                      },
                      h(c),
                      11,
                      Ur
                    )
                  ),
                  64
                )),
              ]),
            ]),
            o('div', null, [
              o('h4', Br, h(u.$t('skillsBackendTitle')), 1),
              o('div', zr, [
                (f(),
                b(
                  O,
                  null,
                  W(l, (c) =>
                    o(
                      'span',
                      {
                        key: c,
                        class: P([
                          'skill-tag px-3 py-1 rounded-full text-sm font-medium border cursor-pointer transition-all',
                          x(t) === c
                            ? 'bg-orange-500 text-white border-orange-500 scale-110 shadow-lg'
                            : 'bg-neutral-800 text-neutral-300 border-neutral-700 hover:border-orange-500',
                        ]),
                        onClick: (d) => i(c),
                      },
                      h(c),
                      11,
                      qr
                    )
                  ),
                  64
                )),
              ]),
            ]),
          ]),
        ])
      )
    },
  },
  Yr = Object.assign(Gr, { __name: 'Skills' }),
  Jr = {
    class:
      'bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 py-8 transition-colors duration-300',
  },
  Xr = { class: 'container mx-auto px-6 text-center' },
  Kr = { class: 'text-neutral-500 dark:text-neutral-400 text-sm mb-4' },
  Zr = { class: 'flex justify-center gap-6' },
  Qr = {
    href: 'mailto:eu@viniciusdocanto.com.br',
    'aria-label': 'E-mail',
    class:
      'text-neutral-800 dark:text-neutral-300 hover:text-orange-800 dark:hover:text-orange-400 transition-colors',
  },
  en = {
    href: 'https://linkedin.com/in/viniciusdocanto',
    'aria-label': 'Linkedin',
    target: '_blank',
    class:
      'text-neutral-800 dark:text-neutral-300 hover:text-orange-800 dark:hover:text-orange-400 transition-colors',
  },
  tn = {
    href: 'https://github.com/viniciusdocanto',
    'aria-label': 'GitHub',
    target: '_blank',
    class:
      'text-neutral-800 dark:text-neutral-300 hover:text-orange-800 dark:hover:text-orange-400 transition-colors',
  },
  an = {
    __name: 'Footer',
    setup(e) {
      const t = new Date().getFullYear()
      return (n, l) => (
        f(),
        b('footer', Jr, [
          o('div', Xr, [
            o(
              'p',
              Kr,
              ' © 2007 - ' + h(x(t)) + ' Vinicius Silva do Canto. ' + h(n.$t('footerRights')),
              1
            ),
            o('div', Zr, [
              o('a', Qr, [w(x(Ze), { class: 'w-5 h-5' })]),
              o('a', en, [w(x(Ke), { class: 'w-5 h-5' })]),
              o('a', tn, [w(x(Je), { class: 'w-5 h-5' })]),
            ]),
          ]),
        ])
      )
    },
  },
  rn = { class: 'fixed top-4 right-4 z-50 flex items-center gap-2' },
  nn = { class: 'container mx-auto px-6 -mt-12 relative z-20 pb-20' },
  dn = {
    __name: 'index',
    setup(e) {
      const { t, locale: n } = B()
      ta({
        title: () => t('metaTitle'),
        htmlAttrs: { lang: n },
        meta: [
          { name: 'description', content: () => t('metaDesc') },
          { property: 'og:title', content: () => t('metaTitle') },
          { property: 'og:description', content: () => t('metaDesc') },
          { property: 'og:type', content: 'website' },
          { property: 'og:url', content: 'https://docanto.net' },
          { property: 'og:image', content: () => t('metaImage') },
          { property: 'twitter:card', content: 'summary_large_image' },
          { property: 'twitter:url', content: 'https://docanto.net' },
          { property: 'twitter:title', content: () => t('metaTitle') },
          { property: 'twitter:description', content: () => t('metaDesc') },
          { property: 'twitter:image', content: () => t('metaImage') },
        ],
      })
      const l = q('')
      aa('selectedSkill', l)
      let i = null
      const u = {
        mounted: (s) => {
          ;(i ||
            (i = new IntersectionObserver(
              (c) => {
                c.forEach((d) => {
                  d.isIntersecting && d.target.classList.add('active')
                })
              },
              { threshold: 0.1 }
            )),
            i.observe(s))
        },
        unmounted: (s) => {
          i?.unobserve(s)
        },
      }
      return (s, c) => {
        const d = Ca,
          g = Ba,
          p = tr,
          k = lr,
          S = kr,
          L = Ar,
          N = Yr,
          $ = an
        return (
          f(),
          b(
            'div',
            {
              class: P([
                'antialiased min-h-screen bg-slate-50 dark:bg-neutral-900 transition-colors duration-300',
                `lang-${s.$i18n.locale}`,
              ]),
            },
            [
              o('div', rn, [w(d), w(g)]),
              w(p),
              o('main', nn, [
                oe(w(k, { class: 'reveal' }, null, 512), [[u]]),
                oe(w(S, { class: 'reveal' }, null, 512), [[u]]),
                oe(w(L, { class: 'reveal' }, null, 512), [[u]]),
                oe(w(N, { class: 'reveal' }, null, 512), [[u]]),
              ]),
              w($),
            ],
            2
          )
        )
      }
    },
  }
export { dn as default }
