import pandas as pd
import plotly.express as px
from dash import Dash, dcc, html

# Carrega os arquivos
comfort_df = pd.read_csv("comfort.csv", sep=';')
black_df = pd.read_csv("black.csv", sep=';')
uberx_df = pd.read_csv("uberx.csv", sep=';')

# Adiciona coluna de categoria
comfort_df['Categoria'] = 'Comfort'
black_df['Categoria'] = 'Black'
uberx_df['Categoria'] = 'UberX'

# Função para criar gráficos com filtros e cor fixa
def criar_graficos(df, nome_categoria, cor):
    df_tempo = df[df['Duracao_min'] <= 400]
    df_distancia = df[df['Distancia_km'] <= 500]

    fig_tempo = px.scatter(
        df_tempo, x="Duracao_min", y="Price",
        trendline="ols",
        title=f"Gráfico (Tempo X Preço) - {nome_categoria}",
        opacity=0.6,
        color_discrete_sequence=[cor]
    )

    fig_distancia = px.scatter(
        df_distancia, x="Distancia_km", y="Price",
        trendline="ols",
        title=f"Gráfico (Distância X Preço) - {nome_categoria}",
        opacity=0.6,
        color_discrete_sequence=[cor]
    )

    return fig_tempo, fig_distancia

# Gera gráficos por categoria
comfort_tempo, comfort_distancia = criar_graficos(comfort_df, "Comfort", "blue")
black_tempo, black_distancia = criar_graficos(black_df, "Black", "red")
uberx_tempo, uberx_distancia = criar_graficos(uberx_df, "UberX", "green")

# App Dash
app = Dash(__name__)

app.layout = html.Div([
    html.H1("Gráfico (Tempo e Distância X Preço) por Categoria (com filtro)", style={'textAlign': 'center'}),

    html.H2("Comfort"),
    dcc.Graph(figure=comfort_tempo),
    dcc.Graph(figure=comfort_distancia),

    html.H2("Black"),
    dcc.Graph(figure=black_tempo),
    dcc.Graph(figure=black_distancia),

    html.H2("UberX"),
    dcc.Graph(figure=uberx_tempo),
    dcc.Graph(figure=uberx_distancia),
])

if __name__ == '__main__':
    app.run_server(debug=True)
