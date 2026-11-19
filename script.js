"use strict";

function initParticles() {
  const particlesContainer = document.getElementById('particles');
  if (!particlesContainer) return;
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    const size = Math.random() * 50 + 10;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.bottom = '-100px';
    particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
    particle.style.animationDelay = (Math.random() * 5) + 's';
    particlesContainer.appendChild(particle);
  }
}

function toggleMenu() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  if (sidebar) sidebar.classList.toggle('active');
  if (overlay) overlay.classList.toggle('active');
}

function switchTab(tabId, btnEl, fromSidebar = false) {
  document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(el => el.classList.remove('active-menu'));
  const target = document.getElementById(tabId);
  if (target) target.classList.add('active');
  document.querySelectorAll(`.nav-btn[onclick*="'${tabId}'"]`).forEach(el => el.classList.add('active-menu'));
  if (btnEl) btnEl.classList.add('active-menu');
  if (fromSidebar) toggleMenu();
  if (tabId === 'compare') renderSavedVault();
}

window.addEventListener('DOMContentLoaded', () => {
  initParticles();
  let demoCount = 2140 + Math.floor(Math.random() * 80);
  const counterEl = document.getElementById('visitorCount');
  if (counterEl) {
    counterEl.textContent = demoCount.toLocaleString();
    window.setInterval(() => {
      demoCount += Math.floor(Math.random() * 3) - 1;
      counterEl.textContent = demoCount.toLocaleString();
    }, 4000);
  }
  generateNicknames();
  renderSavedVault();
  renderModalDeviceList('');
});

const profiles = {
  zxtufan: { img:'zxtufan.jpg', badge:'LEGEND NEVER DIES (V8.0)', name:'ZX ★ TUFAN', quote:'"Main Agar Apni Jawani Ke Suna Du Kisse, Ye Jo Launde Hain, Mere Paon Dabane Lag Jaayein !!!"', stats:['🔥 BR Heroic','🛡️ UID: 2910340190','👍 6577 Likes'] },
  ritesh: { img:'ritesh.jpg', badge:'RITESH THARU PRO', name:'RITESH ⟨®⟩', quote:'"One-Tap Master & Clash Squad Rusher!"', stats:['🔥 CS Master','⚡ 99+ Headshot','👍 4890 Likes'] },
  faisal: { img:'faisal.jpg', badge:'FAISAL BOSS', name:'FAISAL', quote:'"Fearless Rusher & Tactical Survival Expert!"', stats:['⚔️ BR Grandmaster','🛡️ UID: 2458453341','👍 1718 Likes'] },
  squad: { img:'squad.jpg', badge:'ZX TUFAN SQUAD V8.0', name:'ZX TUFAN & SQUAD', quote:'"ZX TUFAN, LE ARMAN, MD TOX 10, RITESH & FAISAL - Undefeated Esports Squad!"', stats:['🛡️ Group Leader: ZX TUFAN','🔥 Elite Squad','👑 Champions'] }
};

function switchProfile(key) {
  const p = profiles[key]; if (!p) return;
  document.getElementById('userAvatar').src = p.img;
  document.getElementById('profileBadge').textContent = p.badge;
  document.getElementById('profileName').textContent = p.name + ' ✔';
  document.getElementById('profileQuote').textContent = p.quote;
  const stats = document.getElementById('profileStats'); stats.replaceChildren();
  p.stats.forEach(s => { const el = document.createElement('div'); el.className='stat-pill'; el.textContent=s; stats.appendChild(el); });
}

