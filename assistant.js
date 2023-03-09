!(function ( a , f ) {
	"use strict";
	if ( !a || !f ) {
		return;
    }
	//console.log(a,f);
    //Assistan Settings
    let af = {
		count:0,
        saved:[],
		buttons: f.querySelectorAll('button') || null,
		saveArea: a.querySelectorAll('.saved-items')[0],
		saveItems: ()=>{

		},
		deleteItems: () =>{

		}
    };
	console.log(af.buttons);
	const checkButtons = (e)=>{
		let array = JSON.parse(e.target.closest('button').dataset.hotels);
		let msg = document.querySelectorAll('.saved-items')[0];

		

		if(e.target.classList.contains('active')) {
			e.target.classList.remove('active');
			msg.textContent = "delete items";
			af.count--;
		} else {
			af.count++;
			e.target.classList.add('active');
			msg.textContent = "save items";
		}

        if( af.count < 3 ) {
			msg.textContent = "max. Bundesländer "+ af.count + " erreicht.";
		} else {
			msg.textContent = "alles gut";
		}
	};

	if (af.buttons) {
		af.buttons.forEach((button)=> {
			button.addEventListener('click', checkButtons);
		});
	}

})( document.getElementById("assistant"),document.getElementById("specialfilter") );

    /**
     * Während Arrays Sammlungen beliebiger Elemente sind, 
     * die beliebig oft im Array vorkommen dürfen, 
     * sind Sets Sammlungen, in denen jeder Wert nur einmal 
     * vorkommen kann.
    

    let set1 = new Set (["Hund", "Katze", "Maus"]);
    let arr = ["Hund", "Katze", "Maus", "Katze"];
    let set2 = new Set (arr); // die doppelte Katze ist entfernt

    const set3 = new Set();
    set3.add ("Hund").add ("Katze").add ("Maus");
     */