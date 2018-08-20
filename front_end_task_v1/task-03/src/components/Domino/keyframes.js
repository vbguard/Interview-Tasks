import { keyframes } from 'styled-components';

export const RotateRight = keyframes`
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  `;

export const RotateLeft = keyframes`
    from {
      transform: rotate(360deg);
    }

    to {
      transform: rotate(0deg);
    }
  `;
