// Mobile nav toggle
const toggle = document.querySelector(".nav__toggle");
const links = document.querySelector(".nav__links");

if (toggle && links) {
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );
}

// Current year in footer
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Interactive particle / network background (hero band)
(function initParticles() {
  const canvas = document.querySelector(".particles");
  if (!canvas) return;

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  if (reduceMotion) return;

  const ctx = canvas.getContext("2d");
  const band = canvas.parentElement;

  // Palette (from CSS custom properties)
  const DOT = "47, 111, 159";   // accent-2, link blue
  const LINE = "31, 58, 95";    // accent, navy

  let width = 0;
  let height = 0;
  let dpr = Math.min(window.devicePixelRatio || 1, 2);
  let particles = [];
  const mouse = { x: null, y: null };

  // Distances (kept in CSS pixels, squared for cheap comparisons)
  const LINK_DIST = 130;
  const MOUSE_DIST = 170;

  function resize() {
    width = band.clientWidth;
    height = band.clientHeight;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // Density scales with area, capped for performance
    const target = Math.min(90, Math.round((width * height) / 12000));
    particles = [];
    for (let i = 0; i < target; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.6 + 1.2,
      });
    }
  }

  function step() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      // Drift + gentle pull toward the cursor
      if (mouse.x !== null) {
        const mdx = mouse.x - p.x;
        const mdy = mouse.y - p.y;
        const md2 = mdx * mdx + mdy * mdy;
        if (md2 < MOUSE_DIST * MOUSE_DIST) {
          const md = Math.sqrt(md2) || 1;
          const force = (MOUSE_DIST - md) / MOUSE_DIST;
          p.vx += (mdx / md) * force * 0.06;
          p.vy += (mdy / md) * force * 0.06;
        }
      }

      p.x += p.vx;
      p.y += p.vy;

      // Damping so cursor pulls don't accumulate forever
      p.vx *= 0.985;
      p.vy *= 0.985;

      // Wrap around edges
      if (p.x < -10) p.x = width + 10;
      else if (p.x > width + 10) p.x = -10;
      if (p.y < -10) p.y = height + 10;
      else if (p.y > height + 10) p.y = -10;

      // Draw node
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(" + DOT + ", 0.7)";
      ctx.fill();

      // Links to nearby particles
      for (let j = i + 1; j < particles.length; j++) {
        const q = particles[j];
        const dx = p.x - q.x;
        const dy = p.y - q.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < LINK_DIST * LINK_DIST) {
          const alpha = (1 - Math.sqrt(d2) / LINK_DIST) * 0.35;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = "rgba(" + LINE + ", " + alpha + ")";
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      // Link to the cursor
      if (mouse.x !== null) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < MOUSE_DIST * MOUSE_DIST) {
          const alpha = (1 - Math.sqrt(d2) / MOUSE_DIST) * 0.5;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = "rgba(" + DOT + ", " + alpha + ")";
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    rafId = requestAnimationFrame(step);
  }

  // Track the pointer relative to the hero band
  band.addEventListener("pointermove", (e) => {
    const rect = band.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });
  band.addEventListener("pointerleave", () => {
    mouse.x = null;
    mouse.y = null;
  });

  let rafId = null;
  let resizeTimer = null;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 150);
  });

  // Pause when the hero scrolls out of view
  if ("IntersectionObserver" in window) {
    const vis = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && rafId === null) {
            rafId = requestAnimationFrame(step);
          } else if (!entry.isIntersecting && rafId !== null) {
            cancelAnimationFrame(rafId);
            rafId = null;
          }
        });
      },
      { threshold: 0 }
    );
    vis.observe(band);
  }

  resize();
  rafId = requestAnimationFrame(step);
})();

// Scroll-reveal animations
const revealEls = document.querySelectorAll(".reveal");
if (revealEls.length && "IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  // Fallback: no observer support -> just show everything
  revealEls.forEach((el) => el.classList.add("is-visible"));
}
