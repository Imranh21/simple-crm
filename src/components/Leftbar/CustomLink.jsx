import {NavLink, useResolvedPath, useMatch} from 'react-router-dom'


function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    
    return (
      
        <NavLink
          style={{background: match ? "#219ebc" : "none", color: match ? "white" : "#219ebc" }}
          to={to}
          {...props}
        >
          {children}
        </NavLink>
        
    
    );
  }

  export default CustomLink