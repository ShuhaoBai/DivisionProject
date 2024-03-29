/**
 * WARNING: Never use this directly. Always use ServiceProvider, useServices,
 * and withServices instead!
 */
import React from 'react';

import Services from './Services'; //Services-DummyService

// A context needs a default value. Constructing the services here is
// impractical (it should be handled by the client code). To solve this
// problem, we will:
//   a) Set all services to undefined in the default value
//   b) ensure the default value is never used
type NullableServices = Partial<Services>;

export default React.createContext<NullableServices>({});
