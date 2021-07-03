let counterSelector = document.getElementById("value")

const incrementButton = document.querySelector('[data-action="increment"]')
const decrementButton = document.querySelector('[data-action="decrement"]')

let counterValue = +counterSelector.textContent

const updateCounter = () => {
  counterSelector.textContent = counterValue
}

const increment = () => {
  counterValue++
  updateCounter()
}

const decrement = () => {
  counterValue--
  updateCounter()
}

incrementButton.addEventListener('click', increment)
decrementButton.addEventListener('click', decrement)