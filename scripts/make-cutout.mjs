import sharp from 'sharp';

async function processImage() {
  const { data, info } = await sharp('public/pinnacle-cutout.jpg')
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  console.log(`Processing ${width}x${height} with ${channels} channels`);

  // Black background threshold
  const threshold = 18;
  const feather = 15;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * channels;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];
      const maxVal = Math.max(r, g, b);

      let alpha = 255;
      if (maxVal <= threshold) {
        alpha = 0;
      } else if (maxVal < threshold + feather) {
        alpha = Math.round(255 * ((maxVal - threshold) / feather));
      }

      // Softly feather bottom 15% to eliminate any potential cut line
      const bottomFadeStart = height * 0.78;
      if (y > bottomFadeStart && alpha > 0) {
        const bottomFactor = Math.max(0, 1 - (y - bottomFadeStart) / (height - bottomFadeStart));
        alpha = Math.round(alpha * bottomFactor);
      }

      data[idx + 3] = alpha;
    }
  }

  await sharp(data, {
    raw: {
      width,
      height,
      channels: 4,
    }
  })
  .png({ quality: 95 })
  .toFile('public/pinnacle-cutout.png');

  console.log('Saved public/pinnacle-cutout.png with bottom feathering!');
}

processImage().catch(console.error);
