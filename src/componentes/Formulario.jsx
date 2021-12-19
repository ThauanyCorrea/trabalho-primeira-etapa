import React, { useContext } from "react";
import ProjectContext from "../ProjectContext";
import Alerta from "./Alerta";

function Formulario() {

    const { objeto, handleChange, register, alerta } = useContext(ProjectContext);

    return (
        <div className="modal fade" id="modalEdicao" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Projeto</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form id="formulario" onSubmit={register}>
                        <div className="modal-body">
                            <Alerta alerta={alerta} />
                            <div className="form-group">
                                <label htmlFor="txtID" className="form-label">
                                    ID
                                </label>
                                <input
                                    type="text"
                                    readOnly
                                    className="form-control"
                                    id="txtID"
                                    name="id"
                                    value={objeto.id}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="txtNome" className="form-label">
                                    Nome
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="txtNome"
                                    name="nome"
                                    required
                                    value={objeto.nome}
                                    onChange={handleChange} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="txtCidade" className="form-label">
                                    Cidade
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="txtCidade"
                                    name="cidade"
                                    required
                                    value={objeto.cidade}
                                    onChange={handleChange} />
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button type="submit" className="btn btn-outline-success">Salvar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Formulario;