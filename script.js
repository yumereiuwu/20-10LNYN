/**
 * ====================================================================
 * GỬI LÊ NGUYỄN YẾN NHI - 20/10 ĐẶC BIỆT
 * Scrollytelling Web App (HTML5 + CSS3 + Vanilla JS)
 * ====================================================================
 * 
 * BẠN CÓ THỂ DỄ DÀNG CHỈNH SỬA TẤT CẢ NỘI DUNG Ở MẢNG DỮ LIỆU DƯỚI ĐÂY:
 */

const CONFIG = {
  // 1. THÔNG TIN CÁ NHÂN HÓA
  recipient: {
    name: "Lê Nguyễn Yến Nhi",
    birthDate: "18/06/2006",
    homeTown: "Thành phố Hồ Chí Minh",
    pronounSender: "anh",
    pronounReceiver: "em"
  },

  // 2. DỮ LIỆU 4 ĐIỀU ĐÁNG YÊU VỀ EM (CẢNH 6)
  traits: [
    {
      icon: "✨",
      text: "luôn cố gắng hết mình dù có lúc rất mệt"
    },
    {
      icon: "🌸",
      text: "dịu dàng với mọi người xung quanh"
    },
    {
      icon: "☀️",
      text: "cười lên là anh quên hết mọi chuyện"
    },
    {
      icon: "💫",
      text: "vừa lo cho người khác, vừa giữ ước mơ riêng"
    }
  ],

  // 3. NỘI DUNG BỨC THƯ CHÚC MỪNG CÁ NHÂN (CẢNH 9 - MÀN KẾT)
  finaleLetter: `mong mỗi ngày của em đều ngập tràn niềm vui, có hoa, có nắng, có tiếng cười — và luôn có anh ở bên cạnh để chia sẻ mọi điều trong cuộc sống. Cảm ơn em vì đã đến và làm thế giới của anh trở nên dịu dàng hơn rất nhiều.<br><br><strong style="color: #ff4081;">anh hoàng yêu bé nhii lắmm ❤️</strong>`,

  // 4. TOÀN BỘ DANH SÁCH CÁC CẢNH (SCENES)
  // Các thẻ <span class="highlight">từ khóa</span> sẽ được tô màu hồng neon nổi bật
  scenes: [
    // --- CẢNH 1: Màn mở đầu (bấm để mở quà) ---
    {
      id: "intro",
      type: "intro",
      showCharacter: false,
      showPetals: false,
      subtitle: ""
    },

    // --- CẢNH 2.1: Chú mèo xuất hiện chào hỏi ---
    {
      id: "greet_1",
      type: "character_only",
      characterPos: "center",
      expression: "normal",
      showPetals: false,
      subtitle: "meo~ <span class=\"highlight\">em ơi</span>!"
    },

    // --- CẢNH 2.2: Bật mí nhiệm vụ đặc biệt từ anh ---
    {
      id: "greet_2",
      type: "character_only",
      characterPos: "center",
      expression: "curious",
      showPetals: false,
      subtitle: "hôm nay meo được giao một <span class=\"highlight\">nhiệm vụ đặc biệt</span> từ anh nè…"
    },

    // --- CẢNH 3: 20/10 Ngày Phụ Nữ Việt Nam & Hoa rơi ---
    {
      id: "banner_2010",
      type: "stage_subview",
      viewId: "scene-banner-2010",
      characterPos: "left",
      expression: "happy",
      showPetals: true,
      subtitle: "<span class=\"highlight\">20/10</span> rồi!"
    },

    // --- CẢNH 4: Cột mốc năm sinh 2006 (20 năm của Yến Nhi) ---
    {
      id: "milestone_2006",
      type: "stage_subview",
      viewId: "scene-milestone",
      characterPos: "left",
      expression: "normal",
      showPetals: true,
      subtitle: "ngày <span class=\"highlight\">18/06/2006</span>, Sài Gòn có thêm một cô gái tên là <span class=\"highlight\">Yến Nhi</span>"
    },

    // --- CẢNH 5: Chòm sao Yến Nhi ---
    {
      id: "constellation",
      type: "stage_subview",
      viewId: "scene-constellation",
      characterPos: "left",
      expression: "curious",
      showPetals: true,
      subtitle: "mỗi người đều là một ngôi sao riêng, và em là <span class=\"highlight\">ngôi sao của anh</span>"
    },

    // --- CẢNH 6: 4 Thẻ điều đáng yêu về em ---
    {
      id: "traits",
      type: "stage_subview",
      viewId: "scene-traits",
      characterPos: "left",
      expression: "happy",
      showPetals: true,
      subtitle: "những điều ở em khiến anh luôn <span class=\"highlight\">yêu thương và tự hào</span>",
      onEnter: () => animateTraits()
    },

    // --- CẢNH 7: Lời chúc 1 - Sức khỏe (Trái tim & Đường điện tim) ---
    {
      id: "wish_health",
      type: "stage_subview",
      viewId: "scene-wish-health",
      characterPos: "left",
      expression: "normal",
      showPetals: true,
      subtitle: "chúc em thật nhiều <span class=\"highlight\">sức khỏe</span> — để còn đi hết những nơi em muốn đến"
    },

    // --- CẢNH 8: Lời chúc 2 - Bình yên (Trăng tròn & Đóa sen nở) ---
    {
      id: "wish_peace",
      type: "stage_subview",
      viewId: "scene-wish-peace",
      characterPos: "left",
      expression: "happy",
      showPetals: true,
      subtitle: "chúc em <span class=\"highlight\">bình yên</span> — dù ngoài kia có ồn ào thế nào"
    },

    // --- CẢNH 8.5: Câu hỏi tương tác ngọt ngào (Nháy mắt tinh nghịch) ---
    {
      id: "question",
      type: "stage_subview",
      viewId: "scene-question",
      characterPos: "center",
      expression: "wink",
      showPetals: true,
      subtitle: "cho meo hỏi một câu thôi nhé… hôm nay em đã <span class=\"highlight\">khen bản thân</span> chưa?"
    },

    // --- CẢNH 9: Màn kết (Thiệp chúc mừng, mầm cây hóa vàng & pháo hoa) ---
    {
      id: "finale",
      type: "stage_subview",
      viewId: "scene-finale",
      characterPos: "left",
      expression: "happy",
      goldenMode: true,
      showPetals: true,
      showFireworks: true,
      subtitle: "<span class=\"highlight\">Chúc mừng 20/10</span> người phụ nữ tuyệt vời nhất của anh!"
    }
  ]
};

