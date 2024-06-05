/** @format */

import styled from "styled-components";

export const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 16px;
`;

export const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0px 16px;
  font-size: 24px;
  color: ${({ theme }) => theme.text_primary}; // 
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;
