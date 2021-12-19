import 'bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/cjs/popper.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css';

import React, { useState, useEffect } from 'react';
import ProjectContext from './ProjectContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './componentes/header/Header';
import Footer from './componentes/footer/Footer';
import Home from './componentes/Home';
import Admin from './componentes/Admin';

const App = () => {

  const [listaObjetos, setListaObjetos] = useState(
    localStorage.getItem('ONE-Community/listaobjetos')
      ? JSON.parse(localStorage.getItem('ONE-Community/listaobjetos')) : []);

  const [alerta, setAlerta] = useState({ status: "", message: "" });
  const [objeto, setObjeto] = useState({ id: 0, nome: "", cidade: "" });
  const [editar, setEditar] = useState(false);

  const register = e => {
    e.preventDefault();
    if (editar) {
      const index = listaObjetos.findIndex(p => p.id === objeto.id);
      const listaObjetosTemp = listaObjetos.splice(0, index).concat(listaObjetos.splice(index + 1));
      const newlistaObjetos = [...listaObjetosTemp, objeto].sort((a, b) => a.id - b.id);

      setListaObjetos(newlistaObjetos);
      setAlerta({ status: "success", message: "Projeto editado com sucesso!" });
    } else {
      if (objeto.id === 0) {
        var idatual = localStorage.getItem('ONE-Community/sequenciaid');
        if (idatual === null) {
          idatual = 0;
        }
        var novoid = Number(idatual) + 1;
        objeto.id = novoid;
        localStorage.setItem('ONE-Community/sequenciaid', novoid);

        setListaObjetos([...listaObjetos, objeto]);
        setAlerta({ status: "success", message: "Projeto criado com sucesso!" });
      }
    }
  };

  const remove = objeto => {
    if (window.confirm("Deseja remover o projeto?")) {
      const listaObjetosTemp = listaObjetos.filter(p => p.id !== objeto.id);

      setListaObjetos(listaObjetosTemp);
      setAlerta({ status: "success", message: "Projeto removido com sucesso!" })
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setObjeto({ ...objeto, [name]: value });
  };

  useEffect(() => {
    localStorage.setItem('ONE-Community/listaobjetos', JSON.stringify(listaObjetos));
  }, [listaObjetos]);

  return (
    <ProjectContext.Provider value={
      { listaObjetos, remove, alerta, setAlerta, objeto, setObjeto, editar, setEditar, register, handleChange }}>
      <div className="App">
        <BrowserRouter>
          <Header />
          <main className="AppBody">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="admin" element={<Admin />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </div>
    </ProjectContext.Provider>
  );
};

export default App;