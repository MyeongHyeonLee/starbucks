
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function() {
  //logic..
  searchInputEl.focus();
}) // input이 소속 되어 있는 search 클래스 아무곳이나 
//클릭해도 포커스가 됨

searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
}); // 포커스 되면 통합검색이란 글자가 출력//

searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
}); 

const thisYear = document.querySelector('.this-year'); //올해가 몇년도 인지 출력해주는 것
thisYear.textContent = new Date().getFullYear(); //textContent는 글자내용들을 알아내거나 지정하는 것
