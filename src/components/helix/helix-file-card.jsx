import { DownloadSimple } from '@phosphor-icons/react';
import pdfSvg from '../../../ilustration/ilustration-pdf.svg';
import docSvg from '../../../ilustration/ilustration-doc.svg';
import jpgSvg from '../../../ilustration/ilustration-jpg.svg';
import pngSvg from '../../../ilustration/ilustration-png.svg';
import mp4Svg from '../../../ilustration/ilustration-mp4.svg';
import zipSvg from '../../../ilustration/ilustration-zip.svg';
import {
  HelixBorderWidth,
  HelixColors,
  HelixRadius,
  HelixSize,
  HelixSpacing,
  HelixTypography,
} from '../../tokens/helixTokens';

const ILLUSTRATION_MAP = {
  pdf: pdfSvg,
  doc: docSvg,
  jpg: jpgSvg,
  png: pngSvg,
  mp4: mp4Svg,
  zip: zipSvg,
};

function FileIllustration({ format }) {
  const src = ILLUSTRATION_MAP[format] ?? ILLUSTRATION_MAP.pdf;
  return (
    <img
      src={src}
      alt={format.toUpperCase()}
      style={{ width: 44, height: 44, flexShrink: 0, objectFit: 'contain' }}
    />
  );
}

/**
 * HelixFileCard — tarjeta de documento adjunto
 * @param {'pdf'|'doc'|'jpg'|'png'|'mp4'|'zip'} format
 * @param {string} title
 * @param {string} description
 */
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
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          width: '100%',
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
