pragma ton-solidity >= 0.49.0;

pragma AbiHeader time;
pragma AbiHeader expire;

import "../Service.sol";

contract ServiceResolver {

    TvmCell _codeService;

    function resolveCodeHashService() public view returns(uint256) {
        return tvm.hash(_buildServiceCode());
    }

    function resolveService(address owner) public view returns(address addrService) {
        TvmCell code = _buildServiceCode();
        TvmCell state = _buildServiceState(code, owner);
        uint256 hashState = tvm.hash(state);
        addrService = address.makeAddrStd(0, hashState);
    }

    function _buildServiceCode() internal view returns(TvmCell) {
        TvmBuilder salt;
        salt.store(address(this));
        return tvm.setCodeSalt(_codeService, salt.toCell());
    }

    function _buildServiceState(TvmCell code, address owner) internal view returns(TvmCell) {
        return tvm.buildStateInit({
            contr: Service,
            varInit: {_owner: owner},
            code: code
        });
    }

}