import React from 'react';
import './ToggleButton.css';

interface ToggleButtonProps {
  isToggled: boolean;
  onToggle: () => void;
  label: string;
  IconOn: React.ElementType;
  IconOff: React.ElementType;
}
function ToggleButton({ isToggled, onToggle, label, IconOn, IconOff }: ToggleButtonProps) {
  return (
    <button
      className={`toggle-button ${isToggled ? 'toggled' : ''}`}
      onClick={onToggle}
      aria-label={label}
      aria-pressed={isToggled}
    >
      <IconOn className="icon icon-on" />
      <IconOff className="icon icon-off" />
    </button>
  );
}

export default ToggleButton;