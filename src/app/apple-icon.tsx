import { ImageResponse } from 'next/og'

// Royal X Casino - Apple touch icon
export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 72,
          background: 'linear-gradient(135deg, #0ea5e9 0%, #06091F 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#FFA500',
          fontWeight: 'bold',
          borderRadius: '20%',
          border: '4px solid #FFA500',
        }}
      >
        RX
      </div>
    ),
    { ...size }
  )
}

