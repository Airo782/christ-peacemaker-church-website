# Christ the Peacemaker Church of All Nations Website

A professional, modern website for **Christ the Peacemaker Church of All Nations – C&S Movement Church (City of Peace)** located in Jos, Nigeria, led by Prophet Akinjimi Johnson.

## 🌐 Live Website

**Production URL:** [synagoguejos-c3dgpr9m.manus.space](https://synagoguejos-c3dgpr9m.manus.space)

## 📋 Overview

This is a full-stack web application built with modern technologies to serve the church community with digital ministry tools, content management, and community engagement features.

### Key Features

✅ **Hero Section** - Eye-catching landing page with church branding  
✅ **Prophet's Profile** - Professional section featuring Prophet Akinjimi Johnson  
✅ **Sermon Archive** - Video and audio sermon library with search  
✅ **Event Calendar** - Upcoming church events and programs  
✅ **Prayer Requests** - Submit and manage prayer requests  
✅ **Testimonies** - Share and display faith testimonies  
✅ **Online Giving** - Secure donation portal (Fidelity Bank)  
✅ **Photo Gallery** - Church events and activities showcase  
✅ **Contact Page** - Location, contact info, and inquiry form  
✅ **Responsive Design** - Mobile-friendly on all devices  

## 🛠 Technology Stack

### Frontend
- **React 19** - Modern UI library
- **Tailwind CSS 4** - Utility-first CSS framework
- **TypeScript** - Type-safe development
- **Shadcn/UI** - High-quality UI components
- **Vite** - Fast build tool

### Backend
- **Express 4** - Node.js web framework
- **tRPC 11** - End-to-end type-safe APIs
- **Drizzle ORM** - TypeScript-first database ORM
- **MySQL/TiDB** - Relational database

### Authentication & Services
- **Manus OAuth** - Secure authentication
- **Google Maps API** - Location services
- **AWS S3** - File storage
- **LLM Integration** - AI capabilities

## 📁 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── pages/         # Page components
│   │   ├── components/    # Reusable UI components
│   │   ├── contexts/      # React contexts
│   │   ├── hooks/         # Custom hooks
│   │   └── lib/           # Utilities and libraries
│   └── public/            # Static assets
│
├── server/                # Backend Express application
│   ├── _core/            # Core framework files
│   ├── db.ts             # Database helpers
│   ├── routers.ts        # tRPC routes
│   └── storage.ts        # Storage helpers
│
├── drizzle/              # Database schema & migrations
├── shared/               # Shared constants and types
├── package.json          # Dependencies
├── tsconfig.json         # TypeScript config
├── vite.config.ts        # Vite config
└── README.md             # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 22.13.0 or higher
- pnpm 10.4.1 or higher
- MySQL/TiDB database

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/church-website.git
   cd church-website
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Set up database:**
   ```bash
   pnpm db:push
   ```

5. **Start development server:**
   ```bash
   pnpm dev
   ```

   The website will be available at `http://localhost:3000`

## 📖 Documentation

- **[DOCUMENTATION.md](./DOCUMENTATION.md)** - Complete project documentation
- **[DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)** - Deployment instructions and source code structure

## 🧪 Testing

```bash
# Run tests
pnpm test

# Run tests in watch mode
pnpm test --watch
```

## 🏗 Building for Production

```bash
# Type check
pnpm check

# Build
pnpm build

# Start production server
pnpm start
```

## 📝 Environment Variables

Create a `.env.local` file with the following:

```bash
DATABASE_URL=mysql://user:password@localhost:3306/church_db
JWT_SECRET=your-secret-key
VITE_APP_ID=your-app-id
OAUTH_SERVER_URL=https://api.manus.im
VITE_OAUTH_PORTAL_URL=https://portal.manus.im
OWNER_OPEN_ID=your-owner-id
OWNER_NAME=Prophet Akinjimi Johnson
BUILT_IN_FORGE_API_URL=https://api.manus.im
BUILT_IN_FORGE_API_KEY=your-api-key
VITE_FRONTEND_FORGE_API_KEY=your-frontend-key
VITE_FRONTEND_FORGE_API_URL=https://api.manus.im
```

## 🌍 Church Information

- **Church Name:** Christ the Peacemaker Church of All Nations – C&S Movement Church (City of Peace)
- **General Overseer:** Prophet Akinjimi Johnson
- **Location:** Jos, Nigeria
- **Address:** Off Mafeng Private School, The Street Opp. C.A.C Eto Baba, Jos, Plateau State, Nigeria
- **Phone:** +234 906 7722638 / +234 807 703 8101
- **Email:** christpeacemaker14@gmail.com
- **WhatsApp:** +234 807 703 8101
- **Facebook:** [Church Facebook Page](https://facebook.com/akinjimi.johnson.olajide)

## 🎨 Branding

- **Primary Color:** Teal (#0088CC)
- **Secondary Color:** Orange (#FF6600)
- **Logo:** Church logo (stored in S3)
- **Typography:** Serif headings, Sans-serif body

## 📱 Pages

1. **Home** (`/`) - Landing page with hero section and Prophet's profile
2. **About** (`/about`) - Church history and mission
3. **Sermons** (`/sermons`) - Sermon archive and search
4. **Events** (`/events`) - Event calendar
5. **Prayer** (`/prayer`) - Prayer request form
6. **Testimonies** (`/testimonies`) - Testimony submissions
7. **Give** (`/giving`) - Online donation portal
8. **Gallery** (`/gallery`) - Photo gallery
9. **Contact** (`/contact`) - Contact form and map

## 🔐 Security

- HTTPS/SSL encryption
- Secure authentication with OAuth
- Protected API endpoints
- Database query parameterization
- XSS protection
- CORS configuration

## 📊 Database Schema

The application includes the following tables:
- `users` - User accounts
- `sermons` - Sermon content
- `events` - Church events
- `prayerRequests` - Prayer submissions
- `testimonies` - Faith testimonies
- `galleryImages` - Photos
- `leadership` - Leadership profiles
- `donations` - Donation records

## 🚢 Deployment

### Manus Hosting (Recommended)
- One-click deployment
- Automatic SSL/TLS
- Global CDN
- Custom domain support

### Docker
```bash
docker build -t church-website .
docker run -p 3000:3000 church-website
```

### Traditional Hosting
See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed instructions.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## 📞 Support

For questions or issues:
- **Email:** christpeacemaker14@gmail.com
- **Phone:** +234 906 7722638
- **WhatsApp:** +234 807 703 8101

## 🙏 Acknowledgments

- Prophet Akinjimi Johnson - General Overseer
- Christ the Peacemaker Church community
- Development team

## 📅 Version History

- **v1.0.0** (May 2026) - Initial release
  - Hero section and navigation
  - Sermon archive
  - Event calendar
  - Prayer requests and testimonies
  - Online giving portal
  - Photo gallery
  - Contact page

---

**Last Updated:** May 9, 2026  
**Status:** Production Ready

For more information, see [DOCUMENTATION.md](./DOCUMENTATION.md) and [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md).
