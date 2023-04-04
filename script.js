const numerocartao = document.getElementById('numero')
const nometitular = document.getElementById('nome')
const validade = document.getElementById('validade')
const cvv = document.getElementById('cvv')
const info = document.getElementById('info')
  
numerocartao.addEventListener("input", (event) => {
    const input = event.target;
    const unformattedValue = input.value.replace(/\s+/g, "");
    const formattedValue = unformattedValue.replace(/(\d{1,4})/g, "$1 ").trim();
  
    input.value = formattedValue;
  });