import React, { useRef } from "react";
import { useToggleState } from "react-stately";
import { useCheckbox } from "react-aria";
import type { AriaCheckboxProps } from "react-aria";
import { useFocusRing } from "@react-aria/focus";
import classNames from "clsx";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { mergeProps } from "@react-aria/utils";

export const Checkbox = (
    props: AriaCheckboxProps & React.HTMLAttributes<HTMLLabelElement>
) => {
    const { children, className } = props;
    const ref = useRef<HTMLInputElement>(null);
    const state = useToggleState(props);
    const { inputProps } = useCheckbox(props, state, ref);
    const { focusProps, isFocusVisible } = useFocusRing();

    const checkboxClassName = classNames(
        state.isSelected
            ? "bg-primary-teal group-active:bg-primary-purple"
            : "bg-white",
        "text-white",
        "border-2",
        "rounded",
        props.isDisabled
            ? "border-gray-300"
            : isFocusVisible || state.isSelected
            ? "border-indigo-500 group-active:border-primary-purple"
            : "border-gray-500 group-active:border-gray-600",
        "w-5",
        "h-5",
        "flex",
        "flex-shrink-0",
        "justify-center",
        "items-center",
        "mr-2",
        isFocusVisible ? "shadow-outline" : "",
        "transition",
        "ease-in-out",
        "duration-150"
    );

    const labelClassName = classNames(
        props.isDisabled
            ? "text-gray-400"
            : "text-white group-active:text-white",
        "select-none"
    );

    return (
        <label className={`group flex items-center ${className}`}>
            <VisuallyHidden>
                <input {...mergeProps(inputProps, focusProps)} ref={ref} />
            </VisuallyHidden>
            <div className={checkboxClassName} aria-hidden="true">
                <svg className="h-3 w-3 stroke-current" viewBox="0 0 18 18">
                    <polyline
                        points="1 9 7 14 15 4"
                        fill="none"
                        strokeWidth={3}
                        strokeDasharray={22}
                        strokeDashoffset={state.isSelected ? 44 : 66}
                        style={{
                            transition: "all 400ms",
                        }}
                    />
                </svg>
            </div>
            <span className={labelClassName}>{children}</span>
        </label>
    );
};
