const showMenu = menu => {
  menu.addEventListener("click", _evt => {
    let buttons = document.getElementsByClassName("hb-buttons")[0]

    if (buttons.classList.contains("toggle-content")) {
      buttons.toggleAttribute('hidden')
      setTimeout(() => {
       buttons.classList.toggle("toggle-content")
       buttons.classList.toggle("is-visible")
      }, 200)
    } else {
      buttons.classList.toggle("is-visible")
      buttons.classList.toggle("toggle-content")
      setTimeout(() => {
        buttons.toggleAttribute('hidden')
      }, 390)
    }
  }, false)
}

document.addEventListener("DOMContentLoaded", () => {
  let menu = document.getElementById("hb-menu")
  showMenu(menu)
})