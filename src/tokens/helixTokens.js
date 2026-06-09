// helixTokens.js — generado desde helix_tokens.dart v2.2 + helix-ds/src/tokens/
// Fuente de verdad: Figma variables de Helix DS (foundations.fig)
// NUNCA editar a mano — regenerar desde Figma

// ─── COLORS ──────────────────────────────────────────────────────────────────
// Semánticos — siempre usar estos en componentes

export const HelixColors = {
  // action/primary
  actionPrimaryDefault:  '#157BB5',
  actionPrimaryHover:    '#006395',
  actionPrimaryPressed:  '#004C74',
  actionPrimaryDisabled: '#AAD7FA',
  actionPrimaryOn:       '#FFFFFF',

  // action/destructive
  actionDestructiveDefault:  '#DC2837',
  actionDestructiveHover:    '#BB0023',
  actionDestructivePressed:  '#94001A',
  actionDestructiveDisabled: '#FFBEBA',
  actionDestructiveOn:       '#FFFFFF',

  // action/featured
  actionFeaturedDefault:  '#642DC3',
  actionFeaturedHover:    '#5001A8',
  actionFeaturedPressed:  '#38007A',
  actionFeaturedOn:       '#FFFFFF',

  // action/subtle
  actionSubtleDefault:  '#FFFFFF',
  actionSubtleHover:    '#E5E8EA',
  actionSubtlePressed:  '#CCD2D5',
  actionSubtleOn:       '#11171A',

  // border
  borderSubtle:       '#E5E8EA',
  borderDefault:      '#CCD2D5',
  borderStrong:       '#879196',
  borderInverse:      '#FFFFFF',
  borderFocus:        '#5C6B73',
  borderFocusPrimary: '#AAD7FA',
  borderError:        '#DC2837',
  borderDestructive:  '#DC2837',
  borderSuccess:      '#16A34A',
  borderWarning:      '#E89B17',
  borderInfo:         '#157BB5',

  // fill
  fillSurface:              '#FFFFFF',
  fillNeutralSubtle:        '#E5E8EA',
  fillNeutralSubtleStrong:  '#CCD2D5',
  fillNeutralDefault:       '#AAB3B7',
  fillNeutralStrong:        '#353E43',
  fillBrandPrimarySubtle:   '#ECF7FF',
  fillBrandPrimaryDefault:  '#157BB5',
  fillBrandPrimaryStrong:   '#006395',
  fillBrandSecondarySubtle:  '#EBF9F1',
  fillBrandSecondaryDefault: '#3FA876',
  fillBrandSecondaryStrong:  '#00764A',
  fillBrandTertiarySubtle:   '#F5F3FF',
  fillBrandTertiaryDefault:  '#642DC3',
  fillBrandTertiaryStrong:   '#5001A8',
  fillSuccessSubtle:   '#EAFAEC',
  fillSuccessDefault:  '#16A34A',
  fillSuccessStrong:   '#00883A',
  fillWarningSubtle:   '#FFF3E5',
  fillWarningDefault:  '#E89B17',
  fillWarningStrong:   '#C98400',
  fillErrorSubtle:     '#FFF2F0',
  fillErrorDefault:    '#DC2837',
  fillErrorStrong:     '#BB0023',
  fillInfoSubtle:      '#ECF7FF',
  fillInfoDefault:     '#157BB5',
  fillInfoStrong:      '#006395',

  // focus
  focusRing:          '#157BB5',
  focusRingOnInverse: '#FFFFFF',

  // icon
  iconPrimary:   '#11171A',
  iconSecondary: '#4A5459',
  iconTertiary:  '#879196',
  iconDisabled:  '#AAB3B7',
  iconOnAction:  '#FFFFFF',
  iconError:     '#BB0023',
  iconSuccess:   '#006D2D',
  iconWarning:   '#A96F00',

  // overlay
  overlayScrim:      'rgba(0,0,0,0.6)',
  overlayScrimLight: 'rgba(255,255,255,0.6)',
  overlayHover:      'rgba(0,0,0,0.051)',
  overlayPressed:    'rgba(0,0,0,0.2)',
  overlayGlass:      'rgba(255,255,255,0.102)',

  // selection
  selectionDefault:  '#D3ECFF',
  selectionStrong:   '#157BB5',
  selectionText:     '#003654',
  selectionDisabled: '#E5E8EA',

  // surface
  surfacePage:     '#F4F5F6',
  surfaceRaised:   '#FFFFFF',
  surfaceSunken:   '#E5E8EA',
  surfaceInverse:  '#11171A',
  surfaceDisabled: '#E5E8EA',

  // text
  textPrimary:             '#11171A',
  textSecondary:           '#353E43',
  textTertiary:            '#5C6B73',
  textDisabled:            '#AAB3B7',
  textPlaceholder:         '#879196',
  textOnActionPrimary:     '#FFFFFF',
  textOnActionDestructive: '#FFFFFF',
  textOnActionFeatured:    '#FFFFFF',
  textOnSurfaceInverse:    '#FFFFFF',
  textLink:                '#006395',
  textLinkHover:           '#004C74',
  textError:               '#BB0023',
  textSuccess:             '#006D2D',
  textWarning:             '#8B5A00',
  textBrandPrimary:        '#004C74',
  textInfo:                '#004C74',
  textOnFillStrong:        '#FFFFFF',
  textBrandSecondary:      '#00764A',
  textBrandTertiary:       '#38007A',
};