function handleAvatarFallback(imgEl) {
  imgEl.onerror = null;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"><rect width="300" height="300" fill="#6c5ce7"/><text x="150" y="150" text-anchor="middle" fill="#ffffff" font-family="Arial" font-size="28" font-weight="bold">ZX SQUAD V8.0</text></svg>`;
  imgEl.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

const allDevicesList = [
  {name:"Redmi Note 13 Pro+",brand:"Xiaomi",chip:"Dimensity 7200-Ultra",tier:"upper",hz:120,touchRate:240},
  {name:"Redmi Note 13 Pro",brand:"Xiaomi",chip:"Snapdragon 7s Gen 2",tier:"mid",hz:120,touchRate:240},
  {name:"Redmi Note 12",brand:"Xiaomi",chip:"Snapdragon 685",tier:"mid",hz:120,touchRate:240},
  {name:"Redmi Note 11",brand:"Xiaomi",chip:"Snapdragon 680",tier:"mid",hz:90,touchRate:180},
  {name:"Redmi Note 10 Pro",brand:"Xiaomi",chip:"Snapdragon 732G",tier:"mid",hz:120,touchRate:240},
  {name:"Redmi Note 9",brand:"Xiaomi",chip:"Helio G85",tier:"mid",hz:60,touchRate:180},
  {name:"Redmi Note 8 Pro",brand:"Xiaomi",chip:"Helio G90T",tier:"mid",hz:60,touchRate:180},
  {name:"Redmi 13C",brand:"Xiaomi",chip:"Helio G85",tier:"entry",hz:90,touchRate:180},
  {name:"Redmi 12",brand:"Xiaomi",chip:"Helio G88",tier:"entry",hz:90,touchRate:180},
  {name:"Redmi 9A / 9C",brand:"Xiaomi",chip:"Helio G25/G35",tier:"entry",hz:60,touchRate:120},
  {name:"POCO X6 Pro",brand:"POCO",chip:"Dimensity 8300-Ultra",tier:"flagship",hz:120,touchRate:480},
  {name:"POCO F6",brand:"POCO",chip:"Snapdragon 8s Gen 3",tier:"flagship",hz:120,touchRate:480},
  {name:"POCO X3 Pro",brand:"POCO",chip:"Snapdragon 860",tier:"upper",hz:120,touchRate:240},
  {name:"POCO M6 Pro",brand:"POCO",chip:"Snapdragon 4 Gen 2",tier:"mid",hz:90,touchRate:180},
  {name:"iPhone 16 Pro Max",brand:"Apple",chip:"A18 Pro",tier:"flagship",hz:120,touchRate:240},
  {name:"iPhone 15 Pro",brand:"Apple",chip:"A17 Pro",tier:"flagship",hz:120,touchRate:240},
  {name:"iPhone 14",brand:"Apple",chip:"A15 Bionic",tier:"upper",hz:60,touchRate:120},
  {name:"iPhone 13",brand:"Apple",chip:"A15 Bionic",tier:"upper",hz:60,touchRate:120},
  {name:"iPhone 12",brand:"Apple",chip:"A14 Bionic",tier:"upper",hz:60,touchRate:120},
  {name:"iPhone 11",brand:"Apple",chip:"A13 Bionic",tier:"upper",hz:60,touchRate:120},
  {name:"iPhone SE (2022)",brand:"Apple",chip:"A15 Bionic",tier:"upper",hz:60,touchRate:120},
  {name:"Galaxy S24 Ultra",brand:"Samsung",chip:"Snapdragon 8 Gen 3",tier:"flagship",hz:120,touchRate:240},
  {name:"Galaxy S23 FE",brand:"Samsung",chip:"Exynos 2200",tier:"upper",hz:120,touchRate:240},
  {name:"Galaxy A55",brand:"Samsung",chip:"Exynos 1480",tier:"upper",hz:120,touchRate:240},
  {name:"Galaxy A35",brand:"Samsung",chip:"Exynos 1380",tier:"mid",hz:120,touchRate:240},
  {name:"Galaxy A15",brand:"Samsung",chip:"Helio G99",tier:"mid",hz:90,touchRate:180},
  {name:"Galaxy M14",brand:"Samsung",chip:"Exynos 1330",tier:"entry",hz:90,touchRate:180},
  {name:"Galaxy M35",brand:"Samsung",chip:"Exynos 1380",tier:"mid",hz:120,touchRate:240},
  {name:"iQOO Neo 9 Pro",brand:"iQOO",chip:"Snapdragon 8 Gen 2",tier:"flagship",hz:144,touchRate:360},
  {name:"iQOO Z9",brand:"iQOO",chip:"Dimensity 7200",tier:"upper",hz:120,touchRate:300},
  {name:"iQOO Z7 Pro",brand:"iQOO",chip:"Dimensity 7200",tier:"upper",hz:120,touchRate:300},
  {name:"Vivo T3 5G",brand:"Vivo",chip:"Dimensity 7200",tier:"upper",hz:120,touchRate:240},
  {name:"Vivo Y20",brand:"Vivo",chip:"Snapdragon 460",tier:"entry",hz:60,touchRate:120},
  {name:"Vivo V30 Pro",brand:"Vivo",chip:"Dimensity 8200",tier:"upper",hz:120,touchRate:240},
  {name:"OnePlus 12R",brand:"OnePlus",chip:"Snapdragon 8 Gen 2",tier:"flagship",hz:120,touchRate:360},
  {name:"OnePlus Nord CE 4",brand:"OnePlus",chip:"Snapdragon 7 Gen 3",tier:"upper",hz:120,touchRate:240},
  {name:"OnePlus Nord 3",brand:"OnePlus",chip:"Dimensity 9000",tier:"flagship",hz:120,touchRate:360},
  {name:"OnePlus 11",brand:"OnePlus",chip:"Snapdragon 8 Gen 2",tier:"flagship",hz:120,touchRate:360},
  {name:"Realme Narzo 70 Pro",brand:"Realme",chip:"Dimensity 7050",tier:"mid",hz:120,touchRate:240},
  {name:"Realme C55",brand:"Realme",chip:"Helio G88",tier:"entry",hz:90,touchRate:180},
  {name:"Realme 12 Pro+",brand:"Realme",chip:"Snapdragon 7s Gen 2",tier:"mid",hz:120,touchRate:240},
  {name:"Realme GT 6T",brand:"Realme",chip:"Snapdragon 7+ Gen 3",tier:"upper",hz:120,touchRate:360},
  {name:"Realme 11 Pro",brand:"Realme",chip:"Dimensity 7050",tier:"mid",hz:120,touchRate:240},
  {name:"Realme Narzo 60",brand:"Realme",chip:"Dimensity 6020",tier:"entry",hz:90,touchRate:180},
  {name:"Infinix GT 20 Pro",brand:"Infinix",chip:"Dimensity 8200 Ultimate",tier:"upper",hz:144,touchRate:360},
  {name:"Infinix Note 40",brand:"Infinix",chip:"Helio G99 Ultimate",tier:"mid",hz:120,touchRate:240},
  {name:"Infinix Hot 40",brand:"Infinix",chip:"Helio G88",tier:"entry",hz:90,touchRate:180},
  {name:"Tecno Pova 6 Pro",brand:"Tecno",chip:"Dimensity 6080",tier:"mid",hz:120,touchRate:240},
  {name:"Tecno Camon 20",brand:"Tecno",chip:"Helio G85",tier:"entry",hz:60,touchRate:120},
  {name:"Tecno Spark 20 Pro",brand:"Tecno",chip:"Helio G99",tier:"entry",hz:120,touchRate:180},
  {name:"Nothing Phone (2a)",brand:"Nothing",chip:"Dimensity 7200 Pro",tier:"upper",hz:120,touchRate:240},
  {name:"Lava Agni 3",brand:"Lava",chip:"Dimensity 7300X",tier:"upper",hz:120,touchRate:240},
  {name:"Motorola Edge 50 Pro",brand:"Motorola",chip:"Snapdragon 7 Gen 3",tier:"upper",hz:144,touchRate:360},
  {name:"Google Pixel 8a",brand:"Google",chip:"Tensor G3",tier:"flagship",hz:120,touchRate:240},
  {name:"Google Pixel 7a",brand:"Google",chip:"Tensor G2",tier:"upper",hz:90,touchRate:180},
  {name:"Oppo Reno 11 5G",brand:"Oppo",chip:"Dimensity 7050",tier:"mid",hz:120,touchRate:240},
  {name:"Oppo F25 Pro",brand:"Oppo",chip:"Dimensity 7050",tier:"mid",hz:120,touchRate:240},
  {name:"Oppo A78",brand:"Oppo",chip:"Dimensity 700",tier:"entry",hz:90,touchRate:180},
  {name:"Asus ROG Phone 8",brand:"Asus",chip:"Snapdragon 8 Gen 3",tier:"flagship",hz:165,touchRate:720}
];

let selectedDeviceObj = null;
let lastGeneratedConfig = null;

function hashSeed(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h >>> 0) / 4294967295;
}

