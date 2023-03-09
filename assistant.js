!(function (a, f) {
	"use strict";
	if (!a || !f) {
		return;
	}
	console.log(a,f);
	//Assistan
	let af = {
		count: 0,
		saved: [],
		form: a.querySelector('#cst-request-form')[0],
		buttons: f.querySelectorAll('button') || null,
		saveArea: a.querySelectorAll('.saved-items')[0],
		saveItems(s){
			try {
				let array = JSON.parse(s);
				array.forEach((item)=>{
					this.saved.push(item);
					this.create_input(item);
				})
			} catch(e) {
				console.log(e);
			};
		},
		deleteItems(s) {
			try {
				let array = JSON.parse(s);
				array.forEach((item)=> {
					let index = this.saved.indexOf(item);
					this.saved.splice(index,1);
					this.delete_input(item);
				})
			} catch(error) {
				console.log(error);
			};
		},
		create_input(id) {
			let input = document.createElement('input');
			input.type = 'hidden';
			input.id = id;
			input.className = 'hotel_input';
			input.value = id;
			input.name='form[]';
			this.saveArea.appendChild(input);
		},
		delete_input(id) {
			const element = document.getElementById(id);
			try {
				element.remove();
			} catch (error) {
				console.log(error);
			}
		}
	};

	const checkButtons = (e) => {
		let arrayString = e.target.dataset.hotels;
		let array = JSON.parse(e.target.dataset.hotels);
		let msg = document.querySelectorAll('.saved-items')[0];
		let active = e.target.classList.contains('active');
		if (af.count < 2) { 
			if(active) {
				e.target.classList.remove('active');
				af.count--;
				af.deleteItems(arrayString);
			} else {
				e.target.classList.add('active');
				af.count++;
				af.saveItems(arrayString);
			}
		} else {
			if(active) {
				e.target.classList.remove('active');
				af.count--;
				af.deleteItems(arrayString);
			} else {
				alert('max 2');
			}
		}

		//msg.textContent = "Bundesländer " + af.count + " erreicht.";
		//console.log(af.saved);
	};

	if (af.buttons) {
		af.buttons.forEach((button) => {
			button.addEventListener('click', checkButtons);
		});
	}
	if(af.form) {
		af.form.addEventListener("submit", logSubmit);
	}
	function logSubmit(event) {
		log.textContent = `Form Submitted! Timestamp: ${event.timeStamp}`;
		event.preventDefault();
	}

})(document.getElementById("assistant"), document.getElementById("specialfilter"));

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