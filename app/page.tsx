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

// ExperienceItem component (kept)
function ExperienceItem({
  title,
  company,
  period,
  description,
  technologies,
}: {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}) {
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div>
            <CardTitle>{title}</CardTitle>
            <p className="text-muted-foreground">{company}</p>
          </div>
          <Badge variant="outline">{period}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground text-left">{description}</p>
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

export default function Home() {
  // WhatsApp message & number
  const whatsappNumber = "2347036613047";
  const whatsappMessage = encodeURIComponent(
    "Hi Emmanuel! I saw your portfolio and would like to connect about a project/opportunity."
  );
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="flex min-h-screen flex-col bg-slate-900 text-white">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <Terminal className="h-5 w-5" />
            <span>Emmanuel Seun Shittu</span>
          </Link>

          <nav className="hidden md:flex gap-6">
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
        {/* Hero */}
        <section className="py-16 md:py-20 container">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Full Stack Developer
              </h1>
              <p className="text-xl text-muted-foreground">
                Building secure, scalable, and high-performance web
                applications. Specializing in Node.js, Express, React,
                TypeScript, and database design (MongoDB / PostgreSQL).
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                {/* Direct CV download (opens new tab) */}
                <a
                  href="/Emmanuel-Seun-SHITTU-F.S.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    <DownloadIcon className="mr-2 h-4 w-4" />
                    View CV
                  </Button>
                </a>

                <Link href="#projects" className="inline-block">
                  <Button className="bg-gray-800 hover:bg-gray-700 text-white">
                    View Projects
                  </Button>
                </Link>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    <WhatsApp className="mr-2 h-4 w-4" />
                    WhatsApp Me
                  </Button>
                </a>
              </div>
            </div>

            <div className="flex-1 flex justify-center">
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
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

        {/* About + Tech Stack */}
        <section
          id="about"
          className="container py-12 bg-secondary/50 rounded-lg"
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start py-6">
            <div className="space-y-6 text-justify">
              <h2 className="text-3xl font-bold leading-[1.1]">About Me</h2>
              <p className="leading-normal text-muted-foreground">
                Full Stack Developer with hands-on experience building scalable
                web applications across frontend and backend. Proficient in
                Node.js, Express, React, and MongoDB with production experience
                deploying containerized apps and integrating payment systems.
                Passionate about writing maintainable code, optimizing
                performance, and building products that solve real user
                problems.
              </p>

              <div className="mt-4">
                <h3 className="font-semibold mb-2">Quick Facts</h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>
                    <strong>Location:</strong> Lagos, Nigeria
                  </li>
                  <li>
                    <strong>Experience:</strong> Backend & Full Stack
                    Development, API Integration, DevOps
                  </li>
                  <li>
                    <strong>Education:</strong> B.Sc. Finance – University of
                    Benin
                  </li>
                  <li>
                    <strong>Interests:</strong> API Design, Payment Integration,
                    Database Optimization
                  </li>
                </ul>
              </div>
            </div>

            <Card className="w-full">
              <CardHeader>
                <CardTitle>Tech Stack</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    "Node.js",
                    "Express",
                    "React",
                    "Next.js",
                    "TypeScript",
                    "JavaScript",
                    "MongoDB",
                    "PostgreSQL",
                    "Redis",
                    "Docker",
                    "AWS",
                    "Jest",
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
                <p className="text-sm text-muted-foreground mt-3">
                  Experienced in designing RESTful APIs, authentication
                  (JWT/OAuth), payment gateways (Paystack/Stripe), caching, and
                  CI/CD pipelines.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="container py-12">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold">Technical Skills</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground">
              My technical expertise spans backend and frontend tooling,
              databases, and cloud/deployment tools.
            </p>

            <Tabs defaultValue="languages" className="w-full max-w-3xl mt-8">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="languages">Languages</TabsTrigger>
                <TabsTrigger value="frameworks">Frameworks</TabsTrigger>
                <TabsTrigger value="databases">Databases</TabsTrigger>
                <TabsTrigger value="tools">DevOps & Tools</TabsTrigger>
              </TabsList>

              <TabsContent value="languages" className="mt-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {[
                    "JavaScript",
                    "TypeScript",
                    "C# (familiar)",
                    "HTML/CSS",
                    "SQL",
                    "Bash",
                  ].map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="py-3 text-center justify-center"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="frameworks" className="mt-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {[
                    "Node.js",
                    "Express",
                    "Next.js",
                    "React",
                    "NestJS",
                    ".NET Core",
                  ].map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="py-3 text-center justify-center"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="databases" className="mt-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {["MongoDB", "PostgreSQL", "MySQL", "Redis", "SQLite"].map(
                    (skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="py-3 text-center justify-center"
                      >
                        {skill}
                      </Badge>
                    )
                  )}
                </div>
              </TabsContent>

              <TabsContent value="tools" className="mt-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {[
                    "Git",
                    "Docker",
                    "AWS",
                    "CI/CD",
                    "Postman",
                    "Jest",
                    "Supertest",
                  ].map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="py-3 text-center justify-center"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="container py-12 bg-secondary/50">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center py-6">
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground">
              Project highlights — full stack and backend systems I built or
              contributed to.
            </p>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8 w-full">
              <ProjectCard
                title="Fitness Tracker"
                description="Full-stack fitness tracking app with user auth, workout history, and analytics dashboards. Built with React, Node.js and MongoDB."
                technologies={["React", "Node.js", "MongoDB", "JWT"]}
                githubUrl="https://github.com/shem4soul/fitness-tracker"
                icon={<Book className="h-10 w-10" />}
              />
              <ProjectCard
                title="Donation Platform"
                description="Secure donations platform with Paystack/PayPal integrations, campaigns, and admin dashboards for campaign management."
                technologies={[
                  "Node.js",
                  "Express",
                  "PostgreSQL",
                  "Payment Integration",
                ]}
                githubUrl="https://github.com/shem4soul/donation-platform"
                icon={<Database className="h-10 w-10" />}
              />
              <ProjectCard
                title="Food Delivery Platform"
                description="End-to-end food delivery platform with restaurant listings, order flow, and real-time status updates."
                technologies={["Next.js", "Node.js", "Redis", "WebSockets"]}
                githubUrl="https://github.com/shem4soul/food-delivery"
                icon={<Server className="h-10 w-10" />}
              />
              <ProjectCard
                title="Recipe Sharing Platform"
                description="Social recipe platform with image uploads, likes, and comments. Cloudinary used for media handling."
                technologies={["Node.js", "Express", "Cloudinary", "MongoDB"]}
                githubUrl="https://github.com/shem4soul/recipe-sharing"
                icon={<Utensils className="h-10 w-10" />}
              />
              <ProjectCard
                title="Expense Tracker"
                description="Personal finance app with secure authentication, transaction categorization, and monthly reports."
                technologies={["Node.js", "Express", "PostgreSQL", "JWT"]}
                githubUrl="https://github.com/shem4soul/expense-tracker"
                icon={<FolderOpen className="h-10 w-10" />}
              />
              <ProjectCard
                title="Online Quiz Platform"
                description="Interactive quiz platform with timed quizzes, scoring, and leaderboards for education and assessments."
                technologies={["React", "Node.js", "Socket.IO", "MongoDB"]}
                githubUrl="https://github.com/shem4soul/quiz-platform"
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
                  className="hover:bg-gray-800 hover:text-white bg-transparent"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View More on GitHub
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="container py-12">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4">
            <h2 className="text-3xl font-bold">Work Experience</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground">
              My professional journey and roles in software and backend
              development.
            </p>

            <div className="w-full space-y-6 mt-8">
              <ExperienceItem
                title="Backend Developer"
                company="Divnerix Innovations"
                period="Jan 2025 – Present"
                description="Built and maintained backend systems for NGO/fintech/healthcare platforms; designed REST APIs, deployed Docker containers, and integrated payment gateways."
                technologies={["Node.js", "Express", "PostgreSQL", "Docker"]}
              />

              <ExperienceItem
                title="Backend Developer (Volunteer)"
                company="ScholarGuide / Ed3Hub"
                period="Dec 2024 – Present"
                description="Implemented role-based auth, caching, analytics endpoints and security hardening for educational platforms."
                technologies={["Node.js", "MongoDB", "Redis", "JWT"]}
              />

              <ExperienceItem
                title="Full Stack Developer"
                company="In-box Elite (Intern)"
                period="Aug 2023 – Dec 2024"
                description="Built end-to-end web apps for merchandising and inventory systems using React and Node.js; optimized UI and backend queries."
                technologies={["React", "Node.js", "MongoDB"]}
              />

              <ExperienceItem
                title="Frontend Developer (Contract)"
                company="GlowUp Beauty"
                period="Mar 2023 – Jul 2023"
                description="Developed responsive e-commerce pages, product galleries and optimized site performance for a beauty brand."
                technologies={["React", "Tailwind CSS", "Netlify"]}
              />
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="container py-12">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold">Get in Touch</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground">
              Interested in working together? Feel free to reach out to discuss
              your project or any opportunities.
            </p>

            <div className="grid w-full max-w-lg gap-6 mt-8">
              <ContactForm />
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center">
              <a
                href="mailto:shem4soul@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="w-full sm:w-auto bg-transparent hover:bg-red-600 hover:text-white"
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
                  className="w-full sm:w-auto bg-transparent hover:bg-gray-800 hover:text-white"
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
                  className="w-full sm:w-auto bg-transparent hover:bg-blue-600 hover:text-white"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Button>
              </a>

              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto bg-transparent hover:bg-green-600 hover:text-white"
                >
                  <WhatsApp className="mr-2 h-4 w-4" />
                  WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

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

