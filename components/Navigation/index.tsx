import styled from 'styled-components';
import avatar from '@/images/img-1.jpg';
import NextLink from 'next/link';
import Image from 'next/image';

const NavigationStyled = styled.div``;

const Navigation = () => {
  return (
    <NavigationStyled>
      <div>
        <Image src={avatar} alt='avatar' />
      </div>
      <ul className='nav-items'>
        <li className='nav-item'>
          <NextLink href='/home'>Home</NextLink>
        </li>
      </ul>
    </NavigationStyled>
  );
};

export default Navigation;
