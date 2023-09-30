const roleSwitch = document.getElementById("commander");
const nameSwitch = document.getElementById("name");
const bioSwitch = document.getElementById("bio");
const imageSwitch = document.getElementById("Image");
const buttonSwitch1 = document.getElementById("buttonA");
const buttonSwitch2 = document.getElementById("buttonB");
const buttonSwitch3 = document.getElementById("buttonC");
const buttonSwitch4 = document.getElementById("buttonD");


        const role = ["Commander", "Mission Specialist", "Pilot", "Flight Engineer"];
        const Name = ["Douglas Hurley", "Mark Shuttleworth", "Victor Glover", "Anousheh Ansari"];
        const bio = ["Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.", "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.", "Glover piloted the first SpaceX Crew Dragon flight to the International Space Station. A U.S. Navy commander, he operates an F/A-18 jet. He was part of Expedition 64 and served as a station systems flight engineer.", "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."];
        const image = ["crew/image-douglas-hurley.png", "crew/image-mark-shuttleworth.png", "crew/image-victor-glover.png", "crew/image-anousheh-ansari.png"];

function updateContentA() {
        roleSwitch.textContent = role[0];
        nameSwitch.textContent = Name[0];
        bioSwitch.textContent = bio[0];
        imageSwitch.src = image[0];
}
function updateContentB() {
    roleSwitch.textContent = role[1];
    nameSwitch.textContent = Name[1];
    bioSwitch.textContent = bio[1];
    imageSwitch.src = image[1];
}
function updateContentC() {
    roleSwitch.textContent = role[2];
    nameSwitch.textContent = Name[2];
    bioSwitch.textContent = bio[2];
    imageSwitch.src = image[2];
}
function updateContentD() {
    roleSwitch.textContent = role[3];
    nameSwitch.textContent = Name[3];
    bioSwitch.textContent = bio[3];
    imageSwitch.src = image[3];
}

buttonSwitch1.addEventListener("click", updateContentA);
buttonSwitch2.addEventListener("click", updateContentB);
buttonSwitch3.addEventListener("click", updateContentC);
buttonSwitch4.addEventListener("click", updateContentD);

document.querySelector('.button-1').classList.add('is-toggle');

        function isToggle(selector) {
            const buttonElement = document.querySelector(selector);
            if(!buttonElement.classList.contains('is-toggle')) {

                removePreviousButton();

                buttonElement.classList.add('is-toggle');

                
            } else {
                buttonElement.classList.remove('is-toggle');
            }
        }

        function removePreviousButton(){
                const previousButton = document.querySelector('.is-toggle');
            if (previousButton) {
                previousButton.classList.remove('is-toggle');
            }
        }


        function adding() {
            if(!document.querySelector('.nav').classList.contains('nav-toggle')) {
                document.querySelector('.nav').classList.add('nav-toggle');
                document.querySelector('.hamburger').classList.add('hamburger-toggle');
                document.querySelector('.menu-x').classList.add('menu-x-toggle');
                document.querySelector('.menu').classList.add('menu-toggle');

            } else {
                document.querySelector('.nav').classList.remove('nav-toggle');
                document.querySelector('.hamburger').classList.remove('hamburger-toggle');
                document.querySelector('.menu-x').classList.remove('menu-x-toggle');
                document.querySelector('.menu').classList.remove('menu-toggle');
            }
                
        }
