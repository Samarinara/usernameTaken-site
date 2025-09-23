import { Sun, Moon, Type, Pilcrow } from 'lucide-react';
import { useSettings } from './SettingsContext';
import ToggleButton from './ToggleButton';

const SettingsToggles = () => {
  const { theme, font, toggleTheme, toggleFont } = useSettings();

  return (
    <>
      <ToggleButton
        isToggled={theme === 'dark'}
        onToggle={toggleTheme} 
        label="Toggle dark mode"
        IconOn={Moon}
        IconOff={Sun}
      />
      <ToggleButton
        isToggled={font === 'dyslexic'}
        onToggle={toggleFont}
        label="Toggle dyslexia-friendly font"
        IconOn={Pilcrow}
        IconOff={Type}
      />
    </>
  );
};

export default SettingsToggles;