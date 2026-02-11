<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 *
 * @package ElevateQCS
 * @since 1.0.0
 */

get_header();
?>

<main id="primary" class="site-main">

    <?php if ( is_front_page() ) : ?>
        
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
                    <div class="stat-item">
                        <div class="stat-value">9+</div>
                        <div class="stat-label">Years Collective Industry Pedigree</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-value">1,000+</div>
                        <div class="stat-label">Audits Observed & Supported</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-value">125+</div>
                        <div class="stat-label">High-Value Contracts Supported</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-value">€25M</div>
                        <div class="stat-label">Maximum Project Exposure</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Services Overview -->
        <section class="section">
            <div class="container">
                <div class="section-header">
                    <div class="section-divider"></div>
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
                        <p>Design and implementation of quality management systems aligned with ISO 9001 and industry-specific requirements.</p>
                    </div>
                    
                    <div class="card">
                        <div class="card-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                            </svg>
                        </div>
                        <h3>CTIP as a Service</h3>
                        <p>Comprehensive Combating Trafficking in Persons program development supporting FAR 52.222-50 compliance.</p>
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
                        <p>Expert guidance on audit preparation, corrective action implementation, and continuous improvement initiatives.</p>
                    </div>
                </div>
            </div>
        </section>

    <?php else : ?>

        <?php if ( have_posts() ) : ?>

            <?php if ( is_archive() || is_search() ) : ?>
                <header class="section">
                    <div class="container">
                        <div class="section-header">
                            <div class="section-divider"></div>
                            <?php
                            the_archive_title( '<h1 class="section-title">', '</h1>' );
                            the_archive_description( '<p class="section-lead">', '</p>' );
                            ?>
                        </div>
                    </div>
                </header>
            <?php endif; ?>

            <section class="section">
                <div class="container">
                    <div class="grid-2">
                        <?php while ( have_posts() ) : the_post(); ?>
                            <article id="post-<?php the_ID(); ?>" <?php post_class( 'card' ); ?>>
                                <?php if ( has_post_thumbnail() ) : ?>
                                    <a href="<?php the_permalink(); ?>">
                                        <?php the_post_thumbnail( 'medium_large', array( 'style' => 'width: 100%; height: auto; margin-bottom: 1rem; border-radius: var(--radius);' ) ); ?>
                                    </a>
                                <?php endif; ?>
                                
                                <h3><a href="<?php the_permalink(); ?>" style="color: inherit; text-decoration: none;"><?php the_title(); ?></a></h3>
                                
                                <p><?php echo wp_trim_words( get_the_excerpt(), 20 ); ?></p>
                                
                                <a href="<?php the_permalink(); ?>" class="btn btn-outline" style="margin-top: 1rem;">Read More</a>
                            </article>
                        <?php endwhile; ?>
                    </div>

                    <?php the_posts_pagination( array(
                        'prev_text' => '&larr; Previous',
                        'next_text' => 'Next &rarr;',
                    ) ); ?>
                </div>
            </section>

        <?php else : ?>

            <section class="section">
                <div class="container">
                    <div class="coming-soon">
                        <div class="coming-soon-content">
                            <h1>Nothing Found</h1>
                            <p>It seems we can't find what you're looking for. Perhaps searching can help.</p>
                            <?php get_search_form(); ?>
                        </div>
                    </div>
                </div>
            </section>

        <?php endif; ?>

    <?php endif; ?>

</main>

<?php
get_footer();
