import {
  HelixColors,
  HelixRadius,
  HelixSpacing,
  HelixTypography,
} from '../../tokens/helixTokens';
import { HelixButton } from './helix-button';

/**
 * HelixTabs — tab bar pill style
 * Tab activa: HelixButton primary sm. Inactiva: botón ghost.
 * @param {{ id: string, label: string }[]} tabs
 * @param {string} activeTab — id del tab activo
 * @param {function} onTabChange — (id) => void
 */
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
