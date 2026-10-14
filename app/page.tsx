import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSearchConsole from "@/components/search/HeroSearchConsole";

const services = [
  {
    icon: "</>",
    title: "Development",
    description: "Custom web and mobile applications tailored to your business needs.",
    tags: ["Web Apps", "Mobile Apps"],
  },
  {
    icon: "▥",
    title: "Digital Marketing",
    description: "Strategies to grow your brand, increase visibility and drive results.",
    tags: ["SEO", "Analytics"],
  },
  {
    icon: "⬡",
    title: "Cyber Security",
    description: "Proactively protect your business from evolving cyber threats.",
    tags: ["Audits", "Protection"],
  },
  {
    icon: "✳",
    title: "AI-Powered Solutions",
    description: "Intelligent solutions to automate, analyze and scale your business.",
    tags: ["AI", "Automation"],
  },
];

const industries = [
  ["Fintech", "▥"],
  ["Startups", "↗"],
  ["Healthcare", "✚"],
  ["Education", "⌂"],
  ["Retail", "◇"],
  ["Logistics", "⇢"],
];

const process = [
  ["01", "Requirement Gathering", "Understand your goals and needs."],
  ["02", "Planning & Design", "Create strategy and design."],
  ["03", "Development & Testing", "Build, test, and ensure quality."],
  ["04", "Delivery", "Launch and ongoing support."],
];

const benefits = [
  ["◉", "Personalized Development", "Tailored solutions to match your unique business goals."],
  ["♟", "India-Based Trusted Team", "Work with a reliable and skilled team."],
  ["▥", "Cost-effective & Scalable", "High-quality solutions that grow with your business."],
  ["◷", "Timely Delivery & Satisfaction", "On-time delivery with a focus on your success."],
];

