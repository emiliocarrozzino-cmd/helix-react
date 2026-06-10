# Helix DS — Contexto React
Versión: 2.2 | Producto: ConexiónPlus Farmacias | Fecha: 2026-06-10

## Qué es Helix
Design system cross-producto de Praxys para el ecosistema farmacéutico.
Cubre 6+ productos. Figma: `components-core.fig` (componentes) + `foundations.fig` (tokens).
Tres capas de tokens: **Primitivos → Semánticos → Componente**.
Nunca usar primitivos en componentes. Siempre semánticos.

---

## Arquitectura del repo

```
helix-react/
├── src/
│   ├── assets/                  ← logos (logo-praxys.svg)
│   ├── components/helix/        ← todos los componentes
│   │   ├── index.js             ← barrel export
│   │   ├── helix-button.jsx
│   │   ├── helix-badge.jsx      ← HelixBadge + HelixBadgeStatus
│   │   ├── helix-card-list.jsx
│   │   ├── helix-chip.jsx
│   │   ├── helix-detail-field.jsx
│   │   ├── helix-file-card.jsx
│   │   ├── helix-icon-button.jsx
│   │   ├── helix-radio.jsx
│   │   ├── helix-scroll-area.jsx
│   │   ├── helix-select-field.jsx
│   │   ├── helix-side-nav.jsx
│   │   └── helix-tabs.jsx
│   ├── ilustration/             ← SVGs: pdf, doc, jpg, png, mp4, zip
│   ├── screens/                 ← pantallas (ej. gestion-recetas.jsx)
│   └── tokens/helixTokens.js   ← fuente de verdad
├── .cursorrules
└── docs/helix-context.md
```

---

## Tokens

### Colores semánticos clave

