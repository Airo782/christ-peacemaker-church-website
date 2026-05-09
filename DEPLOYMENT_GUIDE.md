# Christ the Peacemaker Church Website - Deployment Guide

**Version:** 1.0.0  
**Last Updated:** May 8, 2026  
**Church:** Christ the Peacemaker Church of All Nations – C&S Movement Church (City of Peace)  
**Location:** Jos, Nigeria

---

## Table of Contents

1. [Pre-Deployment Checklist](#pre-deployment-checklist)
2. [Source Code Structure](#source-code-structure)
3. [Environment Setup](#environment-setup)
4. [Database Configuration](#database-configuration)
5. [Build & Compilation](#build--compilation)
6. [Deployment Options](#deployment-options)
7. [Post-Deployment Verification](#post-deployment-verification)
8. [Troubleshooting](#troubleshooting)
9. [Maintenance & Updates](#maintenance--updates)

---

## Pre-Deployment Checklist

Before deploying your church website, ensure the following:

- [ ] All environment variables are configured
- [ ] Database is created and migrations are applied
- [ ] SSL/TLS certificates are ready
- [ ] Domain name is registered and DNS is configured
- [ ] Storage (S3) credentials are set up
- [ ] OAuth credentials are configured
- [ ] All images and assets are uploaded to storage
- [ ] Tests pass successfully (`pnpm test`)
- [ ] Build completes without errors (`pnpm build`)
- [ ] Backup of database exists
- [ ] Team has access to deployment credentials

---

## Source Code Structure

### Complete Project Directory Tree

```
copy-of-synagogue-church-of-all-nations---jos/
│
├── client/                                    # Frontend React Application
│   ├── public/
│   │   ├── favicon.ico                       # Website favicon
│   │   ├── robots.txt                        # SEO robots configuration
│   │   └── manifest.json                     # PWA manifest
│   │
│   ├── src/
│   │   ├── pages/                            # Page Components
│   │   │   ├── Home.tsx                      # Landing page (Hero + Prophet section)
│   │   │   ├── About.tsx                     # Church history & mission
│   │   │   ├── Sermons.tsx                   # Sermon archive & search
│   │   │   ├── Events.tsx                    # Event calendar
│   │   │   ├── Prayer.tsx                    # Prayer request form
│   │   │   ├── Testimonies.tsx               # Testimony submissions
│   │   │   ├── Giving.tsx                    # Online donation portal
│   │   │   ├── Gallery.tsx                   # Photo gallery
│   │   │   ├── Contact.tsx                   # Contact form & map
│   │   │   └── NotFound.tsx                  # 404 error page
│   │   │
│   │   ├── components/                       # Reusable Components
│   │   │   ├── ui/                           # Shadcn/UI Components
│   │   │   │   ├── button.tsx
│   │   │   │   ├── card.tsx
│   │   │   │   ├── dialog.tsx
│   │   │   │   ├── form.tsx
│   │   │   │   ├── input.tsx
│   │   │   │   ├── label.tsx
│   │   │   │   ├── textarea.tsx
│   │   │   │   └── [other UI components]
│   │   │   │
│   │   │   ├── DashboardLayout.tsx           # Admin dashboard layout
│   │   │   ├── DashboardLayoutSkeleton.tsx   # Loading skeleton
│   │   │   ├── Map.tsx                       # Google Maps integration
│   │   │   ├── AIChatBox.tsx                 # AI chat interface
│   │   │   ├── ErrorBoundary.tsx             # Error handling
│   │   │   └── ManusDialog.tsx               # Dialog component
│   │   │
│   │   ├── contexts/                         # React Contexts
│   │   │   └── ThemeContext.tsx              # Theme management (light/dark)
│   │   │
│   │   ├── hooks/                            # Custom React Hooks
│   │   │   ├── useAuth.tsx                   # Authentication hook
│   │   │   └── [other custom hooks]
│   │   │
│   │   ├── lib/
│   │   │   └── trpc.ts                       # tRPC client configuration
│   │   │
│   │   ├── App.tsx                           # Main app component with routing
│   │   ├── main.tsx                          # React entry point
│   │   ├── index.css                         # Global styles & theme variables
│   │   └── vite-env.d.ts                     # Vite type definitions
│   │
│   └── index.html                            # HTML template
│
├── server/                                    # Backend Express Application
│   ├── _core/                                # Core Framework Files
│   │   ├── index.ts                          # Server entry point & Express setup
│   │   ├── context.ts                        # tRPC context builder
│   │   ├── trpc.ts                           # tRPC router & procedure setup
│   │   ├── auth.ts                           # Authentication logic
│   │   ├── cookies.ts                        # Session cookie management
│   │   ├── oauth.ts                          # OAuth flow implementation
│   │   ├── env.ts                            # Environment variables validation
│   │   ├── storageProxy.ts                   # File storage proxy (S3)
│   │   ├── llm.ts                            # LLM API integration
│   │   ├── imageGeneration.ts                # Image generation service
│   │   ├── voiceTranscription.ts             # Audio transcription service
│   │   ├── map.ts                            # Google Maps API integration
│   │   ├── notification.ts                   # Notification system
│   │   └── systemRouter.ts                   # System tRPC procedures
│   │
│   ├── db.ts                                 # Database query helpers
│   ├── routers.ts                            # tRPC route definitions
│   ├── storage.ts                            # S3 storage helpers
│   ├── auth.logout.test.ts                   # Authentication tests
│   └── features.test.ts                      # Feature tests
│
├── drizzle/                                   # Database Schema & Migrations
│   ├── schema.ts                             # Table definitions (Drizzle ORM)
│   └── migrations/                           # Generated SQL migrations
│       ├── 0000_*.sql                        # Initial schema migration
│       └── [other migrations]
│
├── shared/                                    # Shared Code
│   └── const.ts                              # Shared constants
│
├── storage/                                   # Storage Configuration
│   └── [S3 configuration files]
│
├── public/                                    # Static Assets (minimal)
│   └── [favicon, robots.txt only]
│
├── .manus-logs/                              # Application Logs
│   ├── devserver.log                         # Dev server logs
│   ├── browserConsole.log                    # Client-side console logs
│   ├── networkRequests.log                   # HTTP request logs
│   └── sessionReplay.log                     # User interaction logs
│
├── dist/                                      # Production Build Output
│   ├── index.html                            # Compiled HTML
│   ├── assets/                               # Compiled JS/CSS
│   └── [other compiled files]
│
├── node_modules/                             # Dependencies (not in git)
│
├── package.json                              # Project dependencies & scripts
├── pnpm-lock.yaml                            # Dependency lock file
├── tsconfig.json                             # TypeScript configuration
├── tailwind.config.ts                        # Tailwind CSS configuration
├── vite.config.ts                            # Vite build configuration
├── vitest.config.ts                          # Vitest configuration
├── drizzle.config.ts                         # Drizzle ORM configuration
│
├── DOCUMENTATION.md                          # Full project documentation
├── DEPLOYMENT_GUIDE.md                       # This deployment guide
├── README.md                                 # Project README
├── LICENSE                                   # MIT License
├── .gitignore                                # Git ignore rules
└── .env.example                              # Environment variables template
```

---

## Environment Setup

### 1. Required Environment Variables

Create a `.env.local` file in the project root with the following variables:

```bash
# Database Configuration
DATABASE_URL=mysql://username:password@localhost:3306/church_db

# Authentication & Security
JWT_SECRET=your-secure-random-secret-key-here
VITE_APP_ID=your-manus-app-id

# OAuth Configuration
OAUTH_SERVER_URL=https://api.manus.im
VITE_OAUTH_PORTAL_URL=https://portal.manus.im

# Owner Information
OWNER_OPEN_ID=your-owner-open-id
OWNER_NAME=Prophet Akinjimi Johnson

# API Configuration
BUILT_IN_FORGE_API_URL=https://api.manus.im
BUILT_IN_FORGE_API_KEY=your-forge-api-key
VITE_FRONTEND_FORGE_API_KEY=your-frontend-forge-key
VITE_FRONTEND_FORGE_API_URL=https://api.manus.im

# Analytics (Optional)
VITE_ANALYTICS_ENDPOINT=https://analytics.example.com
VITE_ANALYTICS_WEBSITE_ID=your-website-id

# Application Settings
VITE_APP_TITLE=Christ the Peacemaker Church
VITE_APP_LOGO=/manus-storage/church-logo_194e659e.jpg
```

### 2. Environment Variables by Deployment Platform

#### For Manus Hosting
- All variables are automatically injected
- No manual `.env` file needed
- Set secrets via Manus dashboard

#### For Docker/Traditional Hosting
- Create `.env` file with all variables
- Ensure sensitive values are not committed to git
- Use `.env.example` as template

---

## Database Configuration

### 1. Database Setup

```bash
# Create database
CREATE DATABASE church_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

# Create user (optional but recommended)
CREATE USER 'church_user'@'localhost' IDENTIFIED BY 'secure_password';
GRANT ALL PRIVILEGES ON church_db.* TO 'church_user'@'localhost';
FLUSH PRIVILEGES;
```

### 2. Apply Migrations

```bash
# Generate migrations from schema
pnpm drizzle-kit generate

# Apply migrations to database
pnpm drizzle-kit migrate

# Or use the combined command
pnpm db:push
```

### 3. Database Tables Created

The following tables are automatically created:

- `users` - User accounts and authentication
- `sermons` - Sermon content and metadata
- `events` - Church events and programs
- `prayerRequests` - Prayer request submissions
- `testimonies` - Faith testimonies
- `galleryImages` - Photo gallery images
- `leadership` - Church leadership profiles
- `donations` - Donation records

---

## Build & Compilation

### 1. Development Build

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Server runs on http://localhost:3000
```

### 2. Production Build

```bash
# Install dependencies (if not already done)
pnpm install

# Type check
pnpm check

# Run tests
pnpm test

# Build for production
pnpm build

# Output: dist/ directory with optimized bundles
```

### 3. Build Output Structure

```
dist/
├── index.html              # Main HTML file
├── assets/
│   ├── index-[hash].js    # Main JavaScript bundle
│   ├── index-[hash].css   # Main CSS bundle
│   └── [other assets]
└── [other compiled files]
```

---

## Deployment Options

### Option 1: Manus Hosting (Recommended)

**Advantages:**
- One-click deployment
- Automatic SSL/TLS
- Global CDN
- Built-in monitoring
- Custom domain support
- Automatic backups

**Steps:**
1. Ensure checkpoint is saved
2. Click "Publish" button in Manus dashboard
3. Configure custom domain (optional)
4. Set environment variables in Manus dashboard
5. Wait for deployment to complete

**Deployment URL:**
```
https://synagoguejos-c3dgpr9m.manus.space
```

### Option 2: Docker Deployment

**Dockerfile:**
```dockerfile
FROM node:22-alpine

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Build application
RUN pnpm build

# Expose port
EXPOSE 3000

# Start application
CMD ["pnpm", "start"]
```

**Build and Run:**
```bash
# Build Docker image
docker build -t church-website:latest .

# Run container
docker run -p 3000:3000 \
  -e DATABASE_URL="mysql://..." \
  -e JWT_SECRET="..." \
  -e VITE_APP_ID="..." \
  church-website:latest

# Or use Docker Compose
docker-compose up -d
```

### Option 3: Traditional Hosting (Vercel, Netlify, etc.)

**Steps:**
1. Build the project: `pnpm build`
2. Upload `dist/` folder to hosting service
3. Configure backend API separately
4. Set environment variables on hosting platform
5. Configure custom domain

**Hosting Services:**
- Vercel (recommended for Next.js, but works with Express)
- Netlify (static hosting only, requires separate backend)
- Railway
- Render
- DigitalOcean
- AWS (EC2, Elastic Beanstalk, etc.)

### Option 4: Self-Hosted (VPS/Dedicated Server)

**Requirements:**
- Node.js 22.13.0+
- MySQL/TiDB database
- Nginx/Apache reverse proxy
- SSL certificate (Let's Encrypt)
- PM2 or systemd for process management

**Setup Steps:**

```bash
# 1. SSH into server
ssh user@your-server.com

# 2. Install Node.js
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs

# 3. Install pnpm
npm install -g pnpm

# 4. Clone repository
git clone <your-repo-url>
cd copy-of-synagogue-church-of-all-nations---jos

# 5. Install dependencies
pnpm install

# 6. Set environment variables
nano .env

# 7. Build application
pnpm build

# 8. Install PM2
npm install -g pm2

# 9. Start application with PM2
pm2 start dist/index.js --name "church-website"
pm2 startup
pm2 save

# 10. Configure Nginx reverse proxy
sudo nano /etc/nginx/sites-available/church-website

# Add configuration:
# server {
#     listen 80;
#     server_name your-domain.com;
#     location / {
#         proxy_pass http://localhost:3000;
#         proxy_http_version 1.1;
#         proxy_set_header Upgrade $http_upgrade;
#         proxy_set_header Connection 'upgrade';
#         proxy_set_header Host $host;
#         proxy_cache_bypass $http_upgrade;
#     }
# }

# 11. Enable site
sudo ln -s /etc/nginx/sites-available/church-website /etc/nginx/sites-enabled/

# 12. Test and reload Nginx
sudo nginx -t
sudo systemctl reload nginx

# 13. Setup SSL with Let's Encrypt
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

---

## Post-Deployment Verification

### 1. Health Checks

```bash
# Check if server is running
curl http://localhost:3000

# Check API endpoint
curl http://localhost:3000/api/trpc/auth.me

# Check database connection
# (Add health check endpoint to server)
```

### 2. Functional Testing

- [ ] Homepage loads correctly
- [ ] Navigation works on all pages
- [ ] Images load properly (logo, Prophet photo)
- [ ] Forms submit successfully (prayer, testimony, donation)
- [ ] Database queries work (sermons, events, gallery)
- [ ] Authentication flow works
- [ ] Mobile responsive design works
- [ ] SSL/HTTPS works

### 3. Performance Checks

```bash
# Check page load time
curl -w "Time: %{time_total}s\n" http://your-domain.com

# Check bundle size
ls -lh dist/assets/

# Monitor server resources
top
free -h
df -h
```

### 4. Security Checks

- [ ] HTTPS enabled
- [ ] Security headers configured
- [ ] Database credentials not exposed
- [ ] API keys not in frontend code
- [ ] CORS configured correctly
- [ ] SQL injection prevention
- [ ] XSS protection enabled

---

## Troubleshooting

### Common Deployment Issues

#### 1. Database Connection Error

**Error:** `Error: connect ECONNREFUSED 127.0.0.1:3306`

**Solution:**
```bash
# Check MySQL is running
sudo systemctl status mysql

# Start MySQL if stopped
sudo systemctl start mysql

# Verify DATABASE_URL is correct
echo $DATABASE_URL

# Test connection
mysql -u username -p -h localhost church_db
```

#### 2. Port Already in Use

**Error:** `Error: listen EADDRINUSE :::3000`

**Solution:**
```bash
# Find process using port 3000
lsof -i :3000

# Kill process
kill -9 <PID>

# Or use different port
PORT=3001 pnpm start
```

#### 3. Images Not Loading

**Error:** Images show 404 or broken

**Solution:**
```bash
# Verify storage URLs are correct
grep -r "manus-storage" client/src

# Check storage proxy is working
curl http://localhost:3000/manus-storage/church-logo_194e659e.jpg

# Verify S3 credentials
echo $BUILT_IN_FORGE_API_KEY
```

#### 4. OAuth Not Working

**Error:** Login redirects to error page

**Solution:**
```bash
# Verify OAuth credentials
echo $VITE_APP_ID
echo $OAUTH_SERVER_URL

# Check callback URL matches
# Should be: https://your-domain.com/api/oauth/callback

# Verify JWT_SECRET is set
echo $JWT_SECRET
```

#### 5. Build Fails

**Error:** `pnpm build` fails with errors

**Solution:**
```bash
# Clear cache
rm -rf node_modules dist .next

# Reinstall dependencies
pnpm install --frozen-lockfile

# Check TypeScript errors
pnpm check

# Run tests
pnpm test

# Try build again
pnpm build
```

---

## Maintenance & Updates

### 1. Regular Maintenance Tasks

**Daily:**
- Monitor server logs
- Check disk space
- Monitor database size

**Weekly:**
- Review error logs
- Check performance metrics
- Update content (sermons, events)

**Monthly:**
- Update dependencies: `pnpm update`
- Review security updates
- Backup database
- Check SSL certificate expiration

**Quarterly:**
- Full security audit
- Performance optimization
- User feedback review
- Plan new features

### 2. Backup Strategy

```bash
# Backup database
mysqldump -u username -p church_db > backup_$(date +%Y%m%d).sql

# Backup entire application
tar -czf church-website-backup-$(date +%Y%m%d).tar.gz .

# Store backups securely
# - Cloud storage (AWS S3, Google Drive, etc.)
# - External hard drive
# - Multiple locations
```

### 3. Update Procedure

```bash
# 1. Create backup
mysqldump -u username -p church_db > backup.sql
tar -czf backup.tar.gz .

# 2. Update dependencies
pnpm update

# 3. Run tests
pnpm test

# 4. Build
pnpm build

# 5. Test in staging
# Deploy to staging environment first

# 6. Deploy to production
# Follow deployment steps above

# 7. Verify deployment
# Run health checks
```

### 4. Monitoring & Logging

**Key Metrics to Monitor:**
- Server uptime
- Response time
- Error rate
- Database query time
- Memory usage
- Disk usage
- Bandwidth usage

**Log Files to Review:**
- `.manus-logs/devserver.log` - Server logs
- `.manus-logs/browserConsole.log` - Client errors
- `.manus-logs/networkRequests.log` - API requests
- System logs (syslog, journalctl)

---

## Contact & Support

### Church Contact Information
- **Name:** Christ the Peacemaker Church of All Nations
- **Location:** Jos, Nigeria
- **Phone:** +234 906 7722638 / +234 807 703 8101
- **Email:** christpeacemaker14@gmail.com
- **General Overseer:** Prophet Akinjimi Johnson

### Technical Support
For deployment issues or technical questions:
1. Check this guide first
2. Review error logs
3. Contact your hosting provider
4. Consult the DOCUMENTATION.md file

---

## Deployment Checklist

Before going live:

- [ ] All environment variables configured
- [ ] Database created and migrations applied
- [ ] SSL certificate installed
- [ ] Domain DNS configured
- [ ] Storage (S3) credentials set up
- [ ] OAuth credentials configured
- [ ] All images uploaded to storage
- [ ] Tests pass: `pnpm test`
- [ ] Build successful: `pnpm build`
- [ ] Database backup created
- [ ] Monitoring configured
- [ ] Error logging enabled
- [ ] Team has access credentials
- [ ] Documentation updated
- [ ] Deployment procedure tested

---

**Version:** 1.0.0  
**Last Updated:** May 8, 2026  
**Status:** Ready for Deployment

For questions or updates, please refer to DOCUMENTATION.md or contact the development team.
