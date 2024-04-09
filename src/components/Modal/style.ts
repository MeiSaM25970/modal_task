"use client";
import styled from "styled-components";

export const ModalContainer = styled.div<{ $width: number | undefined }>`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: #003fff95;
  width: 100vw;
  height: 100vh;
  transition: 0.5s;
  .modal-wrapper {
    display: block;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }
  .content {
    width: ${(props) => props.$width?.toString().concat("px") || "auto"};
    background-color: #fff;
    position: absolute;
    z-index: 100;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    padding: 12px;
    border-radius: 8px;
  }

  @keyframes top {
    from {
      top: -100px;
    }
    to {
      top: 50%;
    }
  }
  @keyframes left {
    from {
      left: -100px;
    }
    to {
      left: 50%;
    }
  }
  @keyframes right {
    from {
      left: calc(100vw + 100px);
    }
    to {
      left: 50%;
    }
  }
  @keyframes bottom {
    from {
      top: calc(100vh + 100px);
    }
    to {
      top: 50%;
    }
  }

  .left {
    animation: left 0.5s ease-out;
  }
  .right {
    animation: right 0.5s ease-out;
  }
  .bottom {
    animation: bottom 0.5s ease-out;
  }
  .top {
    animation: top 0.5s ease-out;
  }
`;
