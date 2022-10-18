
import './Sidenew.css';

import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
 function Sidenew() {
  const { collapseSidebar } = useProSidebar();

  return (
    <div style={{ display: 'flex'}}>
      <Sidebar className='sidenew'>
        <Menu>
          <MenuItem>Home</MenuItem>
          <MenuItem>Admision Form</MenuItem>
          <MenuItem>Add Teacher </MenuItem>
          <MenuItem>Time Table </MenuItem>
          <MenuItem>Attendance Reports</MenuItem>
          <MenuItem>Performance Reports</MenuItem>
          <MenuItem>Payroll Reports </MenuItem>
          <MenuItem>SMS</MenuItem>
          <MenuItem>Email</MenuItem>
          <MenuItem>Whatsapp</MenuItem>
          <MenuItem>Expenase tracking</MenuItem>
          <MenuItem>payments</MenuItem>
          <MenuItem>Profit and loss</MenuItem>
          

          
          
          
        </Menu>
      </Sidebar>
      <main>
        <button onClick={() => collapseSidebar()}>X</button>
      </main>
    </div>
  );
}
export default Sidenew;