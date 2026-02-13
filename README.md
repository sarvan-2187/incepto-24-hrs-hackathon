# Skill Torch

**AI-Based Upskilling & Job Matching Platform for Agniveers**

SkillTorch is an AI-powered career transition platform specifically designed to help Agniveers translate their military service experience into structured civilian employment opportunities.

It bridges discipline with digital transformation through AI-driven skill mapping, resume generation, and intelligent job matching.

---

## Architecture Diagram
<img width="2752" height="1536" alt="architecture_skill_torch" src="https://github.com/user-attachments/assets/2d7971c3-c745-432e-ae0b-2c21666ee600" />

---

## Problem Statement

Agniveers serve the nation under the Agnipath Scheme for four years. After completion of service, many face challenges such as:

- Difficulty translating military roles into corporate job profiles  
- Lack of structured skill-gap analysis  
- Limited access to targeted upskilling programs  
- Generic job portals not tailored to their background  

SkillTorch provides a specialized AI ecosystem to solve this.

---

## Proposed Solution

SkillTorch is a web-based platform offering:

- AI-powered skill mapping (Military → Civilian translation)
- Personalized upskilling roadmap
- LaTeX-based resume builder tailored for Agniveers
- Smart AI-driven job matching
- Recruiter dashboard
- Integrated chat & video interview system
- AI career guidance & mental wellness support
- Role-based authentication
- Multi-language support (planned)

---

## System Architecture Overview

### Client Layer
- Web Browser (Desktop & Mobile)

### Frontend
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Shadcn UI

### Backend
- Node.js
- Next.js API Handlers
- Role-Based Access Control

### Database
- MongoDB Atlas

### Authentication
- Firebase Authentication

### AI Integrations
- Gemini API
- Groq API
- Custom Skill Mapping Logic

### Video Interview
- ZegoCloud SDK

### Deployment
- Vercel
- GitHub

---

## Current Implementation Status

- Landing Page Frontend Completed  
- Backend, Database, and AI modules architected and structured for implementation  

This repository currently contains the fully developed landing page built using Next.js and Tailwind CSS as part of the hackathon MVP phase.

---

## Landing Page Features (Implemented)

- Hero section with value proposition
- Feature highlights
- How it works section
- Call-to-action sections
- Responsive layout (Desktop + Mobile)
- Clean modern UI

---

## Expected Impact

With structured AI-based transition support:

- Reduced job search time (2–3 months → 2–3 weeks)
- Increased placement diversity across sectors (IT, Corporate, Technical roles)
- Reduced hiring costs for employers
- Structured digital onboarding ecosystem for Agniveers

---

## Installation

```bash
git clone https://github.com/sarvan-2187/incepto-24-hrs-hackathon.git
cd skilltorch
npm install
npm run dev
```

Open in browser:

```
http://localhost:3000
```

---

## Future Roadmap

- AI Resume Generation Engine
- Skill Gap Analysis Dashboard
- Recruiter Verification System
- Smart Job Matching Algorithm
- Admin Control Panel
- Interview Scheduling Module
- Certification & Assessment Engine

---

## Team

Team CodeManiacs  
Hackathon Project – Skill Torch
