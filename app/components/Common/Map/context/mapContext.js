import { createContext } from 'react';

const context = createContext({});
const { Provider: ModalProvider, Consumer: ModalConsumer } = context;

export { context, ModalConsumer, ModalProvider };