/* ====================================================================
   TRẠNG THÁI ỨNG DỤNG VÀ THAM CHIẾU DOM
   ==================================================================== */
let currentSceneIndex = 0;
let isTyping = false;
let typewriterTimeout = null;
let currentFullSubtitleHtml = "";

// DOM Elements
const progressBar = document.getElementById("progress-bar");
const audioToggleBtn = document.getElementById("audio-toggle");
const iconSoundOn = document.getElementById("icon-sound-on");
const iconSoundOff = document.getElementById("icon-sound-off");
const bgMusic = document.getElementById("bg-music");

const sceneIntro = document.getElementById("scene-intro");
const characterContainer = document.getElementById("character-container");
const faceNormal = document.getElementById("face-normal");
const faceHappy = document.getElementById("face-happy");
const faceCurious = document.getElementById("face-curious");
const faceWink = document.getElementById("face-wink");

const stageContent = document.getElementById("stage-content");
const traitsList = document.getElementById("traits-list");
const finaleLetterText = document.getElementById("finale-letter-text");

const btnAnswerYes = document.getElementById("btn-answer-yes");
const btnAnswerNo = document.getElementById("btn-answer-no");
const btnCopyLink = document.getElementById("btn-copy-link");
const btnReplay = document.getElementById("btn-replay");
const copyToast = document.getElementById("copy-toast");

const subtitleBox = document.getElementById("subtitle-box");
const subtitleText = document.getElementById("subtitle-text");

const starsCanvas = document.getElementById("stars-canvas");
const petalsCanvas = document.getElementById("petals-canvas");
const fireworksCanvas = document.getElementById("fireworks-canvas");
const grassCanvas = document.getElementById("grass-canvas");
const grassCtx = grassCanvas.getContext("2d");
let grassBlades = [];
const grassColors = ["#ff2a74", "#00f2fe", "#ffd000", "#b388ff", "#2ed573", "#ff79b0"];

/* ====================================================================
   1. QUẢN LÝ ÂM THANH (AUDIO CONTROLLER)
   ==================================================================== */
let audioStarted = false;

function initAudio() {
  if (audioStarted) return;
  audioStarted = true;
  bgMusic.volume = 0.55;
  const playPromise = bgMusic.play();
  if (playPromise !== undefined) {
    playPromise.catch(err => {
      console.log("Audio autoplay chờ người dùng tương tác: ", err);
    });
  }
}

audioToggleBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  if (bgMusic.paused) {
    bgMusic.play();
    iconSoundOn.classList.remove("hidden");
    iconSoundOff.classList.add("hidden");
  } else {
    bgMusic.pause();
    iconSoundOn.classList.add("hidden");
    iconSoundOff.classList.remove("hidden");
  }
});

/* ====================================================================
   2. HỆ THỐNG BẦU TRỜI SAO NHẤP NHÁY (STARS CANVAS)
   ==================================================================== */
const starsCtx = starsCanvas.getContext("2d");
let starsArray = [];
const starColors = ["#ffffff", "#ffb6c1", "#ffe4b5", "#a0e6ff", "#f3a683", "#f8a5c2"];

