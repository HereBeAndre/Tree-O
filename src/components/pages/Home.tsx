import Navbar from '../layout/Navbar';

import DesktopForm from '../shared/responsive/DesktopForm';
import MobileForm from '../shared/responsive/MobileForm';

import { Desktop, Mobile, Tablet } from '../../utils/hooks/useMediaQuery';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Mobile>
        <MobileForm />
      </Mobile>
      <Tablet>
        <DesktopForm />
      </Tablet>
      <Desktop>
        <DesktopForm />
      </Desktop>
    </>
  );
};

export default Home;
