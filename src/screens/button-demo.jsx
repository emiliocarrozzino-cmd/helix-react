import { HelixButton } from '../components/helix/helix-button';
import { HelixColors, HelixSpacing, HelixTypography } from '../tokens/helixTokens';
import {
  Plus,
  ArrowRight,
  Trash,
  Star,
  DownloadSimple,
  Check,
} from '@phosphor-icons/react';

const VARIANTS = ['primary', 'destructive', 'featured', 'subtle'];
const SIZES    = ['sm', 'md', 'lg'];

const VARIANT_LABELS = {
  primary:     'Primary',
  destructive: 'Destructive',
  featured:    'Featured',
  subtle:      'Subtle',
};

const VARIANT_ICONS = {
  primary:     Plus,
  destructive: Trash,
  featured:    Star,
  subtle:      DownloadSimple,
};

const sectionHeading = {
  ...HelixTypography.headingMd,
  color:        HelixColors.textPrimary,
  marginBottom: 4,
  marginTop:    0,
};

const sectionSub = {
  ...HelixTypography.bodyMd,
  color:        HelixColors.textTertiary,
  marginBottom: HelixSpacing.gapInlineMd,
  marginTop:    0,
};

const row = {
  display:    'flex',
  flexWrap:   'wrap',
  gap:        HelixSpacing.gapInlineSm,
  alignItems: 'center',
};

const section = {
  marginBottom: HelixSpacing.gapInlineLg,
};

export function ButtonDemo() {
  return (
    <div
      style={{
        backgroundColor: HelixColors.surfacePage,
        minHeight:        '100vh',
        padding:          HelixSpacing.gapInlineLg,
        fontFamily:       'Figtree, sans-serif',
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: 40 }}>
        <h1
          style={{
            ...HelixTypography.displayLg,
            color:  HelixColors.textPrimary,
            margin: '0 0 8px',
          }}
        >
          HelixButton
        </h1>
        <p style={{ ...HelixTypography.bodyLg, color: HelixColors.textTertiary, margin: 0 }}>
          4 variantes × 3 tamaños × todos los estados — Helix DS v2.2
        </p>
      </div>

      {/* ── Variantes × Tamaños ─────────────────────────────────────────── */}
      <section style={section}>
        <h2 style={sectionHeading}>Variantes × Tamaños</h2>
        <p style={sectionSub}>Solo texto · sin íconos</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: HelixSpacing.gapInlineSm }}>
          {VARIANTS.map((variant) => (
            <div key={variant} style={row}>
              <span
                style={{
                  ...HelixTypography.labelSm,
                  color: HelixColors.textTertiary,
                  width: 96,
                  flexShrink: 0,
                }}
              >
                {VARIANT_LABELS[variant]}
              </span>
              {SIZES.map((size) => (
                <HelixButton key={size} variant={variant} size={size}>
                  {VARIANT_LABELS[variant]} {size.toUpperCase()}
                </HelixButton>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ── Con íconos ──────────────────────────────────────────────────── */}
      <section style={section}>
        <h2 style={sectionHeading}>Con íconos</h2>
        <p style={sectionSub}>leftIcon · rightIcon · ambos</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: HelixSpacing.gapInlineSm }}>
          {VARIANTS.map((variant) => {
            const Icon = VARIANT_ICONS[variant];
            return (
              <div key={variant} style={row}>
                <span
                  style={{
                    ...HelixTypography.labelSm,
                    color: HelixColors.textTertiary,
                    width: 96,
                    flexShrink: 0,
                  }}
                >
                  {VARIANT_LABELS[variant]}
                </span>
                <HelixButton
                  variant={variant}
                  size="md"
                  leftIcon={(p) => <Icon {...p} />}
                >
                  Left icon
                </HelixButton>
                <HelixButton
                  variant={variant}
                  size="md"
                  rightIcon={(p) => <ArrowRight {...p} />}
                >
                  Right icon
                </HelixButton>
                <HelixButton
                  variant={variant}
                  size="md"
                  leftIcon={(p) => <Icon {...p} />}
                  rightIcon={(p) => <ArrowRight {...p} />}
                >
                  Both icons
                </HelixButton>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Estados ─────────────────────────────────────────────────────── */}
      <section style={section}>
        <h2 style={sectionHeading}>Estados</h2>
        <p style={sectionSub}>disabled · loading</p>
        <div style={row}>
          {VARIANTS.map((variant) => (
            <HelixButton key={`dis-${variant}`} variant={variant} size="md" disabled>
              {VARIANT_LABELS[variant]}
            </HelixButton>
          ))}
        </div>
        <div style={{ ...row, marginTop: HelixSpacing.gapInlineSm }}>
          {VARIANTS.map((variant) => (
            <HelixButton key={`load-${variant}`} variant={variant} size="md" loading>
              {VARIANT_LABELS[variant]}
            </HelixButton>
          ))}
        </div>
      </section>

      {/* ── Tamaño sm — detalle de íconos bold ─────────────────────────── */}
      <section style={section}>
        <h2 style={sectionHeading}>Size sm — icon bold</h2>
        <p style={sectionSub}>Íconos en weight bold (16px) · sm buttons</p>
        <div style={row}>
          {VARIANTS.map((variant) => {
            const Icon = VARIANT_ICONS[variant];
            return (
              <HelixButton
                key={variant}
                variant={variant}
                size="sm"
                leftIcon={(p) => <Icon {...p} />}
              >
                {VARIANT_LABELS[variant]}
              </HelixButton>
            );
          })}
        </div>
      </section>

      {/* ── Casos de uso reales ──────────────────────────────────────────── */}
      <section style={section}>
        <h2 style={sectionHeading}>Casos de uso reales</h2>
        <p style={sectionSub}>Combinaciones típicas en pantallas</p>
        <div style={row}>
          <HelixButton variant="primary" size="lg" leftIcon={(p) => <Check {...p} />}>
            Confirmar pedido
          </HelixButton>
          <HelixButton variant="subtle" size="lg">
            Cancelar
          </HelixButton>
        </div>
        <div style={{ ...row, marginTop: HelixSpacing.gapInlineSm }}>
          <HelixButton variant="destructive" size="md" leftIcon={(p) => <Trash {...p} />}>
            Eliminar receta
          </HelixButton>
          <HelixButton variant="subtle" size="md">
            Volver
          </HelixButton>
        </div>
        <div style={{ ...row, marginTop: HelixSpacing.gapInlineSm }}>
          <HelixButton
            variant="primary"
            size="sm"
            rightIcon={(p) => <DownloadSimple {...p} />}
          >
            Exportar
          </HelixButton>
          <HelixButton variant="featured" size="sm" leftIcon={(p) => <Star {...p} />}>
            Premium
          </HelixButton>
        </div>
      </section>

      {/* spin keyframe inyectado inline para el spinner */}
      <style>{`
        @keyframes helix-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        * { box-sizing: border-box; }
      `}</style>
    </div>
  );
}

export default ButtonDemo;
