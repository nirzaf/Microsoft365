import { useState } from 'react';

const Microsoft365AppsTable = () => {
  const [activeTab, setActiveTab] = useState('business');

  const categories = [
    { id: 'business', name: 'Business Apps' },
    { id: 'office', name: 'Office Apps' },
    { id: 'collaboration', name: 'Collaboration & Communication' },
    { id: 'enterprise', name: 'Enterprise Management' }
  ];

  const appsData: Record<string, Array<{
    name: string;
    icon: string;
    description: string;
    plan: string;
    features: string[];
  }>> = {
    business: [
      { name: 'Power BI', icon: '📊', description: 'Analytics and data visualization tool', plan: 'Included', features: ['Analyze in Excel and Power BI', 'App workspaces', 'Connect to cloud and on-premise data', 'Enterprise distribution', 'Export to PowerPoint, Excel, CSV', 'Peer-to-peer sharing and collaboration', 'Publish to the Power BI service'] },
      { name: 'Flow', icon: '🔄', description: 'Workflow automation tool', plan: 'Flow for Office 365 Plan 2', features: [] },
      { name: 'PowerApps', icon: '⚡', description: 'Low-code application development platform', plan: 'Included', features: [] },
      { name: 'Microsoft Connections', icon: '🔗', description: 'Email marketing service', plan: 'Included', features: [] },
      { name: 'Microsoft Listings', icon: '📋', description: 'Business listing management', plan: 'Included', features: [] },
      { name: 'Microsoft Bookings', icon: '📅', description: 'Appointment scheduling system', plan: 'Included', features: [] },
      { name: 'Kaizala', icon: '📱', description: 'Mobile chat app for organizations', plan: 'Included', features: [] },
      { name: 'Forms', icon: '📝', description: 'Survey and quiz creation tool', plan: 'Included', features: [] },
      { name: 'To-Do', icon: '✓', description: 'Task management app', plan: 'Included', features: [] },
      { name: 'StaffHub', icon: '👥', description: 'Staff scheduling and management', plan: 'Included', features: [] },
    ],
    office: [
      { name: 'Outlook', icon: '📧', description: 'Email and calendar application', plan: 'Included', features: [] },
      { name: 'Word', icon: '📄', description: 'Word processing application', plan: 'Included', features: [] },
      { name: 'Excel', icon: '📊', description: 'Spreadsheet application', plan: 'Included', features: [] },
      { name: 'PowerPoint', icon: '📊', description: 'Presentation software', plan: 'Included', features: [] },
      { name: 'OneNote', icon: '📔', description: 'Note-taking application', plan: 'Included', features: [] },
      { name: 'Excel Power Query and Power Pivot', icon: '📊', description: 'Data analysis tools for Excel', plan: 'Included', features: [] },
    ],
    collaboration: [
      { name: 'Exchange', icon: '📨', description: 'Email server', plan: 'Plan 2', features: [] },
      { name: 'OneDrive', icon: '☁️', description: 'File hosting service', plan: 'Plan 2', features: [] },
      { name: 'SharePoint', icon: '🔄', description: 'Collaborative platform', plan: 'Included', features: [] },
      { name: 'Skype for Business', icon: '💬', description: 'Business communication tool', plan: 'Instant messaging only', features: [] },
      { name: 'Teams', icon: '👥', description: 'Team collaboration hub', plan: 'Included', features: [] },
      { name: 'Yammer', icon: '🗣️', description: 'Enterprise social networking service', plan: 'Included', features: [] },
    ],
    enterprise: [
      { name: 'InfoPath', icon: '📋', description: 'Form development application', plan: 'Included', features: [] },
      { name: 'Azure Active Directory', icon: '🔐', description: 'Identity and access management', plan: 'Premium P2', features: [] },
      { name: 'Microsoft Intune', icon: '📱', description: 'Cloud-based device management', plan: 'Included', features: [] },
      { name: 'Cloud app security', icon: '🛡️', description: 'Cloud access security broker', plan: 'Included', features: [] },
      { name: 'Azure Information Protection', icon: '🔒', description: 'Document protection service', plan: 'Plan 2', features: [] },
      { name: 'Azure Multi-Factor Authentication', icon: '🔑', description: 'Two-factor authentication service', plan: 'Included', features: [] },
      { name: 'Azure Rights Management', icon: '⚖️', description: 'Information protection technology', plan: 'Included', features: [] },
      { name: 'Azure Advanced Threat Protection', icon: '🛡️', description: 'Cloud security service', plan: 'Included', features: [] },
      { name: 'Threat Intelligence', icon: '🔍', description: 'Security intelligence service', plan: 'Included', features: [] },
      { name: 'Phone System', icon: '☎️', description: 'Cloud-based phone system', plan: 'Included', features: [] },
    ]
  };

  const licenseDetails = {
    installable: '5 per user',
    phones: '5 per user/device'
  };

  return (
    <div className="p-6 bg-white">
      <h1 className="text-2xl font-semibold text-blue-600 mb-6">
        Microsoft 365 Enterprise Apps and Services
      </h1>
      
      {/* License Coverage */}
      <div className="bg-gray-50 p-4 rounded mb-6">
        <h2 className="text-lg font-medium mb-4">License Coverage</h2>
        <div className="flex flex-wrap gap-8">
          <div className="flex items-center">
            <span className="text-blue-600 mr-2">💻</span>
            <span className="text-gray-600">Installable on PCs or Macs:</span>
            <span className="ml-2 font-medium">{licenseDetails.installable}</span>
          </div>
          <div className="flex items-center">
            <span className="text-blue-600 mr-2">📱</span>
            <span className="text-gray-600">Phones and tablets per user:</span>
            <span className="ml-2 font-medium">{licenseDetails.phones}</span>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b mb-6">
        <div className="flex">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-2 text-sm font-medium border-b-2 ${
                activeTab === category.id
                  ? 'text-blue-600 border-blue-600'
                  : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Apps List */}
      <div className="space-y-4">
        {appsData[activeTab].map((app, index) => (
          <div key={index} className="border rounded-lg p-4">
            <div className="flex items-start">
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <img 
                    src={`/icons/${app.name.toLowerCase().replace(/\s+/g, '-')}.png`}
                    alt={app.name}
                    className="w-6 h-6 mr-3"
                  />
                  <h3 className="font-medium text-gray-900">{app.name}</h3>
                </div>
                <p className="text-sm text-gray-600 mb-2">{app.description}</p>
                
                {app.features.length > 0 && (
                  <div className="mt-3">
                    <p className="text-sm font-medium text-gray-900 mb-2">Features:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {app.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="ml-4">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  app.plan === 'Included'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {app.plan}
                </span>
                {app.plan === 'Included' && (
                  <span className="ml-2 text-green-500">✓</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Microsoft365AppsTable;