// ─── SPACING ─────────────────────────────────────────────────────────────────

export const HelixSpacing = {
  // paddingComponent — internal component padding (px)
  paddingComponentXxs: 2,
  paddingComponentXs:  4,
  paddingComponentSm:  8,
  paddingComponentMd:  12,
  paddingComponentLg:  16,
  paddingComponentXl:  24,

  // gapInline — gap between inline elements (px)
  gapInlineXs: 4,
  gapInlineSm: 8,
  gapInlineMd: 12,
  gapInlineLg: 24,
  gapInlineXl: 40,
};

// ─── RADIUS ──────────────────────────────────────────────────────────────────

export const HelixRadius = {
  componentNone: 0,
  componentSm:   4,
  componentMd:   8,
  componentLg:   12,
  componentXl:   16,
  component2xl:  24,
  componentPill: 9999,
};

// ─── TYPOGRAPHY ──────────────────────────────────────────────────────────────

export const HelixTypography = {
  // display
  display2xl: { fontFamily: 'Figtree, sans-serif', fontSize: 48, fontWeight: 700, lineHeight: 1.1667 },
  displayXl:  { fontFamily: 'Figtree, sans-serif', fontSize: 40, fontWeight: 700, lineHeight: 1.2    },
  displayLg:  { fontFamily: 'Figtree, sans-serif', fontSize: 32, fontWeight: 700, lineHeight: 1.25   },

  // heading
  headingXl:  { fontFamily: 'Figtree, sans-serif', fontSize: 28, fontWeight: 600, lineHeight: 1.2857 },
  headingLg:  { fontFamily: 'Figtree, sans-serif', fontSize: 24, fontWeight: 600, lineHeight: 1.3333 },
  headingMd:  { fontFamily: 'Figtree, sans-serif', fontSize: 20, fontWeight: 600, lineHeight: 1.4    },
  headingSm:  { fontFamily: 'Figtree, sans-serif', fontSize: 16, fontWeight: 600, lineHeight: 1.5    },
  headingXs:  { fontFamily: 'Figtree, sans-serif', fontSize: 14, fontWeight: 600, lineHeight: 1.4286 },

  // body
  bodyLg: { fontFamily: 'Figtree, sans-serif', fontSize: 16, fontWeight: 400, lineHeight: 1.5    },
  bodyMd: { fontFamily: 'Figtree, sans-serif', fontSize: 14, fontWeight: 400, lineHeight: 1.4286 },
  bodySm: { fontFamily: 'Figtree, sans-serif', fontSize: 12, fontWeight: 400, lineHeight: 1.3333 },

  // body strong
  bodyStrongLg: { fontFamily: 'Figtree, sans-serif', fontSize: 16, fontWeight: 600, lineHeight: 1.5    },
  bodyStrongMd: { fontFamily: 'Figtree, sans-serif', fontSize: 14, fontWeight: 600, lineHeight: 1.4286 },
  bodyStrongSm: { fontFamily: 'Figtree, sans-serif', fontSize: 12, fontWeight: 600, lineHeight: 1.3333 },

  // label
  labelLg: { fontFamily: 'Figtree, sans-serif', fontSize: 16, fontWeight: 600, lineHeight: 1.5    },
  labelMd: { fontFamily: 'Figtree, sans-serif', fontSize: 14, fontWeight: 600, lineHeight: 1.4286 },
  labelSm: { fontFamily: 'Figtree, sans-serif', fontSize: 12, fontWeight: 600, lineHeight: 1.3333 },

  // caption
  captionLg: { fontFamily: 'Figtree, sans-serif', fontSize: 11, fontWeight: 500, lineHeight: 1.2727 },
  captionMd: { fontFamily: 'Figtree, sans-serif', fontSize: 11, fontWeight: 400, lineHeight: 1.2727 },
};

