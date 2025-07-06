import { useState, useEffect } from "react";
import { Terminal } from 'lucide-react';
import { useView } from '../contexts/ViewContext';

// Generate API-focused activity data with current timestamps
const generateApiActivities = () => {
  const activities = [];
  const now = new Date();
  
  // API endpoints for the portfolio
  const apiEndpoints = ['/api/profile', '/api/skills', '/api/experience', '/api/metrics', '/api/projects'];
  const httpMethods = ['GET', 'POST', 'PUT', 'DELETE'];
  const statusCodes = [200, 201, 204, 400, 401, 404, 500];
  const responseTimes = [45, 67, 89, 123, 156, 234, 298, 345];
  
  for (let i = 0; i < 60; i++) {
    const timestamp = new Date(now.getTime() - (i * 1000 * 60)); // Each entry 1 minute apart
    const timeStr = timestamp.toLocaleTimeString('en-US', { 
      hour12: true, 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit' 
    });
    
    const method = httpMethods[Math.floor(Math.random() * httpMethods.length)];
    const endpoint = apiEndpoints[Math.floor(Math.random() * apiEndpoints.length)];
    const status = statusCodes[Math.floor(Math.random() * statusCodes.length)];
    const responseTime = responseTimes[Math.floor(Math.random() * responseTimes.length)];
    
    // API-focused activity types
    const activityTypes = [
      { type: `${method} ${endpoint}`, value: `${status} - ${responseTime}ms`, color: status >= 200 && status < 300 ? "text-green-400" : "text-red-400" },
      { type: "API rate limit", value: `${Math.floor(Math.random() * 50) + 30}/100`, color: "text-cyan-glow" },
      { type: "Authentication", value: "JWT validated", color: "text-green-400" },
      { type: "CORS check", value: "Origin allowed", color: "text-green-400" },
      { type: "Request validation", value: "Schema valid", color: "text-green-400" },
      { type: "Database query", value: `${Math.floor(Math.random() * 5) + 1} queries`, color: "text-blue-400" },
      { type: "Cache lookup", value: Math.random() > 0.3 ? "Cache hit" : "Cache miss", color: "text-purple-400" },
      { type: "Rate limiting", value: Math.random() > 0.9 ? "Limit exceeded" : "Within limits", color: "text-orange-400" },
      { type: "Logging", value: "Request logged", color: "text-gray-400" },
      { type: "Error handling", value: Math.random() > 0.95 ? "Error caught" : "Success", color: "text-yellow-400" },
      { type: "Response compression", value: "GZIP applied", color: "text-green-400" },
      { type: "Security scan", value: "No threats detected", color: "text-green-400" },
      { type: "Session management", value: "Session valid", color: "text-green-400" },
      { type: "API versioning", value: "v2.1", color: "text-purple-400" },
      { type: "Load balancing", value: "Request routed", color: "text-blue-400" },
      { type: "SSL/TLS", value: "Secure connection", color: "text-green-400" },
      { type: "Request parsing", value: "JSON parsed", color: "text-green-400" },
      { type: "Response serialization", value: "JSON serialized", color: "text-green-400" },
      { type: "Middleware execution", value: "All passed", color: "text-green-400" },
      { type: "Database connection", value: "Pool active", color: "text-green-400" }
    ];
    
    const activity = activityTypes[Math.floor(Math.random() * activityTypes.length)];
    activities.push({
      time: timeStr,
      type: activity.type,
      value: activity.value,
      color: activity.color
    });
  }
  
  return activities;
};

interface ApiResponse {
  status: number;
  data: any;
  timestamp: string;
  responseTime: number;
  endpoint: string;
}

interface RequestHistory {
  endpoint: string;
  timestamp: string;
  responseTime: number;
  status: number;
  success: boolean;
}

