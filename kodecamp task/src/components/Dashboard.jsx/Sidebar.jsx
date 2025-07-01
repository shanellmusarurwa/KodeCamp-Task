import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, 
  faChartLine, 
  faFileAlt, 
  faCog,
  faUsers
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <aside className="dashboard-sidebar">
      <nav>
        <ul>
          <li>
            <NavLink to="/dashboard" exact activeClassName="active">
              <FontAwesomeIcon icon={faHome} />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/analytics" activeClassName="active">
              <FontAwesomeIcon icon={faChartLine} />
              <span>Analytics</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reports" activeClassName="active">
              <FontAwesomeIcon icon={faFileAlt} />
              <span>Reports</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/users" activeClassName="active">
              <FontAwesomeIcon icon={faUsers} />
              <span>Users</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/settings" activeClassName="active">
              <FontAwesomeIcon icon={faCog} />
              <span>Settings</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;