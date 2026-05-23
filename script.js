/**
 * Clickable Circle - Clicker Game
 * Refactored for maintainability and clean code
 */

// ============================================
// CONSTANTS & CONFIGURATION
// ============================================

const SKINS = [
    { name: 'Default', bg: 'linear-gradient(135deg, #6e8efb, #a777e3)', icon: '', cost: 0 },
    { name: 'Board Gamer', bg: 'linear-gradient(135deg, #f093fb, #f5576c)', icon: '🎲', cost: 2500000 },
    { name: 'Skull', bg: 'linear-gradient(135deg, #2c3e50, #000000)', icon: '', cost: 100000 },
    { name: 'Radioactive', bg: 'linear-gradient(135deg, #56ab2f, #a8e063)', icon: '', cost: 1000000 },
    { name: 'Penny', bg: 'linear-gradient(135deg, #b87333, #8b4513)', icon: '🪙', cost: 100000 },
    { name: 'Sunset', bg: 'linear-gradient(135deg, #ff9a9e, #fecfef)', icon: '', cost: 1000 },
    { name: 'Forest', bg: 'linear-gradient(135deg, #11998e, #38ef7d)', icon: '', cost: 5000 },
    { name: 'Ocean', bg: 'linear-gradient(135deg, #2193b0, #6dd5ed)', icon: '', cost: 10000 },
    { name: 'Magma', bg: 'linear-gradient(135deg, #f12711, #f5af19)', icon: '', cost: 50000 },
    { name: 'Cyber', bg: 'linear-gradient(135deg, #00f2fe, #4facfe)', icon: '', cost: 100000 },
    { name: 'Gold', bg: 'linear-gradient(135deg, #f6d365, #fda085)', icon: '', cost: 500000 },
    { name: 'Midnight', bg: 'linear-gradient(135deg, #232526, #414345)', icon: '', cost: 1000000 },
    { name: 'Royal', bg: 'linear-gradient(135deg, #6a11cb, #2575fc)', icon: '', cost: 5000000 },
    { name: 'Starlight', bg: 'linear-gradient(135deg, #e1eec3, #f05053)', icon: '', cost: 10000000 },
    { name: 'Donut', bg: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'150\' height=\'150\' viewBox=\'0 0 150 150\'%3E%3Ccircle cx=\'75\' cy=\'75\' r=\'60\' fill=\'%23f3e5ab\' stroke=\'%23d2b48c\' stroke-width=\'4\'/%3E%3Ccircle cx=\'75\' cy=\'75\' r=\'50\' fill=\'%23ffb7c5\'/%3E%3Ccircle cx=\'75\' cy=\'75\' r=\'20\' fill=\'white\'/%3E%3Crect x=\'45\' y=\'45\' width=\'10\' height=\'4\' rx=\'2\' fill=\'%23ff0000\' transform=\'rotate(45 50 47)\'/%3E%3Crect x=\'95\' y=\'45\' width=\'10\' height=\'4\' rx=\'2\' fill=\'%230000ff\' transform=\'rotate(-30 100 47)\'/%3E%3Crect x=\'45\' y=\'95\' width=\'10\' height=\'4\' rx=\'2\' fill=\'%23ffff00\' transform=\'rotate(10 50 97)\'/%3E%3Crect x=\'95\' y=\'95\' width=\'10\' height=\'4\' rx=\'2\' fill=\'%2300ff00\' transform=\'rotate(-15 100 97)\'/%3E%3Crect x=\'70\' y=\'30\' width=\'10\' height=\'4\' rx=\'2\' fill=\'%23ffa500\'/%3E%3Crect x=\'70\' y=\'115\' width=\'10\' height=\'4\' rx=\'2\' fill=\'%23800080\'/%3E%3C/svg%3E") center / cover no-repeat', icon: '', cost: 100000 },
    { name: 'Mecha-Pad', bg: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'150\' height=\'150\' viewBox=\'0 0 150 150\'%3E%3Cdefs%3E%3ClinearGradient id=\'metal\' x1=\'0\' y1=\'0\' x2=\'1\' y2=\'1\'%3E%3Cstop offset=\'0%25\' stop-color=\'%237f8c8d\'/%3E%3Cstop offset=\'100%25\' stop-color=\'%232c3e50\'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d=\'M30,80 Q30,50 75,50 Q120,50 120,80 L120,110 Q120,130 100,130 L90,130 Q75,110 60,130 L50,130 Q30,130 30,110 Z\' fill=\'url(%23metal)\' stroke=\'%23000\' stroke-width=\'2\'/%3E%3Ccircle cx=\'50\' cy=\'85\' r=\'12\' fill=\'%231a1a1a\'/%3E%3Crect x=\'47\' y=\'78\' width=\'6\' height=\'14\' rx=\'2\' fill=\'%2300d4ff\'/%3E%3Crect x=\'43\' y=\'82\' width=\'14\' height=\'6\' rx=\'2\' fill=\'%2300d4ff\'/%3E%3Ccircle cx=\'100\' cy=\'75\' r=\'5\' fill=\'%23ff3e3e\'/%3E%3Ccircle cx=\'110\' cy=\'85\' r=\'5\' fill=\'%233eff3e\'/%3E%3Ccircle cx=\'90\' cy=\'85\' r=\'5\' fill=\'%233e3eff\'/%3E%3Ccircle cx=\'100\' cy=\'95\' r=\'5\' fill=\'%23ffff3e\'/%3E%3Crect x=\'65\' y=\'65\' width=\'20\' height=\'10\' rx=\'5\' fill=\'%23111\'/%3E%3Ccircle cx=\'70\' cy=\'70\' r=\'2\' fill=\'%23ff0000\'/%3E%3Ccircle cx=\'80\' cy=\'70\' r=\'2\' fill=\'%23ff0000\'/%3E%3Cpath d=\'M40,110 L110,110\' stroke=\'rgba(255,255,255,0.1)\' stroke-width=\'1\'/%3E%3Cpath d=\'M75,50 L75,65\' stroke=\'rgba(0,0,0,0.3)\' stroke-width=\'2\'/%3E%3C/svg%3E") center / cover no-repeat', icon: '', cost: 150000 },
    { name: 'Android', bg: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'150\' height=\'150\' viewBox=\'0 0 150 150\'%3E%3Crect x=\'30\' y=\'40\' width=\'90\' height=\'80\' rx=\'10\' fill=\'%2395a5a6\' stroke=\'%23333\' stroke-width=\'3\'/%3E%3Ccircle cx=\'55\' cy=\'70\' r=\'12\' fill=\'%2300d4ff\' stroke=\'%23333\' stroke-width=\'2\'/%3E%3Ccircle cx=\'95\' cy=\'70\' r=\'12\' fill=\'%2300d4ff\' stroke=\'%23333\' stroke-width=\'2\'/%3E%3Ccircle cx=\'55\' cy=\'70\' r=\'4\' fill=\'white\'/%3E%3Ccircle cx=\'95\' cy=\'70\' r=\'4\' fill=\'white\'/%3E%3Crect x=\'50\' y=\'95\' width=\'50\' height=\'10\' rx=\'5\' fill=\'%23333\'/%3E%3Cpath d=\'M30,80 L120,80\' stroke=\'rgba(0,0,0,0.2)\' stroke-width=\'2\'/%3E%3C/svg%3E") center / cover no-repeat', icon: '', cost: 200000 },
    { name: 'Penguin', bg: 'linear-gradient(to bottom, #222, #000)', icon: '', cost: 300000 },
    { name: 'Monkey', bg: 'linear-gradient(to bottom, #8b4513, #5d2906)', icon: '', cost: 400000 },
    { name: 'Banana', bg: 'linear-gradient(to bottom, #ffe135, #ffcc00)', icon: '', cost: 500000 },
    { name: 'Egg', bg: 'radial-gradient(circle at 35% 35%, #fff 0%, #f0f0f0 100%)', icon: '', cost: 600000 },
    { name: "Rubik's Cube", bg: '#000', icon: '', cost: 750000 },
    { name: 'Computer', bg: '#2c3e50', icon: '', cost: 1000000 },
    { name: 'Book', bg: '#4b2c20', icon: '📖', cost: 1200000 },
    { name: 'Bacon', bg: '#8b0000', icon: '🥓', cost: 1500000 },
    { name: 'Earth', bg: 'radial-gradient(circle at 30% 30%, #4a7c2c, #2d4a1e)', icon: '', cost: 2000000 },
    { name: 'Mars', bg: 'radial-gradient(circle at 30% 30%, #e74c3c, #c0392b)', icon: '', cost: 2500000 },
    { name: 'Moon', bg: 'radial-gradient(circle at 30% 30%, #bdc3c7, #2c3e50)', icon: '', cost: 3000000 },
    { name: 'Sun', bg: 'radial-gradient(circle at 30% 30%, #f1c40f, #e67e22)', icon: '', cost: 5000000 },
    { name: 'Void', bg: 'radial-gradient(circle at 30% 30%, #2c3e50, #000000)', icon: '', cost: 10000000 },
    { name: 'Rainbow', bg: 'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)', icon: '', cost: 15000000 },
    { name: 'Hacker', bg: '#000', icon: '👨‍💻', cost: 20000000 }
];

