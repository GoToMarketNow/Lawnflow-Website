import {
  Calendar,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  DollarSign,
  Users,
  Clock,
  Target,
} from "lucide-react";

export function CommandCenterScreen() {
  return (
    <section className="w-full py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--primary-green)]/10 border border-[var(--primary-green)]/20 rounded-full mb-3">
            <span
              className="text-[var(--primary-green)]"
              style={{
                fontSize: "12px",
                fontWeight: "var(--font-weight-medium)",
              }}
            >
              For Owners
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
            Command Center
          </h2>
          <p
            style={{
              fontSize: "var(--text-body)",
              lineHeight: "var(--text-body-line)",
              color: "var(--text-muted)",
            }}
          >
            Your business at a glance—real-time insights and AI-powered
            recommendations
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
                app.lawnflow.ai/dashboard
              </span>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="bg-white rounded-b-xl overflow-hidden">
            {/* Top Bar */}
            <div className="bg-[var(--cream)] px-6 py-4 border-b border-[var(--border-color)] flex items-center justify-between">
              <div>
                <h3
                  style={{
                    fontSize: "var(--text-body)",
                    fontWeight: "var(--font-weight-medium)",
                    color: "var(--text-primary)",
                  }}
                >
                  Dashboard
                </h3>
                <p style={{ fontSize: "12px", color: "var(--text-muted)" }}>
                  Wednesday, January 15, 2026
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span
                  className="px-3 py-1.5 bg-green-100 text-green-700 rounded-lg text-sm"
                  style={{ fontWeight: "var(--font-weight-medium)" }}
                >
                  All Systems Running
                </span>
              </div>
            </div>

            {/* Dashboard Grid */}
            <div className="p-6 bg-gradient-to-b from-[var(--cream)]/30 to-white">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {/* Today's Plan */}
                <div className="bg-white rounded-xl border border-[var(--border-color)] p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-blue-600" />
                    </div>
                    <span
                      className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded"
                      style={{ fontWeight: "var(--font-weight-medium)" }}
                    >
                      Today
                    </span>
                  </div>
                  <h4
                    className="mb-1"
                    style={{
                      fontSize: "var(--text-small)",
                      color: "var(--text-muted)",
                    }}
                  >
                    Jobs Scheduled
                  </h4>
                  <p
                    className="mb-2"
                    style={{
                      fontSize: "28px",
                      fontWeight: "var(--font-weight-medium)",
                      color: "var(--text-primary)",
                    }}
                  >
                    24
                  </p>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-green-600" />
                    <span style={{ fontSize: "11px", color: "var(--text-muted)" }}>
                      18 completed, 6 in progress
                    </span>
                  </div>
                </div>

                {/* Margin Snapshot */}
                <div className="bg-white rounded-xl border border-[var(--border-color)] p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-green-600" />
                    </div>
                    <span
                      className="text-xs px-2 py-1 bg-green-50 text-green-700 rounded"
                      style={{ fontWeight: "var(--font-weight-medium)" }}
                    >
                      ↑ 8%
                    </span>
                  </div>
                  <h4
                    className="mb-1"
                    style={{
                      fontSize: "var(--text-small)",
                      color: "var(--text-muted)",
                    }}
                  >
                    Avg Margin (MTD)
                  </h4>
                  <p
                    className="mb-2"
                    style={{
                      fontSize: "28px",
                      fontWeight: "var(--font-weight-medium)",
                      color: "var(--text-primary)",
                    }}
                  >
                    42%
                  </p>
                  <span style={{ fontSize: "11px", color: "var(--text-muted)" }}>
                    Target: 38% (beating target)
                  </span>
                </div>

                {/* Collections */}
                <div className="bg-white rounded-xl border border-[var(--border-color)] p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-purple-600" />
                    </div>
                    <span
                      className="text-xs px-2 py-1 bg-purple-50 text-purple-700 rounded"
                      style={{ fontWeight: "var(--font-weight-medium)" }}
                    >
                      This Week
                    </span>
                  </div>
                  <h4
                    className="mb-1"
                    style={{
                      fontSize: "var(--text-small)",
                      color: "var(--text-muted)",
                    }}
                  >
                    Collections
                  </h4>
                  <p
                    className="mb-2"
                    style={{
                      fontSize: "28px",
                      fontWeight: "var(--font-weight-medium)",
                      color: "var(--text-primary)",
                    }}
                  >
                    $8.2k
                  </p>
                  <span style={{ fontSize: "11px", color: "var(--text-muted)" }}>
                    $2.4k outstanding (auto-reminders sent)
                  </span>
                </div>

                {/* Alerts */}
                <div className="bg-white rounded-xl border border-amber-300 p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                      <AlertTriangle className="w-5 h-5 text-amber-600" />
                    </div>
                    <span
                      className="text-xs px-2 py-1 bg-amber-100 text-amber-700 rounded"
                      style={{ fontWeight: "var(--font-weight-medium)" }}
                    >
                      Action Needed
                    </span>
                  </div>
                  <h4
                    className="mb-1"
                    style={{
                      fontSize: "var(--text-small)",
                      color: "var(--text-muted)",
                    }}
                  >
                    Alerts
                  </h4>
                  <p
                    className="mb-2"
                    style={{
                      fontSize: "28px",
                      fontWeight: "var(--font-weight-medium)",
                      color: "var(--text-primary)",
                    }}
                  >
                    3
                  </p>
                  <span style={{ fontSize: "11px", color: "var(--text-muted)" }}>
                    2 approvals, 1 customer issue
                  </span>
                </div>
              </div>

              {/* Next Best Actions */}
              <div className="bg-white rounded-xl border border-[var(--border-color)] p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Target className="w-5 h-5 text-[var(--primary-green)]" />
                  <h3
                    style={{
                      fontSize: "var(--text-body)",
                      fontWeight: "var(--font-weight-medium)",
                      color: "var(--text-primary)",
                    }}
                  >
                    Next Best Actions
                  </h3>
                  <span
                    className="ml-auto text-xs px-2 py-1 bg-[var(--primary-green)]/10 text-[var(--primary-green)] rounded"
                    style={{ fontWeight: "var(--font-weight-medium)" }}
                  >
                    AI Recommended
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p
                        className="mb-1"
                        style={{
                          fontSize: "var(--text-small)",
                          fontWeight: "var(--font-weight-medium)",
                          color: "var(--text-primary)",
                        }}
                      >
                        Review 2 high-value quotes
                      </p>
                      <p
                        style={{
                          fontSize: "12px",
                          color: "var(--text-muted)",
                        }}
                      >
                        $2,400 seasonal contract + $1,800 aeration project
                      </p>
                    </div>
                    <button className="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-xs font-medium hover:bg-blue-700 transition-colors flex-shrink-0">
                      Review
                    </button>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                    <div className="w-8 h-8 rounded-lg bg-amber-600 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p
                        className="mb-1"
                        style={{
                          fontSize: "var(--text-small)",
                          fontWeight: "var(--font-weight-medium)",
                          color: "var(--text-primary)",
                        }}
                      >
                        Address customer complaint
                      </p>
                      <p
                        style={{
                          fontSize: "12px",
                          color: "var(--text-muted)",
                        }}
                      >
                        J. Martinez • "Crew missed edge trimming on last visit"
                      </p>
                    </div>
                    <button className="px-3 py-1.5 bg-amber-600 text-white rounded-lg text-xs font-medium hover:bg-amber-700 transition-colors flex-shrink-0">
                      Respond
                    </button>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div className="w-8 h-8 rounded-lg bg-green-600 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p
                        className="mb-1"
                        style={{
                          fontSize: "var(--text-small)",
                          fontWeight: "var(--font-weight-medium)",
                          color: "var(--text-primary)",
                        }}
                      >
                        8 auto-actions completed today
                      </p>
                      <p
                        style={{
                          fontSize: "12px",
                          color: "var(--text-muted)",
                        }}
                      >
                        3 quotes sent, 2 schedules optimized, 3 invoices issued
                      </p>
                    </div>
                    <span className="px-3 py-1.5 bg-white border border-green-200 rounded-lg text-xs text-green-700 font-medium flex-shrink-0">
                      View Log
                    </span>
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
