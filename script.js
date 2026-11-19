// 🎯 DASHBOARD BANNER TOGGLE
function showBanner(id, element) {
    // Sabhi banners hide karein
    document.querySelectorAll('.banner-container').forEach(el => el.classList.remove('active'));
    // Sabhi buttons se active class hatayein
    document.querySelectorAll('.dash-btn').forEach(el => el.classList.remove('active'));
    
    // Selected banner aur button dikhayein
    document.getElementById('banner-' + id).classList.add('active');
    element.classList.add('active');
}

// 🎯 TUFAN SENSI GENERATOR LOGIC (Real Device Data)
function generateSensi() {
    let brand = document.getElementById("brand").value;
    let ram = parseInt(document.getElementById("ram").value);
    let fps = parseInt(document.getElementById("fps").value);
    let dpi = parseInt(document.getElementById("dpi").value) || 420;
    let age = document.getElementById("age").value;
    let balance = document.getElementById("balance").value;

    // Base Values (Max 200 Scale)
    let baseGen = 185;
    let baseRed = 180;
    let base2x = 160;
    let base4x = 140;
    let baseSnip = 85;
    let baseFree = 120;

    // 1. Device Age Factor (Purane phone ki touch sensitivity kam hoti hai, isliye sensi badhao)
    let ageMult = 1.0;
    if (age === 'mid') ageMult = 1.03;
    if (age === 'old') ageMult = 1.08;

    // 2. DPI Factor (High DPI matlab screen sharp hai, isliye sensi kam karo)
    let dpiMult = 1.0;
    if (dpi > 450) dpiMult = 0.95;
    else if (dpi < 380) dpiMult = 1.05;

    // 3. Balance Factor (Drag vs Tap)
    let balanceMult = 1.0;
    if (balance === 'drag') balanceMult = 1.02; 
    else if (balance === 'tap') balanceMult = 0.98;

    // 4. RAM & FPS Factor (High-end = kam sensi for better control)
    let ramMult = 1.0;
    if (ram <= 3) ramMult = 1.05;
    else if (ram >= 8) ramMult = 0.90;

    let fpsMult = 1.0;
    if (fps === 90) fpsMult = 0.95;
    else if (fps === 120) fpsMult = 0.85;

    // Final Calculation
    let finalMult = ageMult * dpiMult * balanceMult * ramMult * fpsMult;

    // Brand Specific Adjustments (Paid Sensi Logic)
    if (brand === 'xiaomi') finalMult *= 0.98;
    else if (brand === 'samsung') finalMult *= 0.95;
    else if (brand === 'iphone') finalMult *= 0.92; // iPhone touch response is very fast
    else if (brand === 'realme') finalMult *= 1.02; // Realme screen thodi slow hoti hai

    // Apply and Cap at 200
    let gen = Math.min(200, Math.round(baseGen * finalMult));
    let red = Math.min(200, Math.round(baseRed * finalMult));
    let x2 = Math.min(200, Math.round(base2x * finalMult));
    let x4 = Math.min(200, Math.round(base4x * finalMult));
    let snip = Math.min(200, Math.round(baseSnip * finalMult));
    let free = Math.min(200, Math.round(baseFree * finalMult));

    // Fire Button Size (Low RAM = Bigger button for easy tap)
    let fireBtn = ram <= 3 ? 48 : 52;

    document.getElementById("resGeneral").innerText = gen;
    document.getElementById("resRedDot").innerText = red;
    document.getElementById("res2x").innerText = x2;
    document.getElementById("res4x").innerText = x4;
    document.getElementById("resSniper").innerText = snip;
    document.getElementById("resFreeLook").innerText = free;
    document.getElementById("resFireBtn").innerText = fireBtn + "%";

    document.getElementById("resultBox").style.display = "block";
}

// ✨ FREESTYLE NAME GENERATOR LOGIC
function generateNames() {
    let name = document.getElementById("userName").value.trim();
    if (!name) {
        alert("Pehle apna naam daalein!");
        return;
    }

    // Premium symbols aur fonts ka collection
    let symbols = ['꧁༺', '༻꧂', '×͜×', '亗', '乂', '★彡', '┏◢', '◤┓', '▄︻デ', '☬', '‿︵', 'ツ'];
    
    let list = document.getElementById("nameList");
    list.innerHTML = ''; // Clear purane names

    // Generate 10 Random Names
    for (let i = 0; i < 10; i++) {
        let randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
        
        // Randomly choose whether symbol is before, after, or both
        let generatedName = "";
        let style = Math.floor(Math.random() * 3);
        
        if (style === 0) generatedName = `${randomSymbol} ${name}`;
        else if (style === 1) generatedName = `${name} ${randomSymbol}`;
        else generatedName = `${randomSymbol} ${name} ${randomSymbol}`;
        
        // Ek div banayein
        let div = document.createElement("div");
        div.className = "name-item";
        
        // Escape quotes for JS copy function
        let safeName = generatedName.replace(/'/g, "\\'");
        
        div.innerHTML = `
            <span>${generatedName}</span>
            <button class="copy-btn" onclick="copyName('${safeName}')">COPY</button>
        `;
        list.appendChild(div);
    }
}

// Copy Function
function copyName(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert("Premium Name Copied: " + text);
    }).catch(err => {
        alert("Copy failed! Apne browser mein allow karein.");
    });
}

// Page load hone par pehla button active karein
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('.dash-btn').classList.add('active');
});