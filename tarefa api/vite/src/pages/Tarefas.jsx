import { useEffect, useState } from 'react';
import { api } from '../services/api';

export default function Tarefas() {
  const [tarefas, setTarefas] = useState([]);
  const [descricao, setDescricao] = useState('');

  const carregarTarefas = async () => {
    const res = await api.getTarefas();
    setTarefas(res.tarefas || []);
  };

  const criarTarefa = async () => {
    if (descricao.trim() !== '') {
      await api.criarTarefa(descricao);
      setDescricao('');
      carregarTarefas();
    }
  };

  const completarTarefa = async (id) => {
    await api.completarTarefa(id);
    carregarTarefas();
  };

  const excluirTarefa = async (id) => {
    await api.excluirTarefa(id);
    carregarTarefas();
  };

  useEffect(() => {
    carregarTarefas();
  }, []);

  return (
    <div>
      <h2>Minhas Tarefas</h2>
      <input
        placeholder="Nova tarefa"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />
      <button onClick={criarTarefa}>Adicionar</button>
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>
            {tarefa.descricao} {tarefa.completa && '✅'}
            <button onClick={() => completarTarefa(tarefa.id)}>Concluir</button>
            <button onClick={() => excluirTarefa(tarefa.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