| Token | Valor | Uso |
|---|---|---|
| `actionPrimaryDefault` | #157BB5 | Botón primary, links activos |
| `actionPrimaryBorderGradient` | linear-gradient(270deg,#157BB5,#4297D0,#157BB5) | Borde default del botón primary |
| `actionDestructiveDefault` | #DC2837 | Botón destructive |
| `actionSecondaryDefault` | #3FA876 | Botón secondary (verde) |
| `actionSecondaryBorderGradient` | linear-gradient(270deg,#43A575,#77C49B,#43A575) | Borde default del botón secondary |
| `actionSubtleDefault` | #FFFFFF | Botón subtle (blanco) |
| `surfacePage` | #F4F5F6 | Fondo de pantalla |
| `fillSurface` | #FFFFFF | Superficie de cards |
| `surfaceRaised` | #FFFFFF | Elementos elevados |
| `borderSubtle` | #E5E8EA | Bordes de separación suaves |
| `borderDefault` | #CCD2D5 | Bordes de input y cards |
| `borderFocusPrimary` | #AAD7FA | Focus ring |
| `textPrimary` | #11171A | Texto principal |
| `textSecondary` | #353E43 | Texto secundario |
| `textTertiary` | #5C6B73 | Texto de soporte |
| `textPlaceholder` | #879196 | Placeholders y labels de campo |
| `fillNeutralSubtle` | #E5E8EA | Fondo de chips y tags |
| `fillSuccessSubtle` | #EAFAEC | Fondo badge success |
| `fillWarningSubtle` | #FFF3E5 | Fondo badge warning |
| `fillErrorSubtle` | #FFF2F0 | Fondo badge error |
| `fillInfoSubtle` | #ECF7FF | Fondo badge info |
| `fillNeutralDefault` | #AAB3B7 | Thumb del scrollbar |
| `overlayGlass` | rgba(255,255,255,0.102) | Track del scrollbar |

### Spacing

| Token | px | Uso típico |
|---|---|---|
| `paddingComponentXxs` | 2 | Gap entre chip y X |
| `paddingComponentXs` | 4 | Gap ícono-label en badges |
| `paddingComponentSm` | 8 | Padding interno compacto |
| `paddingComponentMd` | 12 | Padding horizontal de inputs |
| `paddingComponentLg` | 16 | Padding de secciones |
| `paddingComponentXl` | 24 | Padding de botones lg |
| `gapInlineXs` | 4 | Gap entre chips |
| `gapInlineSm` | 8 | Gap entre elementos inline |
| `gapInlineMd` | 12 | Gap medio |
| `gapInlineLg` | 24 | Gap grande |

### Radius

| Token | px |
|---|---|
| `componentSm` | 4 |
| `componentMd` | 8 |
| `componentLg` | 12 |
| `componentXl` | 16 |
| `component2xl` | 24 |
| `componentPill` | 9999 |

### Tamaños de control

| Token | px |
|---|---|
| `controlSm` | 32 |
| `controlMd` | 40 |
| `controlLg` | 48 |
| `iconXs` | 12 |
| `iconInline` | 16 |
| `iconControl` | 20 |
| `iconHeading` | 24 |

---

## Componentes

### HelixButton
**Archivo:** `helix-button.jsx`
**Variantes:** `primary` | `destructive` | `secondary` | `subtle`
**Tamaños:** `sm` (32px) | `md` (40px) | `lg` (48px)

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| variant | string | 'primary' | Variante visual |
| size | string | 'md' | Tamaño del botón |
| disabled | bool | false | Estado deshabilitado |
| loading | bool | false | Muestra spinner |
| leftIcon | function | null | Render prop: (p) => <Icon {...p} /> |
| rightIcon | function | null | Render prop: (p) => <Icon {...p} /> |
| noFocusRing | bool | false | Suprime el anillo de focus |
| style | object | — | Overrides de estilo |
| aria-label | string | — | Para botones ícono |

```jsx
<HelixButton variant="primary" size="md" leftIcon={(p) => <Plus {...p} />}>
  Nueva Solicitud
</HelixButton>
```

Técnica de borde gradiente (estado default):
```js
backgroundImage: `linear-gradient(${solidBg}, ${solidBg}), ${gradient}`
backgroundClip: 'padding-box, border-box'
backgroundOrigin: 'border-box'
border: '2px solid transparent'
```

---

### HelixBadge
**Archivo:** `helix-badge.jsx`
Etiqueta de estado. Altura fija 20px. Radio componentMd (8px).

| Prop | Tipo | Default |
|---|---|---|
| label | string | 'Label' |
| status | 'success'\|'warning'\|'error'\|'info' | 'success' |
| icon | bool | true |

```jsx
<HelixBadge label="Autorizado" status="success" />
<HelixBadge label="IAPOS" status="info" icon={false} />
```

---

### HelixBadgeStatus
**Archivo:** `helix-badge.jsx`
Indicador de estado de proceso. 20px. Fondo blanco, borde subtle.

| Prop | Tipo | Default |
|---|---|---|
| label | string | 'Label' |
| appearance | 'done'\|'progress' | 'done' |

```jsx
<HelixBadgeStatus label="Enviado" appearance="done" />
<HelixBadgeStatus label="Pendiente" appearance="progress" />
```

---

### HelixChip
**Archivo:** `helix-chip.jsx`
Chip de valor seleccionado. Altura 20px. Radio componentSm (4px). Fondo fillNeutralSubtle.

| Prop | Tipo | Default |
|---|---|---|
| label | string | — |
| onRemove | function | undefined — si se pasa, muestra X |

```jsx
<HelixChip label="IAPOS" />
<HelixChip label="IAPOS" onRemove={() => removeValue()} />
```

---

### HelixSelectField
**Archivo:** `helix-select-field.jsx`
Campo dropdown con label encima, chip(s) adentro y caret. Altura controlMd (40px).

| Prop | Tipo | Default |
|---|---|---|
| label | string | — |
| chipLabel | string | — |
| dropdownIcon | component | — |

```jsx
<HelixSelectField label="Obra Social" chipLabel="IAPOS" dropdownIcon={CaretDown} />
```

---

### HelixRadio
**Archivo:** `helix-radio.jsx`
Indicador de selección circular. 20×20px (hit area), círculo interno 16×16px.

```jsx
<HelixRadio selected={true} />
```

---

### HelixDetailField
**Archivo:** `helix-detail-field.jsx`
Par label/valor para paneles de detalle. Flex-1 con ellipsis en el valor.

```jsx
<HelixDetailField label="Paciente:" value="Nasarala, Luisina" />
```

---

### HelixFileCard
**Archivo:** `helix-file-card.jsx`
Tarjeta de documento con ilustración SVG (44px), título, descripción y botón de descarga.

| Prop | Tipo | Default |
|---|---|---|
| format | 'pdf'\|'doc'\|'jpg'\|'png'\|'mp4'\|'zip' | 'pdf' |
| title | string | 'Label' |
| description | string | 'Description' |

```jsx
<HelixFileCard title="Receta.pdf" description="2.4 MB" format="pdf" />
```

---

### HelixCardList
**Archivo:** `helix-card-list.jsx`
Tarjeta seleccionable de lista. Radio leading + badges de estado + 4 campos de metadata separados por dividers.

```jsx
<HelixCardList
  label="Trámite 434435"
  content1="Nasarala, Luisina"
  content2="IAPOS"
  content3="Dr. Tabacco"
  content4="12435345"
  selected={selectedCard === 0}
  onSelect={() => setSelectedCard(0)}
/>
```

---

### HelixTabs
**Archivo:** `helix-tabs.jsx`
Pill tab bar. Tab activa = HelixButton primary sm. Tabs inactivas = botón ghost.
Usar `alignSelf: 'flex-start'` si el padre es flex-column para evitar que se estire.

```jsx
const TABS = [
  { id: 'receta', label: 'Receta' },
  { id: 'documentacion', label: 'Documentación' },
];

<HelixTabs tabs={TABS} activeTab={activeTab} onTabChange={setActiveTab} />
```

---

### HelixIconButton
**Archivo:** `helix-icon-button.jsx`
Botón de ícono solo (subtle sm, sin focus ring, sin texto). Para acciones secundarias.
- Tamaño: 32×32px
- Sin borde visible por defecto (`border: 1px solid transparent`)
- Para fondo transparente en el nav: `style={{ backgroundColor: 'transparent' }}`

```jsx
<HelixIconButton icon={DotsThreeVertical} aria-label="Más opciones" />
<HelixIconButton icon={List} aria-label="Menú" style={{ backgroundColor: 'transparent' }} />
```

---

### HelixSideNavItem
**Archivo:** `helix-side-nav.jsx`
Ítem del rail lateral. 40×40px, radius componentLg (12px).
Activo: fondo fillBrandPrimarySubtle, borde selectionDefault, ícono fill.
Inactivo: fondo transparente, ícono regular, color iconSecondary.

```jsx
<HelixSideNavItem icon={FileText} active={true} />
<HelixSideNavItem icon={Gear} />
```

---

### HelixScrollArea
**Archivo:** `helix-scroll-area.jsx`
Contenedor con scrollbar custom Helix (track 8px glass, thumb gris pill).
Oculta el scrollbar nativo en todos los browsers.

**Requiere** en el JSX raíz de la pantalla:
```jsx
<style>{`.helix-no-scrollbar::-webkit-scrollbar { display: none; }`}</style>
```

```jsx
<HelixScrollArea style={{ flex: 1, minHeight: 0 }}>
  {/* contenido que scrollea */}
</HelixScrollArea>
```

---

## Patrón de pantalla completa

```jsx
export function MiPantalla() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      overflow: 'hidden',
      backgroundColor: HelixColors.fillSurface,
      fontFamily: 'Figtree, sans-serif',
    }}>
      {/* TopNav — 56px fijo */}
      <header style={{
        display: 'flex',
        alignItems: 'center',
        gap: HelixSpacing.paddingComponentLg,
        height: 56,
        paddingLeft: HelixSpacing.paddingComponentLg,
        paddingRight: HelixSpacing.paddingComponentLg,
        backgroundColor: HelixColors.surfacePage,
        borderBottom: `1px solid ${HelixColors.borderDefault}`,
        flexShrink: 0,
        boxSizing: 'border-box',
      }}>
        <HelixIconButton icon={List} aria-label="Menú" style={{ backgroundColor: 'transparent' }} />
        <HelixBadge label="Conexión Plus Farmacias" status="info" icon />
      </header>

      {/* Body */}
      <div style={{ display: 'flex', flex: 1, minHeight: 0 }}>
        {/* SideNav — 64px fijo */}
        <nav style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: 64,
          flexShrink: 0,
          paddingTop: HelixSpacing.paddingComponentLg,
          paddingBottom: HelixSpacing.paddingComponentLg,
          backgroundColor: HelixColors.surfacePage,
          borderRight: `1px solid ${HelixColors.borderDefault}`,
          boxSizing: 'border-box',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <HelixSideNavItem icon={FileText} active />
            <HelixSideNavItem icon={MagnifyingGlass} />
          </div>
          <HelixSideNavItem icon={Gear} />
        </nav>

        {/* Panel principal */}
        <section style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          minWidth: 0,
          backgroundColor: HelixColors.fillSurface,
        }}>
          <HelixScrollArea style={{ flex: 1, minHeight: 0 }}>
            {/* contenido */}
          </HelixScrollArea>
        </section>
      </div>

      <style>{`.helix-no-scrollbar::-webkit-scrollbar { display: none; }`}</style>
    </div>
  );
}
```
