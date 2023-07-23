const touchButton = document.querySelector(".float-text");
const card = document.querySelector(".float-card-info");
const close = document.querySelector(".close");

touchButton.addEventListener("click", moveCard);
close.addEventListener("click", moveCard);

function moveCard() {
  card.classList.toggle("active");
}

function toggleDarkMode() {
  var body = document.body;
  body.classList.toggle("dark-mode");
}

// *****************

document.addEventListener("DOMContentLoaded", function () {
  const projectsPerLoad = 4;

  // Get references to the project container and the "Load More" button
  // const projectContainer = document.querySelector(".container");
  const loadMoreButton = document.getElementById("loadMoreButton");

  // Get all the project cards
  const projectCards = document.querySelectorAll(".card");

  // Variable to keep track of the number of projects already shown
  let projectsShown = 0;

  // Function to load more projects when the "Load More" button is clicked
  function loadMoreProjects() {
    // Calculate the number of projects to show in this batch
    const projectsToShow = Math.min(
      projectsPerLoad,
      projectCards.length - projectsShown
    );

    // Show the next batch of projects
    for (let i = projectsShown; i < projectsShown + projectsToShow; i++) {
      const projectCard = projectCards[i];
      projectCard.style.display = "block";
    }

    // Update the number of projects already shown
    projectsShown += projectsToShow;

    // If all projects are shown, hide the "Load More" button
    if (projectsShown === projectCards.length) {
      loadMoreButton.style.display = "none";
    }
  }

  // Function to hide all projects
  function hideAllProjects() {
    projectCards.forEach((projectCard) => {
      projectCard.style.display = "none";
    });
  }

  // Show the first batch of projects (4 projects)
  hideAllProjects();
  loadMoreProjects();

  // Attach the click event to the "Load More" button
  loadMoreButton.addEventListener("click", loadMoreProjects);
});

document.addEventListener("selectstart", function (e) {
  e.preventDefault();
  // alert("העתקה אסורה!");
});

function showPopup() {
  Swal.fire({
    title: "HELLO !",
    text: "This site is copyrighteds",
    icon: "info",
    confirmButtonText: "אישור",
  });
}
// onclick="showPopup()"
document.addEventListener("contextmenu", function (event) {
  // מניעת הפעלת התפריט הנפתח ברקע
  event.preventDefault();

  // הפעלת הפונקציה showPopup()
  showPopup();
});
