function darkMode() {
  dark_mode_switch = document.getElementsByTagName("html")[0];

  if (dark_mode_switch.hasAttribute("data-bs-theme")) {
    dark_mode_switch.removeAttribute("data-bs-theme")
  } else {
    dark_mode_switch.setAttribute("data-bs-theme", "dark");
  }
}

document.getElementById("dark-mode-switch").addEventListener("click", darkMode)