function clamp(n, min, max) { return Math.max(min, Math.min(max, Math.round(n))); }

function openDeviceModal() {
  document.getElementById('deviceModal').classList.remove('hidden');
  document.getElementById('modalDeviceSearch').value = '';
  document.getElementById('modalRamSelect').value = '4';
  document.getElementById('modalDpiInput').value = '';
  renderModalDeviceList('');
}

function closeDeviceModal() {
  document.getElementById('deviceModal').classList.add('hidden');
}

function renderModalDeviceList(query = "") {
  const list = document.getElementById('modalDeviceList');
  list.replaceChildren();
  const matches = allDevicesList.filter(d => 
    d.name.toLowerCase().includes(query.toLowerCase()) || 
    d.brand.toLowerCase().includes(query.toLowerCase()) ||
    d.chip.toLowerCase().includes(query.toLowerCase())
  );

  if (!matches.length) {
    const empty = document.createElement('div');
    empty.className = 'suggestion-item';
    empty.textContent = `Use custom device: "${query}"`;
    empty.addEventListener('click', () => {
      selectedDeviceObj = {name: query || 'Custom Phone', brand: "Custom", chip: "Adaptive SoC", tier: "mid", hz: 90, touchRate: 180};
      document.getElementById('selectedDeviceText').textContent = `${selectedDeviceObj.name} (Custom | 90Hz)`;
      document.getElementById('deviceBanner').style.display = 'flex';
      closeDeviceModal();
    });
    list.appendChild(empty);
    return;
  }

  matches.forEach(d => {
    const item = document.createElement('div'); 
    item.className = 'suggestion-item';
    const label = document.createElement('span'); label.textContent = `${d.name} (${d.chip} • ${d.hz}Hz)`;
    const tier = document.createElement('span'); tier.className = `tier-tag ${d.tier}`; tier.textContent = d.tier;
    item.append(label, tier);
    item.addEventListener('click', () => {
      selectedDeviceObj = d;
      document.getElementById('selectedDeviceText').textContent = `${d.name} (${d.chip} | ${d.hz}Hz)`;
      document.getElementById('deviceBanner').style.display = 'flex';
      document.querySelectorAll('#modalDeviceList .suggestion-item').forEach(el => el.style.background = 'transparent');
      item.style.background = 'rgba(108, 92, 231, 0.14)';
    });
    list.appendChild(item);
  });
}

