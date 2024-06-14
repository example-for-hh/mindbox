import { keyframes } from 'styled-components';

export const stroke = keyframes`
    100% {
        stroke-dashoffset: 0;
    }
`;

export const opacity = keyframes`
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0.2;
    }
`;

export const ellipseAnimation = keyframes`
    0% {
        border-radius: 50%;
    }

    12.5% {
        transform: rotate(45deg);
        border-radius: 0 50% 50% 50%;
    }

    25% {
        transform: rotate(90deg);
        border-radius: 0 0 50% 50%;
    }

    37.5% {
        transform: rotate(135deg);
        border-radius: 0 0 0 50%;
    }

    50% {
        transform: rotate(180deg);
        border-radius: 0;
    }

    62.5% {
        transform: rotate(225deg);
        border-radius: 50% 0 0 0;
    }

    75% {
        transform: rotate(270deg);
        border-radius: 50% 50% 0 0;
    }

    87.5% {
        transform: rotate(315deg);
        border-radius: 50% 50% 50% 0;
    }

    100% {
        transform: rotate(360deg);
        border-radius: 50%;
    }
`;