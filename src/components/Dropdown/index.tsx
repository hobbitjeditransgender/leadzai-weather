import React from 'react';
import './index.scss';

interface DropdownProps {
  options: Array<string>;
  onChange: (selected: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => onChange(e.target.value);

  return (
    <div>
      <select className="dropdown" onChange={handleChange}>
        {options.map((option, key) => (
          <option key={key} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
