// Select the button
const btn = document.querySelector(".theme-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// Listen for a click on the button 
btn.addEventListener("click", function() {
    // If the OS is set to dark mode...
    if (prefersDarkScheme.matches) {
      // ...then apply the .light-theme class to override those styles
      document.body.classList.toggle("light-theme");
      // Otherwise...
    } 
    else {
      // ...apply the .dark-theme class to override the default light styles
      document.body.classList.toggle("dark-theme");
    }
});
