<?php

declare(strict_types=1);

namespace TMDb\Handler;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Zend\Diactoros\Response\JsonResponse;
use Psr\Container\ContainerInterface;

/**
 * @author Euclécio Josias Rodrigues <eucjosias@gmail.com>
 */
class Genre implements RequestHandlerInterface
{
    private $remoteGateway;

    public static function factory(ContainerInterface $container) : RequestHandlerInterface
    {
        $config = $container->get('config');
        return new self(
            new RemoteGateway($config['tmdb-api'])
        );
    }

    public function __construct($remoteGateway)
    {
        $this->remoteGateway = $remoteGateway;
    }

    public function handle(ServerRequestInterface $request) : ResponseInterface
    {
        $response = $this->remoteGateway->request('/genre/movie/list', 'GET');

        return new JsonResponse($response);
    }
}
