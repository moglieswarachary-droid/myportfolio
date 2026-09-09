// Minimal valid PDF generator without external dependencies
import fs from 'fs';
import path from 'path';

function createSimplePDF(outputPath) {
  const content = `%PDF-1.4
1 0 obj
<<
  /Type /Catalog
  /Pages 2 0 R
>>
endobj
2 0 obj
<<
  /Type /Pages
  /Kids [3 0 R]
  /Count 1
>>
endobj
3 0 obj
<<
  /Type /Page
  /Parent 2 0 R
  /MediaBox [0 0 612 792]
  /Resources <<
    /Font <<
      /F1 4 0 R
      /F2 5 0 R
    >>
  >>
  /Contents 6 0 R
>>
endobj
4 0 obj
<<
  /Type /Font
  /Subtype /Type1
  /BaseFont /Helvetica-Bold
>>
endobj
5 0 obj
<<
  /Type /Font
  /Subtype /Type1
  /BaseFont /Helvetica
>>
endobj
6 0 obj
<<
  /Length 1200
>>
stream
BT
/F1 20 Tf
50 740 Td
(M MOGLIESWAR) Tj
/F2 10 Tf
0 -18 Td
(CSE (AI & ML) | SOFTWARE DEVELOPER | AI/ML & FULL-STACK PROJECT BUILDER) Tj
0 -14 Td
(Email: moglieswar999@gmail.com | Location: Kuppam, Andhra Pradesh, India) Tj
0 -14 Td
(GitHub: https://github.com/moglieswarachary-droid | LinkedIn: https://www.linkedin.com/in/m-moglieswar-achari-b324a5376) Tj
0 -24 Td
/F1 12 Tf
(EDUCATION) Tj
/F2 9 Tf
0 -14 Td
(B.Tech in Computer Science & Engineering (AI & ML) - Kuppam Engineering College (JNTUA) | 2023-2027) Tj
0 -12 Td
(Intermediate (MPC) - Kuppam Junior College | 2021-2023 | 72.8%) Tj
0 -12 Td
(Secondary School Certificate (SSC) - Narayana English Medium High School | 2020-2021 | 100%) Tj
0 -22 Td
/F1 12 Tf
(EXPERIENCE) Tj
/F2 9 Tf
0 -14 Td
(AI/ML Intern - VaultSphere AI Technologies (Remote, 2 Months)) Tj
0 -12 Td
(Trained in Python, NumPy, Pandas, EDA, ML model evaluation. Project: Spam Mail Detection System) Tj
0 -22 Td
/F1 12 Tf
(PRIMARY PROJECTS) Tj
/F2 9 Tf
0 -14 Td
(1. CampusNet: National Student, Mentor & Research Network (NestJS, PostgreSQL, Prisma, Redis, FastAPI)) Tj
0 -12 Td
(2. RideToTrack: GPS Location Telemetry & Safety Platform (Flutter, Dart, FastAPI, Docker, Railway)) Tj
0 -12 Td
(3. PayTrack: Personal Payment & Credit Tracking System (TypeScript, Firebase, REST APIs)) Tj
0 -22 Td
/F1 12 Tf
(TECHNICAL SKILLS) Tj
/F2 9 Tf
0 -14 Td
(Languages: Python, JavaScript, TypeScript, Dart, HTML, CSS) Tj
0 -12 Td
(AI & ML: Artificial Intelligence, Machine Learning, NLP, OpenCV, LLMs, Scikit-learn, TensorFlow, NLTK) Tj
0 -12 Td
(Backend & Systems: FastAPI, Node.js, NestJS, REST APIs, PostgreSQL, Prisma, Firebase, Redis, Docker) Tj
0 -22 Td
/F1 12 Tf
(CERTIFICATIONS) Tj
/F2 9 Tf
0 -14 Td
(AI for Business Professional Certificate | HP LIFE Starting a Small Business & Digital 101) Tj
0 -12 Td
(FutureSkills Prime (SSC NASSCOM) | APSSDC Skill Development | JavaScript Training (EduPyramids / IIT Bombay)) Tj
ET
endstream
endobj
xref
0 7
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000261 00000 n 
0000000337 00000 n 
0000000408 00000 n 
trailer
<<
  /Size 7
  /Root 1 0 R
>>
startxref
1660
%%EOF`;

  fs.writeFileSync(outputPath, content.trim());
  console.log(`Successfully generated resume PDF at ${outputPath}`);
}

createSimplePDF(path.join(process.cwd(), 'public', 'M-Moglieswar-Resume.pdf'));
