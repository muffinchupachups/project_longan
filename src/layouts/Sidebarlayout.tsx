import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

export default function Sidebarlayout() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 bg-[#F4F6EC] p-6">
        <Outlet />
      </main>
    </div>
  );
}
