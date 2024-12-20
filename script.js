console.groupCollapsed("First task");
let data = [
  4,
  5,
  -5556,
  155,
  640,
  "15x",
  6789,
  -5564,
  478,
  654,
  "obuolys",
  789,
  -51,
  55,
  -222,
  0,
  -357,
  -56,
  "trylika",
  444,
  7778,
  4154,
  4751,
];

// 1.1. Pašalinti pirmą masyvo narį.

data.shift();
console.log("Pašalintas pirmas masyvo narys", data);

// 1.2. Pašalinti paskutinį masyvo narį.

data.pop();
console.log("Pašalintas paskutinis masyvo narys", data);

// 1.3. Rasti vidurinį masyvo narį ir jį pašalinti.

let middleIndex = Math.floor(data.length / 2);
data.splice(middleIndex, 1);
console.log("Pašalintas vidurinysis masyvo narys", data);

// 1.4. Pašalinti priešpaskutinį masyvo narį.

data.splice(-2, 1);
console.log("Pašalintas prieš paskutinis masyvo narys", data);

// 1.5. Pašalinti antrą masyvo narį.

data.splice(1, 1);
console.log("Pašalintas antras masyvo narys", data);

// 1.6. Pašalinti 7 ir 8 masyvo narius.

data.splice(6, 2);
console.log("Pašalinti 7 ir 8 masyvo nariai", data);

// 1.7. Pašalinti 4, 5 ir 6 masyvo narius skaičiuojant nuo galo.

data.splice(-6, 3);
console.log("Pašalinti 4, 5 ir 6 masyvo nariai", data);

// 1.8. Pašalinti trečią masyvo narį ir į jo vietą įdėti skaičių 888.

data.splice(2, 1, 888);
console.log(
  "Pašalintas trečias masyvo narys ir į jo vietą įdėtas skaičius 888",
  data
);

// 1.9. Pašalinti dešimtą masyvo narį ir į jo vietą įdėti skaičius: 33, 789 ir 6543.

data.splice(-4, 1, 33, 789, 6543);
console.log(
  "Pašalintas dešimtas masyvo narys ir į jo vietą įdėti skaičiai: 33, 789, 6543",
  data
);

// 1.10. Pašalinti paskutinį masyvo narį į jo vietą įdėti skaičius: 321, 654, 987.

data.splice(-1, 1, 321, 654, 987);
console.log(
  "Pašalintas paskutinis masyvo narys ir į jo vietą pridėti skaičiai: 321, 654, 987",
  data
);

// 1.11. Tarp pirmo ir antro masyvo narių įdėti skaičių 11.

data.splice(1, 0, 11);
console.log("Tarp pirmo ir antro masyvo narių įdėtas skaičius 11", data);

// 1.12. Tarp 13 ir 14 masyvo narių įdėti skaičių 1.

data.splice(-5, 0, 1);
console.log("Tarp 13 ir 14 masyvo narių įdėtas skaičius 1", data);

// 1.13. Tarp paskutinio ir priešpaskutinio masyvo narių įdėti skaičių -1.
data.splice(-1, 0, -1);
console.log(
  "Tarp paskutinio ir priešpaskutinio masyvo narių įdėtas skaičius -1",
  data
);

// 1.14. Į masyvo pradžią pridėti skaičius: 1, 2, 3.
data.unshift(1, 2, 3);
console.log("Į masyvo pradžią pridėti skaičiai: 1, 2, 3", data);

// 1.15. Į masyvo pabaigą pridėti skaičius: -333, -321, -312.
data.push(-333, -321, -312);
console.log(" Į masyvo pabaigą pridėti skaičiai: -333, -321, -312.", data);

// 1.16. Į masyvo vidurį pridėti skaičių 0.
middleIndex = Math.floor(data.length / 2);
data.splice(middleIndex, 0, 0);
console.log("Į masyvo vidurį pridėtas skaičius 0.", data);

// 1.17. Pašalinti pirmą masyvo narį.
data.shift();
console.log("Pašalintas pirmas masyvo narys", data);

// 1.18. Pašalinti paskutinį masyvo narį.
data.pop();
console.log("Pašalintas paskutinis masyvo narys", data);

