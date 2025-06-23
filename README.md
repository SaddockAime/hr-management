# HR Management System

A modern HR Management System built with React, TypeScript, and Vite. This application provides a comprehensive solution for managing human resources with features for employee management, authentication, and user profiles.

## Features

- **Authentication System**: Login and signup pages with form validation
- **Dashboard**: Comprehensive overview with HR metrics, jobs requiring attention, and upcoming meetings
- **Jobs Management**: Job posting, application tracking, and position management
- **Candidates Management**: Candidate application workflow and interview scheduling
- **Employee Management**: Complete employee directory with search and management capabilities
- **Reports & Analytics**: HR reporting dashboard with performance metrics
- **Calendar & Scheduling**: Meeting and interview scheduling system
- **Profile Management**: User profile with editable information
- **Responsive Design**: Modern UI built with Tailwind CSS and custom color scheme
- **Icons**: Beautiful icons from Lucide React

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Development**: ESLint for code quality

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd hr-management
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint for code quality checks

## Project Structure

```
src/
├── components/      # Reusable components
│   ├── DashboardLayout.tsx # Main layout with sidebar and header
│   └── Sidebar.tsx  # Navigation sidebar component
├── pages/           # Page components
│   ├── Login.tsx    # Login page
│   ├── Signup.tsx   # Signup page
│   ├── Dashboard.tsx # Main dashboard with overview stats
│   ├── Jobs.tsx     # Jobs management page
│   ├── Candidates.tsx # Candidates management page
│   ├── Employees.tsx # Employee directory
│   ├── Reports.tsx  # Reports and analytics page
│   ├── CalendarPage.tsx # Calendar and scheduling
│   └── Profile.tsx  # User profile
├── App.tsx          # Main app component with routing
├── main.tsx         # Application entry point
├── index.css        # Global styles with Tailwind
└── App.css          # Component-specific styles
```

## Features Overview

### Authentication
- Login with email and password
- Signup with form validation
- Protected routes that redirect unauthenticated users

### Dashboard
- HR metrics overview with 8 key statistics (Interview Scheduled, Feedback Pending, etc.)
- Jobs requiring attention with detailed table view
- Upcoming meetings sidebar with grouped scheduling
- Modern card-based layout with custom illustrations

### Jobs Management
- Job posting and management interface
- Application tracking and status updates
- Position management with detailed metrics

### Candidates Management
- Candidate application tracking
- Interview scheduling and management
- Application status workflow

### Employee Management
- Complete employee directory
- Employee information and status tracking
- Department and role organization

### Reports & Analytics
- HR reporting dashboard
- Performance metrics and insights
- Data visualization and analytics

### Calendar & Scheduling
- Meeting and interview scheduling
- Calendar integration
- Event management system

### Profile Management
- Editable user profile
- Personal and professional information
- Contact details management

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Future Enhancements

- Backend API integration
- Database connectivity
- Advanced employee analytics
- Payroll management
- Time tracking
- Performance reviews
- Reporting system