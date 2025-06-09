function saveToLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function getFromLocalStorage(key) {
  const data = localStorage.getItem(key);
  try {
      return data ? JSON.parse(data) : null;
  } catch (e) {
      console.error("Erro ao parsear dados do LocalStorage para a chave", key, ":", e);
      return null;
  }
}

function removeFromLocalStorage(key) {
  localStorage.removeItem(key);
}