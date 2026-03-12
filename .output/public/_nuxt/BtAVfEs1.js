const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      './DK5_rKfQ.js',
      './index.BJLEaxJ1.css',
      './CayoTp9U.js',
      './error-404._yXoGkXB.css',
      './CnimIfSR.js',
      './error-500.BENb_mjk.css',
    ])
) => i.map((i) => d[i])
;(function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s)
  new MutationObserver((s) => {
    for (const o of s)
      if (o.type === 'childList')
        for (const i of o.addedNodes) i.tagName === 'LINK' && i.rel === 'modulepreload' && r(i)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(s) {
    const o = {}
    return (
      s.integrity && (o.integrity = s.integrity),
      s.referrerPolicy && (o.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === 'use-credentials'
        ? (o.credentials = 'include')
        : s.crossOrigin === 'anonymous'
          ? (o.credentials = 'omit')
          : (o.credentials = 'same-origin'),
      o
    )
  }
  function r(s) {
    if (s.ep) return
    s.ep = !0
    const o = n(s)
    fetch(s.href, o)
  }
})()
function ui(e) {
  const t = Object.create(null)
  for (const n of e.split(',')) t[n] = 1
  return (n) => n in t
}
const be = {},
  xn = [],
  At = () => {},
  rc = () => !1,
  Ar = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  fi = (e) => e.startsWith('onUpdate:'),
  xe = Object.assign,
  di = (e, t) => {
    const n = e.indexOf(t)
    n > -1 && e.splice(n, 1)
  },
  ld = Object.prototype.hasOwnProperty,
  he = (e, t) => ld.call(e, t),
  z = Array.isArray,
  Mn = (e) => zn(e) === '[object Map]',
  sc = (e) => zn(e) === '[object Set]',
  zi = (e) => zn(e) === '[object Date]',
  cd = (e) => zn(e) === '[object RegExp]',
  ee = (e) => typeof e == 'function',
  we = (e) => typeof e == 'string',
  Ot = (e) => typeof e == 'symbol',
  ue = (e) => e !== null && typeof e == 'object',
  oc = (e) => (ue(e) || ee(e)) && ee(e.then) && ee(e.catch),
  ic = Object.prototype.toString,
  zn = (e) => ic.call(e),
  ud = (e) => zn(e).slice(8, -1),
  ac = (e) => zn(e) === '[object Object]',
  vs = (e) => we(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  vn = ui(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted'
  ),
  Es = (e) => {
    const t = Object.create(null)
    return (n) => t[n] || (t[n] = e(n))
  },
  fd = /-\w/g,
  ut = Es((e) => e.replace(fd, (t) => t.slice(1).toUpperCase())),
  dd = /\B([A-Z])/g,
  Sn = Es((e) => e.replace(dd, '-$1').toLowerCase()),
  ws = Es((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Js = Es((e) => (e ? `on${ws(e)}` : '')),
  nn = (e, t) => !Object.is(e, t),
  cr = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t)
  },
  lc = (e, t, n, r = !1) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, writable: r, value: n })
  },
  hd = (e) => {
    const t = parseFloat(e)
    return isNaN(t) ? e : t
  },
  cc = (e) => {
    const t = we(e) ? Number(e) : NaN
    return isNaN(t) ? e : t
  }
let Zi
const Cs = () =>
  Zi ||
  (Zi =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : {})
function Rs(e) {
  if (z(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) {
      const r = e[n],
        s = we(r) ? _d(r) : Rs(r)
      if (s) for (const o in s) t[o] = s[o]
    }
    return t
  } else if (we(e) || ue(e)) return e
}
const pd = /;(?![^(]*\))/g,
  gd = /:([^]+)/,
  md = /\/\*[^]*?\*\//g
function _d(e) {
  const t = {}
  return (
    e
      .replace(md, '')
      .split(pd)
      .forEach((n) => {
        if (n) {
          const r = n.split(gd)
          r.length > 1 && (t[r[0].trim()] = r[1].trim())
        }
      }),
    t
  )
}
function Ts(e) {
  let t = ''
  if (we(e)) t = e
  else if (z(e))
    for (let n = 0; n < e.length; n++) {
      const r = Ts(e[n])
      r && (t += r + ' ')
    }
  else if (ue(e)) for (const n in e) e[n] && (t += n + ' ')
  return t.trim()
}
function yd(e) {
  if (!e) return null
  let { class: t, style: n } = e
  return (t && !we(t) && (e.class = Ts(t)), n && (e.style = Rs(n)), e)
}
const bd = 'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  vd = ui(bd)
function uc(e) {
  return !!e || e === ''
}
function Ed(e, t) {
  if (e.length !== t.length) return !1
  let n = !0
  for (let r = 0; n && r < e.length; r++) n = hi(e[r], t[r])
  return n
}
function hi(e, t) {
  if (e === t) return !0
  let n = zi(e),
    r = zi(t)
  if (n || r) return n && r ? e.getTime() === t.getTime() : !1
  if (((n = Ot(e)), (r = Ot(t)), n || r)) return e === t
  if (((n = z(e)), (r = z(t)), n || r)) return n && r ? Ed(e, t) : !1
  if (((n = ue(e)), (r = ue(t)), n || r)) {
    if (!n || !r) return !1
    const s = Object.keys(e).length,
      o = Object.keys(t).length
    if (s !== o) return !1
    for (const i in e) {
      const a = e.hasOwnProperty(i),
        l = t.hasOwnProperty(i)
      if ((a && !l) || (!a && l) || !hi(e[i], t[i])) return !1
    }
  }
  return String(e) === String(t)
}
const fc = (e) => !!(e && e.__v_isRef === !0),
  wd = (e) =>
    we(e)
      ? e
      : e == null
        ? ''
        : z(e) || (ue(e) && (e.toString === ic || !ee(e.toString)))
          ? fc(e)
            ? wd(e.value)
            : JSON.stringify(e, dc, 2)
          : String(e),
  dc = (e, t) =>
    fc(t)
      ? dc(e, t.value)
      : Mn(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (n, [r, s], o) => ((n[Xs(r, o) + ' =>'] = s), n),
              {}
            ),
          }
        : sc(t)
          ? { [`Set(${t.size})`]: [...t.values()].map((n) => Xs(n)) }
          : Ot(t)
            ? Xs(t)
            : ue(t) && !z(t) && !ac(t)
              ? String(t)
              : t,
  Xs = (e, t = '') => {
    var n
    return Ot(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  }
let $e
class hc {
  constructor(t = !1) {
    ;((this.detached = t),
      (this._active = !0),
      (this._on = 0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this.__v_skip = !0),
      (this.parent = $e),
      !t && $e && (this.index = ($e.scopes || ($e.scopes = [])).push(this) - 1))
  }
  get active() {
    return this._active
  }
  pause() {
    if (this._active) {
      this._isPaused = !0
      let t, n
      if (this.scopes) for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].pause()
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause()
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1
      let t, n
      if (this.scopes) for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].resume()
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].resume()
    }
  }
  run(t) {
    if (this._active) {
      const n = $e
      try {
        return (($e = this), t())
      } finally {
        $e = n
      }
    }
  }
  on() {
    ++this._on === 1 && ((this.prevScope = $e), ($e = this))
  }
  off() {
    this._on > 0 && --this._on === 0 && (($e = this.prevScope), (this.prevScope = void 0))
  }
  stop(t) {
    if (this._active) {
      this._active = !1
      let n, r
      for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop()
      for (this.effects.length = 0, n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]()
      if (((this.cleanups.length = 0), this.scopes)) {
        for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0)
        this.scopes.length = 0
      }
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop()
        s && s !== this && ((this.parent.scopes[this.index] = s), (s.index = this.index))
      }
      this.parent = void 0
    }
  }
}
function pi(e) {
  return new hc(e)
}
function Ss() {
  return $e
}
function wo(e, t = !1) {
  $e && $e.cleanups.push(e)
}
let ve
const Qs = new WeakSet()
class pc {
  constructor(t) {
    ;((this.fn = t),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.next = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      $e && $e.active && $e.effects.push(this))
  }
  pause() {
    this.flags |= 64
  }
  resume() {
    this.flags & 64 && ((this.flags &= -65), Qs.has(this) && (Qs.delete(this), this.trigger()))
  }
  notify() {
    ;(this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || mc(this)
  }
  run() {
    if (!(this.flags & 1)) return this.fn()
    ;((this.flags |= 2), ea(this), _c(this))
    const t = ve,
      n = gt
    ;((ve = this), (gt = !0))
    try {
      return this.fn()
    } finally {
      ;(yc(this), (ve = t), (gt = n), (this.flags &= -3))
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) _i(t)
      ;((this.deps = this.depsTail = void 0),
        ea(this),
        this.onStop && this.onStop(),
        (this.flags &= -2))
    }
  }
  trigger() {
    this.flags & 64 ? Qs.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty()
  }
  runIfDirty() {
    Co(this) && this.run()
  }
  get dirty() {
    return Co(this)
  }
}
let gc = 0,
  ur,
  fr
function mc(e, t = !1) {
  if (((e.flags |= 8), t)) {
    ;((e.next = fr), (fr = e))
    return
  }
  ;((e.next = ur), (ur = e))
}
function gi() {
  gc++
}
function mi() {
  if (--gc > 0) return
  if (fr) {
    let t = fr
    for (fr = void 0; t; ) {
      const n = t.next
      ;((t.next = void 0), (t.flags &= -9), (t = n))
    }
  }
  let e
  for (; ur; ) {
    let t = ur
    for (ur = void 0; t; ) {
      const n = t.next
      if (((t.next = void 0), (t.flags &= -9), t.flags & 1))
        try {
          t.trigger()
        } catch (r) {
          e || (e = r)
        }
      t = n
    }
  }
  if (e) throw e
}
function _c(e) {
  for (let t = e.deps; t; t = t.nextDep)
    ((t.version = -1), (t.prevActiveLink = t.dep.activeLink), (t.dep.activeLink = t))
}
function yc(e) {
  let t,
    n = e.depsTail,
    r = n
  for (; r; ) {
    const s = r.prevDep
    ;(r.version === -1 ? (r === n && (n = s), _i(r), Cd(r)) : (t = r),
      (r.dep.activeLink = r.prevActiveLink),
      (r.prevActiveLink = void 0),
      (r = s))
  }
  ;((e.deps = t), (e.depsTail = n))
}
function Co(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (
      t.dep.version !== t.version ||
      (t.dep.computed && (bc(t.dep.computed) || t.dep.version !== t.version))
    )
      return !0
  return !!e._dirty
}
function bc(e) {
  if (
    (e.flags & 4 && !(e.flags & 16)) ||
    ((e.flags &= -17), e.globalVersion === mr) ||
    ((e.globalVersion = mr), !e.isSSR && e.flags & 128 && ((!e.deps && !e._dirty) || !Co(e)))
  )
    return
  e.flags |= 2
  const t = e.dep,
    n = ve,
    r = gt
  ;((ve = e), (gt = !0))
  try {
    _c(e)
    const s = e.fn(e._value)
    ;(t.version === 0 || nn(s, e._value)) && ((e.flags |= 128), (e._value = s), t.version++)
  } catch (s) {
    throw (t.version++, s)
  } finally {
    ;((ve = n), (gt = r), yc(e), (e.flags &= -3))
  }
}
function _i(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: s } = e
  if (
    (r && ((r.nextSub = s), (e.prevSub = void 0)),
    s && ((s.prevSub = r), (e.nextSub = void 0)),
    n.subs === e && ((n.subs = r), !r && n.computed))
  ) {
    n.computed.flags &= -5
    for (let o = n.computed.deps; o; o = o.nextDep) _i(o, !0)
  }
  !t && !--n.sc && n.map && n.map.delete(n.key)
}
function Cd(e) {
  const { prevDep: t, nextDep: n } = e
  ;(t && ((t.nextDep = n), (e.prevDep = void 0)), n && ((n.prevDep = t), (e.nextDep = void 0)))
}
let gt = !0
const vc = []
function Gt() {
  ;(vc.push(gt), (gt = !1))
}
function qt() {
  const e = vc.pop()
  gt = e === void 0 ? !0 : e
}
function ea(e) {
  const { cleanup: t } = e
  if (((e.cleanup = void 0), t)) {
    const n = ve
    ve = void 0
    try {
      t()
    } finally {
      ve = n
    }
  }
}
let mr = 0
class Rd {
  constructor(t, n) {
    ;((this.sub = t),
      (this.dep = n),
      (this.version = n.version),
      (this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0))
  }
}
class Ls {
  constructor(t) {
    ;((this.computed = t),
      (this.version = 0),
      (this.activeLink = void 0),
      (this.subs = void 0),
      (this.map = void 0),
      (this.key = void 0),
      (this.sc = 0),
      (this.__v_skip = !0))
  }
  track(t) {
    if (!ve || !gt || ve === this.computed) return
    let n = this.activeLink
    if (n === void 0 || n.sub !== ve)
      ((n = this.activeLink = new Rd(ve, this)),
        ve.deps
          ? ((n.prevDep = ve.depsTail), (ve.depsTail.nextDep = n), (ve.depsTail = n))
          : (ve.deps = ve.depsTail = n),
        Ec(n))
    else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
      const r = n.nextDep
      ;((r.prevDep = n.prevDep),
        n.prevDep && (n.prevDep.nextDep = r),
        (n.prevDep = ve.depsTail),
        (n.nextDep = void 0),
        (ve.depsTail.nextDep = n),
        (ve.depsTail = n),
        ve.deps === n && (ve.deps = r))
    }
    return n
  }
  trigger(t) {
    ;(this.version++, mr++, this.notify(t))
  }
  notify(t) {
    gi()
    try {
      for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify()
    } finally {
      mi()
    }
  }
}
function Ec(e) {
  if ((e.dep.sc++, e.sub.flags & 4)) {
    const t = e.dep.computed
    if (t && !e.dep.subs) {
      t.flags |= 20
      for (let r = t.deps; r; r = r.nextDep) Ec(r)
    }
    const n = e.dep.subs
    ;(n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e))
  }
}
const ns = new WeakMap(),
  En = Symbol(''),
  Ro = Symbol(''),
  _r = Symbol('')
function Ue(e, t, n) {
  if (gt && ve) {
    let r = ns.get(e)
    r || ns.set(e, (r = new Map()))
    let s = r.get(n)
    ;(s || (r.set(n, (s = new Ls())), (s.map = r), (s.key = n)), s.track())
  }
}
function Ut(e, t, n, r, s, o) {
  const i = ns.get(e)
  if (!i) {
    mr++
    return
  }
  const a = (l) => {
    l && l.trigger()
  }
  if ((gi(), t === 'clear')) i.forEach(a)
  else {
    const l = z(e),
      u = l && vs(n)
    if (l && n === 'length') {
      const c = Number(r)
      i.forEach((f, d) => {
        ;(d === 'length' || d === _r || (!Ot(d) && d >= c)) && a(f)
      })
    } else
      switch (((n !== void 0 || i.has(void 0)) && a(i.get(n)), u && a(i.get(_r)), t)) {
        case 'add':
          l ? u && a(i.get('length')) : (a(i.get(En)), Mn(e) && a(i.get(Ro)))
          break
        case 'delete':
          l || (a(i.get(En)), Mn(e) && a(i.get(Ro)))
          break
        case 'set':
          Mn(e) && a(i.get(En))
          break
      }
  }
  mi()
}
function Td(e, t) {
  const n = ns.get(e)
  return n && n.get(t)
}
function kn(e) {
  const t = le(e)
  return t === e ? t : (Ue(t, 'iterate', _r), rt(e) ? t : t.map(mt))
}
function ks(e) {
  return (Ue((e = le(e)), 'iterate', _r), e)
}
function Zt(e, t) {
  return It(e) ? Bn(rn(e) ? mt(t) : t) : mt(t)
}
const Sd = {
  __proto__: null,
  [Symbol.iterator]() {
    return zs(this, Symbol.iterator, (e) => Zt(this, e))
  },
  concat(...e) {
    return kn(this).concat(...e.map((t) => (z(t) ? kn(t) : t)))
  },
  entries() {
    return zs(this, 'entries', (e) => ((e[1] = Zt(this, e[1])), e))
  },
  every(e, t) {
    return xt(this, 'every', e, t, void 0, arguments)
  },
  filter(e, t) {
    return xt(this, 'filter', e, t, (n) => n.map((r) => Zt(this, r)), arguments)
  },
  find(e, t) {
    return xt(this, 'find', e, t, (n) => Zt(this, n), arguments)
  },
  findIndex(e, t) {
    return xt(this, 'findIndex', e, t, void 0, arguments)
  },
  findLast(e, t) {
    return xt(this, 'findLast', e, t, (n) => Zt(this, n), arguments)
  },
  findLastIndex(e, t) {
    return xt(this, 'findLastIndex', e, t, void 0, arguments)
  },
  forEach(e, t) {
    return xt(this, 'forEach', e, t, void 0, arguments)
  },
  includes(...e) {
    return Zs(this, 'includes', e)
  },
  indexOf(...e) {
    return Zs(this, 'indexOf', e)
  },
  join(e) {
    return kn(this).join(e)
  },
  lastIndexOf(...e) {
    return Zs(this, 'lastIndexOf', e)
  },
  map(e, t) {
    return xt(this, 'map', e, t, void 0, arguments)
  },
  pop() {
    return tr(this, 'pop')
  },
  push(...e) {
    return tr(this, 'push', e)
  },
  reduce(e, ...t) {
    return ta(this, 'reduce', e, t)
  },
  reduceRight(e, ...t) {
    return ta(this, 'reduceRight', e, t)
  },
  shift() {
    return tr(this, 'shift')
  },
  some(e, t) {
    return xt(this, 'some', e, t, void 0, arguments)
  },
  splice(...e) {
    return tr(this, 'splice', e)
  },
  toReversed() {
    return kn(this).toReversed()
  },
  toSorted(e) {
    return kn(this).toSorted(e)
  },
  toSpliced(...e) {
    return kn(this).toSpliced(...e)
  },
  unshift(...e) {
    return tr(this, 'unshift', e)
  },
  values() {
    return zs(this, 'values', (e) => Zt(this, e))
  },
}
function zs(e, t, n) {
  const r = ks(e),
    s = r[t]()
  return (
    r !== e &&
      !rt(e) &&
      ((s._next = s.next),
      (s.next = () => {
        const o = s._next()
        return (o.done || (o.value = n(o.value)), o)
      })),
    s
  )
}
const Ld = Array.prototype
function xt(e, t, n, r, s, o) {
  const i = ks(e),
    a = i !== e && !rt(e),
    l = i[t]
  if (l !== Ld[t]) {
    const f = l.apply(e, o)
    return a ? mt(f) : f
  }
  let u = n
  i !== e &&
    (a
      ? (u = function (f, d) {
          return n.call(this, Zt(e, f), d, e)
        })
      : n.length > 2 &&
        (u = function (f, d) {
          return n.call(this, f, d, e)
        }))
  const c = l.call(i, u, r)
  return a && s ? s(c) : c
}
function ta(e, t, n, r) {
  const s = ks(e)
  let o = n
  return (
    s !== e &&
      (rt(e)
        ? n.length > 3 &&
          (o = function (i, a, l) {
            return n.call(this, i, a, l, e)
          })
        : (o = function (i, a, l) {
            return n.call(this, i, Zt(e, a), l, e)
          })),
    s[t](o, ...r)
  )
}
function Zs(e, t, n) {
  const r = le(e)
  Ue(r, 'iterate', _r)
  const s = r[t](...n)
  return (s === -1 || s === !1) && As(n[0]) ? ((n[0] = le(n[0])), r[t](...n)) : s
}
function tr(e, t, n = []) {
  ;(Gt(), gi())
  const r = le(e)[t].apply(e, n)
  return (mi(), qt(), r)
}
const kd = ui('__proto__,__v_isRef,__isVue'),
  wc = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== 'arguments' && e !== 'caller')
      .map((e) => Symbol[e])
      .filter(Ot)
  )
function Ad(e) {
  Ot(e) || (e = String(e))
  const t = le(this)
  return (Ue(t, 'has', e), t.hasOwnProperty(e))
}
class Cc {
  constructor(t = !1, n = !1) {
    ;((this._isReadonly = t), (this._isShallow = n))
  }
  get(t, n, r) {
    if (n === '__v_skip') return t.__v_skip
    const s = this._isReadonly,
      o = this._isShallow
    if (n === '__v_isReactive') return !s
    if (n === '__v_isReadonly') return s
    if (n === '__v_isShallow') return o
    if (n === '__v_raw')
      return r === (s ? (o ? $d : Lc) : o ? Sc : Tc).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(r)
        ? t
        : void 0
    const i = z(t)
    if (!s) {
      let l
      if (i && (l = Sd[n])) return l
      if (n === 'hasOwnProperty') return Ad
    }
    const a = Reflect.get(t, n, Re(t) ? t : r)
    if ((Ot(n) ? wc.has(n) : kd(n)) || (s || Ue(t, 'get', n), o)) return a
    if (Re(a)) {
      const l = i && vs(n) ? a : a.value
      return s && ue(l) ? So(l) : l
    }
    return ue(a) ? (s ? So(a) : an(a)) : a
  }
}
class Rc extends Cc {
  constructor(t = !1) {
    super(!1, t)
  }
  set(t, n, r, s) {
    let o = t[n]
    const i = z(t) && vs(n)
    if (!this._isShallow) {
      const u = It(o)
      if ((!rt(r) && !It(r) && ((o = le(o)), (r = le(r))), !i && Re(o) && !Re(r)))
        return (u || (o.value = r), !0)
    }
    const a = i ? Number(n) < t.length : he(t, n),
      l = Reflect.set(t, n, r, Re(t) ? t : s)
    return (t === le(s) && (a ? nn(r, o) && Ut(t, 'set', n, r) : Ut(t, 'add', n, r)), l)
  }
  deleteProperty(t, n) {
    const r = he(t, n)
    t[n]
    const s = Reflect.deleteProperty(t, n)
    return (s && r && Ut(t, 'delete', n, void 0), s)
  }
  has(t, n) {
    const r = Reflect.has(t, n)
    return ((!Ot(n) || !wc.has(n)) && Ue(t, 'has', n), r)
  }
  ownKeys(t) {
    return (Ue(t, 'iterate', z(t) ? 'length' : En), Reflect.ownKeys(t))
  }
}
class Pd extends Cc {
  constructor(t = !1) {
    super(!0, t)
  }
  set(t, n) {
    return !0
  }
  deleteProperty(t, n) {
    return !0
  }
}
const Od = new Rc(),
  Id = new Pd(),
  Nd = new Rc(!0)
const To = (e) => e,
  Dr = (e) => Reflect.getPrototypeOf(e)
function xd(e, t, n) {
  return function (...r) {
    const s = this.__v_raw,
      o = le(s),
      i = Mn(o),
      a = e === 'entries' || (e === Symbol.iterator && i),
      l = e === 'keys' && i,
      u = s[e](...r),
      c = n ? To : t ? Bn : mt
    return (
      !t && Ue(o, 'iterate', l ? Ro : En),
      xe(Object.create(u), {
        next() {
          const { value: f, done: d } = u.next()
          return d ? { value: f, done: d } : { value: a ? [c(f[0]), c(f[1])] : c(f), done: d }
        },
      })
    )
  }
}
function Fr(e) {
  return function (...t) {
    return e === 'delete' ? !1 : e === 'clear' ? void 0 : this
  }
}
function Md(e, t) {
  const n = {
    get(s) {
      const o = this.__v_raw,
        i = le(o),
        a = le(s)
      e || (nn(s, a) && Ue(i, 'get', s), Ue(i, 'get', a))
      const { has: l } = Dr(i),
        u = t ? To : e ? Bn : mt
      if (l.call(i, s)) return u(o.get(s))
      if (l.call(i, a)) return u(o.get(a))
      o !== i && o.get(s)
    },
    get size() {
      const s = this.__v_raw
      return (!e && Ue(le(s), 'iterate', En), s.size)
    },
    has(s) {
      const o = this.__v_raw,
        i = le(o),
        a = le(s)
      return (
        e || (nn(s, a) && Ue(i, 'has', s), Ue(i, 'has', a)),
        s === a ? o.has(s) : o.has(s) || o.has(a)
      )
    },
    forEach(s, o) {
      const i = this,
        a = i.__v_raw,
        l = le(a),
        u = t ? To : e ? Bn : mt
      return (!e && Ue(l, 'iterate', En), a.forEach((c, f) => s.call(o, u(c), u(f), i)))
    },
  }
  return (
    xe(
      n,
      e
        ? { add: Fr('add'), set: Fr('set'), delete: Fr('delete'), clear: Fr('clear') }
        : {
            add(s) {
              !t && !rt(s) && !It(s) && (s = le(s))
              const o = le(this)
              return (Dr(o).has.call(o, s) || (o.add(s), Ut(o, 'add', s, s)), this)
            },
            set(s, o) {
              !t && !rt(o) && !It(o) && (o = le(o))
              const i = le(this),
                { has: a, get: l } = Dr(i)
              let u = a.call(i, s)
              u || ((s = le(s)), (u = a.call(i, s)))
              const c = l.call(i, s)
              return (i.set(s, o), u ? nn(o, c) && Ut(i, 'set', s, o) : Ut(i, 'add', s, o), this)
            },
            delete(s) {
              const o = le(this),
                { has: i, get: a } = Dr(o)
              let l = i.call(o, s)
              ;(l || ((s = le(s)), (l = i.call(o, s))), a && a.call(o, s))
              const u = o.delete(s)
              return (l && Ut(o, 'delete', s, void 0), u)
            },
            clear() {
              const s = le(this),
                o = s.size !== 0,
                i = s.clear()
              return (o && Ut(s, 'clear', void 0, void 0), i)
            },
          }
    ),
    ['keys', 'values', 'entries', Symbol.iterator].forEach((s) => {
      n[s] = xd(s, e, t)
    }),
    n
  )
}
function yi(e, t) {
  const n = Md(e, t)
  return (r, s, o) =>
    s === '__v_isReactive'
      ? !e
      : s === '__v_isReadonly'
        ? e
        : s === '__v_raw'
          ? r
          : Reflect.get(he(n, s) && s in r ? n : r, s, o)
}
const Dd = { get: yi(!1, !1) },
  Fd = { get: yi(!1, !0) },
  Hd = { get: yi(!0, !1) }
const Tc = new WeakMap(),
  Sc = new WeakMap(),
  Lc = new WeakMap(),
  $d = new WeakMap()
function Ud(e) {
  switch (e) {
    case 'Object':
    case 'Array':
      return 1
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2
    default:
      return 0
  }
}
function jd(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Ud(ud(e))
}
function an(e) {
  return It(e) ? e : bi(e, !1, Od, Dd, Tc)
}
function Bt(e) {
  return bi(e, !1, Nd, Fd, Sc)
}
function So(e) {
  return bi(e, !0, Id, Hd, Lc)
}
function bi(e, t, n, r, s) {
  if (!ue(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e
  const o = jd(e)
  if (o === 0) return e
  const i = s.get(e)
  if (i) return i
  const a = new Proxy(e, o === 2 ? r : n)
  return (s.set(e, a), a)
}
function rn(e) {
  return It(e) ? rn(e.__v_raw) : !!(e && e.__v_isReactive)
}
function It(e) {
  return !!(e && e.__v_isReadonly)
}
function rt(e) {
  return !!(e && e.__v_isShallow)
}
function As(e) {
  return e ? !!e.__v_raw : !1
}
function le(e) {
  const t = e && e.__v_raw
  return t ? le(t) : e
}
function Bd(e) {
  return (!he(e, '__v_skip') && Object.isExtensible(e) && lc(e, '__v_skip', !0), e)
}
const mt = (e) => (ue(e) ? an(e) : e),
  Bn = (e) => (ue(e) ? So(e) : e)
function Re(e) {
  return e ? e.__v_isRef === !0 : !1
}
function st(e) {
  return kc(e, !1)
}
function Wn(e) {
  return kc(e, !0)
}
function kc(e, t) {
  return Re(e) ? e : new Wd(e, t)
}
class Wd {
  constructor(t, n) {
    ;((this.dep = new Ls()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = n ? t : le(t)),
      (this._value = n ? t : mt(t)),
      (this.__v_isShallow = n))
  }
  get value() {
    return (this.dep.track(), this._value)
  }
  set value(t) {
    const n = this._rawValue,
      r = this.__v_isShallow || rt(t) || It(t)
    ;((t = r ? t : le(t)),
      nn(t, n) && ((this._rawValue = t), (this._value = r ? t : mt(t)), this.dep.trigger()))
  }
}
function _e(e) {
  return Re(e) ? e.value : e
}
function Vd(e) {
  return ee(e) ? e() : _e(e)
}
const Kd = {
  get: (e, t, n) => (t === '__v_raw' ? e : _e(Reflect.get(e, t, n))),
  set: (e, t, n, r) => {
    const s = e[t]
    return Re(s) && !Re(n) ? ((s.value = n), !0) : Reflect.set(e, t, n, r)
  },
}
function Ac(e) {
  return rn(e) ? e : new Proxy(e, Kd)
}
class Gd {
  constructor(t) {
    ;((this.__v_isRef = !0), (this._value = void 0))
    const n = (this.dep = new Ls()),
      { get: r, set: s } = t(n.track.bind(n), n.trigger.bind(n))
    ;((this._get = r), (this._set = s))
  }
  get value() {
    return (this._value = this._get())
  }
  set value(t) {
    this._set(t)
  }
}
function qd(e) {
  return new Gd(e)
}
class Yd {
  constructor(t, n, r) {
    ;((this._object = t),
      (this._key = n),
      (this._defaultValue = r),
      (this.__v_isRef = !0),
      (this._value = void 0),
      (this._raw = le(t)))
    let s = !0,
      o = t
    if (!z(t) || !vs(String(n)))
      do s = !As(o) || rt(o)
      while (s && (o = o.__v_raw))
    this._shallow = s
  }
  get value() {
    let t = this._object[this._key]
    return (this._shallow && (t = _e(t)), (this._value = t === void 0 ? this._defaultValue : t))
  }
  set value(t) {
    if (this._shallow && Re(this._raw[this._key])) {
      const n = this._object[this._key]
      if (Re(n)) {
        n.value = t
        return
      }
    }
    this._object[this._key] = t
  }
  get dep() {
    return Td(this._raw, this._key)
  }
}
class Jd {
  constructor(t) {
    ;((this._getter = t), (this.__v_isRef = !0), (this.__v_isReadonly = !0), (this._value = void 0))
  }
  get value() {
    return (this._value = this._getter())
  }
}
function Pc(e, t, n) {
  return Re(e) ? e : ee(e) ? new Jd(e) : ue(e) && arguments.length > 1 ? Xd(e, t, n) : st(e)
}
function Xd(e, t, n) {
  return new Yd(e, t, n)
}
class Qd {
  constructor(t, n, r) {
    ;((this.fn = t),
      (this.setter = n),
      (this._value = void 0),
      (this.dep = new Ls(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = mr - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !n),
      (this.isSSR = r))
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && ve !== this)) return (mc(this, !0), !0)
  }
  get value() {
    const t = this.dep.track()
    return (bc(this), t && (t.version = this.dep.version), this._value)
  }
  set value(t) {
    this.setter && this.setter(t)
  }
}
function zd(e, t, n = !1) {
  let r, s
  return (ee(e) ? (r = e) : ((r = e.get), (s = e.set)), new Qd(r, s, n))
}
const Hr = {},
  rs = new WeakMap()
let mn
function Zd(e, t = !1, n = mn) {
  if (n) {
    let r = rs.get(n)
    ;(r || rs.set(n, (r = [])), r.push(e))
  }
}
function eh(e, t, n = be) {
  const { immediate: r, deep: s, once: o, scheduler: i, augmentJob: a, call: l } = n,
    u = (_) => (s ? _ : rt(_) || s === !1 || s === 0 ? jt(_, 1) : jt(_))
  let c,
    f,
    d,
    h,
    E = !1,
    g = !1
  if (
    (Re(e)
      ? ((f = () => e.value), (E = rt(e)))
      : rn(e)
        ? ((f = () => u(e)), (E = !0))
        : z(e)
          ? ((g = !0),
            (E = e.some((_) => rn(_) || rt(_))),
            (f = () =>
              e.map((_) => {
                if (Re(_)) return _.value
                if (rn(_)) return u(_)
                if (ee(_)) return l ? l(_, 2) : _()
              })))
          : ee(e)
            ? t
              ? (f = l ? () => l(e, 2) : e)
              : (f = () => {
                  if (d) {
                    Gt()
                    try {
                      d()
                    } finally {
                      qt()
                    }
                  }
                  const _ = mn
                  mn = c
                  try {
                    return l ? l(e, 3, [h]) : e(h)
                  } finally {
                    mn = _
                  }
                })
            : (f = At),
    t && s)
  ) {
    const _ = f,
      T = s === !0 ? 1 / 0 : s
    f = () => jt(_(), T)
  }
  const R = Ss(),
    y = () => {
      ;(c.stop(), R && R.active && di(R.effects, c))
    }
  if (o && t) {
    const _ = t
    t = (...T) => {
      ;(_(...T), y())
    }
  }
  let v = g ? new Array(e.length).fill(Hr) : Hr
  const p = (_) => {
    if (!(!(c.flags & 1) || (!c.dirty && !_)))
      if (t) {
        const T = c.run()
        if (s || E || (g ? T.some((L, A) => nn(L, v[A])) : nn(T, v))) {
          d && d()
          const L = mn
          mn = c
          try {
            const A = [T, v === Hr ? void 0 : g && v[0] === Hr ? [] : v, h]
            ;((v = T), l ? l(t, 3, A) : t(...A))
          } finally {
            mn = L
          }
        }
      } else c.run()
  }
  return (
    a && a(p),
    (c = new pc(f)),
    (c.scheduler = i ? () => i(p, !1) : p),
    (h = (_) => Zd(_, !1, c)),
    (d = c.onStop =
      () => {
        const _ = rs.get(c)
        if (_) {
          if (l) l(_, 4)
          else for (const T of _) T()
          rs.delete(c)
        }
      }),
    t ? (r ? p(!0) : (v = c.run())) : i ? i(p.bind(null, !0), !0) : c.run(),
    (y.pause = c.pause.bind(c)),
    (y.resume = c.resume.bind(c)),
    (y.stop = y),
    y
  )
}
function jt(e, t = 1 / 0, n) {
  if (t <= 0 || !ue(e) || e.__v_skip || ((n = n || new Map()), (n.get(e) || 0) >= t)) return e
  if ((n.set(e, t), t--, Re(e))) jt(e.value, t, n)
  else if (z(e)) for (let r = 0; r < e.length; r++) jt(e[r], t, n)
  else if (sc(e) || Mn(e))
    e.forEach((r) => {
      jt(r, t, n)
    })
  else if (ac(e)) {
    for (const r in e) jt(e[r], t, n)
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && jt(e[r], t, n)
  }
  return e
}
function Pr(e, t, n, r) {
  try {
    return r ? e(...r) : e()
  } catch (s) {
    Zn(s, t, n)
  }
}
function _t(e, t, n, r) {
  if (ee(e)) {
    const s = Pr(e, t, n, r)
    return (
      s &&
        oc(s) &&
        s.catch((o) => {
          Zn(o, t, n)
        }),
      s
    )
  }
  if (z(e)) {
    const s = []
    for (let o = 0; o < e.length; o++) s.push(_t(e[o], t, n, r))
    return s
  }
}
function Zn(e, t, n, r = !0) {
  const s = t ? t.vnode : null,
    { errorHandler: o, throwUnhandledErrorInProduction: i } = (t && t.appContext.config) || be
  if (t) {
    let a = t.parent
    const l = t.proxy,
      u = `https://vuejs.org/error-reference/#runtime-${n}`
    for (; a; ) {
      const c = a.ec
      if (c) {
        for (let f = 0; f < c.length; f++) if (c[f](e, l, u) === !1) return
      }
      a = a.parent
    }
    if (o) {
      ;(Gt(), Pr(o, null, 10, [e, l, u]), qt())
      return
    }
  }
  th(e, n, s, r, i)
}
function th(e, t, n, r = !0, s = !1) {
  if (s) throw e
  console.error(e)
}
const Ke = []
let Tt = -1
const Dn = []
let en = null,
  Pn = 0
const Oc = Promise.resolve()
let ss = null
function Vn(e) {
  const t = ss || Oc
  return e ? t.then(this ? e.bind(this) : e) : t
}
function nh(e) {
  let t = Tt + 1,
    n = Ke.length
  for (; t < n; ) {
    const r = (t + n) >>> 1,
      s = Ke[r],
      o = yr(s)
    o < e || (o === e && s.flags & 2) ? (t = r + 1) : (n = r)
  }
  return t
}
function vi(e) {
  if (!(e.flags & 1)) {
    const t = yr(e),
      n = Ke[Ke.length - 1]
    ;(!n || (!(e.flags & 2) && t >= yr(n)) ? Ke.push(e) : Ke.splice(nh(t), 0, e),
      (e.flags |= 1),
      Ic())
  }
}
function Ic() {
  ss || (ss = Oc.then(Nc))
}
function Lo(e) {
  ;(z(e)
    ? Dn.push(...e)
    : en && e.id === -1
      ? en.splice(Pn + 1, 0, e)
      : e.flags & 1 || (Dn.push(e), (e.flags |= 1)),
    Ic())
}
function na(e, t, n = Tt + 1) {
  for (; n < Ke.length; n++) {
    const r = Ke[n]
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid) continue
      ;(Ke.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2))
    }
  }
}
function os(e) {
  if (Dn.length) {
    const t = [...new Set(Dn)].sort((n, r) => yr(n) - yr(r))
    if (((Dn.length = 0), en)) {
      en.push(...t)
      return
    }
    for (en = t, Pn = 0; Pn < en.length; Pn++) {
      const n = en[Pn]
      ;(n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), (n.flags &= -2))
    }
    ;((en = null), (Pn = 0))
  }
}
const yr = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id)
function Nc(e) {
  try {
    for (Tt = 0; Tt < Ke.length; Tt++) {
      const t = Ke[Tt]
      t &&
        !(t.flags & 8) &&
        (t.flags & 4 && (t.flags &= -2), Pr(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2))
    }
  } finally {
    for (; Tt < Ke.length; Tt++) {
      const t = Ke[Tt]
      t && (t.flags &= -2)
    }
    ;((Tt = -1), (Ke.length = 0), os(), (ss = null), (Ke.length || Dn.length) && Nc())
  }
}
let nt = null,
  xc = null
function is(e) {
  const t = nt
  return ((nt = e), (xc = (e && e.type.__scopeId) || null), t)
}
function Mc(e, t = nt, n) {
  if (!t || e._n) return e
  const r = (...s) => {
    r._d && fs(-1)
    const o = is(t)
    let i
    try {
      i = e(...s)
    } finally {
      ;(is(o), r._d && fs(1))
    }
    return i
  }
  return ((r._n = !0), (r._c = !0), (r._d = !0), r)
}
function m0(e, t) {
  if (nt === null) return e
  const n = Ms(nt),
    r = e.dirs || (e.dirs = [])
  for (let s = 0; s < t.length; s++) {
    let [o, i, a, l = be] = t[s]
    o &&
      (ee(o) && (o = { mounted: o, updated: o }),
      o.deep && jt(i),
      r.push({ dir: o, instance: n, value: i, oldValue: void 0, arg: a, modifiers: l }))
  }
  return e
}
function St(e, t, n, r) {
  const s = e.dirs,
    o = t && t.dirs
  for (let i = 0; i < s.length; i++) {
    const a = s[i]
    o && (a.oldValue = o[i].value)
    let l = a.dir[r]
    l && (Gt(), _t(l, n, 8, [e.el, a, e, t]), qt())
  }
}
function Fn(e, t) {
  if (Fe) {
    let n = Fe.provides
    const r = Fe.parent && Fe.parent.provides
    ;(r === n && (n = Fe.provides = Object.create(r)), (n[e] = t))
  }
}
function qe(e, t, n = !1) {
  const r = Ln()
  if (r || wn) {
    let s = wn
      ? wn._context.provides
      : r
        ? r.parent == null || r.ce
          ? r.vnode.appContext && r.vnode.appContext.provides
          : r.parent.provides
        : void 0
    if (s && e in s) return s[e]
    if (arguments.length > 1) return n && ee(t) ? t.call(r && r.proxy) : t
  }
}
function Ps() {
  return !!(Ln() || wn)
}
const rh = Symbol.for('v-scx'),
  sh = () => qe(rh)
function oh(e, t) {
  return Ei(e, null, t)
}
function ct(e, t, n) {
  return Ei(e, t, n)
}
function Ei(e, t, n = be) {
  const { immediate: r, deep: s, flush: o, once: i } = n,
    a = xe({}, n),
    l = (t && r) || (!t && o !== 'post')
  let u
  if (Yn) {
    if (o === 'sync') {
      const h = sh()
      u = h.__watcherHandles || (h.__watcherHandles = [])
    } else if (!l) {
      const h = () => {}
      return ((h.stop = At), (h.resume = At), (h.pause = At), h)
    }
  }
  const c = Fe
  a.call = (h, E, g) => _t(h, c, E, g)
  let f = !1
  ;(o === 'post'
    ? (a.scheduler = (h) => {
        Ie(h, c && c.suspense)
      })
    : o !== 'sync' &&
      ((f = !0),
      (a.scheduler = (h, E) => {
        E ? h() : vi(h)
      })),
    (a.augmentJob = (h) => {
      ;(t && (h.flags |= 4), f && ((h.flags |= 2), c && ((h.id = c.uid), (h.i = c))))
    }))
  const d = eh(e, t, a)
  return (Yn && (u ? u.push(d) : l && d()), d)
}
function ih(e, t, n) {
  const r = this.proxy,
    s = we(e) ? (e.includes('.') ? Dc(r, e) : () => r[e]) : e.bind(r, r)
  let o
  ee(t) ? (o = t) : ((o = t.handler), (n = t))
  const i = Nr(this),
    a = Ei(s, o.bind(r), n)
  return (i(), a)
}
function Dc(e, t) {
  const n = t.split('.')
  return () => {
    let r = e
    for (let s = 0; s < n.length && r; s++) r = r[n[s]]
    return r
  }
}
const ah = Symbol('_vte'),
  Fc = (e) => e.__isTeleport,
  Lt = Symbol('_leaveCb'),
  nr = Symbol('_enterCb')
function lh() {
  const e = { isMounted: !1, isLeaving: !1, isUnmounting: !1, leavingVNodes: new Map() }
  return (
    Is(() => {
      e.isMounted = !0
    }),
    Ir(() => {
      e.isUnmounting = !0
    }),
    e
  )
}
const at = [Function, Array],
  Hc = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: at,
    onEnter: at,
    onAfterEnter: at,
    onEnterCancelled: at,
    onBeforeLeave: at,
    onLeave: at,
    onAfterLeave: at,
    onLeaveCancelled: at,
    onBeforeAppear: at,
    onAppear: at,
    onAfterAppear: at,
    onAppearCancelled: at,
  },
  $c = (e) => {
    const t = e.subTree
    return t.component ? $c(t.component) : t
  },
  ch = {
    name: 'BaseTransition',
    props: Hc,
    setup(e, { slots: t }) {
      const n = Ln(),
        r = lh()
      return () => {
        const s = t.default && Bc(t.default(), !0)
        if (!s || !s.length) return
        const o = Uc(s),
          i = le(e),
          { mode: a } = i
        if (r.isLeaving) return eo(o)
        const l = ra(o)
        if (!l) return eo(o)
        let u = ko(l, i, r, n, (f) => (u = f))
        l.type !== Ne && Kn(l, u)
        let c = n.subTree && ra(n.subTree)
        if (c && c.type !== Ne && !ht(c, l) && $c(n).type !== Ne) {
          let f = ko(c, i, r, n)
          if ((Kn(c, f), a === 'out-in' && l.type !== Ne))
            return (
              (r.isLeaving = !0),
              (f.afterLeave = () => {
                ;((r.isLeaving = !1),
                  n.job.flags & 8 || n.update(),
                  delete f.afterLeave,
                  (c = void 0))
              }),
              eo(o)
            )
          a === 'in-out' && l.type !== Ne
            ? (f.delayLeave = (d, h, E) => {
                const g = jc(r, c)
                ;((g[String(c.key)] = c),
                  (d[Lt] = () => {
                    ;(h(), (d[Lt] = void 0), delete u.delayedLeave, (c = void 0))
                  }),
                  (u.delayedLeave = () => {
                    ;(E(), delete u.delayedLeave, (c = void 0))
                  }))
              })
            : (c = void 0)
        } else c && (c = void 0)
        return o
      }
    },
  }
function Uc(e) {
  let t = e[0]
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== Ne) {
        t = n
        break
      }
  }
  return t
}
const uh = ch
function jc(e, t) {
  const { leavingVNodes: n } = e
  let r = n.get(t.type)
  return (r || ((r = Object.create(null)), n.set(t.type, r)), r)
}
function ko(e, t, n, r, s) {
  const {
      appear: o,
      mode: i,
      persisted: a = !1,
      onBeforeEnter: l,
      onEnter: u,
      onAfterEnter: c,
      onEnterCancelled: f,
      onBeforeLeave: d,
      onLeave: h,
      onAfterLeave: E,
      onLeaveCancelled: g,
      onBeforeAppear: R,
      onAppear: y,
      onAfterAppear: v,
      onAppearCancelled: p,
    } = t,
    _ = String(e.key),
    T = jc(n, e),
    L = (F, $) => {
      F && _t(F, r, 9, $)
    },
    A = (F, $) => {
      const q = $[1]
      ;(L(F, $), z(F) ? F.every((D) => D.length <= 1) && q() : F.length <= 1 && q())
    },
    j = {
      mode: i,
      persisted: a,
      beforeEnter(F) {
        let $ = l
        if (!n.isMounted)
          if (o) $ = R || l
          else return
        F[Lt] && F[Lt](!0)
        const q = T[_]
        ;(q && ht(e, q) && q.el[Lt] && q.el[Lt](), L($, [F]))
      },
      enter(F) {
        if (T[_] === e) return
        let $ = u,
          q = c,
          D = f
        if (!n.isMounted)
          if (o) (($ = y || u), (q = v || c), (D = p || f))
          else return
        let J = !1
        F[nr] = (ae) => {
          J ||
            ((J = !0),
            ae ? L(D, [F]) : L(q, [F]),
            j.delayedLeave && j.delayedLeave(),
            (F[nr] = void 0))
        }
        const ne = F[nr].bind(null, !1)
        $ ? A($, [F, ne]) : ne()
      },
      leave(F, $) {
        const q = String(e.key)
        if ((F[nr] && F[nr](!0), n.isUnmounting)) return $()
        L(d, [F])
        let D = !1
        F[Lt] = (ne) => {
          D ||
            ((D = !0), $(), ne ? L(g, [F]) : L(E, [F]), (F[Lt] = void 0), T[q] === e && delete T[q])
        }
        const J = F[Lt].bind(null, !1)
        ;((T[q] = e), h ? A(h, [F, J]) : J())
      },
      clone(F) {
        const $ = ko(F, t, n, r, s)
        return (s && s($), $)
      },
    }
  return j
}
function eo(e) {
  if (Or(e)) return ((e = Yt(e)), (e.children = null), e)
}
function ra(e) {
  if (!Or(e)) return Fc(e.type) && e.children ? Uc(e.children) : e
  if (e.component) return e.component.subTree
  const { shapeFlag: t, children: n } = e
  if (n) {
    if (t & 16) return n[0]
    if (t & 32 && ee(n.default)) return n.default()
  }
}
function Kn(e, t) {
  e.shapeFlag & 6 && e.component
    ? ((e.transition = t), Kn(e.component.subTree, t))
    : e.shapeFlag & 128
      ? ((e.ssContent.transition = t.clone(e.ssContent)),
        (e.ssFallback.transition = t.clone(e.ssFallback)))
      : (e.transition = t)
}
function Bc(e, t = !1, n) {
  let r = [],
    s = 0
  for (let o = 0; o < e.length; o++) {
    let i = e[o]
    const a = n == null ? i.key : String(n) + String(i.key != null ? i.key : o)
    i.type === Ge
      ? (i.patchFlag & 128 && s++, (r = r.concat(Bc(i.children, t, a))))
      : (t || i.type !== Ne) && r.push(a != null ? Yt(i, { key: a }) : i)
  }
  if (s > 1) for (let o = 0; o < r.length; o++) r[o].patchFlag = -2
  return r
}
function ln(e, t) {
  return ee(e) ? xe({ name: e.name }, t, { setup: e }) : e
}
function wi(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + '-', 0, 0]
}
function sa(e, t) {
  let n
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable)
}
const as = new WeakMap()
function Hn(e, t, n, r, s = !1) {
  if (z(e)) {
    e.forEach((g, R) => Hn(g, t && (z(t) ? t[R] : t), n, r, s))
    return
  }
  if (sn(r) && !s) {
    r.shapeFlag & 512 &&
      r.type.__asyncResolved &&
      r.component.subTree.component &&
      Hn(e, t, n, r.component.subTree)
    return
  }
  const o = r.shapeFlag & 4 ? Ms(r.component) : r.el,
    i = s ? null : o,
    { i: a, r: l } = e,
    u = t && t.r,
    c = a.refs === be ? (a.refs = {}) : a.refs,
    f = a.setupState,
    d = le(f),
    h = f === be ? rc : (g) => (sa(c, g) ? !1 : he(d, g)),
    E = (g, R) => !(R && sa(c, R))
  if (u != null && u !== l) {
    if ((oa(t), we(u))) ((c[u] = null), h(u) && (f[u] = null))
    else if (Re(u)) {
      const g = t
      ;(E(u, g.k) && (u.value = null), g.k && (c[g.k] = null))
    }
  }
  if (ee(l)) Pr(l, a, 12, [i, c])
  else {
    const g = we(l),
      R = Re(l)
    if (g || R) {
      const y = () => {
        if (e.f) {
          const v = g ? (h(l) ? f[l] : c[l]) : E() || !e.k ? l.value : c[e.k]
          if (s) z(v) && di(v, o)
          else if (z(v)) v.includes(o) || v.push(o)
          else if (g) ((c[l] = [o]), h(l) && (f[l] = c[l]))
          else {
            const p = [o]
            ;(E(l, e.k) && (l.value = p), e.k && (c[e.k] = p))
          }
        } else
          g
            ? ((c[l] = i), h(l) && (f[l] = i))
            : R && (E(l, e.k) && (l.value = i), e.k && (c[e.k] = i))
      }
      if (i) {
        const v = () => {
          ;(y(), as.delete(e))
        }
        ;((v.id = -1), as.set(e, v), Ie(v, n))
      } else (oa(e), y())
    }
  }
}
function oa(e) {
  const t = as.get(e)
  t && ((t.flags |= 8), as.delete(e))
}
let ia = !1
const An = () => {
    ia || (console.error('Hydration completed but contains mismatches.'), (ia = !0))
  },
  fh = (e) => e.namespaceURI.includes('svg') && e.tagName !== 'foreignObject',
  dh = (e) => e.namespaceURI.includes('MathML'),
  $r = (e) => {
    if (e.nodeType === 1) {
      if (fh(e)) return 'svg'
      if (dh(e)) return 'mathml'
    }
  },
  Nn = (e) => e.nodeType === 8
function hh(e) {
  const {
      mt: t,
      p: n,
      o: {
        patchProp: r,
        createText: s,
        nextSibling: o,
        parentNode: i,
        remove: a,
        insert: l,
        createComment: u,
      },
    } = e,
    c = (p, _) => {
      if (!_.hasChildNodes()) {
        ;(n(null, p, _), os(), (_._vnode = p))
        return
      }
      ;(f(_.firstChild, p, null, null, null), os(), (_._vnode = p))
    },
    f = (p, _, T, L, A, j = !1) => {
      j = j || !!_.dynamicChildren
      const F = Nn(p) && p.data === '[',
        $ = () => g(p, _, T, L, A, F),
        { type: q, ref: D, shapeFlag: J, patchFlag: ne } = _
      let ae = p.nodeType
      ;((_.el = p), ne === -2 && ((j = !1), (_.dynamicChildren = null)))
      let Y = null
      switch (q) {
        case on:
          ae !== 3
            ? _.children === ''
              ? (l((_.el = s('')), i(p), p), (Y = p))
              : (Y = $())
            : (p.data !== _.children && (An(), (p.data = _.children)), (Y = o(p)))
          break
        case Ne:
          v(p)
            ? ((Y = o(p)), y((_.el = p.content.firstChild), p, T))
            : ae !== 8 || F
              ? (Y = $())
              : (Y = o(p))
          break
        case zr:
          if ((F && ((p = o(p)), (ae = p.nodeType)), ae === 1 || ae === 3)) {
            Y = p
            const Z = !_.children.length
            for (let G = 0; G < _.staticCount; G++)
              (Z && (_.children += Y.nodeType === 1 ? Y.outerHTML : Y.data),
                G === _.staticCount - 1 && (_.anchor = Y),
                (Y = o(Y)))
            return F ? o(Y) : Y
          } else $()
          break
        case Ge:
          F ? (Y = E(p, _, T, L, A, j)) : (Y = $())
          break
        default:
          if (J & 1)
            (ae !== 1 || _.type.toLowerCase() !== p.tagName.toLowerCase()) && !v(p)
              ? (Y = $())
              : (Y = d(p, _, T, L, A, j))
          else if (J & 6) {
            _.slotScopeIds = A
            const Z = i(p)
            if (
              (F
                ? (Y = R(p))
                : Nn(p) && p.data === 'teleport start'
                  ? (Y = R(p, p.data, 'teleport end'))
                  : (Y = o(p)),
              t(_, Z, null, T, L, $r(Z), j),
              sn(_) && !_.type.__asyncResolved)
            ) {
              let G
              ;(F
                ? ((G = Le(Ge)), (G.anchor = Y ? Y.previousSibling : Z.lastChild))
                : (G = p.nodeType === 3 ? Ru('') : Le('div')),
                (G.el = p),
                (_.component.subTree = G))
            }
          } else
            J & 64
              ? ae !== 8
                ? (Y = $())
                : (Y = _.type.hydrate(p, _, T, L, A, j, e, h))
              : J & 128 && (Y = _.type.hydrate(p, _, T, L, $r(i(p)), A, j, e, f))
      }
      return (D != null && Hn(D, null, L, _), Y)
    },
    d = (p, _, T, L, A, j) => {
      j = j || !!_.dynamicChildren
      const { type: F, props: $, patchFlag: q, shapeFlag: D, dirs: J, transition: ne } = _,
        ae = F === 'input' || F === 'option'
      if (ae || q !== -1) {
        J && St(_, null, T, 'created')
        let Y = !1
        if (v(p)) {
          Y = fu(null, ne) && T && T.vnode.props && T.vnode.props.appear
          const G = p.content.firstChild
          if (Y) {
            const se = G.getAttribute('class')
            ;(se && (G.$cls = se), ne.beforeEnter(G))
          }
          ;(y(G, p, T), (_.el = p = G))
        }
        if (D & 16 && !($ && ($.innerHTML || $.textContent))) {
          let G = h(p.firstChild, _, p, T, L, A, j)
          for (; G; ) {
            Ur(p, 1) || An()
            const se = G
            ;((G = G.nextSibling), a(se))
          }
        } else if (D & 8) {
          let G = _.children
          G[0] ===
            `
` &&
            (p.tagName === 'PRE' || p.tagName === 'TEXTAREA') &&
            (G = G.slice(1))
          const { textContent: se } = p
          se !== G &&
            se !==
              G.replace(
                /\r\n|\r/g,
                `
`
              ) &&
            (Ur(p, 0) || An(), (p.textContent = _.children))
        }
        if ($) {
          if (ae || !j || q & 48) {
            const G = p.tagName.includes('-')
            for (const se in $)
              ((ae && (se.endsWith('value') || se === 'indeterminate')) ||
                (Ar(se) && !vn(se)) ||
                se[0] === '.' ||
                (G && !vn(se))) &&
                r(p, se, null, $[se], void 0, T)
          } else if ($.onClick) r(p, 'onClick', null, $.onClick, void 0, T)
          else if (q & 4 && rn($.style)) for (const G in $.style) $.style[G]
        }
        let Z
        ;((Z = $ && $.onVnodeBeforeMount) && Ye(Z, T, _),
          J && St(_, null, T, 'beforeMount'),
          ((Z = $ && $.onVnodeMounted) || J || Y) &&
            _u(() => {
              ;(Z && Ye(Z, T, _), Y && ne.enter(p), J && St(_, null, T, 'mounted'))
            }, L))
      }
      return p.nextSibling
    },
    h = (p, _, T, L, A, j, F) => {
      F = F || !!_.dynamicChildren
      const $ = _.children,
        q = $.length
      for (let D = 0; D < q; D++) {
        const J = F ? $[D] : ($[D] = tt($[D])),
          ne = J.type === on
        p
          ? (ne &&
              !F &&
              D + 1 < q &&
              tt($[D + 1]).type === on &&
              (l(s(p.data.slice(J.children.length)), T, o(p)), (p.data = J.children)),
            (p = f(p, J, L, A, j, F)))
          : ne && !J.children
            ? l((J.el = s('')), T)
            : (Ur(T, 1) || An(), n(null, J, T, null, L, A, $r(T), j))
      }
      return p
    },
    E = (p, _, T, L, A, j) => {
      const { slotScopeIds: F } = _
      F && (A = A ? A.concat(F) : F)
      const $ = i(p),
        q = h(o(p), _, $, T, L, A, j)
      return q && Nn(q) && q.data === ']'
        ? o((_.anchor = q))
        : (An(), l((_.anchor = u(']')), $, q), q)
    },
    g = (p, _, T, L, A, j) => {
      if ((Ur(p.parentElement, 1) || An(), (_.el = null), j)) {
        const q = R(p)
        for (;;) {
          const D = o(p)
          if (D && D !== q) a(D)
          else break
        }
      }
      const F = o(p),
        $ = i(p)
      return (a(p), n(null, _, $, F, T, L, $r($), A), T && ((T.vnode.el = _.el), xs(T, _.el)), F)
    },
    R = (p, _ = '[', T = ']') => {
      let L = 0
      for (; p; )
        if (((p = o(p)), p && Nn(p) && (p.data === _ && L++, p.data === T))) {
          if (L === 0) return o(p)
          L--
        }
      return p
    },
    y = (p, _, T) => {
      const L = _.parentNode
      L && L.replaceChild(p, _)
      let A = T
      for (; A; ) (A.vnode.el === _ && (A.vnode.el = A.subTree.el = p), (A = A.parent))
    },
    v = (p) => p.nodeType === 1 && p.tagName === 'TEMPLATE'
  return [c, f]
}
const aa = 'data-allow-mismatch',
  ph = { 0: 'text', 1: 'children', 2: 'class', 3: 'style', 4: 'attribute' }
function Ur(e, t) {
  if (t === 0 || t === 1) for (; e && !e.hasAttribute(aa); ) e = e.parentElement
  const n = e && e.getAttribute(aa)
  if (n == null) return !1
  if (n === '') return !0
  {
    const r = n.split(',')
    return t === 0 && r.includes('children') ? !0 : r.includes(ph[t])
  }
}
Cs().requestIdleCallback
Cs().cancelIdleCallback
function gh(e, t) {
  if (Nn(e) && e.data === '[') {
    let n = 1,
      r = e.nextSibling
    for (; r; ) {
      if (r.nodeType === 1) {
        if (t(r) === !1) break
      } else if (Nn(r))
        if (r.data === ']') {
          if (--n === 0) break
        } else r.data === '[' && n++
      r = r.nextSibling
    }
  } else t(e)
}
const sn = (e) => !!e.type.__asyncLoader
function la(e) {
  ee(e) && (e = { loader: e })
  const {
    loader: t,
    loadingComponent: n,
    errorComponent: r,
    delay: s = 200,
    hydrate: o,
    timeout: i,
    suspensible: a = !0,
    onError: l,
  } = e
  let u = null,
    c,
    f = 0
  const d = () => (f++, (u = null), h()),
    h = () => {
      let E
      return (
        u ||
        (E = u =
          t()
            .catch((g) => {
              if (((g = g instanceof Error ? g : new Error(String(g))), l))
                return new Promise((R, y) => {
                  l(
                    g,
                    () => R(d()),
                    () => y(g),
                    f + 1
                  )
                })
              throw g
            })
            .then((g) =>
              E !== u && u
                ? u
                : (g && (g.__esModule || g[Symbol.toStringTag] === 'Module') && (g = g.default),
                  (c = g),
                  g)
            ))
      )
    }
  return ln({
    name: 'AsyncComponentWrapper',
    __asyncLoader: h,
    __asyncHydrate(E, g, R) {
      let y = !1
      ;(g.bu || (g.bu = [])).push(() => (y = !0))
      const v = () => {
          y || R()
        },
        p = o
          ? () => {
              const _ = o(v, (T) => gh(E, T))
              _ && (g.bum || (g.bum = [])).push(_)
            }
          : v
      c ? p() : h().then(() => !g.isUnmounted && p())
    },
    get __asyncResolved() {
      return c
    },
    setup() {
      const E = Fe
      if ((wi(E), c)) return () => jr(c, E)
      const g = (p) => {
        ;((u = null), Zn(p, E, 13, !r))
      }
      if ((a && E.suspense) || Yn)
        return h()
          .then((p) => () => jr(p, E))
          .catch((p) => (g(p), () => (r ? Le(r, { error: p }) : null)))
      const R = st(!1),
        y = st(),
        v = st(!!s)
      return (
        s &&
          setTimeout(() => {
            v.value = !1
          }, s),
        i != null &&
          setTimeout(() => {
            if (!R.value && !y.value) {
              const p = new Error(`Async component timed out after ${i}ms.`)
              ;(g(p), (y.value = p))
            }
          }, i),
        h()
          .then(() => {
            ;((R.value = !0), E.parent && Or(E.parent.vnode) && E.parent.update())
          })
          .catch((p) => {
            ;(g(p), (y.value = p))
          }),
        () => {
          if (R.value && c) return jr(c, E)
          if (y.value && r) return Le(r, { error: y.value })
          if (n && !v.value) return jr(n, E)
        }
      )
    },
  })
}
function jr(e, t) {
  const { ref: n, props: r, children: s, ce: o } = t.vnode,
    i = Le(e, r, s)
  return ((i.ref = n), (i.ce = o), delete t.vnode.ce, i)
}
const Or = (e) => e.type.__isKeepAlive,
  mh = {
    name: 'KeepAlive',
    __isKeepAlive: !0,
    props: {
      include: [String, RegExp, Array],
      exclude: [String, RegExp, Array],
      max: [String, Number],
    },
    setup(e, { slots: t }) {
      const n = Ln(),
        r = n.ctx
      if (!r.renderer)
        return () => {
          const v = t.default && t.default()
          return v && v.length === 1 ? v[0] : v
        }
      const s = new Map(),
        o = new Set()
      let i = null
      const a = n.suspense,
        {
          renderer: {
            p: l,
            m: u,
            um: c,
            o: { createElement: f },
          },
        } = r,
        d = f('div')
      ;((r.activate = (v, p, _, T, L) => {
        const A = v.component
        ;(u(v, p, _, 0, a),
          l(A.vnode, v, p, _, A, a, T, v.slotScopeIds, L),
          Ie(() => {
            ;((A.isDeactivated = !1), A.a && cr(A.a))
            const j = v.props && v.props.onVnodeMounted
            j && Ye(j, A.parent, v)
          }, a))
      }),
        (r.deactivate = (v) => {
          const p = v.component
          ;(cs(p.m),
            cs(p.a),
            u(v, d, null, 1, a),
            Ie(() => {
              p.da && cr(p.da)
              const _ = v.props && v.props.onVnodeUnmounted
              ;(_ && Ye(_, p.parent, v), (p.isDeactivated = !0))
            }, a))
        }))
      function h(v) {
        ;(to(v), c(v, n, a, !0))
      }
      function E(v) {
        s.forEach((p, _) => {
          const T = Do(sn(p) ? p.type.__asyncResolved || {} : p.type)
          T && !v(T) && g(_)
        })
      }
      function g(v) {
        const p = s.get(v)
        ;(p && (!i || !ht(p, i)) ? h(p) : i && to(i), s.delete(v), o.delete(v))
      }
      ct(
        () => [e.include, e.exclude],
        ([v, p]) => {
          ;(v && E((_) => ar(v, _)), p && E((_) => !ar(p, _)))
        },
        { flush: 'post', deep: !0 }
      )
      let R = null
      const y = () => {
        R != null &&
          (us(n.subTree.type)
            ? Ie(() => {
                s.set(R, Br(n.subTree))
              }, n.subTree.suspense)
            : s.set(R, Br(n.subTree)))
      }
      return (
        Is(y),
        Gc(y),
        Ir(() => {
          s.forEach((v) => {
            const { subTree: p, suspense: _ } = n,
              T = Br(p)
            if (v.type === T.type && v.key === T.key) {
              to(T)
              const L = T.component.da
              L && Ie(L, _)
              return
            }
            h(v)
          })
        }),
        () => {
          if (((R = null), !t.default)) return (i = null)
          const v = t.default(),
            p = v[0]
          if (v.length > 1) return ((i = null), v)
          if (!qn(p) || (!(p.shapeFlag & 4) && !(p.shapeFlag & 128))) return ((i = null), p)
          let _ = Br(p)
          if (_.type === Ne) return ((i = null), _)
          const T = _.type,
            L = Do(sn(_) ? _.type.__asyncResolved || {} : T),
            { include: A, exclude: j, max: F } = e
          if ((A && (!L || !ar(A, L))) || (j && L && ar(j, L)))
            return ((_.shapeFlag &= -257), (i = _), p)
          const $ = _.key == null ? T : _.key,
            q = s.get($)
          return (
            _.el && ((_ = Yt(_)), p.shapeFlag & 128 && (p.ssContent = _)),
            (R = $),
            q
              ? ((_.el = q.el),
                (_.component = q.component),
                _.transition && Kn(_, _.transition),
                (_.shapeFlag |= 512),
                o.delete($),
                o.add($))
              : (o.add($), F && o.size > parseInt(F, 10) && g(o.values().next().value)),
            (_.shapeFlag |= 256),
            (i = _),
            us(p.type) ? p : _
          )
        }
      )
    },
  },
  _h = mh
function ar(e, t) {
  return z(e)
    ? e.some((n) => ar(n, t))
    : we(e)
      ? e.split(',').includes(t)
      : cd(e)
        ? ((e.lastIndex = 0), e.test(t))
        : !1
}
function Wc(e, t) {
  Kc(e, 'a', t)
}
function Vc(e, t) {
  Kc(e, 'da', t)
}
function Kc(e, t, n = Fe) {
  const r =
    e.__wdc ||
    (e.__wdc = () => {
      let s = n
      for (; s; ) {
        if (s.isDeactivated) return
        s = s.parent
      }
      return e()
    })
  if ((Os(t, r, n), n)) {
    let s = n.parent
    for (; s && s.parent; ) (Or(s.parent.vnode) && yh(r, t, n, s), (s = s.parent))
  }
}
function yh(e, t, n, r) {
  const s = Os(t, e, r, !0)
  Ci(() => {
    di(r[t], s)
  }, n)
}
function to(e) {
  ;((e.shapeFlag &= -257), (e.shapeFlag &= -513))
}
function Br(e) {
  return e.shapeFlag & 128 ? e.ssContent : e
}
function Os(e, t, n = Fe, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []),
      o =
        t.__weh ||
        (t.__weh = (...i) => {
          Gt()
          const a = Nr(n),
            l = _t(t, n, e, i)
          return (a(), qt(), l)
        })
    return (r ? s.unshift(o) : s.push(o), o)
  }
}
const Jt =
    (e) =>
    (t, n = Fe) => {
      ;(!Yn || e === 'sp') && Os(e, (...r) => t(...r), n)
    },
  bh = Jt('bm'),
  Is = Jt('m'),
  vh = Jt('bu'),
  Gc = Jt('u'),
  Ir = Jt('bum'),
  Ci = Jt('um'),
  Eh = Jt('sp'),
  wh = Jt('rtg'),
  Ch = Jt('rtc')
function qc(e, t = Fe) {
  Os('ec', e, t)
}
const Yc = 'components'
function _0(e, t) {
  return Xc(Yc, e, !0, t) || e
}
const Jc = Symbol.for('v-ndc')
function Rh(e) {
  return we(e) ? Xc(Yc, e, !1) || e : e || Jc
}
function Xc(e, t, n = !0, r = !1) {
  const s = nt || Fe
  if (s) {
    const o = s.type
    {
      const a = Do(o, !1)
      if (a && (a === t || a === ut(t) || a === ws(ut(t)))) return o
    }
    const i = ca(s[e] || o[e], t) || ca(s.appContext[e], t)
    return !i && r ? o : i
  }
}
function ca(e, t) {
  return e && (e[t] || e[ut(t)] || e[ws(ut(t))])
}
function y0(e, t, n, r) {
  let s
  const o = n && n[r],
    i = z(e)
  if (i || we(e)) {
    const a = i && rn(e)
    let l = !1,
      u = !1
    ;(a && ((l = !rt(e)), (u = It(e)), (e = ks(e))), (s = new Array(e.length)))
    for (let c = 0, f = e.length; c < f; c++)
      s[c] = t(l ? (u ? Bn(mt(e[c])) : mt(e[c])) : e[c], c, void 0, o && o[c])
  } else if (typeof e == 'number') {
    s = new Array(e)
    for (let a = 0; a < e; a++) s[a] = t(a + 1, a, void 0, o && o[a])
  } else if (ue(e))
    if (e[Symbol.iterator]) s = Array.from(e, (a, l) => t(a, l, void 0, o && o[l]))
    else {
      const a = Object.keys(e)
      s = new Array(a.length)
      for (let l = 0, u = a.length; l < u; l++) {
        const c = a[l]
        s[l] = t(e[c], c, l, o && o[l])
      }
    }
  else s = []
  return (n && (n[r] = s), s)
}
const Ao = (e) => (e ? (Tu(e) ? Ms(e) : Ao(e.parent)) : null),
  dr = xe(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Ao(e.parent),
    $root: (e) => Ao(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => zc(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        vi(e.update)
      }),
    $nextTick: (e) => e.n || (e.n = Vn.bind(e.proxy)),
    $watch: (e) => ih.bind(e),
  }),
  no = (e, t) => e !== be && !e.__isScriptSetup && he(e, t),
  Th = {
    get({ _: e }, t) {
      if (t === '__v_skip') return !0
      const { ctx: n, setupState: r, data: s, props: o, accessCache: i, type: a, appContext: l } = e
      if (t[0] !== '$') {
        const d = i[t]
        if (d !== void 0)
          switch (d) {
            case 1:
              return r[t]
            case 2:
              return s[t]
            case 4:
              return n[t]
            case 3:
              return o[t]
          }
        else {
          if (no(r, t)) return ((i[t] = 1), r[t])
          if (s !== be && he(s, t)) return ((i[t] = 2), s[t])
          if (he(o, t)) return ((i[t] = 3), o[t])
          if (n !== be && he(n, t)) return ((i[t] = 4), n[t])
          Po && (i[t] = 0)
        }
      }
      const u = dr[t]
      let c, f
      if (u) return (t === '$attrs' && Ue(e.attrs, 'get', ''), u(e))
      if ((c = a.__cssModules) && (c = c[t])) return c
      if (n !== be && he(n, t)) return ((i[t] = 4), n[t])
      if (((f = l.config.globalProperties), he(f, t))) return f[t]
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: s, ctx: o } = e
      return no(s, t)
        ? ((s[t] = n), !0)
        : r !== be && he(r, t)
          ? ((r[t] = n), !0)
          : he(e.props, t) || (t[0] === '$' && t.slice(1) in e)
            ? !1
            : ((o[t] = n), !0)
    },
    has(
      { _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: s, props: o, type: i } },
      a
    ) {
      let l
      return !!(
        n[a] ||
        (e !== be && a[0] !== '$' && he(e, a)) ||
        no(t, a) ||
        he(o, a) ||
        he(r, a) ||
        he(dr, a) ||
        he(s.config.globalProperties, a) ||
        ((l = i.__cssModules) && l[a])
      )
    },
    defineProperty(e, t, n) {
      return (
        n.get != null ? (e._.accessCache[t] = 0) : he(n, 'value') && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      )
    },
  }
function ua(e) {
  return z(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e
}
let Po = !0
function Sh(e) {
  const t = zc(e),
    n = e.proxy,
    r = e.ctx
  ;((Po = !1), t.beforeCreate && fa(t.beforeCreate, e, 'bc'))
  const {
    data: s,
    computed: o,
    methods: i,
    watch: a,
    provide: l,
    inject: u,
    created: c,
    beforeMount: f,
    mounted: d,
    beforeUpdate: h,
    updated: E,
    activated: g,
    deactivated: R,
    beforeDestroy: y,
    beforeUnmount: v,
    destroyed: p,
    unmounted: _,
    render: T,
    renderTracked: L,
    renderTriggered: A,
    errorCaptured: j,
    serverPrefetch: F,
    expose: $,
    inheritAttrs: q,
    components: D,
    directives: J,
    filters: ne,
  } = t
  if ((u && Lh(u, r, null), i))
    for (const Z in i) {
      const G = i[Z]
      ee(G) && (r[Z] = G.bind(n))
    }
  if (s) {
    const Z = s.call(n, n)
    ue(Z) && (e.data = an(Z))
  }
  if (((Po = !0), o))
    for (const Z in o) {
      const G = o[Z],
        se = ee(G) ? G.bind(n, n) : ee(G.get) ? G.get.bind(n, n) : At,
        ze = !ee(G) && ee(G.set) ? G.set.bind(n) : At,
        je = Ae({ get: se, set: ze })
      Object.defineProperty(r, Z, {
        enumerable: !0,
        configurable: !0,
        get: () => je.value,
        set: (Me) => (je.value = Me),
      })
    }
  if (a) for (const Z in a) Qc(a[Z], r, n, Z)
  if (l) {
    const Z = ee(l) ? l.call(n) : l
    Reflect.ownKeys(Z).forEach((G) => {
      Fn(G, Z[G])
    })
  }
  c && fa(c, e, 'c')
  function Y(Z, G) {
    z(G) ? G.forEach((se) => Z(se.bind(n))) : G && Z(G.bind(n))
  }
  if (
    (Y(bh, f),
    Y(Is, d),
    Y(vh, h),
    Y(Gc, E),
    Y(Wc, g),
    Y(Vc, R),
    Y(qc, j),
    Y(Ch, L),
    Y(wh, A),
    Y(Ir, v),
    Y(Ci, _),
    Y(Eh, F),
    z($))
  )
    if ($.length) {
      const Z = e.exposed || (e.exposed = {})
      $.forEach((G) => {
        Object.defineProperty(Z, G, { get: () => n[G], set: (se) => (n[G] = se), enumerable: !0 })
      })
    } else e.exposed || (e.exposed = {})
  ;(T && e.render === At && (e.render = T),
    q != null && (e.inheritAttrs = q),
    D && (e.components = D),
    J && (e.directives = J),
    F && wi(e))
}
function Lh(e, t, n = At) {
  z(e) && (e = Oo(e))
  for (const r in e) {
    const s = e[r]
    let o
    ;(ue(s)
      ? 'default' in s
        ? (o = qe(s.from || r, s.default, !0))
        : (o = qe(s.from || r))
      : (o = qe(s)),
      Re(o)
        ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: (i) => (o.value = i),
          })
        : (t[r] = o))
  }
}
function fa(e, t, n) {
  _t(z(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function Qc(e, t, n, r) {
  let s = r.includes('.') ? Dc(n, r) : () => n[r]
  if (we(e)) {
    const o = t[e]
    ee(o) && ct(s, o)
  } else if (ee(e)) ct(s, e.bind(n))
  else if (ue(e))
    if (z(e)) e.forEach((o) => Qc(o, t, n, r))
    else {
      const o = ee(e.handler) ? e.handler.bind(n) : t[e.handler]
      ee(o) && ct(s, o, e)
    }
}
function zc(e) {
  const t = e.type,
    { mixins: n, extends: r } = t,
    {
      mixins: s,
      optionsCache: o,
      config: { optionMergeStrategies: i },
    } = e.appContext,
    a = o.get(t)
  let l
  return (
    a
      ? (l = a)
      : !s.length && !n && !r
        ? (l = t)
        : ((l = {}), s.length && s.forEach((u) => ls(l, u, i, !0)), ls(l, t, i)),
    ue(t) && o.set(t, l),
    l
  )
}
function ls(e, t, n, r = !1) {
  const { mixins: s, extends: o } = t
  ;(o && ls(e, o, n, !0), s && s.forEach((i) => ls(e, i, n, !0)))
  for (const i in t)
    if (!(r && i === 'expose')) {
      const a = kh[i] || (n && n[i])
      e[i] = a ? a(e[i], t[i]) : t[i]
    }
  return e
}
const kh = {
  data: da,
  props: ha,
  emits: ha,
  methods: lr,
  computed: lr,
  beforeCreate: Be,
  created: Be,
  beforeMount: Be,
  mounted: Be,
  beforeUpdate: Be,
  updated: Be,
  beforeDestroy: Be,
  beforeUnmount: Be,
  destroyed: Be,
  unmounted: Be,
  activated: Be,
  deactivated: Be,
  errorCaptured: Be,
  serverPrefetch: Be,
  components: lr,
  directives: lr,
  watch: Ph,
  provide: da,
  inject: Ah,
}
function da(e, t) {
  return t
    ? e
      ? function () {
          return xe(ee(e) ? e.call(this, this) : e, ee(t) ? t.call(this, this) : t)
        }
      : t
    : e
}
function Ah(e, t) {
  return lr(Oo(e), Oo(t))
}
function Oo(e) {
  if (z(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n]
    return t
  }
  return e
}
function Be(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}
function lr(e, t) {
  return e ? xe(Object.create(null), e, t) : t
}
function ha(e, t) {
  return e
    ? z(e) && z(t)
      ? [...new Set([...e, ...t])]
      : xe(Object.create(null), ua(e), ua(t ?? {}))
    : t
}
function Ph(e, t) {
  if (!e) return t
  if (!t) return e
  const n = xe(Object.create(null), e)
  for (const r in t) n[r] = Be(e[r], t[r])
  return n
}
function Zc() {
  return {
    app: null,
    config: {
      isNativeTag: rc,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  }
}
let Oh = 0
function Ih(e, t) {
  return function (r, s = null) {
    ;(ee(r) || (r = xe({}, r)), s != null && !ue(s) && (s = null))
    const o = Zc(),
      i = new WeakSet(),
      a = []
    let l = !1
    const u = (o.app = {
      _uid: Oh++,
      _component: r,
      _props: s,
      _container: null,
      _context: o,
      _instance: null,
      version: fp,
      get config() {
        return o.config
      },
      set config(c) {},
      use(c, ...f) {
        return (
          i.has(c) ||
            (c && ee(c.install) ? (i.add(c), c.install(u, ...f)) : ee(c) && (i.add(c), c(u, ...f))),
          u
        )
      },
      mixin(c) {
        return (o.mixins.includes(c) || o.mixins.push(c), u)
      },
      component(c, f) {
        return f ? ((o.components[c] = f), u) : o.components[c]
      },
      directive(c, f) {
        return f ? ((o.directives[c] = f), u) : o.directives[c]
      },
      mount(c, f, d) {
        if (!l) {
          const h = u._ceVNode || Le(r, s)
          return (
            (h.appContext = o),
            d === !0 ? (d = 'svg') : d === !1 && (d = void 0),
            f && t ? t(h, c) : e(h, c, d),
            (l = !0),
            (u._container = c),
            (c.__vue_app__ = u),
            Ms(h.component)
          )
        }
      },
      onUnmount(c) {
        a.push(c)
      },
      unmount() {
        l && (_t(a, u._instance, 16), e(null, u._container), delete u._container.__vue_app__)
      },
      provide(c, f) {
        return ((o.provides[c] = f), u)
      },
      runWithContext(c) {
        const f = wn
        wn = u
        try {
          return c()
        } finally {
          wn = f
        }
      },
    })
    return u
  }
}
let wn = null
const Nh = (e, t) =>
  t === 'modelValue' || t === 'model-value'
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${ut(t)}Modifiers`] || e[`${Sn(t)}Modifiers`]
function xh(e, t, ...n) {
  if (e.isUnmounted) return
  const r = e.vnode.props || be
  let s = n
  const o = t.startsWith('update:'),
    i = o && Nh(r, t.slice(7))
  i && (i.trim && (s = n.map((c) => (we(c) ? c.trim() : c))), i.number && (s = n.map(hd)))
  let a,
    l = r[(a = Js(t))] || r[(a = Js(ut(t)))]
  ;(!l && o && (l = r[(a = Js(Sn(t)))]), l && _t(l, e, 6, s))
  const u = r[a + 'Once']
  if (u) {
    if (!e.emitted) e.emitted = {}
    else if (e.emitted[a]) return
    ;((e.emitted[a] = !0), _t(u, e, 6, s))
  }
}
const Mh = new WeakMap()
function eu(e, t, n = !1) {
  const r = n ? Mh : t.emitsCache,
    s = r.get(e)
  if (s !== void 0) return s
  const o = e.emits
  let i = {},
    a = !1
  if (!ee(e)) {
    const l = (u) => {
      const c = eu(u, t, !0)
      c && ((a = !0), xe(i, c))
    }
    ;(!n && t.mixins.length && t.mixins.forEach(l),
      e.extends && l(e.extends),
      e.mixins && e.mixins.forEach(l))
  }
  return !o && !a
    ? (ue(e) && r.set(e, null), null)
    : (z(o) ? o.forEach((l) => (i[l] = null)) : xe(i, o), ue(e) && r.set(e, i), i)
}
function Ns(e, t) {
  return !e || !Ar(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, '')),
      he(e, t[0].toLowerCase() + t.slice(1)) || he(e, Sn(t)) || he(e, t))
}
function ro(e) {
  const {
      type: t,
      vnode: n,
      proxy: r,
      withProxy: s,
      propsOptions: [o],
      slots: i,
      attrs: a,
      emit: l,
      render: u,
      renderCache: c,
      props: f,
      data: d,
      setupState: h,
      ctx: E,
      inheritAttrs: g,
    } = e,
    R = is(e)
  let y, v
  try {
    if (n.shapeFlag & 4) {
      const _ = s || r,
        T = _
      ;((y = tt(u.call(T, _, c, f, h, d, E))), (v = a))
    } else {
      const _ = t
      ;((y = tt(_.length > 1 ? _(f, { attrs: a, slots: i, emit: l }) : _(f, null))),
        (v = t.props ? a : Fh(a)))
    }
  } catch (_) {
    ;((hr.length = 0), Zn(_, e, 1), (y = Le(Ne)))
  }
  let p = y
  if (v && g !== !1) {
    const _ = Object.keys(v),
      { shapeFlag: T } = p
    _.length && T & 7 && (o && _.some(fi) && (v = Hh(v, o)), (p = Yt(p, v, !1, !0)))
  }
  return (
    n.dirs && ((p = Yt(p, null, !1, !0)), (p.dirs = p.dirs ? p.dirs.concat(n.dirs) : n.dirs)),
    n.transition && Kn(p, n.transition),
    (y = p),
    is(R),
    y
  )
}
function Dh(e, t = !0) {
  let n
  for (let r = 0; r < e.length; r++) {
    const s = e[r]
    if (qn(s)) {
      if (s.type !== Ne || s.children === 'v-if') {
        if (n) return
        n = s
      }
    } else return
  }
  return n
}
const Fh = (e) => {
    let t
    for (const n in e) (n === 'class' || n === 'style' || Ar(n)) && ((t || (t = {}))[n] = e[n])
    return t
  },
  Hh = (e, t) => {
    const n = {}
    for (const r in e) (!fi(r) || !(r.slice(9) in t)) && (n[r] = e[r])
    return n
  }
function $h(e, t, n) {
  const { props: r, children: s, component: o } = e,
    { props: i, children: a, patchFlag: l } = t,
    u = o.emitsOptions
  if (t.dirs || t.transition) return !0
  if (n && l >= 0) {
    if (l & 1024) return !0
    if (l & 16) return r ? pa(r, i, u) : !!i
    if (l & 8) {
      const c = t.dynamicProps
      for (let f = 0; f < c.length; f++) {
        const d = c[f]
        if (tu(i, r, d) && !Ns(u, d)) return !0
      }
    }
  } else
    return (s || a) && (!a || !a.$stable) ? !0 : r === i ? !1 : r ? (i ? pa(r, i, u) : !0) : !!i
  return !1
}
function pa(e, t, n) {
  const r = Object.keys(t)
  if (r.length !== Object.keys(e).length) return !0
  for (let s = 0; s < r.length; s++) {
    const o = r[s]
    if (tu(t, e, o) && !Ns(n, o)) return !0
  }
  return !1
}
function tu(e, t, n) {
  const r = e[n],
    s = t[n]
  return n === 'style' && ue(r) && ue(s) ? !hi(r, s) : r !== s
}
function xs({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree
    if ((r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e))
      (((e = t.vnode).el = n), (t = t.parent))
    else break
  }
}
const nu = {},
  ru = () => Object.create(nu),
  su = (e) => Object.getPrototypeOf(e) === nu
function Uh(e, t, n, r = !1) {
  const s = {},
    o = ru()
  ;((e.propsDefaults = Object.create(null)), ou(e, t, s, o))
  for (const i in e.propsOptions[0]) i in s || (s[i] = void 0)
  ;(n ? (e.props = r ? s : Bt(s)) : e.type.props ? (e.props = s) : (e.props = o), (e.attrs = o))
}
function jh(e, t, n, r) {
  const {
      props: s,
      attrs: o,
      vnode: { patchFlag: i },
    } = e,
    a = le(s),
    [l] = e.propsOptions
  let u = !1
  if ((r || i > 0) && !(i & 16)) {
    if (i & 8) {
      const c = e.vnode.dynamicProps
      for (let f = 0; f < c.length; f++) {
        let d = c[f]
        if (Ns(e.emitsOptions, d)) continue
        const h = t[d]
        if (l)
          if (he(o, d)) h !== o[d] && ((o[d] = h), (u = !0))
          else {
            const E = ut(d)
            s[E] = Io(l, a, E, h, e, !1)
          }
        else h !== o[d] && ((o[d] = h), (u = !0))
      }
    }
  } else {
    ou(e, t, s, o) && (u = !0)
    let c
    for (const f in a)
      (!t || (!he(t, f) && ((c = Sn(f)) === f || !he(t, c)))) &&
        (l
          ? n && (n[f] !== void 0 || n[c] !== void 0) && (s[f] = Io(l, a, f, void 0, e, !0))
          : delete s[f])
    if (o !== a) for (const f in o) (!t || !he(t, f)) && (delete o[f], (u = !0))
  }
  u && Ut(e.attrs, 'set', '')
}
function ou(e, t, n, r) {
  const [s, o] = e.propsOptions
  let i = !1,
    a
  if (t)
    for (let l in t) {
      if (vn(l)) continue
      const u = t[l]
      let c
      s && he(s, (c = ut(l)))
        ? !o || !o.includes(c)
          ? (n[c] = u)
          : ((a || (a = {}))[c] = u)
        : Ns(e.emitsOptions, l) || ((!(l in r) || u !== r[l]) && ((r[l] = u), (i = !0)))
    }
  if (o) {
    const l = le(n),
      u = a || be
    for (let c = 0; c < o.length; c++) {
      const f = o[c]
      n[f] = Io(s, l, f, u[f], e, !he(u, f))
    }
  }
  return i
}
function Io(e, t, n, r, s, o) {
  const i = e[n]
  if (i != null) {
    const a = he(i, 'default')
    if (a && r === void 0) {
      const l = i.default
      if (i.type !== Function && !i.skipFactory && ee(l)) {
        const { propsDefaults: u } = s
        if (n in u) r = u[n]
        else {
          const c = Nr(s)
          ;((r = u[n] = l.call(null, t)), c())
        }
      } else r = l
      s.ce && s.ce._setProp(n, r)
    }
    i[0] && (o && !a ? (r = !1) : i[1] && (r === '' || r === Sn(n)) && (r = !0))
  }
  return r
}
const Bh = new WeakMap()
function iu(e, t, n = !1) {
  const r = n ? Bh : t.propsCache,
    s = r.get(e)
  if (s) return s
  const o = e.props,
    i = {},
    a = []
  let l = !1
  if (!ee(e)) {
    const c = (f) => {
      l = !0
      const [d, h] = iu(f, t, !0)
      ;(xe(i, d), h && a.push(...h))
    }
    ;(!n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c))
  }
  if (!o && !l) return (ue(e) && r.set(e, xn), xn)
  if (z(o))
    for (let c = 0; c < o.length; c++) {
      const f = ut(o[c])
      ga(f) && (i[f] = be)
    }
  else if (o)
    for (const c in o) {
      const f = ut(c)
      if (ga(f)) {
        const d = o[c],
          h = (i[f] = z(d) || ee(d) ? { type: d } : xe({}, d)),
          E = h.type
        let g = !1,
          R = !0
        if (z(E))
          for (let y = 0; y < E.length; ++y) {
            const v = E[y],
              p = ee(v) && v.name
            if (p === 'Boolean') {
              g = !0
              break
            } else p === 'String' && (R = !1)
          }
        else g = ee(E) && E.name === 'Boolean'
        ;((h[0] = g), (h[1] = R), (g || he(h, 'default')) && a.push(f))
      }
    }
  const u = [i, a]
  return (ue(e) && r.set(e, u), u)
}
function ga(e) {
  return e[0] !== '$' && !vn(e)
}
const Ri = (e) => e === '_' || e === '_ctx' || e === '$stable',
  Ti = (e) => (z(e) ? e.map(tt) : [tt(e)]),
  Wh = (e, t, n) => {
    if (t._n) return t
    const r = Mc((...s) => Ti(t(...s)), n)
    return ((r._c = !1), r)
  },
  au = (e, t, n) => {
    const r = e._ctx
    for (const s in e) {
      if (Ri(s)) continue
      const o = e[s]
      if (ee(o)) t[s] = Wh(s, o, r)
      else if (o != null) {
        const i = Ti(o)
        t[s] = () => i
      }
    }
  },
  lu = (e, t) => {
    const n = Ti(t)
    e.slots.default = () => n
  },
  cu = (e, t, n) => {
    for (const r in t) (n || !Ri(r)) && (e[r] = t[r])
  },
  Vh = (e, t, n) => {
    const r = (e.slots = ru())
    if (e.vnode.shapeFlag & 32) {
      const s = t._
      s ? (cu(r, t, n), n && lc(r, '_', s, !0)) : au(t, r)
    } else t && lu(e, t)
  },
  Kh = (e, t, n) => {
    const { vnode: r, slots: s } = e
    let o = !0,
      i = be
    if (r.shapeFlag & 32) {
      const a = t._
      ;(a ? (n && a === 1 ? (o = !1) : cu(s, t, n)) : ((o = !t.$stable), au(t, s)), (i = t))
    } else t && (lu(e, t), (i = { default: 1 }))
    if (o) for (const a in s) !Ri(a) && i[a] == null && delete s[a]
  },
  Ie = _u
function Gh(e) {
  return uu(e)
}
function qh(e) {
  return uu(e, hh)
}
function uu(e, t) {
  const n = Cs()
  n.__VUE__ = !0
  const {
      insert: r,
      remove: s,
      patchProp: o,
      createElement: i,
      createText: a,
      createComment: l,
      setText: u,
      setElementText: c,
      parentNode: f,
      nextSibling: d,
      setScopeId: h = At,
      insertStaticContent: E,
    } = e,
    g = (b, C, P, H = null, N = null, m = null, w = void 0, k = null, I = !!C.dynamicChildren) => {
      if (b === C) return
      ;(b && !ht(b, C) && ((H = M(b)), Me(b, N, m, !0), (b = null)),
        C.patchFlag === -2 && ((I = !1), (C.dynamicChildren = null)))
      const { type: x, ref: U, shapeFlag: S } = C
      switch (x) {
        case on:
          R(b, C, P, H)
          break
        case Ne:
          y(b, C, P, H)
          break
        case zr:
          b == null && v(C, P, H, w)
          break
        case Ge:
          D(b, C, P, H, N, m, w, k, I)
          break
        default:
          S & 1
            ? T(b, C, P, H, N, m, w, k, I)
            : S & 6
              ? J(b, C, P, H, N, m, w, k, I)
              : (S & 64 || S & 128) && x.process(b, C, P, H, N, m, w, k, I, X)
      }
      U != null && N
        ? Hn(U, b && b.ref, m, C || b, !C)
        : U == null && b && b.ref != null && Hn(b.ref, null, m, b, !0)
    },
    R = (b, C, P, H) => {
      if (b == null) r((C.el = a(C.children)), P, H)
      else {
        const N = (C.el = b.el)
        C.children !== b.children && u(N, C.children)
      }
    },
    y = (b, C, P, H) => {
      b == null ? r((C.el = l(C.children || '')), P, H) : (C.el = b.el)
    },
    v = (b, C, P, H) => {
      ;[b.el, b.anchor] = E(b.children, C, P, H, b.el, b.anchor)
    },
    p = ({ el: b, anchor: C }, P, H) => {
      let N
      for (; b && b !== C; ) ((N = d(b)), r(b, P, H), (b = N))
      r(C, P, H)
    },
    _ = ({ el: b, anchor: C }) => {
      let P
      for (; b && b !== C; ) ((P = d(b)), s(b), (b = P))
      s(C)
    },
    T = (b, C, P, H, N, m, w, k, I) => {
      if ((C.type === 'svg' ? (w = 'svg') : C.type === 'math' && (w = 'mathml'), b == null))
        L(C, P, H, N, m, w, k, I)
      else {
        const x = b.el && b.el._isVueCE ? b.el : null
        try {
          ;(x && x._beginPatch(), F(b, C, N, m, w, k, I))
        } finally {
          x && x._endPatch()
        }
      }
    },
    L = (b, C, P, H, N, m, w, k) => {
      let I, x
      const { props: U, shapeFlag: S, transition: O, dirs: W } = b
      if (
        ((I = b.el = i(b.type, m, U && U.is, U)),
        S & 8 ? c(I, b.children) : S & 16 && j(b.children, I, null, H, N, so(b, m), w, k),
        W && St(b, null, H, 'created'),
        A(I, b, b.scopeId, w, H),
        U)
      ) {
        for (const oe in U) oe !== 'value' && !vn(oe) && o(I, oe, null, U[oe], m, H)
        ;('value' in U && o(I, 'value', null, U.value, m),
          (x = U.onVnodeBeforeMount) && Ye(x, H, b))
      }
      W && St(b, null, H, 'beforeMount')
      const Q = fu(N, O)
      ;(Q && O.beforeEnter(I),
        r(I, C, P),
        ((x = U && U.onVnodeMounted) || Q || W) &&
          Ie(() => {
            ;(x && Ye(x, H, b), Q && O.enter(I), W && St(b, null, H, 'mounted'))
          }, N))
    },
    A = (b, C, P, H, N) => {
      if ((P && h(b, P), H)) for (let m = 0; m < H.length; m++) h(b, H[m])
      if (N) {
        let m = N.subTree
        if (C === m || (us(m.type) && (m.ssContent === C || m.ssFallback === C))) {
          const w = N.vnode
          A(b, w, w.scopeId, w.slotScopeIds, N.parent)
        }
      }
    },
    j = (b, C, P, H, N, m, w, k, I = 0) => {
      for (let x = I; x < b.length; x++) {
        const U = (b[x] = k ? $t(b[x]) : tt(b[x]))
        g(null, U, C, P, H, N, m, w, k)
      }
    },
    F = (b, C, P, H, N, m, w) => {
      const k = (C.el = b.el)
      let { patchFlag: I, dynamicChildren: x, dirs: U } = C
      I |= b.patchFlag & 16
      const S = b.props || be,
        O = C.props || be
      let W
      if (
        (P && dn(P, !1),
        (W = O.onVnodeBeforeUpdate) && Ye(W, P, C, b),
        U && St(C, b, P, 'beforeUpdate'),
        P && dn(P, !0),
        ((S.innerHTML && O.innerHTML == null) || (S.textContent && O.textContent == null)) &&
          c(k, ''),
        x
          ? $(b.dynamicChildren, x, k, P, H, so(C, N), m)
          : w || G(b, C, k, null, P, H, so(C, N), m, !1),
        I > 0)
      ) {
        if (I & 16) q(k, S, O, P, N)
        else if (
          (I & 2 && S.class !== O.class && o(k, 'class', null, O.class, N),
          I & 4 && o(k, 'style', S.style, O.style, N),
          I & 8)
        ) {
          const Q = C.dynamicProps
          for (let oe = 0; oe < Q.length; oe++) {
            const re = Q[oe],
              ye = S[re],
              De = O[re]
            ;(De !== ye || re === 'value') && o(k, re, ye, De, N, P)
          }
        }
        I & 1 && b.children !== C.children && c(k, C.children)
      } else !w && x == null && q(k, S, O, P, N)
      ;((W = O.onVnodeUpdated) || U) &&
        Ie(() => {
          ;(W && Ye(W, P, C, b), U && St(C, b, P, 'updated'))
        }, H)
    },
    $ = (b, C, P, H, N, m, w) => {
      for (let k = 0; k < C.length; k++) {
        const I = b[k],
          x = C[k],
          U = I.el && (I.type === Ge || !ht(I, x) || I.shapeFlag & 198) ? f(I.el) : P
        g(I, x, U, null, H, N, m, w, !0)
      }
    },
    q = (b, C, P, H, N) => {
      if (C !== P) {
        if (C !== be) for (const m in C) !vn(m) && !(m in P) && o(b, m, C[m], null, N, H)
        for (const m in P) {
          if (vn(m)) continue
          const w = P[m],
            k = C[m]
          w !== k && m !== 'value' && o(b, m, k, w, N, H)
        }
        'value' in P && o(b, 'value', C.value, P.value, N)
      }
    },
    D = (b, C, P, H, N, m, w, k, I) => {
      const x = (C.el = b ? b.el : a('')),
        U = (C.anchor = b ? b.anchor : a(''))
      let { patchFlag: S, dynamicChildren: O, slotScopeIds: W } = C
      ;(W && (k = k ? k.concat(W) : W),
        b == null
          ? (r(x, P, H), r(U, P, H), j(C.children || [], P, U, N, m, w, k, I))
          : S > 0 && S & 64 && O && b.dynamicChildren && b.dynamicChildren.length === O.length
            ? ($(b.dynamicChildren, O, P, N, m, w, k),
              (C.key != null || (N && C === N.subTree)) && du(b, C, !0))
            : G(b, C, P, U, N, m, w, k, I))
    },
    J = (b, C, P, H, N, m, w, k, I) => {
      ;((C.slotScopeIds = k),
        b == null
          ? C.shapeFlag & 512
            ? N.ctx.activate(C, P, H, w, I)
            : ne(C, P, H, N, m, w, I)
          : ae(b, C, I))
    },
    ne = (b, C, P, H, N, m, w) => {
      const k = (b.component = op(b, H, N))
      if ((Or(b) && (k.ctx.renderer = X), ip(k, !1, w), k.asyncDep)) {
        if ((N && N.registerDep(k, Y, w), !b.el)) {
          const I = (k.subTree = Le(Ne))
          ;(y(null, I, C, P), (b.placeholder = I.el))
        }
      } else Y(k, b, C, P, N, m, w)
    },
    ae = (b, C, P) => {
      const H = (C.component = b.component)
      if ($h(b, C, P))
        if (H.asyncDep && !H.asyncResolved) {
          Z(H, C, P)
          return
        } else ((H.next = C), H.update())
      else ((C.el = b.el), (H.vnode = C))
    },
    Y = (b, C, P, H, N, m, w) => {
      const k = () => {
        if (b.isMounted) {
          let { next: S, bu: O, u: W, parent: Q, vnode: oe } = b
          {
            const Ze = hu(b)
            if (Ze) {
              ;(S && ((S.el = oe.el), Z(b, S, w)),
                Ze.asyncDep.then(() => {
                  Ie(() => {
                    b.isUnmounted || x()
                  }, N)
                }))
              return
            }
          }
          let re = S,
            ye
          ;(dn(b, !1),
            S ? ((S.el = oe.el), Z(b, S, w)) : (S = oe),
            O && cr(O),
            (ye = S.props && S.props.onVnodeBeforeUpdate) && Ye(ye, Q, S, oe),
            dn(b, !0))
          const De = ro(b),
            it = b.subTree
          ;((b.subTree = De),
            g(it, De, f(it.el), M(it), b, N, m),
            (S.el = De.el),
            re === null && xs(b, De.el),
            W && Ie(W, N),
            (ye = S.props && S.props.onVnodeUpdated) && Ie(() => Ye(ye, Q, S, oe), N))
        } else {
          let S
          const { el: O, props: W } = C,
            { bm: Q, m: oe, parent: re, root: ye, type: De } = b,
            it = sn(C)
          if (
            (dn(b, !1),
            Q && cr(Q),
            !it && (S = W && W.onVnodeBeforeMount) && Ye(S, re, C),
            dn(b, !0),
            O && me)
          ) {
            const Ze = () => {
              ;((b.subTree = ro(b)), me(O, b.subTree, b, N, null))
            }
            it && De.__asyncHydrate ? De.__asyncHydrate(O, b, Ze) : Ze()
          } else {
            ye.ce && ye.ce._hasShadowRoot() && ye.ce._injectChildStyle(De)
            const Ze = (b.subTree = ro(b))
            ;(g(null, Ze, P, H, b, N, m), (C.el = Ze.el))
          }
          if ((oe && Ie(oe, N), !it && (S = W && W.onVnodeMounted))) {
            const Ze = C
            Ie(() => Ye(S, re, Ze), N)
          }
          ;((C.shapeFlag & 256 || (re && sn(re.vnode) && re.vnode.shapeFlag & 256)) &&
            b.a &&
            Ie(b.a, N),
            (b.isMounted = !0),
            (C = P = H = null))
        }
      }
      b.scope.on()
      const I = (b.effect = new pc(k))
      b.scope.off()
      const x = (b.update = I.run.bind(I)),
        U = (b.job = I.runIfDirty.bind(I))
      ;((U.i = b), (U.id = b.uid), (I.scheduler = () => vi(U)), dn(b, !0), x())
    },
    Z = (b, C, P) => {
      C.component = b
      const H = b.vnode.props
      ;((b.vnode = C),
        (b.next = null),
        jh(b, C.props, H, P),
        Kh(b, C.children, P),
        Gt(),
        na(b),
        qt())
    },
    G = (b, C, P, H, N, m, w, k, I = !1) => {
      const x = b && b.children,
        U = b ? b.shapeFlag : 0,
        S = C.children,
        { patchFlag: O, shapeFlag: W } = C
      if (O > 0) {
        if (O & 128) {
          ze(x, S, P, H, N, m, w, k, I)
          return
        } else if (O & 256) {
          se(x, S, P, H, N, m, w, k, I)
          return
        }
      }
      W & 8
        ? (U & 16 && He(x, N, m), S !== x && c(P, S))
        : U & 16
          ? W & 16
            ? ze(x, S, P, H, N, m, w, k, I)
            : He(x, N, m, !0)
          : (U & 8 && c(P, ''), W & 16 && j(S, P, H, N, m, w, k, I))
    },
    se = (b, C, P, H, N, m, w, k, I) => {
      ;((b = b || xn), (C = C || xn))
      const x = b.length,
        U = C.length,
        S = Math.min(x, U)
      let O
      for (O = 0; O < S; O++) {
        const W = (C[O] = I ? $t(C[O]) : tt(C[O]))
        g(b[O], W, P, null, N, m, w, k, I)
      }
      x > U ? He(b, N, m, !0, !1, S) : j(C, P, H, N, m, w, k, I, S)
    },
    ze = (b, C, P, H, N, m, w, k, I) => {
      let x = 0
      const U = C.length
      let S = b.length - 1,
        O = U - 1
      for (; x <= S && x <= O; ) {
        const W = b[x],
          Q = (C[x] = I ? $t(C[x]) : tt(C[x]))
        if (ht(W, Q)) g(W, Q, P, null, N, m, w, k, I)
        else break
        x++
      }
      for (; x <= S && x <= O; ) {
        const W = b[S],
          Q = (C[O] = I ? $t(C[O]) : tt(C[O]))
        if (ht(W, Q)) g(W, Q, P, null, N, m, w, k, I)
        else break
        ;(S--, O--)
      }
      if (x > S) {
        if (x <= O) {
          const W = O + 1,
            Q = W < U ? C[W].el : H
          for (; x <= O; ) (g(null, (C[x] = I ? $t(C[x]) : tt(C[x])), P, Q, N, m, w, k, I), x++)
        }
      } else if (x > O) for (; x <= S; ) (Me(b[x], N, m, !0), x++)
      else {
        const W = x,
          Q = x,
          oe = new Map()
        for (x = Q; x <= O; x++) {
          const et = (C[x] = I ? $t(C[x]) : tt(C[x]))
          et.key != null && oe.set(et.key, x)
        }
        let re,
          ye = 0
        const De = O - Q + 1
        let it = !1,
          Ze = 0
        const er = new Array(De)
        for (x = 0; x < De; x++) er[x] = 0
        for (x = W; x <= S; x++) {
          const et = b[x]
          if (ye >= De) {
            Me(et, N, m, !0)
            continue
          }
          let Ct
          if (et.key != null) Ct = oe.get(et.key)
          else
            for (re = Q; re <= O; re++)
              if (er[re - Q] === 0 && ht(et, C[re])) {
                Ct = re
                break
              }
          Ct === void 0
            ? Me(et, N, m, !0)
            : ((er[Ct - Q] = x + 1),
              Ct >= Ze ? (Ze = Ct) : (it = !0),
              g(et, C[Ct], P, null, N, m, w, k, I),
              ye++)
        }
        const Ji = it ? Yh(er) : xn
        for (re = Ji.length - 1, x = De - 1; x >= 0; x--) {
          const et = Q + x,
            Ct = C[et],
            Xi = C[et + 1],
            Qi = et + 1 < U ? Xi.el || pu(Xi) : H
          er[x] === 0
            ? g(null, Ct, P, Qi, N, m, w, k, I)
            : it && (re < 0 || x !== Ji[re] ? je(Ct, P, Qi, 2) : re--)
        }
      }
    },
    je = (b, C, P, H, N = null) => {
      const { el: m, type: w, transition: k, children: I, shapeFlag: x } = b
      if (x & 6) {
        je(b.component.subTree, C, P, H)
        return
      }
      if (x & 128) {
        b.suspense.move(C, P, H)
        return
      }
      if (x & 64) {
        w.move(b, C, P, X)
        return
      }
      if (w === Ge) {
        r(m, C, P)
        for (let S = 0; S < I.length; S++) je(I[S], C, P, H)
        r(b.anchor, C, P)
        return
      }
      if (w === zr) {
        p(b, C, P)
        return
      }
      if (H !== 2 && x & 1 && k)
        if (H === 0) (k.beforeEnter(m), r(m, C, P), Ie(() => k.enter(m), N))
        else {
          const { leave: S, delayLeave: O, afterLeave: W } = k,
            Q = () => {
              b.ctx.isUnmounted ? s(m) : r(m, C, P)
            },
            oe = () => {
              ;(m._isLeaving && m[Lt](!0),
                S(m, () => {
                  ;(Q(), W && W())
                }))
            }
          O ? O(m, Q, oe) : oe()
        }
      else r(m, C, P)
    },
    Me = (b, C, P, H = !1, N = !1) => {
      const {
        type: m,
        props: w,
        ref: k,
        children: I,
        dynamicChildren: x,
        shapeFlag: U,
        patchFlag: S,
        dirs: O,
        cacheIndex: W,
      } = b
      if (
        (S === -2 && (N = !1),
        k != null && (Gt(), Hn(k, null, P, b, !0), qt()),
        W != null && (C.renderCache[W] = void 0),
        U & 256)
      ) {
        C.ctx.deactivate(b)
        return
      }
      const Q = U & 1 && O,
        oe = !sn(b)
      let re
      if ((oe && (re = w && w.onVnodeBeforeUnmount) && Ye(re, C, b), U & 6)) wt(b.component, P, H)
      else {
        if (U & 128) {
          b.suspense.unmount(P, H)
          return
        }
        ;(Q && St(b, null, C, 'beforeUnmount'),
          U & 64
            ? b.type.remove(b, C, P, X, H)
            : x && !x.hasOnce && (m !== Ge || (S > 0 && S & 64))
              ? He(x, C, P, !1, !0)
              : ((m === Ge && S & 384) || (!N && U & 16)) && He(I, C, P),
          H && vt(b))
      }
      ;((oe && (re = w && w.onVnodeUnmounted)) || Q) &&
        Ie(() => {
          ;(re && Ye(re, C, b), Q && St(b, null, C, 'unmounted'))
        }, P)
    },
    vt = (b) => {
      const { type: C, el: P, anchor: H, transition: N } = b
      if (C === Ge) {
        Et(P, H)
        return
      }
      if (C === zr) {
        _(b)
        return
      }
      const m = () => {
        ;(s(P), N && !N.persisted && N.afterLeave && N.afterLeave())
      }
      if (b.shapeFlag & 1 && N && !N.persisted) {
        const { leave: w, delayLeave: k } = N,
          I = () => w(P, m)
        k ? k(b.el, m, I) : I()
      } else m()
    },
    Et = (b, C) => {
      let P
      for (; b !== C; ) ((P = d(b)), s(b), (b = P))
      s(C)
    },
    wt = (b, C, P) => {
      const { bum: H, scope: N, job: m, subTree: w, um: k, m: I, a: x } = b
      ;(cs(I),
        cs(x),
        H && cr(H),
        N.stop(),
        m && ((m.flags |= 8), Me(w, b, C, P)),
        k && Ie(k, C),
        Ie(() => {
          b.isUnmounted = !0
        }, C))
    },
    He = (b, C, P, H = !1, N = !1, m = 0) => {
      for (let w = m; w < b.length; w++) Me(b[w], C, P, H, N)
    },
    M = (b) => {
      if (b.shapeFlag & 6) return M(b.component.subTree)
      if (b.shapeFlag & 128) return b.suspense.next()
      const C = d(b.anchor || b.el),
        P = C && C[ah]
      return P ? d(P) : C
    }
  let K = !1
  const B = (b, C, P) => {
      let H
      ;(b == null
        ? C._vnode && (Me(C._vnode, null, null, !0), (H = C._vnode.component))
        : g(C._vnode || null, b, C, null, null, null, P),
        (C._vnode = b),
        K || ((K = !0), na(H), os(), (K = !1)))
    },
    X = { p: g, um: Me, m: je, r: vt, mt: ne, mc: j, pc: G, pbc: $, n: M, o: e }
  let te, me
  return (t && ([te, me] = t(X)), { render: B, hydrate: te, createApp: Ih(B, te) })
}
function so({ type: e, props: t }, n) {
  return (n === 'svg' && e === 'foreignObject') ||
    (n === 'mathml' && e === 'annotation-xml' && t && t.encoding && t.encoding.includes('html'))
    ? void 0
    : n
}
function dn({ effect: e, job: t }, n) {
  n ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5))
}
function fu(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted
}
function du(e, t, n = !1) {
  const r = e.children,
    s = t.children
  if (z(r) && z(s))
    for (let o = 0; o < r.length; o++) {
      const i = r[o]
      let a = s[o]
      ;(a.shapeFlag & 1 &&
        !a.dynamicChildren &&
        ((a.patchFlag <= 0 || a.patchFlag === 32) && ((a = s[o] = $t(s[o])), (a.el = i.el)),
        !n && a.patchFlag !== -2 && du(i, a)),
        a.type === on && (a.patchFlag === -1 && (a = s[o] = $t(a)), (a.el = i.el)),
        a.type === Ne && !a.el && (a.el = i.el))
    }
}
function Yh(e) {
  const t = e.slice(),
    n = [0]
  let r, s, o, i, a
  const l = e.length
  for (r = 0; r < l; r++) {
    const u = e[r]
    if (u !== 0) {
      if (((s = n[n.length - 1]), e[s] < u)) {
        ;((t[r] = s), n.push(r))
        continue
      }
      for (o = 0, i = n.length - 1; o < i; )
        ((a = (o + i) >> 1), e[n[a]] < u ? (o = a + 1) : (i = a))
      u < e[n[o]] && (o > 0 && (t[r] = n[o - 1]), (n[o] = r))
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0; ) ((n[o] = i), (i = t[i]))
  return n
}
function hu(e) {
  const t = e.subTree.component
  if (t) return t.asyncDep && !t.asyncResolved ? t : hu(t)
}
function cs(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8
}
function pu(e) {
  if (e.placeholder) return e.placeholder
  const t = e.component
  return t ? pu(t.subTree) : null
}
const us = (e) => e.__isSuspense
let No = 0
const Jh = {
    name: 'Suspense',
    __isSuspense: !0,
    process(e, t, n, r, s, o, i, a, l, u) {
      if (e == null) Xh(t, n, r, s, o, i, a, l, u)
      else {
        if (o && o.deps > 0 && !e.suspense.isInFallback) {
          ;((t.suspense = e.suspense), (t.suspense.vnode = t), (t.el = e.el))
          return
        }
        Qh(e, t, n, r, s, i, a, l, u)
      }
    },
    hydrate: zh,
    normalize: Zh,
  },
  gu = Jh
function br(e, t) {
  const n = e.props && e.props[t]
  ee(n) && n()
}
function Xh(e, t, n, r, s, o, i, a, l) {
  const {
      p: u,
      o: { createElement: c },
    } = l,
    f = c('div'),
    d = (e.suspense = mu(e, s, r, t, f, n, o, i, a, l))
  ;(u(null, (d.pendingBranch = e.ssContent), f, null, r, d, o, i),
    d.deps > 0
      ? (br(e, 'onPending'),
        br(e, 'onFallback'),
        u(null, e.ssFallback, t, n, r, null, o, i),
        $n(d, e.ssFallback))
      : d.resolve(!1, !0))
}
function Qh(e, t, n, r, s, o, i, a, { p: l, um: u, o: { createElement: c } }) {
  const f = (t.suspense = e.suspense)
  ;((f.vnode = t), (t.el = e.el))
  const d = t.ssContent,
    h = t.ssFallback,
    { activeBranch: E, pendingBranch: g, isInFallback: R, isHydrating: y } = f
  if (g)
    ((f.pendingBranch = d),
      ht(g, d)
        ? (l(g, d, f.hiddenContainer, null, s, f, o, i, a),
          f.deps <= 0 ? f.resolve() : R && (y || (l(E, h, n, r, s, null, o, i, a), $n(f, h))))
        : ((f.pendingId = No++),
          y ? ((f.isHydrating = !1), (f.activeBranch = g)) : u(g, s, f),
          (f.deps = 0),
          (f.effects.length = 0),
          (f.hiddenContainer = c('div')),
          R
            ? (l(null, d, f.hiddenContainer, null, s, f, o, i, a),
              f.deps <= 0 ? f.resolve() : (l(E, h, n, r, s, null, o, i, a), $n(f, h)))
            : E && ht(E, d)
              ? (l(E, d, n, r, s, f, o, i, a), f.resolve(!0))
              : (l(null, d, f.hiddenContainer, null, s, f, o, i, a), f.deps <= 0 && f.resolve())))
  else if (E && ht(E, d)) (l(E, d, n, r, s, f, o, i, a), $n(f, d))
  else if (
    (br(t, 'onPending'),
    (f.pendingBranch = d),
    d.shapeFlag & 512 ? (f.pendingId = d.component.suspenseId) : (f.pendingId = No++),
    l(null, d, f.hiddenContainer, null, s, f, o, i, a),
    f.deps <= 0)
  )
    f.resolve()
  else {
    const { timeout: v, pendingId: p } = f
    v > 0
      ? setTimeout(() => {
          f.pendingId === p && f.fallback(h)
        }, v)
      : v === 0 && f.fallback(h)
  }
}
function mu(e, t, n, r, s, o, i, a, l, u, c = !1) {
  const {
    p: f,
    m: d,
    um: h,
    n: E,
    o: { parentNode: g, remove: R },
  } = u
  let y
  const v = ep(e)
  v && t && t.pendingBranch && ((y = t.pendingId), t.deps++)
  const p = e.props ? cc(e.props.timeout) : void 0,
    _ = o,
    T = {
      vnode: e,
      parent: t,
      parentComponent: n,
      namespace: i,
      container: r,
      hiddenContainer: s,
      deps: 0,
      pendingId: No++,
      timeout: typeof p == 'number' ? p : -1,
      activeBranch: null,
      pendingBranch: null,
      isInFallback: !c,
      isHydrating: c,
      isUnmounted: !1,
      effects: [],
      resolve(L = !1, A = !1) {
        const {
          vnode: j,
          activeBranch: F,
          pendingBranch: $,
          pendingId: q,
          effects: D,
          parentComponent: J,
          container: ne,
          isInFallback: ae,
        } = T
        let Y = !1
        ;(T.isHydrating
          ? (T.isHydrating = !1)
          : L ||
            ((Y = F && $.transition && $.transition.mode === 'out-in'),
            Y &&
              (F.transition.afterLeave = () => {
                q === T.pendingId &&
                  (d($, ne, o === _ ? E(F) : o, 0),
                  Lo(D),
                  ae && j.ssFallback && (j.ssFallback.el = null))
              }),
            F &&
              (g(F.el) === ne && (o = E(F)),
              h(F, J, T, !0),
              !Y && ae && j.ssFallback && Ie(() => (j.ssFallback.el = null), T)),
            Y || d($, ne, o, 0)),
          $n(T, $),
          (T.pendingBranch = null),
          (T.isInFallback = !1))
        let Z = T.parent,
          G = !1
        for (; Z; ) {
          if (Z.pendingBranch) {
            ;(Z.effects.push(...D), (G = !0))
            break
          }
          Z = Z.parent
        }
        ;(!G && !Y && Lo(D),
          (T.effects = []),
          v &&
            t &&
            t.pendingBranch &&
            y === t.pendingId &&
            (t.deps--, t.deps === 0 && !A && t.resolve()),
          br(j, 'onResolve'))
      },
      fallback(L) {
        if (!T.pendingBranch) return
        const { vnode: A, activeBranch: j, parentComponent: F, container: $, namespace: q } = T
        br(A, 'onFallback')
        const D = E(j),
          J = () => {
            T.isInFallback && (f(null, L, $, D, F, null, q, a, l), $n(T, L))
          },
          ne = L.transition && L.transition.mode === 'out-in'
        ;(ne && (j.transition.afterLeave = J), (T.isInFallback = !0), h(j, F, null, !0), ne || J())
      },
      move(L, A, j) {
        ;(T.activeBranch && d(T.activeBranch, L, A, j), (T.container = L))
      },
      next() {
        return T.activeBranch && E(T.activeBranch)
      },
      registerDep(L, A, j) {
        const F = !!T.pendingBranch
        F && T.deps++
        const $ = L.vnode.el
        L.asyncDep
          .catch((q) => {
            Zn(q, L, 0)
          })
          .then((q) => {
            if (L.isUnmounted || T.isUnmounted || T.pendingId !== L.suspenseId) return
            L.asyncResolved = !0
            const { vnode: D } = L
            ;(Mo(L, q), $ && (D.el = $))
            const J = !$ && L.subTree.el
            ;(A(L, D, g($ || L.subTree.el), $ ? null : E(L.subTree), T, i, j),
              J && ((D.placeholder = null), R(J)),
              xs(L, D.el),
              F && --T.deps === 0 && T.resolve())
          })
      },
      unmount(L, A) {
        ;((T.isUnmounted = !0),
          T.activeBranch && h(T.activeBranch, n, L, A),
          T.pendingBranch && h(T.pendingBranch, n, L, A))
      },
    }
  return T
}
function zh(e, t, n, r, s, o, i, a, l) {
  const u = (t.suspense = mu(
      t,
      r,
      n,
      e.parentNode,
      document.createElement('div'),
      null,
      s,
      o,
      i,
      a,
      !0
    )),
    c = l(e, (u.pendingBranch = t.ssContent), n, u, o, i)
  return (u.deps === 0 && u.resolve(!1, !0), c)
}
function Zh(e) {
  const { shapeFlag: t, children: n } = e,
    r = t & 32
  ;((e.ssContent = ma(r ? n.default : n)), (e.ssFallback = r ? ma(n.fallback) : Le(Ne)))
}
function ma(e) {
  let t
  if (ee(e)) {
    const n = Gn && e._c
    ;(n && ((e._d = !1), kt()), (e = e()), n && ((e._d = !0), (t = Je), yu()))
  }
  return (
    z(e) && (e = Dh(e)),
    (e = tt(e)),
    t && !e.dynamicChildren && (e.dynamicChildren = t.filter((n) => n !== e)),
    e
  )
}
function _u(e, t) {
  t && t.pendingBranch ? (z(e) ? t.effects.push(...e) : t.effects.push(e)) : Lo(e)
}
function $n(e, t) {
  e.activeBranch = t
  const { vnode: n, parentComponent: r } = e
  let s = t.el
  for (; !s && t.component; ) ((t = t.component.subTree), (s = t.el))
  ;((n.el = s), r && r.subTree === n && ((r.vnode.el = s), xs(r, s)))
}
function ep(e) {
  const t = e.props && e.props.suspensible
  return t != null && t !== !1
}
const Ge = Symbol.for('v-fgt'),
  on = Symbol.for('v-txt'),
  Ne = Symbol.for('v-cmt'),
  zr = Symbol.for('v-stc'),
  hr = []
let Je = null
function kt(e = !1) {
  hr.push((Je = e ? null : []))
}
function yu() {
  ;(hr.pop(), (Je = hr[hr.length - 1] || null))
}
let Gn = 1
function fs(e, t = !1) {
  ;((Gn += e), e < 0 && Je && t && (Je.hasOnce = !0))
}
function bu(e) {
  return ((e.dynamicChildren = Gn > 0 ? Je || xn : null), yu(), Gn > 0 && Je && Je.push(e), e)
}
function vu(e, t, n, r, s, o) {
  return bu(wu(e, t, n, r, s, o, !0))
}
function yn(e, t, n, r, s) {
  return bu(Le(e, t, n, r, s, !0))
}
function qn(e) {
  return e ? e.__v_isVNode === !0 : !1
}
function ht(e, t) {
  return e.type === t.type && e.key === t.key
}
const Eu = ({ key: e }) => e ?? null,
  Zr = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == 'number' && (e = '' + e),
    e != null ? (we(e) || Re(e) || ee(e) ? { i: nt, r: e, k: t, f: !!n } : e) : null
  )
function wu(e, t = null, n = null, r = 0, s = null, o = e === Ge ? 0 : 1, i = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Eu(t),
    ref: t && Zr(t),
    scopeId: xc,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: r,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: nt,
  }
  return (
    a ? (Si(l, n), o & 128 && e.normalize(l)) : n && (l.shapeFlag |= we(n) ? 8 : 16),
    Gn > 0 && !i && Je && (l.patchFlag > 0 || o & 6) && l.patchFlag !== 32 && Je.push(l),
    l
  )
}
const Le = tp
function tp(e, t = null, n = null, r = 0, s = null, o = !1) {
  if (((!e || e === Jc) && (e = Ne), qn(e))) {
    const a = Yt(e, t, !0)
    return (
      n && Si(a, n),
      Gn > 0 && !o && Je && (a.shapeFlag & 6 ? (Je[Je.indexOf(e)] = a) : Je.push(a)),
      (a.patchFlag = -2),
      a
    )
  }
  if ((up(e) && (e = e.__vccOpts), t)) {
    t = Cu(t)
    let { class: a, style: l } = t
    ;(a && !we(a) && (t.class = Ts(a)),
      ue(l) && (As(l) && !z(l) && (l = xe({}, l)), (t.style = Rs(l))))
  }
  const i = we(e) ? 1 : us(e) ? 128 : Fc(e) ? 64 : ue(e) ? 4 : ee(e) ? 2 : 0
  return wu(e, t, n, r, s, i, o, !0)
}
function Cu(e) {
  return e ? (As(e) || su(e) ? xe({}, e) : e) : null
}
function Yt(e, t, n = !1, r = !1) {
  const { props: s, ref: o, patchFlag: i, children: a, transition: l } = e,
    u = t ? np(s || {}, t) : s,
    c = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: u,
      key: u && Eu(u),
      ref: t && t.ref ? (n && o ? (z(o) ? o.concat(Zr(t)) : [o, Zr(t)]) : Zr(t)) : o,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: a,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== Ge ? (i === -1 ? 16 : i | 16) : i,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: l,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && Yt(e.ssContent),
      ssFallback: e.ssFallback && Yt(e.ssFallback),
      placeholder: e.placeholder,
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    }
  return (l && r && Kn(c, l.clone(c)), c)
}
function Ru(e = ' ', t = 0) {
  return Le(on, null, e, t)
}
function b0(e = '', t = !1) {
  return t ? (kt(), yn(Ne, null, e)) : Le(Ne, null, e)
}
function tt(e) {
  return e == null || typeof e == 'boolean'
    ? Le(Ne)
    : z(e)
      ? Le(Ge, null, e.slice())
      : qn(e)
        ? $t(e)
        : Le(on, null, String(e))
}
function $t(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Yt(e)
}
function Si(e, t) {
  let n = 0
  const { shapeFlag: r } = e
  if (t == null) t = null
  else if (z(t)) n = 16
  else if (typeof t == 'object')
    if (r & 65) {
      const s = t.default
      s && (s._c && (s._d = !1), Si(e, s()), s._c && (s._d = !0))
      return
    } else {
      n = 32
      const s = t._
      !s && !su(t)
        ? (t._ctx = nt)
        : s === 3 && nt && (nt.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
    }
  else
    ee(t)
      ? ((t = { default: t, _ctx: nt }), (n = 32))
      : ((t = String(t)), r & 64 ? ((n = 16), (t = [Ru(t)])) : (n = 8))
  ;((e.children = t), (e.shapeFlag |= n))
}
function np(...e) {
  const t = {}
  for (let n = 0; n < e.length; n++) {
    const r = e[n]
    for (const s in r)
      if (s === 'class') t.class !== r.class && (t.class = Ts([t.class, r.class]))
      else if (s === 'style') t.style = Rs([t.style, r.style])
      else if (Ar(s)) {
        const o = t[s],
          i = r[s]
        i && o !== i && !(z(o) && o.includes(i)) && (t[s] = o ? [].concat(o, i) : i)
      } else s !== '' && (t[s] = r[s])
  }
  return t
}
function Ye(e, t, n, r = null) {
  _t(e, t, 7, [n, r])
}
const rp = Zc()
let sp = 0
function op(e, t, n) {
  const r = e.type,
    s = (t ? t.appContext : e.appContext) || rp,
    o = {
      uid: sp++,
      vnode: e,
      type: r,
      parent: t,
      appContext: s,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new hc(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(s.provides),
      ids: t ? t.ids : ['', 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: iu(r, s),
      emitsOptions: eu(r, s),
      emit: null,
      emitted: null,
      propsDefaults: be,
      inheritAttrs: r.inheritAttrs,
      ctx: be,
      data: be,
      props: be,
      attrs: be,
      slots: be,
      refs: be,
      setupState: be,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    }
  return (
    (o.ctx = { _: o }),
    (o.root = t ? t.root : o),
    (o.emit = xh.bind(null, o)),
    e.ce && e.ce(o),
    o
  )
}
let Fe = null
const Ln = () => Fe || nt
let ds, xo
{
  const e = Cs(),
    t = (n, r) => {
      let s
      return (
        (s = e[n]) || (s = e[n] = []),
        s.push(r),
        (o) => {
          s.length > 1 ? s.forEach((i) => i(o)) : s[0](o)
        }
      )
    }
  ;((ds = t('__VUE_INSTANCE_SETTERS__', (n) => (Fe = n))),
    (xo = t('__VUE_SSR_SETTERS__', (n) => (Yn = n))))
}
const Nr = (e) => {
    const t = Fe
    return (
      ds(e),
      e.scope.on(),
      () => {
        ;(e.scope.off(), ds(t))
      }
    )
  },
  _a = () => {
    ;(Fe && Fe.scope.off(), ds(null))
  }
function Tu(e) {
  return e.vnode.shapeFlag & 4
}
let Yn = !1
function ip(e, t = !1, n = !1) {
  t && xo(t)
  const { props: r, children: s } = e.vnode,
    o = Tu(e)
  ;(Uh(e, r, o, t), Vh(e, s, n || t))
  const i = o ? ap(e, t) : void 0
  return (t && xo(!1), i)
}
function ap(e, t) {
  const n = e.type
  ;((e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, Th)))
  const { setup: r } = n
  if (r) {
    Gt()
    const s = (e.setupContext = r.length > 1 ? cp(e) : null),
      o = Nr(e),
      i = Pr(r, e, 0, [e.props, s]),
      a = oc(i)
    if ((qt(), o(), (a || e.sp) && !sn(e) && wi(e), a)) {
      if ((i.then(_a, _a), t))
        return i
          .then((l) => {
            Mo(e, l)
          })
          .catch((l) => {
            Zn(l, e, 0)
          })
      e.asyncDep = i
    } else Mo(e, i)
  } else Su(e)
}
function Mo(e, t, n) {
  ;(ee(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : ue(t) && (e.setupState = Ac(t)),
    Su(e))
}
function Su(e, t, n) {
  const r = e.type
  e.render || (e.render = r.render || At)
  {
    const s = Nr(e)
    Gt()
    try {
      Sh(e)
    } finally {
      ;(qt(), s())
    }
  }
}
const lp = {
  get(e, t) {
    return (Ue(e, 'get', ''), e[t])
  },
}
function cp(e) {
  const t = (n) => {
    e.exposed = n || {}
  }
  return { attrs: new Proxy(e.attrs, lp), slots: e.slots, emit: e.emit, expose: t }
}
function Ms(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(Ac(Bd(e.exposed)), {
          get(t, n) {
            if (n in t) return t[n]
            if (n in dr) return dr[n](e)
          },
          has(t, n) {
            return n in t || n in dr
          },
        }))
    : e.proxy
}
function Do(e, t = !0) {
  return ee(e) ? e.displayName || e.name : e.name || (t && e.__name)
}
function up(e) {
  return ee(e) && '__vccOpts' in e
}
const Ae = (e, t) => zd(e, t, Yn)
function Xe(e, t, n) {
  try {
    fs(-1)
    const r = arguments.length
    return r === 2
      ? ue(t) && !z(t)
        ? qn(t)
          ? Le(e, null, [t])
          : Le(e, t)
        : Le(e, null, t)
      : (r > 3 ? (n = Array.prototype.slice.call(arguments, 2)) : r === 3 && qn(n) && (n = [n]),
        Le(e, t, n))
  } finally {
    fs(1)
  }
}
const fp = '3.5.29'
let Fo
const ya = typeof window < 'u' && window.trustedTypes
if (ya)
  try {
    Fo = ya.createPolicy('vue', { createHTML: (e) => e })
  } catch {}
const Lu = Fo ? (e) => Fo.createHTML(e) : (e) => e,
  dp = 'http://www.w3.org/2000/svg',
  hp = 'http://www.w3.org/1998/Math/MathML',
  Ht = typeof document < 'u' ? document : null,
  ba = Ht && Ht.createElement('template'),
  pp = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null)
    },
    remove: (e) => {
      const t = e.parentNode
      t && t.removeChild(e)
    },
    createElement: (e, t, n, r) => {
      const s =
        t === 'svg'
          ? Ht.createElementNS(dp, e)
          : t === 'mathml'
            ? Ht.createElementNS(hp, e)
            : n
              ? Ht.createElement(e, { is: n })
              : Ht.createElement(e)
      return (
        e === 'select' && r && r.multiple != null && s.setAttribute('multiple', r.multiple),
        s
      )
    },
    createText: (e) => Ht.createTextNode(e),
    createComment: (e) => Ht.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t
    },
    setElementText: (e, t) => {
      e.textContent = t
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Ht.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '')
    },
    insertStaticContent(e, t, n, r, s, o) {
      const i = n ? n.previousSibling : t.lastChild
      if (s && (s === o || s.nextSibling))
        for (; t.insertBefore(s.cloneNode(!0), n), !(s === o || !(s = s.nextSibling)); );
      else {
        ba.innerHTML = Lu(
          r === 'svg' ? `<svg>${e}</svg>` : r === 'mathml' ? `<math>${e}</math>` : e
        )
        const a = ba.content
        if (r === 'svg' || r === 'mathml') {
          const l = a.firstChild
          for (; l.firstChild; ) a.appendChild(l.firstChild)
          a.removeChild(l)
        }
        t.insertBefore(a, n)
      }
      return [i ? i.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
    },
  },
  Xt = 'transition',
  rr = 'animation',
  vr = Symbol('_vtc'),
  ku = {
    name: String,
    type: String,
    css: { type: Boolean, default: !0 },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String,
  },
  gp = xe({}, Hc, ku),
  mp = (e) => ((e.displayName = 'Transition'), (e.props = gp), e),
  _p = mp((e, { slots: t }) => Xe(uh, yp(e), t)),
  hn = (e, t = []) => {
    z(e) ? e.forEach((n) => n(...t)) : e && e(...t)
  },
  va = (e) => (e ? (z(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1)
function yp(e) {
  const t = {}
  for (const D in e) D in ku || (t[D] = e[D])
  if (e.css === !1) return t
  const {
      name: n = 'v',
      type: r,
      duration: s,
      enterFromClass: o = `${n}-enter-from`,
      enterActiveClass: i = `${n}-enter-active`,
      enterToClass: a = `${n}-enter-to`,
      appearFromClass: l = o,
      appearActiveClass: u = i,
      appearToClass: c = a,
      leaveFromClass: f = `${n}-leave-from`,
      leaveActiveClass: d = `${n}-leave-active`,
      leaveToClass: h = `${n}-leave-to`,
    } = e,
    E = bp(s),
    g = E && E[0],
    R = E && E[1],
    {
      onBeforeEnter: y,
      onEnter: v,
      onEnterCancelled: p,
      onLeave: _,
      onLeaveCancelled: T,
      onBeforeAppear: L = y,
      onAppear: A = v,
      onAppearCancelled: j = p,
    } = t,
    F = (D, J, ne, ae) => {
      ;((D._enterCancelled = ae), pn(D, J ? c : a), pn(D, J ? u : i), ne && ne())
    },
    $ = (D, J) => {
      ;((D._isLeaving = !1), pn(D, f), pn(D, h), pn(D, d), J && J())
    },
    q = (D) => (J, ne) => {
      const ae = D ? A : v,
        Y = () => F(J, D, ne)
      ;(hn(ae, [J, Y]),
        Ea(() => {
          ;(pn(J, D ? l : o), Mt(J, D ? c : a), va(ae) || wa(J, r, g, Y))
        }))
    }
  return xe(t, {
    onBeforeEnter(D) {
      ;(hn(y, [D]), Mt(D, o), Mt(D, i))
    },
    onBeforeAppear(D) {
      ;(hn(L, [D]), Mt(D, l), Mt(D, u))
    },
    onEnter: q(!1),
    onAppear: q(!0),
    onLeave(D, J) {
      D._isLeaving = !0
      const ne = () => $(D, J)
      ;(Mt(D, f),
        D._enterCancelled ? (Mt(D, d), Ta(D)) : (Ta(D), Mt(D, d)),
        Ea(() => {
          D._isLeaving && (pn(D, f), Mt(D, h), va(_) || wa(D, r, R, ne))
        }),
        hn(_, [D, ne]))
    },
    onEnterCancelled(D) {
      ;(F(D, !1, void 0, !0), hn(p, [D]))
    },
    onAppearCancelled(D) {
      ;(F(D, !0, void 0, !0), hn(j, [D]))
    },
    onLeaveCancelled(D) {
      ;($(D), hn(T, [D]))
    },
  })
}
function bp(e) {
  if (e == null) return null
  if (ue(e)) return [oo(e.enter), oo(e.leave)]
  {
    const t = oo(e)
    return [t, t]
  }
}
function oo(e) {
  return cc(e)
}
function Mt(e, t) {
  ;(t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[vr] || (e[vr] = new Set())).add(t))
}
function pn(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r))
  const n = e[vr]
  n && (n.delete(t), n.size || (e[vr] = void 0))
}
function Ea(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e)
  })
}
let vp = 0
function wa(e, t, n, r) {
  const s = (e._endId = ++vp),
    o = () => {
      s === e._endId && r()
    }
  if (n != null) return setTimeout(o, n)
  const { type: i, timeout: a, propCount: l } = Ep(e, t)
  if (!i) return r()
  const u = i + 'end'
  let c = 0
  const f = () => {
      ;(e.removeEventListener(u, d), o())
    },
    d = (h) => {
      h.target === e && ++c >= l && f()
    }
  ;(setTimeout(() => {
    c < l && f()
  }, a + 1),
    e.addEventListener(u, d))
}
function Ep(e, t) {
  const n = window.getComputedStyle(e),
    r = (E) => (n[E] || '').split(', '),
    s = r(`${Xt}Delay`),
    o = r(`${Xt}Duration`),
    i = Ca(s, o),
    a = r(`${rr}Delay`),
    l = r(`${rr}Duration`),
    u = Ca(a, l)
  let c = null,
    f = 0,
    d = 0
  t === Xt
    ? i > 0 && ((c = Xt), (f = i), (d = o.length))
    : t === rr
      ? u > 0 && ((c = rr), (f = u), (d = l.length))
      : ((f = Math.max(i, u)),
        (c = f > 0 ? (i > u ? Xt : rr) : null),
        (d = c ? (c === Xt ? o.length : l.length) : 0))
  const h = c === Xt && /\b(?:transform|all)(?:,|$)/.test(r(`${Xt}Property`).toString())
  return { type: c, timeout: f, propCount: d, hasTransform: h }
}
function Ca(e, t) {
  for (; e.length < t.length; ) e = e.concat(e)
  return Math.max(...t.map((n, r) => Ra(n) + Ra(e[r])))
}
function Ra(e) {
  return e === 'auto' ? 0 : Number(e.slice(0, -1).replace(',', '.')) * 1e3
}
function Ta(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight
}
function wp(e, t, n) {
  const r = e[vr]
  ;(r && (t = (t ? [t, ...r] : [...r]).join(' ')),
    t == null ? e.removeAttribute('class') : n ? e.setAttribute('class', t) : (e.className = t))
}
const Sa = Symbol('_vod'),
  Cp = Symbol('_vsh'),
  Rp = Symbol(''),
  Tp = /(?:^|;)\s*display\s*:/
function Sp(e, t, n) {
  const r = e.style,
    s = we(n)
  let o = !1
  if (n && !s) {
    if (t)
      if (we(t))
        for (const i of t.split(';')) {
          const a = i.slice(0, i.indexOf(':')).trim()
          n[a] == null && es(r, a, '')
        }
      else for (const i in t) n[i] == null && es(r, i, '')
    for (const i in n) (i === 'display' && (o = !0), es(r, i, n[i]))
  } else if (s) {
    if (t !== n) {
      const i = r[Rp]
      ;(i && (n += ';' + i), (r.cssText = n), (o = Tp.test(n)))
    }
  } else t && e.removeAttribute('style')
  Sa in e && ((e[Sa] = o ? r.display : ''), e[Cp] && (r.display = 'none'))
}
const La = /\s*!important$/
function es(e, t, n) {
  if (z(n)) n.forEach((r) => es(e, t, r))
  else if ((n == null && (n = ''), t.startsWith('--'))) e.setProperty(t, n)
  else {
    const r = Lp(e, t)
    La.test(n) ? e.setProperty(Sn(r), n.replace(La, ''), 'important') : (e[r] = n)
  }
}
const ka = ['Webkit', 'Moz', 'ms'],
  io = {}
function Lp(e, t) {
  const n = io[t]
  if (n) return n
  let r = ut(t)
  if (r !== 'filter' && r in e) return (io[t] = r)
  r = ws(r)
  for (let s = 0; s < ka.length; s++) {
    const o = ka[s] + r
    if (o in e) return (io[t] = o)
  }
  return t
}
const Aa = 'http://www.w3.org/1999/xlink'
function Pa(e, t, n, r, s, o = vd(t)) {
  r && t.startsWith('xlink:')
    ? n == null
      ? e.removeAttributeNS(Aa, t.slice(6, t.length))
      : e.setAttributeNS(Aa, t, n)
    : n == null || (o && !uc(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, o ? '' : Ot(n) ? String(n) : n)
}
function Oa(e, t, n, r, s) {
  if (t === 'innerHTML' || t === 'textContent') {
    n != null && (e[t] = t === 'innerHTML' ? Lu(n) : n)
    return
  }
  const o = e.tagName
  if (t === 'value' && o !== 'PROGRESS' && !o.includes('-')) {
    const a = o === 'OPTION' ? e.getAttribute('value') || '' : e.value,
      l = n == null ? (e.type === 'checkbox' ? 'on' : '') : String(n)
    ;((a !== l || !('_value' in e)) && (e.value = l),
      n == null && e.removeAttribute(t),
      (e._value = n))
    return
  }
  let i = !1
  if (n === '' || n == null) {
    const a = typeof e[t]
    a === 'boolean'
      ? (n = uc(n))
      : n == null && a === 'string'
        ? ((n = ''), (i = !0))
        : a === 'number' && ((n = 0), (i = !0))
  }
  try {
    e[t] = n
  } catch {}
  i && e.removeAttribute(s || t)
}
function kp(e, t, n, r) {
  e.addEventListener(t, n, r)
}
function Ap(e, t, n, r) {
  e.removeEventListener(t, n, r)
}
const Ia = Symbol('_vei')
function Pp(e, t, n, r, s = null) {
  const o = e[Ia] || (e[Ia] = {}),
    i = o[t]
  if (r && i) i.value = r
  else {
    const [a, l] = Op(t)
    if (r) {
      const u = (o[t] = xp(r, s))
      kp(e, a, u, l)
    } else i && (Ap(e, a, i, l), (o[t] = void 0))
  }
}
const Na = /(?:Once|Passive|Capture)$/
function Op(e) {
  let t
  if (Na.test(e)) {
    t = {}
    let r
    for (; (r = e.match(Na)); )
      ((e = e.slice(0, e.length - r[0].length)), (t[r[0].toLowerCase()] = !0))
  }
  return [e[2] === ':' ? e.slice(3) : Sn(e.slice(2)), t]
}
let ao = 0
const Ip = Promise.resolve(),
  Np = () => ao || (Ip.then(() => (ao = 0)), (ao = Date.now()))
function xp(e, t) {
  const n = (r) => {
    if (!r._vts) r._vts = Date.now()
    else if (r._vts <= n.attached) return
    _t(Mp(r, n.value), t, 5, [r])
  }
  return ((n.value = e), (n.attached = Np()), n)
}
function Mp(e, t) {
  if (z(t)) {
    const n = e.stopImmediatePropagation
    return (
      (e.stopImmediatePropagation = () => {
        ;(n.call(e), (e._stopped = !0))
      }),
      t.map((r) => (s) => !s._stopped && r && r(s))
    )
  } else return t
}
const xa = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  Dp = (e, t, n, r, s, o) => {
    const i = s === 'svg'
    t === 'class'
      ? wp(e, r, i)
      : t === 'style'
        ? Sp(e, n, r)
        : Ar(t)
          ? fi(t) || Pp(e, t, n, r, o)
          : (
                t[0] === '.'
                  ? ((t = t.slice(1)), !0)
                  : t[0] === '^'
                    ? ((t = t.slice(1)), !1)
                    : Fp(e, t, r, i)
              )
            ? (Oa(e, t, r),
              !e.tagName.includes('-') &&
                (t === 'value' || t === 'checked' || t === 'selected') &&
                Pa(e, t, r, i, o, t !== 'value'))
            : e._isVueCE && (/[A-Z]/.test(t) || !we(r))
              ? Oa(e, ut(t), r, o, t)
              : (t === 'true-value'
                  ? (e._trueValue = r)
                  : t === 'false-value' && (e._falseValue = r),
                Pa(e, t, r, i))
  }
function Fp(e, t, n, r) {
  if (r) return !!(t === 'innerHTML' || t === 'textContent' || (t in e && xa(t) && ee(n)))
  if (
    t === 'spellcheck' ||
    t === 'draggable' ||
    t === 'translate' ||
    t === 'autocorrect' ||
    (t === 'sandbox' && e.tagName === 'IFRAME') ||
    t === 'form' ||
    (t === 'list' && e.tagName === 'INPUT') ||
    (t === 'type' && e.tagName === 'TEXTAREA')
  )
    return !1
  if (t === 'width' || t === 'height') {
    const s = e.tagName
    if (s === 'IMG' || s === 'VIDEO' || s === 'CANVAS' || s === 'SOURCE') return !1
  }
  return xa(t) && we(n) ? !1 : t in e
}
const Au = xe({ patchProp: Dp }, pp)
let pr,
  Ma = !1
function Hp() {
  return pr || (pr = Gh(Au))
}
function $p() {
  return ((pr = Ma ? pr : qh(Au)), (Ma = !0), pr)
}
const Up = (...e) => {
    const t = Hp().createApp(...e),
      { mount: n } = t
    return (
      (t.mount = (r) => {
        const s = Ou(r)
        if (!s) return
        const o = t._component
        ;(!ee(o) && !o.render && !o.template && (o.template = s.innerHTML),
          s.nodeType === 1 && (s.textContent = ''))
        const i = n(s, !1, Pu(s))
        return (
          s instanceof Element && (s.removeAttribute('v-cloak'), s.setAttribute('data-v-app', '')),
          i
        )
      }),
      t
    )
  },
  jp = (...e) => {
    const t = $p().createApp(...e),
      { mount: n } = t
    return (
      (t.mount = (r) => {
        const s = Ou(r)
        if (s) return n(s, !0, Pu(s))
      }),
      t
    )
  }
function Pu(e) {
  if (e instanceof SVGElement) return 'svg'
  if (typeof MathMLElement == 'function' && e instanceof MathMLElement) return 'mathml'
}
function Ou(e) {
  return we(e) ? document.querySelector(e) : e
}
const Bp =
    /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
  Wp =
    /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
  Vp = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/
function Kp(e, t) {
  if (e === '__proto__' || (e === 'constructor' && t && typeof t == 'object' && 'prototype' in t)) {
    Gp(e)
    return
  }
  return t
}
function Gp(e) {
  console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`)
}
function Er(e, t = {}) {
  if (typeof e != 'string') return e
  if (e[0] === '"' && e[e.length - 1] === '"' && e.indexOf('\\') === -1) return e.slice(1, -1)
  const n = e.trim()
  if (n.length <= 9)
    switch (n.toLowerCase()) {
      case 'true':
        return !0
      case 'false':
        return !1
      case 'undefined':
        return
      case 'null':
        return null
      case 'nan':
        return Number.NaN
      case 'infinity':
        return Number.POSITIVE_INFINITY
      case '-infinity':
        return Number.NEGATIVE_INFINITY
    }
  if (!Vp.test(e)) {
    if (t.strict) throw new SyntaxError('[destr] Invalid JSON')
    return e
  }
  try {
    if (Bp.test(e) || Wp.test(e)) {
      if (t.strict) throw new Error('[destr] Possible prototype pollution')
      return JSON.parse(e, Kp)
    }
    return JSON.parse(e)
  } catch (r) {
    if (t.strict) throw r
    return e
  }
}
const Iu = /#/g,
  Nu = /&/g,
  qp = /\//g,
  Yp = /=/g,
  Jp = /\?/g,
  Ds = /\+/g,
  Xp = /%5e/gi,
  Qp = /%60/gi,
  zp = /%7c/gi,
  Zp = /%20/gi,
  eg = /%2f/gi,
  tg = /%252f/gi
function xu(e) {
  return encodeURI('' + e).replace(zp, '|')
}
function Ho(e) {
  return xu(typeof e == 'string' ? e : JSON.stringify(e))
    .replace(Ds, '%2B')
    .replace(Zp, '+')
    .replace(Iu, '%23')
    .replace(Nu, '%26')
    .replace(Qp, '`')
    .replace(Xp, '^')
    .replace(qp, '%2F')
}
function lo(e) {
  return Ho(e).replace(Yp, '%3D')
}
function ng(e) {
  return xu(e)
    .replace(Iu, '%23')
    .replace(Jp, '%3F')
    .replace(tg, '%2F')
    .replace(Nu, '%26')
    .replace(Ds, '%2B')
}
function wr(e = '') {
  try {
    return decodeURIComponent('' + e)
  } catch {
    return '' + e
  }
}
function rg(e) {
  return wr(e.replace(eg, '%252F'))
}
function sg(e) {
  return wr(e.replace(Ds, ' '))
}
function og(e) {
  return wr(e.replace(Ds, ' '))
}
function Li(e = '') {
  const t = Object.create(null)
  e[0] === '?' && (e = e.slice(1))
  for (const n of e.split('&')) {
    const r = n.match(/([^=]+)=?(.*)/) || []
    if (r.length < 2) continue
    const s = sg(r[1])
    if (s === '__proto__' || s === 'constructor') continue
    const o = og(r[2] || '')
    t[s] === void 0 ? (t[s] = o) : Array.isArray(t[s]) ? t[s].push(o) : (t[s] = [t[s], o])
  }
  return t
}
function ig(e, t) {
  return (
    (typeof t == 'number' || typeof t == 'boolean') && (t = String(t)),
    t
      ? Array.isArray(t)
        ? t.map((n) => `${lo(e)}=${Ho(n)}`).join('&')
        : `${lo(e)}=${Ho(t)}`
      : lo(e)
  )
}
function ag(e) {
  return Object.keys(e)
    .filter((t) => e[t] !== void 0)
    .map((t) => ig(t, e[t]))
    .filter(Boolean)
    .join('&')
}
const lg = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/,
  cg = /^[\s\w\0+.-]{2,}:([/\\]{2})?/,
  ug = /^([/\\]\s*){2,}[^/\\]/,
  fg = /^[\s\0]*(blob|data|javascript|vbscript):$/i,
  dg = /\/$|\/\?|\/#/,
  hg = /^\.?\//
function Nt(e, t = {}) {
  return (
    typeof t == 'boolean' && (t = { acceptRelative: t }),
    t.strict ? lg.test(e) : cg.test(e) || (t.acceptRelative ? ug.test(e) : !1)
  )
}
function pg(e) {
  return !!e && fg.test(e)
}
function $o(e = '', t) {
  return t ? dg.test(e) : e.endsWith('/')
}
function Cr(e = '', t) {
  if (!t) return ($o(e) ? e.slice(0, -1) : e) || '/'
  if (!$o(e, !0)) return e || '/'
  let n = e,
    r = ''
  const s = e.indexOf('#')
  s !== -1 && ((n = e.slice(0, s)), (r = e.slice(s)))
  const [o, ...i] = n.split('?')
  return (
    ((o.endsWith('/') ? o.slice(0, -1) : o) || '/') + (i.length > 0 ? `?${i.join('?')}` : '') + r
  )
}
function gg(e = '', t) {
  if (!t) return e.endsWith('/') ? e : e + '/'
  if ($o(e, !0)) return e || '/'
  let n = e,
    r = ''
  const s = e.indexOf('#')
  if (s !== -1 && ((n = e.slice(0, s)), (r = e.slice(s)), !n)) return r
  const [o, ...i] = n.split('?')
  return o + '/' + (i.length > 0 ? `?${i.join('?')}` : '') + r
}
function mg(e, t) {
  if (Mu(t) || Nt(e)) return e
  const n = Cr(t)
  if (e.startsWith(n)) {
    const r = e[n.length]
    if (!r || r === '/' || r === '?') return e
  }
  return Tn(n, e)
}
function Da(e, t) {
  if (Mu(t)) return e
  const n = Cr(t)
  if (!e.startsWith(n)) return e
  const r = e[n.length]
  if (r && r !== '/' && r !== '?') return e
  const s = e.slice(n.length)
  return s[0] === '/' ? s : '/' + s
}
function Fs(e, t) {
  const n = ki(e),
    r = { ...Li(n.search), ...t }
  return ((n.search = ag(r)), bg(n))
}
function Mu(e) {
  return !e || e === '/'
}
function _g(e) {
  return e && e !== '/'
}
function Tn(e, ...t) {
  let n = e || ''
  for (const r of t.filter((s) => _g(s)))
    if (n) {
      const s = r.replace(hg, '')
      n = gg(n) + s
    } else n = r
  return n
}
function Du(...e) {
  const t = /\/(?!\/)/,
    n = e.filter(Boolean),
    r = []
  let s = 0
  for (const i of n)
    if (!(!i || i === '/')) {
      for (const [a, l] of i.split(t).entries())
        if (!(!l || l === '.')) {
          if (l === '..') {
            if (r.length === 1 && Nt(r[0])) continue
            ;(r.pop(), s--)
            continue
          }
          if (a === 1 && r[r.length - 1]?.endsWith(':/')) {
            r[r.length - 1] += '/' + l
            continue
          }
          ;(r.push(l), s++)
        }
    }
  let o = r.join('/')
  return (
    s >= 0
      ? n[0]?.startsWith('/') && !o.startsWith('/')
        ? (o = '/' + o)
        : n[0]?.startsWith('./') && !o.startsWith('./') && (o = './' + o)
      : (o = '../'.repeat(-1 * s) + o),
    n[n.length - 1]?.endsWith('/') && !o.endsWith('/') && (o += '/'),
    o
  )
}
function yg(e, t) {
  return wr(Cr(e)) === wr(Cr(t))
}
const Fu = Symbol.for('ufo:protocolRelative')
function ki(e = '', t) {
  const n = e.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i)
  if (n) {
    const [, f, d = ''] = n
    return {
      protocol: f.toLowerCase(),
      pathname: d,
      href: f + d,
      auth: '',
      host: '',
      search: '',
      hash: '',
    }
  }
  if (!Nt(e, { acceptRelative: !0 })) return Uo(e)
  const [, r = '', s, o = ''] =
    e.replace(/\\/g, '/').match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || []
  let [, i = '', a = ''] = o.match(/([^#/?]*)(.*)?/) || []
  r === 'file:' && (a = a.replace(/\/(?=[A-Za-z]:)/, ''))
  const { pathname: l, search: u, hash: c } = Uo(a)
  return {
    protocol: r.toLowerCase(),
    auth: s ? s.slice(0, Math.max(0, s.length - 1)) : '',
    host: i,
    pathname: l,
    search: u,
    hash: c,
    [Fu]: !r,
  }
}
function Uo(e = '') {
  const [t = '', n = '', r = ''] = (e.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1)
  return { pathname: t, search: n, hash: r }
}
function bg(e) {
  const t = e.pathname || '',
    n = e.search ? (e.search.startsWith('?') ? '' : '?') + e.search : '',
    r = e.hash || '',
    s = e.auth ? e.auth + '@' : '',
    o = e.host || ''
  return (e.protocol || e[Fu] ? (e.protocol || '') + '//' : '') + s + o + t + n + r
}
class vg extends Error {
  constructor(t, n) {
    ;(super(t, n), (this.name = 'FetchError'), n?.cause && !this.cause && (this.cause = n.cause))
  }
}
function Eg(e) {
  const t = e.error?.message || e.error?.toString() || '',
    n = e.request?.method || e.options?.method || 'GET',
    r = e.request?.url || String(e.request) || '/',
    s = `[${n}] ${JSON.stringify(r)}`,
    o = e.response ? `${e.response.status} ${e.response.statusText}` : '<no response>',
    i = `${s}: ${o}${t ? ` ${t}` : ''}`,
    a = new vg(i, e.error ? { cause: e.error } : void 0)
  for (const l of ['request', 'options', 'response'])
    Object.defineProperty(a, l, {
      get() {
        return e[l]
      },
    })
  for (const [l, u] of [
    ['data', '_data'],
    ['status', 'status'],
    ['statusCode', 'status'],
    ['statusText', 'statusText'],
    ['statusMessage', 'statusText'],
  ])
    Object.defineProperty(a, l, {
      get() {
        return e.response && e.response[u]
      },
    })
  return a
}
const wg = new Set(Object.freeze(['PATCH', 'POST', 'PUT', 'DELETE']))
function Fa(e = 'GET') {
  return wg.has(e.toUpperCase())
}
function Cg(e) {
  if (e === void 0) return !1
  const t = typeof e
  return t === 'string' || t === 'number' || t === 'boolean' || t === null
    ? !0
    : t !== 'object'
      ? !1
      : Array.isArray(e)
        ? !0
        : e.buffer || e instanceof FormData || e instanceof URLSearchParams
          ? !1
          : (e.constructor && e.constructor.name === 'Object') || typeof e.toJSON == 'function'
}
const Rg = new Set(['image/svg', 'application/xml', 'application/xhtml', 'application/html']),
  Tg = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i
function Sg(e = '') {
  if (!e) return 'json'
  const t = e.split(';').shift() || ''
  return Tg.test(t)
    ? 'json'
    : t === 'text/event-stream'
      ? 'stream'
      : Rg.has(t) || t.startsWith('text/')
        ? 'text'
        : 'blob'
}
function Lg(e, t, n, r) {
  const s = kg(t?.headers ?? e?.headers, n?.headers, r)
  let o
  return (
    (n?.query || n?.params || t?.params || t?.query) &&
      (o = { ...n?.params, ...n?.query, ...t?.params, ...t?.query }),
    { ...n, ...t, query: o, params: o, headers: s }
  )
}
function kg(e, t, n) {
  if (!t) return new n(e)
  const r = new n(t)
  if (e) for (const [s, o] of Symbol.iterator in e || Array.isArray(e) ? e : new n(e)) r.set(s, o)
  return r
}
async function Wr(e, t) {
  if (t)
    if (Array.isArray(t)) for (const n of t) await n(e)
    else await t(e)
}
const Ag = new Set([408, 409, 425, 429, 500, 502, 503, 504]),
  Pg = new Set([101, 204, 205, 304])
function Hu(e = {}) {
  const {
    fetch: t = globalThis.fetch,
    Headers: n = globalThis.Headers,
    AbortController: r = globalThis.AbortController,
  } = e
  async function s(a) {
    const l = (a.error && a.error.name === 'AbortError' && !a.options.timeout) || !1
    if (a.options.retry !== !1 && !l) {
      let c
      typeof a.options.retry == 'number'
        ? (c = a.options.retry)
        : (c = Fa(a.options.method) ? 0 : 1)
      const f = (a.response && a.response.status) || 500
      if (
        c > 0 &&
        (Array.isArray(a.options.retryStatusCodes)
          ? a.options.retryStatusCodes.includes(f)
          : Ag.has(f))
      ) {
        const d =
          typeof a.options.retryDelay == 'function'
            ? a.options.retryDelay(a)
            : a.options.retryDelay || 0
        return (
          d > 0 && (await new Promise((h) => setTimeout(h, d))),
          o(a.request, { ...a.options, retry: c - 1 })
        )
      }
    }
    const u = Eg(a)
    throw (Error.captureStackTrace && Error.captureStackTrace(u, o), u)
  }
  const o = async function (l, u = {}) {
      const c = { request: l, options: Lg(l, u, e.defaults, n), response: void 0, error: void 0 }
      if (
        (c.options.method && (c.options.method = c.options.method.toUpperCase()),
        c.options.onRequest &&
          (await Wr(c, c.options.onRequest),
          c.options.headers instanceof n || (c.options.headers = new n(c.options.headers || {}))),
        typeof c.request == 'string' &&
          (c.options.baseURL && (c.request = mg(c.request, c.options.baseURL)),
          c.options.query && ((c.request = Fs(c.request, c.options.query)), delete c.options.query),
          'query' in c.options && delete c.options.query,
          'params' in c.options && delete c.options.params),
        c.options.body && Fa(c.options.method))
      )
        if (Cg(c.options.body)) {
          const h = c.options.headers.get('content-type')
          ;(typeof c.options.body != 'string' &&
            (c.options.body =
              h === 'application/x-www-form-urlencoded'
                ? new URLSearchParams(c.options.body).toString()
                : JSON.stringify(c.options.body)),
            h || c.options.headers.set('content-type', 'application/json'),
            c.options.headers.has('accept') || c.options.headers.set('accept', 'application/json'))
        } else
          (('pipeTo' in c.options.body && typeof c.options.body.pipeTo == 'function') ||
            typeof c.options.body.pipe == 'function') &&
            ('duplex' in c.options || (c.options.duplex = 'half'))
      let f
      if (!c.options.signal && c.options.timeout) {
        const h = new r()
        ;((f = setTimeout(() => {
          const E = new Error('[TimeoutError]: The operation was aborted due to timeout')
          ;((E.name = 'TimeoutError'), (E.code = 23), h.abort(E))
        }, c.options.timeout)),
          (c.options.signal = h.signal))
      }
      try {
        c.response = await t(c.request, c.options)
      } catch (h) {
        return (
          (c.error = h),
          c.options.onRequestError && (await Wr(c, c.options.onRequestError)),
          await s(c)
        )
      } finally {
        f && clearTimeout(f)
      }
      if (
        (c.response.body || c.response._bodyInit) &&
        !Pg.has(c.response.status) &&
        c.options.method !== 'HEAD'
      ) {
        const h =
          (c.options.parseResponse ? 'json' : c.options.responseType) ||
          Sg(c.response.headers.get('content-type') || '')
        switch (h) {
          case 'json': {
            const E = await c.response.text(),
              g = c.options.parseResponse || Er
            c.response._data = g(E)
            break
          }
          case 'stream': {
            c.response._data = c.response.body || c.response._bodyInit
            break
          }
          default:
            c.response._data = await c.response[h]()
        }
      }
      return (
        c.options.onResponse && (await Wr(c, c.options.onResponse)),
        !c.options.ignoreResponseError && c.response.status >= 400 && c.response.status < 600
          ? (c.options.onResponseError && (await Wr(c, c.options.onResponseError)), await s(c))
          : c.response
      )
    },
    i = async function (l, u) {
      return (await o(l, u))._data
    }
  return (
    (i.raw = o),
    (i.native = (...a) => t(...a)),
    (i.create = (a = {}, l = {}) =>
      Hu({ ...e, ...l, defaults: { ...e.defaults, ...l.defaults, ...a } })),
    i
  )
}
const hs = (function () {
    if (typeof globalThis < 'u') return globalThis
    if (typeof self < 'u') return self
    if (typeof window < 'u') return window
    if (typeof global < 'u') return global
    throw new Error('unable to locate global object')
  })(),
  Og = hs.fetch
    ? (...e) => hs.fetch(...e)
    : () => Promise.reject(new Error('[ofetch] global.fetch is not supported!')),
  Ig = hs.Headers,
  Ng = hs.AbortController,
  xg = Hu({ fetch: Og, Headers: Ig, AbortController: Ng }),
  Mg = xg,
  Dg = () => window?.__NUXT__?.config || window?.useNuxtApp?.().payload?.config,
  Ai = () => Dg().app,
  Fg = () => Ai().baseURL,
  Hg = () => Ai().buildAssetsDir,
  Pi = (...e) => Du($u(), Hg(), ...e),
  $u = (...e) => {
    const t = Ai(),
      n = t.cdnURL || t.baseURL
    return e.length ? Du(n, ...e) : n
  }
;((globalThis.__buildAssetsURL = Pi), (globalThis.__publicAssetsURL = $u))
globalThis.$fetch || (globalThis.$fetch = Mg.create({ baseURL: Fg() }))
'global' in globalThis || (globalThis.global = globalThis)
function jo(e, t = {}, n) {
  for (const r in e) {
    const s = e[r],
      o = n ? `${n}:${r}` : r
    typeof s == 'object' && s !== null ? jo(s, t, o) : typeof s == 'function' && (t[o] = s)
  }
  return t
}
const $g = { run: (e) => e() },
  Ug = () => $g,
  Uu = typeof console.createTask < 'u' ? console.createTask : Ug
function jg(e, t) {
  const n = t.shift(),
    r = Uu(n)
  return e.reduce((s, o) => s.then(() => r.run(() => o(...t))), Promise.resolve())
}
function Bg(e, t) {
  const n = t.shift(),
    r = Uu(n)
  return Promise.all(e.map((s) => r.run(() => s(...t))))
}
function co(e, t) {
  for (const n of [...e]) n(t)
}
let Wg = class {
  constructor() {
    ;((this._hooks = {}),
      (this._before = void 0),
      (this._after = void 0),
      (this._deprecatedMessages = void 0),
      (this._deprecatedHooks = {}),
      (this.hook = this.hook.bind(this)),
      (this.callHook = this.callHook.bind(this)),
      (this.callHookWith = this.callHookWith.bind(this)))
  }
  hook(t, n, r = {}) {
    if (!t || typeof n != 'function') return () => {}
    const s = t
    let o
    for (; this._deprecatedHooks[t]; ) ((o = this._deprecatedHooks[t]), (t = o.to))
    if (o && !r.allowDeprecated) {
      let i = o.message
      ;(i || (i = `${s} hook has been deprecated` + (o.to ? `, please use ${o.to}` : '')),
        this._deprecatedMessages || (this._deprecatedMessages = new Set()),
        this._deprecatedMessages.has(i) || (console.warn(i), this._deprecatedMessages.add(i)))
    }
    if (!n.name)
      try {
        Object.defineProperty(n, 'name', {
          get: () => '_' + t.replace(/\W+/g, '_') + '_hook_cb',
          configurable: !0,
        })
      } catch {}
    return (
      (this._hooks[t] = this._hooks[t] || []),
      this._hooks[t].push(n),
      () => {
        n && (this.removeHook(t, n), (n = void 0))
      }
    )
  }
  hookOnce(t, n) {
    let r,
      s = (...o) => (typeof r == 'function' && r(), (r = void 0), (s = void 0), n(...o))
    return ((r = this.hook(t, s)), r)
  }
  removeHook(t, n) {
    if (this._hooks[t]) {
      const r = this._hooks[t].indexOf(n)
      ;(r !== -1 && this._hooks[t].splice(r, 1),
        this._hooks[t].length === 0 && delete this._hooks[t])
    }
  }
  deprecateHook(t, n) {
    this._deprecatedHooks[t] = typeof n == 'string' ? { to: n } : n
    const r = this._hooks[t] || []
    delete this._hooks[t]
    for (const s of r) this.hook(t, s)
  }
  deprecateHooks(t) {
    Object.assign(this._deprecatedHooks, t)
    for (const n in t) this.deprecateHook(n, t[n])
  }
  addHooks(t) {
    const n = jo(t),
      r = Object.keys(n).map((s) => this.hook(s, n[s]))
    return () => {
      for (const s of r.splice(0, r.length)) s()
    }
  }
  removeHooks(t) {
    const n = jo(t)
    for (const r in n) this.removeHook(r, n[r])
  }
  removeAllHooks() {
    for (const t in this._hooks) delete this._hooks[t]
  }
  callHook(t, ...n) {
    return (n.unshift(t), this.callHookWith(jg, t, ...n))
  }
  callHookParallel(t, ...n) {
    return (n.unshift(t), this.callHookWith(Bg, t, ...n))
  }
  callHookWith(t, n, ...r) {
    const s = this._before || this._after ? { name: n, args: r, context: {} } : void 0
    this._before && co(this._before, s)
    const o = t(n in this._hooks ? [...this._hooks[n]] : [], r)
    return o instanceof Promise
      ? o.finally(() => {
          this._after && s && co(this._after, s)
        })
      : (this._after && s && co(this._after, s), o)
  }
  beforeEach(t) {
    return (
      (this._before = this._before || []),
      this._before.push(t),
      () => {
        if (this._before !== void 0) {
          const n = this._before.indexOf(t)
          n !== -1 && this._before.splice(n, 1)
        }
      }
    )
  }
  afterEach(t) {
    return (
      (this._after = this._after || []),
      this._after.push(t),
      () => {
        if (this._after !== void 0) {
          const n = this._after.indexOf(t)
          n !== -1 && this._after.splice(n, 1)
        }
      }
    )
  }
}
function Vg() {
  return new Wg()
}
function Kg(e = {}) {
  let t,
    n = !1
  const r = (i) => {
    if (t && t !== i) throw new Error('Context conflict')
  }
  let s
  if (e.asyncContext) {
    const i = e.AsyncLocalStorage || globalThis.AsyncLocalStorage
    i ? (s = new i()) : console.warn('[unctx] `AsyncLocalStorage` is not provided.')
  }
  const o = () => {
    if (s) {
      const i = s.getStore()
      if (i !== void 0) return i
    }
    return t
  }
  return {
    use: () => {
      const i = o()
      if (i === void 0) throw new Error('Context is not available')
      return i
    },
    tryUse: () => o(),
    set: (i, a) => {
      ;(a || r(i), (t = i), (n = !0))
    },
    unset: () => {
      ;((t = void 0), (n = !1))
    },
    call: (i, a) => {
      ;(r(i), (t = i))
      try {
        return s ? s.run(i, a) : a()
      } finally {
        n || (t = void 0)
      }
    },
    async callAsync(i, a) {
      t = i
      const l = () => {
          t = i
        },
        u = () => (t === i ? l : void 0)
      Bo.add(u)
      try {
        const c = s ? s.run(i, a) : a()
        return (n || (t = void 0), await c)
      } finally {
        Bo.delete(u)
      }
    },
  }
}
function Gg(e = {}) {
  const t = {}
  return {
    get(n, r = {}) {
      return (t[n] || (t[n] = Kg({ ...e, ...r })), t[n])
    },
  }
}
const ps =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof global < 'u'
          ? global
          : typeof window < 'u'
            ? window
            : {},
  Ha = '__unctx__',
  qg = ps[Ha] || (ps[Ha] = Gg()),
  Yg = (e, t = {}) => qg.get(e, t),
  $a = '__unctx_async_handlers__',
  Bo = ps[$a] || (ps[$a] = new Set())
function Cn(e) {
  const t = []
  for (const s of Bo) {
    const o = s()
    o && t.push(o)
  }
  const n = () => {
    for (const s of t) s()
  }
  let r = e()
  return (
    r &&
      typeof r == 'object' &&
      'catch' in r &&
      (r = r.catch((s) => {
        throw (n(), s)
      })),
    [r, n]
  )
}
const Ua = !1,
  Jg = !1,
  ja = { id: '__nuxt-loader' },
  E0 = { componentName: 'NuxtLink', prefetch: !0, prefetchOn: { visibility: !0 } },
  Xg = '#__nuxt',
  ju = 'nuxt-app',
  Ba = 36e5,
  Qg = 'vite:preloadError'
function Bu(e = ju) {
  return Yg(e, { asyncContext: !1 })
}
const zg = '__nuxt_plugin'
function Zg(e) {
  let t = 0
  const n = {
    _id: e.id || ju || 'nuxt-app',
    _scope: pi(),
    provide: void 0,
    versions: {
      get nuxt() {
        return '4.3.1'
      },
      get vue() {
        return n.vueApp.version
      },
    },
    payload: Bt({
      ...(e.ssrContext?.payload || {}),
      data: Bt({}),
      state: an({}),
      once: new Set(),
      _errors: Bt({}),
    }),
    static: { data: {} },
    runWithContext(s) {
      return n._scope.active && !Ss() ? n._scope.run(() => Wa(n, s)) : Wa(n, s)
    },
    isHydrating: !0,
    deferHydration() {
      if (!n.isHydrating) return () => {}
      t++
      let s = !1
      return () => {
        if (!s && ((s = !0), t--, t === 0))
          return ((n.isHydrating = !1), n.callHook('app:suspense:resolve'))
      }
    },
    _asyncDataPromises: {},
    _asyncData: Bt({}),
    _payloadRevivers: {},
    ...e,
  }
  {
    const s = window.__NUXT__
    if (s)
      for (const o in s)
        switch (o) {
          case 'data':
          case 'state':
          case '_errors':
            Object.assign(n.payload[o], s[o])
            break
          default:
            n.payload[o] = s[o]
        }
  }
  ;((n.hooks = Vg()),
    (n.hook = n.hooks.hook),
    (n.callHook = n.hooks.callHook),
    (n.provide = (s, o) => {
      const i = '$' + s
      ;(Vr(n, i, o), Vr(n.vueApp.config.globalProperties, i, o))
    }),
    Vr(n.vueApp, '$nuxt', n),
    Vr(n.vueApp.config.globalProperties, '$nuxt', n))
  {
    ;(window.addEventListener(Qg, (o) => {
      ;(n.callHook('app:chunkError', { error: o.payload }),
        o.payload.message.includes('Unable to preload CSS') && o.preventDefault())
    }),
      (window.useNuxtApp ||= fe))
    const s = n.hook('app:error', (...o) => {
      console.error('[nuxt] error caught during app initialization', ...o)
    })
    n.hook('app:mounted', s)
  }
  const r = n.payload.config
  return (n.provide('config', r), n)
}
function em(e, t) {
  t.hooks && e.hooks.addHooks(t.hooks)
}
async function tm(e, t) {
  if (typeof t == 'function') {
    const { provide: n } = (await e.runWithContext(() => t(e))) || {}
    if (n && typeof n == 'object') for (const r in n) e.provide(r, n[r])
  }
}
async function nm(e, t) {
  const n = new Set(),
    r = [],
    s = []
  let o,
    i = 0
  async function a(l) {
    const u = l.dependsOn?.filter((c) => t.some((f) => f._name === c) && !n.has(c)) ?? []
    if (u.length > 0) r.push([new Set(u), l])
    else {
      const c = tm(e, l)
        .then(async () => {
          l._name &&
            (n.add(l._name),
            await Promise.all(
              r.map(async ([f, d]) => {
                f.has(l._name) && (f.delete(l._name), f.size === 0 && (i++, await a(d)))
              })
            ))
        })
        .catch((f) => {
          if (!l.parallel && !e.payload.error) throw f
          o ||= f
        })
      l.parallel ? s.push(c) : await c
    }
  }
  for (const l of t) em(e, l)
  for (const l of t) await a(l)
  if ((await Promise.all(s), i)) for (let l = 0; l < i; l++) await Promise.all(s)
  if (o) throw e.payload.error || o
}
function Qe(e) {
  if (typeof e == 'function') return e
  const t = e._name || e.name
  return (delete e.name, Object.assign(e.setup || (() => {}), e, { [zg]: !0, _name: t }))
}
function Wa(e, t, n) {
  const r = () => t()
  return (Bu(e._id).set(e), e.vueApp.runWithContext(r))
}
function rm(e) {
  let t
  return (Ps() && (t = Ln()?.appContext.app.$nuxt), (t ||= Bu(e).tryUse()), t || null)
}
function fe(e) {
  const t = rm(e)
  if (!t) throw new Error('[nuxt] instance unavailable')
  return t
}
function xr(e) {
  return fe().$config
}
function Vr(e, t, n) {
  Object.defineProperty(e, t, { get: () => n })
}
function uo(e) {
  if (e === null || typeof e != 'object') return !1
  const t = Object.getPrototypeOf(e)
  return (t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null) ||
    Symbol.iterator in e
    ? !1
    : Symbol.toStringTag in e
      ? Object.prototype.toString.call(e) === '[object Module]'
      : !0
}
function Wo(e, t, n = '.', r) {
  if (!uo(t)) return Wo(e, {}, n, r)
  const s = Object.assign({}, t)
  for (const o in e) {
    if (o === '__proto__' || o === 'constructor') continue
    const i = e[o]
    i != null &&
      ((r && r(s, o, i, n)) ||
        (Array.isArray(i) && Array.isArray(s[o])
          ? (s[o] = [...i, ...s[o]])
          : uo(i) && uo(s[o])
            ? (s[o] = Wo(i, s[o], (n ? `${n}.` : '') + o.toString(), r))
            : (s[o] = i)))
  }
  return s
}
function Wu(e) {
  return (...t) => t.reduce((n, r) => Wo(n, r, '', e), {})
}
const Vu = Wu()
function sm(e, t) {
  try {
    return t in e
  } catch {
    return !1
  }
}
class Va extends Error {
  static __h3_error__ = !0
  statusCode = 500
  fatal = !1
  unhandled = !1
  statusMessage
  data
  cause
  constructor(t, n = {}) {
    ;(super(t, n), n.cause && !this.cause && (this.cause = n.cause))
  }
  toJSON() {
    const t = { message: this.message, statusCode: Vo(this.statusCode, 500) }
    return (
      this.statusMessage && (t.statusMessage = Ku(this.statusMessage)),
      this.data !== void 0 && (t.data = this.data),
      t
    )
  }
}
function om(e) {
  if (typeof e == 'string') return new Va(e)
  if (im(e)) return e
  const t = new Va(e.message ?? e.statusMessage ?? '', { cause: e.cause || e })
  if (sm(e, 'stack'))
    try {
      Object.defineProperty(t, 'stack', {
        get() {
          return e.stack
        },
      })
    } catch {
      try {
        t.stack = e.stack
      } catch {}
    }
  if (
    (e.data && (t.data = e.data),
    e.statusCode
      ? (t.statusCode = Vo(e.statusCode, t.statusCode))
      : e.status && (t.statusCode = Vo(e.status, t.statusCode)),
    e.statusMessage
      ? (t.statusMessage = e.statusMessage)
      : e.statusText && (t.statusMessage = e.statusText),
    t.statusMessage)
  ) {
    const n = t.statusMessage
    Ku(t.statusMessage) !== n &&
      console.warn(
        '[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.'
      )
  }
  return (
    e.fatal !== void 0 && (t.fatal = e.fatal),
    e.unhandled !== void 0 && (t.unhandled = e.unhandled),
    t
  )
}
function im(e) {
  return e?.constructor?.__h3_error__ === !0
}
const am = /[^\u0009\u0020-\u007E]/g
function Ku(e = '') {
  return e.replace(am, '')
}
function Vo(e, t = 200) {
  return !e || (typeof e == 'string' && (e = Number.parseInt(e, 10)), e < 100 || e > 999) ? t : e
}
const lm = Symbol('layout-meta'),
  Hs = Symbol('route')
import.meta.url.replace(/\/app\/.*$/, '/')
const ot = () => fe()?.$router,
  Oi = () => (Ps() ? qe(Hs, fe()._route) : fe()._route)
const cm = () => {
    try {
      if (fe()._processingMiddleware) return !0
    } catch {
      return !1
    }
    return !1
  },
  w0 = (e, t) => {
    e ||= '/'
    const n = typeof e == 'string' ? e : 'path' in e ? um(e) : ot().resolve(e).href
    if (t?.open) {
      const { target: u = '_blank', windowFeatures: c = {} } = t.open,
        f = []
      for (const [d, h] of Object.entries(c)) h !== void 0 && f.push(`${d.toLowerCase()}=${h}`)
      return (open(n, u, f.join(', ')), Promise.resolve())
    }
    const r = Nt(n, { acceptRelative: !0 }),
      s = t?.external || r
    if (s) {
      if (!t?.external)
        throw new Error(
          'Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.'
        )
      const { protocol: u } = new URL(n, window.location.href)
      if (u && pg(u)) throw new Error(`Cannot navigate to a URL with '${u}' protocol.`)
    }
    const o = cm()
    if (!s && o) {
      if (t?.replace) {
        if (typeof e == 'string') {
          const { pathname: u, search: c, hash: f } = ki(e)
          return { path: u, ...(c && { query: Li(c) }), ...(f && { hash: f }), replace: !0 }
        }
        return { ...e, replace: !0 }
      }
      return e
    }
    const i = ot(),
      a = fe()
    if (s)
      return (
        a._scope.stop(),
        t?.replace ? location.replace(n) : (location.href = n),
        o ? (a.isHydrating ? new Promise(() => {}) : !1) : Promise.resolve()
      )
    const l = typeof e == 'string' ? fm(e) : e
    return t?.replace ? i.replace(l) : i.push(l)
  }
function um(e) {
  return Fs(e.path || '', e.query || {}) + (e.hash || '')
}
function fm(e) {
  const t = ki(e)
  return ng(rg(t.pathname)) + t.search + t.hash
}
const Gu = '__nuxt_error',
  $s = () => Pc(fe().payload, 'error'),
  _n = (e) => {
    const t = Rn(e)
    try {
      const n = $s()
      ;(fe().hooks.callHook('app:error', t), (n.value ||= t))
    } catch {
      throw t
    }
    return t
  },
  dm = async (e = {}) => {
    const t = fe(),
      n = $s()
    ;(t.callHook('app:error:cleared', e),
      e.redirect && (await ot().replace(e.redirect)),
      (n.value = void 0))
  },
  qu = (e) => !!e && typeof e == 'object' && Gu in e,
  Rn = (e) => {
    typeof e != 'string' && e.statusText && (e.message ??= e.statusText)
    const t = om(e)
    return (
      Object.defineProperty(t, Gu, { value: !0, configurable: !1, writable: !1 }),
      Object.defineProperty(t, 'status', { get: () => t.statusCode, configurable: !0 }),
      Object.defineProperty(t, 'statusText', { get: () => t.statusMessage, configurable: !0 }),
      t
    )
  }
function hm(e) {
  const t = gm(e),
    n = new ArrayBuffer(t.length),
    r = new DataView(n)
  for (let s = 0; s < n.byteLength; s++) r.setUint8(s, t.charCodeAt(s))
  return n
}
const pm = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
function gm(e) {
  e.length % 4 === 0 && (e = e.replace(/==?$/, ''))
  let t = '',
    n = 0,
    r = 0
  for (let s = 0; s < e.length; s++)
    ((n <<= 6),
      (n |= pm.indexOf(e[s])),
      (r += 6),
      r === 24 &&
        ((t += String.fromCharCode((n & 16711680) >> 16)),
        (t += String.fromCharCode((n & 65280) >> 8)),
        (t += String.fromCharCode(n & 255)),
        (n = r = 0)))
  return (
    r === 12
      ? ((n >>= 4), (t += String.fromCharCode(n)))
      : r === 18 &&
        ((n >>= 2),
        (t += String.fromCharCode((n & 65280) >> 8)),
        (t += String.fromCharCode(n & 255))),
    t
  )
}
const mm = -1,
  _m = -2,
  ym = -3,
  bm = -4,
  vm = -5,
  Em = -6,
  wm = -7
function Cm(e, t) {
  return Rm(JSON.parse(e), t)
}
function Rm(e, t) {
  if (typeof e == 'number') return o(e, !0)
  if (!Array.isArray(e) || e.length === 0) throw new Error('Invalid input')
  const n = e,
    r = Array(n.length)
  let s = null
  function o(i, a = !1) {
    if (i === mm) return
    if (i === ym) return NaN
    if (i === bm) return 1 / 0
    if (i === vm) return -1 / 0
    if (i === Em) return -0
    if (a || typeof i != 'number') throw new Error('Invalid input')
    if (i in r) return r[i]
    const l = n[i]
    if (!l || typeof l != 'object') r[i] = l
    else if (Array.isArray(l))
      if (typeof l[0] == 'string') {
        const u = l[0],
          c = t && Object.hasOwn(t, u) ? t[u] : void 0
        if (c) {
          let f = l[1]
          if ((typeof f != 'number' && (f = n.push(l[1]) - 1), (s ??= new Set()), s.has(f)))
            throw new Error('Invalid circular reference')
          return (s.add(f), (r[i] = c(o(f))), s.delete(f), r[i])
        }
        switch (u) {
          case 'Date':
            r[i] = new Date(l[1])
            break
          case 'Set':
            const f = new Set()
            r[i] = f
            for (let g = 1; g < l.length; g += 1) f.add(o(l[g]))
            break
          case 'Map':
            const d = new Map()
            r[i] = d
            for (let g = 1; g < l.length; g += 2) d.set(o(l[g]), o(l[g + 1]))
            break
          case 'RegExp':
            r[i] = new RegExp(l[1], l[2])
            break
          case 'Object':
            const h = Object(l[1])
            if (Object.hasOwn(h, '__proto__'))
              throw new Error('Cannot parse an object with a `__proto__` property')
            r[i] = h
            break
          case 'BigInt':
            r[i] = BigInt(l[1])
            break
          case 'null':
            const E = Object.create(null)
            r[i] = E
            for (let g = 1; g < l.length; g += 2) {
              if (l[g] === '__proto__')
                throw new Error('Cannot parse an object with a `__proto__` property')
              E[l[g]] = o(l[g + 1])
            }
            break
          case 'Int8Array':
          case 'Uint8Array':
          case 'Uint8ClampedArray':
          case 'Int16Array':
          case 'Uint16Array':
          case 'Int32Array':
          case 'Uint32Array':
          case 'Float32Array':
          case 'Float64Array':
          case 'BigInt64Array':
          case 'BigUint64Array': {
            if (n[l[1]][0] !== 'ArrayBuffer') throw new Error('Invalid data')
            const g = globalThis[u],
              R = o(l[1]),
              y = new g(R)
            r[i] = l[2] !== void 0 ? y.subarray(l[2], l[3]) : y
            break
          }
          case 'ArrayBuffer': {
            const g = l[1]
            if (typeof g != 'string') throw new Error('Invalid ArrayBuffer encoding')
            const R = hm(g)
            r[i] = R
            break
          }
          case 'Temporal.Duration':
          case 'Temporal.Instant':
          case 'Temporal.PlainDate':
          case 'Temporal.PlainTime':
          case 'Temporal.PlainDateTime':
          case 'Temporal.PlainMonthDay':
          case 'Temporal.PlainYearMonth':
          case 'Temporal.ZonedDateTime': {
            const g = u.slice(9)
            r[i] = Temporal[g].from(l[1])
            break
          }
          case 'URL': {
            const g = new URL(l[1])
            r[i] = g
            break
          }
          case 'URLSearchParams': {
            const g = new URLSearchParams(l[1])
            r[i] = g
            break
          }
          default:
            throw new Error(`Unknown type ${u}`)
        }
      } else if (l[0] === wm) {
        const u = l[1]
        if (!Number.isInteger(u) || u < 0) throw new Error('Invalid input')
        const c = new Array(u)
        r[i] = c
        for (let f = 2; f < l.length; f += 2) {
          const d = l[f]
          if (!Number.isInteger(d) || d < 0 || d >= u) throw new Error('Invalid input')
          c[d] = o(l[f + 1])
        }
      } else {
        const u = new Array(l.length)
        r[i] = u
        for (let c = 0; c < l.length; c += 1) {
          const f = l[c]
          f !== _m && (u[c] = o(f))
        }
      }
    else {
      const u = {}
      r[i] = u
      for (const c of Object.keys(l)) {
        if (c === '__proto__') throw new Error('Cannot parse an object with a `__proto__` property')
        const f = l[c]
        u[c] = o(f)
      }
    }
    return r[i]
  }
  return o(0)
}
const Tm = new Set(['link', 'style', 'script', 'noscript']),
  Sm = new Set(['title', 'titleTemplate', 'script', 'style', 'noscript']),
  Ko = new Set(['base', 'meta', 'link', 'style', 'script', 'noscript']),
  Lm = new Set([
    'title',
    'base',
    'htmlAttrs',
    'bodyAttrs',
    'meta',
    'link',
    'style',
    'script',
    'noscript',
  ]),
  km = new Set(['base', 'title', 'titleTemplate', 'bodyAttrs', 'htmlAttrs', 'templateParams']),
  Am = new Set([
    'key',
    'tagPosition',
    'tagPriority',
    'tagDuplicateStrategy',
    'innerHTML',
    'textContent',
    'processTemplateParams',
  ]),
  Pm = new Set(['templateParams', 'htmlAttrs', 'bodyAttrs']),
  Om = new Set([
    'theme-color',
    'google-site-verification',
    'og',
    'article',
    'book',
    'profile',
    'twitter',
    'author',
  ])
function Go(e, t = {}, n) {
  for (const r in e) {
    const s = e[r],
      o = n ? `${n}:${r}` : r
    typeof s == 'object' && s !== null ? Go(s, t, o) : typeof s == 'function' && (t[o] = s)
  }
  return t
}
const Yu = (() => {
  if (console.createTask) return console.createTask
  const e = { run: (t) => t() }
  return () => e
})()
function Ju(e, t, n, r) {
  for (let s = n; s < e.length; s += 1)
    try {
      const o = r ? r.run(() => e[s](...t)) : e[s](...t)
      if (o instanceof Promise) return o.then(() => Ju(e, t, s + 1, r))
    } catch (o) {
      return Promise.reject(o)
    }
}
function Im(e, t, n) {
  if (e.length > 0) return Ju(e, t, 0, Yu(n))
}
function Nm(e, t, n) {
  if (e.length > 0) {
    const r = Yu(n)
    return Promise.all(e.map((s) => r.run(() => s(...t))))
  }
}
function fo(e, t) {
  for (const n of [...e]) n(t)
}
var xm = class {
  _hooks
  _before
  _after
  _deprecatedHooks
  _deprecatedMessages
  constructor() {
    ;((this._hooks = {}),
      (this._before = void 0),
      (this._after = void 0),
      (this._deprecatedMessages = void 0),
      (this._deprecatedHooks = {}),
      (this.hook = this.hook.bind(this)),
      (this.callHook = this.callHook.bind(this)),
      (this.callHookWith = this.callHookWith.bind(this)))
  }
  hook(e, t, n = {}) {
    if (!e || typeof t != 'function') return () => {}
    const r = e
    let s
    for (; this._deprecatedHooks[e]; ) ((s = this._deprecatedHooks[e]), (e = s.to))
    if (s && !n.allowDeprecated) {
      let o = s.message
      ;(o || (o = `${r} hook has been deprecated` + (s.to ? `, please use ${s.to}` : '')),
        this._deprecatedMessages || (this._deprecatedMessages = new Set()),
        this._deprecatedMessages.has(o) || (console.warn(o), this._deprecatedMessages.add(o)))
    }
    if (!t.name)
      try {
        Object.defineProperty(t, 'name', {
          get: () => '_' + e.replace(/\W+/g, '_') + '_hook_cb',
          configurable: !0,
        })
      } catch {}
    return (
      (this._hooks[e] = this._hooks[e] || []),
      this._hooks[e].push(t),
      () => {
        t && (this.removeHook(e, t), (t = void 0))
      }
    )
  }
  hookOnce(e, t) {
    let n,
      r = (...s) => (typeof n == 'function' && n(), (n = void 0), (r = void 0), t(...s))
    return ((n = this.hook(e, r)), n)
  }
  removeHook(e, t) {
    const n = this._hooks[e]
    if (n) {
      const r = n.indexOf(t)
      ;(r !== -1 && n.splice(r, 1), n.length === 0 && (this._hooks[e] = void 0))
    }
  }
  deprecateHook(e, t) {
    this._deprecatedHooks[e] = typeof t == 'string' ? { to: t } : t
    const n = this._hooks[e] || []
    this._hooks[e] = void 0
    for (const r of n) this.hook(e, r)
  }
  deprecateHooks(e) {
    for (const t in e) this.deprecateHook(t, e[t])
  }
  addHooks(e) {
    const t = Go(e),
      n = Object.keys(t).map((r) => this.hook(r, t[r]))
    return () => {
      for (const r of n) r()
      n.length = 0
    }
  }
  removeHooks(e) {
    const t = Go(e)
    for (const n in t) this.removeHook(n, t[n])
  }
  removeAllHooks() {
    this._hooks = {}
  }
  callHook(e, ...t) {
    return this.callHookWith(Im, e, t)
  }
  callHookParallel(e, ...t) {
    return this.callHookWith(Nm, e, t)
  }
  callHookWith(e, t, n) {
    const r = this._before || this._after ? { name: t, args: n, context: {} } : void 0
    this._before && fo(this._before, r)
    const s = e(this._hooks[t] ? [...this._hooks[t]] : [], n, t)
    return s instanceof Promise
      ? s.finally(() => {
          this._after && r && fo(this._after, r)
        })
      : (this._after && r && fo(this._after, r), s)
  }
  beforeEach(e) {
    return (
      (this._before = this._before || []),
      this._before.push(e),
      () => {
        if (this._before !== void 0) {
          const t = this._before.indexOf(e)
          t !== -1 && this._before.splice(t, 1)
        }
      }
    )
  }
  afterEach(e) {
    return (
      (this._after = this._after || []),
      this._after.push(e),
      () => {
        if (this._after !== void 0) {
          const t = this._after.indexOf(e)
          t !== -1 && this._after.splice(t, 1)
        }
      }
    )
  }
}
function Mm() {
  return new xm()
}
const Dm = ['name', 'property', 'http-equiv'],
  Fm = new Set(['viewport', 'description', 'keywords', 'robots'])
function Xu(e) {
  const t = e.split(':')
  return t.length ? Om.has(t[1]) : !1
}
function qo(e) {
  const { props: t, tag: n } = e
  if (km.has(n)) return n
  if (n === 'link' && t.rel === 'canonical') return 'canonical'
  if (n === 'link' && t.rel === 'alternate') {
    const r = t.hreflang || t.type
    if (r) return `alternate:${r}`
  }
  if (t.charset) return 'charset'
  if (e.tag === 'meta') {
    for (const r of Dm)
      if (t[r] !== void 0) {
        const s = t[r],
          o = s && typeof s == 'string' && s.includes(':'),
          i = s && Fm.has(s),
          l = !(o || i) && e.key ? `:key:${e.key}` : ''
        return `${n}:${s}${l}`
      }
  }
  if (e.key) return `${n}:key:${e.key}`
  if (t.id) return `${n}:id:${t.id}`
  if (n === 'link' && t.rel === 'alternate') return `alternate:${t.href || ''}`
  if (Sm.has(n)) {
    const r = e.textContent || e.innerHTML
    if (r) return `${n}:content:${r}`
  }
}
function Qu(e) {
  const t = e._h || e._d
  if (t) return t
  const n = e.textContent || e.innerHTML
  return (
    n ||
    `${e.tag}:${Object.entries(e.props)
      .map(([r, s]) => `${r}:${String(s)}`)
      .join(',')}`
  )
}
function gs(e, t, n) {
  typeof e === 'function' &&
    (!n || (n !== 'titleTemplate' && !(n[0] === 'o' && n[1] === 'n'))) &&
    (e = e())
  const s = t ? t(n, e) : e
  if (Array.isArray(s)) return s.map((o) => gs(o, t))
  if (s?.constructor === Object) {
    const o = {}
    for (const i of Object.keys(s)) o[i] = gs(s[i], t, i)
    return o
  }
  return s
}
function Hm(e, t) {
  const n = e === 'style' ? new Map() : new Set()
  function r(s) {
    if (s == null || s === void 0) return
    const o = String(s).trim()
    if (o)
      if (e === 'style') {
        const [i, ...a] = o.split(':').map((l) => (l ? l.trim() : ''))
        i && a.length && n.set(i, a.join(':'))
      } else
        o.split(' ')
          .filter(Boolean)
          .forEach((i) => n.add(i))
  }
  return (
    typeof t == 'string'
      ? e === 'style'
        ? t.split(';').forEach(r)
        : r(t)
      : Array.isArray(t)
        ? t.forEach((s) => r(s))
        : t &&
          typeof t == 'object' &&
          Object.entries(t).forEach(([s, o]) => {
            o && o !== 'false' && (e === 'style' ? n.set(String(s).trim(), String(o)) : r(s))
          }),
    n
  )
}
function zu(e, t) {
  if (((e.props = e.props || {}), !t)) return e
  if (e.tag === 'templateParams') return ((e.props = t), e)
  const n = Ko.has(e.tag) || e.tag === 'htmlAttrs' || e.tag === 'bodyAttrs'
  return (
    Object.entries(t).forEach(([r, s]) => {
      if (r === '__proto__' || r === 'constructor' || r === 'prototype') return
      if (s === null) {
        e.props[r] = null
        return
      }
      if (r === 'class' || r === 'style') {
        e.props[r] = Hm(r, s)
        return
      }
      if (Am.has(r)) {
        if ((r === 'textContent' || r === 'innerHTML') && typeof s == 'object') {
          let u = t.type
          if (
            (t.type || (u = 'application/json'), !u?.endsWith('json') && u !== 'speculationrules')
          )
            return
          ;((t.type = u), (e.props.type = u), (e[r] = JSON.stringify(s)))
        } else e[r] = s
        return
      }
      const o = r.startsWith('data-'),
        i = n && !o ? r.toLowerCase() : r,
        a = String(s),
        l = e.tag === 'meta' && i === 'content'
      a === 'true' || a === ''
        ? (e.props[i] = o || l ? a : !0)
        : !s && o && a === 'false'
          ? (e.props[i] = 'false')
          : s !== void 0 && (e.props[i] = s)
    }),
    e
  )
}
function $m(e, t) {
  const n =
      typeof t == 'object' && typeof t != 'function'
        ? t
        : {
            [e === 'script' || e === 'noscript' || e === 'style' ? 'innerHTML' : 'textContent']: t,
          },
    r = zu({ tag: e, props: {} }, n)
  return (
    r.key && Tm.has(r.tag) && (r.props['data-hid'] = r._h = r.key),
    r.tag === 'script' &&
      typeof r.innerHTML == 'object' &&
      ((r.innerHTML = JSON.stringify(r.innerHTML)),
      (r.props.type = r.props.type || 'application/json')),
    Array.isArray(r.props.content)
      ? r.props.content.map((s) => ({ ...r, props: { ...r.props, content: s } }))
      : r
  )
}
function Um(e, t) {
  if (!e) return []
  typeof e == 'function' && (e = e())
  const n = (s, o) => {
    for (let i = 0; i < t.length; i++) o = t[i](s, o)
    return o
  }
  e = n(void 0, e)
  const r = []
  return (
    (e = gs(e, n)),
    Object.entries(e || {}).forEach(([s, o]) => {
      if (o !== void 0) for (const i of Array.isArray(o) ? o : [o]) r.push($m(s, i))
    }),
    r.flat()
  )
}
const Ka = (e, t) => (e._w === t._w ? e._p - t._p : e._w - t._w),
  Ga = { base: -10, title: 10 },
  jm = { critical: -8, high: -1, low: 2 },
  qa = {
    meta: { 'content-security-policy': -30, charset: -20, viewport: -15 },
    link: {
      preconnect: 20,
      stylesheet: 60,
      preload: 70,
      modulepreload: 70,
      prefetch: 90,
      'dns-prefetch': 90,
      prerender: 90,
    },
    script: { async: 30, defer: 80, sync: 50 },
    style: { imported: 40, sync: 60 },
  },
  Bm = /@import/,
  sr = (e) => e === '' || e === !0
function Wm(e, t) {
  if (typeof t.tagPriority == 'number') return t.tagPriority
  let n = 100
  const r = jm[t.tagPriority] || 0,
    s = e.resolvedOptions.disableCapoSorting ? { link: {}, script: {}, style: {} } : qa
  if (t.tag in Ga) n = Ga[t.tag]
  else if (t.tag === 'meta') {
    const o =
      t.props['http-equiv'] === 'content-security-policy'
        ? 'content-security-policy'
        : t.props.charset
          ? 'charset'
          : t.props.name === 'viewport'
            ? 'viewport'
            : null
    o && (n = qa.meta[o])
  } else if (t.tag === 'link' && t.props.rel) n = s.link[t.props.rel]
  else if (t.tag === 'script') {
    const o = String(t.props.type)
    sr(t.props.async)
      ? (n = s.script.async)
      : (t.props.src &&
            !sr(t.props.defer) &&
            !sr(t.props.async) &&
            o !== 'module' &&
            !o.endsWith('json')) ||
          (t.innerHTML && !o.endsWith('json'))
        ? (n = s.script.sync)
        : ((sr(t.props.defer) && t.props.src && !sr(t.props.async)) || o === 'module') &&
          (n = s.script.defer)
  } else
    t.tag === 'style' && (n = t.innerHTML && Bm.test(t.innerHTML) ? s.style.imported : s.style.sync)
  return (n || 100) + r
}
function Ya(e, t) {
  const n = typeof t == 'function' ? t(e) : t,
    r = n.key || String(e.plugins.size + 1)
  e.plugins.get(r) || (e.plugins.set(r, n), e.hooks.addHooks(n.hooks || {}))
}
function Vm(e = {}) {
  const t = Mm()
  t.addHooks(e.hooks || {})
  const n = !e.document,
    r = new Map(),
    s = new Map(),
    o = new Set(),
    i = {
      _entryCount: 1,
      plugins: s,
      dirty: !1,
      resolvedOptions: e,
      hooks: t,
      ssr: n,
      entries: r,
      headEntries() {
        return [...r.values()]
      },
      use: (a) => Ya(i, a),
      push(a, l) {
        const u = { ...(l || {}) }
        delete u.head
        const c = u._index ?? i._entryCount++,
          f = { _i: c, input: a, options: u },
          d = {
            _poll(h = !1) {
              ;((i.dirty = !0), !h && o.add(c), t.callHook('entries:updated', i))
            },
            dispose() {
              r.delete(c) && i.invalidate()
            },
            patch(h) {
              ;(!u.mode || (u.mode === 'server' && n) || (u.mode === 'client' && !n)) &&
                ((f.input = h), r.set(c, f), d._poll())
            },
          }
        return (d.patch(a), d)
      },
      async resolveTags() {
        const a = { tagMap: new Map(), tags: [], entries: [...i.entries.values()] }
        for (await t.callHook('entries:resolve', a); o.size; ) {
          const d = o.values().next().value
          o.delete(d)
          const h = r.get(d)
          if (h) {
            const E = {
              tags: Um(h.input, e.propResolvers || []).map((g) => Object.assign(g, h.options)),
              entry: h,
            }
            ;(await t.callHook('entries:normalize', E),
              (h._tags = E.tags.map(
                (g, R) => (
                  (g._w = Wm(i, g)),
                  (g._p = (h._i << 10) + R),
                  (g._d = qo(g)),
                  g._d || (g._h = Qu(g)),
                  g
                )
              )))
          }
        }
        let l = !1
        a.entries
          .flatMap((d) => (d._tags || []).map((h) => ({ ...h, props: { ...h.props } })))
          .sort(Ka)
          .reduce((d, h) => {
            const E = h._d || h._h
            if (!d.has(E)) return d.set(E, h)
            const g = d.get(E)
            if (
              (h?.tagDuplicateStrategy ||
                (Pm.has(h.tag) ? 'merge' : null) ||
                (h.key && h.key === g.key ? 'merge' : null)) === 'merge'
            ) {
              const y = { ...g.props }
              ;(Object.entries(h.props).forEach(
                ([v, p]) =>
                  (y[v] =
                    v === 'style'
                      ? new Map([...(g.props.style || new Map()), ...p])
                      : v === 'class'
                        ? new Set([...(g.props.class || new Set()), ...p])
                        : p)
              ),
                d.set(E, { ...h, props: y }))
            } else
              h._p >> 10 === g._p >> 10 && h.tag === 'meta' && Xu(E)
                ? (d.set(E, Object.assign([...(Array.isArray(g) ? g : [g]), h], h)), (l = !0))
                : (h._w === g._w ? h._p > g._p : h?._w < g?._w) && d.set(E, h)
            return d
          }, a.tagMap)
        const u = a.tagMap.get('title'),
          c = a.tagMap.get('titleTemplate')
        if (((i._title = u?.textContent), c)) {
          const d = c?.textContent
          if (((i._titleTemplate = d), d)) {
            let h = typeof d == 'function' ? d(u?.textContent) : d
            ;(typeof h == 'string' &&
              !i.plugins.has('template-params') &&
              (h = h.replace('%s', u?.textContent || '')),
              u
                ? h === null
                  ? a.tagMap.delete('title')
                  : a.tagMap.set('title', { ...u, textContent: h })
                : ((c.tag = 'title'), (c.textContent = h)))
          }
        }
        ;((a.tags = Array.from(a.tagMap.values())),
          l && (a.tags = a.tags.flat().sort(Ka)),
          await t.callHook('tags:beforeResolve', a),
          await t.callHook('tags:resolve', a),
          await t.callHook('tags:afterResolve', a))
        const f = []
        for (const d of a.tags) {
          const { innerHTML: h, tag: E, props: g } = d
          if (
            Lm.has(E) &&
            !(Object.keys(g).length === 0 && !d.innerHTML && !d.textContent) &&
            !(E === 'meta' && !g.content && !g['http-equiv'] && !g.charset)
          ) {
            if (E === 'script' && h) {
              if (String(g.type).endsWith('json')) {
                const R = typeof h == 'string' ? h : JSON.stringify(h)
                d.innerHTML = R.replace(/</g, '\\u003C')
              } else
                typeof h == 'string' &&
                  (d.innerHTML = h.replace(new RegExp(`</${E}`, 'g'), `<\\/${E}`))
              d._d = qo(d)
            }
            f.push(d)
          }
        }
        return f
      },
      invalidate() {
        for (const a of r.values()) o.add(a._i)
        ;((i.dirty = !0), t.callHook('entries:updated', i))
      },
    }
  return (
    (e?.plugins || []).forEach((a) => Ya(i, a)),
    i.hooks.callHook('init', i),
    e.init?.forEach((a) => a && i.push(a)),
    i
  )
}
const Km = (e, t) => (Re(t) ? Vd(t) : t),
  Ii = 'usehead'
function Gm(e) {
  return {
    install(n) {
      ;((n.config.globalProperties.$unhead = e),
        (n.config.globalProperties.$head = e),
        n.provide(Ii, e))
    },
  }.install
}
function qm() {
  if (Ps()) {
    const e = qe(Ii)
    if (e) return e
  }
  throw new Error(
    'useHead() was called without provide context, ensure you call it through the setup() function.'
  )
}
function Ym(e, t = {}) {
  const n = t.head || qm()
  return n.ssr ? n.push(e || {}, t) : Jm(n, e, t)
}
function Jm(e, t, n = {}) {
  const r = st(!1)
  let s
  return (
    oh(() => {
      const i = r.value ? {} : gs(t, Km)
      s ? s.patch(i) : (s = e.push(i, n))
    }),
    Ln() &&
      (Ir(() => {
        s.dispose()
      }),
      Vc(() => {
        r.value = !0
      }),
      Wc(() => {
        r.value = !1
      })),
    s
  )
}
function Xm(e) {
  const t = e || fe()
  return (
    t.ssrContext?.head ||
    t.runWithContext(() => {
      if (Ps()) {
        const n = qe(Ii)
        if (!n) throw new Error('[nuxt] [unhead] Missing Unhead instance.')
        return n
      }
    })
  )
}
function Qm(e, t = {}) {
  const n = t.head || Xm(t.nuxt)
  return Ym(e, { head: n, ...t })
}
const zm = (e, t) => [],
  Zm = (e) =>
    Vu(
      {},
      ...zm()
        .map((t) => t.data)
        .reverse()
    ),
  e_ = Zm
let ts
function t_() {
  return (
    (ts = $fetch(Pi(`builds/meta/${xr().app.buildId}.json`), { responseType: 'json' })),
    ts.catch((e) => {
      console.error('[nuxt] Error fetching app manifest.', e)
    }),
    ts
  )
}
function Ni() {
  return ts || t_()
}
function Us(e) {
  const t = typeof e == 'string' ? e : e.path
  try {
    return e_(t)
  } catch (n) {
    return (console.error('[nuxt] Error matching route rules.', n), {})
  }
}
async function Ja(e, t = {}) {
  if (await s_(e)) {
    const n = await r_(e, t)
    return (await Zu(n)) || null
  }
  return null
}
const n_ = '_payload.json'
async function r_(e, t = {}) {
  const n = new URL(e, 'http://localhost')
  if (n.host !== 'localhost' || Nt(n.pathname, { acceptRelative: !0 }))
    throw new Error('Payload URL must not include hostname: ' + e)
  const r = xr(),
    s = t.hash || (t.fresh ? Date.now() : r.app.buildId),
    o = r.app.cdnURL,
    i = o && (await o_(e)) ? o : r.app.baseURL
  return Tn(i, n.pathname, n_ + (s ? `?${s}` : ''))
}
async function Zu(e) {
  const t = fetch(e, { cache: 'force-cache' }).then((n) => n.text().then(nf))
  try {
    return await t
  } catch (n) {
    console.warn('[nuxt] Cannot load payload ', e, n)
  }
  return null
}
function ef(e) {
  if (e.redirect) return !1
  if (e.prerender) return !0
}
async function tf(e) {
  return ((e = e === '/' ? e : e.replace(/\/$/, '')), (await Ni()).prerendered.includes(e))
}
async function s_(e = Oi().path) {
  const t = Us({ path: e }),
    n = ef(t)
  return n !== void 0 ? n : t.payload ? !0 : await tf(e)
}
async function o_(e = Oi().path) {
  const t = ef(Us({ path: e }))
  return t !== void 0 ? t : await tf(e)
}
let gn = null
async function i_() {
  if (gn) return gn
  const e = document.getElementById('__NUXT_DATA__')
  if (!e) return {}
  const t = await nf(e.textContent || ''),
    n = e.dataset.src ? await Zu(e.dataset.src) : void 0
  return (
    (gn = { ...t, ...n, ...window.__NUXT__ }),
    gn.config?.public && (gn.config.public = an(gn.config.public)),
    gn
  )
}
async function nf(e) {
  return await Cm(e, fe()._payloadRevivers)
}
function a_(e, t) {
  fe()._payloadRevivers[e] = t
}
const l_ = [
    ['NuxtError', (e) => Rn(e)],
    ['EmptyShallowRef', (e) => Wn(e === '_' ? void 0 : e === '0n' ? BigInt(0) : Er(e))],
    ['EmptyRef', (e) => st(e === '_' ? void 0 : e === '0n' ? BigInt(0) : Er(e))],
    ['ShallowRef', (e) => Wn(e)],
    ['ShallowReactive', (e) => Bt(e)],
    ['Ref', (e) => st(e)],
    ['Reactive', (e) => an(e)],
  ],
  c_ = Qe({
    name: 'nuxt:revive-payload:client',
    order: -30,
    async setup(e) {
      let t, n
      for (const [r, s] of l_) a_(r, s)
      ;(Object.assign(
        e.payload,
        (([t, n] = Cn(() => e.runWithContext(i_))), (t = await t), n(), t)
      ),
        delete window.__NUXT__)
    },
  })
async function xi(e, t = {}) {
  const n = t.document || e.resolvedOptions.document
  if (!n || !e.dirty) return
  const r = { shouldRender: !0, tags: [] }
  if ((await e.hooks.callHook('dom:beforeRender', r), !!r.shouldRender))
    return (
      e._domUpdatePromise ||
        (e._domUpdatePromise = new Promise(async (s) => {
          const o = new Map(),
            i = new Promise((h) => {
              e.resolveTags().then((E) => {
                h(
                  E.map((g) => {
                    const R = o.get(g._d) || 0,
                      y = { tag: g, id: (R ? `${g._d}:${R}` : g._d) || g._h, shouldRender: !0 }
                    return (g._d && Xu(g._d) && o.set(g._d, R + 1), y)
                  })
                )
              })
            })
          let a = e._dom
          if (!a) {
            a = {
              title: n.title,
              elMap: new Map().set('htmlAttrs', n.documentElement).set('bodyAttrs', n.body),
            }
            for (const h of ['body', 'head']) {
              const E = n[h]?.children
              for (const g of E) {
                const R = g.tagName.toLowerCase()
                if (!Ko.has(R)) continue
                const y = zu(
                  { tag: R, props: {} },
                  {
                    innerHTML: g.innerHTML,
                    ...(g
                      .getAttributeNames()
                      .reduce((v, p) => ((v[p] = g.getAttribute(p)), v), {}) || {}),
                  }
                )
                if (
                  ((y.key = g.getAttribute('data-hid') || void 0),
                  (y._d = qo(y) || Qu(y)),
                  a.elMap.has(y._d))
                ) {
                  let v = 1,
                    p = y._d
                  for (; a.elMap.has(p); ) p = `${y._d}:${v++}`
                  a.elMap.set(p, g)
                } else a.elMap.set(y._d, g)
              }
            }
          }
          ;((a.pendingSideEffects = { ...a.sideEffects }), (a.sideEffects = {}))
          function l(h, E, g) {
            const R = `${h}:${E}`
            ;((a.sideEffects[R] = g), delete a.pendingSideEffects[R])
          }
          function u({ id: h, $el: E, tag: g }) {
            const R = g.tag.endsWith('Attrs')
            ;(a.elMap.set(h, E),
              R ||
                (g.textContent &&
                  g.textContent !== E.textContent &&
                  (E.textContent = g.textContent),
                g.innerHTML && g.innerHTML !== E.innerHTML && (E.innerHTML = g.innerHTML),
                l(h, 'el', () => {
                  ;(E?.remove(), a.elMap.delete(h))
                })))
            for (const y in g.props) {
              if (!Object.prototype.hasOwnProperty.call(g.props, y)) continue
              const v = g.props[y]
              if (y.startsWith('on') && typeof v == 'function') {
                const _ = E?.dataset
                if (_ && _[`${y}fired`]) {
                  const T = y.slice(0, -5)
                  v.call(E, new Event(T.substring(2)))
                }
                E.getAttribute(`data-${y}`) !== '' &&
                  ((g.tag === 'bodyAttrs' ? n.defaultView : E).addEventListener(
                    y.substring(2),
                    v.bind(E)
                  ),
                  E.setAttribute(`data-${y}`, ''))
                continue
              }
              const p = `attr:${y}`
              if (y === 'class') {
                if (!v) continue
                for (const _ of v)
                  (R && l(h, `${p}:${_}`, () => E.classList.remove(_)),
                    !E.classList.contains(_) && E.classList.add(_))
              } else if (y === 'style') {
                if (!v) continue
                for (const [_, T] of v)
                  (l(h, `${p}:${_}`, () => {
                    E.style.removeProperty(_)
                  }),
                    E.style.setProperty(_, T))
              } else
                v !== !1 &&
                  v !== null &&
                  (E.getAttribute(y) !== v && E.setAttribute(y, v === !0 ? '' : String(v)),
                  R && l(h, p, () => E.removeAttribute(y)))
            }
          }
          const c = [],
            f = { bodyClose: void 0, bodyOpen: void 0, head: void 0 },
            d = await i
          for (const h of d) {
            const { tag: E, shouldRender: g, id: R } = h
            if (g) {
              if (E.tag === 'title') {
                ;((n.title = E.textContent), l('title', '', () => (n.title = a.title)))
                continue
              }
              ;((h.$el = h.$el || a.elMap.get(R)), h.$el ? u(h) : Ko.has(E.tag) && c.push(h))
            }
          }
          for (const h of c) {
            const E = h.tag.tagPosition || 'head'
            ;((h.$el = n.createElement(h.tag.tag)),
              u(h),
              (f[E] = f[E] || n.createDocumentFragment()),
              f[E].appendChild(h.$el))
          }
          for (const h of d) await e.hooks.callHook('dom:renderTag', h, n, l)
          ;(f.head && n.head.appendChild(f.head),
            f.bodyOpen && n.body.insertBefore(f.bodyOpen, n.body.firstChild),
            f.bodyClose && n.body.appendChild(f.bodyClose))
          for (const h in a.pendingSideEffects) a.pendingSideEffects[h]()
          ;((e._dom = a), await e.hooks.callHook('dom:rendered', { renders: d }), s())
        }).finally(() => {
          ;((e._domUpdatePromise = void 0), (e.dirty = !1))
        })),
      e._domUpdatePromise
    )
}
function u_(e = {}) {
  const t = e.domOptions?.render || xi
  e.document = e.document || (typeof window < 'u' ? document : void 0)
  const n = e.document?.head.querySelector('script[id="unhead:payload"]')?.innerHTML || !1
  return Vm({
    ...e,
    plugins: [...(e.plugins || []), { key: 'client', hooks: { 'entries:updated': t } }],
    init: [n ? JSON.parse(n) : !1, ...(e.init || [])],
  })
}
function f_(e, t) {
  let n = 0
  return () => {
    const r = ++n
    t(() => {
      n === r && e()
    })
  }
}
function d_(e = {}) {
  const t = u_({
    domOptions: {
      render: f_(
        () => xi(t),
        (n) => setTimeout(n, 0)
      ),
    },
    ...e,
  })
  return ((t.install = Gm(t)), t)
}
const h_ = { disableDefaults: !0 },
  p_ = Qe({
    name: 'nuxt:head',
    enforce: 'pre',
    setup(e) {
      const t = d_(h_)
      e.vueApp.use(t)
      {
        let n = !0
        const r = async () => {
          ;((n = !1), await xi(t))
        }
        ;(t.hooks.hook('dom:beforeRender', (s) => {
          s.shouldRender = !n
        }),
          e.hooks.hook('page:start', () => {
            n = !0
          }),
          e.hooks.hook('page:finish', () => {
            e.isHydrating || r()
          }),
          e.hooks.hook('app:error', r),
          e.hooks.hook('app:suspense:resolve', r))
      }
    },
  })
const On = typeof document < 'u'
function rf(e) {
  return typeof e == 'object' || 'displayName' in e || 'props' in e || '__vccOpts' in e
}
function g_(e) {
  return e.__esModule || e[Symbol.toStringTag] === 'Module' || (e.default && rf(e.default))
}
const de = Object.assign
function ho(e, t) {
  const n = {}
  for (const r in t) {
    const s = t[r]
    n[r] = yt(s) ? s.map(e) : e(s)
  }
  return n
}
const gr = () => {},
  yt = Array.isArray
function Xa(e, t) {
  const n = {}
  for (const r in e) n[r] = r in t ? t[r] : e[r]
  return n
}
const sf = /#/g,
  m_ = /&/g,
  __ = /\//g,
  y_ = /=/g,
  b_ = /\?/g,
  of = /\+/g,
  v_ = /%5B/g,
  E_ = /%5D/g,
  af = /%5E/g,
  w_ = /%60/g,
  lf = /%7B/g,
  C_ = /%7C/g,
  cf = /%7D/g,
  R_ = /%20/g
function Mi(e) {
  return e == null
    ? ''
    : encodeURI('' + e)
        .replace(C_, '|')
        .replace(v_, '[')
        .replace(E_, ']')
}
function T_(e) {
  return Mi(e).replace(lf, '{').replace(cf, '}').replace(af, '^')
}
function Yo(e) {
  return Mi(e)
    .replace(of, '%2B')
    .replace(R_, '+')
    .replace(sf, '%23')
    .replace(m_, '%26')
    .replace(w_, '`')
    .replace(lf, '{')
    .replace(cf, '}')
    .replace(af, '^')
}
function S_(e) {
  return Yo(e).replace(y_, '%3D')
}
function L_(e) {
  return Mi(e).replace(sf, '%23').replace(b_, '%3F')
}
function k_(e) {
  return L_(e).replace(__, '%2F')
}
function Rr(e) {
  if (e == null) return null
  try {
    return decodeURIComponent('' + e)
  } catch {}
  return '' + e
}
const A_ = /\/$/,
  P_ = (e) => e.replace(A_, '')
function po(e, t, n = '/') {
  let r,
    s = {},
    o = '',
    i = ''
  const a = t.indexOf('#')
  let l = t.indexOf('?')
  return (
    (l = a >= 0 && l > a ? -1 : l),
    l >= 0 && ((r = t.slice(0, l)), (o = t.slice(l, a > 0 ? a : t.length)), (s = e(o.slice(1)))),
    a >= 0 && ((r = r || t.slice(0, a)), (i = t.slice(a, t.length))),
    (r = x_(r ?? t, n)),
    { fullPath: r + o + i, path: r, query: s, hash: Rr(i) }
  )
}
function O_(e, t) {
  const n = t.query ? e(t.query) : ''
  return t.path + (n && '?') + n + (t.hash || '')
}
function Qa(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || '/'
}
function I_(e, t, n) {
  const r = t.matched.length - 1,
    s = n.matched.length - 1
  return (
    r > -1 &&
    r === s &&
    Jn(t.matched[r], n.matched[s]) &&
    uf(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  )
}
function Jn(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t)
}
function uf(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1
  for (var n in e) if (!N_(e[n], t[n])) return !1
  return !0
}
function N_(e, t) {
  return yt(e) ? za(e, t) : yt(t) ? za(t, e) : e?.valueOf() === t?.valueOf()
}
function za(e, t) {
  return yt(t)
    ? e.length === t.length && e.every((n, r) => n === t[r])
    : e.length === 1 && e[0] === t
}
function x_(e, t) {
  if (e.startsWith('/')) return e
  if (!e) return t
  const n = t.split('/'),
    r = e.split('/'),
    s = r[r.length - 1]
  ;(s === '..' || s === '.') && r.push('')
  let o = n.length - 1,
    i,
    a
  for (i = 0; i < r.length; i++)
    if (((a = r[i]), a !== '.'))
      if (a === '..') o > 1 && o--
      else break
  return n.slice(0, o).join('/') + '/' + r.slice(i).join('/')
}
const lt = {
  path: '/',
  name: void 0,
  params: {},
  query: {},
  hash: '',
  fullPath: '/',
  matched: [],
  meta: {},
  redirectedFrom: void 0,
}
let Jo = (function (e) {
    return ((e.pop = 'pop'), (e.push = 'push'), e)
  })({}),
  go = (function (e) {
    return ((e.back = 'back'), (e.forward = 'forward'), (e.unknown = ''), e)
  })({})
function M_(e) {
  if (!e)
    if (On) {
      const t = document.querySelector('base')
      ;((e = (t && t.getAttribute('href')) || '/'), (e = e.replace(/^\w+:\/\/[^\/]+/, '')))
    } else e = '/'
  return (e[0] !== '/' && e[0] !== '#' && (e = '/' + e), P_(e))
}
const D_ = /^[^#]+#/
function F_(e, t) {
  return e.replace(D_, '#') + t
}
function H_(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    r = e.getBoundingClientRect()
  return {
    behavior: t.behavior,
    left: r.left - n.left - (t.left || 0),
    top: r.top - n.top - (t.top || 0),
  }
}
const js = () => ({ left: window.scrollX, top: window.scrollY })
function $_(e) {
  let t
  if ('el' in e) {
    const n = e.el,
      r = typeof n == 'string' && n.startsWith('#'),
      s =
        typeof n == 'string'
          ? r
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n
    if (!s) return
    t = H_(s, e)
  } else t = e
  'scrollBehavior' in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.scrollX,
        t.top != null ? t.top : window.scrollY
      )
}
function Za(e, t) {
  return (history.state ? history.state.position - t : -1) + e
}
const Xo = new Map()
function U_(e, t) {
  Xo.set(e, t)
}
function j_(e) {
  const t = Xo.get(e)
  return (Xo.delete(e), t)
}
function B_(e) {
  return typeof e == 'string' || (e && typeof e == 'object')
}
function ff(e) {
  return typeof e == 'string' || typeof e == 'symbol'
}
let Te = (function (e) {
  return (
    (e[(e.MATCHER_NOT_FOUND = 1)] = 'MATCHER_NOT_FOUND'),
    (e[(e.NAVIGATION_GUARD_REDIRECT = 2)] = 'NAVIGATION_GUARD_REDIRECT'),
    (e[(e.NAVIGATION_ABORTED = 4)] = 'NAVIGATION_ABORTED'),
    (e[(e.NAVIGATION_CANCELLED = 8)] = 'NAVIGATION_CANCELLED'),
    (e[(e.NAVIGATION_DUPLICATED = 16)] = 'NAVIGATION_DUPLICATED'),
    e
  )
})({})
const df = Symbol('')
;(Te.MATCHER_NOT_FOUND + '',
  Te.NAVIGATION_GUARD_REDIRECT + '',
  Te.NAVIGATION_ABORTED + '',
  Te.NAVIGATION_CANCELLED + '',
  Te.NAVIGATION_DUPLICATED + '')
function Xn(e, t) {
  return de(new Error(), { type: e, [df]: !0 }, t)
}
function Dt(e, t) {
  return e instanceof Error && df in e && (t == null || !!(e.type & t))
}
const W_ = ['params', 'query', 'hash']
function V_(e) {
  if (typeof e == 'string') return e
  if (e.path != null) return e.path
  const t = {}
  for (const n of W_) n in e && (t[n] = e[n])
  return JSON.stringify(t, null, 2)
}
function K_(e) {
  const t = {}
  if (e === '' || e === '?') return t
  const n = (e[0] === '?' ? e.slice(1) : e).split('&')
  for (let r = 0; r < n.length; ++r) {
    const s = n[r].replace(of, ' '),
      o = s.indexOf('='),
      i = Rr(o < 0 ? s : s.slice(0, o)),
      a = o < 0 ? null : Rr(s.slice(o + 1))
    if (i in t) {
      let l = t[i]
      ;(yt(l) || (l = t[i] = [l]), l.push(a))
    } else t[i] = a
  }
  return t
}
function el(e) {
  let t = ''
  for (let n in e) {
    const r = e[n]
    if (((n = S_(n)), r == null)) {
      r !== void 0 && (t += (t.length ? '&' : '') + n)
      continue
    }
    ;(yt(r) ? r.map((s) => s && Yo(s)) : [r && Yo(r)]).forEach((s) => {
      s !== void 0 && ((t += (t.length ? '&' : '') + n), s != null && (t += '=' + s))
    })
  }
  return t
}
function G_(e) {
  const t = {}
  for (const n in e) {
    const r = e[n]
    r !== void 0 &&
      (t[n] = yt(r) ? r.map((s) => (s == null ? null : '' + s)) : r == null ? r : '' + r)
  }
  return t
}
const q_ = Symbol(''),
  tl = Symbol(''),
  Di = Symbol(''),
  hf = Symbol(''),
  Qo = Symbol('')
function or() {
  let e = []
  function t(r) {
    return (
      e.push(r),
      () => {
        const s = e.indexOf(r)
        s > -1 && e.splice(s, 1)
      }
    )
  }
  function n() {
    e = []
  }
  return { add: t, list: () => e.slice(), reset: n }
}
function tn(e, t, n, r, s, o = (i) => i()) {
  const i = r && (r.enterCallbacks[s] = r.enterCallbacks[s] || [])
  return () =>
    new Promise((a, l) => {
      const u = (d) => {
          d === !1
            ? l(Xn(Te.NAVIGATION_ABORTED, { from: n, to: t }))
            : d instanceof Error
              ? l(d)
              : B_(d)
                ? l(Xn(Te.NAVIGATION_GUARD_REDIRECT, { from: t, to: d }))
                : (i && r.enterCallbacks[s] === i && typeof d == 'function' && i.push(d), a())
        },
        c = o(() => e.call(r && r.instances[s], t, n, u))
      let f = Promise.resolve(c)
      ;(e.length < 3 && (f = f.then(u)), f.catch((d) => l(d)))
    })
}
function mo(e, t, n, r, s = (o) => o()) {
  const o = []
  for (const i of e)
    for (const a in i.components) {
      let l = i.components[a]
      if (!(t !== 'beforeRouteEnter' && !i.instances[a]))
        if (rf(l)) {
          const u = (l.__vccOpts || l)[t]
          u && o.push(tn(u, n, r, i, a, s))
        } else {
          let u = l()
          o.push(() =>
            u.then((c) => {
              if (!c) throw new Error(`Couldn't resolve component "${a}" at "${i.path}"`)
              const f = g_(c) ? c.default : c
              ;((i.mods[a] = c), (i.components[a] = f))
              const d = (f.__vccOpts || f)[t]
              return d && tn(d, n, r, i, a, s)()
            })
          )
        }
    }
  return o
}
function Y_(e, t) {
  const n = [],
    r = [],
    s = [],
    o = Math.max(t.matched.length, e.matched.length)
  for (let i = 0; i < o; i++) {
    const a = t.matched[i]
    a && (e.matched.find((u) => Jn(u, a)) ? r.push(a) : n.push(a))
    const l = e.matched[i]
    l && (t.matched.find((u) => Jn(u, l)) || s.push(l))
  }
  return [n, r, s]
}
let J_ = () => location.protocol + '//' + location.host
function pf(e, t) {
  const { pathname: n, search: r, hash: s } = t,
    o = e.indexOf('#')
  if (o > -1) {
    let i = s.includes(e.slice(o)) ? e.slice(o).length : 1,
      a = s.slice(i)
    return (a[0] !== '/' && (a = '/' + a), Qa(a, ''))
  }
  return Qa(n, e) + r + s
}
function X_(e, t, n, r) {
  let s = [],
    o = [],
    i = null
  const a = ({ state: d }) => {
    const h = pf(e, location),
      E = n.value,
      g = t.value
    let R = 0
    if (d) {
      if (((n.value = h), (t.value = d), i && i === E)) {
        i = null
        return
      }
      R = g ? d.position - g.position : 0
    } else r(h)
    s.forEach((y) => {
      y(n.value, E, {
        delta: R,
        type: Jo.pop,
        direction: R ? (R > 0 ? go.forward : go.back) : go.unknown,
      })
    })
  }
  function l() {
    i = n.value
  }
  function u(d) {
    s.push(d)
    const h = () => {
      const E = s.indexOf(d)
      E > -1 && s.splice(E, 1)
    }
    return (o.push(h), h)
  }
  function c() {
    if (document.visibilityState === 'hidden') {
      const { history: d } = window
      if (!d.state) return
      d.replaceState(de({}, d.state, { scroll: js() }), '')
    }
  }
  function f() {
    for (const d of o) d()
    ;((o = []),
      window.removeEventListener('popstate', a),
      window.removeEventListener('pagehide', c),
      document.removeEventListener('visibilitychange', c))
  }
  return (
    window.addEventListener('popstate', a),
    window.addEventListener('pagehide', c),
    document.addEventListener('visibilitychange', c),
    { pauseListeners: l, listen: u, destroy: f }
  )
}
function nl(e, t, n, r = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: s ? js() : null,
  }
}
function Q_(e) {
  const { history: t, location: n } = window,
    r = { value: pf(e, n) },
    s = { value: t.state }
  s.value ||
    o(
      r.value,
      {
        back: null,
        current: r.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0
    )
  function o(l, u, c) {
    const f = e.indexOf('#'),
      d = f > -1 ? (n.host && document.querySelector('base') ? e : e.slice(f)) + l : J_() + e + l
    try {
      ;(t[c ? 'replaceState' : 'pushState'](u, '', d), (s.value = u))
    } catch (h) {
      ;(console.error(h), n[c ? 'replace' : 'assign'](d))
    }
  }
  function i(l, u) {
    ;(o(
      l,
      de({}, t.state, nl(s.value.back, l, s.value.forward, !0), u, { position: s.value.position }),
      !0
    ),
      (r.value = l))
  }
  function a(l, u) {
    const c = de({}, s.value, t.state, { forward: l, scroll: js() })
    ;(o(c.current, c, !0),
      o(l, de({}, nl(r.value, l, null), { position: c.position + 1 }, u), !1),
      (r.value = l))
  }
  return { location: r, state: s, push: a, replace: i }
}
function z_(e) {
  e = M_(e)
  const t = Q_(e),
    n = X_(e, t.state, t.location, t.replace)
  function r(o, i = !0) {
    ;(i || n.pauseListeners(), history.go(o))
  }
  const s = de({ location: '', base: e, go: r, createHref: F_.bind(null, e) }, t, n)
  return (
    Object.defineProperty(s, 'location', { enumerable: !0, get: () => t.location.value }),
    Object.defineProperty(s, 'state', { enumerable: !0, get: () => t.state.value }),
    s
  )
}
let bn = (function (e) {
  return (
    (e[(e.Static = 0)] = 'Static'),
    (e[(e.Param = 1)] = 'Param'),
    (e[(e.Group = 2)] = 'Group'),
    e
  )
})({})
var Oe = (function (e) {
  return (
    (e[(e.Static = 0)] = 'Static'),
    (e[(e.Param = 1)] = 'Param'),
    (e[(e.ParamRegExp = 2)] = 'ParamRegExp'),
    (e[(e.ParamRegExpEnd = 3)] = 'ParamRegExpEnd'),
    (e[(e.EscapeNext = 4)] = 'EscapeNext'),
    e
  )
})(Oe || {})
const Z_ = { type: bn.Static, value: '' },
  ey = /[a-zA-Z0-9_]/
function ty(e) {
  if (!e) return [[]]
  if (e === '/') return [[Z_]]
  if (!e.startsWith('/')) throw new Error(`Invalid path "${e}"`)
  function t(h) {
    throw new Error(`ERR (${n})/"${u}": ${h}`)
  }
  let n = Oe.Static,
    r = n
  const s = []
  let o
  function i() {
    ;(o && s.push(o), (o = []))
  }
  let a = 0,
    l,
    u = '',
    c = ''
  function f() {
    u &&
      (n === Oe.Static
        ? o.push({ type: bn.Static, value: u })
        : n === Oe.Param || n === Oe.ParamRegExp || n === Oe.ParamRegExpEnd
          ? (o.length > 1 &&
              (l === '*' || l === '+') &&
              t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),
            o.push({
              type: bn.Param,
              value: u,
              regexp: c,
              repeatable: l === '*' || l === '+',
              optional: l === '*' || l === '?',
            }))
          : t('Invalid state to consume buffer'),
      (u = ''))
  }
  function d() {
    u += l
  }
  for (; a < e.length; ) {
    if (((l = e[a++]), l === '\\' && n !== Oe.ParamRegExp)) {
      ;((r = n), (n = Oe.EscapeNext))
      continue
    }
    switch (n) {
      case Oe.Static:
        l === '/' ? (u && f(), i()) : l === ':' ? (f(), (n = Oe.Param)) : d()
        break
      case Oe.EscapeNext:
        ;(d(), (n = r))
        break
      case Oe.Param:
        l === '('
          ? (n = Oe.ParamRegExp)
          : ey.test(l)
            ? d()
            : (f(), (n = Oe.Static), l !== '*' && l !== '?' && l !== '+' && a--)
        break
      case Oe.ParamRegExp:
        l === ')'
          ? c[c.length - 1] == '\\'
            ? (c = c.slice(0, -1) + l)
            : (n = Oe.ParamRegExpEnd)
          : (c += l)
        break
      case Oe.ParamRegExpEnd:
        ;(f(), (n = Oe.Static), l !== '*' && l !== '?' && l !== '+' && a--, (c = ''))
        break
      default:
        t('Unknown state')
        break
    }
  }
  return (n === Oe.ParamRegExp && t(`Unfinished custom RegExp for param "${u}"`), f(), i(), s)
}
const rl = '[^/]+?',
  ny = { sensitive: !1, strict: !1, start: !0, end: !0 }
var Ve = (function (e) {
  return (
    (e[(e._multiplier = 10)] = '_multiplier'),
    (e[(e.Root = 90)] = 'Root'),
    (e[(e.Segment = 40)] = 'Segment'),
    (e[(e.SubSegment = 30)] = 'SubSegment'),
    (e[(e.Static = 40)] = 'Static'),
    (e[(e.Dynamic = 20)] = 'Dynamic'),
    (e[(e.BonusCustomRegExp = 10)] = 'BonusCustomRegExp'),
    (e[(e.BonusWildcard = -50)] = 'BonusWildcard'),
    (e[(e.BonusRepeatable = -20)] = 'BonusRepeatable'),
    (e[(e.BonusOptional = -8)] = 'BonusOptional'),
    (e[(e.BonusStrict = 0.7000000000000001)] = 'BonusStrict'),
    (e[(e.BonusCaseSensitive = 0.25)] = 'BonusCaseSensitive'),
    e
  )
})(Ve || {})
const ry = /[.+*?^${}()[\]/\\]/g
function sy(e, t) {
  const n = de({}, ny, t),
    r = []
  let s = n.start ? '^' : ''
  const o = []
  for (const u of e) {
    const c = u.length ? [] : [Ve.Root]
    n.strict && !u.length && (s += '/')
    for (let f = 0; f < u.length; f++) {
      const d = u[f]
      let h = Ve.Segment + (n.sensitive ? Ve.BonusCaseSensitive : 0)
      if (d.type === bn.Static)
        (f || (s += '/'), (s += d.value.replace(ry, '\\$&')), (h += Ve.Static))
      else if (d.type === bn.Param) {
        const { value: E, repeatable: g, optional: R, regexp: y } = d
        o.push({ name: E, repeatable: g, optional: R })
        const v = y || rl
        if (v !== rl) {
          h += Ve.BonusCustomRegExp
          try {
            ;`${v}`
          } catch (_) {
            throw new Error(`Invalid custom RegExp for param "${E}" (${v}): ` + _.message)
          }
        }
        let p = g ? `((?:${v})(?:/(?:${v}))*)` : `(${v})`
        ;(f || (p = R && u.length < 2 ? `(?:/${p})` : '/' + p),
          R && (p += '?'),
          (s += p),
          (h += Ve.Dynamic),
          R && (h += Ve.BonusOptional),
          g && (h += Ve.BonusRepeatable),
          v === '.*' && (h += Ve.BonusWildcard))
      }
      c.push(h)
    }
    r.push(c)
  }
  if (n.strict && n.end) {
    const u = r.length - 1
    r[u][r[u].length - 1] += Ve.BonusStrict
  }
  ;(n.strict || (s += '/?'), n.end ? (s += '$') : n.strict && !s.endsWith('/') && (s += '(?:/|$)'))
  const i = new RegExp(s, n.sensitive ? '' : 'i')
  function a(u) {
    const c = u.match(i),
      f = {}
    if (!c) return null
    for (let d = 1; d < c.length; d++) {
      const h = c[d] || '',
        E = o[d - 1]
      f[E.name] = h && E.repeatable ? h.split('/') : h
    }
    return f
  }
  function l(u) {
    let c = '',
      f = !1
    for (const d of e) {
      ;((!f || !c.endsWith('/')) && (c += '/'), (f = !1))
      for (const h of d)
        if (h.type === bn.Static) c += h.value
        else if (h.type === bn.Param) {
          const { value: E, repeatable: g, optional: R } = h,
            y = E in u ? u[E] : ''
          if (yt(y) && !g)
            throw new Error(
              `Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`
            )
          const v = yt(y) ? y.join('/') : y
          if (!v)
            if (R) d.length < 2 && (c.endsWith('/') ? (c = c.slice(0, -1)) : (f = !0))
            else throw new Error(`Missing required param "${E}"`)
          c += v
        }
    }
    return c || '/'
  }
  return { re: i, score: r, keys: o, parse: a, stringify: l }
}
function oy(e, t) {
  let n = 0
  for (; n < e.length && n < t.length; ) {
    const r = t[n] - e[n]
    if (r) return r
    n++
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === Ve.Static + Ve.Segment
      ? -1
      : 1
    : e.length > t.length
      ? t.length === 1 && t[0] === Ve.Static + Ve.Segment
        ? 1
        : -1
      : 0
}
function gf(e, t) {
  let n = 0
  const r = e.score,
    s = t.score
  for (; n < r.length && n < s.length; ) {
    const o = oy(r[n], s[n])
    if (o) return o
    n++
  }
  if (Math.abs(s.length - r.length) === 1) {
    if (sl(r)) return 1
    if (sl(s)) return -1
  }
  return s.length - r.length
}
function sl(e) {
  const t = e[e.length - 1]
  return e.length > 0 && t[t.length - 1] < 0
}
const iy = { strict: !1, end: !0, sensitive: !1 }
function ay(e, t, n) {
  const r = sy(ty(e.path), n),
    s = de(r, { record: e, parent: t, children: [], alias: [] })
  return (t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s)
}
function ly(e, t) {
  const n = [],
    r = new Map()
  t = Xa(iy, t)
  function s(f) {
    return r.get(f)
  }
  function o(f, d, h) {
    const E = !h,
      g = il(f)
    g.aliasOf = h && h.record
    const R = Xa(t, f),
      y = [g]
    if ('alias' in f) {
      const _ = typeof f.alias == 'string' ? [f.alias] : f.alias
      for (const T of _)
        y.push(
          il(
            de({}, g, {
              components: h ? h.record.components : g.components,
              path: T,
              aliasOf: h ? h.record : g,
            })
          )
        )
    }
    let v, p
    for (const _ of y) {
      const { path: T } = _
      if (d && T[0] !== '/') {
        const L = d.record.path,
          A = L[L.length - 1] === '/' ? '' : '/'
        _.path = d.record.path + (T && A + T)
      }
      if (
        ((v = ay(_, d, R)),
        h
          ? h.alias.push(v)
          : ((p = p || v), p !== v && p.alias.push(v), E && f.name && !al(v) && i(f.name)),
        mf(v) && l(v),
        g.children)
      ) {
        const L = g.children
        for (let A = 0; A < L.length; A++) o(L[A], v, h && h.children[A])
      }
      h = h || v
    }
    return p
      ? () => {
          i(p)
        }
      : gr
  }
  function i(f) {
    if (ff(f)) {
      const d = r.get(f)
      d && (r.delete(f), n.splice(n.indexOf(d), 1), d.children.forEach(i), d.alias.forEach(i))
    } else {
      const d = n.indexOf(f)
      d > -1 &&
        (n.splice(d, 1),
        f.record.name && r.delete(f.record.name),
        f.children.forEach(i),
        f.alias.forEach(i))
    }
  }
  function a() {
    return n
  }
  function l(f) {
    const d = fy(f, n)
    ;(n.splice(d, 0, f), f.record.name && !al(f) && r.set(f.record.name, f))
  }
  function u(f, d) {
    let h,
      E = {},
      g,
      R
    if ('name' in f && f.name) {
      if (((h = r.get(f.name)), !h)) throw Xn(Te.MATCHER_NOT_FOUND, { location: f })
      ;((R = h.record.name),
        (E = de(
          ol(
            d.params,
            h.keys
              .filter((p) => !p.optional)
              .concat(h.parent ? h.parent.keys.filter((p) => p.optional) : [])
              .map((p) => p.name)
          ),
          f.params &&
            ol(
              f.params,
              h.keys.map((p) => p.name)
            )
        )),
        (g = h.stringify(E)))
    } else if (f.path != null)
      ((g = f.path),
        (h = n.find((p) => p.re.test(g))),
        h && ((E = h.parse(g)), (R = h.record.name)))
    else {
      if (((h = d.name ? r.get(d.name) : n.find((p) => p.re.test(d.path))), !h))
        throw Xn(Te.MATCHER_NOT_FOUND, { location: f, currentLocation: d })
      ;((R = h.record.name), (E = de({}, d.params, f.params)), (g = h.stringify(E)))
    }
    const y = []
    let v = h
    for (; v; ) (y.unshift(v.record), (v = v.parent))
    return { name: R, path: g, params: E, matched: y, meta: uy(y) }
  }
  e.forEach((f) => o(f))
  function c() {
    ;((n.length = 0), r.clear())
  }
  return {
    addRoute: o,
    resolve: u,
    removeRoute: i,
    clearRoutes: c,
    getRoutes: a,
    getRecordMatcher: s,
  }
}
function ol(e, t) {
  const n = {}
  for (const r of t) r in e && (n[r] = e[r])
  return n
}
function il(e) {
  const t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: cy(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components: 'components' in e ? e.components || null : e.component && { default: e.component },
  }
  return (Object.defineProperty(t, 'mods', { value: {} }), t)
}
function cy(e) {
  const t = {},
    n = e.props || !1
  if ('component' in e) t.default = n
  else for (const r in e.components) t[r] = typeof n == 'object' ? n[r] : n
  return t
}
function al(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0
    e = e.parent
  }
  return !1
}
function uy(e) {
  return e.reduce((t, n) => de(t, n.meta), {})
}
function fy(e, t) {
  let n = 0,
    r = t.length
  for (; n !== r; ) {
    const o = (n + r) >> 1
    gf(e, t[o]) < 0 ? (r = o) : (n = o + 1)
  }
  const s = dy(e)
  return (s && (r = t.lastIndexOf(s, r - 1)), r)
}
function dy(e) {
  let t = e
  for (; (t = t.parent); ) if (mf(t) && gf(e, t) === 0) return t
}
function mf({ record: e }) {
  return !!(e.name || (e.components && Object.keys(e.components).length) || e.redirect)
}
function ll(e) {
  const t = qe(Di),
    n = qe(hf),
    r = Ae(() => {
      const l = _e(e.to)
      return t.resolve(l)
    }),
    s = Ae(() => {
      const { matched: l } = r.value,
        { length: u } = l,
        c = l[u - 1],
        f = n.matched
      if (!c || !f.length) return -1
      const d = f.findIndex(Jn.bind(null, c))
      if (d > -1) return d
      const h = cl(l[u - 2])
      return u > 1 && cl(c) === h && f[f.length - 1].path !== h
        ? f.findIndex(Jn.bind(null, l[u - 2]))
        : d
    }),
    o = Ae(() => s.value > -1 && _y(n.params, r.value.params)),
    i = Ae(() => s.value > -1 && s.value === n.matched.length - 1 && uf(n.params, r.value.params))
  function a(l = {}) {
    if (my(l)) {
      const u = t[_e(e.replace) ? 'replace' : 'push'](_e(e.to)).catch(gr)
      return (
        e.viewTransition &&
          typeof document < 'u' &&
          'startViewTransition' in document &&
          document.startViewTransition(() => u),
        u
      )
    }
    return Promise.resolve()
  }
  return { route: r, href: Ae(() => r.value.href), isActive: o, isExactActive: i, navigate: a }
}
function hy(e) {
  return e.length === 1 ? e[0] : e
}
const py = ln({
    name: 'RouterLink',
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: 'page' },
      viewTransition: Boolean,
    },
    useLink: ll,
    setup(e, { slots: t }) {
      const n = an(ll(e)),
        { options: r } = qe(Di),
        s = Ae(() => ({
          [ul(e.activeClass, r.linkActiveClass, 'router-link-active')]: n.isActive,
          [ul(e.exactActiveClass, r.linkExactActiveClass, 'router-link-exact-active')]:
            n.isExactActive,
        }))
      return () => {
        const o = t.default && hy(t.default(n))
        return e.custom
          ? o
          : Xe(
              'a',
              {
                'aria-current': n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: s.value,
              },
              o
            )
      }
    },
  }),
  gy = py
function my(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute('target')
      if (/\b_blank\b/i.test(t)) return
    }
    return (e.preventDefault && e.preventDefault(), !0)
  }
}
function _y(e, t) {
  for (const n in t) {
    const r = t[n],
      s = e[n]
    if (typeof r == 'string') {
      if (r !== s) return !1
    } else if (!yt(s) || s.length !== r.length || r.some((o, i) => o.valueOf() !== s[i].valueOf()))
      return !1
  }
  return !0
}
function cl(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : ''
}
const ul = (e, t, n) => e ?? t ?? n,
  yy = ln({
    name: 'RouterView',
    inheritAttrs: !1,
    props: { name: { type: String, default: 'default' }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const r = qe(Qo),
        s = Ae(() => e.route || r.value),
        o = qe(tl, 0),
        i = Ae(() => {
          let u = _e(o)
          const { matched: c } = s.value
          let f
          for (; (f = c[u]) && !f.components; ) u++
          return u
        }),
        a = Ae(() => s.value.matched[i.value])
      ;(Fn(
        tl,
        Ae(() => i.value + 1)
      ),
        Fn(q_, a),
        Fn(Qo, s))
      const l = st()
      return (
        ct(
          () => [l.value, a.value, e.name],
          ([u, c, f], [d, h, E]) => {
            ;(c &&
              ((c.instances[f] = u),
              h &&
                h !== c &&
                u &&
                u === d &&
                (c.leaveGuards.size || (c.leaveGuards = h.leaveGuards),
                c.updateGuards.size || (c.updateGuards = h.updateGuards))),
              u && c && (!h || !Jn(c, h) || !d) && (c.enterCallbacks[f] || []).forEach((g) => g(u)))
          },
          { flush: 'post' }
        ),
        () => {
          const u = s.value,
            c = e.name,
            f = a.value,
            d = f && f.components[c]
          if (!d) return fl(n.default, { Component: d, route: u })
          const h = f.props[c],
            E = h ? (h === !0 ? u.params : typeof h == 'function' ? h(u) : h) : null,
            R = Xe(
              d,
              de({}, E, t, {
                onVnodeUnmounted: (y) => {
                  y.component.isUnmounted && (f.instances[c] = null)
                },
                ref: l,
              })
            )
          return fl(n.default, { Component: R, route: u }) || R
        }
      )
    },
  })
function fl(e, t) {
  if (!e) return null
  const n = e(t)
  return n.length === 1 ? n[0] : n
}
const _f = yy
function by(e) {
  const t = ly(e.routes, e),
    n = e.parseQuery || K_,
    r = e.stringifyQuery || el,
    s = e.history,
    o = or(),
    i = or(),
    a = or(),
    l = Wn(lt)
  let u = lt
  On && e.scrollBehavior && 'scrollRestoration' in history && (history.scrollRestoration = 'manual')
  const c = ho.bind(null, (M) => '' + M),
    f = ho.bind(null, k_),
    d = ho.bind(null, Rr)
  function h(M, K) {
    let B, X
    return (ff(M) ? ((B = t.getRecordMatcher(M)), (X = K)) : (X = M), t.addRoute(X, B))
  }
  function E(M) {
    const K = t.getRecordMatcher(M)
    K && t.removeRoute(K)
  }
  function g() {
    return t.getRoutes().map((M) => M.record)
  }
  function R(M) {
    return !!t.getRecordMatcher(M)
  }
  function y(M, K) {
    if (((K = de({}, K || l.value)), typeof M == 'string')) {
      const C = po(n, M, K.path),
        P = t.resolve({ path: C.path }, K),
        H = s.createHref(C.fullPath)
      return de(C, P, { params: d(P.params), hash: Rr(C.hash), redirectedFrom: void 0, href: H })
    }
    let B
    if (M.path != null) B = de({}, M, { path: po(n, M.path, K.path).path })
    else {
      const C = de({}, M.params)
      for (const P in C) C[P] == null && delete C[P]
      ;((B = de({}, M, { params: f(C) })), (K.params = f(K.params)))
    }
    const X = t.resolve(B, K),
      te = M.hash || ''
    X.params = c(d(X.params))
    const me = O_(r, de({}, M, { hash: T_(te), path: X.path })),
      b = s.createHref(me)
    return de({ fullPath: me, hash: te, query: r === el ? G_(M.query) : M.query || {} }, X, {
      redirectedFrom: void 0,
      href: b,
    })
  }
  function v(M) {
    return typeof M == 'string' ? po(n, M, l.value.path) : de({}, M)
  }
  function p(M, K) {
    if (u !== M) return Xn(Te.NAVIGATION_CANCELLED, { from: K, to: M })
  }
  function _(M) {
    return A(M)
  }
  function T(M) {
    return _(de(v(M), { replace: !0 }))
  }
  function L(M, K) {
    const B = M.matched[M.matched.length - 1]
    if (B && B.redirect) {
      const { redirect: X } = B
      let te = typeof X == 'function' ? X(M, K) : X
      return (
        typeof te == 'string' &&
          ((te = te.includes('?') || te.includes('#') ? (te = v(te)) : { path: te }),
          (te.params = {})),
        de({ query: M.query, hash: M.hash, params: te.path != null ? {} : M.params }, te)
      )
    }
  }
  function A(M, K) {
    const B = (u = y(M)),
      X = l.value,
      te = M.state,
      me = M.force,
      b = M.replace === !0,
      C = L(B, X)
    if (C)
      return A(
        de(v(C), { state: typeof C == 'object' ? de({}, te, C.state) : te, force: me, replace: b }),
        K || B
      )
    const P = B
    P.redirectedFrom = K
    let H
    return (
      !me &&
        I_(r, X, B) &&
        ((H = Xn(Te.NAVIGATION_DUPLICATED, { to: P, from: X })), je(X, X, !0, !1)),
      (H ? Promise.resolve(H) : $(P, X))
        .catch((N) => (Dt(N) ? (Dt(N, Te.NAVIGATION_GUARD_REDIRECT) ? N : ze(N)) : G(N, P, X)))
        .then((N) => {
          if (N) {
            if (Dt(N, Te.NAVIGATION_GUARD_REDIRECT))
              return A(
                de({ replace: b }, v(N.to), {
                  state: typeof N.to == 'object' ? de({}, te, N.to.state) : te,
                  force: me,
                }),
                K || P
              )
          } else N = D(P, X, !0, b, te)
          return (q(P, X, N), N)
        })
    )
  }
  function j(M, K) {
    const B = p(M, K)
    return B ? Promise.reject(B) : Promise.resolve()
  }
  function F(M) {
    const K = Et.values().next().value
    return K && typeof K.runWithContext == 'function' ? K.runWithContext(M) : M()
  }
  function $(M, K) {
    let B
    const [X, te, me] = Y_(M, K)
    B = mo(X.reverse(), 'beforeRouteLeave', M, K)
    for (const C of X)
      C.leaveGuards.forEach((P) => {
        B.push(tn(P, M, K))
      })
    const b = j.bind(null, M, K)
    return (
      B.push(b),
      He(B)
        .then(() => {
          B = []
          for (const C of o.list()) B.push(tn(C, M, K))
          return (B.push(b), He(B))
        })
        .then(() => {
          B = mo(te, 'beforeRouteUpdate', M, K)
          for (const C of te)
            C.updateGuards.forEach((P) => {
              B.push(tn(P, M, K))
            })
          return (B.push(b), He(B))
        })
        .then(() => {
          B = []
          for (const C of me)
            if (C.beforeEnter)
              if (yt(C.beforeEnter)) for (const P of C.beforeEnter) B.push(tn(P, M, K))
              else B.push(tn(C.beforeEnter, M, K))
          return (B.push(b), He(B))
        })
        .then(
          () => (
            M.matched.forEach((C) => (C.enterCallbacks = {})),
            (B = mo(me, 'beforeRouteEnter', M, K, F)),
            B.push(b),
            He(B)
          )
        )
        .then(() => {
          B = []
          for (const C of i.list()) B.push(tn(C, M, K))
          return (B.push(b), He(B))
        })
        .catch((C) => (Dt(C, Te.NAVIGATION_CANCELLED) ? C : Promise.reject(C)))
    )
  }
  function q(M, K, B) {
    a.list().forEach((X) => F(() => X(M, K, B)))
  }
  function D(M, K, B, X, te) {
    const me = p(M, K)
    if (me) return me
    const b = K === lt,
      C = On ? history.state : {}
    ;(B &&
      (X || b
        ? s.replace(M.fullPath, de({ scroll: b && C && C.scroll }, te))
        : s.push(M.fullPath, te)),
      (l.value = M),
      je(M, K, B, b),
      ze())
  }
  let J
  function ne() {
    J ||
      (J = s.listen((M, K, B) => {
        if (!wt.listening) return
        const X = y(M),
          te = L(X, wt.currentRoute.value)
        if (te) {
          A(de(te, { replace: !0, force: !0 }), X).catch(gr)
          return
        }
        u = X
        const me = l.value
        ;(On && U_(Za(me.fullPath, B.delta), js()),
          $(X, me)
            .catch((b) =>
              Dt(b, Te.NAVIGATION_ABORTED | Te.NAVIGATION_CANCELLED)
                ? b
                : Dt(b, Te.NAVIGATION_GUARD_REDIRECT)
                  ? (A(de(v(b.to), { force: !0 }), X)
                      .then((C) => {
                        Dt(C, Te.NAVIGATION_ABORTED | Te.NAVIGATION_DUPLICATED) &&
                          !B.delta &&
                          B.type === Jo.pop &&
                          s.go(-1, !1)
                      })
                      .catch(gr),
                    Promise.reject())
                  : (B.delta && s.go(-B.delta, !1), G(b, X, me))
            )
            .then((b) => {
              ;((b = b || D(X, me, !1)),
                b &&
                  (B.delta && !Dt(b, Te.NAVIGATION_CANCELLED)
                    ? s.go(-B.delta, !1)
                    : B.type === Jo.pop &&
                      Dt(b, Te.NAVIGATION_ABORTED | Te.NAVIGATION_DUPLICATED) &&
                      s.go(-1, !1)),
                q(X, me, b))
            })
            .catch(gr))
      }))
  }
  let ae = or(),
    Y = or(),
    Z
  function G(M, K, B) {
    ze(M)
    const X = Y.list()
    return (X.length ? X.forEach((te) => te(M, K, B)) : console.error(M), Promise.reject(M))
  }
  function se() {
    return Z && l.value !== lt
      ? Promise.resolve()
      : new Promise((M, K) => {
          ae.add([M, K])
        })
  }
  function ze(M) {
    return (Z || ((Z = !M), ne(), ae.list().forEach(([K, B]) => (M ? B(M) : K())), ae.reset()), M)
  }
  function je(M, K, B, X) {
    const { scrollBehavior: te } = e
    if (!On || !te) return Promise.resolve()
    const me =
      (!B && j_(Za(M.fullPath, 0))) || ((X || !B) && history.state && history.state.scroll) || null
    return Vn()
      .then(() => te(M, K, me))
      .then((b) => b && $_(b))
      .catch((b) => G(b, M, K))
  }
  const Me = (M) => s.go(M)
  let vt
  const Et = new Set(),
    wt = {
      currentRoute: l,
      listening: !0,
      addRoute: h,
      removeRoute: E,
      clearRoutes: t.clearRoutes,
      hasRoute: R,
      getRoutes: g,
      resolve: y,
      options: e,
      push: _,
      replace: T,
      go: Me,
      back: () => Me(-1),
      forward: () => Me(1),
      beforeEach: o.add,
      beforeResolve: i.add,
      afterEach: a.add,
      onError: Y.add,
      isReady: se,
      install(M) {
        ;(M.component('RouterLink', gy),
          M.component('RouterView', _f),
          (M.config.globalProperties.$router = wt),
          Object.defineProperty(M.config.globalProperties, '$route', {
            enumerable: !0,
            get: () => _e(l),
          }),
          On && !vt && l.value === lt && ((vt = !0), _(s.location).catch((X) => {})))
        const K = {}
        for (const X in lt) Object.defineProperty(K, X, { get: () => l.value[X], enumerable: !0 })
        ;(M.provide(Di, wt), M.provide(hf, Bt(K)), M.provide(Qo, l))
        const B = M.unmount
        ;(Et.add(M),
          (M.unmount = function () {
            ;(Et.delete(M),
              Et.size < 1 && ((u = lt), J && J(), (J = null), (l.value = lt), (vt = !1), (Z = !1)),
              B())
          }))
      },
    }
  function He(M) {
    return M.reduce((K, B) => K.then(() => F(B)), Promise.resolve())
  }
  return wt
}
const vy = /(:\w+)\([^)]+\)/g,
  Ey = /(:\w+)[?+*]/g,
  wy = /:\w+/g,
  Cy = (e, t) =>
    t.path
      .replace(vy, '$1')
      .replace(Ey, '$1')
      .replace(wy, (n) => e.params[n.slice(1)]?.toString() || ''),
  zo = (e, t) => {
    const n = e.route.matched.find((s) => s.components?.default === e.Component.type),
      r = t ?? n?.meta.key ?? (n && Cy(e.route, n))
    return typeof r == 'function' ? r(e.route) : r
  },
  Ry = (e, t) => ({ default: () => (e ? Xe(_h, e === !0 ? {} : e, t) : t) })
function Fi(e) {
  return Array.isArray(e) ? e : [e]
}
const Ty = 'modulepreload',
  Sy = function (e, t) {
    return new URL(e, t).href
  },
  dl = {},
  Tr = function (t, n, r) {
    let s = Promise.resolve()
    if (n && n.length > 0) {
      let u = function (c) {
        return Promise.all(
          c.map((f) =>
            Promise.resolve(f).then(
              (d) => ({ status: 'fulfilled', value: d }),
              (d) => ({ status: 'rejected', reason: d })
            )
          )
        )
      }
      const i = document.getElementsByTagName('link'),
        a = document.querySelector('meta[property=csp-nonce]'),
        l = a?.nonce || a?.getAttribute('nonce')
      s = u(
        n.map((c) => {
          if (((c = Sy(c, r)), c in dl)) return
          dl[c] = !0
          const f = c.endsWith('.css'),
            d = f ? '[rel="stylesheet"]' : ''
          if (r)
            for (let E = i.length - 1; E >= 0; E--) {
              const g = i[E]
              if (g.href === c && (!f || g.rel === 'stylesheet')) return
            }
          else if (document.querySelector(`link[href="${c}"]${d}`)) return
          const h = document.createElement('link')
          if (
            ((h.rel = f ? 'stylesheet' : Ty),
            f || (h.as = 'script'),
            (h.crossOrigin = ''),
            (h.href = c),
            l && h.setAttribute('nonce', l),
            document.head.appendChild(h),
            f)
          )
            return new Promise((E, g) => {
              ;(h.addEventListener('load', E),
                h.addEventListener('error', () => g(new Error(`Unable to preload CSS for ${c}`))))
            })
        })
      )
    }
    function o(i) {
      const a = new Event('vite:preloadError', { cancelable: !0 })
      if (((a.payload = i), window.dispatchEvent(a), !a.defaultPrevented)) throw i
    }
    return s.then((i) => {
      for (const a of i || []) a.status === 'rejected' && o(a.reason)
      return t().catch(o)
    })
  },
  _o = [
    {
      name: 'index',
      path: '/',
      component: () => Tr(() => import('./DK5_rKfQ.js'), __vite__mapDeps([0, 1]), import.meta.url),
    },
  ],
  Ly = (e, t) => ({ default: () => (e ? Xe(_p, e === !0 ? {} : e, t) : t.default?.()) }),
  ky = /(:\w+)\([^)]+\)/g,
  Ay = /(:\w+)[?+*]/g,
  Py = /:\w+/g
function hl(e) {
  const t =
    e?.meta.key ??
    e.path
      .replace(ky, '$1')
      .replace(Ay, '$1')
      .replace(Py, (n) => e.params[n.slice(1)]?.toString() || '')
  return typeof t == 'function' ? t(e) : t
}
function Oy(e, t) {
  return e === t || t === lt
    ? !1
    : hl(e) !== hl(t)
      ? !0
      : !e.matched.every(
          (r, s) => r.components && r.components.default === t.matched[s]?.components?.default
        )
}
const Iy = {
  scrollBehavior(e, t, n) {
    const r = fe(),
      s = ot().options?.scrollBehaviorType ?? 'auto'
    if (e.path.replace(/\/$/, '') === t.path.replace(/\/$/, ''))
      return t.hash && !e.hash
        ? { left: 0, top: 0 }
        : e.hash
          ? { el: e.hash, top: yf(e.hash), behavior: s }
          : !1
    if (
      (typeof e.meta.scrollToTop == 'function' ? e.meta.scrollToTop(e, t) : e.meta.scrollToTop) ===
      !1
    )
      return !1
    const i = r._runningTransition ? 'page:transition:finish' : 'page:loading:end'
    return new Promise((a) => {
      if (t === lt) {
        a(pl(e, t, n, s))
        return
      }
      r.hooks.hookOnce(i, () => {
        requestAnimationFrame(() => a(pl(e, t, n, s)))
      })
    })
  },
}
function yf(e) {
  try {
    const t = document.querySelector(e)
    if (t)
      return (
        (Number.parseFloat(getComputedStyle(t).scrollMarginTop) || 0) +
        (Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0)
      )
  } catch {}
  return 0
}
function pl(e, t, n, r) {
  if (n) return n
  const s = Oy(e, t)
  return e.hash ? { el: e.hash, top: yf(e.hash), behavior: s ? r : 'instant' } : { left: 0, top: 0 }
}
const Ny = { hashMode: !1, scrollBehaviorType: 'auto' },
  Qt = { ...Ny, ...Iy },
  xy = async (e, t) => {
    let n, r
    if (!e.meta?.validate) return
    const s = (([n, r] = Cn(() => Promise.resolve(e.meta.validate(e)))), (n = await n), r(), n)
    if (s === !0) return
    const o = Rn({
      fatal: !0,
      status: (s && (s.status || s.statusCode)) || 404,
      statusText: (s && (s.statusText || s.statusMessage)) || `Page Not Found: ${e.fullPath}`,
      data: { path: e.fullPath },
    })
    return (typeof window < 'u' && window.history.pushState({}, '', t.fullPath), o)
  },
  My = (e) => {
    const t = Us({ path: e.path })
    if (t.redirect) {
      const n = t.redirect.includes('#') ? t.redirect : t.redirect + e.hash
      return Nt(n, { acceptRelative: !0 }) ? ((window.location.href = n), !1) : n
    }
  },
  Dy = [xy, My],
  Zo = {}
function Fy(e, t, n) {
  const { pathname: r, search: s, hash: o } = t,
    i = e.indexOf('#')
  if (i > -1) {
    const u = o.includes(e.slice(i)) ? e.slice(i).length : 1
    let c = o.slice(u)
    return (c[0] !== '/' && (c = '/' + c), Da(c, ''))
  }
  const a = Da(r, e),
    l = !n || yg(a, n) ? a : n
  return l + (l.includes('?') ? '' : s) + o
}
const Hy = Qe({
    name: 'nuxt:router',
    enforce: 'pre',
    async setup(e) {
      let t,
        n,
        r = xr().app.baseURL
      const s = Qt.history?.(r) ?? z_(r),
        o = Qt.routes ? (([t, n] = Cn(() => Qt.routes(_o))), (t = await t), n(), t ?? _o) : _o
      let i
      const a = by({
        ...Qt,
        scrollBehavior: (R, y, v) => {
          if (y === lt) {
            i = v
            return
          }
          if (Qt.scrollBehavior) {
            if (
              ((a.options.scrollBehavior = Qt.scrollBehavior),
              'scrollRestoration' in window.history)
            ) {
              const p = a.beforeEach(() => {
                ;(p(), (window.history.scrollRestoration = 'manual'))
              })
            }
            return Qt.scrollBehavior(R, lt, i || v)
          }
        },
        history: s,
        routes: o,
      })
      ;('scrollRestoration' in window.history && (window.history.scrollRestoration = 'auto'),
        e.vueApp.use(a))
      const l = Wn(a.currentRoute.value)
      ;(a.afterEach((R, y) => {
        l.value = y
      }),
        Object.defineProperty(e.vueApp.config.globalProperties, 'previousRoute', {
          get: () => l.value,
        }))
      const u = Fy(r, window.location, e.payload.path),
        c = Wn(a.currentRoute.value),
        f = () => {
          c.value = a.currentRoute.value
        }
      a.afterEach((R, y) => {
        R.matched.at(-1)?.components?.default === y.matched.at(-1)?.components?.default && f()
      })
      const d = { sync: f }
      for (const R in c.value)
        Object.defineProperty(d, R, { get: () => c.value[R], enumerable: !0 })
      ;((e._route = Bt(d)), (e._middleware ||= { global: [], named: {} }))
      const h = $s()
      a.afterEach(async (R, y, v) => {
        ;(delete e._processingMiddleware,
          !e.isHydrating && h.value && (await e.runWithContext(dm)),
          v && (await e.callHook('page:loading:end')))
      })
      try {
        ;(([t, n] = Cn(() => a.isReady())), await t, n())
      } catch (R) {
        ;(([t, n] = Cn(() => e.runWithContext(() => _n(R)))), await t, n())
      }
      const E = u !== a.currentRoute.value.fullPath ? a.resolve(u) : a.currentRoute.value
      f()
      const g = e.payload.state._layout
      return (
        a.beforeEach(async (R, y) => {
          ;(await e.callHook('page:loading:start'),
            (R.meta = an(R.meta)),
            e.isHydrating && g && !It(R.meta.layout) && (R.meta.layout = g),
            (e._processingMiddleware = !0))
          {
            const v = new Set([...Dy, ...e._middleware.global])
            for (const _ of R.matched) {
              const T = _.meta.middleware
              if (T) for (const L of Fi(T)) v.add(L)
            }
            const p = Us({ path: R.path })
            if (p.appMiddleware)
              for (const _ in p.appMiddleware) p.appMiddleware[_] ? v.add(_) : v.delete(_)
            for (const _ of v) {
              const T =
                typeof _ == 'string'
                  ? e._middleware.named[_] || (await Zo[_]?.().then((L) => L.default || L))
                  : _
              if (!T) throw new Error(`Unknown route middleware: '${_}'.`)
              try {
                const L = await e.runWithContext(() => T(R, y))
                if (
                  !e.payload.serverRendered &&
                  e.isHydrating &&
                  (L === !1 || L instanceof Error)
                ) {
                  const A = L || Rn({ status: 404, statusText: `Page Not Found: ${u}` })
                  return (await e.runWithContext(() => _n(A)), !1)
                }
                if (L === !0) continue
                if (L === !1) return L
                if (L) return (qu(L) && L.fatal && (await e.runWithContext(() => _n(L))), L)
              } catch (L) {
                const A = Rn(L)
                return (A.fatal && (await e.runWithContext(() => _n(A))), A)
              }
            }
          }
        }),
        a.onError(async () => {
          ;(delete e._processingMiddleware, await e.callHook('page:loading:end'))
        }),
        a.afterEach((R) => {
          if (R.matched.length === 0 && !h.value)
            return e.runWithContext(() =>
              _n(
                Rn({
                  status: 404,
                  fatal: !1,
                  statusText: `Page not found: ${R.fullPath}`,
                  data: { path: R.fullPath },
                })
              )
            )
        }),
        e.hooks.hookOnce('app:created', async () => {
          try {
            ;('name' in E && (E.name = void 0),
              await a.replace({ ...E, force: !0 }),
              (a.options.scrollBehavior = Qt.scrollBehavior))
          } catch (R) {
            await e.runWithContext(() => _n(R))
          }
        }),
        { provide: { router: a } }
      )
    },
  }),
  gl =
    globalThis.requestIdleCallback ||
    ((e) => {
      const t = Date.now(),
        n = { didTimeout: !1, timeRemaining: () => Math.max(0, 50 - (Date.now() - t)) }
      return setTimeout(() => {
        e(n)
      }, 1)
    }),
  C0 =
    globalThis.cancelIdleCallback ||
    ((e) => {
      clearTimeout(e)
    }),
  Hi = (e) => {
    const t = fe()
    t.isHydrating
      ? t.hooks.hookOnce('app:suspense:resolve', () => {
          gl(() => e())
        })
      : gl(() => e())
  },
  $y = Qe({
    name: 'nuxt:payload',
    setup(e) {
      const t = new Set()
      ;(ot().beforeResolve(async (n, r) => {
        if (n.path === r.path) return
        const s = await Ja(n.path)
        if (s) {
          for (const o of t) delete e.static.data[o]
          for (const o in s.data) (o in e.static.data || t.add(o), (e.static.data[o] = s.data[o]))
        }
      }),
        Hi(() => {
          ;(e.hooks.hook('link:prefetch', async (n) => {
            const { hostname: r } = new URL(n, window.location.href)
            r === window.location.hostname &&
              (await Ja(n).catch(() => {
                console.warn('[nuxt] Error preloading payload for', n)
              }))
          }),
            navigator.connection?.effectiveType !== 'slow-2g' && setTimeout(Ni, 1e3))
        }))
    },
  }),
  Uy = Qe(() => {
    const e = ot()
    Hi(() => {
      e.beforeResolve(async () => {
        await new Promise((t) => {
          ;(setTimeout(t, 100),
            requestAnimationFrame(() => {
              setTimeout(t, 0)
            }))
        })
      })
    })
  }),
  jy = Qe((e) => {
    let t
    async function n() {
      let r
      try {
        r = await Ni()
      } catch (s) {
        const o = s
        if (!('status' in o && (o.status === 404 || o.status === 403))) throw o
      }
      ;(t && clearTimeout(t), (t = setTimeout(n, Ba)))
      try {
        const s = await $fetch(Pi('builds/latest.json') + `?${Date.now()}`)
        s.id !== r?.id && (e.hooks.callHook('app:manifest:update', s), t && clearTimeout(t))
      } catch {}
    }
    Hi(() => {
      t = setTimeout(n, Ba)
    })
  })
function By(e = {}) {
  const t = e.path || window.location.pathname
  let n = {}
  try {
    n = Er(sessionStorage.getItem('nuxt:reload') || '{}')
  } catch {}
  if (e.force || n?.path !== t || n?.expires < Date.now()) {
    try {
      sessionStorage.setItem(
        'nuxt:reload',
        JSON.stringify({ path: t, expires: Date.now() + (e.ttl ?? 1e4) })
      )
    } catch {}
    if (e.persistState)
      try {
        sessionStorage.setItem('nuxt:reload:state', JSON.stringify({ state: fe().payload.state }))
      } catch {}
    window.location.pathname !== t ? (window.location.href = t) : window.location.reload()
  }
}
const Wy = Qe({
    name: 'nuxt:chunk-reload',
    setup(e) {
      const t = ot(),
        n = xr(),
        r = new Set()
      ;(t.beforeEach(() => {
        r.clear()
      }),
        e.hook('app:chunkError', ({ error: o }) => {
          r.add(o)
        }))
      function s(o) {
        const i = Tn(n.app.baseURL, o.fullPath)
        By({ path: i, persistState: !0 })
      }
      ;(e.hook('app:manifest:update', () => {
        t.beforeResolve(s)
      }),
        t.onError((o, i) => {
          r.has(o) && s(i)
        }))
    },
  }),
  Vy = Qe({ name: 'nuxt:global-components' }),
  Kr = {}
function Ky(e) {
  if (e?.__asyncLoader && !e.__asyncResolved) return e.__asyncLoader()
}
async function Gy(e, t = ot()) {
  const { path: n, matched: r } = t.resolve(e)
  if (!r.length || ((t._routePreloaded ||= new Set()), t._routePreloaded.has(n))) return
  const s = (t._preloadPromises ||= [])
  if (s.length > 4) return Promise.all(s).then(() => Gy(e, t))
  t._routePreloaded.add(n)
  for (const o of r) {
    const i = o.components?.default
    if (typeof i != 'function') continue
    const a = Promise.resolve(i())
      .catch(() => {})
      .finally(() => s.splice(s.indexOf(a)))
    s.push(a)
  }
  await Promise.all(s)
}
const qy = Qe({
  name: 'nuxt:prefetch',
  setup(e) {
    const t = ot()
    ;(e.hooks.hook('app:mounted', () => {
      t.beforeEach(async (n) => {
        const r = n?.meta?.layout
        r && typeof Kr[r] == 'function' && (await Kr[r]())
      })
    }),
      e.hooks.hook('link:prefetch', (n) => {
        if (Nt(n)) return
        const r = t.resolve(n)
        if (!r) return
        const s = r.meta.layout
        let o = Fi(r.meta.middleware)
        o = o.filter((i) => typeof i == 'string')
        for (const i of o) typeof Zo[i] == 'function' && Zo[i]()
        typeof s == 'string' && s in Kr && Ky(Kr[s])
      }))
  },
})
function Yy(e, t) {
  typeof console < 'u' && (console.warn('[intlify] ' + e), t && console.warn(t.stack))
}
const ms = typeof window < 'u',
  cn = (e, t = !1) => (t ? Symbol.for(e) : Symbol(e)),
  Jy = (e, t, n) => Xy({ l: e, k: t, s: n }),
  Xy = (e) =>
    JSON.stringify(e)
      .replace(/\u2028/g, '\\u2028')
      .replace(/\u2029/g, '\\u2029')
      .replace(/\u0027/g, '\\u0027'),
  Pe = (e) => typeof e == 'number' && isFinite(e),
  Qy = (e) => Ws(e) === '[object Date]',
  _s = (e) => Ws(e) === '[object RegExp]',
  Bs = (e) => ie(e) && Object.keys(e).length === 0,
  ke = Object.assign,
  zy = Object.create,
  pe = (e = null) => zy(e)
function ml(e) {
  return e
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
    .replace(/\//g, '&#x2F;')
    .replace(/=/g, '&#x3D;')
}
function _l(e) {
  return e
    .replace(/&(?![a-zA-Z0-9#]{2,6};)/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}
function Zy(e) {
  return (
    (e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (r, s, o) => `${s}="${_l(o)}"`)),
    (e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (r, s, o) => `${s}='${_l(o)}'`)),
    /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) &&
      (e = e.replace(/(\s+)(on)(\w+\s*=)/gi, '$1&#111;n$3')),
    [
      /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
      /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi,
    ].forEach((r) => {
      e = e.replace(r, '$1javascript&#58;')
    }),
    e
  )
}
const eb = Object.prototype.hasOwnProperty
function pt(e, t) {
  return eb.call(e, t)
}
const Se = Array.isArray,
  Ee = (e) => typeof e == 'function',
  V = (e) => typeof e == 'string',
  Ce = (e) => typeof e == 'boolean',
  ce = (e) => e !== null && typeof e == 'object',
  tb = (e) => ce(e) && Ee(e.then) && Ee(e.catch),
  bf = Object.prototype.toString,
  Ws = (e) => bf.call(e),
  ie = (e) => Ws(e) === '[object Object]',
  nb = (e) =>
    e == null ? '' : Se(e) || (ie(e) && e.toString === bf) ? JSON.stringify(e, null, 2) : String(e)
function $i(e, t = '') {
  return e.reduce((n, r, s) => (s === 0 ? n + r : n + t + r), '')
}
const Gr = (e) => !ce(e) || Se(e)
function Un(e, t) {
  if (Gr(e) || Gr(t)) throw new Error('Invalid value')
  const n = [{ src: e, des: t }]
  for (; n.length; ) {
    const { src: r, des: s } = n.pop()
    Object.keys(r).forEach((o) => {
      o !== '__proto__' &&
        (ce(r[o]) && !ce(s[o]) && (s[o] = Array.isArray(r[o]) ? [] : pe()),
        Gr(s[o]) || Gr(r[o]) ? (s[o] = r[o]) : n.push({ src: r[o], des: s[o] }))
    })
  }
}
function rb(e, t = e.getCurrentLanguage(), n = e.getCurrentDirection()) {
  const r = { htmlAttrs: {}, link: [], meta: [] }
  if ((e.dir && (r.htmlAttrs.dir = n), e.lang && t && (r.htmlAttrs.lang = t), e.seo)) {
    const s = ob(e)
    ;((r.link = r.link.concat(s, ab(e))),
      (r.meta = r.meta.concat(
        lb(e),
        cb(e),
        ub(
          e,
          e.locales.map((o) => o.language || o.code)
        )
      )))
  }
  return r
}
function sb(e) {
  const t = new Map()
  for (const n of e) {
    if (!n.language) {
      console.warn('Locale `language` ISO code is required to generate alternate link')
      continue
    }
    const [r, s] = n.language.split('-')
    ;(r && s && (n.isCatchallLocale || !t.has(r)) && t.set(r, n), t.set(n.language, n))
  }
  return t
}
function ob(e) {
  if (!e.hreflangLinks) return []
  const t = [],
    n = sb(e.locales)
  for (const [r, s] of n.entries()) {
    const o = ib(r, s, e)
    o &&
      (t.push(o),
      e.defaultLocale &&
        e.defaultLocale === s.code &&
        t[0].hreflang !== 'x-default' &&
        t.unshift({ [e.key]: 'i18n-xd', rel: 'alternate', href: o.href, hreflang: 'x-default' }))
  }
  return t
}
function ib(e, t, n, r = n.strictCanonicals ? n.getRouteWithoutQuery() : void 0) {
  const s = n.getLocalizedRoute(t.code, r)
  if (!s) return
  const o = Fs(Nt(s) ? s : Tn(n.baseUrl, s), n.strictCanonicals ? Ef(n) : {})
  return { [n.key]: `i18n-alt-${e}`, rel: 'alternate', href: o, hreflang: e }
}
function vf(e, t = e.getCurrentRoute()) {
  const n = e.getLocaleRoute(Object.assign({}, t, { path: void 0, name: e.getRouteBaseName(t) }))
  return n ? Fs(Tn(e.baseUrl, n.path), Ef(e)) : ''
}
function ab(e, t = vf(e)) {
  return t ? [{ [e.key]: 'i18n-can', rel: 'canonical', href: t }] : []
}
function Ef(e, t = e.getCurrentRoute()) {
  const r =
      e.getLocaleRoute(Object.assign({}, t, { path: void 0, name: e.getRouteBaseName(t) }))
        ?.query ?? {},
    s = {}
  for (const o of e.canonicalQueries.filter((i) => i in r)) {
    s[o] ??= []
    for (const i of fb(r[o])) s[o].push(i || '')
  }
  return s
}
function lb(e, t = vf(e)) {
  return t ? [{ [e.key]: 'i18n-og-url', property: 'og:url', content: t }] : []
}
function cb(e, t = e.getCurrentLanguage()) {
  return t ? [{ [e.key]: 'i18n-og', property: 'og:locale', content: wf(t) }] : []
}
function ub(e, t, n = e.getCurrentLanguage()) {
  return t
    .filter((s) => s && s !== n)
    .map((s) => ({ [e.key]: `i18n-og-alt-${s}`, property: 'og:locale:alternate', content: wf(s) }))
}
function wf(e = '') {
  return e.replace(/-/g, '_')
}
function fb(e) {
  return Array.isArray(e) ? e : [e]
}
function Cf(e, t, n = e.getLocale()) {
  if (V(t) && Nt(t, { acceptRelative: !0 })) return t
  try {
    return Tf(e, t, n).fullPath
  } catch {
    return ''
  }
}
function Rf(e, t, n = e.getLocale()) {
  try {
    return Tf(e, t, n)
  } catch {
    return
  }
}
function db(e) {
  if (!V(e)) return ke({}, e)
  if (e[0] === '/') {
    const { pathname: t, search: n, hash: r } = Uo(e)
    return { path: t, query: Li(n), hash: r }
  }
  return { name: e }
}
function Tf(e, t, n) {
  const r = db(t),
    s = e.router.resolve(e.resolveLocalizedRouteObject(r, n))
  return s.name ? s : e.router.resolve(t)
}
function Sf(e, t, n = e.router.currentRoute.value) {
  const r = e.getRouteBaseName(n)
  if (!r) return ''
  const s = {
      name: r,
      params: ke({}, n.params, e.getLocalizedDynamicParams(t)),
      fullPath: n.fullPath,
      query: n.query,
      hash: n.hash,
      path: n.path,
      meta: n.meta,
    },
    o = Cf(e, s, t)
  return e.afterSwitchLocalePath(o, t)
}
function hb(e, t, n = e.getLocale(), r = e.getLocales(), s = e.getBaseUrl()) {
  const o = r.find((a) => a.code === n) || {},
    i = (typeof t.seo == 'object' && t.seo?.canonicalQueries) || []
  return (
    s || console.warn('I18n `baseUrl` is required to generate valid SEO tag links.'),
    {
      ...t,
      key: 'id',
      locales: r,
      baseUrl: s,
      canonicalQueries: i,
      hreflangLinks: e.routingOptions.hreflangLinks,
      defaultLocale: e.routingOptions.defaultLocale,
      strictCanonicals: e.routingOptions.strictCanonicals,
      getRouteBaseName: e.getRouteBaseName,
      getCurrentRoute: () => e.router.currentRoute.value,
      getCurrentLanguage: () => o.language,
      getCurrentDirection: () => o.dir || 'ltr',
      getLocaleRoute: (a) => Rf(e, a),
      getLocalizedRoute: (a, l) => Sf(e, a, l),
      getRouteWithoutQuery: () => {
        try {
          return ke({}, e.router.resolve({ query: {} }), { meta: e.router.currentRoute.value.meta })
        } catch {
          return
        }
      },
    }
  )
}
function pb(e, { dir: t = !0, lang: n = !0, seo: r = !0 }) {
  return rb(hb(e, { dir: t, lang: n, seo: r }))
}
function gb(e = 0) {
  return (t) => {
    const s = (typeof t == 'string' ? t : t.pathname).split('?')[0].split('/')
    return (s[0] === '' && s.shift(), (s.length > e && s[e]) || '')
  }
}
const Lf = '___'
function kf(e) {
  return typeof e == 'string' ? e : e != null ? e.toString() : ''
}
function yo(e) {
  return kf(typeof e == 'object' ? e?.name : e).split(Lf)[0]
}
const mb = gb(0),
  Af = (e) => mb(e),
  _b = (e) => e.split(Lf).at(1) ?? ''
function yb(e) {
  return String(typeof e != 'object' ? e : e?.name || e?.path || '')
}
function bb(e) {
  const t = yb(e)
  return t[0] === '/' ? Af(t) : _b(t)
}
function vb(e) {
  return (t) => kf(t)
}
function Eb(e) {
  return (t) => t
}
const Sr = ['pt', 'en'],
  ys = {
    pt: [
      {
        key: 'locale_pt_46json_2acea0e1',
        load: () => Tr(() => import('./5rUxOOEA.js'), [], import.meta.url),
        cache: !0,
      },
    ],
    en: [
      {
        key: 'locale_en_46json_11b9a14f',
        load: () => Tr(() => import('./CsB6s8_7.js'), [], import.meta.url),
        cache: !0,
      },
    ],
  },
  wb = [],
  Mr = [
    { code: 'pt', name: 'Português', language: 'pt-BR' },
    { code: 'en', name: 'English', language: 'en-US' },
  ]
function yl(e) {
  return typeof e == 'string' ? `'${e}'` : new Cb().serialize(e)
}
const Cb = (function () {
  class e {
    #e = new Map()
    compare(n, r) {
      const s = typeof n,
        o = typeof r
      return s === 'string' && o === 'string'
        ? n.localeCompare(r)
        : s === 'number' && o === 'number'
          ? n - r
          : String.prototype.localeCompare.call(this.serialize(n, !0), this.serialize(r, !0))
    }
    serialize(n, r) {
      if (n === null) return 'null'
      switch (typeof n) {
        case 'string':
          return r ? n : `'${n}'`
        case 'bigint':
          return `${n}n`
        case 'object':
          return this.$object(n)
        case 'function':
          return this.$function(n)
      }
      return String(n)
    }
    serializeObject(n) {
      const r = Object.prototype.toString.call(n)
      if (r !== '[object Object]')
        return this.serializeBuiltInType(r.length < 10 ? `unknown:${r}` : r.slice(8, -1), n)
      const s = n.constructor,
        o = s === Object || s === void 0 ? '' : s.name
      if (o !== '' && globalThis[o] === s) return this.serializeBuiltInType(o, n)
      if (typeof n.toJSON == 'function') {
        const i = n.toJSON()
        return o + (i !== null && typeof i == 'object' ? this.$object(i) : `(${this.serialize(i)})`)
      }
      return this.serializeObjectEntries(o, Object.entries(n))
    }
    serializeBuiltInType(n, r) {
      const s = this['$' + n]
      if (s) return s.call(this, r)
      if (typeof r?.entries == 'function') return this.serializeObjectEntries(n, r.entries())
      throw new Error(`Cannot serialize ${n}`)
    }
    serializeObjectEntries(n, r) {
      const s = Array.from(r).sort((i, a) => this.compare(i[0], a[0]))
      let o = `${n}{`
      for (let i = 0; i < s.length; i++) {
        const [a, l] = s[i]
        ;((o += `${this.serialize(a, !0)}:${this.serialize(l)}`), i < s.length - 1 && (o += ','))
      }
      return o + '}'
    }
    $object(n) {
      let r = this.#e.get(n)
      return (
        r === void 0 &&
          (this.#e.set(n, `#${this.#e.size}`), (r = this.serializeObject(n)), this.#e.set(n, r)),
        r
      )
    }
    $function(n) {
      const r = Function.prototype.toString.call(n)
      return r.slice(-15) === '[native code] }'
        ? `${n.name || ''}()[native]`
        : `${n.name}(${n.length})${r.replace(/\s*\n\s*/g, '')}`
    }
    $Array(n) {
      let r = '['
      for (let s = 0; s < n.length; s++)
        ((r += this.serialize(n[s])), s < n.length - 1 && (r += ','))
      return r + ']'
    }
    $Date(n) {
      try {
        return `Date(${n.toISOString()})`
      } catch {
        return 'Date(null)'
      }
    }
    $ArrayBuffer(n) {
      return `ArrayBuffer[${new Uint8Array(n).join(',')}]`
    }
    $Set(n) {
      return `Set${this.$Array(Array.from(n).sort((r, s) => this.compare(r, s)))}`
    }
    $Map(n) {
      return this.serializeObjectEntries('Map', n.entries())
    }
  }
  for (const t of ['Error', 'RegExp', 'URL'])
    e.prototype['$' + t] = function (n) {
      return `${t}(${n})`
    }
  for (const t of [
    'Int8Array',
    'Uint8Array',
    'Uint8ClampedArray',
    'Int16Array',
    'Uint16Array',
    'Int32Array',
    'Uint32Array',
    'Float32Array',
    'Float64Array',
  ])
    e.prototype['$' + t] = function (n) {
      return `${t}[${n.join(',')}]`
    }
  for (const t of ['BigInt64Array', 'BigUint64Array'])
    e.prototype['$' + t] = function (n) {
      return `${t}[${n.join('n,')}${n.length > 0 ? 'n' : ''}]`
    }
  return e
})()
function Rb(e, t) {
  return e === t || yl(e) === yl(t)
}
const Tb = '$s'
function Pf(...e) {
  const t = typeof e[e.length - 1] == 'string' ? e.pop() : void 0
  typeof e[0] != 'string' && e.unshift(t)
  const [n, r] = e
  if (!n || typeof n != 'string')
    throw new TypeError('[nuxt] [useState] key must be a string: ' + n)
  if (r !== void 0 && typeof r != 'function')
    throw new Error('[nuxt] [useState] init must be a function: ' + r)
  const s = Tb + n,
    o = fe(),
    i = Pc(o.payload.state, s)
  if (i.value === void 0 && r) {
    const a = r()
    if (Re(a)) return ((o.payload.state[s] = a), a)
    i.value = a
  }
  return i
}
function Sb(e, t) {
  if (typeof e != 'string') throw new TypeError('argument str must be a string')
  const n = {},
    r = t || {},
    s = r.decode || Lb
  let o = 0
  for (; o < e.length; ) {
    const i = e.indexOf('=', o)
    if (i === -1) break
    let a = e.indexOf(';', o)
    if (a === -1) a = e.length
    else if (a < i) {
      o = e.lastIndexOf(';', i - 1) + 1
      continue
    }
    const l = e.slice(o, i).trim()
    if (r?.filter && !r?.filter(l)) {
      o = a + 1
      continue
    }
    if (n[l] === void 0) {
      let u = e.slice(i + 1, a).trim()
      ;(u.codePointAt(0) === 34 && (u = u.slice(1, -1)), (n[l] = kb(u, s)))
    }
    o = a + 1
  }
  return n
}
function Lb(e) {
  return e.includes('%') ? decodeURIComponent(e) : e
}
function kb(e, t) {
  try {
    return t(e)
  } catch {
    return e
  }
}
const qr = /^[\u0009\u0020-\u007E\u0080-\u00FF]+$/
function bl(e, t, n) {
  const r = n || {},
    s = r.encode || encodeURIComponent
  if (typeof s != 'function') throw new TypeError('option encode is invalid')
  if (!qr.test(e)) throw new TypeError('argument name is invalid')
  const o = s(t)
  if (o && !qr.test(o)) throw new TypeError('argument val is invalid')
  let i = e + '=' + o
  if (r.maxAge !== void 0 && r.maxAge !== null) {
    const a = r.maxAge - 0
    if (Number.isNaN(a) || !Number.isFinite(a)) throw new TypeError('option maxAge is invalid')
    i += '; Max-Age=' + Math.floor(a)
  }
  if (r.domain) {
    if (!qr.test(r.domain)) throw new TypeError('option domain is invalid')
    i += '; Domain=' + r.domain
  }
  if (r.path) {
    if (!qr.test(r.path)) throw new TypeError('option path is invalid')
    i += '; Path=' + r.path
  }
  if (r.expires) {
    if (!Ab(r.expires) || Number.isNaN(r.expires.valueOf()))
      throw new TypeError('option expires is invalid')
    i += '; Expires=' + r.expires.toUTCString()
  }
  if ((r.httpOnly && (i += '; HttpOnly'), r.secure && (i += '; Secure'), r.priority))
    switch (typeof r.priority == 'string' ? r.priority.toLowerCase() : r.priority) {
      case 'low': {
        i += '; Priority=Low'
        break
      }
      case 'medium': {
        i += '; Priority=Medium'
        break
      }
      case 'high': {
        i += '; Priority=High'
        break
      }
      default:
        throw new TypeError('option priority is invalid')
    }
  if (r.sameSite)
    switch (typeof r.sameSite == 'string' ? r.sameSite.toLowerCase() : r.sameSite) {
      case !0: {
        i += '; SameSite=Strict'
        break
      }
      case 'lax': {
        i += '; SameSite=Lax'
        break
      }
      case 'strict': {
        i += '; SameSite=Strict'
        break
      }
      case 'none': {
        i += '; SameSite=None'
        break
      }
      default:
        throw new TypeError('option sameSite is invalid')
    }
  return (r.partitioned && (i += '; Partitioned'), i)
}
function Ab(e) {
  return Object.prototype.toString.call(e) === '[object Date]' || e instanceof Date
}
function dt(e) {
  if (typeof e != 'object') return e
  var t,
    n,
    r = Object.prototype.toString.call(e)
  if (r === '[object Object]') {
    if (e.constructor !== Object && typeof e.constructor == 'function') {
      n = new e.constructor()
      for (t in e) e.hasOwnProperty(t) && n[t] !== e[t] && (n[t] = dt(e[t]))
    } else {
      n = {}
      for (t in e)
        t === '__proto__'
          ? Object.defineProperty(n, t, {
              value: dt(e[t]),
              configurable: !0,
              enumerable: !0,
              writable: !0,
            })
          : (n[t] = dt(e[t]))
    }
    return n
  }
  if (r === '[object Array]') {
    for (t = e.length, n = Array(t); t--; ) n[t] = dt(e[t])
    return n
  }
  return r === '[object Set]'
    ? ((n = new Set()),
      e.forEach(function (s) {
        n.add(dt(s))
      }),
      n)
    : r === '[object Map]'
      ? ((n = new Map()),
        e.forEach(function (s, o) {
          n.set(dt(o), dt(s))
        }),
        n)
      : r === '[object Date]'
        ? new Date(+e)
        : r === '[object RegExp]'
          ? ((n = new RegExp(e.source, e.flags)), (n.lastIndex = e.lastIndex), n)
          : r === '[object DataView]'
            ? new e.constructor(dt(e.buffer))
            : r === '[object ArrayBuffer]'
              ? e.slice(0)
              : r.slice(-6) === 'Array]'
                ? new e.constructor(e)
                : e
}
const Pb = {
    path: '/',
    watch: !0,
    decode: (e) => {
      const t = decodeURIComponent(e),
        n = Er(t)
      return typeof n == 'number' && (!Number.isFinite(n) || String(n) !== t) ? t : n
    },
    encode: (e) => encodeURIComponent(typeof e == 'string' ? e : JSON.stringify(e)),
  },
  Yr = globalThis.cookieStore
function Of(e, t) {
  const n = { ...Pb, ...t }
  n.filter ??= (u) => u === e
  const r = vl(n) || {}
  let s
  n.maxAge !== void 0 ? (s = n.maxAge * 1e3) : n.expires && (s = n.expires.getTime() - Date.now())
  const o = s !== void 0 && s <= 0,
    i = o || r[e] === void 0 || r[e] === null,
    a = dt(o ? void 0 : (r[e] ?? n.default?.())),
    l = s && !o ? Nb(a, s, n.watch && n.watch !== 'shallow') : st(a)
  {
    let u = null
    try {
      !Yr && typeof BroadcastChannel < 'u' && (u = new BroadcastChannel(`nuxt:cookies:${e}`))
    } catch {}
    const c = (E = !1) => {
        ;(!E && (n.readonly || Rb(l.value, r[e]))) ||
          (Ib(e, l.value, n), (r[e] = dt(l.value)), u?.postMessage({ value: n.encode(l.value) }))
      },
      f = (E) => {
        const g = E.refresh ? vl(n)?.[e] : n.decode(E.value)
        ;((d = !0),
          (l.value = g),
          (r[e] = dt(g)),
          Vn(() => {
            d = !1
          }))
      }
    let d = !1
    const h = !!Ss()
    if (
      (h &&
        wo(() => {
          ;((d = !0), c(), u?.close())
        }),
      Yr)
    ) {
      const E = (g) => {
        const R = g.changed.find((v) => v.name === e),
          y = g.deleted.find((v) => v.name === e)
        ;(R && f({ value: R.value }), y && f({ value: null }))
      }
      ;(Yr.addEventListener('change', E), h && wo(() => Yr.removeEventListener('change', E)))
    } else u && (u.onmessage = ({ data: E }) => f(E))
    ;(n.watch &&
      ct(
        l,
        () => {
          d || c()
        },
        { deep: n.watch !== 'shallow' }
      ),
      i && c(i))
  }
  return l
}
function vl(e = {}) {
  return Sb(document.cookie, e)
}
function Ob(e, t, n = {}) {
  return t == null ? bl(e, t, { ...n, maxAge: -1 }) : bl(e, t, n)
}
function Ib(e, t, n = {}) {
  document.cookie = Ob(e, t, n)
}
const El = 2147483647
function Nb(e, t, n) {
  let r,
    s,
    o = 0
  const i = n ? st(e) : { value: e }
  return (
    Ss() &&
      wo(() => {
        ;(s?.(), clearTimeout(r))
      }),
    qd((a, l) => {
      n && (s = ct(i, l))
      function u() {
        ;((o = 0), clearTimeout(r))
        const c = t - o,
          f = c < El ? c : El
        r = setTimeout(() => {
          if (((o += f), o < t)) return u()
          ;((i.value = void 0), l())
        }, f)
      }
      return {
        get() {
          return (a(), i.value)
        },
        set(c) {
          ;(u(), (i.value = c), l())
        },
      }
    })
  )
}
function If(e) {
  return new URL(globalThis.location.href)
}
const Nf = new Map(),
  xb = Wu((e, t, n) => {
    if (t === 'messages' || t === 'datetimeFormats' || t === 'numberFormats')
      return ((e[t] ??= pe(null)), Un(n, e[t]), !0)
  })
async function Mb(e) {
  const t = fe()
  let n = { messages: pe(null) }
  for (const r of e) {
    const s = await r().then((i) => (xf(i) ? i.default : i)),
      o = Ee(s) ? await t.runWithContext(() => s()) : s
    n = xb(pe(null), o, n)
  }
  return ((n.fallbackLocale ??= !1), n)
}
const xf = (e) => Ws(e) === '[object Module]'
async function Db(e, t) {
  const n = fe()
  try {
    const r = await n.runWithContext(t.load).then((s) => (xf(s) ? s.default : s))
    return Ee(r) ? await n.runWithContext(() => r(e)) : r
  } catch (r) {
    throw new Error(`Failed loading locale (${e}): ` + r.message)
  }
}
async function Fb(e, t = []) {
  const n = fe(),
    r = await Promise.all(
      t.map(async (o) => {
        const i = Hb(o),
          a = i || (await n.runWithContext(() => Db(e, o)))
        return (
          !i && o.cache !== !1 && Nf.set(o.key, { ttl: Date.now() + 86400 * 1e3, value: a }),
          a
        )
      })
    ),
    s = {}
  for (const o of r) Un(o, s)
  return s
}
function Hb(e) {
  if (e.cache === !1) return
  const t = Nf.get(e.key)
  if (t != null) return t.ttl > Date.now() ? t.value : void 0
}
function Ui(e) {
  return e != null && 'global' in e && 'mode' in e ? e.global : e
}
function Jr(e) {
  const t = Ui(e)
  return '__composer' in t ? t.__composer : t
}
function Vs(e, t) {
  return e ? e.$config.public.i18n : xr().public.i18n
}
function Ks(e) {
  const t = Vs(e).detectBrowserLanguage,
    n = t || {}
  return { ...n, enabled: !!t, cookieKey: n.cookieKey || 'i18n_redirected' }
}
function $b(e) {
  if (e)
    return {
      path: '/' + (V(e) ? e : e.path).replace(/^\//, ''),
      code: (!V(e) && e.statusCode) || 302,
    }
}
function Ub(e) {
  return Array.isArray(e) ? e : [e]
}
function jb(e, t, n) {
  const r = (o = '') => o.replace(/https?:\/\//, ''),
    s = e.filter((o) => r(o.domain) === t || Ub(o.domains).includes(t))
  return s.length <= 1
    ? s[0]?.code
    : s.find((o) => o.code === n)?.code ||
        s.find((o) => o.defaultForDomains?.includes(t) ?? o.domainDefault)?.code
}
function Bb(e, t, n) {
  const r = Mr.find((o) => o.code === n),
    s = e?.[n]?.domain || r?.domain || r?.domains?.find((o) => o === t.host)
  if (s) return Nt(s, { strict: !0 }) ? s : t.protocol + '//' + s
}
function Wb(e) {
  const t = {}
  for (const n of Sr) {
    const r = Vb(e, [n]),
      s = Kb(n, r)
    t[n] = { fallbacks: r, cacheable: s }
  }
  return t
}
function Vb(e, t) {
  if (e === !1) return []
  if (Se(e)) return e
  let n = []
  if (V(e)) return (t.every((s) => s !== e) && n.push(e), n)
  const r = [...t, 'default']
  for (const s of r) s in e && (n = [...n, ...e[s].filter(Boolean)])
  return n
}
function wl(e) {
  return ys[e] != null && ys[e].every((t) => t.cache !== !1)
}
function Kb(e, t) {
  return wl(e) && t.every((n) => wl(n))
}
function Gb(e) {
  return Mr.find((t) => !!t.defaultForDomains?.includes(e))?.code
}
const jn = (e) => Sr.includes(e || ''),
  Cl = (e) => (jn(e) ? e : void 0),
  Mf = () => Pf('i18n:cached-locale-configs', () => {}),
  Df = () => Pf('i18n:resolved-locale', () => '')
function qb({ cookieCrossOrigin: e, cookieDomain: t, cookieSecure: n, cookieKey: r }) {
  const s = new Date()
  return Of(r || 'i18n_redirected', {
    path: '/',
    readonly: !1,
    expires: new Date(s.setDate(s.getDate() + 365)),
    sameSite: e ? 'none' : 'lax',
    domain: t || void 0,
    secure: e || n,
  })
}
function Yb(e, t, n) {
  const r = Ui(t),
    s = Vs(e),
    o = Ks(e),
    i = Mf(),
    a = qb(o),
    l = new Set(),
    u = (R) => i.value[R],
    c = (R) => Bb(s.domainLocales, If(), R),
    f = lv(e, s.baseUrl),
    d = Df(),
    h = async (R) => {
      const y = u(R)?.fallbacks ?? []
      y.includes(R) || y.push(R)
      for (const v of y) {
        const p = await e.runWithContext(() => Fb(v, ys[v]))
        r.mergeLocaleMessage(v, p)
      }
    },
    E = async (R) => {
      if (!(R in ys)) return
      const y = u(R)?.cacheable ? {} : { 'Cache-Control': 'no-cache' },
        v = await $fetch(`/_i18n/yGgzdvbC/${R}/messages.json`, { headers: y })
      for (const p of Object.keys(v)) r.mergeLocaleMessage(p, v[p])
    },
    g = {
      vueI18n: t,
      initial: !0,
      preloaded: !1,
      config: s,
      rootRedirect: $b(s.rootRedirect),
      redirectStatusCode: s.redirectStatusCode ?? 302,
      dynamicResourcesSSG: !1,
      getDefaultLocale: () => n,
      getLocale: () => _e(r.locale),
      setLocale: async (R) => {
        const y = g.getLocale()
        R === y ||
          !jn(R) ||
          (Re(r.locale) ? (r.locale.value = R) : (r.locale = R),
          await e.callHook('i18n:localeSwitched', { newLocale: R, oldLocale: y }),
          (d.value = R))
      },
      setLocaleSuspend: async (R) => {
        jn(R) &&
          ((g.vueI18n.__pendingLocale = R),
          (g.vueI18n.__pendingLocalePromise = new Promise((y) => {
            g.vueI18n.__resolvePendingLocalePromise = async () => {
              ;(g.setCookieLocale(R),
                await g.setLocale(R),
                (g.vueI18n.__pendingLocale = void 0),
                y())
            }
          })),
          (e.isHydrating || !g.config.skipSettingLocaleOnNavigate) &&
            (await g.vueI18n.__resolvePendingLocalePromise?.()))
      },
      getLocales: () => _e(r.locales).map((R) => (V(R) ? { code: R } : R)),
      setCookieLocale: (R) => {
        o.useCookie && jn(R) && (a.value = R)
      },
      getBaseUrl: (R) => Tn((R && c(R)) || f(), e.$config.app.baseURL),
      loadMessages: async (R) => {
        if (!(e.isHydrating && l.has(R)))
          try {
            return g.dynamicResourcesSSG ? await h(R) : await E(R)
          } catch (y) {
            console.warn(`Failed to load messages for locale "${R}"`, y)
          } finally {
            l.add(R)
          }
      },
      composableCtx: void 0,
    }
  return ((g.composableCtx = sv(g, e)), g)
}
function ji(e) {
  if (e._nuxtI18n == null) throw new Error('Nuxt I18n context has not been set up yet.')
  return e._nuxtI18n
}
function Jb(e, t) {
  const n = []
  for (const [r, s] of t.entries()) {
    const o = e.find((i) => i.language?.toLowerCase() === s.toLowerCase())
    if (o) {
      n.push({ code: o.code, score: 1 - r / t.length })
      break
    }
  }
  for (const [r, s] of t.entries()) {
    const o = s.split('-')[0].toLowerCase(),
      i = e.find((a) => a.language?.split('-')[0].toLowerCase() === o)
    if (i) {
      n.push({ code: i.code, score: 0.999 - r / t.length })
      break
    }
  }
  return n
}
function Xb(e, t) {
  return e.score === t.score ? t.code.length - e.code.length : t.score - e.score
}
function Qb(e, t) {
  return (
    Jb(
      e.map((r) => ({ code: r.code, language: r.language || r.code })),
      t
    )
      .sort(Xb)
      .at(0)?.code ?? ''
  )
}
const zb = (e, t) => Of(t).value || void 0,
  Zb = (e, t) => bb(t),
  ev = (e) => Qb(Mr, navigator.languages),
  tv = (e, t, n) => {
    const r = new URL(window.location.href).host,
      s = Mr.map((o) => ({ ...o, domain: n[o.code]?.domain ?? o.domain }))
    return jb(s, r, Af(t))
  },
  Bi = (e, t, n) => {
    const r = Vs(n)
    return {
      cookie: () => zb(e, t.cookieKey),
      header: () => {},
      navigator: () => ev(),
      host: (s) => tv(e, s, r.domainLocales),
      route: (s) => Zb(e, s),
    }
  },
  nv = (e) => !!e.path && !e.name
function Gs(e) {
  const t = e?._nuxtI18n?.composableCtx
  if (!t)
    throw new Error(
      'i18n context is not initialized. Ensure the i18n plugin is installed and the composable is used within a Vue component or setup function.'
    )
  return t
}
const rv = Cr
function sv(e, t = fe()) {
  const n = ot()
  Bi(void 0, Ks(t), t)
  const r = e.getDefaultLocale(),
    s = vb()
  function o(u, c) {
    u.name = yo(u.name || n.currentRoute.value)
    const f = s(u.name, c)
    return (n.hasRoute(f) && (u.name = f), u)
  }
  const i = Eb()
  function a(u, c) {
    const f = i(u, c),
      d = yo(f)
    return d ? ((f.name = s(d, c)), f) : ((f.path = rv(f.path, !0)), f)
  }
  const l = {
    router: n,
    _head: void 0,
    get head() {
      return ((this._head ??= Qm({})), this._head)
    },
    metaState: { htmlAttrs: {}, meta: [], link: [] },
    seoSettings: { dir: !1, lang: !1, seo: !1 },
    localePathPayload: ov(),
    routingOptions: {
      defaultLocale: r,
      strictCanonicals: e.config.experimental.alternateLinkCanonicalQueries ?? !0,
      hreflangLinks: !1,
    },
    getLocale: e.getLocale,
    getLocales: e.getLocales,
    getBaseUrl: e.getBaseUrl,
    getRouteBaseName: yo,
    getRouteLocalizedParams: () => n.currentRoute.value.meta.nuxtI18nInternal ?? {},
    getLocalizedDynamicParams: (u) => l.getRouteLocalizedParams()?.[u],
    afterSwitchLocalePath: (u, c) => (l.getRouteLocalizedParams(), u),
    resolveLocalizedRouteObject: (u, c) => (nv(u) ? a(u, c) : o(u, c)),
  }
  return l
}
function ov(e = fe()) {
  const t = document.querySelector(`[data-nuxt-i18n-slp="${e._id}"]`)?.textContent
  return JSON.parse(t || '{}')
}
async function Ff(e, t) {
  const n = ji(e),
    r = n.getLocale()
  if (t === r && !n.initial) return t
  const s = { oldLocale: r, newLocale: t, initialSetup: n.initial, context: e }
  let o = await e.callHook('i18n:beforeLocaleSwitch', s)
  return (
    o != null,
    (o ??= s.newLocale),
    jn(o) && (t = o),
    await n.loadMessages(t),
    await n.setLocaleSuspend(t),
    t
  )
}
function iv(e, t, n) {
  return !1
}
function av(e, t) {
  const n = Ks(e),
    r = Bi(void 0, n, e),
    s = ji(e),
    o = V(t) ? t : t.path
  function* i() {
    s.initial &&
      n.enabled &&
      !iv(n, o, r.route(o)) &&
      (yield r.cookie(), yield r.header(), yield r.navigator(), yield n.fallbackLocale)
  }
  for (const a of i()) if (a && jn(a)) return a
  return s.getLocale() || s.getDefaultLocale() || ''
}
function lv(e, t, n, r) {
  return Ee(t) ? () => t(e) : () => t ?? ''
}
function cv(e, t, n) {
  return { line: e, column: t, offset: n }
}
function ei(e, t, n) {
  return { start: e, end: t }
}
const ge = {
    EXPECTED_TOKEN: 1,
    INVALID_TOKEN_IN_PLACEHOLDER: 2,
    UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
    UNKNOWN_ESCAPE_SEQUENCE: 4,
    INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
    UNBALANCED_CLOSING_BRACE: 6,
    UNTERMINATED_CLOSING_BRACE: 7,
    EMPTY_PLACEHOLDER: 8,
    NOT_ALLOW_NEST_PLACEHOLDER: 9,
    INVALID_LINKED_FORMAT: 10,
    MUST_HAVE_MESSAGES_IN_PLURAL: 11,
    UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
    UNEXPECTED_EMPTY_LINKED_KEY: 13,
    UNEXPECTED_LEXICAL_ANALYSIS: 14,
  },
  uv = 17
function qs(e, t, n = {}) {
  const { domain: r, messages: s, args: o } = n,
    i = e,
    a = new SyntaxError(String(i))
  return ((a.code = e), t && (a.location = t), (a.domain = r), a)
}
function fv(e) {
  throw e
}
const Ft = ' ',
  dv = '\r',
  We = `
`,
  hv = '\u2028',
  pv = '\u2029'
function gv(e) {
  const t = e
  let n = 0,
    r = 1,
    s = 1,
    o = 0
  const i = (A) => t[A] === dv && t[A + 1] === We,
    a = (A) => t[A] === We,
    l = (A) => t[A] === pv,
    u = (A) => t[A] === hv,
    c = (A) => i(A) || a(A) || l(A) || u(A),
    f = () => n,
    d = () => r,
    h = () => s,
    E = () => o,
    g = (A) => (i(A) || l(A) || u(A) ? We : t[A]),
    R = () => g(n),
    y = () => g(n + o)
  function v() {
    return ((o = 0), c(n) && (r++, (s = 0)), i(n) && n++, n++, s++, t[n])
  }
  function p() {
    return (i(n + o) && o++, o++, t[n + o])
  }
  function _() {
    ;((n = 0), (r = 1), (s = 1), (o = 0))
  }
  function T(A = 0) {
    o = A
  }
  function L() {
    const A = n + o
    for (; A !== n; ) v()
    o = 0
  }
  return {
    index: f,
    line: d,
    column: h,
    peekOffset: E,
    charAt: g,
    currentChar: R,
    currentPeek: y,
    next: v,
    peek: p,
    reset: _,
    resetPeek: T,
    skipToPeek: L,
  }
}
const zt = void 0,
  mv = '.',
  Rl = "'",
  _v = 'tokenizer'
function yv(e, t = {}) {
  const n = t.location !== !1,
    r = gv(e),
    s = () => r.index(),
    o = () => cv(r.line(), r.column(), r.index()),
    i = o(),
    a = s(),
    l = {
      currentType: 13,
      offset: a,
      startLoc: i,
      endLoc: i,
      lastType: 13,
      lastOffset: a,
      lastStartLoc: i,
      lastEndLoc: i,
      braceNest: 0,
      inLinked: !1,
      text: '',
    },
    u = () => l,
    { onError: c } = t
  function f(m, w, k, ...I) {
    const x = u()
    if (((w.column += k), (w.offset += k), c)) {
      const U = n ? ei(x.startLoc, w) : null,
        S = qs(m, U, { domain: _v, args: I })
      c(S)
    }
  }
  function d(m, w, k) {
    ;((m.endLoc = o()), (m.currentType = w))
    const I = { type: w }
    return (n && (I.loc = ei(m.startLoc, m.endLoc)), k != null && (I.value = k), I)
  }
  const h = (m) => d(m, 13)
  function E(m, w) {
    return m.currentChar() === w ? (m.next(), w) : (f(ge.EXPECTED_TOKEN, o(), 0, w), '')
  }
  function g(m) {
    let w = ''
    for (; m.currentPeek() === Ft || m.currentPeek() === We; ) ((w += m.currentPeek()), m.peek())
    return w
  }
  function R(m) {
    const w = g(m)
    return (m.skipToPeek(), w)
  }
  function y(m) {
    if (m === zt) return !1
    const w = m.charCodeAt(0)
    return (w >= 97 && w <= 122) || (w >= 65 && w <= 90) || w === 95
  }
  function v(m) {
    if (m === zt) return !1
    const w = m.charCodeAt(0)
    return w >= 48 && w <= 57
  }
  function p(m, w) {
    const { currentType: k } = w
    if (k !== 2) return !1
    g(m)
    const I = y(m.currentPeek())
    return (m.resetPeek(), I)
  }
  function _(m, w) {
    const { currentType: k } = w
    if (k !== 2) return !1
    g(m)
    const I = m.currentPeek() === '-' ? m.peek() : m.currentPeek(),
      x = v(I)
    return (m.resetPeek(), x)
  }
  function T(m, w) {
    const { currentType: k } = w
    if (k !== 2) return !1
    g(m)
    const I = m.currentPeek() === Rl
    return (m.resetPeek(), I)
  }
  function L(m, w) {
    const { currentType: k } = w
    if (k !== 7) return !1
    g(m)
    const I = m.currentPeek() === '.'
    return (m.resetPeek(), I)
  }
  function A(m, w) {
    const { currentType: k } = w
    if (k !== 8) return !1
    g(m)
    const I = y(m.currentPeek())
    return (m.resetPeek(), I)
  }
  function j(m, w) {
    const { currentType: k } = w
    if (!(k === 7 || k === 11)) return !1
    g(m)
    const I = m.currentPeek() === ':'
    return (m.resetPeek(), I)
  }
  function F(m, w) {
    const { currentType: k } = w
    if (k !== 9) return !1
    const I = () => {
        const U = m.currentPeek()
        return U === '{'
          ? y(m.peek())
          : U === '@' || U === '|' || U === ':' || U === '.' || U === Ft || !U
            ? !1
            : U === We
              ? (m.peek(), I())
              : q(m, !1)
      },
      x = I()
    return (m.resetPeek(), x)
  }
  function $(m) {
    g(m)
    const w = m.currentPeek() === '|'
    return (m.resetPeek(), w)
  }
  function q(m, w = !0) {
    const k = (x = !1, U = '') => {
        const S = m.currentPeek()
        return S === '{' || S === '@' || !S
          ? x
          : S === '|'
            ? !(U === Ft || U === We)
            : S === Ft
              ? (m.peek(), k(!0, Ft))
              : S === We
                ? (m.peek(), k(!0, We))
                : !0
      },
      I = k()
    return (w && m.resetPeek(), I)
  }
  function D(m, w) {
    const k = m.currentChar()
    return k === zt ? zt : w(k) ? (m.next(), k) : null
  }
  function J(m) {
    const w = m.charCodeAt(0)
    return (
      (w >= 97 && w <= 122) || (w >= 65 && w <= 90) || (w >= 48 && w <= 57) || w === 95 || w === 36
    )
  }
  function ne(m) {
    return D(m, J)
  }
  function ae(m) {
    const w = m.charCodeAt(0)
    return (
      (w >= 97 && w <= 122) ||
      (w >= 65 && w <= 90) ||
      (w >= 48 && w <= 57) ||
      w === 95 ||
      w === 36 ||
      w === 45
    )
  }
  function Y(m) {
    return D(m, ae)
  }
  function Z(m) {
    const w = m.charCodeAt(0)
    return w >= 48 && w <= 57
  }
  function G(m) {
    return D(m, Z)
  }
  function se(m) {
    const w = m.charCodeAt(0)
    return (w >= 48 && w <= 57) || (w >= 65 && w <= 70) || (w >= 97 && w <= 102)
  }
  function ze(m) {
    return D(m, se)
  }
  function je(m) {
    let w = '',
      k = ''
    for (; (w = G(m)); ) k += w
    return k
  }
  function Me(m) {
    let w = ''
    for (;;) {
      const k = m.currentChar()
      if (k === '{' || k === '}' || k === '@' || k === '|' || !k) break
      if (k === Ft || k === We)
        if (q(m)) ((w += k), m.next())
        else {
          if ($(m)) break
          ;((w += k), m.next())
        }
      else ((w += k), m.next())
    }
    return w
  }
  function vt(m) {
    R(m)
    let w = '',
      k = ''
    for (; (w = Y(m)); ) k += w
    return (m.currentChar() === zt && f(ge.UNTERMINATED_CLOSING_BRACE, o(), 0), k)
  }
  function Et(m) {
    R(m)
    let w = ''
    return (
      m.currentChar() === '-' ? (m.next(), (w += `-${je(m)}`)) : (w += je(m)),
      m.currentChar() === zt && f(ge.UNTERMINATED_CLOSING_BRACE, o(), 0),
      w
    )
  }
  function wt(m) {
    return m !== Rl && m !== We
  }
  function He(m) {
    ;(R(m), E(m, "'"))
    let w = '',
      k = ''
    for (; (w = D(m, wt)); ) w === '\\' ? (k += M(m)) : (k += w)
    const I = m.currentChar()
    return I === We || I === zt
      ? (f(ge.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, o(), 0),
        I === We && (m.next(), E(m, "'")),
        k)
      : (E(m, "'"), k)
  }
  function M(m) {
    const w = m.currentChar()
    switch (w) {
      case '\\':
      case "'":
        return (m.next(), `\\${w}`)
      case 'u':
        return K(m, w, 4)
      case 'U':
        return K(m, w, 6)
      default:
        return (f(ge.UNKNOWN_ESCAPE_SEQUENCE, o(), 0, w), '')
    }
  }
  function K(m, w, k) {
    E(m, w)
    let I = ''
    for (let x = 0; x < k; x++) {
      const U = ze(m)
      if (!U) {
        f(ge.INVALID_UNICODE_ESCAPE_SEQUENCE, o(), 0, `\\${w}${I}${m.currentChar()}`)
        break
      }
      I += U
    }
    return `\\${w}${I}`
  }
  function B(m) {
    return m !== '{' && m !== '}' && m !== Ft && m !== We
  }
  function X(m) {
    R(m)
    let w = '',
      k = ''
    for (; (w = D(m, B)); ) k += w
    return k
  }
  function te(m) {
    let w = '',
      k = ''
    for (; (w = ne(m)); ) k += w
    return k
  }
  function me(m) {
    const w = (k) => {
      const I = m.currentChar()
      return I === '{' || I === '@' || I === '|' || I === '(' || I === ')' || !I || I === Ft
        ? k
        : ((k += I), m.next(), w(k))
    }
    return w('')
  }
  function b(m) {
    R(m)
    const w = E(m, '|')
    return (R(m), w)
  }
  function C(m, w) {
    let k = null
    switch (m.currentChar()) {
      case '{':
        return (
          w.braceNest >= 1 && f(ge.NOT_ALLOW_NEST_PLACEHOLDER, o(), 0),
          m.next(),
          (k = d(w, 2, '{')),
          R(m),
          w.braceNest++,
          k
        )
      case '}':
        return (
          w.braceNest > 0 && w.currentType === 2 && f(ge.EMPTY_PLACEHOLDER, o(), 0),
          m.next(),
          (k = d(w, 3, '}')),
          w.braceNest--,
          w.braceNest > 0 && R(m),
          w.inLinked && w.braceNest === 0 && (w.inLinked = !1),
          k
        )
      case '@':
        return (
          w.braceNest > 0 && f(ge.UNTERMINATED_CLOSING_BRACE, o(), 0),
          (k = P(m, w) || h(w)),
          (w.braceNest = 0),
          k
        )
      default: {
        let x = !0,
          U = !0,
          S = !0
        if ($(m))
          return (
            w.braceNest > 0 && f(ge.UNTERMINATED_CLOSING_BRACE, o(), 0),
            (k = d(w, 1, b(m))),
            (w.braceNest = 0),
            (w.inLinked = !1),
            k
          )
        if (w.braceNest > 0 && (w.currentType === 4 || w.currentType === 5 || w.currentType === 6))
          return (f(ge.UNTERMINATED_CLOSING_BRACE, o(), 0), (w.braceNest = 0), H(m, w))
        if ((x = p(m, w))) return ((k = d(w, 4, vt(m))), R(m), k)
        if ((U = _(m, w))) return ((k = d(w, 5, Et(m))), R(m), k)
        if ((S = T(m, w))) return ((k = d(w, 6, He(m))), R(m), k)
        if (!x && !U && !S)
          return (
            (k = d(w, 12, X(m))),
            f(ge.INVALID_TOKEN_IN_PLACEHOLDER, o(), 0, k.value),
            R(m),
            k
          )
        break
      }
    }
    return k
  }
  function P(m, w) {
    const { currentType: k } = w
    let I = null
    const x = m.currentChar()
    switch (
      ((k === 7 || k === 8 || k === 11 || k === 9) &&
        (x === We || x === Ft) &&
        f(ge.INVALID_LINKED_FORMAT, o(), 0),
      x)
    ) {
      case '@':
        return (m.next(), (I = d(w, 7, '@')), (w.inLinked = !0), I)
      case '.':
        return (R(m), m.next(), d(w, 8, '.'))
      case ':':
        return (R(m), m.next(), d(w, 9, ':'))
      default:
        return $(m)
          ? ((I = d(w, 1, b(m))), (w.braceNest = 0), (w.inLinked = !1), I)
          : L(m, w) || j(m, w)
            ? (R(m), P(m, w))
            : A(m, w)
              ? (R(m), d(w, 11, te(m)))
              : F(m, w)
                ? (R(m), x === '{' ? C(m, w) || I : d(w, 10, me(m)))
                : (k === 7 && f(ge.INVALID_LINKED_FORMAT, o(), 0),
                  (w.braceNest = 0),
                  (w.inLinked = !1),
                  H(m, w))
    }
  }
  function H(m, w) {
    let k = { type: 13 }
    if (w.braceNest > 0) return C(m, w) || h(w)
    if (w.inLinked) return P(m, w) || h(w)
    switch (m.currentChar()) {
      case '{':
        return C(m, w) || h(w)
      case '}':
        return (f(ge.UNBALANCED_CLOSING_BRACE, o(), 0), m.next(), d(w, 3, '}'))
      case '@':
        return P(m, w) || h(w)
      default: {
        if ($(m)) return ((k = d(w, 1, b(m))), (w.braceNest = 0), (w.inLinked = !1), k)
        if (q(m)) return d(w, 0, Me(m))
        break
      }
    }
    return k
  }
  function N() {
    const { currentType: m, offset: w, startLoc: k, endLoc: I } = l
    return (
      (l.lastType = m),
      (l.lastOffset = w),
      (l.lastStartLoc = k),
      (l.lastEndLoc = I),
      (l.offset = s()),
      (l.startLoc = o()),
      r.currentChar() === zt ? d(l, 13) : H(r, l)
    )
  }
  return { nextToken: N, currentOffset: s, currentPosition: o, context: u }
}
const bv = 'parser',
  vv = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g
function Ev(e, t, n) {
  switch (e) {
    case '\\\\':
      return '\\'
    case "\\'":
      return "'"
    default: {
      const r = parseInt(t || n, 16)
      return r <= 55295 || r >= 57344 ? String.fromCodePoint(r) : '�'
    }
  }
}
function wv(e = {}) {
  const t = e.location !== !1,
    { onError: n } = e
  function r(y, v, p, _, ...T) {
    const L = y.currentPosition()
    if (((L.offset += _), (L.column += _), n)) {
      const A = t ? ei(p, L) : null,
        j = qs(v, A, { domain: bv, args: T })
      n(j)
    }
  }
  function s(y, v, p) {
    const _ = { type: y }
    return (t && ((_.start = v), (_.end = v), (_.loc = { start: p, end: p })), _)
  }
  function o(y, v, p, _) {
    t && ((y.end = v), y.loc && (y.loc.end = p))
  }
  function i(y, v) {
    const p = y.context(),
      _ = s(3, p.offset, p.startLoc)
    return ((_.value = v), o(_, y.currentOffset(), y.currentPosition()), _)
  }
  function a(y, v) {
    const p = y.context(),
      { lastOffset: _, lastStartLoc: T } = p,
      L = s(5, _, T)
    return (
      (L.index = parseInt(v, 10)),
      y.nextToken(),
      o(L, y.currentOffset(), y.currentPosition()),
      L
    )
  }
  function l(y, v) {
    const p = y.context(),
      { lastOffset: _, lastStartLoc: T } = p,
      L = s(4, _, T)
    return ((L.key = v), y.nextToken(), o(L, y.currentOffset(), y.currentPosition()), L)
  }
  function u(y, v) {
    const p = y.context(),
      { lastOffset: _, lastStartLoc: T } = p,
      L = s(9, _, T)
    return (
      (L.value = v.replace(vv, Ev)),
      y.nextToken(),
      o(L, y.currentOffset(), y.currentPosition()),
      L
    )
  }
  function c(y) {
    const v = y.nextToken(),
      p = y.context(),
      { lastOffset: _, lastStartLoc: T } = p,
      L = s(8, _, T)
    return v.type !== 11
      ? (r(y, ge.UNEXPECTED_EMPTY_LINKED_MODIFIER, p.lastStartLoc, 0),
        (L.value = ''),
        o(L, _, T),
        { nextConsumeToken: v, node: L })
      : (v.value == null && r(y, ge.UNEXPECTED_LEXICAL_ANALYSIS, p.lastStartLoc, 0, Rt(v)),
        (L.value = v.value || ''),
        o(L, y.currentOffset(), y.currentPosition()),
        { node: L })
  }
  function f(y, v) {
    const p = y.context(),
      _ = s(7, p.offset, p.startLoc)
    return ((_.value = v), o(_, y.currentOffset(), y.currentPosition()), _)
  }
  function d(y) {
    const v = y.context(),
      p = s(6, v.offset, v.startLoc)
    let _ = y.nextToken()
    if (_.type === 8) {
      const T = c(y)
      ;((p.modifier = T.node), (_ = T.nextConsumeToken || y.nextToken()))
    }
    switch (
      (_.type !== 9 && r(y, ge.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, Rt(_)),
      (_ = y.nextToken()),
      _.type === 2 && (_ = y.nextToken()),
      _.type)
    ) {
      case 10:
        ;(_.value == null && r(y, ge.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, Rt(_)),
          (p.key = f(y, _.value || '')))
        break
      case 4:
        ;(_.value == null && r(y, ge.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, Rt(_)),
          (p.key = l(y, _.value || '')))
        break
      case 5:
        ;(_.value == null && r(y, ge.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, Rt(_)),
          (p.key = a(y, _.value || '')))
        break
      case 6:
        ;(_.value == null && r(y, ge.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, Rt(_)),
          (p.key = u(y, _.value || '')))
        break
      default: {
        r(y, ge.UNEXPECTED_EMPTY_LINKED_KEY, v.lastStartLoc, 0)
        const T = y.context(),
          L = s(7, T.offset, T.startLoc)
        return (
          (L.value = ''),
          o(L, T.offset, T.startLoc),
          (p.key = L),
          o(p, T.offset, T.startLoc),
          { nextConsumeToken: _, node: p }
        )
      }
    }
    return (o(p, y.currentOffset(), y.currentPosition()), { node: p })
  }
  function h(y) {
    const v = y.context(),
      p = v.currentType === 1 ? y.currentOffset() : v.offset,
      _ = v.currentType === 1 ? v.endLoc : v.startLoc,
      T = s(2, p, _)
    T.items = []
    let L = null
    do {
      const F = L || y.nextToken()
      switch (((L = null), F.type)) {
        case 0:
          ;(F.value == null && r(y, ge.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, Rt(F)),
            T.items.push(i(y, F.value || '')))
          break
        case 5:
          ;(F.value == null && r(y, ge.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, Rt(F)),
            T.items.push(a(y, F.value || '')))
          break
        case 4:
          ;(F.value == null && r(y, ge.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, Rt(F)),
            T.items.push(l(y, F.value || '')))
          break
        case 6:
          ;(F.value == null && r(y, ge.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, Rt(F)),
            T.items.push(u(y, F.value || '')))
          break
        case 7: {
          const $ = d(y)
          ;(T.items.push($.node), (L = $.nextConsumeToken || null))
          break
        }
      }
    } while (v.currentType !== 13 && v.currentType !== 1)
    const A = v.currentType === 1 ? v.lastOffset : y.currentOffset(),
      j = v.currentType === 1 ? v.lastEndLoc : y.currentPosition()
    return (o(T, A, j), T)
  }
  function E(y, v, p, _) {
    const T = y.context()
    let L = _.items.length === 0
    const A = s(1, v, p)
    ;((A.cases = []), A.cases.push(_))
    do {
      const j = h(y)
      ;(L || (L = j.items.length === 0), A.cases.push(j))
    } while (T.currentType !== 13)
    return (
      L && r(y, ge.MUST_HAVE_MESSAGES_IN_PLURAL, p, 0),
      o(A, y.currentOffset(), y.currentPosition()),
      A
    )
  }
  function g(y) {
    const v = y.context(),
      { offset: p, startLoc: _ } = v,
      T = h(y)
    return v.currentType === 13 ? T : E(y, p, _, T)
  }
  function R(y) {
    const v = yv(y, ke({}, e)),
      p = v.context(),
      _ = s(0, p.offset, p.startLoc)
    return (
      t && _.loc && (_.loc.source = y),
      (_.body = g(v)),
      e.onCacheKey && (_.cacheKey = e.onCacheKey(y)),
      p.currentType !== 13 &&
        r(v, ge.UNEXPECTED_LEXICAL_ANALYSIS, p.lastStartLoc, 0, y[p.offset] || ''),
      o(_, v.currentOffset(), v.currentPosition()),
      _
    )
  }
  return { parse: R }
}
function Rt(e) {
  if (e.type === 13) return 'EOF'
  const t = (e.value || '').replace(/\r?\n/gu, '\\n')
  return t.length > 10 ? t.slice(0, 9) + '…' : t
}
function Cv(e, t = {}) {
  const n = { ast: e, helpers: new Set() }
  return { context: () => n, helper: (o) => (n.helpers.add(o), o) }
}
function Tl(e, t) {
  for (let n = 0; n < e.length; n++) Wi(e[n], t)
}
function Wi(e, t) {
  switch (e.type) {
    case 1:
      ;(Tl(e.cases, t), t.helper('plural'))
      break
    case 2:
      Tl(e.items, t)
      break
    case 6: {
      ;(Wi(e.key, t), t.helper('linked'), t.helper('type'))
      break
    }
    case 5:
      ;(t.helper('interpolate'), t.helper('list'))
      break
    case 4:
      ;(t.helper('interpolate'), t.helper('named'))
      break
  }
}
function Rv(e, t = {}) {
  const n = Cv(e)
  ;(n.helper('normalize'), e.body && Wi(e.body, n))
  const r = n.context()
  e.helpers = Array.from(r.helpers)
}
function Tv(e) {
  const t = e.body
  return (t.type === 2 ? Sl(t) : t.cases.forEach((n) => Sl(n)), e)
}
function Sl(e) {
  if (e.items.length === 1) {
    const t = e.items[0]
    ;(t.type === 3 || t.type === 9) && ((e.static = t.value), delete t.value)
  } else {
    const t = []
    for (let n = 0; n < e.items.length; n++) {
      const r = e.items[n]
      if (!(r.type === 3 || r.type === 9) || r.value == null) break
      t.push(r.value)
    }
    if (t.length === e.items.length) {
      e.static = $i(t)
      for (let n = 0; n < e.items.length; n++) {
        const r = e.items[n]
        ;(r.type === 3 || r.type === 9) && delete r.value
      }
    }
  }
}
function In(e) {
  switch (((e.t = e.type), e.type)) {
    case 0: {
      const t = e
      ;(In(t.body), (t.b = t.body), delete t.body)
      break
    }
    case 1: {
      const t = e,
        n = t.cases
      for (let r = 0; r < n.length; r++) In(n[r])
      ;((t.c = n), delete t.cases)
      break
    }
    case 2: {
      const t = e,
        n = t.items
      for (let r = 0; r < n.length; r++) In(n[r])
      ;((t.i = n), delete t.items, t.static && ((t.s = t.static), delete t.static))
      break
    }
    case 3:
    case 9:
    case 8:
    case 7: {
      const t = e
      t.value && ((t.v = t.value), delete t.value)
      break
    }
    case 6: {
      const t = e
      ;(In(t.key),
        (t.k = t.key),
        delete t.key,
        t.modifier && (In(t.modifier), (t.m = t.modifier), delete t.modifier))
      break
    }
    case 5: {
      const t = e
      ;((t.i = t.index), delete t.index)
      break
    }
    case 4: {
      const t = e
      ;((t.k = t.key), delete t.key)
      break
    }
  }
  delete e.type
}
function Sv(e, t) {
  const { filename: n, breakLineCode: r, needIndent: s } = t,
    o = t.location !== !1,
    i = {
      filename: n,
      code: '',
      column: 1,
      line: 1,
      offset: 0,
      map: void 0,
      breakLineCode: r,
      needIndent: s,
      indentLevel: 0,
    }
  o && e.loc && (i.source = e.loc.source)
  const a = () => i
  function l(g, R) {
    i.code += g
  }
  function u(g, R = !0) {
    const y = R ? r : ''
    l(s ? y + '  '.repeat(g) : y)
  }
  function c(g = !0) {
    const R = ++i.indentLevel
    g && u(R)
  }
  function f(g = !0) {
    const R = --i.indentLevel
    g && u(R)
  }
  function d() {
    u(i.indentLevel)
  }
  return {
    context: a,
    push: l,
    indent: c,
    deindent: f,
    newline: d,
    helper: (g) => `_${g}`,
    needIndent: () => i.needIndent,
  }
}
function Lv(e, t) {
  const { helper: n } = e
  ;(e.push(`${n('linked')}(`),
    Qn(e, t.key),
    t.modifier
      ? (e.push(', '), Qn(e, t.modifier), e.push(', _type'))
      : e.push(', undefined, _type'),
    e.push(')'))
}
function kv(e, t) {
  const { helper: n, needIndent: r } = e
  ;(e.push(`${n('normalize')}([`), e.indent(r()))
  const s = t.items.length
  for (let o = 0; o < s && (Qn(e, t.items[o]), o !== s - 1); o++) e.push(', ')
  ;(e.deindent(r()), e.push('])'))
}
function Av(e, t) {
  const { helper: n, needIndent: r } = e
  if (t.cases.length > 1) {
    ;(e.push(`${n('plural')}([`), e.indent(r()))
    const s = t.cases.length
    for (let o = 0; o < s && (Qn(e, t.cases[o]), o !== s - 1); o++) e.push(', ')
    ;(e.deindent(r()), e.push('])'))
  }
}
function Pv(e, t) {
  t.body ? Qn(e, t.body) : e.push('null')
}
function Qn(e, t) {
  const { helper: n } = e
  switch (t.type) {
    case 0:
      Pv(e, t)
      break
    case 1:
      Av(e, t)
      break
    case 2:
      kv(e, t)
      break
    case 6:
      Lv(e, t)
      break
    case 8:
      e.push(JSON.stringify(t.value), t)
      break
    case 7:
      e.push(JSON.stringify(t.value), t)
      break
    case 5:
      e.push(`${n('interpolate')}(${n('list')}(${t.index}))`, t)
      break
    case 4:
      e.push(`${n('interpolate')}(${n('named')}(${JSON.stringify(t.key)}))`, t)
      break
    case 9:
      e.push(JSON.stringify(t.value), t)
      break
    case 3:
      e.push(JSON.stringify(t.value), t)
      break
  }
}
const Ov = (e, t = {}) => {
  const n = V(t.mode) ? t.mode : 'normal',
    r = V(t.filename) ? t.filename : 'message.intl'
  t.sourceMap
  const s =
      t.breakLineCode != null
        ? t.breakLineCode
        : n === 'arrow'
          ? ';'
          : `
`,
    o = t.needIndent ? t.needIndent : n !== 'arrow',
    i = e.helpers || [],
    a = Sv(e, { filename: r, breakLineCode: s, needIndent: o })
  ;(a.push(n === 'normal' ? 'function __msg__ (ctx) {' : '(ctx) => {'),
    a.indent(o),
    i.length > 0 &&
      (a.push(
        `const { ${$i(
          i.map((c) => `${c}: _${c}`),
          ', '
        )} } = ctx`
      ),
      a.newline()),
    a.push('return '),
    Qn(a, e),
    a.deindent(o),
    a.push('}'),
    delete e.helpers)
  const { code: l, map: u } = a.context()
  return { ast: e, code: l, map: u ? u.toJSON() : void 0 }
}
function Iv(e, t = {}) {
  const n = ke({}, t),
    r = !!n.jit,
    s = !!n.minify,
    o = n.optimize == null ? !0 : n.optimize,
    a = wv(n).parse(e)
  return r ? (o && Tv(a), s && In(a), { ast: a, code: '' }) : (Rv(a, n), Ov(a, n))
}
function Pt(e) {
  return ce(e) && Vi(e) === 0 && (pt(e, 'b') || pt(e, 'body'))
}
const Hf = ['b', 'body']
function Nv(e) {
  return un(e, Hf)
}
const $f = ['c', 'cases']
function xv(e) {
  return un(e, $f, [])
}
const Uf = ['s', 'static']
function Mv(e) {
  return un(e, Uf)
}
const jf = ['i', 'items']
function Dv(e) {
  return un(e, jf, [])
}
const Bf = ['t', 'type']
function Vi(e) {
  return un(e, Bf)
}
const Wf = ['v', 'value']
function Xr(e, t) {
  const n = un(e, Wf)
  if (n != null) return n
  throw Lr(t)
}
const Vf = ['m', 'modifier']
function Fv(e) {
  return un(e, Vf)
}
const Kf = ['k', 'key']
function Hv(e) {
  const t = un(e, Kf)
  if (t) return t
  throw Lr(6)
}
function un(e, t, n) {
  for (let r = 0; r < t.length; r++) {
    const s = t[r]
    if (pt(e, s) && e[s] != null) return e[s]
  }
  return n
}
const Gf = [...Hf, ...$f, ...Uf, ...jf, ...Kf, ...Vf, ...Wf, ...Bf]
function Lr(e) {
  return new Error(`unhandled node type: ${e}`)
}
function bo(e) {
  return (n) => $v(n, e)
}
function $v(e, t) {
  const n = Nv(t)
  if (n == null) throw Lr(0)
  if (Vi(n) === 1) {
    const o = xv(n)
    return e.plural(o.reduce((i, a) => [...i, Ll(e, a)], []))
  } else return Ll(e, n)
}
function Ll(e, t) {
  const n = Mv(t)
  if (n != null) return e.type === 'text' ? n : e.normalize([n])
  {
    const r = Dv(t).reduce((s, o) => [...s, ti(e, o)], [])
    return e.normalize(r)
  }
}
function ti(e, t) {
  const n = Vi(t)
  switch (n) {
    case 3:
      return Xr(t, n)
    case 9:
      return Xr(t, n)
    case 4: {
      const r = t
      if (pt(r, 'k') && r.k) return e.interpolate(e.named(r.k))
      if (pt(r, 'key') && r.key) return e.interpolate(e.named(r.key))
      throw Lr(n)
    }
    case 5: {
      const r = t
      if (pt(r, 'i') && Pe(r.i)) return e.interpolate(e.list(r.i))
      if (pt(r, 'index') && Pe(r.index)) return e.interpolate(e.list(r.index))
      throw Lr(n)
    }
    case 6: {
      const r = t,
        s = Fv(r),
        o = Hv(r)
      return e.linked(ti(e, o), s ? ti(e, s) : void 0, e.type)
    }
    case 7:
      return Xr(t, n)
    case 8:
      return Xr(t, n)
    default:
      throw new Error(`unhandled node on format message part: ${n}`)
  }
}
const Uv = (e) => e
let Qr = pe()
function jv(e, t = {}) {
  let n = !1
  const r = t.onError || fv
  return (
    (t.onError = (s) => {
      ;((n = !0), r(s))
    }),
    { ...Iv(e, t), detectError: n }
  )
}
function Bv(e, t) {
  if (V(e)) {
    Ce(t.warnHtmlMessage) && t.warnHtmlMessage
    const r = (t.onCacheKey || Uv)(e),
      s = Qr[r]
    if (s) return s
    const { ast: o, detectError: i } = jv(e, { ...t, location: !1, jit: !0 }),
      a = bo(o)
    return i ? a : (Qr[r] = a)
  } else {
    const n = e.cacheKey
    if (n) {
      const r = Qr[n]
      return r || (Qr[n] = bo(e))
    } else return bo(e)
  }
}
const Wt = {
    INVALID_ARGUMENT: uv,
    INVALID_DATE_ARGUMENT: 18,
    INVALID_ISO_DATE_ARGUMENT: 19,
    NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
    NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
    NOT_SUPPORT_LOCALE_TYPE: 23,
  },
  Wv = 24
function Vt(e) {
  return qs(e, null, void 0)
}
function Ki(e, t) {
  return t.locale != null ? kl(t.locale) : kl(e.locale)
}
let vo
function kl(e) {
  if (V(e)) return e
  if (Ee(e)) {
    if (e.resolvedOnce && vo != null) return vo
    if (e.constructor.name === 'Function') {
      const t = e()
      if (tb(t)) throw Vt(Wt.NOT_SUPPORT_LOCALE_PROMISE_VALUE)
      return (vo = t)
    } else throw Vt(Wt.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)
  } else throw Vt(Wt.NOT_SUPPORT_LOCALE_TYPE)
}
function Vv(e, t, n) {
  return [...new Set([n, ...(Se(t) ? t : ce(t) ? Object.keys(t) : V(t) ? [t] : [n])])]
}
function ni(e, t, n) {
  const r = V(n) ? n : bs,
    s = e
  s.__localeChainCache || (s.__localeChainCache = new Map())
  let o = s.__localeChainCache.get(r)
  if (!o) {
    o = []
    let i = [n]
    for (; Se(i); ) i = Al(o, i, t)
    const a = Se(t) || !ie(t) ? t : t.default ? t.default : null
    ;((i = V(a) ? [a] : a), Se(i) && Al(o, i, !1), s.__localeChainCache.set(r, o))
  }
  return o
}
function Al(e, t, n) {
  let r = !0
  for (let s = 0; s < t.length && Ce(r); s++) {
    const o = t[s]
    V(o) && (r = Kv(e, t[s], n))
  }
  return r
}
function Kv(e, t, n) {
  let r
  const s = t.split('-')
  do {
    const o = s.join('-')
    ;((r = Gv(e, o, n)), s.splice(-1, 1))
  } while (s.length && r === !0)
  return r
}
function Gv(e, t, n) {
  let r = !1
  if (!e.includes(t) && ((r = !0), t)) {
    r = t[t.length - 1] !== '!'
    const s = t.replace(/!/g, '')
    ;(e.push(s), (Se(n) || ie(n)) && n[s] && (r = n[s]))
  }
  return r
}
const fn = []
fn[0] = { w: [0], i: [3, 0], '[': [4], o: [7] }
fn[1] = { w: [1], '.': [2], '[': [4], o: [7] }
fn[2] = { w: [2], i: [3, 0], 0: [3, 0] }
fn[3] = { i: [3, 0], 0: [3, 0], w: [1, 1], '.': [2, 1], '[': [4, 1], o: [7, 1] }
fn[4] = { "'": [5, 0], '"': [6, 0], '[': [4, 2], ']': [1, 3], o: 8, l: [4, 0] }
fn[5] = { "'": [4, 0], o: 8, l: [5, 0] }
fn[6] = { '"': [4, 0], o: 8, l: [6, 0] }
const qv = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/
function Yv(e) {
  return qv.test(e)
}
function Jv(e) {
  const t = e.charCodeAt(0),
    n = e.charCodeAt(e.length - 1)
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e
}
function Xv(e) {
  if (e == null) return 'o'
  switch (e.charCodeAt(0)) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
      return e
    case 95:
    case 36:
    case 45:
      return 'i'
    case 9:
    case 10:
    case 13:
    case 160:
    case 65279:
    case 8232:
    case 8233:
      return 'w'
  }
  return 'i'
}
function Qv(e) {
  const t = e.trim()
  return e.charAt(0) === '0' && isNaN(parseInt(e)) ? !1 : Yv(t) ? Jv(t) : '*' + t
}
function zv(e) {
  const t = []
  let n = -1,
    r = 0,
    s = 0,
    o,
    i,
    a,
    l,
    u,
    c,
    f
  const d = []
  ;((d[0] = () => {
    i === void 0 ? (i = a) : (i += a)
  }),
    (d[1] = () => {
      i !== void 0 && (t.push(i), (i = void 0))
    }),
    (d[2] = () => {
      ;(d[0](), s++)
    }),
    (d[3] = () => {
      if (s > 0) (s--, (r = 4), d[0]())
      else {
        if (((s = 0), i === void 0 || ((i = Qv(i)), i === !1))) return !1
        d[1]()
      }
    }))
  function h() {
    const E = e[n + 1]
    if ((r === 5 && E === "'") || (r === 6 && E === '"')) return (n++, (a = '\\' + E), d[0](), !0)
  }
  for (; r !== null; )
    if ((n++, (o = e[n]), !(o === '\\' && h()))) {
      if (
        ((l = Xv(o)),
        (f = fn[r]),
        (u = f[l] || f.l || 8),
        u === 8 || ((r = u[0]), u[1] !== void 0 && ((c = d[u[1]]), c && ((a = o), c() === !1))))
      )
        return
      if (r === 7) return t
    }
}
const Pl = new Map()
function Zv(e, t) {
  return ce(e) ? e[t] : null
}
function eE(e, t) {
  if (!ce(e)) return null
  let n = Pl.get(t)
  if ((n || ((n = zv(t)), n && Pl.set(t, n)), !n)) return null
  const r = n.length
  let s = e,
    o = 0
  for (; o < r; ) {
    const i = n[o]
    if (Gf.includes(i) && Pt(s)) return null
    const a = s[i]
    if (a === void 0 || Ee(s)) return null
    ;((s = a), o++)
  }
  return s
}
const tE = '10.0.8',
  Ys = -1,
  bs = 'en-US',
  Ol = '',
  Il = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`
function nE() {
  return {
    upper: (e, t) =>
      t === 'text' && V(e)
        ? e.toUpperCase()
        : t === 'vnode' && ce(e) && '__v_isVNode' in e
          ? e.children.toUpperCase()
          : e,
    lower: (e, t) =>
      t === 'text' && V(e)
        ? e.toLowerCase()
        : t === 'vnode' && ce(e) && '__v_isVNode' in e
          ? e.children.toLowerCase()
          : e,
    capitalize: (e, t) =>
      t === 'text' && V(e)
        ? Il(e)
        : t === 'vnode' && ce(e) && '__v_isVNode' in e
          ? Il(e.children)
          : e,
  }
}
let qf
function rE(e) {
  qf = e
}
let Yf
function sE(e) {
  Yf = e
}
let Jf
function oE(e) {
  Jf = e
}
const R0 = (e) => {}
let Xf = null
const Nl = (e) => {
    Xf = e
  },
  iE = () => Xf
let xl = 0
function aE(e = {}) {
  const t = Ee(e.onWarn) ? e.onWarn : Yy,
    n = V(e.version) ? e.version : tE,
    r = V(e.locale) || Ee(e.locale) ? e.locale : bs,
    s = Ee(r) ? bs : r,
    o =
      Se(e.fallbackLocale) || ie(e.fallbackLocale) || V(e.fallbackLocale) || e.fallbackLocale === !1
        ? e.fallbackLocale
        : s,
    i = ie(e.messages) ? e.messages : Eo(s),
    a = ie(e.datetimeFormats) ? e.datetimeFormats : Eo(s),
    l = ie(e.numberFormats) ? e.numberFormats : Eo(s),
    u = ke(pe(), e.modifiers, nE()),
    c = e.pluralRules || pe(),
    f = Ee(e.missing) ? e.missing : null,
    d = Ce(e.missingWarn) || _s(e.missingWarn) ? e.missingWarn : !0,
    h = Ce(e.fallbackWarn) || _s(e.fallbackWarn) ? e.fallbackWarn : !0,
    E = !!e.fallbackFormat,
    g = !!e.unresolving,
    R = Ee(e.postTranslation) ? e.postTranslation : null,
    y = ie(e.processor) ? e.processor : null,
    v = Ce(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
    p = !!e.escapeParameter,
    _ = Ee(e.messageCompiler) ? e.messageCompiler : qf,
    T = Ee(e.messageResolver) ? e.messageResolver : Yf || Zv,
    L = Ee(e.localeFallbacker) ? e.localeFallbacker : Jf || Vv,
    A = ce(e.fallbackContext) ? e.fallbackContext : void 0,
    j = e,
    F = ce(j.__datetimeFormatters) ? j.__datetimeFormatters : new Map(),
    $ = ce(j.__numberFormatters) ? j.__numberFormatters : new Map(),
    q = ce(j.__meta) ? j.__meta : {}
  xl++
  const D = {
    version: n,
    cid: xl,
    locale: r,
    fallbackLocale: o,
    messages: i,
    modifiers: u,
    pluralRules: c,
    missing: f,
    missingWarn: d,
    fallbackWarn: h,
    fallbackFormat: E,
    unresolving: g,
    postTranslation: R,
    processor: y,
    warnHtmlMessage: v,
    escapeParameter: p,
    messageCompiler: _,
    messageResolver: T,
    localeFallbacker: L,
    fallbackContext: A,
    onWarn: t,
    __meta: q,
  }
  return (
    (D.datetimeFormats = a),
    (D.numberFormats = l),
    (D.__datetimeFormatters = F),
    (D.__numberFormatters = $),
    D
  )
}
const Eo = (e) => ({ [e]: pe() })
function Gi(e, t, n, r, s) {
  const { missing: o, onWarn: i } = e
  if (o !== null) {
    const a = o(e, n, t, s)
    return V(a) ? a : t
  } else return t
}
function ir(e, t, n) {
  const r = e
  ;((r.__localeChainCache = new Map()), e.localeFallbacker(e, n, t))
}
function lE(e, t) {
  return e === t ? !1 : e.split('-')[0] === t.split('-')[0]
}
function cE(e, t) {
  const n = t.indexOf(e)
  if (n === -1) return !1
  for (let r = n + 1; r < t.length; r++) if (lE(e, t[r])) return !0
  return !1
}
function Ml(e, ...t) {
  const {
      datetimeFormats: n,
      unresolving: r,
      fallbackLocale: s,
      onWarn: o,
      localeFallbacker: i,
    } = e,
    { __datetimeFormatters: a } = e,
    [l, u, c, f] = ri(...t),
    d = Ce(c.missingWarn) ? c.missingWarn : e.missingWarn
  Ce(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn
  const h = !!c.part,
    E = Ki(e, c),
    g = i(e, s, E)
  if (!V(l) || l === '') return new Intl.DateTimeFormat(E, f).format(u)
  let R = {},
    y,
    v = null
  const p = 'datetime format'
  for (let L = 0; L < g.length && ((y = g[L]), (R = n[y] || {}), (v = R[l]), !ie(v)); L++)
    Gi(e, l, y, d, p)
  if (!ie(v) || !V(y)) return r ? Ys : l
  let _ = `${y}__${l}`
  Bs(f) || (_ = `${_}__${JSON.stringify(f)}`)
  let T = a.get(_)
  return (
    T || ((T = new Intl.DateTimeFormat(y, ke({}, v, f))), a.set(_, T)),
    h ? T.formatToParts(u) : T.format(u)
  )
}
const Qf = [
  'localeMatcher',
  'weekday',
  'era',
  'year',
  'month',
  'day',
  'hour',
  'minute',
  'second',
  'timeZoneName',
  'formatMatcher',
  'hour12',
  'timeZone',
  'dateStyle',
  'timeStyle',
  'calendar',
  'dayPeriod',
  'numberingSystem',
  'hourCycle',
  'fractionalSecondDigits',
]
function ri(...e) {
  const [t, n, r, s] = e,
    o = pe()
  let i = pe(),
    a
  if (V(t)) {
    const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/)
    if (!l) throw Vt(Wt.INVALID_ISO_DATE_ARGUMENT)
    const u = l[3]
      ? l[3].trim().startsWith('T')
        ? `${l[1].trim()}${l[3].trim()}`
        : `${l[1].trim()}T${l[3].trim()}`
      : l[1].trim()
    a = new Date(u)
    try {
      a.toISOString()
    } catch {
      throw Vt(Wt.INVALID_ISO_DATE_ARGUMENT)
    }
  } else if (Qy(t)) {
    if (isNaN(t.getTime())) throw Vt(Wt.INVALID_DATE_ARGUMENT)
    a = t
  } else if (Pe(t)) a = t
  else throw Vt(Wt.INVALID_ARGUMENT)
  return (
    V(n)
      ? (o.key = n)
      : ie(n) &&
        Object.keys(n).forEach((l) => {
          Qf.includes(l) ? (i[l] = n[l]) : (o[l] = n[l])
        }),
    V(r) ? (o.locale = r) : ie(r) && (i = r),
    ie(s) && (i = s),
    [o.key || '', a, o, i]
  )
}
function Dl(e, t, n) {
  const r = e
  for (const s in n) {
    const o = `${t}__${s}`
    r.__datetimeFormatters.has(o) && r.__datetimeFormatters.delete(o)
  }
}
function Fl(e, ...t) {
  const { numberFormats: n, unresolving: r, fallbackLocale: s, onWarn: o, localeFallbacker: i } = e,
    { __numberFormatters: a } = e,
    [l, u, c, f] = si(...t),
    d = Ce(c.missingWarn) ? c.missingWarn : e.missingWarn
  Ce(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn
  const h = !!c.part,
    E = Ki(e, c),
    g = i(e, s, E)
  if (!V(l) || l === '') return new Intl.NumberFormat(E, f).format(u)
  let R = {},
    y,
    v = null
  const p = 'number format'
  for (let L = 0; L < g.length && ((y = g[L]), (R = n[y] || {}), (v = R[l]), !ie(v)); L++)
    Gi(e, l, y, d, p)
  if (!ie(v) || !V(y)) return r ? Ys : l
  let _ = `${y}__${l}`
  Bs(f) || (_ = `${_}__${JSON.stringify(f)}`)
  let T = a.get(_)
  return (
    T || ((T = new Intl.NumberFormat(y, ke({}, v, f))), a.set(_, T)),
    h ? T.formatToParts(u) : T.format(u)
  )
}
const zf = [
  'localeMatcher',
  'style',
  'currency',
  'currencyDisplay',
  'currencySign',
  'useGrouping',
  'minimumIntegerDigits',
  'minimumFractionDigits',
  'maximumFractionDigits',
  'minimumSignificantDigits',
  'maximumSignificantDigits',
  'compactDisplay',
  'notation',
  'signDisplay',
  'unit',
  'unitDisplay',
  'roundingMode',
  'roundingPriority',
  'roundingIncrement',
  'trailingZeroDisplay',
]
function si(...e) {
  const [t, n, r, s] = e,
    o = pe()
  let i = pe()
  if (!Pe(t)) throw Vt(Wt.INVALID_ARGUMENT)
  const a = t
  return (
    V(n)
      ? (o.key = n)
      : ie(n) &&
        Object.keys(n).forEach((l) => {
          zf.includes(l) ? (i[l] = n[l]) : (o[l] = n[l])
        }),
    V(r) ? (o.locale = r) : ie(r) && (i = r),
    ie(s) && (i = s),
    [o.key || '', a, o, i]
  )
}
function Hl(e, t, n) {
  const r = e
  for (const s in n) {
    const o = `${t}__${s}`
    r.__numberFormatters.has(o) && r.__numberFormatters.delete(o)
  }
}
const uE = (e) => e,
  fE = (e) => '',
  dE = 'text',
  hE = (e) => (e.length === 0 ? '' : $i(e)),
  pE = nb
function $l(e, t) {
  return ((e = Math.abs(e)), t === 2 ? (e ? (e > 1 ? 1 : 0) : 1) : e ? Math.min(e, 2) : 0)
}
function gE(e) {
  const t = Pe(e.pluralIndex) ? e.pluralIndex : -1
  return e.named && (Pe(e.named.count) || Pe(e.named.n))
    ? Pe(e.named.count)
      ? e.named.count
      : Pe(e.named.n)
        ? e.named.n
        : t
    : t
}
function mE(e, t) {
  ;(t.count || (t.count = e), t.n || (t.n = e))
}
function _E(e = {}) {
  const t = e.locale,
    n = gE(e),
    r = ce(e.pluralRules) && V(t) && Ee(e.pluralRules[t]) ? e.pluralRules[t] : $l,
    s = ce(e.pluralRules) && V(t) && Ee(e.pluralRules[t]) ? $l : void 0,
    o = (y) => y[r(n, y.length, s)],
    i = e.list || [],
    a = (y) => i[y],
    l = e.named || pe()
  Pe(e.pluralIndex) && mE(n, l)
  const u = (y) => l[y]
  function c(y, v) {
    const p = Ee(e.messages) ? e.messages(y, !!v) : ce(e.messages) ? e.messages[y] : !1
    return p || (e.parent ? e.parent.message(y) : fE)
  }
  const f = (y) => (e.modifiers ? e.modifiers[y] : uE),
    d = ie(e.processor) && Ee(e.processor.normalize) ? e.processor.normalize : hE,
    h = ie(e.processor) && Ee(e.processor.interpolate) ? e.processor.interpolate : pE,
    E = ie(e.processor) && V(e.processor.type) ? e.processor.type : dE,
    R = {
      list: a,
      named: u,
      plural: o,
      linked: (y, ...v) => {
        const [p, _] = v
        let T = 'text',
          L = ''
        v.length === 1
          ? ce(p)
            ? ((L = p.modifier || L), (T = p.type || T))
            : V(p) && (L = p || L)
          : v.length === 2 && (V(p) && (L = p || L), V(_) && (T = _ || T))
        const A = c(y, !0)(R),
          j = T === 'vnode' && Se(A) && L ? A[0] : A
        return L ? f(L)(j, T) : j
      },
      message: c,
      type: E,
      interpolate: h,
      normalize: d,
      values: ke(pe(), i, l),
    }
  return R
}
const Ul = () => '',
  Kt = (e) => Ee(e)
function jl(e, ...t) {
  const {
      fallbackFormat: n,
      postTranslation: r,
      unresolving: s,
      messageCompiler: o,
      fallbackLocale: i,
      messages: a,
    } = e,
    [l, u] = oi(...t),
    c = Ce(u.missingWarn) ? u.missingWarn : e.missingWarn,
    f = Ce(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn,
    d = Ce(u.escapeParameter) ? u.escapeParameter : e.escapeParameter,
    h = !!u.resolvedMessage,
    E =
      V(u.default) || Ce(u.default)
        ? Ce(u.default)
          ? o
            ? l
            : () => l
          : u.default
        : n
          ? o
            ? l
            : () => l
          : null,
    g = n || (E != null && (V(E) || Ee(E))),
    R = Ki(e, u)
  d && yE(u)
  let [y, v, p] = h ? [l, R, a[R] || pe()] : Zf(e, l, R, i, f, c),
    _ = y,
    T = l
  if (
    (!h && !(V(_) || Pt(_) || Kt(_)) && g && ((_ = E), (T = _)),
    !h && (!(V(_) || Pt(_) || Kt(_)) || !V(v)))
  )
    return s ? Ys : l
  let L = !1
  const A = () => {
      L = !0
    },
    j = Kt(_) ? _ : ed(e, l, v, _, T, A)
  if (L) return _
  const F = EE(e, v, p, u),
    $ = _E(F),
    q = bE(e, j, $)
  let D = r ? r(q, l) : q
  return (d && V(D) && (D = Zy(D)), D)
}
function yE(e) {
  Se(e.list)
    ? (e.list = e.list.map((t) => (V(t) ? ml(t) : t)))
    : ce(e.named) &&
      Object.keys(e.named).forEach((t) => {
        V(e.named[t]) && (e.named[t] = ml(e.named[t]))
      })
}
function Zf(e, t, n, r, s, o) {
  const { messages: i, onWarn: a, messageResolver: l, localeFallbacker: u } = e,
    c = u(e, r, n)
  let f = pe(),
    d,
    h = null
  const E = 'translate'
  for (
    let g = 0;
    g < c.length &&
    ((d = c[g]),
    (f = i[d] || pe()),
    (h = l(f, t)) === null && (h = f[t]),
    !(V(h) || Pt(h) || Kt(h)));
    g++
  )
    if (!cE(d, c)) {
      const R = Gi(e, t, d, o, E)
      R !== t && (h = R)
    }
  return [h, d, f]
}
function ed(e, t, n, r, s, o) {
  const { messageCompiler: i, warnHtmlMessage: a } = e
  if (Kt(r)) {
    const u = r
    return ((u.locale = u.locale || n), (u.key = u.key || t), u)
  }
  if (i == null) {
    const u = () => r
    return ((u.locale = n), (u.key = t), u)
  }
  const l = i(r, vE(e, n, s, r, a, o))
  return ((l.locale = n), (l.key = t), (l.source = r), l)
}
function bE(e, t, n) {
  return t(n)
}
function oi(...e) {
  const [t, n, r] = e,
    s = pe()
  if (!V(t) && !Pe(t) && !Kt(t) && !Pt(t)) throw Vt(Wt.INVALID_ARGUMENT)
  const o = Pe(t) ? String(t) : (Kt(t), t)
  return (
    Pe(n)
      ? (s.plural = n)
      : V(n)
        ? (s.default = n)
        : ie(n) && !Bs(n)
          ? (s.named = n)
          : Se(n) && (s.list = n),
    Pe(r) ? (s.plural = r) : V(r) ? (s.default = r) : ie(r) && ke(s, r),
    [o, s]
  )
}
function vE(e, t, n, r, s, o) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: s,
    onError: (i) => {
      throw (o && o(i), i)
    },
    onCacheKey: (i) => Jy(t, n, i),
  }
}
function EE(e, t, n, r) {
  const {
      modifiers: s,
      pluralRules: o,
      messageResolver: i,
      fallbackLocale: a,
      fallbackWarn: l,
      missingWarn: u,
      fallbackContext: c,
    } = e,
    d = {
      locale: t,
      modifiers: s,
      pluralRules: o,
      messages: (h, E) => {
        let g = i(n, h)
        if (g == null && (c || E)) {
          const [, , R] = Zf(c || e, h, t, a, l, u)
          g = i(R, h)
        }
        if (V(g) || Pt(g)) {
          let R = !1
          const v = ed(e, h, t, g, h, () => {
            R = !0
          })
          return R ? Ul : v
        } else return Kt(g) ? g : Ul
      },
    }
  return (
    e.processor && (d.processor = e.processor),
    r.list && (d.list = r.list),
    r.named && (d.named = r.named),
    Pe(r.plural) && (d.pluralIndex = r.plural),
    d
  )
}
const wE = '11.3.0',
  ft = {
    UNEXPECTED_RETURN_TYPE: Wv,
    INVALID_ARGUMENT: 25,
    MUST_BE_CALL_SETUP_TOP: 26,
    NOT_INSTALLED: 27,
    REQUIRED_VALUE: 28,
    INVALID_VALUE: 29,
    NOT_INSTALLED_WITH_PROVIDE: 31,
    UNEXPECTED_ERROR: 32,
  }
function bt(e, ...t) {
  return qs(e, null, void 0)
}
const ii = cn('__translateVNode'),
  ai = cn('__datetimeParts'),
  li = cn('__numberParts'),
  CE = cn('__setPluralRules'),
  RE = cn('__injectWithOption'),
  ci = cn('__dispose')
function kr(e) {
  if (!ce(e) || Pt(e)) return e
  for (const t in e)
    if (pt(e, t))
      if (!t.includes('.')) ce(e[t]) && kr(e[t])
      else {
        const n = t.split('.'),
          r = n.length - 1
        let s = e,
          o = !1
        for (let i = 0; i < r; i++) {
          if (n[i] === '__proto__') throw new Error(`unsafe key: ${n[i]}`)
          if ((n[i] in s || (s[n[i]] = pe()), !ce(s[n[i]]))) {
            o = !0
            break
          }
          s = s[n[i]]
        }
        if (
          (o || (Pt(s) ? Gf.includes(n[r]) || delete e[t] : ((s[n[r]] = e[t]), delete e[t])),
          !Pt(s))
        ) {
          const i = s[n[r]]
          ce(i) && kr(i)
        }
      }
  return e
}
function td(e, t) {
  const { messages: n, __i18n: r, messageResolver: s, flatJson: o } = t,
    i = ie(n) ? n : Se(r) ? pe() : { [e]: pe() }
  if (
    (Se(r) &&
      r.forEach((a) => {
        if ('locale' in a && 'resource' in a) {
          const { locale: l, resource: u } = a
          l ? ((i[l] = i[l] || pe()), Un(u, i[l])) : Un(u, i)
        } else V(a) && Un(JSON.parse(a), i)
      }),
    s == null && o)
  )
    for (const a in i) pt(i, a) && kr(i[a])
  return i
}
function TE(e) {
  return e.type
}
function SE(e, t, n) {
  let r = ce(t.messages) ? t.messages : pe()
  '__i18nGlobal' in n && (r = td(e.locale.value, { messages: r, __i18n: n.__i18nGlobal }))
  const s = Object.keys(r)
  s.length &&
    s.forEach((o) => {
      e.mergeLocaleMessage(o, r[o])
    })
  {
    if (ce(t.datetimeFormats)) {
      const o = Object.keys(t.datetimeFormats)
      o.length &&
        o.forEach((i) => {
          e.mergeDateTimeFormat(i, t.datetimeFormats[i])
        })
    }
    if (ce(t.numberFormats)) {
      const o = Object.keys(t.numberFormats)
      o.length &&
        o.forEach((i) => {
          e.mergeNumberFormat(i, t.numberFormats[i])
        })
    }
  }
}
function Bl(e) {
  return Le(on, null, e, 0)
}
function nd() {
  return Ln()
}
const Wl = () => [],
  LE = () => !1
let Vl = 0
function Kl(e) {
  return (t, n, r, s) => e(n, r, nd() || void 0, s)
}
function rd(e = {}) {
  const { __root: t, __injectWithOption: n } = e,
    r = t === void 0,
    s = e.flatJson,
    o = ms ? st : Wn
  let i = Ce(e.inheritLocale) ? e.inheritLocale : !0
  const a = o(t && i ? t.locale.value : V(e.locale) ? e.locale : bs),
    l = o(
      t && i
        ? t.fallbackLocale.value
        : V(e.fallbackLocale) ||
            Se(e.fallbackLocale) ||
            ie(e.fallbackLocale) ||
            e.fallbackLocale === !1
          ? e.fallbackLocale
          : a.value
    ),
    u = o(td(a.value, e)),
    c = o(ie(e.datetimeFormats) ? e.datetimeFormats : { [a.value]: {} }),
    f = o(ie(e.numberFormats) ? e.numberFormats : { [a.value]: {} })
  let d = t ? t.missingWarn : Ce(e.missingWarn) || _s(e.missingWarn) ? e.missingWarn : !0,
    h = t ? t.fallbackWarn : Ce(e.fallbackWarn) || _s(e.fallbackWarn) ? e.fallbackWarn : !0,
    E = t ? t.fallbackRoot : Ce(e.fallbackRoot) ? e.fallbackRoot : !0,
    g = !!e.fallbackFormat,
    R = Ee(e.missing) ? e.missing : null,
    y = Ee(e.missing) ? Kl(e.missing) : null,
    v = Ee(e.postTranslation) ? e.postTranslation : null,
    p = t ? t.warnHtmlMessage : Ce(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
    _ = !!e.escapeParameter
  const T = t ? t.modifiers : ie(e.modifiers) ? e.modifiers : {}
  let L = e.pluralRules || (t && t.pluralRules),
    A
  ;((A = (() => {
    r && Nl(null)
    const S = {
      version: wE,
      locale: a.value,
      fallbackLocale: l.value,
      messages: u.value,
      modifiers: T,
      pluralRules: L,
      missing: y === null ? void 0 : y,
      missingWarn: d,
      fallbackWarn: h,
      fallbackFormat: g,
      unresolving: !0,
      postTranslation: v === null ? void 0 : v,
      warnHtmlMessage: p,
      escapeParameter: _,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: 'vue' },
    }
    ;((S.datetimeFormats = c.value),
      (S.numberFormats = f.value),
      (S.__datetimeFormatters = ie(A) ? A.__datetimeFormatters : void 0),
      (S.__numberFormatters = ie(A) ? A.__numberFormatters : void 0))
    const O = aE(S)
    return (r && Nl(O), O)
  })()),
    ir(A, a.value, l.value))
  function F() {
    return [a.value, l.value, u.value, c.value, f.value]
  }
  const $ = Ae({
      get: () => a.value,
      set: (S) => {
        ;((A.locale = S), (a.value = S))
      },
    }),
    q = Ae({
      get: () => l.value,
      set: (S) => {
        ;((A.fallbackLocale = S), (l.value = S), ir(A, a.value, S))
      },
    }),
    D = Ae(() => u.value),
    J = Ae(() => c.value),
    ne = Ae(() => f.value)
  function ae() {
    return Ee(v) ? v : null
  }
  function Y(S) {
    ;((v = S), (A.postTranslation = S))
  }
  function Z() {
    return R
  }
  function G(S) {
    ;(S !== null && (y = Kl(S)), (R = S), (A.missing = y))
  }
  const se = (S, O, W, Q, oe, re) => {
    F()
    let ye
    try {
      ;(r || (A.fallbackContext = t ? iE() : void 0), (ye = S(A)))
    } finally {
      r || (A.fallbackContext = void 0)
    }
    if ((W !== 'translate exists' && Pe(ye) && ye === Ys) || (W === 'translate exists' && !ye)) {
      const [De, it] = O()
      return t && E ? Q(t) : oe(De)
    } else {
      if (re(ye)) return ye
      throw bt(ft.UNEXPECTED_RETURN_TYPE)
    }
  }
  function ze(...S) {
    return se(
      (O) => Reflect.apply(jl, null, [O, ...S]),
      () => oi(...S),
      'translate',
      (O) => Reflect.apply(O.t, O, [...S]),
      (O) => O,
      (O) => V(O)
    )
  }
  function je(...S) {
    const [O, W, Q] = S
    if (Q && !ce(Q)) throw bt(ft.INVALID_ARGUMENT)
    return ze(O, W, ke({ resolvedMessage: !0 }, Q || {}))
  }
  function Me(...S) {
    return se(
      (O) => Reflect.apply(Ml, null, [O, ...S]),
      () => ri(...S),
      'datetime format',
      (O) => Reflect.apply(O.d, O, [...S]),
      () => Ol,
      (O) => V(O) || Se(O)
    )
  }
  function vt(...S) {
    return se(
      (O) => Reflect.apply(Fl, null, [O, ...S]),
      () => si(...S),
      'number format',
      (O) => Reflect.apply(O.n, O, [...S]),
      () => Ol,
      (O) => V(O) || Se(O)
    )
  }
  function Et(S) {
    return S.map((O) => (V(O) || Pe(O) || Ce(O) ? Bl(String(O)) : O))
  }
  const He = { normalize: Et, interpolate: (S) => S, type: 'vnode' }
  function M(...S) {
    return se(
      (O) => {
        let W
        const Q = O
        try {
          ;((Q.processor = He), (W = Reflect.apply(jl, null, [Q, ...S])))
        } finally {
          Q.processor = null
        }
        return W
      },
      () => oi(...S),
      'translate',
      (O) => O[ii](...S),
      (O) => [Bl(O)],
      (O) => Se(O)
    )
  }
  function K(...S) {
    return se(
      (O) => Reflect.apply(Fl, null, [O, ...S]),
      () => si(...S),
      'number format',
      (O) => O[li](...S),
      Wl,
      (O) => V(O) || Se(O)
    )
  }
  function B(...S) {
    return se(
      (O) => Reflect.apply(Ml, null, [O, ...S]),
      () => ri(...S),
      'datetime format',
      (O) => O[ai](...S),
      Wl,
      (O) => V(O) || Se(O)
    )
  }
  function X(S) {
    ;((L = S), (A.pluralRules = L))
  }
  function te(S, O) {
    return se(
      () => {
        if (!S) return !1
        const W = V(O) ? O : a.value,
          Q = V(O) ? [W] : ni(A, l.value, W)
        for (let oe = 0; oe < Q.length; oe++) {
          const re = C(Q[oe])
          let ye = A.messageResolver(re, S)
          if ((ye === null && (ye = re[S]), Pt(ye) || Kt(ye) || V(ye))) return !0
        }
        return !1
      },
      () => [S],
      'translate exists',
      (W) => Reflect.apply(W.te, W, [S, O]),
      LE,
      (W) => Ce(W)
    )
  }
  function me(S) {
    let O = null
    const W = ni(A, l.value, a.value)
    for (let Q = 0; Q < W.length; Q++) {
      const oe = u.value[W[Q]] || {},
        re = A.messageResolver(oe, S)
      if (re != null) {
        O = re
        break
      }
    }
    return O
  }
  function b(S) {
    const O = me(S)
    return O ?? (t ? t.tm(S) || {} : {})
  }
  function C(S) {
    return u.value[S] || {}
  }
  function P(S, O) {
    if (s) {
      const W = { [S]: O }
      for (const Q in W) pt(W, Q) && kr(W[Q])
      O = W[S]
    }
    ;((u.value[S] = O), (A.messages = u.value))
  }
  function H(S, O) {
    u.value[S] = u.value[S] || {}
    const W = { [S]: O }
    if (s) for (const Q in W) pt(W, Q) && kr(W[Q])
    ;((O = W[S]), Un(O, u.value[S]), (A.messages = u.value))
  }
  function N(S) {
    return c.value[S] || {}
  }
  function m(S, O) {
    ;((c.value[S] = O), (A.datetimeFormats = c.value), Dl(A, S, O))
  }
  function w(S, O) {
    ;((c.value[S] = ke(c.value[S] || {}, O)), (A.datetimeFormats = c.value), Dl(A, S, O))
  }
  function k(S) {
    return f.value[S] || {}
  }
  function I(S, O) {
    ;((f.value[S] = O), (A.numberFormats = f.value), Hl(A, S, O))
  }
  function x(S, O) {
    ;((f.value[S] = ke(f.value[S] || {}, O)), (A.numberFormats = f.value), Hl(A, S, O))
  }
  ;(Vl++,
    t &&
      ms &&
      (ct(t.locale, (S) => {
        i && ((a.value = S), (A.locale = S), ir(A, a.value, l.value))
      }),
      ct(t.fallbackLocale, (S) => {
        i && ((l.value = S), (A.fallbackLocale = S), ir(A, a.value, l.value))
      })))
  const U = {
    id: Vl,
    locale: $,
    fallbackLocale: q,
    get inheritLocale() {
      return i
    },
    set inheritLocale(S) {
      ;((i = S),
        S &&
          t &&
          ((a.value = t.locale.value), (l.value = t.fallbackLocale.value), ir(A, a.value, l.value)))
    },
    get availableLocales() {
      return Object.keys(u.value).sort()
    },
    messages: D,
    get modifiers() {
      return T
    },
    get pluralRules() {
      return L || {}
    },
    get isGlobal() {
      return r
    },
    get missingWarn() {
      return d
    },
    set missingWarn(S) {
      ;((d = S), (A.missingWarn = d))
    },
    get fallbackWarn() {
      return h
    },
    set fallbackWarn(S) {
      ;((h = S), (A.fallbackWarn = h))
    },
    get fallbackRoot() {
      return E
    },
    set fallbackRoot(S) {
      E = S
    },
    get fallbackFormat() {
      return g
    },
    set fallbackFormat(S) {
      ;((g = S), (A.fallbackFormat = g))
    },
    get warnHtmlMessage() {
      return p
    },
    set warnHtmlMessage(S) {
      ;((p = S), (A.warnHtmlMessage = S))
    },
    get escapeParameter() {
      return _
    },
    set escapeParameter(S) {
      ;((_ = S), (A.escapeParameter = S))
    },
    t: ze,
    getLocaleMessage: C,
    setLocaleMessage: P,
    mergeLocaleMessage: H,
    getPostTranslationHandler: ae,
    setPostTranslationHandler: Y,
    getMissingHandler: Z,
    setMissingHandler: G,
    [CE]: X,
  }
  return (
    (U.datetimeFormats = J),
    (U.numberFormats = ne),
    (U.rt = je),
    (U.te = te),
    (U.tm = b),
    (U.d = Me),
    (U.n = vt),
    (U.getDateTimeFormat = N),
    (U.setDateTimeFormat = m),
    (U.mergeDateTimeFormat = w),
    (U.getNumberFormat = k),
    (U.setNumberFormat = I),
    (U.mergeNumberFormat = x),
    (U[RE] = n),
    (U[ii] = M),
    (U[ai] = B),
    (U[li] = K),
    U
  )
}
const qi = {
  tag: { type: [String, Object] },
  locale: { type: String },
  scope: { type: String, validator: (e) => e === 'parent' || e === 'global', default: 'parent' },
  i18n: { type: Object },
}
function kE({ slots: e }, t) {
  return t.length === 1 && t[0] === 'default'
    ? (e.default ? e.default() : []).reduce(
        (r, s) => [...r, ...(s.type === Ge ? s.children : [s])],
        []
      )
    : t.reduce((n, r) => {
        const s = e[r]
        return (s && (n[r] = s()), n)
      }, pe())
}
function sd() {
  return Ge
}
const AE = ln({
    name: 'i18n-t',
    props: ke(
      {
        keypath: { type: String, required: !0 },
        plural: { type: [Number, String], validator: (e) => Pe(e) || !isNaN(e) },
      },
      qi
    ),
    setup(e, t) {
      const { slots: n, attrs: r } = t,
        s = e.i18n || Yi({ useScope: e.scope, __useComponent: !0 })
      return () => {
        const o = Object.keys(n).filter((f) => f[0] !== '_'),
          i = pe()
        ;(e.locale && (i.locale = e.locale),
          e.plural !== void 0 && (i.plural = V(e.plural) ? +e.plural : e.plural))
        const a = kE(t, o),
          l = s[ii](e.keypath, a, i),
          u = ke(pe(), r),
          c = V(e.tag) || ce(e.tag) ? e.tag : sd()
        return Xe(c, u, l)
      }
    },
  }),
  Gl = AE
function PE(e) {
  return Se(e) && !V(e[0])
}
function od(e, t, n, r) {
  const { slots: s, attrs: o } = t
  return () => {
    const i = { part: !0 }
    let a = pe()
    ;(e.locale && (i.locale = e.locale),
      V(e.format)
        ? (i.key = e.format)
        : ce(e.format) &&
          (V(e.format.key) && (i.key = e.format.key),
          (a = Object.keys(e.format).reduce(
            (d, h) => (n.includes(h) ? ke(pe(), d, { [h]: e.format[h] }) : d),
            pe()
          ))))
    const l = r(e.value, i, a)
    let u = [i.key]
    Se(l)
      ? (u = l.map((d, h) => {
          const E = s[d.type],
            g = E ? E({ [d.type]: d.value, index: h, parts: l }) : [d.value]
          return (PE(g) && (g[0].key = `${d.type}-${h}`), g)
        }))
      : V(l) && (u = [l])
    const c = ke(pe(), o),
      f = V(e.tag) || ce(e.tag) ? e.tag : sd()
    return Xe(f, c, u)
  }
}
const OE = ln({
    name: 'i18n-n',
    props: ke({ value: { type: Number, required: !0 }, format: { type: [String, Object] } }, qi),
    setup(e, t) {
      const n = e.i18n || Yi({ useScope: e.scope, __useComponent: !0 })
      return od(e, t, zf, (...r) => n[li](...r))
    },
  }),
  ql = OE
function IE(e, t) {
  const n = e
  if (e.mode === 'composition') return n.__getInstance(t) || e.global
  {
    const r = n.__getInstance(t)
    return r != null ? r.__composer : e.global.__composer
  }
}
function NE(e) {
  const t = (i) => {
    const { instance: a, value: l } = i
    if (!a || !a.$) throw bt(ft.UNEXPECTED_ERROR)
    const u = IE(e, a.$),
      c = Yl(l)
    return [Reflect.apply(u.t, u, [...Jl(c)]), u]
  }
  return {
    created: (i, a) => {
      const [l, u] = t(a)
      ;(ms &&
        (i.__i18nWatcher = ct(u.locale, () => {
          a.instance && a.instance.$forceUpdate()
        })),
        (i.__composer = u),
        (i.textContent = l))
    },
    unmounted: (i) => {
      ;(ms &&
        i.__i18nWatcher &&
        (i.__i18nWatcher(), (i.__i18nWatcher = void 0), delete i.__i18nWatcher),
        i.__composer && ((i.__composer = void 0), delete i.__composer))
    },
    beforeUpdate: (i, { value: a }) => {
      if (i.__composer) {
        const l = i.__composer,
          u = Yl(a)
        i.textContent = Reflect.apply(l.t, l, [...Jl(u)])
      }
    },
    getSSRProps: (i) => {
      const [a] = t(i)
      return { textContent: a }
    },
  }
}
function Yl(e) {
  if (V(e)) return { path: e }
  if (ie(e)) {
    if (!('path' in e)) throw bt(ft.REQUIRED_VALUE, 'path')
    return e
  } else throw bt(ft.INVALID_VALUE)
}
function Jl(e) {
  const { path: t, locale: n, args: r, choice: s, plural: o } = e,
    i = {},
    a = r || {}
  return (V(n) && (i.locale = n), Pe(s) && (i.plural = s), Pe(o) && (i.plural = o), [t, a, i])
}
function xE(e, t, ...n) {
  const r = ie(n[0]) ? n[0] : {}
  ;((!Ce(r.globalInstall) || r.globalInstall) &&
    ([Gl.name, 'I18nT'].forEach((o) => e.component(o, Gl)),
    [ql.name, 'I18nN'].forEach((o) => e.component(o, ql)),
    [Ql.name, 'I18nD'].forEach((o) => e.component(o, Ql))),
    e.directive('t', NE(t)))
}
const ME = cn('global-vue-i18n')
function DE(e = {}) {
  const t = Ce(e.globalInjection) ? e.globalInjection : !0,
    n = new Map(),
    [r, s] = FE(e),
    o = cn('')
  function i(c) {
    return n.get(c) || null
  }
  function a(c, f) {
    n.set(c, f)
  }
  function l(c) {
    n.delete(c)
  }
  const u = {
    get mode() {
      return 'composition'
    },
    async install(c, ...f) {
      if (((c.__VUE_I18N_SYMBOL__ = o), c.provide(c.__VUE_I18N_SYMBOL__, u), ie(f[0]))) {
        const E = f[0]
        ;((u.__composerExtend = E.__composerExtend), (u.__vueI18nExtend = E.__vueI18nExtend))
      }
      let d = null
      ;(t && (d = KE(c, u.global)), xE(c, u, ...f))
      const h = c.unmount
      c.unmount = () => {
        ;(d && d(), u.dispose(), h())
      }
    },
    get global() {
      return s
    },
    dispose() {
      r.stop()
    },
    __instances: n,
    __getInstance: i,
    __setInstance: a,
    __deleteInstance: l,
  }
  return u
}
function Yi(e = {}) {
  const t = nd()
  if (t == null) throw bt(ft.MUST_BE_CALL_SETUP_TOP)
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw bt(ft.NOT_INSTALLED)
  const n = HE(t),
    r = UE(n),
    s = TE(t),
    o = $E(e, s)
  if (o === 'global') return (SE(r, e, s), r)
  if (o === 'parent') {
    let l = jE(n, t, e.__useComponent)
    return (l == null && (l = r), l)
  }
  const i = n
  let a = i.__getInstance(t)
  if (a == null) {
    const l = ke({}, e)
    ;('__i18n' in s && (l.__i18n = s.__i18n),
      r && (l.__root = r),
      (a = rd(l)),
      i.__composerExtend && (a[ci] = i.__composerExtend(a)),
      WE(i, t, a),
      i.__setInstance(t, a))
  }
  return a
}
function FE(e, t) {
  const n = pi(),
    r = n.run(() => rd(e))
  if (r == null) throw bt(ft.UNEXPECTED_ERROR)
  return [n, r]
}
function HE(e) {
  const t = qe(e.isCE ? ME : e.appContext.app.__VUE_I18N_SYMBOL__)
  if (!t) throw bt(e.isCE ? ft.NOT_INSTALLED_WITH_PROVIDE : ft.UNEXPECTED_ERROR)
  return t
}
function $E(e, t) {
  return Bs(e) ? ('__i18n' in t ? 'local' : 'global') : e.useScope ? e.useScope : 'local'
}
function UE(e) {
  return e.mode === 'composition' ? e.global : e.global.__composer
}
function jE(e, t, n = !1) {
  let r = null
  const s = t.root
  let o = BE(t, n)
  for (; o != null; ) {
    const i = e
    if ((e.mode === 'composition' && (r = i.__getInstance(o)), r != null || s === o)) break
    o = o.parent
  }
  return r
}
function BE(e, t = !1) {
  return e == null ? null : (t && e.vnode.ctx) || e.parent
}
function WE(e, t, n) {
  ;(Is(() => {}, t),
    Ci(() => {
      const r = n
      e.__deleteInstance(t)
      const s = r[ci]
      s && (s(), delete r[ci])
    }, t))
}
const VE = ['locale', 'fallbackLocale', 'availableLocales'],
  Xl = ['t', 'rt', 'd', 'n', 'tm', 'te']
function KE(e, t) {
  const n = Object.create(null)
  return (
    VE.forEach((s) => {
      const o = Object.getOwnPropertyDescriptor(t, s)
      if (!o) throw bt(ft.UNEXPECTED_ERROR)
      const i = Re(o.value)
        ? {
            get() {
              return o.value.value
            },
            set(a) {
              o.value.value = a
            },
          }
        : {
            get() {
              return o.get && o.get()
            },
          }
      Object.defineProperty(n, s, i)
    }),
    (e.config.globalProperties.$i18n = n),
    Xl.forEach((s) => {
      const o = Object.getOwnPropertyDescriptor(t, s)
      if (!o || !o.value) throw bt(ft.UNEXPECTED_ERROR)
      Object.defineProperty(e.config.globalProperties, `$${s}`, o)
    }),
    () => {
      ;(delete e.config.globalProperties.$i18n,
        Xl.forEach((s) => {
          delete e.config.globalProperties[`$${s}`]
        }))
    }
  )
}
const GE = ln({
    name: 'i18n-d',
    props: ke(
      { value: { type: [Number, Date], required: !0 }, format: { type: [String, Object] } },
      qi
    ),
    setup(e, t) {
      const n = e.i18n || Yi({ useScope: e.scope, __useComponent: !0 })
      return od(e, t, Qf, (...r) => n[ai](...r))
    },
  }),
  Ql = GE
rE(Bv)
sE(eE)
oE(ni)
function zl(e = fe()) {
  const t = Gs(e)
  return (n) => {
    if (n != null) return t.getRouteBaseName(n) || void 0
  }
}
function qE(e = fe()) {
  const t = Gs(e)
  return (n, r) => Cf(t, n, r)
}
function YE(e = fe()) {
  const t = Gs(e)
  return (n, r) => Rf(t, n, r)
}
function id(e = fe()) {
  const t = Gs(e)
  return (n) => Sf(t, n)
}
const Zl = 'nuxt-i18n-slp',
  JE = new RegExp([`<!--${Zl}-\\[(\\w+)\\]-->`, '.+?', `<!--/${Zl}-->`].join(''), 'g'),
  XE = Qe({
    name: 'i18n:plugin:switch-locale-path-ssr',
    dependsOn: ['i18n:plugin'],
    setup(e) {
      const t = fe(e._id),
        n = id(t)
      t.hook('app:rendered', (r) => {
        r.renderResult?.html != null &&
          (r.renderResult.html = r.renderResult.html.replaceAll(JE, (s, o) => {
            const i = encodeURI(n(o ?? ''))
            return s.replace(/href="([^"]+)"/, `href="${i || '#'}" `)
          }))
      })
    },
  }),
  QE = Qe({
    name: 'i18n:plugin:route-locale-detect',
    dependsOn: ['i18n:plugin'],
    async setup(e) {
      let t, n
      const r = fe(e._id),
        s = ji(r),
        o = Df()
      ;(([t, n] = Cn(() =>
        r.runWithContext(() => Ff(r, (s.initial && o.value) || av(r, r.$router.currentRoute.value)))
      )),
        await t,
        n())
    },
  }),
  zE = Qe({ name: 'i18n:plugin:preload', dependsOn: ['i18n:plugin'], async setup(e) {} })
function ZE(e, { extendComposer: t, extendComposerInstance: n }) {
  const r = pi(),
    s = e.install.bind(e)
  e.install = (o, ...i) => {
    const a = ke({}, i[0])
    ;((a.__composerExtend = (u) => (n(u, Jr(e)), () => {})),
      e.mode === 'legacy' && (a.__vueI18nExtend = (u) => (n(u, Jr(u)), () => {})),
      Reflect.apply(s, e, [o, a]))
    const l = Jr(e)
    if (
      (r.run(() => {
        ;(t(l), e.mode === 'legacy' && '__composer' in e.global && n(e.global, Jr(e.global)))
      }),
      e.mode === 'composition' &&
        o.config.globalProperties.$i18n != null &&
        n(o.config.globalProperties.$i18n, l),
      o.unmount)
    ) {
      const u = o.unmount.bind(o)
      o.unmount = () => {
        ;(r.stop(), u())
      }
    }
  }
}
const e0 = async (e) => {
    const t = await Mb(wb)
    ;((t.locale = e || t.locale || 'en-US'),
      (t.defaultLocale = e),
      (t.fallbackLocale ??= !1),
      (t.messages ??= {}))
    for (const n of Sr) t.messages[n] ??= {}
    return t
  },
  t0 = Qe({
    name: 'i18n:plugin',
    parallel: !1,
    async setup(e) {
      let t, n
      Object.defineProperty(e.versions, 'nuxtI18n', { get: () => '10.2.3' })
      const r = fe(e._id),
        s = Vs(r),
        o = r.ssrContext?.event?.context?.nuxtI18n?.vueI18nOptions,
        i = Gb(If().host) || s.defaultLocale || '',
        a = o || (([t, n] = Cn(() => e0(i))), (t = await t), n(), t),
        l = Mf()
      ;((l.value ??= Wb(a.fallbackLocale)), Sr.map((d) => `/_i18n/yGgzdvbC/${d}/messages.json`))
      const u = DE(a),
        c = Bi(void 0, Ks(r), r),
        f = Yb(r, u, a.defaultLocale)
      ;((r._nuxtI18n = f),
        ZE(u, {
          extendComposer(d) {
            ;((d.locales = Ae(() => s.locales)), (d.localeCodes = Ae(() => Sr)))
            const h = st(f.getBaseUrl())
            ;((d.baseUrl = Ae(() => h.value)),
              ct(d.locale, () => (h.value = f.getBaseUrl())),
              (d.strategy = 'no_prefix'),
              (d.localeProperties = Ae(
                () => Mr.find((E) => E.code === d.locale.value) || { code: d.locale.value }
              )),
              (d.setLocale = async (E) => {
                ;(await Ff(r, E),
                  await r.runWithContext(() => (r.$router.currentRoute.value, void 0)))
              }),
              (d.loadLocaleMessages = f.loadMessages),
              (d.differentDomains = !1),
              (d.defaultLocale = a.defaultLocale),
              (d.getBrowserLocale = () => Cl(c.navigator())),
              (d.getLocaleCookie = () => Cl(c.cookie())),
              (d.setLocaleCookie = f.setCookieLocale),
              (d.finalizePendingLocaleChange = async () => {
                u.__pendingLocale && (await u.__resolvePendingLocalePromise?.())
              }),
              (d.waitForPendingLocaleChange = async () => {
                await u?.__pendingLocalePromise
              }))
          },
          extendComposerInstance(d, h) {
            const E = [
              ['locales', () => h.locales],
              ['localeCodes', () => h.localeCodes],
              ['baseUrl', () => h.baseUrl],
              ['strategy', () => 'no_prefix'],
              ['localeProperties', () => h.localeProperties],
              ['setLocale', () => (g) => Reflect.apply(h.setLocale, h, [g])],
              ['loadLocaleMessages', () => (g) => Reflect.apply(h.loadLocaleMessages, h, [g])],
              ['differentDomains', () => !1],
              ['defaultLocale', () => h.defaultLocale],
              ['getBrowserLocale', () => () => Reflect.apply(h.getBrowserLocale, h, [])],
              ['getLocaleCookie', () => () => Reflect.apply(h.getLocaleCookie, h, [])],
              ['setLocaleCookie', () => (g) => Reflect.apply(h.setLocaleCookie, h, [g])],
              [
                'finalizePendingLocaleChange',
                () => () => Reflect.apply(h.finalizePendingLocaleChange, h, []),
              ],
              [
                'waitForPendingLocaleChange',
                () => () => Reflect.apply(h.waitForPendingLocaleChange, h, []),
              ],
            ]
            for (const [g, R] of E) Object.defineProperty(d, g, { get: R })
          },
        }),
        r.vueApp.use(u),
        Object.defineProperty(r, '$i18n', { get: () => Ui(u) }),
        r.provide('localeHead', (d) => pb(r._nuxtI18n.composableCtx, d)),
        r.provide('localePath', qE(r)),
        r.provide('localeRoute', YE(r)),
        r.provide('routeBaseName', zl(r)),
        r.provide('getRouteBaseName', zl(r)),
        r.provide('switchLocalePath', id(r)))
    },
  }),
  n0 = Qe({
    name: 'i18n:plugin:ssg-detect',
    dependsOn: ['i18n:plugin', 'i18n:plugin:route-locale-detect'],
    enforce: 'post',
    setup(e) {},
  }),
  r0 = [c_, p_, Hy, $y, Uy, jy, Wy, Vy, qy, XE, QE, zE, t0, n0],
  ad = (e = 'RouteProvider') =>
    ln({
      name: e,
      props: {
        route: { type: Object, required: !0 },
        vnode: Object,
        vnodeRef: Object,
        renderKey: String,
        trackRootNodes: Boolean,
      },
      setup(t) {
        const n = t.renderKey,
          r = t.route,
          s = {}
        for (const o in t.route)
          Object.defineProperty(s, o, {
            get: () => (n === t.renderKey ? t.route[o] : r[o]),
            enumerable: !0,
          })
        return (Fn(Hs, Bt(s)), () => (t.vnode ? Xe(t.vnode, { ref: t.vnodeRef }) : t.vnode))
      },
    }),
  s0 = ad(),
  ec = new WeakMap(),
  o0 = ln({
    name: 'NuxtPage',
    inheritAttrs: !1,
    props: {
      name: { type: String },
      transition: { type: [Boolean, Object], default: void 0 },
      keepalive: { type: [Boolean, Object], default: void 0 },
      route: { type: Object },
      pageKey: { type: [Function, String], default: null },
    },
    setup(e, { attrs: t, slots: n, expose: r }) {
      const s = fe(),
        o = st(),
        i = qe(Hs, null)
      let a
      r({ pageRef: o })
      const l = qe(lm, null)
      let u
      const c = s.deferHydration()
      let f = !1,
        d = 0
      if (s.isHydrating) {
        const E = s.hooks.hookOnce('app:error', c)
        ot().beforeEach(E)
      }
      e.pageKey &&
        ct(
          () => e.pageKey,
          (E, g) => {
            E !== g && s.callHook('page:loading:start')
          }
        )
      let h = !1
      {
        const E = ot().beforeResolve(() => {
          h = !1
        })
        Ir(() => {
          ;(E(), c())
        })
      }
      return () =>
        Xe(
          _f,
          { name: e.name, route: e.route, ...t },
          {
            default: (E) => {
              const g = a0(i, E.route, E.Component),
                R = i && i.matched.length === E.route.matched.length
              if (!E.Component) {
                if (u && !R) return u
                c()
                return
              }
              if (u && l && !l.isCurrent(E.route)) return u
              if (g && i && (!l || l?.isCurrent(i))) return R || u ? u : null
              const y = zo(E, e.pageKey),
                v = l0(i, E.route, E.Component)
              ;(!s.isHydrating &&
                a === y &&
                !v &&
                Vn(() => {
                  h || ((h = !0), s.callHook('page:loading:end'))
                }),
                f && a !== y && d++,
                (a = y))
              const p = !!(e.transition ?? E.route.meta.pageTransition ?? Ua),
                _ =
                  p &&
                  i0([
                    e.transition,
                    E.route.meta.pageTransition,
                    Ua,
                    {
                      onAfterLeave() {
                        ;(delete s._runningTransition,
                          s.callHook('page:transition:finish', E.Component))
                      },
                    },
                  ]),
                T = e.keepalive ?? E.route.meta.keepalive ?? Jg
              return (
                (u = Ly(
                  p && _,
                  Ry(
                    T,
                    Xe(
                      gu,
                      {
                        key: d,
                        suspensible: !0,
                        onPending: () => {
                          ;((f = !0),
                            p && (s._runningTransition = !0),
                            s.callHook('page:start', E.Component))
                        },
                        onResolve: async () => {
                          f = !1
                          try {
                            ;(await Vn(),
                              s._route.sync?.(),
                              await s.callHook('page:finish', E.Component),
                              delete s._runningTransition,
                              !h && !v && ((h = !0), await s.callHook('page:loading:end')))
                          } finally {
                            c()
                          }
                        },
                      },
                      {
                        default: () => {
                          const L = {
                            key: y || void 0,
                            vnode: n.default ? c0(n.default, E) : E.Component,
                            route: E.route,
                            renderKey: y || void 0,
                            trackRootNodes: p,
                            vnodeRef: o,
                          }
                          if (!T) return Xe(s0, L)
                          const A = E.Component.type,
                            j = A
                          let F = ec.get(j)
                          return (F || ((F = ad(A.name || A.__name)), ec.set(j, F)), Xe(F, L))
                        },
                      }
                    )
                  )
                ).default()),
                u
              )
            },
          }
        )
    },
  })
function i0(e) {
  const t = []
  for (const n of e)
    n && t.push({ ...n, onAfterLeave: n.onAfterLeave ? Fi(n.onAfterLeave) : void 0 })
  return Vu(...t)
}
function a0(e, t, n) {
  if (!e) return !1
  const r = t.matched.findIndex((s) => s.components?.default === n?.type)
  return !r || r === -1
    ? !1
    : t.matched
        .slice(0, r)
        .some((s, o) => s.components?.default !== e.matched[o]?.components?.default) ||
        (n && zo({ route: t, Component: n }) !== zo({ route: e, Component: n }))
}
function l0(e, t, n) {
  return e
    ? t.matched.findIndex((s) => s.components?.default === n?.type) < t.matched.length - 1
    : !1
}
function c0(e, t) {
  const n = e(t)
  return n.length === 1 ? Xe(n[0]) : Xe(Ge, void 0, n)
}
const u0 = (e, t) => {
    const n = e.__vccOpts || e
    for (const [r, s] of t) n[r] = s
    return n
  },
  f0 = {}
function d0(e, t) {
  const n = o0
  return (kt(), vu('div', null, [Le(n)]))
}
const h0 = u0(f0, [['render', d0]]),
  p0 = {
    __name: 'nuxt-error-page',
    props: { error: Object },
    setup(e) {
      const n = e.error,
        r = Number(n.statusCode || 500),
        s = r === 404,
        o = n.statusMessage ?? (s ? 'Page Not Found' : 'Internal Server Error'),
        i = n.message || n.toString(),
        a = void 0,
        c = s
          ? la(() => Tr(() => import('./CayoTp9U.js'), __vite__mapDeps([2, 3]), import.meta.url))
          : la(() => Tr(() => import('./CnimIfSR.js'), __vite__mapDeps([4, 5]), import.meta.url))
      return (f, d) => (
        kt(),
        yn(
          _e(c),
          yd(
            Cu({
              status: _e(r),
              statusText: _e(o),
              statusCode: _e(r),
              statusMessage: _e(o),
              description: _e(i),
              stack: _e(a),
            })
          ),
          null,
          16
        )
      )
    },
  },
  g0 = { key: 0 },
  tc = {
    __name: 'nuxt-root',
    setup(e) {
      const t = () => null,
        n = fe(),
        r = n.deferHydration()
      if (n.isHydrating) {
        const u = n.hooks.hookOnce('app:error', r)
        ot().beforeEach(u)
      }
      const s = !1
      ;(Fn(Hs, Oi()), n.hooks.callHookWith((u) => u.map((c) => c()), 'vue:setup'))
      const o = $s(),
        i = !1,
        a = /bot\b|chrome-lighthouse|facebookexternalhit|google\b/i
      qc((u, c, f) => {
        if (
          (n.hooks
            .callHook('vue:error', u, c, f)
            .catch((d) => console.error('[nuxt] Error in `vue:error` hook', d)),
          a.test(navigator.userAgent))
        )
          return (
            n.hooks.callHook('app:error', u),
            console.error(
              `[nuxt] Not rendering error page for bot with user agent \`${navigator.userAgent}\`:`,
              u
            ),
            !1
          )
        if (qu(u) && (u.fatal || u.unhandled)) return (n.runWithContext(() => _n(u)), !1)
      })
      const l = !1
      return (u, c) => (
        kt(),
        yn(
          gu,
          { onResolve: _e(r) },
          {
            default: Mc(() => [
              _e(i)
                ? (kt(), vu('div', g0))
                : _e(o)
                  ? (kt(), yn(_e(p0), { key: 1, error: _e(o) }, null, 8, ['error']))
                  : _e(l)
                    ? (kt(), yn(_e(t), { key: 2, context: _e(l) }, null, 8, ['context']))
                    : _e(s)
                      ? (kt(), yn(Rh(_e(s)), { key: 3 }))
                      : (kt(), yn(_e(h0), { key: 4 })),
            ]),
            _: 1,
          },
          8,
          ['onResolve']
        )
      )
    },
  }
let nc
{
  let e
  ;((nc = async function () {
    if (e) return e
    const n = !!(
        window.__NUXT__?.serverRendered ??
        document.getElementById('__NUXT_DATA__')?.dataset.ssr === 'true'
      ),
      r = n ? jp(tc) : Up(tc),
      s = Zg({ vueApp: r })
    async function o(i) {
      ;(await s.callHook('app:error', i), (s.payload.error ||= Rn(i)))
    }
    ;((r.config.errorHandler = o),
      s.hook('app:suspense:resolve', () => {
        r.config.errorHandler === o && (r.config.errorHandler = void 0)
      }),
      !n &&
        ja.id &&
        s.hook('app:suspense:resolve', () => {
          document.getElementById(ja.id)?.remove()
        }))
    try {
      await nm(s, r0)
    } catch (i) {
      o(i)
    }
    try {
      ;(await s.hooks.callHook('app:created', r),
        await s.hooks.callHook('app:beforeMount', r),
        r.mount(Xg),
        await s.hooks.callHook('app:mounted', r),
        await Vn())
    } catch (i) {
      o(i)
    }
    return r
  }),
    (e = nc().catch((t) => {
      throw (console.error('Error while mounting app:', t), t)
    })))
}
export {
  ie as $,
  vu as A,
  wu as B,
  wd as C,
  Le as D,
  Mc as E,
  Ru as F,
  yn as G,
  _e as H,
  qs as I,
  V as J,
  ke as K,
  pe as L,
  ce as M,
  Pe as N,
  qe as O,
  Bs as P,
  Ci as Q,
  rE as R,
  sE as S,
  oE as T,
  Ge as U,
  cn as V,
  Se as W,
  Ln as X,
  Ce as Y,
  bs as Z,
  u0 as _,
  fe as a,
  _s as a0,
  Ee as a1,
  ir as a2,
  ms as a3,
  ct as a4,
  Un as a5,
  pt as a6,
  Nl as a7,
  aE as a8,
  Dl as a9,
  Bd as aA,
  m0 as aB,
  Fn as aC,
  Hl as aa,
  Pt as ab,
  Gf as ac,
  R0 as ad,
  iE as ae,
  Ys as af,
  Wv as ag,
  ni as ah,
  oi as ai,
  jl as aj,
  Ol as ak,
  ri as al,
  Ml as am,
  si as an,
  Fl as ao,
  Kt as ap,
  zf as aq,
  Qf as ar,
  Bv as as,
  eE as at,
  on as au,
  $u as av,
  y0 as aw,
  Ts as ax,
  b0 as ay,
  Rh as az,
  Hi as b,
  Ir as c,
  ln as d,
  C0 as e,
  _0 as f,
  fm as g,
  Xe as h,
  st as i,
  um as j,
  Gy as k,
  Ae as l,
  Tn as m,
  w0 as n,
  Is as o,
  Li as p,
  Nt as q,
  gl as r,
  Wn as s,
  xr as t,
  ot as u,
  Cr as v,
  gg as w,
  E0 as x,
  Qm as y,
  kt as z,
}
