import { useContext } from 'react';
import { serverContext } from '../Contexts/serverContext';

/**
 * Simplify using react useContext and serverContext
 */
const useServerContext = () => useContext(serverContext);

export default useServerContext;
