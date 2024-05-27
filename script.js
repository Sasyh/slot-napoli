const reelSymbols = ['🍕', '🍋', '🍒', '🍇', '🍉', '🍀', '⭐', '🔔', '7️⃣'];
let balance = 1000;
let lastWin = 0;
let bonus = 0;

document.getElementById('spin').addEventListener('click', () => {
    const reel1 = getRandomSymbol();
    const reel2 = getRandomSymbol();
    const reel3 = getRandomSymbol();
    
    document.getElementById('reel1').textContent = reel1;
    document.getElementById('reel2').textContent = reel2;
    document.getElementById('reel3').textContent = reel3;
    
    const win = calculateWin(reel1, reel2, reel3);
    balance += win;
    lastWin = win;
    document.getElementById('balance').textContent = balance;
    document.getElementById('lastWin').textContent = lastWin;
    
    if (isBonus(reel1, reel2, reel3)) {
        bonus += 10;
        document.getElementById('bonus').textContent = bonus;
    }
});

function getRandomSymbol() {
    return reelSymbols[Math.floor(Math.random() * reelSymbols.length)];
}

function calculateWin(reel1, reel2, reel3) {
    if (reel1 === reel2 && reel2 === reel3) {
        switch (reel1) {
            case '7️⃣': return 100;
            case '⭐': return 50;
            case '🔔': return 20;
            case '🍀': return 10;
            default: return 5;
        }
    }
    return -10;
}

function isBonus(reel1, reel2, reel3) {
    return reel1 === '⭐' || reel2 === '⭐' || reel3 === '⭐';
}
