import React, { useState } from "react";

export default function App() {
  const [valor, setValor] = useState("");

  const adicionar = (num) => setValor((prev) => prev + num);
  const limpar = () => setValor("");

  const calcular = () => {
    try {
      setValor(eval(valor).toString());
    } catch {
      setValor("Erro");
    }
  };

  const estiloContainer = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#dcdcdc",
  };

  const estiloNome = {
    marginBottom: "15px",
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
  };

  const estiloCalculadora = {
    width: "300px",
    backgroundColor: "#222",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
  };

  const estiloDisplay = {
    backgroundColor: "#000",
    color: "#0f0",
    fontSize: "28px",
    textAlign: "right",
    padding: "15px",
    borderRadius: "5px",
    marginBottom: "15px",
    fontFamily: "monospace",
  };

  const estiloGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "10px",
  };

  const estiloBotao = {
    padding: "15px",
    fontSize: "18px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <div style={estiloContainer}>
      <div style={estiloNome}>Amanda Dimas Pessoa</div>

      <div style={estiloCalculadora}>
        <div style={estiloDisplay}>{valor || "0"}</div>

        <div style={estiloGrid}>
          <button style={{ ...estiloBotao, backgroundColor: "#ff4d4d", color: "white" }} onClick={limpar}>C</button>
          <button style={{ ...estiloBotao, backgroundColor: "#ffa500" }} onClick={() => adicionar("/")}>÷</button>
          <button style={{ ...estiloBotao, backgroundColor: "#ffa500" }} onClick={() => adicionar("*")}>×</button>
          <button style={{ ...estiloBotao, backgroundColor: "#ffa500" }} onClick={() => adicionar("-")}>−</button>

          <button style={estiloBotao} onClick={() => adicionar("7")}>7</button>
          <button style={estiloBotao} onClick={() => adicionar("8")}>8</button>
          <button style={estiloBotao} onClick={() => adicionar("9")}>9</button>
          <button style={{ ...estiloBotao, backgroundColor: "#ffa500" }} onClick={() => adicionar("+")}>+</button>

          <button style={estiloBotao} onClick={() => adicionar("4")}>4</button>
          <button style={estiloBotao} onClick={() => adicionar("5")}>5</button>
          <button style={estiloBotao} onClick={() => adicionar("6")}>6</button>
          <button style={{ ...estiloBotao, backgroundColor: "#4caf50", color: "white", gridRow: "span 2" }} onClick={calcular}>=</button>

          <button style={estiloBotao} onClick={() => adicionar("1")}>1</button>
          <button style={estiloBotao} onClick={() => adicionar("2")}>2</button>
          <button style={estiloBotao} onClick={() => adicionar("3")}>3</button>

          <button style={{ ...estiloBotao, gridColumn: "span 2" }} onClick={() => adicionar("0")}>0</button>
          <button style={estiloBotao} onClick={() => adicionar(".")}>.</button>
        </div>
      </div>
    </div>
  );
}