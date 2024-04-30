function PunkteBewertung(punktzahl) {
    if (punktzahl > 90) {
        return "sehr gut";
    } else if (punktzahl >= 80 && punktzahl <= 90) {
        return "gut";
    } else if (punktzahl >= 70 && punktzahl < 80) {
        return "befriedigend";
    } else if (punktzahl >= 60 && punktzahl < 70) {
        return "ausreichend";
    } else {
        return "nicht bestanden";
    }
}


let result = PunkteBewertung(65);
console.log(result); 