const WALLPAPERS = [
    { name: 'Default', bg: '#f0f2f5', cost: 0 },
    { name: 'Pure Black', bg: '#000000', cost: 0 },
    { name: 'Matrix', bg: '#000 url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\'%3E%3Ctext x=\'10\' y=\'20\' fill=\'%230f0\' font-family=\'monospace\' font-size=\'10\'%3E10101%3C/text%3E%3Ctext x=\'30\' y=\'40\' fill=\'%230f0\' font-family=\'monospace\' font-size=\'10\'%3E01010%3C/text%3E%3Ctext x=\'50\' y=\'60\' fill=\'%230f0\' font-family=\'monospace\' font-size=\'10\'%3E11001%3C/text%3E%3C/svg%3E") repeat', cost: 50000 },
    { name: 'Jungle', bg: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'800\' height=\'600\' viewBox=\'0 0 800 600\'%3E%3Cdefs%3E%3ClinearGradient id=\'jungle-sky\' x1=\'0\' y1=\'0\' x2=\'0\' y2=\'1\'%3E%3Cstop offset=\'0%25\' stop-color=\'%23228b22\'/%3E%3Cstop offset=\'100%25\' stop-color=\'%23006400\'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=\'800\' height=\'600\' fill=\'url(%23jungle-sky)\'/%3E%3Cpath d=\'M0,600 Q100,300 200,600 Q300,200 400,600 Q500,400 600,600 Q700,300 800,600 L800,600 L0,600 Z\' fill=\'%23004b00\' opacity=\'0.8\'/%3E%3Cpath d=\'M-50,600 Q50,100 150,600 Q250,300 350,600 Q450,100 550,600 Q650,400 750,600\' fill=\'none\' stroke=\'%2332cd32\' stroke-width=\'5\' opacity=\'0.3\'/%3E%3Ccircle cx=\'100\' cy=\'100\' r=\'50\' fill=\'%2332cd32\' opacity=\'0.2\'/%3E%3Ccircle cx=\'700\' cy=\'200\' r=\'80\' fill=\'%23228b22\' opacity=\'0.2\'/%3E%3C/svg%3E") center / cover no-repeat fixed, #006400', cost: 150000 },
    { name: 'Antarctica', bg: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'800\' height=\'600\' viewBox=\'0 0 800 600\'%3E%3Cdefs%3E%3ClinearGradient id=\'arctic-sky\' x1=\'0\' y1=\'0\' x2=\'0\' y2=\'1\'%3E%3Cstop offset=\'0%25\' stop-color=\'%2387ceeb\'/%3E%3Cstop offset=\'100%25\' stop-color=\'%23ffffff\'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=\'800\' height=\'600\' fill=\'url(%23arctic-sky)\'/%3E%3Cpath d=\'M0,400 Q200,350 400,400 Q600,450 800,400 L800,600 L0,600 Z\' fill=\'%23f0f8ff\'/%3E%3Cpath d=\'M100,400 L150,250 L200,400 Z\' fill=\'%23e0ffff\' opacity=\'0.8\'/%3E%3Cpath d=\'M300,420 L400,200 L500,420 Z\' fill=\'%23ffffff\' opacity=\'0.9\'/%3E%3Cpath d=\'M550,400 L650,300 L750,400 Z\' fill=\'%23f0ffff\' opacity=\'0.7\'/%3E%3Ccircle cx=\'700\' cy=\'100\' r=\'40\' fill=\'%23fff\' opacity=\'0.5\'/%3E%3C/svg%3E") center / cover no-repeat fixed, #f0f8ff', cost: 120000 },
    { name: 'Nuclear Power Plant', bg: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'800\' height=\'600\' viewBox=\'0 0 800 600\'%3E%3Cdefs%3E%3ClinearGradient id=\'sky\' x1=\'0\' y1=\'0\' x2=\'0\' y2=\'1\'%3E%3Cstop offset=\'0%25\' stop-color=\'%23000\'/%3E%3Cstop offset=\'100%25\' stop-color=\'%231b4d00\'/%3E%3C/linearGradient%3E%3Cfilter id=\'blur\'%3E%3CfeGaussianBlur stdDeviation=\'8\'/%3E%3C/filter%3E%3C/defs%3E%3Crect width=\'800\' height=\'600\' fill=\'url(%23sky)\'/%3E%3Cpath d=\'M0,450 Q200,400 400,450 Q600,500 800,450 L800,600 L0,600 Z\' fill=\'%23050a00\'/%3E%3Cpath d=\'M150,450 L180,280 Q210,265 240,280 L270,450 Z\' fill=\'%23222\'/%3E%3Cpath d=\'M180,280 L240,280 Q210,290 180,280 Z\' fill=\'%23333\'/%3E%3Cpath d=\'M180,310 L240,310 Q210,315 180,310 Z\' fill=\'%23111\'/%3E%3Cpath d=\'M380,450 L410,330 Q435,320 460,330 L490,450 Z\' fill=\'%231a1a1a\'/%3E%3Cpath d=\'M410,330 L460,330 Q435,338 410,330 Z\' fill=\'%23222\'/%3E%3Crect x=\'500\' y=\'380\' width=\'180\' height=\'70\' fill=\'%23333\'/%3E%3Crect x=\'520\' y=\'395\' width=\'20\' height=\'15\' fill=\'rgba(57,255,20,0.3)\'/%3E%3Crect x=\'550\' y=\'395\' width=\'20\' height=\'15\' fill=\'rgba(57,255,20,0.3)\'/%3E%3Crect x=\'580\' y=\'395\' width=\'20\' height=\'15\' fill=\'rgba(57,255,20,0.3)\'/%3E%3Crect x=\'610\' y=\'395\' width=\'20\' height=\'15\' fill=\'rgba(57,255,20,0.3)\'/%3E%3Cpath d=\'M190,270 Q210,210 240,230 Q270,250 280,210 Q290,170 320,190 Q350,210 360,170 Q370,130 410,150\' fill=\'none\' stroke=\'rgba(57,255,20,0.1)\' stroke-width=\'30\' filter=\'url(%23blur)\'/%3E%3C/svg%3E") center / cover no-repeat fixed, #000', cost: 100000 },
    { name: 'Simpsons Kitchen', bg: 'url("https://funnymeetingbackgrounds.com/wp-content/uploads/2020/11/Simpsons-Kitchen.jpg") center / cover no-repeat fixed', cost: 250000 },
    { name: 'Lard Lad Donuts', bg: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'800\' height=\'600\' viewBox=\'0 0 800 600\'%3E%3Cdefs%3E%3ClinearGradient id=\'sky\' x1=\'0\' y1=\'0\' x2=\'0\' y2=\'1\'%3E%3Cstop offset=\'0%25\' stop-color=\'%2387ceeb\'/%3E%3Cstop offset=\'100%25\' stop-color=\'%23e0ffff\'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=\'800\' height=\'600\' fill=\'url(%23sky)\'/%3E%3Crect x=\'0\' y=\'500\' width=\'800\' height=\'100\' fill=\'%23ccc\'/%3E%3Crect x=\'350\' y=\'500\' width=\'100\' height=\'400\' rx=\'10\' fill=\'%23f3e5ab\'/%3E%3Crect x=\'350\' y=\'450\' width=\'100\' height=\'50\' fill=\'%23ff0000\'/%3E%3Cpath d=\'M350,450 L450,450 L450,500 L350,500 Z\' fill=\'white\' opacity=\'0.2\'/%3E%3Ccircle cx=\'400\' cy=\'400\' r=\'40\' fill=\'%23f3e5ab\'/%3E%3Cpath d=\'M380,410 Q400,430 420,410\' fill=\'none\' stroke=\'%23000\' stroke-width=\'2\'/%3E%3Ccircle cx=\'390\' cy=\'390\' r=\'3\' fill=\'%23000\'/%3E%3Ccircle cx=\'410\' cy=\'390\' r=\'3\' fill=\'%23000\'/%3E%3Cpath d=\'M370,370 Q400,340 430,370\' fill=\'%238b4513\'/%3E%3Cpath d=\'M330,350 L350,400 M450,400 L470,350\' stroke=\'%23f3e5ab\' stroke-width=\'20\' stroke-linecap=\'round\'/%3E%3Cpath d=\'M400,200 m-120,0 a120,120 0 1,0 240,0 a120,120 0 1,0 -240,0\' fill=\'%23f4a460\'/%3E%3Cpath d=\'M400,200 m-110,0 a110,110 0 1,0 220,0 a110,110 0 1,0 -220,0\' fill=\'%23ffb7c5\'/%3E%3Ccircle cx=\'400\' cy=\'200\' r=\'40\' fill=\'%2387ceeb\'/%3E%3Crect x=\'330\' y=\'140\' width=\'10\' height=\'20\' rx=\'5\' fill=\'%23ff0000\' transform=\'rotate(45 335 150)\'/%3E%3Crect x=\'460\' y=\'180\' width=\'10\' height=\'20\' rx=\'5\' fill=\'%230000ff\' transform=\'rotate(-30 465 190)\'/%3E%3Crect x=\'400\' y=\'100\' width=\'10\' height=\'20\' rx=\'5\' fill=\'%23ffff00\'/%3E%3Crect x=\'310\' y=\'220\' width=\'10\' height=\'20\' rx=\'5\' fill=\'%2300ff00\' transform=\'rotate(10 315 230)\'/%3E%3C/svg%3E") center / cover no-repeat fixed, #87ceeb', cost: 100000 },
    { name: "Android's Dungeon", bg: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'800\' height=\'600\' viewBox=\'0 0 800 600\'%3E%3Cdefs%3E%3ClinearGradient id=\'sky\' x1=\'0\' y1=\'0\' x2=\'0\' y2=\'1\'%3E%3Cstop offset=\'0%25\' stop-color=\'%231a0033\'/%3E%3Cstop offset=\'100%25\' stop-color=\'%23330066\'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=\'800\' height=\'600\' fill=\'url(%23sky)\'/%3E%3Crect x=\'0\' y=\'450\' width=\'800\' height=\'150\' fill=\'%231a1a1a\'/%3E%3Crect x=\'150\' y=\'200\' width=\'500\' height=\'250\' fill=\'%234b0082\'/%3E%3Crect x=\'150\' y=\'200\' width=\'500\' height=\'40\' fill=\'%231e90ff\'/%3E%3Crect x=\'180\' y=\'260\' width=\'100\' height=\'120\' fill=\'%2387ceeb\' stroke=\'%23000\' stroke-width=\'5\'/%3E%3Crect x=\'520\' y=\'260\' width=\'100\' height=\'120\' fill=\'%2387ceeb\' stroke=\'%23000\' stroke-width=\'5\'/%3E%3Crect x=\'340\' y=\'300\' width=\'120\' height=\'150\' fill=\'%23333\' stroke=\'%23000\' stroke-width=\'5\'/%3E%3Crect x=\'190\' y=\'270\' width=\'30\' height=\'40\' fill=\'%23ff4500\'/%3E%3Crect x=\'530\' y=\'270\' width=\'30\' height=\'40\' fill=\'%23ffd700\'/%3E%3Crect x=\'160\' y=\'210\' width=\'480\' height=\'20\' fill=\'%23000\'/%3E%3C/svg%3E") center / cover no-repeat fixed, #1a0033', cost: 100000 },
    { name: 'Robot Hell', bg: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'800\' height=\'600\' viewBox=\'0 0 800 600\'%3E%3Cdefs%3E%3ClinearGradient id=\'fire\' x1=\'0\' y1=\'1\' x2=\'0\' y2=\'0\'%3E%3Cstop offset=\'0%25\' stop-color=\'%23ff4500\'/%3E%3Cstop offset=\'100%25\' stop-color=\'%23800000\'/%3E%3C/linearGradient%3E%3Cfilter id=\'blur\'%3E%3CfeGaussianBlur stdDeviation=\'10\'/%3E%3C/filter%3E%3C/defs%3E%3Crect width=\'800\' height=\'600\' fill=\'url(%23fire)\'/%3E%3Cpath d=\'M0,500 L100,450 L200,520 L350,480 L500,530 L650,470 L800,510 L800,600 L0,600 Z\' fill=\'%231a0000\'/%3E%3Cg transform=\'translate(200, 350)\'%3E%3Crect x=\'0\' y=\'0\' width=\'100\' height=\'150\' fill=\'%23333\' transform=\'rotate(45)\'/%3E%3Crect x=\'20\' y=\'20\' width=\'60\' height=\'80\' fill=\'%23000\' transform=\'rotate(45)\'/%3E%3Cpath d=\'M-20,50 L120,50 M-20,100 L120,100\' stroke=\'%23555\' stroke-width=\'5\'/%3E%3C/g%3E%3Cg transform=\'translate(500, 300)\'%3E%3Crect x=\'0\' y=\'0\' width=\'40\' height=\'60\' fill=\'%23111\'/%3E%3Ccircle cx=\'20\' cy=\'-15\' r=\'15\' fill=\'%23111\'/%3E%3Cpath d=\'M-10,10 L-30,40 M50,10 L70,40\' stroke=\'%23111\' stroke-width=\'8\'/%3E%3Cpath d=\'M80,-20 L40,10 M80,-30 L80,20 M70,-25 L100,-25\' stroke=\'%23ffcc00\' stroke-width=\'3\'/%3E%3C/g%3E%3Cpath d=\'M100,100 Q150,50 200,120 Q250,180 300,100 Q400,20 500,150 Q600,250 700,100\' fill=\'none\' stroke=\'rgba(255,255,255,0.05)\' stroke-width=\'40\' filter=\'url(%23blur)\'/%3E%3C/svg%3E") center / cover no-repeat fixed, #800000', cost: 100000 },
    { name: 'Pirate Ship', bg: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'800\' height=\'600\' viewBox=\'0 0 800 600\'%3E%3Cdefs%3E%3ClinearGradient id=\'sea\' x1=\'0\' y1=\'0\' x2=\'0\' y2=\'1\'%3E%3Cstop offset=\'0%25\' stop-color=\'%231e3c72\'/%3E%3Cstop offset=\'100%25\' stop-color=\'%232a5298\'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=\'800\' height=\'600\' fill=\'url(%23sea)\'/%3E%3Cpath d=\'M0,450 Q200,400 400,450 Q600,500 800,450 L800,600 L0,600 Z\' fill=\'%2316213e\'/%3E%3Cpath d=\'M200,450 Q200,380 500,400 L550,450 Z\' fill=\'%234b2c20\'/%3E%3Crect x=\'340\' y=\'100\' width=\'10\' height=\'300\' fill=\'%232a1810\'/%3E%3Cpath d=\'M350,120 Q450,150 350,280 Q250,150 350,120\' fill=\'%23fff\'/%3E%3Ccircle cx=\'350\' cy=\'180\' r=\'15\' fill=\'%23000\'/%3E%3Cpath d=\'M335,200 L365,210 M335,210 L365,200\' stroke=\'%23000\' stroke-width=\'3\'/%3E%3Cpath d=\'M0,480 Q200,430 480 Q600,530 800,480\' fill=\'none\' stroke=\'rgba(255,255,255,0.2)\' stroke-width=\'5\'/%3E%3C/svg%3E") center / cover no-repeat fixed, #1e3c72', cost: 100000 },
    { name: 'Dollar Bill', bg: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'800\' height=\'400\' viewBox=\'0 0 800 400\'%3E%3Crect width=\'800\' height=\'400\' fill=\'%2385bb65\'/%3E%3Crect x=\'20\' y=\'20\' width=\'760\' height=\'360\' fill=\'none\' stroke=\'%233e5c33\' stroke-width=\'10\'/%3E%3Ccircle cx=\'400\' cy=\'200\' r=\'120\' fill=\'none\' stroke=\'%233e5c33\' stroke-width=\'5\'/%3E%3Cpath d=\'M400,100 L400,300 M300,200 L500,200\' stroke=\'%233e5c33\' stroke-width=\'2\' opacity=\'0.3\'/%3E%3Ctext x=\'50\' y=\'80\' font-family=\'serif\' font-size=\'40\' fill=\'%233e5c33\'%3E100K%3C/text%3E%3Ctext x=\'680\' y=\'80\' font-family=\'serif\' font-size=\'40\' fill=\'%233e5c33\'%3E100K%3C/text%3E%3Ctext x=\'50\' y=\'350\' font-family=\'serif\' font-size=\'40\' fill=\'%233e5c33\'%3E100K%3C/text%3E%3Ctext x=\'680\' y=\'350\' font-family=\'serif\' font-size=\'40\' fill=\'%233e5c33\'%3E100K%3C/text%3E%3Ctext x=\'400\' y=\'220\' text-anchor=\'middle\' font-family=\'serif\' font-size=\'60\' fill=\'%233e5c33\' font-weight=\'bold\'%3ECLICK%3C/text%3E%3Cpath d=\'M20,20 L80,80 M720,20 L780,80 M20,320 L80,380 M720,320 L780,380\' stroke=\'%233e5c33\' stroke-width=\'2\'/%3E%3C/svg%3E") center / contain repeat, #85bb65', cost: 25000 },
    { name: 'Monopoly Board', bg: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'800\' height=\'800\' viewBox=\'0 0 800 800\'%3E%3Crect width=\'800\' height=\'800\' fill=\'%23daf5e7\'/%3E%3Cg transform=\'translate(200, 200)\'%3E%3Crect x=\'250\' y=\'250\' width=\'150\' height=\'150\' fill=\'white\' stroke=\'%23000\' stroke-width=\'3\'/%3E%3Ctext x=\'325\' y=\'330\' text-anchor=\'middle\' font-family=\'sans-serif\' font-size=\'40\' fill=\'red\' font-weight=\'bold\'%3EGO%3C/text%3E%3Cpath d=\'M280,350 L370,350 L350,320 M370,350 L350,380\' fill=\'none\' stroke=\'red\' stroke-width=\'8\'/%3E%3Crect x=\'150\' y=\'250\' width=\'100\' height=\'150\' fill=\'white\' stroke=\'%23000\' stroke-width=\'2\'/%3E%3Crect x=\'150\' y=\'250\' width=\'100\' height=\'30\' fill=\'%230072bb\'/%3E%3Crect x=\'50\' y=\'250\' width=\'100\' height=\'150\' fill=\'white\' stroke=\'%23000\' stroke-width=\'2\'/%3E%3Crect x=\'50\' y=\'250\' width=\'100\' height=\'30\' fill=\'%230072bb\'/%3E%3Crect x=\'250\' y=\'150\' width=\'150\' height=\'100\' fill=\'white\' stroke=\'%23000\' stroke-width=\'2\'/%3E%3Crect x=\'370\' y=\'150\' width=\'30\' height=\'100\' fill=\'%2300a650\'/%3E%3Crect x=\'180\' y=\'300\' width=\'40\' height=\'30\' fill=\'green\'/%3E%3Cpath d=\'M180,300 L200,280 L220,300 Z\' fill=\'green\'/%3E%3Crect x=\'80\' y=\'300\' width=\'50\' height=\'40\' fill=\'red\'/%3E%3Cpath d=\'M80,300 L105,275 L130,300 Z\' fill=\'red\'/%3E%3C/g%3E%3C/svg%3E") center / cover no-repeat fixed, #daf5e7', cost: 25000 },
    { name: 'RGB Setup', bg: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'800\' height=\'600\' viewBox=\'0 0 800 600\'%3E%3Cdefs%3E%3ClinearGradient id=\'desk-grad\' x1=\'0\' y1=\'0\' x2=\'0\' y2=\'1\'%3E%3Cstop offset=\'0%25\' stop-color=\'%231a1a1a\'/%3E%3Cstop offset=\'100%25\' stop-color=\'%23050505\'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=\'800\' height=\'600\' fill=\'%23050505\'/%3E%3Crect x=\'0\' y=\'450\' width=\'800\' height=\'150\' fill=\'url(%23desk-grad)\'/%3E%3Crect x=\'50\' y=\'440\' width=\'700\' height=\'10\' fill=\'%23333\'/%3E%3Crect x=\'100\' y=\'460\' width=\'200\' height=\'20\' rx=\'5\' fill=\'%23111\' stroke=\'%230ff\' stroke-width=\'1\'/%3E%3Crect x=\'500\' y=\'460\' width=\'200\' height=\'100\' rx=\'10\' fill=\'%23111\' stroke=\'%23f0f\' stroke-width=\'1\'/%3E%3Crect x=\'520\' y=\'480\' width=\'160\' height=\'60\' fill=\'rgba(255,0,255,0.1)\'/%3E%3Cpath d=\'M0,0 L800,0 L800,600 L0,600 Z M40,40 L760,40 L760,420 L40,420 Z\' fill=\'%23000\' fill-rule=\'evenodd\'/%3E%3Cpath d=\'M40,40 L760,40 L760,420 L40,420 Z\' fill=\'none\' stroke=\'%230ff\' stroke-width=\'2\' opacity=\'0.5\'/%3E%3Cpath d=\'M30,30 L770,30 L770,430 L30,430 Z\' fill=\'none\' stroke=\'%23f0f\' stroke-width=\'1\' opacity=\'0.3\'/%3E%3Ccircle cx=\'750\' cy=\'50\' r=\'2\' fill=\'%230ff\'/%3E%3Ccircle cx=\'750\' cy=\'60\' r=\'2\' fill=\'%230ff\'/%3E%3Ccircle cx=\'750\' cy=\'70\' r=\'2\' fill=\'%230ff\'/%3E%3C/svg%3E") center / cover no-repeat fixed, #0a0a0a', cost: 200000 },
    { name: 'Library', bg: 'url("https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=2560&q=80") center / cover no-repeat fixed', cost: 300000 }
];

