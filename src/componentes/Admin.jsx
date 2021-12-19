import React from 'react';
import Tabela from './Tabela';
import Formulario from "./Formulario";

const Admin = () => {

  return (
    <>
      <Tabela isAdmin={true} />
      <Formulario />
    </>
  );
};

export default Admin;