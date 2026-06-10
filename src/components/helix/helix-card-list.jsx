import {
  HelixBorderWidth,
  HelixColors,
  HelixRadius,
  HelixSpacing,
  HelixTypography,
} from '../../tokens/helixTokens';
import { HelixBadge, HelixBadgeStatus } from './helix-badge';
import { HelixRadio } from './helix-radio';

function ContentDivider() {
  return (
    <span
      style={{
        width: HelixBorderWidth.thin,
        height: HelixTypography.captionMd.fontSize,
        backgroundColor: HelixColors.borderSubtle,
        flexShrink: 0,
      }}
    />
  );
}

/**
 * HelixCardList — tarjeta de ítem en una lista seleccionable
 * @param {boolean} selected
 * @param {function} onSelect
 * @param {string} label — nombre principal
 * @param {string} content1..4 — metadatos en la fila inferior
 */
export function HelixCardList({
  label = 'Label',
  content1 = 'content-1',
  content2 = 'content-2',
  content3 = 'content-3',
  content4 = 'content-4',
  selected = false,
  onSelect,
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        padding: `${HelixSpacing.paddingComponentXs}px ${HelixSpacing.gapInlineXs}px`,
        backgroundColor: HelixColors.overlayScrimLight,
        border: selected
          ? `${HelixBorderWidth.focus}px solid ${HelixColors.borderFocusPrimary}`
          : `${HelixBorderWidth.thin}px solid ${HelixColors.borderSubtle}`,
        borderRadius: HelixRadius.componentLg,
        cursor: 'pointer',
        textAlign: 'left',
        fontFamily: 'inherit',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: HelixSpacing.paddingComponentLg,
          padding: HelixSpacing.paddingComponentSm,
        }}
      >
        <div
          style={{
            display: 'flex',
            flex: 1,
            alignItems: 'center',
            gap: HelixSpacing.gapInlineSm,
            minWidth: 0,
          }}
        >
          <HelixRadio selected={selected} />
          <div style={{ display: 'flex', alignItems: 'center', gap: HelixSpacing.paddingComponentXs }}>
            <span style={{ ...HelixTypography.bodyStrongMd, color: HelixColors.textSecondary }}>
              {label}
            </span>
            <HelixBadge label="Label" status="warning" icon={false} />
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: HelixSpacing.paddingComponentXs,
            flexShrink: 0,
          }}
        >
          <HelixBadgeStatus label="Label" appearance="done" />
          <HelixBadgeStatus label="Label" appearance="progress" />
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: HelixSpacing.paddingComponentLg,
          padding: HelixSpacing.paddingComponentSm,
          backgroundColor: HelixColors.surfacePage,
          borderRadius: HelixRadius.componentMd,
        }}
      >
        <div
          style={{
            display: 'flex',
            flex: 1,
            alignItems: 'center',
            gap: HelixSpacing.gapInlineSm,
            minWidth: 0,
          }}
        >
          <span style={{ ...HelixTypography.captionMd, color: HelixColors.textSecondary }}>{content1}</span>
          <ContentDivider />
          <span style={{ ...HelixTypography.captionMd, color: HelixColors.textSecondary }}>{content2}</span>
          <ContentDivider />
          <span style={{ ...HelixTypography.captionMd, color: HelixColors.textSecondary }}>{content3}</span>
          <ContentDivider />
          <span style={{ ...HelixTypography.captionMd, color: HelixColors.textSecondary }}>{content4}</span>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: HelixSpacing.paddingComponentXs,
            flexShrink: 0,
          }}
        >
          <HelixBadge label="Label" status="info" />
          <HelixBadge label="Label" status="error" />
        </div>
      </div>
    </button>
  );
}