const AURAS = [
    { name: 'None', cost: 0 },
    { name: 'Wind', cost: 100000 },
    { name: 'Fire', cost: 200000 },
    { name: 'Earth', cost: 300000 },
    { name: 'Water', cost: 400000 },
    { name: 'Thunder', cost: 1000000 }
];

const SOUNDS = [
    { name: 'None', cost: 0 },
    { name: 'Pop', cost: 10000 },
    { name: 'Pacifier', cost: 12000 },
    { name: 'Bouncy Ball', cost: 15000 },
    { name: 'Laser', cost: 18000 },
    { name: 'Eating', cost: 20000 },
    { name: 'D-oh!', cost: 22000 },
    { name: 'Boing', cost: 25000 },
    { name: 'Cha-ching', cost: 30000 },
    { name: 'Monkey', cost: 35000 },
    { name: 'Penguin', cost: 40000 },
    { name: 'Typing', cost: 45000 },
    { name: 'Barney Burp', cost: 50000 },
    { name: 'Sizzling', cost: 15000 }
];

const NPCS = [
    { name: 'Slime (Easy)', hp: 50, reward: 1000, time: 30 },
    { name: 'Robot (Medium)', hp: 500, reward: 100000, time: 30 },
    { name: 'Dragon (Hard)', hp: 5000, reward: 3000000, time: 30 },
    { name: 'Titan (Boss)', hp: 25000, reward: 5000000, time: 45 }
];



// ============================================
// GAME STATE
// ============================================

const Game = {
    count: 0,
    rebirths: 0,
    clickValue: 1,
    autoClickerValue: 0,
    manualLevel: 0,
    autoLevel: 0,
    currentScreensaver: 'matrix',
    
    // Collectibles
    currentSkin: 'Default',
    ownedSkins: ['Default'],
    currentWallpaper: 'Default',
    ownedWallpapers: ['Default'],
    currentSound: 'None',
    ownedSounds: ['None'],
    currentAura: 'None',
    ownedAuras: ['None'],
    
    // Systems
    inBattle: false,
    isPaused: false,
    showPauseClock: true,
    currentNPC: null,
    battleTimeLeft: 0,
    
    // Boardgame
    playerPosition: 0,
    boardSpaces: [],
    
    // Upgrade data
    manualUpgrades: [],
    autoUpgrades: []
};