/* Helper components (ProjectCard, ContactForm) kept below — unchanged structure but updated prop types and usage. */

function ProjectCard({
  title,
  description,
  technologies,
  icon,
  githubUrl,
  websiteUrl,
}: {
  title: string;
  description: string;
  technologies: string[];
  icon: React.ReactNode;
  githubUrl?: string;
  websiteUrl?: string;
}) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <div className="flex items-center gap-2">
          {icon}
          <CardTitle className="text-lg">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-muted-foreground text-left text-sm">{description}</p>
      </CardContent>
      <CardFooter className="flex flex-col gap-4 border-t pt-4">
        <div className="flex flex-wrap gap-2 w-full">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex gap-2 w-full">
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

function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    const mailtoLink = `mailto:shem4soul@gmail.com?subject=${encodeURIComponent(
      subject as string
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-4">
        <div className="grid gap-2">
          <label
            htmlFor="name"
            className="text-sm font-medium leading-none text-left"
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
            className="text-sm font-medium leading-none text-left"
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
          className="text-sm font-medium leading-none text-left"
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
          className="text-sm font-medium leading-none text-left"
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

/* Small inline icon component for the CV button (keeps imports tidy) */
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
// "use client"

// import type React from "react"
// import Link from "next/link"
// import Image from "next/image"
// import {
//   Book,
//   Database,
//   Github,
//   Linkedin,
//   Mail,
//   Server,
//   Terminal,
//   Utensils,
//   PhoneIcon as WhatsApp,
//   Globe,
//   FolderOpen,
// } from "lucide-react"

// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { ThemeToggle } from "@/components/theme-toggle"
// import { CVModal } from "@/components/cv-modal"

// // Add the ExperienceItem component definition
// function ExperienceItem({
//   title,
//   company,
//   period,
//   description,
//   technologies,
// }: {
//   title: string
//   company: string
//   period: string
//   description: string
//   technologies: string[]
// }) {
//   return (
//     <Card className="w-full">
//       <CardHeader>
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
//           <div>
//             <CardTitle>{title}</CardTitle>
//             <p className="text-muted-foreground">{company}</p>
//           </div>
//           <Badge variant="outline">{period}</Badge>
//         </div>
//       </CardHeader>
//       <CardContent className="space-y-4">
//         <p className="text-muted-foreground text-left">{description}</p>
//         <div className="flex flex-wrap gap-2">
//           {technologies.map((tech) => (
//             <Badge key={tech} variant="secondary" className="text-xs">
//               {tech}
//             </Badge>
//           ))}
//         </div>
//       </CardContent>
//     </Card>
//   )
// }

// export default function Home() {
//   const whatsappMessage = encodeURIComponent(
//     "Hi Arowosere! We saw your portfolio and want to connect. We're interested in discussing potential opportunities with you.",
//   )

//   return (
//     <div className="flex min-h-screen flex-col">
//       <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//         <div className="container flex h-16 items-center justify-between">
//           <Link href="/" className="flex items-center gap-2 font-bold">
//             <Terminal className="h-5 w-5" />
//             <span>Arowosere Abdulkhabeer</span>
//           </Link>
//           <nav className="hidden md:flex gap-6">
//             <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
//               About
//             </Link>
//             <Link href="#skills" className="text-sm font-medium hover:underline underline-offset-4">
//               Skills
//             </Link>
//             <Link href="#experience" className="text-sm font-medium hover:underline underline-offset-4">
//               Experience
//             </Link>
//             <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
//               Contact
//             </Link>
//           </nav>
//           <div className="flex items-center gap-2">
//             <ThemeToggle />
//             <Link href="https://github.com/maxim-ld" target="_blank" rel="noopener noreferrer">
//               <Button variant="ghost" size="icon" className="hover:bg-gray-800 hover:text-white">
//                 <Github className="h-5 w-5" />
//                 <span className="sr-only">GitHub</span>
//               </Button>
//             </Link>
//             <Link href="https://linkedin.com/in/arowosere-ak" target="_blank" rel="noopener noreferrer">
//               <Button variant="ghost" size="icon" className="hover:bg-blue-600 hover:text-white">
//                 <Linkedin className="h-5 w-5" />
//                 <span className="sr-only">LinkedIn</span>
//               </Button>
//             </Link>
//             <Link href="https://x.com/A_Quintet" target="_blank" rel="noopener noreferrer">
//               <Button variant="ghost" size="icon" className="hover:bg-black hover:text-white">
//                 <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
//                 </svg>
//                 <span className="sr-only">X (Twitter)</span>
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </header>
//       <main className="flex-1">
//         <section className="py-16 md:py-20 container">
//           <div className="flex flex-col md:flex-row items-center gap-8">
//             <div className="flex-1 space-y-4">
//               <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Backend Developer</h1>
//               <p className="text-xl text-muted-foreground">
//                 Building robust, scalable, and efficient backend systems. Specializing in TypScript, JavaScript, Node.js, Express.js, API
//                 design, and database architecture.
//               </p>
//               <div className="flex flex-wrap gap-4 pt-4">
//                 <CVModal />
//                 <Button className="bg-blue-600 hover:bg-blue-700 text-white">
//                   <Link href="#projects">
//                     View Projects
//                   </Link>
//                 </Button>
//                 <Link
//                   href={`https://wa.me/2348168905506?text=${whatsappMessage}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <Button className="bg-green-600 hover:bg-green-700 text-white">
//                     <WhatsApp className="mr-2 h-4 w-4" />
//                     WhatsApp Me
//                   </Button>
//                 </Link>
//               </div>
//             </div>
//             <div className="flex-1 flex justify-center">
//               <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary/20">
//                 <img
//                   src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/My%20Display-kpSeV2AiAqaTGs70zolEAqMxgEbePe.jpeg"
//                   alt="Arowosere Abdulkhabeer"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>
//           </div>
//         </section>

