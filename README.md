# Terry Carroll Photography

A professional photography portfolio website showcasing landscape and nature photography by Terry Carroll, a self-taught photographer based in Bedminster, Bristol.

## 🌐 Live Site

Built with Next.js 16 and deployed on Vercel.

## 📸 Portfolio Categories

- **Coast** (8 images) - Leading section, most impressive work
- **Landscape** (7 images) - Natural vistas and scenery
- **Wildlife** (8 images) - Creatures in their natural habitat
- **Birds** (18 images) - Ducks, birds in flight, and small birds
- **Insects** (12 images) - Macro photography of small wonders
- **River** (4 images) - Flowing waters and riverside scenes

**Total: 43 optimized images**

## 🎨 Design Choices

### Color Scheme
- **Base**: Clean white and subtle grey backgrounds
- **Accent Colors**:
  - Lavender (#9b87c7) - Used for odd sections
  - Grass Green (#7fb069) - Used for even sections
- **Philosophy**: Minimal color palette to let the photography shine

### Typography
- **Brand Font**: Bad Script (Google Fonts) - Handwritten/artistic font for headings and logo
- **Body Font**: Geist Sans - Clean, modern, readable
- **Reasoning**: Bad Script adds personality while maintaining professional elegance

### Layout
- **Gallery Style**: Masonry grid (Pinterest-style)
- **Columns**: 1 column (mobile), 2 columns (tablet/desktop)
- **Image Size**: Large thumbnails for maximum visual impact
- **Margins**: Balanced - wide enough for comfort, tight enough to showcase images

## 🛠 Technical Stack

### Framework
- **Next.js 16.0.8** (App Router)
- **React 19.2.1**
- **TypeScript 5**

### Styling
- **Tailwind CSS v4** - Utility-first CSS
- **Custom CSS variables** for theme colors
- **Responsive design** - Mobile-first approach

### Icons
- **Lucide React** - Menu, navigation arrows, close icons

### Image Optimization
- **WebP format** - All images converted from original 10MB files
- **Target size**: 200-500KB per image (optimized with sharp-cli)
- **Next.js Image component** - Automatic optimization and lazy loading
- **Quality**: 85% for gallery, 95% for lightbox

### Key Features
1. **Lightbox Modal** - Full-screen image viewing with keyboard navigation
2. **Smooth Scrolling** - Anchor links to gallery sections
3. **Responsive Masonry Grid** - Adapts to screen size
4. **Mobile Menu** - Hamburger menu for small screens
5. **Hover Effects** - Subtle image transforms and overlays
6. **Loading Animations** - Fade-in effects for smooth UX

## 📁 Project Structure

```
tc-photography/
├── app/
│   ├── components/
│   │   ├── NavBar.tsx           # Fixed navigation with mobile menu
│   │   ├── Hero.tsx             # Full-screen hero section
│   │   ├── AboutBlurb.tsx       # Photographer bio section
│   │   ├── MasonryGallery.tsx   # Main gallery component
│   │   └── Lightbox.tsx         # Full-screen image viewer
│   ├── layout.tsx               # Root layout with fonts & metadata
│   ├── page.tsx                 # Home page with all galleries
│   ├── globals.css              # Global styles & CSS variables
│   └── favicon.ico              # Site icon
├── public/
│   └── optimized/               # Optimized WebP images
│       ├── coast/
│       ├── landscape/
│       ├── wildlife/
│       ├── birds/
│       │   ├── ducks/
│       │   ├── flight/
│       │   └── small/
│       ├── insects/
│       └── river/
├── package.json
└── README.md
```

## 🚀 Development

### Setup
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### Build for Production
```bash
npm run build
npm start
```

## 📷 Image Management

### Current Images
All images are stored in `/public/optimized/` with actual filenames (not sequential numbers).

### Adding New Images
1. Place original images in a temporary folder
2. Optimize with sharp-cli:
   ```bash
   npx sharp-cli -i "originals/*.jpg" -o "public/optimized/category" -f webp --width 1200 --quality 85
   ```
3. Update image array in `app/page.tsx` with actual filenames
4. Test locally before deploying

### Image Optimization Guidelines
- **Format**: WebP (best compression for web)
- **Width**: 1200px (sufficient for 2-column display)
- **Quality**: 85% (sweet spot for photos)
- **Target size**: 200-500KB per image

## 🎯 Design Guidelines (Per Test-Project Standards)

### Text Colors
✅ **Explicit text colors everywhere** - Never rely on default colors
- Headings: `text-lavender` or `text-grass-green`
- Body: `text-gray-700` or `text-gray-600`
- Footer: `text-gray-500`, `text-gray-400`

### Font Usage
✅ **Bad Script** for creative/photography business
- Used for logo, gallery section titles
- Google Font, optimized by Next.js

### Responsive Breakpoints
- **Mobile**: `< 768px` - 1 column, hamburger menu
- **Tablet**: `768px - 1024px` - 2 columns
- **Desktop**: `> 1024px` - 2 columns, wider margins

### SEO
- ✅ Proper meta tags (title, description, keywords)
- ✅ Semantic HTML structure
- ✅ Alt text on all images
- ✅ Sitemap auto-generated by Next.js

## 📝 TODO / Future Enhancements

- [ ] Create custom favicon (camera icon recommended)
- [ ] Add contact form or email link
- [ ] Consider adding EXIF data display in lightbox
- [ ] Add social media links (Instagram, etc.)
- [ ] Consider adding a blog section
- [ ] Add download options for prints/full-res images

## 🔧 Performance Notes

### Vercel Free Tier Considerations
- **Current**: 43 images × 300KB avg = ~13MB total
- **Bandwidth**: 100GB/month limit (should be fine for most traffic)
- **Image Optimization**: 1,000 source images, 5,000 optimized serves/month
- **Monitoring**: Check Vercel dashboard for usage

### Recommendations
- Images are pre-optimized (WebP) to minimize Vercel's image optimization usage
- Lazy loading reduces initial page load
- Monitor bandwidth if traffic increases significantly

## 👤 Client Information

**Photographer**: Terry Carroll
**Location**: Bedminster, Bristol, UK
**Specialization**: Landscape & Nature Photography
**Experience**: Self-taught

## 📄 License

All photography © Terry Carroll. All rights reserved.

Website code by awattsdev.

---

**Last Updated**: December 2025
**Next.js Version**: 16.0.8
**Node Version**: 20+
