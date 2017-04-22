$(function() {
	var url = 'https://restcountries.eu/rest/v2/name/';
	var $countriesList = $('#countries');
	var $capitalsList = $('#capitals');
	var $regionsList = $('#regions');
	
	$('#search').click(searchCountries);

	function searchCountries() {
	  	var countryName = $('#country-name').val();

	  	if(!countryName.length) countryName = 'Poland';

	  	$.ajax({
	  		url: url + countryName,
	  		method: 'GET',
	  		success: showCountriesList
	  	});
	}

	function showCountriesList(resp) {
		$countriesList.empty();
		$capitalsList.empty();
		$regionsList.empty();
		
		resp.forEach(function(item) {
			$('<td>').text(item.name).appendTo($countriesList);
			$('<td>').text(item.capital).appendTo($capitalsList);
			$('<td>').text(item.region).appendTo($regionsList);
		});
	}
})