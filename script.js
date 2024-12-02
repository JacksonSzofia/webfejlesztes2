let szamok = document.querySelectorAll(".szam");
let lassusag = 1000;

szamok.forEach((szam) => {
    let kezdo = 0;
    let vegso = parseInt(szam.getAttribute("vege"));
    let idotartam = Math.floor(lassusag / vegso);
    let szamlalo = setInterval(function() {
        kezdo += 1;
        szam.textContent = kezdo;
        if(kezdo == vegso) {
            clearInterval(szamlalo);}
    }, idotartam);
});

document.getElementById("gomb").addEventListener("click", szamol);
function szamol()
{
    let osszeg = 0;
    osszeg += parseInt(document.getElementById("honap").value);

    const verseny = parseInt(document.getElementById("verseny").value);
    const koreo = parseInt(document.getElementById("koreo").value);

    if (verseny === 1) { // Ritmuscsapatok
        if (koreo === 1) osszeg += 8000; // Egyéni
        else if (koreo === 2) osszeg += 6000; // Duo/Trió
        else if (koreo === 3) osszeg += 4000; // Csapat
        else if (koreo === 4) osszeg += 3000; // Formáció
    } else if (verseny === 2) { // MTMSZ
        if (koreo === 1) osszeg += 9000; // Egyéni
        else if (koreo === 2) osszeg += 7000; // Duo/Trió
        else if (koreo === 3) osszeg += 5000; // Csapat
        else if (koreo === 4) osszeg += 4000; // Formáció
    } else if (verseny === 3) { // Mindkettő
        if (koreo === 1) osszeg += 17000; // Egyéni
        else if (koreo === 2) osszeg += 13000; // Duo/Trió
        else if (koreo === 3) osszeg += 9000; // Csapat
        else if (koreo === 4) osszeg += 7000; // Formáció
    }
    document.getElementById("eredmeny").value = osszeg;
}
