// ===== PHONE DATABASE =====
const phoneDatabase = {
    "Redmi Note 9": { general: 160, redDot: 152, scope2x: 136, scope4x: 122, sniper: 107, freeCam: 85 },
    "Redmi Note 10": { general: 158, redDot: 150, scope2x: 134, scope4x: 120, sniper: 105, freeCam: 85 },
    "Redmi Note 11": { general: 156, redDot: 148, scope2x: 132, scope4x: 118, sniper: 103, freeCam: 84 },
    "Redmi Note 12": { general: 155, redDot: 147, scope2x: 131, scope4x: 117, sniper: 102, freeCam: 84 },
    "Redmi Note 13": { general: 154, redDot: 146, scope2x: 130, scope4x: 116, sniper: 101, freeCam: 83 },
    "Redmi 9": { general: 162, redDot: 154, scope2x: 138, scope4x: 124, sniper: 109, freeCam: 86 },
    "Redmi 10": { general: 160, redDot: 152, scope2x: 136, scope4x: 122, sniper: 107, freeCam: 85 },
    "Redmi 12C": { general: 165, redDot: 157, scope2x: 140, scope4x: 126, sniper: 110, freeCam: 87 },
    "Redmi 13C": { general: 163, redDot: 155, scope2x: 139, scope4x: 125, sniper: 108, freeCam: 86 },
    "POCO X3": { general: 157, redDot: 149, scope2x: 133, scope4x: 119, sniper: 104, freeCam: 84 },
    "POCO X5": { general: 155, redDot: 147, scope2x: 131, scope4x: 117, sniper: 102, freeCam: 83 },
    "POCO M5": { general: 161, redDot: 153, scope2x: 137, scope4x: 123, sniper: 108, freeCam: 86 },
    "Samsung Galaxy A15": { general: 162, redDot: 154, scope2x: 138, scope4x: 124, sniper: 109, freeCam: 86 },
    "Samsung Galaxy A25": { general: 158, redDot: 150, scope2x: 134, scope4x: 120, sniper: 105, freeCam: 85 },
    "Samsung Galaxy A35": { general: 156, redDot: 148, scope2x: 132, scope4x: 118, sniper: 103, freeCam: 84 },
    "Samsung Galaxy M14": { general: 161, redDot: 153, scope2x: 137, scope4x: 123, sniper: 108, freeCam: 86 },
    "Samsung Galaxy S23": { general: 152, redDot: 144, scope2x: 128, scope4x: 114, sniper: 99, freeCam: 82 },
    "Samsung Galaxy S24": { general: 150, redDot: 142, scope2x: 126, scope4x: 112, sniper: 97, freeCam: 81 },
    "Realme 9 5G": { general: 159, redDot: 151, scope2x: 135, scope4x: 121, sniper: 106, freeCam: 85 },
    "Realme 11 Pro": { general: 156, redDot: 148, scope2x: 132, scope4x: 118, sniper: 103, freeCam: 84 },
    "Realme Narzo 60": { general: 160, redDot: 152, scope2x: 136, scope4x: 122, sniper: 107, freeCam: 85 },
    "Realme C55": { general: 163, redDot: 155, scope2x: 139, scope4x: 125, sniper: 108, freeCam: 86 },
    "Oppo A78": { general: 159, redDot: 151, scope2x: 135, scope4x: 121, sniper: 106, freeCam: 85 },
    "Oppo A58": { general: 162, redDot: 154, scope2x: 138, scope4x: 124, sniper: 109, freeCam: 86 },
    "Vivo Y36": { general: 160, redDot: 152, scope2x: 136, scope4x: 122, sniper: 107, freeCam: 85 },
    "Vivo T2x": { general: 158, redDot: 150, scope2x: 134, scope4x: 120, sniper: 105, freeCam: 85 },
    "Vivo T4x": { general: 156, redDot: 148, scope2x: 132, scope4x: 118, sniper: 103, freeCam: 84 },
    "Vivo Y04": { general: 98, redDot: 88, scope2x: 83, scope4x: 78, sniper: 55, freeCam: 65 },
    "Infinix Note 30": { general: 159, redDot: 151, scope2x: 135, scope4x: 121, sniper: 106, freeCam: 85 },
    "Infinix Hot 40": { general: 161, redDot: 153, scope2x: 137, scope4x: 123, sniper: 108, freeCam: 86 },
    "Tecno Camon 20": { general: 160, redDot: 152, scope2x: 136, scope4x: 122, sniper: 107, freeCam: 85 },
    "iPhone 11": { general: 157, redDot: 149, scope2x: 133, scope4x: 119, sniper: 104, freeCam: 84 },
    "iPhone 12": { general: 155, redDot: 147, scope2x: 131, scope4x: 117, sniper: 102, freeCam: 83 },
    "iPhone 13": { general: 153, redDot: 145, scope2x: 129, scope4x: 115, sniper: 100, freeCam: 82 },
    "iPhone 14": { general: 151, redDot: 143, scope2x: 127, scope4x: 113, sniper: 98, freeCam: 81 },
    "iPhone 15": { general: 149, redDot: 141, scope2x: 125, scope4x: 111, sniper: 96, freeCam: 80 },
    "Motorola G54": { general: 159, redDot: 151, scope2x: 135, scope4x: 121, sniper: 106, freeCam: 85 },
    "Motorola G84": { general: 157, redDot: 149, scope2x: 133, scope4x: 119, sniper: 104, freeCam: 84 }
};