function filterModalDevices() {
  renderModalDeviceList(document.getElementById('modalDeviceSearch').value);
}

function applyModalSelection() {
  if (!selectedDeviceObj) {
    alert("Pehle koi phone select karein!");
    return;
  }
  const dpi = document.getElementById('modalDpiInput').value;
  document.getElementById('deviceBanner').style.display = 'flex';
  let bannerText = `${selectedDeviceObj.name} (${selectedDeviceObj.chip} | ${selectedDeviceObj.hz}Hz)`;
  if (dpi) bannerText += ` | Custom DPI: ${dpi}`;
  document.getElementById('selectedDeviceText').textContent = bannerText;
  closeDeviceModal();
  generateCustomSensi();
}

function generateCustomSensi() {
  if (!selectedDeviceObj) {
    alert("Pehle 'Select Phone Model & Settings' par tap karke phone select karein!");
    return;
  }
  
  const ram = Number(document.getElementById('modalRamSelect').value) || 4;
  const customDpi = document.getElementById('modalDpiInput').value ? Number(document.getElementById('modalDpiInput').value) : null;
  const dev = selectedDeviceObj;
  const hz = dev.hz || 60;

  const deviceSeed = hashSeed(`${dev.name}|${dev.chip}|${hz}|${ram}`);
  
  let baseSensi = 0;
  if (dev.tier === 'entry') baseSensi = 112; 
  else if (dev.tier === 'mid') baseSensi = 102; 
  else if (dev.tier === 'upper') baseSensi = 94; 
  else if (dev.tier === 'flagship') baseSensi = 85; 

  const ramAdj = ram <= 3 ? 5 : ram === 4 ? 2 : ram === 6 ? 0 : -2;
  const hzAdj = hz <= 60 ? 4 : hz === 90 ? 1 : hz === 120 ? -2 : -4;
  const uniqueJitter = (deviceSeed - 0.5) * 4;

  // Max cap set to 200 for device-model General sensitivity
  let gen = clamp(baseSensi + ramAdj + hzAdj + uniqueJitter, 75, 200);
  const red = clamp(gen - 2, 70, 200);
  const s2x = clamp(red - 5, 65, 200);
  const s4x = clamp(s2x - 5, 60, 200);
  const awm = clamp(50 + (hz >= 120 ? 10 : 5) + Math.round(deviceSeed * 10), 45, 200);
  const free = clamp(gen - 5, 60, 200);

  let dpi;
  if (customDpi) {
    dpi = customDpi;
  } else {
    let rawDpi = 400 + (ram * 10) + (hz >= 120 ? 20 : 0);
    if (ram <= 4 || dev.tier === 'entry') rawDpi = Math.min(440, rawDpi);
    dpi = clamp(rawDpi, 380, 580);
  }

  const fireBase = dev.tier === 'entry' ? 52 : dev.tier === 'mid' ? 48 : 44;
  const fireBtn = clamp(fireBase + Math.round((deviceSeed - 0.5) * 4), 40, 56);

  lastGeneratedConfig = {
    device: `${dev.name} (${ram}GB | ${hz}Hz${customDpi ? ` | DPI:${customDpi}` : ''})`,
    style: 'No Recoil + Headshot',
    gen, red, s2x, s4x, awm, free, dpi, fireBtn,
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  };

  document.getElementById('mGen').textContent = gen;
  document.getElementById('mRed').textContent = red;
  document.getElementById('m2x').textContent = s2x;
  document.getElementById('m4x').textContent = s4x;
  document.getElementById('mAwm').textContent = awm;
  document.getElementById('mFreeLook').textContent = free;
  document.getElementById('mDpi').textContent = dev.brand === 'Apple' ? `Gliding ${clamp(90 + deviceSeed * 30, 85, 125)}` : dpi;
  document.getElementById('mFireBtn').textContent = fireBtn + '%';

  document.getElementById('makerDeviceTitle').textContent = `🎯 Best Config for ${dev.name} (No Recoil + Headshot)`;
  document.getElementById('makerNote').textContent = `Yeh sensitivity ${dev.name} ke ${hz}Hz display aur ${ram}GB RAM ke hisaab se tune ki gayi hai. Recoil control aur headshot accuracy ke liye best hai.`;
  document.getElementById('makerResult').classList.remove('hidden');
}

