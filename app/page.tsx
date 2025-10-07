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
        Experience
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
                description="Built and maintained backend systems for NGO, fintech, and healthcare platforms; designed REST APIs, deployed Docker containers, and integrated payment gateways (Paystack, PayPal, Crypto)."
                technologies={[
                  "Node.js",
                  "Express",
                  "PostgreSQL",
                  "Docker",
                  "AWS",
                ]}
              />

              <ExperienceItem
                title="Backend Developer (Volunteer)"
                company="ScholarGuide – EdTech Startup"
                period="Jan 2025 – Present"
                description="Developed backend services for gamified learning; implemented role-based access control, caching, and secure endpoints for points, badges, and leaderboards."
                technologies={["Node.js", "MongoDB", "Redis", "JWT", "Express"]}
              />

              <ExperienceItem
                title="Backend Developer (Volunteer)"
                company="MyEd3Hub – Web3 Learning Platform"
                period="Dec 2024 – Present"
                description="Built NFT-backed certification APIs and blockchain-linked learning analytics; used Redis caching and Elasticsearch to improve query performance by 75%."
                technologies={[
                  "Node.js",
                  "Express",
                  "Redis",
                  "Elasticsearch",
                  "Blockchain",
                ]}
              />

              <ExperienceItem
                title="Full Stack Developer (Bootcamp Trainee/Intern)"
                company="EdoJobs Tech Bootcamp – Full Stack Development Track"
                period="Jan 2023 – Dec 2023"
                description="Completed a full-year intensive EdoJobs Full Stack Bootcamp and Internship, gaining hands-on experience designing and developing 7+ end-to-end web applications. Built responsive UIs with React.js, implemented scalable RESTful APIs with Node.js and Express, and integrated MongoDB for data management. Collaborated in agile teams to translate Figma designs into functional products and deployed full-stack projects to Netlify and Vercel."
                technologies={[
                  "React.js",
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "HTML",
                  "CSS",
                  "JavaScript",
                ]}
              />

              <ExperienceItem
                title="Full Stack Developer (Intern)"
                company="In-box Elite"
                period="Aug 2023 – Dec 2024"
                description="Built end-to-end merchandising and inventory management systems; developed dashboards and optimized backend queries."
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