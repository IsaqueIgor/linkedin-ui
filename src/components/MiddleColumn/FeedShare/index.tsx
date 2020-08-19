import React from 'react';

import Panel from '../../Panel';

import {
  Container,
  WriteIcon,
  CameraIcon,
  VideoCameraIcon,
  DocumentIcon,
  Separator,
  SendIcon,
} from './styles';

const FeedShare: React.FC = () => {
  return (
    <Panel>
      <Container>
        <div className='write'>
          <WriteIcon />
          <span>New Post</span>
        </div>
        <Separator />
        <div className='secondrow'>
          {/* <div> */}
          <h3>What's in your mind?</h3>
          {/* </div> */}
          <div className='attachment'>
            <button>
              <CameraIcon />
            </button>
            <button>
              <VideoCameraIcon />
            </button>
            <button>
              <DocumentIcon />
            </button>
            <button>
              <i className='send'>
                <SendIcon />
              </i>
            </button>
          </div>
        </div>
      </Container>
    </Panel>
  );
};

export default FeedShare;
