import { createContext } from 'react';

const context = createContext({});
const { Provider: HeaderProvider, Consumer: HeaderConsumer } = context;

export { context, HeaderConsumer, HeaderProvider };
