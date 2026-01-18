import { Sparkles, TrendingUp, Plus, Check } from "lucide-react";

export function QuoteCopilotScreen() {
  return (
    <section className="w-full py-12 md:py-16 bg-[var(--cream)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-100 border border-blue-200 rounded-full mb-3">
            <span
              className="text-blue-700"
              style={{
                fontSize: "12px",
                fontWeight: "var(--font-weight-medium)",
              }}
            >
              Quote Agent
            </span>
          </div>
          <h2
            className="mb-2"
            style={{
              fontSize: "var(--text-h2)",
              lineHeight: "var(--text-h2-line)",
              fontWeight: "var(--font-weight-medium)",
              color: "var(--text-primary)",
            }}
          >
            Quote Copilot
          </h2>
          <p
            style={{
              fontSize: "var(--text-body)",
              lineHeight: "var(--text-body-line)",
              color: "var(--text-muted)",
            }}
          >
            AI analyzes property data and generates margin-optimized estimates
          </p>
        </div>

        {/* Desktop Browser Frame */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-2 shadow-2xl">
          {/* Browser Chrome */}
          <div className="bg-slate-700 rounded-t-xl px-4 py-2 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex-1 bg-slate-600 rounded px-3 py-1 ml-4">
              <span className="text-xs text-slate-300">
                app.lawnflow.ai/quotes/new
              </span>
            </div>
          </div>

          {/* Quote Copilot Content */}
          <div className="bg-white rounded-b-xl overflow-hidden">
            {/* Top Bar */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Sparkles className="w-5 h-5" />
                    <h3
                      style={{
                        fontSize: "var(--text-body)",
                        fontWeight: "var(--font-weight-medium)",
                      }}
                    >
                      Draft Estimate Ready
                    </h3>
                  </div>
                  <p style={{ fontSize: "12px", opacity: 0.9 }}>
                    Based on property analysis and your pricing rules
                  </p>
                </div>
                <div className="text-right">
                  <p style={{ fontSize: "12px", opacity: 0.8 }}>
                    Confidence Score
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 bg-white/30 rounded-full overflow-hidden">
                      <div className="h-full w-[92%] bg-green-400 rounded-full" />
                    </div>
                    <span
                      style={{
                        fontSize: "var(--text-small)",
                        fontWeight: "var(--font-weight-medium)",
                      }}
                    >
                      92%
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-6 bg-gradient-to-b from-blue-50/50 to-white">
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Left: Customer Info */}
                <div className="lg:col-span-1">
                  <div className="bg-white rounded-xl border border-[var(--border-color)] p-4 mb-4">
                    <h4
                      className="mb-3"
                      style={{
                        fontSize: "var(--text-small)",
                        fontWeight: "var(--font-weight-medium)",
                        color: "var(--text-primary)",
                      }}
                    >
                      Customer Details
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <p className="text-[var(--text-muted)]">Name</p>
                        <p
                          style={{
                            color: "var(--text-primary)",
                            fontWeight: "var(--font-weight-medium)",
                          }}
                        >
                          Sarah Johnson
                        </p>
                      </div>
                      <div>
                        <p className="text-[var(--text-muted)]">Address</p>
                        <p
                          style={{
                            color: "var(--text-primary)",
                            fontWeight: "var(--font-weight-medium)",
                          }}
                        >
                          456 Maple Avenue
                        </p>
                      </div>
                      <div>
                        <p className="text-[var(--text-muted)]">Contact</p>
                        <p
                          style={{
                            color: "var(--text-primary)",
                            fontWeight: "var(--font-weight-medium)",
                          }}
                        >
                          (555) 234-5678
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl border border-[var(--border-color)] p-4">
                    <h4
                      className="mb-3"
                      style={{
                        fontSize: "var(--text-small)",
                        fontWeight: "var(--font-weight-medium)",
                        color: "var(--text-primary)",
                      }}
                    >
                      Property Analysis
                    </h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-[var(--text-muted)]">
                          Lot Size
                        </span>
                        <span
                          style={{
                            color: "var(--text-primary)",
                            fontWeight: "var(--font-weight-medium)",
                          }}
                        >
                          8,200 sq ft
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-[var(--text-muted)]">
                          Mowable Area
                        </span>
                        <span
                          style={{
                            color: "var(--text-primary)",
                            fontWeight: "var(--font-weight-medium)",
                          }}
                        >
                          6,500 sq ft
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-[var(--text-muted)]">
                          Obstacles
                        </span>
                        <span
                          style={{
                            color: "var(--text-primary)",
                            fontWeight: "var(--font-weight-medium)",
                          }}
                        >
                          Moderate
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-[var(--text-muted)]">
                          Est. Time
                        </span>
                        <span
                          style={{
                            color: "var(--text-primary)",
                            fontWeight: "var(--font-weight-medium)",
                          }}
                        >
                          35 min
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Estimate Details */}
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-xl border border-[var(--border-color)] p-6 mb-4">
                    <h4
                      className="mb-4"
                      style={{
                        fontSize: "var(--text-body)",
                        fontWeight: "var(--font-weight-medium)",
                        color: "var(--text-primary)",
                      }}
                    >
                      Recommended Package
                    </h4>

                    {/* Core Service */}
                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg mb-4">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h5
                            className="mb-1"
                            style={{
                              fontSize: "var(--text-small)",
                              fontWeight: "var(--font-weight-medium)",
                              color: "var(--text-primary)",
                            }}
                          >
                            Weekly Mow + Edge + Blow
                          </h5>
                          <p
                            style={{
                              fontSize: "12px",
                              color: "var(--text-muted)",
                            }}
                          >
                            Full-service lawn maintenance, 28 visits/season
                          </p>
                        </div>
                        <div className="text-right">
                          <p
                            style={{
                              fontSize: "20px",
                              fontWeight: "var(--font-weight-medium)",
                              color: "var(--text-primary)",
                            }}
                          >
                            $45
                          </p>
                          <p
                            style={{
                              fontSize: "11px",
                              color: "var(--text-muted)",
                            }}
                          >
                            per visit
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <TrendingUp className="w-4 h-4 text-green-600" />
                        <span className="text-green-700">
                          <span style={{ fontWeight: "var(--font-weight-medium)" }}>
                            44% margin
                          </span>{" "}
                          • Within target range
                        </span>
                      </div>
                    </div>

                    {/* Optional Add-ons */}
                    <div className="mb-4">
                      <h5
                        className="mb-3"
                        style={{
                          fontSize: "var(--text-small)",
                          fontWeight: "var(--font-weight-medium)",
                          color: "var(--text-primary)",
                        }}
                      >
                        Suggested Add-ons
                      </h5>
                      <div className="space-y-2">
                        <label className="flex items-center justify-between p-3 bg-green-50 border-2 border-green-500 rounded-lg cursor-pointer">
                          <div className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded bg-green-600 flex items-center justify-center">
                              <Check className="w-3 h-3 text-white" />
                            </div>
                            <div>
                              <p
                                style={{
                                  fontSize: "var(--text-small)",
                                  fontWeight: "var(--font-weight-medium)",
                                  color: "var(--text-primary)",
                                }}
                              >
                                Spring Cleanup
                              </p>
                              <p style={{ fontSize: "11px", color: "var(--text-muted)" }}>
                                Recommended for April
                              </p>
                            </div>
                          </div>
                          <span
                            style={{
                              fontSize: "var(--text-small)",
                              fontWeight: "var(--font-weight-medium)",
                              color: "var(--text-primary)",
                            }}
                          >
                            +$180
                          </span>
                        </label>

                        <label className="flex items-center justify-between p-3 bg-white border border-[var(--border-color)] rounded-lg cursor-pointer hover:bg-slate-50">
                          <div className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded border-2 border-slate-300" />
                            <div>
                              <p
                                style={{
                                  fontSize: "var(--text-small)",
                                  fontWeight: "var(--font-weight-medium)",
                                  color: "var(--text-primary)",
                                }}
                              >
                                Aeration + Overseeding
                              </p>
                              <p style={{ fontSize: "11px", color: "var(--text-muted)" }}>
                                High upsell probability (78%)
                              </p>
                            </div>
                          </div>
                          <span
                            style={{
                              fontSize: "var(--text-small)",
                              fontWeight: "var(--font-weight-medium)",
                              color: "var(--text-primary)",
                            }}
                          >
                            +$350
                          </span>
                        </label>
                      </div>
                    </div>

                    {/* Total */}
                    <div className="pt-4 border-t border-[var(--border-color)]">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p
                            style={{
                              fontSize: "var(--text-small)",
                              color: "var(--text-muted)",
                            }}
                          >
                            Season Total (with add-ons)
                          </p>
                          <p style={{ fontSize: "11px", color: "var(--text-muted)" }}>
                            28 visits + 1 cleanup
                          </p>
                        </div>
                        <p
                          style={{
                            fontSize: "32px",
                            fontWeight: "var(--font-weight-medium)",
                            color: "var(--text-primary)",
                          }}
                        >
                          $1,440
                        </p>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <button className="flex-1 px-4 py-3 bg-[var(--primary-green)] text-white rounded-lg font-medium hover:bg-[var(--dark-green)] transition-colors">
                          Approve & Send to Customer
                        </button>
                        <button className="px-4 py-3 border border-[var(--border-color)] rounded-lg font-medium hover:bg-slate-50 transition-colors">
                          Edit Pricing
                        </button>
                        <button className="px-4 py-3 border border-[var(--border-color)] rounded-lg font-medium hover:bg-slate-50 transition-colors">
                          Request More Info
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* AI Insight */}
                  <div className="flex items-start gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <Sparkles className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p
                        className="mb-1"
                        style={{
                          fontSize: "var(--text-small)",
                          fontWeight: "var(--font-weight-medium)",
                          color: "var(--text-primary)",
                        }}
                      >
                        AI Insight
                      </p>
                      <p
                        style={{
                          fontSize: "12px",
                          color: "var(--text-muted)",
                        }}
                      >
                        Similar properties in this zip code accepted quotes 23%
                        faster when spring cleanup was included. Neighborhood avg:
                        $48/visit.
                      </p>
                    </div>
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
