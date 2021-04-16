const toggleBtn = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');
const { body } = document;

toggleBtn.addEventListener('click', toggleNavigation);

function toggleNavigation() {
	body.classList.toggle('scroll-disable');
	navigation.classList.toggle('active');
	toggleBtn.classList.toggle('active');
}
