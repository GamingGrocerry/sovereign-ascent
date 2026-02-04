<?php
/**
 * The front page template
 *
 * @package ElevateQCS
 * @since 1.0.0
 */

get_header();
?>

<main id="primary" class="site-main">

    <!-- Hero Section -->
    <section class="hero">
        <?php 
        $hero_image = get_theme_mod( 'elevatequcs_hero_image' );
        if ( $hero_image ) : ?>
            <div class="hero-background" style="background-image: url('<?php echo esc_url( $hero_image ); ?>')"></div>
        <?php endif; ?>
        <div class="hero-overlay"></div>
        
        <div class="container">
            <div class="hero-content animate-fade-up">
                <div class="hero-badge">
                    <span><?php echo esc_html( get_theme_mod( 'elevatequcs_hero_badge', 'Independent Advisory Firm' ) ); ?></span>
                </div>
                
                <h1><?php echo esc_html( get_theme_mod( 'elevatequcs_hero_title', 'Architecting Compliance Excellence for High-Stakes Environments' ) ); ?></h1>
                
                <p class="hero-lead"><?php echo esc_html( get_theme_mod( 'elevatequcs_hero_subtitle', 'ElevateQCS delivers vendor-neutral quality management system architecture and compliance program development for Government Contractors and startups operating in complex regulatory landscapes.' ) ); ?></p>
                
                <div class="hero-actions">
                    <a href="<?php echo esc_url( get_theme_mod( 'elevatequcs_cta_url', '/contact' ) ); ?>" class="btn btn-hero">
                        <?php echo esc_html( get_theme_mod( 'elevatequcs_cta_text', 'Request a Confidential Consultation' ) ); ?>
                    </a>
                    <a href="<?php echo esc_url( get_permalink( get_page_by_path( 'methodology' ) ) ); ?>" class="btn btn-outline" style="border-color: hsla(210, 40%, 98%, 0.3); color: hsl(210, 40%, 98%);">
                        Our Methodology
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Stats Bar -->
    <section class="stats-bar">
        <div class="container">
            <div class="stats-grid">
                <div class="stat-item animate-fade-up">
                    <div class="stat-value">9+</div>
                    <div class="stat-label">Years Collective Industry Pedigree</div>
                </div>
                <div class="stat-item animate-fade-up animate-delay-1">
                    <div class="stat-value">10,000+</div>
                    <div class="stat-label">Audits Observed & Supported</div>
                </div>
                <div class="stat-item animate-fade-up animate-delay-2">
                    <div class="stat-value">125+</div>
                    <div class="stat-label">High-Value Contracts Supported</div>
                </div>
                <div class="stat-item animate-fade-up animate-delay-3">
                    <div class="stat-value">€25M</div>
                    <div class="stat-label">Maximum Project Exposure</div>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section class="section">
        <div class="container">
            <div class="grid-2" style="align-items: center; gap: 4rem;">
                <div>
                    <div class="section-divider"></div>
                    <h2>Institutional Pedigree in High-Stakes Compliance</h2>
                    <p style="margin-top: 1.5rem;">
                        ElevateQCS was founded by senior quality and compliance architects with hands-on experience designing, 
                        implementing, and monitoring QMS frameworks across major Government Contracting programs.
                    </p>
                    <p style="margin-top: 1rem;">
                        Our team has supported organizations navigating FAR requirements, DCAA audits, 
                        and international compliance mandates across sectors including defense, aerospace, and regulated technology.
                    </p>
                    <a href="<?php echo esc_url( get_permalink( get_page_by_path( 'about' ) ) ); ?>" class="btn btn-outline" style="margin-top: 1.5rem;">
                        Learn More About Us
                    </a>
                </div>
                <div style="display: flex; flex-direction: column; gap: 1rem;">
                    <div class="card">
                        <h4 style="margin-bottom: 0.5rem;">Vendor-Neutral Advisory</h4>
                        <p style="font-size: 0.9375rem;">Independent recommendations without conflicts of interest from software or consulting partnerships.</p>
                    </div>
                    <div class="card">
                        <h4 style="margin-bottom: 0.5rem;">Confidential Engagement</h4>
                        <p style="font-size: 0.9375rem;">NDA-first approach with secure communications and discreet project handling.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Overview -->
    <section class="section" style="background-color: hsl(var(--muted) / 0.3);">
        <div class="container">
            <div class="section-header text-center" style="max-width: 640px; margin: 0 auto 3rem;">
                <div class="section-divider" style="margin-left: auto; margin-right: auto;"></div>
                <h2 class="section-title">Advisory Services</h2>
                <p class="section-lead">Specialized compliance architecture for organizations navigating complex regulatory requirements.</p>
            </div>
            
            <div class="grid-3">
                <div class="card">
                    <div class="card-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                        </svg>
                    </div>
                    <h3>QMS Architecture</h3>
                    <p>Design and implementation of quality management systems aligned with ISO 9001, AS9100, and industry-specific requirements using our proven ECAM methodology.</p>
                </div>
                
                <div class="card">
                    <div class="card-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                        </svg>
                    </div>
                    <h3>CTIP as a Service</h3>
                    <p>Comprehensive Combating Trafficking in Persons program development, implementation, and monitoring supporting FAR 52.222-50 compliance.</p>
                </div>
                
                <div class="card">
                    <div class="card-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <line x1="16" y1="13" x2="8" y2="13"></line>
                            <line x1="16" y1="17" x2="8" y2="17"></line>
                            <polyline points="10 9 9 9 8 9"></polyline>
                        </svg>
                    </div>
                    <h3>Audit & CAPA Advisory</h3>
                    <p>Expert guidance on audit preparation, corrective action implementation, and continuous improvement initiatives for sustained compliance.</p>
                </div>
            </div>
            
            <div class="text-center" style="margin-top: 3rem;">
                <a href="<?php echo esc_url( get_permalink( get_page_by_path( 'services/startups' ) ) ); ?>" class="btn btn-primary">
                    Explore Our Services
                </a>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="hero" style="min-height: auto; padding: 5rem 0;">
        <div class="hero-overlay" style="background: hsl(var(--navy));"></div>
        <div class="container" style="position: relative; z-index: 10;">
            <div class="text-center" style="max-width: 700px; margin: 0 auto;">
                <h2 style="color: hsl(var(--primary-foreground)); margin-bottom: 1rem;">Ready to Elevate Your Compliance Posture?</h2>
                <p style="color: hsl(var(--primary-foreground) / 0.8); font-size: 1.125rem; margin-bottom: 2rem;">
                    Schedule a confidential consultation to discuss your compliance challenges and discover how our advisory services can help.
                </p>
                <a href="<?php echo esc_url( get_permalink( get_page_by_path( 'contact' ) ) ); ?>" class="btn btn-hero">
                    Request a Confidential Consultation
                </a>
            </div>
        </div>
    </section>

</main>

<?php
get_footer();
