import React, { useContext } from 'react';
import ProjectContext from '../ProjectContext';
import Alerta from './Alerta';

const Tabela = (props) => {

    const { listaObjetos, remove, alerta, setObjeto, setEditar, setAlerta } = useContext(ProjectContext);

    return (
        <div style={{ padding: '25px' }}>
            <Alerta alerta={alerta} />
            {props.isAdmin && <button type="button" className="btn btn-outline-primary"
                data-bs-toggle="modal" data-bs-target="#modalEdicao"
                onClick={
                    () => {
                        setObjeto({ id: 0, nome: "", cidade: "" });
                        setEditar(false);
                        setAlerta({ status: "", message: "" })
                    }
                }>
                Adicionar Projeto
            </button>}

            {listaObjetos.length === 0 && <h2>Nenhum registro encontrado</h2>}
            {listaObjetos.length > 0 && (
                <div style={{ marginTop: '25px' }} className="table-responsive d-flex justify-content-center">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Cidade</th>
                                {props.isAdmin && <th scope="col"
                                    style={{ textAlign: 'center' }}>Ações</th>}
                            </tr>
                        </thead>
                        <tbody>
                            {listaObjetos.map(objeto => (
                                <tr key={objeto.id}>
                                    <td>{objeto.id}</td>
                                    <td>{objeto.nome}</td>
                                    <td>{objeto.cidade}</td>
                                    {props.isAdmin && <th scope="row" style={{ textAlign: 'center' }}>
                                        <button style={{ marginRight: '15px' }} type="button" className="btn btn-outline-primary"
                                            data-bs-toggle="modal" data-bs-target="#modalEdicao"
                                            onClick={
                                                () => {
                                                    setObjeto(objeto);
                                                    setEditar(true);
                                                    setAlerta({ status: "", message: "" })
                                                }
                                            }>
                                            Editar
                                        </button>
                                        <button className="btn btn-outline-danger"
                                            onClick={() => remove(objeto)}>
                                            Excluir
                                        </button>
                                    </th>}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

        </div>
    );
};

export default Tabela;