// ============================================
// AUDIO SYSTEM
// ============================================

const AudioSystem = {
    ctx: null,
    
    init() {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        this.ctx = AudioContext ? new AudioContext() : null;
    },
    
    playSound(name) {
        if (!this.ctx || name === 'None') return;
        if (this.ctx.state === 'suspended') {
            this.ctx.resume().then(() => this.playSound(name));
            return;
        }
        
        const effects = {
            'Pop': () => this.playTone(400, 10, 0.1, 'sine'),
            'Laser': () => this.playTone(800, 100, 0.2, 'sawtooth'),
            'Boing': () => {
                this.playTone(150, 300, 0.3, 'sine');
                setTimeout(() => this.playTone(300, 150, 0.2, 'sine'), 100);
            },
            'Cha-ching': () => {
                this.playTone(1000, 1500, 0.2, 'triangle');
            },
            'D-oh!': () => this.playTone(150, 100, 0.2, 'sawtooth', 1000),
            'Pacifier': () => this.playTone(800, 1200, 0.1, 'sine'),
            'Bouncy Ball': () => this.playTone(600, 200, 0.15, 'sine'),
            'Eating': () => this.playNoise(500, 0.1, 'lowpass'),
            'Sizzling': () => this.playNoise(3000, 0.3, 'highpass', true),
            'Monkey': () => this.playChirp(400, 450, 500),
            'Penguin': () => this.playHorn(300, 280),
            'Typing': () => this.playTone(200, 50, 0.05, 'square'),
            'Barney Burp': () => {
                for(let i=0; i<10; i++) {
                    setTimeout(() => this.playTone(100 - (i * 5), 50, 0.1, 'sawtooth', 400), i * 40);
                }
            }
        };
        
        if (effects[name]) effects[name]();
    },
    
    playTone(freq1, freq2, duration, type, filterFreq = 0) {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq1, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(freq2, this.ctx.currentTime + duration);
        gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + duration);
        
        if (filterFreq > 0) {
            const filter = this.ctx.createBiquadFilter();
            filter.type = 'lowpass';
            filter.frequency.value = filterFreq;
            osc.connect(filter);
            filter.connect(gain);
        } else {
            osc.connect(gain);
        }
        
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + duration);
    },
    
    playNoise(duration, filterFreq, type, crackle = false) {
        const bufferSize = this.ctx.sampleRate * duration;
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
        
        const noise = this.ctx.createBufferSource();
        noise.buffer = buffer;
        const filter = this.ctx.createBiquadFilter();
        filter.type = type;
        filter.frequency.value = filterFreq;
        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + duration);
        
        if (crackle) {
            for(let i=0; i<5; i++) {
                gain.gain.setValueAtTime(0.2, this.ctx.currentTime + i*0.05);
                gain.gain.setValueAtTime(0.1, this.ctx.currentTime + i*0.05 + 0.02);
            }
        }
        
        noise.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);
        noise.start();
    },
    
    playChirp(f1, f2, f3) {
        const now = this.ctx.currentTime;
        [f1, f2, f3].forEach((freq, i) => {
            setTimeout(() => {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(freq, now);
                osc.frequency.exponentialRampToValueAtTime(freq * 1.5, now + 0.08);
                gain.gain.setValueAtTime(0.15, now);
                gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
                osc.connect(gain);
                gain.connect(this.ctx.destination);
                osc.start(now);
                osc.stop(now + 0.08);
            }, i * 100);
        });
    },
    
    playHorn(f1, f2) {
        const now = this.ctx.currentTime;
        [f1, f2].forEach((freq, i) => {
            setTimeout(() => {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(freq, now);
                osc.frequency.exponentialRampToValueAtTime(freq * 0.8, now + 0.15);
                gain.gain.setValueAtTime(0.2, now);
                gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
                osc.connect(gain);
                gain.connect(this.ctx.destination);
                osc.start(now);
                osc.stop(now + 0.2);
            }, i * 100);
        });
    }
};

// ============================================
// UPGRADE DATA GENERATION
// ============================================

function generateUpgrades() {
    Game.manualUpgrades = [
        { id: 'upgrade-btn-1', label: 'Double Clicks', cost: 20, value: 2 },
        { id: 'upgrade-btn-2', label: '5 Clicks per Click', cost: 100, value: 5 },
        { id: 'upgrade-btn-3', label: '10 Clicks per Click', cost: 300, value: 10 },
        { id: 'upgrade-btn-4', label: '25 Clicks per Click', cost: 500, value: 25 },
        { id: 'upgrade-btn-5', label: '50 Clicks per Click', cost: 1000, value: 50 },
        { id: 'upgrade-btn-6', label: '100 Clicks per Click', cost: 2000, value: 100 },
        { id: 'upgrade-btn-7', label: '250 Clicks per Click', cost: 6000, value: 250 },
        { id: 'upgrade-btn-8', label: '500 Clicks per Click', cost: 20000, value: 500 },
        { id: 'upgrade-btn-9', label: '1000 Clicks per Click', cost: 60000, value: 1000 }
    ];
    
    // Generate additional manual upgrades
    for (let i = 1; i <= 13; i++) {
        const val = Math.min(5000000, 1000 * Math.pow(2, i));
        if (val > 1000) {
            Game.manualUpgrades.push({
                id: `upgrade-btn-${Game.manualUpgrades.length + 1}`,
                label: `${val.toLocaleString()} Clicks per Click`,
                cost: 60000 * Math.pow(3, i),
                value: val
            });
        }
    }
    
    Game.autoUpgrades = [
        { id: 'auto-btn-1', label: 'Auto Clicker', cost: 200, value: 5 },
        { id: 'auto-btn-2', label: 'Super Auto Clicker', cost: 600, value: 10 },
        { id: 'auto-btn-3', label: 'Mega Auto Clicker', cost: 1200, value: 20 },
        { id: 'auto-btn-4', label: 'Ultra Auto Clicker', cost: 2000, value: 60 },
        { id: 'auto-btn-5', label: 'Godly Auto Clicker', cost: 10000, value: 100 },
        { id: 'auto-btn-6', label: 'Omega Auto Clicker', cost: 30000, value: 200 },
        { id: 'auto-btn-7', label: 'Ultimate Auto Clicker', cost: 80000, value: 400 },
        { id: 'auto-btn-8', label: 'Celestial Auto Clicker', cost: 200000, value: 900 },
        { id: 'auto-btn-9', label: 'Eternal Auto Clicker', cost: 500000, value: 1800 },
        { id: 'auto-btn-10', label: 'Infinite Auto Clicker', cost: 1200000, value: 3600 },
        { id: 'auto-btn-11', label: 'Mythic Auto Clicker', cost: 3000000, value: 7200 },
        { id: 'auto-btn-12', label: 'Divine Auto Clicker', cost: 8000000, value: 14400 },
        { id: 'auto-btn-13', label: 'Universal Auto Clicker', cost: 20000000, value: 28800 },
        { id: 'auto-btn-14', label: 'Galactic Auto Clicker', cost: 50000000, value: 57600 },
        { id: 'auto-btn-15', label: 'Cosmic Auto Clicker', cost: 120000000, value: 115200 },
        { id: 'auto-btn-16', label: 'Temporal Auto Clicker', cost: 240000000, value: 230400 },
        { id: 'auto-btn-17', label: 'Reality Auto Clicker', cost: 320000000, value: 460800 },
        { id: 'auto-btn-18', label: 'Void Auto Clicker', cost: 400000000, value: 921600 },
        { id: 'auto-btn-19', label: 'Alpha Auto Clicker', cost: 450000000, value: 1843200 },
        { id: 'auto-btn-20', label: 'Omega Star Auto Clicker', cost: 500000000, value: 2000000 }
    ];
}

// ============================================
// HELPER FUNCTIONS
// ============================================

const Utils = {
    formatNumber(n) {
        return Math.floor(n).toLocaleString();
    },
    
    getCurrentRebirthCost() {
        return 100000000 * Math.pow(5, Game.rebirths);
    },
    
    getCurrentUpgradeCost(baseCost) {
        return Math.floor(baseCost * Math.pow(1.05, Game.rebirths));
    },
    
    getSkinCost(skin) {
        if (skin.name === 'Radioactive' || skin.name === 'Board Gamer') {
            return skin.cost * Math.pow(5, Game.rebirths);
        }
        return skin.cost;
    },
    
    getWallpaperCost(wp) {
        return Math.floor(wp.cost * Math.pow(1.2, Game.rebirths));
    },
    
    showFloatingText(text, color) {
        const ft = document.createElement('div');
        ft.className = 'floating-text';
        ft.innerText = text;
        if (color) ft.style.color = color;
        const circle = document.getElementById('circle');
        const rect = circle.getBoundingClientRect();
        ft.style.left = `${rect.left + rect.width / 2}px`;
        ft.style.top = `${rect.top}px`;
        document.body.appendChild(ft);
        setTimeout(() => ft.remove(), 800);
    }
};

// ============================================
// CIRCLE & SHAPE MANAGEMENT
// ============================================

const CircleManager = {
    init() {
        this.circle = document.getElementById('circle');
        this.circleIcon = document.getElementById('circle-icon');
    },
    
    applySkin(skinName) {
        const skin = SKINS.find(s => s.name === skinName) || SKINS[0];
        
        this.circle.style.background = skin.bg;
        this.circleIcon.innerText = skin.icon;
        
        // Remove all special shape classes first
        const specialClasses = [
            'radioactive-can', 'donut-3d', 'controller-3d', 'robot-3d',
            'skull-3d', 'dice-3d', 'penguin-3d', 'monkey-3d', 'banana-3d',
            'egg-3d', 'rubiks-3d', 'computer-3d', 'book-3d', 'bacon-3d',
            'earth-3d', 'saver-matrix', 'saver-bsod', 'saver-static',
            'saver-space', 'saver-dvd', 'saver-night',
            'saver-simpsons', 'saver-toaster'
        ];
        this.circle.classList.remove(...specialClasses);
        this.circle.querySelectorAll('.cube-face').forEach(f => f.remove());
        
        // Apply special shapes
        if (skinName === 'Radioactive') this.circle.classList.add('radioactive-can');
        if (skinName === 'Donut') this.circle.classList.add('donut-3d');
        if (skinName === 'Mecha-Pad') this.circle.classList.add('controller-3d');
        if (skinName === 'Android') this.circle.classList.add('robot-3d');
        if (skinName === 'Skull') this.circle.classList.add('skull-3d');
        if (skinName === 'Board Gamer') this.circle.classList.add('dice-3d');
        if (skinName === 'Penguin') this.circle.classList.add('penguin-3d');
        if (skinName === 'Monkey') this.circle.classList.add('monkey-3d');
        if (skinName === 'Banana') this.circle.classList.add('banana-3d');
        if (skinName === 'Egg') this.circle.classList.add('egg-3d');
        if (skinName === 'Book') this.circle.classList.add('book-3d');
        if (skinName === 'Bacon') this.circle.classList.add('bacon-3d');
        if (skinName === 'Earth') this.circle.classList.add('earth-3d');
        if (skinName === 'Mars') this.circle.classList.add('mars-3d');
        if (skinName === 'Moon') this.circle.classList.add('moon-3d');
        if (skinName === 'Sun') this.circle.classList.add('sun-3d');
        
        // Rubik's Cube
        if (skinName === "Rubik's Cube") {
            this.circle.classList.add('rubiks-3d');
            const rubiksControls = document.getElementById('rubiks-controls');
            rubiksControls.classList.remove('hidden');
            for(let i=0; i<9; i++) {
                let face = document.createElement('div');
                face.className = 'cube-face';
                this.circle.appendChild(face);
            }
            CubeManager.applyPattern('solved');
        }
        
        // Computer
        if (skinName === 'Computer') {
            this.circle.classList.add('computer-3d');
            const computerControls = document.getElementById('computer-controls');
            computerControls.classList.remove('hidden');
            ScreensaverManager.apply('matrix');
        }
    },
    
    applyScreensaver(type) {
        if (type !== undefined) Game.currentScreensaver = type;
        ScreensaverManager.apply(type);
    },
    
    applyAura(type) {
        if (type !== undefined) Game.currentAura = type;
        const effect = document.getElementById('aura-effect');
        if (!effect) return;
        effect.className = '';
        if (Game.currentAura !== 'None') {
            effect.classList.add('active', `aura-${Game.currentAura.toLowerCase()}`);
        }
    }
};

