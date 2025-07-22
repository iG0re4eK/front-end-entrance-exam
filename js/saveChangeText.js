document.addEventListener("DOMContentLoaded", function () {
  const editableElements = document.querySelectorAll(
    '[contenteditable="true"]'
  );

  editableElements.forEach((el) => {
    const generateStableId = (element) => {
      const path = [];
      let current = element;

      while (current.parentNode) {
        const index = Array.from(current.parentNode.children).indexOf(current);
        path.unshift(index);
        current = current.parentNode;
      }

      return "editable-" + path.join("-");
    };

    const id = generateStableId(el);
    el.setAttribute("data-id", id);

    const savedText = localStorage.getItem(id);
    if (savedText) {
      el.textContent = savedText;
    }

    el.addEventListener("blur", function () {
      localStorage.setItem(id, this.textContent);
      console.log("Сохранено:", id, this.textContent);
    });
  });
});
