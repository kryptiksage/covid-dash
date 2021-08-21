const toggleButtonState = () => {
	let filterBtn = document.getElementById("filter");

	if(filterBtn.disabled) {
		setTimeout(() => {
			filterBtn.innerHTML = "Filter";
			filterBtn.disabled = false;
		}, 300);

		return;
	}

	filterBtn.disabled = true;
	filterBtn.innerHTML = "<span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>";
};

const Api = async (state, date) => {
	toggleButtonState(); // loading spinner

	const stateCodeJSON = {
		"Andaman and Nicobar Islands": "AN",
		"Andhra Pradesh": "AP",
		"Arunachal Pradesh": "AR",
		Assam: "AS",
		Bihar: "BR",
		Chandigarh: "CG",
		Chhattisgarh: "CH",
		"Dadra and Nagar Haveli": "DN",
		"Daman and Diu": "DD",
		Delhi: "DL",
		Goa: "GA",
		Gujarat: "GJ",
		Haryana: "HR",
		"Himachal Pradesh": "HP",
		"Jammu and Kashmir": "JK",
		Jharkhand: "JH",
		Karnataka: "KA",
		Kerala: "KL",
		Ladakh: "LA",
		Lakshadweep: "LD",
		"Madhya Pradesh": "MP",
		Maharashtra: "MH",
		Manipur: "MN",
		Meghalaya: "ML",
		Mizoram: "MZ",
		Nagaland: "NL",
		Odisha: "OR",
		Puducherry: "PY",
		Punjab: "PB",
		Rajasthan: "RJ",
		Sikkim: "SK",
		"Tamil Nadu": "TN",
		Telangana: "TS",
		Tripura: "TR",
		"Uttar Pradesh": "UP",
		Uttarakhand: "UK",
		"West Bengal": "WB",
	};
	const res = await fetch("https://data.covid19india.org/v4/timeseries.json");
	const data = await res.json();
	const stateCode = stateCodeJSON[state];

	toggleButtonState(); // loading spinner

	return data[stateCode]["dates"];
};
