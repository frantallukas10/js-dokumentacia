// GLOBAL SCOPE VS LOCAL SCOPE
// local scope nie je dostupny pre vonkajsi blokovy kod
// vonkajsi blokovy kod
function pocitaj() {
  // lokalny blokovy kod
  const name = 'susy'; // premenna v local scope
  console.log(name);
  // lokalny blokovy kod
}
// vonkajsi blokovy kod
console.log(name); // premenna name nie je dostupna pre vonkajsi blokovy kod