// ============================================
// RUBIK'S CUBE MANAGER
// ============================================

const CubeManager = {
    currentPattern: 'solved',
    
    init() {
        const color1Input = document.getElementById('cube-color-1');
        const color2Input = document.getElementById('cube-color-2');
        color1Input.oninput = () => this.applyPattern(this.currentPattern);
        color2Input.oninput = () => this.applyPattern(this.currentPattern);
        
        document.querySelectorAll('.cube-btn').forEach(btn => {
            btn.onclick = () => this.applyPattern(btn.dataset.pattern);
        });
    },
    
    applyPattern(pattern) {
        this.currentPattern = pattern;
        const faces = document.querySelectorAll('.cube-face');
        if (faces.length < 9) return;
        
        const colors = ['#fff', '#f90', '#009b48', '#b71234', '#ffd500', '#0046ad'];
        const color1 = document.getElementById('cube-color-1').value;
        const color2 = document.getElementById('cube-color-2').value;
        const colorContainer = document.getElementById('checker-colors');
        
        if (pattern !== 'chaos') {
            colorContainer.classList.remove('hidden');
        } else {
            colorContainer.classList.add('hidden');
        }
        
        faces.forEach((face, i) => {
            let color = '#fff';
            if (pattern === 'solved') color = color1;
            else if (pattern === 'checker') color = (i % 2 === 0) ? color1 : color2;
            else if (pattern === 'cross') color = (i % 2 === 1 || i === 4) ? color1 : color2;
            else if (pattern === 'dot') color = (i === 4) ? color2 : color1;
            else color = colors[Math.floor(Math.random() * colors.length)];
            
            face.style.setProperty('--c1', color);
        });
    }
};

// ============================================
// SCREENSAVER MANAGER
// ============================================

const ScreensaverManager = {
    apply(type) {
        const circle = document.getElementById('circle');
        const monitor = document.getElementById('wallpaper-monitor');
        
        const allSavers = [
            'saver-matrix', 'saver-bsod', 'saver-static', 'saver-retro',
            'saver-space', 'saver-dvd', 'saver-night', 'saver-simpsons',
            'saver-toaster'
        ];
        
        allSavers.forEach(s => {
            circle.classList.remove(s);
            monitor.classList.remove(s);
        });
        
        // Update current screensaver
        Game.currentScreensaver = type || '';
        
        if (type && type !== '') {
            const cls = `saver-${type}`;
            if (Game.currentSkin === 'Computer') circle.classList.add(cls);
            if (Game.currentWallpaper === 'RGB Setup') monitor.classList.add(cls);
            
            if (type !== undefined) {
                Utils.showFloatingText(`${type.toUpperCase()} LOADED`, "cyan");
            }
        }
    },
    
    init() {
        document.querySelectorAll('.comp-btn').forEach(btn => {
            btn.onclick = () => this.apply(btn.dataset.saver);
        });
    }
};

// ============================================
// ============================================
// BOARDGAME SYSTEM
// ============================================

const BoardgameSystem = {
    spaceCoordinates: [
        {r: 1, c: 1}, {r: 1, c: 2}, {r: 1, c: 3}, {r: 1, c: 4}, {r: 1, c: 5},
        {r: 2, c: 5}, {r: 3, c: 5}, {r: 4, c: 5}, {r: 5, c: 5},
        {r: 5, c: 4}, {r: 5, c: 3}, {r: 5, c: 2}, {r: 5, c: 1},
        {r: 4, c: 1}, {r: 3, c: 1}, {r: 2, c: 1}
    ],
    
    init() {
        this.gameBoard = document.getElementById('game-board');
        this.diceDisplay = document.getElementById('dice');
        this.rollBtn = document.getElementById('roll-btn');
        this.playerToken = document.getElementById('player-token');
        this.boardModal = document.getElementById('boardgame-modal');
        
        this.rollBtn.onclick = () => this.rollDice();
        
        document.getElementById('open-board-btn').onclick = () => this.boardModal.classList.remove('hidden');
        document.getElementById('close-board-btn').onclick = () => this.boardModal.classList.add('hidden');
        
        this.initBoard();
    },
    
    initBoard() {
        this.gameBoard.querySelectorAll('.board-space').forEach(s => s.remove());
        this.diceDisplay.innerText = '?';
        Game.boardSpaces = [];
        const types = ['start', 'reward', 'hazard', 'mystery', 'reward', 'reward', 'hazard', 'reward', 'ambush', 'reward', 'hazard', 'reward', 'mystery', 'reward', 'hazard', 'ambush'];
        
        this.spaceCoordinates.forEach((coord, i) => {
            const space = document.createElement('div');
            space.className = `board-space space-${types[i]}`;
            space.style.gridRow = coord.r;
            space.style.gridColumn = coord.c;
            space.innerText = types[i].toUpperCase();
            this.gameBoard.appendChild(space);
            Game.boardSpaces.push({ type: types[i], coord: coord });
        });
        
        this.updateTokenPosition();
    },
    
    updateTokenPosition() {
        const targetSpace = Game.boardSpaces[Game.playerPosition];
        if (targetSpace) {
            this.playerToken.style.top = `${(targetSpace.coord.r - 1) * 90 + 40}px`;
            this.playerToken.style.left = `${(targetSpace.coord.c - 1) * 90 + 40}px`;
        }
    },
    
    async rollDice() {
        if (this.rollBtn.disabled || Game.isPaused) return;
        if (Game.count < 100000) {
            alert(`Not enough clicks! Roll costs 100,000 clicks.`);
            return;
        }
        
        Game.count -= 100000;
        Utils.updateDisplay();
        this.rollBtn.disabled = true;
        this.diceDisplay.classList.add('dice-rolling');
        
        const roll = Math.floor(Math.random() * 6) + 1;
        await new Promise(r => setTimeout(r, 1000));
        this.diceDisplay.classList.remove('dice-rolling');
        this.diceDisplay.innerText = roll;
        
        for (let i = 0; i < roll; i++) {
            Game.playerPosition = (Game.playerPosition + 1) % Game.boardSpaces.length;
            this.updateTokenPosition();
            await new Promise(r => setTimeout(r, 300));
        }
        
        this.handleSpaceEffect(Game.boardSpaces[Game.playerPosition].type);
        this.rollBtn.disabled = false;
    },
    
    handleSpaceEffect(type) {
        const currentBank = Math.max(Game.count, 1000);
        
        if (type === 'reward') {
            const rewardMult = 1.2 + Math.random() * 0.3;
            const gain = Math.floor(currentBank * rewardMult);
            Game.count += gain;
            Utils.showFloatingText(`+${Utils.formatNumber(gain)}`);
            Utils.updateDisplay();
        } else if (type === 'hazard') {
            const penalty = Math.floor(Game.count * 0.005);
            Game.count -= penalty;
            Utils.showFloatingText(`-${Utils.formatNumber(penalty)}`, "red");
            Utils.updateDisplay();
            alert(`HAZARD! You lost ${Utils.formatNumber(penalty)} clicks.`);
        } else if (type === 'ambush') {
            this.boardModal.classList.add('hidden');
            BattleSystem.triggerForcedBattle();
        } else if (type === 'mystery') {
            if (Math.random() < 0.02) {
                this.giveMysteryReward();
            } else {
                alert("The mystery space was empty this time...");
            }
        }
    },

    giveMysteryReward() {
        const nonRareSkins = SKINS.filter(s => s.cost <= 1000000 && !Game.ownedSkins.includes(s.name));
        const nonRareWallpapers = WALLPAPERS.filter(w => w.cost <= 100000 && !Game.ownedWallpapers.includes(w.name));
        const nonRareAuras = AURAS.filter(a => a.cost <= 500000 && !Game.ownedAuras.includes(a.name));
        
        const allRewards = [
            ...nonRareSkins.map(s => ({ type: 'skin', item: s })),
            ...nonRareWallpapers.map(w => ({ type: 'wallpaper', item: w })),
            ...nonRareAuras.map(a => ({ type: 'aura', item: a }))
        ];
        
        if (allRewards.length === 0) {
            alert("You found a mystery, but you already own everything it could give!");
            return;
        }
        
        const reward = allRewards[Math.floor(Math.random() * allRewards.length)];
        
        if (reward.type === 'skin') {
            Game.ownedSkins.push(reward.item.name);
            alert(`JACKPOT! You found a MYSTERY SKIN: ${reward.item.name}!`);
        } else if (reward.type === 'wallpaper') {
            Game.ownedWallpapers.push(reward.item.name);
            alert(`JACKPOT! You found a MYSTERY WALLPAPER: ${reward.item.name}!`);
        } else if (reward.type === 'aura') {
            Game.ownedAuras.push(reward.item.name);
            alert(`JACKPOT! You found a MYSTERY AURA: ${reward.item.name}!`);
        }
        
        Utils.updateDisplay();
    }
};

// ============================================
// BATTLE SYSTEM
// ============================================

