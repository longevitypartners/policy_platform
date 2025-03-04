# Project Kish

## Project info

This application is an open source project that allows users to filter and search policies and provisions.

## Setup Instructions

### Prerequisites

- Node.js 18.x or higher (LTS recommended) - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- npm 9.x or higher
- Git
- A Supabase account
- A Vercel account (recommended for deployment)

### Local Development Setup

1. **Clone the repository**
   ```sh
   git clone <YOUR_GIT_URL>
   cd <YOUR_PROJECT_NAME>
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Set up Supabase**
   1. Create a new Supabase project at [https://supabase.com](https://supabase.com)
   2. Enable Auth in your Supabase project:
      - Go to Authentication > Providers
      - Enable Email provider
      - For development, you may want to disable "Confirm Email"
   3. Create the required database tables using the SQL commands provided in the Database Setup section below
   4. Enable Row Level Security (RLS) using the provided SQL commands

4. **Set up environment variables**
   1. Copy the `.env.example` file to `.env`:
      ```sh
      cp .env.example .env
      ```
   2. Fill in your Supabase credentials:
      - Go to your Supabase project dashboard
      - Click on Settings → API
      - Copy "Project URL" to VITE_SUPABASE_URL
      - Copy "anon public" key to VITE_SUPABASE_ANON_KEY

5. **Start the development server**
   ```sh
   npm run dev
   ```
   The application will be available at `http://localhost:8080`

## Technologies

This project is built with modern web technologies:

- Vite - Build tool and development server
- TypeScript - Type-safe JavaScript
- React - UI framework
- shadcn-ui - UI component library
- Tailwind CSS - Utility-first CSS framework
- Supabase - Backend and authentication

## How can I edit this code?

There are several ways of editing your application.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with .

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

### 📄 FAQ

#### ❓ How do I deploy this project?
You can deploy this project using **Vercel** (recommended for React / Next.js + Supabase).

#### 🚀 Deploying on Vercel
1. Install Vercel CLI:  
   ```sh
   npm install -g vercel
   ```  
2. Login to Vercel:  
   ```sh
   vercel login
   ```  
3. Deploy the project:  
   ```sh
   vercel
   ```  
4. Set your **Supabase environment variables** in Vercel's settings.
5. Your app will be live at `https://your-project.vercel.app`.

#### 📦 Alternative Deployment Options
- **Netlify** (for static Next.js builds, but requires workarounds for SSR).
- **Cloudflare Pages** (great for static deployments, but SSR support is still evolving).
- **AWS Amplify** (see below).

---

### 🚀 Deploying on AWS Amplify (For Later Migration)

