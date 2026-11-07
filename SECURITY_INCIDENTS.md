# SECURITY INCIDENTS — mejoratuhogar-web

Registro de incidentes de seguridad. **Nunca** escribir aquí valores de credenciales.

---

## INC-2026-001 — Tokens de Netlify y Sanity publicados en el repositorio

| Campo | Valor |
|---|---|
| Detectado | 2026-11-07 (revisión de accesos) |
| Expuesto desde | 2026-03-31 (commit `0bbe223`, repo **público**) |
| Archivo | `.claude/settings.local.json` |
| Estado | Mitigado — todos los tokens conocidos revocados/caducados; quedan comprobaciones en "Pendiente" |

### Qué pasó

`.claude/settings.local.json` (permisos locales de Claude Code) se añadió al repo en `44452c1` (2026-03-21, sin secretos)
y en `0bbe223` (2026-03-31) se actualizó con reglas de permiso que incluían comandos `curl` con tokens en texto plano:

- 1 token personal de **Netlify** (acceso a toda la cuenta).
- 1 token de API de **Sanity** (proyecto `d95eiezj`).

Causa raíz: el archivo `*.local.json` no estaba en `.gitignore`, y Claude Code guarda en él los comandos aprobados literalmente, tokens incluidos.

### Evidencia (sin valores)

- Los IDs de deploy del archivo indican que el token de Netlify se usó el 2026-03-27 (17:17–18:09 UTC).
- Escaneo del árbol y de todo el historial (2026-11-07): no hay otras credenciales.
  Coincidencias en `package-lock.json` = hashes `sha512` de integridad (falsos positivos).
  El project ID de Sanity y el site ID de Netlify son identificadores públicos, no secretos.

### Acciones realizadas

1. 2026-11-07 — Token de Sanity `claude-setup` eliminado por el propietario.
2. 2026-11-07 — Tokens de Netlify revisados: `claude` (caducado 2026-04-03) y `render-blobs` (activo, sin caducidad).
   Por nombre y fechas, el filtrado es **probablemente** `claude`, pero **no está confirmado**.
3. 2026-11-07 — `.claude/settings.local.json` eliminado del seguimiento de Git y añadido a `.gitignore`
   (rama `claude/mejoratuhogar-access-check-3wt0ka`, integrado mediante PR #1).
4. 2026-11-07 — Token de Netlify `render-blobs` eliminado por el propietario. Con esto, ambos tokens candidatos de Netlify están inutilizados.
5. 2026-11-07 — Detectado un segundo sitio de Netlify (`dynamic-phoenix-50f8ce`, nombre autogenerado, contenido desfasado) conectado a este repo. Desconectado de GitHub por el propietario ("Not linked").

### Pendiente

- [ ] Comprobar que no queda ningún otro token en sanity.io/manage → API → Tokens.
- [ ] Los tokens **siguen en el historial público** (`0bbe223`). Tras revocarlos son inútiles; reescribir el historial es opcional y no se ha hecho.
- [ ] Revisar el log de deploys de Netlify y el historial de documentos de Sanity entre 2026-03-31 y la revocación en busca de actividad no reconocida.
- [ ] Decidir si se borra el sitio `dynamic-phoenix-50f8ce` (antes, comprobar si tiene envíos en Forms o dominio asociado).
- [ ] Equipos locales (Mac): antes de hacer pull de `main`, conservar los permisos útiles de `.claude/settings.local.json` **sin** las reglas con tokens; el pull borra o bloquea ese archivo.

### Prevención

- Nunca pegar tokens en comandos que Claude Code pueda guardar como permiso; usar variables de entorno o credenciales del entorno.
- `.claude/settings.local.json` queda ignorado por Git.
