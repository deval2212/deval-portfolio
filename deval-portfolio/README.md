# Deval Mistry — Portfolio

A clean, minimal React portfolio built with Vite. Live on Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/deval2212/deval-portfolio)

---

## 🚀 Quick Start (Local Development)

```bash
# 1. Clone the repository
git clone https://github.com/deval2212/deval-portfolio.git
cd deval-portfolio

# 2. Install dependencies
npm install

# 3. Copy environment variables
cp .env.example .env

# 4. Fill in your EmailJS credentials in .env
# Get them from https://www.emailjs.com/

# 5. Start development server
npm run dev
```

---

## 🔧 Configuration

### EmailJS Setup (Contact Form)

1. Go to [https://www.emailjs.com](https://www.emailjs.com) and create a free account
2. Create an **Email Service** (connect your Gmail)
3. Create an **Email Template**
4. Copy your credentials to `.env`:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

### Vercel Deployment

1. **Connect GitHub repository** to Vercel
2. **Add Environment Variables** in Vercel Dashboard:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
3. **Deploy** - Vercel will automatically build and deploy

---

## 📁 Project Structure

```
deval-portfolio/
├── public/           # Static assets
├── src/
│   ├── components/   # React components
│   ├── hooks/        # Custom React hooks
│   └── ...
├── .env.example      # Environment template
├── vercel.json       # Vercel configuration
└── package.json      # Dependencies
```

---

## 🛠️ Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool
- **EmailJS** - Contact form service
- **Vercel** - Hosting platform

---

## 📧 Contact

Feel free to reach out via the contact form or email: devalgajjar204@gmail.com
npm install

# 2. Set up environment variables
cp .env.example .env
# Then open .env and fill in your EmailJS keys (see EmailJS setup below)

# 3. Start dev server
npm run dev
# → Opens at http://localhost:5173
```

---

## 📸 Adding Your Profile Photo

1. Name your photo `profile.jpg`
2. Place it inside the `/public` folder
3. Open `src/components/Hero.jsx` and change:
   ```js
   const PHOTO_SRC = '/profile.jpg'
   ```
   to anything other than the placeholder path — it will automatically show your photo.

---

## 📄 Adding Your Resume

Place your resume PDF as `/public/resume.pdf` — the "Download CV" button in the Hero section will link to it automatically.

---

## 📧 EmailJS Setup (Contact Form)

1. Go to [https://www.emailjs.com](https://www.emailjs.com) and create a free account
2. Create an **Email Service** (connect your Gmail)
3. Create an **Email Template** — use these template variables:
   ```
   From: {{user_name}} <{{user_email}}>
   Subject: {{subject}}
   Message: {{message}}
   ```
4. Copy your **Service ID**, **Template ID**, and **Public Key**
5. Open your `.env` file and paste them:
   ```
   VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxxxxx
   ```

---

## ☁️ Deploy to Vercel (Step-by-Step)

### Step 1 — Push to GitHub

```bash
# In your project folder:
git init
git add .
git commit -m "Initial portfolio commit"

# Create a new repo on github.com (e.g. deval-portfolio)
# Then connect and push:
git remote add origin https://github.com/YOUR_USERNAME/deval-portfolio.git
git branch -M main
git push -u origin main
```

### Step 2 — Create a Vercel Account

1. Go to [https://vercel.com](https://vercel.com)
2. Click **Sign Up** → choose **Continue with GitHub**
3. Authorize Vercel to access your GitHub account

### Step 3 — Import Your Project

1. On your Vercel dashboard, click **Add New → Project**
2. Find `deval-portfolio` in the list and click **Import**
3. Vercel auto-detects Vite — leave all settings as default
4. **Important:** Add your environment variables:
   - Click **Environment Variables**
   - Add these three (same values as your `.env` file):
     ```
     VITE_EMAILJS_SERVICE_ID
     VITE_EMAILJS_TEMPLATE_ID
     VITE_EMAILJS_PUBLIC_KEY
     ```
5. Click **Deploy**

### Step 4 — Your Site is Live! 🎉

Vercel gives you a URL like `deval-portfolio.vercel.app`.

Every time you `git push` to `main`, Vercel redeploys automatically.

### Step 5 — (Optional) Custom Domain

1. Buy a domain (Namecheap, GoDaddy, Google Domains, etc.)
2. In Vercel → Project Settings → Domains → Add your domain
3. Follow the DNS instructions Vercel shows you
4. Done — your portfolio is live at `www.devalmistry.com` (or whatever you choose)

---

## 📁 Project Structure

```
deval-portfolio/
├── public/
│   ├── profile.jpg        ← Add your photo here
│   └── resume.pdf         ← Add your CV here
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── hooks/
│   │   └── useInView.js   ← Scroll reveal animation hook
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css          ← All styles + design tokens
├── index.html
├── package.json
├── vite.config.js
├── vercel.json            ← SPA routing fix for Vercel
├── .env.example           ← Copy to .env and fill in keys
└── README.md
```

---

## ✏️ Customizing Content

All portfolio content lives in the component files — no separate data files needed:

| What to change | Where |
|---|---|
| Hero tagline | `src/components/Hero.jsx` |
| About Me text | `src/components/About.jsx` |
| Skills list | `src/components/Skills.jsx` |
| Projects | `src/components/Projects.jsx` |
| Work experience | `src/components/Experience.jsx` |
| Education | `src/components/Education.jsx` |
| Social links | `src/components/Contact.jsx` & `Footer.jsx` |
| Colors / fonts | `src/index.css` (CSS variables at the top) |

---

## 🛠 Tech Stack

- **React 18** + **Vite 5**
- **EmailJS** — contact form without a backend
- **CSS Custom Properties** — design tokens
- **Intersection Observer** — scroll animations
- **Vercel** — deployment & hosting

---

Built with care by Deval Mistry.
