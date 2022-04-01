import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';

const GetPublickKeyButton = () => {
  const { activate } = useWeb3React();
  return (
    <>
      <button
        className="btn"
        onClick={async () => {
          await activate(new InjectedConnector({})).catch((err) => {
            console.log(err);
          });
        }}
      >
        Get Public key
      </button>
    </>
  );
};
export default GetPublickKeyButton;
