// src/components/SetAutocompleteMUI.jsx
import React from 'react';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import setsFile from '../assets/setExampes.json';   // adjust the path

const filter = createFilterOptions({
  stringify: (option) =>
    `${option.name} ${option.id} ${option.series}`.toLowerCase(),
});

export default function SetAutocompleteMUI({ onSelect }) {
  return (
    <Autocomplete
      options={setsFile.data}              // full list
      filterOptions={filter}               // fuzzy match on three fields
      getOptionLabel={(opt) => opt.name}   // what the user sees
      isOptionEqualToValue={(o, v) => o.id === v.id}
      onChange={(_, value) => onSelect?.(value)}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search Pokémon set"
          placeholder="Begin typing…"
          variant="outlined"
          fullWidth
        />
      )}
      freeSolo                 // allow arbitrary text
      sx={{ width: 320 }}      // simple inline style – theme later
    />
  );
}
