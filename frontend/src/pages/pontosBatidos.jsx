import React, { useState } from "react";
import Calendar from "react-calendar";
import BotaoVoltar from "../componentes/BotaoVoltar"; // 👈 botão genérico
import "react-calendar/dist/Calendar.css";
import "../styles/pontoBatidos.css";

function PontosBatidos() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const registros = [
    { data: "20/09/2025", tipo: "Entrada", hora: "08:00", status: "OK" },
    { data: "20/09/2025", tipo: "Saída", hora: "12:00", status: "OK" },
    { data: "20/09/2025", tipo: "Retorno", hora: "13:00", status: "OK" },
    { data: "20/09/2025", tipo: "Saída", hora: "17:02", status: "OK" },
    { data: "21/09/2025", tipo: "Entrada", hora: "--", status: "Falta" },
  ];

  const formatDate = (date) => date.toLocaleDateString("pt-BR");
  const pontosFiltrados = registros.filter(
    (p) => p.data === formatDate(selectedDate)
  );

  const handleDownload = () => {
    alert("📥 Baixar comprovante desse mês...");
  };

  const handleJustificar = (data) => {
    alert(`✍️ Justificar falta/atraso no dia ${data}`);
  };

  return (
    <div className="pontos-container">
      {/* Header com botão voltar */}
      <div className="pontos-header">
        <BotaoVoltar />
        <h2>Pontos Batidos</h2>
      </div>

      {/* Calendário */}
      <Calendar onChange={setSelectedDate} value={selectedDate} locale="pt-BR" />

      {/* Lista de pontos */}
      <div className="pontos-lista">
        {pontosFiltrados.length > 0 ? (
          pontosFiltrados.map((p, i) => (
            <div key={i} className="ponto-item">
              <div>
                <strong>{p.tipo}</strong> às {p.hora}
              </div>
              <div className={`status ${p.status.toLowerCase()}`}>
                {p.status}
              </div>
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

      {/* Botão baixar comprovante */}
      <button className="btn-download" onClick={handleDownload}>
        ⬇️ Baixar comprovante
      </button>
    </div>
  );
}

export default PontosBatidos;
