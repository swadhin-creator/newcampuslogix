import { Button } from "@/components/ui/button";
import { useLeadForm } from "@/contexts/LeadFormContext";
import { ArrowRight, Star, GraduationCap, ChevronDown } from "lucide-react";
import { useState } from "react";

const Testimonials = () => {
  const { openLeadForm } = useLeadForm();
  const [showAll, setShowAll] = useState(false);

  const studentTestimonials = [
    {
      quote: "The hands-on projects helped me build a portfolio that got me noticed by recruiters. I received multiple offers even before completing my final semester.",
      name: "Ananya Krishnamurthy",
      city: "Coimbatore",
      rating: 5,
    },
    {
      quote: "The trainers explained complex concepts in simple terms. The Python for Data Science course changed my career trajectory completely.",
      name: "Mohammed Faisal Khan",
      city: "Bangalore",
      rating: 5,
    },
    {
      quote: "I was nervous about technical interviews. The aptitude and soft skills training gave me the confidence I needed to ace my placement drive.",
      name: "Shreya Venkataraman",
      city: "Pollachi",
      rating: 5,
    },
    {
      quote: "Real-world projects, industry mentors, and practical exposure—everything I needed to become job-ready. Highly recommended!",
      name: "Arjun Malhotra",
      city: "Chennai",
      rating: 5,
    },
    {
      quote: "The cloud computing course opened doors I didn't know existed. Now I'm working as a Cloud Engineer at a top MNC.",
      name: "Divya Raghunathan",
      city: "Erode",
      rating: 5,
    },
    {
      quote: "From zero coding knowledge to building full-stack applications—the journey was incredible. Thank you, CampusLogix!",
      name: "Rohan Deshmukh",
      city: "Pune",
      rating: 5,
    },
    {
      quote: "The AI and Machine Learning course was exactly what I needed. The practical projects gave me real industry experience.",
      name: "Priya Sharma",
      city: "Bengaluru",
      rating: 5,
    },
    {
      quote: "CampusLogix trainers are incredibly patient and knowledgeable. They made sure everyone in the batch understood the concepts.",
      name: "Rahul Verma",
      city: "Chennai",
      rating: 5,
    },
    {
      quote: "The placement support was exceptional. They helped me prepare for interviews and land my dream job at a Fortune 500 company.",
      name: "Vikram Patel",
      city: "Mumbai",
      rating: 5,
    },
    {
      quote: "I went from having no coding experience to building my own web applications. CampusLogix changed my career trajectory.",
      name: "Ananya Reddy",
      city: "Hyderabad",
      rating: 5,
    },
    {
      quote: "The digital marketing course was comprehensive and up-to-date. I'm now running successful campaigns for multiple clients.",
      name: "Sneha Iyer",
      city: "Kochi",
      rating: 5,
    },
    {
      quote: "Best investment I made in my career. The skills I learned are directly applicable to my current job.",
      name: "Karthik Sundaram",
      city: "Madurai",
      rating: 5,
    },
    {
      quote: "The business analytics course helped me understand data-driven decision making. My productivity has increased significantly.",
      name: "Neha Gupta",
      city: "Delhi",
      rating: 5,
    },
    {
      quote: "Excellent curriculum and amazing trainers. The hands-on approach made learning enjoyable and effective.",
      name: "Aditya Nair",
      city: "Trivandrum",
      rating: 5,
    },
    {
      quote: "The cybersecurity fundamentals course was eye-opening. I now understand how to protect systems from real-world threats.",
      name: "Ravi Kumar",
      city: "Kolkata",
      rating: 5,
    },
    {
      quote: "CampusLogix helped me transition from a non-tech background to a successful career in software development.",
      name: "Meera Joshi",
      city: "Ahmedabad",
      rating: 5,
    },
    {
      quote: "The DevOps training was thorough and practical. I learned tools that are used in actual production environments.",
      name: "Suresh Babu",
      city: "Vizag",
      rating: 5,
    },
    {
      quote: "Outstanding learning experience! The trainers went above and beyond to ensure we understood every concept.",
      name: "Pooja Menon",
      city: "Mangalore",
      rating: 5,
    },
    {
      quote: "The soft skills training improved my communication and presentation abilities tremendously. Essential for any professional.",
      name: "Amit Saxena",
      city: "Lucknow",
      rating: 5,
    },
    {
      quote: "I appreciate how the courses are structured around real industry requirements. Very relevant and practical.",
      name: "Lakshmi Priya",
      city: "Salem",
      rating: 5,
    },
    {
      quote: "The financial accounting course gave me a solid foundation. I'm now confidently handling complex financial statements.",
      name: "Sanjay Reddy",
      city: "Hyderabad",
      rating: 5,
    },
    {
      quote: "CampusLogix programs are worth every minute. The knowledge I gained has been invaluable in my career.",
      name: "Deepika Chopra",
      city: "Chandigarh",
      rating: 5,
    },
    {
      quote: "The supply chain management course was comprehensive. I now have a much better understanding of logistics operations.",
      name: "Varun Singh",
      city: "Jaipur",
      rating: 5,
    },
    {
      quote: "Fantastic learning platform! The instructors are experienced professionals who share real industry insights.",
      name: "Ishaan Mehta",
      city: "Surat",
      rating: 5,
    },
  ];

  const displayedTestimonials = showAll ? studentTestimonials : studentTestimonials.slice(0, 9);

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
              Students share their experiences partnering with CampusLogix.
            </p>
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
            {displayedTestimonials.map((testimonial, index) => (
              <div key={index} className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-card">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < testimonial.rating ? "fill-primary text-primary" : "text-border"}`}
                    />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-foreground">"{testimonial.quote}"</p>
                <div className="mt-4 border-t border-border pt-4">
                  <p className="font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.city}</p>
                </div>
              </div>
            ))}
          </div>
          {!showAll && (
            <div className="mt-8 text-center">
              <Button variant="outline" onClick={() => setShowAll(true)}>
                View More Testimonials
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}
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
