<?php

declare(strict_types=1);

use Zend\ConfigAggregator\ArrayProvider;
use Zend\ConfigAggregator\ConfigAggregator;
use Zend\ConfigAggregator\PhpFileProvider;

// To enable or disable caching, set the `ConfigAggregator::ENABLE_CACHE` boolean in
// `config/autoload/local.php`.
$cacheConfig = [
    'config_cache_path' => 'data/cache/config-cache.php',
];

$aggregator = new ConfigAggregator([
    \Zend\Expressive\Helper\ConfigProvider::class,
    \Zend\HttpHandlerRunner\ConfigProvider::class,
    \Zend\Expressive\Router\ZendRouter\ConfigProvider::class,
    \Zend\Router\ConfigProvider::class,
    \Zend\Validator\ConfigProvider::class,
    new ArrayProvider($cacheConfig),
    \Zend\Expressive\ConfigProvider::class,
    \Zend\Expressive\Router\ConfigProvider::class,
    class_exists(\Zend\Expressive\Swoole\ConfigProvider::class)
        ? \Zend\Expressive\Swoole\ConfigProvider::class
        : function(){ return[]; },
    TMDb\ConfigProvider::class,
    new PhpFileProvider(realpath(__DIR__) . '/autoload/{{,*.}global,{,*.}local}.php'),
    new PhpFileProvider(realpath(__DIR__) . '/development.config.php'),
], $cacheConfig['config_cache_path']);

return $aggregator->getMergedConfig();
