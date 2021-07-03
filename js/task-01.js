const list = document.getElementById("categories");
const listChildren = [...list.children];
console.log(`В списке ${listChildren.length} категории`);

listChildren.forEach((listEl) => {
  const [title] = [...listEl.getElementsByTagName("h2")];
  const [list] = [...listEl.getElementsByTagName("ul")];
  console.log(`Категория: ${title.textContent}`);
  console.log(`Количество элементов: ${list.children.length}`);
});
