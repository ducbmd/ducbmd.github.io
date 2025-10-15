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

// Reveal email on user interaction to avoid static indexing
document.addEventListener('DOMContentLoaded', function () {
    const revealEl = document.getElementById('revealEmail');
    if (!revealEl) return;

    const encoded = [100, 117, 99, 98, 117, 105, 50, 55, 57, 64, 103, 109, 97, 105, 108, 46, 99, 111, 109];
    function makeEmail() {
        return String.fromCharCode.apply(null, encoded);
    }
    function reveal() {
        const email = makeEmail();
        revealEl.textContent = email;
        revealEl.removeAttribute('role');
        revealEl.removeAttribute('tabindex');
        revealEl.removeAttribute('aria-label');
    }

    revealEl.addEventListener('click', reveal);
    revealEl.addEventListener('keypress', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
            reveal();
        }
    });
});

// Obfuscate and attach social links without exposing username in static HTML
document.addEventListener('DOMContentLoaded', function () {
    try {
        const githubEl = document.getElementById('githubLink');
        const linkedinEl = document.getElementById('linkedinLink');
        const upworkEl = document.getElementById('upworkLink');
        if (githubEl) {
            const parts = ['https://github.com/', 'duc', 'bmd'];
            githubEl.href = parts[0] + parts[1] + parts[2];
            githubEl.rel = 'nofollow noopener noreferrer';
        }
        if (linkedinEl) {
            const parts = ['https://linkedin.com/in/', 'duc', 'bmd'];
            linkedinEl.href = parts[0] + parts[1] + parts[2];
            linkedinEl.rel = 'nofollow noopener noreferrer';
        }
        if (upworkEl) {
            const parts = ['https://www.upwork.com/freelancers/', 'duc', 'bm'];
            upworkEl.href = parts[0] + parts[1] + parts[2];
            upworkEl.rel = 'nofollow noopener noreferrer';
        }
    } catch (e) {
        // no-op
    }
});