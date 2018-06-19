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

		let series2 = [
		 { date: new Date('2018-01-01'), visits: 361 },
	    { date: new Date('2018-01-02'), visits: 43 },
	    { date: new Date('2018-01-03'), visits: 51 },
	    { date: new Date('2018-01-04'), visits: 56 },
	    { date: new Date('2018-01-05'), visits: 13 },
	    { date: new Date('2018-01-06'), visits: 64 },
	    { date: new Date('2018-01-07'), visits: 13 },
		 { date: new Date('2018-01-08'), visits: 32 },
	    { date: new Date('2018-01-09'), visits: 54 },
	    { date: new Date('2018-01-10'), visits: 43 },
	    { date: new Date('2018-01-11'), visits: 76 },
	    { date: new Date('2018-01-12'), visits: 13 },
	    { date: new Date('2018-01-13'), visits: 716 },
	    { date: new Date('2018-01-14'), visits: 95 },
		 { date: new Date('2018-01-15'), visits: 37 },
	    { date: new Date('2018-01-16'), visits: 64 },
	    { date: new Date('2018-01-17'), visits: 31 },
	    { date: new Date('2018-01-18'), visits: 36 },
	    { date: new Date('2018-01-19'), visits: 38 },
	    { date: new Date('2018-01-20'), visits: 31 },
	    { date: new Date('2018-01-21'), visits: 56 },
		 { date: new Date('2018-01-22'), visits: 34 },
	    { date: new Date('2018-01-23'), visits: 123 },
	    { date: new Date('2018-01-24'), visits: 236 },
	    { date: new Date('2018-01-25'), visits: 75 },
	    { date: new Date('2018-01-26'), visits: 32 },
	    { date: new Date('2018-01-27'), visits: 23 },
	    { date: new Date('2018-01-28'), visits: 75 },
	    { date: new Date('2018-01-29'), visits: 23 },
	    { date: new Date('2018-01-30'), visits: 85 },
	    { date: new Date('2018-01-31'), visits: 23 },
		] 

		let totalSeries = series1.concat(series2);

const getAverage = (series1, boolean) => {
		let visits = 0;

		let monday = 0;
		let tuesday = 0;
		let wednesday = 0;
		let thursday = 0;
		let friday = 0;
		let saturday = 0;
		let sunday = 0;

		let mondays = 0;
		let tuesdays = 0;
		let wednesdays = 0;
		let thursdays = 0;
		let fridays = 0;
		let saturdays = 0;
		let sundays = 0;

		

		const averageVisits = (day, howmany) => {
			day = day / howmany;
			return Math.round(day);
		}
		
		if(boolean === "" || boolean != true) {	
		for(i = 0; i < series1.length; i++){
				visits += series1[i].visits;
			}
			visits = visits / series1.length + 1;
			return("Average visits: "+ Math.round(visits));
		} else {
			for(i = 0; i < series1.length; i++){
				switch (series1[i].date.getDay()) {
					case 0:
						sunday += series1[i].visits;
						sundays++;
						break;
					case 1:
						monday += series1[i].visits;
						mondays++;
						break;
					case 2:
						tuesday += series1[i].visits;
						tuesdays++;
						break;
					case 3:
						wednesday += series1[i].visits;
						wednesdays++;
						break;
					case 4:
						thursday += series1[i].visits;
						thursdays++;
						break;
					case 5:
						friday += series1[i].visits;
						fridays++;
						break;
					case 6:
						saturday += series1[i].visits;
						saturdays++;
						break;
					default:
					break;
				}
			}	return("Monday avarage visits:" + averageVisits(monday, mondays) + " \n" +
								 "Tuesday avarage visits:" + averageVisits(tuesday, tuesdays) + " \n" +
								 "Wednesday avarage visits:" + averageVisits(wednesday, wednesdays) + " \n" +
								 "Thursday avarage visits:" + averageVisits(thursday, thursdays) + " \n" +
								 "Friday avarage visits:" + averageVisits(friday, fridays) + " \n" +
								 "Saturday avarage visits:" + averageVisits(saturday, saturdays) + " \n" +
								 "Sunday avarage visits:" + averageVisits(sunday, sundays));
		}
	};

	// getAverage(series1);
	// getAverage(series1,true);
	// getAverage(totalSeries);
	// getAverage(totalSeries,true);	