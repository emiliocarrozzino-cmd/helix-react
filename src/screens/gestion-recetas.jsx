import { useState } from 'react';
import {
  CaretDown,
  DotsThreeVertical,
  FileText,
  Gear,
  LinkSimple,
  List,
  MagnifyingGlass,
  Plus,
  Printer,
} from '@phosphor-icons/react';
import logoPraxys from '../assets/logo-praxys.svg';
import { HelixButton } from '../components/helix/helix-button';
import {
  HelixBadge,
  HelixCardList,
  HelixDetailField,
  HelixFileCard,
  HelixIconButton,
  HelixScrollArea,
  HelixSelectField,
  HelixSideNavItem,
  HelixTabs,
} from './gestion-recetas-components';
import {
  HelixBorderWidth,
  HelixColors,
  HelixRadius,
  HelixShadow,
  HelixSize,
  HelixSpacing,
  HelixTypography,
} from '../tokens/helixTokens';

const TABS = [
  { id: 'receta', label: 'Receta' },
  { id: 'seguimiento', label: 'Seguimiento' },
  { id: 'igm', label: 'IGM' },
  { id: 'trazabilidad', label: 'Trazabilidad' },
  { id: 'documentacion', label: 'Documentación' },
];

const FILES = [
  { format: 'pdf', title: 'Label', description: 'Description' },
  { format: 'doc', title: 'Label', description: 'Description' },
  { format: 'jpg', title: 'Label', description: 'Description' },
  { format: 'png', title: 'Label', description: 'Description' },
];

const DETAIL_ROWS = [
  [{ label: 'Paciente:', value: 'Nasarala, Luisina' }],
  [
    { label: 'Nª Afiliado:', value: '2932423' },
    { label: 'Contato:', value: '3415678965' },
  ],
  [
    { label: 'Médico:', value: 'Tabacco, Francisco' },
    { label: 'Matrícula:', value: '23456' },
  ],
  [
    { label: 'Obra social:', value: 'IAPOS' },
    { label: 'Nº Receta:', value: '12435345' },
  ],
  [
    { label: 'Anulación:', value: 'Si' },
    { label: 'Total Afiliado:', value: '$0,00' },
  ],
];

const CARD_COUNT = 8;

const topNavHeight = HelixSize.controlLg + HelixSpacing.paddingComponentSm;
const sideNavWidth = HelixSize.controlLg + HelixSpacing.paddingComponentLg;

