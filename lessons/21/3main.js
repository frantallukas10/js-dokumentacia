const veta = 'janko peto hrasko iveta jarka neviem us peto';
console.log(veta.indexOf('peto')); // indexOf najde v hodnote prvý hladany string a urci jeho poziciu a pocita aj medzeri
console.log(veta.indexOf('peto', 10)); // indexOf ako druhy parameter definujem zaciatok hladania pozadovaneho stringu
console.log(veta.indexOf('10')); // indexOf ak nenajde hodnotu vrati -1
