import { Layout, Space } from "antd";
import { CurrentUser } from "../current-user";

export const Header = () => {

  const headerStyles: React.CSSProperties = {
    background: '#fff',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '0 24px',
    position: "sticky",
    top: 0,
    zIndex: 999,
  }

  return (
    <div>
      <Layout.Header style={headerStyles}>
        <Space align="center" size="middle">
          <CurrentUser />
        </Space>
      </Layout.Header>
    </div>
  );
};
