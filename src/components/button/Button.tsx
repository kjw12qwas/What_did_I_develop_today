import React from "react";
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "danger";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

// 기본 버튼 스타일
const BaseButton = styled.button<{
  $variant: ButtonVariant;
  $size: ButtonSize;
  $fullWidth: boolean;
  $disabled: boolean;
  $loading: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing[2]};
  border: none;
  border-radius: ${theme.borderRadius.md};
  font-weight: ${theme.fontWeight.medium};
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
  transition: all 0.2s ease;
  width: ${(props) => (props.$fullWidth ? "100%" : "auto")};
  position: relative;
  user-select: none;

  /* Size styles */
  ${(props) => {
    switch (props.$size) {
      case "sm":
        return `
          padding: ${theme.spacing[2]} ${theme.spacing[4]};
          font-size: ${theme.fontSize.sm};
          min-height: 32px;
        `;
      case "lg":
        return `
          padding: ${theme.spacing[4]} ${theme.spacing[8]};
          font-size: ${theme.fontSize.lg};
          min-height: 48px;
        `;
      default:
        return `
          padding: ${theme.spacing[3]} ${theme.spacing[6]};
          font-size: ${theme.fontSize.base};
          min-height: 40px;
        `;
    }
  }}

  /* Focus state */
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${theme.colors.blue[100]};
  }

  /* Disabled state */
  ${(props) =>
    props.$disabled &&
    `
    opacity: 0.5;
    background-color: ${theme.colors.gray[300]} !important;
    color: ${theme.colors.gray[500]} !important;
  `}

  /* Loading state */
  ${(props) =>
    props.$loading &&
    `
    color: transparent;
    pointer-events: none;
  `}
`;

// Primary 버튼
const PrimaryButton = styled(BaseButton)`
  background-color: ${theme.colors.blue[600]};
  color: white;

  &:hover:not(:disabled) {
    background-color: ${theme.colors.blue[700]};
  }

  &:active:not(:disabled) {
    background-color: ${theme.colors.blue[800]};
  }
`;

// Secondary 버튼
const SecondaryButton = styled(BaseButton)`
  background-color: ${theme.colors.gray[100]};
  color: ${theme.colors.gray[700]};

  &:hover:not(:disabled) {
    background-color: ${theme.colors.gray[200]};
  }

  &:active:not(:disabled) {
    background-color: ${theme.colors.gray[300]};
  }
`;

// Outline 버튼
const OutlineButton = styled(BaseButton)`
  background-color: transparent;
  color: ${theme.colors.blue[600]};
  border: 2px solid ${theme.colors.blue[600]};

  &:hover:not(:disabled) {
    background-color: ${theme.colors.blue[50]};
  }

  &:active:not(:disabled) {
    background-color: ${theme.colors.blue[100]};
  }
`;

// Ghost 버튼
const GhostButton = styled(BaseButton)`
  background-color: transparent;
  color: ${theme.colors.gray[600]};

  &:hover:not(:disabled) {
    background-color: ${theme.colors.gray[100]};
    color: ${theme.colors.gray[700]};
  }

  &:active:not(:disabled) {
    background-color: ${theme.colors.gray[200]};
  }
`;

// Danger 버튼
const DangerButton = styled(BaseButton)`
  background-color: ${theme.colors.red[600]};
  color: white;

  &:hover:not(:disabled) {
    background-color: ${theme.colors.red[700]};
  }

  &:active:not(:disabled) {
    background-color: ${theme.colors.red[800]};
  }
`;

// 로딩 스피너
const LoadingSpinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`;

// 버튼 컴포넌트 선택 함수
const getButtonComponent = (variant: ButtonVariant) => {
  switch (variant) {
    case "primary":
      return PrimaryButton;
    case "secondary":
      return SecondaryButton;
    case "outline":
      return OutlineButton;
    case "ghost":
      return GhostButton;
    case "danger":
      return DangerButton;
    default:
      return PrimaryButton;
  }
};

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  disabled = false,
  fullWidth = false,
  loading = false,
  className,
  style,
}) => {
  const ButtonComponent = getButtonComponent(variant);

  return (
    <ButtonComponent
      type={type}
      onClick={onClick}
      $variant={variant}
      $size={size}
      $disabled={disabled || loading}
      $fullWidth={fullWidth}
      $loading={loading}
      className={className}
      style={style}
    >
      {children}
      {loading && <LoadingSpinner />}
    </ButtonComponent>
  );
};
