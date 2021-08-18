import { displayGraph } from "./table.js";

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
		const { newData, totalData } = await FetchData(state, date);
		console.log(newData);
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
	};
};
