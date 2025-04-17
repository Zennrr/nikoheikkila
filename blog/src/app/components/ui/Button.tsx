import { ReactNode } from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "outline";
type ButtonSize = "sm" | "md" | "lg";

type BaseButtonProps = {
    variant?: ButtonVariant;
    size?: ButtonSize;
    children: ReactNode;
    className?: string;
};

type ButtonLinkProps = BaseButtonProps & {
    href: string;
    onClick?: never;
};

type ButtonProps = BaseButtonProps & {
    href?: never;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
};

const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-blue-300 text-white hover:bg-blue-400",
    outline: "border border-blue-300 text-blue-300 hover:bg-blue-400 hover:text-white"
};

const sizeStyles = {
    sm: "text-xs px-2 py-1",
    md: "text-sm px-3 py-2",
    lg: "text-base px-4 py-2"
};

export function Button({
    variant = "primary",
    size = "md",
    children,
    className = "",
    onClick,
    type = "button",
    ...props
}: ButtonProps) {
    return (
        <button
            className={`rounded-md transition-colors ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
            onClick={onClick}
            type={type}
            {...props}
        >
            {children}
        </button>
    );
}

export function ButtonLink({
    variant = "primary",
    size = "md",
    children,
    className = "",
    href,
    ...props
}: ButtonLinkProps) {
    return (
        <Link
            href={href}
            className={`inline-flex items-center rounded-md no-underline transition-colors ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
            {...props}
        >
            {children}
        </Link>
    );
}
