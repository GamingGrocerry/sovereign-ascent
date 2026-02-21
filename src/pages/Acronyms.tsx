import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const acronyms = [
  { term: "AS9100", definition: "Quality Management System Standard for the Aviation, Space, and Defense Industry", context: "An extension of ISO 9001 specific to aerospace and defense supply chains." },
  { term: "CAPA", definition: "Corrective and Preventive Action", context: "A systematic approach to investigating root causes of nonconformities and preventing recurrence." },
  { term: "CFR", definition: "Code of Federal Regulations", context: "The codification of the general and permanent rules published in the Federal Register by federal agencies." },
  { term: "CMMC", definition: "Cybersecurity Maturity Model Certification", context: "A Department of Defense framework requiring contractors to meet specific cybersecurity standards to protect Controlled Unclassified Information (CUI)." },
  { term: "COTS", definition: "Commercial Off-The-Shelf", context: "Products or solutions that are ready-made and available for purchase by the general public." },
  { term: "CPARS", definition: "Contractor Performance Assessment Reporting System", context: "A government system used to record and report contractor past performance evaluations on federal contracts." },
  { term: "CTIP", definition: "Combating Trafficking in Persons", context: "A U.S. federal compliance requirement under FAR 52.222-50 requiring contractors to implement policies and procedures to combat human trafficking." },
  { term: "CUI", definition: "Controlled Unclassified Information", context: "Government-created or -owned information that requires safeguarding or dissemination controls consistent with applicable laws and regulations." },
  { term: "DCAA", definition: "Defense Contract Audit Agency", context: "The Department of Defense agency responsible for auditing defense contractors' financial and accounting practices." },
  { term: "DCMA", definition: "Defense Contract Management Agency", context: "The DoD agency that provides contract administration services for the Department of Defense and other federal agencies." },
  { term: "DFARS", definition: "Defense Federal Acquisition Regulation Supplement", context: "A supplement to the FAR that provides acquisition regulations specific to the Department of Defense." },
  { term: "DIS", definition: "Draft International Standard", context: "A stage in the ISO standards development process where the standard is circulated for review and comment before final publication." },
  { term: "DMAIC", definition: "Define, Measure, Analyze, Improve, Control", context: "A data-driven Six Sigma methodology used for process improvement and root-cause analysis." },
  { term: "DoD", definition: "Department of Defense", context: "The federal executive department responsible for coordinating and supervising all agencies and functions of the U.S. government relating to national security." },
  { term: "EQCS", definition: "Elevate Quality Compliance Solutions", context: "The abbreviation for Elevate Quality Compliance Solutions LLC, the advisory firm operating this website." },
  { term: "ElevateQCS", definition: "Elevate Quality Compliance Solutions (Brand Name)", context: "The commercial brand name under which Elevate Quality Compliance Solutions LLC operates." },
  { term: "FAR", definition: "Federal Acquisition Regulation", context: "The principal set of rules governing the U.S. government's purchasing of goods and services. FAR compliance is essential for all government contractors." },
  { term: "FDIS", definition: "Final Draft International Standard", context: "The final stage before an ISO standard is published, where member bodies vote to approve or reject the standard." },
  { term: "FOCI", definition: "Foreign Ownership, Control, or Influence", context: "A security concern that arises when a U.S. company has foreign entities with the power to direct or influence its operations." },
  { term: "GovCon", definition: "Government Contracting", context: "The industry and practice of companies providing goods and services to government agencies through formal contract vehicles." },
  { term: "IATF 16949", definition: "International Automotive Task Force Quality Standard", context: "A quality management system standard for the automotive industry, supplementing ISO 9001." },
  { term: "IRS", definition: "Internal Revenue Service", context: "The U.S. federal agency responsible for tax collection and tax law enforcement." },
  { term: "ISO", definition: "International Organization for Standardization", context: "An independent, non-governmental international organization that develops and publishes international standards across industries." },
  { term: "ISO 9001", definition: "Quality Management Systems — Requirements", context: "The international standard specifying requirements for a quality management system. ISO 9001:2015 is the current version; a 2026 revision is expected." },
  { term: "ISO 14001", definition: "Environmental Management Systems — Requirements", context: "The international standard for environmental management systems, helping organizations minimize their environmental impact." },
  { term: "ISO 27001", definition: "Information Security Management Systems — Requirements", context: "The international standard for establishing, implementing, maintaining, and continually improving an information security management system (ISMS)." },
  { term: "ISO 37301", definition: "Compliance Management Systems — Requirements", context: "An international standard providing guidelines for establishing, developing, implementing, and improving a compliance management system." },
  { term: "ISO 45001", definition: "Occupational Health and Safety Management Systems — Requirements", context: "The international standard for occupational health and safety management systems." },
  { term: "KPI", definition: "Key Performance Indicator", context: "A measurable value that demonstrates how effectively an organization is achieving key business objectives." },
  { term: "NIST", definition: "National Institute of Standards and Technology", context: "A U.S. government agency that develops technology, metrics, and standards, including the NIST Cybersecurity Framework." },
  { term: "NDA", definition: "Non-Disclosure Agreement", context: "A legally binding contract establishing a confidential relationship between parties. ElevateQCS operates on an NDA-first engagement model." },
  { term: "OCI", definition: "Organizational Conflict of Interest", context: "A situation where a contractor's existing relationships or interests may provide an unfair competitive advantage or impair objectivity." },
  { term: "OSHA", definition: "Occupational Safety and Health Administration", context: "A U.S. federal agency that ensures safe and healthful working conditions by setting and enforcing standards." },
  { term: "QMS", definition: "Quality Management System", context: "A formalized system documenting processes, procedures, and responsibilities for achieving quality policies and objectives." },
  { term: "RFI", definition: "Request for Information", context: "A solicitation used by government agencies to gather information from potential suppliers before issuing a formal Request for Proposal." },
  { term: "RFP", definition: "Request for Proposal", context: "A formal solicitation document issued by a government agency inviting contractors to submit proposals for a specific project or service." },
  { term: "RLS", definition: "Row Level Security", context: "A database-level security mechanism that restricts data access based on user identity or role." },
  { term: "SAM", definition: "System for Award Management", context: "The official U.S. government system where entities register to do business with the federal government and receive contract awards." },
  { term: "SBA", definition: "Small Business Administration", context: "A U.S. government agency that provides support to entrepreneurs and small businesses, including guidance on federal contracting." },
  { term: "SOP", definition: "Standard Operating Procedure", context: "A set of step-by-step instructions compiled to help workers carry out routine operations consistently and efficiently." },
  { term: "TVPRA", definition: "Trafficking Victims Protection Reauthorization Act", context: "U.S. federal legislation that strengthens protections against human trafficking and establishes penalties for violators." },
  { term: "UEI", definition: "Unique Entity Identifier", context: "A 12-character alphanumeric identifier assigned to entities registered in SAM.gov, replacing the DUNS number for federal contracting." },
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

      {/* Quick Nav */}
      <section className="py-6 bg-secondary/30 border-b border-border sticky top-16 z-20">
        <div className="container-wide">
          <div className="flex flex-wrap gap-2">
            {letters.map((letter) => (
              <a
                key={letter}
                href={`#letter-${letter}`}
                className="w-9 h-9 rounded-sm bg-card border border-border flex items-center justify-center text-sm font-semibold hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                {letter}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Glossary Content */}
      <section className="py-16 bg-background">
        <div className="container-wide max-w-4xl">
          {letters.map((letter) => (
            <div key={letter} id={`letter-${letter}`} className="mb-12 scroll-mt-32">
              <h2 className="text-3xl font-serif font-bold text-accent border-b border-border pb-3 mb-6">
                {letter}
              </h2>
              <dl className="space-y-6">
                {grouped[letter].map((item) => (
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
          ))}
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
