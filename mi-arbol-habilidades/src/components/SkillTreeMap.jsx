import React, { useState, useMemo } from 'react';
import ReactFlow, { Background } from 'reactflow'; // Eliminamos Controls y MiniMap de aquí
import 'reactflow/dist/style.css'; 

import skillTreeData from '../data/skillTree.json';
import CustomSkillNode from './CustomSkillNode';
import LoreModal from './LoreModal';
import StarryBackground from './StarryBackground';

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
      
      {/* Fondo animado de estrellas */}
      <StarryBackground />

      <div className="absolute inset-0 z-10">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          onNodeClick={onNodeClick}
          fitView 
          className="bg-transparent"
        >
          {/* Mantenemos la cuadrícula sutil que ayuda a dar profundidad */}
          <Background color="#334155" gap={30} size={1} className="opacity-30" />
          
          {/* Hemos removido <Controls /> y <MiniMap /> para una inmersión total */}
        </ReactFlow>
      </div>

      {selectedNodeData && (
        <LoreModal nodeData={selectedNodeData} onClose={() => setSelectedNodeData(null)} />
      )}
    </div>
  );
}