//         <section id="about" className="container py-12 bg-secondary/50">
//           <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
//             {/* About Me Section */}
//             <div className="space-y-6 text-justify">
//               <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">About Me</h2>
//               <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
//                 Backend Engineer who optimizes high-traffic systems, achieving 30–50% performance gains. Delivered
//                 secure payment APIs processing 5K+ transactions/month (99.8% uptime). Skilled in Node.js, Express,
//                 TypeScript, PostgreSQL, MongoDB, Redis, and CI/CD pipelines. Passionate about solving scalability
//                 challenges with clean, maintainable code.
//                 <br />
//                 <br />
//                 Highly motivated to learn and apply new technologies to deliver efficient and innovative solutions. My
//                 experience in web development and programming allows me to effectively contribute to collaborative teams
//                 and tackle complex projects.
//                 <br />
//                 <br />
//                 I'm constantly exploring new technologies and best practices to enhance my development skills.
//               </p>
//             </div>

//             {/* Quick Facts Section */}
//             <Card className="w-full">
//               <CardHeader>
//                 <CardTitle>Quick Facts</CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <div>
//                   <span className="font-semibold">Location:</span> Nigeria
//                 </div>
//                 <div>
//                   <span className="font-semibold">Experience:</span> Backend Development, API Integration, DevOps
//                   (GitHub Actions)
//                 </div>
//                 <div>
//                   <span className="font-semibold">Education:</span> Physics (B.Tech.)
//                 </div>
//                 <div>
//                   <span className="font-semibold">Technologies:</span> Node.js, Express.js, TypeScript, JavaScript,
//                   .NET, MongoDB, MySQL, Redis
//                 </div>
//                 <div>
//                   <span className="font-semibold">Languages:</span> English
//                 </div>
//                 <div>
//                   <span className="font-semibold">Interests:</span> .NET Development, API Design, Payment Integration,
//                   Database Optimization
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </section>

//         <section id="skills" className="container py-12">
//           <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
//             <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Technical Skills</h2>
//             <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
//               My technical expertise spans across various backend technologies, frameworks, and tools.
//             </p>

//             <Tabs defaultValue="languages" className="w-full max-w-3xl mt-8">
//               <TabsList className="grid w-full grid-cols-4">
//                 <TabsTrigger value="languages">Languages</TabsTrigger>
//                 <TabsTrigger value="frameworks">Frameworks</TabsTrigger>
//                 <TabsTrigger value="databases">Databases</TabsTrigger>
//                 <TabsTrigger value="tools">DevOps & Tools</TabsTrigger>
//               </TabsList>
//               <TabsContent value="languages" className="mt-4">
//                 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
//                   {["C#", "JavaScript", "TypeScript", "HTML/CSS", "SQL", "Bash"].map((skill) => (
//                     <Badge key={skill} variant="outline" className="py-3 text-center justify-center">
//                       {skill}
//                     </Badge>
//                   ))}
//                 </div>
//               </TabsContent>
//               <TabsContent value="frameworks" className="mt-4">
//                 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
//                   {["Node.js", "Express", "Next.js", ".NET Core", "ASP.NET", "Entity Framework"].map((skill) => (
//                     <Badge key={skill} variant="outline" className="py-3 text-center justify-center">
//                       {skill}
//                     </Badge>
//                   ))}
//                 </div>
//               </TabsContent>
//               <TabsContent value="databases" className="mt-4">
//                 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
//                   {["MySQL", "PostgreSQL", "MongoDB", "Redis", "SQLite", "Firebase", "DynamoDB"].map((skill) => (
//                     <Badge key={skill} variant="outline" className="py-3 text-center justify-center">
//                       {skill}
//                     </Badge>
//                   ))}
//                 </div>
//               </TabsContent>
//               <TabsContent value="tools" className="mt-4">
//                 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
//                   {[
//                     "Git",
//                     "Docker",
//                     "Azure",
//                     "AWS",
//                     "CI/CD",
//                     "Visual Studio",
//                     "VS Code",
//                     "Postman",
//                     "Jest",
//                     "Supertest",
//                   ].map((skill) => (
//                     <Badge key={skill} variant="outline" className="py-3 text-center justify-center">
//                       {skill}
//                     </Badge>
//                   ))}
//                 </div>
//               </TabsContent>
//             </Tabs>
//           </div>
//         </section>

//         <section id="projects" className="container py-12 bg-secondary/50">
//           <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
//             <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Featured Projects</h2>
//             <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
//               Here are some of my key projects that demonstrate my technical expertise and problem-solving abilities.
//             </p>

//             <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8 w-full">
//               <ProjectCard
//                 title="PEDMONIE - Unified Payment Platform"
//                 description="Led the backend development of Pedmonie, a comprehensive digital payment solution, with a focus on integrating the Stripe payment gateway. Engineered and optimized RESTful APIs, ensured secure transaction processing, and collaborated with a cross-functional team to enhance system scalability and reliability."
//                 technologies={["Node.js", "Express.js", "MySQL", "ERD", "Payment Gateway Integration"]}
//                 githubUrl="https://github.com/InternPulse/pedmonie-express-backend"
//                 imageUrl="/images/pedmonie.jpeg"
//                 icon={<Database className="h-10 w-10" />}
//               />
//               <ProjectCard
//                 title="Sweetened Cleaning Services"
//                 description="Developed a professional website for a UK-based cleaning services company. Built with modern web technologies to showcase services, handle client inquiries, and provide an excellent user experience for potential customers seeking cleaning solutions."
//                 technologies={["HTML", "CSS", "JavaScript", "Responsive Design", "SEO Optimization"]}
//                 githubUrl="https://github.com/LIZCODE-STUDIO/Sweetened-Cleaning-Services-updated"
//                 websiteUrl="http://sweetenedcleaningservices.co.uk/"
//                 imageUrl="/images/cleaning-services.jpg"
//                 icon={<Globe className="h-10 w-10" />}
//               />
//               <ProjectCard
//                 title="Car Dealer API"
//                 description="A RESTful API for managing a car dealership platform, built with Node.js, Express, TypeScript, and MongoDB. It supports user authentication, car inventory management, purchase transactions, payment integration (Paystack), and role-based access for admins, managers, and customers."
//                 technologies={[
//                   "Node.js",
//                   "Express.js",
//                   "TypeScript",
//                   "MongoDB",
//                   "JWT Authentication",
//                   "Paystack API",
//                   "RBAC",
//                 ]}
//                 githubUrl="https://github.com/Maxim-LD/Car-Dealer-API"
//                 imageUrl="/images/car-dealer.jpg"
//                 icon={<Server className="h-10 w-10" />}
//               />
//               <ProjectCard
//                 title="Library Management System"
//                 description="Designed and built a backend system for a digital library, implementing book cataloging, user borrowing functionality, and role-based access control to enhance efficiency and accessibility."
//                 technologies={["Node.js", "Express", "MongoDB", "JWT Authentication"]}
//                 githubUrl="https://github.com/Maxim-LD/library-management"
//                 imageUrl="/images/library.jpg"
//                 icon={<Book className="h-10 w-10" />}
//               />
//               <ProjectCard
//                 title="Food Recipe Management"
//                 description="Built a backend system for a recipe-sharing platform, allowing users to discover, share, and rate recipes. Implemented user authentication, recipe management, and a rating system to enhance user engagement and experience."
//                 technologies={["Node.js", "Express.js", "MongoDB", "JWT Authentication", "RESTful APIs"]}
//                 githubUrl="https://github.com/Maxim-LD/Recipe-Management-Project"
//                 imageUrl="/images/recipe.jpg"
//                 icon={<Utensils className="h-10 w-10" />}
//               />
//               <ProjectCard
//                 title="Donation Platform"
//                 description="Developing a platform that connects donors with causes, enabling secure online donations. Currently focused on implementing user authentication and payment processing to ensure seamless and trustworthy transactions."
//                 technologies={["Node.js", "Express.js", "MongoDB", "JWT Authentication", "Payment Gateway Integration"]}
//                 githubUrl="https://github.com/Maxim-LD/donation-platform-2.0"
//                 imageUrl="/images/donation.jpg"
//                 icon={<Server className="h-10 w-10" />}
//               />
//             </div>

//             <div className="mt-8">
//               <Link href="https://github.com/maxim-ld" target="_blank" rel="noopener noreferrer">
//                 <Button variant="outline" className="hover:bg-gray-800 hover:text-white bg-transparent">
//                   <Github className="mr-2 h-4 w-4" />
//                   View More on GitHub
//                 </Button>
//               </Link>
//             </div>
//           </div>
//         </section>

//         {/* Experience Section */}
//         <section id="experience" className="container py-12">
//           <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
//             <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Work Experience</h2>
//             <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
//               My professional journey and roles in the tech industry.
//             </p>

//             <div className="w-full space-y-6 mt-8">
//               <ExperienceItem
//                 title="Backend Developer (Volunteer)"
//                 company="ScholarGuide TECH"
//                 period="March 2025 – Present"
//                 description="Architected JWT-based authentication system with RBAC, securing access for users (Admins/Teachers/Students) and preventing unauthorized breaches via rate limiting and session encryption. Built RESTful APIs for study plans, tracking, resources, and analytics; reduced response time by 30% via Redis caching and query optimization."
//                 technologies={[
//                   "Node.js",
//                   "Express.js",
//                   "MongoDB",
//                   "Redis",
//                   "JWT Authentication",
//                   "RBAC",
//                   "RESTful APIs",
//                   "Rate Limiting",
//                   "Query Optimization",
//                 ]}
//               />

//               <ExperienceItem
//                 title="Backend Developer"
//                 company="InternPulse"
//                 period="2024 - 2025"
//                 description="Developing and maintaining backend systems for Pedmonie, an all-in-one payment platform. Integrated Paystack and currently working on Interswitch for seamless payment processing. Designed ERD and optimized database schemas for scalability."
//                 technologies={["Node.js", "Express.js", "MongoDB", "MySQL", "GitHub Actions", "REST API"]}
//               />

