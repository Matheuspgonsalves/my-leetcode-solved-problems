/**
 * Counts how many requests landed within the trailing 3000ms window.
 */
export class RecentCounter {
  private requests: number[] = [];

  ping(t: number): number {
    this.requests.push(t);
    return this.requests.length;
  }
}
