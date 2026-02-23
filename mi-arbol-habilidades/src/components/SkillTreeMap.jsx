import React, { useState, useMemo } from 'react';
import ReactFlow, { Background, Controls, MiniMap } from 'reactflow';
import 'reactflow/dist/style.css'; 

import skillTreeData from '../data/skillTree.json';
import CustomSkillNode from './CustomSkillNode';
import LoreModal from './LoreModal';
import StarryBackground from './StarryBackground'; // ¡Invocamos las estrellas!

const nodeTypes = {
  customSkillNode: CustomSkillNode,
};

export default function SkillTreeMap() {
  const [selectedNodeData, setSelectedNodeData] = useState(null);

  const nodes = useMemo(() => skillTreeData.nodes, []);
  const edges = useMemo(() => skillTreeData.edges, []);

  const onNodeClick = (event, node) => {
    setSelectedNodeData(node.data);
  };

  return (
    <div className="relative w-full h-screen bg-[#050810]">
      
      {/* Nuestro nuevo fondo animado va en la capa inferior (z-0) */}
      <StarryBackground />

      {/* El lienzo interactivo de habilidades va encima (z-10) */}
      <div className="absolute inset-0 z-10">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          onNodeClick={onNodeClick}
          fitView 
          className="bg-transparent" // ¡Hacemos el lienzo transparente!
        >
          {/* Conservamos una grilla muuuuy sutil que parece constelaciones */}
          <Background color="#334155" gap={30} size={1} className="opacity-30" />
          
          <Controls className="bg-slate-800/80 backdrop-blur-md fill-white border-slate-700" />
          <MiniMap 
            nodeColor={(node) => {
              if (node.data?.status === 'unlocked') return '#22c55e'; 
              if (node.data?.status === 'in-progress') return '#f97316'; 
              return '#334155'; 
            }}
            maskColor="#050810CC"
            className="bg-slate-900/80 backdrop-blur-md border border-slate-700"
          />
        </ReactFlow>
      </div>

      {selectedNodeData && (
        <LoreModal nodeData={selectedNodeData} onClose={() => setSelectedNodeData(null)} />
      )}
    </div>
  );
}