## 🔒 EmailJS & Vercel Deployment Setup

### Local Development

1. **Copy the environment template:**
   ```bash
   cp .env.example .env
   ```

2. **Fill in your EmailJS credentials in `.env`:**
   - Go to [https://www.emailjs.com](https://www.emailjs.com)
   - Get your credentials from Dashboard → API Keys
   - Replace the placeholders in `.env` with your actual keys

3. **Test locally:**
   ```bash
   npm run dev
   ```

---

### Vercel Deployment

1. **Push your code to GitHub** (make sure `.gitignore` excludes `.env`)

2. **In Vercel Dashboard:**
   - Go to your project settings
   - Navigate to **Settings → Environment Variables**
   - Add these three variables (use the same keys from your `.env` file):
     - `VITE_EMAILJS_SERVICE_ID`
     - `VITE_EMAILJS_TEMPLATE_ID`
     - `VITE_EMAILJS_PUBLIC_KEY`

3. **Redeploy** your project or trigger a new deployment

---

### ⚠️ Security Note

- **Never commit `.env` files** - Already protected by `.gitignore`
- **Your public key is visible** - This is expected (it's meant to be public for emailjs)
- **Keep service ID & template ID private** - Don't share these
- If credentials are exposed, regenerate them in your EmailJS dashboard

---

### Troubleshooting

**Issue:** Email form not working locally
- ✅ Check that `.env` file exists and has correct values
- ✅ Restart dev server after changing `.env`
- ✅ Verify keys match your EmailJS dashboard

**Issue:** Email form not working on Vercel
- ✅ Verify environment variables are set in Vercel dashboard
- ✅ Trigger a new deployment to apply environment variables
- ✅ Check that you're not using old cached build

**Issue:** CORS errors
- ✅ In EmailJS dashboard, add your Vercel domain to **Access Control (CORS)**
- ✅ Add both `yourdomain.vercel.app` and your custom domain (if applicable)
