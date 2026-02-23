import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, Play, Download, PackageOpen, Image as ImageIcon } from 'lucide-react';

export default function LoreModal({ nodeData, onClose }) {
  if (!nodeData) return null;

  const { title, lore, stats, loot, status } = nodeData;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="bg-slate-900 border-2 border-slate-700 rounded-xl w-full max-w-4xl overflow-hidden shadow-2xl shadow-blue-900/20 flex flex-col md:flex-row max-h-[90vh]"
        >
          {/* Columna Izquierda: Lore y Stats */}
          <div className="p-6 md:w-1/2 flex flex-col border-r border-slate-700 overflow-y-auto custom-scrollbar">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold text-white leading-tight">{title}</h2>
              <button onClick={onClose} className="md:hidden text-slate-400 hover:text-white">
                <X size={24} />
              </button>
            </div>
            
            <div className="text-xs font-bold uppercase tracking-wider mb-4 px-3 py-1 bg-slate-800 inline-block rounded-full w-fit">
              Estado: <span className={status === 'unlocked' ? 'text-green-400' : status === 'in-progress' ? 'text-orange-400' : 'text-slate-500'}>{status}</span>
            </div>

            <div className="mb-6 flex-grow">
              <p className="text-slate-300 italic leading-relaxed text-sm">"{lore}"</p>
            </div>

            {stats && (
              <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
                <h3 className="text-slate-500 text-xs uppercase font-bold mb-3 tracking-widest">Atributos Otorgados</h3>
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(stats).map(([key, value]) => (
                    <div key={key} className="flex justify-between text-sm bg-slate-900 px-3 py-2 rounded">
                      <span className="text-slate-400">{key}:</span>
                      <span className="text-green-400 font-bold">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Columna Derecha: El Botín (Archivos/Videos/GIFs) */}
          <div className="p-6 md:w-1/2 bg-slate-950 flex flex-col relative overflow-y-auto custom-scrollbar">
            <button onClick={onClose} className="hidden md:block absolute top-4 right-4 text-slate-500 hover:text-white transition-colors bg-slate-800 p-1 rounded-full">
              <X size={20} />
            </button>

            <h3 className="text-xl font-bold text-slate-200 mb-6 flex items-center gap-2">
              <PackageOpen className="text-yellow-500" /> Inventario de Nodo
            </h3>

            {(!loot || loot.length === 0) ? (
              <div className="flex-grow flex items-center justify-center text-slate-600 text-sm border-2 border-dashed border-slate-800 rounded-lg">
                No hay artefactos en este nodo.
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {loot.map((item, index) => {
                  const lowerItem = item.toLowerCase();
                  const isVideoMP4 = lowerItem.endsWith('.mp4');
                  const isVideoGif = lowerItem.endsWith('.gif');
                  const isCertImage = lowerItem.endsWith('.jpg') || lowerItem.endsWith('.jpeg') || lowerItem.endsWith('.png');
                  
                  return (
                    <div key={index} className="bg-slate-900 border border-slate-800 rounded-lg p-3 hover:border-slate-600 transition-colors">
                      {isVideoMP4 ? (
                        <>
                          <div className="flex items-center gap-2 text-blue-400 font-semibold mb-2 text-sm"><Play size={16}/> {item}</div>
                          <video controls className="w-full rounded bg-black border border-slate-800">
                            <source src={`/assets/videos/${item}`} type="video/mp4" />
                          </video>
                        </>
                      ) : isVideoGif ? (
                        <>
                          <div className="flex items-center gap-2 text-purple-400 font-semibold mb-2 text-sm"><Play size={16}/> {item} (Demo)</div>
                          <img src={`/assets/videos/${item}`} alt={item} className="w-full rounded border border-slate-800 object-cover" />
                        </>
                      ) : isCertImage ? (
                        <>
                          <div className="flex items-center gap-2 text-pink-400 font-semibold mb-2 text-sm"><ImageIcon size={16}/> {item}</div>
                          <img src={`/assets/certs/${item}`} alt={item} className="w-full rounded border border-slate-800 object-cover" />
                        </>
                      ) : (
                        <a href={`/assets/certs/${item}`} target="_blank" rel="noreferrer" className="flex items-center justify-between p-3 bg-slate-800 hover:bg-slate-700 rounded transition-colors text-slate-200 text-sm font-semibold">
                          <span className="flex items-center gap-2"><FileText size={16} className="text-yellow-500"/> {item}</span>
                          <Download size={16} className="text-slate-400" />
                        </a>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}