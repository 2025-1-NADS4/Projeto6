// src/components/HistoricoModal.tsx
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

interface HistoricoModalProps {
    show: boolean;
    onClose: () => void;
    historico: {
        origem: string;
        destino: string;
        data: string;
        distancia: number;
        duracao: number;
        precos: { [key: string]: number };
    }[];
}


const HistoricoModal: React.FC<HistoricoModalProps> = ({ show, onClose, historico }) => {
    return (
        <Modal show={show} onHide={onClose} centered backdrop="static">
            <Modal.Header closeButton className="bg-dark text-white">
                <Modal.Title>Detalhes da Viagem</Modal.Title>
            </Modal.Header>
            <Modal.Body className="bg-dark text-white">
                {historico.map((item, index) => (
                    <li key={index} className="list-group-item bg-dark text-white border-white">
                        <strong>Origem:</strong> {item.origem}<br />
                        <strong>Destino:</strong> {item.destino}<br />
                        <strong>Data:</strong> {item.data}<br />
                        <strong>Distância:</strong> {item.distancia} km<br />
                        <strong>Duração:</strong> {item.duracao} min<br />
                        <strong>Preços:</strong>
                        <ul className="mt-1">
                            {Object.entries(item.precos).map(([categoria, preco]) => (
                                <li key={categoria}>
                                    {categoria.toUpperCase()}: R$ {preco.toFixed(2)}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}

            </Modal.Body>
            <Modal.Footer className="bg-dark">
                <Button variant="secondary" onClick={onClose}>
                    Fechar
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default HistoricoModal;
