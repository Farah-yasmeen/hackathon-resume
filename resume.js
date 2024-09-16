var ToggleSkillButton = document.getElementById("toggleButton");
var Skillslists = document.getElementById("skillsList");
ToggleSkillButton.addEventListener("click", function () {
    if (Skillslists.style.display === "none") {
        Skillslists.style.display = "block";
        ToggleSkillButton.textContent = "Hide Skills";
    }
    else {
        Skillslists.style.display = "none";
        ToggleSkillButton.textContent = "Show Skills";
    }
});
