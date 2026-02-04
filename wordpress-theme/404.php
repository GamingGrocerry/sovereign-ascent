<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @package ElevateQCS
 * @since 1.0.0
 */

get_header();
?>

<main id="primary" class="site-main">

    <section class="error-404">
        <div class="container">
            <div class="error-content">
                <h1 class="error-code">404</h1>
                <p class="error-message">Oops! Page not found</p>
                <p class="error-description">
                    The page you are looking for might have been removed, 
                    had its name changed, or is temporarily unavailable.
                </p>
                <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="btn btn-accent">
                    Return to Home
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                    </svg>
                </a>
            </div>
        </div>
    </section>

</main>

<?php
get_footer();
