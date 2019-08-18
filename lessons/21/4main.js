const veta = 'janko peto hrasko iveta jarka neviem us peto';
console.log(veta.lastIndexOf('peto')); // lastIndexOf najde v hodnote prvy hladany string y prava do lava a urci jeho poziciu a pocita aj medzeri
console.log(veta.lastIndexOf('peto', 15)); // lastIndexOf ako druhy parameter definujem zaciatok hladania pozadovaneho stringu z prava do lava
console.log(veta.lastIndexOf('10')); // lastIndexOf ak nenajde hodnotu vrati -1