export function GestionRecetas() {
  const [selectedCard, setSelectedCard] = useState(1);
  const [activeTab, setActiveTab] = useState('documentacion');

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: HelixColors.fillSurface,
        fontFamily: 'Figtree, sans-serif',
        textAlign: 'left',
      }}
    >
      {/* TopNav */}
      <header
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: HelixSpacing.paddingComponentLg,
          height: topNavHeight,
          paddingLeft: HelixSpacing.paddingComponentLg,
          paddingRight: HelixSpacing.paddingComponentLg,
          paddingTop: HelixSpacing.paddingComponentSm,
          paddingBottom: HelixSpacing.paddingComponentSm,
          backgroundColor: HelixColors.surfacePage,
          borderBottom: `${HelixBorderWidth.thin}px solid ${HelixColors.borderDefault}`,
          flexShrink: 0,
          boxSizing: 'border-box',
        }}
      >
        <HelixIconButton icon={List} aria-label="Menú" />

        {/* Inner bar */}
        <div style={{ display: 'flex', flex: 1, alignItems: 'center', gap: HelixSpacing.gapInlineSm, minWidth: 0 }}>
          {/* Left: logo + badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: HelixSpacing.paddingComponentMd, flexShrink: 0 }}>
            <img src={logoPraxys} alt="Praxys" style={{ height: 16, width: 'auto' }} />
            <HelixBadge label="Conexión Plus Farmacias" status="info" icon />
          </div>
          {/* Middle spacer */}
          <div style={{ width: 36, flexShrink: 0 }} />
          {/* Right — slots not implementados */}
          <div style={{ flex: 1 }} />
        </div>
      </header>

      {/* Body */}
      <div style={{ display: 'flex', flex: 1, minHeight: 0 }}>
        {/* SideNav */}
        <nav
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: 64,
            flexShrink: 0,
            paddingTop: HelixSpacing.paddingComponentLg,
            paddingBottom: HelixSpacing.paddingComponentLg,
            backgroundColor: HelixColors.surfacePage,
            borderRight: `${HelixBorderWidth.thin}px solid ${HelixColors.borderDefault}`,
            boxSizing: 'border-box',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <HelixSideNavItem icon={FileText} active />
            <HelixSideNavItem icon={LinkSimple} />
            <HelixSideNavItem icon={MagnifyingGlass} />
            <HelixSideNavItem icon={Printer} />
          </div>
          <HelixSideNavItem icon={Gear} />
        </nav>

        {/* Left panel — list */}
        <section
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            minWidth: 0,
            backgroundColor: HelixColors.fillSurface,
            borderRight: `${HelixBorderWidth.thin}px solid ${HelixColors.borderSubtle}`,
          }}
        >
          <HelixScrollArea style={{ flex: 1, minHeight: 0 }}>
            {/* Page header — scrolls with content */}
            <div
              style={{
                padding: HelixSpacing.paddingComponentLg,
                borderBottom: `${HelixBorderWidth.thin}px solid ${HelixColors.borderSubtle}`,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-end',
                  gap: HelixSpacing.paddingComponentLg,
                }}
              >
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h1 style={{ ...HelixTypography.headingLg, color: HelixColors.textPrimary, margin: 0 }}>
                    Gestión de Recetas
                  </h1>
                  <p style={{ ...HelixTypography.bodyLg, color: HelixColors.textTertiary, margin: 0 }}>
                    Gestiona, revisa y valida trámites
                  </p>
                </div>
                <HelixButton
                  variant="primary"
                  size="sm"
                  leftIcon={(p) => <Plus {...p} />}
                  style={{ boxShadow: HelixShadow.sm }}
                >
                  Nueva Solicitud
                </HelixButton>
              </div>
            </div>

            {/* Filters + cards */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: HelixSpacing.paddingComponentLg,
                padding: HelixSpacing.paddingComponentLg,
              }}
            >
              <div style={{ display: 'flex', gap: HelixSpacing.gapInlineSm, flexWrap: 'wrap' }}>
                <HelixSelectField label="Obra Social" chipLabel="IAPOS" dropdownIcon={CaretDown} />
                <HelixSelectField label="Vista" chipLabel="Todos los tramites (150 días)" dropdownIcon={CaretDown} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: HelixSpacing.gapInlineSm }}>
                {Array.from({ length: CARD_COUNT }, (_, i) => (
                  <HelixCardList
                    key={i}
                    selected={selectedCard === i}
                    onSelect={() => setSelectedCard(i)}
                  />
                ))}
              </div>
            </div>
          </HelixScrollArea>
        </section>

        {/* Right panel — detail */}
        <section
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            minWidth: 0,
            padding: HelixSpacing.paddingComponentLg,
            backgroundColor: HelixColors.surfacePage,
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
              minHeight: 0,
              backgroundColor: HelixColors.fillSurface,
              border: `${HelixBorderWidth.thin}px solid ${HelixColors.borderSubtle}`,
              borderRadius: HelixRadius.component2xl,
              overflow: 'hidden',
            }}
          >
            {/* Detail header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: HelixSpacing.paddingComponentLg,
                padding: HelixSpacing.paddingComponentMd,
                borderBottom: `${HelixBorderWidth.thin}px solid ${HelixColors.borderSubtle}`,
              }}
            >
              <div style={{ display: 'flex', flex: 1, alignItems: 'center', gap: HelixSpacing.gapInlineSm, minWidth: 0 }}>
                <span style={{ ...HelixTypography.headingSm, color: HelixColors.textPrimary }}>
                  Trámite 434435
                </span>
                <HelixBadge label="Autorizado" status="success" />
              </div>
              <HelixIconButton icon={DotsThreeVertical} aria-label="Más opciones" />
            </div>

            {/* Detalle */}
            <div
              style={{
                padding: HelixSpacing.paddingComponentMd,
                borderBottom: `${HelixBorderWidth.thin}px solid ${HelixColors.borderSubtle}`,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: HelixSpacing.gapInlineSm,
                  padding: HelixSpacing.paddingComponentMd,
                  backgroundColor: HelixColors.surfacePage,
                  border: `${HelixBorderWidth.thin}px solid ${HelixColors.overlayHover}`,
                  borderRadius: HelixRadius.componentLg,
                }}
              >
                <span style={{ ...HelixTypography.bodyStrongMd, color: HelixColors.textSecondary }}>
                  Detalle
                </span>

                {DETAIL_ROWS.map((row, rowIndex) => (
                  <div
                    key={rowIndex}
                    style={{
                      display: 'flex',
                      width: '100%',
                      flexWrap: row.length > 1 ? 'nowrap' : 'wrap',
                    }}
                  >
                    {row.map((field) => (
                      <HelixDetailField key={field.label} label={field.label} value={field.value} />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Tabs + content */}
            <HelixScrollArea style={{ flex: 1, minHeight: 0 }}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: HelixSpacing.paddingComponentMd,
                  padding: HelixSpacing.paddingComponentMd,
                }}
              >
                <HelixTabs tabs={TABS} activeTab={activeTab} onTabChange={setActiveTab} />

                {activeTab === 'documentacion' && (
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: HelixSpacing.gapInlineSm,
                      padding: HelixSpacing.paddingComponentLg,
                      backgroundColor: HelixColors.surfacePage,
                      border: `${HelixBorderWidth.thin}px solid ${HelixColors.borderSubtle}`,
                      borderRadius: HelixRadius.componentLg,
                    }}
                  >
                    <div style={{ display: 'flex', gap: HelixSpacing.gapInlineSm }}>
                      <HelixFileCard {...FILES[0]} />
                      <HelixFileCard {...FILES[1]} />
                    </div>
                    <div style={{ display: 'flex', gap: HelixSpacing.gapInlineSm }}>
                      <HelixFileCard {...FILES[2]} />
                      <HelixFileCard {...FILES[3]} />
                    </div>
                  </div>
                )}
              </div>
            </HelixScrollArea>
          </div>
        </section>
      </div>
      <style>{`.helix-no-scrollbar::-webkit-scrollbar { display: none; }`}</style>
    </div>
  );
}

export default GestionRecetas;
