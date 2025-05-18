# MuuVe Now
<p align="center"> <a href= ""><img src="icon_muuvenow.png" alt="MuuVe Now" border="0"></a> </p>

# MuuveNow

Esta aplicação foi desenvolvida para prever valores (como preços ou tarifas) com base em dados de entrada fornecidos pelo usuário, como distância e duração de trajeto, por exemplo.<br>
Utiliza um modelo de Machine Learning (Random Forest) para gerar previsões a partir de dados históricos armazenados em arquivos CSV por categoria.<br>
Além disso, a aplicação integra um algoritmo de Inteligência Artificial (KMeans) para agrupar o comportamento dos usuários, permitindo análises futuras sobre perfis de uso ou segmentações automatizadas.<br>

O sistema é dividido em duas partes principais:<br>

Backend em Flask: responsável pela API, autenticação de usuários com criptografia segura (bcrypt), acesso ao modelo de IA e geração de previsões.<br>

Frontend em React: fornece uma interface amigável para o usuário interagir com o sistema, enviar dados, visualizar rotas e estimativas de valores.<br>

A ferramenta também faz uso de APIs externas (como o Google Maps) para calcular distância e tempo entre locais de origem e destino informados pelo usuário.<br>
Os modelos são treinados e salvos automaticamente na primeira execução ou quando for necessário atualizá-los.<br>

Esta solução é escalável, modular e pode ser facilmente adaptada para diferentes contextos onde previsão de valores e análise de comportamento sejam necessários.<br>

## MuuveNowGroup

## Integrantes: <a href="https://www.linkedin.com/in/sergio-pedote/">Sérgio Ricardo Pedote Jr</a>, <a href="https://www.linkedin.com/in/vinipiovesan/">Vinicius Miranda A Piovesan</a>, <a href="https://www.linkedin.com/in/matheus-de-medeiros-5516a02a9/">Matheus de Medeiros  <a href="https://www.linkedin.com/in/felipe-ribeiro-almeida-2698652b9/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">Felipe Ribeiro Almeida</a>   </a>

## Professores Orientadores: <a </a>.

## Descrição


## 🛠 Estrutura de pastas

documentos<br>
|--> Materia<br>
|--|--> Entrega 1<br>
|--|--> Entrega 2<br>
|--|--> Entrega 3<br>




src<br>
|--> Backend<br>
|--> Frontend<br>


## 🛠 Instalação
Python 3.x<br>

Node.js e npm ou yarn<br>

Backend (Flask)<br>
Clone o repositório<br>

Navegue até a pasta do backend<br>

Crie e ative um ambiente virtual (opcional, mas recomendado)<br>

Instale as dependências com pip install -r requirements.txt<br>

Execute a aplicação com python app.py ou outro comando configurado<br>

Frontend (React)<br>
Navegue até a pasta do frontend<br>

Instale as dependências com npm install ou yarn install<br>

Inicie o servidor com npm start ou yarn start<br>


## 💻 Configuração para Desenvolvimento

O backend fornece uma API RESTful que pode ser consumida por qualquer frontend<br>

O frontend se comunica com a API e exibe os resultados para o usuário<br>

Os modelos de Machine Learning são treinados separadamente e utilizados pela API para realizar previsões<br>

As portas e configurações específicas podem ser ajustadas conforme necessidade do ambiente<br>



## 📋 Licença/License
<a href="https://github.com/2025-1-NADS4/Projeto6">MuuVe Now</a> © 2025 by <a href="https://creativecommons.org">Vinicius Miranda, Sergio Ricardo, Matheus de Medeiros, Felipe Ribeiro</a> is licensed under <a href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0</a>


## 🎓 Referências

Aqui estão as referências usadas no projeto.

1. 
2. 
3. 
4. 
