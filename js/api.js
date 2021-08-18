const Api = async (state, date) => {
	console.log(state, date)
	const res = await fetch("https://data.covid19india.org/v4/timeseries.json");
	const data = await res.json();
	return data;
};

// module.exports = { Api };
