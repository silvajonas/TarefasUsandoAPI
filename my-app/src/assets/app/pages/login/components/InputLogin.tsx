import React from "react";

interface IInputLoginProps {
  label: string;
  type?: string
  value: string;

  onChange: (newValue: string) => void;
  onPressEnter?: () => void;
}

export const InputLogin = React.forwardRef<HTMLInputElement, IInputLoginProps>((props, ref) => {
  return (
    <label>
      <span>{props.label}</span>
      <input
        type={props.type}
        value={props.value}
        ref={ref}
        onKeyDown={(e) =>
          e.key === "Enter"
            ? props.onPressEnter && props.onPressEnter()
            : undefined
        }
        onChange={(e) => props.onChange(e.target.value)}
      />
    </label>
  );
});