const clamp = (v) => Math.min(200, Math.max(0, Math.round(v)));

// ===== TOAST HELPER =====
let toastTimer;
function showToast(msg) {
    const toast = document.getElementById('toastMsg');
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}

// ===== 3D DASHBOARD MENU TABS =====
document.querySelectorAll('.menu-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.menu-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const target = btn.dataset.target;
        document.querySelectorAll('.dash-section').forEach(sec => {
            sec.style.display = (target === 'all' || sec.dataset.section === target) ? 'block' : 'none';
        });
    });
});

// ===== SQUAD PROFILE SWITCHER =====
document.querySelectorAll('.squad-pill').forEach(pill => {
    pill.addEventListener('click', () => {
        document.querySelectorAll('.squad-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');

        document.getElementById('profName').textContent = pill.dataset.name;
        document.getElementById('profRank').textContent = pill.dataset.rank;
        document.getElementById('profQuote').textContent = pill.dataset.quote;

        const stats = [
            ['Gen', pill.dataset.gen],
            ['Rd', pill.dataset.rd],
            ['2x', pill.dataset.s2],
            ['4x', pill.dataset.s4],
            ['Snp', pill.dataset.snp],
            ['Cam', pill.dataset.cam]
        ];
        stats.forEach(([key, val]) => {
            const num = Number(val);
            document.getElementById('val' + key).textContent = num;
            document.getElementById('bar' + key).style.width = `${Math.min(100, (num / 200) * 100)}%`;
        });
        showToast('Switched to ' + pill.dataset.name);
    });
});

// ===== DYNAMIC SENSI ENGINE =====
function computeDynamicSensi(baseModel, ram, fps) {
    let base = phoneDatabase[baseModel] || { general: 160, redDot: 152, scope2x: 136, scope4x: 122, sniper: 107, freeCam: 85 };

    let general = base.general;
    let redDot = base.redDot;
    let scope2x = base.scope2x;
    let scope4x = base.scope4x;
    let sniper = base.sniper;
    let freeCam = base.freeCam;

    if (ram <= 3) { general += 6; redDot += 6; scope2x += 4; }
    else if (ram >= 8) { general -= 4; redDot -= 4; scope2x -= 3; }

    if (fps >= 90) { general -= 3; redDot -= 3; scope2x -= 2; }
    else if (fps <= 30) { general += 4; redDot += 4; scope2x += 3; }

    return {
        general: clamp(general),
        redDot: clamp(redDot),
        scope2x: clamp(scope2x),
        scope4x: clamp(scope4x),
        sniper: clamp(sniper),
        freeCam: clamp(freeCam)
    };
}

function renderSensiMarkup(res) {
    return `
        <strong>General:</strong> ${clamp(res.general)}<br>
        <strong>Red Dot:</strong> ${clamp(res.redDot)}<br>
        <strong>2x Scope:</strong> ${clamp(res.scope2x)}<br>
        <strong>4x Scope:</strong> ${clamp(res.scope4x)}<br>
        <strong>Sniper Scope:</strong> ${clamp(res.sniper)}<br>
        <strong>Free Camera:</strong> ${clamp(res.freeCam)}
    `;
}