// 1.19. Į masyvo pradžią pridėti žodį "start".
data.unshift("start");
console.log('Į masyvo pradžią pridėti žodį "start".', data);

// 1.20. Į masyvo pabaigą pridėti žodį "end".
data.push("end");
console.log('Į masyvo pabaigą pridėti žodį "end".', data);

const answer = [
  "start",
  2,
  3,
  5,
  11,
  155,
  888,
  "15x",
  6789,
  -5564,
  "obuolys",
  -51,
  55,
  0,
  33,
  789,
  6543,
  1,
  "trylika",
  444,
  321,
  654,
  -1,
  987,
  -333,
  -321,
  "end",
];

let equal = true;

if (answer.length !== data.length) {
  equal = false;
} else {
  for (let i = 0; i < answer.length; i++) {
    if (answer[i] !== data[i]) {
      equal = false;
    }
  }
}

if (equal) {
  console.log("Masyvai sutampa");
} else {
  console.log("Masyvai nesutampa");
}
console.groupEnd();

console.groupCollapsed("Second task");
// 2.1. Gauti pirmą masyvo narį.
let first = data.slice(0, 1);
console.log(first);

// 2.2. Gauti paskutinį masyvo narį.
let second = data.slice(-1);
console.log(second);

// 2.3. Gauti antrą masyvo narį.
let secondMember = data.slice(1, 2);
console.log(secondMember);

// 2.4. Gauti priešpaskutinį masyvo narį.
let otherLast = data.slice(-2, -1);
console.log(otherLast);

// 2.5. Gauti aštuntą masyvo narį.
let eight = data.slice(7, 8);
console.log(eight);
// 2.6. Gauti devintą masyvo narį skaičiuojant nuo galo.
let nine = data.slice(8, 9);
console.log(nine);
// 2.7. Gauti vidurinį masyvo narį.
middleIndex = Math.floor(data.length / 2);
let middle = data.slice(middleIndex, middleIndex + 1);
console.log(middle);
// 2.8. Gauti pirmus tris masyvo narius.
let firstThree = data.slice(0, 3);
console.log(firstThree);
// 2.9. Gauti paskutinius tris masyvo narius.
let lastThree = data.slice(-3);
console.log(lastThree);
// 2.10. Gauti pirmus 10 masyvo narius.
let firstTen = data.slice(0, 10);
console.log(firstTen);
// 2.11. Gauti paskutinius 10 masyvo narius.
let lastTen = data.slice(-10);
console.log(lastTen);
// 2.12. Gauti nuo 3 iki 8 masyvo nario (iš viso 6 nariai).
let sixMembers = data.slice(2, 8);
console.log(sixMembers);
// 2.13. Gauti nuo 5 iki 9 masyvo nario skaičiuojant nuo masyvo pabaigos (iš viso 5 nariai).
let fiveMembers = data.slice(-9, -4);
console.log(fiveMembers);
// 2.14. Gauti nuo 11 iki 19 masyvo nario (iš viso 9 nariai).
let nineMembers = data.slice(10, 19);
console.log(nineMembers);
// 2.15. Gauti nuo 9 iki 17 masyvo nario skaičiuojant nuo masyvo pabaigos (iš viso 9 nariai).
let otherNineMembers = data.slice(-17, -8);
console.log(otherNineMembers);

// 2.16. Gauti visus masyvo narius išskyrus pirmą.
let withoutFirst = data.slice(1);
console.log(withoutFirst);
// 2.17. Gauti visus masyvo narius išskyrus paskutinį.
let withoutLast = data.slice(0, -1);
console.log(withoutLast);

