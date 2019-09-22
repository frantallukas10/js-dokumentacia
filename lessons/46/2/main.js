window.onload = () => {
  // selekntes si tlacidla nasledne pridas posluchaca na click
  // vo vnutri selektnes zoznam potom jeho children takto Array.from(zoznam.children).sort(item => a - b)

  // const pole = ['a', 'b', 'c'];
  // pole.sort((a, b) => {
  //   if (a < b) {
  //     return -1; // sortovanie od A po Z
  //   } else if (a > b) {
  //     return 1; // sortovanie od Z po A
  //   }
  //   return 0; // nesortuj
  // });
  // pole.sort(() => -1);

  const zoradZostupne = document.getElementById('btn1');
  zoradZostupne.addEventListener('click', () => {
    const zoznam = document.getElementById('zoznam');

    const arrayZostupne = Array.from(zoznam.children);

    const sortZoznamAZ = arrayZostupne.sort(function(a, b) {
      if (a.childNodes[0].nodeValue < b.childNodes[0].nodeValue) {
        return -1;
      }
      return 0;
    });
    zoznam.innerHTML = '';
    sortZoznamAZ.map(item => zoznam.appendChild(item));
  });

  const zoradVzostupne = document.getElementById('btn2');
  zoradVzostupne.addEventListener('click', () => {
    const zoznam = document.getElementById('zoznam');
    const arrayVzostupne = Array.from(zoznam.children);
    const sortZoznamZA = arrayVzostupne.reverse();
    zoznam.innerHTML = '';
    sortZoznamZA.map(item => zoznam.appendChild(item));
  });

  const btnPridaj = document.querySelector('#pridaj button');
  btnPridaj.addEventListener('click', () => {
    const value = document.querySelector('#pridaj input').value;
    const zoznam = document.getElementById('zoznam');

    const existujePridavanyText = Array.from(zoznam.children).find(item => {
      return item.childNodes[0].nodeValue === value;
    });

    if (existujePridavanyText) {
      alert(`nasiel som hladanu ulohu s rovnakym nazvom: ${value} zmen nazov`);
    } else {
      const li = document.createElement('li');
      const text = document.createTextNode(value);

      const btn = document.createElement('button');
      btn.addEventListener('click', e => {
        e.target.parentNode.remove();
      });

      const x = document.createTextNode('x');
      btn.appendChild(x);

      li.appendChild(text);
      li.appendChild(btn);
      zoznam.appendChild(li);
    }
  });

  const btnOdober = document.querySelector('#odober button');
  btnOdober.addEventListener('click', () => {
    const value = document.querySelector('#odober input').value;
    const zoznam = document.getElementById('zoznam');

    // ak chcem s HTMLCollection vytvorit pole elementov pouzijem Array.from(HTMLCollection['li', 'li'])
    const existujeHladanyText = Array.from(zoznam.children).find(item => {
      return item.childNodes[0].nodeValue === value ? item : null;
    });
    console.log(existujeHladanyText);

    if (existujeHladanyText) {
      return existujeHladanyText.remove();
    } else {
      alert(`nenasiel som hladanu ulohu s nazvom: ${value}`);
    }
  });
};
