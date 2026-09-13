/**
 * Counts how many requests landed within the trailing 3000ms window.
 */
export class RecentCounter {
  private requests: number[];

  constructor(){
    this.requests = [];
  }

  ping(t: number): number {
    this.requests.push(t);

    while(t - 3000 > this.requests[0]!) {
      this.requests.shift();
    }

    
    return this.requests.length;
  }
}
