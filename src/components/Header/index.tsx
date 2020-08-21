import React from 'react';
import LogoSVG from '../../assets/icons/Logo.svg';

import {
  Container,
  Avatar,
  ButtonContainer,
  FeedIcon,
  Logo,
  NavContainer,
  ProfileContainer,
  SearchBar,
  ChatIcon,
  JobsIcon,
  NotificationIcon,
  NetworkIcon,
  ProfileInfo,
  OtherIcon,
} from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Logo>
        <img src={LogoSVG} alt='linkedin' />
      </Logo>
      <NavContainer>
        <ButtonContainer>
          <FeedIcon />
          <span>FEED</span>
        </ButtonContainer>

        <ButtonContainer>
          <NetworkIcon />
          <span>NETWORK</span>
        </ButtonContainer>

        <ButtonContainer>
          <JobsIcon />
          <span>JOBS</span>
        </ButtonContainer>

        <ButtonContainer>
          <ChatIcon />
          <span>CHAT</span>
        </ButtonContainer>

        <ButtonContainer>
          <NotificationIcon />
          <span>NOTICES</span>
        </ButtonContainer>
      </NavContainer>
      <SearchBar placeholder='Search' />
      <ProfileContainer>
        <Avatar
          src='https://github.com/isaqueigor.png'
          alt='Avatar'
          className='profile-picture'
        />
        <ProfileInfo>
          <span>Isaque Igor</span>
          <p>369 views today</p>
        </ProfileInfo>
      </ProfileContainer>
      <ButtonContainer>
        <OtherIcon />
        <span>OTHER</span>
      </ButtonContainer>
    </Container>
  );
};

export default Header;
