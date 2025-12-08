"use client";

import DashboardShell from "../components/DashboardShell";
import { tools } from "./tools-data";

export default function ToolsPage() {
  return (
    <DashboardShell>
      <div className="p-6">
        <h1 className="text-3xl font-bold text-white mb-6">
          All SEO & AI Tools
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {tools.map((tool) => (
            <button
              key={tool.id}
              onClick={() => window.open(tool.url, "_blank")}
              className="
                bg-white rounded-xl p-5 shadow-md 
                hover:shadow-xl hover:-translate-y-1 
                transition-all duration-200 text-left
              "
            >
              <div className="w-full flex justify-center mb-4">
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="w-20 h-20 object-contain"
                />
              </div>

              <h2 className="text-lg font-semibold text-black text-center">
                {tool.name}
              </h2>

              <p className="text-sm text-gray-600 text-center mt-1">
                {tool.meta}
              </p>
            </button>
          ))}
        </div>
      </div>
    </DashboardShell>
  );
}
