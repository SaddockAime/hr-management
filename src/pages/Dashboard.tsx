import { 
  Users, 
  Calendar,
  Briefcase,
  UserCheck,
  CheckCircle,
  Clock,
  Plus,
  Info
} from 'lucide-react';
import DashboardLayout from '../components/DashboardLayout';

const Dashboard = () => {
  // Mock data for overview stats
  const overviewStats = [
    { icon: Users, label: 'Interview Scheduled', value: '33', bgColor: 'bg-blue-500' },
    { icon: Clock, label: 'Interview Feedback Pending', value: '2', bgColor: 'bg-orange-500' },
    { icon: CheckCircle, label: 'Approval Pending', value: '44', bgColor: 'bg-blue-500' },
    { icon: UserCheck, label: 'Offer Acceptance Pending', value: '13', bgColor: 'bg-gray-500' },
    { icon: Calendar, label: 'Documentations Pending', value: '17', bgColor: 'bg-blue-500' },
    { icon: Users, label: 'Training Pending', value: '3', bgColor: 'bg-purple-500' },
    { icon: Users, label: 'Supervisor Allocation Pending', value: '5', bgColor: 'bg-blue-500' },
    { icon: Briefcase, label: 'Project Allocation Pending', value: '56', bgColor: 'bg-blue-500' },
  ];  // Mock data for jobs requiring attention
  const jobsData = [
    { 
      id: 1, 
      jobTitle: 'Senior Data Analyst', 
      timeAgo: '100 days ago',
      positionsLeft: 3,
      applications: 123,
      interviewed: 40,
      rejected: 33,
      feedbackPending: 7,
      offered: 2
    },
    { 
      id: 2, 
      jobTitle: 'Junior Data Analyst', 
      timeAgo: '78 days ago',
      positionsLeft: 7,
      applications: 567,
      interviewed: 22,
      rejected: 20,
      feedbackPending: 2,
      offered: 4
    },
    { 
      id: 3, 
      jobTitle: 'Product Designer', 
      timeAgo: '56 days ago',
      positionsLeft: 2,
      applications: 201,
      interviewed: 32,
      rejected: 18,
      feedbackPending: 14,
      offered: 0
    },
    { 
      id: 4, 
      jobTitle: 'Java Developer', 
      timeAgo: '46 days ago',
      positionsLeft: 5,
      applications: 231,
      interviewed: 23,
      rejected: 10,
      feedbackPending: 13,
      offered: 3
    },
    { 
      id: 5, 
      jobTitle: 'Product Manager', 
      timeAgo: '13 days ago',
      positionsLeft: 3,
      applications: 67,
      interviewed: 41,
      rejected: 22,
      feedbackPending: 19,
      offered: 1
    },
  ];  // Mock data for upcoming meetings
  const upcomingMeetings = [
    { 
      id: 1, 
      name: 'Mini Soman', 
      position: 'Mean stack developer, 4th phase',
      time: '3:15',
      date: 'Today',
      highlight: true
    },
    { 
      id: 2, 
      name: 'Mini Soman', 
      position: 'Mean stack developer, 4th phase',
      time: '10:00',
      date: 'Today',
      highlight: false
    },
    { 
      id: 3, 
      name: 'Mini Soman', 
      position: 'Mean stack developer, 4th phase',
      time: '10:00',
      date: 'Today',
      highlight: true
    },
    { 
      id: 4, 
      name: 'Mini Soman', 
      position: 'Mean stack developer, 4th phase',
      time: '10:00',
      date: 'Today',
      highlight: true
    },
    { 
      id: 5, 
      name: 'Mini Soman', 
      position: 'Mean stack developer, 4th phase',
      time: '3:15',
      date: 'Tomorrow',
      highlight: false
    },
    { 
      id: 6, 
      name: 'Mini Soman', 
      position: 'Mean stack developer, 4th phase',
      time: '10:00',
      date: 'Tomorrow',
      highlight: false
    },
    { 
      id: 7, 
      name: 'Mini Soman', 
      position: 'Mean stack developer, 4th phase',
      time: '10:00',
      date: 'Tomorrow',
      highlight: false
    },
    { 
      id: 8, 
      name: 'Mini Soman', 
      position: 'Mean stack developer, 4th phase',
      time: '10:00',
      date: 'Tomorrow',
      highlight: false
    },
    { 
      id: 9, 
      name: 'Mini Soman', 
      position: 'Mean stack developer, 4th phase',
      time: 'Sep 3',
      date: 'This Week',
      highlight: false
    },
    { 
      id: 10, 
      name: 'Mini Soman', 
      position: 'Mean stack developer, 4th phase',
      time: 'Sep 3',
      date: 'This Week',
      highlight: false
    },  ];

  return (
    <DashboardLayout activeItem="Home">
      <div className="flex space-x-6">
        {/* Left Column */}
        <div className="flex-1 space-y-6">
          {/* Overview Section */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Overview</h2>
              <div className="flex space-x-2">
                <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  <Plus size={16} />
                  <span>Add Candidate</span>
                </button>
                <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  <Plus size={16} />
                  <span>Add Job</span>
                </button>
              </div>
            </div>            <div className="grid grid-cols-4 gap-4 mb-6">
              {overviewStats.map((stat, index) => (
                <div key={index} className="rounded-2xl p-6 shadow-sm border border-gray-100 relative" style={{ backgroundColor: '#F3F8FF' }}>
                  {/* Number in rounded rectangle positioned slightly outside the top-left corner */}
                  <div className="absolute -top-2 -left-2">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl border-2 border-blue-300">
                      <span className="text-2xl font-bold text-blue-900">{stat.value}</span>
                    </div>
                  </div>
                  <div className="pt-8 flex">
                    {/* Left side - Text label positioned at bottom left */}
                    <div className="flex-1 flex items-end">
                      <div className="text-left text-sm text-gray-700 font-medium leading-tight">{stat.label}</div>
                    </div>
                    
                    {/* Right side - Illustration positioned higher up */}
                    <div className="flex-shrink-0 flex items-start pt-2">
                      <div className="relative">
                        {/* Detailed illustration matching the reference image */}
                        <svg width="80" height="60" viewBox="0 0 100 70" className="drop-shadow-sm">
                          {/* Table surface */}
                          <ellipse cx="50" cy="52" rx="35" ry="4" fill="#E5E7EB" opacity="0.8"/>
                          <rect x="15" y="48" width="70" height="8" rx="4" fill="#6B7280" opacity="0.6"/>
                          
                          {/* Table legs */}
                          <rect x="20" y="56" width="3" height="10" fill="#6B7280" opacity="0.4"/>
                          <rect x="77" y="56" width="3" height="10" fill="#6B7280" opacity="0.4"/>
                          
                          {/* Person 1 (left, darker blue) */}
                          {/* Head */}
                          <circle cx="32" cy="18" r="8" fill="#1E40AF"/>
                          {/* Hair */}
                          <path d="M24 15 Q32 8 40 15 L38 20 Q32 12 26 20 Z" fill="#1F2937"/>
                          {/* Face details */}
                          <circle cx="29" cy="17" r="1" fill="white" opacity="0.8"/>
                          <circle cx="35" cy="17" r="1" fill="white" opacity="0.8"/>
                          
                          {/* Body/shirt */}
                          <rect x="24" y="26" width="16" height="22" rx="4" fill="#3B82F6"/>
                          {/* Arms */}
                          <ellipse cx="20" cy="35" rx="4" ry="8" fill="#3B82F6"/>
                          <ellipse cx="44" cy="35" rx="4" ry="8" fill="#3B82F6"/>
                          {/* Hands on table */}
                          <ellipse cx="22" cy="48" rx="3" ry="2" fill="#FBBF24"/>
                          <ellipse cx="42" cy="48" rx="3" ry="2" fill="#FBBF24"/>
                          
                          {/* Person 2 (right, lighter blue) */}
                          {/* Head */}
                          <circle cx="68" cy="18" r="8" fill="#60A5FA"/>
                          {/* Hair */}
                          <path d="M60 15 Q68 8 76 15 L74 20 Q68 12 62 20 Z" fill="#374151"/>
                          {/* Face details */}
                          <circle cx="65" cy="17" r="1" fill="white" opacity="0.8"/>
                          <circle cx="71" cy="17" r="1" fill="white" opacity="0.8"/>
                          
                          {/* Body/shirt */}
                          <rect x="60" y="26" width="16" height="22" rx="4" fill="#93C5FD"/>
                          {/* Arms */}
                          <ellipse cx="56" cy="35" rx="4" ry="8" fill="#93C5FD"/>
                          <ellipse cx="80" cy="35" rx="4" ry="8" fill="#93C5FD"/>
                          {/* Hands on table */}
                          <ellipse cx="58" cy="48" rx="3" ry="2" fill="#FBBF24"/>
                          <ellipse cx="78" cy="48" rx="3" ry="2" fill="#FBBF24"/>
                          
                          {/* Chairs */}
                          {/* Chair 1 (left) */}
                          <rect x="26" y="50" width="12" height="16" rx="2" fill="#6B7280" opacity="0.7"/>
                          <rect x="28" y="44" width="8" height="6" rx="1" fill="#6B7280" opacity="0.7"/>
                          
                          {/* Chair 2 (right) */}
                          <rect x="62" y="50" width="12" height="16" rx="2" fill="#6B7280" opacity="0.7"/>
                          <rect x="64" y="44" width="8" height="6" rx="1" fill="#6B7280" opacity="0.7"/>
                          
                          {/* Documents/papers on table */}
                          <rect x="45" y="46" width="10" height="6" rx="1" fill="white" opacity="0.9"/>
                          <rect x="46" y="47" width="8" height="1" fill="#E5E7EB"/>
                          <rect x="46" y="49" width="6" height="1" fill="#E5E7EB"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Require Attention Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Require Attention</h3>
              
              {/* Tabs */}
              <div className="flex space-x-8 mb-6">
                <button className="pb-2 border-b-2 border-orange-500 text-gray-900 font-medium">
                  Jobs
                </button>
                <button className="pb-2 border-b-2 border-transparent text-gray-500 hover:text-gray-700">
                  Candidates
                </button>
                <button className="pb-2 border-b-2 border-transparent text-gray-500 hover:text-gray-700">
                  Onboardings
                </button>
              </div>

              {/* Jobs Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <th className="text-left py-3 px-6 font-medium text-gray-500 text-sm w-1/4"></th>
                      <th className="text-center py-3 px-4 font-medium text-gray-500 text-sm">Positions Left</th>
                      <th className="text-center py-3 px-4 font-medium text-gray-500 text-sm">Applications</th>
                      <th className="text-center py-3 px-4 font-medium text-gray-500 text-sm">Interviewed</th>
                      <th className="text-center py-3 px-4 font-medium text-gray-500 text-sm">Rejected</th>
                      <th className="text-center py-3 px-4 font-medium text-gray-500 text-sm">Feedback Pending</th>
                      <th className="text-center py-3 px-4 font-medium text-gray-500 text-sm">Offered</th>
                    </tr>
                  </thead>
                  <tbody>
                    {jobsData.map((job) => (
                      <tr key={job.id} className="border-b border-gray-100">
                        <td className="py-4 px-6">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <Briefcase size={20} className="text-blue-600" />
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">{job.jobTitle}</div>
                              <div className="text-sm text-gray-500">{job.timeAgo}</div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-center text-gray-700">{job.positionsLeft}</td>
                        <td className="py-4 px-4 text-center text-gray-700">{job.applications}</td>
                        <td className="py-4 px-4 text-center text-gray-700">{job.interviewed}</td>
                        <td className="py-4 px-4 text-center text-gray-700">{job.rejected}</td>
                        <td className="py-4 px-4 text-center text-gray-700">{job.feedbackPending}</td>
                        <td className="py-4 px-4 text-center font-bold text-gray-900">{job.offered}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Upcoming Meetings */}
        <div className="w-80">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 h-fit">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center space-x-2">
                <h3 className="text-lg font-semibold text-gray-900">Upcoming Meetings</h3>
                <Info size={16} className="text-blue-500" />
              </div>            </div>
            <div className="max-h-[800px] overflow-y-auto">
              {/* Group meetings by date */}
              {['Today', 'Tomorrow', 'This Week'].map((dateGroup) => (
                <div key={dateGroup}>
                  {/* Date header */}
                  <div className="px-6 py-3 bg-gray-50 border-b border-gray-100">
                    <div className="text-sm font-medium text-gray-700">{dateGroup}</div>
                  </div>
                  
                  {/* Meetings for this date */}
                  <div className="px-6 py-2">
                    {upcomingMeetings
                      .filter(meeting => meeting.date === dateGroup)
                      .map((meeting) => (
                        <div key={meeting.id} className={`flex items-center space-x-3 py-3 border-b border-gray-100 last:border-b-0 ${
                          meeting.highlight ? 'bg-green-50' : ''
                        }`}>
                          {/* Time */}
                          <div className="text-sm font-medium text-gray-900 w-12">
                            {meeting.time}
                          </div>
                          
                          {/* Profile circle */}
                          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-xs font-medium">
                              {meeting.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          
                          {/* Meeting details */}
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-gray-900 text-sm truncate">{meeting.name}</div>
                            <div className="text-gray-500 text-xs truncate">{meeting.position}</div>
                            <div className="text-blue-600 text-xs">Interview | 3:15 - 3:45</div>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
