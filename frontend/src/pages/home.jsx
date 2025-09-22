import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Clock, CalendarDays } from "lucide-react";
import "../styles/home.css";
import "../styles/global.css";

// 👉 Importa a imagem local
import userPhoto from "../assets/WIN_20250915_18_48_46_Pro.jpg";

function Home() {
  const navigate = useNavigate();
  const [horaAtual, setHoraAtual] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setHoraAtual(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const formatarHora = (d) => d.toLocaleTimeString("pt-BR", { hour12: false });

  return (
    <div className="home-container">
      {/* Cabeçalho fixo */}
      <header className="home-header">
        <div className="header-info">
          <h1>Conselho Federal de Fisioterapia</h1>
          <p>ALLAN MERIGHI MOTTO</p>
          <p>Assistente Administrativo</p>
          <p>
            <strong>Último registro:</strong> 08:00
          </p>
        </div>
        {/* Foto fixa do usuário */}
        <div className="header-avatar">
          <img src={userPhoto} alt="Foto do colaborador" className="avatar-img" />
        </div>
      </header>

      {/* Botão principal */}
      <div className="card-bater-ponto" onClick={() => navigate("/ponto")}>
        <Clock size={48} strokeWidth={2} className="clock-icon" />
        <h2>Registrar Ponto</h2>
        <p>{formatarHora(horaAtual)}</p>
      </div>

      {/* Rodapé fixo */}
      <footer className="home-footer">
        <button className="status btn-link" onClick={() => navigate("/pontos")}>
          <CalendarDays size={20} strokeWidth={2} /> <span>PONTOS BATIDOS</span>
        </button>
      </footer>
    </div>
  );
}

export default Home;
