<?php

declare(strict_types=1);

use Psr\Container\ContainerInterface;
use Zend\Expressive\Application;
use Zend\Expressive\MiddlewareFactory;

return function (Application $app, MiddlewareFactory $factory, ContainerInterface $container) : void {
    $app->get('/upcoming-movies[/:page]', TMDb\Handler\UpComing::class, 'upcoming');
    $app->get('/get-genres', TMDb\Handler\Genre::class, 'genre');
};
