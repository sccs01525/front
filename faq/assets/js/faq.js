let accordion = document.getElementsByClassName('faq-title');

for (item in accordion) {
    accordion[item].addEventListener('click', function () {
        let answer = this.nextElementSibling;
        answer.classList.toggle('active');
    });
}
