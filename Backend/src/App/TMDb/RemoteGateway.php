<?php

declare(strict_types=1);

namespace App\TMDb;

/**
 * @author Euclécio Josias Rodrigues <eucjosias@gmail.com>
 */
class RemoteGateway
{
    public function request(string $httpMethod, string $uri, array $body = []) : array
    {
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
