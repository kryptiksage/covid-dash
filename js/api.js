const Api = async () => {
	const res = await fetch("https://data.covid19india.org/v4/timeseries.json");
	const data = await res.json();
	return data;
};

module.exports = { Api };
