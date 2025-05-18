interface PriceCardProps {
    categoria: string;
    preco: number;
  }
  
  export function PriceCard({ categoria, preco }: PriceCardProps) {
    const imagens: Record<string, string> = {
      uberx: "/assets/uberx.png",
      comfort: "/assets/comfort.png",
      black: "/assets/black.png",
    };
  
    return (
      <div className="bg-white text-black rounded-2xl p-4 shadow-md">
        <img
          src={imagens[categoria.toLowerCase()] || "/assets/uberx.png"}
          alt={categoria}
          className="w-full h-40 object-contain mb-4"
        />
        <h2 className="text-lg font-bold capitalize">{categoria}</h2>
        <p className="text-purple-700 font-semibold text-xl">R$ {preco.toFixed(2)}</p>
      </div>
    );
  }
  