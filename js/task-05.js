const refs = {
  input: document.getElementById("name-input"),
  output: document.getElementById("name-output"),
};

refs.input.addEventListener("input", onInput);

function onInput({ currentTarget }) {
  const { value } = currentTarget;
  refs.output.textContent = value.length <= 0 ? "незнакомец" : value;
}
