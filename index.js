// Your code here

//Code for moveing dodger left provided by lab.-----------------------------------------

const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
//additional function to move right -------------------------------------------------------
  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left < 360) {
      dodger.style.left = `${left + 1}px`;
    }
  }


document.addEventListener("keydown", function (e) {
     if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
    //additional else if to not use another event listener.
    else if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
  });
