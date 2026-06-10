import { useCallback, useEffect, useRef, useState } from 'react';
import {
  CheckCircle,
  Clock,
  DownloadSimple,
  Info,
  WarningOctagon,
  X,
  XCircle,
} from '@phosphor-icons/react';
import pdfSvg from '../../ilustration/ilustration-pdf.svg';
import docSvg from '../../ilustration/ilustration-doc.svg';
import jpgSvg from '../../ilustration/ilustration-jpg.svg';
import pngSvg from '../../ilustration/ilustration-png.svg';
import mp4Svg from '../../ilustration/ilustration-mp4.svg';
import zipSvg from '../../ilustration/ilustration-zip.svg';

const ILUSTRATION_MAP = { pdf: pdfSvg, doc: docSvg, jpg: jpgSvg, png: pngSvg, mp4: mp4Svg, zip: zipSvg };
import { HelixButton } from '../components/helix/helix-button';
import {
  HelixBorderWidth,
  HelixColors,
  HelixRadius,
  HelixShadow,
  HelixSize,
  HelixSpacing,
  HelixTypography,
} from '../tokens/helixTokens';

// ─── Badge ────────────────────────────────────────────────────────────────────

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

// ─── Badge Status ─────────────────────────────────────────────────────────────

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
      {isProgress ? (
        <Clock size={HelixSize.iconXs} color={HelixColors.iconTertiary} weight="regular" />
      ) : (
        <CheckCircle size={HelixSize.iconXs} color={HelixColors.iconSuccess} weight="regular" />
      )}
      {label}
    </span>
  );
}

// ─── Radio ────────────────────────────────────────────────────────────────────

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
          boxShadow: selected ? `inset 0 0 0 ${HelixSpacing.paddingComponentXxs}px ${HelixColors.fillSurface}` : 'none',
          boxSizing: 'border-box',
        }}
      />
    </span>
  );
}

// ─── Chip ─────────────────────────────────────────────────────────────────────

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

// ─── Select field ─────────────────────────────────────────────────────────────

export function HelixSelectField({ label, chipLabel, dropdownIcon: DropdownIcon }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
      <span style={{ ...HelixTypography.bodyStrongMd, color: HelixColors.textSecondary, marginBottom: HelixSpacing.paddingComponentXs }}>
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
        <div style={{ display: 'flex', flex: 1, flexWrap: 'wrap', gap: HelixSpacing.gapInlineXs, alignItems: 'center', minWidth: 0, overflow: 'hidden' }}>
          <HelixChip label={chipLabel} />
        </div>
        {DropdownIcon && (
          <DropdownIcon size={HelixSize.iconInline} color={HelixColors.iconSecondary} weight="regular" />
        )}
      </div>
    </div>
  );
}

// ─── Card list ────────────────────────────────────────────────────────────────

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
        <div style={{ display: 'flex', flex: 1, alignItems: 'center', gap: HelixSpacing.gapInlineSm, minWidth: 0 }}>
          <HelixRadio selected={selected} />
          <div style={{ display: 'flex', alignItems: 'center', gap: HelixSpacing.paddingComponentXs }}>
            <span style={{ ...HelixTypography.bodyStrongMd, color: HelixColors.textSecondary }}>{label}</span>
            <HelixBadge label="Label" status="warning" icon={false} />
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: HelixSpacing.paddingComponentXs, flexShrink: 0 }}>
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
        <div style={{ display: 'flex', flex: 1, alignItems: 'center', gap: HelixSpacing.gapInlineSm, minWidth: 0 }}>
          <span style={{ ...HelixTypography.captionMd, color: HelixColors.textSecondary }}>{content1}</span>
          <ContentDivider />
          <span style={{ ...HelixTypography.captionMd, color: HelixColors.textSecondary }}>{content2}</span>
          <ContentDivider />
          <span style={{ ...HelixTypography.captionMd, color: HelixColors.textSecondary }}>{content3}</span>
          <ContentDivider />
          <span style={{ ...HelixTypography.captionMd, color: HelixColors.textSecondary }}>{content4}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: HelixSpacing.paddingComponentXs, flexShrink: 0 }}>
          <HelixBadge label="Label" status="info" />
          <HelixBadge label="Label" status="error" />
        </div>
      </div>
    </button>
  );
}

// ─── Detail field ─────────────────────────────────────────────────────────────

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
      <span style={{ ...HelixTypography.bodyMd, color: HelixColors.textPlaceholder, flexShrink: 0 }}>{label}</span>
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

// ─── File card ────────────────────────────────────────────────────────────────

function FileIllustration({ format }) {
  const src = ILUSTRATION_MAP[format] ?? ILUSTRATION_MAP.pdf;
  return (
    <img
      src={src}
      alt={format.toUpperCase()}
      style={{ width: 44, height: 44, flexShrink: 0, objectFit: 'contain' }}
    />
  );
}

export function HelixFileCard({ title = 'Label', description = 'Description', format = 'pdf' }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        minWidth: 0,
        paddingTop: HelixSpacing.paddingComponentSm,
        paddingBottom: HelixSpacing.paddingComponentSm,
        paddingRight: HelixSpacing.paddingComponentSm,
        paddingLeft: HelixSpacing.paddingComponentXs,
        backgroundColor: HelixColors.fillSurface,
        border: `${HelixBorderWidth.thin}px solid ${HelixColors.borderSubtle}`,
        borderRadius: HelixRadius.componentLg,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', width: '100%' }}>
        <div style={{ display: 'flex', flex: 1, alignItems: 'center', gap: HelixSpacing.gapInlineSm, minWidth: 0 }}>
          <FileIllustration format={format} />
          <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
            <span style={{ ...HelixTypography.bodyMd, color: HelixColors.textPrimary }}>{title}</span>
            <span style={{ ...HelixTypography.captionMd, color: HelixColors.textTertiary }}>{description}</span>
          </div>
        </div>
        <DownloadSimple size={HelixSize.iconXs} color={HelixColors.iconSecondary} weight="regular" />
      </div>
    </div>
  );
}

