angular.module('triptrader')
.controller('detailsCtrl', function($scope){
	$scope.trips=[
		{
			base: 'SEA',
			dates: '07Jul16 - 11Jul16',
			tripType: 'PM FA',
			reportTime:'1800',
			releaseTime:'1800',
			destination: 'KOA/PDX/ATL',
			layoverLength:'18/9/1150',
			position:'FB',
			tfp:'4.6',
			bonus:'$100',
			days:'2',
			postedBy:'RioJane',
			comment:'Come alone or the deal is off!!!'
		}
	];
});