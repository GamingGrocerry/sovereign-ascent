<?php
/**
 * ElevateQCS Theme Functions
 *
 * @package ElevateQCS
 * @since 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

/**
 * Define theme constants
 */
define( 'ELEVATEQUCS_VERSION', '1.0.0' );
define( 'ELEVATEQUCS_DIR', get_template_directory() );
define( 'ELEVATEQUCS_URI', get_template_directory_uri() );

/**
 * Theme setup
 */
function elevatequcs_setup() {
    // Add default posts and comments RSS feed links to head.
    add_theme_support( 'automatic-feed-links' );

    // Let WordPress manage the document title.
    add_theme_support( 'title-tag' );

    // Enable support for Post Thumbnails.
    add_theme_support( 'post-thumbnails' );

    // Add custom image sizes
    add_image_size( 'elevatequcs-hero', 1920, 1080, true );
    add_image_size( 'elevatequcs-card', 600, 400, true );

    // Register navigation menus
    register_nav_menus( array(
        'primary'   => esc_html__( 'Primary Menu', 'elevatequcs' ),
        'footer'    => esc_html__( 'Footer Menu', 'elevatequcs' ),
        'legal'     => esc_html__( 'Legal Menu', 'elevatequcs' ),
    ) );

    // Switch default core markup to output valid HTML5.
    add_theme_support( 'html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ) );

    // Add support for custom logo
    add_theme_support( 'custom-logo', array(
        'height'      => 80,
        'width'       => 200,
        'flex-height' => true,
        'flex-width'  => true,
    ) );

    // Add support for responsive embeds
    add_theme_support( 'responsive-embeds' );

    // Add support for editor styles
    add_theme_support( 'editor-styles' );
    add_editor_style( 'assets/css/editor-style.css' );

    // Add support for wide and full alignment
    add_theme_support( 'align-wide' );

    // Custom background support
    add_theme_support( 'custom-background', array(
        'default-color' => 'f8fafc',
    ) );
}
add_action( 'after_setup_theme', 'elevatequcs_setup' );

/**
 * Enqueue scripts and styles
 */
function elevatequcs_scripts() {
    // Google Fonts - Inter and Playfair Display
    wp_enqueue_style(
        'elevatequcs-google-fonts',
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap',
        array(),
        null
    );

    // Main stylesheet
    wp_enqueue_style(
        'elevatequcs-style',
        get_stylesheet_uri(),
        array( 'elevatequcs-google-fonts' ),
        ELEVATEQUCS_VERSION
    );

    // Custom theme scripts
    wp_enqueue_script(
        'elevatequcs-navigation',
        ELEVATEQUCS_URI . '/assets/js/navigation.js',
        array(),
        ELEVATEQUCS_VERSION,
        true
    );

    // Header scroll effect
    wp_enqueue_script(
        'elevatequcs-header',
        ELEVATEQUCS_URI . '/assets/js/header.js',
        array(),
        ELEVATEQUCS_VERSION,
        true
    );

    // Comment reply script
    if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
        wp_enqueue_script( 'comment-reply' );
    }
}
add_action( 'wp_enqueue_scripts', 'elevatequcs_scripts' );

/**
 * Register widget areas
 */
function elevatequcs_widgets_init() {
    register_sidebar( array(
        'name'          => esc_html__( 'Sidebar', 'elevatequcs' ),
        'id'            => 'sidebar-1',
        'description'   => esc_html__( 'Add widgets here.', 'elevatequcs' ),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h4 class="widget-title">',
        'after_title'   => '</h4>',
    ) );

    register_sidebar( array(
        'name'          => esc_html__( 'Footer Widget Area', 'elevatequcs' ),
        'id'            => 'footer-1',
        'description'   => esc_html__( 'Add widgets here to appear in the footer.', 'elevatequcs' ),
        'before_widget' => '<div id="%1$s" class="footer-widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h4 class="footer-widget-title">',
        'after_title'   => '</h4>',
    ) );
}
add_action( 'widgets_init', 'elevatequcs_widgets_init' );

/**
 * Customizer settings
 */
