const ToggleSkillButton = document.getElementById("toggleButton") as HTMLButtonElement;
const Skillslists = document.getElementById("skillsList") as HTMLElement;

ToggleSkillButton.addEventListener("click" , () => {
 if(Skillslists.style.display === "none") {
    Skillslists.style.display = "block"
    ToggleSkillButton.textContent ="Hide Skills"
 }
 else {
    Skillslists.style.display = "none";
    ToggleSkillButton.textContent = "Show Skills"
 }
})