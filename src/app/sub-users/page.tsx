// src/app/sub-users/page.tsx
import DashboardShell from "../components/DashboardShell";

export default function SubUsersPage() {
  const subUsers = [
    {
      name: "Premier Pain Centers",
      email: "premierpaincenters@gmail.com",
      role: "Editor",
      status: "Active",
    },
  
  ];

  const maxUsers = 3;

  return (
    <DashboardShell>
      <div className="space-y-4">
        {/* Header card */}
        <div className="rounded-xl border border-white/5 bg-[#0b1220]/80 p-4 text-sm">
          <div className="text-sm font-semibold">Manage Sub-Users</div>
          <p className="mt-1 text-xs text-slate-400">
            Give your team access to this dashboard. In a real app, this section
            would connect with your authentication system to invite or remove
            users.
          </p>
        </div>

        {/* Content card */}
        <div className="rounded-xl border border-white/5 bg-[#020617]/70 p-4 text-xs">
          <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-[11px] text-slate-400">
              Current sub-users:{" "}
              <span className="font-semibold text-slate-200">
                {subUsers.length} / {maxUsers}
              </span>
            </div>
            <button className="w-full rounded-lg bg-indigo-500 px-3 py-2 text-[11px] font-semibold hover:bg-indigo-600 sm:w-auto">
              Add New User
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-lg border border-white/5 bg-[#020617]/80">
            <table className="min-w-full divide-y divide-white/5">
              <thead className="bg-white/5 text-left text-[11px] uppercase tracking-wide text-slate-400">
                <tr>
                  <th className="px-3 py-2">Name</th>
                  <th className="px-3 py-2">Email</th>
                  <th className="px-3 py-2">Role</th>
                  <th className="px-3 py-2">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {subUsers.map((user, i) => (
                  <tr key={i} className="hover:bg-white/5">
                    <td className="px-3 py-2 whitespace-nowrap">{user.name}</td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      {user.email}
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap">{user.role}</td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-400">
                        {user.status}
                      </span>
                    </td>
                  </tr>
                ))}

                {subUsers.length === 0 && (
                  <tr>
                    <td
                      colSpan={4}
                      className="px-3 py-4 text-center text-[11px] text-slate-500"
                    >
                      No sub-users yet. Click &quot;Add New User&quot; to invite
                      someone.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <p className="mt-3 text-[11px] text-slate-500">
            You can change limits (e.g., max users for each plan) in your
            billing or plan configuration later.
          </p>
        </div>
      </div>
    </DashboardShell>
  );
}
