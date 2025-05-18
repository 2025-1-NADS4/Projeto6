import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import HistoricoModal from '../components/historicoModal';
import { FaInfo } from 'react-icons/fa';
import '../styles/Home.css';
import mapIcon from '../assets/icon-muuve.png';
import Map from '../components/Map';

const calcularPrecoComMultiplicadores = (precoBase: number, distancia: number, hora: number): number => {
  let preco = precoBase;
  if (hora >= 19) {
    preco *= 1.05;
  }
  if (distancia > 5) {
    preco *= Math.pow(1.01, distancia - 5);
  }
  return preco;
};

const Home: React.FC = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [previsao, setPrevisao] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [historico, setHistorico] = useState<{
    origem: string;
    destino: string;
    data: string;
    distancia: number;
    duracao: number;
    precos: { [key: string]: number };
  }[]>([]);
  const [mostrarHistorico, setMostrarHistorico] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = { origem: origin, destino: destination };
    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:5000/prever", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (response.ok) {
        const horaAtual = new Date().getHours();
        const distancia = result.distancia_km;

        const precosCorrigidos: { [key: string]: number } = {};
        for (const categoria in result.precos_estimados) {
          precosCorrigidos[categoria] = calcularPrecoComMultiplicadores(result.precos_estimados[categoria], distancia, horaAtual);
        }

        setPrevisao({
          ...result,
          precos_estimados: precosCorrigidos
        });

        const novaEntrada = {
          origem: origin,
          destino: destination,
          data: new Date().toLocaleString(),
          distancia: distancia,
          duracao: result.duracao_min,
          precos: precosCorrigidos
        };

        setHistorico((prev) => [novaEntrada, ...prev]);
      } else {
        alert(result.erro || 'Erro ao prever');
      }
    } catch {
      alert('Ocorreu um erro. Tente novamente!');
    } finally {
      setLoading(false);
    }
  };

  const categoriaImagens: { [key: string]: string } = {
    uberx: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1555366974/assets/ea/658b23-7ac3-48f8-b7ca-75646edfbf09/original/Final_Select.png',
    comfort: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1555367310/assets/30/51e602-10bb-4e65-b122-e394d80a9c47/original/Final_UberX.png',
    black: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1555367538/assets/31/ad21b7-595c-42e8-ac53-53966b4a5fee/original/Final_Black.png',
  };

  const categoriasFiltradas = previsao ? ['uberx', 'comfort', 'black'].map((categoria) => ({
    nome: categoria.charAt(0).toUpperCase() + categoria.slice(1),
    preco: previsao.precos_estimados[categoria],
    imagem: categoriaImagens[categoria],
  })).filter(categoria => categoria.preco) : [];

  return (
    <div className="home-wrapper d-flex flex-column min-vh-100 bg-dark">
      <Navbar />

      <div className="d-flex justify-content-end px-4 mt-3">
        {previsao && (
          <button
            className="btn btn-outline-light d-flex align-items-center gap-2"
            onClick={() => setMostrarHistorico(true)}
            style={{ visibility: 'visible', display: 'block' }}
          >
            <FaInfo /> Detalhes
          </button>
        )}
      </div>

      <div className="flex-grow-1 d-flex justify-content-center align-items-center">
        <div className="home-box p-4 rounded shadow w-50 border border-purple">
          <h2 className="text-center text-purple mb-4">
            <img
              src={mapIcon}
              alt="Ícone de mapa"
              style={{ width: '200px', height: '200px', marginBottom: '8px' }}
            />
            <br />
            Escolha a Origem e o Destino
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="origin" className="form-label text-white">Origem</label>
              <input
                type="text"
                className="form-control bg-dark text-white border-purple"
                id="origin"
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                placeholder="Digite a origem"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="destination" className="form-label text-white">Destino</label>
              <input
                type="text"
                className="form-control bg-dark text-white border-purple"
                id="destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Digite o destino"
              />
            </div>
            <button type="submit" className="btn btn-purple w-100">Buscar</button>
          </form>

          {loading && <div className="spinner mt-3"></div>}

          {previsao && !loading && (
            <div className="mt-4">
              <h3 className="text-white">Previsão de Preços</h3>
              <ul className="list-group">
                {categoriasFiltradas.map((categoria) => (
                  <li key={categoria.nome} className="list-group-item bg-dark text-white">
                    <strong>{categoria.nome}</strong>: R$ {categoria.preco.toFixed(2)}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-white">Distância: {previsao.distancia_km} km</p>
              <p className="text-white">Duração: {previsao.duracao_min} minutos</p>
            </div>
          )}

          {previsao && categoriasFiltradas.length > 0 && !loading && (
            <div className="mt-5">
              <h3 className="text-white">Categorias Disponíveis</h3>
              <div className="row">
                {categoriasFiltradas.map((categoria) => (
                  <div key={categoria.nome} className="col-md-4">
                    <div className="card bg-dark text-white">
                      <img
                        src={categoria.imagem}
                        className="card-img-top"
                        alt={categoria.nome}
                        style={{ width: '200px', height: '200px', objectFit: 'cover', margin: '0 auto' }}
                      />
                      <div className="card-body text-center">
                        <h5 className="card-title">{categoria.nome}</h5>
                        <p className="card-text">A partir de R$ {categoria.preco.toFixed(2)}</p>
                        <a href="https://www.uber.com/br/pt-br/ride/uberx/">
                          <button className="btn btn-purple">Escolher</button>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {previsao && !loading && previsao.lat_origin && previsao.lng_origin && previsao.lat_destination && previsao.lng_destination && (
          <div className="w-100 px-4 mb-5">
            <Map
              latOrigin={previsao.lat_origin}
              lngOrigin={previsao.lng_origin}
              latDestination={previsao.lat_destination}
              lngDestination={previsao.lng_destination}
            />
          </div>
        )}

      </div>

      <Footer />

      <HistoricoModal
        show={mostrarHistorico}
        onClose={() => setMostrarHistorico(false)}
        historico={historico}
      />
    </div>
  );
};

export default Home;
