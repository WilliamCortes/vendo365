import { ImageResponse } from 'next/og';

export const alt = 'Vendo365 — Landing pages y tiendas online para emprendedores';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          backgroundColor: '#111827',
          backgroundImage: 'radial-gradient(circle at 85% 20%, rgba(43,76,126,0.5), transparent 55%)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 40 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              backgroundColor: '#2B4C7E',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 28,
              color: '#F2994A',
            }}
          >
            ⚡
          </div>
          <div style={{ fontSize: 36, fontWeight: 800, color: '#F1F3F5' }}>Vendo365</div>
        </div>
        <div
          style={{
            fontSize: 58,
            fontWeight: 800,
            color: '#F1F3F5',
            lineHeight: 1.15,
            maxWidth: 900,
            display: 'flex',
          }}
        >
          Tu negocio, visible en internet — bien hecho
        </div>
        <div style={{ fontSize: 26, color: '#9CA3AF', marginTop: 28, display: 'flex' }}>
          Landing pages y mini tiendas para emprendedores en Colombia
        </div>
      </div>
    ),
    { ...size }
  );
}
