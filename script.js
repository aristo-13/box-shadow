 const panel = document.querySelectorAll('.panel')
const box = document.querySelector('.box')
let col = document.querySelector('.colorr')
let stylebox = document.getElementById('stylebox') 
let hoff = '0px'
let voff = '0px'
let blurad = '0px'
let spr = '0px'

panel.forEach((el,index) =>{
    el.addEventListener('input', () =>{
       if(index === 0){
          hoff = el.value + 'px'
       }
       else if(index === 1){
          voff = el.value + 'px'
       }
      else if(index === 2){
          blurad = el.value + 'px'
       }
      else if(index === 3){
          spr = el.value + 'px'
       }
       update()
    })
})
col.addEventListener('input', () =>{
    update()
})
function update(){
    let shad =  `${hoff} ${voff} ${blurad} ${spr} ${col.value}`
    box.style.boxShadow = shad
    stylebox.value = `box-shadow: ${shad};`
}


let showStyle = document.querySelector('.style')
showStyle.addEventListener('click', () =>{
    if(stylebox !== ''){
    let feed = document.querySelector('.feed')
        feed.classList.add('tapped')
        setTimeout(() =>{
            feed.classList.remove('tapped')
        },3000)
       navigator.clipboard.writeText(stylebox.value)
    }
})