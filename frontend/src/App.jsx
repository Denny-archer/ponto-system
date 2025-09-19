import React from "react";
import "./styles/login.css";

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Tentando logar...");
    // lógica de login aqui
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Entrar na sua conta</h2>

        <form onSubmit={handleSubmit}>
          {/* Usuário/Email */}
          <div className="input-group">
            <label htmlFor="username" className="sr-only">
              Usuário ou E-mail
            </label>
            <input
              id="username"
              type="text"
              placeholder="Usuário ou E-mail"
              className="form-control"
              autoComplete="username"
              required
            />
          </div>

          {/* Senha */}
          <div className="input-group">
            <label htmlFor="password" className="sr-only">
              Senha
            </label>
            <input
              id="password"
              type="password"
              placeholder="Senha"
              className="form-control"
              autoComplete="current-password"
              required
            />
          </div>

          {/* Lembrar de mim */}
          <div className="options">
            <label>
              <input type="checkbox" /> Lembrar de mim
            </label>
            <a href="/recuperar-senha" className="forgot-link">
              Esqueci minha senha
            </a>
          </div>

          {/* Botão */}
          <button type="submit" className="btn-login">
            Entrar
          </button>
        </form>

        
      </div>
    </div>
  );
}

export default App;
