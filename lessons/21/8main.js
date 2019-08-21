const obsah = 'Jordan peter Jordan';
console.log(obsah.startsWith('peter')); // startsWith() sluzi na hladanie stringu na zaciatku vety berie do uvahy aj velkost pismen
console.log(obsah.includes('peter')); //  includes() sluzi na hladanie stringu vramci celej vety berie do uvahy aj velkost pismen

const pole = ['peter', 'janko', 'dusi'];
console.log(pole.includes('dusi'));
console.log(obsah.endsWith('Jordan')); // true
