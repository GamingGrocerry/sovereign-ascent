<?php
/**
 * The header for our theme
 *
 * @package ElevateQCS
 * @since 1.0.0
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="<?php echo esc_attr( get_bloginfo( 'description' ) ); ?>">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<div id="page" class="site-wrapper">
    <a class="skip-link sr-only" href="#primary"><?php esc_html_e( 'Skip to content', 'elevatequcs' ); ?></a>

    <header id="masthead" class="site-header">
        <div class="container">
            <div class="header-inner">
                
                <!-- Logo -->
                <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="site-logo" rel="home">
                    <?php if ( has_custom_logo() ) : ?>
                        <?php the_custom_logo(); ?>
                    <?php else : ?>
                        <div class="logo-icon">E</div>
                        <span class="logo-text"><?php bloginfo( 'name' ); ?></span>
                    <?php endif; ?>
                </a>

                <!-- Primary Navigation -->
                <nav id="site-navigation" class="main-nav" aria-label="<?php esc_attr_e( 'Primary Menu', 'elevatequcs' ); ?>">
                    
                    <a href="<?php echo esc_url( get_permalink( get_page_by_path( 'about' ) ) ); ?>" class="nav-link">About</a>
                    
                    <!-- Services Dropdown -->
                    <div class="nav-dropdown">
                        <span class="nav-link nav-dropdown-toggle">
                            Services
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="m6 9 6 6 6-6"/>
                            </svg>
                        </span>
                        <div class="nav-dropdown-menu">
                            <a href="<?php echo esc_url( get_permalink( get_page_by_path( 'services/govcon-primes' ) ) ); ?>" class="dropdown-item">
                                <div class="dropdown-item-title">GovCon Primes</div>
                                <div class="dropdown-item-desc">Enterprise compliance for prime contractors</div>
                            </a>
                            <a href="<?php echo esc_url( get_permalink( get_page_by_path( 'services/govcon-subs' ) ) ); ?>" class="dropdown-item">
                                <div class="dropdown-item-title">GovCon Subs</div>
                                <div class="dropdown-item-desc">Flow-down compliance for subcontractors</div>
                            </a>
                            <a href="<?php echo esc_url( get_permalink( get_page_by_path( 'services/startups' ) ) ); ?>" class="dropdown-item">
                                <div class="dropdown-item-title">Global Startups</div>
                                <div class="dropdown-item-desc">Scalable compliance for high-growth companies</div>
                            </a>
                        </div>
                    </div>
                    
                    <a href="<?php echo esc_url( get_permalink( get_page_by_path( 'methodology' ) ) ); ?>" class="nav-link">Methodology</a>
                    
                    <a href="<?php echo esc_url( get_permalink( get_page_by_path( 'insights' ) ) ); ?>" class="nav-link">Insights</a>
                    
                    <a href="<?php echo esc_url( get_permalink( get_page_by_path( 'contact' ) ) ); ?>" class="btn btn-primary">
                        Contact
                    </a>
                </nav>

                <!-- Mobile Menu Toggle -->
                <button class="mobile-menu-toggle" aria-controls="mobile-menu" aria-expanded="false" style="display: none;">
                    <span class="sr-only"><?php esc_html_e( 'Open menu', 'elevatequcs' ); ?></span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="4" x2="20" y1="12" y2="12"/>
                        <line x1="4" x2="20" y1="6" y2="6"/>
                        <line x1="4" x2="20" y1="18" y2="18"/>
                    </svg>
                </button>
                
            </div>
        </div>
    </header>
