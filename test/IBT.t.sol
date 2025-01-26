pragma solidity ^0.8.0;

import "forge-std/Test.sol";
import "../src/IBT.sol";

contract IBTTest is Test
{
    IBT token;

    function setUp() public
    {
        token = new IBT();
    }

    function testMint() public
    {
        token.mint(address(this), 1000);
        assertEq(token.balanceOf(address(this)), 1000);
    }

    function testBurn() public
    {
        token.mint(address(this), 1000);
        token.burn(758);
        assertEq(token.balanceOf(address(this)), 758);
    }

    function testOnlyOwnerCanMint() public
    {
        address attacker = address(0x123);
        vm.prank(attacker);

        vm.expectRevert(abi.encodeWithSignature("OwnableUnauthorizedAccount(address)", attacker));
        token.mint(attacker, 1000);
    }
}
