<?php

declare(strict_types=1);

namespace TMDbTest\Handler;

/**
 * @author Euclécio Josias Rodrigues <eucjosias@gmail.com>
 */
class UpComingTest extends \PHPUnit\Framework\TestCase
{
    public function testReturnsJsonResponse_withPageParam()
    {
        $gateway = $this->prophesize(\TMDb\Handler\RemoteGateway::class);
        $gateway->request(
            '/movie/upcoming',
            'GET',
            ['page' => 2]
        )
        ->shouldBeCalled()
        ->willReturn([]);

        $getter = new \TMDb\Handler\UpComing(
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
