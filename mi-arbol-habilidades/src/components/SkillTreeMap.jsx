import React, { useState, useMemo } from 'react';
import ReactFlow, { Background, Controls, MiniMap } from 'reactflow';
import 'reactflow/dist/style.css'; // ¡Crucial para que los nodos no se rompan!

import skillTreeData from '../data/skillTree.json';
import CustomSkillNode from './CustomSkillNode';
import LoreModal from './LoreModal';

// Registramos el nodo personalizado
const nodeTypes = {
  customSkillNode: CustomSkillNode,
};

export default function SkillTreeMap() {
  const [selectedNodeData, setSelectedNodeData] = useState(null);

  // Cargamos los nodos y líneas desde tu JSON
  const nodes = useMemo(() => skillTreeData.nodes, []);
  const edges = useMemo(() => skillTreeData.edges, []);

  const onNodeClick = (event, node) => {
    setSelectedNodeData(node.data);
  };

  return (
    <div className="w-full h-screen bg-[#0f172a]">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodeClick={onNodeClick}
        fitView // Hace zoom automático para que quepa todo tu árbol
        className="bg-slate-950"
      >
        <Background color="#1e293b" gap={20} size={1} />
        <Controls className="bg-slate-800 fill-white border-slate-700" />
        <MiniMap 
          nodeColor={(node) => {
            if (node.data?.status === 'unlocked') return '#22c55e'; // Verde
            if (node.data?.status === 'in-progress') return '#f97316'; // Naranja
            return '#334155'; // Gris para bloqueados
          }}
          maskColor="#0f172a80"
          className="bg-slate-900 border border-slate-800"
        />
      </ReactFlow>

      {/* Renderiza el modal solo si hay un nodo seleccionado */}
      {selectedNodeData && (
        <LoreModal nodeData={selectedNodeData} onClose={() => setSelectedNodeData(null)} />
      )}
    </div>
  );
}