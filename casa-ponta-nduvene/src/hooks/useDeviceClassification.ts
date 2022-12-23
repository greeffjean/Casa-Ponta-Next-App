import React from 'react';
import { useWindowSize } from 'react-use';

export const useDeviceClassification = () => {
    const { width, height } = useWindowSize();

    return {
        width: width,
        isMobile: width <= 800,
        isTablet: width <= 1024,
        isDesktop: width > 1024,
        isHD: width >= 1600,
        height: height
    };
}
