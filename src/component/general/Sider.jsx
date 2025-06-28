import { Layout } from "antd";
import { Menu } from "@/ui/Menu";

const { Sider: AntSider } = Layout;

export default function Sider() {
  return (
    <AntSider width='18%' theme='light' collapsible>
      <Menu dSK={["dashboard"]} dOK={["pepole"]} mode='inline' />
    </AntSider>
  );
}