// ===== SAVE & RENDER VAULT =====
function saveProfile(model, result) {
    const vault = JSON.parse(localStorage.getItem('sensiVault') || '[]');
    vault.unshift({ model, ...result, date: new Date().toLocaleString() });
    localStorage.setItem('sensiVault', JSON.stringify(vault.slice(0, 25)));
    renderVault();
}

function renderVault() {
    const vault = JSON.parse(localStorage.getItem('sensiVault') || '[]');
    const el = document.getElementById('vaultContent');
    if (!el) return;

    if (vault.length === 0) {
        el.innerHTML = '<div class="vault-empty">Abhi tak koi profile save nahi ki gayi hai. Dynamic Sensi tab se profile generate karke save karein!</div>';
        return;
    }

    el.innerHTML = vault.map(v => `
        <div class="info-box" style="margin-bottom:8px;">
            <div style="margin-bottom:4px;"><strong>${v.model}</strong> <span style="color:#64748b;font-size:11px;">${v.date}</span></div>
            <div style="font-size:12px;">Gen: ${v.general} | RD: ${v.redDot} | 2x: ${v.scope2x} | 4x: ${v.scope4x} | Sniper: ${v.sniper}</div>
        </div>
    `).join('');
}

const clearVaultBtn = document.getElementById('clearVaultBtn');
if (clearVaultBtn) {
    clearVaultBtn.addEventListener('click', () => {
        localStorage.removeItem('sensiVault');
        renderVault();
        showToast('Sensi Vault cleared');
    });
}

// ===== HUD SCREENSHOT GEOMETRY CALCULATOR =====
const hudUpload = document.getElementById('hudUpload');
if (hudUpload) {
    hudUpload.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        document.getElementById('hudFileName').textContent = file.name;
        const img = new Image();
        img.onload = () => {
            const ratio = Math.max(img.width, img.height) / Math.min(img.width, img.height);
            const fireSize = Math.round(Math.min(58, Math.max(38, 42 + (ratio - 1.77) * 10)));
            const dragMult = (1.05 + (ratio - 1.77) * 0.18).toFixed(2);
            document.getElementById('hudStatus').textContent = `${img.width}×${img.height} (${ratio.toFixed(2)}:1) ✅`;
            document.getElementById('hudFireSize').textContent = `${fireSize}%`;
            document.getElementById('hudDragMult').textContent = `${dragMult}x`;
            showToast('HUD Geometry Calculated!');
        };
        img.src = URL.createObjectURL(file);
    });
}

// ===== TERMUX JSON SCANNER =====
const termuxUpload = document.getElementById('termuxUpload');
if (termuxUpload) {
    termuxUpload.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        document.getElementById('termuxFileName').textContent = file.name;
        const reader = new FileReader();
        reader.onload = (ev) => {
            try {
                const data = JSON.parse(ev.target.result);
                const ram = parseInt(data.ram_gb || data.ram || 4, 10);
                const fps = parseInt(data.refresh_rate || data.fps || 60, 10);
                const modelName = data.model || data.device || 'Termux Hardware';
                const res = computeDynamicSensi(modelName, ram, fps);
                const box = document.getElementById('termuxResultBox');
                box.innerHTML = `<p>📱 Hardware Sensi (${modelName}):</p><div class="result-values">${renderSensiMarkup(res)}</div>`;
                box.style.display = 'block';
                saveProfile(`Termux: ${modelName}`, res);
                showToast('Termux Report Imported!');
            } catch {
                showToast('Invalid JSON file');
            }
        };
        reader.readAsText(file);
    });
}