const BattleSystem = {
    init() {
        this.overlay = document.getElementById('battle-overlay');
        this.npcNameDisplay = document.getElementById('npc-name');
        this.hpBar = document.getElementById('hp-bar');
        this.hpText = document.getElementById('hp-text');
        this.battleTimerDisplay = document.getElementById('battle-timer');
        this.battleTimerInterval = null;
        this.nextBattleTimeout = null;
        
        this.scheduleNextBattle();
    },
    
    scheduleNextBattle() {
        if (Game.isPaused) return;
        const minDelay = 30000;
        const maxDelay = 480000;
        const randomDelay = minDelay + Math.random() * (maxDelay - minDelay);
        
        if (this.nextBattleTimeout) clearTimeout(this.nextBattleTimeout);
        this.nextBattleTimeout = setTimeout(() => this.triggerForcedBattle(), randomDelay);
    },
    
    triggerForcedBattle() {
        if (Game.inBattle || Game.isPaused) return;
        
        const randRoll = Math.random() * 100;
        let randomNPC;
        if (randRoll < 50) randomNPC = NPCS[0];
        else if (randRoll < 80) randomNPC = NPCS[1];
        else if (randRoll < 95) randomNPC = NPCS[2];
        else randomNPC = NPCS[3];
        
        const dps = (Game.clickValue * 5) + (Game.autoClickerValue / 2);
        const multiplier = Math.pow(2, Game.rebirths);
        const power = dps * multiplier;
        
        let secondsToKill = 10;
        let finalReward;
        const currentBank = Math.max(Game.count, 1000);
        const variance = (Math.random() * 0.4) + 0.8;
        
        if (randomNPC.name.includes('Medium')) {
            secondsToKill = 20;
            finalReward = Math.floor(currentBank * 1.5 * variance);
        } else if (randomNPC.name.includes('Hard')) {
            secondsToKill = 35;
            finalReward = Math.floor(currentBank * 5 * variance);
        } else if (randomNPC.name.includes('Boss')) {
            secondsToKill = 50;
            finalReward = Math.floor(currentBank * 15 * variance);
        } else {
            finalReward = Math.floor(currentBank * 0.8 * variance);
        }
        
        const scaledHP = Math.floor(power * secondsToKill);
        const finalHP = Math.max(scaledHP, 100);
        
        Game.currentNPC = { ...randomNPC, maxHP: finalHP, currentHP: finalHP, time: secondsToKill + 10, reward: finalReward };
        this.enterBattle();
    },
    
    enterBattle() {
        Game.inBattle = true;
        this.overlay.classList.remove('hidden');
        document.getElementById('circle').classList.add('in-battle');
        this.npcNameDisplay.innerText = `AMBUSH! ${Game.currentNPC.name}`;
        Game.battleTimeLeft = Game.currentNPC.time;
        this.battleTimerDisplay.innerText = `Time Left: ${Game.battleTimeLeft}s`;
        this.updateHPDisplay();
        
        if (this.battleTimerInterval) clearInterval(this.battleTimerInterval);
        this.battleTimerInterval = setInterval(() => {
            Game.battleTimeLeft--;
            this.battleTimerDisplay.innerText = `Time Left: ${Game.battleTimeLeft}s`;
            if (Game.battleTimeLeft <= 0) this.loseBattle();
        }, 1000);
    },
    
    updateHPDisplay() {
        const hpPercent = Math.max(0, (Game.currentNPC.currentHP / Game.currentNPC.maxHP) * 100);
        this.hpBar.style.width = `${hpPercent}%`;
        this.hpText.innerText = `${Math.floor(Math.max(0, Game.currentNPC.currentHP)).toLocaleString()} / ${Game.currentNPC.maxHP.toLocaleString()}`;
    },
    
    winBattle() {
        clearInterval(this.battleTimerInterval);
        Game.inBattle = false;
        this.overlay.classList.add('hidden');
        document.getElementById('circle').classList.remove('in-battle');
        Game.count += Game.currentNPC.reward;
        Utils.updateDisplay();
        alert(`VICTORY! You defeated ${Game.currentNPC.name} and earned ${Utils.formatNumber(Game.currentNPC.reward)} clicks!`);
        Game.currentNPC = null;
        this.scheduleNextBattle();
    },
    
    loseBattle() {
        clearInterval(this.battleTimerInterval);
        Game.inBattle = false;
        this.overlay.classList.add('hidden');
        document.getElementById('circle').classList.remove('in-battle');
        const penalty = Math.floor(Game.count * 0.01);
        Game.count -= penalty;
        Utils.updateDisplay();
        alert(`${Game.currentNPC.name} escaped! You lost ${Utils.formatNumber(penalty)} clicks.`);
        Game.currentNPC = null;
        this.scheduleNextBattle();
    }
};

// ============================================
// SHOP SYSTEM
// ============================================

const ShopSystem = {
    init() {
        this.modal = document.getElementById('skin-modal');
        this.shopTitle = document.getElementById('shop-title');
        
        this.skinList = document.getElementById('skin-list');
        this.wallpaperList = document.getElementById('wallpaper-list');
        this.soundList = document.getElementById('sound-list');
        this.auraList = document.getElementById('aura-list');
        
        document.getElementById('open-skins-btn').onclick = () => this.openShop('skins');
        document.getElementById('open-wallpapers-btn').onclick = () => this.openShop('wallpapers');
        document.getElementById('open-sounds-btn').onclick = () => this.openShop('sounds');
        document.getElementById('open-auras-btn').onclick = () => this.openShop('auras');
        document.getElementById('close-skins-btn').onclick = () => this.modal.classList.add('hidden');
        
        window.onclick = (e) => {
            if (e.target === this.modal) this.modal.classList.add('hidden');
        };
    },
    
    openShop(tab) {
        this.shopTitle.innerText = this.getShopTitle(tab);
        
        // Hide all tabs first
        this.skinList.classList.add('hidden');
        this.wallpaperList.classList.add('hidden');
        this.soundList.classList.add('hidden');
        this.auraList.classList.add('hidden');
        
        // Show selected tab
        if (tab === 'skins') this.skinList.classList.remove('hidden');
        if (tab === 'wallpapers') this.wallpaperList.classList.remove('hidden');
        if (tab === 'sounds') this.soundList.classList.remove('hidden');
        if (tab === 'auras') this.auraList.classList.remove('hidden');
        
        this.modal.classList.remove('hidden');
        
        // Render based on tab
        if (tab === 'skins') this.renderSkinsOnly();
        if (tab === 'wallpapers') this.renderWallpapersOnly();
        if (tab === 'sounds') this.renderSoundsOnly();
        if (tab === 'auras') this.renderAurasOnly();
    },
    
    getShopTitle(tab) {
        const titles = {
            skins: 'Skin Shop',
            wallpapers: 'Wallpaper Shop',
            sounds: 'Sound Effects',
            auras: 'Aura Shop'
        };
        return titles[tab];
    },
    
    renderSkinsOnly() {
        this.skinList.innerHTML = '';
        SKINS.forEach(skin => {
            const skinItem = document.createElement('div');
            skinItem.className = `skin-item ${Game.ownedSkins.includes(skin.name) ? 'owned' : ''} ${Game.currentSkin === skin.name ? 'equipped' : ''}`;
            
            const preview = document.createElement('div');
            preview.className = 'skin-preview';
            preview.style.background = skin.bg;
            preview.style.display = 'flex';
            preview.style.justifyContent = 'center';
            preview.style.alignItems = 'center';
            preview.style.fontSize = '2rem';
            preview.innerText = skin.icon;
            
            const name = document.createElement('span');
            name.innerText = skin.name;
            name.style.fontWeight = 'bold';
            
            skinItem.appendChild(preview);
            skinItem.appendChild(name);
            
            const costVal = Utils.getSkinCost(skin);
            
            if (Game.currentSkin === skin.name) {
                const label = document.createElement('span');
                label.className = 'equipped-label';
                label.innerText = 'Equipped';
                skinItem.appendChild(label);
            } else if (Game.ownedSkins.includes(skin.name)) {
                const equipBtn = document.createElement('button');
                equipBtn.className = 'equip-btn';
                equipBtn.innerText = 'Equip';
                equipBtn.onclick = () => {
                    Game.currentSkin = skin.name;
                    CircleManager.applySkin(skin.name);
                    this.renderSkinsOnly();
                    Utils.updateDisplay();
                };
                skinItem.appendChild(equipBtn);
            } else {
                const cost = document.createElement('span');
                cost.className = 'skin-cost';
                cost.innerText = `${Utils.formatNumber(costVal)} Clicks`;
                const buyBtn = document.createElement('button');
                buyBtn.className = 'buy-btn';
                buyBtn.innerText = 'Buy';
                buyBtn.disabled = Game.count < costVal || Game.isPaused;
                buyBtn.onclick = () => {
                    if (Game.count >= costVal) {
                        Game.count -= costVal;
                        Game.ownedSkins.push(skin.name);
                        this.renderSkinsOnly();
                        Utils.updateDisplay();
                    }
                };
                skinItem.appendChild(cost);
                skinItem.appendChild(buyBtn);
            }
            
            this.skinList.appendChild(skinItem);
        });
    },
    
    renderWallpapersOnly() {
        this.wallpaperList.innerHTML = '';
        WALLPAPERS.forEach(wp => {
            const wpItem = document.createElement('div');
            wpItem.className = `skin-item ${Game.ownedWallpapers.includes(wp.name) ? 'owned' : ''} ${Game.currentWallpaper === wp.name ? 'equipped' : ''}`;
            
            const preview = document.createElement('div');
            preview.className = 'skin-preview';
            preview.style.background = wp.bg;
            
            const name = document.createElement('span');
            name.innerText = wp.name;
            name.style.fontWeight = 'bold';
            
            wpItem.appendChild(preview);
            wpItem.appendChild(name);
            
            const costVal = Utils.getWallpaperCost(wp);
            
            if (Game.currentWallpaper === wp.name) {
                const label = document.createElement('span');
                label.className = 'equipped-label';
                label.innerText = 'Equipped';
                wpItem.appendChild(label);
            } else if (Game.ownedWallpapers.includes(wp.name)) {
                const equipBtn = document.createElement('button');
                equipBtn.className = 'equip-btn';
                equipBtn.innerText = 'Equip';
                equipBtn.onclick = () => {
                    Game.currentWallpaper = wp.name;
                    document.body.style.background = wp.bg;
                    if (Game.currentWallpaper === 'RGB Setup') {
                        ScreensaverManager.apply('matrix');
                    } else if (Game.currentSkin !== 'Computer') {
                        ScreensaverManager.apply('');
                    }
                    this.renderWallpapersOnly();
                    Utils.updateDisplay();
                };
                wpItem.appendChild(equipBtn);
            } else {
                const cost = document.createElement('span');
                cost.className = 'skin-cost';
                cost.innerText = `${Utils.formatNumber(costVal)} Clicks`;
                const buyBtn = document.createElement('button');
                buyBtn.className = 'buy-btn';
                buyBtn.innerText = 'Buy';
                buyBtn.disabled = Game.count < costVal || Game.isPaused;
                buyBtn.onclick = () => {
                    if (Game.count >= costVal) {
                        Game.count -= costVal;
                        Game.ownedWallpapers.push(wp.name);
                        this.renderWallpapersOnly();
                        Utils.updateDisplay();
                    }
                };
                wpItem.appendChild(cost);
                wpItem.appendChild(buyBtn);
            }
            
            this.wallpaperList.appendChild(wpItem);
        });
    },
    
    renderSoundsOnly() {
        this.soundList.innerHTML = '';
        SOUNDS.forEach(sound => {
            const soundItem = document.createElement('div');
            soundItem.className = `skin-item ${Game.ownedSounds.includes(sound.name) ? 'owned' : ''} ${Game.currentSound === sound.name ? 'equipped' : ''}`;
            
            const preview = document.createElement('div');
            preview.className = 'skin-preview';
            preview.style.background = 'linear-gradient(135deg, #ff9966, #ff5e62)';
            preview.style.display = 'flex';
            preview.style.justifyContent = 'center';
            preview.style.alignItems = 'center';
            preview.innerHTML = '<span style="font-size: 1.5rem; color: white;">♪</span>';
            
            const name = document.createElement('span');
            name.innerText = sound.name;
            name.style.fontWeight = 'bold';
            
            soundItem.appendChild(preview);
            soundItem.appendChild(name);
            
            if (Game.currentSound === sound.name) {
                const label = document.createElement('span');
                label.className = 'equipped-label';
                label.innerText = 'Active';
                soundItem.appendChild(label);
            } else if (Game.ownedSounds.includes(sound.name)) {
                const equipBtn = document.createElement('button');
                equipBtn.className = 'equip-btn';
                equipBtn.innerText = 'Select';
                equipBtn.onclick = () => {
                    Game.currentSound = sound.name;
                    AudioSystem.playSound(sound.name);
                    this.renderSoundsOnly();
                };
                soundItem.appendChild(equipBtn);
            } else {
                const cost = document.createElement('span');
                cost.className = 'skin-cost';
                cost.innerText = `${Utils.formatNumber(sound.cost)} Clicks`;
                const buyBtn = document.createElement('button');
                buyBtn.className = 'buy-btn';
                buyBtn.innerText = 'Buy';
                buyBtn.disabled = Game.count < sound.cost || Game.isPaused;
                buyBtn.onclick = () => {
                    if (Game.count >= sound.cost) {
                        Game.count -= sound.cost;
                        Game.ownedSounds.push(sound.name);
                        this.renderSoundsOnly();
                        Utils.updateDisplay();
                    }
                };
                soundItem.appendChild(cost);
                soundItem.appendChild(buyBtn);
            }
            
            this.soundList.appendChild(soundItem);
        });
    },
    
    renderAurasOnly() {
        this.auraList.innerHTML = '';
        AURAS.forEach(aura => {
            const auraItem = document.createElement('div');
            auraItem.className = `skin-item ${Game.ownedAuras.includes(aura.name) ? 'owned' : ''} ${Game.currentAura === aura.name ? 'equipped' : ''}`;
            
            const preview = document.createElement('div');
            preview.className = 'skin-preview';
            preview.style.background = 'linear-gradient(135deg, #eee, #ccc)';
            preview.style.display = 'flex';
            preview.style.justifyContent = 'center';
            preview.style.alignItems = 'center';
            preview.innerHTML = '<span style="font-size: 1.5rem;">✨</span>';
            
            const name = document.createElement('span');
            name.innerText = aura.name;
            name.style.fontWeight = 'bold';
            
            auraItem.appendChild(preview);
            auraItem.appendChild(name);
            
            if (Game.currentAura === aura.name) {
                const label = document.createElement('span');
                label.className = 'equipped-label';
                label.innerText = 'Equipped';
                auraItem.appendChild(label);
            } else if (Game.ownedAuras.includes(aura.name)) {
                const equipBtn = document.createElement('button');
                equipBtn.className = 'equip-btn';
                equipBtn.innerText = 'Equip';
                equipBtn.onclick = () => {
                    CircleManager.applyAura(aura.name);
                    this.renderAurasOnly();
                    Utils.updateDisplay();
                };
                auraItem.appendChild(equipBtn);
            } else {
                const cost = document.createElement('span');
                cost.className = 'skin-cost';
                cost.innerText = `${Utils.formatNumber(aura.cost)} Clicks`;
                const buyBtn = document.createElement('button');
                buyBtn.className = 'buy-btn';
                buyBtn.innerText = 'Buy';
                buyBtn.disabled = Game.count < aura.cost || Game.isPaused;
                buyBtn.onclick = () => {
                    if (Game.count >= aura.cost) {
                        Game.count -= aura.cost;
                        Game.ownedAuras.push(aura.name);
                        this.renderAurasOnly();
                        Utils.updateDisplay();
                    }
                };
                auraItem.appendChild(cost);
                auraItem.appendChild(buyBtn);
            }
            
            this.auraList.appendChild(auraItem);
        });
    }
};

