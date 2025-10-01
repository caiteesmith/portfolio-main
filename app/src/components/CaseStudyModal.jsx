export default function CaseStudyModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/20" onClick={onClose} />
      <div className="relative z-[70] w-full max-w-3xl rounded-2xl glass p-6">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-semibold">Health of IT (HIT): Case Study</h3>
          <button onClick={onClose} className="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800">✕</button>
        </div>

        {/* 1) Summary */}
        <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
          Enterprise microservices platform for real-time product health, alerts, and a web dashboard. Built on .NET 8 Azure Functions with Cosmos DB and Azure Service Bus, deployed via Terraform and Azure Pipelines.
        </p>

        {/* 2) Architecture sketch */}
        <div className="mt-5 rounded-xl border border-gray-200 dark:border-white/10 p-4 bg-white/70 dark:bg-black/30">
          <p className="text-xs mb-2 font-medium text-gray-500 dark:text-gray-400">Landscape Architecture</p>
                  <svg viewBox="0 0 1080 620" className="w-full max-w-5xl mx-auto">
                    <defs>
                      <linearGradient id="g1" x1="0" x2="1">
                        <stop offset="0%" stopColor="#f69fae" />
                        <stop offset="100%" stopColor="#9fa7ff" />
                      </linearGradient>
                      <linearGradient id="g2" x1="0" x2="1">
                        <stop offset="0%" stopColor="#ffbb99" />
                        <stop offset="100%" stopColor="#d1c2ff" />
                      </linearGradient>
                    </defs>

                    {/* ===== Frames / Groupings ===================================== */}
                    {/* /* UI (left) */}
                    <rect x="24" y="70" width="160" height="100" rx="12" fill="url(#g1)" opacity=".16" stroke="currentColor" strokeOpacity=".25"/>
                    <text x="104" y="122" textAnchor="middle" className="fill-current text-[12px]">Dashboard UI</text>

                    {/* /* Subnet: Gateway */}
                    <rect x="210" y="52" width="200" height="140" rx="16" fill="url(#g2)" opacity=".12"
                          stroke="currentColor" strokeOpacity=".35" strokeDasharray="6 6"/>
                    <text x="310" y="72" textAnchor="middle" className="fill-current text-[12px]">Subnet</text>

                    {/* /* SHARED RG: Core Services (Notification/Product/Group/User/Core-Mail) */}
                    <rect x="430" y="20" width="620" height="320" rx="16" fill="url(#g2)" opacity=".10"
                          stroke="currentColor" strokeOpacity=".45" strokeDasharray="8 6"/>
                    <text x="740" y="40" textAnchor="middle" className="fill-current text-[12px] font-medium">Subnet</text>

                    {/* /* SHARED RG: Data */}
                    <rect x="470" y="350" width="220" height="200" rx="16" fill="url(#g2)" opacity=".10"
                          stroke="currentColor" strokeOpacity=".45" strokeDasharray="8 6"/>
                    <text x="580" y="368" textAnchor="middle" className="fill-current text-[12px] font-medium">Shared Resource Group</text>

                    {/* /* Outputs / External */}
                    <rect x="880" y="360" width="170" height="145" rx="16" fill="url(#g2)" opacity=".10"
                          stroke="currentColor" strokeOpacity=".35" strokeDasharray="6 6"/>
                    <text x="965" y="378" textAnchor="middle" className="fill-current text-[12px]">External Outputs</text>

                    {/* ===== Boxes =================================================== */}
                    {/* /* Gateway */}
                    <rect x="240" y="98" width="140" height="70" rx="10" fill="url(#g1)" opacity=".25"/>
                    <text x="310" y="131" textAnchor="middle" className="fill-current text-[12px]">core-gateway (exp)</text>

                    {/* /* Notification: EXP / PRC / SYS */}
                    <rect x="460" y="84"  width="120" height="46" rx="10" fill="url(#g1)" opacity=".25"/>
                    <text x="520" y="110" textAnchor="middle" className="fill-current text-[12px]">notification (exp)</text>
                    <rect x="460" y="136" width="120" height="46" rx="10" fill="url(#g1)" opacity=".25"/>
                    <text x="520" y="162" textAnchor="middle" className="fill-current text-[12px]">notification (prc)</text>
                    <rect x="460" y="188" width="120" height="46" rx="10" fill="url(#g1)" opacity=".25"/>
                    <text x="520" y="214" textAnchor="middle" className="fill-current text-[12px]">notification (sys)</text>

                    {/* /* Product: EXP / PRC / SYS */}
                    <rect x="590" y="84"  width="120" height="46" rx="10" fill="url(#g1)" opacity=".25"/>
                    <text x="650" y="110" textAnchor="middle" className="fill-current text-[12px]">product (exp)</text>
                    <rect x="590" y="136" width="120" height="46" rx="10" fill="url(#g1)" opacity=".25"/>
                    <text x="650" y="162" textAnchor="middle" className="fill-current text-[12px]">product (prc)</text>
                    <rect x="590" y="188" width="120" height="46" rx="10" fill="url(#g1)" opacity=".25"/>
                    <text x="650" y="214" textAnchor="middle" className="fill-current text-[12px]">product (sys)</text>

                    {/* /* Group: EXP / PRC / SYS */}
                    <rect x="720" y="84"  width="120" height="46" rx="10" fill="url(#g1)" opacity=".25"/>
                    <text x="780" y="110" textAnchor="middle" className="fill-current text-[12px]">group (exp)</text>
                    <rect x="720" y="136" width="120" height="46" rx="10" fill="url(#g1)" opacity=".25"/>
                    <text x="780" y="162" textAnchor="middle" className="fill-current text-[12px]">group (prc)</text>
                    <rect x="720" y="188" width="120" height="46" rx="10" fill="url(#g1)" opacity=".25"/>
                    <text x="780" y="214" textAnchor="middle" className="fill-current text-[12px]">group (sys)</text>

                    {/* /* User: EXP / PRC / SYS */}
                    <rect x="850" y="84"  width="120" height="46" rx="10" fill="url(#g1)" opacity=".25"/>
                    <text x="910" y="110" textAnchor="middle" className="fill-current text-[12px]">user (exp)</text>
                    <rect x="850" y="136" width="120" height="46" rx="10" fill="url(#g1)" opacity=".25"/>
                    <text x="910" y="162" textAnchor="middle" className="fill-current text-[12px]">user (prc)</text>
                    <rect x="850" y="188" width="120" height="46" rx="10" fill="url(#g1)" opacity=".25"/>
                    <text x="910" y="214" textAnchor="middle" className="fill-current text-[12px]">user (sys)</text>

                    {/* /* Core Mail (SYS only) */}
                    <rect x="720" y="252" width="250" height="48" rx="10" fill="url(#g1)" opacity=".25"/>
                    <text x="845" y="280" textAnchor="middle" className="fill-current text-[12px]">core-mail (sys)</text>

                    {/* /* Application Insights (in Data RG) */}
                    <rect x="500" y="378" width="160" height="46" rx="10" fill="url(#g1)" opacity=".25"/>
                    <text x="580" y="405" textAnchor="middle" className="fill-current text-[12px]">Application Insights</text>

                    {/* /* App Configuration (in Data RG) */}
                    <rect x="500" y="430" width="160" height="46" rx="10" fill="url(#g1)" opacity=".25"/>
                    <text x="580" y="457" textAnchor="middle" className="fill-current text-[12px]">App Configuration</text>

                    {/* /* Key Vault (in Data RG) */}
                    <rect x="500" y="482" width="160" height="46" rx="10" fill="url(#g1)" opacity=".25"/>
                    <text x="580" y="509" textAnchor="middle" className="fill-current text-[12px]">Key Vault</text>

                    {/* /* External: M365 + Email */}
                    <rect x="900" y="392" width="120" height="44" rx="8" fill="url(#g1)" opacity=".25"/>
                    <text x="960" y="418" textAnchor="middle" className="fill-current text-[12px]">M365</text>
                    <rect x="900" y="444" width="120" height="44" rx="8" fill="url(#g1)" opacity=".25"/>
                    <text x="960" y="470" textAnchor="middle" className="fill-current text-[12px]">Email</text>

                    {/* ===== Arrows ================================================== */}
                    {/* /* UI -> Gateway */}
                    <line x1="184" y1="120" x2="240" y2="130" stroke="currentColor" strokeWidth="2"/>
                    <polygon points="240,130 232,125 232,135" fill="currentColor"/>

                    {/* /* Gateway -> Notification (exp) */}
                    <line x1="380" y1="130" x2="460" y2="107" stroke="currentColor" strokeWidth="2"/>
                    <polygon points="460,107 452,102 452,112" fill="currentColor"/>

                    {/* /* Product (sys) -> Cosmos DB */}
                    <line x1="650" y1="214" x2="580" y2="388" stroke="currentColor" strokeWidth="2"/>
                    <polygon points="580,388 575,382 585,382" fill="currentColor"/>

                    {/* /* Notification (sys) -> Cosmos DB (if applicable) */}
                    <line x1="520" y1="212" x2="560" y2="388" stroke="currentColor" strokeWidth="2" opacity=".7"/>
                    <polygon points="560,388 555,382 565,382" fill="currentColor" opacity=".7"/>

                    {/* /* Group/User (sys) -> Cosmos DB (optional) */}
                    <line x1="780" y1="212" x2="620" y2="388" stroke="currentColor" strokeWidth="2" opacity=".5"/>
                    <line x1="910" y1="212" x2="640" y2="388" stroke="currentColor" strokeWidth="2" opacity=".5"/>

                    {/* /* core-mail (sys) -> M365 + Email (only outbound path) */}
                    <line x1="845" y1="300" x2="960" y2="392" stroke="currentColor" strokeWidth="2"/>
                    <polygon points="960,392 952,388 952,396" fill="currentColor"/>
                    <line x1="845" y1="300" x2="960" y2="444" stroke="currentColor" strokeWidth="2"/>
                    <polygon points="960,444 952,440 952,448" fill="currentColor"/>
                  </svg>    
        </div>

        {/* 3) Role & highlights */}
        <div className="mt-5 grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-semibold">My role</p>
            <ul className="list-disc ml-5 mt-1 space-y-1">
              <li>Owned 12+ .NET 8 microservices end-to-end</li>
              <li>Designed REST APIs with OpenAPI</li>
              <li>Cosmos DB modeling & Service Bus messaging</li>
              <li>Observability (structured logging, envelopes)</li>
              <li>CI/CD with Terraform + Azure Pipelines</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Impact</p>
            <ul className="list-disc ml-5 mt-1 space-y-1">
              <li>Cut content-update effort on dashboard by ~60%</li>
              <li>80%+ unit test coverage (NUnit/Moq)</li>
              <li>Faster root-cause analysis via cross-service traceability</li>
            </ul>
          </div>
        </div>

        {/* 4) Stack */}
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            ".NET 8","Azure Functions","Cosmos DB","Service Bus",
            "Terraform","Azure Pipelines","OpenAPI","Vue.js",
            "NUnit","Moq","Logging"
          ].map((t)=>(
            <span key={t} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 ring-1 ring-gray-200 dark:ring-white/10">{t}</span>
          ))}
        </div>

        {/* 5) NDA note */}
        <p className="mt-4 text-[12px] text-gray-500 dark:text-gray-400">
          *UI and proprietary details omitted to respect company confidentiality. Happy to discuss system design and lessons learned.
        </p>
      </div>
    </div>
  );
}