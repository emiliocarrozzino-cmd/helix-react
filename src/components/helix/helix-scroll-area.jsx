import { useCallback, useEffect, useRef, useState } from 'react';
import { HelixColors, HelixRadius } from '../../tokens/helixTokens';

/**
 * HelixScrollArea — contenedor con scrollbar custom Helix
 * Track: 8px, radio pill, fondo glass (rgba blanco 10%)
 * Thumb: fillNeutralDefault (#AAB3B7), radio pill, mín 24px
 *
 * Requiere en el root de la pantalla:
 *   <style>{`.helix-no-scrollbar::-webkit-scrollbar { display: none; }`}</style>
 *
 * @param {ReactNode} children
 * @param {object} style — se aplica al wrapper externo (ej. { flex: 1, minHeight: 0 })
 */
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
        style={{
          height: '100%',
          overflowY: 'scroll',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
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