//               <ExperienceItem
//                 title="Telecoms Intern"
//                 company="BT Technologies Limited"
//                 period="2024"
//                 description="Gained hands-on experience in network design and infrastructure. Assisted in LAN and fiber optic installation for enterprise clients. Managed information systems and participated in multiple trainings on web development, data analysis, finance, and leadership."
//                 technologies={["Network Infrastructure", "Fiber Optics", "LAN Installation", "Information Systems"]}
//               />

//               <ExperienceItem
//                 title="Freelance Backend Developer"
//                 company="Self-employed"
//                 period="2024 - Present"
//                 description="Designing and developing backend systems for various projects. Building scalable RESTful APIs, integrating payment gateways, and optimizing database performance for client solutions."
//                 technologies={[
//                   "Node.js",
//                   "Express.js",
//                   "MongoDB",
//                   "Redis",
//                   "MySQL",
//                   "Paystack API",
//                   "Stripe API",
//                   "REST API",
//                 ]}
//               />
//             </div>
//           </div>
//         </section>

//         <section id="contact" className="container py-12">
//           <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
//             <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Get in Touch</h2>
//             <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
//               Interested in working together? Feel free to reach out to discuss your project or any opportunities.
//             </p>

//             <div className="grid w-full max-w-lg gap-6 mt-8">
//               <ContactForm />
//             </div>

//             <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center">
//               <Link href="mailto:arowosere.ak@gmail.com">
//                 <Button variant="outline" className="w-full sm:w-auto bg-transparent hover:bg-red-600 hover:text-white">
//                   <Mail className="mr-2 h-4 w-4" />
//                   Gmail
//                 </Button>
//               </Link>
//               <Link href="https://github.com/maxim-ld" target="_blank" rel="noopener noreferrer">
//                 <Button
//                   variant="outline"
//                   className="w-full sm:w-auto bg-transparent hover:bg-gray-800 hover:text-white"
//                 >
//                   <Github className="mr-2 h-4 w-4" />
//                   GitHub
//                 </Button>
//               </Link>
//               <Link href="https://linkedin.com/in/arowosere-ak" target="_blank" rel="noopener noreferrer">
//                 <Button
//                   variant="outline"
//                   className="w-full sm:w-auto bg-transparent hover:bg-blue-600 hover:text-white"
//                 >
//                   <Linkedin className="mr-2 h-4 w-4" />
//                   LinkedIn
//                 </Button>
//               </Link>
//               <Link href="https://x.com/A_Quintet" target="_blank" rel="noopener noreferrer">
//                 <Button variant="outline" className="w-full sm:w-auto bg-transparent hover:bg-black hover:text-white">
//                   <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
//                     <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
//                   </svg>
//                   X (Twitter)
//                 </Button>
//               </Link>
//               <Link
//                 href={`https://wa.me/2348168905506?text=${whatsappMessage}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <Button
//                   variant="outline"
//                   className="w-full sm:w-auto bg-transparent hover:bg-green-600 hover:text-white"
//                 >
//                   <WhatsApp className="mr-2 h-4 w-4" />
//                   WhatsApp
//                 </Button>
//               </Link>
//             </div>
//           </div>
//         </section>
//       </main>
//       <footer className="border-t py-6 md:py-0">
//         <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
//           <p className="text-sm text-muted-foreground">
//             © {new Date().getFullYear()} Arowosere Abdulkhabeer. All rights reserved.
//           </p>
//           <div className="flex items-center gap-4">
//             <Link href="https://github.com/maxim-ld" target="_blank" rel="noopener noreferrer">
//               <Button variant="ghost" size="icon" className="hover:bg-gray-800 hover:text-white">
//                 <Github className="h-4 w-4" />
//                 <span className="sr-only">GitHub</span>
//               </Button>
//             </Link>
//             <Link href="https://linkedin.com/in/arowosere-ak" target="_blank" rel="noopener noreferrer">
//               <Button variant="ghost" size="icon" className="hover:bg-blue-600 hover:text-white">
//                 <Linkedin className="h-4 w-4" />
//                 <span className="sr-only">LinkedIn</span>
//               </Button>
//             </Link>
//             <Link href="https://x.com/A_Quintet" target="_blank" rel="noopener noreferrer">
//               <Button variant="ghost" size="icon" className="hover:bg-black hover:text-white">
//                 <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
//                 </svg>
//                 <span className="sr-only">X (Twitter)</span>
//               </Button>
//             </Link>
//             <Link
//               href={`https://wa.me/2348168905506?text=${whatsappMessage}`}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Button variant="ghost" size="icon" className="hover:bg-green-600 hover:text-white">
//                 <WhatsApp className="h-4 w-4" />
//                 <span className="sr-only">WhatsApp</span>
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </footer>
//     </div>
//   )
// }

