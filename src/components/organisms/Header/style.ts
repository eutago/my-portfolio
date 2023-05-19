import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.pure.white};
  width: 100%;
  height: 4.375em;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  position: relative;

  img {
    position: absolute;
    top: -110px;
    left: 230px;
    width: 292px;
    height: 295px;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .hamburger {
    width: 2.188em;
    height: 0.75em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    z-index: 1;
    cursor: pointer;

    .bar {
      width: 100%;
      height: 2px;
      background-color: ${({ theme }) => theme.colors.pure.white};
    }

    .bar-1 {
      position: absolute;
      left: 3px;
      top: 0;
    }

    .bar-2 {
      background-color: ${({ theme }) => theme.colors.electric};
      position: absolute;
      left: 5px;
      top: 6px;
      width: 70%;
    }

    .bar-3 {
      position: absolute;
      right: 3px;
      top: 100%;
    }
  }
`;

export const StyledLogo = styled.div`
  animation: Water 5s linear;
  display: flex;

  @keyframes Water {
    0% {
      -webkit-clip-path: polygon(
        0 100%,
        13% 100%,
        25% 100%,
        35% 100%,
        48% 100%,
        60% 100%,
        74% 100%,
        90% 100%,
        100% 100%
      );
    }
    10% {
      -webkit-clip-path: polygon(
        0 100%,
        0 90%,
        23% 92%,
        37% 91%,
        48% 90%,
        61% 87%,
        78% 79%,
        100% 83%,
        100% 100%
      );
    }
    20% {
      -webkit-clip-path: polygon(
        0 100%,
        0 74%,
        18% 76%,
        35% 80%,
        46% 81%,
        63% 78%,
        83% 82%,
        100% 86%,
        100% 100%
      );
    }
    30% {
      -webkit-clip-path: polygon(
        0 100%,
        0 66%,
        20% 68%,
        36% 73%,
        49% 75%,
        64% 71%,
        82% 67%,
        100% 65%,
        100% 100%
      );
    }
    40% {
      -webkit-clip-path: polygon(
        0 100%,
        0 64%,
        16% 71%,
        33% 68%,
        46% 58%,
        63% 53%,
        80% 49%,
        100% 46%,
        100% 100%
      );
    }
    50% {
      -webkit-clip-path: polygon(
        0 100%,
        0 48%,
        18% 51%,
        31% 51%,
        46% 54%,
        65% 50%,
        81% 45%,
        100% 35%,
        100% 100%
      );
    }
    60% {
      -webkit-clip-path: polygon(
        0 100%,
        0 27%,
        17% 37%,
        30% 41%,
        45% 39%,
        60% 34%,
        82% 34%,
        100% 35%,
        100% 100%
      );
    }
    75% {
      -webkit-clip-path: polygon(
        0 100%,
        0 27%,
        18% 26%,
        34% 29%,
        48% 28%,
        63% 24%,
        82% 21%,
        100% 19%,
        100% 100%
      );
    }
    80% {
      -webkit-clip-path: polygon(
        0 100%,
        0 9%,
        16% 15%,
        35% 16%,
        49% 15%,
        68% 18%,
        84% 27%,
        100% 19%,
        100% 100%
      );
    }
    90% {
      -webkit-clip-path: polygon(
        0 100%,
        0 9%,
        17% 6%,
        43% 7%,
        55% 8%,
        68% 10%,
        82% 14%,
        100% 7%,
        100% 100%
      );
    }
    100% {
      -webkit-clip-path: polygon(
        0 100%,
        0 3%,
        17% 4%,
        42% 2%,
        57% 5%,
        68% 4%,
        84% 4%,
        100% 4%,
        100% 100%
      );
    }
  }
`;
