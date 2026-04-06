'use client';

import { useRef } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/image-gallery.css';
import type { GalleryItem, ImageGalleryRef } from 'react-image-gallery';

interface MyGalleryProps {
  images: string[];
}

export default function MyGallery({ images }: MyGalleryProps) {
  const galleryRef = useRef<ImageGalleryRef>(null);
  const galleryItems: GalleryItem[] = images.map((url) => ({
    original: url,
    thumbnail: url,
  }));

  return (
    <ImageGallery
      ref={galleryRef}
      items={galleryItems}
      showPlayButton={false}
      showFullscreenButton={false}
      showNav={false} 
      showThumbnails={true}
    />
  );
}
