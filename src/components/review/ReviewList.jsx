import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { apiClient } from "../../api/ApiClient";

const CommentContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 15px;
  border-bottom: 1px solid #f0f0f0;
`;

const CommentContent = styled.div`
  flex: 1;
`;

const Nickname = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

const CommentText = styled.div`
  font-size: 14px;
  line-height: 1.4;
`;

const LikeButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
`;

function ReviewList({ itemId, product }) {
  // product prop 추가
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await apiClient.get(`items/item/${itemId}/reviews`);
        setComments(response.data.response);
      } catch (error) {
        console.error("댓글을 불러오는 중 오류 발생:", error);
        setError(error); // 에러 상태 업데이트
      }
    };

    fetchComments();
  }, [itemId]);

  if (error) {
    return <div>Error: {error.message}</div>; // 에러 메시지 표시
  }

  if (!comments || comments.length === 0) {
    // 리뷰 데이터가 없을 때
    return <div>등록된 리뷰가 없습니다.</div>;
  }

  return (
    <div>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          nickname={comment.nickname}
          text={comment.content}
          likes={comment.likes}
          profileImage={comment.user.profileImage}
        />
      ))}
    </div>
  );
}

function Comment({ nickname, text, likes, profileImage }) {
  // ... (좋아요 기능 관련 코드)

  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLikeClick = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <CommentContainer>
      <ProfileImage src={profileImage} alt={`${nickname} 프로필 이미지`} />
      <CommentContent>
        <Nickname>{nickname}</Nickname>
        <CommentText>{text}</CommentText>
      </CommentContent>
      <LikeButton onClick={handleLikeClick}>
        {liked ? (
          <AiFillHeart style={{ color: "red", marginRight: "5px" }} />
        ) : (
          <AiOutlineHeart style={{ color: "#ccc", marginRight: "5px" }} />
        )}
        {likeCount}
      </LikeButton>
    </CommentContainer>
  );
}

export default ReviewList;
