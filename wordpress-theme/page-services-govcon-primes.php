<?php
/**
 * Template Name: Services - GovCon Primes
 * Template for the GovCon Prime Contractors services page
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
                <p class="badge-label">GovCon Prime Contractors</p>
                <h1>Enterprise Compliance for Prime Contractors</h1>
                <p class="page-lead">
                    Comprehensive compliance architecture and advisory services designed 
                    for prime contractors managing complex government programs with 
                    multi-tiered supply chain responsibilities.
                </p>
            </div>
        </div>
    </section>

    <!-- Coming Soon -->
    <section class="section section-white coming-soon-section">
        <div class="container">
            <div class="coming-soon-content">
                <div class="coming-soon-icons">
                    <div class="coming-soon-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
                        </svg>
                    </div>
                    <div class="coming-soon-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
                        </svg>
                    </div>
                    <div class="coming-soon-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="m9 15 2 2 4-4"/>
                        </svg>
                    </div>
                </div>
                <p class="badge-label">Coming Soon</p>
                <h2>Prime Contractor Advisory Services</h2>
                <p class="coming-soon-intro">
                    We are developing specialized advisory services tailored to the unique 
                    compliance challenges faced by prime contractors in government contracting.
                </p>
                <p class="coming-soon-details">
                    Our upcoming services will address FAR/DFARS compliance, supply chain 
                    risk management, CTIP program oversight, and enterprise QMS architecture 
                    for multi-contract environments.
                </p>
                <a href="<?php echo esc_url( get_permalink( get_page_by_path( 'contact' ) ) ); ?>" class="btn btn-accent">
                    Express Interest
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                    </svg>
                </a>
            </div>
        </div>
    </section>

    <!-- Value Preview -->
    <section class="section section-muted">
        <div class="container">
            <div class="value-preview-grid">
                <div class="value-preview-item">
                    <h4>Supply Chain Compliance</h4>
                    <p>
                        End-to-end visibility and compliance monitoring across your 
                        subcontractor network.
                    </p>
                </div>
                <div class="value-preview-item">
                    <h4>Program-Level QMS</h4>
                    <p>
                        Scalable quality management systems designed for major 
                        government program requirements.
                    </p>
                </div>
                <div class="value-preview-item">
                    <h4>CTIP Oversight</h4>
                    <p>
                        Comprehensive trafficking prevention programs with 
                        subcontractor certification management.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="section section-white text-center">
        <div class="container-narrow">
            <h2>Be Among the First to Know</h2>
            <p class="section-lead">
                Register your interest to receive priority access when our 
                Prime Contractor advisory services launch.
            </p>
            <a href="<?php echo esc_url( get_permalink( get_page_by_path( 'contact' ) ) ); ?>" class="btn btn-outline">
                Contact Us
            </a>
        </div>
    </section>

</main>

<?php
get_footer();
