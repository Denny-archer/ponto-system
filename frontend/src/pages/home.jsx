import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Clock, CheckCircle2, CalendarDays } from "lucide-react";
import "../styles/home.css";
import "../styles/global.css";

function Home() {
  const navigate = useNavigate();
  const [horaAtual, setHoraAtual] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setHoraAtual(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const formatarHora = (d) => d.toLocaleTimeString("pt-BR", { hour12: false });
  const formatarData = (d) => d.toLocaleDateString("pt-BR");

  return (
    <div className="home-container">
      {/* topo com nome e último registro */}
      <div className="home-header">
        <h1>João Silva</h1>
        <p>{formatarData(horaAtual)}</p>
        <p>Último registro: <strong>Entrada às 08:00</strong></p>
      </div>

      {/* card do botão principal */}
      <div className="card-bater-ponto" onClick={() => navigate("/ponto")}>
        <Clock size={48} strokeWidth={2} className="clock-icon"/>
        <h2>BATER PONTO</h2>
        <p>{formatarHora(horaAtual)}</p>
      </div>

      {/* rodapé com status */}
      <div className="home-footer">
        <div className="status">
          <CheckCircle2 size={20} strokeWidth={2} /> <span>Sincronizado</span>
        </div>
       <button className="status btn-link" onClick={() => navigate("/pontos")}>
          <CalendarDays size={20} strokeWidth={2} /> <span>Pontos batidos</span>
      </button>

      </div>
    </div>
  );
}

export default Home;