function resizeStarsCanvas() {
  starsCanvas.width = window.innerWidth;
  starsCanvas.height = window.innerHeight;
  initStars();
}

function initStars() {
  starsArray = [];
  const count = Math.floor((starsCanvas.width * starsCanvas.height) / 7200);
  for (let i = 0; i < count; i++) {
    starsArray.push({
      x: Math.random() * starsCanvas.width,
      y: Math.random() * (starsCanvas.height * 0.88),
      radius: Math.random() * 1.4 + 0.4,
      color: starColors[Math.floor(Math.random() * starColors.length)],
      alpha: Math.random() * 0.7 + 0.3,
      alphaSpeed: (Math.random() * 0.02 + 0.008) * (Math.random() > 0.5 ? 1 : -1)
    });
  }
}

function drawStars() {
  starsCtx.clearRect(0, 0, starsCanvas.width, starsCanvas.height);
  for (let i = 0; i < starsArray.length; i++) {
    const s = starsArray[i];
    s.alpha += s.alphaSpeed;
    if (s.alpha > 0.95 || s.alpha < 0.25) {
      s.alphaSpeed = -s.alphaSpeed;
    }
    starsCtx.save();
    starsCtx.globalAlpha = Math.max(0.1, Math.min(1, s.alpha));
    starsCtx.fillStyle = s.color;
    starsCtx.shadowBlur = s.radius * 3;
    starsCtx.shadowColor = s.color;
    starsCtx.beginPath();
    starsCtx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
    starsCtx.fill();
    starsCtx.restore();
  }
  requestAnimationFrame(drawStars);
}

/* ====================================================================
   3. HỆ THỐNG HẠT HỢP NHẤT: CÁNH HOA + TRÁI TIM + LÁ RƠI (UNIFIED PARTICLES)
   ==================================================================== */
const particlesCanvas = petalsCanvas; // Tái sử dụng canvas lớp particle
const pCtx = particlesCanvas.getContext("2d");

// Bảng màu cho từng loại hạt
const COLOR_HEARTS = ["#ff2a74", "#ff4081", "#ff79b0", "#ff99bb", "#ff5252", "#f06292"];
const COLOR_PETALS = ["rgba(255, 154, 182, 0.8)", "rgba(255, 192, 203, 0.75)", "rgba(255, 225, 160, 0.75)", "rgba(218, 182, 252, 0.78)"];
const COLOR_LEAVES = ["#00f2fe", "#4facfe", "#43e97b", "#38ef7d", "#ffe066", "#a8ff78"];

let particlePool = [];
const MAX_POOL_SIZE = 75;
let currentTargetParticleCount = 0;
let isCatHeartsRising = false;

function resizeParticlesCanvas() {
  particlesCanvas.width = window.innerWidth;
  particlesCanvas.height = window.innerHeight;
}

function initParticlePool() {
  particlePool = [];
  const types = ["petal", "heart", "leaf"];
  for (let i = 0; i < MAX_POOL_SIZE; i++) {
    const type = types[i % 3];
    particlePool.push(createPooledParticle(type, true));
  }
}

function createPooledParticle(type, isInitial = false) {
  const isRising = false;
  let color = "";
  let size = 12;

  if (type === "heart") {
    size = Math.random() * 16 + 10; // 10px đến 26px
    color = COLOR_HEARTS[Math.floor(Math.random() * COLOR_HEARTS.length)];
  } else if (type === "leaf") {
    size = Math.random() * 12 + 10; // 10px đến 22px
    color = COLOR_LEAVES[Math.floor(Math.random() * COLOR_LEAVES.length)];
  } else {
    size = Math.random() * 9 + 8; // 8px đến 17px
    color = COLOR_PETALS[Math.floor(Math.random() * COLOR_PETALS.length)];
  }

  const p = {
    type: type,
    x: Math.random() * window.innerWidth,
    y: isInitial ? Math.random() * window.innerHeight : -30,
    size: size,
    speedY: Math.random() * 1.3 + 0.7,
    speedX: Math.random() * 0.8 - 0.4,
    rotation: Math.random() * Math.PI * 2,
    rotationSpeed: (Math.random() * 2 - 1) * 0.025,
    flipAngle: Math.random() * Math.PI * 2,
    flipSpeed: Math.random() * 0.035 + 0.015,
    swayAngle: Math.random() * Math.PI * 2,
    swaySpeed: Math.random() * 0.025 + 0.01,
    color: color,
    alpha: Math.random() * 0.45 + 0.35, // Độ trong suốt dịu nhẹ không che chữ
    hasGlow: Math.random() > 0.4,
    isRising: isRising
  };
  return p;
}

