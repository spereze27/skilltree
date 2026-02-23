import React from 'react';
import CharacterProfile from './components/CharacterProfile';
import SkillTreeMap from './components/SkillTreeMap';

function App() {
  return (
    <div className="relative w-screen h-screen overflow-hidden font-sans bg-slate-950">
      <CharacterProfile />
      <SkillTreeMap />
    </div>
  );
}

export default App;