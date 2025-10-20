# AR Preview Videos

This directory contains AR preview videos for furniture products.

## File Naming Convention
- `ar-preview-{productId}.mp4` - AR video for specific product
- `sample-ar-furniture.mp4` - Fallback sample AR video

## Video Requirements
- Format: MP4 (H.264)
- Resolution: 1920x1080 (Full HD) minimum
- Duration: 30-60 seconds
- File size: < 50MB per video
- Content: 360° AR view of furniture in home environment

## Sample Videos Needed
- ar-preview-1.mp4 (Meja Makan Kayu Jati)
- ar-preview-2.mp4 (Kursi Rotan Anyaman)
- ar-preview-3.mp4 (Lemari Pakaian Vintage)
- ar-preview-4.mp4 (Sofa Minimalis)
- ar-preview-5.mp4 (Rak Buku Kayu Mahoni)
- ar-preview-6.mp4 (Meja Kerja Industrial)
- ar-preview-7.mp4 (Tempat Tidur Kayu Solid)
- ar-preview-8.mp4 (Kursi Bar Tinggi)
- sample-ar-furniture.mp4 (Fallback video)

## Implementation Notes
- Videos are loaded dynamically based on product ID
- Fallback video is used if specific product video is not available
- Premium users get full access to AR preview functionality
- Non-premium users see upgrade prompt instead of video