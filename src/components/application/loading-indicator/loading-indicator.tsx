"use client";

import { cx } from "@/lib/utils/cx";

const styles = {
    sm: {
        root: "gap-4",
        label: "text-sm font-medium",
        spinner: "w-8 h-8",
    },
    md: {
        root: "gap-4",
        label: "text-sm font-medium",
        spinner: "w-12 h-12",
    },
    lg: {
        root: "gap-4",
        label: "text-lg font-medium",
        spinner: "w-14 h-14",
    },
    xl: {
        root: "gap-5",
        label: "text-lg font-medium",
        spinner: "w-16 h-16",
    },
};

interface LoadingIndicatorProps {
    type?: "line-simple" | "line-spinner" | "dot-circle";
    size?: "sm" | "md" | "lg" | "xl";
    label?: string;
    color?: string;
}

export const LoadingIndicator = ({
    type = "line-simple",
    size = "sm",
    label,
    color = "text-fg-brand-primary",
}: LoadingIndicatorProps) => {
    const renderSpinner = () => {
        if (type === "line-spinner") {
            return (
                <svg className={cx("animate-spin", styles[size].spinner)} viewBox="0 0 32 32" fill="none">
                    <circle
                        className={cx(color)}
                        cx="16"
                        cy="16"
                        r="14"
                        fill="none"
                        strokeWidth="4"
                        strokeDashoffset="40"
                        strokeDasharray="100"
                        strokeLinecap="round"
                    />
                </svg>
            );
        }

        if (type === "dot-circle") {
            return (
                <svg className={cx("animate-spin", styles[size].spinner)} viewBox="0 0 36 36" fill="none">
                    <path
                        d="M34 18C34 15.8989 33.5861 13.8183 32.7821 11.8771C31.978 9.93586 30.7994 8.17203 29.3137 6.68629C27.828 5.20055 26.0641 4.022 24.1229 3.21793C22.1817 2.41385 20.1011 2 18 2C15.8988 2 13.8183 2.41385 11.8771 3.21793C9.93585 4.022 8.17203 5.20055 6.68629 6.68629C5.20055 8.17203 4.022 9.93586 3.21793 11.8771C2.41385 13.8183 2 15.8989 2 18"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeDasharray="0.1 8"
                        className={cx(color)}
                    />
                    <path
                        d="M3.21793 24.1229C4.022 26.0641 5.20055 27.828 6.68629 29.3137C8.17203 30.7994 9.93585 31.978 11.8771 32.7821C13.8183 33.5861 15.8988 34 18 34C20.1011 34 22.1817 33.5861 24.1229 32.7821C26.0641 31.978 27.828 30.7994 29.3137 29.3137C30.7994 27.828 31.978 26.0641 32.7821 24.1229"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeDasharray="0.1 8"
                        className={cx(color)}
                    />
                </svg>
            );
        }

        // Default: line-simple
        return (
            <svg className={cx("animate-spin", styles[size].spinner)} viewBox="0 0 32 32" fill="none">
                <circle className="text-bg-tertiary" cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="4" />
                <circle
                    className={cx(color)}
                    cx="16"
                    cy="16"
                    r="14"
                    fill="none"
                    strokeWidth="4"
                    strokeDashoffset="75"
                    strokeDasharray="100"
                    strokeLinecap="round"
                />
            </svg>
        );
    };

    return (
        <div className={cx("flex flex-col items-center justify-center", styles[size].root)}>
            {renderSpinner()}
            {label && <span className={cx("text-secondary", styles[size].label)}>{label}</span>}
        </div>
    );
};