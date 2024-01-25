/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1, l2) {
  const result = l1 * l2;
  return result;
}
const resultArea = area(2, 3);
console.log("l'area del rettangolo è: " + resultArea + " m°");

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(num1, num2) {
  const sum = num1 + num2;

  if (num1 === num2) {
    return sum * 3;
  } else {
    return sum;
  }
}

const tot = crazySum(2, 1);

console.log("totale", tot);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(num) {
  let diffAssoluta = num - 19;

  if (num > 19) {
    diffAssoluta = Math.abs(diffAssoluta * 3);
    return diffAssoluta;
  } else {
    diffAssoluta = Math.abs(diffAssoluta);
    return diffAssoluta;
  }
}

crazyDiff(3);
console.log("valore assoluto è", crazyDiff(3));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
  if (20 < n || n > 100 || n === 400) {
    return true;
  } else {
    return false;
  }
}

const TrueOrFalse = boundary(20);
console.log("la rosposta è : " + TrueOrFalse);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(stringa) {
  const parole = stringa.split(" ");

  if (parole[0].toUpperCase() === "EPICODE") {
    return stringa;
  } else {
    return "EPICODE" + stringa;
  }
}
const testo = epify("è una scuola professionale!");
console.log(testo);

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(numero) {
  if (numero % 3 === 0 || numero % 7 === 0) {
    return true;
  } else {
    return false;
  }
}

const multiplo = check3and7(21);
console.log("è un multiplo : " + multiplo);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(str) {
  const strReverse = str.split("").reverse().join("");
  return strReverse;
}

const revverseSrt = reverseString("EPICODE");
console.log(revverseSrt);

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(stringa) {
  const words = stringa.split(" ");
  let newString = "";
  for (let i = 0; i < words.length; i++) {
    const firstChar = words[i].charAt(0).toUpperCase();
    const lastLetters = words[i].slice(1);
    const upperWord = firstChar + lastLetters;
    newString += upperWord + " ";
  }
  return newString;
}

console.log(upperFirst("ciao mi chiamo giulia"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(stringa) {
  const str = stringa.slice(1, -1);
  return str;
}

console.log(cutString("hello my name is giulia"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(n) {
  const contenitoreArr = [];
  const nun = Math.floor(Math.random() * 11);
  contenitoreArr.push(nun);

  return contenitoreArr;
}

console.log(giveMeRandom());
