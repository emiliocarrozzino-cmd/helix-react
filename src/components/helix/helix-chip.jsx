import { X } from '@phosphor-icons/react';
import {
  HelixBorderWidth,
  HelixColors,
  HelixRadius,
  HelixSize,
  HelixSpacing,
  HelixTypography,
} from '../../tokens/helixTokens';

/**
 * HelixChip — chip de valor seleccionado, 20px de alto
 * @param {string} label
 * @param {function} onRemove — si se pasa, muestra botón X
 */
export function HelixChip({ label, onRemove }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: HelixSpacing.paddingComponentXxs,
        height: 20,
        boxSizing: 'border-box',
        paddingLeft: 6,
        paddingRight: onRemove ? HelixSpacing.paddingComponentXs : 6,
        paddingTop: 0,
        paddingBottom: 0,
        backgroundColor: HelixColors.fillNeutralSubtle,
        border: `${HelixBorderWidth.thin}px solid ${HelixColors.borderDefault}`,
        borderRadius: HelixRadius.componentSm,
        ...HelixTypography.bodySm,
        lineHeight: 1,
        color: HelixColors.textSecondary,
        whiteSpace: 'nowrap',
      }}
    >
      {label}
      {onRemove && (
        <button
          type="button"
          onClick={onRemove}
          aria-label={`Quitar ${label}`}
          style={{
            display: 'inline-flex',
            padding: 0,
            border: 'none',
            background: 'none',
            cursor: 'pointer',
            lineHeight: 0,
          }}
        >
          <X size={HelixSize.iconXs} color={HelixColors.iconSecondary} weight="regular" />
        </button>
      )}
    </span>
  );
}
