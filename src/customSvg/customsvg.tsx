import React from "react";

interface SvgProps {
  className?: string;  // Accept className as a prop
  width?: string;
  height?: string;
}

export const RightIcon: React.FC<SvgProps> = ({
  className = "",
  width = "100%",
  height = "100%",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 19 45"
    fill="none"
    className={`button__cap ${className}`} 
  >
    <g clipPath="url(#clip0_51_69)">
      <path
        d="M19 18.0272L13.656 12.7143V5.31963L6.22262 5.31611L0.878625 9.49563e-07L-98.0024 0L-104 5.96643V26.9728L-85.8786 45H12.9992L19 39.0336V18.0272Z"
        className="path1"
      ></path>
      <path
        d="M11.7657 0.5L5 12.161H18.5359L11.7657 0.5Z"
        className="path2"
      ></path>
      <path
        d="M16.3306 8.2743C16.3306 8.2743 14.29 10.7758 11.7708 10.7758C9.25155 10.7758 7.21094 8.2743 7.21094 8.2743C7.21094 8.2743 9.25155 5.77234 11.7708 5.77234C14.29 5.77234 16.3306 8.2743 16.3306 8.2743Z"
        className="path3"
      ></path>
      <path
        d="M11.7682 10.0661C12.763 10.0661 13.5696 9.26397 13.5696 8.27429C13.5696 7.28461 12.763 6.48204 11.7682 6.48204C10.7733 6.48204 9.9668 7.28461 9.9668 8.27429C9.9668 9.26397 10.7733 10.0661 11.7682 10.0661Z"
        className="path4"
      ></path>
    </g>
    <defs>
      <clipPath id="clip0_51_69">
        <rect width="19" height="45" fill="white"></rect>
      </clipPath>
    </defs>
  </svg>
);

interface CustomSvgProps {
    className?: string;  
    width?: string | number;
    height?: string | number; 
  }
  
  export const LeftIcon: React.FC<CustomSvgProps> = ({
    className = '',  
    width = '100%', 
    height = '100%', 
  }) => {
  
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 19 45"
        className={`button__cap ${className}`} 
        width={width}  
        height={height}
         fill="none"
      >
        <g clipPath="url(#clip0_51_62)">
          <path
            d="M123 18.0272L117.656 12.7143V5.31963L110.223 5.31611L104.879 9.49563e-07L5.99756 0L3.24535e-05 5.96643V26.9728L18.1214 45H116.999L123 39.0336V18.0272Z"
            className="path1"
          />
        </g>
        <defs>
          <clipPath id="clip0_51_62">
            <rect width="19" height="45" fill="white"></rect>
          </clipPath>
        </defs>
      </svg>
    );
  };