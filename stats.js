		let series1 = [
		 { date: new Date('2018-01-01'), visits: 32 },
	    { date: new Date('2018-01-02'), visits: 82 },
	    { date: new Date('2018-01-03'), visits: 74 },
	    { date: new Date('2018-01-04'), visits: 35 },
	    { date: new Date('2018-01-05'), visits: 54 },
	    { date: new Date('2018-01-06'), visits: 64 },
	    { date: new Date('2018-01-07'), visits: 44 },
		 { date: new Date('2018-01-08'), visits: 35 },
	    { date: new Date('2018-01-09'), visits: 36 },
	    { date: new Date('2018-01-10'), visits: 53 },
	    { date: new Date('2018-01-11'), visits: 78 },
	    { date: new Date('2018-01-12'), visits: 71 },
	    { date: new Date('2018-01-13'), visits: 42 },
	    { date: new Date('2018-01-14'), visits: 45 },
		 { date: new Date('2018-01-15'), visits: 34 },
	    { date: new Date('2018-01-16'), visits: 32 },
	    { date: new Date('2018-01-17'), visits: 54 },
	    { date: new Date('2018-01-18'), visits: 35 },
	    { date: new Date('2018-01-19'), visits: 31 },
	    { date: new Date('2018-01-20'), visits: 37 },
	    { date: new Date('2018-01-21'), visits: 36 },
		 { date: new Date('2018-01-22'), visits: 32 },
	    { date: new Date('2018-01-23'), visits: 82 },
	    { date: new Date('2018-01-24'), visits: 74 },
	    { date: new Date('2018-01-25'), visits: 35 },
	    { date: new Date('2018-01-26'), visits: 54 },
	    { date: new Date('2018-01-27'), visits: 64 },
	    { date: new Date('2018-01-28'), visits: 13 },
	    { date: new Date('2018-01-29'), visits: 65 },
	    { date: new Date('2018-01-30'), visits: 42 },
	    { date: new Date('2018-01-31'), visits: 48 },
		] 

const getAverage = (series1, boolean) => {
		let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		let visits = 0;
		let monday = 0;
		let tuesday = 0;
		let wednesday = 0;
		let thursday = 0;
		let friday = 0;
		let saturday = 0;
		let sunday = 0;

		const averageVisits = (day) => {
			day = day / series1.length + 1;
			return day;
		}
		
		if(boolean === "" || boolean != true) {	
		for(i = 0; i < series1.length; i++){
				visits += series1[i].visits;
			}
			visits = visits / series1.length + 1;
			return("Average visits: "+ visits);
		} else {
			for(i = 0; i < series1.length; i++){
				switch (series1[i].date.getDate()) {
					case 0:
						sunday += series1[i].visits;
						break;
					case 1:
						monday += series1[i].visits;
						break;
					case 2:
						tuesday += series1[i].visits;
						break;
					case 3:
						wednesday += series1[i].visits;
						break;
					case 4:
						thursday += series1[i].visits;
						break;
					case 5:
						friday += series1[i].visits;
						break;
					case 6:
						saturday += series1[i].visits;
						break;
					default:
					break;
				}
				return("Monday avarage visits:" + averageVisits(monday) );

			}
		}

};