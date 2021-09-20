import { Button } from 'antd';

import Navbar from '../layout/Navbar';

import DesktopForm from '../shared/responsive/DesktopForm';
import MobileForm from '../shared/responsive/MobileForm';

import { Desktop, Mobile, Tablet } from '../../utils/hooks/useMediaQuery';
import { TREEDOM_URL } from '../../utils/constants';

const Home: React.FC = () => {
  return (
    <>
      <Mobile>
        <Navbar showExtraActions={false} />
        <MobileForm />
      </Mobile>
      <Tablet>
        <Navbar showExtraActions>
          <Button key="findOutMore" size="middle" ghost target="_blank" href={TREEDOM_URL}>
            Find More
          </Button>
        </Navbar>
        <DesktopForm />
      </Tablet>
      <Desktop>
        <Navbar showExtraActions>
          <Button key="findOutMore" size="middle" ghost target="_blank" href={TREEDOM_URL}>
            Find More
          </Button>
        </Navbar>
        <DesktopForm />
      </Desktop>
    </>
  );
};

export default Home;
