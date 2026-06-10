import { CheckCircle, Clock, Info, WarningOctagon, XCircle } from '@phosphor-icons/react';
import {
  HelixBorderWidth,
  HelixColors,
  HelixRadius,
  HelixSize,
  HelixSpacing,
  HelixTypography,
} from '../../tokens/helixTokens';

const BADGE_STATUS = {
  success: {
    bg: HelixColors.fillSuccessSubtle,
    border: HelixColors.fillSuccessSubtle,
    color: HelixColors.textSuccess,
    Icon: CheckCircle,
    iconColor: HelixColors.iconSuccess,
  },
  warning: {
    bg: HelixColors.fillWarningSubtle,
    border: HelixColors.fillWarningSubtle,
    color: HelixColors.textWarning,
    Icon: WarningOctagon,
    iconColor: HelixColors.iconWarning,
  },
  error: {
    bg: HelixColors.fillErrorSubtle,
    border: HelixColors.fillErrorSubtle,
    color: HelixColors.textError,
    Icon: XCircle,
    iconColor: HelixColors.iconError,
  },
  info: {
    bg: HelixColors.fillInfoSubtle,
    border: HelixColors.selectionDefault,
    color: HelixColors.textInfo,
    Icon: Info,
    iconColor: HelixColors.fillInfoDefault,
  },
};

/**
 * HelixBadge — etiqueta de estado de 20px
 * @param {'success'|'warning'|'error'|'info'} status
 * @param {boolean} icon — mostrar icono leading
 */
export function HelixBadge({ label = 'Label', status = 'success', icon = true }) {
  const s = BADGE_STATUS[status];
  const Icon = s.Icon;

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: HelixSpacing.paddingComponentXs,
        height: 20,
        boxSizing: 'border-box',
        paddingLeft: HelixSpacing.paddingComponentXs,
        paddingRight: HelixSpacing.paddingComponentXs,
        paddingTop: 0,
        paddingBottom: 0,
        backgroundColor: s.bg,
        border: `${HelixBorderWidth.thin}px solid ${s.border}`,
        borderRadius: HelixRadius.componentMd,
        ...HelixTypography.bodySm,
        color: s.color,
        whiteSpace: 'nowrap',
      }}
    >
      {icon && <Icon size={HelixSize.iconXs} color={s.iconColor} weight="regular" />}
      {label}
    </span>
  );
}

/**
 * HelixBadgeStatus — indicador de estado de proceso de 20px
 * @param {'done'|'progress'} appearance
 */
export function HelixBadgeStatus({ label = 'Label', appearance = 'done' }) {
  const isProgress = appearance === 'progress';

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: HelixSpacing.paddingComponentXs,
        height: 20,
        boxSizing: 'border-box',
        paddingLeft: HelixSpacing.paddingComponentXs,
        paddingRight: HelixSpacing.paddingComponentXs,
        paddingTop: 0,
        paddingBottom: 0,
        backgroundColor: HelixColors.fillSurface,
        border: `${HelixBorderWidth.thin}px solid ${HelixColors.borderSubtle}`,
        borderRadius: HelixRadius.componentMd,
        ...HelixTypography.captionMd,
        color: isProgress ? HelixColors.textTertiary : HelixColors.textSecondary,
        whiteSpace: 'nowrap',
      }}
    >
      {isProgress
        ? <Clock size={HelixSize.iconXs} color={HelixColors.iconTertiary} weight="regular" />
        : <CheckCircle size={HelixSize.iconXs} color={HelixColors.iconSuccess} weight="regular" />
      }
      {label}
    </span>
  );
}
