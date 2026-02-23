import React from 'react';

export default function CharacterProfile() {
  return (
    <div className="absolute top-6 left-6 z-50 bg-slate-900/80 backdrop-blur-md border-2 border-slate-700 rounded-xl p-4 shadow-xl shadow-black/50 w-72 flex items-center gap-4 text-white">
      <div className="relative">
        <div className="w-16 h-16 rounded-full border-2 border-green-500 bg-slate-800 flex items-center justify-center overflow-hidden">
           <img src="/assets/avatars/avatar.jpg" alt="Mi Avatar" className="w-full h-full object-cover" />
        </div>
        <div className="absolute -bottom-2 -right-2 bg-blue-600 border-2 border-slate-900 text-[10px] font-bold rounded-full w-7 h-7 flex items-center justify-center">
          Lv.3
        </div>
      </div>
      
      <div className="flex-1">
        <h2 className="font-bold text-lg leading-tight truncate">Tu Nombre</h2>
        <p className="text-green-400 text-xs font-semibold tracking-wider">DATA SCIENTIST</p>
        <div className="w-full bg-slate-800 h-2 rounded-full mt-2 overflow-hidden border border-slate-700">
          <div className="bg-blue-500 h-full w-[60%] shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
        </div>
        <p className="text-[9px] text-slate-400 mt-1 text-right">EXP al siguiente Nivel</p>
      </div>
    </div>
  );
}