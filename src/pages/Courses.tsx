import { Button } from "@/components/ui/button";
import { useLeadForm } from "@/contexts/LeadFormContext";
import {
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  Clock,
  Users,
  BookOpen,
  BarChart3,
  Code,
  Database,
  Cloud,
  Brain,
  Shield,
  MessageSquare,
} from "lucide-react";

const Courses = () => {
  const { openLeadForm } = useLeadForm();

  const corePrograms = [
    {
      icon: Code,
      title: "Full Stack Web Development",
      duration: "120 Hours",
      description: "Master front-end and back-end technologies including React, Node.js, databases, and deployment.",
      topics: ["HTML, CSS, JavaScript", "React & Node.js", "MongoDB & SQL", "REST APIs", "Git & Deployment"],
    },
    {
      icon: Database,
      title: "Data Science & Analytics",
      duration: "100 Hours",
      description: "Learn to analyze, visualize, and derive insights from data using Python and modern tools.",
      topics: ["Python for Data Science", "Pandas & NumPy", "Data Visualization", "Statistical Analysis", "Machine Learning Basics"],
    },
    {
      icon: Cloud,
      title: "Cloud Computing & DevOps",
      duration: "80 Hours",
      description: "Understand cloud infrastructure, containerization, and continuous integration/deployment.",
      topics: ["AWS/Azure Fundamentals", "Docker & Kubernetes", "CI/CD Pipelines", "Infrastructure as Code", "Monitoring & Logging"],
    },
  ];

  const specializedPrograms = [
    {
      icon: Brain,
      title: "Artificial Intelligence & ML",
      duration: "100 Hours",
      description: "Deep dive into AI concepts, neural networks, and practical machine learning applications.",
      topics: ["AI Fundamentals", "Deep Learning", "NLP Basics", "Computer Vision", "Model Deployment"],
    },
    {
      icon: Shield,
      title: "Cybersecurity Fundamentals",
      duration: "60 Hours",
      description: "Build a strong foundation in security principles, threat analysis, and ethical hacking.",
      topics: ["Security Principles", "Network Security", "Cryptography", "Ethical Hacking", "Security Compliance"],
    },
    {
      icon: MessageSquare,
      title: "Aptitude & Soft Skills",
      duration: "40 Hours",
      description: "Develop critical thinking, communication, and professional skills for career success.",
      topics: ["Quantitative Aptitude", "Logical Reasoning", "Verbal Ability", "Communication Skills", "Interview Preparation"],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-light to-background py-16 md:py-24">
        <div className="container-main">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Industry-Aligned Curriculum
            </span>
            <h1 className="heading-1 text-foreground">
              Skill Development Programs That{" "}
              <span className="text-primary">Drive Results</span>
            </h1>
            <p className="body-large mt-6 text-muted-foreground">
              Comprehensive training programs designed by industry experts, tailored for higher education institutions across India.
            </p>
          </div>
        </div>
      </section>

      {/* Structure Strip */}
      <section className="border-b border-border bg-card py-8">
        <div className="container-main">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {[
              { icon: Clock, label: "40-120 Hour Programs" },
              { icon: Users, label: "30-60 Students/Batch" },
              { icon: BookOpen, label: "Hands-On Projects" },
              { icon: BarChart3, label: "Progress Tracking" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <item.icon className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-muted-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Programs */}
      <section className="section-padding">
        <div className="container-main">
          <div className="mb-12">
            <span className="text-sm font-medium uppercase tracking-wider text-primary">Foundation Tracks</span>
            <h2 className="heading-2 mt-2 text-foreground">Core Programs</h2>
            <p className="body-text mt-4 max-w-2xl text-muted-foreground">
              Our flagship programs covering essential technology domains with comprehensive curriculum and hands-on training.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {corePrograms.map((program, index) => (
              <div key={index} className="flex flex-col rounded-xl border border-border bg-card shadow-card transition-shadow hover:shadow-card-hover">
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <program.icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="rounded-full bg-section-alt px-3 py-1 text-sm font-medium text-muted-foreground">
                      {program.duration}
                    </span>
                  </div>
                  <h3 className="heading-3 mt-4 text-foreground">{program.title}</h3>
                  <p className="body-text mt-2 text-muted-foreground">{program.description}</p>
                </div>
                <div className="mt-auto border-t border-border p-6">
                  <p className="mb-3 text-sm font-medium text-foreground">Key Topics:</p>
                  <ul className="space-y-2">
                    {program.topics.map((topic, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-primary" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Programs */}
      <section className="bg-section-alt section-padding">
        <div className="container-main">
          <div className="mb-12">
            <span className="text-sm font-medium uppercase tracking-wider text-primary">Advanced Tracks</span>
            <h2 className="heading-2 mt-2 text-foreground">Specialized Programs</h2>
            <p className="body-text mt-4 max-w-2xl text-muted-foreground">
              Focused programs for emerging technologies and essential professional skills.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {specializedPrograms.map((program, index) => (
              <div key={index} className="flex flex-col rounded-xl border border-border bg-card shadow-card transition-shadow hover:shadow-card-hover">
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <program.icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="rounded-full bg-section-alt px-3 py-1 text-sm font-medium text-muted-foreground">
                      {program.duration}
                    </span>
                  </div>
                  <h3 className="heading-3 mt-4 text-foreground">{program.title}</h3>
                  <p className="body-text mt-2 text-muted-foreground">{program.description}</p>
                </div>
                <div className="mt-auto border-t border-border p-6">
                  <p className="mb-3 text-sm font-medium text-foreground">Key Topics:</p>
                  <ul className="space-y-2">
                    {program.topics.map((topic, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-primary" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery & Reporting */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-medium uppercase tracking-wider text-primary">Our Approach</span>
              <h2 className="heading-2 mt-2 text-foreground">Delivery & Reporting</h2>
              <p className="body-text mt-4 text-muted-foreground">
                We ensure complete transparency and accountability throughout the training process with structured delivery and regular reporting.
              </p>
              <div className="mt-8 space-y-6">
                {[
                  {
                    title: "Flexible Delivery Modes",
                    description: "Choose from in-person, online, or hybrid training modes based on your infrastructure and preferences.",
                  },
                  {
                    title: "Weekly Progress Reports",
                    description: "Detailed reports on attendance, assessment scores, and student engagement shared weekly.",
                  },
                  {
                    title: "Performance Analytics",
                    description: "Comprehensive dashboards showing individual and batch-level progress throughout the program.",
                  },
                  {
                    title: "Completion Certificates",
                    description: "Industry-recognized certificates for students who successfully complete the program.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5">
                <div className="flex h-full items-center justify-center">
                  <BarChart3 className="h-32 w-32 text-primary/30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary section-padding">
        <div className="container-main">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="heading-2 text-primary-foreground">Interested in Our Programs?</h2>
            <p className="body-large mt-4 text-primary-foreground/80">
              Let's discuss how we can tailor our training programs for your institution.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="mt-8"
              onClick={openLeadForm}
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
