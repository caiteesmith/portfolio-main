import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function ChatbotCaseStudyModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return;

    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };

    document.addEventListener("keydown", onKey);

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      className="
        fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6
        h-screen supports-[height:100dvh]:h-[100dvh]
        overflow-y-auto overscroll-contain
      "
      style={{ touchAction: "pan-y" }}
    >
      {/* Overlay */}
      <button
        type="button"
        aria-label="Close dialog"
        onClick={onClose}
        className="absolute inset-0 bg-black/30 dark:bg-black/50 backdrop-blur-[2px]"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="AI/ML Chatbot Containerization Case Study"
        className="
          relative z-[70] w-full max-w-3xl rounded-2xl p-6 shadow-2xl
          ring-1 ring-black/10 dark:ring-white/10
          bg-white/65 dark:bg-zinc-900/70
          backdrop-blur-lg
          max-h-[90dvh] overflow-y-auto
        "
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md rounded-full p-2">
          <div className="grid grid-cols-3 items-center">
            <span />
            <h3 className="text-xl font-semibold text-center">
              AI/ML Chatbot Containerization
            </h3>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close dialog"
              className="justify-self-end rounded-full p-2 hover:bg-black/5 dark:hover:bg-white/10"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Introduction */}
        <p className="mt-3 text-sm opacity-90">
          <strong>Case Study</strong>
          <br />
          Modernization of internal DataRobot-powered chatbots by standardizing
          them into Dockerized Streamlit services, improving reliability and
          preparing them for future Kubernetes deployment.
        </p>

        {/* Section: Challenge */}
        <div className="mt-5 rounded-xl p-4 bg-white/90 dark:bg-zinc-900/60 ring-1 ring-black/5 dark:ring-white/10">
          <p className="text-sm font-semibold mb-1">The Challenge</p>
          <p className="text-sm opacity-85">
            The internal chatbot tools were originally deployed as standalone
            Streamlit apps. The Data Science and AI team relied on DataRobot to host their machine
            learning models, but the platform would periodically refresh and reset
            deployed apps. These resets broke the UI used by business
            teams, caused outages, and required frequent manual refreshes. The models also
            needed a more stable, self-contained way to run long-term without being
            dependent on DataRobot's hosted environments.
            <br /><br />
            The goal was to create a reliable, reproducible runtime for the chatbots
            that would not break when DataRobot refreshed or redeployed services.
            Containerization became the long-term solution.
          </p>
        </div>

        {/* Section: Approach */}
        <div className="mt-5 rounded-xl p-4 bg-white/90 dark:bg-zinc-900/60 ring-1 ring-black/5 dark:ring-white/10">
          <p className="text-sm font-semibold mb-1">My Approach</p>
          <ul className="list-disc ml-5 mt-2 space-y-1 text-sm opacity-85">
            <li>Containerized each Streamlit chatbot into isolated Docker services.</li>
            <li>Designed a shared Docker Compose network for consistency and local parity.</li>
            <li>Standardized configuration through environment variables and mounted secrets.</li>
            <li>Collaborated with data scientists to streamline ML model access and prediction calls.</li>
            <li>Structured the containers and filesystem for a smooth future migration to Kubernetes.</li>
          </ul>
        </div>

        {/* Section: Impact */}
        <div className="mt-5 grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-semibold">My Role</p>
            <ul className="list-disc ml-5 mt-1 space-y-1">
                <li>Owned the end-to-end containerization strategy for multiple internal AI/ML chatbots.</li>
                <li>Worked directly with the Data Science/AI team to understand breaking points caused by DataRobot refreshes.</li>
                <li>Refactored Streamlit applications to run reliably inside Docker containers.</li>
                <li>Built a unified Docker Compose environment to standardize development, testing, and deployment.</li>
                <li>Created a long-term migration path toward Kubernetes for reliable hosting outside of DataRobot.</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold">Impact</p>
            <ul className="list-disc ml-5 mt-1 space-y-1">
              <li>
                Eliminated recurring breakages caused by DataRobot refreshes,
                restoring stability for internal stakeholders.
              </li>
              <li>
                Reduced setup and recovery time from hours of manual fixes to a
                single command using Docker Compose.
              </li>
              <li>
                Improved consistency across engineering and data science teams
                by establishing a standardized runtime.
              </li>
              <li>
                Enabled long-term migration toward Kubernetes without requiring
                rearchitecture of the apps.
              </li>
            </ul>
          </div>
        </div>

        {/* Technologies */}
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            "Docker",
            "Docker Compose",
            "Streamlit",
            "Python",
            "DataRobot",
            "AI/ML",
            "Containerization",
            "Kubernetes (planned)",
          ].map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-1 rounded-full bg-black/[.04] dark:bg-white/[.08] ring-1 ring-black/5 dark:ring-white/10"
            >
              {t}
            </span>
          ))}
        </div>

        {/* NDA */}
        <p className="mt-4 text-[12px] opacity-70">
          *Proprietary code and DataRobot configurations
          are intentionally omitted for confidentiality. Open to discussing
          implementation details in interviews.
        </p>
      </div>
    </div>,
    document.body
  );
}