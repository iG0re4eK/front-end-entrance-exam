const waveObjs = document.querySelectorAll(".wave-effect");

waveObjs.forEach((obj) => {
  let animationTimer = null;

  obj.addEventListener("click", (e) => {
    const rect = obj.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    obj.style.setProperty("--wave-x", `${x}px`);
    obj.style.setProperty("--wave-y", `${y}px`);

    obj.classList.remove("animate");
    void obj.offsetWidth;

    obj.classList.add("animate");

    if (animationTimer) clearTimeout(animationTimer);

    animationTimer = setTimeout(() => {
      obj.classList.remove("animate");
    }, 700);

    console.log(`Click at (x: ${x}, y: ${y})`);
  });
});
