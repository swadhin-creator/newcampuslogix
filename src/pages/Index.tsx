import { Button } from "@/components/ui/button";
import { useLeadForm } from "@/contexts/LeadFormContext";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  Target,
  Users,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  TrendingUp,
  Award,
  Building2,
  Clock,
  BarChart3,
  Lightbulb,
  ChevronDown,
  ChevronUp,
  Star,
  Quote,
} from "lucide-react";
import { useState } from "react";

const Index = () => {
  const { openLeadForm } = useLeadForm();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-light to-background" />
        <div className="container-main relative py-20 md:py-28 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Industry-Aligned Skill Development
            </span>
            <h1 className="heading-1 text-foreground">
              Transform Your Students Into{" "}
              <span className="text-primary">Job-Ready Professionals</span>
            </h1>
            <p className="body-large mt-6 text-muted-foreground">
              CampusLogix partners with colleges and universities across India to deliver cutting-edge skill development programs that bridge the gap between academics and industry requirements.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" onClick={openLeadForm}>
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/courses">View Courses</Link>
              </Button>
            </div>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Building2 className="h-5 w-5 text-primary" />
                <span>100+ Partner Institutions</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span>50,000+ Students Trained</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                <span>85% Placement Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="bg-section-alt section-padding">
        <div className="container-main">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="heading-2 text-foreground">The Challenge Facing Higher Education Today</h2>
            <p className="body-text mt-4 text-muted-foreground">
              Despite excellent academic foundations, many graduates struggle to meet industry expectations. The gap between theoretical knowledge and practical skills is widening.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Target,
                title: "Skill Gap",
                description: "70% of employers report that fresh graduates lack job-ready skills required for entry-level positions.",
              },
              {
                icon: TrendingUp,
                title: "Evolving Demands",
                description: "Technology and industry requirements are changing faster than traditional curricula can adapt.",
              },
              {
                icon: Briefcase,
                title: "Placement Pressure",
                description: "Institutions face increasing pressure to improve placement rates and student employability.",
              },
            ].map((item, index) => (
              <div key={index} className="rounded-xl border border-border bg-card p-6 shadow-card transition-shadow hover:shadow-card-hover">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="heading-3 mt-4 text-foreground">{item.title}</h3>
                <p className="body-text mt-2 text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution/About Section */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-medium uppercase tracking-wider text-primary">About CampusLogix</span>
              <h2 className="heading-2 mt-2 text-foreground">Your Partner in Building Industry-Ready Talent</h2>
              <p className="body-text mt-4 text-muted-foreground">
                CampusLogix is an ed-tech company dedicated to bridging the employability gap in Indian higher education. We work directly with colleges and universities to deliver industry-aligned training programs that complement academic curricula.
              </p>
              <p className="body-text mt-4 text-muted-foreground">
                Our programs are designed by industry practitioners and delivered by experienced trainers who understand both academic constraints and corporate expectations.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Customized programs aligned to your curriculum",
                  "Experienced industry trainers",
                  "Hands-on project-based learning",
                  "Regular progress tracking and reporting",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5">
                <div className="flex h-full items-center justify-center">
                  <GraduationCap className="h-32 w-32 text-primary/30" />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-xl border border-border bg-card p-4 shadow-card">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                    <TrendingUp className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">85%</p>
                    <p className="text-sm text-muted-foreground">Placement Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-section-alt section-padding">
        <div className="container-main">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="heading-2 text-foreground">How It Works</h2>
            <p className="body-text mt-4 text-muted-foreground">
              A simple, structured approach to implementing skill development at your institution.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {[
              { step: "01", title: "Consultation", description: "We understand your institution's needs, student profile, and goals." },
              { step: "02", title: "Customization", description: "Programs are tailored to align with your curriculum and timeline." },
              { step: "03", title: "Delivery", description: "Expert trainers deliver engaging, hands-on training sessions." },
              { step: "04", title: "Assessment", description: "Regular evaluations and progress reports keep you informed." },
            ].map((item, index) => (
              <div key={index} className="relative text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  {item.step}
                </div>
                {index < 3 && (
                  <div className="absolute left-1/2 top-8 hidden h-px w-full bg-border md:block" />
                )}
                <h3 className="heading-3 mt-4 text-foreground">{item.title}</h3>
                <p className="body-text mt-2 text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="section-padding">
        <div className="container-main">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="heading-2 text-foreground">What You Get</h2>
            <p className="body-text mt-4 text-muted-foreground">
              Comprehensive support and resources for successful program implementation.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: BookOpen, title: "Industry-Curated Curriculum", description: "Content designed by practitioners with real-world relevance." },
              { icon: Users, title: "Expert Trainers", description: "Experienced professionals who know how to engage students." },
              { icon: Lightbulb, title: "Project-Based Learning", description: "Hands-on projects that build practical, demonstrable skills." },
              { icon: BarChart3, title: "Progress Tracking", description: "Regular assessments and detailed progress reports." },
              { icon: Award, title: "Certification", description: "Industry-recognized certificates for program completers." },
              { icon: Clock, title: "Flexible Scheduling", description: "Programs designed to fit your academic calendar." },
            ].map((item, index) => (
              <div key={index} className="flex gap-4 rounded-xl border border-border bg-card p-5 shadow-card transition-shadow hover:shadow-card-hover">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Offered */}
      <section className="bg-section-alt section-padding">
        <div className="container-main">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="heading-2 text-foreground">Programs Offered</h2>
            <p className="body-text mt-4 text-muted-foreground">
              Comprehensive skill development tracks aligned with industry demands.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Full Stack Web Development",
              "Data Science & Analytics",
              "Cloud Computing & DevOps",
              "Artificial Intelligence & ML",
              "Cybersecurity Fundamentals",
              "Aptitude & Soft Skills",
            ].map((program, index) => (
              <div key={index} className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 shadow-card">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary">
                  <GraduationCap className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="font-medium text-foreground">{program}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button variant="outline" asChild>
              <Link to="/courses">
                View All Courses
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="section-padding">
        <div className="container-main">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="heading-2 text-foreground">Why Choose CampusLogix</h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "100+", label: "Partner Institutions" },
              { value: "50,000+", label: "Students Trained" },
              { value: "85%", label: "Placement Rate" },
              { value: "4.8/5", label: "Satisfaction Score" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-bold text-primary">{stat.value}</p>
                <p className="mt-2 text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { title: "Industry Partnerships", description: "Direct connections with hiring companies for placement support." },
              { title: "Proven Methodology", description: "Refined training approach developed over years of experience." },
              { title: "End-to-End Support", description: "From planning to placement, we're with you every step." },
            ].map((item, index) => (
              <div key={index} className="rounded-xl border border-border bg-card p-6 text-center shadow-card">
                <h3 className="heading-3 text-foreground">{item.title}</h3>
                <p className="body-text mt-2 text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="bg-section-alt section-padding">
        <div className="container-main">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="heading-2 text-foreground">Ideal For</h2>
            <p className="body-text mt-4 text-muted-foreground">
              Our programs are designed for forward-thinking institutions committed to student success.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Engineering Colleges",
              "Universities",
              "Polytechnics",
              "Arts & Science Colleges",
            ].map((type, index) => (
              <div key={index} className="flex items-center justify-center gap-3 rounded-xl border border-border bg-card p-6 shadow-card">
                <Building2 className="h-6 w-6 text-primary" />
                <span className="font-medium text-foreground">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="section-padding">
        <div className="container-main">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="heading-2 text-foreground">What Educators Say</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              {
                quote: "CampusLogix transformed our placement outcomes. Their practical approach to training gave our students the edge they needed.",
                author: "Dr. Ramesh Kumar",
                role: "Principal, XYZ Engineering College",
              },
              {
                quote: "The trainers were exceptional—they understood our students and delivered content in an engaging, practical manner.",
                author: "Prof. Sunita Sharma",
                role: "HOD Computer Science, ABC University",
              },
            ].map((testimonial, index) => (
              <div key={index} className="rounded-xl border border-border bg-card p-6 shadow-card">
                <Quote className="h-8 w-8 text-primary/20" />
                <p className="mt-4 text-lg italic text-foreground">"{testimonial.quote}"</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-sm font-medium text-primary">{testimonial.author[0]}</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button variant="outline" asChild>
              <Link to="/testimonials">
                Read More Testimonials
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQSection />

      {/* Final CTA */}
      <section className="bg-primary section-padding">
        <div className="container-main">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="heading-2 text-primary-foreground">Ready to Transform Your Students' Future?</h2>
            <p className="body-large mt-4 text-primary-foreground/80">
              Partner with CampusLogix to deliver industry-aligned skill development at your institution.
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

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long are the training programs?",
      answer: "Programs range from 40-120 hours depending on the topic. We work with your academic calendar to create optimal scheduling that doesn't conflict with regular classes.",
    },
    {
      question: "Do you provide placement support?",
      answer: "Yes, we offer comprehensive placement support including resume building, mock interviews, and direct connections with our hiring partners.",
    },
    {
      question: "Can programs be customized for our curriculum?",
      answer: "Absolutely. Every program is tailored to align with your existing curriculum, student profile, and institutional goals.",
    },
    {
      question: "What are the batch sizes?",
      answer: "We recommend 30-60 students per batch for optimal engagement. For larger cohorts, we run parallel batches with consistent quality.",
    },
    {
      question: "How do you ensure training quality?",
      answer: "All trainers undergo rigorous selection and training. We conduct regular evaluations, collect student feedback, and maintain strict quality standards.",
    },
  ];

  return (
    <section className="bg-section-alt section-padding">
      <div className="container-main">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-2 text-foreground">Frequently Asked Questions</h2>
        </div>
        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-xl border border-border bg-card shadow-card">
              <button
                className="flex w-full items-center justify-between p-5 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-foreground">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
                ) : (
                  <ChevronDown className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
                )}
              </button>
              {openIndex === index && (
                <div className="border-t border-border px-5 pb-5 pt-4">
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Index;
