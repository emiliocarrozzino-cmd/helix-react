import { useState } from 'react';
import { CircleNotch } from '@phosphor-icons/react';
import {
  HelixColors,
  HelixSpacing,
  HelixRadius,
  HelixSize,
  HelixMotion,
} from '../../tokens/helixTokens';

// ── Gradient border helper ────────────────────────────────────────────────────
// Requires border: Npx solid transparent + backgroundClip trick
const gradientBorderStyle = (solidBg, borderGradient, borderWidth = 2) => ({
  backgroundImage:  `linear-gradient(${solidBg}, ${solidBg}), ${borderGradient}`,
  backgroundOrigin: 'border-box',
  backgroundClip:   'padding-box, border-box',
  backgroundColor:  'transparent',
  border:           `${borderWidth}px solid transparent`,
});

// ── Token maps por variante ───────────────────────────────────────────────────

const VARIANTS = {
  primary: {
    default:  HelixColors.actionPrimaryDefault,
    hover:    HelixColors.actionPrimaryHover,
    pressed:  HelixColors.actionPrimaryPressed,
    disabled: HelixColors.actionPrimaryDisabled,
    on:       HelixColors.actionPrimaryOn,
    border:   HelixColors.actionPrimaryBorderGradient,
  },
  destructive: {
    default:  HelixColors.actionDestructiveDefault,
    hover:    HelixColors.actionDestructiveHover,
    pressed:  HelixColors.actionDestructivePressed,
    disabled: HelixColors.actionDestructiveDisabled,
    on:       HelixColors.actionDestructiveOn,
    border:   HelixColors.actionDestructiveBorderGradient,
  },
  secondary: {
    default:  HelixColors.actionSecondaryDefault,
    hover:    HelixColors.actionSecondaryHover,
    pressed:  HelixColors.actionSecondaryPressed,
    disabled: HelixColors.actionSecondaryDisabled,
    on:       HelixColors.actionSecondaryOn,
    border:   HelixColors.actionSecondaryBorderGradient,
  },
  subtle: {
    default:  HelixColors.actionSubtleDefault,
    hover:    HelixColors.actionSubtleHover,
    pressed:  HelixColors.actionSubtlePressed,
    disabled: HelixColors.actionSubtleDefault,
    on:       HelixColors.actionSubtleOn,
    border:   null,
  },
};

// ── Size maps ─────────────────────────────────────────────────────────────────

const HEIGHT    = { sm: HelixSize.controlSm,             md: HelixSize.controlMd,          lg: HelixSize.controlLg          };
const H_PAD     = { sm: HelixSpacing.paddingComponentMd, md: HelixSpacing.paddingComponentLg, lg: HelixSpacing.paddingComponentXl };
const FONT_SIZE = { sm: 14, md: 14, lg: 16 };
const ICON_SIZE = { sm: HelixSize.iconInline,            md: HelixSize.iconControl,        lg: HelixSize.iconControl        };
const GAP       = { sm: HelixSpacing.gapInlineXs,        md: HelixSpacing.gapInlineSm,     lg: HelixSpacing.gapInlineSm     };

// ── Component ─────────────────────────────────────────────────────────────────

/**
 * HelixButton — Helix DS
 * Figma: components-core.fig → button
 *
 * @param {'primary'|'destructive'|'secondary'|'subtle'} variant
 * @param {'sm'|'md'|'lg'} size
 * @param {boolean} disabled
 * @param {boolean} loading
 * @param {function} leftIcon   — render prop: (props) => <Icon {...props} />
 * @param {function} rightIcon  — render prop: (props) => <Icon {...props} />
 */
export function HelixButton({
  variant = 'primary',
  size    = 'md',
  disabled    = false,
  loading     = false,
  noFocusRing = false,
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

  const v = VARIANTS[variant] ?? VARIANTS.primary;

  // ── Background & border resolution ───────────────────────────────────────
  let bgColor;
  if (disabled)      bgColor = v.disabled;
  else if (hovered)  bgColor = v.hover;
  else               bgColor = v.default;

  const fgColor = disabled ? (variant === 'subtle' ? HelixColors.textDisabled : v.on) : v.on;

  let surfaceStyle;
  if (v.border && !disabled && !hovered) {
    // Default state: gradient border
    surfaceStyle = gradientBorderStyle(bgColor, v.border, 2);
  } else if (variant === 'subtle') {
    // Subtle: solid border, always
    const borderColor = disabled
      ? HelixColors.borderDefault
      : hovered
        ? HelixColors.actionPrimaryHover
        : HelixColors.actionPrimaryDefault;
    surfaceStyle = { backgroundColor: bgColor, border: `1px solid ${borderColor}` };
  } else {
    // Hover / pressed / disabled on colored variants: solid fill, no gradient border
    surfaceStyle = { backgroundColor: bgColor, border: '2px solid transparent' };
  }

  // ── Focus ring ────────────────────────────────────────────────────────────
  const focusOutline = focused && isInteractive && !noFocusRing
    ? `0 0 0 2px ${HelixColors.borderFocusPrimary}`
    : 'none';

  // ── Icon weight ───────────────────────────────────────────────────────────
  const iconWeight = size === 'sm' ? 'bold' : 'regular';
  const iSize = ICON_SIZE[size];

  // ── Spinner ───────────────────────────────────────────────────────────────
  const spinner = (
    <span style={{ display: 'inline-flex', animation: 'helix-spin 0.8s linear infinite', width: iSize, height: iSize }}>
      <CircleNotch size={iSize} color={fgColor} weight="bold" />
    </span>
  );

  const containerStyle = {
    display:        'inline-flex',
    alignItems:     'center',
    justifyContent: 'center',
    gap:            GAP[size],
    height:         HEIGHT[size],
    paddingLeft:    H_PAD[size],
    paddingRight:   H_PAD[size],
    ...surfaceStyle,
    borderRadius:   HelixRadius.componentLg,
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

  const renderIcon = (icon) =>
    typeof icon === 'function'
      ? icon({ size: iSize, color: fgColor, weight: iconWeight })
      : icon;

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
      {loading ? spinner : (
        <>
          {leftIcon  && <span style={{ display: 'inline-flex', flexShrink: 0 }}>{renderIcon(leftIcon)}</span>}
          <span>{children}</span>
          {rightIcon && <span style={{ display: 'inline-flex', flexShrink: 0 }}>{renderIcon(rightIcon)}</span>}
        </>
      )}
    </button>
  );
}

export default HelixButton;
