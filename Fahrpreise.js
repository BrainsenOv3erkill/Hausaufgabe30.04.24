let alter = 43;

if (alter < 6) {
    console.log("Kostenlos");
} else if (alter >= 6 && alter <= 17) {
    console.log("Kinderpreis");
} else if (alter >= 18 && alter <= 66) {
    console.log("Vollpreis");
} else {
    console.log("Seniorenpreis");
}
