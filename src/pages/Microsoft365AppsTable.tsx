const Microsoft365AppsTable = () => {
  const apps = [
    {
      category: "Office Apps",
      items: [
        { name: "Microsoft Word", icon: "📝", description: "Create and edit documents", features: ["Real-time collaboration", "AI-powered editing", "Document tracking"], plan: "Included" },
        { name: "Microsoft Excel", icon: "📊", description: "Spreadsheets and data analysis", features: ["Advanced formulas", "Power Query", "Data visualization"], plan: "Included" },
        { name: "Microsoft PowerPoint", icon: "📊", description: "Create presentations", features: ["Designer AI", "Real-time collaboration", "Presenter view"], plan: "Included" },
        { name: "Microsoft OneNote", icon: "📓", description: "Digital note-taking", features: ["Cross-device sync", "Rich media support", "Sharing"], plan: "Included" },
        { name: "Microsoft Publisher", icon: "📰", description: "Desktop publishing", features: ["Templates", "Brand assets", "Print optimization"], plan: "Included" },
        { name: "Microsoft Access", icon: "🗃️", description: "Database management", features: ["Custom apps", "Data analysis", "Reports"], plan: "Included" }
      ]
    },
    {
      category: "Communication",
      items: [
        { name: "Microsoft Teams", icon: "💬", description: "Team collaboration hub", features: ["Chat", "Video meetings", "File sharing"], plan: "Included" },
        { name: "Microsoft Exchange", icon: "📧", description: "Enterprise email", features: ["50 GB mailbox", "Calendar", "Contacts"], plan: "Included" },
        { name: "Microsoft Stream", icon: "🎥", description: "Video service", features: ["Live events", "Video sharing", "Analytics"], plan: "Included" },
        { name: "Yammer", icon: "🌐", description: "Enterprise social network", features: ["Communities", "Knowledge sharing", "Polls"], plan: "Included" }
      ]
    },
    {
      category: "Storage & Content",
      items: [
        { name: "OneDrive for Business", icon: "☁️", description: "Cloud storage", features: ["1 TB storage", "File sharing", "Sync"], plan: "Included" },
        { name: "SharePoint", icon: "📂", description: "Team sites & content management", features: ["Intranet", "Document libraries", "Workflows"], plan: "Included" },
        { name: "Microsoft Lists", icon: "📋", description: "Information tracking", features: ["Custom lists", "Templates", "Automation"], plan: "Included" }
      ]
    },
    {
      category: "Analytics & Development",
      items: [
        { name: "Power BI Pro", icon: "📈", description: "Business analytics", features: ["Data visualization", "Reports", "Dashboards"], plan: "Add-on" },
        { name: "Power Apps", icon: "⚡", description: "Custom apps", features: ["App creation", "Data connection", "Sharing"], plan: "Limited" },
        { name: "Power Automate", icon: "🔄", description: "Workflow automation", features: ["Process automation", "Templates", "Connectors"], plan: "Limited" }
      ]
    },
    {
      category: "Security & Compliance",
      items: [
        { name: "Microsoft Defender", icon: "🛡️", description: "Advanced security", features: ["Threat protection", "Device control", "Analytics"], plan: "Included" },
        { name: "Azure AD Premium", icon: "🔐", description: "Identity management", features: ["SSO", "MFA", "Conditional access"], plan: "Add-on" },
        { name: "Microsoft Purview", icon: "👁️", description: "Data governance", features: ["Compliance", "Data protection", "eDiscovery"], plan: "Add-on" }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="app-container py-24 text-center">
        <h1 className="section-title">Microsoft 365 Enterprise Apps</h1>
        <p className="section-subtitle mx-auto">
          Complete list of applications and services included in your subscription
        </p>
      </div>

      {/* Apps Table */}
      <div className="app-container pb-24">
        {apps.map((category, index) => (
          <div key={index} className="mb-16">
            <div className="category-header">
              <h2 className="category-title">{category.category}</h2>
              <div className="category-divider" />
            </div>
            <div className="table-container">
              <div className="overflow-x-auto">
                <table>
                  <thead className="table-header">
                    <tr>
                      <th className="w-1/4">Application</th>
                      <th className="w-1/4">Description</th>
                      <th className="w-1/3">Key Features</th>
                      <th className="w-1/6">Plan</th>
                    </tr>
                  </thead>
                  <tbody>
                    {category.items.map((app, appIndex) => (
                      <tr key={appIndex} className="table-row">
                        <td>
                          <div className="table-cell-app">
                            <span className="app-icon">{app.icon}</span>
                            <span className="app-name">{app.name}</span>
                          </div>
                        </td>
                        <td className="text-gray-400 text-sm">{app.description}</td>
                        <td>
                          <ul className="feature-list">
                            {app.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="feature-item">
                                <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </td>
                        <td>
                          <span className={`badge ${
                            app.plan === 'Included' 
                              ? 'badge-included' 
                              : app.plan === 'Add-on'
                              ? 'badge-addon'
                              : 'badge-limited'
                          }`}>
                            {app.plan}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-[#151516] py-20">
        <div className="app-container text-center">
          <h2 className="text-4xl font-semibold mb-6">Ready to get started?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Get access to all these powerful tools and more with Microsoft 365 Enterprise.
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium
            hover:bg-blue-500 transition-colors duration-200">
            Start Free Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Microsoft365AppsTable;
