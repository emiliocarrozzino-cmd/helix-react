import {
  HelixBorderWidth,
  HelixColors,
  HelixRadius,
} from '../../tokens/helixTokens';

/**
 * HelixSideNavItem — ítem del rail de navegación lateral (40×40px)
 * @param {component} icon — componente Phosphor
 * @param {boolean} active — ítem activo (fill icon + fondo brand subtle)
 */
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
