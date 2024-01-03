import React from 'react';

// this is a debug component that is used to list various things that might
// be useful for debugging such as cross origin errors, etc.
function NewPage() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div className="flex h-screen w-screen items-center justify-center ">
        <div className="bg-secondary-dark mx-auto space-y-2 rounded-lg py-8 px-8 drop-shadow-md">
          <select>
            <option value="">Doenças leve</option>
          </select>
          <button>Salvar</button>
        </div>
      </div>
    </div>
  );
}

export default NewPage;
