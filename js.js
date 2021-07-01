let switch_mode = document.getElementById("switch_mode")

switch_mode.onclick = function (){
      let theme = document.getElementById("main_mode")

      if (theme.getAttribute("href") == "./style.css"){
            theme.href = './dark.css'
      }
      else {
            theme.href = "./style.css"
      }
}