// // Function to toggle the visibility of the dropdown content
// function toggleDropdown() {
//     var dropdownContent = document.getElementById("myDropdown");
//     dropdownContent.classList.toggle("hide");
//   }

  
  // Function to toggle the visibility of the dropdown menu
function toggleDropdown() {
    var menuList = document.getElementById("menuList");
    menuList.style.display = (menuList.style.display === "block") ? "none" : "block";
}

// Close the dropdown if the user clicks outside of it
document.addEventListener('click', function(event) {
    var menuList = document.getElementById("menuList");
    var myDropdown = document.getElementById("myDropdown");
    if (event.target !== myDropdown && !myDropdown.contains(event.target) && event.target !== menuList && !menuList.contains(event.target)) {
        menuList.style.display = "none";
    }
});