function saveCurrentSensiToVault() {
  if (!lastGeneratedConfig) return;
  const vault = JSON.parse(localStorage.getItem('zxtufan_vault_v8') || '[]');
  vault.unshift(lastGeneratedConfig);
  localStorage.setItem('zxtufan_vault_v8', JSON.stringify(vault.slice(0, 15)));
  alert(`Saved ${lastGeneratedConfig.device} to your Vault!`);
  renderSavedVault();
}

function renderSavedVault() {
  const container = document.getElementById('savedVaultList');
  if (!container) return;
  const vault = JSON.parse(localStorage.getItem('zxtufan_vault_v8') || '[]');
  container.replaceChildren();
  if (!vault.length) {
    const p = document.createElement('p');
    p.className = 'note';
    p.textContent = 'Abhi tak koi profile save nahi ki gayi hai. Generate Sensitivity tab se profile generate karke save karein!';
    container.appendChild(p);
    return;
  }
  vault.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'nick-item';
    card.style.flexDirection = 'column';
    card.style.alignItems = 'flex-start';
    card.innerHTML = `<div style="display:flex;justify-content:space-between;width:100%;"><strong>${item.device}</strong><span class="copy-tag">${item.time}</span></div>
      <small style="color:var(--primary);margin-top:4px;">Gen: ${item.gen} | Red: ${item.red} | 2x: ${item.s2x} | 4x: ${item.s4x} | AWM: ${item.awm} | Fire: ${item.fireBtn}% | DPI: ${item.dpi}</small>`;
    container.appendChild(card);
  });
}

