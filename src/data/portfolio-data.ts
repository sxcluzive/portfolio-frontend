export interface Profile {
  name: string;
  role: string;
  company: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  leetcode: string;
  phone: string;
  experienceYears: number;
  specialization: string[];
}

export interface Skill {
  category: string;
  technologies: string[];
}

export interface Experience {
  company: string;
  position: string;
  duration: string;
  location: string;
  startDate: string;
  endDate: string | null;
  achievements: string[];
  technologies: string[];
}

export interface Project {
  name: string;
  description: string;
  github: string;
  technologies: string[];
  year: number;
  code: string;
}

export interface Metric {
  category: string;
  metric: string;
  value: string;
  description: string;
}

export const portfolioData = {
  profile: {
    name: "Shubham Singh",
    role: "Software Engineer 2",
    company: "Sierra Wireless (Semtech)",
    location: "Pune, India",
    email: "shubh.message@gmail.com",
    github: "github.com/shubhxcluzive",
    linkedin: "linkedin.com/in/shubhxcluzive",
    leetcode: "leetcode.com/u/shubhxcluzive/",
    phone: "+91 9956023261",
    experienceYears: 4,
    specialization: ["Backend Development", "API Design", "Cloud Services", "System Design"]
  },

  skills: [
    {
      category: "Backend Development",
      technologies: ["Python", "Django", "FastAPI", "Flask", "RESTful APIs", "System Design", "SQL", "Celery", "Microservices"]
    },
    {
      category: "Database & Cloud",
      technologies: ["PostgreSQL", "Elasticsearch", "Redis", "AWS (EC2, S3)", "Azure", "Zscaler ZIA cloud"]
    },
    {
      category: "AI/ML & DevOps",
      technologies: ["Model Context Protocol (MCP)", "LLM Integration", "Predictive Analytics", "Docker", "CI/CD (Jenkins)", "Git"]
    }
  ],

  experience: [
    {
      company: "Sierra Wireless (Semtech)",
      position: "Software Engineer 2",
      duration: "Sept 2023 - Present",
      location: "Pune, India",
      startDate: "2023-09",
      endDate: null,
      achievements: [
        "Developed a FastAPI application on Azure App Service with PostgreSQL backend for test result analytics that reduced debugging time by 40%",
        "Integrated MCP with test result data, reducing recurring failures by 35% and uncovering patterns across 1,000 daily tests",
        "Optimized core web service by migrating from Elasticsearch to PostgreSQL, resulting in a 97-second reduction in latency",
        "Designed and implemented Jenkins CI/CD pipelines with automated testing, reducing deployment time by 60%",
        "Accelerated junior developer onboarding, reducing production bugs by 20% through code reviews"
      ],
      technologies: ["Python", "Django", "FastAPI", "PostgreSQL", "RESTful APIs", "database design", "Stored Procedures"]
    },
    {
      company: "Zscaler",
      position: "Associate Software Engineer",
      duration: "Dec 2021 - Feb 2023",
      location: "Mohali, India",
      startDate: "2021-12",
      endDate: "2023-02",
      achievements: [
        "Engineered resilient REST APIs supporting automatic tunnel failover, resulting in 98.9% uptime for critical cloud services",
        "Improved API response time by 45% under peak load via optimized queries and caching",
        "Updated technical documentation post-release to align with user feedback and improve onboarding"
      ],
      technologies: ["Python", "Django", "Linux", "RESTful APIs", "Ubuntu Linux", "Linux tools", "Scripting", "Git"]
    },
    {
      company: "Zscaler",
      position: "Intern - Cloud Reliability",
      duration: "Mar 2021 - Nov 2021",
      location: "Mohali, India",
      startDate: "2021-03",
      endDate: "2021-11",
      achievements: [
        "Revamped and deployed automated test scripts for ZCC cloud builds that identified 15+ critical issues before production release",
        "Created a cross-platform testing solution using Sikuli and OpenCV that reduced manual QA effort by 40% for repetitive workflows"
      ],
      technologies: ["Python", "Django", "Fedora", "RESTful APIs", "Ubuntu Linux", "Linux tools", "Scripting", "Git"]
    }
  ],

  projects: [
    {
      name: "Natural Language Querying AI chatbot",
      description: "Slack bot for SQLite database interaction using natural language queries via Google Bard API.",
      github: "https://github.com/sxcluzive/Slack-Bot",
      technologies: ["Slack-Bolt Python Framework", "Google Bard API", "SQLite"],
      year: 2020,
      code: `from slack_bolt import App
import google.generativeai as genai
import sqlite3
from typing import Dict, Any

# Initialize Google Bard API
genai.configure(api_key=os.getenv('BARD_API_KEY'))
model = genai.GenerativeModel('gemini-pro')

class DatabaseBot:
    def __init__(self, db_path: str):
        self.db_path = db_path
        self.app = App(token=os.getenv('SLACK_BOT_TOKEN'))
        
    def process_query(self, user_input: str) -> str:
        prompt = f"Convert to SQL: {user_input}"
        response = model.generate_content(prompt)
        return response.text
        
    def execute_sql(self, sql: str) -> List[Dict[str, Any]]:
        with sqlite3.connect(self.db_path) as conn:
            cursor = conn.cursor()
            cursor.execute(sql)
            return cursor.fetchall()
            
    def handle_query(self, message, say):
        try:
            sql = self.process_query(message['text'])
            results = self.execute_sql(sql)
            say(f"Query: {sql}\\nResults: {results}")
        except Exception as e:
            say(f"Error: {str(e)}")`
    },
    {
      name: "E-commerce API",
      description: "FastAPI backend with PostgreSQL and async request handling for high-performance e-commerce operations.",
      github: "https://github.com/sxcluzive/ecommerce-api",
      technologies: ["FastAPI", "Celery", "Asyncio", "Redis", "JWT", "API design"],
      year: 2020,
      code: `from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine
from sqlalchemy.orm import sessionmaker, declarative_base
from typing import List, Optional
import asyncio

Base = declarative_base()

class Product(Base):
    __tablename__ = "products"
    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    price = Column(Float, nullable=False)
    stock = Column(Integer, default=0)

async def get_products(session: AsyncSession, 
                      skip: int = 0, 
                      limit: int = 100) -> List[Product]:
    query = select(Product).offset(skip).limit(limit)
    result = await session.execute(query)
    return result.scalars().all()

@app.get("/products", response_model=List[ProductSchema])
async def list_products(
    db: AsyncSession = Depends(get_db),
    skip: int = 0,
    limit: int = 100
):
    products = await get_products(db, skip=skip, limit=limit)
    return products`
    }
  ],

  metrics: [
    {
      category: "performance",
      metric: "latency_reduction",
      value: "97 seconds",
      description: "Latency reduction achieved through optimization"
    },
    {
      category: "performance",
      metric: "deployment_efficiency",
      value: "60%",
      description: "Deployment time reduction"
    },
    {
      category: "performance",
      metric: "uptime_achievement",
      value: "98.9%",
      description: "Critical service availability"
    },
    {
      category: "performance",
      metric: "API Optimization",
      value: "45%",
      description: "API response time improvement"
    },
    {
      category: "impact",
      metric: "bugs_prevented",
      value: "15+",
      description: "Critical issues identified before production"
    },
    {
      category: "impact",
      metric: "QA Efficiency",
      value: "40%",
      description: "Reduction in manual QA effort"
    }
  ]
}; 