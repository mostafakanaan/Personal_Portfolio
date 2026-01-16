# 🚀 Personal Portfolio

Welcome to my personal portfolio repository.  
This project showcases my work, skills, and experiments across **software engineering, UI/UX, and backend architecture**.

The portfolio is designed to be **simple, fast, and maintainable**, while still leaving room for experimentation and fun side projects.

---

## 🌍 Live Hosting (Yes, really)

This portfolio is **self-hosted on a Raspberry Pi 5**, running happily somewhere on my desk ☕🧠  
No big cloud VM, no fancy data center — just a small ARM machine doing honest work.

To make it accessible from anywhere **without exposing my home network**, it’s securely published using a **Cloudflare Tunnel**.

> Tiny computer. Big internet. Zero port forwarding.

---

## 🧱 Tech Stack

- **Frontend:** React + Vite  
- **Styling:** Sass (SCSS) compiled to modern CSS
- **Hosting:**  
  - Raspberry Pi 5 (local server)  
  - Cloudflare Tunnel for secure external access
- **CI/CD:** GitHub Actions (build & deploy ready)

---

## 🛠️ Local Development

```bash
# install dependencies
npm install

# run locally
npm run dev

# lint code
npm run lint

# build for production
npm run build

# preview production build
npm run preview
```

### Environment Variables

For local development with the chat feature:

1. Copy `.env.example` to `.env.local`
2. Add your configuration (if needed)
3. Never commit `.env.local` - it's already in `.gitignore`

See [SECURITY.md](./SECURITY.md) for security best practices.

---

## 🔒 Security

This project follows security best practices:

- ✅ Input sanitization for user inputs
- ✅ Secure external link handling (`rel="noreferrer"`)
- ✅ Environment variables properly managed
- ✅ Regular dependency updates
- ✅ Content Security Policy ready

See [SECURITY.md](./SECURITY.md) for detailed security information.

---

## ⚡ Performance Optimizations

- **Code Splitting**: Routes are lazy-loaded for faster initial load
- **Optimized Animations**: Using `useMemo` to prevent unnecessary recalculations
- **Efficient Rendering**: React components optimized with proper memo usage
- **Production Builds**: Minified and optimized with Vite

---

## 📦 Deployment Concept (High Level)

1. Portfolio is built via CI or manually  
2. Static files are served from the Raspberry Pi  
3. Cloudflare Tunnel exposes the service securely  
4. No open ports, no public IP headaches ✨  

---

## 🎯 Why This Setup?

- Full control over hosting  
- Great playground for DevOps & networking experiments  
- Perfect fit for personal projects and demos  
- Because hosting your own portfolio on a Pi is just… fun  

---

## 📫 Contact

You’ll find all relevant links (GitHub, LinkedIn, Email) directly on the portfolio.

---

### Thanks for stopping by ^_^