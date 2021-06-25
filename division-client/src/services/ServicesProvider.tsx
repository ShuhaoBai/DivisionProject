// RootStateContext

import React from 'react';

import Services from './Services';
import ServicesContext from './ServicesContext';

export interface ServicesProviderProps {
  services: Services;
  children: React.ReactNode;
}

const ServicesProvider: React.FC<ServicesProviderProps> = ({
  services,
  children,
}) => (
  <ServicesContext.Provider value={services}>
    {children}
  </ServicesContext.Provider>
);
export default ServicesProvider;
