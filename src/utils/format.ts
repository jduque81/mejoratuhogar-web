/**
 * format.ts — Display formatting utilities
 *
 * All formatting logic lives here. Components import these helpers
 * instead of duplicating formatting logic inline.
 */

/**
 * Formats a price in Spanish locale.
 * Sale:  150000 → "150.000 €"
 * Rent:  850    → "850 €/mes"
 */
export function formatPrice(price: number, isRent = false): string {
  const formatted = new Intl.NumberFormat('es-ES').format(price)
  return isRent ? `${formatted} €/mes` : `${formatted} €`
}

/**
 * Formats a built area in m².
 * 90 → "90 m²"
 */
export function formatArea(area: number): string {
  return `${area} m²`
}

/** Maps Sanity propertyType values to Spanish display labels */
export const PROPERTY_TYPE_LABELS: Record<string, string> = {
  apartment: 'Piso',
  house: 'Casa',
  penthouse: 'Ático',
  duplex: 'Dúplex',
  studio: 'Estudio',
  commercial: 'Local',
  land: 'Terreno',
  garage: 'Garaje',
}

/** Maps Sanity operationType values to Spanish display labels */
export const OPERATION_TYPE_LABELS: Record<string, string> = {
  sale: 'Venta',
  rent: 'Alquiler',
}

/** Maps Sanity status values to display config */
export const STATUS_CONFIG: Record<string, { label: string; color: string }> = {
  available: { label: 'Disponible', color: 'text-brand-green bg-green-50' },
  reserved: { label: 'Reservado', color: 'text-yellow-700 bg-yellow-50' },
  sold: { label: 'Vendido', color: 'text-red-700 bg-red-50' },
  rented: { label: 'Alquilado', color: 'text-red-700 bg-red-50' },
}