// 2.18. Gauti visus masyvo narius išskyrus pirmus 5.
let without5 = data.slice(5);
console.log(without5);
// 2.19. Gauti visus masyvo narius išskyrus paskutinius 5.
let withoutLast5 = data.slice(0, 22);
console.log(withoutLast5);
// 2.20. Gauti visus masyvo narius iki vidurinio masyvo nario, vidurinio nario neįskaičiuojant (iš viso 13 narių).
let beforeMiddle = data.slice(0, middleIndex);
console.log(beforeMiddle);
// 2.21. Gauti visus masyvo narius nuo vidurinio masyvo nario, vidurinio nario neįskaičiuojant, iki pabaigos (iš viso 13 narių).
// 2.22. Gauti visus narius išskyrus pirmą ir paskutinį.
let withoutFirstAndLast = data.slice(1, -1);
console.log(withoutFirstAndLast);
// 2.23. Gauti visus narius išskyrus pirmus penkis ir paskutinius tris.
let withoutFirst5AndLast3 = data.slice(5, -3);
console.log(withoutFirst5AndLast3);
// 2.24. Gauti visus narius išskyrus pirmą ir paskutinius 8.
let without1AndLast8 = data.slice(1, -8);
console.log(without1AndLast8);
// 2.25. Gauti visus narius išskyrus pirmus 7 ir paskutinį.
let withoutFirst7AndLast = data.slice(7, -1);
console.log(withoutFirst7AndLast);
// 2.26. Gauti visus narius išskyrus pirmus 9 ir paskutinius 12.
let withoutFirst9AndLast12 = data.slice(9, 14);
console.log(withoutFirst9AndLast12);
// 2.27. Gauti 9 narius skaičiuojant nuo 11.
let nineFrom11 = data.slice(10, -8);
console.log(nineFrom11);
// 2.28. Gauti 12 narių skaičiuojant nuo 8.
let twelveFrom8 = data.slice(7, -8);
console.log(twelveFrom8);
// 2.29. Gauti pirmus penkis ir paskutinius šešis masyvo narius. Šiuos narius gauti viename masyve. Reikės atlikti daugiau veiksmų nei prieš tai uždaviniuose.
let combinedFirst5Last6 = data.slice(0, 5).concat(data.slice(-6));
console.log(combinedFirst5Last6);
// 2.30. Gauti masyvo narius nuo 3 iki 5 ir nuo 15 iki 17. Šiuos narius gauti viename masyve. Reikės atlikti daugiau veiksmų nei prieš tai uždaviniuose.
let combinedFrom3to5And15to17 = data.slice(2, 5).concat(data.slice(14, 17));
console.log(combinedFrom3to5And15to17);
console.groupEnd();

console.groupCollapsed("Task 3");
// 3.1. Gauti tik teigiamus skaičius.
let positiveNumbers = data.filter((num) => {
  return num > 0;
});
console.log(positiveNumbers);
// 3.2. Gauti tik neigiamus skaičius.
let negativeNumbers = data.filter((num) => {
  return num < 0;
});
console.log(negativeNumbers);
// 3.3. Gauti tik skaičius, kurie dalinasi iš 2.
let numbers3 = data.filter((num) => {
  return num % 2 === 0;
});
console.log(numbers3);
// 3.4. Gauti tik skaičius, kurie dalinasi iš 3.
let numbers4 = data.filter((num) => {
  return num % 3 === 0;
});
console.log(numbers4);
// 3.5. Gauti tik skaičius, kurie dalinasi iš 5.
let numbers5 = data.filter((num) => {
  return num % 5 === 0;
});
console.log(numbers5);
// 3.6. Gauti tik skaičius, kurie dalinasi iš 11.
let numbers6 = data.filter((num) => num % 11 === 0);
console.log(numbers6);
// 3.7. Gauti tik skaičius, kurie dalinasi iš 31.
let numbers7 = data.filter((num) => num % 31 === 0);
console.log(numbers7);
// 3.8. Gauti tik skaičius, kurie dalinasi iš 2 ir iš 3.
let numbers8 = data.filter((num) => num % 2 === 0 && num % 3 === 0);
console.log(numbers8);

// 3.9. Gauti tik skaičius, kurie dalinasi iš 3 ir iš 7.
let numbers9 = data.filter((num) => num % 3 === 0 && num % 7 === 0);
console.log(numbers9);

// 3.10. Gauti tik skaičius, kurie dalinasi iš 5 ir iš 9.
let numbers10 = data.filter((num) => num % 5 === 0 && num % 9 === 0);
console.log(numbers10);

