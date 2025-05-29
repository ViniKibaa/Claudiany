import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [dados, setDados] = useState([]);
  const [form, setForm] = useState({ nome: "", tipo: "", consumo: "" });
  const [editId, setEditId] = useState(null);

  const fetchDados = async () => {
    const res = await fetch("http://localhost:3000/energia");
    const json = await res.json();
    setDados(json);
  };

  useEffect(() => {
    fetchDados();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      const res = await fetch(`http://localhost:3000/energia/${editId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const atualizado = await res.json();
      setDados(dados.map(d => (d._id === editId ? atualizado : d)));
      setEditId(null);
    } else {
      const res = await fetch("http://localhost:3000/energia", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const novo = await res.json();
      setDados([...dados, novo]);
    }
    setForm({ nome: "", tipo: "", consumo: "" });
  };

  const handleEdit = (dado) => {
    setForm({ nome: dado.nome, tipo: dado.tipo, consumo: dado.consumo });
    setEditId(dado._id);
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:3000/energia/${id}`, { method: "DELETE" });
    setDados(dados.filter(d => d._id !== id));
  };

  return (
    <div>
      <h1>Cadastro de Consumo de Energia</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Nome"
          value={form.nome}
          onChange={e => setForm({ ...form, nome: e.target.value })}
          required
        />
        <input
          placeholder="Tipo"
          value={form.tipo}
          onChange={e => setForm({ ...form, tipo: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Consumo"
          value={form.consumo}
          onChange={e => setForm({ ...form, consumo: e.target.value })}
          required
        />
        <button type="submit">{editId ? "Atualizar" : "Cadastrar"}</button>
        {editId && (
          <button
            type="button"
            onClick={() => {
              setEditId(null);
              setForm({ nome: "", tipo: "", consumo: "" });
            }}
          >
            Cancelar
          </button>
        )}
      </form>
      <ul>
        {dados.map((d) => (
          <li key={d._id}>
            {d.nome} - {d.tipo} - {d.consumo} kWh{" "}
            <button onClick={() => handleEdit(d)}>Editar</button>{" "}
            <button onClick={() => handleDelete(d._id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
