// For

let ejFor = document.getElementById("ejFor");

function emergente() {
  for (var i = 0; i < 9; i++) {
    alert("Activa las ventanas emergentes para detener este SPAM");
    window.open(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQirLeW4OUpXlyc_rUeKMhySPLvLiJEEoZ24A&usqp=CAU"
    );
  }
}

ejFor.onclick = function () {
  emergente();
};