export default function HomePage() {
  return (
    <main id="home" className="min-h-screen overflow-hidden bg-[#030914] text-white">
      <Navbar />

      <HeroSearchConsole />

      {/* Services */}
      <section id="services" className="px-5 py-14 sm:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold tracking-[0.25em] text-cyan-300">OUR SERVICES</p>

          <div className="mt-2 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-black sm:text-4xl">Core Services</h2>
              <p className="mt-2 text-sm text-slate-400">
                End-to-end digital solutions to help you build, grow, and stay secure.
              </p>
            </div>
            <a href="#contact" className="rounded-lg border border-blue-400/60 px-4 py-2.5 text-sm hover:bg-blue-500/10">
              View All Services →
            </a>
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="group overflow-hidden rounded-xl border border-blue-400/50 bg-gradient-to-b from-[#102441] to-[#050d19] transition hover:-translate-y-1 hover:border-cyan-300"
              >
                <div className="flex h-32 items-center justify-center bg-[radial-gradient(ellipse_at_center,rgba(0,120,255,0.3),transparent_70%)] sm:h-36">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-cyan-300/30 bg-blue-500/10 text-4xl text-cyan-300 shadow-[0_0_35px_rgba(0,140,255,0.25)] transition group-hover:scale-110">
                    {service.icon}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold">{service.title}</h3>
                  <p className="mt-2 min-h-[60px] text-xs leading-5 text-slate-400">
                    {service.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href="#contact" className="mt-4 inline-flex text-sm font-semibold text-cyan-300">
                    Discuss your project <span className="ml-2">→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-7 grid max-w-5xl gap-5 rounded-2xl border border-blue-400/25 bg-[#071427]/90 p-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["100+", "Projects Delivered"],
              ["50+", "Happy Clients"],
              ["4+", "Industries Served"],
              ["99%", "Client Satisfaction"],
            ].map(([value, label]) => (
              <div key={label} className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600/30 text-xl text-cyan-300">✦</span>
                <div>
                  <p className="text-2xl font-black">{value}</p>
                  <p className="mt-1 text-xs text-slate-400">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-y border-white/10 bg-[#071322] px-5 py-14 sm:px-8 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-bold tracking-[0.25em] text-cyan-300">WHY CHOOSE MENDSEC</p>
            <h2 className="mt-3 max-w-xl text-3xl font-black leading-tight sm:text-4xl">
              Your Partner in a Safer and Smarter Digital Future
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
              We combine technical expertise with a client-first approach to deliver secure and innovative digital solutions.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {benefits.map(([icon, title, description]) => (
              <div key={title} className="rounded-xl border border-white/10 bg-[#0a1a2c] p-4 transition hover:border-cyan-300/40">
                <span className="text-2xl text-cyan-300">{icon}</span>
                <h3 className="mt-3 text-sm font-bold">{title}</h3>
                <p className="mt-2 text-xs leading-5 text-slate-400">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold tracking-[0.25em] text-cyan-300">INDUSTRIES WE SERVE</p>
          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            Industries <span className="text-cyan-300">We Serve</span>
          </h2>
          <p className="mt-3 text-sm text-slate-400">
            Tailored solutions for diverse industries, helping businesses innovate and stay secure.
          </p>

          <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {industries.map(([name, icon]) => (
              <a key={name} href="#contact" className="group rounded-xl border border-blue-400/40 bg-[#081629] p-4 transition hover:border-cyan-300 hover:bg-blue-500/10">
                <span className="text-3xl text-cyan-300">{icon}</span>
                <div className="mt-5 flex items-center justify-between gap-2">
                  <span className="text-sm font-semibold">{name}</span>
                  <span className="text-cyan-300 transition group-hover:translate-x-1">→</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="border-y border-white/10 bg-[#071322] px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold tracking-[0.25em] text-cyan-300">OUR PROCESS</p>
          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            A Simple and Transparent Process
          </h2>
          <p className="mt-3 text-sm text-slate-400">
            We follow a clear and structured approach to turn your ideas into secure and scalable digital solutions.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {process.map(([number, title, description]) => (
              <div key={number} className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#09182a] p-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-cyan-300/50 bg-blue-600/30 text-xl font-black text-cyan-200 shadow-[0_0_20px_rgba(0,120,255,0.25)]">
                  {number}
                </span>
                <div>
                  <h3 className="text-sm font-bold">{title}</h3>
                  <p className="mt-1 text-xs leading-5 text-slate-400">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-5 py-14 sm:px-8 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold tracking-[0.25em] text-cyan-300">GET IN TOUCH</p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Let&apos;s Build Something <span className="text-cyan-300">Secure</span> Together
            </h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
              Have a project in mind? Get in touch and let&apos;s discuss how we can help you.
            </p>
            <a href="mailto:support@mendsec.com" className="mt-6 inline-block text-sm text-cyan-300">
              ✉ support@mendsec.com
            </a>
          </div>

          <form
            action="mailto:support@mendsec.com"
            method="post"
            encType="text/plain"
            className="rounded-2xl border border-blue-400/30 bg-[#081629] p-5 sm:p-7"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                name="Name"
                required
                placeholder="Your Name"
                className="rounded-lg border border-white/10 bg-[#030914] px-4 py-3 text-sm outline-none placeholder:text-slate-500 focus:border-cyan-300 sm:col-span-1"
              />
              <input
                name="Email"
                type="email"
                required
                placeholder="Your Email"
                className="rounded-lg border border-white/10 bg-[#030914] px-4 py-3 text-sm outline-none placeholder:text-slate-500 focus:border-cyan-300 sm:col-span-1"
              />
              <textarea
                name="Message"
                rows={4}
                required
                placeholder="Your Message"
                className="resize-y rounded-lg border border-white/10 bg-[#030914] px-4 py-3 text-sm outline-none placeholder:text-slate-500 focus:border-cyan-300 sm:col-span-2"
              />
            </div>
            <button type="submit" className="mt-4 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-400 px-6 py-3 text-sm font-bold transition hover:scale-105">
              Send Message →
            </button>
            <p className="mt-3 text-xs text-slate-500">
              The form opens your email application. Connect a form API for direct website submissions.
            </p>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}