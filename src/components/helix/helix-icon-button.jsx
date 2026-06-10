import { HelixSize, HelixSpacing } from '../../tokens/helixTokens';
import { HelixButton } from './helix-button';

/**
 * HelixIconButton — botón de ícono sin texto (subtle sm, sin focus ring)
 * Usarlo para acciones secundarias: hamburguer, dots, close, etc.
 * @param {component} icon — componente Phosphor (ej. DotsThreeVertical)
 * @param {string} aria-label — obligatorio para accesibilidad
 * @param {object} style — overrides opcionales (ej. backgroundColor: 'transparent')
 */
export function HelixIconButton({ icon: Icon, 'aria-label': ariaLabel, onClick, style }) {
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
        ...style,
      }}
      leftIcon={(p) => <Icon {...p} />}
    >
      <span style={{ width: 0, overflow: 'hidden' }} aria-hidden="true" />
    </HelixButton>
  );
}
