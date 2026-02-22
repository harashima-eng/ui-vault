/**
 * UI Vault — GSAP Utility Library
 * Shared animation functions for all components.
 * Requires: gsap, ScrollTrigger, TextPlugin, Flip
 */
var UV = (function () {
  'use strict';

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function safeAnimate(fn) {
    if (!reducedMotion) return fn();
    return null;
  }

  // ─── Basic Animations ────────────────────────────

  function fadeIn(targets, opts) {
    opts = opts || {};
    return safeAnimate(function () {
      return gsap.from(targets, {
        opacity: 0,
        y: opts.y != null ? opts.y : 30,
        duration: opts.duration || 0.6,
        delay: opts.delay || 0,
        ease: opts.ease || 'power3.out',
        stagger: opts.stagger || 0,
      });
    });
  }

  function fadeOut(targets, opts) {
    opts = opts || {};
    return safeAnimate(function () {
      return gsap.to(targets, {
        opacity: 0,
        y: opts.y != null ? opts.y : -20,
        duration: opts.duration || 0.4,
        ease: opts.ease || 'power2.in',
        onComplete: opts.onComplete || null,
      });
    });
  }

  function scaleIn(targets, opts) {
    opts = opts || {};
    return safeAnimate(function () {
      return gsap.from(targets, {
        opacity: 0,
        scale: opts.scale || 0.85,
        duration: opts.duration || 0.5,
        ease: opts.ease || 'back.out(1.7)',
        stagger: opts.stagger || 0,
      });
    });
  }

  function slideIn(targets, opts) {
    opts = opts || {};
    var dir = opts.direction || 'left';
    var axis = (dir === 'left' || dir === 'right') ? 'x' : 'y';
    var val = (dir === 'left' || dir === 'up') ? -60 : 60;
    var props = {
      opacity: 0,
      duration: opts.duration || 0.6,
      ease: opts.ease || 'power3.out',
      stagger: opts.stagger || 0,
    };
    props[axis] = val;
    return safeAnimate(function () {
      return gsap.from(targets, props);
    });
  }

  // ─── ScrollTrigger ───────────────────────────────

  function scrollReveal(targets, opts) {
    opts = opts || {};
    return safeAnimate(function () {
      return gsap.from(targets, {
        scrollTrigger: {
          trigger: opts.trigger || targets,
          start: opts.start || 'top 85%',
          end: opts.end || 'top 20%',
          toggleActions: opts.toggleActions || 'play none none reverse',
        },
        opacity: 0,
        y: opts.y != null ? opts.y : 40,
        duration: opts.duration || 0.7,
        ease: opts.ease || 'power3.out',
        stagger: opts.stagger || 0,
      });
    });
  }

  function scrollParallax(targets, opts) {
    opts = opts || {};
    return safeAnimate(function () {
      return gsap.to(targets, {
        scrollTrigger: {
          trigger: opts.trigger || targets,
          start: 'top bottom',
          end: 'bottom top',
          scrub: opts.scrub != null ? opts.scrub : 1,
        },
        y: opts.y != null ? opts.y : -50,
        ease: 'none',
      });
    });
  }

  // ─── Hover Interactions ──────────────────────────

  function hoverScale(selector, opts) {
    opts = opts || {};
    if (reducedMotion) return;
    var els = typeof selector === 'string'
      ? document.querySelectorAll(selector)
      : [selector];
    els.forEach(function (el) {
      el.addEventListener('mouseenter', function () {
        gsap.to(el, {
          scale: opts.scale || 1.05,
          duration: opts.duration || 0.3,
          ease: opts.ease || 'power2.out',
          boxShadow: opts.shadow || '0 10px 40px rgba(0,0,0,0.15)',
        });
      });
      el.addEventListener('mouseleave', function () {
        gsap.to(el, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out',
          boxShadow: opts.restShadow || '0 4px 12px rgba(0,0,0,0.08)',
        });
      });
    });
  }

  function hoverLift(selector, opts) {
    opts = opts || {};
    if (reducedMotion) return;
    var els = typeof selector === 'string'
      ? document.querySelectorAll(selector)
      : [selector];
    els.forEach(function (el) {
      el.addEventListener('mouseenter', function () {
        gsap.to(el, {
          y: opts.y != null ? opts.y : -8,
          duration: 0.3,
          ease: 'power2.out',
          boxShadow: opts.shadow || '0 20px 60px rgba(0,0,0,0.12)',
        });
      });
      el.addEventListener('mouseleave', function () {
        gsap.to(el, {
          y: 0,
          duration: 0.3,
          ease: 'power2.out',
          boxShadow: opts.restShadow || '0 4px 12px rgba(0,0,0,0.08)',
        });
      });
    });
  }

  // ─── Text Animations ─────────────────────────────

  function typewriter(target, text, opts) {
    opts = opts || {};
    return safeAnimate(function () {
      return gsap.to(target, {
        text: { value: text, delimiter: '' },
        duration: opts.duration || 2,
        ease: opts.ease || 'none',
        delay: opts.delay || 0,
      });
    });
  }

  function textRevealByLine(targets, opts) {
    opts = opts || {};
    return safeAnimate(function () {
      return gsap.from(targets, {
        opacity: 0,
        y: 20,
        duration: opts.duration || 0.5,
        ease: 'power2.out',
        stagger: opts.stagger || 0.1,
      });
    });
  }

  // ─── Timeline Builders ───────────────────────────

  function staggerSequence(targets, opts) {
    opts = opts || {};
    return safeAnimate(function () {
      var tl = gsap.timeline({
        scrollTrigger: opts.scrollTrigger || null,
      });
      tl.from(targets, {
        opacity: 0,
        y: opts.y != null ? opts.y : 30,
        duration: opts.duration || 0.5,
        ease: opts.ease || 'power3.out',
        stagger: opts.stagger || 0.08,
      });
      return tl;
    });
  }

  function initPage(opts) {
    opts = opts || {};
    return safeAnimate(function () {
      var tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      if (opts.title) {
        tl.from(opts.title, { opacity: 0, y: -30, duration: 0.6 });
      }
      if (opts.subtitle) {
        tl.from(opts.subtitle, { opacity: 0, y: -20, duration: 0.4 }, '-=0.3');
      }
      if (opts.content) {
        tl.from(opts.content, {
          opacity: 0, y: 30, duration: 0.5,
          stagger: 0.06,
        }, '-=0.2');
      }
      return tl;
    });
  }

  // ─── Flip Layout ─────────────────────────────────

  function flipLayout(targets, callback, opts) {
    opts = opts || {};
    return safeAnimate(function () {
      var state = Flip.getState(targets);
      callback();
      return Flip.from(state, {
        duration: opts.duration || 0.6,
        ease: opts.ease || 'power2.inOut',
        stagger: opts.stagger || 0.04,
        absolute: true,
      });
    });
  }

  // ─── Utility ─────────────────────────────────────

  function replayAll() {
    gsap.globalTimeline.restart();
  }

  // ─── Control Panel ───────────────────────────────

  function addControlPanel() {
    if (reducedMotion) return;

    var panel = document.createElement('div');
    panel.className = 'gsap-controls';

    var buttons = [
      { action: 'replay', label: 'Replay', title: 'Replay animations' },
      { action: 'slow', label: '0.3x', title: '0.3x speed' },
      { action: 'normal', label: '1x', title: 'Normal speed' },
      { action: 'fast', label: '3x', title: '3x speed' },
    ];

    buttons.forEach(function (cfg) {
      var btn = document.createElement('button');
      btn.setAttribute('data-action', cfg.action);
      btn.setAttribute('title', cfg.title);
      btn.textContent = cfg.label;
      if (cfg.action === 'normal') btn.setAttribute('data-active', 'true');
      panel.appendChild(btn);
    });

    var style = document.createElement('style');
    style.textContent =
      '.gsap-controls{position:fixed;bottom:20px;right:20px;z-index:9999;' +
      'display:flex;gap:6px;padding:8px 10px;background:rgba(0,0,0,0.8);' +
      'border-radius:10px;backdrop-filter:blur(8px);' +
      'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}' +
      '.gsap-controls button{background:rgba(255,255,255,0.12);color:#fff;' +
      'border:1px solid rgba(255,255,255,0.15);border-radius:6px;' +
      'padding:5px 10px;font-size:12px;cursor:pointer;font-family:inherit}' +
      '.gsap-controls button:hover{background:rgba(255,255,255,0.25)}' +
      '.gsap-controls button[data-active="true"]{' +
      'background:rgba(217,119,6,0.6);border-color:rgba(217,119,6,0.8)}';

    document.head.appendChild(style);
    document.body.appendChild(panel);

    panel.addEventListener('click', function (e) {
      var btn = e.target.closest('button');
      if (!btn) return;
      var action = btn.getAttribute('data-action');

      var speedBtns = panel.querySelectorAll('[data-action="slow"],[data-action="normal"],[data-action="fast"]');
      speedBtns.forEach(function (b) { b.removeAttribute('data-active'); });

      switch (action) {
        case 'replay':
          replayAll();
          break;
        case 'slow':
          gsap.globalTimeline.timeScale(0.3);
          btn.setAttribute('data-active', 'true');
          break;
        case 'normal':
          gsap.globalTimeline.timeScale(1);
          btn.setAttribute('data-active', 'true');
          break;
        case 'fast':
          gsap.globalTimeline.timeScale(3);
          btn.setAttribute('data-active', 'true');
          break;
      }
    });
  }

  // ─── Public API ──────────────────────────────────

  return {
    prefersReducedMotion: reducedMotion,
    safeAnimate: safeAnimate,
    fadeIn: fadeIn,
    fadeOut: fadeOut,
    scaleIn: scaleIn,
    slideIn: slideIn,
    scrollReveal: scrollReveal,
    scrollParallax: scrollParallax,
    hoverScale: hoverScale,
    hoverLift: hoverLift,
    typewriter: typewriter,
    textRevealByLine: textRevealByLine,
    staggerSequence: staggerSequence,
    initPage: initPage,
    flipLayout: flipLayout,
    replayAll: replayAll,
    addControlPanel: addControlPanel,
  };
})();