function clearSavedVault() {
  localStorage.removeItem('zxtufan_vault_v8');
  renderSavedVault();
}

function copyGeneratedSensi() {
  if (!lastGeneratedConfig) return;
  const c = lastGeneratedConfig;
  const text = `🔥 ZX TUFAN BEST SENSI (${c.device}) 🔥
🎯 Style: No Recoil + Headshot

General: ${c.gen}
Red Dot: ${c.red}
2x Scope: ${c.s2x}
4x Scope: ${c.s4x}
AWM: ${c.awm}
Free Look: ${c.free}
Fire Button: ${c.fireBtn}% | DPI: ${c.dpi}`;
  copyText(text);
}

const leftDecors = ['꧁༺','⚡','王','🔥','💎','『⚡』','×͜×','༒︎','★','么','〆','亗','ツ','々'];
const rightDecors = ['༻꧂','⚡','王','🔥','💎','『⚡』','×͜×','༒︎','★','么','〆','亗','ツ','々'];
const badges = ['',' • 𝐓𝐔𝐅𝐀𝐍',' 𝖃',' 𝟗𝟗+',' ✓',' ᶠᶠ',' ᴾᴿᴼ',' ᴮᴼˢˢ',' ᴳᴼᴰ',' ⁷⁷⁷'];
const fontMap = {a:'𝐚',b:'𝐛',c:'𝐜',d:'𝐝',e:'𝐞',f:'𝐟',g:'𝐠',h:'𝐡',i:'𝐢',j:'𝐣',k:'𝐤',l:'𝐥',m:'𝐦',n:'𝐧',o:'𝐨',p:'𝐩',q:'𝐪',r:'𝐫',s:'𝐬',t:'𝐭',u:'𝐮',v:'𝐯',w:'𝐰',x:'𝐱',y:'𝐲',z:'𝐳',A:'𝐀',B:'𝐁',C:'𝐂',D:'𝐃',E:'𝐄',F:'𝐅',G:'𝐆',H:'𝐇',I:'𝐈',J:'𝐉',K:'𝐊',L:'𝐋',M:'𝐌',N:'𝐍',O:'𝐎',P:'𝐏',Q:'𝐐',R:'𝐑',S:'𝐒',T:'𝐓',U:'𝐔',V:'𝐕',W:'𝐖',X:'𝐗',Y:'𝐘',Z:'𝐙'};
function stylizeText(s) { return Array.from(s).map(c => fontMap[c] || c).join(''); }
let totalGeneratedNicks = 0;

function buildNickBatch(count) {
  const base = (document.getElementById('baseNameInput').value.trim() || 'TUFAN').slice(0, 24), box = document.getElementById('nickResults');
  for (let i = 0; i < count; i++) {
    const index = totalGeneratedNicks++;
    const nick = `${leftDecors[index % leftDecors.length]} ${stylizeText(base)}${badges[index % badges.length]} ${rightDecors[(index * 3) % rightDecors.length]}`;
    const item = document.createElement('div'); item.className = 'nick-item';
    const label = document.createElement('span'); label.className = 'nick-text'; label.textContent = nick;
    const copy = document.createElement('span'); copy.className = 'copy-tag'; copy.textContent = 'COPY';
    item.append(label, copy); item.addEventListener('click', () => copyText(nick)); box.appendChild(item);
  }
  const counter = document.getElementById('nickCounterText');
  if (counter) counter.textContent = `Showing ${totalGeneratedNicks} combinations`;
}
function generateNicknames() { totalGeneratedNicks = 0; document.getElementById('nickResults').replaceChildren(); buildNickBatch(30); }
function loadMoreNicknames() { buildNickBatch(50); }

