function displayGraph(
	confirmed,
	nconfirmed,
	recovered,
	nrecovered,
	tested,
	ntested,
	deceased
) {
	document.getElementById("tableData").innerHTML =
		"<td>" +
		nconfirmed +
		"</td><td>" +
		nrecovered +
		"</td><td>" +
		ntested +
		"</td><td>" +
		confirmed +
		"</td><td>" +
		deceased +
		"</td><td>" +
		recovered +
		"</td><td>" +
		tested +
		"</td>";
}
