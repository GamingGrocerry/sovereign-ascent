<?php
/**
 * Template Name: Services - Global Startups
 * Template for the Global Startups services page
 *
 * @package ElevateQCS
 * @since 1.0.0
 */

get_header();

$services = array(
    array(
        'id' => 'qms',
        'icon' => '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>',
        'title' => 'QMS Architecture',
        'subtitle' => 'Quality Management System Design & Implementation',
        'description' => 'We architect enterprise-grade quality management systems that are designed from the ground up to withstand regulatory scrutiny, support operational excellence, and scale with organizational growth.',
        'capabilities' => array(
            'ISO 9001/AS9100 framework architecture',
            'Process mapping and documentation',
            'Quality policy and objective development',
            'Management review system design',
            'Document and record control systems',
            'Internal audit program development',
        ),
        'outcomes' => array(
            'Audit-ready quality infrastructure',
            'Scalable process architecture',
            'Regulatory compliance foundation',
        ),
    ),
    array(
        'id' => 'ctip',
        'icon' => '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
        'title' => 'CTIP as a Service',
        'subtitle' => 'Combating Trafficking in Persons Program Development',
        'description' => 'Comprehensive CTIP program development, implementation, and ongoing monitoring designed to meet FAR 52.222-50 requirements and demonstrate organizational commitment to human rights compliance.',
        'capabilities' => array(
            'CTIP compliance plan development',
            'Awareness training program design',
            'Employee/subcontractor certification processes',
            'Monitoring and reporting mechanisms',
            'Recruitment and wage practice reviews',
            'Supply chain risk assessment',
        ),
        'outcomes' => array(
            'FAR 52.222-50 compliance',
            'Documented due diligence program',
            'Contractually defensible CTIP posture',
        ),
    ),
    array(
        'id' => 'audit',
        'icon' => '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="m9 15 2 2 4-4"/></svg>',
        'title' => 'Audit & CAPA Advisory',
        'subtitle' => 'Audit Readiness & Corrective Action Support',
        'description' => 'Strategic audit preparation and Corrective Action Plan (CAPA) development that transforms compliance gaps into documented improvements and operational strengths.',
        'capabilities' => array(
            'Pre-audit readiness assessments',
            'Mock audit execution',
            'Finding response strategy',
            'Root cause analysis facilitation',
            'CAPA development and tracking',
            'Closure evidence preparation',
        ),
        'outcomes' => array(
            'Reduced audit findings',
            'Systematic issue resolution',
            'Continuous improvement culture',
        ),
    ),
);
?>

<main id="primary" class="site-main">

    <!-- Hero -->
    <section class="page-hero">
        <div class="container">
            <div class="page-hero-content">
                <p class="badge-label">Global Startups</p>
                <h1>Compliance Foundations for High-Growth Startups</h1>
                <p class="page-lead">
                    We support high-growth startups in architecting, implementing, and 
                    monitoring compliance frameworks that scale with your ambitions 
                    and meet the demands of enterprise customers and regulatory environments.
                </p>
            </div>
        </div>
    </section>

    <!-- Independence Doctrine -->
    <section class="disclaimer-bar">
        <div class="container">
            <div class="independence-banner">
                <div>
                    <h3>Vendor-Neutral Advisory</h3>
                    <p>
                        We do not resell software, take referral fees, or maintain partnerships 
                        that could compromise our advisory objectivity.
                    </p>
                </div>
                <a href="<?php echo esc_url( get_permalink( get_page_by_path( 'about' ) ) ); ?>" class="learn-more-link">
                    Learn about our approach
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                    </svg>
                </a>
            </div>
        </div>
    </section>

    <!-- Services Detail -->
    <section class="section section-white">
        <div class="container">
            <div class="services-list">
                <?php foreach ( $services as $index => $service ) : ?>
                    <div id="<?php echo esc_attr( $service['id'] ); ?>" class="service-item <?php echo $index % 2 === 1 ? 'service-item-reverse' : ''; ?>">
                        <div class="service-intro">
                            <div class="service-icon">
                                <?php echo $service['icon']; ?>
                            </div>
                            <h2><?php echo esc_html( $service['title'] ); ?></h2>
                            <p class="service-subtitle"><?php echo esc_html( $service['subtitle'] ); ?></p>
                            <p class="service-description"><?php echo esc_html( $service['description'] ); ?></p>
                            <a href="<?php echo esc_url( get_permalink( get_page_by_path( 'contact' ) ) ); ?>" class="btn btn-accent">
                                Discuss Your Requirements
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                                </svg>
                            </a>
                        </div>
                        <div class="service-details">
                            <div class="card">
                                <h4>Capabilities</h4>
                                <ul class="capability-list">
                                    <?php foreach ( $service['capabilities'] as $cap ) : ?>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/>
                                            </svg>
                                            <?php echo esc_html( $cap ); ?>
                                        </li>
                                    <?php endforeach; ?>
                                </ul>
                            </div>
                            <div class="outcomes-box">
                                <h4>Expected Outcomes</h4>
                                <ul class="outcomes-list">
                                    <?php foreach ( $service['outcomes'] as $outcome ) : ?>
                                        <li>
                                            <span class="outcome-dot"></span>
                                            <?php echo esc_html( $outcome ); ?>
                                        </li>
                                    <?php endforeach; ?>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <?php if ( $index < count( $services ) - 1 ) : ?>
                        <div class="service-divider"></div>
                    <?php endif; ?>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="section section-muted text-center">
        <div class="container-narrow">
            <h2>Start a Confidential Conversation</h2>
            <p class="section-lead">
                Every engagement begins with a comprehensive understanding of your 
                organizational context, compliance objectives, and growth trajectory.
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
