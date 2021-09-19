import { Row, Col, Layout, Button } from 'antd';

import logo from '../../resources/logo.png';

import { TREEDOM_URL } from '../../utils/constants';

import styles from './Navbar.module.scss';

const { Header } = Layout;

const Navbar: React.FC = ({ ...rest }) => {
  return (
    <Col span={24}>
      <Header style={{ backgroundColor: '#3ed367', height: '5rem' }} {...rest}>
        <Row justify="space-between" align="middle">
          <img style={{ maxWidth: '7rem' }} src={logo} alt="Tree-O Logo" />
          <Button
            className={styles.Hidden}
            key="findOutMore"
            size="middle"
            ghost
            target="_blank"
            href={TREEDOM_URL}
          >
            Find More
          </Button>
        </Row>
      </Header>
    </Col>
  );
};

export default Navbar;
