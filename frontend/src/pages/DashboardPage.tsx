import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { 
  BookOpen, 
  TrendingUp, 
  Award, 
  Clock,
  Play,
  Star,
  Users,
  Sparkles,
  Code,
  Palette,
  Brain,
  Library
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Mock data for course progress
const progressData = [
  { month: 'Jan', courses: 2 },
  { month: 'Feb', courses: 5 },
  { month: 'Mar', courses: 8 },
  { month: 'Apr', courses: 12 },
  { month: 'May', courses: 18 },
  { month: 'Jun', courses: 24 },
];

// Mock data for new courses
const newCourses = [
  {
    id: 1,
    title: 'Advanced React & TypeScript',
    instructor: 'Sarah Johnson',
    duration: '12 hours',
    students: 2341,
    rating: 4.9,
    icon: Palette,
    category: 'Development',
    level: 'Advanced'
  },
  {
    id: 2,
    title: 'Full Stack Web Development',
    instructor: 'Michael Chen',
    duration: '24 hours',
    students: 5678,
    rating: 4.8,
    icon: Code,
    category: 'Development',
    level: 'Intermediate'
  },
  {
    id: 3,
    title: 'UI/UX Design Masterclass',
    instructor: 'Emma Wilson',
    duration: '8 hours',
    students: 1892,
    rating: 4.7,
    icon: Sparkles,
    category: 'Design',
    level: 'Beginner'
  },
  {
    id: 4,
    title: 'Machine Learning Fundamentals',
    instructor: 'David Kumar',
    duration: '16 hours',
    students: 3456,
    rating: 4.9,
    icon: Brain,
    category: 'Data Science',
    level: 'Advanced'
  },
];

export const DashboardPage: React.FC = () => {
  const { user } = useAuth();

  const stats = [
    { label: 'Enrolled Courses', value: '12', icon: BookOpen, color: 'bg-blue-500' },
    { label: 'Completed', value: '8', icon: Award, color: 'bg-green-500' },
    { label: 'In Progress', value: '4', icon: TrendingUp, color: 'bg-yellow-500' },
    { label: 'Hours Learned', value: '124', icon: Clock, color: 'bg-purple-500' },
  ];

  return (
    <div className="bg-gray-50">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-3xl font-bold text-gray-900">
              Welcome back, {user?.name}!
            </h2>
            <Sparkles className="w-8 h-8 text-yellow-500" />
          </div>
          <p className="text-gray-600">Continue your learning journey and discover new courses</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Progress Chart */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900">Learning Progress</h3>
              <p className="text-sm text-gray-600">Your course completion over time</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-green-600 bg-green-50 px-3 py-1 rounded-full">
              <TrendingUp className="w-4 h-4" />
              <span className="font-medium">+24% this month</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={progressData}>
              <defs>
                <linearGradient id="colorCourses" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#6b7280" style={{ fontSize: '12px' }} />
              <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#fff', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                }}
              />
              <Area 
                type="monotone" 
                dataKey="courses" 
                stroke="#3b82f6" 
                strokeWidth={2}
                fillOpacity={1} 
                fill="url(#colorCourses)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* New Courses Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">New Courses</h3>
              <p className="text-gray-600">Explore our latest additions</p>
            </div>
            <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
              View All →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newCourses.map((course) => (
              <div 
                key={course.id} 
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow cursor-pointer group"
              >
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 h-40 flex items-center justify-center">
                  <course.icon className="w-16 h-16 text-white" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                      {course.level}
                    </span>
                    <span className="text-xs text-gray-500">{course.category}</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {course.title}
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">by {course.instructor}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{course.students.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium text-gray-900">{course.rating}</span>
                    </div>
                    <button className="flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium text-sm">
                      <Play className="w-4 h-4" />
                      Start Course
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Continue Learning Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">Keep Learning!</h3>
              <p className="text-blue-100 mb-4">You're doing great! Continue where you left off.</p>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                Continue Learning
              </button>
            </div>
            <div className="hidden lg:block">
              <Library className="w-32 h-32 text-white opacity-50" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
