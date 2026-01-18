import {
  FileText,
  Calendar,
  CreditCard,
  MessageCircle,
  CheckCircle,
  Bell,
} from "lucide-react";

export function CustomerMobileScreen() {
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
              Customer Experience
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
            Customer App (Mobile)
          </h2>
          <p
            style={{
              fontSize: "var(--text-body)",
              lineHeight: "var(--text-body-line)",
              color: "var(--text-muted)",
            }}
          >
            Simple self-service portal for requests, approvals, payments, and
            communication
          </p>
        </div>

        {/* Mobile Device Mockups */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Screen 1: Home Dashboard */}
          <div className="mx-auto">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-[3rem] p-4 shadow-2xl w-[320px]">
              <div className="bg-white rounded-[2.5rem] overflow-hidden">
                {/* Status Bar */}
                <div className="bg-slate-900 px-6 py-3 flex items-center justify-between">
                  <span className="text-white text-xs font-medium">9:41</span>
                  <div className="flex gap-1">
                    <div className="w-4 h-4 rounded-full bg-purple-500" />
                    <div className="w-4 h-4 rounded-full bg-purple-500" />
                  </div>
                </div>

                {/* App Content */}
                <div className="bg-[var(--cream)] min-h-[600px]">
                  {/* Header */}
                  <div className="bg-white px-4 py-4 border-b border-[var(--border-color)]">
                    <h3
                      className="mb-1"
                      style={{
                        fontSize: "var(--text-body)",
                        fontWeight: "var(--font-weight-medium)",
                        color: "var(--text-primary)",
                      }}
                    >
                      My Lawn Care
                    </h3>
                    <p style={{ fontSize: "12px", color: "var(--text-muted)" }}>
                      123 Oak Street
                    </p>
                  </div>

                  <div className="p-4 space-y-4">
                    {/* Next Service Card */}
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-4 text-white shadow-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span
                          style={{
                            fontSize: "var(--text-small)",
                            fontWeight: "var(--font-weight-medium)",
                          }}
                        >
                          Next Service
                        </span>
                        <span className="px-2 py-0.5 bg-white/20 rounded text-xs font-medium">
                          Confirmed
                        </span>
                      </div>
                      <p
                        className="mb-1"
                        style={{
                          fontSize: "var(--text-body)",
                          fontWeight: "var(--font-weight-medium)",
                        }}
                      >
                        Thursday, Jan 16 • 10:00 AM
                      </p>
                      <p style={{ fontSize: "12px", opacity: 0.9 }}>
                        Weekly Mow + Edge + Blow
                      </p>
                      <button className="mt-3 px-3 py-1.5 bg-white text-green-600 rounded-lg text-xs font-medium">
                        View Details
                      </button>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-2 gap-3">
                      <button className="bg-white rounded-xl p-4 border border-[var(--border-color)] shadow-sm text-left hover:shadow-md transition-shadow">
                        <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mb-2">
                          <FileText className="w-5 h-5 text-blue-600" />
                        </div>
                        <span
                          className="block"
                          style={{
                            fontSize: "var(--text-small)",
                            fontWeight: "var(--font-weight-medium)",
                            color: "var(--text-primary)",
                          }}
                        >
                          Request
                        </span>
                        <span
                          className="block"
                          style={{
                            fontSize: "var(--text-small)",
                            fontWeight: "var(--font-weight-medium)",
                            color: "var(--text-primary)",
                          }}
                        >
                          Service
                        </span>
                      </button>

                      <button className="bg-white rounded-xl p-4 border border-[var(--border-color)] shadow-sm text-left hover:shadow-md transition-shadow">
                        <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center mb-2">
                          <Calendar className="w-5 h-5 text-purple-600" />
                        </div>
                        <span
                          className="block"
                          style={{
                            fontSize: "var(--text-small)",
                            fontWeight: "var(--font-weight-medium)",
                            color: "var(--text-primary)",
                          }}
                        >
                          View
                        </span>
                        <span
                          className="block"
                          style={{
                            fontSize: "var(--text-small)",
                            fontWeight: "var(--font-weight-medium)",
                            color: "var(--text-primary)",
                          }}
                        >
                          Schedule
                        </span>
                      </button>

                      <button className="bg-white rounded-xl p-4 border border-[var(--border-color)] shadow-sm text-left hover:shadow-md transition-shadow">
                        <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center mb-2">
                          <CreditCard className="w-5 h-5 text-green-600" />
                        </div>
                        <span
                          className="block"
                          style={{
                            fontSize: "var(--text-small)",
                            fontWeight: "var(--font-weight-medium)",
                            color: "var(--text-primary)",
                          }}
                        >
                          Pay
                        </span>
                        <span
                          className="block"
                          style={{
                            fontSize: "var(--text-small)",
                            fontWeight: "var(--font-weight-medium)",
                            color: "var(--text-primary)",
                          }}
                        >
                          Invoice
                        </span>
                      </button>

                      <button className="bg-white rounded-xl p-4 border border-[var(--border-color)] shadow-sm text-left hover:shadow-md transition-shadow">
                        <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center mb-2">
                          <MessageCircle className="w-5 h-5 text-teal-600" />
                        </div>
                        <span
                          className="block"
                          style={{
                            fontSize: "var(--text-small)",
                            fontWeight: "var(--font-weight-medium)",
                            color: "var(--text-primary)",
                          }}
                        >
                          Send
                        </span>
                        <span
                          className="block"
                          style={{
                            fontSize: "var(--text-small)",
                            fontWeight: "var(--font-weight-medium)",
                            color: "var(--text-primary)",
                          }}
                        >
                          Message
                        </span>
                      </button>
                    </div>

                    {/* Recent Activity */}
                    <div className="bg-white rounded-xl border border-[var(--border-color)] p-4">
                      <h4
                        className="mb-3"
                        style={{
                          fontSize: "var(--text-small)",
                          fontWeight: "var(--font-weight-medium)",
                          color: "var(--text-primary)",
                        }}
                      >
                        Recent Updates
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-green-500 mt-1.5 flex-shrink-0" />
                          <div className="flex-1">
                            <p
                              style={{
                                fontSize: "12px",
                                color: "var(--text-primary)",
                              }}
                            >
                              Service completed
                            </p>
                            <p
                              style={{
                                fontSize: "11px",
                                color: "var(--text-muted)",
                              }}
                            >
                              2 days ago
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                          <div className="flex-1">
                            <p
                              style={{
                                fontSize: "12px",
                                color: "var(--text-primary)",
                              }}
                            >
                              Payment received • $45.00
                            </p>
                            <p
                              style={{
                                fontSize: "11px",
                                color: "var(--text-muted)",
                              }}
                            >
                              2 days ago
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-purple-500 mt-1.5 flex-shrink-0" />
                          <div className="flex-1">
                            <p
                              style={{
                                fontSize: "12px",
                                color: "var(--text-primary)",
                              }}
                            >
                              Next service scheduled
                            </p>
                            <p
                              style={{
                                fontSize: "11px",
                                color: "var(--text-muted)",
                              }}
                            >
                              3 days ago
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p
              className="text-center mt-4"
              style={{
                fontSize: "var(--text-small)",
                color: "var(--text-muted)",
              }}
            >
              Dashboard & Quick Actions
            </p>
          </div>

          {/* Screen 2: Request Service */}
          <div className="mx-auto">
            <div className="bg-gradient-to-br from-blue-500 to-indigo-500 rounded-[3rem] p-4 shadow-2xl w-[320px]">
              <div className="bg-white rounded-[2.5rem] overflow-hidden">
                {/* Status Bar */}
                <div className="bg-slate-900 px-6 py-3 flex items-center justify-between">
                  <span className="text-white text-xs font-medium">9:41</span>
                  <div className="flex gap-1">
                    <div className="w-4 h-4 rounded-full bg-blue-500" />
                    <div className="w-4 h-4 rounded-full bg-blue-500" />
                  </div>
                </div>

                {/* App Content */}
                <div className="bg-[var(--cream)] min-h-[600px]">
                  {/* Header */}
                  <div className="bg-blue-600 text-white px-4 py-4">
                    <div className="flex items-center gap-2 mb-2">
                      <button className="text-white">← Back</button>
                    </div>
                    <h3
                      style={{
                        fontSize: "var(--text-body)",
                        fontWeight: "var(--font-weight-medium)",
                      }}
                    >
                      Request Service
                    </h3>
                  </div>

                  <div className="p-4 space-y-4">
                    {/* Service Type */}
                    <div>
                      <label
                        className="block mb-2"
                        style={{
                          fontSize: "var(--text-small)",
                          fontWeight: "var(--font-weight-medium)",
                          color: "var(--text-primary)",
                        }}
                      >
                        Service Type
                      </label>
                      <div className="space-y-2">
                        <button className="w-full p-3 bg-blue-50 border-2 border-blue-500 rounded-lg text-left">
                          <p
                            style={{
                              fontSize: "var(--text-small)",
                              fontWeight: "var(--font-weight-medium)",
                              color: "var(--text-primary)",
                            }}
                          >
                            Aeration + Overseeding
                          </p>
                          <p
                            style={{
                              fontSize: "11px",
                              color: "var(--text-muted)",
                            }}
                          >
                            Recommended for spring
                          </p>
                        </button>
                        <button className="w-full p-3 bg-white border border-[var(--border-color)] rounded-lg text-left hover:bg-slate-50">
                          <p
                            style={{
                              fontSize: "var(--text-small)",
                              fontWeight: "var(--font-weight-medium)",
                              color: "var(--text-primary)",
                            }}
                          >
                            Spring Cleanup
                          </p>
                          <p
                            style={{
                              fontSize: "11px",
                              color: "var(--text-muted)",
                            }}
                          >
                            One-time service
                          </p>
                        </button>
                        <button className="w-full p-3 bg-white border border-[var(--border-color)] rounded-lg text-left hover:bg-slate-50">
                          <p
                            style={{
                              fontSize: "var(--text-small)",
                              fontWeight: "var(--font-weight-medium)",
                              color: "var(--text-primary)",
                            }}
                          >
                            Fertilization Treatment
                          </p>
                          <p
                            style={{
                              fontSize: "11px",
                              color: "var(--text-muted)",
                            }}
                          >
                            4-step program available
                          </p>
                        </button>
                      </div>
                    </div>

                    {/* Preferred Date */}
                    <div>
                      <label
                        className="block mb-2"
                        style={{
                          fontSize: "var(--text-small)",
                          fontWeight: "var(--font-weight-medium)",
                          color: "var(--text-primary)",
                        }}
                      >
                        Preferred Date
                      </label>
                      <select className="w-full px-3 py-2.5 bg-white border border-[var(--border-color)] rounded-lg">
                        <option>Next available</option>
                        <option>This week</option>
                        <option>Next week</option>
                        <option>Specific date...</option>
                      </select>
                    </div>

                    {/* Notes */}
                    <div>
                      <label
                        className="block mb-2"
                        style={{
                          fontSize: "var(--text-small)",
                          fontWeight: "var(--font-weight-medium)",
                          color: "var(--text-primary)",
                        }}
                      >
                        Additional Notes (Optional)
                      </label>
                      <textarea
                        className="w-full px-3 py-2.5 bg-white border border-[var(--border-color)] rounded-lg resize-none"
                        rows={3}
                        placeholder="Any specific concerns or requests..."
                      />
                    </div>

                    {/* Estimate Preview */}
                    <div className="bg-white rounded-xl border border-[var(--border-color)] p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span
                          style={{
                            fontSize: "var(--text-small)",
                            color: "var(--text-muted)",
                          }}
                        >
                          Estimated Cost
                        </span>
                        <span
                          style={{
                            fontSize: "20px",
                            fontWeight: "var(--font-weight-medium)",
                            color: "var(--text-primary)",
                          }}
                        >
                          $350
                        </span>
                      </div>
                      <p
                        style={{
                          fontSize: "11px",
                          color: "var(--text-muted)",
                        }}
                      >
                        Final quote will be sent within 24 hours
                      </p>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button className="w-full px-4 py-3.5 bg-blue-600 text-white rounded-xl font-medium text-base">
                        Submit Request
                      </button>
                      <p
                        className="text-center mt-2"
                        style={{
                          fontSize: "11px",
                          color: "var(--text-muted)",
                        }}
                      >
                        You'll receive a quote via email & text
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p
              className="text-center mt-4"
              style={{
                fontSize: "var(--text-small)",
                color: "var(--text-muted)",
              }}
            >
              Request New Service
            </p>
          </div>

          {/* Screen 3: Payment & Autopay */}
          <div className="mx-auto">
            <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-[3rem] p-4 shadow-2xl w-[320px]">
              <div className="bg-white rounded-[2.5rem] overflow-hidden">
                {/* Status Bar */}
                <div className="bg-slate-900 px-6 py-3 flex items-center justify-between">
                  <span className="text-white text-xs font-medium">9:41</span>
                  <div className="flex gap-1">
                    <div className="w-4 h-4 rounded-full bg-green-500" />
                    <div className="w-4 h-4 rounded-full bg-green-500" />
                  </div>
                </div>

                {/* App Content */}
                <div className="bg-[var(--cream)] min-h-[600px]">
                  {/* Header */}
                  <div className="bg-green-600 text-white px-4 py-4">
                    <div className="flex items-center gap-2 mb-2">
                      <button className="text-white">← Back</button>
                    </div>
                    <h3
                      style={{
                        fontSize: "var(--text-body)",
                        fontWeight: "var(--font-weight-medium)",
                      }}
                    >
                      Payments
                    </h3>
                  </div>

                  <div className="p-4 space-y-4">
                    {/* AutoPay Status */}
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-4 text-white">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <CheckCircle className="w-5 h-5" />
                            <span
                              style={{
                                fontSize: "var(--text-small)",
                                fontWeight: "var(--font-weight-medium)",
                              }}
                            >
                              AutoPay Active
                            </span>
                          </div>
                          <p style={{ fontSize: "12px", opacity: 0.9 }}>
                            Invoices paid automatically
                          </p>
                        </div>
                      </div>
                      <div className="pt-3 border-t border-white/20">
                        <p style={{ fontSize: "11px", opacity: 0.8 }}>
                          Payment Method: •••• 4242
                        </p>
                      </div>
                    </div>

                    {/* Recent Invoices */}
                    <div>
                      <h4
                        className="mb-3"
                        style={{
                          fontSize: "var(--text-small)",
                          fontWeight: "var(--font-weight-medium)",
                          color: "var(--text-primary)",
                        }}
                      >
                        Recent Invoices
                      </h4>
                      <div className="space-y-2">
                        <div className="bg-white rounded-lg border border-[var(--border-color)] p-3">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <p
                                style={{
                                  fontSize: "var(--text-small)",
                                  fontWeight: "var(--font-weight-medium)",
                                  color: "var(--text-primary)",
                                }}
                              >
                                Weekly Service - Jan 9
                              </p>
                              <p
                                style={{
                                  fontSize: "11px",
                                  color: "var(--text-muted)",
                                }}
                              >
                                Paid Jan 10, 2026
                              </p>
                            </div>
                            <div className="text-right">
                              <p
                                style={{
                                  fontSize: "var(--text-small)",
                                  fontWeight: "var(--font-weight-medium)",
                                  color: "var(--text-primary)",
                                }}
                              >
                                $45.00
                              </p>
                              <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-xs">
                                Paid
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white rounded-lg border border-[var(--border-color)] p-3">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <p
                                style={{
                                  fontSize: "var(--text-small)",
                                  fontWeight: "var(--font-weight-medium)",
                                  color: "var(--text-primary)",
                                }}
                              >
                                Weekly Service - Jan 2
                              </p>
                              <p
                                style={{
                                  fontSize: "11px",
                                  color: "var(--text-muted)",
                                }}
                              >
                                Paid Jan 3, 2026
                              </p>
                            </div>
                            <div className="text-right">
                              <p
                                style={{
                                  fontSize: "var(--text-small)",
                                  fontWeight: "var(--font-weight-medium)",
                                  color: "var(--text-primary)",
                                }}
                              >
                                $45.00
                              </p>
                              <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-xs">
                                Paid
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Payment Method */}
                    <div className="bg-white rounded-xl border border-[var(--border-color)] p-4">
                      <h4
                        className="mb-3"
                        style={{
                          fontSize: "var(--text-small)",
                          fontWeight: "var(--font-weight-medium)",
                          color: "var(--text-primary)",
                        }}
                      >
                        Payment Method
                      </h4>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-8 bg-slate-800 rounded flex items-center justify-center">
                          <span className="text-white text-xs font-bold">
                            VISA
                          </span>
                        </div>
                        <div className="flex-1">
                          <p
                            style={{
                              fontSize: "var(--text-small)",
                              color: "var(--text-primary)",
                            }}
                          >
                            •••• •••• •••• 4242
                          </p>
                          <p
                            style={{
                              fontSize: "11px",
                              color: "var(--text-muted)",
                            }}
                          >
                            Expires 12/2027
                          </p>
                        </div>
                        <button className="text-blue-600 text-sm font-medium">
                          Edit
                        </button>
                      </div>
                    </div>

                    {/* Manage AutoPay */}
                    <button className="w-full px-4 py-3 bg-white border border-[var(--border-color)] rounded-xl font-medium hover:bg-slate-50">
                      Manage AutoPay Settings
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <p
              className="text-center mt-4"
              style={{
                fontSize: "var(--text-small)",
                color: "var(--text-muted)",
              }}
            >
              Payments & AutoPay
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
