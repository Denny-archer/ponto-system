import React, { useState } from "react";
import Calendar from "react-calendar";
import BotaoVoltar from "../componentes/BotaoVoltar"; 
import "react-calendar/dist/Calendar.css";
import "../styles/pontoBatidos.css";

function PontosBatidos() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const registros = [
    { data: "21/09/2025", tipo: "Entrada", hora: "08:00", status: "OK" },
    { data: "21/09/2025", tipo: "Saída", hora: "12:00", status: "Atraso" },
    { data: "21/09/2025", tipo: "Saída", hora: "--", status: "Falta" },
  ];

  const formatDate = (date) => date.toLocaleDateString("pt-BR");
  const pontosFiltrados = registros.filter(
    (p) => p.data === formatDate(selectedDate)
  );

  const handleDownload = () => {
    alert("📥 Baixar comprovante desse mês...");
  };

  const handleJustificar = (data) => {
    alert(`✍️ Justificar no dia ${data}`);
  };

  return (
    <div className="pontos-container">
      {/* Header */}
      <div className="pontos-header">
        <BotaoVoltar />
        <h2>Pontos Batidos</h2>
      </div>

      {/* Calendário */}
      <div className="calendar-wrapper">
        <Calendar
          onChange={setSelectedDate}
          value={selectedDate}
          locale="pt-BR"
        />
      </div>

      {/* Registros */}
      <div className="pontos-lista">
        {pontosFiltrados.length > 0 ? (
          pontosFiltrados.map((p, i) => (
            <div key={i} className="ponto-card">
              <span>
                {p.tipo} às {p.hora}
              </span>
              <span className={`status ${p.status.toLowerCase()}`}>
                {p.status}
              </span>
              {p.status !== "OK" && (
                <button
                  className="btn-justificar"
                  onClick={() => handleJustificar(p.data)}
                >
                  Justificar
                </button>
              )}
            </div>
          ))
        ) : (
          <p className="text-muted">Nenhum registro para este dia.</p>
        )}
      </div>

      {/* Área de justificativa */}
      <div className="justificativa-box">
        <textarea
          placeholder="Descreva o motivo do atraso/falta..."
          rows="3"
        ></textarea>
        <div className="justificativa-actions">
          <button className="btn-anexar">📎 Anexar justificativa</button>
          <button className="btn-enviar">Enviar justificativa</button>
        </div>
      </div>

      {/* Botão fixo baixar comprovante */}
      <div className="footer-fixo">
        <button className="btn-download" onClick={handleDownload}>
          📄 Baixar comprovante
        </button>
      </div>
    </div>
  );
}

export default PontosBatidos;
