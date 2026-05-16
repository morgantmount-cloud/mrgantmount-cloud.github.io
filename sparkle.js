// sparkle.js — cursor sparkle trail effect for all pages
// This runs on every page and creates little colored dots that follow your cursor!

const COLORS = ['#ff2d8b', '#ff85c2', '#c678f0', '#ffe066', '#ffffff'];

document.addEventListener('mousemove', (e) => {
  const dot = document.createElement('div');
  dot.classList.add('sparkle-dot');

  // Random color from our Y2K palette
  dot.style.background = COLORS[Math.floor(Math.random() * COLORS.length)];

  // Position at cursor, with a tiny random offset so they spread out
  dot.style.left = (e.clientX + (Math.random() * 16 - 8)) + 'px';
  dot.style.top  = (e.clientY + (Math.random() * 16 - 8)) + 'px';

  document.body.appendChild(dot);

  // Remove dot from the page after the animation finishes (0.6s)
  setTimeout(() => dot.remove(), 600);
});
