"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  FileText,
  Download,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Briefcase,
  GraduationCap,
  Wrench,
  Folder,
  Award,
} from "lucide-react";

export function CVModal() {
  const [isOpen, setIsOpen] = useState(false);

  const downloadCV = () => {
    const cvContent = `EMMANUEL SEUN SHITTU
Full Stack Developer
11, Ila Oragun Street, Ketu, Lagos State, Nigeria
+2347036613047
shem4soul@gmail.com
linkedin.com/in/emmanuel-shittu-91573915a
github.com/shem4soul

PROFILE
Full Stack Developer with hands-on experience building scalable web applications across both frontend and backend. 
Proficient in Node.js, Express, React.js, and MongoDB, with strong expertise in API design, UI integration, and cloud deployments (AWS, Docker, Heroku). Passionate about developing clean, secure, and high-performing full stack systems.

PROFESSIONAL EXPERIENCE
Backend Developer — Divnerix Innovations (Jan 2025 – Present)
Backend Developer (Volunteer) — ScholarGuide (Jan 2025 – Present)
Backend Developer (Volunteer) — Ed3Hub (Dec 2024 – Present)
Full Stack Developer — Groovinx / SkyeStudio Project (Oct 2024 – Dec 2024)
Full Stack Developer (Intern) — In-box Elite (Aug 2023 – Dec 2024)
Frontend Developer (Contract) — GlowUp Beauty (Mar 2023 – Jul 2025)
Backend Development Intern — CareerEx (Jun 2024 – Dec 2024)
Full Stack Developer (Trainee) — EdoJobs Tech Bootcamp (Jan 2023 – Dec 2023)

EDUCATION
B.Sc. Finance – University of Benin (2018)
National Diploma – Abraham Adesanya Polytechnic (2010)

PROJECTS
E-commerce API, QR Movie Code Generator, Job API, Donation Platform, Recipe Sharing Platform, Expense Tracker.

CERTIFICATIONS
• Backend Development (Node.js) – CareerEx
• Foundations: Data, Data, Everywhere – Coursera
• Python and Statistics for Financial Analysis – Coursera

REFERENCES
Available upon request.`;

    const element = document.createElement("a");
    const file = new Blob([cvContent], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "Emmanuel_Seun_Shittu_CV.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-transparent">
          <FileText className="mr-2 h-4 w-4" />
          View CV
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-5xl max-h-[90vh] p-0 bg-slate-900 text-white overflow-hidden rounded-2xl">
        {/* Header */}
        <div className="p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 border-b border-slate-700 bg-slate-800">
          <Image
            src="/image.png"
            alt="Emmanuel Shittu"
            width={120}
            height={120}
            className="rounded-full object-cover border-2 border-slate-500"
          />
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-3xl font-bold mb-1">Emmanuel Seun Shittu</h1>
            <p className="text-blue-400 mb-4 text-lg">Full Stack Developer</p>

            <div className="flex flex-wrap justify-center sm:justify-start gap-3 text-sm text-gray-300">
              <div className="flex items-center gap-1">
                <Mail className="h-4 w-4" /> shem4soul@gmail.com
              </div>
              <div className="flex items-center gap-1">
                <Phone className="h-4 w-4" /> +234 703 661 3047
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" /> Lagos, Nigeria
              </div>
              <div className="flex items-center gap-1">
                <Linkedin className="h-4 w-4" />{" "}
                linkedin.com/in/emmanuel-shittu-91573915a
              </div>
              <div className="flex items-center gap-1">
                <Github className="h-4 w-4" /> github.com/shem4soul
              </div>
            </div>
          </div>
          <Button
            variant="outline"
            onClick={downloadCV}
            className="border-slate-500 hover:bg-slate-700 text-white mt-4 sm:mt-0"
          >
            <Download className="mr-2 h-4 w-4" /> Download TXT
          </Button>
        </div>

        {/* Scrollable Body */}
        <ScrollArea className="h-[70vh] px-8 py-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-8 text-gray-300"
          >
            {/* Profile */}
            {/* Profile Section */}
            <section>
              <div className="flex items-center gap-2 mb-2 text-white font-semibold">
                <FileText className="h-5 w-5 text-blue-400" /> Profile
              </div>
              <p>
                Backend Developer with strong experience designing, building,
                testing, and deploying scalable and secure backend systems using
                Node.js, Express.js, TypeScript, and NestJS. Skilled in
                developing RESTful and microservices-based APIs, implementing
                authentication and authorization (JWT, RBAC, OAuth2), and
                optimizing performance across MongoDB, MySQL, and PostgreSQL.
                Experienced in unit and integration testing (Jest, Supertest)
                and integrating automated tests into CI/CD pipelines (GitHub
                Actions). Passionate about clean architecture, modular backend
                design, and building systems that scale.
              </p>
            </section>

            {/* Technical Skills */}
            <section>
              <div className="flex items-center gap-2 mb-2 text-white font-semibold">
                <Wrench className="h-5 w-5 text-blue-400" /> Technical Skills
              </div>
              <ul className="list-disc ml-6 space-y-1">
                <li>
                  <strong>Backend & Architecture:</strong> Node.js, Express.js,
                  NestJS, TypeScript, JavaScript, RESTful & Microservices
                  Architecture, MVC & Modular Architecture, Event-Driven &
                  Asynchronous Processing
                </li>
                <li>
                  <strong>Databases & Caching:</strong> MongoDB (Mongoose),
                  MySQL & PostgreSQL (Sequelize), Redis, Query Optimization &
                  Indexing, Transactions & Data Modeling
                </li>
                <li>
                  <strong>DevOps & CI/CD:</strong> Git & GitHub, GitHub Actions,
                  Docker, PM2, AWS, Render, Heroku, Deployment Automation &
                  Monitoring
                </li>
                <li>
                  <strong>Security & Authentication:</strong> JWT, RBAC, OAuth2,
                  Rate Limiting, Secure API Design & Input Validation
                </li>
                <li>
                  <strong>Testing & QA:</strong> Jest, Supertest, Mocha & Chai,
                  Mocking & Spies, Regression Testing, Test Automation in CI/CD
                  Pipelines
                </li>
                <li>
                  <strong>Documentation & Tools:</strong> Swagger (OpenAPI),
                  Postman, Insomnia, Agile/Scrum
                </li>
              </ul>
            </section>

            {/* Professional Experience */}
            <section>
              <div className="flex items-center gap-2 mb-2 text-white font-semibold">
                <Briefcase className="h-5 w-5 text-blue-400" /> Professional
                Experience
              </div>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  <strong>Backend Developer</strong> — Divnerix Innovations (Jan
                  2025 – Present, Remote, Nigeria)
                  <ul className="list-disc ml-6">
                    <li>
                      Designed and implemented scalable backend architectures
                      using Node.js, Express, Sequelize, MongoDB
                    </li>
                    <li>
                      Built secure RESTful APIs for authentication, payments,
                      donations, events, and content management
                    </li>
                    <li>
                      Implemented JWT, RBAC, and request validation to
                      strengthen security
                    </li>
                    <li>
                      Optimized API performance with query optimization, Redis
                      caching, and async processing (up to 40% faster)
                    </li>
                    <li>
                      Wrote unit & integration tests using Jest & Supertest
                    </li>
                    <li>
                      Integrated CI/CD pipelines with GitHub Actions and
                      deployed to AWS & Heroku
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Backend Developer (Volunteer)</strong> — ScholarGuide
                  (Feb 2025 – Oct 2025, Remote, Nigeria)
                  <ul className="list-disc ml-6">
                    <li>
                      Developing scalable backend APIs with Node.js, Express,
                      and MongoDB (Mongoose)
                    </li>
                    <li>
                      Implementing CRUD operations for courses, user profiles,
                      and gamification modules (points, badges, leaderboards)
                    </li>
                    <li>
                      Integrating JWT authentication and role-based access for
                      Admin, Teacher, Parent, and Student users
                    </li>
                    <li>
                      Applying caching and rate limiting to enhance API
                      performance and reliability
                    </li>
                    <li>
                      Documented APIs with Swagger, improving team collaboration
                      and onboarding efficiency
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Backend Developer (Volunteer)</strong> — Ed3Hub (Dec
                  2024 – Aug 2025, Remote, Nigeria)
                  <ul className="list-disc ml-6">
                    <li>
                      Developing a polyglot backend architecture using
                      PostgreSQL, MySQL, and MongoDB
                    </li>
                    <li>
                      Building backend APIs with Node.js, Express, and Sequelize
                      ORM for seamless SQL/NoSQL integration
                    </li>
                    <li>
                      Integrating Redis for caching and Elasticsearch for search
                      and recommendation features
                    </li>
                    <li>
                      Implementing NFT certification endpoints and token-based
                      gamification
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Backend Development Intern</strong> — CareerEx (Jun
                  2024 – Dec 2024, Remote)
                  <ul className="list-disc ml-6">
                    <li>
                      Developed REST APIs for fintech and e-commerce projects
                    </li>
                    <li>
                      Integrated Paystack & PayPal payment gateways with
                      multi-currency support
                    </li>
                    <li>
                      Implemented error handling and validation, reducing bugs
                      by 40%
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Backend Developer Intern</strong> — In-box Elite (Aug
                  2023 – Dec 2024)
                  <ul className="list-disc ml-6">
                    <li>
                      Developed and maintained backend services using Node.js,
                      Express, Sequelize (MySQL)
                    </li>
                    <li>
                      Implemented authentication, input validation, and
                      structured error-handling middleware
                    </li>
                    <li>
                      Optimized database queries, improving API response time by
                      30%
                    </li>
                    <li>
                      Automated order & stock tracking workflows, reducing
                      manual processes by 40%
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Backend Developer (Contract)</strong> — Groovinx /
                  SkyeStudio Project (Oct 2024 – Dec 2024, Remote)
                  <ul className="list-disc ml-6">
                    <li>
                      Developed backend services for content scheduling, media
                      rendering, and analytics processing
                    </li>
                    <li>
                      Integrated Facebook Graph API, FabricJS, and FFMPEG for
                      automated content generation
                    </li>
                    <li>
                      Optimized backend performance, reduced latency, and
                      improved system responsiveness
                    </li>
                  </ul>
                </li>
              </ul>
            </section>

            {/* Education */}
            <section>
              <div className="flex items-center gap-2 mb-2 text-white font-semibold">
                <GraduationCap className="h-5 w-5 text-blue-400" /> Education
              </div>
              <ul className="list-disc ml-6 space-y-1">
                <li>B.Sc. Finance — University of Benin (2018)</li>
                <li>National Diploma — Abraham Adesanya Polytechnic (2010)</li>
              </ul>
            </section>

            {/* Projects */}
            <section>
              <div className="flex items-center gap-2 mb-2 text-white font-semibold">
                <Folder className="h-5 w-5 text-blue-400" /> Projects
              </div>
              <ul className="list-disc ml-6 space-y-1">
                <li>E-commerce API — Full backend for products & payments</li>
                <li>
                  QR Movie Code Generator — Node.js QR service with OMDB API
                </li>
                <li>Job API — Role-based system for job listings</li>
                <li>
                  Donation Platform — Multi-currency (Paystack, PayPal, Crypto)
                </li>
                <li>
                  Recipe Sharing Platform — Node.js + Cloudinary integration
                </li>
                <li>Expense Tracker — Secure personal finance API</li>
              </ul>
            </section>

            {/* Certifications */}
            <section>
              <div className="flex items-center gap-2 mb-2 text-white font-semibold">
                <Award className="h-5 w-5 text-blue-400" /> Certifications
              </div>
              <ul className="list-disc ml-6 space-y-1">
                <li>Backend Development (Node.js) — CareerEx</li>
                <li>Foundations: Data, Data, Everywhere — Coursera</li>
                <li>Python and Statistics for Financial Analysis — Coursera</li>
              </ul>
            </section>
          </motion.div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

// "use client"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
// import { ScrollArea } from "@/components/ui/scroll-area"
// import { FileText, Download, Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"

// export function CVModal() {
//   const [isOpen, setIsOpen] = useState(false)

//   const downloadCV = () => {
//     const cvContent = `AROWOSERE ABDULKHABEER AYODEJI
// Backend Engineer
// Lagos, Nigeria  -  08168905506 - arowosere.ak@gmail.com
// linkedin.com/in/arowosere-ak
// github.com/Maxim-LD

// PROFESSIONAL SUMMARY
// Backend Engineer who optimizes high-traffic systems, achieving 30–50% performance gains. Delivered secure payment
// APIs processing 5K+ transactions/month (99.8% uptime). Skilled in Node.js, Express, TypeScript, PostgreSQL, MongoDB,
// Redis, and CI/CD pipelines. Passionate about solving scalability challenges with clean, maintainable code.

// TECHNICAL SKILLS
// Languages & Frameworks: Node.js, Express.js, TypeScript, JavaScript
// Databases: PostgreSQL, MongoDB, MySQL, Redis
// Tools & DevOps: Git, GitHub Actions, CI/CD, Postman, Docker (basic)
// Others: RESTful APIs, JWT, RBAC, Stripe, Paystack, API caching, Cron Jobs, Rate Limiting, Testing (Jest, Supertest)

// EXPERIENCE
// ScholarGuide TECH — Backend Developer (Volunteer)
// Remote | March 2025 – Present
// • Architected JWT-based auth system with RBAC, securing access for users (Admins/Teachers/Students) and
// preventing unauthorized breaches via rate limiting and session encryption.
// • Built RESTful APIs for study plans, tracking, resources, and analytics; reduced response time by 30% via Redis caching
// and query optimization.
// • Implemented input sanitization and rate limiting to mitigate common web vulnerabilities.
// • Sped up MongoDB queries by 40% by strategically applying .lean() and .populate(), reducing CPU load and enabling
// faster analytics for 500+ daily active users.
// • Reduced debugging time by 50% through middleware-based centralized error handling and structured API responses.

// InternPulse — Backend Development Intern
// Remote | November 2024 – March 2025
// • Built core backend for Pedmonie, a digital payment platform; supported secure real-time transactions and API integration.
// • Integrated Stripe and Paystack, implemented webhook validation, and managed retries for failed transactions.
// • Designed modular, reusable API controllers and service layers using Express.js.
// • Wrote unit and integration tests using Jest and Supertest, achieving 80%+ coverage.
// • Participated in Agile sprints, version control (Git), peer reviews, and performance monitoring.

// BT Technologies Limited – IT/ Network Intern
// Lagos, Nigeria | September 2023 - February 2024
// • Assisted in LAN/fiber installation, network diagnostics, system upgrades, and hardware troubleshooting.
// • Supported configuration of departmental devices and verified connectivity integrity.
// • Completed structured training in web development, data analysis, and finance.
// • Recognized for resolving outages quickly and ensuring operational continuity.

// EDUCATION
// Bachelor of Technology (BTech) in Physics
// Federal University of Technology, Minna Niger State             2019 – 2024
// Secondary School Certificate (SSCE)
// Community High School, Ibafo, Ogun State             2014

// CERTIFICATION
// • InternPulse Backend Development Finalist       March 2025
// • Databases for Node.js Developers        March 2025
// • Career X Youthrive Software Development        September 2024

// LEADERSHIP EXPERIENCE
// Ahmadi Muslim Students' Association
// National Vice President | 2023 – Present
// • Technical Educator: Led 2-day software workshop (30+ students); 85% mastered Node.js API basics (post-survey).
// • Community Growth: Expanded membership by 30% via tech outreach programs.

// State President (Niger State) | 2020 – 2022
// • Organized selfless donation drives providing school supplies for 200+ underprivileged students
// • Mobilized 50+ volunteers for tree planting initiatives, increasing campus green cover by 15%

// PROJECTS
// ScholarGuide TECH – Educational Management System (Ongoing)
// • Built features for user roles, resource categorization, performance tracking, and student analytics.
// • Implemented scheduled background jobs using cron tasks for study reminder and notifications.

// Pedmonie – All-in-One Payment Platform
// • Scaled payment APIs to handle 100+ concurrent transactions/sec using connection pooling and idempotency
// keys, reducing failed payments by 25%.
// • Employed service separation for authentication and payment modules, improving maintainability and test coverage.

// Car Dealer API
// • Built a full-featured REST API in Node.js, Express, and TypeScript with MongoDB for car dealership inventory and transactions.
// • Included user registration, payment processing (Paystack), and RBAC (Admin, Manager, Customer).`

//     const element = document.createElement("a")
//     const file = new Blob([cvContent], { type: "text/plain" })
//     element.href = URL.createObjectURL(file)
//     element.download = "Arowosere_Abdulkhabeer_CV.txt"
//     document.body.appendChild(element)
//     element.click()
//     document.body.removeChild(element)
//   }

//   return (
//     <Dialog open={isOpen} onOpenChange={setIsOpen}>
//       <DialogTrigger asChild>
//         <Button variant="outline" className="bg-transparent">
//           <FileText className="mr-2 h-4 w-4" />
//           View CV
//         </Button>
//       </DialogTrigger>
//       <DialogContent className="max-w-5xl max-h-[90vh] p-0 bg-slate-800">
//         <div className="bg-slate-800 text-white">
//           {/* Header */}
//           <div className="flex justify-between items-center p-6 border-b border-slate-600">
//             <h1 className="text-xl font-bold">Arowosere Abdulkhabeer - CV</h1>
//             <Button
//               variant="outline"
//               size="sm"
//               onClick={downloadCV}
//               className="bg-transparent border-slate-500 text-white hover:bg-slate-700"
//             >
//               <Download className="mr-2 h-4 w-4" />
//               Download
//             </Button>
//           </div>

//           <ScrollArea className="h-[70vh]">
//             <div className="p-8">
//               {/* Name and Title */}
//               <div className="text-center mb-8">
//                 <h1 className="text-4xl font-bold mb-2">AROWOSERE ABDULKHABEER AYODEJI</h1>
//                 <p className="text-blue-400 text-xl">Backend Engineer</p>
//               </div>

//               {/* Contact Info */}
//               <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
//                 <div className="flex items-center gap-2">
//                   <Mail className="h-4 w-4" />
//                   <span>arowosere.ak@gmail.com</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Phone className="h-4 w-4" />
//                   <span>+234-816-890-5506</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <MapPin className="h-4 w-4" />
//                   <span>Lagos, Nigeria</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Linkedin className="h-4 w-4" />
//                   <span>linkedin.com/in/arowosere-ak</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Github className="h-4 w-4" />
//                   <span>github.com/Maxim-LD</span>
//                 </div>
//               </div>

//               <hr className="border-slate-600 mb-8" />

//               {/* Professional Summary */}
//               <div className="mb-8">
//                 <h2 className="text-xl font-bold mb-4 text-white border-b border-slate-600 pb-2">
//                   PROFESSIONAL SUMMARY
//                 </h2>
//                 <p className="text-gray-300 leading-relaxed">
//                   Backend Engineer who optimizes high-traffic systems, achieving 30–50% performance gains. Delivered
//                   secure payment APIs processing 5K+ transactions/month (99.8% uptime). Skilled in Node.js, Express,
//                   TypeScript, PostgreSQL, MongoDB, Redis, and CI/CD pipelines. Passionate about solving scalability
//                   challenges with clean, maintainable code.
//                 </p>
//               </div>

//               {/* Technical Skills */}
//               <div className="mb-8">
//                 <h2 className="text-xl font-bold mb-4 text-white border-b border-slate-600 pb-2">TECHNICAL SKILLS</h2>
//                 <div className="text-gray-300 space-y-2">
//                   <p>
//                     <strong>Languages & Frameworks:</strong> Node.js, Express.js, TypeScript, JavaScript
//                   </p>
//                   <p>
//                     <strong>Databases:</strong> PostgreSQL, MongoDB, MySQL, Redis
//                   </p>
//                   <p>
//                     <strong>Tools & DevOps:</strong> Git, GitHub Actions, CI/CD, Postman, Docker (basic)
//                   </p>
//                   <p>
//                     <strong>Others:</strong> RESTful APIs, JWT, RBAC, Stripe, Paystack, API caching, Cron Jobs, Rate
//                     Limiting, Testing (Jest, Supertest)
//                   </p>
//                 </div>
//               </div>

//               {/* Experience */}
//               <div className="mb-8">
//                 <h2 className="text-xl font-bold mb-4 text-white border-b border-slate-600 pb-2">EXPERIENCE</h2>
//                 <div className="space-y-6 text-gray-300">
//                   <div>
//                     <h3 className="font-bold text-white">ScholarGuide TECH — Backend Developer (Volunteer)</h3>
//                     <p className="text-blue-400 mb-2">Remote | March 2025 – Present</p>
//                     <ul className="list-disc list-inside space-y-1 text-sm">
//                       <li>
//                         Architected JWT-based auth system with RBAC, securing access for users
//                         (Admins/Teachers/Students)
//                       </li>
//                       <li>
//                         Built RESTful APIs for study plans, tracking, resources, and analytics; reduced response time by
//                         30%
//                       </li>
//                       <li>Implemented input sanitization and rate limiting to mitigate common web vulnerabilities</li>
//                       <li>Sped up MongoDB queries by 40% by strategically applying .lean() and .populate()</li>
//                     </ul>
//                   </div>

//                   <div>
//                     <h3 className="font-bold text-white">InternPulse — Backend Development Intern</h3>
//                     <p className="text-blue-400 mb-2">Remote | November 2024 – March 2025</p>
//                     <ul className="list-disc list-inside space-y-1 text-sm">
//                       <li>Built core backend for Pedmonie, a digital payment platform</li>
//                       <li>Integrated Stripe and Paystack, implemented webhook validation</li>
//                       <li>Designed modular, reusable API controllers and service layers using Express.js</li>
//                       <li>Wrote unit and integration tests using Jest and Supertest, achieving 80%+ coverage</li>
//                     </ul>
//                   </div>

//                   <div>
//                     <h3 className="font-bold text-white">BT Technologies Limited – IT/ Network Intern</h3>
//                     <p className="text-blue-400 mb-2">Lagos, Nigeria | September 2023 - February 2024</p>
//                     <ul className="list-disc list-inside space-y-1 text-sm">
//                       <li>Assisted in LAN/fiber installation, network diagnostics, system upgrades</li>
//                       <li>Supported configuration of departmental devices and verified connectivity integrity</li>
//                       <li>Completed structured training in web development, data analysis, and finance</li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>

//               {/* Education */}
//               <div className="mb-8">
//                 <h2 className="text-xl font-bold mb-4 text-white border-b border-slate-600 pb-2">EDUCATION</h2>
//                 <div className="text-gray-300">
//                   <h3 className="font-bold text-white">Bachelor of Technology (BTech) in Physics</h3>
//                   <p className="text-blue-400">Federal University of Technology, Minna Niger State | 2019 – 2024</p>
//                 </div>
//               </div>

//               {/* Certifications */}
//               <div className="mb-8">
//                 <h2 className="text-xl font-bold mb-4 text-white border-b border-slate-600 pb-2">CERTIFICATIONS</h2>
//                 <div className="text-gray-300 space-y-1">
//                   <p>• InternPulse Backend Development Finalist - March 2025</p>
//                   <p>• Databases for Node.js Developers - March 2025</p>
//                   <p>• Career X Youthrive Software Development - September 2024</p>
//                 </div>
//               </div>

//               {/* Projects */}
//               <div className="mb-8">
//                 <h2 className="text-xl font-bold mb-4 text-white border-b border-slate-600 pb-2">PROJECTS</h2>
//                 <div className="space-y-4 text-gray-300">
//                   <div>
//                     <h3 className="font-bold text-white">ScholarGuide TECH – Educational Management System</h3>
//                     <ul className="list-disc list-inside space-y-1 text-sm">
//                       <li>Built features for user roles, resource categorization, performance tracking</li>
//                       <li>Implemented scheduled background jobs using cron tasks for notifications</li>
//                     </ul>
//                   </div>

//                   <div>
//                     <h3 className="font-bold text-white">Pedmonie – All-in-One Payment Platform</h3>
//                     <ul className="list-disc list-inside space-y-1 text-sm">
//                       <li>Scaled payment APIs to handle 100+ concurrent transactions/sec</li>
//                       <li>Employed service separation for authentication and payment modules</li>
//                     </ul>
//                   </div>

//                   <div>
//                     <h3 className="font-bold text-white">Car Dealer API</h3>
//                     <ul className="list-disc list-inside space-y-1 text-sm">
//                       <li>Built full-featured REST API with Node.js, Express, TypeScript, and MongoDB</li>
//                       <li>Included user registration, payment processing (Paystack), and RBAC</li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </ScrollArea>
//         </div>
//       </DialogContent>
//     </Dialog>
//   )
// }
