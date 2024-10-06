let saldo = 1000; // Saldo inicial
let extrato = [
    "Depósito: R$ 500,00",
    "Saque: R$ 200,00",
    "Depósito: R$ 300,00"
];
let usuarioNome = "";
 
function iniciar() {
    usuarioNome = document.getElementById("nome").value;
    if (usuarioNome) {
        document.getElementById("usuarioNome").innerText = usuarioNome;
        document.getElementById("login").style.display = "none";
        document.getElementById("menu").style.display = "block";
    } else {
        alert("Por favor, insira seu nome.");
    }
}
 
function verificarSenha(callback) {
    const senha = prompt("Digite sua senha:");
    if (senha === "3589") {
        callback();
    } else {
        alert("Senha incorreta. Tente novamente.");
        verificarSenha(callback);
    }
}
 
function acessarSaldo() {
    verificarSenha(() => {
        alert("Seu saldo é: R$ " + saldo.toFixed(2));
    });
}
 
function verExtrato() {
    verificarSenha(() => {
        alert("Extrato:\n" + extrato.join("\n"));
    });
}
 
function sacar() {
    verificarSenha(() => {
        const valor = parseFloat(prompt("Digite o valor do saque:"));
        if (valor <= 0) {
            alert("Operação não autorizada.");
        } else if (valor > saldo) {
            alert("Operação não autorizada.");
        } else {
            saldo -= valor;
            alert("Saque de R$ " + valor.toFixed(2) + " realizado com sucesso! Saldo restante: R$ " + saldo.toFixed(2));
        }
    });
}
 
function depositar() {
    verificarSenha(() => {
        const valor = parseFloat(prompt("Digite o valor do depósito:"));
        if (valor <= 0) {
            alert("Operação não autorizada.");
        } else {
            saldo += valor;
            extrato.push("Depósito: R$ " + valor.toFixed(2));
            alert("Depósito de R$ " + valor.toFixed(2) + " realizado com sucesso! Novo saldo: R$ " + saldo.toFixed(2));
        }
    });
}
 
function transferir() {
    verificarSenha(() => {
        const contaDestino = prompt("Digite o número da conta para transferência:");
        if (!/^\d+$/.test(contaDestino)) {
            alert("Número da conta inválido. Tente novamente.");
            return;
        }
        const valor = parseFloat(prompt("Digite o valor da transferência:"));
        if (valor <= 0) {
            alert("Operação não autorizada.");
        } else if (valor > saldo) {
            alert("Operação não autorizada.");
        } else {
            saldo -= valor;
            extrato.push("Transferência para conta " + contaDestino + ": R$ " + valor.toFixed(2));
            alert("Transferência de R$ " + valor.toFixed(2) + " para a conta " + contaDestino + " realizada com sucesso! Saldo restante: R$ " + saldo.toFixed(2));
        }
    });
}
 
function sair() {
    alert(usuarioNome + ", foi um prazer ter você por aqui!");
    document.getElementById("menu").style.display = "none";
    document.getElementById("login").style.display = "block";
    document.getElementById("nome").value = "";
    saldo = 1000; // Resetar saldo ao sair
    extrato = [
        "Depósito: R$ 500,00",
        "Saque: R$ 200,00",
        "Depósito: R$ 300,00"
    ]; // Resetar extrato ao sair
}