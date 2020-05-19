
document.addEventListener('scroll', () => {
    
    let div1 = document.getElementsByClassName('project-div')[0]
    let div2 = document.getElementsByClassName('project-div')[1]
    let div3 = document.getElementsByClassName('project-div')[2]
    let div4 = document.getElementsByClassName('project-div')[3]
    
    if (window.scrollY > 150){
       div1.classList.remove('hidden-left')
       div1.classList.add('regular-left')
    }

    if (window.scrollY > 500){
        div2.classList.remove('hidden-right')
        div2.classList.add('regular-right')
     }

     if (window.scrollY > 850){
        div3.classList.remove('hidden-left')
        div3.classList.add('regular-left')
     }

     if (window.scrollY > 1100){
        div4.classList.remove('hidden-right')
        div4.classList.add('regular-right')
     }


})