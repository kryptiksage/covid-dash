let state, date;

const getYesterdayDate = () => {
	let date = new Date(Date.now() - 86400000);

	let day = date.getDate();
	let month = date.getMonth() + 1; // getMonth represents jan as 0
	let year = date.getFullYear();

	if(day < 10) {
		day = "0" + day;
	}

	if(month < 10) {
		month = "0" + month;
	}

	return year + "-" + month + "-" + day;
};

window.onload = () => {
	document.getElementById("state").value = "Kerala";
	document.getElementById("date").value = getYesterdayDate();

	document.getElementById("filter").onclick = async (event) => {
		state = document.getElementById("state").value;
		date = document.getElementById("date").value;
		
		if (state == "States" || date == "") {
			window.alert("Select state and date");
			return;
		}

		// Table
		const data = await Api(state, date);

        if(data[date] == undefined){
            alert("Data not available for the requested date");
            return;
        }

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
        let dateList = Object.keys(data);
        let requiredDateList = dateList.slice((dateList.indexOf(date) - 6), (dateList.indexOf(date) + 1));

        let graphDated = []
        let graphConfirmed = [];
        let graphRecovered = [];
        let graphDeceased = [];

        for (var item in requiredDateList) {
            if (data[requiredDateList[item]] && data[requiredDateList[item]]["delta"]) {
                graphDated.push(requiredDateList[item])
                graphConfirmed.push(data[requiredDateList[item]]["delta"].confirmed)
                graphRecovered.push(data[requiredDateList[item]]["delta"].recovered)
                graphDeceased.push(data[requiredDateList[item]]["delta"].deceased)
            }
        }
        selected(graphDated, graphConfirmed, graphRecovered, graphDeceased)
    };

	document.getElementById("filter").click();
};
