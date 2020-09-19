// alert('soy un script')

const squareDark = document.getElementById('dark')
squareDark.addEventListener('click', ()=> {
    const container = document.getElementById('container')
    container.classList.remove('light')
    container.classList.remove('green')
    container.classList.add('dark')
    localStorage.setItem('tema', 'dark')
})


const squareLight = document.getElementById('light')
squareLight.addEventListener('click', ()=> {
    const container = document.getElementById('container')
    container.classList.remove('dark')
    container.classList.remove('green')
    container.classList.add('light')
    localStorage.setItem('tema', 'light')
})

const squareGreen = document.getElementById('green')
squareGreen.addEventListener('click', ()=> {
    const container = document.getElementById('container')
    container.classList.remove('dark')
    container.classList.remove('light')
    container.classList.add('green')
    localStorage.setItem('tema', 'green')
})

const temaEnStorage = () =>{
    const temaGuardado = localStorage.getItem('tema')
    const container = document.getElementById('container')
    if (temaGuardado == 'dark'){
        container.classList.add('dark')
    }else if (temaGuardado == 'green'){
        container.classList.add('green')
    }
    else if(temaGuardado == "light"){
        container.classList.add('light')
    }
}

temaEnStorage()



// ....

// /* <div class="container_class light pink" id="container_id"> */
// <div class="no_display_css_class" id="container_id"></div>
//         <header class="header">
//             <img src="./img/logo1.png" alt="logo" class="logo">
//             <nav class="nav">
//                 <ul class="menu">
//                     <li><a href="" class="linkMenu"></a>ITEM 1</li>
//                     <li><a href="" class="linkMenu"></a>ITEM 1</li>
//                     <li><a href="" class="linkMenu"></a>ITEM 1</li>
//                     <li><a href="" class="linkMenu"></a>ITEM 1</li>
//                 </ul>
//             </nav>
//         </header>
// </div>


// ....


// btnLight.addEventListener('click', ()=>{
//     const my_container = document.getElementById('container_id')
//     my_container.className = "no_display_css_class"
//     // container.classList.remove('cian')
//     // container.classList.remove('pink')
//     localStorage.setItem('tema', "light")
// })