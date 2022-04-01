import { useWeb3React } from '@web3-react/core';
import GetPublickKeyButton from '../../components/GetPublickKeyButton';
import SingIn from '../../components/SignIn';
import metamaskIMG from '../../img/metamask.svg';
import './main.scss';

function App() {
  const { active } = useWeb3React();

  return (
    <main className="main">
      <div className="container">
        <div className="metamask-box">
          <div className="metamask-icon">
            <img src={metamaskIMG} alt="metamaskIcon" />
          </div>
          <div>{active ? <SingIn /> : <GetPublickKeyButton />}</div>
        </div>
      </div>
    </main>
  );
}

export default App;
