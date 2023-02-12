import UnitSwitch from '../components/UnitSwitch';

export default {
  title: 'Button',
  component: UnitSwitch
};

export const Default = () => (
  <UnitSwitch
    leftOption="Left Option"
    rightOption="Right Option"
    onChange={(isChecked: boolean) =>
      console.log(`Switch is ${isChecked ? 'checked' : 'unchecked'}`)
    }
  />
);