async function copyText(value) {
  try {
    if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(value);
    else {
      const t = document.createElement('textarea'); t.value = value; t.style.position = 'fixed'; t.style.opacity = '0';
      document.body.appendChild(t); t.select(); document.execCommand('copy'); t.remove();
    }
    showStatus('Copied to clipboard!');
  } catch (e) { window.prompt('Copy this:', value); }
}
function showStatus(message) { const el = document.getElementById('termuxScanStatus'); if (el) el.textContent = message; else alert(message); }

let hudObjectUrl = null;
let hudImgDimensions = { width: 1920, height: 1080, aspect: 1.77 };

function previewHudImage(event) {
  const file = event.target.files && event.target.files[0]; if (!file) return;
  if (!file.type.startsWith('image/')) { alert('Please choose an image file.'); return; }
  if (file.size > 10 * 1024 * 1024) { alert('Image is too large. Please choose an image under 10 MB.'); event.target.value = ''; return; }
  if (hudObjectUrl) URL.revokeObjectURL(hudObjectUrl);
  hudObjectUrl = URL.createObjectURL(file);
  const img = document.getElementById('hudPreviewImg');
  img.onload = () => {
    hudImgDimensions = {
      width: img.naturalWidth || 1920,
      height: img.naturalHeight || 1080,
      aspect: (img.naturalWidth || 1920) / (img.naturalHeight || 1080)
    };
    document.getElementById('hudImgMeta').textContent = `${file.name} • ${hudImgDimensions.width}x${hudImgDimensions.height}px (Ratio ${hudImgDimensions.aspect.toFixed(2)}:1)`;
  };
  img.src = hudObjectUrl;
  document.getElementById('hudPreviewContainer').classList.remove('hidden');
}

function analyzeHudScreenshot() {
  const grip = document.getElementById('hudGripSelect').value;
  const aspect = hudImgDimensions.aspect;
  const wideBonus = aspect >= 2.1 ? 3 : aspect >= 1.9 ? 2 : 0;
  const gripMod = { '2finger': -2, '3finger': 2, '4finger': 1 }[grip] || 0;

  const gen = clamp(94 + wideBonus + gripMod, 86, 102);
  const red = clamp(gen - 3, 82, 99);
  const s2x = clamp(red - 4, 78, 95);
  const s4x = clamp(s2x - 4, 74, 92);
  const fire = clamp((grip === '2finger' ? 49 : grip === '3finger' ? 45 : 43) - (aspect >= 2.1 ? 1 : 0), 40, 52) + '%';
  const zone = aspect >= 2.05 ? 'Extended Right-Arc' : (grip === '2finger' ? 'Lower-Right Thumb' : 'Upper-Right Claw');

  [['hGen', gen], ['hRed', red], ['h2x', s2x], ['h4x', s4x], ['hFireBtn', fire], ['hDragZone', zone]].forEach(([id, val]) => {
    document.getElementById(id).textContent = val;
  });
  document.getElementById('hudTipBanner').textContent = `🎯 CALIBRATED FOR ${hudImgDimensions.width}x${hudImgDimensions.height} (${grip.toUpperCase()})`;
  document.getElementById('hudResultBox').classList.remove('hidden');
  document.getElementById('hudLaser').classList.remove('hidden');
  window.setTimeout(() => document.getElementById('hudLaser').classList.add('hidden'), 2000);
}

const termuxPython = String.raw`import json
import os
import platform
import re
import subprocess

def prop(name):
    try:
        return subprocess.check_output(["getprop", name], text=True, stderr=subprocess.DEVNULL).strip()
    except Exception:
        return ""

def read_meminfo():
    try:
        with open("/proc/meminfo", "r", encoding="utf-8") as f:
            for line in f:
                if line.startswith("MemTotal:"):
                    return round(int(line.split()[1]) / 1024)
    except Exception:
        pass
    return None

def get_refresh_rate():
    try:
        disp = subprocess.check_output(["dumpsys", "display"], text=True, stderr=subprocess.DEVNULL)
        rates = [float(x) for x in re.findall(r"refreshRate[=: ]+(\d+(?:\.\d+)?)", disp)]
        if rates:
            return round(max(rates))
    except Exception:
        pass
    return None

report = {
    "brand": prop("ro.product.brand") or platform.machine(),
    "model": prop("ro.product.model") or platform.node() or "Unknown",
    "android_version": prop("ro.build.version.release") or "Unknown",
    "resolution": "Not available",
    "refresh_rate_hz": get_refresh_rate(),
    "ram_total_mb": read_meminfo(),
    "scanner_version": "8.0",
    "note": "Basic device properties only; no personal files or account data accessed."
}
try:
    wm = subprocess.check_output(["wm", "size"], text=True, stderr=subprocess.DEVNULL)
    report["resolution"] = wm.strip().splitlines()[-1].replace("Physical size: ", "").replace("Override size: ", "")
except Exception:
    pass

with open("device_report.json", "w", encoding="utf-8") as f:
    json.dump(report, f, indent=2)
print("Saved device_report.json in the current folder.")
`;