// ─── SHADOW ──────────────────────────────────────────────────────────────────

export const HelixShadow = {
  xs:  '0px 1px 2px rgba(0,0,0,0.051)',
  sm:  '0px 1px 2px rgba(0,0,0,0.078)',
  md:  '0px 4px 6px -2px rgba(18,18,23,0.051)',
  lg:  '0px 2px 4px rgba(0,0,0,0.122)',
  xl:  '0px 20px 25px -5px rgba(18,18,23,0.102), 0px 10px 10px -5px rgba(18,18,23,0.039)',
  xxl: '0px 25px 50px -12px rgba(18,18,23,0.251)',
};

// ─── MOTION ──────────────────────────────────────────────────────────────────

export const HelixMotion = {
  // micro — hover, focus ring, checkbox, toggle
  micro:     'all 100ms cubic-bezier(0.4, 0.0, 0.2, 1.0)',
  // component — dropdown, tooltip, accordion open
  component: 'all 200ms cubic-bezier(0.0, 0.0, 0.2, 1.0)',
  // overlay — modal, drawer, toast
  overlay:   'all 300ms cubic-bezier(0.0, 0.0, 0.2, 1.0)',
  // exit — any element leaving the screen
  exit:      'all 100ms cubic-bezier(0.4, 0.0, 1.0, 1.0)',
  // screen — full-page navigation
  screen:    'all 500ms cubic-bezier(0.4, 0.0, 0.2, 1.0)',
};

// ─── BORDER WIDTH ────────────────────────────────────────────────────────────

export const HelixBorderWidth = {
  thin:   1,
  strong: 2,
  focus:  2,
};

// ─── SIZE ────────────────────────────────────────────────────────────────────

export const HelixSize = {
  // control heights (px)
  controlSm: 32,
  controlMd: 40,
  controlLg: 48,
  // icon sizes (px)
  iconInline:  16,
  iconControl: 20,
  iconHeading: 24,
  iconXs:      12,
  iconLg:      32,
};

// ─── PRIMITIVES ──────────────────────────────────────────────────────────────
// NO usar directamente en componentes — usar siempre los semánticos de arriba

export const HelixPrimitives = {
  // neutral scale
  neutral0:   '#FFFFFF',
  neutral50:  '#F4F5F6',
  neutral100: '#E5E8EA',
  neutral200: '#CCD2D5',
  neutral300: '#AAB3B7',
  neutral400: '#879196',
  neutral500: '#5C6B73',
  neutral600: '#4A5459',
  neutral700: '#353E43',
  neutral900: '#11171A',

  // blue scale (brand primary)
  blue50:  '#ECF7FF',
  blue100: '#D3ECFF',
  blue200: '#AAD7FA',
  blue500: '#157BB5',
  blue700: '#006395',
  blue800: '#004C74',
  blue900: '#003654',

  // red scale (destructive)
  red50:  '#FFF2F0',
  red100: '#FFBEBA',
  red500: '#DC2837',
  red700: '#BB0023',
  red800: '#94001A',

  // purple scale (featured)
  purple50:  '#F5F3FF',
  purple500: '#642DC3',
  purple700: '#5001A8',
  purple900: '#38007A',

  // green scale (success / brand secondary)
  green50:  '#EBF9F1',
  green100: '#EAFAEC',
  green500: '#3FA876',
  green600: '#16A34A',
  green700: '#00883A',
  green800: '#00764A',
  green900: '#006D2D',

  // yellow scale (warning)
  yellow50:  '#FFF3E5',
  yellow500: '#E89B17',
  yellow700: '#C98400',
  yellow900: '#8B5A00',
};
