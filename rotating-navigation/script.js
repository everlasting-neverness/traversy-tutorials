const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const contaienr = document.querySelector('.container');

openBtn.addEventListener('click', () => contaienr.classList.add('show-nav'));
closeBtn.addEventListener('click', () => contaienr.classList.remove('show-nav'));