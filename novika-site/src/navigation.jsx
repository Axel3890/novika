import React from 'react';
import { createRoot } from 'react-dom/client';
import StaggeredMenu from './menu/StaggeredMenu';
import './navigation.css';

const items = [
  ['Inicio', '#inicio'],
  ['Servicios', '#servicios', 'Desarrollo web, software y diseño'],
  ['Referencias', '#proyectos', 'Webs e interfaces para explorar'],
  ['Proceso', '#proceso', 'De la primera charla al lanzamiento'],
  ['Preguntas', '#preguntas'],
].map(([label, link, description]) => ({ label, link, description }));

createRoot(document.getElementById('navigation')).render(
  <StaggeredMenu
    isFixed
    items={items}
    colors={['#ab92e7', '#6b2bff']}
    displaySocials={false}
    displayItemNumbering={false}
    logoUrl="assets/Novika_Logo_Principal.svg"
    menuButtonColor="#ffffff"
    openMenuButtonColor="#ffffff"
    accentColor="#6b2bff"
  />
);
