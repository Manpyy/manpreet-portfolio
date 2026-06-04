// Galaxy Canvas - Star field + nebula effect
const canvas = document.getElementById('galaxy-canvas');
const ctx = canvas.getContext('2d');

let W, H, stars = [], nebulaClouds = [];

function resize() {
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
}

function randomBetween(a, b) { return a + Math.random() * (b - a); }

function initStars() {
  stars = [];
  const count = Math.floor((W * H) / 3000);
  for (let i = 0; i < count; i++) {
    stars.push({
      x: Math.random() * W,
      y: Math.random() * H,
      r: randomBetween(0.2, 1.8),
      alpha: randomBetween(0.3, 1),
      twinkleSpeed: randomBetween(0.005, 0.02),
      twinkleDir: Math.random() > 0.5 ? 1 : -1,
      color: ['#ffffff','#a855f7','#38bdf8','#ec4899','#fbbf24'][Math.floor(Math.random()*5)]
    });
  }
  nebulaClouds = [];
  const nCount = 6;
  for (let i = 0; i < nCount; i++) {
    nebulaClouds.push({
      x: Math.random() * W,
      y: Math.random() * H,
      r: randomBetween(150, 400),
      color: ['rgba(168,85,247','rgba(56,189,248','rgba(236,72,153','rgba(99,102,241'][Math.floor(Math.random()*4)],
      alpha: randomBetween(0.02, 0.07)
    });
  }
}

function drawNebula() {
  nebulaClouds.forEach(n => {
    const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r);
    grad.addColorStop(0, `${n.color},${n.alpha})`);
    grad.addColorStop(0.5, `${n.color},${n.alpha * 0.5})`);
    grad.addColorStop(1, `${n.color},0)`);
    ctx.beginPath();
    ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
    ctx.fillStyle = grad;
    ctx.fill();
  });
}

let frame = 0;
function animate() {
  ctx.clearRect(0, 0, W, H);
  drawNebula();
  frame++;
  stars.forEach(s => {
    s.alpha += s.twinkleSpeed * s.twinkleDir;
    if (s.alpha >= 1) { s.alpha = 1; s.twinkleDir = -1; }
    if (s.alpha <= 0.1) { s.alpha = 0.1; s.twinkleDir = 1; }
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fillStyle = s.color;
    ctx.globalAlpha = s.alpha;
    ctx.fill();
    ctx.globalAlpha = 1;
  });
  requestAnimationFrame(animate);
}

window.addEventListener('resize', () => { resize(); initStars(); });
resize();
initStars();
animate();
