<?php

declare(strict_types=1);

namespace TMDbTest\Handler;

/**
 * @author Euclécio Josias Rodrigues <eucjosias@gmail.com>
 */
class GenreTest extends \PHPUnit\Framework\TestCase
{
    public function testReturnsJsonResponse()
    {
        $gateway = $this->prophesize(\TMDb\Handler\RemoteGateway::class);
        $gateway->request('/genre/movie/list', 'GET',)
            ->shouldBeCalled()
            ->willReturn([]);

        $getter = new \TMDb\Handler\Genre(
            $gateway->reveal()
        );

        $response = $getter->handle(
            $this->prophesize(\Psr\Http\Message\ServerRequestInterface::class)->reveal()
        );

        $this->assertInstanceOf(\Zend\Diactoros\Response\JsonResponse::class, $response);
    }
}
