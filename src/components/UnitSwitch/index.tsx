import React from 'react';

import './index.scss';

interface Props {
  leftOption: string;
  rightOption: string;
  onChange: (isChecked: boolean) => void;
}

const UnitSwitch: React.FC<Props> = ({ leftOption, rightOption, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.checked);

  return (
    <div className="switch-wrapper">
      <span>{leftOption}</span>
      <label className="switch">
        <input type="checkbox" defaultValue={'false'} onChange={handleChange} />
        <span className="slider"></span>
      </label>
      <span>{rightOption}</span>
    </div>
  );
};

export default UnitSwitch;
