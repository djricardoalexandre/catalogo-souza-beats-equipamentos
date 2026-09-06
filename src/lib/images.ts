// Image resolver: returns official image if set, otherwise generates a placeholder

import { PRODUCT_IMAGES, GALLERY_IMAGES } from '@/data/images';
import { generatePlaceholder } from './placeholder';
import { getSubcategoryById } from '@/data/catalog';

export function getProductImage(productId: string, subcategoryId: string, index: number): string {
  const official = PRODUCT_IMAGES[productId];
  if (official) return official;

  const sub = getSubcategoryById(subcategoryId);
  const label = sub ? sub.name : 'Equipamento';
  return generatePlaceholder(subcategoryId, index, label);
}

export function getProductGallery(productId: string, subcategoryId: string, index: number): string[] {
  const gallery = GALLERY_IMAGES[productId];
  if (gallery && gallery.length > 0) return gallery;

  // Generate 3 placeholder variations for the gallery
  const main = getProductImage(productId, subcategoryId, index);
  const sub = getSubcategoryById(subcategoryId);
  const label = sub ? sub.name : 'Equipamento';
  const variation1 = generatePlaceholder(subcategoryId, index + 100, label);
  const variation2 = generatePlaceholder(subcategoryId, index + 200, label);

  return [main, variation1, variation2];
}
