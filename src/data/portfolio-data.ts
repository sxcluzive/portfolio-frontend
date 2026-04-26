// All content comes from resume.json — edit THAT file to update the portfolio.
// Code previews are kept here since multi-line strings are awkward in JSON.

import resumeData from './resume.json';

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

// Code previews — rarely change, kept separate from JSON
const codePreviews: Record<string, string> = {
  "Natural Language Querying AI chatbot": `from slack_bolt import App
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
            say(f"Error: {str(e)}")`,

  "E-commerce API": `from fastapi import FastAPI, Depends, HTTPException
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
    return products`,
};

// Merge resume.json data with code previews
export const portfolioData = {
  profile: resumeData.profile as Profile,
  skills: resumeData.skills as Skill[],
  experience: resumeData.experience as Experience[],
  projects: resumeData.projects.map(project => ({
    ...project,
    code: codePreviews[project.name] || '',
  })) as Project[],
  metrics: resumeData.metrics as Metric[],
};