import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Settings, Lock, Info } from 'lucide-react';

const AdminSettings = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">

      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Admin Settings</h1>
        <p className="text-gray-600">Manage system settings, user roles, and more.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <Card>
          <CardHeader>
            <CardTitle>User Management</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <Users className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-semibold">Manage Users</p>
                <p className="text-sm text-gray-600">Add, edit, or remove user accounts and assign roles.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Security Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <Lock className="h-6 w-6 text-red-600" />
              <div>
                <p className="font-semibold">Security & Privacy</p>
                <p className="text-sm text-gray-600">Update security settings and manage privacy policies.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>System Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <Info className="h-6 w-6 text-green-600" />
              <div>
                <p className="font-semibold">System Overview</p>
                <p className="text-sm text-gray-600">View system status, usage statistics, and updates.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <Settings className="h-6 w-6 text-yellow-600" />
              <div>
                <p className="font-semibold">Manage Notifications</p>
                <p className="text-sm text-gray-600">Configure notification settings and alerts.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Data Management</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <Settings className="h-6 w-6 text-purple-600" />
              <div>
                <p className="font-semibold">Backup & Restore</p>
                <p className="text-sm text-gray-600">Manage data backups and restore settings.</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
      </div>
    </div>
  );
};

export default AdminSettings;
