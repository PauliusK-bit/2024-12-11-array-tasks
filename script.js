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
