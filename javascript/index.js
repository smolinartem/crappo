const menu = document.querySelector('.menu')
const burger = document.querySelector('.header__burger')

burger.addEventListener('click', () => {
  menu.classList.toggle('menu_active')
  burger.classList.toggle('header__burger_active')
})

console.log(menu, burger)
