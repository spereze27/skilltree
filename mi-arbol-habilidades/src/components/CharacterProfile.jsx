import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';

// Datos de la telaraña (Basados en el Lore de tu Árbol)
const skillsData = [
  { subject: 'Computer Vision', score: 80, fullMark: 100 },
  { subject: 'Big Data / Data Eng', score: 80, fullMark: 100 },
  { subject: 'Cloud (GCP)', score: 65, fullMark: 100 },
  { subject: 'Machine Learning', score: 85, fullMark: 100 },
  { subject: 'Python', score: 80, fullMark: 100 },
  { subject: 'Lógica & Analítica', score: 90, fullMark: 100 },
  { subject: 'SQL', score: 80, fullMark: 100 },
  { subject: 'GenAI', score: 65, fullMark: 100 },
];

export default function CharacterProfile() {
  const [isStatsOpen, setIsStatsOpen] = useState(false);

  return (
    <>
      {/* HUD Principal (Esquina Superior Izquierda) */}
      <div className="absolute top-6 left-6 z-40 bg-slate-900/80 backdrop-blur-md border-2 border-slate-700 rounded-xl p-4 shadow-xl shadow-black/50 w-80 flex items-center gap-4 text-white">
        
        {/* Avatar Interactivo */}
        <div 
          className="relative cursor-pointer hover:scale-105 transition-transform group" 
          onClick={() => setIsStatsOpen(true)}
          title="Ver Atributos del Personaje"
        >
          <div className="w-16 h-16 rounded-full border-2 border-green-500 bg-slate-800 flex items-center justify-center overflow-hidden shadow-[0_0_15px_rgba(34,197,94,0.4)] group-hover:shadow-[0_0_20px_rgba(34,197,94,0.8)] transition-shadow">
             <img src="/assets/avatars/avatar.jpg" alt="Mi Avatar" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-blue-600 border-2 border-slate-900 text-[10px] font-bold rounded-full w-7 h-7 flex items-center justify-center">
            Lv.15
          </div>
        </div>
        
        {/* Información del Personaje */}
        <div className="flex-1">
          {/* AQUÍ CAMBIAS TU NOMBRE */}
          <h2 className="font-bold text-lg leading-tight truncate">Simón Perez</h2>
          
          <p className="text-green-400 text-[10px] font-bold tracking-wider uppercase mb-1">Open Sourcerer</p>
          
          <div className="w-full bg-slate-800 h-1.5 rounded-full mt-1 overflow-hidden border border-slate-700 relative">
            <div className="bg-blue-500 h-full w-[65%] shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
          </div>
          
          {/* Subtítulo de Rango y Afinidad */}
          <div className="mt-1.5 flex flex-col">
            <p className="text-[11px] text-blue-300 font-bold">Rango: <span className="text-white">Mid-Level</span></p>
            <p className="text-[9.5px] text-slate-400 leading-tight mt-0.5">
              <span className="text-slate-300 font-semibold">Afinidad:</span> Computer Vision, Big Data & Cloud
            </p>
          </div>
        </div>
      </div>

      {/* Modal de Telaraña de Estadísticas */}
      <AnimatePresence>
        {isStatsOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-slate-900 border-2 border-slate-700 rounded-xl w-full max-w-md p-6 shadow-2xl shadow-green-900/20 relative"
            >
              <button 
                onClick={() => setIsStatsOpen(false)} 
                className="absolute top-4 right-4 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-full p-1 transition-colors"
              >
                <X size={20} />
              </button>
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white leading-tight">Distribución de Atributos</h3>
                <p className="text-green-400 text-xs font-bold tracking-widest uppercase mt-1">
                  Mid-Level Data Scientist
                </p>
              </div>
              
              {/* Contenedor del Gráfico de Radar */}
              <div className="w-full h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="70%" data={skillsData}>
                    <PolarGrid stroke="#334155" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 'bold' }} />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#fff', borderRadius: '8px' }}
                      itemStyle={{ color: '#22c55e', fontWeight: 'bold' }}
                    />
                    <Radar 
                      name="Puntos de Habilidad" 
                      dataKey="score" 
                      stroke="#22c55e" 
                      strokeWidth={2}
                      fill="#22c55e" 
                      fillOpacity={0.4} 
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-4 bg-slate-950 p-3 rounded-lg border border-slate-800 text-center text-xs text-slate-400">
                Puntos de experiencia calculados en base a proyectos, certificaciones y maestría.
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}