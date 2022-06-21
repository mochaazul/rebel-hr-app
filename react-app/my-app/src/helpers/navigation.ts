import { useNavigate, useLocation } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();
  const { state, pathname } = useLocation();

  return {
    navigate,
    state,
    pathname
  };
};

export default Navigation;