// 3.11. Gauti tik skaičius, kurie dalinasi iš 5 ir iš 11.
let numbers11 = data.filter((num) => num % 5 === 0 && num % 11 === 0);
console.log(numbers11);
// 3.12. Gauti tik skaičius, kurie dalinasi iš 2, 8 ir 12.
let numbers12 = data.filter(
  (num) => num % 2 === 0 && num % 8 === 0 && num % 12 === 0
);
console.log(numbers12);
// 3.13. Gauti tik skaičius, kurie dalinasi iš 2 arba iš 3.
let numbers13 = data.filter((num) => num % 2 === 0 || num % 3 === 0);
console.log(numbers13);

// 3.14. Gauti tik skaičius, kurie dalinasi iš 3 arba iš 5.
let numbers14 = data.filter((num) => num % 3 === 0 || num % 5 === 0);
console.log(numbers14);
// 3.15. Gauti tik skaičius, kurie dalinasi iš 5 arba iš 6.
let numbers15 = data.filter((num) => num % 5 === 0 || num % 6 === 0);
console.log(numbers15);
// 3.16. Gauti tik skaičius, kurie dalinasi iš 7 arba iš 8.
let numbers16 = data.filter((num) => num % 7 === 0 || num % 8 === 0);
console.log(numbers16);
// 3.17. Gauti tik skaičius, kurie dalinasi iš 9 arba iš 13.
let numbers17 = data.filter((num) => num % 9 === 0 || num % 13 === 0);
console.log(numbers17);
// 3.18. Gauti tik skaičius, kurie dalinasi iš 2, 3 arba iš 5.
let numbers18 = data.filter(
  (num) => num % 2 === 0 || num % 3 === 0 || num % 5 === 0
);
console.log(numbers18);
// 3.19. Gauti tik skaičius, kurie dalinasi iš 5, 7 arba iš 9.
let numbers20 = data.filter(
  (num) => num % 5 === 0 || num % 7 === 0 || num % 9 === 0
);
console.log(numbers20);
// 3.20. Gauti tik skaičius, kurie dalinasi iš 7, 8 arba iš 11.
let numbers21 = data.filter(
  (num) => num % 7 === 0 || num % 8 === 0 || num % 11 === 0
);
console.log(numbers21);

// 3.21. Gauti tik skaičius, kurie dalinasi iš 9, 12 arba iš 13.
let numbers22 = data.filter(
  (num) => num % 9 === 0 || num % 12 === 0 || num % 13 === 0
);
console.log(numbers22);
// 3.22. Gauti tik skaičius, kurie yra didesni už 100.
let numbers23 = data.filter((num) => num > 100);
console.log(numbers23);
// 3.23. Gauti tik skaičius, kurie yra didesni už 555.
let numbers24 = data.filter((num) => num > 555);
console.log(numbers24);
// 3.24. Gauti tik skaičius, kurie yra didesni arba lygūs 888.
let numbers25 = data.filter((num) => num >= 888);
console.log(numbers25);
// 3.25. Gauti tik skaičius, kurie yra didesni arba lygūs 6789.
let numbers26 = data.filter((num) => num >= 6789);
console.log(numbers26);
// 3.26. Gauti tik skaičius, kurie yra mažesni už 50.
let numbers27 = data.filter((num) => num < 50);
console.log(numbers27);
// 3.27. Gauti tik skaičius, kurie yra mažesni už 1000.
let numbers28 = data.filter((num) => num < 1000);
console.log(numbers28);
// 3.28. Gauti tik skaičius, kurie yra mažesni arba lygūs -1.
let numbers29 = data.filter((num) => num <= -1);
console.log(numbers29);
// 3.29. Gauti tik skaičius, kurie yra mažesni arba lygūs -5564.
let numbers30 = data.filter((num) => num <= -5564);
console.log(numbers30);
// 3.30. Gauti tik skaičius, kurie yra mažesni už 1000 ir didesni už 500.
let numbers31 = data.filter((num) => num < 1000 && num > 500);
console.log(numbers31);
// 3.31. Gauti tik skaičius, kurie yra mažesni už 100 ir didesni už 0.
let numbers32 = data.filter((num) => num < 100 && num > 0);
console.log(numbers32);
// 3.32. Gauti tik skaičius, kurie yra mažesni už 0 ir didesni už -50.
let numbers33 = data.filter((num) => num < 0 && num > -50);
console.log(numbers33);
// 3.33. Gauti tik skaičius, kurie yra mažesni arba lygūs 0 ir didesni už -100.
let numbers34 = data.filter((num) => num <= 0 && num > -100);
console.log(numbers34);
// 3.34. Gauti tik skaičius, kurie yra didesni arba lygūs 0 ir mažesni už 55.
let numbers35 = data.filter((num) => num >= 0 && num < 55);
console.log(numbers35);
// 3.35. Gauti tik skaičius, kurie yra didesni arba lygūs 444 ir mažesni arba lygūs 654.
let numbers36 = data.filter((num) => num >= 444 && num <= 654);
console.log(numbers36);
// 3.36. Gauti tik teigiamus skaičius, kurie dalinasi iš 2.
let numbers37 = data.filter((num) => num > 0 && num % 2 === 0);
console.log(numbers37);

