function resetUserInput() {
    document.getElementById("userInput").reset();
}

function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }