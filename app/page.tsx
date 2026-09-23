"use client";

import type React from "react";

import Link from "next/link";
import Image from "next/image";

import {
  Book,
  Database,
  Github,
  Linkedin,
  Mail,
  Server,
  Terminal,
  Utensils,
  PhoneIcon as WhatsApp,
  Globe,
  FolderOpen,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ThemeToggle } from "@/components/theme-toggle";

/* =========================================================
   Experience Item
========================================================= */

function ExperienceItem({
  title,
  company,
  period,
  location,
  description,
  technologies,
}: {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  technologies: string[];
}) {
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <CardTitle>{title}</CardTitle>
            <p className="text-muted-foreground">{company}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">{period}</Badge>
            <Badge variant="secondary">{location}</Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <ul className="space-y-3 text-left text-muted-foreground">
          {description.split("||").map((item, index) => (
            <li key={index} className="leading-relaxed">
              • {item.trim()}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

/* =========================================================
   Main Page
========================================================= */

export default function Home() {
  const whatsappNumber = "2347036613047";

  const whatsappMessage = encodeURIComponent(
    "Hi Emmanuel! I saw your portfolio and would like to connect about a project/opportunity.",
  );

  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="flex min-h-screen flex-col bg-slate-900 text-white">
      {/* =====================================================
          Header
      ===================================================== */}

      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <Terminal className="h-5 w-5" />
            <span>Emmanuel Seun Shittu</span>
          </Link>

          <nav className="hidden gap-6 md:flex">
            <Link
              href="#about"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              About
            </Link>

            <Link
              href="#skills"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Skills
            </Link>

            <Link
              href="#projects"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Projects
            </Link>

            <Link
              href="#experience"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Experience
            </Link>

            <Link
              href="#contact"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />

            <Link
              href="https://github.com/shem4soul"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-gray-800 hover:text-white"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>

            <Link
              href="https://linkedin.com/in/emmanuel-shittu-91573915a"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-blue-600 hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>

            <Link href={whatsappHref} target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-green-600 hover:text-white"
              >
                <WhatsApp className="h-5 w-5" />
                <span className="sr-only">WhatsApp</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* =====================================================
            Hero
        ===================================================== */}

        <section className="container py-16 md:py-20">
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <div className="flex-1 space-y-4">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                Software Engineer
              </h1>

              <p className="text-xl text-muted-foreground">
                Building scalable, secure, and high-performance software
                solutions across the full development lifecycle. Experienced in
                Node.js, TypeScript, React, Express, NestJS, PostgreSQL,
                MongoDB, Redis, API development, authentication, testing, cloud
                deployment, and CI/CD.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="/Emmanuel-Seun-SHITTU-F.S.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button className="bg-blue-600 text-white hover:bg-blue-700">
                    <DownloadIcon className="mr-2 h-4 w-4" />
                    View CV
                  </Button>
                </a>

                <Link href="#projects" className="inline-block">
                  <Button className="bg-gray-800 text-white hover:bg-gray-700">
                    View Projects
                  </Button>
                </Link>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button className="bg-green-600 text-white hover:bg-green-700">
                    <WhatsApp className="mr-2 h-4 w-4" />
                    WhatsApp Me
                  </Button>
                </a>
              </div>
            </div>

            <div className="flex flex-1 justify-center">
              <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-primary/20 shadow-lg">
                <Image
                  src="/images/image.png"
                  alt="Emmanuel Seun Shittu"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            About
        ===================================================== */}

        <section
          id="about"
          className="container rounded-lg bg-secondary/50 py-12"
        >
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-8 py-6 md:grid-cols-2">
            <div className="space-y-6 text-justify">
              <h2 className="text-3xl font-bold leading-[1.1]">About Me</h2>

              <p className="leading-relaxed text-muted-foreground">
                Software Engineer with experience designing, building, testing,
                deploying, and maintaining production software applications. I
                work across frontend and backend systems, with strong experience
                in Node.js, Express.js, TypeScript, NestJS, React, PostgreSQL,
                MongoDB, and Redis. I build RESTful APIs, authentication and
                authorization systems, real-time applications, database-driven
                systems, and cloud-deployed applications. I am experienced with
                automated testing, CI/CD pipelines, third-party integrations,
                and performance optimization. I enjoy solving practical
                problems, improving system reliability, and building
                maintainable software that can scale.
              </p>

              <div className="mt-4">
                <h3 className="mb-2 font-semibold">Quick Facts</h3>

                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <strong>Location:</strong> Lagos, Nigeria
                  </li>

                  <li>
                    <strong>Role:</strong> Software Engineer
                  </li>

                  <li>
                    <strong>Focus:</strong> Full-Stack Development, Mobile
                    Development, Backend Engineering, APIs, System Design &
                    Cloud
                  </li>

                  <li>
                    <strong>Education:</strong> B.Sc. Finance – University of
                    Benin
                  </li>

                  <li>
                    <strong>Core Skills:</strong> Node.js, TypeScript,
                    JavaScript, React, Express, NestJS,React Native, PostgreSQL,
                    MongoDB, Redis, Docker, AWS, JWT, OAuth2, CI/CD, Jest
                  </li>

                  <li>
                    <strong>Interests:</strong> Software architecture, scalable
                    systems, APIs, automation, cloud infrastructure, performance
                    optimization, and developer tooling
                  </li>
                </ul>
              </div>
            </div>

            {/* Tech Stack */}

            <Card className="w-full">
              <CardHeader>
                <CardTitle>Tech Stack</CardTitle>
              </CardHeader>

              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {[
                    "Node.js",
                    "TypeScript",
                    "JavaScript",
                    "React",
                    "Express",
                    "NestJS",
                    "MongoDB",
                    "PostgreSQL",
                    "MySQL",
                    "Redis",
                    "Docker",
                    "AWS",
                    "Jest",
                    "Git",
                    "GitHub Actions",
                  ].map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="py-3 text-center"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <p className="mt-3 text-sm text-muted-foreground">
                  Experienced in full-stack application development, RESTful
                  APIs, authentication, database design, caching, testing,
                  CI/CD, cloud deployment, and third-party integrations.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* =====================================================
            Skills
        ===================================================== */}

        <section id="skills" className="container py-12">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold">Technical Skills</h2>

            <p className="max-w-[85%] leading-normal text-muted-foreground">
              A broad software engineering toolkit covering application
              development, backend systems, databases, testing, DevOps, and
              cloud technologies.
            </p>

            <Tabs defaultValue="languages" className="mt-8 w-full max-w-3xl">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="languages">Languages</TabsTrigger>
                <TabsTrigger value="frameworks">Frameworks</TabsTrigger>
                <TabsTrigger value="databases">Databases</TabsTrigger>
                <TabsTrigger value="tools">DevOps & Tools</TabsTrigger>
              </TabsList>

              <TabsContent value="languages" className="mt-4">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                  {["JavaScript", "TypeScript", "SQL", "Bash", "Python"].map(
                    (skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="justify-center py-3 text-center"
                      >
                        {skill}
                      </Badge>
                    ),
                  )}
                </div>
              </TabsContent>

              <TabsContent value="frameworks" className="mt-4">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                  {["React", "Next.js", "Node.js", "Express", "NestJS"].map(
                    (skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="justify-center py-3 text-center"
                      >
                        {skill}
                      </Badge>
                    ),
                  )}
                </div>
              </TabsContent>

              <TabsContent value="databases" className="mt-4">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                  {["PostgreSQL", "MongoDB", "MySQL", "Redis", "SQLite"].map(
                    (skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="justify-center py-3 text-center"
                      >
                        {skill}
                      </Badge>
                    ),
                  )}
                </div>
              </TabsContent>

              <TabsContent value="tools" className="mt-4">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                  {[
                    "Git",
                    "GitHub",
                    "Docker",
                    "AWS",
                    "GitHub Actions",
                    "Postman",
                    "Jest",
                    "Supertest",
                    "Swagger",
                  ].map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="justify-center py-3 text-center"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* =====================================================
            Projects
        ===================================================== */}

        <section id="projects" className="container bg-secondary/50 py-12">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 py-6 text-center">
            <h2 className="text-3xl font-bold">Featured Projects</h2>

            <p className="max-w-[85%] leading-normal text-muted-foreground">
              Selected software engineering projects covering financial systems,
              payroll automation, education, e-commerce, APIs, and application
              development.
            </p>

            <div className="mt-8 grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="Banking API"
                description="NestJS and TypeScript banking backend for wallet management, fund transfers, VISA-like card generation, and multi-currency support."
                technologies={[
                  "NestJS",
                  "TypeScript",
                  "PostgreSQL",
                  "Docker",
                  "CQRS",
                  "Jest",
                ]}
                githubUrl="https://github.com/shem4soul/Banking-API"
                image="/images/banking-api.png"
                icon={<Server className="h-10 w-10" />}
              />

              <ProjectCard
                title="Monnify Payroll System"
                description="Automated payroll system for employee payouts, payroll item management, and secure salary processing using the Monnify API."
                technologies={[
                  "TypeScript",
                  "PostgreSQL",
                  "Docker",
                  "Redis",
                  "Monnify API",
                ]}
                githubUrl="https://github.com/shem4soul/Monnify-Payroll-System"
                image="/images/monnify-payroll.png"
                icon={<Server className="h-10 w-10" />}
              />

              <ProjectCard
                title="School Management System API"
                description="Node.js backend for managing students, teachers, examinations, academic years, programs, and school operations."
                technologies={["Node.js", "Express", "MongoDB", "JWT"]}
                githubUrl="https://github.com/shem4soul/school-management-system-API"
                image="/images/school-management-api.png"
                icon={<Book className="h-10 w-10" />}
              />

              <ProjectCard
                title="Recipe Sharing Platform"
                description="Social recipe platform with image uploads, likes, comments, and cloud-based media management."
                technologies={["Node.js", "Express", "Cloudinary", "MongoDB"]}
                githubUrl="https://github.com/shem4soul/Recipe-Sharing-Platform-Project-5"
                websiteUrl="https://recipe-sharing-platform.onrender.com"
                image="/images/recipe-platform.png"
                icon={<Utensils className="h-10 w-10" />}
              />

              <ProjectCard
                title="QR Movie Generator API"
                description="NestJS API that generates QR codes for movie batches with PostgreSQL and Prisma integration."
                technologies={[
                  "NestJS",
                  "TypeScript",
                  "PostgreSQL",
                  "Prisma",
                  "QRCode",
                ]}
                githubUrl="https://github.com/shem4soul/QR-Movie-Generator"
                websiteUrl="https://qr-movie-generator.onrender.com/api"
                image="/images/qr-movie-generator-api.png"
                icon={<Terminal className="h-10 w-10" />}
              />

              <ProjectCard
                title="E-commerce API"
                description="Full-featured e-commerce backend for products, orders, users, authentication, and payment workflows."
                technologies={["Node.js", "Express", "MongoDB", "JWT"]}
                githubUrl="https://github.com/shem4soul/Ecommerce-with-MongoDB"
                websiteUrl="https://ecommerce-hm9a.onrender.com"
                image="/images/ecommerce-api.png"
                icon={<Server className="h-10 w-10" />}
              />

              <ProjectCard
                title="Jobster Platform"
                description="Job management platform with authentication, role-based access, job postings, and applicant tracking."
                technologies={["Node.js", "Express", "MongoDB", "JWT"]}
                githubUrl="https://github.com/shem4soul/Jobster"
                image="/images/jobster-platform.png"
                icon={<Book className="h-10 w-10" />}
              />

              <ProjectCard
                title="Task Manager API"
                description="Task management API with authentication, CRUD operations, user management, and role-based access."
                technologies={["Node.js", "Express", "MongoDB", "JWT"]}
                githubUrl="https://github.com/shem4soul/Task-manger"
                image="/images/task-manager-api.png"
                icon={<FolderOpen className="h-10 w-10" />}
              />

              <ProjectCard
                title="Blog API"
                description="Backend API for a blogging platform supporting authentication, posts, comments, and user management."
                technologies={["Node.js", "Express", "MongoDB", "JWT"]}
                githubUrl="https://github.com/shem4soul/Blog-API"
                image="/images/blog-api.png"
                icon={<Book className="h-10 w-10" />}
              />
            </div>

            <div className="mt-8">
              <Link
                href="https://github.com/shem4soul"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="bg-transparent hover:bg-gray-800 hover:text-white"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View More on GitHub
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* =====================================================
            Experience
        ===================================================== */}

        <section id="experience" className="container py-12">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4">
            <h2 className="text-3xl font-bold">Work Experience</h2>

            <p className="max-w-[85%] text-center leading-normal text-muted-foreground">
              Experience building and delivering production software across
              fintech, education, merchandising, donation, and other
              technology-driven platforms.
            </p>

            <div className="mt-8 w-full space-y-6">
              {/* Divnerix */}

              <ExperienceItem
                title="Software Engineer"
                company="Divnerix Innovations"
                period="Jan 2025 – Present"
                location="Remote"
                description={
                  "Architected dynamic, real-time React dashboards with live charts, counters, and progress trackers for a donation platform, delivering WebSocket-backed live monitoring without page refreshes.||Drove UI velocity across two platforms by building an accessible, mobile-first component library in Tailwind CSS and React, standardising reusable form, card, and modal components.||Architected scalable backend systems with Node.js, Express, Sequelize, and MongoDB; integrated third-party APIs and improved performance by up to 40% through strategic Redis caching.||Strengthened platform security and delivery speed by implementing JWT authentication with RBAC and automating CI/CD pipelines via GitHub Actions, with deployments to AWS and Heroku."
                }
                technologies={[
                  "React",
                  "Tailwind CSS",
                  "Node.js",
                  "Express",
                  "Sequelize",
                  "MongoDB",
                  "Redis",
                  "WebSockets",
                  "JWT",
                  "RBAC",
                  "GitHub Actions",
                  "AWS",
                  "Heroku",
                ]}
              />

              {/* ScholarGuide */}

              <ExperienceItem
                title="Backend Lead (Volunteer)"
                company="ScholarGuide – EdTech SaaS Startup"
                period="2025"
                location="Remote"
                description={
                  "Architected a multi-tenant SaaS backend from the ground up, designing a tenant-isolated PostgreSQL data model that allowed institutions to operate independently with strict data isolation.||Built and versioned RESTful APIs powering course management, student profiles, progress tracking, and a points-based gamification engine with streak detection, badge logic, and leaderboard ranking.||Engineered a granular four-role RBAC system covering Super Admin, Institution Admin, Instructor, and Student, enforcing permission boundaries at both route middleware and service layers.||Authored comprehensive Swagger/OpenAPI documentation for 40+ endpoints, enabling the frontend team to integrate independently with clear API contracts."
                }
                technologies={[
                  "Node.js",
                  "TypeScript",
                  "PostgreSQL",
                  "Express",
                  "Redis",
                  "JWT",
                  "RBAC",
                  "REST API",
                  "Swagger",
                  "OpenAPI",
                ]}
              />

              {/* In-Box Elite */}

              <ExperienceItem
                title="Software Engineer"
                company="In-Box Elite – Merchandising Company"
                period="Feb 2023 – Dec 2023"
                location="Benin City"
                description={
                  "Engineered a React-powered product catalog with dynamic search, category filtering, and an optimistic-UI cart delivering instant add-to-cart updates with background API synchronisation.||Built an end-to-end order and inventory management system with Node.js and Express APIs, optimising API performance by 30% and automating operational workflows by 40%.||Reduced invalid submission rates across checkout and registration flows by implementing real-time client-side form validation with instant field-level feedback."
                }
                technologies={[
                  "React",
                  "JavaScript",
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "REST APIs",
                  "Form Validation",
                ]}
              />

              {/* EdoJobs */}

              <ExperienceItem
                title="Full-Stack Developer (Intern)"
                company="EdoJobs"
                period="Mar 2022 – Dec 2022"
                location="Benin City"
                description={
                  "Built and shipped full-stack applications using React, TypeScript, Node.js, Express, and MongoDB, working from requirements through deployment.||Developed and maintained REST APIs for client-facing features while working directly with product requirements.||Collaborated with engineering teams in Agile sprints, participating in sprint planning, standups, and code reviews.||Deployed applications to cloud hosting platforms and managed environment configuration for production releases.||Fixed bugs and implemented feature requests from project leads, iterating quickly based on feedback."
                }
                technologies={[
                  "React",
                  "TypeScript",
                  "JavaScript",
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "REST API",
                  "Git",
                  "Netlify",
                  "Vercel",
                ]}
              />
            </div>
          </div>
        </section>

        {/* =====================================================
            Contact
        ===================================================== */}

        <section id="contact" className="container py-12">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold">Get in Touch</h2>

            <p className="max-w-[85%] leading-normal text-muted-foreground">
              Interested in working together? Feel free to reach out to discuss
              your project, software engineering opportunity, or collaboration.
            </p>

            <div className="mt-8 grid w-full max-w-lg gap-6">
              <ContactForm />
            </div>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
              <a
                href="mailto:shem4soul@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="w-full bg-transparent hover:bg-red-600 hover:text-white sm:w-auto"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Gmail
                </Button>
              </a>

              <a
                href="https://github.com/shem4soul"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="w-full bg-transparent hover:bg-gray-800 hover:text-white sm:w-auto"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
              </a>

              <a
                href="https://linkedin.com/in/emmanuel-shittu-91573915a"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="w-full bg-transparent hover:bg-blue-600 hover:text-white sm:w-auto"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Button>
              </a>

              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="w-full bg-transparent hover:bg-green-600 hover:text-white sm:w-auto"
                >
                  <WhatsApp className="mr-2 h-4 w-4" />
                  WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* =====================================================
          Footer
      ===================================================== */}

      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Emmanuel Seun Shittu. All rights
            reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/shem4soul"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-gray-800 hover:text-white"
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </a>

            <a
              href="https://linkedin.com/in/emmanuel-shittu-91573915a"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-blue-600 hover:text-white"
              >
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </a>

            <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-green-600 hover:text-white"
              >
                <WhatsApp className="h-4 w-4" />
                <span className="sr-only">WhatsApp</span>
              </Button>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* =========================================================
   Project Card
========================================================= */

function ProjectCard({
  title,
  description,
  technologies,
  icon,
  githubUrl,
  websiteUrl,
  image,
}: {
  title: string;
  description: string;
  technologies: string[];
  icon: React.ReactNode;
  githubUrl?: string;
  websiteUrl?: string;
  image?: string;
}) {
  return (
    <Card className="flex h-full flex-col">
      {image && (
        <div className="relative h-48 w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="rounded-t-lg object-cover"
          />
        </div>
      )}

      <CardHeader>
        <div className="flex items-center gap-2">
          {icon}
          <CardTitle className="text-lg">{title}</CardTitle>
        </div>
      </CardHeader>

      <CardContent className="flex-1">
        <p className="text-left text-sm text-muted-foreground">{description}</p>
      </CardContent>

      <CardFooter className="flex flex-col gap-4 border-t pt-4">
        <div className="flex w-full flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex w-full gap-2">
          {githubUrl && (
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button
                variant="outline"
                size="sm"
                className="w-full bg-transparent hover:bg-gray-800 hover:text-white"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            </Link>
          )}

          {websiteUrl && (
            <Link
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button
                variant="outline"
                size="sm"
                className="w-full bg-transparent hover:bg-blue-600 hover:text-white"
              >
                <Globe className="mr-2 h-4 w-4" />
                Live Site
              </Button>
            </Link>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}

/* =========================================================
   Contact Form
========================================================= */

function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    const mailtoLink = `mailto:shem4soul@gmail.com?subject=${encodeURIComponent(
      subject as string,
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="grid gap-2">
          <label
            htmlFor="name"
            className="text-left text-sm font-medium leading-none"
          >
            Name
          </label>

          <input
            id="name"
            name="name"
            required
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            placeholder="Your name"
          />
        </div>

        <div className="grid gap-2">
          <label
            htmlFor="email"
            className="text-left text-sm font-medium leading-none"
          >
            Email
          </label>

          <input
            id="email"
            name="email"
            type="email"
            required
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            placeholder="Your email"
          />
        </div>
      </div>

      <div className="grid gap-2">
        <label
          htmlFor="subject"
          className="text-left text-sm font-medium leading-none"
        >
          Subject
        </label>

        <input
          id="subject"
          name="subject"
          required
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          placeholder="Subject of your message"
        />
      </div>

      <div className="grid gap-2">
        <label
          htmlFor="message"
          className="text-left text-sm font-medium leading-none"
        >
          Message
        </label>

        <textarea
          id="message"
          name="message"
          required
          className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          placeholder="Your message"
        />
      </div>

      <Button type="submit" className="w-full">
        Send Message
      </Button>
    </form>
  );
}

/* =========================================================
   Download Icon
========================================================= */

function DownloadIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" {...props}>
      <path
        d="M12 3v10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M8 11l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M21 21H3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
