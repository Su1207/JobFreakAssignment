function showContent(component) {
  var contentDivs = document.getElementsByClassName("content-div");

  for (var i = 0; i < contentDivs.length; i++) {
    //display set to none for each component
    contentDivs[i].style.display = "none";
  }

  if (component === "home") {
    // Display the Home component by default
    document.getElementById("home").style.display = "block";
  } else {
    document.getElementById(component).style.display = "block";
  }

  var selectedDiv = document.getElementById(component);
  selectedDiv.classList.remove("hide");
  selectedDiv.classList.add("show");
}

// Call showContent() with 'home' to display Home component on page load
window.onload = function () {
  showContent("home");
};

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Here you can add code to process the form submission, such as sending an email or saving the message to a database.
    // For this example, we will simply display a success message.

    document.getElementById("success-message").style.display = "block";
    document.getElementById("error-message").style.display = "none";

    // Reset the form
    document.getElementById("contact-form").reset();
  });
