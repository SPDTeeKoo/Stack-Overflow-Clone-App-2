import React from 'react';
import './RightSidebar.css';
import comment from '../../assets/comment-alt-solid.svg';
import pen from '../../assets/pen-solid.svg';
import blackLogo from '../../assets/blackLogo.png';

const Widget = () => {
  return (
    <div className="widget">
      <h4>The Overflow Blog</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={pen} alt="pen" width="18" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
            deserunt magni incidunt at voluptatum error maiores deleniti magnam
            omnis!
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={pen} alt="pen" width="18" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
            deserunt
          </p>
        </div>
      </div>
      <h4>Featured on Meta</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={comment} alt="comment" width="18" />
          <p>
            Review queue workflows dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={comment} alt="comment" width="18" />
          <p>
            Please WelcomeLorem ipsum dolor sit amet, consectetur adipisicing
            elit. Sequi deserunt
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={blackLogo} alt="blacklogo" width="18" />
          <p>
            Outdated Answers: Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Sequi deserunt
          </p>
        </div>
      </div>
      <h4>Hot Meta Posts</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <p>28</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
            deserunt magni incidunt at voluptatum error maiores deleniti magnam
            omnis!
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <p>45</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
            deserunt
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <p>20</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
            deserunt
          </p>
        </div>
      </div>
    </div>
  );
};

export default Widget;