// ============================================
// OWNER SYSTEM (SECRET)
// ============================================

const OwnerSystem = {
    isUnlocked: false,
    inputBuffer: '',

    init() {
        // Check if previously unlocked
        try {
            if (localStorage.getItem('dev_access') === 'true') {
                this.isUnlocked = true;
            }
        } catch (e) {}

        window.addEventListener('keydown', (e) => {
            // 1. Handle "9" for immediate ambush
            if (e.key === '9') {
                if (this.isUnlocked && !Game.inBattle && !Game.isPaused) {
                    BattleSystem.triggerForcedBattle();
                    Utils.showFloatingText("FORCED AMBUSH", "red");
                }
            }

            // 2. Buffer letter keys for secret words
            if (e.key.length === 1) {
                this.inputBuffer += e.key.toLowerCase();
                if (this.inputBuffer.length > 50) this.inputBuffer = this.inputBuffer.slice(-20);

                // Check for UNLOCK code
                if (this.inputBuffer.endsWith('unlockdev')) {
                    this.isUnlocked = true;
                    try { localStorage.setItem('dev_access', 'true'); } catch (err) {}
                    Utils.showFloatingText("OWNER ACCESS GRANTED", "gold");
                    this.inputBuffer = '';
                }

                // Check for MONEY code
                if (this.inputBuffer.endsWith('money')) {
                    if (this.isUnlocked) {
                        const cb = document.getElementById('cheat-bar');
                        cb.classList.toggle('hidden');
                        if (!cb.classList.contains('hidden')) {
                            cb.focus();
                            Utils.showFloatingText("MONEY BAR OPEN", "gold");
                        }
                    }
                    this.inputBuffer = '';
                }
            }
        });

        // Setup cheat bar behavior
        const cheatBar = document.getElementById('cheat-bar');
        cheatBar.addEventListener('input', (e) => {
            const valInput = parseInt(e.target.value);
            if (!isNaN(valInput)) {
                Game.count = valInput;
                Utils.updateDisplay();
            }
        });
        cheatBar.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                cheatBar.classList.add('hidden');
                cheatBar.value = '';
                cheatBar.blur();
            }
        });
    }
};

// ============================================
// UPGRADE SYSTEM
// ============================================

