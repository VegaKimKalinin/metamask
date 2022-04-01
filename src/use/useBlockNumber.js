import { useState, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';

export function useBlockNumber() {
  const { library } = useWeb3React();
  const [blockNumber, setBlockNumber] = useState();

  useEffect(() => {
    if (library) {
      const updateBlockNumber = (val) => setBlockNumber(val);
      library.on('block', updateBlockNumber);

      return () => {
        library.removeEventListener('block', updateBlockNumber);
      };
    }
  }, [library]);

  return blockNumber;
}
