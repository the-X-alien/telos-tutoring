export interface SEOPage {
  slug: string
  title: string
  metaDescription: string
  h1: string
  category: string
  contentType: "pillar" | "category" | "service" | "blog"
  schemaType: "Article" | "FAQPage" | "HowTo"
  sections: Array<{ heading: string; body: string }>
  faqs?: Array<{ question: string; answer: string }>
  relatedSlugs: string[]
}

export const CATEGORIES = [
  { slug: "musd-broad-administrative", name: "MUSD Broad & Administrative", description: "General tutoring and academic support across the Milpitas Unified School District." },
  { slug: "musd-math-acceleration-placement", name: "MUSD Math Acceleration & Placement", description: "Math acceleration programs, MDTP testing, placement rubrics, and pathway planning for MUSD students." },
  { slug: "musd-elementary-schools", name: "MUSD Elementary Schools", description: "Tutoring and enrichment for all MUSD elementary schools." },
  { slug: "musd-middle-schools", name: "MUSD Middle Schools", description: "Academic support for Rancho Milpitas Middle School and Russell Middle School students." },
  { slug: "milpitas-high-school-core", name: "Milpitas High School Core Academic Tutoring", description: "Core subject tutoring for Milpitas High School including AP, Honors, and standard courses." },
  { slug: "milpitas-high-school-special-programs", name: "Milpitas High School Special Programs", description: "Support for MHS special programs including MATHeasy, AVID, PBL, and peer tutoring." },
  { slug: "musd-virtual-online-learning", name: "MUSD Virtual & Online Learning", description: "Virtual tutoring and online learning support for MUSD students." },
  { slug: "local-area-tutoring-competition", name: "Local Area Tutoring & Competition", description: "Local tutoring centers and academic competition preparation in Milpitas." },
  { slug: "general-musd-tutoring", name: "General MUSD Tutoring Services", description: "General tutoring services available to all MUSD students across grade levels and subjects." },
  { slug: "musd-alumni-college-prep-career", name: "MUSD Alumni, College Prep & Career Pathways", description: "College preparation, SAT/ACT prep, career pathway guidance, and alumni support." },
]

const PILLAR_SLUG = "musd-math-acceleration-tutoring-milpitas"

function p(page: SEOPage): SEOPage {
  return page
}

function stub(slug: string, topic: string, cat: string): SEOPage {
  const t = topic.toLowerCase()
  return {
    slug,
    title: topic + " - Free Resources & Tutoring in Milpitas, CA",
    metaDescription: `Looking for ${t} in Milpitas? Telos Tutoring offers free peer tutoring for MUSD students. Get personalized help from high-achieving high school students.`,
    h1: topic + " - Free Tutoring & Resources in Milpitas, CA",
    category: cat,
    contentType: "service",
    schemaType: "FAQPage",
    sections: [
      {
        heading: "Free " + topic + " for MUSD Students",
        body: `Finding quality ${t} in Milpitas doesn't have to be expensive or stressful. Telos Tutoring provides completely free, peer-to-peer academic support for students across the Milpitas Unified School District. Whether you need help understanding core concepts, completing homework assignments, or preparing for upcoming assessments, our trained high school tutors are here to guide you every step of the way. We focus on building genuine understanding and confidence. Sessions are available both online via Zoom and in person at the Milpitas Library, making it easy to fit tutoring into your family's schedule.`,
      },
      {
        heading: "How Telos Tutoring Helps with " + topic,
        body: `Our approach to ${t} is rooted in the belief that the best person to explain a concept is someone who recently mastered it themselves. Every Telos tutor is a high-achieving high school student who has successfully navigated MUSD's academic programs and knows exactly where students typically get stuck. We tailor each session to your student's unique needs. For more detailed guidance, check out our comprehensive guide to <a href="/guide/${PILLAR_SLUG}" class="text-primary hover:underline">MUSD math acceleration and tutoring</a>.`,
      },
    ],
    faqs: [
      {
        question: "Is " + topic + " available for all MUSD grade levels?",
        answer: `Yes! Telos Tutoring serves students from kindergarten through 8th grade across the Milpitas Unified School District. We also support high school students in select subjects. Our tutors are matched based on their expertise in the specific subject and grade level your student needs help with.`,
      },
    ],
    relatedSlugs: [PILLAR_SLUG],
  }
}

