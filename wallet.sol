// SPDX-License-Identifier: GPL-3.0
pragma solidity >= 0.5.0 < 0.9.0;

contract wallet{
    string public name = "wallet";
    uint num;

    function setValue(uint _num) public {
        num = _num;
    }

    function getValue() view public returns(uint){
        return num;
    }

    function sendEtherContract() public payable {

    }

    function contractBalance() view public returns(uint){
        return address(this).balance;
    } 

    function senEtherUser(address payable _user) public payable{
        _user.transfer(msg.value);
    }

    function accountBalance(address _address) view public returns(uint){
        return _address.balance;
    }
}