pragma ton-solidity >= 0.49.0;

pragma AbiHeader expire;
pragma AbiHeader time;

contract Service {

    address static _owner;

    mapping(uint256 => string) _services;

    constructor() public {
        optional(TvmCell) optSalt = tvm.codeSalt(tvm.code());
        require(optSalt.hasValue());
        (address ServiceRoot) = optSalt.get().toSlice().decode(address);
        require(msg.sender == ServiceRoot);
        tvm.accept();
    }

    function setService(uint256 key, string value) public onlyOwner() {
        require(msg.value >= 0.2 ton);
        _services[key] = value;

        msg.sender.transfer({value:0, flag: 64});
    }

    function deleteService(uint256 key) public onlyOwner() {
        require(msg.value >= 0.15 ton);
        delete _services[key];

        msg.sender.transfer({value:0, flag: 64});
    }

    function destruct() public onlyOwner() {
        require(msg.value >= 0.15 ton);
        selfdestruct(msg.sender);
    }

    function getInfo() public view returns(
        address owner,
        mapping(uint256 => string) services
    ) {
        owner = _owner;
        services = _services;
    }

    modifier onlyOwner() {
        require(msg.sender == _owner);
        _;
    }
    
}