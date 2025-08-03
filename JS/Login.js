const usuario = "UsurarioTeste@Solutions.com";
const senhaUser = "12345678@User";

class Autenticacao {
  #email;
  #senha;

  constructor(email, senha) {
    this.#email = email;
    this.#senha = senha;
  }

  validarSenha() {
    if (this.#email !== usuario || this.#senha !== senhaUser) {
      alert("Usuário ou senha inválidos. Tente novamente.");
      return false;
    } else {
      alert("Login realizado com sucesso!");
      return true;
    }
  }
}

function validarSenha(senha) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  return regex.test(senha);
}

function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

const form = document.getElementById("Login");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value; // 'Email' com maiúscula, igual ao HTML
  const senha = document.getElementById("senha").value;

  if (!validarEmail(email)) {
    alert("Email inválido. Por favor, insira um email válido.");
    return;
  }

  if (!validarSenha(senha)) {
    alert(
      "Senha inválida. A senha deve conter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas, números e símbolos especiais."
    );
    return;
  }

  const login = new Autenticacao(email, senha);
  login.validarSenha();
});
