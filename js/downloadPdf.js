document.querySelector(".pdf-download").addEventListener("click", function () {
  const element = document.querySelector(".container");
  const button = document.querySelector(".pdf-download");

  button.style.display = "none";

  const opt = {
    margin: 32,
    filename: "resume.pdf",
    image: {
      type: "jpeg",
      quality: 1,
    },
    html2canvas: {
      scale: 2,
      scrollY: 0,
      width: element.scrollWidth,
      height: element.scrollHeight,
    },
    jsPDF: {
      unit: "mm",
      format: "a4",
      orientation: "portrait",
      putOnlyUsedFonts: true,
    },
  };

  html2pdf()
    .set(opt)
    .from(element)
    .save()
    .then(() => {
      button.style.display = "block";
    });
});