function downloadTermuxScanner() {
  const blob = new Blob([termuxPython], { type: 'text/x-python;charset=utf-8' }), url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href = url; a.download = 'main.py'; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
}
async function copyTermuxCommands() {
  const text = document.getElementById('termuxCommands').textContent;
  try { await navigator.clipboard.writeText(text); showStatus('Termux commands copied.'); }
  catch (e) { window.prompt('Copy these commands:', text); }
}
function safeText(id, value) { document.getElementById(id).textContent = (value === null || value === undefined || value === '') ? '—' : String(value); }

function recommendFromReport(report) {
  const ramGb = Number(report.ram_total_mb || 0) / 1024;
  const refresh = Number(report.refresh_rate_hz || 60);
  const seed = hashSeed(`${report.brand}|${report.model}|${ramGb.toFixed(1)}|${refresh}`);
  const ramAdj = ramGb > 0 ? (ramGb <= 3.8 ? 3.5 : ramGb <= 5.8 ? 1.5 : -0.5) : 1.0;
  const hzAdj = refresh >= 120 ? -1.0 : refresh >= 90 ? 0.5 : 2.0;
  const gen = clamp(94 + ramAdj + hzAdj + (seed - 0.5) * 3, 86, 104);
  const red = clamp(gen - 3, 82, 100);
  const s2x = clamp(red - 4, 76, 97);
  const s4x = clamp(s2x - 4, 72, 94);
  const sniper = clamp(66 + (refresh >= 90 ? 6 : 2) + Math.round(seed * 6), 55, 86);
  const free = clamp(gen - 9, 70, 95);
  return { gen, red, s2x, s4x, sniper, free };
}

async function analyseTermuxReport() {
  const input = document.getElementById('deviceReportInput'), file = input.files && input.files[0];
  if (!file) { showStatus('Please select device_report.json first.'); return; }
  if (file.size > 100 * 1024) { showStatus('Report file is unexpectedly large.'); return; }
  try {
    const report = JSON.parse(await file.text());
    if (!report || typeof report !== 'object' || Array.isArray(report)) throw new Error('JSON must contain an object.');
    safeText('scanBrand', report.brand);
    safeText('scanModel', report.model);
    safeText('scanAndroid', report.android_version);
    safeText('scanResolution', report.resolution);
    safeText('scanRefresh', report.refresh_rate_hz ? `${report.refresh_rate_hz} Hz` : '60 Hz (Default)');
    safeText('scanRam', report.ram_total_mb ? `${(Number(report.ram_total_mb) / 1024).toFixed(2)} GB (${report.ram_total_mb} MB)` : 'Not reported');
    const s = recommendFromReport(report);
    safeText('scanGen', s.gen); safeText('scanRed', s.red); safeText('scan2x', s.s2x); safeText('scan4x', s.s4x); safeText('scanSniper', s.sniper); safeText('scanFree', s.free);
    document.getElementById('termuxDeviceTitle').textContent = `Detected: ${report.brand || 'Android'} ${report.model || ''}`;
    safeText('scanDisclaimer', `Dynamically calculated from ${report.ram_total_mb || 'reported'} MB RAM & ${report.refresh_rate_hz || 60}Hz display profile.`);
    document.getElementById('termuxDeviceResult').classList.remove('hidden');
    showStatus('Hardware report analysed & sensitivity generated.');
  } catch (err) { showStatus(`Could not read report: ${err.message}`); }
}
