const dark = document.getElementById('dark')
const light = document.getElementById('light')
const body = document.body;


const theme = localStorage.getItem('theme');

if (theme) {
  body.classList.add(theme);
}

dark.addEventListener('click', (e)=>{
    e.preventDefault()
    
    body.classList.replace('light', 'dark')
    localStorage.setItem('theme', 'dark');

})

light.addEventListener('click', (e)=>{
    e.preventDefault()
    
    body.classList.replace('dark', 'light')
    localStorage.setItem('theme', 'light');

})