// 3.37. Gauti tik teigiamus skaičius, kurie dalinasi iš 3.
let numbers38 = data.filter((num) => num > 0 && num % 3 === 0);
console.log(numbers38);
// 3.38. Gauti tik neigiamus skaičius, kurie dalinasi iš 4.
let numbers39 = data.filter((num) => num < 0 && num % 4 === 0);
console.log(numbers39);
// 3.39. Gauti tik neigiamus skaičius, kurie dalinasi iš 111.
let numbers40 = data.filter((num) => num < 0 && num % 111 === 0);
console.log(numbers40);
// 3.40. Gauti tik skaičius, kurie yra didesni už 500 ir kurie dalinasi iš 2.
let numbers41 = data.filter((num) => num > 500 && num % 2 === 0);
console.log(numbers41);
// 3.41. Gauti tik skaičius, kurie yra didesni už 1000 ir kurie dalinasi iš 3.
let numbers42 = data.filter((num) => num > 1000 && num % 3 === 0);
console.log(numbers42);
// 3.42. Gauti tik skaičius, kurie yra mažesni už 1000 ir kurie dalinasi iš 9.
let numbers43 = data.filter((num) => num < 1000 && num % 9 === 0);
console.log(numbers43);
// 3.43. Gauti tik skaičius, kurie yra mažesni už 500 ir kurie dalinasi iš 2.
let numbers44 = data.filter((num) => num < 500 && num % 2 === 0);
console.log(numbers44);
// 3.44. Gauti tik skaičius, kurie yra didesni arba lygūs 33 ir kurie dalinasi iš 3.
let numbers45 = data.filter((num) => num >= 33 && num % 3 === 0);
console.log(numbers45);
// 3.45. Gauti tik skaičius, kurie yra didesni arba lygūs 444 ir kurie dalinasi iš 12.
let numbers46 = data.filter((num) => num >= 444 && num % 12 === 0);
console.log(numbers46);
// 3.46. Gauti tik skaičius, kurie yra mažesni arba lygūs 155 ir kurie dalinasi iš 5.
let numbers47 = data.filter((num) => num <= 155 && num % 5 === 0);
console.log(numbers47);
// 3.47. Gauti tik skaičius, kurie yra mažesni arba lygūs -333 ir kurie dalinasi iš 9.
let numbers48 = data.filter((num) => num <= -333 && num % 9 === 0);
console.log(numbers48);
// 3.48. Gauti tik skaičius, kurie yra didesni už 100, mažesni už 500 ir kurie dalinasi iš 5.

let numbers49 = data.filter((num) => num > 100 && num < 500 && num % 5 === 0);
console.log(numbers49);
// 3.49. Gauti tik skaičius, kurie yra didesni arba lygūs 888, mažesni už 1000 ir kurie dalinasi iš 2.
let numbers50 = data.filter((num) => num >= 888 && num < 1000 && num % 2 === 0);
console.log(numbers50);
// 3.50. Gauti tik skaičius, kurie yra mažesni arba lygūs 888, didesni arba lygūs -333, dalinasi iš 3 ir nėra nulis.
let numbers51 = data.filter(
  (num) => num <= 888 && num >= -333 && num % 3 === 0 && num !== 0
);
console.log(numbers51);
console.groupEnd();

console.groupCollapsed("Third task");
// 3.51. Gauti tik skaičius.

