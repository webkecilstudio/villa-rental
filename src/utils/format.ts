const DEMO_USD_TO_IDR = 16_000

export const formatPrice = (usd: number) => {
  const idr = usd * DEMO_USD_TO_IDR
  return `US$${usd.toLocaleString('en-US')} · Rp${idr.toLocaleString('id-ID')}`
}

export const formatGuests = (guests: string) => guests.replace('guests', 'tamu')
