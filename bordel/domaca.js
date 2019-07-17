const objekt = {
  pole: [
    {
      meno: 'janko1',
      pole: [
        'janko2',
        {
          objekt: {
            meno: 'janko3',
            objekt: {
              meno: 'janko4'
            }
          }
        }
      ]
    },
    [
      {
        meno: 'janko5'
      },
      'janko6'
    ],
    'janko7'
  ],
  meno: 'janko8'
};

// vykonzolovat vsetkych jankov
console.log(objekt.pole[0].meno); //janko1
console.log(objekt.pole[0].pole[0]); //janko2
console.log(objekt.pole[0].pole[1].objekt.meno); //janko3
console.log(objekt.pole[0].pole[1].objekt.objekt.meno); //janko4
console.log(objekt.pole[1][0].meno); //janko5
console.log(objekt.pole[1][1]); //janko6
console.log(objekt.pole[2]); //janko7
console.log(objekt.meno); //janko8
