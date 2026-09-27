import { properties, type Property } from './properties';

export const livingQualities = [
  'Light',
  'Quiet',
  'Garden',
  'Water',
  'Skyline',
  'Material Character',
  'Indoor–Outdoor',
  'Work from Home',
  'Entertaining',
  'Retreat',
] as const;

export type LivingQuality = (typeof livingQualities)[number];

/**
 * Active KHOẢNG prototype inventory.
 * The inherited Galaxy/Aether fantasy fixture is intentionally excluded from
 * all active product experiences because it conflicts with the Design Contract's
 * real-architecture media direction.
 */
export const khoangProperties = properties.filter((property) => property.id !== 'galaxy-home-pinnacle');

export const qualityDescriptions: Record<LivingQuality, string> = {
  Light: 'Rooms shaped by daylight and open views.',
  Quiet: 'A calmer edge, buffered from the busiest urban rhythm.',
  Garden: 'Green space is part of the everyday route through the home.',
  Water: 'A river, coast, pool or water-facing outlook defines the setting.',
  Skyline: 'Vertical living with a long view across the city.',
  'Material Character': 'Texture, craft and material choices are part of the spatial identity.',
  'Indoor–Outdoor': 'Living spaces extend naturally to terraces, balconies or gardens.',
  'Work from Home': 'Enough separation and flexibility for focused work at home.',
  Entertaining: 'Social spaces can comfortably host people without taking over private rooms.',
  Retreat: 'The home feels removed from the pace around it, even when the city is close.',
};

const includesAny = (value: string, terms: string[]) => {
  const text = value.toLowerCase();
  return terms.some((term) => text.includes(term.toLowerCase()));
};

export function getLivingQualities(property: Property): LivingQuality[] {
  const source = `${property.title} ${property.location} ${property.amenities.join(' ')}`;
  const qualities: LivingQuality[] = [];
  const add = (quality: LivingQuality) => {
    if (!qualities.includes(quality)) qualities.push(quality);
  };

  if (property.type === 'Penthouse') {
    add('Skyline');
    add('Light');
    add('Entertaining');
  }

  if (property.type === 'Villa') {
    add('Garden');
    add('Indoor–Outdoor');
    add('Retreat');
  }

  if (property.type === 'Duplex') {
    add('Work from Home');
    add('Entertaining');
    add('Light');
  }

  if (property.type === 'Apartment') {
    add('Light');
    add('Work from Home');
    add('Material Character');
  }

  if (includesAny(source, ['sông', 'river', 'biển', 'vịnh', 'hồ bơi', 'water', 'coast'])) add('Water');
  if (includesAny(source, ['vườn', 'garden', 'koi', 'nhiệt đới'])) add('Garden');
  if (includesAny(source, ['panorama', '360', 'sky', 'tầng', 'view'])) add('Skyline');
  if (includesAny(source, ['marble', 'granite', 'gỗ', 'đá', 'indochine', 'material'])) add('Material Character');
  if (includesAny(source, ['ban công', 'terrace', 'sân', 'outdoor'])) add('Indoor–Outdoor');
  if (includesAny(source, ['office', 'study', 'phòng làm việc'])) add('Work from Home');

  if (qualities.length < 3) add(property.sqm >= 350 ? 'Retreat' : 'Quiet');
  if (qualities.length < 3) add('Material Character');

  return qualities.slice(0, 4);
}

export function getResidenceTitle(property: Property) {
  const location = property.area || property.district || property.city;
  return `${property.type} · ${location}`;
}

export function getResidenceDescription(property: Property) {
  const qualities = getLivingQualities(property);
  const first = qualities[0];
  const second = qualities[1];
  return `A prototype residence in ${property.location}, read through ${first.toLowerCase()} and ${second.toLowerCase()} rather than sales language. The current inventory is synthetic: use the spatial qualities, essential facts and imagery as decision cues, not as verified brokerage information.`;
}

export function matchReason(property: Property, selected: LivingQuality[]) {
  const matches = getLivingQualities(property).filter((quality) => selected.includes(quality));
  if (matches.length === 0) return 'A broader match from the current prototype inventory.';
  return `Matches ${matches.join(' · ')}.`;
}
