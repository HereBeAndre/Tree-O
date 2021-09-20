import { Row, Col, Layout } from 'antd';

import logo from '../../resources/logo.png';

const { Header } = Layout;

interface INavbar {
  showExtraActions: boolean;
}

const Navbar: React.FC<INavbar> = ({ showExtraActions, children, ...rest }) => (
  <Col span={24}>
    <Header style={{ backgroundColor: '#3ed367', height: '5rem' }} {...rest}>
      <Row justify="space-between" align="middle">
        <img style={{ maxWidth: '7rem' }} src={logo} alt="Tree-O Logo" />
        {showExtraActions && children}
      </Row>
    </Header>
  </Col>
);

export default Navbar;