let onlyNumbers = data.filter(function (num) {
  return typeof num === "number";
});
console.log(onlyNumbers);
// 3.52. Gauti tik tekstus (string).
let onlyText = data.filter(function (text) {
  return typeof text === "string";
});
console.log(onlyText);
// 3.53. Gauti tik tekstus (string), kurie turi daugiau nei 5 simbolius.

let symbol1 = data.filter(function (text) {
  return typeof text === "string" && text.length > 5;
});
console.log(symbol1);

// 3.54. Gauti tik tekstus (string), kurie turi mažiau arba lygiai 5 simbolius.
let symbol2 = data.filter(function (text) {
  return typeof text === "string" && text.length <= 5;
});
console.log(symbol2);
// 3.55. Gauti tik tekstus (string), kurie turi mažiau nei 7 simbolius.
let symbol3 = data.filter(function (text) {
  return typeof text === "string" && text.length < 7;
});
console.log(symbol3);
// 3.56. Gauti tik tekstus (string), kurie turi raidę t.
let symbol4 = data.filter(
  (letter) => typeof letter === "string" && letter.toLowerCase().includes("t")
);
console.log(symbol4);
// 3.57. Gauti tik tekstus (string), kurie turi raidę y.
let symbol5 = data.filter(
  (letter) => typeof letter === "string" && letter.toLowerCase().includes("y")
);
console.log(symbol5);
// 3.58. Gauti tik tekstus (string), kurie turi raides e arba a.
let symbol6 = data.filter((item) => {
  return typeof item === "string" && (item.includes("e") || item.includes("a"));
});
console.log(symbol6);
// 3.59. Gauti tik tekstus (string), kurie turi raides t ir i.
let symbol7 = data.filter((item) => {
  return typeof item === "string" && item.includes("t") && item.includes("i");
});
console.log(symbol7);
// 3.60. Gauti tik tekstus (string), kurie turi raide t, bet neturi raidės k.
let symbol8 = data.filter((item) => {
  return typeof item === "string" && item.includes("t") && !item.includes("k");
});
console.log(symbol8);
// 3.61. Gauti tik tekstus (string), kurie turi raide a, bet neturi raidės s.
let symbol9 = data.filter((item) => {
  return typeof item === "string" && item.includes("a") && !item.includes("s");
});
console.log(symbol9);
// 3.62. Gauti tik tekstus (string), kurie turi daugiau nei vieną raidę t.
let symbol10 = data.filter((item) => {
  return typeof item === "string" && item.includes("a") && !item.includes("s");
});
console.log(symbol10);
// 3.63. Gauti tik tekstus (string), kurie turi raidžių junginį st.
let symbol11 = data.filter((item) => {
  return typeof item === "string" && item.includes("st");
});
console.log(symbol11);
// 3.64. Gauti tik tekstus (string), kurie turi raidžių junginį nd.
let symbol12 = data.filter((item) => {
  return typeof item === "string" && item.includes("nd");
});
console.log(symbol12);
// 3.65. Gauti tik tekstus (string), kurie neturi raidės s.
let symbol13 = data.filter((item) => {
  return typeof item === "string" && !item.includes("s");
});
console.log(symbol13);
// 3.66. Gauti tik tekstus (string), kurie neturi raidės t.
let symbol14 = data.filter((item) => {
  return typeof item === "string" && !item.includes("t");
});
console.log(symbol14);
// 3.67. Gauti tik tekstus (string), kurie neturi raidės r ir l.
let symbol15 = data.filter((item) => {
  return typeof item === "string" && !item.includes("r") && !item.includes("l");
});
console.log(symbol15);
// 3.68. Gauti tik tekstus (string), kurie prasideda skaičiumi.
let symbol16 = data.filter((text) => /^\d/.test(text));
console.log(symbol16);
// 3.69. Gauti tik tekstus (string), kurie prasideda raide s.
let symbol17 = data.filter(
  (item) => typeof item === "string" && item.startsWith("s")
);
console.log(symbol17);
// 3.70. Gauti tik tekstus (string), kurie prasideda raide o.
let symbol18 = data.filter(
  (item) => typeof item === "string" && item.startsWith("o")
);
console.log(symbol18);
// 3.71. Gauti tik tekstus (string), kurie baigiasi raide d.
let symbol19 = data.filter(
  (item) => typeof item === "string" && item.endsWith("d")
);
console.log(symbol19);
// 3.72. Gauti tik tekstus (string), kurie baigiasi raide s.
let symbol20 = data.filter(
  (item) => typeof item === "string" && item.endsWith("s")
);
console.log(symbol20);
// 3.73. Gauti tik tekstus (string), kurie turi daugiau nei 4 simbolius ir turi raidę o.
let symbol21 = data.filter(
  (item) => typeof item === "string" && item.length > 4 && item.includes("s")
);
console.log(symbol21);
// 3.74. Gauti tik tekstus (string), kurie turi daugiau arba lygiai 5 simbolius ir turi raidę a.
let symbol22 = data.filter(
  (item) => typeof item === "string" && item.length >= 5 && item.includes("a")
);
console.log(symbol22);
// 3.75. Gauti tik tekstus (string), kurie turi porinį simbolių skaičių.
let symbol23 = data.filter((item) => item.length % 2 === 0);
console.log(symbol23);
// 3.76. Gauti tik tekstus (string), kurie turi neporinį simbolių skaičių ir turi raidę s.

