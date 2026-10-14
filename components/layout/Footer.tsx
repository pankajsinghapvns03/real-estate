export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#020711] px-5 py-10 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <a href="#home" className="text-2xl font-black">
            <span className="text-cyan-300">M</span>endSec
          </a>
          <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
            Secure, high-performance digital experiences for modern businesses.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Explore</h3>
          <div className="mt-4 space-y-3 text-sm text-slate-400">
            <a className="block hover:text-cyan-300" href="#home">Home</a>
            <a className="block hover:text-cyan-300" href="#about">About Us</a>
            <a className="block hover:text-cyan-300" href="#industries">Industries</a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold">Services</h3>
          <div className="mt-4 space-y-3 text-sm text-slate-400">
            <a className="block hover:text-cyan-300" href="#services">Web Development</a>
            <a className="block hover:text-cyan-300" href="#services">Digital Marketing</a>
            <a className="block hover:text-cyan-300" href="#services">Cyber Security</a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold">Get in touch</h3>
          <a
            href="mailto:support@mendsec.com"
            className="mt-4 block break-all text-sm text-slate-400 hover:text-cyan-300"
          >
            support@mendsec.com
          </a>
          <a
            href="#contact"
            className="mt-3 inline-block text-sm text-cyan-300"
          >
            Schedule a Call →
          </a>
        </div>
      </div>

      <div className="mx-auto mt-9 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-5 text-xs text-slate-500 sm:flex-row sm:justify-between">
       <p>© 2026 MendSec. All rights reserved.</p>
        <p>Security · Technology · Innovation</p>
      </div>
    </footer>
  );
}