const UpgradeSystem = {
    init() {
        this.upgradeContainer = document.getElementById('upgrade-container');
        this.rebirthRow = document.getElementById('rebirth-row');
        this.rebirthBtn = document.getElementById('rebirth-btn');
        
        this.initButtons();
        
        this.rebirthBtn.onclick = () => this.rebirth();
        
        document.getElementById('pause-btn').onclick = () => this.togglePause();
        document.getElementById('overlay-resume-btn').onclick = () => this.togglePause();
        
        document.getElementById('toggle-clock-cb').onchange = (e) => {
            Game.showPauseClock = e.target.checked;
            const clockEl = document.getElementById('pause-clock');
            if (clockEl) {
                if (Game.showPauseClock) {
                    clockEl.classList.remove('hidden');
                } else {
                    clockEl.classList.add('hidden');
                }
            }
        };
    },
    
    initButtons() {
        this.upgradeContainer.innerHTML = '';
        
        // Manual upgrades - Only show the current level
        if (Game.manualLevel < Game.manualUpgrades.length) {
            const up = Game.manualUpgrades[Game.manualLevel];
            const btn = document.createElement('button');
            btn.id = up.id;
            const currentCost = Utils.getCurrentUpgradeCost(up.cost);
            btn.innerText = `${up.label} (Cost: ${Utils.formatNumber(currentCost)})`;
            btn.addEventListener('click', () => this.buyManualUpgrade(up, currentCost));
            this.upgradeContainer.appendChild(btn);
        }
        
        // Auto upgrades - Only show the current level
        if (Game.autoLevel < Game.autoUpgrades.length) {
            const up = Game.autoUpgrades[Game.autoLevel];
            const btn = document.createElement('button');
            btn.id = up.id;
            const currentCost = Utils.getCurrentUpgradeCost(up.cost);
            btn.innerText = `${up.label} (Cost: ${Utils.formatNumber(currentCost)})`;
            btn.addEventListener('click', () => this.buyAutoUpgrade(up, currentCost));
            this.upgradeContainer.appendChild(btn);
        }
        
        this.upgradeContainer.appendChild(this.rebirthRow);
    },
    
    buyManualUpgrade(upgrade, cost) {
        if (Game.count >= cost && Game.manualUpgrades[Game.manualLevel].id === upgrade.id) {
            Game.count -= cost;
            Game.clickValue = upgrade.value;
            Game.manualLevel++;
            this.initButtons(); // Show the next upgrade
            Utils.updateDisplay();
        }
    },
    
    buyAutoUpgrade(upgrade, cost) {
        if (Game.count >= cost && Game.autoUpgrades[Game.autoLevel].id === upgrade.id) {
            Game.count -= cost;
            Game.autoClickerValue = upgrade.value;
            Game.autoLevel++;
            
            if (Game.autoLevel === 1) {
                this.startAutoClicker();
            }
            
            this.initButtons(); // Show the next upgrade
            Utils.updateDisplay();
        }
    },
    
    startAutoClicker() {
        if (Game.autoClickerInterval) clearInterval(Game.autoClickerInterval);
        Game.autoClickerInterval = setInterval(() => this.clickCircle(true), 3000);
    },
    
    clickCircle(isAuto = false) {
        if (Game.isPaused) return;
        
        AudioSystem.playSound(Game.currentSound);
        
        const multiplier = Math.pow(2, Game.rebirths);
        let val = isAuto ? Game.autoClickerValue : Game.clickValue;
        
        // Radioactive skin: 5% double chance
        if (Game.currentSkin === 'Radioactive' && !isAuto) {
            if (Math.random() < 0.05) {
                val *= 2;
                Utils.showFloatingText("RADIOACTIVE 2X!", "lime");
            }
        }
        
        // Thunder aura: 5% double chance
        if (Game.currentAura === 'Thunder' && !isAuto) {
            if (Math.random() < 0.05) {
                val *= 2;
                Utils.showFloatingText("THUNDER STRIKE 2X!", "yellow");
            }
        }
        
        if (Game.inBattle && Game.currentNPC) {
            const damage = val * multiplier;
            Game.currentNPC.currentHP -= damage;
            BattleSystem.updateHPDisplay();
            
            const circle = document.getElementById('circle');
            circle.classList.remove('hit');
            void circle.offsetWidth;
            circle.classList.add('hit');
            
            if (Game.currentNPC.currentHP <= 0) {
                BattleSystem.winBattle();
            }
        } else {
            Game.count += val * multiplier;
            Utils.updateDisplay();
            
            if (Game.currentSkin === 'Default' && !isAuto) {
                const hue = Math.floor(Math.random() * 360);
                document.getElementById('circle').style.background = `linear-gradient(135deg, hsl(${hue}, 70%, 70%), hsl(${(hue + 40) % 360}, 70%, 60%))`;
            }
            
            const circle = document.getElementById('circle');
            circle.classList.remove('pop');
            void circle.offsetWidth;
            circle.classList.add('pop');
        }
    },
    
    togglePause() {
        Game.isPaused = !Game.isPaused;
        const pauseBtn = document.getElementById('pause-btn');
        
        if (Game.isPaused) {
            pauseBtn.innerText = "Resume";
            pauseBtn.classList.add('paused');
            if (Game.autoClickerInterval) clearInterval(Game.autoClickerInterval);
            if (BattleSystem.battleTimerInterval) clearInterval(BattleSystem.battleTimerInterval);
            if (BattleSystem.nextBattleTimeout) clearTimeout(BattleSystem.nextBattleTimeout);
            
            // Start clock interval
            if (Game.clockInterval) clearInterval(Game.clockInterval);
            const updateClock = () => {
                const clockEl = document.getElementById('pause-clock');
                if (clockEl) {
                    const now = new Date();
                    clockEl.innerText = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
                }
            };
            updateClock();
            Game.clockInterval = setInterval(updateClock, 1000);
        } else {
            pauseBtn.innerText = "Pause";
            pauseBtn.classList.remove('paused');
            if (Game.autoLevel > 0) this.startAutoClicker();
            
            if (Game.inBattle) {
                BattleSystem.battleTimerInterval = setInterval(() => {
                    Game.battleTimeLeft--;
                    BattleSystem.battleTimerDisplay.innerText = `Time Left: ${Game.battleTimeLeft}s`;
                    if (Game.battleTimeLeft <= 0) BattleSystem.loseBattle();
                }, 1000);
            } else {
                BattleSystem.scheduleNextBattle();
            }
            
            // Clear clock interval
            if (Game.clockInterval) {
                clearInterval(Game.clockInterval);
                Game.clockInterval = null;
            }
        }
        
        Utils.updateDisplay();
    },
    
    rebirth() {
        const costRebirth = Utils.getCurrentRebirthCost();
        if (Game.count >= costRebirth) {
            Game.rebirths++;
            
            // Generate more Manual Upgrades
            const lastManual = Game.manualUpgrades[Game.manualUpgrades.length - 1];
            for (let i = 1; i <= 3; i++) {
                const nextVal = lastManual.value * Math.pow(2, i);
                Game.manualUpgrades.push({
                    id: `upgrade-btn-${Game.manualUpgrades.length + 1}`,
                    label: `${nextVal.toLocaleString()} Clicks per Click`,
                    cost: Math.floor(lastManual.cost * Math.pow(2.5, i)),
                    value: nextVal
                });
            }
            
            // Generate more Auto Upgrades
            const lastAuto = Game.autoUpgrades[Game.autoUpgrades.length - 1];
            for (let i = 1; i <= 3; i++) {
                const nextVal = lastAuto.value * Math.pow(2, i);
                Game.autoUpgrades.push({
                    id: `auto-btn-${Game.autoUpgrades.length + 1}`,
                    label: `Elite Auto Tier ${Game.autoUpgrades.length + 1}`,
                    cost: Math.floor(lastAuto.cost * Math.pow(1.8, i)),
                    value: nextVal
                });
            }
            
            // Reset everything
            Game.count = 0;
            Game.clickValue = 1;
            Game.autoClickerValue = 0;
            Game.manualLevel = 0;
            Game.autoLevel = 0;
            Game.ownedSkins = ['Default'];
            Game.ownedWallpapers = ['Default'];
            Game.ownedSounds = ['None'];
            Game.ownedAuras = ['None'];
            Game.currentSkin = 'Default';
            Game.currentWallpaper = 'Default';
            Game.currentSound = 'None';
            Game.currentAura = 'None';
            
            CircleManager.applySkin('Default');
            document.body.style.background = '#f0f2f5';
            CircleManager.applyAura('None');
            document.getElementById('circle-icon').innerText = '';
            document.getElementById('circle').classList.remove(
                'radioactive-can', 'donut-3d', 'controller-3d', 'robot-3d',
                'skull-3d', 'dice-3d', 'penguin-3d', 'monkey-3d', 'banana-3d',
                'egg-3d', 'rubiks-3d', 'computer-3d', 'book-3d', 'bacon-3d',
                'earth-3d', 'saver-matrix', 'saver-bsod', 'saver-static',
                'saver-retro', 'saver-space', 'saver-dvd', 'saver-night',
                'saver-simpsons', 'saver-toaster'
            );
            document.getElementById('circle').querySelectorAll('.cube-face').forEach(f => f.remove());
            document.getElementById('rubiks-controls').classList.add('hidden');
            document.getElementById('computer-controls').classList.add('hidden');
            document.getElementById('circle').style.background = 'linear-gradient(135deg, #6e8efb, #a777e3)';
            
            if (Game.autoClickerInterval) clearInterval(Game.autoClickerInterval);
            Game.autoClickerInterval = null;
            
            this.initButtons();
            Utils.updateDisplay();
            
            alert(`Congratulations! You have rebirthed! Multiplier: ${Math.pow(2, Game.rebirths)}x. Next: ${Utils.formatNumber(costRebirth)}!`);
            BattleSystem.scheduleNextBattle();
        }
    }
};

// ============================================
// MAIN UI UPDATES
// ============================================

Utils.updateDisplay = function() {
    const counterDisplay = document.getElementById('counter');
    const rebirthDisplay = document.getElementById('rebirth-count');
    const boardgameEntry = document.getElementById('boardgame-entry');
    const rubiksControls = document.getElementById('rubiks-controls');
    const computerControls = document.getElementById('computer-controls');
    const monitor = document.getElementById('wallpaper-monitor');
    const pauseBtn = document.getElementById('pause-btn');
    
    counterDisplay.innerText = Utils.formatNumber(Game.count);
    rebirthDisplay.innerText = `Rebirths: ${Game.rebirths}`;
    
    const rebirthBtn = document.getElementById('rebirth-btn');
    let rebCost = Utils.getCurrentRebirthCost();
    rebirthBtn.innerText = `Rebirth (Cost: ${Utils.formatNumber(rebCost)})`;
    
    // Board game entry
    if (Game.ownedSkins.includes('Board Gamer')) {
        boardgameEntry.classList.remove('hidden');
    } else {
        boardgameEntry.classList.add('hidden');
    }
    
    // Rubik's controls
    if (Game.currentSkin === "Rubik's Cube") {
        rubiksControls.classList.remove('hidden');
    } else {
        rubiksControls.classList.add('hidden');
    }
    
    // Computer controls
    if (Game.currentSkin === 'Computer' || Game.currentWallpaper === 'RGB Setup') {
        computerControls.classList.remove('hidden');
    } else {
        computerControls.classList.add('hidden');
    }
    
    // Monitor
    if (Game.currentWallpaper === 'RGB Setup') {
        monitor.classList.remove('hidden');
    } else {
        monitor.classList.add('hidden');
    }
    
    // Pause button state (keep enabled so the user can click it to resume)
    pauseBtn.disabled = false;
    
    // Newton's Cradle Pause Overlay
    const pauseOverlay = document.getElementById('pause-overlay');
    if (Game.isPaused) {
        pauseOverlay.classList.remove('hidden');
        
        // Ensure clock element and checkbox match Game.showPauseClock
        const clockEl = document.getElementById('pause-clock');
        const clockCheckbox = document.getElementById('toggle-clock-cb');
        if (clockCheckbox) clockCheckbox.checked = Game.showPauseClock;
        if (clockEl) {
            if (Game.showPauseClock) {
                clockEl.classList.remove('hidden');
            } else {
                clockEl.classList.add('hidden');
            }
        }
    } else {
        pauseOverlay.classList.add('hidden');
    }
    
    // Manual upgrades
    if (Game.manualLevel < Game.manualUpgrades.length) {
        const upgrade = Game.manualUpgrades[Game.manualLevel];
        const btn = document.getElementById(upgrade.id);
        if (btn) {
            const currentCost = Utils.getCurrentUpgradeCost(upgrade.cost);
            btn.disabled = Game.count < currentCost || Game.isPaused;
            btn.innerText = `${upgrade.label} (Cost: ${Utils.formatNumber(currentCost)})`;
        }
    }
    
    // Auto upgrades
    if (Game.autoLevel < Game.autoUpgrades.length) {
        const upgrade = Game.autoUpgrades[Game.autoLevel];
        const btn = document.getElementById(upgrade.id);
        if (btn) {
            const currentCost = Utils.getCurrentUpgradeCost(upgrade.cost);
            btn.disabled = Game.count < currentCost || Game.isPaused;
            btn.innerText = `${upgrade.label} (Cost: ${Utils.formatNumber(currentCost)})`;
        }
    }
    
    // Rebirth button
    const allManualPurchased = Game.manualLevel === Game.manualUpgrades.length;
    const allAutoPurchased = Game.autoLevel === Game.autoUpgrades.length;
    if (allManualPurchased && allAutoPurchased) {
        document.getElementById('rebirth-btn').classList.remove('hidden');
        document.getElementById('rebirth-btn').disabled = Game.count < Utils.getCurrentRebirthCost() || Game.isPaused;
    } else {
        document.getElementById('rebirth-btn').classList.add('hidden');
    }
    
    // Update shop button states
    // Removed broken global selector loop; states are now handled within their respective render functions
};

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize systems
    CircleManager.init();
    AudioSystem.init();
    CubeManager.init();
    ScreensaverManager.init();
    
    // Generate upgrades
    generateUpgrades();
    
    // Initialize systems
    BattleSystem.init();
    BoardgameSystem.init();
    ShopSystem.init();
    UpgradeSystem.init();
    OwnerSystem.init();
    
    // Apply initial state
    CircleManager.applySkin(Game.currentSkin);
    document.body.style.background = WALLPAPERS[0].bg;
    CircleManager.applyAura('None');
    
    // Initial update
    Utils.updateDisplay();
    
    // Loading screen
    const loadingScreen = document.getElementById('loading-screen');
    const finishLoading = () => {
        if (!loadingScreen || loadingScreen.classList.contains('fade-out')) return;
        loadingScreen.classList.add('fade-out');
        setTimeout(() => { loadingScreen.style.display = 'none'; }, 1000);
    };
    const loadingTimeout = setTimeout(finishLoading, 4000);
    if (loadingScreen) {
        loadingScreen.onclick = () => { clearTimeout(loadingTimeout); finishLoading(); };
    }
});

// ============================================
// CIRCLE CLICK HANDLER
// ============================================

document.getElementById('circle').addEventListener('click', () => {
    UpgradeSystem.clickCircle(false);
});
