import { IPhoneShell } from "@/components/ui/iphone-shell";
import { MobileAppPreview } from "@/components/ui/mobile-app-preview";
import {
  MapPin,
  CheckCircle,
  Camera,
  AlertCircle,
  Navigation,
  Clock,
  Plus,
} from "lucide-react";

export function CrewMobileScreenUpdated() {
  return (
    <section className="w-full py-12 md:py-16 bg-[var(--cream)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-100 border border-indigo-200 rounded-full mb-4">
            <span
              className="text-indigo-700"
              style={{
                fontSize: "12px",
                fontWeight: "var(--font-weight-medium)",
              }}
            >
              Crew Ops Agent
            </span>
          </div>
          <h2
            className="mb-4"
            style={{
              fontSize: "var(--text-h2)",
              lineHeight: "var(--text-h2-line)",
              fontWeight: "var(--font-weight-medium)",
              color: "var(--text-primary)",
            }}
          >
            Crew Day Plan
          </h2>
          <p
            style={{
              fontSize: "var(--text-body)",
              lineHeight: "var(--text-body-line)",
              color: "var(--text-muted)",
            }}
          >
            Field-optimized interface for crew execution and real-time updates.
            GPS-optimized routes, instant job details, and proof-of-work photo
            uploads—all in one seamless experience.
          </p>
        </div>

        {/* Mobile Device Mockups - Using New Components */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Screen 1: Route View - Use Component */}
          <div className="mx-auto">
            <MobileAppPreview variant="crew" />
            <p
              className="text-center mt-4"
              style={{
                fontSize: "var(--text-small)",
                color: "var(--text-muted)",
              }}
            >
              Route & Order View
            </p>
          </div>

          {/* Screen 2: Job Detail with Checklist */}
          <div className="mx-auto">
            <IPhoneShell className="w-[320px]">
              <div className="bg-[var(--cream)] min-h-[600px]">
                {/* Header */}
                <div className="bg-blue-600 text-white px-4 py-4">
                  <div className="flex items-center gap-2 mb-2">
                    <button className="text-white">← Back</button>
                  </div>
                  <h3
                    className="mb-1"
                    style={{
                      fontSize: "var(--text-body)",
                      fontWeight: "var(--font-weight-medium)",
                    }}
                  >
                    789 Elm Drive
                  </h3>
                  <div className="flex items-center gap-2 text-xs opacity-90">
                    <MapPin className="w-3 h-3" />
                    <span>2.3 mi away • 5 min drive</span>
                  </div>
                </div>

                <div className="p-4 space-y-4">
                  {/* Customer Info */}
                  <div className="bg-white rounded-xl border border-[var(--border-color)] p-4">
                    <h4
                      className="mb-2"
                      style={{
                        fontSize: "var(--text-small)",
                        fontWeight: "var(--font-weight-medium)",
                        color: "var(--text-primary)",
                      }}
                    >
                      Service Details
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-[var(--text-muted)]">
                          Customer
                        </span>
                        <span className="text-[var(--text-primary)] font-medium">
                          R. Thompson
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[var(--text-muted)]">
                          Service
                        </span>
                        <span className="text-[var(--text-primary)] font-medium">
                          Mow + Edge + Blow
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[var(--text-muted)]">
                          Est. Time
                        </span>
                        <span className="text-[var(--text-primary)] font-medium">
                          45 min
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Checklist */}
                  <div className="bg-white rounded-xl border border-[var(--border-color)] p-4">
                    <h4
                      className="mb-3"
                      style={{
                        fontSize: "var(--text-small)",
                        fontWeight: "var(--font-weight-medium)",
                        color: "var(--text-primary)",
                      }}
                    >
                      Job Checklist
                    </h4>
                    <div className="space-y-2">
                      {[
                        { task: "Mow entire lawn", done: false },
                        { task: "Edge all borders", done: false },
                        { task: "Trim around obstacles", done: false },
                        { task: "Blow walkways & driveway", done: false },
                        { task: "Check for debris", done: false },
                      ].map((item, idx) => (
                        <label
                          key={idx}
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 cursor-pointer"
                        >
                          <div
                            className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                              item.done
                                ? "bg-green-600 border-green-600"
                                : "border-slate-300"
                            }`}
                          >
                            {item.done && (
                              <CheckCircle className="w-3 h-3 text-white" />
                            )}
                          </div>
                          <span
                            style={{
                              fontSize: "var(--text-small)",
                              color: "var(--text-primary)",
                            }}
                          >
                            {item.task}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Notes */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <h4
                      className="mb-2"
                      style={{
                        fontSize: "var(--text-small)",
                        fontWeight: "var(--font-weight-medium)",
                        color: "var(--text-primary)",
                      }}
                    >
                      Special Instructions
                    </h4>
                    <p
                      style={{
                        fontSize: "12px",
                        color: "var(--text-muted)",
                      }}
                    >
                      Watch for sprinkler heads in back left corner. Dog in
                      yard—please close gate.
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2 pb-20">
                    <button className="w-full px-4 py-3 bg-blue-600 text-white rounded-xl font-medium flex items-center justify-center gap-2">
                      <Camera className="w-5 h-5" />
                      Upload Photos
                    </button>
                    <button className="w-full px-4 py-3 bg-green-600 text-white rounded-xl font-medium flex items-center justify-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      Complete Job
                    </button>
                  </div>
                </div>
              </div>
            </IPhoneShell>
            <p
              className="text-center mt-4"
              style={{
                fontSize: "var(--text-small)",
                color: "var(--text-muted)",
              }}
            >
              Job Checklist View
            </p>
          </div>

          {/* Screen 3: Photo Upload */}
          <div className="mx-auto">
            <IPhoneShell className="w-[320px]">
              <div className="bg-[var(--cream)] min-h-[600px]">
                {/* Header */}
                <div className="bg-green-600 text-white px-4 py-4">
                  <div className="flex items-center gap-2 mb-2">
                    <button className="text-white">← Back</button>
                  </div>
                  <h3
                    className="mb-1"
                    style={{
                      fontSize: "var(--text-body)",
                      fontWeight: "var(--font-weight-medium)",
                    }}
                  >
                    Proof of Work
                  </h3>
                  <p className="text-xs opacity-90">789 Elm Drive</p>
                </div>

                <div className="p-4 space-y-4">
                  {/* Photo Thumbnails */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="aspect-square bg-slate-200 rounded-xl flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 opacity-20" />
                      <div className="text-center">
                        <Camera className="w-8 h-8 text-slate-400 mx-auto mb-1" />
                        <p className="text-xs text-slate-600">Before</p>
                      </div>
                      <div className="absolute top-2 right-2 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    <div className="aspect-square bg-slate-200 rounded-xl flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 opacity-20" />
                      <div className="text-center">
                        <Camera className="w-8 h-8 text-slate-400 mx-auto mb-1" />
                        <p className="text-xs text-slate-600">After</p>
                      </div>
                      <div className="absolute top-2 right-2 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Info Card */}
                  <div className="bg-white rounded-xl border border-[var(--border-color)] p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <h4
                          className="mb-1"
                          style={{
                            fontSize: "var(--text-small)",
                            fontWeight: "var(--font-weight-medium)",
                            color: "var(--text-primary)",
                          }}
                        >
                          Photos uploaded
                        </h4>
                        <p
                          style={{
                            fontSize: "12px",
                            color: "var(--text-muted)",
                          }}
                        >
                          Before & after photos will be sent to customer and
                          office automatically.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Upload More */}
                  <button className="w-full px-4 py-3 bg-white border-2 border-dashed border-slate-300 rounded-xl text-slate-600 font-medium flex items-center justify-center gap-2 hover:border-green-500 hover:text-green-600 transition-colors">
                    <Plus className="w-5 h-5" />
                    Add More Photos
                  </button>

                  {/* Complete */}
                  <div className="pt-4">
                    <button className="w-full px-4 py-4 bg-green-600 text-white rounded-xl font-medium text-lg">
                      Mark Job Complete
                    </button>
                    <p
                      className="text-center mt-2"
                      style={{
                        fontSize: "11px",
                        color: "var(--text-muted)",
                      }}
                    >
                      This will notify the customer and trigger invoicing
                    </p>
                  </div>
                </div>
              </div>
            </IPhoneShell>
            <p
              className="text-center mt-4"
              style={{
                fontSize: "var(--text-small)",
                color: "var(--text-muted)",
              }}
            >
              Proof of Work Upload
            </p>
          </div>
        </div>

        {/* Key Features Grid */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl border border-[var(--border-color)] p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mx-auto mb-4">
                <Navigation className="w-6 h-6 text-indigo-600" />
              </div>
              <h4
                className="mb-2"
                style={{
                  fontSize: "var(--text-body)",
                  fontWeight: "var(--font-weight-medium)",
                  color: "var(--text-primary)",
                }}
              >
                GPS-Optimized Routes
              </h4>
              <p
                style={{
                  fontSize: "var(--text-small)",
                  color: "var(--text-muted)",
                }}
              >
                AI calculates the fastest route, saving fuel and time
              </p>
            </div>

            <div className="bg-white rounded-xl border border-[var(--border-color)] p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h4
                className="mb-2"
                style={{
                  fontSize: "var(--text-body)",
                  fontWeight: "var(--font-weight-medium)",
                  color: "var(--text-primary)",
                }}
              >
                Smart Checklists
              </h4>
              <p
                style={{
                  fontSize: "var(--text-small)",
                  color: "var(--text-muted)",
                }}
              >
                Never miss a step with AI-generated job checklists
              </p>
            </div>

            <div className="bg-white rounded-xl border border-[var(--border-color)] p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <Camera className="w-6 h-6 text-blue-600" />
              </div>
              <h4
                className="mb-2"
                style={{
                  fontSize: "var(--text-body)",
                  fontWeight: "var(--font-weight-medium)",
                  color: "var(--text-primary)",
                }}
              >
                Instant Proof of Work
              </h4>
              <p
                style={{
                  fontSize: "var(--text-small)",
                  color: "var(--text-muted)",
                }}
              >
                One-tap photo upload syncs with customers instantly
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}