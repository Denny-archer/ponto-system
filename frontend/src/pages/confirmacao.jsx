import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { jsPDF } from "jspdf";
import { FileText, CheckCircle, ArrowLeft } from "lucide-react";
import "../styles/confirmacao.css";
import "../styles/global.css";

function Confirmacao() {
  const location = useLocation();
  const navigate = useNavigate();

  const { tipo, selfie } = location.state || {};

  const dataAtual = new Date().toLocaleDateString("pt-BR");
  const horaAtual = new Date().toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const handleFinalizar = () => {
    navigate("/home");
  };

  const handleBaixarPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Comprovante de Ponto", 105, 20, { align: "center" });

    doc.setFontSize(12);
    doc.text(`Tipo de Ponto: ${tipo || "Não informado"}`, 20, 50);
    doc.text(`Data: ${dataAtual}`, 20, 65);
    doc.text(`Hora: ${horaAtual}`, 20, 80);

    if (selfie) {
      doc.addImage(selfie, "JPEG", 130, 40, 60, 60);
    }

    doc.text("________________________", 20, 120);
    doc.text("Assinatura do Colaborador", 20, 128);

    doc.save(`comprovante_${tipo || "ponto"}.pdf`);
  };

  return (
    <div className="page-container confirmacao-container">
      {/* Botão Voltar */}
      <button className="btn-voltar" onClick={() => navigate(-1)}>
        <ArrowLeft size={18} style={{ marginRight: "6px" }} /> Voltar
      </button>

      <h2 className="titulo">✅ Ponto Registrado!</h2>

      {/* Selfie */}
      {selfie && (
        <div className="foto-box">
          <img src={selfie} alt="Selfie do colaborador" className="foto" />
        </div>
      )}

      {/* Detalhes */}
      <div className="detalhes-card">
        <p><strong>Tipo:</strong> {tipo || "Não informado"}</p>
        <p><strong>Data:</strong> {dataAtual}</p>
        <p><strong>Hora:</strong> {horaAtual}</p>
      </div>

      {/* Ações */}
      <div className="acoes">
        <button className="btn btn-primary" onClick={handleBaixarPDF}>
          <FileText size={18} /> Baixar comprovante
        </button>
        <button className="btn btn-success" onClick={handleFinalizar}>
          <CheckCircle size={18} /> Finalizar
        </button>
      </div>
    </div>
  );
}

export default Confirmacao;
