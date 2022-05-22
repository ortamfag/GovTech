console.log('да')

//circle
const firstCircle = document.querySelector('#first-circle')
const secondCircle = document.querySelector('#second-circle')
const thirdCircle = document.querySelector('#third-circle')
const fourthCircle = document.querySelector('#fourth-circle')

//circleText

const firstText = document.querySelector('#first-text')
const secondText = document.querySelector('#second-text')
const thirdText = document.querySelector('#third-text')
const fourthText = document.querySelector('#fourth-text')

//1
firstCircle.addEventListener('mouseenter', () => firstCircle.classList.add('place__inner-item-active'))
firstCircle.addEventListener('mouseenter', () => firstText.classList.add('place__inner-text-item-active'))
firstCircle.addEventListener('mouseenter', () => secondCircle.classList.add('place__inner-item-disactive'))
firstCircle.addEventListener('mouseenter', () => thirdCircle.classList.add('place__inner-item-disactive'))
firstCircle.addEventListener('mouseenter', () => fourthCircle.classList.add('place__inner-item-disactive'))

firstCircle.addEventListener('mouseout', () => firstCircle.classList.remove('place__inner-item-active'))
firstCircle.addEventListener('mouseout', () => firstText.classList.remove('place__inner-text-item-active'))
firstCircle.addEventListener('mouseout', () => secondCircle.classList.remove('place__inner-item-disactive'))
firstCircle.addEventListener('mouseout', () => thirdCircle.classList.remove('place__inner-item-disactive'))
firstCircle.addEventListener('mouseout', () => fourthCircle.classList.remove('place__inner-item-disactive'))

//2
secondCircle.addEventListener('mouseenter', () => secondCircle.classList.add('place__inner-item-active'))
secondCircle.addEventListener('mouseenter', () => secondText.classList.add('place__inner-text-item-active'))
secondCircle.addEventListener('mouseenter', () => firstCircle.classList.add('place__inner-item-disactive'))
secondCircle.addEventListener('mouseenter', () => thirdCircle.classList.add('place__inner-item-disactive'))
secondCircle.addEventListener('mouseenter', () => fourthCircle.classList.add('place__inner-item-disactive'))

secondCircle.addEventListener('mouseout', () => secondCircle.classList.remove('place__inner-item-active'))
secondCircle.addEventListener('mouseout', () => secondText.classList.remove('place__inner-text-item-active'))
secondCircle.addEventListener('mouseout', () => firstCircle.classList.remove('place__inner-item-disactive'))
secondCircle.addEventListener('mouseout', () => thirdCircle.classList.remove('place__inner-item-disactive'))
secondCircle.addEventListener('mouseout', () => fourthCircle.classList.remove('place__inner-item-disactive'))

//3
thirdCircle.addEventListener('mouseenter', () => thirdCircle.classList.add('place__inner-item-active'))
thirdCircle.addEventListener('mouseenter', () => thirdText.classList.add('place__inner-text-item-active'))
thirdCircle.addEventListener('mouseenter', () => firstCircle.classList.add('place__inner-item-disactive'))
thirdCircle.addEventListener('mouseenter', () => secondCircle.classList.add('place__inner-item-disactive'))
thirdCircle.addEventListener('mouseenter', () => fourthCircle.classList.add('place__inner-item-disactive'))

thirdCircle.addEventListener('mouseout', () => thirdCircle.classList.remove('place__inner-item-active'))
thirdCircle.addEventListener('mouseout', () => thirdText.classList.remove('place__inner-text-item-active'))
thirdCircle.addEventListener('mouseout', () => firstCircle.classList.remove('place__inner-item-disactive'))
thirdCircle.addEventListener('mouseout', () => secondCircle.classList.remove('place__inner-item-disactive'))
thirdCircle.addEventListener('mouseout', () => fourthCircle.classList.remove('place__inner-item-disactive'))

//4
fourthCircle.addEventListener('mouseenter', () => fourthCircle.classList.add('place__inner-item-active'))
fourthCircle.addEventListener('mouseenter', () => fourthText.classList.add('place__inner-text-item-active'))
fourthCircle.addEventListener('mouseenter', () => firstCircle.classList.add('place__inner-item-disactive'))
fourthCircle.addEventListener('mouseenter', () => secondCircle.classList.add('place__inner-item-disactive'))
fourthCircle.addEventListener('mouseenter', () => thirdCircle.classList.add('place__inner-item-disactive'))

fourthCircle.addEventListener('mouseout', () => fourthCircle.classList.remove('place__inner-item-active'))
fourthCircle.addEventListener('mouseout', () => fourthText.classList.remove('place__inner-text-item-active'))
fourthCircle.addEventListener('mouseout', () => firstCircle.classList.remove('place__inner-item-disactive'))
fourthCircle.addEventListener('mouseout', () => secondCircle.classList.remove('place__inner-item-disactive'))
fourthCircle.addEventListener('mouseout', () => thirdCircle.classList.remove('place__inner-item-disactive'))