# Setup de Cursor para este proyecto

## Conectar Figma MCP
1. Abrí Cursor
2. `Cmd+Shift+P` → "Open chat" → escribí `/add-plugin figma`
3. Click en "Add Plugin"
4. `Cmd+Shift+P` → "Cursor Settings" → "Tools & MCP"
5. En "Installed MCP Servers" → click "Connect" en Figma
6. Autenticarse con cuenta de Figma de Praxys

## Links de Figma para usar en Cursor
- **Foundations (tokens):** https://www.figma.com/design/[fileKey]/Helix-DS--Foundations
- **Components Core:** https://www.figma.com/design/G8rlEtgjt5PvWeB2W6Lg8P/Helix-DS--Components-Core

> Reemplazar `[fileKey]` con el key del archivo foundations.fig.
> El link de Components Core ya tiene el key correcto (G8rlEtgjt5PvWeB2W6Lg8P).

## Cómo generar un componente desde Figma en Cursor

1. Abrí Figma → navegá al frame del componente
2. Copiá el link del frame (`Right click → Copy link`)
3. En el chat de Cursor pegá el link y pedí:

```
Mirá este frame de Figma: [link]
Generá el componente React usando los tokens de helixTokens.js
y las reglas del .cursorrules. Sin hardcodear valores.
```

## Cómo regenerar helixTokens.js desde Figma

1. En Cursor chat:
```
Abrí el archivo foundations.fig de Figma: [link foundations.fig]
Exportá todas las variables (primitivos + semánticos) y regenerá
src/tokens/helixTokens.js siguiendo la estructura exacta del archivo actual.
```

## Componentes implementados
- `src/components/helix/helix-button.jsx` — HelixButton (variant × size × states)

## Pantallas de demo
- `src/screens/button-demo.jsx` — todas las variantes y tamaños de HelixButton
