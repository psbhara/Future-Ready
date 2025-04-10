
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "The AI recommendations were spot-on! I discovered a career path I hadn't even considered, and now I'm thriving in my new role.",
    author: "Michael Chen",
    role: "Software Engineer",
    company: "TechNova Inc."
  },
  {
    quote: "As a first-generation college student, I was overwhelmed by the application process. This platform guided me through every step and helped me secure a scholarship.",
    author: "Sophia Rodriguez",
    role: "Biology Student",
    company: "Stanford University"
  },
  {
    quote: "The resume feedback provided by the AI was invaluable. After implementing the suggestions, I received calls from top companies in my industry.",
    author: "James Wilson",
    role: "Marketing Specialist",
    company: "Brand Fusion"
  },
  {
    quote: "I was stuck in a career rut until I used this platform. The career quiz revealed strengths I didn't know I had, leading me to a more fulfilling path.",
    author: "Olivia Thompson",
    role: "UX Designer",
    company: "Creative Solutions"
  },
  {
    quote: "The university recommendations were perfectly tailored to my interests and academic background. I'm now enrolled in my dream program.",
    author: "Daniel Park",
    role: "MBA Student",
    company: "Harvard Business School"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gradient-career text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Success Stories</h2>
          <p className="max-w-[700px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Hear from users who transformed their careers with our platform.
          </p>
        </div>
        
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-4">
                      <div className="flex text-yellow-300 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ))}
                      </div>
                      <blockquote className="text-sm">"{testimonial.quote}"</blockquote>
                      <div className="mt-auto">
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="text-xs text-white/70">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-4">
            <CarouselPrevious className="relative border-white/40 hover:bg-white/10" />
            <CarouselNext className="relative border-white/40 hover:bg-white/10" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
