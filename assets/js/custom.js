let oldLiSection = "aboutButtonLi";
let currLiSection = "aboutButtonLi";
function changeSection(sectionId) {
    document.getElementById(oldLiSection).classList.remove("active");
    document.getElementById(sectionId).classList.add("active");
    oldLiSection = sectionId;

    document.removeEventListener('scroll', onScroll, true);
    setTimeout(function () {
        document.addEventListener('scroll', onScroll, true);
    }, 1000);
}

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= 0 &&
        rect.bottom >= 0
    );
}

const aboutDiv = document.getElementById('about');
const resumeDiv = document.getElementById('resume');
const workDiv = document.getElementById('work');
const blogDiv = document.getElementById('blog');
const contactDiv = document.getElementById('contact');

document.addEventListener('scroll', onScroll, true);

function onScroll() {
    if (isInViewport(aboutDiv)) {
        currLiSection = "aboutButtonLi";
    } else if (isInViewport(resumeDiv)) {
        currLiSection = "resumeButtonLi";
    } else if (isInViewport(workDiv)) {
        currLiSection = "workButtonLi";
    } else if (isInViewport(blogDiv)) {
        currLiSection = "blogButtonLi";
    } else if (isInViewport(contactDiv)) {
        currLiSection = "contactButtonLi";
    }
    document.getElementById(currLiSection).classList.add("active");
    if (oldLiSection !== currLiSection) {
        document.getElementById(oldLiSection).classList.remove("active");
        oldLiSection = currLiSection;
    }
}