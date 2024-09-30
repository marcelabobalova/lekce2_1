/*Příjem divadla
Jeden lístek do divadla Pěst na oko stojí 12 euro. Spočítejte měsíční příjem divadla ze vstupného, přichází-li průměrně 174 návštěvníků na jedno představení a divadlo hraje 15 představení měsíčně. Uložte výsledek do proměnné prijem. Hodnotu proměnné prijem vypište do stránky. Divadlo se rozhodlo prodávat studentské vstupné ve výši 65 % plného vstupného. Jak se změní měsíční příjem divadla pokud víme, že 40 % návštěvníků jsou studenti? Vypište do stránky i příjem divadla se započítanou slevou pro studenty.*/

const cenaListku = 12
const prumernyPocetDivaku = 174
const pocetPredstaveni = 15

const prijem = pocetPredstaveni * prumernyPocetDivaku * pocetPredstaveni

document.body.innerHTML += "<p>Příjem divadla: " + prijem + "EUR.</p>"

/*Házení kostkou
Vymyslete, jak použít funkci Math.random a různé zaokrouhlovací funkce probírané v této lekci k simulování hodu klasickou šestistěnnou kostkou. S použitím vhodných funkcí sestavte výraz, který vygeneruje náhodné celé číslo mezi 1 a 6.

Zamyslete se nad tím, zda vámi vytvořený výraz generuje všechna čísla skutečně se stejnou pravděpodobností. Vemte v úvahu, že funkce Math.random generuje náhodná čísla mezi 0 (včetně) a 1 (vyjma). Je tedy malinká pravěpodobnost, že občas padne přesně číslo 0. Naopak číslo 1 padnout nemůže.*/

const hodKostkou = Math.ceil(Math.random() * 6)
/*
Jak to funguje?
- Math.random() vrací desetinné číslo od 0 do 1, např. 0.568756412
- tento výsledek vynásobíme 6, dostaneme tedy čísla od 0.0000000000 do 5.999999999
- tento výsledek zaokrouhlíme pomocí Math.ceil nahoru, dostaneme tedy čísla od 1 do 6
*/

document.body.innerHTML += "<p>Hozeno: " + hodKostkou + "</p>"

//test různých čísel - padnou všechny možnosti od 1 do 6?
document.body.innerHTML += "<p>Hozeno: " + Math.ceil(Math.random() * 6) + "</p>"
document.body.innerHTML += "<p>Hozeno: " + Math.ceil(Math.random() * 6) + "</p>"
document.body.innerHTML += "<p>Hozeno: " + Math.ceil(Math.random() * 6) + "</p>"
document.body.innerHTML += "<p>Hozeno: " + Math.ceil(Math.random() * 6) + "</p>"
document.body.innerHTML += "<p>Hozeno: " + Math.ceil(Math.random() * 6) + "</p>"
document.body.innerHTML += "<p>Hozeno: " + Math.ceil(Math.random() * 6) + "</p>"
document.body.innerHTML += "<p>Hozeno: " + Math.ceil(Math.random() * 6) + "</p>"
document.body.innerHTML += "<p>Hozeno: " + Math.ceil(Math.random() * 6) + "</p>"
document.body.innerHTML += "<p>Hozeno: " + Math.ceil(Math.random() * 6) + "</p>"
document.body.innerHTML += "<p>Hozeno: " + Math.ceil(Math.random() * 6) + "</p>"
document.body.innerHTML += "<p>Hozeno: " + Math.ceil(Math.random() * 6) + "</p>"
document.body.innerHTML += "<p>Hozeno: " + Math.ceil(Math.random() * 6) + "</p>"
document.body.innerHTML += "<p>Hozeno: " + Math.ceil(Math.random() * 6) + "</p>"
document.body.innerHTML += "<p>Hozeno: " + Math.ceil(Math.random() * 6) + "</p>"
document.body.innerHTML += "<p>Hozeno: " + Math.ceil(Math.random() * 6) + "</p>"
document.body.innerHTML += "<p>Hozeno: " + Math.ceil(Math.random() * 6) + "</p>"
document.body.innerHTML += "<p>Hozeno: " + Math.ceil(Math.random() * 6) + "</p>"
document.body.innerHTML += "<p>Hozeno: " + Math.ceil(Math.random() * 6) + "</p>"
document.body.innerHTML += "<p>Hozeno: " + Math.ceil(Math.random() * 6) + "</p>"
document.body.innerHTML += "<p>Hozeno: " + Math.ceil(Math.random() * 6) + "</p>"