function resetParticle(p, forceCatRising = false) {
  p.isRising = forceCatRising;
  p.rotation = Math.random() * Math.PI * 2;

  if (p.isRising) {
    // Trái tim bay lên từ khu vực chú mèo
    const catRect = characterContainer.getBoundingClientRect();
    const originX = catRect.left + catRect.width * 0.5 || window.innerWidth * 0.3;
    const originY = catRect.top + catRect.height * 0.6 || window.innerHeight * 0.4;
    p.type = "heart";
    p.x = originX + (Math.random() * 80 - 40);
    p.y = originY + (Math.random() * 40 - 20);
    p.size = Math.random() * 14 + 10;
    p.color = COLOR_HEARTS[Math.floor(Math.random() * COLOR_HEARTS.length)];
    p.speedY = -(Math.random() * 1.6 + 1.1); // Bay ngược lên
    p.speedX = (Math.random() * 2 - 1) * 1.2;
    p.alpha = Math.random() * 0.4 + 0.45;
  } else {
    // Rơi từ mép trên xuống
    p.x = Math.random() * window.innerWidth;
    p.y = -35;
    p.speedY = Math.random() * 1.3 + 0.7;
    p.speedX = Math.random() * 0.8 - 0.4;
    p.alpha = Math.random() * 0.4 + 0.35;
  }
}

// 1. Vẽ hình Trái Tim bằng Canvas Path (không dùng emoji)
function drawCanvasHeart(ctx, x, y, size, color, alpha, hasGlow, rotation) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rotation);
  ctx.globalAlpha = alpha;
  ctx.fillStyle = color;
  if (hasGlow) {
    ctx.shadowBlur = 6;
    ctx.shadowColor = color;
  }
  ctx.beginPath();
  const d = size * 0.55;
  ctx.moveTo(0, -d * 0.35);
  ctx.bezierCurveTo(-d * 0.8, -d * 1.15, -d * 1.6, -d * 0.25, 0, d * 1.15);
  ctx.bezierCurveTo(d * 1.6, -d * 0.25, d * 0.8, -d * 1.15, 0, -d * 0.35);
  ctx.fill();
  ctx.restore();
}

// 2. Vẽ hình Chiếc Lá thật có gân lá và xoay lật 3D
function drawCanvasLeaf(ctx, x, y, size, color, alpha, rotation, flipAngle) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rotation);
  // Mô phỏng lật lá 3D trong gió
  ctx.scale(Math.cos(flipAngle), 1);
  ctx.globalAlpha = alpha;
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(0, -size);
  ctx.quadraticCurveTo(size * 0.55, 0, 0, size);
  ctx.quadraticCurveTo(-size * 0.55, 0, 0, -size);
  ctx.fill();
  // Gân sống lá mảnh ở giữa
  ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(0, -size * 0.8);
  ctx.lineTo(0, size * 0.8);
  ctx.stroke();
  ctx.restore();
}

