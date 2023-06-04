import React, { ReactNode } from 'react';
import { IconContext } from 'react-icons';

export const StyledIcon = ({ children }) => (
  <IconContext.Provider value={{ color: 'white', className: 'styled-icon' }}>
    {children}
  </IconContext.Provider>
);
