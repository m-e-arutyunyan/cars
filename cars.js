        var app = new Vue({
				el: '#app',
				data: {
					message: 'Road2Vue!',
					car3left: 300,
					car2left: 200
				}
			})
		
		function tick() {
			  app.car3left = app.car3left + 1;	
		}

		var timerId = setInterval(tick, 50);

		// через 5 сек остановить повторы
		setTimeout(function () {
				clearInterval(timerId);
			}, 5000);	