// 3. Vẽ hình Cánh Hoa uốn cong
function drawCanvasPetal(ctx, x, y, size, color, alpha, rotation, flipAngle) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rotation);
  ctx.scale(1, Math.sin(flipAngle) * 0.5 + 0.5);
  ctx.globalAlpha = alpha;
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.ellipse(0, 0, size * 0.5, size * 0.9, Math.PI / 4, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function drawUnifiedParticles() {
  pCtx.clearRect(0, 0, particlesCanvas.width, particlesCanvas.height);

  if (currentTargetParticleCount > 0) {
    const activeCount = Math.min(currentTargetParticleCount, particlePool.length);

    for (let i = 0; i < activeCount; i++) {
      const p = particlePool[i];

      // Cập nhật vị trí và góc xoay
      p.y += p.speedY;
      p.swayAngle += p.swaySpeed;
      p.x += Math.sin(p.swayAngle) * 0.75 + p.speedX;
      p.rotation += p.rotationSpeed;
      p.flipAngle += p.flipSpeed;

      // Tính toán fade out cho hạt khi rơi vào vùng cỏ (từ 88% chiều cao màn hình xuống đáy)
      let renderAlpha = p.alpha;
      const grassStartY = window.innerHeight * 0.88;
      if (!p.isRising && p.y >= grassStartY) {
        const fadeRatio = Math.max(0, 1 - (p.y - grassStartY) / (window.innerHeight * 0.12));
        renderAlpha = p.alpha * fadeRatio;
      }

      // Vẽ theo từng loại hạt với renderAlpha đã xử lý mờ dần
      if (p.type === "heart") {
        drawCanvasHeart(pCtx, p.x, p.y, p.size, p.color, renderAlpha, p.hasGlow, p.rotation);
      } else if (p.type === "leaf") {
        drawCanvasLeaf(pCtx, p.x, p.y, p.size, p.color, renderAlpha, p.rotation, p.flipAngle);
      } else {
        drawCanvasPetal(pCtx, p.x, p.y, p.size, p.color, renderAlpha, p.rotation, p.flipAngle);
      }

      // Xử lý khi rơi ra khỏi màn hình
      if (!p.isRising && p.y > particlesCanvas.height + 30) {
        // Nếu ở màn kết và là hạt tim, có cơ hội chuyển thành tim bay lên từ chú mèo
        const shouldRise = isCatHeartsRising && Math.random() < 0.45;
        resetParticle(p, shouldRise);
      } else if (p.isRising && (p.y < -30 || p.x < -30 || p.x > particlesCanvas.width + 30)) {
        resetParticle(p, isCatHeartsRising);
      }
    }
  }

  requestAnimationFrame(drawUnifiedParticles);
}

// Cập nhật số lượng hạt theo từng cảnh (tự giảm 50% trên điện thoại)
function setParticleSceneDensity(sceneId) {
  const isMobile = window.innerWidth < 768;
  const ratio = isMobile ? 0.5 : 1.0;

  isCatHeartsRising = false;

  if (sceneId === "intro" || sceneId === "greet_1" || sceneId === "greet_2") {
    // Cảnh 1–2: Không có hạt
    currentTargetParticleCount = 0;
  } else if (sceneId === "banner_2010" || sceneId === "milestone_2006" || sceneId === "constellation" || sceneId === "traits") {
    // Cảnh 3–6: Ít (18 hạt trên desktop, 9 trên mobile)
    currentTargetParticleCount = Math.round(18 * ratio);
  } else if (sceneId === "wish_health" || sceneId === "wish_peace" || sceneId === "question") {
    // Cảnh lời chúc: Vừa (30 hạt trên desktop, 15 trên mobile)
    currentTargetParticleCount = Math.round(30 * ratio);
  } else if (sceneId === "finale") {
    // Màn kết: Nhiều (60 hạt trên desktop, 30 trên mobile) + tim bay lên từ chú mèo
    currentTargetParticleCount = Math.round(60 * ratio);
    isCatHeartsRising = true;
  }
}

/* ====================================================================
   4. HỆ THỐNG PHÁO HOA & HẠT LẤP LÁNH (FIREWORKS CANVAS - MÀN KẾT)
   ==================================================================== */
const fwCtx = fireworksCanvas.getContext("2d");
let fwParticles = [];
let isFireworksActive = false;
let lastFireworkTime = 0;
const goldColors = ["#ffd700", "#ffb300", "#ff79b0", "#ffffff", "#ff80ab", "#ffe57f"];

function resizeFireworksCanvas() {
  fireworksCanvas.width = window.innerWidth;
  fireworksCanvas.height = window.innerHeight;
}

function createFirework(x, y) {
  const particleCount = 45;
  for (let i = 0; i < particleCount; i++) {
    const angle = (Math.PI * 2 * i) / particleCount + (Math.random() * 0.2);
    const speed = Math.random() * 4.5 + 2;
    fwParticles.push({
      x: x,
      y: y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      alpha: 1,
      decay: Math.random() * 0.015 + 0.01,
      size: Math.random() * 2.8 + 1.2,
      color: goldColors[Math.floor(Math.random() * goldColors.length)]
    });
  }
}

function drawFireworks(time) {
  fwCtx.clearRect(0, 0, fireworksCanvas.width, fireworksCanvas.height);
  if (isFireworksActive) {
    if (time - lastFireworkTime > 750) {
      lastFireworkTime = time;
      // Bắn pháo hoa ngẫu nhiên ở khu vực phía trên
      const fx = Math.random() * fireworksCanvas.width * 0.7 + (fireworksCanvas.width * 0.15);
      const fy = Math.random() * (fireworksCanvas.height * 0.45) + (fireworksCanvas.height * 0.1);
      createFirework(fx, fy);
    }

    for (let i = fwParticles.length - 1; i >= 0; i--) {
      const p = fwParticles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.04; // Trọng lực nhẹ
      p.vx *= 0.98;
      p.alpha -= p.decay;

      if (p.alpha <= 0) {
        fwParticles.splice(i, 1);
        continue;
      }

      fwCtx.save();
      fwCtx.globalAlpha = p.alpha;
      fwCtx.fillStyle = p.color;
      fwCtx.shadowBlur = 8;
      fwCtx.shadowColor = p.color;
      fwCtx.beginPath();
      fwCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      fwCtx.fill();
      fwCtx.restore();
    }
  }
  requestAnimationFrame(drawFireworks);
}

/* ====================================================================
   4.5 HỆ THỐNG THẢM CỎ NEON CANVAS ĐỘNG (GRASS CANVAS)
   ==================================================================== */
function hexToRgba(hex, alpha) {
  let c = hex.replace("#", "");
  if (c.length === 3) {
    c = c.split("").map(x => x + x).join("");
  }
  const num = parseInt(c, 16);
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha.toFixed(3)})`;
}

function resizeGrassCanvas() {
  if (!grassCanvas) return;
  grassCanvas.width = window.innerWidth;
  // Chiều cao thảm cỏ tối đa 7% chiều cao màn hình (trên mobile ≤600px tối đa 5%)
  const maxRatio = window.innerWidth <= 600 ? 0.05 : 0.07;
  grassCanvas.height = Math.round(window.innerHeight * maxRatio * 1.15);
  initGrass();
}

function initGrass() {
  grassBlades = [];
  // Khoảng 110 cọng trên máy tính, 70 trên điện thoại
  const bladeCount = window.innerWidth <= 600 ? 70 : 110;
  const maxBladeH = window.innerWidth <= 600 ? window.innerHeight * 0.05 : window.innerHeight * 0.07;
  const vh3 = window.innerHeight * 0.03;
  const vh5 = window.innerHeight * 0.05;

  for (let i = 0; i < bladeCount; i++) {
    // Vị trí x ngẫu nhiên không đều, không lặp theo khuôn
    const x = Math.random() * grassCanvas.width;
    
    // Chiều cao: phần lớn cọng chỉ cao 3–5vh, tối đa 7vh
    let h;
    const rand = Math.random();
    if (rand < 0.75) {
      // 75% cọng cao 3–5vh
      h = vh3 + Math.random() * (vh5 - vh3);
    } else {
      // 25% cọng cao 5–7vh
      h = vh5 + Math.random() * (maxBladeH - vh5);
    }

    grassBlades.push({
      x: x,
      height: Math.min(h, maxBladeH),
      thickness: Math.random() * 0.5 + 1.0, // 1–1.5px
      curve: (Math.random() * 16 - 8),      // Độ cong ngẫu nhiên
      color: grassColors[Math.floor(Math.random() * grassColors.length)],
      alpha: Math.random() * 0.35 + 0.45,   // Alpha 0.45–0.8
      swayRange: Math.random() * 3.5 + 1.5, // Đung đưa nhẹ, biên độ nhỏ 1.5–5px
      speed: Math.random() * 0.015 + 0.01,
      phase: Math.random() * Math.PI * 2
    });
  }
}

function drawGrass(time = 0) {
  if (!grassCanvas || !grassCtx) return;
  grassCtx.clearRect(0, 0, grassCanvas.width, grassCanvas.height);

  const t = time * 0.002;
  const baseY = grassCanvas.height;

  for (let i = 0; i < grassBlades.length; i++) {
    const b = grassBlades[i];
    const sway = Math.sin(t * b.speed * 40 + b.phase) * b.swayRange;
    const tipX = b.x + b.curve + sway;
    const tipY = baseY - b.height;
    const cpX = b.x + sway * 0.35;
    const cpY = baseY - b.height * 0.55;

    // Gradient màu: gốc cọng mờ hơn ngọn
    const grad = grassCtx.createLinearGradient(b.x, baseY, tipX, tipY);
    grad.addColorStop(0, hexToRgba(b.color, b.alpha * 0.35));
    grad.addColorStop(1, hexToRgba(b.color, b.alpha));

    grassCtx.save();
    grassCtx.strokeStyle = grad;
    grassCtx.lineWidth = b.thickness;
    grassCtx.lineCap = "round";
    // Giảm hiệu ứng glow: shadowBlur tối đa 3px
    grassCtx.shadowBlur = 3;
    grassCtx.shadowColor = b.color;

    grassCtx.beginPath();
    grassCtx.moveTo(b.x, baseY);
    grassCtx.quadraticCurveTo(cpX, cpY, tipX, tipY);
    grassCtx.stroke();
    grassCtx.restore();
  }
  requestAnimationFrame(drawGrass);
}

/* ====================================================================
   5. TYPEWRITER ENGINE CHO PHỤ ĐỀ (SUBTITLES)
   ==================================================================== */
function setSubtitle(htmlText) {
  if (typewriterTimeout) {
    clearTimeout(typewriterTimeout);
    typewriterTimeout = null;
  }
  currentFullSubtitleHtml = htmlText;

  if (!htmlText) {
    subtitleBox.classList.add("hidden");
    subtitleText.innerHTML = "";
    isTyping = false;
    return;
  }

  subtitleBox.classList.remove("hidden");
  isTyping = true;

  // Tách các token: hỗ trợ thẻ HTML <span class="highlight">...</span>
  const tokens = [];
  const regex = /(<[^>]+>|[^<]+)/g;
  let match;
  while ((match = regex.exec(htmlText)) !== null) {
    const part = match[0];
    if (part.startsWith("<")) {
      tokens.push({ isTag: true, text: part });
    } else {
      for (const char of part) {
        tokens.push({ isTag: false, text: char });
      }
    }
  }

  let index = 0;
  let currentHtml = "";
  subtitleText.innerHTML = "";

  function typeChar() {
    if (index < tokens.length) {
      const tok = tokens[index];
      currentHtml += tok.text;
      index++;

      while (index < tokens.length && tokens[index].isTag) {
        currentHtml += tokens[index].text;
        index++;
      }

      subtitleText.innerHTML = currentHtml + `<span class="typewriter-cursor"></span>`;
      const delay = tok.text === "…" || tok.text === "." || tok.text === "!" ? 220 : 38;
      typewriterTimeout = setTimeout(typeChar, delay);
    } else {
      isTyping = false;
      subtitleText.innerHTML = currentHtml;
    }
  }

  typeChar();
}

function skipTypewriter() {
  if (isTyping) {
    if (typewriterTimeout) clearTimeout(typewriterTimeout);
    isTyping = false;
    subtitleText.innerHTML = currentFullSubtitleHtml;
    return true;
  }
  return false;
}

/* ====================================================================
   6. ĐIỀU KHIỂN BIỂU CẢM & VỊ TRÍ NHÂN VẬT MẦM CÂY
   ==================================================================== */
function setCharacterExpression(expr) {
  faceNormal.classList.add("hidden");
  faceHappy.classList.add("hidden");
  faceCurious.classList.add("hidden");
  faceWink.classList.add("hidden");

  if (expr === "happy") {
    faceHappy.classList.remove("hidden");
  } else if (expr === "curious") {
    faceCurious.classList.remove("hidden");
  } else if (expr === "wink") {
    faceWink.classList.remove("hidden");
  } else {
    faceNormal.classList.remove("hidden");
  }
}

function setCharacterPosition(pos) {
  characterContainer.classList.remove("pos-center", "pos-left");
  if (pos === "left") {
    characterContainer.classList.add("pos-left");
  } else {
    characterContainer.classList.add("pos-center");
  }
}

/* ====================================================================
   7. RENDER 4 THẺ TRAITS (CẢNH 6)
   ==================================================================== */
function initTraits() {
  traitsList.innerHTML = "";
  CONFIG.traits.forEach(t => {
    const card = document.createElement("div");
    card.className = "trait-card";
    card.innerHTML = `
      <div class="trait-icon">${t.icon}</div>
      <div class="trait-text">${t.text}</div>
    `;
    traitsList.appendChild(card);
  });
}

function animateTraits() {
  const cards = document.querySelectorAll(".trait-card");
  cards.forEach((card, idx) => {
    card.classList.remove("show");
    setTimeout(() => {
      card.classList.add("show");
    }, idx * 280 + 100);
  });
}

/* ====================================================================
   8. BỘ ĐIỀU KHIỂN CHUYỂN CẢNH (SCENE CONTROLLER)
   ==================================================================== */
function updateProgressBar() {
  const total = CONFIG.scenes.length;
  const progressPercent = ((currentSceneIndex) / (total - 1)) * 100;
  progressBar.style.width = `${Math.min(100, Math.max(0, progressPercent))}%`;
}

function renderScene(index) {
  const scene = CONFIG.scenes[index];
  if (!scene) return;

  updateProgressBar();

  // 1. Quản lý hệ thống hạt đa dạng (cánh hoa, trái tim, lá) & pháo hoa
  setParticleSceneDensity(scene.id);
  isFireworksActive = !!scene.showFireworks;

  // 2. Chế độ hoàng kim (Golden mode) cho nhân vật ở màn kết
  if (scene.goldenMode) {
    characterContainer.classList.add("golden-mode");
    document.body.classList.add("in-finale");
  } else {
    characterContainer.classList.remove("golden-mode");
    document.body.classList.remove("in-finale");
  }

  // 3. Cảnh Intro (Cảnh 1)
  if (scene.type === "intro") {
    sceneIntro.classList.add("active");
    characterContainer.classList.add("hidden");
    stageContent.classList.add("hidden");
    setSubtitle("");
    return;
  } else {
    sceneIntro.classList.remove("active");
  }

  // 4. Quản lý Nhân vật mầm cây
  if (scene.showCharacter !== false) {
    characterContainer.classList.remove("hidden");
    setCharacterPosition(scene.characterPos || "center");
    setCharacterExpression(scene.expression || "normal");
  } else {
    characterContainer.classList.add("hidden");
  }

  // 5. Quản lý Nội dung sân khấu phụ (Stage content)
  if (scene.type === "stage_subview") {
    stageContent.classList.remove("hidden");
    document.querySelectorAll(".scene-subview").forEach(el => el.classList.remove("active", "hidden"));
    
    // Ẩn tất cả ngoại trừ view hiện tại
    document.querySelectorAll(".scene-subview").forEach(el => {
      if (el.id !== scene.viewId) el.classList.add("hidden");
    });

    const activeView = document.getElementById(scene.viewId);
    if (activeView) {
      activeView.classList.remove("hidden");
      setTimeout(() => activeView.classList.add("active"), 40);
    }
  } else {
    stageContent.classList.add("hidden");
  }

  // Hook đặc biệt khi vào scene
  if (typeof scene.onEnter === "function") {
    scene.onEnter();
  }

  // 6. Cập nhật phụ đề typewriter & gợi ý chạm
  const tapHint = document.querySelector(".tap-hint-indicator");
  if (scene.id === "finale") {
    // Ở màn kết: ẩn hẳn phụ đề và gợi ý chạm để thẻ hiển thị trọn vẹn, không bị đè
    setSubtitle("");
    subtitleBox.classList.add("hidden");
    if (tapHint) tapHint.classList.add("hidden");
  } else {
    if (tapHint) tapHint.classList.remove("hidden");
    setSubtitle(scene.subtitle || "");
  }
}

function nextScene() {
  if (skipTypewriter()) {
    return;
  }

  initAudio();

  if (currentSceneIndex < CONFIG.scenes.length - 1) {
    currentSceneIndex++;
    renderScene(currentSceneIndex);
  }
}

function prevScene() {
  if (currentSceneIndex > 0) {
    currentSceneIndex--;
    renderScene(currentSceneIndex);
  }
}

/* ====================================================================
   9. TƯƠNG TÁC NÚT CÂU HỎI & NÚT MÀN KẾT
   ==================================================================== */
// Khi bấm nút ở câu hỏi tương tác (rồi nè / chưa nữa)
function handleQuestionAnswer(type) {
  initAudio();
  setCharacterExpression("happy");
  if (type === "yes") {
    setSubtitle("meo biết mà! em luôn xứng đáng được yêu thương và trân trọng mỗi ngày!");
  } else {
    setSubtitle("thế thì để anh và meo khen nhé: em lúc nào cũng tuyệt vời và đáng yêu vô cùng!");
  }

  // Sau 2.2 giây chuyển tiếp sang màn kết
  setTimeout(() => {
    nextScene();
  }, 2200);
}

btnAnswerYes.addEventListener("click", (e) => {
  e.stopPropagation();
  handleQuestionAnswer("yes");
});

btnAnswerNo.addEventListener("click", (e) => {
  e.stopPropagation();
  handleQuestionAnswer("no");
});

// Nút Chép link
btnCopyLink.addEventListener("click", (e) => {
  e.stopPropagation();
  const currentUrl = window.location.href;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(currentUrl).then(showToast).catch(() => fallbackCopy(currentUrl));
  } else {
    fallbackCopy(currentUrl);
  }
});

function fallbackCopy(text) {
  const input = document.createElement("input");
  input.value = text;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);
  showToast();
}

function showToast() {
  copyToast.classList.remove("hidden");
  setTimeout(() => {
    copyToast.classList.add("hidden");
  }, 2500);
}

// Nút Xem lại từ đầu
btnReplay.addEventListener("click", (e) => {
  e.stopPropagation();
  currentSceneIndex = 0;
  renderScene(0);
});

/* ====================================================================
   10. SỰ KIỆN TƯƠNG TÁC CHUNG (TOUCH / CLICK / KEYBOARD)
   ==================================================================== */
document.addEventListener("pointerdown", (e) => {
  // Tránh bắt sự kiện khi click vào nút hoặc thiệp tương tác
  if (e.target.closest("#audio-toggle") || 
      e.target.closest(".btn-q") || 
      e.target.closest(".btn-action")) {
    return;
  }
  nextScene();
});

document.addEventListener("keydown", (e) => {
  if (e.code === "Space" || e.code === "ArrowRight" || e.code === "Enter") {
    e.preventDefault();
    nextScene();
  } else if (e.code === "ArrowLeft") {
    e.preventDefault();
    prevScene();
  }
});

// Resize
window.addEventListener("resize", () => {
  resizeStarsCanvas();
  resizeParticlesCanvas();
  resizeFireworksCanvas();
  resizeGrassCanvas();
  if (CONFIG.scenes[currentSceneIndex]) {
    setParticleSceneDensity(CONFIG.scenes[currentSceneIndex].id);
  }
});

/* ====================================================================
   KHỞI TẠO ỨNG DỤNG
   ==================================================================== */
window.addEventListener("DOMContentLoaded", () => {
  // Điền nội dung thư vào thẻ finale
  if (finaleLetterText) {
    finaleLetterText.innerHTML = CONFIG.finaleLetter;
  }

  // Khởi tạo 4 thẻ traits
  initTraits();

  // Resize và vẽ Canvas
  resizeStarsCanvas();
  resizeParticlesCanvas();
  resizeFireworksCanvas();
  resizeGrassCanvas();
  initParticlePool();

  drawStars();
  drawUnifiedParticles();
  drawGrass();
  requestAnimationFrame(drawFireworks);

  // Render cảnh đầu tiên
  renderScene(0);
});
