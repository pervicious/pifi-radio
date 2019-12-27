import React from 'react';
import PlayStopControl from './playStopControl';
import './miniPlayer.scss';

const MiniPlayer = ({ playerStatus }) => {
  const { title, playing } = playerStatus;
  return (
    <div className="mini-player p-3">
      <div className="mini-player__left ellipsis">
        <i className="drawer__toggler fas fa-chevron-up fa-lg my-2 mr-3" />
        <span className={playing ? '' : 'text-muted font-italic'}>{title}</span>
      </div>
      <PlayStopControl playing={playing} />
    </div>
  );
};

export default MiniPlayer;
