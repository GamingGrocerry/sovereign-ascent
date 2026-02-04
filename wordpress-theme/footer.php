<?php
/**
 * The footer for our theme
 *
 * @package ElevateQCS
 * @since 1.0.0
 */
?>

    <footer id="colophon" class="site-footer">
        
        <!-- Main Footer -->
        <div class="footer-main">
            <div class="container">
                <div class="footer-grid">
                    
                    <!-- Brand Column -->
                    <div class="footer-brand">
                        <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="site-logo" style="margin-bottom: 1.5rem; display: inline-flex;">
                            <div class="logo-icon">E</div>
                            <span class="logo-text" style="color: hsl(210, 40%, 98%);">ElevateQCS</span>
                        </a>
                        <p><?php echo esc_html( get_theme_mod( 'elevatequcs_footer_description', 'Elevate Quality Compliance Solutions LLC is an independent, vendor-neutral advisory firm specializing in quality management system architecture and compliance program development for high-stakes regulatory environments.' ) ); ?></p>
                        <div class="footer-social">
                            <a href="<?php echo esc_url( get_theme_mod( 'elevatequcs_linkedin_url', 'https://linkedin.com' ) ); ?>" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                                    <rect width="4" height="12" x="2" y="9"/>
                                    <circle cx="4" cy="4" r="2"/>
                                </svg>
                                <span>Follow on LinkedIn</span>
                            </a>
                        </div>
                    </div>
                    
                    <!-- Company Links -->
                    <div class="footer-nav">
                        <h4>Company</h4>
                        <?php
                        wp_nav_menu( array(
                            'theme_location' => 'footer',
                            'menu_class'     => '',
                            'container'      => false,
                            'depth'          => 1,
                            'fallback_cb'    => function() {
                                echo '<ul>';
                                echo '<li><a href="' . esc_url( get_permalink( get_page_by_path( 'about' ) ) ) . '">About</a></li>';
                                echo '<li><a href="' . esc_url( get_permalink( get_page_by_path( 'services' ) ) ) . '">Services</a></li>';
                                echo '<li><a href="' . esc_url( get_permalink( get_page_by_path( 'methodology' ) ) ) . '">Methodology</a></li>';
                                echo '<li><a href="' . esc_url( get_permalink( get_page_by_path( 'insights' ) ) ) . '">Insights</a></li>';
                                echo '</ul>';
                            },
                        ) );
                        ?>
                    </div>
                    
                    <!-- Legal Links -->
                    <div class="footer-nav">
                        <h4>Legal</h4>
                        <?php
                        wp_nav_menu( array(
                            'theme_location' => 'legal',
                            'menu_class'     => '',
                            'container'      => false,
                            'depth'          => 1,
                            'fallback_cb'    => function() {
                                echo '<ul>';
                                echo '<li><a href="' . esc_url( get_permalink( get_page_by_path( 'privacy' ) ) ) . '">Privacy Policy</a></li>';
                                echo '<li><a href="' . esc_url( get_permalink( get_page_by_path( 'terms' ) ) ) . '">Terms of Use</a></li>';
                                echo '<li><a href="' . esc_url( get_permalink( get_page_by_path( 'accessibility' ) ) ) . '">Accessibility</a></li>';
                                echo '</ul>';
                            },
                        ) );
                        ?>
                    </div>
                    
                </div>
            </div>
        </div>
        
        <!-- Bottom Bar -->
        <div class="footer-bottom">
            <div class="container">
                <div class="footer-bottom-inner">
                    <p>&copy; <?php echo date( 'Y' ); ?> Elevate Quality Compliance Solutions LLC. All rights reserved.</p>
                    <p>Jurisdiction: Delaware, USA | Global Operations</p>
                </div>
            </div>
        </div>
        
        <!-- Disclaimer -->
        <div class="footer-disclaimer">
            <div class="container">
                <p><?php echo esc_html( get_theme_mod( 'elevatequcs_disclaimer', 'ElevateQCS is an independent advisory firm. We are not a certification body or a government regulatory agency. All services are advisory in nature and do not constitute legal, certification, or regulatory services.' ) ); ?></p>
            </div>
        </div>
        
    </footer>

</div><!-- #page -->

<?php wp_footer(); ?>
</body>
</html>
