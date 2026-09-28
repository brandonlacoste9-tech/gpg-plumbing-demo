const I18N = {
en: {
  "nav.services": "Services", "nav.why": "Why us", "nav.reviews": "Reviews", "nav.contact": "Contact",
  "nav.call": "(786) 746-7100",
  "hero.kicker": "Miami, FL · Emergency plumbing · 4.8-star rated",
  "hero.title": "Plumbing problems?<br>We fix them fast.",
  "hero.sub": "Rated 4.8 out of 5 from 41 reviews: G P G Plumbing Service Company handles emergency repairs, drain cleaning, water heaters and pipe work across Miami-Dade County.",
  "hero.cta1": "Call (786) 746-7100", "hero.cta2": "See services",
  "trust.t1t": "Emergency 24/7", "trust.t1d": "Fast dispatch when it matters",
  "trust.t2t": "4.8 ★ rated", "trust.t2d": "41 reviews on Birdeye",
  "trust.t3t": "Miami-Dade", "trust.t3d": "Serving the whole county",
  "stats.hoursNum": "24/7", "stats.hours": "emergency dispatch",
  "stats.makesNum": "4.8 ★", "stats.makes": "41 customer reviews",
  "stats.diagNum": "Res + Comm", "stats.diag": "homes & businesses",
  "stats.quoteNum": "Free", "stats.quote": "estimates",
  "services.kicker": "What we do", "services.title": "Full-service plumbing for Miami",
  "services.s1t": "Emergency plumbing 24/7", "services.s1d": "Burst pipes, major leaks, backups — emergency dispatch when you need it most.",
  "services.s2t": "Drain cleaning", "services.s2d": "Stubborn clogs cleared fast — sinks, tubs, toilets and main lines.",
  "services.s3t": "Water heaters", "services.s3d": "Water heater repair and replacement — hot water restored quickly.",
  "services.s4t": "Pipe repair & repipe", "services.s4d": "Leaking or corroded pipes repaired — whole-home repipes done right.",
  "services.s5t": "Leak detection", "services.s5d": "Pinpoint hidden leaks fast with camera inspection — no tearing up walls blindly.",
  "services.s6t": "Sewer line service", "services.s6d": "Sewer line repair and replacement for homes and businesses across Miami-Dade.",
  "why.kicker": "Why choose us", "why.title": "Miami's 4.8-star plumbers",
  "why.intro": "G P G Plumbing Service Company serves Miami-Dade County with residential and commercial plumbing — emergency repairs, installations, maintenance and renovations. Licensed and insured, with free estimates.",
  "why.l1t": "Emergency dispatch", "why.l1d": "24/7 emergency service when plumbing can't wait.",
  "why.l2t": "4.8-star rated", "why.l2d": "41 published reviews from Miami customers.",
  "why.l3t": "Free estimates", "why.l3d": "Clear pricing before work begins — no surprises.",
  "why.l4t": "Licensed & insured", "why.l4d": "Professional technicians, quality workmanship.",
  "gallery.kicker": "On the job", "gallery.title": "Done right, the first time",
  "gallery.c1": "Repairs done cleanly",
  "gallery.c2": "Water heaters installed right",
  "gallery.c3": "Drains cleared fast",
  "reviews.kicker": "Word on the street", "reviews.title": "Trusted across Miami-Dade",
  "reviews.num": "4.8", "reviews.more": "from 41 reviews on Birdeye",
  "reviews.cta": "See what customers say about us on Birdeye",
  "faq.kicker": "Good to know", "faq.title": "Frequently asked questions",
  "faq.q1": "Do you offer emergency plumbing?",
  "faq.a1": "Yes — we offer 24/7 emergency service with fast dispatch across Miami-Dade County. Call (786) 746-7100 any time.",
  "faq.q2": "Do you work on commercial properties?",
  "faq.a2": "Yes — we handle residential and commercial plumbing, from repairs and installations to maintenance and renovations.",
  "faq.q3": "Do you give free estimates?",
  "faq.a3": "Yes — free estimates, with clear pricing confirmed before any work starts.",
  "faq.q4": "What areas do you serve?",
  "faq.a4": "We're based at 2121 NW 13th St in Miami and serve Miami-Dade County — call (786) 746-7100 to book.",
  "contact.kicker": "Get in touch", "contact.title": "Book your service",
  "contact.addr": "Address", "contact.phone": "Phone", "contact.hours": "Hours",
  "contact.hoursVal": "Mon – Fri: 9:00 AM – 5:00 PM<br>Sun: 9:00 AM – 5:00 PM<br>Sat: closed · Emergency 24/7",
  "contact.cta": "Call now to book",
  "nav.gallery": "Gallery", "nav.faq": "FAQ",
  "footer.tag": "Plumbing contractor · Miami, Florida"
}};

function applyLang() {
  document.documentElement.lang = "en";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const val = I18N.en[key];
    if (val !== undefined) el.innerHTML = val;
  });
  document.title = "G P G Plumbing Service Company — Plumber in Miami, FL | Emergency & Drain Services";
}

const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");
menuBtn.addEventListener("click", () => mainNav.classList.toggle("open"));
mainNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mainNav.classList.remove("open")));

applyLang();
