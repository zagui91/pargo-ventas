// 📁 ESTRUCTURA DEL PROYECTO LISTO PARA VERCEL
// Crea una carpeta llamada: pargo-app
// Dentro crea estos archivos:

// package.json
{
  "name": "pargo-app",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "14.0.0",
    "react": "18.2.0",
    "react-dom": "18.2.0"
  }
}

// next.config.js
module.exports = {
  reactStrictMode: true,
};

// app/page.js
"use client";
import { useState } from "react";

export default function App() {
  const [cliente, setCliente] = useState("");
  const [telefono, setTelefono] = useState("");
  const [tipo, setTipo] = useState("Lona");
  const [ancho, setAncho] = useState(0);
  const [alto, setAlto] = useState(0);
  const [precioBase, setPrecioBase] = useState(200);
  const [cantidad, setCantidad] = useState(1);
  const [anticipo, setAnticipo] = useState(0);
  const [fechaEntrega, setFechaEntrega] = useState("");

  const area = ancho * alto;

  const total = tipo === "Lona"
    ? area * precioBase * cantidad
    : precioBase * cantidad;

  const restante = total - anticipo;

  const generarTexto = () => {
    return `🧾 PargoGrafico\n\nCliente: ${cliente}\nTel: ${telefono}\nTrabajo: ${tipo}\n${tipo === "Lona" ? `Medidas: ${ancho} x ${alto} m\n` : ""}Cantidad: ${cantidad}\n\nTotal: $${total.toFixed(2)}\nAnticipo: $${anticipo}\nRestante: $${restante.toFixed(2)}\n\nEntrega: ${fechaEntrega}\n\n⚠️ Anticipo no reembolsable`;
  };

  const enviarWhatsApp = () => {
    const texto = encodeURIComponent(generarTexto());
    window.open(`https://wa.me/?text=${texto}`);
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h2>PargoGrafico - Nota PRO</h2>

      <input placeholder="Cliente" onChange={(e) => setCliente(e.target.value)} /><br/><br/>
      <input placeholder="Teléfono" onChange={(e) => setTelefono(e.target.value)} /><br/><br/>

      <select onChange={(e) => setTipo(e.target.value)}>
        <option>Lona</option>
        <option>Playeras</option>
        <option>Bordado</option>
        <option>DTF</option>
      </select><br/><br/>

      {tipo === "Lona" && (
        <>
          <input type="number" placeholder="Ancho" onChange={(e) => setAncho(Number(e.target.value))} /><br/><br/>
          <input type="number" placeholder="Alto" onChange={(e) => setAlto(Number(e.target.value))} /><br/><br/>
        </>
      )}

      <input type="number" placeholder="Precio base" value={precioBase} onChange={(e) => setPrecioBase(Number(e.target.value))} /><br/><br/>
      <input type="number" placeholder="Cantidad" value={cantidad} onChange={(e) => setCantidad(Number(e.target.value))} /><br/><br/>
      <input type="number" placeholder="Anticipo" onChange={(e) => setAnticipo(Number(e.target.value))} /><br/><br/>

      <input type="date" onChange={(e) => setFechaEntrega(e.target.value)} /><br/><br/>

      <h3>Total: ${total.toFixed(2)}</h3>
      <h3>Restante: ${restante.toFixed(2)}</h3>

      <button onClick={enviarWhatsApp}>Enviar por WhatsApp</button>
    </div>
  );
}

// 🚀 INSTRUCCIONES
// 1. Guarda esta estructura
// 2. Abre terminal en la carpeta
// 3. Ejecuta:
// npm install
// npm run build
// npx vercel

// 👉 Sigue instrucciones en pantalla
// 👉 Te dará un link listo para usar en tu celular
