import React from 'react';
import './ToggleSwitch.css';

interface ToggleSwitchProps {
  isToggled: boolean;
  onToggle: () => void;
  label: string;
  IconOn: React.ElementType;
  IconOff: React.ElementType;
}

function ToggleSwitch({ isToggled, onToggle, label, IconOn, IconOff }: ToggleSwitchProps) {
  return (
    <button className="toggle-switch" onClick={onToggle} aria-label={label} aria-pressed={isToggled}>
      <div className={`toggle-track ${isToggled ? 'toggled' : ''}`}>
        <div className="toggle-thumb">{isToggled ? <IconOn /> : <IconOff />}</div>
      </div>
    </button>
  );
}

export default ToggleSwitch;