$(function() {
	var url = 'https://restcountries.eu/rest/v2/name/';
	var $table = $("#countries-list");

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
		var $tableBody = $table.find('tbody'),
			result = "";
		
		resp.forEach(function(item) {
			result += '\
				<tr> \
					<td>' + item.name + '</td> \
					<td>' + item.capital + '</td> \
					<td>' + item.region + '</td> \
				</tr>';
		});

		$tableBody.empty().append(result);
	}
})