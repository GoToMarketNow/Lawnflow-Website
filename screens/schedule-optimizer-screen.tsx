import { Calendar, TrendingUp, MapPin, Users, GripVertical } from "lucide-react";

export function ScheduleOptimizerScreen() {
  return (
    <section className="w-full py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-100 border border-purple-200 rounded-full mb-3">
            <span
              className="text-purple-700"
              style={{
                fontSize: "12px",
                fontWeight: "var(--font-weight-medium)",
              }}
            >
              Schedule Agent
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
            Schedule Optimizer
          </h2>
          <p
            style={{
              fontSize: "var(--text-body)",
              lineHeight: "var(--text-body-line)",
              color: "var(--text-muted)",
            }}
          >
            AI-powered routing and capacity planning for maximum efficiency
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
                app.lawnflow.ai/schedule
              </span>
            </div>
          </div>

          {/* Schedule Content */}
          <div className="bg-white rounded-b-xl overflow-hidden">
            {/* Top Bar */}
            <div className="bg-[var(--cream)] px-6 py-4 border-b border-[var(--border-color)]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <h3
                    style={{
                      fontSize: "var(--text-body)",
                      fontWeight: "var(--font-weight-medium)",
                      color: "var(--text-primary)",
                    }}
                  >
                    Week of January 13 - 19
                  </h3>
                  <div className="flex gap-2">
                    <button className="px-3 py-1.5 bg-white border border-[var(--border-color)] rounded-lg text-sm hover:bg-slate-50">
                      ← Prev
                    </button>
                    <button className="px-3 py-1.5 bg-white border border-[var(--border-color)] rounded-lg text-sm hover:bg-slate-50">
                      Next →
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1.5 bg-green-100 text-green-700 rounded-lg text-xs font-medium">
                    ✓ Routes Optimized
                  </span>
                  <button className="px-4 py-1.5 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700">
                    Auto-Optimize
                  </button>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-b from-purple-50/30 to-white">
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Left: Weekly Overview */}
                <div className="lg:col-span-2">
                  {/* Capacity Bar */}
                  <div className="mb-4 p-4 bg-white rounded-xl border border-[var(--border-color)]">
                    <div className="flex items-center justify-between mb-2">
                      <span
                        style={{
                          fontSize: "var(--text-small)",
                          fontWeight: "var(--font-weight-medium)",
                          color: "var(--text-primary)",
                        }}
                      >
                        Weekly Capacity
                      </span>
                      <span
                        style={{
                          fontSize: "var(--text-small)",
                          color: "var(--text-muted)",
                        }}
                      >
                        87 of 96 slots filled
                      </span>
                    </div>
                    <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full w-[90%] bg-gradient-to-r from-purple-500 to-purple-600 rounded-full" />
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                      <span style={{ fontSize: "12px", color: "var(--text-muted)" }}>
                        9 slots available for add-ons or emergencies
                      </span>
                    </div>
                  </div>

                  {/* Day Cards */}
                  <div className="space-y-3">
                    {/* Thursday - Featured Day */}
                    <div className="bg-white rounded-xl border-2 border-purple-300 p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4
                            className="mb-1"
                            style={{
                              fontSize: "var(--text-body)",
                              fontWeight: "var(--font-weight-medium)",
                              color: "var(--text-primary)",
                            }}
                          >
                            Thursday, Jan 16
                          </h4>
                          <p style={{ fontSize: "12px", color: "var(--text-muted)" }}>
                            2 crews • 18 jobs • 8.2 hrs avg
                          </p>
                        </div>
                        <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-lg text-xs font-medium">
                          Active Day
                        </span>
                      </div>

                      {/* Crew Routes */}
                      <div className="space-y-2">
                        <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <Users className="w-4 h-4 text-blue-600" />
                              <span
                                style={{
                                  fontSize: "var(--text-small)",
                                  fontWeight: "var(--font-weight-medium)",
                                  color: "var(--text-primary)",
                                }}
                              >
                                Crew A (Mike's Team)
                              </span>
                            </div>
                            <span style={{ fontSize: "12px", color: "var(--text-muted)" }}>
                              9 jobs • 42 miles
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <MapPin className="w-3 h-3 text-green-600" />
                            <span className="text-green-700 text-xs">
                              Route optimized • 34% less drive time
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <Users className="w-4 h-4 text-green-600" />
                              <span
                                style={{
                                  fontSize: "var(--text-small)",
                                  fontWeight: "var(--font-weight-medium)",
                                  color: "var(--text-primary)",
                                }}
                              >
                                Crew B (Sarah's Team)
                              </span>
                            </div>
                            <span style={{ fontSize: "12px", color: "var(--text-muted)" }}>
                              9 jobs • 38 miles
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <MapPin className="w-3 h-3 text-green-600" />
                            <span className="text-green-700 text-xs">
                              Route optimized • 28% less drive time
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Other Days (Compact) */}
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="bg-white rounded-lg border border-[var(--border-color)] p-3">
                        <h5
                          className="mb-1"
                          style={{
                            fontSize: "var(--text-small)",
                            fontWeight: "var(--font-weight-medium)",
                            color: "var(--text-primary)",
                          }}
                        >
                          Monday, Jan 13
                        </h5>
                        <p style={{ fontSize: "11px", color: "var(--text-muted)" }}>
                          15 jobs • 2 crews
                        </p>
                        <div className="mt-2 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full w-[85%] bg-purple-400 rounded-full" />
                        </div>
                      </div>

                      <div className="bg-white rounded-lg border border-[var(--border-color)] p-3">
                        <h5
                          className="mb-1"
                          style={{
                            fontSize: "var(--text-small)",
                            fontWeight: "var(--font-weight-medium)",
                            color: "var(--text-primary)",
                          }}
                        >
                          Tuesday, Jan 14
                        </h5>
                        <p style={{ fontSize: "11px", color: "var(--text-muted)" }}>
                          14 jobs • 2 crews
                        </p>
                        <div className="mt-2 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full w-[78%] bg-purple-400 rounded-full" />
                        </div>
                      </div>

                      <div className="bg-white rounded-lg border border-[var(--border-color)] p-3">
                        <h5
                          className="mb-1"
                          style={{
                            fontSize: "var(--text-small)",
                            fontWeight: "var(--font-weight-medium)",
                            color: "var(--text-primary)",
                          }}
                        >
                          Wednesday, Jan 15
                        </h5>
                        <p style={{ fontSize: "11px", color: "var(--text-muted)" }}>
                          22 jobs • 3 crews
                        </p>
                        <div className="mt-2 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full w-[95%] bg-purple-400 rounded-full" />
                        </div>
                      </div>

                      <div className="bg-white rounded-lg border border-[var(--border-color)] p-3">
                        <h5
                          className="mb-1"
                          style={{
                            fontSize: "var(--text-small)",
                            fontWeight: "var(--font-weight-medium)",
                            color: "var(--text-primary)",
                          }}
                        >
                          Friday, Jan 17
                        </h5>
                        <p style={{ fontSize: "11px", color: "var(--text-muted)" }}>
                          18 jobs • 2 crews
                        </p>
                        <div className="mt-2 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full w-[88%] bg-purple-400 rounded-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Daily Route Plan */}
                <div>
                  <div className="bg-white rounded-xl border border-[var(--border-color)] p-4 sticky top-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4
                        style={{
                          fontSize: "var(--text-small)",
                          fontWeight: "var(--font-weight-medium)",
                          color: "var(--text-primary)",
                        }}
                      >
                        Crew A Route Order
                      </h4>
                      <span
                        className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded"
                        style={{ fontWeight: "var(--font-weight-medium)" }}
                      >
                        Thursday
                      </span>
                    </div>

                    <div className="space-y-2 mb-4">
                      {[
                        { time: "8:00 AM", address: "123 Oak St", status: "ready" },
                        { time: "8:45 AM", address: "125 Oak St", status: "ready" },
                        { time: "9:30 AM", address: "456 Maple Ave", status: "ready" },
                        {
                          time: "10:20 AM",
                          address: "789 Elm Dr",
                          status: "ready",
                        },
                        {
                          time: "11:00 AM",
                          address: "234 Pine Ln",
                          status: "ready",
                        },
                      ].map((job, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 p-2 bg-slate-50 rounded-lg hover:bg-slate-100 cursor-move group"
                        >
                          <GripVertical className="w-4 h-4 text-slate-400 group-hover:text-slate-600" />
                          <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-medium flex-shrink-0">
                            {idx + 1}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p
                              className="truncate"
                              style={{
                                fontSize: "12px",
                                fontWeight: "var(--font-weight-medium)",
                                color: "var(--text-primary)",
                              }}
                            >
                              {job.address}
                            </p>
                            <p
                              style={{
                                fontSize: "11px",
                                color: "var(--text-muted)",
                              }}
                            >
                              {job.time}
                            </p>
                          </div>
                        </div>
                      ))}
                      <div className="text-center py-1">
                        <span
                          style={{ fontSize: "11px", color: "var(--text-muted)" }}
                        >
                          + 4 more jobs
                        </span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-[var(--border-color)]">
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-[var(--text-muted)]">
                          Total Drive Time
                        </span>
                        <span
                          style={{
                            color: "var(--text-primary)",
                            fontWeight: "var(--font-weight-medium)",
                          }}
                        >
                          1.8 hrs
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-[var(--text-muted)]">
                          Total Work Time
                        </span>
                        <span
                          style={{
                            color: "var(--text-primary)",
                            fontWeight: "var(--font-weight-medium)",
                          }}
                        >
                          6.4 hrs
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 p-3 bg-purple-50 border border-purple-200 rounded-lg">
                      <p style={{ fontSize: "11px", color: "var(--text-muted)" }}>
                        <span
                          className="text-purple-700"
                          style={{ fontWeight: "var(--font-weight-medium)" }}
                        >
                          Drag to reorder.
                        </span>{" "}
                        AI suggests optimal sequence, but you can adjust.
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
