var number = Number(window.prompt("Write Number 1:", ""));
		var number2 = Number(window.prompt("Write Number 2:", ""));
		var number3 = Number(window.prompt("Write Number 3:", ""));

		

		function testnums(number,number2,number3){
			if (number > number2) {
				if (number > number3) {
					document.write(number + ' is the biggest');
				}
			}
				else if(number2 > number3){
					if (number2 > number) {
						document.write(number2 + ' is the biggest');
					}
				}
				else{
					document.write(number3 + ' is the biggest');
				}
		}

		
	testnums(number,number2,number3);