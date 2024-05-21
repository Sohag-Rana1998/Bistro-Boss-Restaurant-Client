import { Helmet } from 'react-helmet-async';

import AllMenu from './AllMenu';
const OurMenu = () => {
  return (
    <div className="max-w-[1990px]">
      <Helmet>
        <title>Bistro Boss Restaurant | OurMenu</title>
      </Helmet>
      <AllMenu />
    </div>
  );
};

export default OurMenu;