export const ALL_PAGES: Record<string, SEOPage> = {
  // ── PILLAR PAGE ──────────────────────────────────────────
  [PILLAR_SLUG]: p({
    slug: PILLAR_SLUG,
    title: "MUSD Math Acceleration & Free Tutoring in Milpitas - 2026 Complete Guide",
    metaDescription: "Complete guide to MUSD math acceleration programs, MDTP testing, placement rubrics, and free peer tutoring at Milpitas Library. Everything K-8 parents need.",
    h1: "MUSD Math Acceleration & Free Tutoring in Milpitas - 2026 Complete Guide",
    category: "musd-math-acceleration-placement",
    contentType: "pillar",
    schemaType: "Article",
    sections: [
      {
        heading: "Quick Summary",
        body: `<div class="grid sm:grid-cols-2 gap-4 not-prose">
<div class="bg-green-900/20 border border-green-500/30 rounded-xl p-5">
<p class="text-green-400 font-bold text-sm uppercase tracking-wider mb-2">Pros</p>
<ul class="text-muted-foreground text-sm space-y-1.5">
<li>All tutoring is 100% free</li>
<li>Tutors are high-achieving MHS students</li>
<li>Covers K-8 across all MUSD schools</li>
<li>Online and in-person at Milpitas Library</li>
<li>Math acceleration & MDTP prep included</li>
<li>Founded by MHS students who know the system</li>
</ul>
</div>
<div class="bg-red-900/20 border border-red-500/30 rounded-xl p-5">
<p class="text-red-400 font-bold text-sm uppercase tracking-wider mb-2">Cons</p>
<ul class="text-muted-foreground text-sm space-y-1.5">
<li>Limited to K-8 (MHS select subjects only)</li>
<li>Availability depends on tutor schedules</li>
<li>New program - growing tutor base</li>
<li>In-person limited to Milpitas Library</li>
</ul>
</div>
</div>`,
      },
      {
        heading: "Why This Guide Is More Up-to-Date Than Other Resources",
        body: `Most information about MUSD's math acceleration programs is scattered across district PDFs, outdated school websites, and word-of-mouth from other parents. Many third-party tutoring sites still reference pre-2024 placement rubrics that no longer apply. This guide is written by current Milpitas High School students who have personally navigated MUSD's math acceleration pathway and now tutor younger students through Telos Tutoring. We update this content regularly as MUSD releases new policies, test dates, and program changes.`,
      },
      {
        heading: "What Is MUSD Math Acceleration?",
        body: `MUSD's math acceleration program allows students to advance through mathematics coursework faster than the standard grade-level sequence. Starting in middle school (6th-8th grade), students can test into higher-level math classes through the MDTP (Mathematics Diagnostic Testing Project) exam. Successfully accelerating in middle school opens pathways to AP Calculus AB, AP Calculus BC, and AP Statistics by junior or senior year at Milpitas High School. The acceleration decision is based on multiple factors: MDTP scores, teacher recommendations, classroom performance, and sometimes a portfolio review. Each spring, MUSD publishes the official math placement rubric that determines which course a student qualifies for.`,
      },
      {
        heading: "MDTP Test Prep & Practice Resources",
        body: `The MDTP (Mathematics Diagnostic Testing Project) is the primary assessment used by MUSD to determine math acceleration eligibility. Developed by UC Berkeley and California State University, the MDTP measures mathematical readiness rather than grade-level completion. Students in 5th through 8th grade typically take the MDTP in the spring to qualify for accelerated math placement the following school year. Preparing for the MDTP is critical because strong performance can allow a student to skip an entire grade level of math. Telos Tutoring offers <a href="/guide/mdtp-practice-test-milpitas" class="text-primary hover:underline">free MDTP practice resources</a> and one-on-one tutoring focused specifically on the topics and problem formats that appear on the MDTP. We recommend starting preparation 4-6 weeks before the test date.`,
      },
      {
        heading: "Understanding the MUSD Math Placement Rubric",
        body: `Each year, MUSD releases a math placement rubric that outlines exactly what students need to qualify for accelerated courses. The rubric typically weights MDTP scores at 40-50%, teacher recommendations at 25-30%, classroom grades at 15-20%, and sometimes includes a problem-solving assessment or portfolio component. The rubric changes slightly each year, which is why relying on outdated information can be misleading. We maintain an up-to-date breakdown of the <a href="/guide/math-placement-rubric-milpitas-unified" class="text-primary hover:underline">MUSD math placement rubric</a> so parents know exactly what targets their student needs to hit.`,
      },
      {
        heading: "The MATHeasy Program & Peer Tutoring at MHS",
        body: `Milpitas High School runs the MATHeasy program, a peer tutoring initiative where MHS students provide free math support to their peers during lunch and after school. MATHeasy is an excellent resource for MHS students struggling with specific concepts or needing homework help. Telos Tutoring complements MATHeasy by extending free peer tutoring to elementary and middle school students across the district, as well as providing one-on-one sessions for MHS students in select subjects.`,
      },
      {
        heading: "Free Peer Tutoring at Milpitas Library",
        body: `The Milpitas Library (located at 160 N Main Street) is our primary in-person tutoring venue. We offer free, one-on-one and small group tutoring sessions at the library on weekday afternoons and weekends. The library provides a quiet, productive environment with access to research materials and computers. <a href="/guide/free-peer-tutoring-milpitas-library" class="text-primary hover:underline">Learn more about free tutoring at Milpitas Library</a> including current schedules and how to book a session.`,
      },
      {
        heading: "Elementary & Middle School Feeder Pattern Support",
        body: `MUSD's elementary schools (Burnett, Curtner, Dilworth, Faria, Gomez, Mabel Mattos, McVey, Merryhill, Meyer, Pearl Zanker, Pomeroy, Randall, Sinnott, Spangler, Weller, Zanker) each prepare students for middle school math at either Rancho Milpitas Middle School or Russell Middle School. Early math enrichment in elementary grades is crucial for students who want to accelerate in middle school. We provide targeted support at every feeder school, including <a href="/guide/rancho-milpitas-middle-school-math-tutor" class="text-primary hover:underline">Rancho Middle School math tutoring</a> and <a href="/guide/russell-middle-school-homework-assistance" class="text-primary hover:underline">Russell Middle School homework assistance</a>.`,
      },
      {
        heading: "AP & Honors Course Tutoring at Milpitas High School",
        body: `For MHS students enrolled in advanced courses, Telos Tutoring offers peer support in AP Calculus AB, AP Calculus BC, AP Statistics, Honors Pre-Calculus, Honors Algebra 2, and more. Our tutors have recently aced these same courses and understand the specific expectations of MHS teachers. We also provide SAT/ACT prep support for college-bound juniors and seniors.`,
      },
      {
        heading: "Comparison: Telos Tutoring vs Mathnasium Milpitas",
        body: `Mathnasium Milpitas (located at 1287 E Calaveras Blvd) charges approximately $200-400/month for their math tutoring programs. While Mathnasium provides structured curriculum and professional instructors, Telos Tutoring offers a fundamentally different value proposition: completely free, peer-to-peer support from MHS students who personally understand the MUSD curriculum. Our tutors are not professional instructors - they are high-achieving students who recently mastered the same material your child is learning. For families seeking affordable academic support, <a href="/guide/mathnasium-milpitas-vs-peer-tutoring" class="text-primary hover:underline">our comparison guide</a> breaks down the differences in cost, approach, and outcomes.`,
      },
      {
        heading: "Comparison Table",
        body: `<div class="overflow-x-auto not-prose">
<table class="w-full text-sm border-collapse">
<thead>
<tr class="bg-white/10">
<th class="p-3 text-left text-foreground font-medium">Feature</th>
<th class="p-3 text-left text-primary font-medium">Telos Tutoring</th>
<th class="p-3 text-left text-muted-foreground font-medium">Mathnasium Milpitas</th>
<th class="p-3 text-left text-muted-foreground font-medium">Private Tutors</th>
</tr>
</thead>
<tbody class="divide-y divide-white/10">
<tr><td class="p-3 text-muted-foreground">Cost</td><td class="p-3 text-green-400 font-medium">Free</td><td class="p-3 text-muted-foreground">$200-400/mo</td><td class="p-3 text-muted-foreground">$50-100/hr</td></tr>
<tr><td class="p-3 text-muted-foreground">Grade Range</td><td class="p-3 text-foreground">K-8 (select MHS)</td><td class="p-3 text-muted-foreground">K-12</td><td class="p-3 text-muted-foreground">K-12</td></tr>
<tr><td class="p-3 text-muted-foreground">Location</td><td class="p-3 text-foreground">Milpitas Library + Online</td><td class="p-3 text-muted-foreground">E Calaveras Blvd</td><td class="p-3 text-muted-foreground">Varies</td></tr>
<tr><td class="p-3 text-muted-foreground">Tutors</td><td class="p-3 text-foreground">MHS Peer Students</td><td class="p-3 text-muted-foreground">Professional Instructors</td><td class="p-3 text-muted-foreground">Varies</td></tr>
<tr><td class="p-3 text-muted-foreground">MUSD Curriculum Focus</td><td class="p-3 text-green-400 font-medium">Deep</td><td class="p-3 text-muted-foreground">General</td><td class="p-3 text-muted-foreground">Varies</td></tr>
<tr><td class="p-3 text-muted-foreground">MDTP Prep</td><td class="p-3 text-green-400 font-medium">Yes</td><td class="p-3 text-muted-foreground">Limited</td><td class="p-3 text-muted-foreground">Varies</td></tr>
<tr><td class="p-3 text-muted-foreground">Math Acceleration Focus</td><td class="p-3 text-green-400 font-medium">Yes</td><td class="p-3 text-muted-foreground">General</td><td class="p-3 text-muted-foreground">Varies</td></tr>
</tbody>
</table>
</div>`,
      },
      {
        heading: "Frequently Asked Questions",
        body: "",
      },
    ],
    faqs: [
      { question: "What is MUSD math acceleration?", answer: "MUSD math acceleration allows students to advance through math coursework faster than the standard sequence, typically starting in 6th-8th grade. Students qualify through MDTP scores, teacher recommendations, and classroom performance." },
      { question: "When are MDTP tests administered in MUSD?", answer: "MDTP tests are typically administered in the spring (March-May) each year. Specific dates are published by MUSD on the district website and vary by grade level." },
      { question: "Can my child skip a math grade in MUSD?", answer: "Yes, if they perform well enough on the MDTP and meet the criteria in the MUSD math placement rubric. Some students skip one full year of math, while others skip directly into advanced courses." },
      { question: "How do I prepare my child for the MDTP?", answer: "Focus on foundational concepts from their current grade level, then introduce topics from the next grade. Practice tests, Khan Academy, and one-on-one tutoring with Telos can help identify and fill gaps." },
      { question: "Is Telos Tutoring really free?", answer: "Yes, 100% free. We are a volunteer-run nonprofit founded by MHS students. No hidden fees, no contracts, no upsells." },
      { question: "Where do tutoring sessions take place?", answer: "In person at the Milpitas Library (160 N Main Street) or online via Zoom. We match each student with a consistent tutor." },
      { question: "What grades does Telos Tutoring serve?", answer: "Kindergarten through 8th grade for core subjects, plus select Milpitas High School courses including AP Calculus, AP Statistics, and Honors math." },
      { question: "How do I sign up?", answer: "Fill out our registration form at forms.gle/ePeNu2Pzx2zfa6Ur7. We'll match you with a tutor within 48 hours." },
      { question: "What subjects do you offer?", answer: "Math (our primary focus including acceleration and MDTP prep), Science, English, and History." },
      { question: "Who are the tutors?", answer: "High-achieving MHS students who have successfully navigated MUSD's academic programs. All tutors go through a screening process." },
      { question: "What is the MATHeasy program?", answer: "MATHeasy is MHS's peer tutoring program where MHS students provide free math support during lunch and after school." },
      { question: "How does math acceleration work at Rancho Middle School?", answer: "Rancho students typically take the MDTP in 6th or 7th grade. Strong scores can qualify them for accelerated math pathways leading to AP Calculus by 11th or 12th grade." },
      { question: "How does math acceleration work at Russell Middle School?", answer: "Similar to Rancho, Russell students take the MDTP in spring. The placement rubric applies uniformly across all MUSD middle schools." },
      { question: "Does Mathnasium prepare students for the MDTP?", answer: "Mathnasium offers general math tutoring but does not specifically focus on the MUSD MDTP or MUSD's placement rubric." },
      { question: "Can high school students get free tutoring too?", answer: "Yes, in select subjects including AP Calculus AB, AP Calculus BC, AP Statistics, Honors Pre-Calculus, and SAT/ACT prep." },
      { question: "What if my child has an IEP or 504 plan?", answer: "Telos Tutoring works with students of all learning needs. Our tutors adapt to each student's pace and learning style. Free tutoring for students with IEPs and 504 plans is available." },
      { question: "Do you offer summer math acceleration programs?", answer: "Yes! We offer summer math tutoring focused on preparing for the next grade level and MDTP prep for students planning to test in the fall." },
      { question: "How is Telos Tutoring different from other free tutoring programs?", answer: "We are founded by MHS students who understand MUSD's specific programs, curriculum, and policies. Our tutors are peers who recently learned the same material." },
      { question: "What if I can't find a time that works?", answer: "We work with your schedule. Our tutors are available weekday afternoons, evenings, and weekends. Online sessions offer the most flexibility." },
      { question: "How do I know if my child qualifies for math acceleration?", answer: "Review the current MUSD math placement rubric, talk to your child's teacher, and consider MDTP practice testing. We can help assess readiness through our free diagnostic sessions." },
    ],
    relatedSlugs: [
      "musd-math-acceleration-test-dates-2026",
      "math-placement-rubric-milpitas-unified",
      "how-to-skip-a-math-grade-milpitas-schools",
      "mdtp-practice-test-milpitas",
      "free-peer-tutoring-milpitas-library",
      "mathnasium-milpitas-vs-peer-tutoring",
    ],
  }),

  // ── PRIORITY SERVICE PAGES ────────────────────────────────
  ["musd-math-acceleration-test-dates-2026"]: p({
    slug: "musd-math-acceleration-test-dates-2026",
    title: "MUSD Math Acceleration Test Dates 2026 - Full Schedule",
    metaDescription: "Complete MUSD math acceleration test dates for 2026. MDTP testing schedule, registration deadlines, and prep resources for Milpitas Unified students.",
    h1: "MUSD Math Acceleration Test Dates 2026 - Full Schedule & Resources",
    category: "musd-math-acceleration-placement",
    contentType: "service",
    schemaType: "Article",
    sections: [
      { heading: "2026 MUSD Math Acceleration Testing Schedule", body: "MUSD typically administers MDTP tests in the spring semester, with testing windows opening in March and closing by mid-May. Exact dates are published by the MUSD Educational Services department approximately 60 days before testing begins. Students in grades 5-8 who wish to qualify for accelerated math placement must take the MDTP during this window. We recommend checking the MUSD website in January 2026 for the official schedule. To stay updated, sign up for our free tutoring program and we'll send you a reminder when dates are announced." },
      { heading: "Key Deadlines for MUSD Math Acceleration", body: "Based on previous years' patterns, expect these approximate timelines: January-February: MUSD publishes placement rubric and testing schedule. March-April: MDTP testing window opens for middle school students. April-May: Elementary MDTP testing. May-June: Results released and placement decisions communicated. June-August: <a href='/guide/musd-summer-math-acceleration' class='text-primary hover:underline'>Summer math acceleration programs</a> and prep. Missing a deadline can delay acceleration by a full year, so mark these on your calendar." },
      { heading: "How Telos Tutoring Helps with MDTP Prep", body: "Our peer tutors specialize in MDTP preparation. We assess your student's current level, identify gaps, and create a targeted study plan. Sessions include practice tests, concept review, and test-taking strategies. <a href='/guide/how-to-prepare-for-mdtp-math-test' class='text-primary hover:underline'>Learn how to prepare for the MDTP math test</a> with our step-by-step guide." },
    ],
    faqs: [
      { question: "What happens if my child misses the MDTP testing window?", answer: "Contact your child's teacher and school administrator immediately. In some cases, MUSD may offer a make-up testing date, but it is not guaranteed. Missing the window could delay acceleration by one year." },
      { question: "Can students take the MDTP more than once?", answer: "MUSD's policy on retakes varies by year. Some years allow one retake within the testing window; others do not. Check the current year's placement rubric for details." },
    ],
    relatedSlugs: [PILLAR_SLUG, "mdtp-practice-test-milpitas", "how-to-prepare-for-mdtp-math-test"],
  }),

  ["math-placement-rubric-milpitas-unified"]: p({
    slug: "math-placement-rubric-milpitas-unified",
    title: "MUSD Math Placement Rubric 2026 - How Math Acceleration Works",
    metaDescription: "Understand the MUSD math placement rubric for 2026. MDTP score requirements, teacher recommendations, and how to qualify for accelerated math.",
    h1: "MUSD Math Placement Rubric 2026 - Complete Breakdown",
    category: "musd-math-acceleration-placement",
    contentType: "service",
    schemaType: "Article",
    sections: [
      { heading: "How the MUSD Math Placement Rubric Works", body: "Each year, MUSD publishes a rubric that determines which math course a student qualifies for. The rubric typically evaluates four components: MDTP scores (40-50%), teacher recommendation (25-30%), classroom grades (15-20%), and additional assessments. Each component earns points, and the total determines placement. Students scoring in the highest band qualify for acceleration (e.g., 7th grader taking Algebra 1). Middle band places them on-grade-level. Lower band may require intervention." },
      { heading: "Key Factors in the Placement Decision", body: "MDTP performance is the single most important factor. The MDTP measures conceptual understanding and problem-solving ability rather than grade-level completion. Teacher recommendations factor in classroom participation, homework completion, and mathematical reasoning. Classroom grades reflect consistent performance. Some years include a problem-solving assessment or portfolio of work samples." },
      { heading: "How to Maximize Your Child's Placement", body: "Start preparing early. <a href='/guide/mdtp-practice-test-milpitas' class='text-primary hover:underline'>Take MDTP practice tests</a> to identify weak areas. Communicate with your child's teacher about the acceleration pathway. Ensure classroom performance is strong. Consider free peer tutoring through Telos to address gaps and build confidence before testing." },
    ],
    faqs: [
      { question: "Where can I find the current MUSD math placement rubric?", answer: "The official rubric is published on the MUSD website under Educational Services or Curriculum & Instruction. It is typically released in January or February each year." },
      { question: "Has the MUSD placement rubric changed recently?", answer: "MUSD periodically updates the rubric. Some changes include adjusting the weight of MDTP scores versus teacher recommendations. Always check the current year's rubric rather than relying on prior years." },
    ],
    relatedSlugs: [PILLAR_SLUG, "how-to-skip-a-math-grade-milpitas-schools"],
  }),

  ["how-to-skip-a-math-grade-milpitas-schools"]: p({
    slug: "how-to-skip-a-math-grade-milpitas-schools",
    title: "How to Skip a Math Grade in Milpitas Schools - Step-by-Step",
    metaDescription: "Step-by-step guide to skipping a math grade in MUSD. MDTP requirements, teacher recommendations, and how Telos Tutoring can help your child accelerate.",
    h1: "How to Skip a Math Grade in Milpitas Schools - Step-by-Step Guide",
    category: "musd-math-acceleration-placement",
    contentType: "service",
    schemaType: "HowTo",
    sections: [
      { heading: "Step 1: Understand the Requirements", body: "Before attempting to skip a math grade, understand what MUSD requires. Review the current math placement rubric, which outlines MDTP score targets, teacher recommendation criteria, and classroom performance expectations. <a href='/guide/math-placement-rubric-milpitas-unified' class='text-primary hover:underline'>Review the MUSD math placement rubric</a> for detailed requirements." },
      { heading: "Step 2: Assess Current Readiness", body: "Your child needs to demonstrate mastery of their current grade's math content plus readiness for the next level. Use MDTP practice tests, Khan Academy course challenges, or a diagnostic session with Telos Tutoring to identify strengths and gaps." },
      { heading: "Step 3: Prepare for the MDTP", body: "The MDTP is the primary assessment for acceleration. Prepare 4-6 weeks before the test. Focus on problem areas, practice timed tests, and build test-taking confidence. Our free peer tutors can create a personalized prep plan." },
      { heading: "Step 4: Communicate with Teachers", body: "Schedule a meeting with your child's math teacher to discuss the acceleration goal. The teacher's recommendation is a significant factor in the rubric. Share your prep plan and ask for additional practice resources or guidance." },
      { heading: "Step 5: Take the MDTP and Await Results", body: "The MDTP is administered at school during the testing window. Results are typically available within 4-6 weeks. Placement decisions are communicated by the school. If your child qualifies, they will be enrolled in the accelerated course for the following year." },
    ],
    faqs: [
      { question: "What is the youngest grade that can skip math in MUSD?", answer: "Most acceleration happens in middle school (6th-8th grade), but some elementary students with exceptional performance may qualify for advanced placement." },
      { question: "What if my child qualifies but struggles in the accelerated class?", answer: "MUSD typically allows students to move back to the standard class if the accelerated placement is not working. Telos Tutoring can provide ongoing support to help them succeed." },
    ],
    relatedSlugs: [PILLAR_SLUG, "mdtp-practice-test-milpitas", "musd-math-acceleration-test-dates-2026"],
  }),

  ["mdtp-practice-test-milpitas"]: p({
    slug: "mdtp-practice-test-milpitas",
    title: "MDTP Practice Test Milpitas - Free Practice Resources",
    metaDescription: "Free MDTP practice tests for Milpitas students. Prepare for the MUSD math acceleration test with sample questions, study guides, and one-on-one tutoring.",
    h1: "MDTP Practice Test Milpitas - Free Practice Resources",
    category: "musd-math-acceleration-placement",
    contentType: "service",
    schemaType: "HowTo",
    sections: [
      { heading: "Free MDTP Practice Resources", body: "The MDTP (Mathematics Diagnostic Testing Project) is the key to math acceleration in MUSD. We offer free MDTP practice materials including sample questions, topic breakdowns, and timed practice tests. The MDTP covers: arithmetic, algebra readiness, problem-solving, and mathematical reasoning. Practice tests help students become familiar with the format and identify areas needing improvement." },
      { heading: "How Our Tutors Help with MDTP Prep", body: "Our peer tutors have taken and passed the MDTP themselves. They know exactly what the test covers, common pitfalls, and effective strategies. Tutoring sessions focus on weak areas, timed practice, and building confidence. We recommend 4-6 weekly sessions before the test date." },
    ],
    faqs: [
      { question: "Where can I find official MDTP practice tests?", answer: "The MDTP website (mdtp.ucsd.edu) offers free sample tests. We also provide curated practice materials tailored to MUSD's specific MDTP version." },
      { question: "How long is the MDTP test?", answer: "The MDTP is typically 45-60 minutes, consisting of multiple-choice and free-response questions. Time management is an important part of preparation." },
    ],
    relatedSlugs: [PILLAR_SLUG, "how-to-prepare-for-mdtp-math-test", "how-to-skip-a-math-grade-milpitas-schools"],
  }),

  ["free-peer-tutoring-milpitas-library"]: p({
    slug: "free-peer-tutoring-milpitas-library",
    title: "Free Peer Tutoring at Milpitas Library - Telos Tutoring",
    metaDescription: "Free peer tutoring at Milpitas Library for K-8 students. Online and in-person tutoring by Milpitas High School students. Math, science, English, and history.",
    h1: "Free Peer Tutoring at Milpitas Library - Sign Up Today",
    category: "musd-broad-administrative",
    contentType: "service",
    schemaType: "FAQPage",
    sections: [
      { heading: "Tutoring at Milpitas Library", body: "The Milpitas Library at 160 N Main Street hosts our free in-person tutoring sessions. We offer one-on-one and small group tutoring in a dedicated study area. The library provides a quiet, structured environment perfect for focused learning. Sessions are available on weekday afternoons (3:30-6:30 PM) and Saturday mornings (10 AM-1 PM)." },
      { heading: "What to Expect at Your First Session", body: "Your student meets their dedicated peer tutor in the library's study area. The tutor assesses their current level, discusses goals, and creates a personalized plan. Sessions are 45-60 minutes. Parents are welcome to observe or wait in the library. Bring any homework, tests, or materials your student is currently working on." },
      { heading: "Online Tutoring Option", body: "If you can't make it to the library, we also offer tutoring via Zoom. Online sessions are flexible and can be scheduled at times that work for your family. All you need is a reliable internet connection and a quiet space." },
    ],
    faqs: [
      { question: "Do I need a library card?", answer: "No. Our tutoring program is independent of the library's services. While we recommend getting a library card for access to resources, it is not required for tutoring." },
      { question: "How do I book a session at the library?", answer: "Fill out our registration form at forms.gle/ePeNu2Pzx2zfa6Ur7. We'll match you with a tutor and confirm your session time and location." },
    ],
    relatedSlugs: [PILLAR_SLUG, "musd-after-school-tutoring-free"],
  }),

  ["rancho-milpitas-middle-school-math-tutor"]: p({
    slug: "rancho-milpitas-middle-school-math-tutor",
    title: "Rancho Milpitas Middle School Math Tutor - Free Peer Tutoring",
    metaDescription: "Free math tutoring for Rancho Milpitas Middle School students. MDTP prep, algebra, geometry, and pre-algebra support from MHS peer tutors.",
    h1: "Rancho Milpitas Middle School Math Tutor - Free & In-Person",
    category: "musd-middle-schools",
    contentType: "service",
    schemaType: "FAQPage",
    sections: [
      { heading: "Math Tutoring for Rancho Middle School Students", body: "Rancho Milpitas Middle School serves as a key feeder school for Milpitas High School. Our free tutoring program focuses on helping Rancho students excel in pre-algebra, algebra, and geometry while preparing for MDTP testing. Our tutors are MHS students who successfully navigated Rancho's math program and understand the specific curriculum and expectations." },
      { heading: "MDTP Prep for Rancho Students", body: "Rancho students typically take the MDTP in 6th or 7th grade. Strong performance can qualify them for accelerated math pathways. We provide targeted <a href='/guide/mdtp-practice-test-milpitas' class='text-primary hover:underline'>MDTP practice tests and prep</a> specifically for Rancho students." },
    ],
    faqs: [
      { question: "What math levels do you support for Rancho students?", answer: "Pre-algebra, Algebra 1, Geometry, and math enrichment for students preparing for acceleration or math competitions." },
    ],
    relatedSlugs: [PILLAR_SLUG, "russell-middle-school-homework-assistance", "musd-middle-school-math-competition-prep"],
  }),

  ["russell-middle-school-homework-assistance"]: p({
    slug: "russell-middle-school-homework-assistance",
    title: "Russell Middle School Homework Assistance - Free Tutoring",
    metaDescription: "Free homework assistance and tutoring for Russell Middle School students in Milpitas. Math, science, English, and history support from MHS peer tutors.",
    h1: "Russell Middle School Homework Assistance - Free Tutoring",
    category: "musd-middle-schools",
    contentType: "service",
    schemaType: "FAQPage",
    sections: [
      { heading: "Homework Help for Russell Middle School", body: "Russell Middle School students can get free homework assistance across all core subjects. Our peer tutors help with math assignments, science projects, English essays, and history research. We focus on building understanding rather than just completing assignments." },
      { heading: "Preparing for Math Acceleration at Russell", body: "Like Rancho, Russell students take the MDTP in spring. We help Russell students prepare for the test through practice problems, concept review, and test-taking strategies." },
    ],
    faqs: [
      { question: "Can you help with science fair projects?", answer: "Yes! Our tutors can guide students through the scientific method, experimental design, data analysis, and presentation preparation." },
    ],
    relatedSlugs: [PILLAR_SLUG, "rancho-milpitas-middle-school-math-tutor"],
  }),

  ["musd-middle-school-math-competition-prep"]: p({
    slug: "musd-middle-school-math-competition-prep",
    title: "MUSD Middle School Math Competition Prep - Free Coaching",
    metaDescription: "Free math competition preparation for MUSD middle school students. AMC 8, MATHCOUNTS, and MUSD math competition coaching from MHS peer tutors.",
    h1: "MUSD Middle School Math Competition Prep - Free Coaching",
    category: "musd-middle-schools",
    contentType: "service",
    schemaType: "Article",
    sections: [
      { heading: "Competition Math Coaching", body: "MUSD middle school students have opportunities to participate in AMC 8, MATHCOUNTS, and MUSD math competitions. Our peer tutors provide free coaching for these competitions, covering advanced problem-solving techniques, contest strategies, and practice sessions." },
      { heading: "How Competition Prep Supports Acceleration", body: "Competition math naturally builds the advanced problem-solving skills measured by the MDTP. Students who prepare for math competitions often perform better on acceleration assessments, creating a virtuous cycle of enrichment." },
    ],
    faqs: [
      { question: "Do I need to be in advanced math to join competition prep?", answer: "Not necessarily. Competition math introduces different problem-solving approaches that benefit students at all levels. We assess each student and recommend the appropriate competition level." },
    ],
    relatedSlugs: [PILLAR_SLUG, "rancho-milpitas-middle-school-math-tutor", "russell-middle-school-homework-assistance"],
  }),

  ["milpitas-high-school-ap-calculus-ab-tutor"]: p({
    slug: "milpitas-high-school-ap-calculus-ab-tutor",
    title: "Milpitas High School AP Calculus AB Tutor - Free Peer Tutoring",
    metaDescription: "Free AP Calculus AB tutoring for Milpitas High School students. One-on-one peer tutoring from MHS students who scored 4+ on the AP exam.",
    h1: "Milpitas High School AP Calculus AB Tutor - Free Peer Support",
    category: "milpitas-high-school-core",
    contentType: "service",
    schemaType: "FAQPage",
    sections: [
      { heading: "AP Calculus AB Help at MHS", body: "AP Calculus AB is one of the most challenging courses at Milpitas High School. Our peer tutors have successfully completed the course and scored 4 or 5 on the AP exam. We offer free one-on-one tutoring covering limits, derivatives, integrals, and the fundamental theorem of calculus." },
      { heading: "Exam Prep for AP Calculus AB", body: "AP exams require strategic preparation. We help with practice exams, free-response question strategies, multiple-choice techniques, and time management. Sessions are available online or in person." },
    ],
    faqs: [
      { question: "Do you also offer AP Calculus BC tutoring?", answer: "Yes! We have tutors available for AP Calculus BC as well, covering the additional topics of parametric equations, polar coordinates, and infinite series." },
    ],
    relatedSlugs: [PILLAR_SLUG, "milpitas-high-school-honors-pre-calculus-tutor", "milpitas-high-school-ap-statistics-tutor"],
  }),

  ["milpitas-high-school-honors-pre-calculus-tutor"]: p({
    slug: "milpitas-high-school-honors-pre-calculus-tutor",
    title: "Milpitas High School Honors Pre-Calculus Tutor - Free",
    metaDescription: "Free Honors Pre-Calculus tutoring for Milpitas High School students. Prepare for AP Calculus with peer tutors who excelled in the course.",
    h1: "Milpitas High School Honors Pre-Calculus Tutor - Free Peer Program",
    category: "milpitas-high-school-core",
    contentType: "service",
    schemaType: "FAQPage",
    sections: [
      { heading: "Honors Pre-Calculus Support", body: "Honors Pre-Calculus at MHS is a rigorous course that prepares students for AP Calculus. Our tutors help with functions, trigonometry, conic sections, matrices, and vectors. We focus on building the strong foundation needed for success in AP Calculus." },
      { heading: "Transitioning from Algebra 2 to Pre-Calculus", body: "Many students find the jump from Algebra 2 to Pre-Calculus challenging. We bridge this gap by reinforcing Algebra 2 concepts while introducing new Pre-Calculus material at a manageable pace." },
    ],
    faqs: [
      { question: "Is Honors Pre-Calculus required for AP Calculus?", answer: "MHS recommends completing Honors Pre-Calculus before AP Calculus AB or BC. Some students may qualify without it through exceptional MDTP or placement test scores." },
    ],
    relatedSlugs: [PILLAR_SLUG, "milpitas-high-school-ap-calculus-ab-tutor"],
  }),

  ["mathnasium-milpitas-vs-peer-tutoring"]: p({
    slug: "mathnasium-milpitas-vs-peer-tutoring",
    title: "Mathnasium Milpitas vs Free Peer Tutoring - Which Is Better?",
    metaDescription: "Mathnasium Milpitas vs Telos Tutoring's free peer tutoring. Compare cost, approach, curriculum focus, and results for MUSD students.",
    h1: "Mathnasium Milpitas vs Free Peer Tutoring: Honest Comparison",
    category: "local-area-tutoring-competition",
    contentType: "service",
    schemaType: "Article",
    sections: [
      { heading: "Cost Comparison", body: "Mathnasium Milpitas charges $200-400/month for their programs with registration fees and monthly commitments. Telos Tutoring is 100% free with no fees, no contracts, and no commitments. For families already managing school supplies and activity costs, free tutoring can make a significant difference." },
      { heading: "Approach and Curriculum Focus", body: "Mathnasium uses a proprietary curriculum delivered by professional instructors. Telos Tutoring uses peer-to-peer mentoring from MHS students who recently mastered the MUSD curriculum. Our tutors understand MUSD-specific programs like math acceleration, MATHeasy, and MDTP testing." },
      { heading: "Results for MUSD Students", body: "Both programs can improve math performance. Mathnasium provides structured, consistent instruction. Telos Tutoring provides relatable peer mentors who understand the MUSD system and can share strategies that worked for them." },
    ],
    faqs: [
      { question: "Is Mathnasium worth the cost?", answer: "It depends on your needs and budget. If you can afford it, Mathnasium provides professional instruction. If you want effective, free support with MUSD-specific focus, Telos Tutoring is an excellent alternative." },
    ],
    relatedSlugs: [PILLAR_SLUG, "free-peer-tutoring-milpitas-library"],
  }),

  ["milpitas-high-school-ap-statistics-tutor"]: p({
    slug: "milpitas-high-school-ap-statistics-tutor",
    title: "Milpitas High School AP Statistics Tutor - Free Peer Tutoring",
    metaDescription: "Free AP Statistics tutoring for Milpitas High School students. Explore data, probability, inference, and exam prep with MHS peer tutors.",
    h1: "Milpitas High School AP Statistics Tutor - Free Help",
    category: "milpitas-high-school-core",
    contentType: "service",
    schemaType: "FAQPage",
    sections: [
      { heading: "AP Statistics Support at MHS", body: "AP Statistics covers data analysis, probability, sampling distributions, confidence intervals, and hypothesis testing. Our peer tutors help with conceptual understanding, calculator proficiency, and the AP exam's unique free-response format." },
      { heading: "Real-World Applications", body: "Statistics connects to college majors across business, science, and social sciences. Our tutors emphasize real-world applications to make the material engaging and relevant." },
    ],
    faqs: [
      { question: "Do I need AP Calculus to take AP Statistics?", answer: "No. AP Statistics has Algebra 2 as a prerequisite. It can be taken concurrently with or instead of AP Calculus." },
    ],
    relatedSlugs: [PILLAR_SLUG, "milpitas-high-school-ap-calculus-ab-tutor"],
  }),

  ["musd-after-school-tutoring-free"]: p({
    slug: "musd-after-school-tutoring-free",
    title: "MUSD After School Tutoring Free - Telos Tutoring Program",
    metaDescription: "Free after school tutoring for MUSD students. Math, science, English, and history support at Milpitas Library or online. Sign up in 2 minutes.",
    h1: "Free After School Tutoring for MUSD Students",
    category: "musd-broad-administrative",
    contentType: "service",
    schemaType: "FAQPage",
    sections: [
      { heading: "After School Academic Support", body: "After school hours are the perfect time for focused learning. Our free after school tutoring program helps MUSD students complete homework, prepare for tests, and build confidence in challenging subjects. Sessions run 3:30-6:30 PM weekdays at Milpitas Library." },
      { heading: "Subjects Covered", body: "Math: pre-algebra through AP Calculus. Science: earth science through AP Biology. English: reading comprehension, writing, grammar. History: world history, US history, civics." },
    ],
    faqs: [
      { question: "Can my child attend after school tutoring every day?", answer: "Yes! We offer recurring weekly sessions so your student can build a consistent routine with their dedicated tutor." },
    ],
    relatedSlugs: [PILLAR_SLUG, "free-peer-tutoring-milpitas-library"],
  }),

  ["milpitas-unified-school-district-tutoring-services"]: p({
    slug: "milpitas-unified-school-district-tutoring-services",
    title: "Milpitas Unified School District Tutoring Services - Free Guide",
    metaDescription: "Complete guide to tutoring services across Milpitas Unified School District. Free peer tutoring, after school programs, and academic support for all grade levels.",
    h1: "Milpitas Unified School District Tutoring Services - Complete Guide",
    category: "musd-broad-administrative",
    contentType: "service",
    schemaType: "Article",
    sections: [
      { heading: "Tutoring Options Across MUSD", body: "MUSD students have access to several tutoring options: school-based intervention programs, MATHeasy at MHS, library resources, and Telos Tutoring's free peer-to-peer program. Telos fills a critical gap by providing free, one-on-one support for elementary and middle school students across all 17 MUSD elementary schools." },
      { heading: "How to Access Free Tutoring", body: "Getting started is simple. Visit our registration page, fill out the form with your student's information, and we'll match you with a peer tutor within 48 hours. All sessions are free, and you can attend as often as needed." },
    ],
    faqs: [
      { question: "Does MUSD offer free tutoring through the district?", answer: "MUSD offers some intervention programs through schools, but availability is limited. Telos Tutoring supplements these programs with free, consistent peer tutoring available to all MUSD students." },
    ],
    relatedSlugs: [PILLAR_SLUG, "musd-after-school-tutoring-free", "free-peer-tutoring-milpitas-library"],
  }),

  ["musd-elementary-school-math-enrichment"]: p({
    slug: "musd-elementary-school-math-enrichment",
    title: "MUSD Elementary School Math Enrichment - Free Program",
    metaDescription: "Free math enrichment for MUSD elementary students. Building foundational skills for math acceleration at Burnett, Curtner, Dilworth, Faria, and all MUSD elementary schools.",
    h1: "MUSD Elementary School Math Enrichment - Free Program",
    category: "musd-elementary-schools",
    contentType: "service",
    schemaType: "Article",
    sections: [
      { heading: "Building Strong Foundations", body: "Math enrichment in elementary grades sets the stage for future acceleration. We work with students at all MUSD elementary schools including Burnett, Curtner, Dilworth, Faria, Gomez, Mabel Mattos, McVey, Merryhill, Meyer, Pearl Zanker, Pomeroy, Randall, Sinnott, Spangler, Weller, and Zanker. Our tutors build number sense, problem-solving skills, and mathematical confidence." },
      { heading: "Preparation for Middle School Acceleration", body: "Students who build strong math foundations in elementary school are better positioned for MDTP success and acceleration in middle school. We focus on conceptual understanding rather than memorization." },
    ],
    faqs: [
      { question: "What does a typical enrichment session look like?", answer: "We start with a warm-up activity, review current schoolwork, then work on enrichment problems that build deeper understanding. Sessions are engaging and adapted to each student's level." },
    ],
    relatedSlugs: [PILLAR_SLUG, "musd-middle-school-math-competition-prep"],
  }),

  ["milpitas-high-school-matheasy-program-tutor"]: p({
    slug: "milpitas-high-school-matheasy-program-tutor",
    title: "Milpitas High School MATHeasy Program - Peer Tutoring",
    metaDescription: "Complement MATHeasy at MHS with free one-on-one peer tutoring. Telos Tutoring extends peer support to elementary and middle school students across MUSD.",
    h1: "Milpitas High School MATHeasy Program & Free Peer Tutoring",
    category: "milpitas-high-school-special-programs",
    contentType: "service",
    schemaType: "FAQPage",
    sections: [
      { heading: "About the MATHeasy Program", body: "MATHeasy is Milpitas High School's peer tutoring program where MHS students provide free math support to their peers. The program operates during lunch and after school in designated classrooms. MATHeasy is a great resource for MHS students needing quick help with specific concepts." },
      { heading: "How Telos Complements MATHeasy", body: "Telos Tutoring extends the peer tutoring model to K-8 students across MUSD. While MATHeasy serves MHS students, Telos ensures that younger students also have access to free, high-quality peer tutoring from the same pool of high-achieving MHS students." },
    ],
    faqs: [
      { question: "Is MATHeasy available for non-MHS students?", answer: "MATHeasy is specifically for MHS students. Telos Tutoring provides the same peer tutoring model for K-8 students across MUSD." },
    ],
    relatedSlugs: [PILLAR_SLUG, "milpitas-unified-school-district-tutoring-services"],
  }),

  ["musd-summer-math-acceleration"]: p({
    slug: "musd-summer-math-acceleration",
    title: "MUSD Summer Math Acceleration Program - Free Tutoring",
    metaDescription: "Prepare for MUSD summer math acceleration with free peer tutoring. Bridge gaps, preview next year's content, and get ahead over summer break.",
    h1: "MUSD Summer Math Acceleration - Free Prep Program",
    category: "musd-math-acceleration-placement",
    contentType: "service",
    schemaType: "HowTo",
    sections: [
      { heading: "Summer Math Prep for MUSD Students", body: "Summer is the ideal time to prepare for math acceleration. Without the pressure of daily homework and tests, students can focus on building foundational skills, previewing next year's content, and preparing for MDTP testing. Our summer program includes weekly sessions with a dedicated peer tutor." },
      { heading: "What We Cover in Summer Sessions", body: "Summer sessions focus on three areas: filling gaps from the previous year, building readiness for the next grade level, and MDTP preparation for students planning to test in the fall. Each student receives a personalized learning plan." },
    ],
    faqs: [
      { question: "How often are summer tutoring sessions?", answer: "We recommend 1-2 sessions per week over the summer. Each session is 45-60 minutes. The schedule is flexible based on your family's plans." },
    ],
    relatedSlugs: [PILLAR_SLUG, "musd-math-acceleration-test-dates-2026", "mdtp-practice-test-milpitas"],
  }),

  ["math-pathway-diagram-milpitas-high-school"]: p({
    slug: "math-pathway-diagram-milpitas-high-school",
    title: "MHS Math Pathway Diagram - Course Sequence & Acceleration",
    metaDescription: "Complete math pathway diagram for Milpitas High School. See how math acceleration works from middle school through AP Calculus and Statistics.",
    h1: "Milpitas High School Math Pathway Diagram & Course Sequence",
    category: "musd-math-acceleration-placement",
    contentType: "service",
    schemaType: "Article",
    sections: [
      { heading: "Standard MHS Math Course Sequence", body: "The standard MUSD math sequence is: 6th grade math, 7th grade math, 8th grade math, Algebra 1 (9th), Geometry (10th), Algebra 2 (11th), Pre-Calculus (12th). Through acceleration, students can advance to: Algebra 1 (7th or 8th), Geometry (8th or 9th), Algebra 2 (9th or 10th), Pre-Calculus/Trigonometry (10th or 11th), AP Calculus AB (11th or 12th), AP Calculus BC (12th), AP Statistics (11th or 12th)." },
      { heading: "How Acceleration Changes the Pathway", body: "A student who successfully accelerates in 6th or 7th grade can reach AP Calculus AB by 11th grade and AP Calculus BC by 12th grade. This opens doors for college applications and STEM majors. The earlier a student accelerates, the more advanced math they can take before graduation." },
    ],
    faqs: [
      { question: "Can I take both AP Calculus BC and AP Statistics?", answer: "Yes, many MHS students take both. AP Calculus BC is typically taken junior or senior year, while AP Statistics can be taken concurrently or in a different semester." },
    ],
    relatedSlugs: [PILLAR_SLUG, "how-to-skip-a-math-grade-milpitas-schools", "math-placement-rubric-milpitas-unified"],
  }),

  ["how-to-prepare-for-mdtp-math-test"]: p({
    slug: "how-to-prepare-for-mdtp-math-test",
    title: "How to Prepare for the MDTP Math Test - Free Guide",
    metaDescription: "Step-by-step guide to preparing for the MDTP math test for MUSD acceleration. Practice strategies, topic breakdowns, and free tutoring support.",
    h1: "How to Prepare for the MDTP Math Test - Step-by-Step Guide",
    category: "musd-math-acceleration-placement",
    contentType: "blog",
    schemaType: "Article",
    sections: [
      { heading: "Understanding the MDTP", body: "The MDTP measures mathematical readiness, not grade-level completion. It tests conceptual understanding and problem-solving ability across several domains: numbers and operations, algebra and functions, measurement and geometry, and data analysis and probability. Understanding what the test covers is the first step to effective preparation." },
      { heading: "6-Week Prep Timeline", body: "Week 1-2: Take a diagnostic practice test to identify strengths and weaknesses. Week 3-4: Focus on weak areas through targeted practice. Use Khan Academy, practice worksheets, and tutoring sessions. Week 5: Take another practice test. Adjust focus based on results. Week 6: Final review, timed practice tests, and confidence building." },
      { heading: "Free Resources for MDTP Prep", body: "Telos Tutoring offers free MDTP prep including practice tests, one-on-one tutoring, study guides, and test-taking strategy sessions. Our tutors have taken and passed the MDTP themselves and can share proven strategies for success. <a href='/guide/mdtp-practice-test-milpitas' class='text-primary hover:underline'>Access free MDTP practice tests</a> to get started." },
    ],
    faqs: [
      { question: "How long should my child study for the MDTP?", answer: "We recommend 4-6 weeks of consistent preparation, with 2-3 focused study sessions per week. Cramming is less effective than steady, consistent practice." },
    ],
    relatedSlugs: [PILLAR_SLUG, "mdtp-practice-test-milpitas", "musd-math-acceleration-test-dates-2026"],
  }),

  // ── ALL STUB PAGES ────────────────────────────────────────
  // Category: MUSD Broad & Administrative (stubs)
  ["musd-school-calendar-2026"]: stub("musd-school-calendar-2026", "MUSD School Calendar 2026", "musd-broad-administrative"),
  ["musd-board-meeting-schedule"]: stub("musd-board-meeting-schedule", "MUSD Board Meeting Schedule", "musd-broad-administrative"),
  ["milpitas-unified-school-district-phone-number"]: stub("milpitas-unified-school-district-phone-number", "Milpitas Unified School District Phone Number", "musd-broad-administrative"),
  ["musd-superintendent"]: stub("musd-superintendent", "MUSD Superintendent", "musd-broad-administrative"),
  ["musd-school-boundaries-map"]: stub("musd-school-boundaries-map", "MUSD School Boundaries Map", "musd-broad-administrative"),
  ["milpitas-unified-school-district-budget"]: stub("milpitas-unified-school-district-budget", "Milpitas Unified School District Budget", "musd-broad-administrative"),
  ["musd-school-closure-today"]: stub("musd-school-closure-today", "MUSD School Closure Today", "musd-broad-administrative"),
  ["milpitas-unified-school-district-news"]: stub("milpitas-unified-school-district-news", "Milpitas Unified School District News", "musd-broad-administrative"),
  ["musd-job-openings-teacher"]: stub("musd-job-openings-teacher", "MUSD Job Openings Teacher", "musd-broad-administrative"),
  ["musd-substitute-teacher-application"]: stub("musd-substitute-teacher-application", "MUSD Substitute Teacher Application", "musd-broad-administrative"),
  ["milpitas-unified-school-district-calendar-2026-27"]: stub("milpitas-unified-school-district-calendar-2026-27", "Milpitas Unified School District Calendar 2026-27", "musd-broad-administrative"),
  ["musd-school-board-members"]: stub("musd-school-board-members", "MUSD School Board Members", "musd-broad-administrative"),
  ["milpitas-unified-school-district-special-education"]: stub("milpitas-unified-school-district-special-education", "Milpitas Unified School District Special Education", "musd-broad-administrative"),
  ["musd-english-language-learner-program"]: stub("musd-english-language-learner-program", "MUSD English Language Learner Program", "musd-broad-administrative"),
  ["milpitas-unified-school-district-attendance-policy"]: stub("milpitas-unified-school-district-attendance-policy", "Milpitas Unified School District Attendance Policy", "musd-broad-administrative"),
  ["musd-graduation-requirements"]: stub("musd-graduation-requirements", "MUSD Graduation Requirements", "musd-broad-administrative"),
  ["milpitas-high-school-course-catalog"]: stub("milpitas-high-school-course-catalog", "Milpitas High School Course Catalog", "musd-broad-administrative"),
  ["musd-curriculum-adoption"]: stub("musd-curriculum-adoption", "MUSD Curriculum Adoption", "musd-broad-administrative"),
  ["milpitas-unified-school-district-strategic-plan"]: stub("milpitas-unified-school-district-strategic-plan", "Milpitas Unified School District Strategic Plan", "musd-broad-administrative"),
  ["musd-school-directory"]: stub("musd-school-directory", "MUSD School Directory", "musd-broad-administrative"),
  ["musd-school-schedule-2026"]: stub("musd-school-schedule-2026", "MUSD School Schedule 2026", "musd-broad-administrative"),
  ["milpitas-unified-school-district-enrollment"]: stub("milpitas-unified-school-district-enrollment", "Milpitas Unified School District Enrollment", "musd-broad-administrative"),
  ["musd-summer-school-registration"]: stub("musd-summer-school-registration", "MUSD Summer School Registration", "musd-broad-administrative"),
  ["musd-free-lunch-application"]: stub("musd-free-lunch-application", "MUSD Free Lunch Application", "musd-broad-administrative"),
  ["musd-parent-portal"]: stub("musd-parent-portal", "MUSD Parent Portal", "musd-broad-administrative"),
  ["milpitas-unified-school-district-bell-schedule"]: stub("milpitas-unified-school-district-bell-schedule", "Milpitas Unified School District Bell Schedule", "musd-broad-administrative"),
  ["musd-math-acceleration-rubric-2026"]: stub("musd-math-acceleration-rubric-2026", "MUSD Math Acceleration Rubric 2026", "musd-math-acceleration-placement"),
  ["milpitas-unified-school-district-math-placement-test"]: stub("milpitas-unified-school-district-math-placement-test", "Milpitas Unified School District Math Placement Test", "musd-math-acceleration-placement"),
  ["musd-math-acceleration-parent-letter"]: stub("musd-math-acceleration-parent-letter", "MUSD Math Acceleration Parent Letter", "musd-math-acceleration-placement"),
  ["milpitas-schools-math-pathway-options"]: stub("milpitas-schools-math-pathway-options", "Milpitas Schools Math Pathway Options", "musd-math-acceleration-placement"),
  ["musd-math-acceleration-test-sample-questions"]: stub("musd-math-acceleration-test-sample-questions", "MUSD Math Acceleration Test Sample Questions", "musd-math-acceleration-placement"),
  ["milpitas-unified-school-district-mdtp-test"]: stub("milpitas-unified-school-district-mdtp-test", "Milpitas Unified School District MDTP Test", "musd-math-acceleration-placement"),
  ["musd-math-acceleration-for-6th-graders"]: stub("musd-math-acceleration-for-6th-graders", "MUSD Math Acceleration for 6th Graders", "musd-math-acceleration-placement"),
  ["musd-math-acceleration-parent-guide"]: stub("musd-math-acceleration-parent-guide", "MUSD Math Acceleration Parent Guide", "musd-math-acceleration-placement"),
  ["musd-math-acceleration-data"]: stub("musd-math-acceleration-data", "MUSD Math Acceleration Data", "musd-math-acceleration-placement"),
  ["musd-math-acceleration-resources"]: stub("musd-math-acceleration-resources", "MUSD Math Acceleration Resources", "musd-math-acceleration-placement"),
  ["musd-math-acceleration-online-test"]: stub("musd-math-acceleration-online-test", "MUSD Math Acceleration Online Test", "musd-math-acceleration-placement"),
  ["musd-math-acceleration-information-night"]: stub("musd-math-acceleration-information-night", "MUSD Math Acceleration Information Night", "musd-math-acceleration-placement"),
  ["milpitas-schools-math-acceleration-timeline"]: stub("milpitas-schools-math-acceleration-timeline", "Milpitas Schools Math Acceleration Timeline", "musd-math-acceleration-placement"),
  ["musd-math-acceleration-practice-problems"]: stub("musd-math-acceleration-practice-problems", "MUSD Math Acceleration Practice Problems", "musd-math-acceleration-placement"),
  ["musd-math-acceleration-opt-out"]: stub("musd-math-acceleration-opt-out", "MUSD Math Acceleration Opt-Out", "musd-math-acceleration-placement"),
  ["milpitas-schools-advanced-math-placement"]: stub("milpitas-schools-advanced-math-placement", "Milpitas Schools Advanced Math Placement", "musd-math-acceleration-placement"),
  ["musd-math-acceleration-tutor-needed"]: stub("musd-math-acceleration-tutor-needed", "MUSD Math Acceleration Tutor Needed", "musd-math-acceleration-placement"),
  ["milpitas-schools-math-acceleration-study-tips"]: stub("milpitas-schools-math-acceleration-study-tips", "Milpitas Schools Math Acceleration Study Tips", "musd-math-acceleration-placement"),

  // Elementary school stubs (all 17 schools)
  ["burnett-elementary-milpitas-tutoring"]: stub("burnett-elementary-milpitas-tutoring", "Burnett Elementary School Milpitas Tutoring", "musd-elementary-schools"),
  ["curtner-elementary-milpitas-math-help"]: stub("curtner-elementary-milpitas-math-help", "Curtner Elementary School Milpitas Math Help", "musd-elementary-schools"),
  ["dilworth-elementary-milpitas-reading-tutor"]: stub("dilworth-elementary-milpitas-reading-tutor", "Dilworth Elementary School Milpitas Reading Tutor", "musd-elementary-schools"),
  ["faria-elementary-milpitas-science-tutor"]: stub("faria-elementary-milpitas-science-tutor", "Faria Elementary School Milpitas Science Tutor", "musd-elementary-schools"),
  ["gomez-elementary-milpitas-english-tutor"]: stub("gomez-elementary-milpitas-english-tutor", "Gomez Elementary School Milpitas English Tutor", "musd-elementary-schools"),
  ["mabel-mattos-elementary-homework-help"]: stub("mabel-mattos-elementary-homework-help", "Mabel Mattos Elementary School Homework Help", "musd-elementary-schools"),
  ["mcvey-elementary-milpitas-tutoring"]: stub("mcvey-elementary-milpitas-tutoring", "McVey Elementary School Milpitas Tutoring", "musd-elementary-schools"),
  ["merryhill-elementary-milpitas-tutor"]: stub("merryhill-elementary-milpitas-tutor", "Merryhill Elementary School Milpitas Tutor", "musd-elementary-schools"),
  ["meyer-elementary-milpitas-tutoring"]: stub("meyer-elementary-milpitas-tutoring", "Meyer Elementary School Milpitas Tutoring", "musd-elementary-schools"),
  ["pearl-zanker-elementary-tutor"]: stub("pearl-zanker-elementary-tutor", "Pearl Zanker Elementary School Milpitas Tutor", "musd-elementary-schools"),
  ["pomeroy-elementary-math-competition"]: stub("pomeroy-elementary-math-competition", "Pomeroy Elementary School Math Competition", "musd-elementary-schools"),
  ["randall-elementary-milpitas-tutor"]: stub("randall-elementary-milpitas-tutor", "Randall Elementary School Milpitas Academic Coach", "musd-elementary-schools"),
  ["sinnott-elementary-milpitas-tutor"]: stub("sinnott-elementary-milpitas-tutor", "Sinnott Elementary School Milpitas Learning Center", "musd-elementary-schools"),
  ["spangler-elementary-milpitas-tutor"]: stub("spangler-elementary-milpitas-tutor", "Spangler Elementary School Milpitas Study Skills", "musd-elementary-schools"),
  ["weller-elementary-milpitas-tutor"]: stub("weller-elementary-milpitas-tutor", "Weller Elementary School Milpitas Summer Tutoring", "musd-elementary-schools"),
  ["zanker-elementary-milpitas-tutor"]: stub("zanker-elementary-milpitas-tutor", "Zanker Elementary School Milpitas Peer Tutoring", "musd-elementary-schools"),
  ["musd-elementary-school-tutoring-free"]: stub("musd-elementary-school-tutoring-free", "Milpitas Elementary School Tutoring Free", "musd-elementary-schools"),

  // Middle school stubs
  ["rancho-milpitas-middle-school-algebra-help"]: stub("rancho-milpitas-middle-school-algebra-help", "Rancho Milpitas Middle School Algebra Help", "musd-middle-schools"),
  ["russell-middle-school-math-tutor"]: stub("russell-middle-school-math-tutor", "Russell Middle School Math Tutor", "musd-middle-schools"),
  ["rancho-milpitas-middle-school-science-tutor"]: stub("rancho-milpitas-middle-school-science-tutor", "Rancho Milpitas Middle School Science Tutor", "musd-middle-schools"),
  ["russell-middle-school-english-tutor"]: stub("russell-middle-school-english-tutor", "Russell Middle School English Tutor", "musd-middle-schools"),
  ["rancho-milpitas-middle-school-homework-help"]: stub("rancho-milpitas-middle-school-homework-help", "Rancho Milpitas Middle School Homework Help", "musd-middle-schools"),
  ["russell-middle-school-math-acceleration"]: stub("russell-middle-school-math-acceleration", "Russell Middle School Math Acceleration Program", "musd-middle-schools"),
  ["rancho-milpitas-middle-school-mdtp-test"]: stub("rancho-milpitas-middle-school-mdtp-test", "Rancho Milpitas Middle School MDTP Test", "musd-middle-schools"),
  ["russell-middle-school-math-placement"]: stub("russell-middle-school-math-placement", "Russell Middle School Math Placement", "musd-middle-schools"),
  ["rancho-milpitas-middle-school-summer-program"]: stub("rancho-milpitas-middle-school-summer-program", "Rancho Milpitas Middle School Summer Math Program", "musd-middle-schools"),
  ["russell-middle-school-summer-math"]: stub("russell-middle-school-summer-math", "Russell Middle School Summer Math Camp", "musd-middle-schools"),
  ["rancho-milpitas-middle-school-math-competition"]: stub("rancho-milpitas-middle-school-math-competition", "Rancho Milpitas Middle School Math Competition", "musd-middle-schools"),
  ["russell-middle-school-mathcounts"]: stub("russell-middle-school-mathcounts", "Russell Middle School MATHCOUNTS", "musd-middle-schools"),
  ["rancho-milpitas-middle-school-afterschool-tutoring"]: stub("rancho-milpitas-middle-school-afterschool-tutoring", "Rancho Milpitas Middle School After School Tutoring", "musd-middle-schools"),
  ["russell-middle-school-afterschool-tutoring"]: stub("russell-middle-school-afterschool-tutoring", "Russell Middle School Before School Tutoring", "musd-middle-schools"),
  ["rancho-milpitas-middle-school-free-tutoring"]: stub("rancho-milpitas-middle-school-free-tutoring", "Rancho Milpitas Middle School Free Tutoring", "musd-middle-schools"),
  ["russell-middle-school-free-tutoring"]: stub("russell-middle-school-free-tutoring", "Russell Middle School Free Tutoring", "musd-middle-schools"),
  ["rancho-milpitas-middle-school-best-math-tutor"]: stub("rancho-milpitas-middle-school-best-math-tutor", "Rancho Middle School Best Math Tutor", "musd-middle-schools"),
  ["rancho-milpitas-middle-school-amc-8"]: stub("rancho-milpitas-middle-school-amc-8", "Rancho Milpitas Middle School AMC 8", "musd-middle-schools"),
  ["russell-middle-school-math-help"]: stub("russell-middle-school-math-help", "Russell Middle School Milpitas Math Help", "musd-middle-schools"),

  // MHS Core stubs
  ["milpitas-high-school-algebra-1-tutor"]: stub("milpitas-high-school-algebra-1-tutor", "Milpitas High School Algebra 1 Tutor", "milpitas-high-school-core"),
  ["milpitas-high-school-geometry-tutor"]: stub("milpitas-high-school-geometry-tutor", "Milpitas High School Geometry Tutor", "milpitas-high-school-core"),
  ["milpitas-high-school-algebra-2-tutor"]: stub("milpitas-high-school-algebra-2-tutor", "Milpitas High School Algebra 2 Tutor", "milpitas-high-school-core"),
  ["milpitas-high-school-pre-calculus-tutor"]: stub("milpitas-high-school-pre-calculus-tutor", "Milpitas High School Pre-Calculus Tutor", "milpitas-high-school-core"),
  ["milpitas-high-school-calculus-tutor"]: stub("milpitas-high-school-calculus-tutor", "Milpitas High School Calculus Tutor", "milpitas-high-school-core"),
  ["milpitas-high-school-statistics-tutor"]: stub("milpitas-high-school-statistics-tutor", "Milpitas High School Statistics Tutor", "milpitas-high-school-core"),
  ["milpitas-high-school-biology-tutor"]: stub("milpitas-high-school-biology-tutor", "Milpitas High School Biology Tutor", "milpitas-high-school-core"),
  ["milpitas-high-school-chemistry-tutor"]: stub("milpitas-high-school-chemistry-tutor", "Milpitas High School Chemistry Tutor", "milpitas-high-school-core"),
  ["milpitas-high-school-physics-tutor"]: stub("milpitas-high-school-physics-tutor", "Milpitas High School Physics Tutor", "milpitas-high-school-core"),
  ["milpitas-high-school-english-tutor"]: stub("milpitas-high-school-english-tutor", "Milpitas High School English Tutor", "milpitas-high-school-core"),
  ["milpitas-high-school-world-history-tutor"]: stub("milpitas-high-school-world-history-tutor", "Milpitas High School World History Tutor", "milpitas-high-school-core"),
  ["milpitas-high-school-us-history-tutor"]: stub("milpitas-high-school-us-history-tutor", "Milpitas High School US History Tutor", "milpitas-high-school-core"),
  ["milpitas-high-school-spanish-tutor"]: stub("milpitas-high-school-spanish-tutor", "Milpitas High School Spanish Tutor", "milpitas-high-school-core"),
  ["milpitas-high-school-sat-prep"]: stub("milpitas-high-school-sat-prep", "Milpitas High School SAT Prep Class", "milpitas-high-school-core"),
  ["milpitas-high-school-act-prep"]: stub("milpitas-high-school-act-prep", "Milpitas High School ACT Prep Tutor", "milpitas-high-school-core"),
  ["milpitas-high-school-psat-prep"]: stub("milpitas-high-school-psat-prep", "Milpitas High School PSAT Prep", "milpitas-high-school-core"),
  ["milpitas-high-school-sat-math-tutor"]: stub("milpitas-high-school-sat-math-tutor", "Milpitas High School SAT Math Tutor", "milpitas-high-school-core"),
  ["milpitas-high-school-ap-chemistry-tutor"]: stub("milpitas-high-school-ap-chemistry-tutor", "Milpitas High School AP Chemistry Tutor", "milpitas-high-school-core"),
  ["milpitas-high-school-ap-biology-tutor"]: stub("milpitas-high-school-ap-biology-tutor", "Milpitas High School AP Biology Tutor", "milpitas-high-school-core"),
  ["milpitas-high-school-ap-physics-1-tutor"]: stub("milpitas-high-school-ap-physics-1-tutor", "Milpitas High School AP Physics 1 Tutor", "milpitas-high-school-core"),
  ["milpitas-high-school-ap-world-history-tutor"]: stub("milpitas-high-school-ap-world-history-tutor", "Milpitas High School AP World History Tutor", "milpitas-high-school-core"),
  ["milpitas-high-school-ap-english-tutor"]: stub("milpitas-high-school-ap-english-tutor", "Milpitas High School AP English Tutor", "milpitas-high-school-core"),
  ["milpitas-high-school-essay-writing-help"]: stub("milpitas-high-school-essay-writing-help", "Milpitas High School Essay Writing Help", "milpitas-high-school-core"),
  ["milpitas-high-school-college-application-essay"]: stub("milpitas-high-school-college-application-essay", "Milpitas High School College Application Essay", "milpitas-high-school-core"),
  ["milpitas-high-school-summer-school-tutoring"]: stub("milpitas-high-school-summer-school-tutoring", "Milpitas High School Summer School Tutoring", "milpitas-high-school-core"),
  ["milpitas-high-school-online-tutoring"]: stub("milpitas-high-school-online-tutoring", "Milpitas High School Online Tutoring", "milpitas-high-school-core"),
  ["milpitas-high-school-private-tutor"]: stub("milpitas-high-school-private-tutor", "Milpitas High School Private Tutor Near Me", "milpitas-high-school-core"),
  ["milpitas-high-school-studyskills-tutor"]: stub("milpitas-high-school-studyskills-tutor", "Milpitas High School Study Skills Tutor", "milpitas-high-school-core"),
  ["milpitas-high-school-research-paper-help"]: stub("milpitas-high-school-research-paper-help", "Milpitas High School Research Paper Help", "milpitas-high-school-core"),
  ["milpitas-high-school-computer-science-tutor"]: stub("milpitas-high-school-computer-science-tutor", "Milpitas High School Computer Science Tutor", "milpitas-high-school-core"),

  // MHS Special Programs
  ["milpitas-high-school-avid-program"]: stub("milpitas-high-school-avid-program", "Milpitas High School AVID Program Tutor", "milpitas-high-school-special-programs"),
  ["milpitas-high-school-pbl-project-tutor"]: stub("milpitas-high-school-pbl-project-tutor", "Milpitas High School PBL Project Tutor", "milpitas-high-school-special-programs"),
  ["milpitas-high-school-special-education-tutoring"]: stub("milpitas-high-school-special-education-tutoring", "Milpitas High School Special Education Tutoring", "milpitas-high-school-special-programs"),
  ["milpitas-high-school-iep-tutoring"]: stub("milpitas-high-school-iep-tutoring", "Milpitas High School IEP Tutoring Support", "milpitas-high-school-special-programs"),
  ["milpitas-high-school-english-learner-tutor"]: stub("milpitas-high-school-english-learner-tutor", "Milpitas High School English Learner Tutor", "milpitas-high-school-special-programs"),
  ["milpitas-high-school-robotics-tutor"]: stub("milpitas-high-school-robotics-tutor", "Milpitas High School Robotics Team Tutor", "milpitas-high-school-special-programs"),
  ["milpitas-high-school-debate-team-tutor"]: stub("milpitas-high-school-debate-team-tutor", "Milpitas High School Debate Team Tutor", "milpitas-high-school-special-programs"),
  ["milpitas-high-school-math-club-tutor"]: stub("milpitas-high-school-math-club-tutor", "Milpitas High School Math Club Tutor", "milpitas-high-school-special-programs"),
  ["milpitas-high-school-science-olympiad-tutor"]: stub("milpitas-high-school-science-olympiad-tutor", "Milpitas High School Science Olympiad Tutor", "milpitas-high-school-special-programs"),
  ["milpitas-high-school-free-tutoring-library"]: stub("milpitas-high-school-free-tutoring-library", "Milpitas High School Free Tutoring Library", "milpitas-high-school-special-programs"),
  ["milpitas-high-school-tutoring-center"]: stub("milpitas-high-school-tutoring-center", "Milpitas High School Tutoring Center", "milpitas-high-school-special-programs"),
  ["milpitas-high-school-academic-coach"]: stub("milpitas-high-school-academic-coach", "Milpitas High School Academic Coach", "milpitas-high-school-special-programs"),
  ["milpitas-high-school-college-counselor"]: stub("milpitas-high-school-college-counselor", "Milpitas High School College Counselor", "milpitas-high-school-special-programs"),

  // Virtual & Online Learning
  ["musd-online-tutoring"]: stub("musd-online-tutoring", "MUSD Online Tutoring", "musd-virtual-online-learning"),
  ["musd-zoom-tutoring"]: stub("musd-zoom-tutoring", "MUSD Zoom Tutoring", "musd-virtual-online-learning"),
  ["milpitas-schools-online-homework-help"]: stub("milpitas-schools-online-homework-help", "Milpitas Schools Online Homework Help", "musd-virtual-online-learning"),
  ["musd-google-classroom-help"]: stub("musd-google-classroom-help", "MUSD Google Classroom Help", "musd-virtual-online-learning"),
  ["milpitas-schools-khan-academy-help"]: stub("milpitas-schools-khan-academy-help", "Milpitas Schools Khan Academy Help", "musd-virtual-online-learning"),
  ["musd-online-math-tutor"]: stub("musd-online-math-tutor", "MUSD Online Math Tutor", "musd-virtual-online-learning"),
  ["milpitas-schools-online-science-tutor"]: stub("milpitas-schools-online-science-tutor", "Milpitas Schools Online Science Tutor", "musd-virtual-online-learning"),
  ["musd-online-sat-prep"]: stub("musd-online-sat-prep", "MUSD Online SAT Prep", "musd-virtual-online-learning"),
  ["milpitas-schools-virtual-tutoring"]: stub("milpitas-schools-virtual-tutoring", "Milpitas Schools Virtual Tutoring", "musd-virtual-online-learning"),

  // Local Area
  ["milpitas-high-school-vs-san-jose-tutoring"]: stub("milpitas-high-school-vs-san-jose-tutoring", "Milpitas High School vs San Jose High Schools Tutoring", "local-area-tutoring-competition"),
  ["musd-average-sat-score"]: stub("musd-average-sat-score", "MUSD Average SAT Score", "local-area-tutoring-competition"),
  ["milpitas-high-school-graduation-rate"]: stub("milpitas-high-school-graduation-rate", "Milpitas High School Graduation Rate", "local-area-tutoring-competition"),
  ["musd-parent-reviews"]: stub("musd-parent-reviews", "MUSD Parent Reviews", "local-area-tutoring-competition"),
  ["milpitas-schools-college-acceptance-rate"]: stub("milpitas-schools-college-acceptance-rate", "Milpitas Schools College Acceptance Rate", "local-area-tutoring-competition"),

  // General Tutoring
  ["musd-homework-help"]: stub("musd-homework-help", "MUSD Homework Help", "general-musd-tutoring"),
  ["musd-test-prep"]: stub("musd-test-prep", "MUSD Test Prep", "general-musd-tutoring"),
  ["milpitas-schools-tutoring-near-me"]: stub("milpitas-schools-tutoring-near-me", "Milpitas Schools Tutoring Near Me", "general-musd-tutoring"),
  ["musd-affordable-tutoring"]: stub("musd-affordable-tutoring", "MUSD Affordable Tutoring", "general-musd-tutoring"),
  ["musd-study-tips"]: stub("musd-study-tips", "MUSD Study Tips", "general-musd-tutoring"),
  ["milpitas-schools-test-anxiety-help"]: stub("milpitas-schools-test-anxiety-help", "Milpitas Schools Test Anxiety Help", "general-musd-tutoring"),
  ["musd-time-management"]: stub("musd-time-management", "MUSD Time Management for Students", "general-musd-tutoring"),
  ["musd-private-tutor"]: stub("musd-private-tutor", "MUSD Private Tutor", "general-musd-tutoring"),
  ["milpitas-schools-library-tutor"]: stub("milpitas-schools-library-tutor", "Milpitas Schools Library Tutor", "general-musd-tutoring"),
  ["musd-summer-tutor"]: stub("musd-summer-tutor", "MUSD Summer Tutor", "general-musd-tutoring"),
  ["milpitas-schools-academic-coaching"]: stub("milpitas-schools-academic-coaching", "Milpitas Schools Academic Coaching", "general-musd-tutoring"),
  ["musd-growth-mindset-help"]: stub("musd-growth-mindset-help", "MUSD Growth Mindset for Students", "general-musd-tutoring"),
  ["musd-grades-help"]: stub("musd-grades-help", "MUSD Grades Help", "general-musd-tutoring"),

  // College Prep
  ["musd-college-application-help"]: stub("musd-college-application-help", "MUSD College Application Help", "musd-alumni-college-prep-career"),
  ["milpitas-schools-fafsa-help"]: stub("milpitas-schools-fafsa-help", "Milpitas Schools FAFSA Help", "musd-alumni-college-prep-career"),
  ["musd-scholarship-search-help"]: stub("musd-scholarship-search-help", "MUSD Scholarship Search Help", "musd-alumni-college-prep-career"),
  ["milpitas-schools-college-essay-editing"]: stub("milpitas-schools-college-essay-editing", "Milpitas Schools College Essay Editing", "musd-alumni-college-prep-career"),
  ["musd-gre-prep"]: stub("musd-gre-prep", "MUSD GRE Prep", "musd-alumni-college-prep-career"),
  ["milpitas-schools-resume-help"]: stub("milpitas-schools-resume-help", "Milpitas Schools Resume Help for Students", "musd-alumni-college-prep-career"),
  ["musd-internship-help"]: stub("musd-internship-help", "MUSD Internship Help for Students", "musd-alumni-college-prep-career"),
  ["milpitas-high-school-job-shadow"]: stub("milpitas-high-school-job-shadow", "Milpitas High School Job Shadow Program", "musd-alumni-college-prep-career"),
  ["musd-community-service-hours"]: stub("musd-community-service-hours", "MUSD Community Service Hours for Students", "musd-alumni-college-prep-career"),
  ["milpitas-high-school-alumni"]: stub("milpitas-high-school-alumni", "Milpitas High School Alumni Network", "musd-alumni-college-prep-career"),
  ["musd-transcript-help"]: stub("musd-transcript-help", "MUSD Transcript Help", "musd-alumni-college-prep-career"),
  ["musd-college-interview-prep"]: stub("musd-college-interview-prep", "MUSD College Interview Prep", "musd-alumni-college-prep-career"),
  ["milpitas-high-school-career-center"]: stub("milpitas-high-school-career-center", "Milpitas High School Career Center", "musd-alumni-college-prep-career"),
}

export function getPagesByCategory(category: string): SEOPage[] {
  return Object.values(ALL_PAGES).filter((p) => p.category === category)
}

export function getAllSlugs(): string[] {
  return Object.keys(ALL_PAGES)
}
