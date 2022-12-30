import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import { useButton } from "react-aria";
import type { AriaButtonProps } from "react-aria";

interface ToggleSizeButtonProps {
    isExpanded: boolean;
}

export const ToggleSizeButton = (
    props: AriaButtonProps<"button"> & ToggleSizeButtonProps
) => {
    const ref = useRef<HTMLButtonElement>(null);
    const { buttonProps } = useButton(props, ref);

    return (
        <button
            {...buttonProps}
            className="sticky top-0 box-border h-[53px] w-full bg-greys-th"
        >
            {props.isExpanded ? (
                <FontAwesomeIcon icon={faAngleRight} />
            ) : (
                <FontAwesomeIcon icon={faAngleLeft} />
            )}
        </button>
    );
};
