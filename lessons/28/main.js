// pravdive a nepravdive
// pravdive: "", '', ``, 1, -1, true
// nepravdive: 0,-0,NaN, false, null, undefined, !true (negaciou viem spravit nepravdivy vyrok z pravdiveho)

const bool1 = false;
console.log(typeof bool1); // boolean
const result = 2 < 5;
console.log(typeof result); // boolean

if (result) {
  console.log('vyrok je pravdivy');
} else {
  console.log('vyrok je nepravdive');
}

const text = 'nejaky text';
if (text) {
  console.log('vyrok je pravdivy');
} else {
  console.log('vyrok je nepravdive');
}

const ocakvanaHodnota = 'nejaky text';
ocakvanaHodnota && console.log(ocakvanaHodnota);
