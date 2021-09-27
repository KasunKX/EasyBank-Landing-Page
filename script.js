let menuBarButton = document.getElementById("menuButton")
let menuBar = document.getElementById("menu")



let menuOpen = 0

menuBarButton.addEventListener("click", function(){
   if (menuOpen === 0){
      menuOpen = 1
   }else{
      menuOpen = 0
   }


   if (menuOpen === 1){

      menuBar.innerHTML = `
      <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
      <li>Blog</li>
      <li>Careers</li>
      </ul>
      `

      menuBarButton.innerHTML = 
      `
      <img src="images/icon-close.svg" alt="" class="hamburger" style="transition: 0.3s; width:60%"">
      `
     

   }
   else{
      menuBarButton.innerHTML = 
      `
      <img src="images/icon-hamburger.svg" alt="" class="hamburger">
      `
      menuBar.innerHTML = ""
    
   }
   console.log(menuOpen)
})