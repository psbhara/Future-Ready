
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="text-xl font-bold text-career-purple">
              Future-Ready <span className="text-career-blue">Pathways</span>
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              Guiding your career and educational journey with AI-powered insights.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-3">Platform</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/how-it-works" className="text-sm text-muted-foreground hover:text-career-purple">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/jobs" className="text-sm text-muted-foreground hover:text-career-purple">
                  Job Recommendations
                </Link>
              </li>
              <li>
                <Link to="/universities" className="text-sm text-muted-foreground hover:text-career-purple">
                  University Programs
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm text-muted-foreground hover:text-career-purple">
                  Career Paths
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-3">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog" className="text-sm text-muted-foreground hover:text-career-purple">
                  Career Blog
                </Link>
              </li>
              <li>
                <Link to="/tools" className="text-sm text-muted-foreground hover:text-career-purple">
                  Career Tools
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-sm text-muted-foreground hover:text-career-purple">
                  Events & Webinars
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-muted-foreground hover:text-career-purple">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-3">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-career-purple">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-career-purple">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-career-purple">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-muted-foreground hover:text-career-purple">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Future-Ready Pathways. All rights reserved.
          </p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Link to="#" className="text-muted-foreground hover:text-career-purple">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              <span className="sr-only">Twitter</span>
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-career-purple">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-career-purple">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
