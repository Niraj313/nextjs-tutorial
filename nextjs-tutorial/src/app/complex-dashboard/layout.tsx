/** @format */

import Notification from './@notifiaction/page';
import RevenueMertices from './@revenue/page';
import UserAnalytics from './@user/page';

export default function ComplexDashboardLayout({
  children,
  user,
  revenue,
  notifiaction,
}: {
  children: React.ReactNode;
  user: React.ReactNode;
  revenue: React.ReactNode;
  notifiaction: React.ReactNode;
}) {
  return (
    <>
      <div>{children}</div>
      <div style={{ display: 'flex' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div>{user}</div>
          <div>{revenue}</div>
        </div>
        <div style={{ display: 'flex', flex: 1 }}>{notifiaction}</div>
      </div>
    </>
  );
}
