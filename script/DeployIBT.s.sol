pragma solidity ^0.8.0;

import "forge-std/Script.sol";
import "../src/IBT.sol";

contract DeployIBT is Script
{
    function run() external
    {
        uint256 key = vm.envUint("KEY");
        vm.startBroadcast(key);

        IBT ibt = new IBT();
        
        vm.stopBroadcast();
    }
}
