import fs from 'fs';
import zlib from 'zlib';

function createPNG(size, bgHex, emblemColorHex) {
  const width = size;
  const height = size;
  
  // Parse hex colors
  const parseHex = (hex) => {
    const c = parseInt(hex.replace('#', ''), 16);
    return [(c >> 16) & 255, (c >> 8) & 255, c & 255];
  };
  
  const [br, bg, bb] = parseHex(bgHex);
  const [er, eg, eb] = parseHex(emblemColorHex);
  
  const rawData = Buffer.alloc(height * (1 + width * 4));
  let offset = 0;
  
  const center = size / 2;
  const radius = size * 0.44;
  
  for (let y = 0; y < height; y++) {
    rawData[offset++] = 0; // Filter type None
    for (let x = 0; x < width; x++) {
      const dx = x - center;
      const dy = y - center;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      // Rounded squircle / icon shape
      const isInCard = Math.abs(dx) < size * 0.42 && Math.abs(dy) < size * 0.42;
      
      // Simple stylized book / tree / star geometry
      // Center tree/star shape
      const inTrunk = Math.abs(dx) < size * 0.06 && dy > 0 && dy < size * 0.28;
      const inTier1 = dy >= -size * 0.28 && dy <= -size * 0.05 && Math.abs(dx) <= (dy + size * 0.28) * 0.8;
      const inTier2 = dy >= -size * 0.12 && dy <= size * 0.12 && Math.abs(dx) <= (dy + size * 0.12) * 0.9;
      const inTier3 = dy >= size * 0.04 && dy <= size * 0.24 && Math.abs(dx) <= (dy - size * 0.04) * 1.1;
      
      const inTree = inTrunk || inTier1 || inTier2 || inTier3;
      
      if (inTree) {
        rawData[offset++] = er;
        rawData[offset++] = eg;
        rawData[offset++] = eb;
        rawData[offset++] = 255;
      } else {
        rawData[offset++] = br;
        rawData[offset++] = bg;
        rawData[offset++] = bb;
        rawData[offset++] = 255;
      }
    }
  }
  
  const compressed = zlib.deflateSync(rawData);
  
  // PNG signature
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  
  // Helper for CRC32
  const crcTable = [];
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
    }
    crcTable[n] = c >>> 0;
  }
  
  function crc32(buf) {
    let crc = 0 ^ (-1);
    for (let i = 0; i < buf.length; i++) {
      crc = (crc >>> 8) ^ crcTable[(crc ^ buf[i]) & 0xff];
    }
    return (crc ^ (-1)) >>> 0;
  }
  
  function makeChunk(type, data) {
    const len = Buffer.alloc(4);
    len.writeUInt32BE(data.length, 0);
    const typeBuf = Buffer.from(type);
    const body = Buffer.concat([typeBuf, data]);
    const crc = Buffer.alloc(4);
    crc.writeUInt32BE(crc32(body), 0);
    return Buffer.concat([len, body, crc]);
  }
  
  // IHDR chunk
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // Bit depth
  ihdr[9] = 6; // Color type RGBA
  ihdr[10] = 0; // Compression
  ihdr[11] = 0; // Filter
  ihdr[12] = 0; // Interlace
  
  const ihdrChunk = makeChunk('IHDR', ihdr);
  const idatChunk = makeChunk('IDAT', compressed);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));
  
  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

if (!fs.existsSync('./public')) {
  fs.mkdirSync('./public');
}

fs.writeFileSync('./public/pwa-192x192.png', createPNG(192, '#312e81', '#38bdf8'));
fs.writeFileSync('./public/pwa-512x512.png', createPNG(512, '#312e81', '#38bdf8'));
fs.writeFileSync('./public/pwa-maskable-512x512.png', createPNG(512, '#1e1b4b', '#67e8f9'));
fs.writeFileSync('./public/apple-touch-icon.png', createPNG(180, '#312e81', '#38bdf8'));
fs.writeFileSync('./public/favicon.ico', createPNG(64, '#312e81', '#38bdf8'));

console.log('PWA icons created successfully');
