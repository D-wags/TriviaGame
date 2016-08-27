var stopwatch = {
	time:0,
	lap:1,
	reset: function() {
	stopwatch.time = 0;
	stopwatch.lap = 1;
	},
	start: function() {
		token = setInterval(stopwatch.count, 1000);
	},

	stop; function() {
	clearInterval(token);
	token = undefined;
	}
	count: function() {
		stopwatch.time++;
		
	}
}