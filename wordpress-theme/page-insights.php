<?php
/**
 * Template Name: Insights Page
 * Template for the Insights page
 *
 * @package ElevateQCS
 * @since 1.0.0
 */

get_header();

// Sample articles data - in production, this would come from WordPress posts
$articles = array(
    array(
        'category' => 'Risk Analysis',
        'title' => 'The True Cost of Non-Compliance in Government Contracting',
        'excerpt' => 'Beyond immediate penalties, non-compliance creates cascading risks that can permanently alter an organization\'s competitive position in the federal marketplace.',
        'read_time' => '8 min read',
        'date' => 'January 2026',
    ),
    array(
        'category' => 'Audit Insights',
        'title' => 'Common Patterns in Failed Quality Audits',
        'excerpt' => 'Analysis of recurring themes in audit findings reveals that most failures stem from systemic issues rather than isolated non-conformances.',
        'read_time' => '6 min read',
        'date' => 'January 2026',
    ),
    array(
        'category' => 'Regulatory Landscape',
        'title' => 'CTIP Enforcement: What 2025 Trends Mean for 2026 Compliance',
        'excerpt' => 'Recent enforcement actions signal increased scrutiny of contractor CTIP programs. Organizations should prepare for heightened oversight.',
        'read_time' => '7 min read',
        'date' => 'January 2026',
    ),
    array(
        'category' => 'System Architecture',
        'title' => 'Designing QMS for Scalability: Lessons from High-Growth Contractors',
        'excerpt' => 'Quality management systems that work at $10M often fail at $100M. Here\'s how to architect for growth from the beginning.',
        'read_time' => '10 min read',
        'date' => 'December 2025',
    ),
    array(
        'category' => 'Decision Making',
        'title' => 'A Framework for Compliance Investment Decisions',
        'excerpt' => 'How to evaluate compliance initiatives against organizational priorities using a structured risk-benefit analysis approach.',
        'read_time' => '5 min read',
        'date' => 'December 2025',
    ),
    array(
        'category' => 'Operations',
        'title' => 'Documentation as Competitive Advantage',
        'excerpt' => 'In regulated environments, documentation quality often determines audit outcomes. Best practices for building defensible records.',
        'read_time' => '6 min read',
        'date' => 'November 2025',
    ),
);
?>

<main id="primary" class="site-main">

    <!-- Hero -->
    <section class="page-hero">
        <div class="container">
            <div class="page-hero-content">
                <p class="badge-label">Insights</p>
                <h1>Perspectives on Compliance Excellence</h1>
                <p class="page-lead">
                    Analytical thought leadership on quality management, regulatory 
                    compliance, and the operational realities of high-stakes 
                    contracting environments.
                </p>
            </div>
        </div>
    </section>

    <!-- Articles Grid -->
    <section class="section section-white">
        <div class="container">
            <div class="articles-grid">
                <?php foreach ( $articles as $article ) : ?>
                    <article class="article-card card">
                        <div class="article-category"><?php echo esc_html( $article['category'] ); ?></div>
                        <h3 class="article-title"><?php echo esc_html( $article['title'] ); ?></h3>
                        <p class="article-excerpt"><?php echo esc_html( $article['excerpt'] ); ?></p>
                        <div class="article-meta">
                            <div class="article-read-time">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                                </svg>
                                <?php echo esc_html( $article['read_time'] ); ?>
                            </div>
                            <span class="article-date"><?php echo esc_html( $article['date'] ); ?></span>
                        </div>
                        <div class="article-link">
                            <span>Read article</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="m9 18 6-6-6-6"/>
                            </svg>
                        </div>
                    </article>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- Subscribe CTA -->
    <section class="section section-muted text-center">
        <div class="container-narrow">
            <h2>Stay Informed</h2>
            <p class="section-lead">
                Receive our quarterly analysis of regulatory developments, 
                enforcement trends, and compliance best practices. 
                No promotional content—only substantive insights.
            </p>
            <a href="<?php echo esc_url( get_permalink( get_page_by_path( 'contact' ) ) ); ?>" class="btn btn-accent">
                Subscribe to Insights
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                </svg>
            </a>
        </div>
    </section>

</main>

<?php
get_footer();
