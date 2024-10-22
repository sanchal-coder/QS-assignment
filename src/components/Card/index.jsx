import React from 'react';
import './card.css'
import UserIcon from '../UserIcon';
import { getStatusIcon } from '../../utils/helper';

const getMoreIconByPriority = (priority) => {
    switch (priority) {
        case 0:
            return '/images/No-priority.svg'; 
        case 1: 
            return '/images/Img - Low Priority.svg'; 
        case 2:
            return '/images/Img - Medium Priority.svg'; 
        case 3: 
            return '/images/Img - High Priority.svg'; 
        case 4: 
            return '/images/SVG - Urgent Priority grey.svg'; 
        default:
            return '/images/default_icon.svg'; 
    }
};

function Card({ ticket, userData, hideStatusIcon, hideProfileIcon }) {
  return (
    <div className='card'>
      <div className='top-container'>
        <div className='ticket-id'>{ticket.id}</div>
        {hideProfileIcon ? null : <UserIcon name={userData.name} available={userData.available} />}
      </div>
      <div className='middle-container'>
        {hideStatusIcon ? null : getStatusIcon(ticket.status)}
        <div className='title'>{ticket.title}</div>
      </div>
      <div className='bottom-container'>
        <div className='more-icon-container'>
          <img src={getMoreIconByPriority(ticket.priority)} alt='More options' />
        </div>
        {ticket.tag.map((t) => (
          <div key={t} className='tag-container'>
            <div className='FeatureRequestIcon'></div>
            <div className='tag-text'>{t}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
