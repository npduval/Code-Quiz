function renderScore(){
    let highScore = JSON.parse(localStorage.getItem("scoreRecord"));
    document.querySelector("#listOfScore").textContent = "Highscore: " + highScore.student +" - "+ highScore.grade;

}

renderScore();

document.getElementById("back").onclick = function () {
    window.history.back();
}

document.getElementById("clear").onclick = function () {
    localStorage.clear();
    document.querySelector("#listOfScore").textContent =""


}
