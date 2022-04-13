pragma ton-solidity >= 0.49.0;

pragma AbiHeader time;
pragma AbiHeader expire;

import "./resolvers/ServiceResolver.sol";

contract ServiceRoot is ServiceResolver {

    constructor(TvmCell codeService) public {
        tvm.accept();

        _codeService = codeService;
    }

    function createService() public {
        require(msg.value >= 0.3 ton);

        TvmCell code = _buildServiceCode();
        TvmCell state = _buildServiceState(code, msg.sender);

        new Service {
            stateInit: state,
            value: 0.2 ton
        } ();

        msg.sender.transfer({value:0, flag: 64});
    }

}