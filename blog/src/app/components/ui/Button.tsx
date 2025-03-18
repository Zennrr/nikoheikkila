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
    secondary:
        "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600",
    outline: "border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
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
            className={`inline-flex items-center rounded-md transition-colors ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
            {...props}
        >
            {children}
        </Link>
    );
}
