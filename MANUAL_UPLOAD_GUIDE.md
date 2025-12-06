# Manual Upload Guide - Step-by-Step Instructions

## 📦 What You Have

A complete, production-ready React + TypeScript website for Dhabyan Commercial Brokers with:
- 6 fully functional pages
- DepositFundsComponent
- GitHub Actions deployment workflow
- Professional design matching approved specifications

---

## 🚀 Step-by-Step Upload Instructions

### Method 1: GitHub Web Interface (Easiest)

#### Step 1: Navigate to Repository
1. Go to: https://github.com/DBYN-DHABYAN/DBYN-MAIN
2. Sign in with account that has write access to DBYN-DHABYAN organization

#### Step 2: Delete Old Files
1. Click on each old file (`index.html`, `package.json` from demo)
2. Click trash icon (🗑️) to delete
3. Commit deletion: "chore: remove demo files"

#### Step 3: Upload New Files

**Upload these folders/files in order:**

**First - Configuration files (root level):**
- `package.json`
- `index.html`
- `vite.config.ts`
- `tsconfig.json`
- `tsconfig.node.json`
- `tailwind.config.js`
- `postcss.config.js`
- `.gitignore`
- `README.md`

**Second - GitHub Actions:**
- `.github/workflows/deploy.yml`

**Third - Source code:**
- Entire `src/` folder (with all subfolders)

#### Step 4: Upload Process
1. Click "Add file" → "Upload files"
2. Drag and drop files/folders
3. Write commit message: "feat: Complete React/TypeScript website implementation"
4. Click "Commit changes"

#### Step 5: Verify Upload
Check that you have this structure:
```
DBYN-MAIN/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── src/
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── Project33Page.tsx
│   │   ├── Project22Page.tsx
│   │   ├── OurModelPage.tsx
│   │   └── ContactPage.tsx
│   ├── components/
│   │   └── DepositFundsComponent.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.node.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

---

### Method 2: GitHub Desktop (Recommended for frequent updates)

#### Step 1: Install GitHub Desktop
- Download from: https://desktop.github.com/

#### Step 2: Clone Repository
1. Open GitHub Desktop
2. File → Clone Repository
3. Select: DBYN-DHABYAN/DBYN-MAIN
4. Choose local path

#### Step 3: Copy Files
1. Extract the deployment package to a temporary folder
2. Copy all files from `dbyn-website-clean/` to your cloned repository folder
3. Replace existing files

#### Step 4: Commit and Push
1. GitHub Desktop will show all changes
2. Write commit message: "feat: Complete React/TypeScript website implementation"
3. Click "Commit to main"
4. Click "Push origin"

---

### Method 3: Command Line (For developers)

```bash
# Clone the repository
git clone https://github.com/DBYN-DHABYAN/DBYN-MAIN.git
cd DBYN-MAIN

# Extract deployment package
tar -xzf /path/to/dbyn-deployment-package.tar.gz

