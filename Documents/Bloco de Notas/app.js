
const btnMensagem = document.getElementById("btnMensagem");
const blocoNotas = document.getElementById("blocoNotas");
const textarea = document.getElementById("anotacoes");

btnMensagem.addEventListener("click", () => {
  blocoNotas.style.display = blocoNotas.style.display === "none" ? "block" : "none";
});

textarea.value = localStorage.getItem("textoSalvo") || "";

textarea.addEventListener("input", () => {
  localStorage.setItem("textoSalvo", textarea.value);
});
