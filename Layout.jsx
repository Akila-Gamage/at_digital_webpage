import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Sidebar from './components/Sidebar.jsx';

export default function Layout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="app-shell">
      <Navbar onMenu={() => setOpen(true)} />
      <Sidebar open={open} onClose={() => setOpen(false)} />
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}
