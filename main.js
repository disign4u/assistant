"use strict";
//todo Using the Fetch API
// https://de.wikipedia.org/wiki/ISO_3166-2:CH
// https://de.wikipedia.org/wiki/ISO_3166-2:AT
// https://de.wikipedia.org/wiki/ISO_3166-2:DE

const assistant = {
    saved: [],
    gesamtBillianz: {
        einahmen: 0,
        ausgaben:0,
        billanz:0
    },
    neuer_eintrag: {
        title:null,
        type:null,
        betrag:null,
        datum:null
    },
    bundeslaender: {
        bundesland: document.querySelectorAll('.list-h3'),
    },
    getData(){
        return document.querySelectorAll('.bl ul li');
    },
    getForm() {
        return document.querySelectorAll('#ls_request');
    },
    gesamt() {
        return this.bundeslaender.bundesland.length;
    },
    save_items(a) {
        console.log(a);
        this.saved.push(a);
        console.log(this.saved);
    },
    delete_items(a) {
        console.log(a);
    },
    create_items(a) {
        let form = this.getForm();
        let input = document.createElement('input');
        input.type = 'text';
        input.id = Math.round(Math.random()*100);
        input.className = 'bl';
        input.value = a;
        input.name='form[]';
        form[0].appendChild(input);
    },
    eintrag_erfassen() {
        this.neuer_eintrag.title = prompt("titel:");
        this.neuer_eintrag.type = prompt("type:");
        this.neuer_eintrag.betrag = prompt("betrag:");
        this.neuer_eintrag.datum = prompt("datum:");
    },

    eintrag_ausgeben() {
        console.table(
            this.neuer_eintrag.title ,
            this.neuer_eintrag.type,
            this.neuer_eintrag.betrag,  
            this.neuer_eintrag.datum
        )
     },

};

const machwas = (e)=>{
    //console.log(e.target,e);
    let form = assistant.getForm();
    let data = assistant.getData();
    let saved = document.getElementById('saved');
    let savedArray = [];
    let test = e.target.dataset['hotel'];
    console.log( JSON.parse(test));

    if(e.target.classList.contains('active')) {
        e.target.classList.remove('active');
        
    } else {
        e.target.classList.add('active');
        
    }
   
    data.forEach((item)=>{
       // console.log(item);
    });
};

let button = document.querySelectorAll('.bundesland');
button[0].addEventListener("click",machwas);
//console.log(button);

//console.log(assistant.getForm());

// non destructive filter > noJohn = John removed, 
// but someArray will not change
let someArray = getArray();
let noJohn = someArray.filter( el => el.name !== "John" ); 
log(`let noJohn = someArray.filter( el => el.name !== "John")`,
  `non destructive filter [noJohn] =`, format(noJohn));
log(`**someArray.length ${someArray.length}`);

// destructive filter/reassign John removed > someArray2 =
let someArray2 = getArray();
someArray2 = someArray2.filter( el => el.name !== "John" );
log("", 
  `someArray2 = someArray2.filter( el => el.name !== "John" )`,
  `destructive filter/reassign John removed [someArray2] =`, 
  format(someArray2));
log(`**someArray2.length after filter ${someArray2.length}`);

// destructive splice /w findIndex Brian remains > someArray3 =
let someArray3 = getArray();
someArray3.splice(someArray3.findIndex(v => v.name === "Kristian"), 1);
someArray3.splice(someArray3.findIndex(v => v.name === "John"), 1);
log("",
  `someArray3.splice(someArray3.findIndex(v => v.name === "Kristian"), 1),`,
  `destructive splice /w findIndex Brian remains [someArray3] =`, 
  format(someArray3));
log(`**someArray3.length after splice ${someArray3.length}`);

// if you're not sure about the contents of your array, 
// you should check the results of findIndex first
let someArray4 = getArray();
const indx = someArray4.findIndex(v => v.name === "Michael");
someArray4.splice(indx, indx >= 0 ? 1 : 0);
log("", `someArray4.splice(indx, indx >= 0 ? 1 : 0)`,
  `check findIndex result first [someArray4] = (nothing is removed)`,
  format(someArray4));
log(`**someArray4.length (should still be 3) ${someArray4.length}`);

// -- helpers -- 
function format(obj) {
  return JSON.stringify(obj, null, " ");
}

function log(...txt) {
  document.querySelector("pre").textContent += `${txt.join("\n")}\n`
}

function getArray() {
  return [ {name: "Kristian", lines: "2,5,10"},
           {name: "John", lines: "1,19,26,96"},
           {name: "Brian", lines: "3,9,62,36"} ];
}
