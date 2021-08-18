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
        const data = await FetchData(state, date);
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
};