# Copy files
cp -r dbyn-website-clean/* .

# Commit and push
git add .
git commit -m "feat: Complete React/TypeScript website implementation

- Implement full React + TypeScript + Vite + Tailwind CSS stack
- Add all 6 main pages (Home, About, Project 33, Project 22, Our Model, Contact)
- Create DepositFundsComponent for Project 22 client portal
- Configure GitHub Actions for automated deployment
- Professional design matching approved specifications"

git push origin main
```

---

## ⚙️ Post-Upload Configuration

### Step 1: Enable GitHub Pages

1. Go to: https://github.com/DBYN-DHABYAN/DBYN-MAIN/settings/pages
2. Under "Build and deployment":
   - **Source:** Select "GitHub Actions"
3. Click "Save"

### Step 2: Wait for Deployment

1. Go to: https://github.com/DBYN-DHABYAN/DBYN-MAIN/actions
2. You'll see "Deploy to GitHub Pages" workflow running
3. Wait ~2-3 minutes for completion (first build)
4. Green checkmark ✅ = successful deployment

### Step 3: Access Your Site

Your site will be live at:
```
https://dbyn-dhabyan.github.io/DBYN-MAIN/
```

### Step 4: Configure Custom Domain (Optional)

To use `dhabyan.ae`:

1. **Add CNAME file to repository:**
   - Create file named `CNAME` (no extension)
   - Content: `dhabyan.ae`
   - Commit to repository

2. **Update DNS records:**
   - Add CNAME record:
     ```
     Type: CNAME
     Name: www
     Value: dbyn-dhabyan.github.io
     ```
   - Add A records for apex domain:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```

3. **Verify in GitHub:**
   - Settings → Pages → Custom domain: `dhabyan.ae`
   - Click "Save"
   - Wait for DNS check (can take up to 24 hours)

---

## 🔧 Testing Before Going Live

### Local Testing

1. Install Node.js 18+ from: https://nodejs.org/
2. Navigate to repository folder
3. Run:
   ```bash
   npm install
   npm run dev
   ```
4. Open: http://localhost:5173
5. Test all pages and functionality

### Production Build Test

```bash
npm run build
npm run preview
```

---

## ⚠️ Important Pre-Launch Updates

### 1. Update Wallet Addresses
File: `src/components/DepositFundsComponent.tsx`

```typescript
// Line 11-12 - UPDATE THESE!
const USDT_ADDRESS = 'YOUR_REAL_USDT_ADDRESS_HERE';
const BTC_ADDRESS = 'YOUR_REAL_BTC_ADDRESS_HERE';
```

### 2. Verify Bank Details
File: `src/components/DepositFundsComponent.tsx`

Lines 95-105 - Confirm these are correct:
- IBAN: AE810860000009188997180
- SWIFT: WIOBAEADXXX
- Account Holder: DHABYAN COMMERCIAL BROKERS - L.L.C
- Bank: Wio Bank

### 3. Connect Contact Form
File: `src/pages/ContactPage.tsx`

Line 18 - Currently logs to console. Add API endpoint:
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  // Add your API endpoint here
  const response = await fetch('YOUR_API_ENDPOINT', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  // Handle response
};
```

---

## 📋 Deployment Checklist

- [ ] Upload all files to GitHub
- [ ] Enable GitHub Pages (Actions source)
- [ ] Wait for successful deployment
- [ ] Test site at GitHub Pages URL
- [ ] Update wallet addresses in code
- [ ] Verify bank details are correct
- [ ] Set up contact form backend
- [ ] Configure custom domain (if desired)
- [ ] Test all pages on mobile devices
- [ ] Test all forms and interactive elements
- [ ] Set up analytics (Google Analytics, etc.)
- [ ] Create backup of working site

---

## 🆘 Troubleshooting

### Deployment Fails
- Check Actions logs: https://github.com/DBYN-DHABYAN/DBYN-MAIN/actions
- Common issue: Missing files or incorrect file paths
- Solution: Ensure all files uploaded correctly

### Site Not Loading
- Wait 5 minutes after first deployment
- Clear browser cache (Ctrl+F5)
- Check GitHub Pages is enabled
- Verify deployment workflow completed successfully

### 404 Errors on Page Navigation
- This is normal for GitHub Pages with React Router
- Solution will be handled by the deployment workflow
- If persists, check `vite.config.ts` base URL setting

### Build Errors
- Check that all files uploaded correctly
- Verify `package.json` includes all dependencies
- Check Actions logs for specific error messages

---

## 📞 Support

**Questions?**
- Email: management@dhabyan.ae
- Check GitHub Actions logs for deployment status
- Review README.md for project documentation

---

## 🎉 You're Ready!

Once uploaded and deployed, your professional Dhabyan website will be live with:
- ✅ Modern, responsive design
- ✅ All 6 pages fully functional
- ✅ Deposit interface ready
- ✅ Automatic deployments on future updates
- ✅ Professional, institutional appearance

**Next:** Choose your upload method above and follow the steps!
