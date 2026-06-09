import { useState, useRef } from 'react';
import { CircleNotch } from '@phosphor-icons/react';
import {
  HelixColors,
  HelixSpacing,
  HelixRadius,
  HelixSize,
  HelixMotion,
} from '../../tokens/helixTokens';

// ─── Token maps por variante ──────────────────────────────────────────────────

const BG = {
  primary:     { default: HelixColors.actionPrimaryDefault,     hover: HelixColors.actionPrimaryHover,     pressed: HelixColors.actionPrimaryPressed,     disabled: HelixColors.actionPrimaryDisabled  },
  destructive: { default: HelixColors.actionDestructiveDefault, hover: HelixColors.actionDestructiveHover, pressed: HelixColors.actionDestructivePressed, disabled: HelixColors.actionDestructiveDisabled },
  featured:    { default: HelixColors.actionFeaturedDefault,    hover: HelixColors.actionFeaturedHover,    pressed: HelixColors.actionFeaturedPressed,    disabled: HelixColors.actionSubtleHover      },
  subtle:      { default: HelixColors.actionSubtleDefault,      hover: HelixColors.actionSubtleHover,      pressed: HelixColors.actionSubtlePressed,      disabled: HelixColors.actionSubtleDefault    },
};

const FG = {
  primary:     { default: HelixColors.actionPrimaryOn,     disabled: HelixColors.actionPrimaryOn     },
  destructive: { default: HelixColors.actionDestructiveOn, disabled: HelixColors.actionDestructiveOn },
  featured:    { default: HelixColors.actionFeaturedOn,    disabled: HelixColors.textDisabled        },
  subtle:      { default: HelixColors.actionSubtleOn,      disabled: HelixColors.textDisabled        },
};

// ─── Size maps ────────────────────────────────────────────────────────────────

const HEIGHT    = { sm: HelixSize.controlSm,          md: HelixSize.controlMd,          lg: HelixSize.controlLg          };
const H_PAD     = { sm: HelixSpacing.paddingComponentMd, md: HelixSpacing.paddingComponentLg, lg: HelixSpacing.paddingComponentXl };
const FONT_SIZE = { sm: 14, md: 14, lg: 16 };
const ICON_SIZE = { sm: HelixSize.iconInline,         md: HelixSize.iconControl,        lg: HelixSize.iconControl        };
const GAP       = { sm: HelixSpacing.gapInlineXs,     md: HelixSpacing.gapInlineSm,     lg: HelixSpacing.gapInlineSm     };

// ─── Component ────────────────────────────────────────────────────────────────

/**
 * HelixButton — Helix DS
 * Figma: components-core.fig → button
 *
 * @param {'primary'|'destructive'|'featured'|'subtle'} variant
 * @param {'sm'|'md'|'lg'} size
 * @param {boolean} disabled
 * @param {boolean} loading
 * @param {React.ReactNode} leftIcon   — nodo Phosphor icon
 * @param {React.ReactNode} rightIcon  — nodo Phosphor icon
 * @param {React.ReactNode} children
 * @param {function} onClick
 * @param {'button'|'submit'|'reset'} type
 */
export function HelixButton({
  variant = 'primary',
  size    = 'md',
  disabled  = false,
  loading   = false,
  leftIcon  = null,
  rightIcon = null,
  children,
  onClick,
  type = 'button',
  style,
  'aria-label': ariaLabel,
}) {
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const isInteractive = !disabled && !loading;

  // ── Color resolution ──────────────────────────────────────────────────────
  const bgColors = BG[variant];
  const fgColors = FG[variant];

  let bgColor;
  if (disabled) {
    bgColor = bgColors.disabled;
  } else if (hovered) {
    bgColor = bgColors.hover;
  } else {
    bgColor = bgColors.default;
  }

  const fgColor = disabled ? fgColors.disabled : fgColors.default;

  const isSubtle = variant === 'subtle';
  let borderColor = 'transparent';
  if (isSubtle) {
    borderColor = disabled
      ? HelixColors.borderDefault
      : hovered
        ? HelixColors.actionPrimaryHover
        : HelixColors.actionPrimaryDefault;
  }

  // ── Focus ring ────────────────────────────────────────────────────────────
  const focusOutline = focused && isInteractive
    ? `0 0 0 2px ${HelixColors.borderFocusPrimary}`
    : 'none';

  // ── Icon weight ───────────────────────────────────────────────────────────
  const iconWeight = size === 'sm' ? 'bold' : 'regular';
  const iSize = ICON_SIZE[size];
  const gap   = GAP[size];

  // ── Spinner ───────────────────────────────────────────────────────────────
  const spinner = (
    <span
      style={{
        display: 'inline-flex',
        animation: 'helix-spin 0.8s linear infinite',
        width: iSize,
        height: iSize,
      }}
    >
      <CircleNotch size={iSize} color={fgColor} weight="bold" />
    </span>
  );

  const containerStyle = {
    display:        'inline-flex',
    alignItems:     'center',
    justifyContent: 'center',
    gap:            gap,
    height:         HEIGHT[size],
    paddingLeft:    H_PAD[size],
    paddingRight:   H_PAD[size],
    backgroundColor: bgColor,
    border:         `${HelixColors.borderDefault === borderColor ? 1 : 1}px solid ${borderColor}`,
    borderRadius:   HelixRadius.componentMd,
    boxShadow:      focusOutline,
    transition:     HelixMotion.micro,
    cursor:         isInteractive ? 'pointer' : 'not-allowed',
    userSelect:     'none',
    outline:        'none',
    fontFamily:     'Figtree, sans-serif',
    fontSize:       FONT_SIZE[size],
    fontWeight:     600,
    lineHeight:     1.4286,
    color:          fgColor,
    whiteSpace:     'nowrap',
    ...style,
  };

  const handleClick = (e) => {
    if (!isInteractive) return;
    onClick?.(e);
  };

  return (
    <button
      type={type}
      disabled={disabled || loading}
      aria-label={ariaLabel}
      aria-busy={loading || undefined}
      style={containerStyle}
      onClick={handleClick}
      onMouseEnter={() => { if (isInteractive) setHovered(true); }}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      {loading ? (
        spinner
      ) : (
        <>
          {leftIcon && (
            <span style={{ display: 'inline-flex', flexShrink: 0 }}>
              {typeof leftIcon === 'function'
                ? leftIcon({ size: iSize, color: fgColor, weight: iconWeight })
                : leftIcon}
            </span>
          )}
          <span>{children}</span>
          {rightIcon && (
            <span style={{ display: 'inline-flex', flexShrink: 0 }}>
              {typeof rightIcon === 'function'
                ? rightIcon({ size: iSize, color: fgColor, weight: iconWeight })
                : rightIcon}
            </span>
          )}
        </>
      )}
    </button>
  );
}

export default HelixButton;
