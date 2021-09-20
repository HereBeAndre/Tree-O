import { Desktop } from '../../utils/hooks/useMediaQuery';
import Navbar from '../layout/Navbar';
import DesktopForm from '../shared/responsive/DesktopForm';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Desktop>
        <DesktopForm />
      </Desktop>
    </>
  );
};

export default Home;
