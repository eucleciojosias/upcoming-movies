<?php

declare(strict_types=1);

namespace TMDb\Handler;

/**
 * @author Euclécio Josias Rodrigues <eucjosias@gmail.com>
 */
class RemoteGateway
{
    private $apiConfig;

    public function __construct($apiConfig)
    {
        $this->apiConfig = $apiConfig;
    }

    public function request(
        string $endpoint,
        string $httpMethod = 'GET',
        array $uriParams = [],
        array $body = []
    ): array {
        $uriParams = array_merge(
            [
                'language' => $this->apiConfig['language'],
                'api_key' => $this->apiConfig['api_key']
            ],
            $uriParams
        );
        $uri = sprintf(
            '%s%s?%s',
            $this->apiConfig['api_host'],
            $endpoint,
            http_build_query($uriParams)
        );

        $opts = [
            'http' => [
                'method' => $httpMethod,
                'content' => $body,
                'ignore_errors' => true,
            ],
        ];
        $context = stream_context_create($opts);
        $result = file_get_contents($uri, false, $context);

        return json_decode($result, true);
    }
}