// ===== NICKNAME GENERATOR =====
const nickNames = [
    "꧁༺ 𝐓𝐔𝐅𝐀𝐍 ༻꧂", "⚡ 𝐓𝐔𝐅𝐀𝐍 • 𝐓𝐔𝐅𝐀𝐍 🔥", "王 𝐓𝐔𝐅𝐀𝐍 𝖃 ×͜×",
    "🔥 𝐓𝐔𝐅𝐀𝐍 𝟗𝟗+ 么", "💎 𝐓𝐔𝐅𝐀𝐍 ✓ ツ", "『⚡』 𝐓𝐔𝐅𝐀𝐍 ᶠᶠ ⚡",
    "×͜× 𝐓𝐔𝐅𝐀𝐍 ᴾᴿᴼ 💎", "༒︎ 𝐓𝐔𝐅𝐀𝐍 ᴮᴼˢˢ ༒︎", "★ 𝐓𝐔𝐅𝐀𝐍 ᴳᴼᴰ 〆",
    "么 𝐓𝐔𝐅𝐀𝐍 ⁷⁷⁷ 々", "〆 𝐓𝐔𝐅𝐀𝐍 王", "亗 𝐓𝐔𝐅𝐀𝐍 • 𝐓𝐔𝐅𝐀𝐍 『⚡』",
    "ツ 𝐓𝐔𝐅𝐀𝐍 𝖃 ★", "々 𝐓𝐔𝐅𝐀𝐍 𝟗𝟗+ 亗", "꧁༺ 𝐓𝐔𝐅𝐀𝐍 ✓ ༻꧂",
    "⚡ 𝐓𝐔𝐅𝐀𝐍 ᶠᶠ 🔥", "王 𝐓𝐔𝐅𝐀𝐍 ᴾᴿᴼ ×͜×", "🔥 𝐓𝐔𝐅𝐀𝐍 ᴮᴼˢˢ 么",
    "💎 𝐓𝐔𝐅𝐀𝐍 ᴳᴼᴰ ツ", "『⚡』 𝐓𝐔𝐅𝐀𝐍 ⁷⁷⁷ ⚡", "×͜× 𝐓𝐔𝐅𝐀𝐍 💎",
    "༒︎ 𝐓𝐔𝐅𝐀𝐍 • 𝐓𝐔𝐅𝐀𝐍 ༒︎", "★ 𝐓𝐔𝐅𝐀𝐍 𝖃 〆", "么 𝐓𝐔𝐅𝐀𝐍 𝟗𝟗+ 々",
    "〆 𝐓𝐔𝐅𝐀𝐍 ✓ 王", "亗 𝐓𝐔𝐅𝐀𝐍 ᶠᶠ 『⚡』", "ツ 𝐓𝐔𝐅𝐀𝐍 ᴾᴿᴼ ★",
    "々 𝐓𝐔𝐅𝐀𝐍 ᴮᴼˢˢ 亗", "꧁༺ 𝐓𝐔𝐅𝐀𝐍 ᴳᴼᴰ ༻꧂", "⚡ 𝐓𝐔𝐅𝐀𝐍 ⁷⁷⁷ 🔥"
];

function renderNicknames() {
    const grid = document.getElementById('nickGrid');
    if (!grid) return;
    grid.innerHTML = '';

    nickNames.forEach(n => {
        const item = document.createElement('div');
        item.className = 'nick-item';

        const span = document.createElement('span');
        span.textContent = n;

        const btn = document.createElement('button');
        btn.textContent = 'COPY';
        btn.addEventListener('click', () => copyNick(n));

        item.appendChild(span);
        item.appendChild(btn);
        grid.appendChild(item);
    });
}

function copyNick(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text)
            .then(() => showToast('Copied: ' + text))
            .catch(() => fallbackCopy(text));
    } else {
        fallbackCopy(text);
    }
}

function fallbackCopy(text) {
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    showToast('Copied: ' + text);
}

// ===== SENSI MAKER MODAL LOGIC =====
const modal = document.getElementById('sensiModal');
const openBtn = document.getElementById('openSensiBtn');
const closeBtn = document.getElementById('closeModal');
const generateBtn = document.getElementById('generateSensi');

openBtn.onclick = () => { modal.style.display = 'flex'; };
closeBtn.onclick = () => { modal.style.display = 'none'; };

generateBtn.onclick = () => {
    const model = document.getElementById('phoneModel').value;
    const ram = parseInt(document.getElementById('ramSelect').value, 10);
    const fps = parseInt(document.getElementById('fpsSelect').value, 10);

    let result;
    let label;

    if (model && phoneDatabase[model]) {
        result = computeDynamicSensi(model, ram, fps);
        label = `${model} (${ram}GB RAM / ${fps} FPS)`;
    } else {
        result = computeDynamicSensi(null, ram, fps);
        label = `Custom Device (${ram}GB RAM / ${fps} FPS)`;
    }

    document.getElementById('resultValues').innerHTML = renderSensiMarkup(result);
    document.getElementById('sensiResult').style.display = 'block';
    saveProfile(label, result);
    showToast('Sensitivity Generated & Saved!');
};

window.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none';
});

// ===== INIT =====
renderNicknames();
renderVault();
