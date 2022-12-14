import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2000;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Spinner = styled.div`
  width: 90px;
  height: 90px;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    width: 62px;
  }

  .sk-circle {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;

    &:before {
      content: '';
      display: block;
      margin: 0 auto;
      width: 15%;
      height: 15%;
      background-color: #18c6b2;
      border-radius: 100%;
      animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;
    }
  }

  .sk-circle2 {
    transform: rotate(30deg);

    &:before {
      animation-delay: -1.1s;
    }
  }

  .sk-circle3 {
    transform: rotate(60deg);

    &:before {
      animation-delay: -1s;
    }
  }

  .sk-circle4 {
    transform: rotate(90deg);

    &:before {
      animation-delay: -0.9s;
    }
  }

  .sk-circle5 {
    transform: rotate(120deg);

    &:before {
      animation-delay: -0.8s;
    }
  }

  .sk-circle6 {
    transform: rotate(150deg);

    &:before {
      animation-delay: -0.7s;
    }
  }

  .sk-circle7 {
    transform: rotate(180deg);

    &:before {
      animation-delay: -0.6s;
    }
  }

  .sk-circle8 {
    transform: rotate(210deg);

    &:before {
      animation-delay: -0.5s;
    }
  }
  .sk-circle9 {
    transform: rotate(240deg);

    &:before {
      animation-delay: -0.4s;
    }
  }

  .sk-circle10 {
    transform: rotate(270deg);

    &:before {
      animation-delay: -0.3s;
    }
  }

  .sk-circle11 {
    transform: rotate(300deg);

    &:before {
      animation-delay: -0.2s;
    }
  }

  .sk-circle12 {
    transform: rotate(330deg);

    &:before {
      animation-delay: -0.1s;
    }
  }

  @keyframes sk-circleFadeDelay {
    0%,
    39%,
    100% {
      opacity: 0;
    }
    40% {
      opacity: 1;
    }
  }
`;
