import { useWeb3React } from '@web3-react/core';
import { useBalance } from '../use/useBalance';

const SingIn = () => {
  const { account, chainId, library } = useWeb3React();
  const balance = useBalance();

  return (
    <>
      <ul className="metamask-list">
        <li className="metamask-list__item">Chain ID {chainId}</li>
        <li className="metamask-list__item">{account}</li>
        <li className="metamask-list__item">{balance}</li>
      </ul>

      <button
        className="btn"
        onClick={async () => {
          const message = `Logging in at ${new Date().toISOString()}`;
          const signature = await library
            .getSigner(account)
            .signMessage(message)
            .catch((error) => console.error(error));
          console.log({ message, account, signature });
        }}
      >
        Sign In
      </button>
    </>
  );
};

export default SingIn;
