let menu = document.querySelector('.menu-button')
let exit = document.querySelector('.close')

menu.addEventListener('click', () => {
    document.querySelector('.navigation').classList.add('active');
    document.querySelector('.menu-button').classList.add('hide');
    document.querySelector('.close').classList.add('show');
})

exit.addEventListener('click', () => {
    document.querySelector('.navigation').classList.remove('active')
    document.querySelector('.menu-button').classList.remove('hide');
    document.querySelector('.close').classList.remove('show');
    // document.querySelector('.close').classList.add('show');
})


let skill = document.querySelector('#skill')
let education = document.querySelector('#education')
let experience = document.querySelector('#experience')

let kids = document.querySelector('.kids')
let male = document.querySelector('.male')
let female = document.querySelector('.female')
let up = document.querySelector('.up')

// skill.addEventListener('click', () => {
//     document.querySelector('.skills-solution').classList.toggle('active')
// })

// education.addEventListener('click', () => {
//     document.querySelector('.edu').classList.toggle('showSkills')
// })

// experience.addEventListener('click', () => {
//     document.querySelector('#experiences').classList.toggle('showSkills')
// })

kids.addEventListener ('click', () => {
    document.querySelector('.get').classList.toggle('blog')
    document.querySelector('.down').classList.toggle('hide')
    document.querySelector('.up').classList.toggle('show')
})

male.addEventListener ('click', () => {
    document.querySelector('.get-1').classList.toggle('blog')
    document.querySelector('.down-1').classList.toggle('hide')
    document.querySelector('.up-1').classList.toggle('show')
})

female.addEventListener ('click', () => {
    document.querySelector('.get-2').classList.toggle('blog')
    document.querySelector('.down-2').classList.toggle('hide')
    document.querySelector('.up-2').classList.toggle('show')
})
