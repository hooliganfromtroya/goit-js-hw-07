const inputSelector = document.getElementById("validation-input");
const dataLength = +inputSelector.getAttribute("data-length");

inputSelector.addEventListener("blur", validateValue);

function validateValue({ currentTarget: { value } }) {
  inputSelector.classList.add(
    value.length === dataLength ? "valid" : "invalid"
  );
  inputSelector.classList.remove(
    value.length !== dataLength ? "valid" : "invalid"
  );
}
