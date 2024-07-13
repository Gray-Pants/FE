import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useLocation } from "react-router-dom";
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

function Comment({ itemId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await apiClient.get("items/item/" + itemId);
        // 백엔드에서 받아오는 데이터 구조에 맞게 comments 데이터 추출
        const commentsData = response.data.comments;
        setComments(commentsData);
        console.log(commentsData);
      } catch (error) {
        console.error("댓글을 불러오는 중 오류 발생:", error);
      }
    };

    fetchComments();
  }, [itemId]); // itemId가 변경될 때마다 댓글 다시 불러오기

  return (
    <CommentContainer>
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

export default Comment;
