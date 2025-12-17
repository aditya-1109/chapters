export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="border-b-2 border-black pb-4 mb-12">
          <h2 className="text-3xl md:text-4xl">About Kaivalyam Tax Consulting</h2>
        </div>
        
        <div className="space-y-6 max-w-4xl">
          <p className="leading-relaxed">
            Kaivalyam Tax Consulting is founded and led by <strong>Adv. Rohit</strong>, a practicing advocate specializing in GST and Income Tax laws.
          </p>
          
          <p className="leading-relaxed">
            The firm operates with the understanding that taxation and compliance are legal functions requiring careful interpretation of statutes, rules, and judicial precedents. We assist clients not only in meeting compliance requirements but also in managing legal exposure arising from audits, investigations, and disputes.
          </p>
          
          <div className="pl-6 border-l-4 border-black space-y-3 py-2">
            <p className="leading-relaxed">Each matter is approached with:</p>
            <ul className="space-y-2 list-none">
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Detailed factual and legal analysis</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Strict adherence to statutory provisions</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Jurisprudence-backed drafting and representation</span>
              </li>
            </ul>
          </div>
          
          <p className="leading-relaxed">
            Our objective is to provide clear, lawful, and defensible solutions aligned with the client's business realities.
          </p>
        </div>
      </div>
    </section>
  );
}
