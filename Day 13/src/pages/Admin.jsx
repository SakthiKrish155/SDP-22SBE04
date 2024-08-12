import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Users, MessageCircle, HelpCircle, Phone, Send } from 'lucide-react';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// Sample data for charts
const userStatisticsData = [
  { name: 'Total Users', value: 1234 },
  { name: 'Active Users', value: 567 },
  { name: 'Inactive Users', value: 123 },
  { name: 'New Registrations', value: 45 },
];

const pieData = [
  { name: 'Active Users', value: 567 },
  { name: 'Inactive Users', value: 123 },
];

const AdminDashboard = () => {
  return (
    <div className="h-full w-full p-4 flex flex-col gap-y-6">
      {/* Welcome Section */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Welcome, Admin</h1>
        <span className="text-sm text-gray-500">{new Date().toLocaleDateString()}</span>
      </div>

      {/* User Statistics and Activity Distribution */}
      <div className="flex flex-row gap-y-6 md:flex-row md:gap-x-6">
        {/* User Statistics */}
        <Card className="flex-1">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="mr-2 text-blue-500" />
              User Statistics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center mb-6">
              {/* Bar Chart */}
              <h2 className="text-lg font-semibold mb-2">User Statistics Overview</h2>
              <div className="w-full max-w-md md:max-w-xl lg:max-w-2xl">
                <BarChart width={600} height={300} data={userStatisticsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#4A90E2" />
                </BarChart>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Activity Distribution */}
        <Card className="flex-1">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="mr-2 text-blue-500" />
              Activity Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center">
              {/* Pie Chart */}
              <h2 className="text-lg font-semibold mb-2">User Activity Distribution</h2>
              <div className="w-full max-w-md md:max-w-xl lg:max-w-2xl">
                <PieChart width={400} height={300} className='flex justify-center items-center'>
                  <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label>
                    <Cell key="Active Users" fill="#4A90E2" />
                    <Cell key="Inactive Users" fill="#FF6F61" />
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Review Page */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <MessageCircle className="mr-2 text-blue-500" />
            Review Page
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Review content here */}
          <div className="flex items-center mb-2">
            <MessageCircle className="mr-2 text-orange-500" />
            <span>Pending Reviews: 3</span>
          </div>
          <div className="flex items-center mb-2">
            <MessageCircle className="mr-2 text-gray-500" />
            <span>Recent Reviews:</span>
          </div>
          {/* List of recent reviews */}
        </CardContent>
      </Card>

      {/* Help Center */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <HelpCircle className="mr-2 text-blue-500" />
            Help Center
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center mb-2">
            <HelpCircle className="mr-2 text-gray-500" />
            <span>FAQs</span>
          </div>
          <div className="flex items-center mb-2">
            <HelpCircle className="mr-2 text-gray-500" />
            <span>Guides</span>
          </div>
          <div className="flex items-center mb-2">
            <HelpCircle className="mr-2 text-gray-500" />
            <span>Tutorials</span>
          </div>
        </CardContent>
      </Card>

      {/* Contact Support */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Phone className="mr-2 text-blue-500" />
            Contact Support
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="mb-4">
              <label htmlFor="support-message" className="block text-gray-700 mb-2">Submit a support request:</label>
              <textarea id="support-message" rows="4" className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <button type="submit" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded flex items-center">
              <Send className="mr-2" />
              Send
            </button>
          </form>
          <div className="mt-4">
            <div className="flex items-center mb-2">
              <Phone className="mr-2 text-gray-500" />
              <span>Support Email: support@example.com</span>
            </div>
            <div className="flex items-center mb-2">
              <Phone className="mr-2 text-gray-500" />
              <span>Phone Number: 1-800-123-4567</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;