// ─── Tabs ─────────────────────────────────────────────────────────────────────

export function HelixTabs({ tabs, activeTab, onTabChange }) {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        alignSelf: 'flex-start',
        padding: HelixSpacing.paddingComponentXs,
        backgroundColor: HelixColors.surfacePage,
        borderRadius: HelixRadius.componentLg,
      }}
    >
      {tabs.map((tab) =>
        tab.id === activeTab ? (
          <HelixButton key={tab.id} variant="primary" size="sm" onClick={() => onTabChange(tab.id)}>
            {tab.label}
          </HelixButton>
        ) : (
          <button
            key={tab.id}
            type="button"
            onClick={() => onTabChange(tab.id)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              paddingLeft: HelixSpacing.paddingComponentMd,
              paddingRight: HelixSpacing.paddingComponentMd,
              paddingTop: HelixSpacing.paddingComponentXs,
              paddingBottom: HelixSpacing.paddingComponentXs,
              border: 'none',
              background: 'none',
              borderRadius: HelixRadius.componentMd,
              cursor: 'pointer',
              ...HelixTypography.bodyStrongMd,
              color: HelixColors.textPlaceholder,
              fontFamily: 'Figtree, sans-serif',
            }}
          >
            {tab.label}
          </button>
        ),
      )}
    </div>
  );
}

// ─── Icon button (HelixButton subtle) ─────────────────────────────────────────

export function HelixIconButton({ icon: Icon, 'aria-label': ariaLabel, onClick }) {
  return (
    <HelixButton
      variant="subtle"
      size="sm"
      noFocusRing
      aria-label={ariaLabel}
      onClick={onClick}
      style={{
        width: HelixSize.controlSm,
        height: HelixSize.controlSm,
        paddingLeft: HelixSpacing.paddingComponentSm,
        paddingRight: HelixSpacing.paddingComponentSm,
        border: '1px solid transparent',
      }}
      leftIcon={(p) => <Icon {...p} />}
    >
      <span style={{ width: 0, overflow: 'hidden' }} aria-hidden="true" />
    </HelixButton>
  );
}

// ─── Side nav item ────────────────────────────────────────────────────────────

export function HelixSideNavItem({ icon: Icon, active = false }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        borderRadius: HelixRadius.componentLg,
        backgroundColor: active ? HelixColors.fillBrandPrimarySubtle : 'transparent',
        border: active
          ? `${HelixBorderWidth.thin}px solid ${HelixColors.selectionDefault}`
          : '1px solid transparent',
        flexShrink: 0,
        cursor: 'pointer',
      }}
    >
      <Icon
        size={20}
        color={active ? HelixColors.fillBrandPrimaryDefault : HelixColors.iconSecondary}
        weight={active ? 'fill' : 'regular'}
      />
    </div>
  );
}

// ─── Info pill (top nav) ──────────────────────────────────────────────────────

export function HelixInfoPill({ children }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        paddingLeft: HelixSpacing.paddingComponentSm,
        paddingRight: HelixSpacing.paddingComponentSm,
        paddingTop: HelixSpacing.paddingComponentXs,
        paddingBottom: HelixSpacing.paddingComponentXs,
        backgroundColor: HelixColors.fillInfoSubtle,
        border: `${HelixBorderWidth.thin}px solid ${HelixColors.selectionDefault}`,
        borderRadius: HelixRadius.componentMd,
        ...HelixTypography.bodySm,
        color: HelixColors.textInfo,
      }}
    >
      {children}
    </span>
  );
}

// ─── Scroll area ──────────────────────────────────────────────────────────────
// Custom Helix scrollbar: 8px track (glass bg), pill thumb (fillNeutralDefault)

export function HelixScrollArea({ children, style }) {
  const contentRef = useRef(null);
  const [thumb, setThumb] = useState({ height: 0, top: 0, visible: false });

  const update = useCallback(() => {
    const el = contentRef.current;
    if (!el) return;
    const { scrollHeight, clientHeight, scrollTop } = el;
    if (scrollHeight <= clientHeight) {
      setThumb(prev => (prev.visible ? { ...prev, visible: false } : prev));
      return;
    }
    const trackH = clientHeight - 8;
    const thumbH = Math.max((clientHeight / scrollHeight) * trackH, 24);
    const maxScroll = scrollHeight - clientHeight;
    const maxTop = trackH - thumbH;
    setThumb({
      height: thumbH,
      top: 4 + (maxScroll > 0 ? (scrollTop / maxScroll) * maxTop : 0),
      visible: true,
    });
  }, []);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [update, children]);

  return (
    <div style={{ position: 'relative', overflow: 'hidden', ...style }}>
      <div
        ref={contentRef}
        onScroll={update}
        className="helix-no-scrollbar"
        style={{ height: '100%', overflowY: 'scroll', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {children}
      </div>

      {thumb.visible && (
        <div
          style={{
            position: 'absolute',
            right: 2,
            top: 0,
            bottom: 0,
            width: 8,
            borderRadius: HelixRadius.componentPill,
            backgroundColor: HelixColors.overlayGlass,
            pointerEvents: 'none',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: thumb.top,
              left: 0,
              right: 0,
              height: thumb.height,
              borderRadius: HelixRadius.componentPill,
              backgroundColor: HelixColors.fillNeutralDefault,
            }}
          />
        </div>
      )}
    </div>
  );
}
