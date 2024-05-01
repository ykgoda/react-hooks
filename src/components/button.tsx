import styled from "styled-components";

export const Button = styled.button<{
  paddingVertical?: number;
  widthRatio?: number;
  borderRadius?: number;
  backgroundColor?: string;
  textColor?: string;
  opacity?: number;
}>`
  padding: ${(props) => props.paddingVertical || 8}px 0;
  width: ${(props) => props.widthRatio || 40}%;
  border-radius: ${(props) => props.borderRadius || 8}px;
  background-color: ${(porps) => porps.backgroundColor || "#fff"};
  color: ${(props) => props.textColor || "#333"};
  border: none;
  &:hover {
    opacity: ${(props) => props.opacity || 0.5};
  }
  &:disabled {
    background-color: #bbb;
    opacity: 1;
  }
`;
