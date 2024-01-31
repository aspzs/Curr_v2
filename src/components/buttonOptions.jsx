// src/components/ButtonGroup.jsx
import React from 'react';
import '../assets/buttons.css';

const ButtonGroup = () => {
  return (
    <div className='opciones'>
        <div>
        <button><p><a href='https://manual.arnolsegovia.com'>MANUAL</a></p></button>
        <button><p><a href='https://apto.arnolsegovia.com'>APTO</a></p></button>
        <button><p><a href='https://perfil.arnolsegovia.com'>PERFIL</a></p></button>

        </div>

    </div>
  );
};

export default ButtonGroup;
