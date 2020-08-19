import styled, { css } from 'styled-components';
import { MdRssFeed, MdPeople, MdChat } from 'react-icons/md';
import { FiBriefcase, FiBell } from 'react-icons/fi';
import { BsThreeDots } from 'react-icons/bs';

export const Container = styled.div`
  padding: 0 30px;
  background: var(--color-header);

  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
`;
export const Logo = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  margin-left: 18px;
  justify-content: center;
  align-items: center;
`;
export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-weight: 500;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px;
  cursor: pointer;

  &:hover {
    color: var(--color-link);
    transform: scale(1.1);
  }
  &.active {
    border-bottom: 2px solid var(--color-link);
  }
`;

const generalIconCSS = css`
  width: 22px;
  height: 22px;
`;

export const FeedIcon = styled(MdRssFeed)`
  ${generalIconCSS}
  color: var(--color-black);
`;

export const ChatIcon = styled(MdChat)`
  ${generalIconCSS}
  color: var(--color-black);
`;

export const NetworkIcon = styled(MdPeople)`
  ${generalIconCSS}
  color: var(--color-black);
`;

export const NotificationIcon = styled(FiBell)`
  ${generalIconCSS}
  color: var(--color-black);
`;

export const OtherIcon = styled(BsThreeDots)`
  ${generalIconCSS}
  color: var(--color-black);
`;

export const JobsIcon = styled(FiBriefcase)`
  ${generalIconCSS}
  color: var(--color-black);
`;

export const SearchBar = styled.input`
  margin-left: 16px;
  font-size: 14px;
  padding: 7.5px 8px;
  width: 40%;
  border: none;
  outline: none;
  border-radius: 12px;
`;
export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 12px;
  cursor: pointer;

  span {
    font-weight: 500;
    font-size: 16px;

    &:hover {
      color: var(--color-gray);
    }
  }

  p {
    font-weight: 200;
    font-size: 14px;
    color: var(--color-hashtag);
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: normal;
  justify-content: flex-start;
  padding: 12px;
`;

export const Avatar = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1px solid #fff;
`;
