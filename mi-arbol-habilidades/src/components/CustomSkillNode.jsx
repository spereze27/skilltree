import React from 'react';
import { Handle, Position } from 'reactflow';
import { Lock, Unlock, Zap } from 'lucide-react';

export default function CustomSkillNode({ data }) {
  const isUnlocked = data.status === 'unlocked';
  const isInProgress = data.status === 'in-progress';

  // Lógica de colores según el estado (Lore)
  let borderStyle = 'border-slate-700 bg-slate-800/80 text-slate-500 grayscale opacity-80';
  let shadowStyle = '';
  let StatusIcon = Lock;

  if (isUnlocked) {
    borderStyle = 'border-green-500 bg-slate-900 text-white';
    shadowStyle = 'shadow-[0_0_15px_rgba(34,197,94,0.2)]';
    StatusIcon = Unlock;
  } else if (isInProgress) {
    borderStyle = 'border-orange-500 bg-slate-900 text-white';
    shadowStyle = 'shadow-[0_0_15px_rgba(249,115,22,0.3)] animate-pulse';
    StatusIcon = Zap;
  }

  return (
    <div className={`relative px-4 py-3 rounded-lg border-2 w-64 backdrop-blur-sm transition-all duration-300 hover:scale-105 cursor-pointer ${borderStyle} ${shadowStyle}`}>
      {/* Conector Superior */}
      <Handle type="target" position={Position.Top} className="w-3 h-3 !bg-slate-400 border-none" />
      
      <div className="flex items-center gap-3">
        {/* Contenedor del Icono */}
        <div className={`p-2 rounded-lg flex items-center justify-center w-12 h-12 shrink-0 ${isUnlocked ? 'bg-green-500/20 text-green-400' : isInProgress ? 'bg-orange-500/20 text-orange-400' : 'bg-slate-700/50 text-slate-500'}`}>
          {data.icon ? (
            <img src={`/assets/icons/${data.icon}`} alt="Icono" className="w-full h-full object-contain drop-shadow-md" />
          ) : (
            <StatusIcon size={20} />
          )}
        </div>
        
        {/* Título del Nodo */}
        <div className="text-sm font-bold leading-tight">
          {data.title}
        </div>
      </div>

      {/* Barra de progreso si el nodo está in-progress */}
      {isInProgress && data.progress && (
        <div className="w-full bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden">
          <div className="bg-orange-500 h-full" style={{ width: `${data.progress}%` }}></div>
        </div>
      )}
      
      {/* Conector Inferior */}
      <Handle type="source" position={Position.Bottom} className="w-3 h-3 !bg-slate-400 border-none" />
    </div>
  );
}