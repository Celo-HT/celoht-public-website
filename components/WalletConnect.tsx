export async function getTransfers(address: string) {
  return fetch(`https://api.celoscan.io/api?address=${address}`);
}