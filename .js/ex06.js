function doublons(tab) {
  tab[0] = tab[0] + tab[0];
  tab[1] = tab[1] + tab[1];
  tab[2] = tab[2] + tab[2];
  return tab;
}

console.log(doublons([1, 2, 3])); // Résultat attendu : [2, 4, 6]
