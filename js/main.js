const btnDarkMode = document.querySelector(".dark-mode-btn");

// Проверка темной темы на уровне настроек

if (window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches) {
  btnDarkMode.classList.add("dark-mode-btn-active");
  document.body.classList.add("dark");
}

// Проверка темной темы на уровне LocalStorage

if (localStorage.getItem("darkMode") === "dark") {
  btnDarkMode.classList.add("dark-mode-btn-active");
  document.body.classList.add("dark");
} else if (localStorage.getItem("darkMode") === "light") {
  btnDarkMode.classList.remove("dark-mode-btn-active");
  document.body.classList.remove("dark");
}

//Проверка темной темы на уровне изменений системных настроек

window.matchMedia &&
  matchMedia("(prefers-color-scheme: dark)").addEventListener(
    "change",
    (event) => {
      const newColorScheme = event.matches ? "dark" : "light";

      if (newColorScheme === "dark") {
        btnDarkMode.classList.add("dark-mode-btn-active");
        document.body.classList.add("dark");
        localStorage.setItem("darkMode", "dark");
      } else {
        btnDarkMode.classList.remove("dark-mode-btn-active");
        document.body.classList.remove("dark");
        localStorage.setItem("darkMode", "light");
      }
    }
  );

//Изменение темной темы по кнопке
btnDarkMode.onclick = function () {
  btnDarkMode.classList.toggle("dark-mode-btn-active");
  const isDark = document.body.classList.toggle("dark");

  if (isDark) {
    localStorage.setItem("darkMode", "dark");
  } else {
    localStorage.setItem("darkMode", "light");
  }
};
