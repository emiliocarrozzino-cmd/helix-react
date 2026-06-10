import {
  HelixBorderWidth,
  HelixColors,
  HelixRadius,
  HelixSize,
  HelixSpacing,
  HelixTypography,
} from '../../tokens/helixTokens';
import { HelixChip } from './helix-chip';

/**
 * HelixSelectField — campo de selección con chip(s) y dropdown icon
 * @param {string} label — etiqueta visible encima del campo
 * @param {string} chipLabel — valor seleccionado mostrado como chip
 * @param {component} dropdownIcon — icono Phosphor para el caret (ej. CaretDown)
 */
export function HelixSelectField({ label, chipLabel, dropdownIcon: DropdownIcon }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
      <span
        style={{
          ...HelixTypography.bodyStrongMd,
          color: HelixColors.textSecondary,
          marginBottom: HelixSpacing.paddingComponentXs,
        }}
      >
        {label}
      </span>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: HelixSpacing.gapInlineSm,
          height: HelixSize.controlMd,
          boxSizing: 'border-box',
          paddingLeft: HelixSpacing.paddingComponentMd,
          paddingRight: HelixSpacing.paddingComponentMd,
          backgroundColor: HelixColors.fillSurface,
          border: `${HelixBorderWidth.thin}px solid ${HelixColors.borderDefault}`,
          borderRadius: HelixRadius.componentMd,
        }}
      >
        <div
          style={{
            display: 'flex',
            flex: 1,
            flexWrap: 'wrap',
            gap: HelixSpacing.gapInlineXs,
            alignItems: 'center',
            minWidth: 0,
            overflow: 'hidden',
          }}
        >
          <HelixChip label={chipLabel} />
        </div>
        {DropdownIcon && (
          <DropdownIcon size={HelixSize.iconInline} color={HelixColors.iconSecondary} weight="regular" />
        )}
      </div>
    </div>
  );
}
