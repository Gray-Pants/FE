import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { apiClient } from "../../api/ApiClient";

const CommentContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 15px;
  border-bottom: 1px solid #f0f0f0;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
`;

const CommentContent = styled.div`
  width:100%
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
  box-sizing: border-box;

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

const Rating = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Stars = styled.span`
  color: gold;
  margin-left: 5px;
`;

const CommentBox = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;

`;

function ReviewList({ itemId, product }) {
  // product prop 추가
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await apiClient.get(`reviews/item/${itemId}`);
        setComments(response.data.response);
        console.log(response.data.response)
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
    <>
      {comments?.map((comment) => (
        <Comment
          key={comment?.reviewId}
          nickname={comment?.username}
          text={comment?.reviewContent}
          score={comment?.reviewScore}
        />
      ))}
    </>
  );
}

function Comment({ nickname, text, score }) {
  // ... (좋아요 기능 관련 코드)

  // const [liked, setLiked] = useState(false);
  // const [likeCount, setLikeCount] = useState(likes);

  // const handleLikeClick = () => {
  //   setLiked(!liked);
  //   setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  // };

  return (
      <CommentContent>
        <CommentBox>
        <Nickname>{nickname}</Nickname>
        <CommentText>{text}</CommentText>
        </CommentBox>
        <CommentBox>
            <Rating>
                      <Stars>      {Array.from({ length: 5 }, (_, index) => (
        <span key={index}>{index < score ? '★' : '☆'}</span>
      ))}</Stars> {/* 평점에 따라 별 개수를 조정하세요 */}
            </Rating>
        </CommentBox>
      </CommentContent>
  );
}

export default ReviewList;
