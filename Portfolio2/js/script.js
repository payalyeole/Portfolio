document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio Loaded!");

    // Smooth Scroll Animation
    const fadeElements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    });

    fadeElements.forEach(element => {
        observer.observe(element);
    });

    // Typing Animation
    const textArray = ["Payal Yeole", "a Developer", "a Problem Solver"];
    let typingElement = document.querySelector(".typing");
    let textIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textIndex].length) {
            typingElement.textContent += textArray[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        } else {
            setTimeout(erase, 2000);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typingElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 50);
        } else {
            textIndex = (textIndex + 1) % textArray.length;
            setTimeout(type, 500);
        }
    }

    type();
});


document.addEventListener("scroll", function () {
    let aboutSection = document.querySelector(".about");
    let position = aboutSection.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.3;

    if (position < screenPosition) {
        aboutSection.classList.add("visible");
    }
});



// Skills

document.addEventListener("scroll", function () {
    let skillsSection = document.querySelector(".skills");
    let progressBars = document.querySelectorAll(".progress-bar");
    let position = skillsSection.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.3;

    if (position < screenPosition) {
        progressBars.forEach(bar => {
            bar.style.width = bar.classList.contains("java") ? "90%" :
                              bar.classList.contains("frontend") ? "85%" :
                              bar.classList.contains("database") ? "80%" :
                              bar.classList.contains("git") ? "75%" :
                              "70%";
        });
    }
});
