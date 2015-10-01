angular.module('velourApp').service('mainService', function($http, $firebaseArray){



		this.calendar = [
			{date: 1, shows: []},
			{date: 2, shows: []},
			{date: 3, shows: []},
			{date: 4, shows: []},
			{date: 5, shows: []},
			{date: 6, shows: []},
			{date: 7, shows: []},
			{date: 8, shows: []},
			{date: 9, shows: []},
			{date: 10, shows: []},
			{date: 11, shows: []},
			{date: 12, shows: []},
			{date: 13, shows: []},
			{date: 14, shows: []}, 
			{date: 15, shows: []},
			{date: 16, shows: []},
			{date: 17, shows: []},
			{date: 18, shows: []},
			{date: 19, shows: []},
			{date: 20, shows: []},
			{date: 21, shows: []},
			{date: 22, shows: []},
			{date: 23, shows: []},
			{date: 24, shows: []},
			{date: 25, shows: []},
			{date: 26, shows: []},
			{date: 27, shows: []},
			{date: 28, shows: []},
			{date: 29, shows: []},
			{date: 30, shows: []},
			{date: 31, shows: []},
		];

	var url = 'https://velourshows.firebaseio.com';
	var addedShows = $firebaseArray(new Firebase(url + '/shows'));

	// this.showOrderer = function(){
	// 	for(var i=0; i <Shows.length; i++){
	// 		if (Shows[i])
	// 	}
	// }
	// this.showSorter = function(){
	// 	for(var i = 0; i < Shows.length; i++){
	// 		for(var j = 0; j < this.calendar.length; j++){
	// 			if (Shows[i].dayOfShow === this.calendar[j].date){
	// 				this.calendar[j].shows.push(Shows[i])
	// 				this.calendar[j].isShow = true;
	// 				}
	// 			}	
	// 		}
	// 	}

		this.showSorter = function(unsortedShows, calendar){	
			for(var i = 0; i < unsortedShows.length; i++){
				for(var j = 0; j < calendar.length; j++){
					if (unsortedShows[i].dayOfShow === calendar[j].date){
						calendar[j].shows.push(unsortedShows[i])
						calendar[j].isShow = true;
					}
				}	
			}
		}

	var Shows = [
	{photo: 'url to photo',artist:'death Cab', dayOfShow:2, timeOfShow:'5:00'},
	{photo: 'url to photo',artist:'Bright Eyes', dayOfShow:1, timeOfShow:'7:00'}];

	// showSorter()
	// console.log(this.calendar,'calendar')


	this.getDate = function(){
			var weekday = new Array(7);
			weekday[0]=  "Sunday";
			weekday[1] = "Monday";
			weekday[2] = "Tuesday";
			weekday[3] = "Wednesday";
			weekday[4] = "Thursday";
			weekday[5] = "Friday";
			weekday[6] = "Saturday";
			var dt = new Date();
			todaysDate = weekday[dt.getDay()]+" "+(dt.getMonth() + 1) + " / " + dt.getDate();
			return todaysDate;
		}

	this.addShow = function(Photo, Artist, Day, Month, Year, Time){
				addedShows.$add({photo: Photo, artist: Artist, day: Number(Day), month: Number(Month), year:Number(Year), time:Time})
					.then(function(){alert("sucessfully added " + Artist)});
		}
		

	this.getShows = function(){
		return $http({
				method: 'GET',
				url: 'https://velourshows.firebaseio.com/shows.json'
			}).then(function(result){
				 var showData = [];
				 for(var show in result.data){

				 	Photo= result.data[show].photo;
				 	Artist= result.data[show].artist;
				 	Day= result.data[show].day;
				 	Month= result.data[show].month;
				 	Year= result.data[show].year;
				 	Time= result.data[show].time;

		 			showData.push({photo: Photo, artist:Artist, dayOfShow:Day, month: Month,year:Year, timeOfShow:Time,})
		 	}
		 	return showData;

		})

	
	}
})

