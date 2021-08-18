let state, date;

window.onload = () => {
	document.getElementById("filter").onclick = async (event) => {
		state = document.getElementById("state").value;
		date = document.getElementById("date").value;
		if (state == "States" || date == "") {
			window.alert("Select state and date");
			return;
		}

		// Table
		const data = await Api(state, date);
		const newData = data[date]["delta"];
		const totalData = data[date]["total"];
		const {
			confirmed: nconfirmed,
			recovered: nrecovered,
			tested: ntested,
		} = newData;
		const { confirmed, recovered, tested, deceased } = totalData;
		// Table : html
		displayGraph(
			confirmed,
			nconfirmed,
			recovered,
			nrecovered,
			tested,
			ntested,
			deceased
		);

		//Graph
		let graphDated = [];
		let graphConfirmed = [];
		let graphRecovered = [];
		let graphDeceased = [];
		for (var item in data) {
			if (data[item] && data[item]["delta"]) {
				graphDated.push(item);
				graphConfirmed.push(data[item]["delta"].confirmed);
				graphRecovered.push(data[item]["delta"].recovered);
				graphDeceased.push(data[item]["delta"].deceased);
			}
			if (new Date(item).getTime() > new Date(date).getTime()) {
				break;
			}
		}
		selected(graphDated, graphConfirmed, graphRecovered, graphDeceased);
	};
};
