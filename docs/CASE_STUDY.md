# Forma — portfolio case study

## Problem

People should be able to resize a client image without uploading it to an unknown server or dismissing advertisements. Forma keeps that everyday workflow local and gives immediate visual feedback.

## Delivered workflow

- Batch JPEG, PNG and WebP conversion
- Centered square, landscape and wide crops
- Resize presets without upscaling
- Adjustable lossy quality and before/after comparison
- Individual downloads and batch ZIP export
- Processing progress, cancellation between files, and file validation

## Engineering decisions

- Native createImageBitmap and Canvas handle decoding, resizing and encoding. A custom codec is unnecessary for these common formats.
- The app never upscales images. Crops are centered and JPEG exports explicitly flatten transparency onto white.
- Object URLs are revoked when images are removed or results replaced. Processing runs one image at a time to avoid multiplying memory use.
- Originals are never overwritten. Changing export options invalidates previous results so stale downloads cannot be mistaken for new settings.

## Validation

Geometry tests cover aspect ratios, centered crops and no upscaling. Browser verification covers sample import, conversion, ZIP download, and desktop/mobile layouts.

The application was checked in Chromium at desktop and 390 px mobile widths. Screenshots document the implemented product, not a mockup. Real exported files were inspected during development.

## Tradeoffs

- 30 images per workspace; 20 MB and 40 megapixels per input.
- JPEG, PNG and WebP only. Animated images, HEIC, RAW and AVIF are outside this release.
- Quality depends on browser encoders. Metadata is not preserved, and a conversion does not always reduce file size.
- Cancellation takes effect between images. Files are held in memory and disappear when the tab closes.

## What this demonstrates

A complete product flow from input through validation to a useful output; responsive UI; clear failure states; local processing; reproducible builds; and independently deployable source. This is a portfolio project, not a commissioned client project. No adoption or business-impact metrics are claimed.
