<?php
/**
 * Template Name: Contact Page
 * Template for the Contact page
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
                <p class="badge-label">Contact</p>
                <h1>Request a Confidential Consultation</h1>
                <p class="page-lead">
                    Every engagement begins with a comprehensive understanding of your 
                    organizational context and compliance objectives. Share your 
                    requirements, and we'll respond with a tailored approach.
                </p>
            </div>
        </div>
    </section>

    <!-- Contact Form & Info -->
    <section class="section section-white">
        <div class="container">
            <div class="contact-layout">
                <!-- Form -->
                <div class="contact-form-wrapper">
                    <form class="contact-form" method="post" action="">
                        <?php wp_nonce_field( 'elevatequcs_contact', 'contact_nonce' ); ?>
                        
                        <div class="form-row">
                            <div class="form-group">
                                <label for="name">Full Name *</label>
                                <input type="text" id="name" name="name" required>
                            </div>
                            <div class="form-group">
                                <label for="email">Business Email *</label>
                                <input type="email" id="email" name="email" required>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group">
                                <label for="organization">Organization</label>
                                <input type="text" id="organization" name="organization">
                            </div>
                            <div class="form-group">
                                <label for="inquiry_type">Inquiry Type</label>
                                <select id="inquiry_type" name="inquiry_type">
                                    <option value="">Select a service area</option>
                                    <option value="qms">QMS Architecture</option>
                                    <option value="ctip">CTIP Program Development</option>
                                    <option value="audit">Audit & CAPA Advisory</option>
                                    <option value="general">General Inquiry</option>
                                </select>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="message">How Can We Support Your Organization? *</label>
                            <textarea id="message" name="message" rows="6" required placeholder="Please describe your compliance objectives, current challenges, or specific requirements..."></textarea>
                        </div>

                        <button type="submit" class="btn btn-accent">
                            Submit Confidential Inquiry
                        </button>

                        <p class="form-note">
                            We typically respond within 48 business hours. All inquiries are 
                            treated with strict confidentiality.
                        </p>
                    </form>
                </div>

                <!-- Sidebar -->
                <div class="contact-sidebar">
                    <!-- Trust Points -->
                    <div class="trust-points">
                        <div class="trust-point">
                            <div class="trust-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                                </svg>
                            </div>
                            <div>
                                <h4>NDA-First Engagement</h4>
                                <p>All consultations are protected by comprehensive non-disclosure agreements.</p>
                            </div>
                        </div>
                        <div class="trust-point">
                            <div class="trust-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
                                </svg>
                            </div>
                            <div>
                                <h4>Secure Communications</h4>
                                <p>We use encrypted channels for all client communications and document exchange.</p>
                            </div>
                        </div>
                        <div class="trust-point">
                            <div class="trust-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>
                                </svg>
                            </div>
                            <div>
                                <h4>Project-Based Pricing</h4>
                                <p>Transparent, scope-defined pricing with no hidden fees or ongoing obligations.</p>
                            </div>
                        </div>
                    </div>

                    <!-- Scope Boundaries -->
                    <div class="scope-boundaries">
                        <h4>Scope Boundaries</h4>
                        <p>To ensure clarity of engagement, please note that ElevateQCS does not:</p>
                        <ul>
                            <li>Act as a certification body</li>
                            <li>Replace legal counsel</li>
                            <li>Perform third-party certification audits</li>
                            <li>Represent clients before regulators</li>
                        </ul>
                    </div>

                    <!-- Disclaimer -->
                    <div class="contact-disclaimer">
                        <p>
                            ElevateQCS is an independent advisory firm. We are not a 
                            certification body or a government regulatory agency. All 
                            services are advisory in nature and do not constitute legal, 
                            certification, or regulatory services.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

</main>

<?php
get_footer();
