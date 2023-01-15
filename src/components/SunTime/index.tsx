import React from 'react';

interface Props {
  time: string;
  isSunrise?: boolean;
}

const SunTime: React.FC<Props> = ({ time, isSunrise = true }) => {
  return (
    <div>
      <span>
        {isSunrise ? 'Sunrise' : 'Sunset'}: {time}
      </span>
    </div>
  );
};

export default SunTime;
