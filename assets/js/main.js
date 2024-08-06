/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle=document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


/*=============== REMOVE MENU MOBILE ===============*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}
/*=====Rrmove mobile menu===*/
const navLink = document.querySelectorAll('.nav__link');


const linkAction = () =>{
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));



/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader =() =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header')
                       :header.classList.remove('blur-header')

}
window.addEventListener('scroll',blurHeader);

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()

    emailjs.sendForm('service_6z1c3wiv','template_q0ayrki','#contact-form','xVmBJWOichTAcSdpm')
    .then(() =>{
        contactMessage.textContent = 'Message sent Succesfully✅'
        setTimeout(()=>{
            contactMessage.textContent =''
        },5000)

        contactForm.reset();

    },()=>{
        contactMessage.textContent = 'Message not sent(service Error) ❌'


    })
}

contactForm.addEventListener('submit',sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        :scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll' , scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelector('section[id]')
const scrollActive = () =>{
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop=current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href+=' + sectionId + ']')
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }      
    })
}
window.addEventListener('scroll',scrollActive);
    
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    Delay:400,
    //reset:true
})
sr.reveal('.home__data, .home__social,.contact__container ,.footer__container')
sr.reveal('.home__image', {orgin:'bottom'})
sr.reveal('.home__image, .skills__data', {orgin:'left'})
sr.reveal('.home__image, .skills__content',{orgin:'right'})
sr.reveal('.services__card, .projects__card',{interval:100})
