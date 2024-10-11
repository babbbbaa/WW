<?php
// 부모 테마와 자식 테마의 스타일을 불러오는 함수
function wptalk_enqueue_styles() {
    // 부모 테마의 스타일을 지정
    $parent_style = 'astra-style'; // Astra 테마의 스타일 핸들러

    // 부모 테마의 스타일을 불러옴
    wp_enqueue_style( $parent_style, get_template_directory_uri() . '/style.css' );

    // 자식 테마의 스타일을 불러옴 (부모 테마의 스타일을 상속받음)
    wp_enqueue_style( 'child-style', get_stylesheet_directory_uri() . '/style.css', array( $parent_style ), wp_get_theme()->get('Version') );
}

// 부모 및 자식 테마 스타일을 로드하는 함수 실행
add_action('wp_enqueue_scripts', 'wptalk_enqueue_styles');

function enqueue_react_footer() {
    // 번들된 JS 파일을 로드
    wp_enqueue_script(
        'react-footer-bundle',
        get_stylesheet_directory_uri() . '/assets/js/bundle.js',
        array('wp-element'), // 워드프레스의 React와 연동
        filemtime(get_stylesheet_directory() . '/assets/js/bundle.js'),
        true // 푸터에 로드
    );

    // Tailwind CSS 로드
    wp_enqueue_style(
        'tailwind-styles',
        get_stylesheet_directory_uri() . '/assets/css/styles.css',
        array(),
        filemtime(get_stylesheet_directory() . '/assets/css/styles.css')
    );
}

add_action('wp_enqueue_scripts', function() {
    if (wp_script_is('react-footer-bundle', 'enqueued')) {
        error_log('React Footer Bundle JS is enqueued.');
    } else {
        error_log('React Footer Bundle JS is NOT enqueued.');
    }
});



// 리액트 푸터 관련 자바스크립트와 CSS 파일 로드
add_action('wp_enqueue_scripts', 'enqueue_react_footer');