// function ProjectCard({
//   title,
//   description,
//   technologies,
//   icon,
//   githubUrl,
//   websiteUrl,
//   imageUrl,
// }: {
//   title: string
//   description: string
//   technologies: string[]
//   icon: React.ReactNode
//   githubUrl?: string
//   websiteUrl?: string
//   imageUrl?: string
// }) {
//   return (
//     <Card className="flex flex-col h-full">
//       {imageUrl && (
//         <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
//           <Image
//             src={imageUrl || "/placeholder.svg"}
//             alt={title}
//             fill
//             className="object-cover transition-transform hover:scale-105"
//           />
//         </div>
//       )}
//       <CardHeader>
//         <div className="flex items-center gap-2">
//           {icon}
//           <CardTitle className="text-lg">{title}</CardTitle>
//         </div>
//       </CardHeader>
//       <CardContent className="flex-1">
//         <p className="text-muted-foreground text-left text-sm">{description}</p>
//       </CardContent>
//       <CardFooter className="flex flex-col gap-4 border-t pt-4">
//         <div className="flex flex-wrap gap-2 w-full">
//           {technologies.map((tech) => (
//             <Badge key={tech} variant="secondary" className="text-xs">
//               {tech}
//             </Badge>
//           ))}
//         </div>
//         <div className="flex gap-2 w-full">
//           {githubUrl && (
//             <Link href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
//               <Button variant="outline" size="sm" className="w-full bg-transparent hover:bg-gray-800 hover:text-white">
//                 <Github className="mr-2 h-4 w-4" />
//                 GitHub
//               </Button>
//             </Link>
//           )}
//           {websiteUrl && (
//             <Link href={websiteUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
//               <Button variant="outline" size="sm" className="w-full bg-transparent hover:bg-blue-600 hover:text-white">
//                 <Globe className="mr-2 h-4 w-4" />
//                 Live Site
//               </Button>
//             </Link>
//           )}
//         </div>
//       </CardFooter>
//     </Card>
//   )
// }

// function ContactForm() {
//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     const formData = new FormData(e.currentTarget)
//     const name = formData.get("name")
//     const email = formData.get("email")
//     const subject = formData.get("subject")
//     const message = formData.get("message")

//     const mailtoLink = `mailto:arowosere.ak@gmail.com?subject=${encodeURIComponent(subject as string)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`
//     window.location.href = mailtoLink
//   }

//   return (
//     <form className="grid gap-4" onSubmit={handleSubmit}>
//       <div className="grid grid-cols-2 gap-4">
//         <div className="grid gap-2">
//           <label
//             htmlFor="name"
//             className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-left"
//           >
//             Name
//           </label>
//           <input
//             id="name"
//             name="name"
//             required
//             className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
//             placeholder="Your name"
//           />
//         </div>
//         <div className="grid gap-2">
//           <label
//             htmlFor="email"
//             className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-left"
//           >
//             Email
//           </label>
//           <input
//             id="email"
//             name="email"
//             type="email"
//             required
//             className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
//             placeholder="Your email"
//           />
//         </div>
//       </div>
//       <div className="grid gap-2">
//         <label
//           htmlFor="subject"
//           className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-left"
//         >
//           Subject
//         </label>
//         <input
//           id="subject"
//           name="subject"
//           required
//           className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
//           placeholder="Subject of your message"
//         />
//       </div>
//       <div className="grid gap-2">
//         <label
//           htmlFor="message"
//           className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-left"
//         >
//           Message
//         </label>
//         <textarea
//           id="message"
//           name="message"
//           required
//           className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
//           placeholder="Your message"
//         />
//       </div>
//       <Button type="submit" className="w-full">
//         Send Message
//       </Button>
//     </form>
//   )
// }
