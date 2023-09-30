
const nameElement = document.getElementById("name");
const descriptionElement = document.getElementById("description");
const imageElement = document.getElementById("image");
const buttonElement1 = document.getElementById("button-1"); 
const buttonElement2 = document.getElementById("button-2");
const buttonElement3 = document.getElementById("button-3");

    const Name = ["Launch vehicle", "Spaceport", "Space capsule"];
    const Description = ["A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!", "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.", "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."];
    const img = ["technology/image-launch-vehicle-portrait.jpg", "technology/image-spaceport-portrait.jpg", "technology/image-space-capsule-portrait.jpg"];



function updateContent1() {
    nameElement.textContent = Name[0];
    descriptionElement.textContent = Description[0];
    if (window.innerWidth >= 0 && window.innerWidth <= 1024) {
        imageElement.src = "technology/image-launch-vehicle-landscape-11.jpg";
    } else {
        imageElement.src = img[0];
    }
}
function updateContent2() {
    nameElement.textContent = Name[1];
    descriptionElement.textContent = Description[1];
    if (window.innerWidth >= 0 && window.innerWidth <= 1024) {
        imageElement.src = "technology/image-spaceport-landscape.jpg";
    } else {
        imageElement.src = img[1];
    }
}
function updateContent3() {
    nameElement.textContent = Name[2];
    descriptionElement.textContent = Description[2];
    if (window.innerWidth >= 0 && window.innerWidth <= 1024) {
        imageElement.src = "technology/image-space-capsule-landscape.jpg";
    } else {
        imageElement.src = img[2];
    }
}

updateContent1();

window.addEventListener('resize', function () {
    if (document.querySelector('.first-button').classList.contains('is-toggle')) {
      updateContent1();
    } else if (document.querySelector('.second-button').classList.contains('is-toggle')) {
        updateContent2();
      } else if (document.querySelector('.third-button').classList.contains('is-toggle')) {
        updateContent3();
      } 
  });

buttonElement1.addEventListener("click", updateContent1);
buttonElement2.addEventListener("click", updateContent2);
buttonElement3.addEventListener("click", updateContent3);

document.querySelector('.js-1').classList.add('is-toggle');

function isToggle(selector) {
    const buttonElement = document.querySelector(selector);
    if(!buttonElement.classList.contains('is-toggle')) {
        removePreviousButton();
        buttonElement.classList.add('is-toggle');
    } else {
        buttonElement.classList.remove('is-toggle');
    }
}

        function removePreviousButton() {
            const previousButton = document.querySelector('.is-toggle');
            if(previousButton) {
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

    