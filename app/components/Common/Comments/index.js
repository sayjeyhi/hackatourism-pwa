import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CommentsIcon from 'resources/svg/CommentsIcon';
import { StyledCommentsWrapper } from './styles';

const Comments = ({ className }) => {
  const [editingComment, setEditingComment] = useState(false);
  const [commentContent, setCommentContent] = useState('');

  const handleAddComment = () => {
    setEditingComment(true);
  };
  const handleChangeCommentContent = e => {
    setCommentContent(e.target.value);
  };

  const handleCloseEditingMode = () => {
    setEditingComment(false);
  };

  return (
    <StyledCommentsWrapper
      className={`align-center justify-center flex-column ${className}`}
    >
      <CommentsIcon className="comments-icon" />

      <input
        className="add-comment no-effect-button"
        contentEditable={editingComment}
        onFocus={handleAddComment}
        onChange={handleChangeCommentContent}
        onBlur={handleCloseEditingMode}
        placeholder="نظر شما در مورد این کسب و کار ..."
        value={commentContent}
      />
      {editingComment && commentContent.length > 0 ? (
        <button
          type="button"
          className="add-comment-button mb-3 br-5 no-effect-button"
        >
          ثبت نظر
        </button>
      ) : null}

      <div className="mt-4 comments-list flex-row">
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
    </StyledCommentsWrapper>
  );
};

Comments.propTypes = {
  className: PropTypes.string,
};

export default Comments;
