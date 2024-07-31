"use client";

import React from "react";
import { styled } from "../../../stitches.config";
import ScrambleText from "../ScrambleText/ScrambleText";
import { LeftIcon, RightIcon } from "@/customSvg/customsvg";
import { IconType } from "react-icons";

export interface ButtonProps {
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
  Icon?: IconType;
}

const ButtonStyled = styled("a", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px 20px",
  cursor: "pointer",
  border: "solid 3px",
  borderRight: "none",
  borderLeft: "none",
  outline: "none",
  height: "67px",
  variants: {
    variant: {
      primary: {
        backgroundColor: "$primary",
        color: "black",
      },
      secondary: {
        backgroundColor: "$secondary",
        borderColor: "$primary",
        color: "white",
      },
    },
    size: {
      small: {
        fontSize: "12px",
        padding: "8px 16px",
      },
      medium: {
        fontSize: "14px",
        padding: "10px 20px",
      },
      large: {
        fontSize: "16px",
        padding: "12px 24px",
      },
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});

const ButtonStyle = styled("div", {
  display: "flex",
  cursor: "pointer",
  alignItems: "center",
  transition: "fill 0.3s ease, stroke 0.3s ease",
  "&:hover": {
    "& > .flip-horizontal": {
      "& .path3, & .path4": {
        // transform:'scaleX(0.9) scaleY(0.2) ',
      },
    },
    [`& > svg`]: {
      fill: "black",
      stroke: "$primary",
      transition: "fill 0.3s ease, stroke 0.3s ease",
    },
    [`& > a`]: {
      background: "black",
      color: "$primary",
      transition:
        "background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease",
    },
  },
});

const IconStyled = styled("svg", {
  fill: "$primary",
  stroke: "black",
  variants: {
    position: {
      left: {
        transform: "translateX(21px)",
      },
      right: {
        transform: "translateX(-21px)",
      },
    },
    variant: {
      primary: {},
      secondary: {
        fill: "$secondary",
        stroke: "$primary",
        transition: "ease, stroke 0.5s ease",
      },
    },
  },
});

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  label,
  onClick,
  Icon,
}) => {
  return (
    <ButtonStyle role="button" onClick={onClick}>
      <IconStyled
        as={LeftIcon}
        height="67px"
        width="68px"
        position="left"
        variant={variant}
      />
      <ButtonStyled variant={variant} size={size}>
        {Icon ? <Icon size={45} /> : <ScrambleText>{label}</ScrambleText>}
      </ButtonStyled>
      <IconStyled
        as={RightIcon}
        height="67px"
        width="68px"
        position="right"
        variant={variant}
      />
    </ButtonStyle>
  );
};

export default Button;
