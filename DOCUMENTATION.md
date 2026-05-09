# Christ the Peacemaker Church of All Nations – Website Documentation

## Project Overview

**Church Name:** Christ the Peacemaker Church of All Nations – C&S Movement Church (City of Peace)

**Location:** Jos, Nigeria

**General Overseer:** Prophet Akinjimi Johnson

**Website URL:** [Live Website](https://3000-itn4rrtr9zzcjdvhwtn01-4e45ba30.us1.manus.computer)

This is a professional, modern website built for a vibrant church community in Jos, Nigeria. The website serves as a digital hub for spiritual content, community engagement, and ministry support.

---

## Table of Contents

1. [Technology Stack](#technology-stack)
2. [Project Structure](#project-structure)
3. [Features](#features)
4. [Installation & Setup](#installation--setup)
5. [Database Schema](#database-schema)
6. [API Procedures (tRPC)](#api-procedures-trpc)
7. [Frontend Pages](#frontend-pages)
8. [Branding & Design](#branding--design)
9. [Deployment](#deployment)
10. [Contact Information](#contact-information)

---

## Technology Stack

### Frontend
- **React 19** - Modern UI library with latest features
- **Tailwind CSS 4** - Utility-first CSS framework for responsive design
- **TypeScript** - Type-safe JavaScript development
- **Wouter** - Lightweight client-side routing
- **Shadcn/UI** - High-quality, accessible UI components
- **Lucide React** - Beautiful icon library

### Backend
- **Express 4** - Lightweight Node.js web framework
- **tRPC 11** - End-to-end type-safe APIs
- **Drizzle ORM** - TypeScript-first ORM for database queries
- **MySQL/TiDB** - Relational database

### Authentication
- **Manus OAuth** - Secure authentication system
- **JWT** - Session token management

### Development Tools
- **Vite** - Fast build tool and dev server
- **Vitest** - Unit testing framework
- **TypeScript** - Static type checking
- **Prettier** - Code formatting

---

## Project Structure

```
project-root/
├── client/                          # Frontend React application
│   ├── public/                      # Static assets (favicon, robots.txt)
│   ├── src/
│   │   ├── pages/                   # Page components
│   │   │   ├── Home.tsx             # Landing page with hero section
│   │   │   ├── About.tsx            # Church history and mission
│   │   │   ├── Sermons.tsx          # Sermon archive and search
│   │   │   ├── Events.tsx           # Event calendar and details
│   │   │   ├── Prayer.tsx           # Prayer request form
│   │   │   ├── Testimonies.tsx      # Testimony submissions
│   │   │   ├── Giving.tsx           # Online donation portal
│   │   │   ├── Gallery.tsx          # Photo gallery
│   │   │   ├── Contact.tsx          # Contact form and map
│   │   │   └── NotFound.tsx         # 404 page
│   │   ├── components/              # Reusable UI components
│   │   │   ├── ui/                  # Shadcn/UI components
│   │   │   ├── DashboardLayout.tsx  # Admin dashboard layout
│   │   │   ├── Map.tsx              # Google Maps integration
│   │   │   └── ErrorBoundary.tsx    # Error handling
│   │   ├── contexts/                # React contexts
│   │   │   └── ThemeContext.tsx     # Theme management
│   │   ├── hooks/                   # Custom React hooks
│   │   │   └── useAuth.tsx          # Authentication hook
│   │   ├── lib/
│   │   │   └── trpc.ts              # tRPC client configuration
│   │   ├── App.tsx                  # Main app component and routing
│   │   ├── main.tsx                 # React entry point
│   │   └── index.css                # Global styles and theme
│   └── index.html                   # HTML template
│
├── server/                          # Backend Express application
│   ├── _core/                       # Core framework files
│   │   ├── index.ts                 # Server entry point
│   │   ├── context.ts               # tRPC context builder
│   │   ├── trpc.ts                  # tRPC router setup
│   │   ├── auth.ts                  # Authentication logic
│   │   ├── cookies.ts               # Cookie management
│   │   ├── oauth.ts                 # OAuth flow
│   │   ├── env.ts                   # Environment variables
│   │   ├── storageProxy.ts          # File storage proxy
│   │   ├── llm.ts                   # LLM integration
│   │   ├── imageGeneration.ts       # Image generation
│   │   ├── voiceTranscription.ts    # Audio transcription
│   │   ├── map.ts                   # Maps API integration
│   │   ├── notification.ts          # Notification system
│   │   └── systemRouter.ts          # System procedures
│   ├── db.ts                        # Database query helpers
│   ├── routers.ts                   # tRPC route definitions
│   ├── storage.ts                   # File storage helpers
│   ├── auth.logout.test.ts          # Authentication tests
│   └── features.test.ts             # Feature tests
│
├── drizzle/                         # Database schema
│   ├── schema.ts                    # Table definitions
│   └── migrations/                  # Database migrations
│
├── shared/                          # Shared constants and types
│   └── const.ts                     # Shared constants
│
├── storage/                         # S3 storage configuration
│
├── package.json                     # Dependencies and scripts
├── tsconfig.json                    # TypeScript configuration
├── tailwind.config.ts               # Tailwind CSS configuration
├── vite.config.ts                   # Vite configuration
└── README.md                        # Project README

```

---

## Features

### 1. **Hero Section**
- Eye-catching gradient background (Teal to Orange)
- Church name and mission statement
- Call-to-action buttons (Facebook Live, Learn More)
- Responsive design for all devices

### 2. **Prophet's Profile Section**
- Professional photo of Prophet Akinjimi Johnson
- Leadership information and mission highlights
- Key points about spiritual vision
- Contact and engagement buttons

### 3. **Sermon Archive**
- Video and audio sermon library
- Search functionality by date and topic
- Speaker information
- Sermon descriptions and metadata

### 4. **Event Calendar**
- Upcoming church events and programs
- Event details (date, time, location)
- Event flyers and images
- Calendar view integration

### 5. **Prayer Request Form**
- Secure prayer request submission
- Public/private option
- Contact information capture
- Admin dashboard for review

### 6. **Testimony Submissions**
- Share faith testimonies
- Approval workflow for testimonies
- Public display of approved testimonies
- Inspiring community stories

### 7. **Online Giving Portal**
- Multiple donation types (Tithes, Offerings, Partnership Seeds)
- Secure payment processing (Fidelity Bank)
- Donor information collection
- Donation tracking and receipts

### 8. **Photo Gallery**
- Church events and activities showcase
- Organized by category
- High-quality image display
- Responsive grid layout

### 9. **Contact Page**
- Church location and address
- Contact form for inquiries
- Google Maps integration
- Social media links
- WhatsApp and phone contact options

### 10. **Responsive Navigation**
- Top navigation bar with logo
- Mobile hamburger menu
- Footer with quick links
- Breadcrumb navigation
- Accessibility features (ARIA labels)

---

## Installation & Setup

### Prerequisites
- Node.js 22.13.0 or higher
- pnpm 10.4.1 or higher
- MySQL/TiDB database

### Local Development

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd copy-of-synagogue-church-of-all-nations---jos
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file with the following variables:
   ```
   DATABASE_URL=mysql://user:password@localhost:3306/church_db
   JWT_SECRET=your-secret-key
   VITE_APP_ID=your-app-id
   OAUTH_SERVER_URL=https://api.manus.im
   VITE_OAUTH_PORTAL_URL=https://portal.manus.im
   OWNER_OPEN_ID=your-owner-id
   OWNER_NAME=Your Name
   BUILT_IN_FORGE_API_URL=https://api.manus.im
   BUILT_IN_FORGE_API_KEY=your-api-key
   VITE_FRONTEND_FORGE_API_KEY=your-frontend-key
   VITE_FRONTEND_FORGE_API_URL=https://api.manus.im
   ```

4. **Run database migrations:**
   ```bash
   pnpm db:push
   ```

5. **Start the development server:**
   ```bash
   pnpm dev
   ```

   The website will be available at `http://localhost:3000`

6. **Run tests:**
   ```bash
   pnpm test
   ```

---

## Database Schema

### Users Table
```sql
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  openId VARCHAR(64) UNIQUE NOT NULL,
  name TEXT,
  email VARCHAR(320),
  loginMethod VARCHAR(64),
  role ENUM('user', 'admin') DEFAULT 'user',
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  lastSignedIn TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Sermons Table
```sql
CREATE TABLE sermons (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  speaker VARCHAR(255),
  topic VARCHAR(255),
  videoUrl VARCHAR(500),
  audioUrl VARCHAR(500),
  sermonDate TIMESTAMP,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### Events Table
```sql
CREATE TABLE events (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  eventDate TIMESTAMP NOT NULL,
  eventTime VARCHAR(50),
  location VARCHAR(255),
  imageUrl VARCHAR(500),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### Prayer Requests Table
```sql
CREATE TABLE prayerRequests (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(320),
  phone VARCHAR(20),
  request TEXT NOT NULL,
  isPublic BOOLEAN DEFAULT FALSE,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### Testimonies Table
```sql
CREATE TABLE testimonies (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(320),
  title VARCHAR(255),
  testimony TEXT NOT NULL,
  isApproved BOOLEAN DEFAULT FALSE,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### Gallery Images Table
```sql
CREATE TABLE galleryImages (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255),
  description TEXT,
  imageUrl VARCHAR(500) NOT NULL,
  category VARCHAR(100),
  order INT DEFAULT 0,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### Leadership Table
```sql
CREATE TABLE leadership (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  title VARCHAR(255) NOT NULL,
  bio TEXT,
  photoUrl VARCHAR(500),
  order INT DEFAULT 0,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### Donations Table
```sql
CREATE TABLE donations (
  id INT PRIMARY KEY AUTO_INCREMENT,
  donorName VARCHAR(255) NOT NULL,
  donorEmail VARCHAR(320),
  donorPhone VARCHAR(20),
  amount VARCHAR(50) NOT NULL,
  type ENUM('tithe', 'offering', 'partnership_seed', 'other') NOT NULL,
  message TEXT,
  status ENUM('pending', 'completed', 'failed') DEFAULT 'pending',
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

---

## API Procedures (tRPC)

### Authentication
- `auth.me` - Get current user information
- `auth.logout` - Logout current user

### Sermons
- `sermons.list()` - Get all sermons
- `sermons.get(id)` - Get sermon by ID
- `sermons.create(data)` - Create new sermon (admin only)

### Events
- `events.list()` - Get all events
- `events.get(id)` - Get event by ID
- `events.create(data)` - Create new event (admin only)

### Prayer Requests
- `prayerRequests.create(data)` - Submit prayer request
- `prayerRequests.list()` - Get all prayer requests (admin only)

### Testimonies
- `testimonies.create(data)` - Submit testimony
- `testimonies.listApproved()` - Get approved testimonies
- `testimonies.list()` - Get all testimonies (admin only)

### Gallery
- `gallery.list()` - Get all gallery images
- `gallery.create(data)` - Add gallery image (admin only)

### Leadership
- `leadership.list()` - Get leadership profiles
- `leadership.create(data)` - Add leadership profile (admin only)

### Donations
- `donations.create(data)` - Submit donation
- `donations.list()` - Get all donations (admin only)

---

## Frontend Pages

### Home Page (`/`)
The landing page featuring:
- Hero section with church name and mission
- Prophet Akinjimi Johnson's professional profile
- Quick action cards (Sermons, Events, Prayer, Give)
- Latest sermon showcase
- Upcoming event highlight
- Community engagement call-to-action

### About Us Page (`/about`)
Church history, mission statement, and leadership information

### Sermons Page (`/sermons`)
Complete sermon archive with search and filtering capabilities

### Events Page (`/events`)
Calendar view of upcoming church events and programs

### Prayer Requests Page (`/prayer`)
Form to submit prayer requests and view prayer topics

### Testimonies Page (`/testimonies`)
Share and view faith testimonies from community members

### Online Giving Page (`/giving`)
Secure donation portal with multiple giving options

### Gallery Page (`/gallery`)
Photo showcase of church events and activities

### Contact Page (`/contact`)
Church contact information, location map, and inquiry form

---

## Branding & Design

### Color Scheme
- **Primary Teal:** #0088CC
- **Secondary Orange:** #FF6600
- **White:** #FFFFFF
- **Dark Gray:** #1F2937
- **Light Gray:** #F3F4F6

### Typography
- **Headings:** Serif font (elegant, traditional)
- **Body Text:** Sans-serif font (modern, readable)
- **Font Family:** System fonts with fallbacks

### Design Principles
- **Responsive:** Mobile-first design approach
- **Accessible:** WCAG 2.1 AA compliance
- **Professional:** Clean, modern aesthetic
- **Faith-centered:** Spiritual imagery and messaging
- **Community-focused:** Warm, welcoming design

### Logo
Church logo is stored in S3 storage and displayed in the navigation bar

### Images
All images are stored in S3 storage for optimal performance and scalability

---

## Deployment

### Production Build
```bash
pnpm build
```

This creates optimized production bundles in the `dist/` directory.

### Deployment Options

#### Option 1: Manus Hosting (Recommended)
- Built-in hosting with custom domain support
- Automatic SSL certificates
- Global CDN for fast content delivery
- One-click deployment from the Manus dashboard

#### Option 2: Docker Deployment
```bash
docker build -t church-website .
docker run -p 3000:3000 church-website
```

#### Option 3: Traditional Hosting
- Deploy `dist/` folder to any static hosting service
- Configure backend API separately
- Set up environment variables on hosting platform

### Environment Variables for Production
Ensure all required environment variables are set on your hosting platform (see Installation & Setup section).

---

## Contact Information

### Church Details
- **Name:** Christ the Peacemaker Church of All Nations – C&S Movement Church (City of Peace)
- **Location:** Jos, Nigeria
- **General Overseer:** Prophet Akinjimi Johnson

### Contact Methods
- **WhatsApp:** +234 807 703 8101
- **Phone:** +234 906 7722638
- **Email:** christpeacemaker14@gmail.com
- **Facebook:** [Church Facebook Page](https://facebook.com/akinjimi.johnson.olajide)

### Bank Details (For Donations)
- **Bank:** Fidelity Bank
- **Account Details:** Available on the Online Giving page

---

## Maintenance & Support

### Regular Tasks
1. **Update Sermons:** Add new sermon content weekly
2. **Manage Events:** Keep event calendar current
3. **Review Submissions:** Approve prayer requests and testimonies
4. **Monitor Donations:** Track giving and generate reports
5. **Update Gallery:** Add photos from church activities

### Backup & Security
- Regular database backups
- SSL/TLS encryption for all data
- Secure authentication with OAuth
- Regular security updates

### Performance Optimization
- Image optimization and CDN delivery
- Database query optimization
- Caching strategies
- Regular performance monitoring

---

## Troubleshooting

### Common Issues

**Issue:** Database connection error
- **Solution:** Verify DATABASE_URL is correct and database is running

**Issue:** OAuth login not working
- **Solution:** Check VITE_APP_ID and OAUTH_SERVER_URL are correct

**Issue:** Images not loading
- **Solution:** Verify storage URLs are correct and S3 access is configured

**Issue:** Tests failing
- **Solution:** Run `pnpm test` to see detailed error messages

---

## License

This project is licensed under the MIT License. See LICENSE file for details.

---

## Contributing

To contribute to this project:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Write tests for new features
5. Submit a pull request

---

## Version History

- **v1.0.0** - Initial release with core features
  - Hero section and navigation
  - Sermon archive
  - Event calendar
  - Prayer requests and testimonies
  - Online giving portal
  - Photo gallery
  - Contact page

---

## Future Enhancements

- [ ] Live streaming integration
- [ ] Mobile app (iOS/Android)
- [ ] Advanced analytics dashboard
- [ ] Email newsletter system
- [ ] Member portal with login
- [ ] Volunteer management system
- [ ] Financial reporting dashboard
- [ ] Multi-language support

---

**Last Updated:** May 8, 2026

**Maintained By:** Christ the Peacemaker Church Development Team

For questions or support, please contact the church at the information provided above.
