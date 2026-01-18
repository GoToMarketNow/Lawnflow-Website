import { IPhoneShell } from "@/app/components/ui/iphone-shell";
import {
  Home,
  Calendar,
  FileText,
  Settings,
  CheckCircle,
  Clock,
  DollarSign,
  MapPin,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

interface MobileAppPreviewProps {
  variant?: "owner" | "crew" | "customer";
  className?: string;
}

export function MobileAppPreview({
  variant = "owner",
  className = "",
}: MobileAppPreviewProps) {
  if (variant === "owner") {
    return (
      <IPhoneShell className={className}>
        <div className="bg-white min-h-[640px]">
          {/* App Header */}
          <div
            className="px-6 py-6"
            style={{ background: "var(--primary-green)" }}
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-white/80 text-xs">Good morning</p>
                <h2 className="text-white font-semibold text-xl">Dashboard</h2>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <span className="text-white font-medium text-sm">JD</span>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                <DollarSign className="w-4 h-4 text-white mb-1" />
                <p className="text-white font-semibold text-lg">$12.4k</p>
                <p className="text-white/70 text-xs">This Week</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                <CheckCircle className="w-4 h-4 text-white mb-1" />
                <p className="text-white font-semibold text-lg">24</p>
                <p className="text-white/70 text-xs">Completed</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                <Clock className="w-4 h-4 text-white mb-1" />
                <p className="text-white font-semibold text-lg">8</p>
                <p className="text-white/70 text-xs">Pending</p>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="px-4 py-4 bg-[var(--cream)] min-h-[400px]">
            {/* AI Agent Activity */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-4 mb-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-semibold text-sm text-slate-900">
                      AI Agents Working
                    </p>
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse delay-75" />
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse delay-150" />
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 mb-2">
                    3 quotes sent, 2 invoices generated, 5 jobs scheduled
                  </p>
                  <button className="text-xs text-blue-600 font-medium">
                    View Activity →
                  </button>
                </div>
              </div>
            </div>

            {/* Today's Schedule */}
            <div className="bg-white rounded-2xl border border-slate-200 p-4 mb-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-sm text-slate-900">
                  Today's Schedule
                </h3>
                <span className="text-xs text-slate-500">Mar 15</span>
              </div>
              <div className="space-y-2">
                {[
                  { time: "9:00 AM", status: "completed", location: "Oak St" },
                  { time: "10:30 AM", status: "active", location: "Elm Dr" },
                  { time: "12:00 PM", status: "upcoming", location: "Pine Ln" },
                ].map((job, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-2 rounded-lg bg-slate-50"
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${
                        job.status === "completed"
                          ? "bg-green-500"
                          : job.status === "active"
                            ? "bg-blue-500 animate-pulse"
                            : "bg-slate-300"
                      }`}
                    />
                    <span className="text-xs text-slate-600 font-medium w-16">
                      {job.time}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-slate-900">
                      <MapPin className="w-3 h-3" />
                      {job.location}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Revenue Chart Preview */}
            <div className="bg-white rounded-2xl border border-slate-200 p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-sm text-slate-900">
                  Revenue Trend
                </h3>
                <TrendingUp className="w-4 h-4 text-green-600" />
              </div>
              <div className="h-24 flex items-end gap-2">
                {[40, 65, 45, 80, 60, 85, 95].map((height, idx) => (
                  <div key={idx} className="flex-1 flex flex-col justify-end">
                    <div
                      className="bg-gradient-to-t from-emerald-500 to-emerald-400 rounded-t-sm"
                      style={{ height: `${height}%` }}
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-xs text-slate-400">Mon</span>
                <span className="text-xs text-slate-400">Sun</span>
              </div>
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-6 py-4">
            <div className="flex items-center justify-between max-w-[320px] mx-auto">
              <div className="flex flex-col items-center gap-1">
                <Home className="w-5 h-5" style={{ color: "var(--primary-green)" }} />
                <span
                  className="text-xs font-medium"
                  style={{ color: "var(--primary-green)" }}
                >
                  Home
                </span>
              </div>
              <div className="flex flex-col items-center gap-1 opacity-40">
                <Calendar className="w-5 h-5 text-slate-600" />
                <span className="text-xs text-slate-600">Schedule</span>
              </div>
              <div className="flex flex-col items-center gap-1 opacity-40">
                <FileText className="w-5 h-5 text-slate-600" />
                <span className="text-xs text-slate-600">Invoices</span>
              </div>
              <div className="flex flex-col items-center gap-1 opacity-40">
                <Users className="w-5 h-5 text-slate-600" />
                <span className="text-xs text-slate-600">Customers</span>
              </div>
            </div>
          </div>
        </div>
      </IPhoneShell>
    );
  }

  if (variant === "crew") {
    return (
      <IPhoneShell className={className}>
        <div className="bg-[var(--cream)] min-h-[640px]">
          {/* Header */}
          <div className="bg-indigo-600 text-white px-4 py-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-white/80 text-xs">Wednesday, Mar 15</p>
                <h2 className="text-white font-semibold text-xl">Today's Route</h2>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>42 miles</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>~8.2 hrs</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4" />
                <span>9 jobs</span>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="px-4 py-3 bg-white border-b border-slate-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-slate-600">Progress</span>
              <span className="text-xs font-medium text-slate-900">
                3 of 9 complete
              </span>
            </div>
            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full w-1/3 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full" />
            </div>
          </div>

          {/* Job Cards */}
          <div className="p-4 space-y-3 pb-24">
            {/* Active Job */}
            <div className="bg-white border-2 border-indigo-500 rounded-2xl p-4 shadow-lg">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <span className="inline-block px-2 py-1 bg-indigo-600 text-white rounded-md text-xs font-medium mb-2">
                    IN PROGRESS
                  </span>
                  <h3 className="font-semibold text-base text-slate-900 mb-1">
                    789 Elm Drive
                  </h3>
                  <p className="text-xs text-slate-600">
                    Mow + Edge + Blow • Est. 45 min
                  </p>
                </div>
                <button className="p-2 bg-indigo-100 rounded-lg">
                  <MapPin className="w-5 h-5 text-indigo-600" />
                </button>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 px-3 py-2.5 bg-green-600 text-white rounded-xl text-sm font-medium">
                  ✓ Complete
                </button>
                <button className="px-3 py-2.5 bg-slate-100 rounded-xl">
                  📷
                </button>
              </div>
            </div>

            {/* Next Jobs */}
            {[
              { time: "11:15 AM", address: "234 Pine Lane" },
              { time: "12:00 PM", address: "567 Birch Court" },
              { time: "1:30 PM", address: "890 Maple Ave" },
            ].map((job, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl p-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-semibold text-slate-600">
                      {4 + idx}
                    </div>
                    <div>
                      <p className="font-medium text-sm text-slate-900">
                        {job.time}
                      </p>
                      <p className="text-xs text-slate-600">{job.address}</p>
                    </div>
                  </div>
                  <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded-md text-xs">
                    Ready
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </IPhoneShell>
    );
  }

  // Customer variant
  return (
    <IPhoneShell className={className}>
      <div className="bg-white min-h-[640px]">
        {/* Header */}
        <div
          className="px-6 py-6"
          style={{ background: "var(--primary-green)" }}
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-white/80 text-xs">Welcome back</p>
              <h2 className="text-white font-semibold text-xl">Sarah Thompson</h2>
            </div>
            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <span className="text-white font-medium text-sm">ST</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="px-4 py-4 bg-[var(--cream)] min-h-[500px]">
          {/* Next Service */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-4 mb-4">
            <div className="flex items-start gap-3 mb-3">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "var(--primary-green)" }}
              >
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-xs text-slate-600 mb-1">Next Service</p>
                <h3 className="font-semibold text-base text-slate-900 mb-1">
                  Tomorrow, 10:30 AM
                </h3>
                <p className="text-sm text-slate-600">
                  Weekly Mow + Edge + Blow
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="flex-1 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-700">
                Reschedule
              </button>
              <button
                className="flex-1 px-4 py-2 text-white rounded-xl text-sm font-medium"
                style={{ background: "var(--primary-green)" }}
              >
                View Details
              </button>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-2xl border border-slate-200 p-4 mb-4">
            <h3 className="font-semibold text-sm text-slate-900 mb-3">
              Recent Activity
            </h3>
            <div className="space-y-3">
              {[
                {
                  icon: CheckCircle,
                  title: "Service Completed",
                  desc: "Your lawn looks great!",
                  time: "2 days ago",
                  color: "green",
                },
                {
                  icon: DollarSign,
                  title: "Payment Processed",
                  desc: "$45.00 charged",
                  time: "2 days ago",
                  color: "blue",
                },
                {
                  icon: Calendar,
                  title: "Service Scheduled",
                  desc: "Tomorrow at 10:30 AM",
                  time: "1 week ago",
                  color: "purple",
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-3">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        item.color === "green"
                          ? "bg-green-100"
                          : item.color === "blue"
                            ? "bg-blue-100"
                            : "bg-purple-100"
                      }`}
                    >
                      <Icon
                        className={`w-4 h-4 ${
                          item.color === "green"
                            ? "text-green-600"
                            : item.color === "blue"
                              ? "text-blue-600"
                              : "text-purple-600"
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm text-slate-900">
                        {item.title}
                      </p>
                      <p className="text-xs text-slate-600">{item.desc}</p>
                    </div>
                    <span className="text-xs text-slate-400">{item.time}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-3">
            <button className="bg-white border border-slate-200 rounded-xl p-4 text-left">
              <FileText className="w-5 h-5 text-slate-600 mb-2" />
              <p className="font-medium text-sm text-slate-900">Invoices</p>
              <p className="text-xs text-slate-500">View history</p>
            </button>
            <button className="bg-white border border-slate-200 rounded-xl p-4 text-left">
              <Settings className="w-5 h-5 text-slate-600 mb-2" />
              <p className="font-medium text-sm text-slate-900">Settings</p>
              <p className="text-xs text-slate-500">Manage account</p>
            </button>
          </div>
        </div>
      </div>
    </IPhoneShell>
  );
}