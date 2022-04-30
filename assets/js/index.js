let array = [];

function addElementHandler() {
  let element = document.getElementById("element").value;

  array.push(element);
  // console.log(array);

  document.getElementById("element").value = "";
}

// Displays original Array
function showOriginalArrayHandler() {
  if(array.length == 0) {
    alert("Array is empty");
  } else {
    document.getElementById("solution").style.display = "block";
    document.getElementById("originalArrayDisplayIntro").style.display = "block";
    document.getElementById("originalArrayDisplay").innerText = "[" + array + "]" ;
  }
  
}

// Displays solution
function showSolutionHandler() {
  if(array.length == 0) {
    alert("Array is empty");
  } else if (array.length == 1) {
    alert("There should be atleast 2 elements in your array");
  } else {

    document.getElementById("solution").style.display = "block";
    document.getElementById("solutionDisplayIntro").style.display = "block";

    const rotationCount = prompt("Enter the number of rotation you want !", 2);

    for(j=0; j<rotationCount; j++) {
      let lastElement = array[array.length-1];
      // console.log(lastElement);

      for(i=array.length-1 ;i>=0; i--) {
        if (i==0) {
          array[0] = lastElement;
        } else {
          array[i] = array[i-1];
        }
      }
    }

    document.getElementById("solutionDisplay").innerText = "[" + array + "]" ;
  }
}