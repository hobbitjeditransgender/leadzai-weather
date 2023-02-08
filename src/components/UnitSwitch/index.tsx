import React, { useState } from 'react';

import { Input } from './UnitSwitchComponents/Input';
import { Label } from './UnitSwitchComponents/Label';
import { Switch } from './UnitSwitchComponents/Switch';
import { SwitchWrapper } from './UnitSwitchComponents/SwitchWrapper';

interface Props {
  leftOption: string;
  rightOption: string;
  onChange: (isChecked: boolean) => void;
}

const UnitSwitch: React.FC<Props> = ({ leftOption, rightOption, onChange }) => {
  const [checked, setChecked] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    onChange(e.target.checked);
  };

  return (
    <SwitchWrapper>
      <span>{leftOption}</span>
      <Label>
        <Input checked={checked} type="checkbox" onChange={handleChange} />
        <Switch />
      </Label>
      <span>{rightOption}</span>
    </SwitchWrapper>
  );
};

export default UnitSwitch;