const apiEndpoints = [
  {
    endpoint: 'profile',
    method: 'GET',
    description: 'Get basic profile information',
    color: 'border-matrix text-matrix',
    icon: '👤',
    example: {
      "name": "Shubham Singh",
      "title": "Backend Engineer",
      "email": "shubh.message@gmail.com"
    }
  },
  {
    endpoint: 'skills',
    method: 'GET',
    description: 'Retrieve technical skills',
    color: 'border-cyan-glow text-cyan-glow',
    icon: '⚡',
    example: {
      "languages": [ "JavaScript", "TypeScript", "Python" ],
      "frameworks": [ "Node.js", "Express", "FastAPI" ]
    }
  },
  {
    endpoint: 'experience',
    method: 'GET',
    description: 'Get work experience data',
    color: 'border-amber-glow text-amber-glow',
    icon: '💼',
    example: {
      "companies": [ { "name": "Tech Company", "role": "Backend Engineer", "duration": "2022-2024" } ]
    }
  },
  {
    endpoint: 'metrics',
    method: 'GET',
    description: 'Performance metrics and achievements',
    color: 'border-red-glow text-red-glow',
    icon: '📊',
    example: {
      "projects_completed": 25,
      "uptime_percentage": 99.9
    }
  },
];

const mockApiResponses: Record<string, any> = {
  profile: {
    "id": 1,
    "name": "Shubham Singh",
    "role": "Software Engineer 2",
    "company": "Sierra Wireless (Semtech)",
    "location": "Pune, India",
    "email": "shubh.message@gmail.com",
    "github": "github.com/shubhxcluzive",
    "linkedin": "linkedin.com/in/shubhxcluzive",
    "leetcode": "leetcode.com/u/shubhxcluzive/",
    "phone": "+91 9956023261",
    "experienceYears": 4,
    "specialization": [
      "Backend Development",
      "API Design",
      "Cloud Services",
      "System Design"
    ]
  },
  skills: [
    {
      "id": 2,
      "category": "Backend Development",
      "technologies": [
        "Python",
        "Django",
        "FastAPI",
        "Flask",
        "RESTful APIs",
        "System Design",
        "SQL",
        "Celery",
        "Microservices"
      ]
    },
    {
      "id": 3,
      "category": "Database & Cloud",
      "technologies": [
        "PostgreSQL",
        "Elasticsearch",
        "Redis",
        "AWS (EC2, S3)",
        "Azure",
        "Zscaler ZIA cloud"
      ]
    },
    {
      "id": 4,
      "category": "AI/ML & DevOps",
      "technologies": [
        "Model Context Protocol (MCP)",
        "LLM Integration",
        "Predictive Analytics",
        "Docker",
        "CI/CD (Jenkins)",
        "Git"
      ]
    }
  ],
  experience: [
    {
      "id": 5,
      "company": "Sierra Wireless (Semtech)",
      "role": "Software Engineer 2",
      "duration": "Sept 2023 - Present",
      "location": "Pune, India",
      "startDate": "2023-09",
      "endDate": null,
      "achievements": [
        "Developed a FastAPI application on Azure App Service with PostgreSQL backend for test result analytics that reduced debugging time by 40%",
        "Integrated MCP with test result data, reducing recurring failures by 35% and uncovering patterns across 1,000 daily tests",
        "Optimized core web service by migrating from Elasticsearch to PostgreSQL, resulting in a 97-second reduction in latency",
        "Designed and implemented Jenkins CI/CD pipelines with automated testing, reducing deployment time by 60%",
        "Accelerated junior developer onboarding, reducing production bugs by 20% through code reviews"
      ],
      "technologies": [
        "Python",
        "Django",
        "FastAPI",
        "PostgreSQL",
        "RESTful APIs",
        "database design",
        "Stored Procedures"
      ]
    },
    {
      "id": 6,
      "company": "Zscaler",
      "role": "Associate Software Engineer",
      "duration": "Dec 2021 - Feb 2023",
      "location": "Mohali, India",
      "startDate": "2021-12",
      "endDate": "2023-02",
      "achievements": [
        "Engineered resilient REST APIs supporting automatic tunnel failover, resulting in 98.9% uptime for critical cloud services",
        "Improved API response time by 45% under peak load via optimized queries and caching",
        "Updated technical documentation post-release to align with user feedback and improve onboarding"
      ],
      "technologies": [
        "Python",
        "Django",
        "Linux",
        "RESTful APIs",
        "Ubuntu Linux",
        "Linux tools",
        "Scripting",
        "Git"
      ]
    },
    {
      "id": 7,
      "company": "Zscaler",
      "role": "Intern - Cloud Reliability",
      "duration": "Mar 2021 - Nov 2021",
      "location": "Mohali, India",
      "startDate": "2021-03",
      "endDate": "2021-11",
      "achievements": [
        "Revamped and deployed automated test scripts for ZCC cloud builds that identified 15+ critical issues before production release",
        "Created a cross-platform testing solution using Sikuli and OpenCV that reduced manual QA effort by 40% for repetitive workflows"
      ],
      "technologies": [
        "Python",
        "Django",
        "Fedora",
        "RESTful APIs",
        "Ubuntu Linux",
        "Linux tools",
        "Scripting",
        "Git"
      ]
    }
  ],
  metrics: [
    {
      "id": 10,
      "category": "performance",
      "metric": "latency_reduction",
      "value": "97 seconds",
      "description": "Latency reduction achieved through optimization"
    },
    {
      "id": 11,
      "category": "performance",
      "metric": "deployment_efficiency",
      "value": "60%",
      "description": "Deployment time reduction"
    },
    {
      "id": 12,
      "category": "performance",
      "metric": "uptime_achievement",
      "value": "98.9%",
      "description": "Critical service availability"
    },
    {
      "id": 13,
      "category": "performance",
      "metric": "api_optimization",
      "value": "45%",
      "description": "API response time improvement"
    },
    {
      "id": 14,
      "category": "impact",
      "metric": "bugs_prevented",
      "value": "15+",
      "description": "Critical issues identified before production"
    },
    {
      "id": 15,
      "category": "impact",
      "metric": "qa_efficiency",
      "value": "40%",
      "description": "Reduction in manual QA effort"
    },
    {
      "id": 16,
      "category": "impact",
      "metric": "team_productivity",
      "value": "20%",
      "description": "Bug reduction through code reviews"
    }
  ]
};

