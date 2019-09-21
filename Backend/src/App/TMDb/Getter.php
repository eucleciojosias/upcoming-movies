<?php

declare(strict_types=1);

namespace App\TMDb;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Zend\Diactoros\Response\JsonResponse;
use Psr\Container\ContainerInterface;

/**
 * @author Euclécio Josias Rodrigues <eucjosias@gmail.com>
 */
class Getter implements RequestHandlerInterface
{
    private $apiConfig;
    private $remoteGateway;

    public static function factory(ContainerInterface $container) : RequestHandlerInterface
    {
        $config = $container->get('config');
        return new self(
            $config['tmdb-api'],
            new RemoteGateway()
        );
    }

    public function __construct($apiConfig, $remoteGateway)
    {
        $this->apiConfig = $apiConfig;
        $this->remoteGateway = $remoteGateway;
    }

    public function handle(ServerRequestInterface $request) : ResponseInterface
    {
        $params = [
            'page' => $request->getAttribute('page') ?? 1,
            'language' => $this->apiConfig['language'],
            'api_key' => $this->apiConfig['api_key']
        ];

        $endpoint = '/3/movie/upcoming';
        $uri = sprintf(
            '%s%s?%s',
            $this->apiConfig['api_host'],
            $endpoint,
            http_build_query($params)
        );

        $response = $this->remoteGateway->request('GET', $uri);

        return new JsonResponse($response);
    }
}
