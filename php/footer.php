<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after.
 *
 * @package Astra
 * @since 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

astra_content_bottom(); 
?>
	</div> <!-- ast-container -->
	</div><!-- #content -->
<?php 
	astra_content_after();
	astra_footer_before();
	astra_footer();
	astra_footer_after(); 
?>
	</div><!-- #page -->
<?php 
	astra_body_bottom();    
?>

<div id="react-footer"></div> <!-- React 컴포넌트가 렌더링될 위치 -->

<?php wp_footer(); ?> <!-- WordPress에서 필요로 하는 wp_footer() 함수 -->
</body>
</html>
