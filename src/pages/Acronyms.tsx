import { useState, useMemo, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const acronyms = [
  { term: "ACO", definition: "Administrative Contracting Officer", context: "A government official responsible for administering a contract after award, including oversight of contractor performance, processing modifications, and resolving contract administration issues. Distinct from the Procuring Contracting Officer (PCO)." },
  { term: "Alliant 3", definition: "GSA Alliant 3 Governmentwide Acquisition Contract", context: "A major GSA GWAC vehicle for federal IT services, enabling agencies to procure complex IT solutions from pre-qualified contractors." },
  { term: "AS9100", definition: "Quality Management System Standard for the Aviation, Space, and Defense Industry", context: "An extension of ISO 9001 specific to aerospace and defense supply chains." },
  { term: "BOA", definition: "Basic Ordering Agreement", context: "A written instrument establishing terms and clauses for future orders of supplies or services, used to streamline procurement when requirements cannot be predetermined. Not a contract itself — orders placed against a BOA become binding contracts." },
  { term: "BPA", definition: "Blanket Purchase Agreement", context: "A simplified acquisition method for filling anticipated repetitive needs for supplies or services by establishing charge accounts with qualified sources." },
  { term: "CAGE", definition: "Commercial and Government Entity Code", context: "A five-character identifier assigned to entities that manufacture or supply items to the federal government, required for SAM.gov registration." },
  { term: "CAPA", definition: "Corrective and Preventive Action", context: "A systematic approach to investigating root causes of nonconformities and preventing recurrence." },
  { term: "CAR", definition: "Corrective Action Request", context: "A formal notice issued during an audit or quality review requiring the organization to identify, document, and resolve a systemic nonconformity within a defined timeframe. Escalation from an NCR to a CAR signals a pattern-level failure." },
  { term: "CAS", definition: "Cost Accounting Standards", context: "Nineteen standards issued by the Cost Accounting Standards Board (CASB) governing measurement, assignment, and allocation of costs to government contracts. Applicable to most negotiated defense contracts over $2 million." },
  { term: "CDRL", definition: "Contract Data Requirements List", context: "A list of deliverable data items required under a government contract, specifying format, schedule, and distribution requirements." },
  { term: "CFR", definition: "Code of Federal Regulations", context: "The codification of the general and permanent rules published in the Federal Register by federal agencies." },
  { term: "CLIN", definition: "Contract Line Item Number", context: "A specific line item in a government contract that identifies the supplies or services being procured and their associated pricing." },
  { term: "CMMC", definition: "Cybersecurity Maturity Model Certification", context: "A Department of Defense framework requiring contractors to meet specific cybersecurity standards to protect Controlled Unclassified Information (CUI)." },
  { term: "CONUS", definition: "Continental United States", context: "The 48 contiguous U.S. states and the District of Columbia, used to define geographic scope in government contracting." },
  { term: "COR", definition: "Contracting Officer's Representative", context: "A government official designated to monitor and oversee contractor performance on behalf of the Contracting Officer." },
  { term: "COTS", definition: "Commercial Off-The-Shelf", context: "Products or solutions that are ready-made and available for purchase by the general public." },
  { term: "CPARS", definition: "Contractor Performance Assessment Reporting System", context: "A government system used to record and report contractor past performance evaluations on federal contracts." },
  { term: "CPFF", definition: "Cost-Plus-Fixed-Fee", context: "A contract type where the contractor is reimbursed for allowable costs plus a fixed fee, commonly used in government contracting for research and development." },
  { term: "CPSR", definition: "Contractor Purchasing System Review", context: "A formal evaluation conducted by DCMA to assess whether a contractor's purchasing system complies with federal acquisition regulations and provides adequate oversight of subcontractor selection, pricing, and performance. A disapproved purchasing system can result in withheld contract payments." },
  { term: "CS3D", definition: "Corporate Sustainability Due Diligence Directive", context: "An EU directive requiring large companies to conduct human rights and environmental due diligence across their operations and supply chains, with civil liability exposure for non-compliance." },
  { term: "CTIP", definition: "Combating Trafficking in Persons", context: "A U.S. federal compliance requirement under FAR 52.222-50 requiring contractors to implement policies and procedures to combat human trafficking." },
  { term: "C3PAO", definition: "CMMC Third-Party Assessor Organization", context: "An accredited organization authorized to conduct CMMC assessments of defense contractors to verify cybersecurity maturity levels." },
  { term: "CUI", definition: "Controlled Unclassified Information", context: "Government-created or -owned information that requires safeguarding or dissemination controls consistent with applicable laws and regulations." },
  { term: "DCAA", definition: "Defense Contract Audit Agency", context: "The Department of Defense agency responsible for auditing defense contractors' financial and accounting practices." },
  { term: "DCMA", definition: "Defense Contract Management Agency", context: "The DoD agency that provides contract administration services for the Department of Defense and other federal agencies." },
  { term: "DFAC", definition: "Dining Facility", context: "A military dining facility providing food services on operational installations, a key functional area in LOGCAP task order performance and site sustainment. DFAC operations are among the most closely scrutinized deliverables under OCONUS contracts." },
  { term: "DFARS", definition: "Defense Federal Acquisition Regulation Supplement", context: "A supplement to the FAR that provides acquisition regulations specific to the Department of Defense." },
  { term: "DFARS 252.204-7012", definition: "Safeguarding Covered Defense Information and Cyber Incident Reporting", context: "The foundational DFARS cybersecurity clause requiring contractors to implement NIST SP 800-171 controls and report cyber incidents. Remains unchanged and in full force as of 2026." },
  { term: "DFARS 252.204-7019", definition: "Notice of NIST SP 800-171 DoD Assessment Requirements (Eliminated)", context: "Former DFARS provision requiring contractors to have a current NIST SP 800-171 assessment. Eliminated as of February 1, 2026, under the FAR overhaul." },
  { term: "DFARS 252.204-7020", definition: "NIST SP 800-171 DoD Assessment Requirements (Renumbered)", context: "Former DFARS clause for DoD assessment requirements. Renumbered to 252.240-7997 as of February 1, 2026. Basic self-assessment and SPRS upload requirements under this framework have been eliminated." },
  { term: "DFARS 252.204-7021", definition: "CMMC Requirements", context: "The CMMC contract clause effective November 10, 2025, requiring prime contractors to ensure subcontractors achieve the appropriate CMMC certification level before CUI or FCI is flowed down to them. The primary vehicle for CMMC flow-down obligations." },
  { term: "DIBCAC", definition: "Defense Industrial Base Cybersecurity Assessment Center", context: "A DoD component that conducts cybersecurity assessments of defense contractors to verify compliance with NIST SP 800-171 and CMMC requirements." },
  { term: "DIS", definition: "Draft International Standard", context: "A stage in the ISO standards development process where the standard is circulated for review and comment before final publication." },
  { term: "DMAIC", definition: "Define, Measure, Analyze, Improve, Control", context: "A data-driven Six Sigma methodology used for process improvement and root-cause analysis." },
  { term: "DoD", definition: "Department of Defense", context: "The federal executive department responsible for coordinating and supervising all agencies and functions of the U.S. government relating to national security." },
  { term: "DPAS", definition: "Defense Priorities and Allocations System", context: "A system that ensures timely availability of industrial resources to meet national defense requirements through priority ratings on contracts." },
  { term: "EAR", definition: "Export Administration Regulations", context: "U.S. regulations administered by the Bureau of Industry and Security governing the export and re-export of commercial and dual-use items." },
  { term: "ECAM", definition: "Elevate Compliance Architecture Methodology", context: "The proprietary five-phase advisory methodology developed by ElevateQCS: Diagnose, Architect, Implement, Embed, Monitor." },
  { term: "EQCS", definition: "Elevate Quality Compliance Solutions", context: "The abbreviation for Elevate Quality Compliance Solutions LLC, the advisory firm operating this website." },
  { term: "ElevateQCS", definition: "Elevate Quality Compliance Solutions (Brand Name)", context: "The commercial brand name under which Elevate Quality Compliance Solutions LLC operates." },
  { term: "EU MDR", definition: "European Union Medical Device Regulation", context: "The EU regulatory framework governing the design, manufacture, and distribution of medical devices within the European market." },
  { term: "FAC", definition: "Federal Acquisition Circular", context: "An official document issued by the FAR Council that amends or updates the Federal Acquisition Regulation, typically identified by year and sequence number (e.g., FAC 2025-06)." },
  { term: "FAPIIS", definition: "Federal Awardee Performance and Integrity Information System", context: "A government database that records contractor performance and integrity information, including trafficking violations, visible to all federal contracting officers with no expiration." },
  { term: "FAR", definition: "Federal Acquisition Regulation", context: "The principal set of rules governing the U.S. government's purchasing of goods and services. FAR compliance is essential for all government contractors." },
  { term: "FAR 52.222-50", definition: "Combating Trafficking in Persons (Mandatory CTIP Clause)", context: "The mandatory FAR clause requiring contractors and subcontractors to implement CTIP compliance programs, including awareness training, reporting mechanisms, and subcontractor flow-down obligations. Triggered by contracts performed outside the United States above $500,000." },
  { term: "FAR 52.244-6", definition: "Subcontracts for Commercial Products and Commercial Services", context: "A mandatory FAR clause requiring prime contractors to include specific terms in their subcontracts, flow down applicable compliance requirements, and ensure subcontractors meet labor, anti-trafficking, and cybersecurity obligations." },
  { term: "FCA", definition: "False Claims Act", context: "A U.S. federal law that imposes liability on persons and companies who defraud government programs, including through supply chain and labour compliance violations." },
  { term: "FCI", definition: "Federal Contract Information", context: "Information not intended for public release that is provided by or generated for the government under a contract." },
  { term: "FDA", definition: "Food and Drug Administration", context: "A U.S. federal agency responsible for regulating food, drugs, medical devices, and other products to ensure safety and efficacy." },
  { term: "FDIS", definition: "Final Draft International Standard", context: "The final stage before an ISO standard is published, where member bodies vote to approve or reject the standard." },
  { term: "FFP", definition: "Firm-Fixed-Price", context: "A contract type where the price is not subject to adjustment based on the contractor's cost experience, placing maximum risk on the contractor." },
  { term: "FISMA", definition: "Federal Information Security Modernization Act", context: "U.S. legislation requiring federal agencies and contractors to develop, document, and implement information security programs." },
  { term: "FOCI", definition: "Foreign Ownership, Control, or Influence", context: "A security concern that arises when a U.S. company has foreign entities with the power to direct or influence its operations." },
  { term: "GDPR", definition: "General Data Protection Regulation", context: "An EU regulation governing data protection and privacy for individuals within the European Union and the European Economic Area." },
  { term: "GFP", definition: "Government-Furnished Property", context: "Property in the possession of, or acquired directly by, the government and subsequently delivered to, or otherwise made available to, a contractor for use in contract performance. Contractors are accountable for GFP under FAR Part 45." },
  { term: "GovCon", definition: "Government Contracting", context: "The industry and practice of companies providing goods and services to government agencies through formal contract vehicles." },
  { term: "GSA", definition: "General Services Administration", context: "A U.S. federal agency that manages government buildings, provides products and communications to federal offices, and develops acquisition policies including GWAC vehicles." },
  { term: "GWAC", definition: "Governmentwide Acquisition Contract", context: "A pre-competed, multiple-award contract vehicle for IT products and services available for use by all federal agencies, such as Alliant 3 and OASIS+." },
  { term: "IATF 16949", definition: "International Automotive Task Force Quality Standard", context: "A quality management system standard for the automotive industry, supplementing ISO 9001." },
  { term: "IDIQ", definition: "Indefinite Delivery/Indefinite Quantity", context: "A contract type that provides for an indefinite quantity of supplies or services during a fixed period, with orders placed as needs arise." },
  { term: "IRS", definition: "Internal Revenue Service", context: "The U.S. federal agency responsible for tax collection and tax law enforcement." },
  { term: "ISO", definition: "International Organization for Standardization", context: "An independent, non-governmental international organization that develops and publishes international standards across industries." },
  { term: "ISO 9001", definition: "Quality Management Systems — Requirements", context: "The international standard specifying requirements for a quality management system. ISO 9001:2015 is the current version; a 2026 revision is expected." },
  { term: "ISO 14001", definition: "Environmental Management Systems — Requirements", context: "The international standard for environmental management systems, helping organizations minimize their environmental impact." },
  { term: "ISO 27001", definition: "Information Security Management Systems — Requirements", context: "The international standard for establishing, implementing, maintaining, and continually improving an information security management system (ISMS)." },
  { term: "ISO 37301", definition: "Compliance Management Systems — Requirements", context: "An international standard providing guidelines for establishing, developing, implementing, and improving a compliance management system." },
  { term: "ISO 45001", definition: "Occupational Health and Safety Management Systems — Requirements", context: "The international standard for occupational health and safety management systems." },
  { term: "ITAR", definition: "International Traffic in Arms Regulations", context: "U.S. regulations controlling the export and import of defense-related articles and services on the U.S. Munitions List, administered by the State Department." },
  { term: "KPI", definition: "Key Performance Indicator", context: "A measurable value that demonstrates how effectively an organization is achieving key business objectives." },
  { term: "LOC", definition: "Letter of Concern", context: "A formal notice issued by a Contracting Officer or Prime Contractor to a subcontractor identifying performance deficiencies short of a cure notice. An LOC signals that contract continuation is at risk and triggers a compliance clock requiring documented corrective response." },
  { term: "LOGCAP", definition: "Logistics Civil Augmentation Program", context: "A U.S. Army program that contracts with civilian companies to provide logistics support, base operations, and sustainment services in OCONUS and contingency environments. LOGCAP V and VI are the current contract vehicles, governing the majority of overseas military base support operations." },
  { term: "LPTA", definition: "Lowest Price Technically Acceptable", context: "A source selection process where the contract is awarded to the lowest-priced offer that meets the minimum technical requirements." },
  { term: "MWR", definition: "Morale, Welfare, and Recreation", context: "Programs and facilities supporting the well-being of military personnel and their families. A common functional area in LOGCAP and OCONUS sustainment task orders, encompassing recreation facilities, entertainment, and support services." },
  { term: "NAICS", definition: "North American Industry Classification System", context: "A standardized code system used by federal agencies to classify business establishments by industry for the purpose of collecting and analyzing statistical data and determining size standards for small business programs." },
  { term: "NCR", definition: "Nonconformance Report", context: "A formal document issued when a product, process, or service fails to meet specified requirements. Multiple NCRs in the same process area typically escalate to a Corrective Action Request (CAR)." },
  { term: "NDA", definition: "Non-Disclosure Agreement", context: "A legally binding contract establishing a confidential relationship between parties. ElevateQCS operates on an NDA-first engagement model." },
  { term: "NIST", definition: "National Institute of Standards and Technology", context: "A U.S. government agency that develops technology, metrics, and standards, including the NIST Cybersecurity Framework." },
  { term: "NIST SP 800-171", definition: "NIST Special Publication 800-171", context: "A NIST publication providing requirements for protecting Controlled Unclassified Information (CUI) in non-federal systems, foundational to CMMC compliance." },
  { term: "OASIS+", definition: "One Acquisition Solution for Integrated Services Plus", context: "A GSA best-in-class GWAC vehicle for complex professional services across multiple functional areas." },
  { term: "OCI", definition: "Organizational Conflict of Interest", context: "A situation where a contractor's existing relationships or interests may provide an unfair competitive advantage or impair objectivity." },
  { term: "OCONUS", definition: "Outside the Continental United States", context: "Geographic designation for locations outside the 48 contiguous U.S. states, relevant for contract performance and CTIP compliance requirements." },
  { term: "ODC", definition: "Other Direct Costs", context: "Costs directly attributable to a contract that are neither labor nor materials — such as travel, subcontractor costs, and equipment. ODCs must be allowable, allocable, and reasonable under FAR Part 31 and are subject to DCAA audit." },
  { term: "OSHA", definition: "Occupational Safety and Health Administration", context: "A U.S. federal agency that ensures safe and healthful working conditions by setting and enforcing standards." },
  { term: "PCO", definition: "Procuring Contracting Officer", context: "The Contracting Officer responsible for the award of a contract, including negotiation of terms and conditions. Distinguished from the Administrative Contracting Officer (ACO) who manages ongoing contract administration." },
  { term: "POA&M", definition: "Plan of Action and Milestones", context: "A document identifying tasks needed to resolve security weaknesses, including resources, milestones, and scheduled completion dates for CMMC and NIST compliance." },
  { term: "POE", definition: "Program & Operational Execution", context: "An ElevateQCS resource and service category focused on active site sustainment, LOGCAP readiness, CAPA response, and rapid recovery from Prime-issued findings (LOC, CAR, NCR) in OCONUS contracting environments." },
  { term: "PWS", definition: "Performance Work Statement", context: "A government document that describes the required work in terms of measurable outcomes and performance standards rather than specific methods." },
  { term: "QASP", definition: "Quality Assurance Surveillance Plan", context: "A government-developed plan that describes how the government will evaluate contractor performance against the requirements in the PWS or SOW." },
  { term: "QMS", definition: "Quality Management System", context: "A formalized system documenting processes, procedures, and responsibilities for achieving quality policies and objectives." },
  { term: "RFI", definition: "Request for Information", context: "A solicitation used by government agencies to gather information from potential suppliers before issuing a formal Request for Proposal." },
  { term: "RFO", definition: "Request for Offer", context: "A solicitation document used in certain federal acquisition contexts to request pricing and technical proposals. In capture strategy, the RFO phase is when contractors finalize teaming arrangements, pricing structures, and competitive differentiation before formal RFP submission." },
  { term: "RFP", definition: "Request for Proposal", context: "A formal solicitation document issued by a government agency inviting contractors to submit proposals for a specific project or service." },
  { term: "SAM", definition: "System for Award Management", context: "The official U.S. government system where entities register to do business with the federal government and receive contract awards." },
  { term: "SBA", definition: "Small Business Administration", context: "A U.S. government agency that provides support to entrepreneurs and small businesses, including guidance on federal contracting." },
  { term: "SLA", definition: "Service Level Agreement", context: "A commitment between a service provider and a client defining the level of service expected, including performance metrics and remedies for non-compliance." },
  { term: "SOC 2", definition: "System and Organization Controls 2", context: "An auditing framework developed by the AICPA for service organizations, evaluating controls related to security, availability, processing integrity, confidentiality, and privacy." },
  { term: "SOP", definition: "Standard Operating Procedure", context: "A set of step-by-step instructions compiled to help workers carry out routine operations consistently and efficiently." },
  { term: "SOW", definition: "Statement of Work", context: "A document that defines project-specific activities, deliverables, and timelines for a contractor providing services to a government agency." },
  { term: "SPRS", definition: "Supplier Performance Risk System", context: "A DoD system that collects and displays contractor performance and risk data, including NIST SP 800-171 self-assessment scores." },
  { term: "SSP", definition: "System Security Plan", context: "A document that describes how an organization meets the security requirements for a system, required for CMMC and NIST SP 800-171 compliance." },
  { term: "SSHP", definition: "Site Safety and Health Plan", context: "A documented safety plan required for OCONUS and construction contracts that identifies site-specific hazards, control measures, emergency procedures, and personnel safety responsibilities in compliance with OSHA and applicable standards." },
  { term: "T&M", definition: "Time-and-Materials", context: "A contract type where payment is based on actual labor hours at specified rates plus actual cost of materials, used when work scope is uncertain." },
  { term: "TAPA", definition: "Truthful Cost or Pricing Data Act (formerly TINA)", context: "U.S. legislation requiring contractors to submit cost or pricing data certified as accurate, complete, and current for negotiated contracts above the threshold. Formerly known as the Truth in Negotiations Act (TINA); renamed by the NDAA of 2017. Relevant to CPSR compliance and pricing audits." },
  { term: "TO", definition: "Task Order", context: "A directive issued against an IDIQ, GWAC, or BPA contract vehicle that authorizes specific work, deliverables, and funding. Task orders define scope, period of performance, and pricing within established contract parameters." },
  { term: "TVPRA", definition: "Trafficking Victims Protection Reauthorization Act", context: "U.S. federal legislation that strengthens protections against human trafficking and establishes penalties for violators." },
  { term: "UEI", definition: "Unique Entity Identifier", context: "A 12-character alphanumeric identifier assigned to entities registered in SAM.gov, replacing the DUNS number for federal contracting." },
  { term: "WBS", definition: "Work Breakdown Structure", context: "A hierarchical decomposition of the total scope of work to accomplish project objectives and create deliverables." },
];

const sortedAcronyms = [...acronyms].sort((a, b) => a.term.localeCompare(b.term));

// Group by first letter
const grouped = sortedAcronyms.reduce<Record<string, typeof acronyms>>((acc, item) => {
  const letter = item.term[0].toUpperCase();
  if (!acc[letter]) acc[letter] = [];
  acc[letter].push(item);
  return acc;
}, {});

const letters = Object.keys(grouped).sort();

export default function Acronyms() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(() => searchParams.get("q") || "");

  // Sync URL when search changes
  useEffect(() => {
    if (searchQuery) {
      setSearchParams({ q: searchQuery }, { replace: true });
    } else {
      setSearchParams({}, { replace: true });
    }
  }, [searchQuery, setSearchParams]);

  const filteredAcronyms = useMemo(() => {
    if (!searchQuery.trim()) return sortedAcronyms;
    const query = searchQuery.toLowerCase();
    return sortedAcronyms.filter(
      (item) =>
        item.term.toLowerCase().includes(query) ||
        item.definition.toLowerCase().includes(query) ||
        item.context.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const filteredGrouped = useMemo(() => {
    return filteredAcronyms.reduce<Record<string, typeof acronyms>>((acc, item) => {
      const letter = item.term[0].toUpperCase();
      if (!acc[letter]) acc[letter] = [];
      acc[letter].push(item);
      return acc;
    }, {});
  }, [filteredAcronyms]);

  const filteredLetters = Object.keys(filteredGrouped).sort();

  return (
    <Layout>
      <SEOHead
        title="Acronyms & Glossary | ElevateQCS Compliance Terminology"
        description="Complete glossary of compliance, quality management, and government contracting acronyms used by ElevateQCS — including ISO, QMS, CTIP, FAR, CMMC, GovCon, and more."
        url="https://elevateqcs.com/acronyms"
        keywords={[
          "compliance acronyms",
          "QMS glossary",
          "government contracting terminology",
          "ISO acronyms",
          "CTIP definition",
          "FAR glossary",
          "CMMC meaning",
          "GovCon terms",
        ]}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "DefinedTermSet",
          name: "ElevateQCS Compliance & Quality Management Acronyms",
          description: "A comprehensive glossary of acronyms and terminology used in quality management, regulatory compliance, and government contracting.",
          url: "https://elevateqcs.com/acronyms",
          publisher: {
            "@type": "Organization",
            name: "Elevate Quality Compliance Solutions LLC",
            url: "https://elevateqcs.com",
          },
          hasDefinedTerm: sortedAcronyms.map((a) => ({
            "@type": "DefinedTerm",
            name: a.term,
            description: `${a.definition}. ${a.context}`,
          })),
        }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary">
        <div className="container-wide relative z-10">
          <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
            Reference
          </p>
          <h1 className="text-primary-foreground mb-6 gold-accent pb-4">
            Acronyms & Glossary
          </h1>
          <p className="text-primary-foreground/70 text-lg max-w-3xl">
            A complete reference of the compliance, quality management, and government 
            contracting acronyms used throughout the ElevateQCS website. Each entry includes 
            a plain-language definition and operational context.
          </p>
        </div>
      </section>

      {/* Search & Quick Nav */}
      <section className="py-6 bg-secondary/30 border-b border-border sticky top-16 z-20">
        <div className="container-wide">
          {/* Search Bar */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search acronyms, definitions, or context..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-10 bg-card"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          
          {/* Letter Navigation */}
          <div className="flex flex-wrap gap-2">
            {letters.map((letter) => {
              const isActive = filteredGrouped[letter]?.length > 0;
              return (
                <a
                  key={letter}
                  href={isActive ? `#letter-${letter}` : undefined}
                  className={`w-9 h-9 rounded-sm border flex items-center justify-center text-sm font-semibold transition-colors ${
                    isActive
                      ? "bg-card border-border hover:bg-accent hover:text-accent-foreground cursor-pointer"
                      : "bg-muted/50 border-muted text-muted-foreground/40 cursor-default"
                  }`}
                  aria-disabled={!isActive}
                >
                  {letter}
                </a>
              );
            })}
          </div>
          
          {/* Results count */}
          {searchQuery && (
            <p className="text-sm text-muted-foreground mt-3">
              {filteredAcronyms.length} {filteredAcronyms.length === 1 ? "result" : "results"} for "{searchQuery}"
            </p>
          )}
        </div>
      </section>

      {/* Glossary Content */}
      <section className="py-16 bg-background">
        <div className="container-wide max-w-4xl">
          {filteredLetters.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                No acronyms found matching "{searchQuery}"
              </p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => setSearchQuery("")}
              >
                Clear Search
              </Button>
            </div>
          ) : (
            filteredLetters.map((letter) => (
              <div key={letter} id={`letter-${letter}`} className="mb-12 scroll-mt-32">
                <h2 className="text-3xl font-serif font-bold text-accent border-b border-border pb-3 mb-6">
                  {letter}
                </h2>
                <dl className="space-y-6">
                  {filteredGrouped[letter].map((item) => (
                    <div key={item.term} className="group">
                      <dt className="text-lg font-semibold">
                        <span className="text-accent">{item.term}</span>
                        <span className="text-muted-foreground font-normal ml-3">
                          — {item.definition}
                        </span>
                      </dt>
                      <dd className="text-muted-foreground text-sm mt-1 ml-0 pl-0">
                        {item.context}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary/30">
        <div className="container-narrow text-center">
          <h2 className="mb-6">Need Clarity on a Compliance Term?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            If you encounter a term or regulation that requires further explanation, 
            our advisory team is available to provide context specific to your operations.
          </p>
          <Button variant="cta" size="xl" asChild>
            <Link to="/contact">
              Contact Our Team
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