// let symbol24 = data.filter(
//   (item) => item.length % 2 !== 0 && item.includes("s")
// );
// console.log(symbol24);

// 3.77. Gauti tik tekstus (string), kurių trečias simbolis yra a.
let symbol25 = data.filter((item) => item[2] === "a");
console.log(symbol25);
// 3.78. Gauti tik tekstus (string), kurių ketvirtas simbolis yra l.
let symbol26 = data.filter((item) => item[3] === "l");
console.log(symbol26);
// 3.79. Gauti tik tekstus (string), kurių penktas simbolis nėra t ir kurie turi daugiau simbolių nei 4.
let symbol27 = data.filter((item) => item[4] !== "t" && item.length > 4);
console.log(symbol27);
// 3.80. Gauti tik tekstus (string), kurių pirmas simbolis nėra e, kurie turi mažiau simbolių nei 6 ir kurie neprasideda skaičiumi.
let symbol29 = data.filter((item) => item[0] !== "e" && item.length > 6);
console.log(symbol29);
console.groupEnd();

// 4. Tęsiant darbą su ankstesniu masyvu atlikti šias užduotis naudojant for ciklą ir map/forEach metodą. Kiekvieną užduotį atlikti abiem būdais (for ciklu ir map/forEach metodu). Visus narius išvesti į konsole pagal žemiau pateiktas sąlygas:
// 4.1. Tik skaičius (number tipo duomenis).
console.groupCollapsed("Tik skaičius (number tipo duomenis).");
for (let i = 0; i < data.length; i++) {
  let item = data[i];
  if (typeof item === "number") {
    console.log(item);
  }
}
console.groupEnd();
// 4.2. Tik tekstą (string tipo duomenis).
console.groupCollapsed("Tik tekstą (string tipo duomenis).");
for (let i = 0; i < data.length; i++) {
  let item = data[i];
  if (typeof item === "string") {
    console.log(item);
  }
}
console.groupEnd();
// 4.3. Tik skaičius (number tipo duomenis) ir juos pakelti 4-tuoju laipsniu.
console.groupCollapsed(
  "Tik skaičius (number tipo duomenis) ir juos pakelti 4-tuoju laipsniu."
);
for (let i = 0; i < data.length; i++) {
  let item = data[i];
  if (typeof item === "number") {
    console.log(item ** 4);
  }
}
console.groupEnd();
// 4.4. Tik skaičius (number tipo duomenis) ir prie jų pridėti 55.

console.groupCollapsed(
  "Tik skaičius (number tipo duomenis) ir prie jų pridėti 55."
);
for (let i = 0; i < data.length; i++) {
  let item = data[i];
  if (typeof item === "number") {
    console.log(item + 55);
  }
}
console.groupEnd();
// 4.5. Tik skaičius (number tipo duomenis) ir juos padalinti iš 2.

