import React from 'react';

import styled from 'styled-components';

interface DropdownProps {
  options: Array<string>;
  onChange: (selected: string) => void;
}

const DropdownSelect = styled.select`
  width: 140px;
  height: 42px;
`;

const Dropdown: React.FC<DropdownProps> = ({ options, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => onChange(e.target.value);

  return (
    <DropdownSelect onChange={handleChange}>
      {options.map((option, key) => (
        <option key={key} value={option}>
          {option}
        </option>
      ))}
    </DropdownSelect>
  );
};

export default Dropdown;
