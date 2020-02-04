import React, { useState } from 'react';
import CommentsIcon from 'resources/svg/CommentsIcon';
import { StyledCommentsWrapper } from './styles';

const Comments = () => {
  const [editingComment, setEditingComment] = useState(false);

  const handleAddComment = () => {
    setEditingComment(true);
  };

  return (
    <StyledCommentsWrapper>
      <div className="comments-list flex-row">
        <div className="comment-author">
          <div className="user-avatar">
            <img
              src="https://www.gravatar.com/avatar/d08fcf59fd25c84ff92105e3d0747a7e?s=328&d=identicon&r=PG"
              alt="user"
            />
          </div>
          <div className="user-text">Jafar Rezaei</div>
        </div>
        <div className="user-comment">
          <div className="arrow">
            <div className="inner" />
          </div>
          <div className="comment-body">
            <p>نظر من در مورد این صفحه این است .</p>
          </div>
        </div>
      </div>

      <div
        className="add-comment"
        contentEditable={editingComment}
        onClick={handleAddComment}
      >
        <CommentsIcon />
        نظر شما در مورد این کسب و کار ...
      </div>
    </StyledCommentsWrapper>
  );
};

export default Comments;
