import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const ScrollToTop: React.SFC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
export default ScrollToTop;
