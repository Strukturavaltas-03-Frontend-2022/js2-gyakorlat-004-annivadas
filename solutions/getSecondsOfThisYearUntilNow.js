/* 
Írj egy függvényt `getSecondsOfThisYearUntilNow` néven, aminek a visszatérési értéke az aktuális év 01.01. óta eltelt másodperceinek a száma!
   Csak a Date konstruktor függvényt (akár példányosítva, akár anélkül), a now() és a getFullYear() metódusokat használd!
*/


const getSecondsOfThisYearUntilNow = () => 
((Date.now() - new Date(new Date().getFullYear(), 0, 1)) / 1000);



export default getSecondsOfThisYearUntilNow;


