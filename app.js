const endDate = new Date("December 3, 2023 22:00:00").getTime();

document.getElementById("end-date").innerText = "3rd December 2023 10:00 PM";
const inputs = document.querySelectorAll("input");

function clock() {
    const now = new Date().getTime();
    const diff = endDate - now;

    if (diff < 0) return;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    inputs[0].value = days;
    inputs[1].value = hours;
    inputs[2].value = minutes;
    inputs[3].value = seconds;
}

clock();

setInterval(clock, 1000);
