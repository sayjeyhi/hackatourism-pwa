import { createContext } from 'react';

/**
 * Will helps us on deciding stuffs between server and clients
 * @type {{_currentValue, Consumer, _calculateChangedBits, $$typeof, _threadCount, _currentValue2, Provider}}
 */
export const serverContext = createContext({ isServer: false });
const { Provider: ServerProvider, Consumer: ServerConsumer } = serverContext;

export { ServerProvider, ServerConsumer };
