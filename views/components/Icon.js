import React from 'react';
import Logo from '../images/Logo';
import Store from '../images/Store';
import Tag from '../images/Tag';
import Top from '../images/Top';
import Add from '../images/Add';
import Map from '../images/Map';
import Heart from '../images/Heart';
import Logout from '../images/Logout';

const Icon = ({ icon }) => {
  switch (icon) {
    case 'logo':
      return <Logo />;

    case 'store':
      return <Store />;

    case 'tag':
      return <Tag />;

    case 'top':
      return <Top />;

    case 'add':
      return <Add />;

    case 'map':
      return <Map />;

    case 'heart':
      return <Heart />;

    case 'logout':
      return <Logout />;

    default:
      return null;
  }
};

export default Icon;
