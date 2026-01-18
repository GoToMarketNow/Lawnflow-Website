import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MobileAppPreview } from "@/components/ui/mobile-app-preview";
import { ArrowRight, Play, CheckCircle } from "lucide-react";

export function NewHeroSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setShowVideo(true);
      // Here you would typically send the email to your backend/waitlist service
      console.log("Waitlist signup:", email);
    }
  };

  return (
    <section className="w-full min-h-[90vh] flex items-center bg-gradient-to-b from-[var(--cream)] via-white to-[var(--cream)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-[var(--primary-green)]/10 px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 rounded-full bg-[var(--primary-green)] animate-pulse" />
              <span
                className="text-sm font-medium"
                style={{ color: "var(--primary-green)" }}
              >
                Now Available
              </span>
            </div>

            {/* Main Headline */}
            <h1
              className="mb-4"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4rem)",
                lineHeight: "1.1",
                fontWeight: "var(--font-weight-medium)",
                color: "var(--text-primary)",
              }}
            >
              AI for Lawn and Landscaping,{" "}
              <span className="text-[var(--primary-green)]">finally</span>
            </h1>

            {/* Value Prop */}
            <p
              className="mb-3"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                lineHeight: "1.3",
                fontWeight: "var(--font-weight-medium)",
                color: "var(--accent-blue)",
              }}
            >
              Get your nights back.
            </p>

            {/* Supporting Copy */}
            <p
              className="mb-8 max-w-xl mx-auto lg:mx-0"
              style={{
                fontSize: "var(--text-body)",
                lineHeight: "var(--text-body-line)",
                color: "var(--text-muted)",
              }}
            >
              AI agents handle quoting, scheduling, dispatching, invoicing, and
              collections—24/7. You focus on growing your business, not managing it.
            </p>

            {/* Waitlist Form */}
            {!submitted ? (
              <form onSubmit={handleSubmit} className="mb-8">
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 h-14 text-base"
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-[var(--primary-green)] hover:bg-[var(--dark-green)] text-white h-14 px-8 text-base font-medium whitespace-nowrap"
                  >
                    Join Waitlist
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
                <p className="text-xs text-[var(--text-muted)] mt-3 max-w-md mx-auto lg:mx-0">
                  Join 500+ lawn care owners already on the waitlist.
                </p>
              </form>
            ) : (
              <div className="mb-8 max-w-md mx-auto lg:mx-0">
                <div className="bg-[var(--primary-green)]/10 border border-[var(--primary-green)] rounded-lg p-4 flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[var(--primary-green)] flex-shrink-0 mt-0.5" />
                  <div>
                    <p
                      className="font-medium mb-1"
                      style={{ color: "var(--primary-green)" }}
                    >
                      You're on the list!
                    </p>
                    <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                      We'll send you early access details to{" "}
                      <strong>{email}</strong>
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-[var(--text-muted)]">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[var(--primary-green)]" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[var(--primary-green)]" />
                <span>Setup in minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[var(--primary-green)]" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>

          {/* Right Column - Video */}
          <div className="relative">
            {!showVideo ? (
              <div className="relative">
                {/* iPhone Mockup with Real App Preview */}
                <div className="flex justify-center">
                  <MobileAppPreview variant="owner" className="w-full max-w-[360px]" />
                </div>
                
                {/* Play Button Overlay */}
                <div
                  className="absolute inset-0 flex items-center justify-center cursor-pointer group"
                  onClick={() => setShowVideo(true)}
                >
                  <div className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center group-hover:bg-white transition-all group-hover:scale-110 shadow-2xl">
                    <Play className="w-10 h-10 ml-1" style={{ color: "var(--primary-green)" }} fill="var(--primary-green)" />
                  </div>
                </div>
                
                {/* Demo Badge */}
                <div className="absolute top-8 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium shadow-lg border border-slate-200" style={{ color: "var(--primary-green)" }}>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--primary-green)" }} />
                    Live Demo
                  </span>
                </div>
              </div>
            ) : (
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                {/* Video Player Placeholder */}
                <div className="aspect-video bg-black flex items-center justify-center">
                  <div className="text-center text-white px-4">
                    <p className="text-lg mb-2">Video Player</p>
                    <p className="text-sm text-gray-400">
                      Replace this with your actual video embed
                    </p>
                    <p className="text-xs text-gray-500 mt-4">
                      (e.g., YouTube, Vimeo, or HTML5 video)
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-[var(--border-color)] hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--primary-green)] to-[var(--dark-green)] flex items-center justify-center">
                  <span className="text-white font-bold text-lg">24/7</span>
                </div>
                <div>
                  <div className="text-xs text-[var(--text-muted)]">
                    AI Agents
                  </div>
                  <div className="text-sm font-semibold text-[var(--text-primary)]">
                    Always Working
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-[var(--border-color)] hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--accent-blue)] to-blue-600 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">3x</span>
                </div>
                <div>
                  <div className="text-xs text-[var(--text-muted)]">
                    Faster
                  </div>
                  <div className="text-sm font-semibold text-[var(--text-primary)]">
                    Collections
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}