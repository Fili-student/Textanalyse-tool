import { question } from "readline-sync";

// Entwickle ein Textanalyse-Tool in JavaScript, das verschiedene statistische Informationen über einen vom Benutzer eingegebenen Text liefert. Das Tool sollte folgende Funktionen bieten:
// Eingabe eines Texts: Das Programm sollte den Benutzer auffordern, einen beliebigen Text einzugeben.
// Analyse des Textes: Das Programm soll folgende Statistiken berechnen und ausgeben:
// Anzahl der Wörter im Text.

// Beispieltext
// let = "Hallo,hallo,hallo. Die Sonne scheint ein wenig und es sind angenehme 11 Grad draußen. Ein Tag an dem man lecker was kochen kann. Reis wird es sein an diesem Tag."



//   function anzahl(zaehle){
//      let zahl = deinText.length;
//      console.log(`In deinem Text sind ${zahl} Wörter!`);
//   }



// für den user!! zum input
function auffordern(){
    console.log("Hey schreib mir einen Text und ich analysiere ihn: >");
    return question('> ');
    }
    // RETURN question(); nicht vergessen!


 // JETZT ANALYSIEREN
 // WÖRTER AUFSPLITTEN!
//  das alles in eine große funktion!
 function aufteilen(stuecke) {
     let woerter = stuecke.toLowerCase().split(/\s+/).filter(woerter => woerter.length > 0);

  // das (/\s+/) splittet die wörter aus dem input! davor variable.split(/\s+/)
  // das : .filter(woerter => woerter.length > 0) filtert die white spaces also leerzeichen raus

// //   LÄNGE DER WÖRTER UND ANZAHL VERSCHIEDENER WÖRTER
let anzahlAller = woerter.length;
let anzahlVerschieden = new Set(woerter).size;

// SET : dieses objekt gibt wieder/ returnt die anzahl einzigartiger elemente in dem set
// dazu gehört new?
// also new Set(die variable um die es geht) und size denn size
// gibt am ende die size/größe/menge der elemente an die ja unique sind durch new Set


// DAS LÄNGSTE WORT WIRD HIER ANGEGEBEN
// erstmal ein let machen !
let laenge = woerter.reduce((longest, current) => current.length > longest.length ? current : longest, "" );
// variable.reduce  das heißt reduce reduziert es auf ein einziges element , nämlich in diesem falle das längste
// also wenn das jetzige  wort mehr buchstaben hat als das längste dann ist current true sonst ist longest true
// DANN LOG für unsere Fragen! 
console.log(`Wie viele Wörter gibt es hier : ${anzahlAller}`);
console.log(`Wie viele verschiedenen Wörter gibt es hier : ${anzahlVerschieden}`);
console.log(`Das ist das längste Wort hier : ${laenge}`);
}

// WEGEN DES INPUTS
let deinText = auffordern();

// UND DANN UM DEN TEXT MIT DEN GESCHRIEBENEN FUNKTIONEN ZU ANALYSIEREN KOMMT DAS 

aufteilen(deinText);

