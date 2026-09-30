import React, { useState } from 'react';
import { useRage } from '../../context/RageContext';
import { sound } from '../../services/audioEngine';

export type EvasionBehavior = 
  | 'left_right'   // YES moves slightly left/right
  | 'vertical'     // NO moves vertically
  | 'diagonal'     // CONTINUE moves diagonally
  | 'shift'        // NEXT shifts position
  | 'away'         // moves away from cursor
  | 'disappear'    // briefly vanishes and returns
  | 'second_hover' // moves only after second hover
  | 'final_trap';  // cycles labels, escalates, then yields

interface MovingButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  maxJumps?: number;
  baseDistance?: number;
  behavior?: EvasionBehavior;
  style?: React.CSSProperties;
  labels?: string[];
  disabled?: boolean;
}

export const MovingButton: React.FC<MovingButtonProps> = ({
  children,
  onClick,
  className = '',
  maxJumps = 4,
  baseDistance = 25,
  behavior = 'away',
  style,
  labels,
  disabled = false,
}) => {
  const { incrementRage, addToast } = useRage();
  const [jumpCount, setJumpCount] = useState(0);
  const [hoverCount, setHoverCount] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isCatchable, setIsCatchable] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [labelIndex, setLabelIndex] = useState(0);

  const handleMouseEnter = () => {
    if (disabled || isCatchable) return;

    const newHoverCount = hoverCount + 1;
    setHoverCount(newHoverCount);

    // If second_hover behavior, do not move on the very first hover
    if (behavior === 'second_hover' && newHoverCount === 1) {
      return;
    }

    if (jumpCount < maxJumps) {
      sound.playEvasionWhoosh();
      const nextJump = jumpCount + 1;
      setJumpCount(nextJump);
      incrementRage(1, 'evasion');

      // Escalate distance slightly with attempts, but keep controlled (not random teleportation)
      const escalationFactor = 1 + (nextJump * 0.25);
      const dist = baseDistance * escalationFactor;

      let newX = 0;
      let newY = 0;

      switch (behavior) {
        case 'left_right':
          // Moves left or right 15-25px
          newX = (nextJump % 2 === 1 ? 1 : -1) * (dist * 0.8);
          newY = 0;
          break;

        case 'vertical':
          // NO moves vertically
          newX = 0;
          newY = (nextJump % 2 === 1 ? -1 : 1) * dist;
          break;

        case 'diagonal':
          // CONTINUE moves diagonally
          newX = (nextJump % 2 === 1 ? 1 : -1) * (dist * 0.7);
          newY = (nextJump % 2 === 1 ? -1 : 1) * (dist * 0.7);
          break;

        case 'shift':
          // NEXT shifts position slightly
          newX = ((nextJump * 13) % 2 === 0 ? 1 : -1) * dist;
          newY = ((nextJump * 7) % 2 === 0 ? 1 : -1) * (dist * 0.4);
          break;

        case 'disappear':
          // Briefly disappears and reappears slightly offset
          setIsVisible(false);
          setTimeout(() => {
            newX = (Math.random() > 0.5 ? 1 : -1) * (dist * 0.6);
            setPosition({ x: newX, y: 0 });
            setIsVisible(true);
          }, 220);
          break;

        case 'final_trap':
          // The Final Submit Trap: cycles labels & moves away
          if (labels && labels.length > 0) {
            setLabelIndex((prev) => (prev + 1) % labels.length);
          }
          const angle = Math.random() * Math.PI * 2;
          newX = Math.cos(angle) * (dist * 1.1);
          newY = Math.sin(angle) * (dist * 0.8);
          break;

        case 'away':
        default:
          const defaultAngle = Math.random() * Math.PI * 2;
          newX = Math.cos(defaultAngle) * dist;
          newY = Math.sin(defaultAngle) * (dist * 0.7);
          break;
      }

      if (behavior !== 'disappear') {
        setPosition({ x: newX, y: newY });
      }

      // Cold, deadpan messages at specific thresholds
      if (nextJump === 2) {
        addToast({ title: 'LOG', message: 'Not there.', type: 'info' });
      } else if (nextJump === 4) {
        addToast({ title: 'LOG', message: 'Attempt recorded.', type: 'warning' });
      } else if (nextJump === 6) {
        addToast({ title: 'LOG', message: 'You have attempted this action repeatedly.', type: 'judgment' });
      }

      // When reaching maxJumps, let it remain still so user can click it
      if (nextJump >= maxJumps) {
        setIsCatchable(true);
        setTimeout(() => {
          setPosition({ x: 0, y: 0 });
          addToast({ title: 'STATUS', message: 'Proceed.', type: 'info' });
        }, 300);
      }
    }
  };

  const currentLabel = labels && labels.length > 0 ? labels[labelIndex] : children;

  return (
    <button
      disabled={disabled}
      onMouseEnter={handleMouseEnter}
      onClick={() => {
        sound.playClick(1.1);
        onClick?.();
      }}
      className={className}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: 'transform 0.16s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.15s ease',
        opacity: isVisible ? 1 : 0,
        ...style,
      }}
    >
      {currentLabel}
    </button>
  );
};
