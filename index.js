document.querySelector(".btn-primary").addEventListener("click", function () {
  document.getElementById("algorithm").scrollIntoView({ behavior: "smooth" });
  document.getElementById("algorithm").focus();
});

document.querySelector(".retry-button").addEventListener("click", function () {
  location.reload();
});

let arr;

document
  .getElementById("countSubmitButton")
  .addEventListener("click", submitCount);
document
  .getElementById("elementsSubmitButton")
  .addEventListener("click", submitElements);
document.getElementById("searchButton").addEventListener("click", search);

function submitCount() {
  var count = parseInt(document.getElementById("countField").value);
  if (!isNaN(count) && count > 0) {
    arr = new Array(count);
    document.getElementById("countSubmitButton").style.display = "none";
    document.getElementById("inputElements").style.display = "block";
  } else {
    document.getElementById("result").textContent =
      "Please enter a valid positive integer.";
  }
}

function submitElements() {
  var elements = document
    .getElementById("elementsField")
    .value.trim()
    .split(/\s+/);
  try {
    for (var i = 0; i < arr.length; i++) {
      arr[i] = parseInt(elements[i]);
    }
    var enteredElements = "Entered elements: ";
    for (var num of arr) {
      enteredElements += num + " ";
    }
    document.getElementById("arrayElements").textContent = enteredElements;
  } catch (error) {
    document.getElementById("result").textContent =
      "Invalid input for array elements.";
  }
}

function search() {
  var key = parseInt(document.getElementById("keyField").value);
  try {
    var index = interpolationSearch(arr, key);
    if (index !== -1)
      document.getElementById("keyFound").textContent =
        "Key found at index: " + index;
    else
      document.getElementById("keyFound").textContent =
        "Key not found in the array.";
  } catch (error) {
    document.getElementById("result").textContent =
      "Invalid input for search key.";
  }
}

function interpolationSearch(arr, key) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high && key >= arr[low] && key <= arr[high]) {
    let pos =
      low +
      Math.floor(((high - low) / (arr[high] - arr[low])) * (key - arr[low]));

    if (arr[pos] === key) return pos;
    else if (arr[pos] < key) low = pos + 1;
    else high = pos - 1;
  }
  return -1;
}
