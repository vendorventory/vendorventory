Here is the raw Markdown code for your **README.md**. You can copy and paste the block below directly into your file.

```markdown
# Vendor Ventory 🛡️

**Africa's most trusted escrow-based e-commerce platform.**

Vendor Ventory bridges the trust gap between online vendors and buyers by holding funds securely until delivery is verified. This repository contains the full web application, including the Landing Page, Vendor Dashboard, and a comprehensive Super Admin Panel.

---

## 🚀 Features

### 🔐 Authentication & Security
* **Secure Auth:** Email/Password and Google OAuth via **NextAuth.js (v5)**.
* **Verification:** Robust Email verification and Password Reset flows.
* **Role-Based Access:** Distinct, protected portals for **Vendors** and **Super Admins**.

### 🏢 Vendor Dashboard
* **Analytics:** Real-time charts for Sales, Active Orders, and Pending Payouts.
* **Order Management:** Full lifecycle tracking (Pending, Shipped, Delivered).
* **Product Management:** Intuitive interface to add and manage listings.

### 👮 Super Admin Panel
* **Overview:** High-level metrics for platform health and total transaction volume.
* **Vendor Management:** Comprehensive vendor history and status control.
* **KYC Compliance:** Dedicated module to review and approve/reject vendor documents.
* **Dispute Resolution:** Assign agents to cases and track resolution rates effectively.
* **Transaction Monitoring:** Deep dive into financial breakdowns and escrow system logs.

---

## 🛠️ Tech Stack

* **Framework:** Next.js 15 (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **Animation:** Framer Motion
* **Database:** PostgreSQL (Supabase/Neon) or SQLite (Local Dev)
* **ORM:** Prisma
* **Auth:** NextAuth.js

---

## ⚡ Getting Started

### 1. Clone the repository
```bash
git clone [https://github.com/vendorventory/vendorventory.git](https://github.com/vendorventory/vendorventory.git)
cd vendorventory

```

### 2. Install dependencies

```bash
npm install

```

### 3. Configure Environment Variables

Create a `.env` file in the root directory.

**Local Development (SQLite):**

```env
DATABASE_URL="file:./dev.db"
AUTH_SECRET="run_npx_auth_secret_to_generate"
GOOGLE_CLIENT_ID="your_google_client_id"
GOOGLE_CLIENT_SECRET="your_google_client_secret"

```

**Production (PostgreSQL):**

```env
DATABASE_URL="postgres://user:pass@host:6543/db?pgbouncer=true"
DIRECT_URL="postgres://user:pass@host:5432/db"

```

### 4. Setup Database

```bash
# Generate Prisma Client
npx prisma generate

# Push schema to database
npx prisma db push

```

### 5. Run the Server

```bash
npm run dev

```

Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) to view the app.

---

## 📂 Project Structure

```text
/app
  /actions           # Server Actions (Auth & DB logic)
  /admin             # Super Admin Routes (Protected)
    /kyc             # Verification module
    /disputes        # Dispute Resolution
  /dashboard         # Vendor Portal
  /api               # API Routes
/prisma              # Database Schema
/components          # Reusable UI Components
/public              # Static Assets

```

---

## 🚢 Deployment

1. Push code to **GitHub**.
2. Import project into **Vercel**.
3. Add your **Environment Variables**.
4. Set the **Build Command** to:
`npx prisma generate && next build`

---

© 2026 VendorVentory Inc.

```