console.groupCollapsed(
  "Tik skaičius (number tipo duomenis) ir juos padalinti iš 2."
);
for (let i = 0; i < data.length; i++) {
  let item = data[i];
  if (typeof item === "number") {
    console.log(item / 2);
  }
}
console.groupEnd();
// 4.6. Tik skaičius (number tipo duomenis) ir prieš juos pridėti teksta, tokiu formatu: "Number: 2".
console.groupCollapsed(
  'Tik skaičius (number tipo duomenis) ir prieš juos pridėti teksta, tokiu formatu: "Number: 2".'
);
for (let i = 0; i < data.length; i++) {
  let item = data[i];
  if (typeof item === "number") {
    console.log("Number: 2", item);
  }
}
console.groupEnd();
// 4.7. Tik skaičius (number tipo duomenis) ir pridėti tekstą su jų pačių indeksais, pvz.:
//   "Index: 0, Number: 2"
//   "Index: 1, Number: 3"
//   "Index: 2, Number: 5"
//   Ir t.t.
console.groupCollapsed(
  "Tik skaičius (number tipo duomenis) ir pridėti tekstą su jų pačių indeksais"
);
for (let i = 0; i < data.length; i++) {
  if (typeof data[i] === "number") {
    console.log(`Index: ${i}, Number: ${data[i]}`);
  }
}

console.groupEnd();

// 4.8. Tik skaičius (number tipo duomenis) ir juos padauginti iš jų pačių indekso.
console.groupCollapsed(
  "Tik skaičius (number tipo duomenis) ir juos padauginti iš jų pačių indekso."
);
data.forEach((num, index) => {
  let result = num * index;
  console.log(`Number: ${num}, Index: ${index}, Result: ${result}`);
});
console.groupEnd();
// 4.9. Tik skaičius (number tipo duomenis) ir juos padauginti iš ankstesnio nario, pvz.:
//   - Pirmo skaičiaus dauginti nereikia.
//   - Antrą skaičių dauginti iš pirmo.
//   - Trečią skaičių dauginti iš antro.
//   - Ketvirta skaičių dauginti iš trečio.
//   - Penktą skaičių dauginti iš ketvirto.
//   Ir t.t.
console.groupCollapsed(
  "Tik skaičius (number tipo duomenis) ir juos padauginti iš ankstesnio nario"
);
for (let i = 1; i < data.length; i++) {
  const result = data[i] * data[i - 1];
  console.log(
    `Number: ${data[i]}, Previous number: ${data[i - 1]}, Result: ${result}`
  );
}

console.groupEnd();

// 4.10. Tik tuos skaičius (number tipo duomenis), kuriuos padauginus iš 5, atsakymas gaunasi didesnis už 350.

console.groupCollapsed(
  "Tik tuos skaičius (number tipo duomenis), kuriuos padauginus iš 5, atsakymas gaunasi didesnis už 350."
);

data.forEach((number) => {
  const result = number * 5;
  if (result > 350) {
    console.log(`Number: ${number}, Result: ${result}`);
  }
});
console.groupEnd();
// 4.11. Tik tekstą (string tipo duomenis) ir prie kiekvieno teksto parašyti kiek simbolių jis turi, pvz. "Start has 5 symbols".

console.groupCollapsed(
  'Tik tekstą (string tipo duomenis) ir prie kiekvieno teksto parašyti kiek simbolių jis turi, pvz. "Start has 5 symbols".'
);

data.forEach((element) => {
  if (typeof element === "string") {
    console.log(`${element} has ${element.length} symbols`);
  }
});
console.groupEnd();
// 4.12. Tik tekstą (string tipo duomenis), tačiau kiekviena žodžio raidę išskiriant brūkšniu ir paverčiant ją didžiąja raide, pvz.: "S-T-A-R-T".

// 4.13. Tik tekstą (string tipo duomenis), tačiau kiekviena žodžio pirmą ir trečią raidę pakeičiant brūkšniu (underscore), pvz.: "_t_rt";
// 4.14. Tik tekstą (string tipo duomenis), tačiau žodį parašant atvirkščiai, pvz.: vietoje "start" parašyti "trats";
// 4.15. Tik tekstą (string tipo duomenis) ir prie kiekvieno teksto parašyti tarp kokių narių masyve jis yra, pvz.: "Word obuolys is between -5564 and -51 in the array".
