// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/IERC20.sol";


contract BequestERC20{
    
enum Status{
    active,
    inactive,
    executed,
    failed
}

struct will{
    Status status;
    uint id;
    uint currentTime;
    uint dedline;
    uint amt;
    string message;
    string video;
    address from;
    address to;
    address contractAddress;
}

uint public willCount;
mapping(address=>uint[]) public beneficiary;
mapping(address=>uint[]) public testator;
mapping(uint=>will) public idToWill;
will[] public willList;

function signWill(uint _dedline, uint _amt, address _to, address _contractAddress, string memory _message, string memory _video) public{
    will memory temp;
    temp.status = Status.active;
    temp.id = willCount;
    temp.currentTime = block.timestamp;
    temp.dedline = block.timestamp + _dedline;
    temp.amt = _amt;
    temp.from = msg.sender;
    temp.to = _to;
    temp.contractAddress = _contractAddress;
    temp.message = _message;
    temp.video = _video;
    willList.push(temp);
    idToWill[willCount] = temp;
    testator[msg.sender].push(willCount);
    beneficiary[_to].push(willCount);
    willCount++;
}

function editWill(uint _id, uint _dedline, uint _amt) public{

    require(willList[_id].from == msg.sender, "You Can't Edit others will");
    require(willList[_id].status != Status.inactive , "Your Will is inactive");
    require(willList[_id].status != Status.executed , "Your Will is Already Executed");
    require(willList[_id].status != Status.failed , "Your Will is Already failed");

    will storage temp = willList[_id];
    temp.dedline = _dedline;
    temp.amt = _amt;

}

function stopWill(uint _id) public {
        require(willList[_id].status != Status.active , "will is already inactive");
        willList[_id].status = Status.inactive;
}

function resumeWill(uint _id) public {
        require(willList[_id].status == Status.inactive , "will is already active");
        willList[_id].status = Status.active;
}

function executeWill(uint _id) public{

    require(willList[_id].status == Status.active , "will should be active");
    will storage temp = willList[_id];
    require(temp.dedline < block.timestamp , "time is pending");

    uint examt = temp.amt;

    bytes4 BLNC_OF = bytes4(keccak256("balanceOf(address)"));
    bytes4 TRF_FROM = bytes4(keccak256("transferFrom(address,address,uint256)"));

    (bool success1, bytes memory data1) = address(temp.contractAddress).call(abi.encodeWithSelector(BLNC_OF,temp.from));
    if(data1.length == 32){

    uint balance = abi.decode(data1, (uint256));
    if(balance<temp.amt){
        examt = balance;
    }
    (bool success2, bytes memory data2)   = address(temp.contractAddress).call(abi.encodeWithSelector(TRF_FROM,temp.from,temp.to,examt));
    if(success2){
         temp.status = Status.executed;
    }else{
         temp.status = Status.failed;
    }
    }else{
         temp.status = Status.failed;
    }
} 

function execution() public{
    require(willList.length != 0, "No Will yet come");
    for(uint i = 0 ; i < willList.length; i++){
        if(willList[i].dedline < block.timestamp){
            if(willList[i].status == Status.active){
                executeWill(i);
            }
        }
    }
}

}
