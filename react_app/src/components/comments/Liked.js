import React, {useContext} from 'react'
import MetubeContext from '../../context/MetubeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react'

const Liked = ({getTimeAgo}) => {
  const {commentsLiked} = useContext(MetubeContext)
  return(
    
      commentsLiked.map(comment => (
        <div class="comment">
          <img class="comment-avatar" src={comment.avatar}/>
          <div class="comment-body">
            <div class="comment-header">
              <span class="comment-author">{comment.username}</span>
              <span class="comment-time">{getTimeAgo(comment.date_published)}</span>
            </div>
            <div class="comment-text">{comment.comment}</div>
            <div class="comment-actions">
              <Tippy content="Like" arrow={false} placement="bottom">
                <button class="comment-like">
                  <FontAwesomeIcon icon={faThumbsUp} size="1x" />
                </button>
              </Tippy>
                <p className='likeCount'>{comment.likes}</p>
                <Tippy content="Dislike" arrow={false} placement="bottom">
                  <button class="comment-dislike">
                    <FontAwesomeIcon icon={faThumbsDown} size="1x" />
                  </button>
                </Tippy>
              <button class="comment-reply">Reply</button>
            </div>
          </div>
        </div>
      ))
    
  )
}

export default Liked