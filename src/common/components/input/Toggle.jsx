import React, { useEffect, useState } from "react";
import { ToggleIcon } from "../icons";
const _id = `radio_toggle_${Math.ceil(Math.random() * 1000)}`;
export const Toggle = ({
  checked: _checked = false,
  id = null,
  activeText = "",
  inactiveText = "",
  name = "",
  cb,
  ...props
}) => {
  const [checked, setChecked] = useState(false);
  id = id || _id;
  useEffect(() => {
    setChecked(_checked);
  }, [_checked]);
  return (
    <>
      <label className="flex gap-2 items-center cursor-pointer" htmlFor={id}>
        <ToggleIcon checked={checked} />
        {checked ? (
          <span className="mb-1">{activeText}</span>
        ) : (
          <span className="mb-1">{inactiveText}</span>
        )}
      </label>
      <input
        className="sr-only"
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        onChange={(e) => {
          setChecked(e.target.checked);
          cb();
        }}
        {...props}
      />
    </>
  );
};
