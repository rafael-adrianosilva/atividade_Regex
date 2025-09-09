function validaCadastro() {
    const nomeRegex = /^[a-zA-Z\s]+$/;
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

    const nome = document.getElementById("nome").value;
    const cpf = document.getElementById("cpf").value;

    if (!nomeRegex.test(nome)){
        alert("Nome inválido. Use apenas letras e espaços.");
        return false;
    }

    if (!cpfRegex.test(cpf)) {
        alert("CPF Inválido! Use apenas números!!");
        return false;
    }

    return true;
}