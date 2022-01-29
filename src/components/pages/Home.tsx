import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from 'antd';

import { formDataSelectors, uiActions } from '../../store/all';

import Navbar from '../layout/Navbar';

import DesktopForm from '../shared/responsive/DesktopForm';
import MobileForm from '../shared/responsive/MobileForm';

import { Desktop, Mobile, Tablet } from '../../utils/hooks/useMediaQuery';
import { TREEDOM_URL } from '../../utils/constants';

import i18n from '../../i18n';
import { EStatus } from '../../schemas/generics_d';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const stepThreeFormMetaStatus = useSelector(formDataSelectors.getThirdStepFormMetaStatus);

  useEffect(() => {
    if (stepThreeFormMetaStatus === EStatus.SUCCESS) {
      dispatch(uiActions.setClearUiData());
    }
  }, [stepThreeFormMetaStatus]);

  return (
    <>
      <Mobile>
        <Navbar showExtraActions={false} />
        <MobileForm />
      </Mobile>
      <Tablet>
        <Navbar showExtraActions>
          <Button key="findOutMore" size="middle" ghost target="_blank" href={TREEDOM_URL}>
            {i18n.FIND_MORE}
          </Button>
        </Navbar>
        <DesktopForm />
      </Tablet>
      <Desktop>
        <Navbar showExtraActions>
          <Button key="findOutMore" size="middle" ghost target="_blank" href={TREEDOM_URL}>
            {i18n.FIND_MORE}
          </Button>
        </Navbar>
        <DesktopForm />
      </Desktop>
    </>
  );
};

export default Home;
