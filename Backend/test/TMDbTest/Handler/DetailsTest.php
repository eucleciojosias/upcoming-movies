<?php

declare(strict_types=1);

namespace TMDbTest\Handler;

/**
 * @author Euclécio Josias Rodrigues <eucjosias@gmail.com>
 */
class DetailsTest extends \PHPUnit\Framework\TestCase
{
    public function testReturnsJsonResponse_withMovieParam()
    {
        $gateway = $this->prophesize(\TMDb\Handler\RemoteGateway::class);
        $gateway->request('/movie/55','GET')
        ->shouldBeCalled()
        ->willReturn([]);

        $getter = new \TMDb\Handler\Details(
            $gateway->reveal()
        );

        $request = $this->prophesize(\Psr\Http\Message\ServerRequestInterface::class);
        $request->getAttribute(\Prophecy\Argument::any())->willReturn(55);

        $response = $getter->handle(
            $request->reveal()
        );

        $this->assertInstanceOf(\Zend\Diactoros\Response\JsonResponse::class, $response);
    }
}
