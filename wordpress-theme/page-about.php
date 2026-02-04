<?php
/**
 * Template Name: About Page
 * Template for the About page
 *
 * @package ElevateQCS
 * @since 1.0.0
 */

get_header();
?>

<main id="primary" class="site-main">

    <!-- Hero -->
    <section class="page-hero">
        <div class="container">
            <div class="page-hero-content">
                <p class="badge-label">About ElevateQCS</p>
                <h1>Institutional Authority Earned Through Field Experience</h1>
                <p class="page-lead">
                    ElevateQCS was founded in 2026 by senior quality and compliance 
                    architects with hands-on experience designing, implementing, 
                    monitoring, and supporting QMS frameworks across major billion-dollar 
                    U.S. Government contracting programs.
                </p>
            </div>
        </div>
    </section>

    <!-- Stats -->
    <section class="stats-bar">
        <div class="container">
            <div class="stats-grid">
                <div class="stat-item">
                    <div class="stat-value">9+</div>
                    <div class="stat-label">Years Collective Industry Pedigree</div>
                    <div class="stat-subtext">US, EU, Middle East</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value">10,000+</div>
                    <div class="stat-label">Audits Observed & Supported</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value">125+</div>
                    <div class="stat-label">High-Value Contracts Supported</div>
                    <div class="stat-subtext">Including CTIP Plans</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value">€500K–€25M</div>
                    <div class="stat-label">Project Exposure Range</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Narrative -->
    <section class="section section-white">
        <div class="container">
            <div class="content-grid-2">
                <div>
                    <h2>Our Heritage</h2>
                    <div class="prose">
                        <p>
                            Our founding team has spent nearly a decade embedded within 
                            the quality and compliance ecosystems of major defense, 
                            aerospace, and government services contractors. This isn't 
                            theoretical knowledge—it's field-tested experience gained 
                            through direct participation in high-value program execution.
                        </p>
                        <p>
                            We've observed thousands of internal and external audits, 
                            architected quality management systems for contracts spanning 
                            multiple continents, and supported organizations through the 
                            most demanding regulatory environments in the world.
                        </p>
                        <p>
                            This operational experience informs every aspect of our 
                            advisory practice. We understand not just what compliance 
                            frameworks should look like on paper, but how they function 
                            under the pressure of real-world program execution.
                        </p>
                    </div>
                </div>
                <div>
                    <h2>Our Position</h2>
                    <div class="prose">
                        <p>
                            ElevateQCS occupies a deliberate position in the market: we 
                            are neither a certification body nor a regulatory agency. We 
                            are independent advisors who support organizations in building 
                            their own compliance capabilities.
                        </p>
                        <p>
                            This distinction is fundamental to how we operate. We don't 
                            certify—we architect. We don't approve—we advise. We don't 
                            authorize—we support. Our role is to transfer knowledge and 
                            capability to your organization, not to create dependency.
                        </p>
                        <p>
                            Our vendor-neutral stance means we recommend solutions based 
                            solely on your organizational needs. We don't resell software, 
                            take referral fees, or maintain partnerships that could 
                            compromise our objectivity.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Values -->
    <section class="section section-muted">
        <div class="container">
            <div class="section-header">
                <p class="badge-label">Our Values</p>
                <h2>Principles That Guide Every Engagement</h2>
            </div>
            <div class="card-grid-3">
                <div class="card">
                    <div class="card-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="8" r="6"/>
                            <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
                        </svg>
                    </div>
                    <h3>Operational Clarity</h3>
                    <p>We transform complex regulatory requirements into actionable, implementable frameworks that your teams can execute with confidence.</p>
                </div>
                <div class="card">
                    <div class="card-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                            <circle cx="9" cy="7" r="4"/>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                        </svg>
                    </div>
                    <h3>Risk Reduction</h3>
                    <p>Our methodologies are designed to identify, quantify, and systematically address compliance risks before they become audit findings.</p>
                </div>
                <div class="card">
                    <div class="card-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="10"/>
                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
                            <path d="M2 12h20"/>
                        </svg>
                    </div>
                    <h3>Discretion & Confidentiality</h3>
                    <p>Every engagement begins with comprehensive NDAs. Your competitive intelligence and compliance posture remain protected.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="section section-white text-center">
        <div class="container-narrow">
            <h2>Work With Us</h2>
            <p class="section-lead">
                If you're seeking advisory support grounded in real-world experience 
                and delivered with complete discretion, we'd welcome the opportunity 
                to discuss your compliance objectives.
            </p>
            <a href="<?php echo esc_url( get_permalink( get_page_by_path( 'contact' ) ) ); ?>" class="btn btn-accent">
                Request a Consultation
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                </svg>
            </a>
        </div>
    </section>

</main>

<?php
get_footer();
