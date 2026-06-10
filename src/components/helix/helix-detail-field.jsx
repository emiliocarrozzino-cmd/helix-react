import {
  HelixColors,
  HelixSpacing,
  HelixTypography,
} from '../../tokens/helixTokens';

/**
 * HelixDetailField — fila de label + valor en un panel de detalle
 * @param {string} label — texto de etiqueta (textPlaceholder)
 * @param {string} value — texto de valor (textSecondary)
 */
export function HelixDetailField({ label, value, style }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: HelixSpacing.gapInlineSm,
        flex: 1,
        minWidth: 0,
        paddingRight: HelixSpacing.paddingComponentMd,
        ...style,
      }}
    >
      <span style={{ ...HelixTypography.bodyMd, color: HelixColors.textPlaceholder, flexShrink: 0 }}>
        {label}
      </span>
      <span
        style={{
          ...HelixTypography.bodyMd,
          color: HelixColors.textSecondary,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
      >
        {value}
      </span>
    </div>
  );
}
