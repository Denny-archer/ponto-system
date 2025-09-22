import React, { useRef, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Camera, RefreshCcw, Check, ArrowLeft } from "lucide-react";
import "../styles/selfie.css";
import "../styles/global.css";

function Selfie() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [foto, setFoto] = useState(null);
  const [isCapturing, setIsCapturing] = useState(true); // 👈 controla a câmera
  const navigate = useNavigate();
  const location = useLocation();

  const { tipo } = location.state || {};

  // Ativar câmera sempre que isCapturing = true
  useEffect(() => {
    if (isCapturing) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch((err) => {
          console.error("Erro ao acessar a câmera:", err);
          alert("Não foi possível acessar a câmera!");
        });
    }

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        let tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, [isCapturing]);

  const tirarFoto = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext("2d").drawImage(video, 0, 0);

    const dataUrl = canvas.toDataURL("image/jpeg");
    setFoto(dataUrl);
    setIsCapturing(false); // 👈 pausa a câmera
  };

  const refazerFoto = () => {
    setFoto(null);
    setIsCapturing(true); // 👈 reabre a câmera
  };

  const confirmar = () => {
    navigate("/confirmacao", { state: { selfie: foto, tipo } });
  };

  return (
    <div className="page-container selfie-container">
      {/* Botão de voltar */}
      <button className="btn-voltar" onClick={() => navigate(-1)}>
        <ArrowLeft size={18} style={{ marginRight: "6px" }} /> Voltar
      </button>

      <h2 className="titulo">Sorria! Tire sua selfie ({tipo})</h2>

      {!foto ? (
        <div className="camera-box">
          <video ref={videoRef} autoPlay playsInline muted className="video" />
          <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
          <button className="btn btn-danger btn-captura" onClick={tirarFoto}>
            <Camera size={18} style={{ marginRight: "6px" }} /> Tirar Foto
          </button>
        </div>
      ) : (
        <div className="preview-box">
          <img src={foto} alt="Selfie capturada" className="foto-preview" />
          <div className="botoes">
            <button className="btn btn-refazer" onClick={refazerFoto}>
              <RefreshCcw size={16} style={{ marginRight: "6px" }} /> Refazer
            </button>
            <button className="btn btn-success btn-confirmar" onClick={confirmar}>
              <Check size={16} style={{ marginRight: "6px" }} /> Confirmar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Selfie;
