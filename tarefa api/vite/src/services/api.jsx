const API_BASE = 'http://localhost:3000'; // Altere conforme necessário

export const api = {
  login: async (email, senha) => {
    const res = await fetch(`${API_BASE}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, senha }),
    });
    return res.json();
  },

  register: async (nome, email, senha) => {
    const res = await fetch(`${API_BASE}/registro`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, email, senha }),
    });
    return res.json();
  },

  getTarefas: async () => {
    const token = localStorage.getItem('token');
    const res = await fetch(`${API_BASE}/tarefas`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.json();
  },

  criarTarefa: async (descricao) => {
    const token = localStorage.getItem('token');
    const res = await fetch(`${API_BASE}/tarefas`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ descricao }),
    });
    return res.json();
  },

  completarTarefa: async (id) => {
    const token = localStorage.getItem('token');
    const res = await fetch(`${API_BASE}/tarefas/${id}`, {
      method: 'PUT',
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.json();
  },

  excluirTarefa: async (id) => {
    const token = localStorage.getItem('token');
    const res = await fetch(`${API_BASE}/tarefas/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.json();
  },
};
