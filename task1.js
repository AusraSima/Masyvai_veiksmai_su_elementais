"use strict";

// Avalynės parduotuvė. Parduotuvė prekiauja vyriška ir moteriška avalyne.
// Kiekvieną dieną yra vedama apskaita: užrašoma, kiek batų porų yra
// parduota ir pasižymima informacija apie parduotą porą – vyriška ar
// moteriška bei poros kaina. Parašyti programą, kuri rastų:
// už kokią pinigų sumą parduota moteriškos ir vyriškos avalynės atskirai;
// kiek vidutiniškai kainavo moteriškų ir vyriškų batų pora;
// už kokią pinigų sumą parduota avalynės per dieną

const quantitySold = 2;
const shoesSold = [
    // { gender: "v", price: 102.56 },
    { gender: "m", price: 245.70 },
    { gender: "m", price: 150.99 },
    // { gender: "v", price: 200.0 },
    // { gender: "v", price: 175.99 },
];

let dailySum = 0;
let vSum = 0;
let vQuantity = 0;
let mSum = 0;
let mQuantity = 0;

for (let i = 0; i < shoesSold.length; i++) {
    shoesSold[i].gender === "v" ? vSum += shoesSold[i].price : mSum += shoesSold[i].price;
    shoesSold[i].gender === "v" ? vQuantity++ : mQuantity++;
}

dailySum = vSum + mSum;
let vAverage = vSum > 0 ? `vidutiniskai viena batu pora kainavo ${(vSum / vQuantity).toFixed(2)} Lt` : "Prekiauta nebuvo";
let mAverage = mSum > 0 ? `vidutiniskai viena batu pora kainavo ${(mSum / mQuantity).toFixed(2)} Lt` : "Prekiauta nebuvo";

document.getElementById("content").innerHTML =
    `Moteriska avalyne:<br>
Per diena parduota uz ${mSum.toFixed(2)} Lt <br>
${mAverage} <br>
Vyriska avalyne: <br>
Per diena parduota uz ${vSum.toFixed(2)} Lt <br>
${vAverage} <br>
Is viso per diena parduota avalynes uz ${dailySum} Lt
`;
