# Filio

<div align="center">

![Filio Banner](https://img.shields.io/badge/Filio-Premium_File_Storage-6366f1?style=for-the-badge&logo=files&logoColor=white)

[![Live Demo](https://img.shields.io/badge/Live-Demo-success?style=for-the-badge&logo=vercel&logoColor=white)](https://filio-omega.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-Storage-3fcf8e?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

**A premium, modern file storage and management application with an elegant UI/UX**

[Live Demo](https://filio-omega.vercel.app) · [Report Bug](#) · [Request Feature](#)

</div>

---

## Features

### **Premium Design**
- **Luxurious UI/UX** - Stunning gradient-based design with smooth animations
- **Dark/Light Mode** - Seamless theme switching with persistent preferences
- **Responsive Layout** - Perfect experience across all devices
- **Ambient Effects** - Sophisticated glassmorphism and gradient overlays

### **File Management**
- **Multi-file Upload** - Drag & drop or click to upload multiple files
- **Real-time Progress** - Visual feedback for upload status
- **Smart Search** - Instantly filter files by name
- **File Details** - View size, type, and upload timestamp
- **Quick Download** - One-click file downloads

### **Advanced Features**
- **Sequential Uploads** - Reliable file processing
- **File Filtering** - Dynamic search with result counts
- **Auto-refresh** - Keep your file list up-to-date
- **Error Handling** - Graceful error messages and recovery

### **User Experience**
- **Intuitive Interface** - Clean, easy-to-navigate design
- **Loading States** - Beautiful loading animations
- **Empty States** - Helpful guidance for new users
- **Smooth Transitions** - 300-500ms transitions throughout

---

## Quick Start

### Prerequisites

- Node.js 18+ installed
- A Supabase account and project
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/filio.git
   cd filio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Configure Supabase Storage**
   
   In your Supabase dashboard:
   - Create a new bucket called `uploads`
   - Set the bucket to **public** (or configure RLS policies)
   - Enable file uploads

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## Tech Stack

### Frontend
- **[Next.js 16](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first styling

### Backend & Storage
- **[Supabase Storage](https://supabase.com/storage)** - Object storage
- **[Supabase Client](https://supabase.com/docs/reference/javascript/introduction)** - Database & Auth SDK

### UI/UX
- Custom gradient system with dark mode support
- Glassmorphism effects
- Smooth animations and transitions
- Responsive design patterns

---

## Project Structure

```
filio/
├── app/
│   ├── layout.tsx          # Root layout with ThemeProvider
│   ├── page.tsx            # Home page component
│   └── globals.css         # Global styles & Tailwind config
├── components/
│   ├── FileUpload.tsx      # File upload with drag & drop
│   ├── FileList.tsx        # File display and management
│   ├── SearchBar.tsx       # Search and filter files
│   └── ThemeProvider.tsx   # Dark/light mode context
├── lib/
│   ├── supabaseClient.ts   # Supabase configuration
│   └── types.ts            # TypeScript type definitions
└── public/
    └── ...                 # Static assets
```

---

## 🎨 Design System

### Color Palette
- **Primary Gradient**: Indigo → Purple → Pink
- **Light Mode**: Slate 50-900 with white backgrounds
- **Dark Mode**: Slate 950-100 with dark backgrounds
- **Accent Colors**: Emerald (success), Rose (error), Amber (warning)

### Typography
- **Headings**: Semibold weights with gradient text
- **Body**: Medium weights for emphasis
- **Metadata**: Smaller sizes with muted colors

### Spacing
- Consistent 3-8 unit spacing scale
- Rounded corners: `xl` to `3xl` for cards
- Generous padding for touch targets

---

## Security Notice

> **Important**: Filio uses **public storage** by default. All uploaded files are publicly accessible to anyone with the URL. 

**Do not upload:**
- Sensitive personal information
- Confidential business documents
- Private photos or videos
- Financial records
- Any data requiring privacy

For production use, consider implementing:
- Authentication and authorization
- Row Level Security (RLS) in Supabase
- Private storage buckets
- File encryption
- Access control lists

---

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL | Yes |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anonymous key | Yes |

---

## Build & Deploy

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/filio)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

---

## Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines
- Follow the existing code style
- Maintain TypeScript type safety
- Keep components modular and reusable
- Add comments for complex logic
- Test thoroughly in both light and dark modes

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Author

**Dennis Mmachoene Ramara**

- GitHub: [@yourusername](#)
- LinkedIn: [Dennis Ramara](#)
- Twitter: [@yourusername](#)
- Facebook: [Dennis Ramara](#)
- Instagram: [@yourusername](#)

---

## Acknowledgments

- [Supabase](https://supabase.com/) - For the amazing storage platform
- [Vercel](https://vercel.com/) - For seamless deployment
- [Tailwind CSS](https://tailwindcss.com/) - For the utility-first CSS framework
- [Next.js](https://nextjs.org/) - For the powerful React framework
- [Lucide Icons](https://lucide.dev/) - For beautiful icons

---

## Stats

![GitHub stars](https://img.shields.io/github/stars/yourusername/filio?style=social)
![GitHub forks](https://img.shields.io/github/forks/yourusername/filio?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/yourusername/filio?style=social)

---

<div align="center">

**Built with ❤️ using Next.js, Supabase, and Tailwind CSS**

[⬆ Back to Top](#-filio)

</div>