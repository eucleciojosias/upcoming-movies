<?php

declare(strict_types=1);

namespace AppTest\TMDb;

/**
 * @author Euclécio Josias Rodrigues <eucjosias@gmail.com>
 */
class GetterTest extends \PHPUnit\Framework\TestCase
{
    public function testReturnsJsonResponse_withPageParam()
    {
        $gateway = $this->prophesize(\App\TMDb\RemoteGateway::class);
        $gateway->request(
            'GET',
            'https://api.movie.org/3/movie/upcoming?page=2&language=en-US&api_key=token'
        )
        ->shouldBeCalled()
        ->willReturn([]);

        $getter = new \App\TMDb\Getter(
            [
                'api_host' => 'https://api.movie.org',
                'language' => 'en-US',
                'api_key' => 'token'
            ],
            $gateway->reveal()
        );

        $request = $this->prophesize(\Psr\Http\Message\ServerRequestInterface::class);
        $request->getAttribute(\Prophecy\Argument::any())->willReturn(2);

        $response = $getter->handle(
            $request->reveal()
        );

        $this->assertInstanceOf(\Zend\Diactoros\Response\JsonResponse::class, $response);
    }
}
