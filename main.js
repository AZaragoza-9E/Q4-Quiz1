//name input
function greet(name) {
	var name=document.getElementById('fname').value;
	document.getElementById('Name_entry').innerHTML = "Hi,  " + name + '!';

function greet () {
	var name = document.getElementById('fname').value;
	document.getElementById('greet').innerHTML = 'Hi, ' + name + '!';	
}

	document.getElementById("fname").onchange = function() {myName()};

function myName() {
	var name = document.getElementById("fname")
	name.value = name.value.toUpperCase();
}

//ONKEYDOWN
function myFunction() {
	document.getElementById("greet").innerHTML = "ye"
}
			
//metric system
function metric() {
	var weight = document.getElementById('weightkg').value;
	var height = document.getElementById('heightm').value;
	var bmi = (weight / (Math.pow(height, 2))).toFixed(1);
	
	if (bmi < 18.5) {
		window.alert(bmi + ' = Underweight');
	}
		else if (bmi >= 18.5 && bmi <= 24.9) {
			window.alert(bmi + ' = Normal weight');
		}
		else if (bmi >= 25 && bmi <= 29.9) {
			window.alert(bmi + ' = Overweight');
		}
		else if (bmi >= 30 && bmi <= 34.9) {
			window.alert(bmi + ' = Obese');
		}
		else if (bmi >= 35) {
			window.alert(bmi + ' = Extremely Obese')
		}
}

//imperial system
function imperial() {
	var weight = document.getElementById('pounds').value;
	var height = document.getElementById('inches').value;
	var bmi = (Math.abs(weight / (Math.pow(height, 2))) * 703).toFixed(1);
	
	if (bmi < 18.5) {
		window.alert(bmi + ' = Underweight');
	}
		else if (bmi >= 18.5 && bmi <= 24.9) {
			window.alert(bmi + ' = Normal weight');
		}
		else if (bmi >= 25 && bmi <= 29.9) {
			window.alert(bmi + ' = Overweight');
		}
		else if (bmi >= 30) {
			window.alert(bmi + ' = Obese');
		}
		else if (bmi >= 35) {
			window.alert(bmi + ' = Extremely Obese')
		}
}