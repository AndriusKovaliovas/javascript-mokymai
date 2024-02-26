/*
1. Sukurkite funkciją, kuri paverstų eurus į dolerius.
Sugeneruokite atsitiktinį skaičių (eurų sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
doleriais.
*/
console.log('1 sprendimas:')

function skaiciuotikursa(EUR, USD) {
    let kursas = EUR * USD
    console.log(`${EUR} EUR * ${USD} = ${(kursas).toFixed(2)} USD`)
}
skaiciuotikursa((Math.round(Math.random() * (1000 - 1 + 1) + 1)), 1.11)

console.log('')
/*
2. Sukurkite funkciją, kuri paverstų dolerius į eurus.
Sugeneruokite atsitiktinį skaičių (dolerių sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
eurais.
*/
console.log('2 sprendimas:')

function skaiciuotikursa(USD, EUR) {
    let kursas = USD * EUR
    console.log(`${USD} USD * ${EUR} = ${(kursas).toFixed(2)} EUR`)
}
skaiciuotikursa((Math.round(Math.random() * (1000 - 1 + 1) + 1)), 0.95)

console.log('')
/*
3. Parašykite programą, kuri suskaičiuotų žmogaus BMI (body
mass index), kai yra žinomas žmogaus ūgis ir svoris. 
BMI formulė: žmogaus svoris (kg) padalintas iš ūgio metrais kvadratu. 
Pvz. svoris = 80kg, ūgis = 1.8 m. 
BMI = 80 / 1.8**2 = 24.69
Viršsvoris = BMI > 25
Normalu = 18.5 <= BMI < 25
Per mažas svoris = BMI < 18.5
*/
console.log('3 sprendimas:')
let svoris = 80
let ugis = 1.8
let BMI = svoris / ugis ** 2

console.log(`Svoris: ${svoris}
Ūgis: ${ugis}
BMI:, ${(BMI).toFixed(2)}`)

if (BMI > 25) {
    console.log('Viršsvoris = BMI > 25')
} else if (BMI >= 18.5 && BMI < 25) {
    console.log('Normalu = 18.5 <= BMI < 25')
} else {
    console.log('Per mažas svoris = BMI < 18.5')
}
console.log('')
/*
4. Parašykite programą, kuri iš duoto žmogaus amžiaus metais
pasakytų kiek tai yra sekundėmis, minutėmis, valandomis,
dienomis.
*/
console.log('4 sprendimas:')

const SiDiena = new Date()
const gimdata = new Date(1981, 0, 7)

console.log(`Šiandien: ${SiDiena.toLocaleDateString('lt')}`)
console.log(`Gimimo data ${gimdata.toLocaleDateString('lt')}`)
console.log(`Amžius sekundėmis: ${Math.round((SiDiena-gimdata))} sekundžių`)
console.log(`Amžius minutėmis: ${Math.round((((SiDiena-gimdata)/86400000)*24)*60)} minučių`)
console.log(`Amžius valandomis: ${Math.round(((SiDiena-gimdata)/86400000)*24)} valandų`)
console.log(`Amžius dienomis: ${Math.round((SiDiena-gimdata)/86400000)} dienų`)

console.log('')

/*
5. Parašykite programą, kuri konvertuos termometro
duomenis iš Farenheito į Celsijų, ir atvirkščiai.
*/
console.log('5 sprendimas:')

let pagalFarenheita = 32
let pagalCelsiju = ((pagalFarenheita - 32) / 1.8).toFixed(2)

console.log(`Pagal farenheita: ${pagalFarenheita} = ${pagalCelsiju} pagal celsiju`)

let pagalcelsiju = 0
let pagalfarenheita = ((pagalcelsiju * 9 / 5 + 32).toFixed(2))

console.log(`Pagal celsiju: ${pagalcelsiju} = ${pagalfarenheita} pagal farenheita`)

console.log('')
/*
6. Sukurkite kodą, kuris išspausdins į konsolę
1-2-3-4-5-6-7-8-9-10 vienoje eilutėje. Prieš vienetą ir po
dešimties neturėtų būti brūkšniuko.
*/
console.log('6 sprendimas:')

let n = ''
for (let i = 1; i <= 10; i++) {
    n += i + '-'
}
console.log(n)

console.log('')
/*
7. Panaudokite for ciklus, kad sukurtumėte tokį vaizdą konsolėje.
*
**
***
****
*****
*/
console.log('7 sprendimas:')

let symbol = '*'
console.log(symbol)
for (i = 1; i <= 4; i++) {
    symbol += '*'
    console.log(symbol)
}
console.log('*/')
console.log('')
/*
8. Parašykite kodą, kuris apskaičiuos kiek liko dienų iki Kalėdų.
*/
console.log('8 sprendimas:')

const Siandien = new Date()
const Kaledos = new Date(2024, 11, 25, 0)
console.log(`Kalėdos ${Kaledos.toLocaleDateString('lt')}`)
console.log(`Šiandien: ${Siandien.toLocaleDateString('lt')}`)
console.log(`Iki Kalėdu liko: ${Math.round((Kaledos-Siandien)/86400000)} dienų`)

console.log('')
/*
9. Parašykite kodą, kuris apjungia masyvo duomenis į vieną
tekstinę eilutę. Turėtumėte gauti tokį rezultatą:
Tomas,Dainius,Paulius,Jonas
Tomas+Dainius+Paulius+Jonas
*/
console.log('9 sprendimas:')

let vardai = ['Tomas', 'Dainius', 'Paulius', 'Jonas']
console.log(vardai.join(','))
console.log(vardai.join('+'))

console.log('')
/*
10. Parašykite kodą, kuris sugeneruos dvylikos simbolių
slaptažodį. Slaptažodyje privalo būti bent po vieną: didžioji raidė,
mažoji raidė, skaičius, specialusis simbolis. Visi slaptažodžio
simboliai privalo būti atsitiktiniai ir atsitiktine tvarka.
*/
console.log('10 sprendimas:')

let slaptazodis = []

for(let i = 0; i < 12; i++)
slaptazodis.push(Math.round(Math.random()*10))

console.log(`Slaptažodis: ${slaptazodis.join('')}`)

console.log('')