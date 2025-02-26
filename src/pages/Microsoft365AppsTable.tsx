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
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="app-container py-24 text-center">
        <h1 className="section-title">
          Microsoft 365 Enterprise
        </h1>
        <p className="section-subtitle mx-auto">
          Powerful apps and services designed for the modern workplace.
          Transform how your team works with integrated solutions.
        </p>
      </div>

      {/* License Coverage */}
      <div className="bg-[#151516] py-20">
        <div className="app-container">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-semibold mb-6">License Coverage</h2>
              <p className="text-gray-400 text-lg mb-8">
                Get the most out of your Microsoft 365 subscription with flexible licensing 
                options for all your devices.
              </p>
            </div>
            <div className="space-y-6">
              <div className="app-card">
                <div className="flex items-center">
                  <span className="text-3xl mr-4">💻</span>
                  <div>
                    <p className="text-sm text-gray-400">Installable on PCs or Macs</p>
                    <p className="text-xl font-semibold mt-1">{licenseDetails.installable}</p>
                  </div>
                </div>
              </div>
              <div className="app-card">
                <div className="flex items-center">
                  <span className="text-3xl mr-4">📱</span>
                  <div>
                    <p className="text-sm text-gray-400">Phones and tablets per user</p>
                    <p className="text-xl font-semibold mt-1">{licenseDetails.phones}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Apps Section */}
      <div className="app-container py-20">
        {/* Navigation Tabs */}
        <div className="flex justify-center mb-16 space-x-4">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`nav-tab ${activeTab === category.id ? 'nav-tab-active text-white' : 'text-gray-400'}`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Apps Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {appsData[activeTab].map((app, index) => (
            <div key={index} className="app-card group">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-3">{app.icon}</span>
                    <h3 className="text-xl font-medium">{app.name}</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{app.description}</p>
                  
                  {app.features.length > 0 && (
                    <div className="feature-list">
                      {app.features.map((feature, i) => (
                        <div key={i} className="feature-item">
                          <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <span className={`badge ${app.plan === 'Included' ? 'badge-included' : 'badge-addon'}`}>
                  {app.plan}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#151516] py-20">
        <div className="app-container text-center">
          <h2 className="text-4xl font-semibold mb-6">Ready to transform your workplace?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Join millions of organizations worldwide that trust Microsoft 365 Enterprise 
            for their business needs.
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium
            hover:bg-blue-500 transition-colors duration-200">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default Microsoft365AppsTable;