function elevatequcs_customize_register( $wp_customize ) {
    
    // -------------------------------------------------------------------------
    // Hero Section
    // -------------------------------------------------------------------------
    $wp_customize->add_section( 'elevatequcs_hero_section', array(
        'title'    => esc_html__( 'Hero Section', 'elevatequcs' ),
        'priority' => 30,
    ) );

    // Hero Background Image
    $wp_customize->add_setting( 'elevatequcs_hero_image', array(
        'default'           => '',
        'sanitize_callback' => 'esc_url_raw',
    ) );
    $wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize, 'elevatequcs_hero_image', array(
        'label'    => esc_html__( 'Hero Background Image', 'elevatequcs' ),
        'section'  => 'elevatequcs_hero_section',
        'settings' => 'elevatequcs_hero_image',
    ) ) );

    // Hero Badge Text
    $wp_customize->add_setting( 'elevatequcs_hero_badge', array(
        'default'           => 'Independent Advisory Firm',
        'sanitize_callback' => 'sanitize_text_field',
    ) );
    $wp_customize->add_control( 'elevatequcs_hero_badge', array(
        'label'   => esc_html__( 'Hero Badge Text', 'elevatequcs' ),
        'section' => 'elevatequcs_hero_section',
        'type'    => 'text',
    ) );

    // Hero Title
    $wp_customize->add_setting( 'elevatequcs_hero_title', array(
        'default'           => 'Architecting Compliance Excellence for High-Stakes Environments',
        'sanitize_callback' => 'sanitize_text_field',
    ) );
    $wp_customize->add_control( 'elevatequcs_hero_title', array(
        'label'   => esc_html__( 'Hero Title', 'elevatequcs' ),
        'section' => 'elevatequcs_hero_section',
        'type'    => 'textarea',
    ) );

    // Hero Subtitle
    $wp_customize->add_setting( 'elevatequcs_hero_subtitle', array(
        'default'           => 'ElevateQCS delivers vendor-neutral quality management system architecture and compliance program development for Government Contractors and startups operating in complex regulatory landscapes.',
        'sanitize_callback' => 'sanitize_textarea_field',
    ) );
    $wp_customize->add_control( 'elevatequcs_hero_subtitle', array(
        'label'   => esc_html__( 'Hero Subtitle', 'elevatequcs' ),
        'section' => 'elevatequcs_hero_section',
        'type'    => 'textarea',
    ) );

    // CTA Text
    $wp_customize->add_setting( 'elevatequcs_cta_text', array(
        'default'           => 'Request a Confidential Consultation',
        'sanitize_callback' => 'sanitize_text_field',
    ) );
    $wp_customize->add_control( 'elevatequcs_cta_text', array(
        'label'   => esc_html__( 'CTA Button Text', 'elevatequcs' ),
        'section' => 'elevatequcs_hero_section',
        'type'    => 'text',
    ) );

    // CTA URL
    $wp_customize->add_setting( 'elevatequcs_cta_url', array(
        'default'           => '/contact',
        'sanitize_callback' => 'esc_url_raw',
    ) );
    $wp_customize->add_control( 'elevatequcs_cta_url', array(
        'label'   => esc_html__( 'CTA Button URL', 'elevatequcs' ),
        'section' => 'elevatequcs_hero_section',
        'type'    => 'url',
    ) );

    // -------------------------------------------------------------------------
    // Footer Section
    // -------------------------------------------------------------------------
    $wp_customize->add_section( 'elevatequcs_footer_section', array(
        'title'    => esc_html__( 'Footer Settings', 'elevatequcs' ),
        'priority' => 90,
    ) );

    // Footer Description
    $wp_customize->add_setting( 'elevatequcs_footer_description', array(
        'default'           => 'Elevate Quality Compliance Solutions LLC is an independent, vendor-neutral advisory firm specializing in quality management system architecture and compliance program development for high-stakes regulatory environments.',
        'sanitize_callback' => 'sanitize_textarea_field',
    ) );
    $wp_customize->add_control( 'elevatequcs_footer_description', array(
        'label'   => esc_html__( 'Footer Description', 'elevatequcs' ),
        'section' => 'elevatequcs_footer_section',
        'type'    => 'textarea',
    ) );

    // LinkedIn URL
    $wp_customize->add_setting( 'elevatequcs_linkedin_url', array(
        'default'           => 'https://linkedin.com',
        'sanitize_callback' => 'esc_url_raw',
    ) );
    $wp_customize->add_control( 'elevatequcs_linkedin_url', array(
        'label'   => esc_html__( 'LinkedIn URL', 'elevatequcs' ),
        'section' => 'elevatequcs_footer_section',
        'type'    => 'url',
    ) );

    // Disclaimer Text
    $wp_customize->add_setting( 'elevatequcs_disclaimer', array(
        'default'           => 'ElevateQCS is an independent advisory firm. We are not a certification body or a government regulatory agency. All services are advisory in nature and do not constitute legal, certification, or regulatory services.',
        'sanitize_callback' => 'sanitize_textarea_field',
    ) );
    $wp_customize->add_control( 'elevatequcs_disclaimer', array(
        'label'   => esc_html__( 'Footer Disclaimer', 'elevatequcs' ),
        'section' => 'elevatequcs_footer_section',
        'type'    => 'textarea',
    ) );
}
add_action( 'customize_register', 'elevatequcs_customize_register' );

/**
 * Add custom body classes
 */
function elevatequcs_body_classes( $classes ) {
    // Add class if no sidebar
    if ( ! is_active_sidebar( 'sidebar-1' ) ) {
        $classes[] = 'no-sidebar';
    }

    // Add class for front page
    if ( is_front_page() ) {
        $classes[] = 'front-page';
    }

    return $classes;
}
add_filter( 'body_class', 'elevatequcs_body_classes' );

/**
 * Custom excerpt length
 */
function elevatequcs_excerpt_length( $length ) {
    return 25;
}
add_filter( 'excerpt_length', 'elevatequcs_excerpt_length' );

/**
 * Custom excerpt more
 */
function elevatequcs_excerpt_more( $more ) {
    return '&hellip;';
}
add_filter( 'excerpt_more', 'elevatequcs_excerpt_more' );

/**
 * Add schema.org markup for SEO
 */
function elevatequcs_schema_org() {
    if ( is_front_page() ) {
        ?>
        <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Elevate Quality Compliance Solutions LLC",
            "alternateName": "ElevateQCS",
            "description": "Independent advisory firm specializing in quality management system architecture and compliance program development for Government Contractors and startups.",
            "url": "<?php echo esc_url( home_url( '/' ) ); ?>",
            "address": {
                "@type": "PostalAddress",
                "addressCountry": "US",
                "addressRegion": "Delaware"
            },
            "areaServed": "Global",
            "serviceType": [
                "Quality Management System Architecture",
                "CTIP Program Development",
                "Audit & CAPA Advisory"
            ]
        }
        </script>
        <?php
    }
}
add_action( 'wp_head', 'elevatequcs_schema_org' );

/**
 * Security: Remove WordPress version from head
 */
remove_action( 'wp_head', 'wp_generator' );

/**
 * Disable XML-RPC for security
 */
add_filter( 'xmlrpc_enabled', '__return_false' );
