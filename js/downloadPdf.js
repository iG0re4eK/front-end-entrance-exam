document.querySelector(".pdf-download").addEventListener("click", async () => {
  const element = document.getElementById("content-to-export");

  const options = {
    margin: 10,
    filename: "document.pdf",
    html2canvas: {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      logging: true,
    },
    jsPDF: {
      unit: "mm",
      format: "a4",
      orientation: "portrait",
    },
  };

  try {
    await html2pdf().set(options).from(element).save();
  } catch (error) {
    console.error("Ошибка:", error);
    alert("PDF не создан. Проверьте консоль.");
  }
});
