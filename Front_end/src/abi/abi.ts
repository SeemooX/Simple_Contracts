export const sumABI = [
  "function var1() view returns(uint256)",
  "function var2() view returns(uint256)",
  "function addition1() view returns(uint256)",
  "function addition2(uint256 x, uint256 y) pure returns(uint256)",
  "function setVar1(uint256 _var1)",
  "function setVar2(uint256 _var2)"
]

export const ethConversionABI = [
  "function etherToWei(uint256 ethAmount) pure returns (uint256)",
  "function weiToEther(uint256 weiAmount) pure returns (uint256)"
];

export const stringManagementABI = [
  "function setMessage(string _message)",
  "function getMessage() view returns (string)",
  "function concatinate(string a, string b) pure returns (string)",
  "function concatinateWith(string a) view returns (string)",
  "function stringLength(string s) pure returns (uint256)",
  "function compare(string a, string b) pure returns (bool)"
];

export const estPostifABI = [
  "function estPositif(uint256 x) pure returns (bool)"
];