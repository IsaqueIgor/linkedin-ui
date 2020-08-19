import styled, { css } from 'styled-components';
import { BsPencilSquare } from 'react-icons/bs';
import { FiSend, FiImage, FiFilm, FiPaperclip } from 'react-icons/fi';

export const Container = styled.div`
  color: var(--color-gray);
  border-style: none;
  .write {
    display: flex;
    align-items: center;
    padding: 18px 24px;

    > span {
      margin-left: 8px;
      font-size: 14px;
      font-weight: 600;
      color: #181818;
    }
  }
  .secondrow {
    display: flex;
    justify-content: space-between;
    height: 45px;

    h3 {
      margin-top: 6px;
      margin-left: 24px;
      font-size: 12px;
      color: rgba(24, 24, 24, 0.2);
    }
  }

  .send {
    display: flex;
    background: #0077b5;
    height: 26px;
    width: 26px;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    box-shadow: 0 5px 2px -1px gray;
  }

  .attachment {
    display: none;

    @media (min-width: 1180px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 100%;
      padding: 0 24px;

      button {
        display: flex;
        padding: 8px;
        height: 60%;
        align-items: center;
        background: none;
        border: none;
        border-radius: 4px;
        color: var(--color-gray);
        font-weight: 600;
        outline: none;

        cursor: pointer;
        &:hover,
        &:focus {
          background: rgba(0, 0, 0, 0.05);
        }

        /* &.send {
          background: #0077b5;
          height: 32px;
          width: 32px;
          border-radius: 4px;
        } */
      }
    }
  }
`;

export const Separator = styled.div`
  width: 60%;
  margin-left: 20%;
  height: 1px;
  border-top: 1px solid var(--color-separator);
`;

export const WriteIcon = styled(BsPencilSquare)`
  width: 14px;
  height: 14px;
`;

const iconCSS = css`
  width: 20px;
  height: 20px;
  margin-right: 2px;
`;

export const CameraIcon = styled(FiImage)`
  ${iconCSS}
  color: #c7c7c7;
`;

export const VideoCameraIcon = styled(FiFilm)`
  ${iconCSS}
  color: #c7c7c7;
`;

export const DocumentIcon = styled(FiPaperclip)`
  ${iconCSS}
  color: #c7c7c7;
`;

export const SendIcon = styled(FiSend)`
  ${iconCSS}
  color: #FFF;
  width: 16px;
`;
