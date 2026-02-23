import React, { useMemo } from 'react';

export default function StarryBackground() {
  // Función mágica que genera cientos de estrellas usando box-shadow
  const createStars = (count) => {
    let shadow = [];
    for (let i = 0; i < count; i++) {
      // Coordenadas X y Y aleatorias dentro de un plano de 2560px
      shadow.push(`${Math.floor(Math.random() * 2560)}px ${Math.floor(Math.random() * 2560)}px #ffffff`);
    }
    return shadow.join(', ');
  };

  // Generamos 3 capas de estrellas (Pequeñas, Medianas y Grandes)
  const starsSmall = useMemo(() => createStars(700), []);
  const starsMedium = useMemo(() => createStars(200), []);
  const starsLarge = useMemo(() => createStars(50), []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#050810] pointer-events-none">
      <style>{`
        @keyframes driftUp {
          from { transform: translateY(0); }
          to { transform: translateY(-2560px); }
        }
        .star-layer {
          position: absolute;
          top: 0;
          left: 0;
          background: transparent;
        }
      `}</style>

      {/* CAPA 1: Estrellas Pequeñas (Lentas y al fondo) */}
      <div className="star-layer w-[1px] h-[1px] opacity-70" style={{ boxShadow: starsSmall, animation: 'driftUp 100s linear infinite' }}>
        <div className="absolute top-[2560px] w-[1px] h-[1px]" style={{ boxShadow: starsSmall }}></div>
      </div>

      {/* CAPA 2: Estrellas Medianas (Velocidad media) */}
      <div className="star-layer w-[2px] h-[2px] opacity-80" style={{ boxShadow: starsMedium, animation: 'driftUp 60s linear infinite' }}>
        <div className="absolute top-[2560px] w-[2px] h-[2px]" style={{ boxShadow: starsMedium }}></div>
      </div>

      {/* CAPA 3: Estrellas Grandes (Rápidas y al frente, brillan más) */}
      <div className="star-layer w-[3px] h-[3px] opacity-100" style={{ boxShadow: starsLarge, animation: 'driftUp 30s linear infinite' }}>
        <div className="absolute top-[2560px] w-[3px] h-[3px]" style={{ boxShadow: starsLarge }}></div>
      </div>
      
      {/* Un pequeño resplandor estelar en el centro */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[120px]"></div>
    </div>
  );
}