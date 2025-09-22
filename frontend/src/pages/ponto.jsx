import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaSignInAlt,
  FaCoffee,
  FaRedoAlt,
  FaSignOutAlt,
  FaCheckCircle,
  FaCalendarCheck,
} from "react-icons/fa";
import BotaoVoltar from "../componentes/BotaoVoltar"; // 👈 importando o botão genérico
import "../styles/ponto.css";
import "../styles/global.css";
import { CalendarDays } from "lucide-react";

function Ponto() {
  const navigate = useNavigate();
  const [pontoSelecionado, setPontoSelecionado] = useState(null);

  const handleSelecionar = (tipo) => {
    setPontoSelecionado(tipo);
    console.log("Ponto selecionado:", tipo);

    // Envia para tela de selfie
    navigate("/selfie", { state: { tipo } });
  };

  return (
    <div className="page-container ponto-container">
      {/* Botão voltar */}
      <BotaoVoltar />

      <h2 className="ponto-title">Escolha o tipo de ponto</h2>

      <div className="ponto-grid">
        {/* Entrada */}
        <div
          className={`card entrada ${
            pontoSelecionado === "entrada" ? "desabilitado" : ""
          }`}
          onClick={() => handleSelecionar("entrada")}
        >
          <span className="numero">Entrada</span>
          <span className="texto"></span>
          <span className="icone">
            <FaSignInAlt />
          </span>
        </div>

        {/* Pausa */}
        {/* <div
          className={`card pausa ${
            pontoSelecionado === "pausa" ? "desabilitado" : ""
          }`}
          onClick={() => handleSelecionar("pausa")}
        >
          <span className="numero">2</span>
          <span className="texto">Pausa</span>
          <span className="icone">
            <FaCoffee />
          </span>
        </div> */}

        {/* Retorno */}
        {/* <div
          className={`card retorno ${
            pontoSelecionado === "retorno" ? "desabilitado" : ""
          }`}
          onClick={() => handleSelecionar("retorno")}
        >
          <span className="numero">3</span>
          <span className="texto">Retorno</span>
          <span className="icone">
            <FaRedoAlt />
          </span>
        </div> */}

        {/* Saída */}
        <div
          className={`card saida ${
            pontoSelecionado === "saida" ? "desabilitado" : ""
          }`}
          onClick={() => handleSelecionar("saida")}
        >
          <span className="numero">Saída</span>
          <span className="texto"></span>
          <span className="icone">
            <FaSignOutAlt />
          </span>
        </div>
      </div>

      {/* Rodapé */}
      <div className="ponto-footer">
        
        <button className="status btn-link" onClick={() => navigate("/pontos")}>
          <CalendarDays /> <span>Pontos batidos</span>
        </button>
      </div>
    </div>
  );
}

export default Ponto;