#### 1️⃣ Set Up AWS Amplify
1. Go to **AWS Amplify Console**: [https://aws.amazon.com/amplify/](https://aws.amazon.com/amplify/)
2. Click **"Get Started"** and connect your GitHub repo.
3. Select **Next.js** as the framework.

#### 2️⃣ Configure Build Settings
In **Amplify Console → Build Settings**, set up a `amplify.yml` file:
```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm install
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

#### 3️⃣ Add Environment Variables
In the **Amplify Console → Environment Variables**, add your **Supabase credentials**:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

#### 4️⃣ Enable SSR Support (Important Change)
By default, Amplify only supports **static builds**. To enable **SSR**, you need to:
- Install `@aws-amplify/nextjs`:
  ```sh
  npm install @aws-amplify/nextjs
  ```  
- Update your `next.config.js`:
  ```js
  module.exports = {
    experimental: {
      serverComponents: true,
    },
  };
  ```

#### 5️⃣ Deploy
1. Commit & push changes to GitHub.
2. Amplify will automatically detect changes and deploy your site.

---

### 🔄 Changes Required for AWS Amplify Deployment
| Feature | Change Required? |
|---------|----------------|
| **SSR / ISR** | ✅ Enable `@aws-amplify/nextjs` and update `next.config.js`. |
| **Supabase Auth / API** | ✅ Add Supabase credentials to AWS Amplify environment variables. |
| **Automatic Deployments** | ✅ Connect repo to Amplify for auto-builds. |

---

### 💡 Summary
- **Use Vercel for now** (best for Next.js + Supabase).
- **To migrate to AWS Amplify**:
  - Update `next.config.js` for SSR.
  - Configure `amplify.yml` for correct Next.js build.
  - Add environment variables.

🚀 **Now you're ready to deploy!**

## Database Setup with Supabase

To set up the database for this application:

1. Create a new Supabase project at [https://supabase.com](https://supabase.com)

2. Enable Auth in your Supabase project:
   - Go to Authentication > Providers in your Supabase dashboard
   - Enable Email provider
   - For development, you may want to disable "Confirm Email" to make testing easier
   - Set any password strength requirements you prefer

3. Create the following tables in your Supabase database:

### Policies Table
```sql
CREATE TABLE policies (
  policy_id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  category TEXT,
  country TEXT,
  risk_rating INTEGER,
  entry_into_force TEXT,
  last_amended TEXT,
  implications TEXT,
  url_implications TEXT,
  url_regulation TEXT,
  policy_type TEXT,
  provision_ids INTEGER[],
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);
```

### Provisions Table
```sql
CREATE TABLE provisions (
  provision_id SERIAL PRIMARY KEY,
  policy_id INTEGER NOT NULL,
  requirement TEXT,
  description TEXT,
  minimum_requirement TEXT,
  best_practice TEXT,
  subject_to_obligation TEXT,
  asset_class TEXT,
  building_status TEXT,
  country TEXT,
  year_of_enforcement TEXT,
  year_in_force TEXT,
  policy TEXT,
  topic TEXT,
  url_minimum_standards TEXT,
  url_best_practice TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);
```

### Users Table
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY,
  username VARCHAR NOT NULL,
  companyname VARCHAR,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);
```

### User Notification Settings Table
```sql
CREATE TABLE user_notification_settings (
  user_id UUID PRIMARY KEY,
  email_notifications BOOLEAN NOT NULL DEFAULT true,
  policy_digest TEXT NOT NULL DEFAULT 'weekly',
  risk_alerts BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);
```

4. Set up environment variables:
   Create a `.env` file in your project root with these variables:
   ```
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```
   
   To get these values:
   - Go to your Supabase project dashboard
   - Click on the "Settings" icon (gear) in the sidebar
   - Go to "API" in the settings menu
   - Your project URL is listed under "Project URL"
   - Your anon key is listed under "Project API keys" > "anon public"
   - Copy these values into your `.env` file

5. Set up Row Level Security (RLS):
   - Go to your Supabase SQL editor
   - Enable RLS on all tables by running:
   ```sql
   ALTER TABLE policies ENABLE ROW LEVEL SECURITY;
   ALTER TABLE provisions ENABLE ROW LEVEL SECURITY;
   ALTER TABLE users ENABLE ROW LEVEL SECURITY;
   ALTER TABLE user_notification_settings ENABLE ROW LEVEL SECURITY;
   ```
   - Add policies to allow authenticated users to read data:
   ```sql
   CREATE POLICY "Allow authenticated read access" ON policies
   FOR SELECT TO authenticated USING (true);

   CREATE POLICY "Allow authenticated read access" ON provisions
   FOR SELECT TO authenticated USING (true);

   CREATE POLICY "Allow users to manage their own data" ON users
   FOR ALL TO authenticated USING (auth.uid() = id);

   CREATE POLICY "Allow users to manage their own settings" ON user_notification_settings
   FOR ALL TO authenticated USING (auth.uid() = user_id);
   ```

6. (Optional) Import sample data:
   You can find sample data for the tables in the `sample_data` directory (if provided).

7. Deployment Environment Variables:
   When deploying (e.g., to Vercel), make sure to add these environment variables in your deployment platform:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`

## I want to use a custom domain - is that possible?

Yes, you can set up your custom domain on the deployment platform that you choose. 
E.g. Vercel, AWS Amplify, Cloudflare, Netlify etc.

## Deployment

### Recommended: Vercel Deployment

1. **Prepare for deployment**
   - Ensure your code is pushed to a GitHub repository
   - Have your Supabase project ready

2. **Deploy to Vercel**
   1. Go to [Vercel](https://vercel.com) and sign in
   2. Click "New Project"
   3. Import your GitHub repository
   4. Configure project:
      - Framework Preset: Vite
      - Root Directory: ./
      - Build Command: npm run build
      - Output Directory: dist
   5. Add environment variables:
      - VITE_SUPABASE_URL
      - VITE_SUPABASE_ANON_KEY
   6. Click "Deploy"

3. **Configure custom domain (optional)**
   1. Go to your project settings in Vercel
   2. Navigate to "Domains"
   3. Add your custom domain and follow the DNS configuration instructions

## Database Structure and Relationships

### Authentication

This application uses Supabase's built-in authentication system, which:
- Automatically manages user accounts in the `auth.users` table
- Handles session management and security
- Provides ready-to-use authentication APIs
- Does not require any custom user tables

> Note: The auth tables are managed by Supabase in a separate `auth` schema and should not be modified directly.

### Active Application Tables

### Planned Future Implementation

#### Authentication Abstraction
The application currently uses Supabase's built-in authentication system (`auth.users`). However, the following table structure is planned for teams who wish to abstract the authentication service away from Supabase in the future:

**users**
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY,
  username VARCHAR NOT NULL,
  companyname VARCHAR,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);
```
- Would enable custom user management
- Could serve as an abstraction layer between the application and authentication provider
- Allows for easier migration away from Supabase Auth if needed
- Enables additional user-specific data storage

#### Notification System
The following table is planned for implementing user notification features:

**user_notification_settings**
```sql
CREATE TABLE user_notification_settings (
  user_id UUID PRIMARY KEY,
  email_notifications BOOLEAN NOT NULL DEFAULT true,
  policy_digest TEXT NOT NULL DEFAULT 'weekly',
  risk_alerts BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);
```
- Will store user notification preferences
- Will enable features like:
  - Email notifications
  - Policy digest subscriptions
  - Risk alerts
- Would relate to the `users` table once implemented

> Note: These tables are not currently in use. The application uses Supabase's built-in authentication system (`auth.users`) for user management. The above schemas are provided for teams who wish to implement custom user management or notification features in the future.

## Disclaimer

This software is provided "as is" without warranty of any kind, either express or implied. The maintainers of Project Kish are under no obligation to provide support, updates, or fixes for this codebase.

### No Support Obligation
The maintainers and contributors to this project are not obligated to provide technical support, maintenance, updates, or enhancements. Any support provided is voluntary and can be discontinued at any time without notice.

### Limitation of Liability
In no event shall the maintainers or contributors be liable for any direct, indirect, incidental, special, exemplary, or consequential damages (including, but not limited to, procurement of substitute goods or services; loss of use, data, or profits; or business interruption) however caused and on any theory of liability, whether in contract, strict liability, or tort (including negligence or otherwise) arising in any way out of the use of this software, even if advised of the possibility of such damage.

### Use At Your Own Risk
Users implement and deploy this software at their own risk. It is the responsibility of the user to ensure that the software meets their requirements and complies with applicable laws and regulations.

## License

Project Kish is licensed under the [Apache License 2.0](LICENSE). See the [LICENSE](LICENSE) file for the full license text.

The Apache License 2.0 is a permissive open source license that allows you to:

- Use the software for any purpose
- Distribute, modify, and redistribute the software
- Apply your own license to your modifications
- Use the software in commercial applications

It requires you to:

- Include the original license when distributing
- State changes made to the code
- Include any existing NOTICE file
