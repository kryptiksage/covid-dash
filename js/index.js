
let state, date;

window.onload = () => {
    document.getElementById("filter").onclick = (event) => {
        state = document.getElementById("state").value;
        date = document.getElementById("date").value;
        if (state == "States" || date == ""){
            window.alert("Select state and date");
            return;
        }
        Api(state, date);
    }
}