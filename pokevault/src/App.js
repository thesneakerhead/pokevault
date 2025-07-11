// src/App.jsx
import React, { useState } from 'react';
import SetAutocomplete from './Components/SetAutoComplete';

export default function App() {
  const [chosen, setChosen] = useState(null);

  return (
    <main className="p-6 space-y-4">
      <h1 className="text-xl font-bold">Pick a Pokémon TCG set</h1>

      <SetAutocomplete onSelect={setChosen} />

      {chosen && (
        <div className="rounded border p-4">
          <h2 className="font-semibold">{chosen.name}</h2>
          <p>ID : {chosen.id}</p>
          <p>Series: {chosen.series}</p>
          <p>Printed / Total: {chosen.printedTotal} / {chosen.total}</p>
          <p>Release Date: {chosen.releaseDate}</p>
        </div>
      )}
    </main>
  );
}

