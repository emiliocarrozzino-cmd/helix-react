import {
  HelixBorderWidth,
  HelixColors,
  HelixRadius,
  HelixSize,
  HelixSpacing,
} from '../../tokens/helixTokens';

/**
 * HelixRadio — indicador radio 20×20px
 * @param {boolean} selected
 */
export function HelixRadio({ selected = false }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: HelixSize.iconControl,
        height: HelixSize.iconControl,
        flexShrink: 0,
      }}
    >
      <span
        style={{
          width: HelixSize.iconInline,
          height: HelixSize.iconInline,
          borderRadius: HelixRadius.componentPill,
          border: selected
            ? `${HelixBorderWidth.strong}px solid ${HelixColors.actionPrimaryDefault}`
            : `${HelixBorderWidth.thin}px solid ${HelixColors.borderStrong}`,
          backgroundColor: selected ? HelixColors.actionPrimaryDefault : HelixColors.surfacePage,
          boxShadow: selected
            ? `inset 0 0 0 ${HelixSpacing.paddingComponentXxs}px ${HelixColors.fillSurface}`
            : 'none',
          boxSizing: 'border-box',
        }}
      />
    </span>
  );
}
