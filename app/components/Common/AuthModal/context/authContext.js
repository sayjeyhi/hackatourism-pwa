import { createContext } from 'react';

const context = createContext({});
const { Provider: AuthProvider, Consumer: AuthConsumer } = context;

export { context, AuthConsumer, AuthProvider };
