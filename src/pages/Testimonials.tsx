import { Button } from "@/components/ui/button";
import { useLeadForm } from "@/contexts/LeadFormContext";
import { Quote, ArrowRight, Star, Users, GraduationCap } from "lucide-react";

const Testimonials = () => {
  const { openLeadForm } = useLeadForm();

  const studentTestimonials = [
    {
      quote: "The hands-on projects helped me build a portfolio that got me noticed by recruiters. I received multiple offers even before completing my final semester.",
      name: "Ananya Krishnamurthy",
      role: "B.Tech CSE Graduate",
      institution: "Shri Venkateshwara College of Engineering, Coimbatore",
      rating: 5,
    },
    {
      quote: "The trainers explained complex concepts in simple terms. The Python for Data Science course changed my career trajectory completely.",
      name: "Mohammed Faisal Khan",
      role: "MCA Student",
      institution: "Presidency College, Bangalore",
      rating: 5,
    },
    {
      quote: "I was nervous about technical interviews. The aptitude and soft skills training gave me the confidence I needed to ace my placement drive.",
      name: "Shreya Venkataraman",
      role: "B.E. IT Graduate",
      institution: "Dr. Mahalingam College of Engineering, Pollachi",
      rating: 5,
    },
    {
      quote: "Real-world projects, industry mentors, and practical exposure—everything I needed to become job-ready. Highly recommended!",
      name: "Arjun Malhotra",
      role: "B.Sc Computer Science",
      institution: "St. Joseph's College of Arts & Science, Chennai",
      rating: 5,
    },
    {
      quote: "The cloud computing course opened doors I didn't know existed. Now I'm working as a Cloud Engineer at a top MNC.",
      name: "Divya Raghunathan",
      role: "M.Tech Graduate",
      institution: "Kongu Engineering College, Erode",
      rating: 5,
    },
    {
      quote: "From zero coding knowledge to building full-stack applications—the journey was incredible. Thank you, CampusLogix!",
      name: "Rohan Deshmukh",
      role: "BCA Graduate",
      institution: "Symbiosis College of Arts & Commerce, Pune",
      rating: 4,
    },
  ];

  const facultyTestimonials = [
    {
      quote: "CampusLogix transformed our placement outcomes. Their practical approach to training gave our students the edge they needed in competitive job markets.",
      name: "Dr. Rajendra Prasad Sharma",
      role: "Principal",
      institution: "Sri Ramakrishna Institute of Technology, Coimbatore",
      rating: 5,
    },
    {
      quote: "The trainers were exceptional—they understood our students and delivered content in an engaging, practical manner. Our placement rate improved by 40%.",
      name: "Prof. Lakshmi Narayanan",
      role: "HOD, Computer Science",
      institution: "PSG College of Technology, Coimbatore",
      rating: 5,
    },
    {
      quote: "We've partnered with CampusLogix for three years now. Their consistency, professionalism, and genuine care for student outcomes sets them apart.",
      name: "Dr. Venkatesh Murthy",
      role: "Dean of Academics",
      institution: "Kumaraguru College of Technology, Coimbatore",
      rating: 5,
    },
    {
      quote: "The customized curriculum aligned perfectly with our academic calendar. Minimal disruption, maximum impact. That's what we appreciate about CampusLogix.",
      name: "Prof. Meenakshi Sundaram",
      role: "Training & Placement Officer",
      institution: "Bharati Vidyapeeth College of Engineering, Pune",
      rating: 5,
    },
    {
      quote: "Regular progress reports and transparent communication made program management effortless. Our leadership is highly satisfied with the partnership.",
      name: "Dr. K. Srinivasan",
      role: "Vice Chancellor",
      institution: "Alagappa University, Karaikudi",
      rating: 5,
    },
    {
      quote: "Industry-relevant curriculum, experienced trainers, and genuine placement support—CampusLogix delivers on all fronts.",
      name: "Prof. Padma Priya",
      role: "Director, Training Center",
      institution: "Hindusthan College of Engineering, Coimbatore",
      rating: 5,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-light to-background py-16 md:py-24">
        <div className="container-main">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Success Stories
            </span>
            <h1 className="heading-1 text-foreground">
              Hear From Those Who've{" "}
              <span className="text-primary">Experienced the Difference</span>
            </h1>
            <p className="body-large mt-6 text-muted-foreground">
              Students, faculty, and administrators share their experiences partnering with CampusLogix.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="border-b border-border bg-card py-8">
        <div className="container-main">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">4.8/5</p>
              <p className="text-sm text-muted-foreground">Average Rating</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">50,000+</p>
              <p className="text-sm text-muted-foreground">Students Trained</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">100+</p>
              <p className="text-sm text-muted-foreground">Partner Institutions</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">85%</p>
              <p className="text-sm text-muted-foreground">Placement Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="section-padding">
        <div className="container-main">
          <div className="mb-12 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="heading-2 text-foreground">Student Feedback</h2>
              <p className="text-muted-foreground">What our students say about their learning experience</p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {studentTestimonials.map((testimonial, index) => (
              <div key={index} className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-card">
                <Quote className="h-8 w-8 text-primary/20" />
                <p className="mt-4 flex-1 text-foreground">"{testimonial.quote}"</p>
                <div className="mt-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < testimonial.rating ? "fill-primary text-primary" : "text-border"}`}
                    />
                  ))}
                </div>
                <div className="mt-4 border-t border-border pt-4">
                  <p className="font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Testimonials */}
      <section className="bg-section-alt section-padding">
        <div className="container-main">
          <div className="mb-12 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="heading-2 text-foreground">Faculty & Administrator Feedback</h2>
              <p className="text-muted-foreground">Insights from educational leaders across India</p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {facultyTestimonials.map((testimonial, index) => (
              <div key={index} className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-card">
                <Quote className="h-8 w-8 text-primary/20" />
                <p className="mt-4 flex-1 text-foreground">"{testimonial.quote}"</p>
                <div className="mt-4 border-t border-border pt-4">
                  <p className="font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary section-padding">
        <div className="container-main">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="heading-2 text-primary-foreground">Join Our Growing Network</h2>
            <p className="body-large mt-4 text-primary-foreground/80">
              Partner with CampusLogix and transform your students' career outcomes.
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

export default Testimonials;
