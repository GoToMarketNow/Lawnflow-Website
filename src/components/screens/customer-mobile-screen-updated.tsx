import { IPhoneShell } from "@/components/ui/iphone-shell";
import { MobileAppPreview } from "@/components/ui/mobile-app-preview";
import {
  Calendar,
  DollarSign,
  MessageCircle,
  Star,
  Bell,
  CreditCard,
} from "lucide-react";

export function CustomerMobileScreenUpdated() {
  return (
    <section className="w-full py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-100 border border-green-200 rounded-full mb-4">
            <span
              className="text-green-700"
              style={{
                fontSize: "12px",
                fontWeight: "var(--font-weight-medium)",
              }}
            >
              Customer Experience Agent
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
            Customer Portal
          </h2>
          <p
            style={{
              fontSize: "var(--text-body)",
              lineHeight: "var(--text-body-line)",
              color: "var(--text-muted)",
            }}
          >
            Give your customers transparency and convenience. Track service
            status, view invoices, manage appointments, and communicate—all from
            a beautiful mobile app.
          </p>
        </div>

        {/* Mobile Device Mockups */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Screen 1: Customer Dashboard - Use Component */}
          <div className="mx-auto">
            <MobileAppPreview variant="customer" />
            <p
              className="text-center mt-4"
              style={{
                fontSize: "var(--text-small)",
                color: "var(--text-muted)",
              }}
            >
              Customer Dashboard
            </p>
          </div>

          {/* Screen 2: Service History */}
          <div className="mx-auto">
            <IPhoneShell className="w-[320px]">
              <div className="bg-[var(--cream)] min-h-[600px]">
                {/* Header */}
                <div
                  className="px-4 py-6"
                  style={{ background: "var(--primary-green)" }}
                >
                  <div className="flex items-center gap-2 mb-2 text-white">
                    <button>← Back</button>
                  </div>
                  <h3
                    className="text-white"
                    style={{
                      fontSize: "var(--text-body)",
                      fontWeight: "var(--font-weight-medium)",
                    }}
                  >
                    Service History
                  </h3>
                </div>

                <div className="p-4 space-y-3">
                  {/* Recent Services */}
                  {[
                    {
                      date: "Mar 13, 2024",
                      service: "Weekly Mow + Edge + Blow",
                      amount: "$45.00",
                      status: "Completed",
                      rating: true,
                    },
                    {
                      date: "Mar 6, 2024",
                      service: "Weekly Mow + Edge + Blow",
                      amount: "$45.00",
                      status: "Completed",
                      rating: true,
                    },
                    {
                      date: "Feb 27, 2024",
                      service: "Weekly Mow + Edge + Blow",
                      amount: "$45.00",
                      status: "Completed",
                      rating: false,
                    },
                    {
                      date: "Feb 20, 2024",
                      service: "Spring Cleanup + Mulch",
                      amount: "$180.00",
                      status: "Completed",
                      rating: true,
                    },
                  ].map((service, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-xl border border-[var(--border-color)] p-4"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <p
                            className="mb-1"
                            style={{
                              fontSize: "var(--text-small)",
                              fontWeight: "var(--font-weight-medium)",
                              color: "var(--text-primary)",
                            }}
                          >
                            {service.date}
                          </p>
                          <p
                            style={{
                              fontSize: "12px",
                              color: "var(--text-muted)",
                            }}
                          >
                            {service.service}
                          </p>
                        </div>
                        <span
                          className="font-semibold"
                          style={{
                            fontSize: "var(--text-small)",
                            color: "var(--text-primary)",
                          }}
                        >
                          {service.amount}
                        </span>
                      </div>

                      <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                        <span
                          className="inline-flex items-center gap-1 px-2 py-1 bg-green-50 rounded-md"
                          style={{
                            fontSize: "11px",
                            color: "var(--primary-green)",
                            fontWeight: "var(--font-weight-medium)",
                          }}
                        >
                          ✓ {service.status}
                        </span>

                        {service.rating ? (
                          <div className="flex gap-0.5">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className="w-4 h-4 text-yellow-400 fill-yellow-400"
                              />
                            ))}
                          </div>
                        ) : (
                          <button
                            className="text-xs font-medium"
                            style={{ color: "var(--primary-green)" }}
                          >
                            Rate Service →
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
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
              Service History
            </p>
          </div>

          {/* Screen 3: Payment & Invoices */}
          <div className="mx-auto">
            <IPhoneShell className="w-[320px]">
              <div className="bg-[var(--cream)] min-h-[600px]">
                {/* Header */}
                <div
                  className="px-4 py-6"
                  style={{ background: "var(--primary-green)" }}
                >
                  <div className="flex items-center gap-2 mb-2 text-white">
                    <button>← Back</button>
                  </div>
                  <h3
                    className="text-white"
                    style={{
                      fontSize: "var(--text-body)",
                      fontWeight: "var(--font-weight-medium)",
                    }}
                  >
                    Billing & Payments
                  </h3>
                </div>

                <div className="p-4 space-y-4">
                  {/* Payment Method */}
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-4 text-white">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs opacity-70">Payment Method</span>
                      <CreditCard className="w-5 h-5 opacity-70" />
                    </div>
                    <p className="text-lg font-medium mb-1">•••• 4242</p>
                    <div className="flex items-center justify-between text-xs opacity-70">
                      <span>Visa ending in 4242</span>
                      <span>Exp 12/25</span>
                    </div>
                  </div>

                  {/* Auto-pay Status */}
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-lg">✓</span>
                      </div>
                      <div>
                        <p
                          className="mb-1"
                          style={{
                            fontSize: "var(--text-small)",
                            fontWeight: "var(--font-weight-medium)",
                            color: "var(--text-primary)",
                          }}
                        >
                          Auto-pay enabled
                        </p>
                        <p
                          style={{
                            fontSize: "12px",
                            color: "var(--text-muted)",
                          }}
                        >
                          Invoices are automatically charged after service
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Recent Invoices */}
                  <div className="bg-white rounded-xl border border-[var(--border-color)] p-4">
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
                    <div className="space-y-3">
                      {[
                        {
                          date: "Mar 13",
                          invoice: "INV-1234",
                          amount: "$45.00",
                          status: "Paid",
                        },
                        {
                          date: "Mar 6",
                          invoice: "INV-1233",
                          amount: "$45.00",
                          status: "Paid",
                        },
                        {
                          date: "Feb 27",
                          invoice: "INV-1232",
                          amount: "$45.00",
                          status: "Paid",
                        },
                      ].map((invoice, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between pb-3 border-b border-slate-100 last:border-0 last:pb-0"
                        >
                          <div>
                            <p
                              className="mb-0.5"
                              style={{
                                fontSize: "var(--text-small)",
                                fontWeight: "var(--font-weight-medium)",
                                color: "var(--text-primary)",
                              }}
                            >
                              {invoice.invoice}
                            </p>
                            <p
                              style={{
                                fontSize: "11px",
                                color: "var(--text-muted)",
                              }}
                            >
                              {invoice.date}
                            </p>
                          </div>
                          <div className="text-right">
                            <p
                              className="mb-0.5"
                              style={{
                                fontSize: "var(--text-small)",
                                fontWeight: "var(--font-weight-medium)",
                                color: "var(--text-primary)",
                              }}
                            >
                              {invoice.amount}
                            </p>
                            <span
                              className="inline-block px-2 py-0.5 bg-green-50 rounded text-green-700"
                              style={{
                                fontSize: "10px",
                                fontWeight: "var(--font-weight-medium)",
                              }}
                            >
                              {invoice.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2">
                    <button className="w-full px-4 py-3 bg-white border border-[var(--border-color)] rounded-xl font-medium text-sm text-[var(--text-primary)]">
                      View All Invoices
                    </button>
                    <button
                      className="w-full px-4 py-3 rounded-xl font-medium text-sm text-white"
                      style={{ background: "var(--primary-green)" }}
                    >
                      Update Payment Method
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
              Billing & Payments
            </p>
          </div>
        </div>

        {/* Key Features Grid */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl border border-[var(--border-color)] p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <Bell className="w-6 h-6 text-green-600" />
              </div>
              <h4
                className="mb-2"
                style={{
                  fontSize: "var(--text-body)",
                  fontWeight: "var(--font-weight-medium)",
                  color: "var(--text-primary)",
                }}
              >
                Real-time Updates
              </h4>
              <p
                style={{
                  fontSize: "var(--text-small)",
                  color: "var(--text-muted)",
                }}
              >
                Get notified when crew is on the way and job is complete
              </p>
            </div>

            <div className="bg-white rounded-xl border border-[var(--border-color)] p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-6 h-6 text-blue-600" />
              </div>
              <h4
                className="mb-2"
                style={{
                  fontSize: "var(--text-body)",
                  fontWeight: "var(--font-weight-medium)",
                  color: "var(--text-primary)",
                }}
              >
                Easy Payments
              </h4>
              <p
                style={{
                  fontSize: "var(--text-small)",
                  color: "var(--text-muted)",
                }}
              >
                Auto-pay with saved card or pay invoices with one tap
              </p>
            </div>

            <div className="bg-white rounded-xl border border-[var(--border-color)] p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-purple-600" />
              </div>
              <h4
                className="mb-2"
                style={{
                  fontSize: "var(--text-body)",
                  fontWeight: "var(--font-weight-medium)",
                  color: "var(--text-primary)",
                }}
              >
                Direct Communication
              </h4>
              <p
                style={{
                  fontSize: "var(--text-small)",
                  color: "var(--text-muted)",
                }}
              >
                Message your provider anytime with in-app chat
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}