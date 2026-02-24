
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trophy } from 'lucide-react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';

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
      {/* HUD Principal Responsivo */}
      <div className="absolute top-4 left-4 md:top-6 md:left-6 z-40 bg-slate-900/90 backdrop-blur-md border border-slate-700 rounded-xl p-3 md:p-4 shadow-xl shadow-black/50 w-[calc(100%-2rem)] md:w-80 flex items-center gap-3 md:gap-4 text-white transition-all">
        
        {/* Avatar Interactivo - Más pequeño en móvil */}
        <div 
          className="relative cursor-pointer hover:scale-105 transition-transform group shrink-0" 
          onClick={() => setIsStatsOpen(true)}
        >
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-green-500 bg-slate-800 flex items-center justify-center overflow-hidden shadow-[0_0_10px_rgba(34,197,94,0.3)]">
             <img src="/assets/avatars/avatar.jpg" alt="Mi Avatar" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-1 -right-1 bg-blue-600 border border-slate-900 text-[8px] md:text-[10px] font-bold rounded-full w-5 h-5 md:w-7 md:h-7 flex items-center justify-center">
            Lv.15
          </div>
        </div>
        
        {/* Información del Personaje */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between md:block">
            <h2 className="font-bold text-sm md:text-lg leading-tight truncate">Simón Pérez</h2>
            <span className="md:hidden bg-blue-600/20 text-blue-400 text-[8px] px-1.5 py-0.5 rounded border border-blue-500/30 font-bold">MID-LEVEL</span>
          </div>
          
          <p className="hidden md:block text-green-400 text-[10px] font-bold tracking-wider uppercase mb-1 italic">Open Sourcerer</p>
          
          {/* Barra de EXP - Más delgada en móvil */}
          <div className="w-full bg-slate-800 h-1 md:h-1.5 rounded-full mt-1 overflow-hidden border border-slate-700 relative">
            <div className="bg-blue-500 h-full w-[65%] shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
          </div>
          
          {/* Subtítulo Dinámico: Se oculta afinidad en móvil para no saturar */}
          <div className="mt-1 flex flex-col md:flex-col">
            <p className="hidden md:block text-[11px] text-blue-300 font-bold">Rango: <span className="text-white">Mid-Level</span></p>
            <p className="text-[9px] md:text-[9.5px] text-slate-400 leading-tight mt-0.5 truncate">
              <span className="hidden md:inline text-slate-300 font-semibold italic">Afinidad: </span> 
              Computer Vision, Big Data & Cloud
            </p>
          </div>
        </div>

        {/* Botón de Stats visible solo en móvil para invitar al clic */}
        <button 
          onClick={() => setIsStatsOpen(true)}
          className="md:hidden p-2 bg-slate-800 rounded-lg text-green-500 border border-slate-700"
        >
          <Trophy size={16} />
        </button>
      </div>

      {/* Modal de Telaraña (Mismo de antes, pero con ResponsiveContainer) */}
      <AnimatePresence>
        {isStatsOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-md p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-slate-900 border-2 border-slate-700 rounded-2xl w-full max-w-sm md:max-w-md p-4 md:p-6 shadow-2xl relative"
            >
              <button onClick={() => setIsStatsOpen(false)} className="absolute top-4 right-4 text-slate-400 hover:text-white bg-slate-800 rounded-full p-1"><X size={20} /></button>
              
              <div className="text-center mb-4 md:mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-white">Atributos Actuales</h3>
                <p className="text-green-400 text-[10px] md:text-xs font-bold tracking-widest uppercase mt-1">Mid-Level Scientist</p>
              </div>
              
              <div className="w-full h-64 md:h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillsData}>
                    <PolarGrid stroke="#334155" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 'bold' }} />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                    <Radar name="Habilidad" dataKey="score" stroke="#22c55e" fill="#22c55e" fillOpacity={0.5} />
                    <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderRadius: '8px', border: 'none' }} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-4 bg-slate-950/50 p-3 rounded-xl border border-slate-800 text-center text-[10px] md:text-xs text-slate-500">
                Gráfico de rendimiento basado en el progreso del árbol.
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}