function highlightJSON(json: any): string {
  const jsonString = JSON.stringify(json, null, 2);
  return jsonString
    .replace(/"([^\"]+)":/g, '<span class="text-blue-400 font-semibold">"$1"</span>:')
    .replace(/: "([^\"]+)"/g, ': <span class="text-green-400">"$1"</span>')
    .replace(/: (\d+)/g, ': <span class="text-yellow-400 font-semibold">$1</span>')
    .replace(/: (true|false)/g, ': <span class="text-purple-400 font-semibold">$1</span>')
    .replace(/: (null)/g, ': <span class="text-red-400 font-semibold">$1</span>')
    .replace(/(\{|\}|\[|\])/g, '<span class="text-gray-400">$1</span>')
    .replace(/(,)/g, '<span class="text-gray-400">$1</span>');
}

function getMethodColor(method: string) {
  switch (method) {
    case 'GET': return 'bg-green-500/20 text-green-400 border-green-500/30';
    case 'POST': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
    case 'PUT': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
    case 'DELETE': return 'bg-red-500/20 text-red-400 border-red-500/30';
    default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
  }
}

export default function ApiPlayground() {
  const { isDeveloperMode } = useView();
  const [apiResponse, setApiResponse] = useState<ApiResponse | null>(null);
  // const [isLoading, setIsLoading] = useState<string | null>(null);
  const [requestHistory, setRequestHistory] = useState<RequestHistory[]>([]);
  const [selectedEndpoint, setSelectedEndpoint] = useState<string | null>(null);
  // const [showHistory, setShowHistory] = useState(false);
  // const [autoRefresh, setAutoRefresh] = useState(false);
  const [currentActivities, setCurrentActivities] = useState<Array<{time: string, type: string, value: string, color: string}>>([]);
  const [activityIndex, setActivityIndex] = useState(0);

  // useEffect(() => {
  //   if (autoRefresh && selectedEndpoint) {
  //     const interval = setInterval(() => {
  //       executeAPI(selectedEndpoint);
  //     }, 10000);
  //     return () => clearInterval(interval);
  //   }
  // }, [autoRefresh, selectedEndpoint]);

  // Activity monitor rotation every second
  useEffect(() => {
    const interval = setInterval(() => {
      setActivityIndex(prev => (prev + 1) % 60);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Update current activities when index changes
  useEffect(() => {
    const allActivities = generateApiActivities();
    const startIndex = activityIndex;
    const activities = [];
    for (let i = 0; i < 20; i++) {
      const index = (startIndex + i) % allActivities.length;
      activities.push(allActivities[index]);
    }
    setCurrentActivities(activities);
  }, [activityIndex]);

  const executeAPI = async (endpoint: string) => {
    // setIsLoading(endpoint);
    setSelectedEndpoint(endpoint);
    const startTime = Date.now();
    const data = mockApiResponses[endpoint] || { error: 'Endpoint not found' };
    const responseTime = Date.now() - startTime;
    const timestamp = new Date().toLocaleTimeString();
    // Add to request history
    const historyEntry: RequestHistory = {
      endpoint,
      timestamp,
      responseTime,
      status: 200,
      success: true
    };
    setRequestHistory(prev => [historyEntry, ...prev.slice(0, 49)]);
    setApiResponse({
      status: 200,
      data,
      timestamp,
      responseTime,
      endpoint
    });
    // setIsLoading(null);
  };

  const getStats = () => {
    const totalRequests = requestHistory.length;
    const successfulRequests = requestHistory.filter(r => r.success).length;
    const averageResponseTime = totalRequests > 0 
      ? Math.round(requestHistory.reduce((sum, r) => sum + r.responseTime, 0) / totalRequests)
      : 0;
    const successRate = totalRequests > 0 ? Math.round((successfulRequests / totalRequests) * 100) : 0;
    return { totalRequests, successfulRequests, averageResponseTime, successRate };
  };
  const stats = getStats();

  return (
    <section id="api" className="min-h-screen bg-[var(--background)] text-[var(--foreground)] py-12">
      <div className={`container mx-auto ${isDeveloperMode ? 'px-[7.5%]' : 'px-[10%]'}`}>
        {/* Header */}
        <div className="mb-6">
          <div className="text-center mb-6">
            <div className="mb-4 flex justify-start">
              <div className="inline-flex items-center space-x-2 bg-[var(--terminal-gray)] border border-[var(--terminal-border)] rounded-lg px-4 py-2 mb-2 shadow-lg backdrop-blur-md relative">
                <div className="absolute -inset-1 rounded-lg bg-[var(--matrix)]/5 blur-sm pointer-events-none" />
                <Terminal size={20} className="text-[var(--matrix)]" />
                <span className="text-[var(--matrix)] font-mono text-sm">root@shubhxcluzive:~$</span>
                                  <span className="text-[var(--foreground)] font-mono text-sm">curl -X GET https://api.shubham.portfolio/</span>
              </div>
            </div>

          </div>
        </div>
        {/* Statistics Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-6">
          <div className="border border-[var(--terminal-border)] rounded-lg p-3 bg-[var(--terminal-gray)] hover:bg-[var(--terminal-bg)] transition-colors duration-200">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xl font-bold text-[var(--matrix)]">{stats.totalRequests}</div>
                <div className="text-xs text-[var(--muted-foreground)] uppercase tracking-wide">Total Requests</div>
              </div>
              <div className="text-cyan-glow text-xl bg-cyan-500/10 p-2 rounded-lg">📈</div>
            </div>
          </div>
          <div className="border border-[var(--terminal-border)] rounded-lg p-3 bg-[var(--terminal-gray)] hover:bg-[var(--terminal-bg)] transition-colors duration-200">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xl font-bold text-green-400">{stats.successRate}%</div>
                <div className="text-xs text-[var(--muted-foreground)] uppercase tracking-wide">Success Rate</div>
              </div>
              <div className="text-green-400 text-xl bg-green-500/10 p-2 rounded-lg">✅</div>
            </div>
          </div>
          <div className="border border-[var(--terminal-border)] rounded-lg p-3 bg-[var(--terminal-gray)] hover:bg-[var(--terminal-bg)] transition-colors duration-200">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xl font-bold text-amber-glow">{stats.averageResponseTime}ms</div>
                <div className="text-xs text-[var(--muted-foreground)] uppercase tracking-wide">Avg Response</div>
              </div>
              <div className="text-amber-glow text-xl bg-yellow-500/10 p-2 rounded-lg">⏱️</div>
            </div>
          </div>
          <div className="border border-[var(--terminal-border)] rounded-lg p-3 bg-[var(--terminal-gray)] hover:bg-[var(--terminal-bg)] transition-colors duration-200">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xl font-bold text-red-glow">{apiEndpoints.length}</div>
                <div className="text-xs text-[var(--muted-foreground)] uppercase tracking-wide">Endpoints</div>
              </div>
              <div className="text-red-glow text-xl bg-red-500/10 p-2 rounded-lg">🧩</div>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column: Endpoints */}
          <div className="lg:col-span-1 space-y-4">
            {/* API Endpoints */}
            <div className="border border-[var(--terminal-border)] rounded-lg p-4 bg-[var(--terminal-gray)]">
              <div className="text-amber-glow mb-4 flex items-center justify-between">
                <div className="flex items-center">
                  <span className="mr-2 text-lg">💻</span>
                  <span className="font-semibold">Available Endpoints</span>
                  <span className="ml-2 px-2 py-1 bg-[var(--matrix)] text-[var(--terminal-bg)] text-xs rounded-full font-mono">
                    {apiEndpoints.length}
                  </span>
                </div>

              </div>
              {/* API Endpoints */}
              <div className="space-y-2">
                {apiEndpoints.map(({ endpoint, method, description, color, icon, example }) => (
                  <div 
                    key={endpoint}
                    className={`border rounded-lg p-3 bg-[var(--terminal-bg)] transition-all duration-200 ${color} cursor-pointer hover:bg-[var(--terminal-gray)] hover:border-[var(--matrix)] ${
                      selectedEndpoint === endpoint ? 'ring-2 ring-[var(--matrix)] ring-opacity-50 bg-[var(--terminal-gray)]' : ''
                    }`}
                    onClick={() => executeAPI(endpoint)}
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-lg">{icon}</span>
                      <span className={`px-2 py-1 rounded text-xs font-bold border ${getMethodColor(method)}`}>
                        {method}
                      </span>
                      <span className="font-mono text-sm font-semibold">/api/{endpoint}</span>

                    </div>
                                        <div className="text-xs text-[var(--muted-foreground)] mb-3 leading-relaxed">{description}</div>
                    {/* Example Preview */}
                    <div className="bg-[var(--terminal-bg)] rounded p-3 text-xs font-mono opacity-80 border border-[var(--terminal-border)]">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[var(--muted-foreground)] font-medium">Example:</span>
                      </div>
                      <div dangerouslySetInnerHTML={{ __html: highlightJSON(example) }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Request History */}
            {/* {showHistory && ( */}
              <div className="border border-[var(--terminal-border)] rounded-lg p-6 bg-[var(--terminal-gray)]">
                <div className="text-amber-glow mb-4 flex items-center">
                  <span className="mr-2">🕑</span>Request History
                </div>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {requestHistory.slice(0, 10).map((req, index) => (
                    <div key={index} className="flex items-center justify-between text-xs p-2 bg-[var(--terminal-bg)] rounded">
                      <div className="flex items-center space-x-2">
                        <span className={`w-2 h-2 rounded-full ${
                          req.success ? 'bg-green-400' : 'bg-red-400'
                        }`}></span>
                        <span className="font-mono">/api/{req.endpoint}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-[var(--muted-foreground)]">
                        <span>{req.responseTime}ms</span>
                        <span>{req.timestamp}</span>
                      </div>
                    </div>
                  ))}
                  {requestHistory.length === 0 && (
                    <div className="text-center text-[var(--muted-foreground)] text-sm py-4">
                      No requests yet
                    </div>
                  )}
                </div>
              </div>
            {/* )} */}
          </div>

          {/* Right Column: Response Console + Activity Monitor */}
          <div className="lg:col-span-2 space-y-4">
            {/* Response Console */}
            <div className="border border-[var(--terminal-border)] rounded-lg p-6 bg-[var(--terminal-bg)]">
              <div className="text-amber-glow mb-4 flex items-center justify-between">
                <div className="flex items-center">
                  <span className="font-semibold">Response Console</span>
                  {apiResponse && (
                    <span className="ml-2 px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full font-mono border border-green-500/30">
                      Active
                    </span>
                  )}
                </div>
                {apiResponse && (
                  <div className="flex items-center space-x-2 text-xs">
                    <span className="text-[var(--muted-foreground)]">Last updated:</span>
                    <span className="text-[var(--matrix)] font-mono">{apiResponse.timestamp}</span>
                  </div>
                )}
              </div>
              {apiResponse ? (
                <div className="space-y-4">
                  {/* Response Metadata */}
                  <div className="border border-[var(--terminal-border)] rounded-lg p-4 bg-[var(--terminal-gray)]">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <span className={`px-3 py-1 rounded text-sm font-medium ${
                          apiResponse.status >= 200 && apiResponse.status < 300 
                            ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                            : 'bg-red-500/20 text-red-400 border border-red-500/30'
                        }`}>
                          {apiResponse.status} {apiResponse.status >= 200 && apiResponse.status < 300 ? 'OK' : 'ERROR'}
                        </span>
                        <div className="flex items-center space-x-4 text-sm text-[var(--muted-foreground)]">
                          <span className="flex items-center">
                            <span className="mr-1">⏰</span>
                            {apiResponse.timestamp}
                          </span>
                          <span className="flex items-center">
                            <span className="mr-1">⚡</span>
                            {apiResponse.responseTime}ms
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-mono text-[var(--matrix)] font-semibold">/api/{apiResponse.endpoint}</div>
                        <div className="text-xs text-[var(--muted-foreground)]">Content-Type: application/json</div>
                      </div>
                    </div>
                  </div>
                  {/* Response Body */}
                  <div className="bg-[var(--terminal-bg)] rounded p-4 border border-[var(--terminal-border)]">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-xs text-[var(--muted-foreground)] font-medium">Response Body (application/json)</span>
                      <span className="text-xs text-green-400 font-mono">200 OK</span>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      <pre className="text-sm overflow-x-auto">
                        <code dangerouslySetInnerHTML={{ __html: highlightJSON(apiResponse.data) }} />
                      </pre>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-96 text-[var(--muted-foreground)]">
                                  <div className="text-center">
                  <div className="text-lg font-medium">Select an endpoint to test the API</div>
                    <div className="text-sm opacity-70 mt-2">Response will appear here</div>
                  </div>
                </div>
              )}
            </div>

            {/* API Call Activity Monitor */}
            <div className="border border-[var(--terminal-border)] rounded-lg p-4 bg-[var(--terminal-gray)]">
              <div className="text-amber-glow mb-4 flex items-center justify-between">
                <div className="flex items-center">
                  <span className="mr-2 text-lg">📊</span>
                  <span className="font-semibold">API Call Activity</span>
                  <span className="ml-2 px-2 py-1 bg-[var(--matrix)]/20 text-[var(--matrix)] text-xs rounded-full font-mono border border-[var(--matrix)]/30">
                    20 recent API calls
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-[var(--muted-foreground)]">Live</span>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
              </div>
              
              <div className="space-y-1 max-h-48 overflow-y-auto">
                {currentActivities.map((activity, index) => (
                  <div key={index} className="text-xs font-mono text-[var(--foreground)]">
                    <span className="text-[var(--matrix)]">→</span>
                    <span className="text-[var(--muted-foreground)]">[{activity.time}]</span>
                    <span className={activity.color}>{activity.type}:</span>
                    <span className="text-[var(--foreground)]">{activity.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
} 